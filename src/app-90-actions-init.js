/* ==========================================================================
   URO 90 — Ações globais, exportações, temporizadores e inicialização
   ========================================================================== */

/* ------------------------------ Feedback / arquivos ------------------------------ */
function toast(message, kind) {
  let wrap = $(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const el = document.createElement("div");
  el.className = "toast " + (kind === "err" ? "err" : "ok");
  el.innerHTML = icon(kind === "err" ? "alert" : "check", "") + "<span>" + esc(message) + "</span>";
  wrap.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transform = "translateY(6px)"; }, 2600);
  setTimeout(() => el.remove(), 3000);
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime || "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function csvCell(value) {
  return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
}
function toCsv(rows) {
  return "\ufeff" + rows.map((r) => r.map(csvCell).join(";")).join("\r\n");
}
function stripHtml(html) {
  const d = document.createElement("div");
  d.innerHTML = html || "";
  return (d.textContent || "").replace(/\s+/g, " ").trim();
}
function stamp() { return ymd(new Date()); }

function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

/* ------------------------------ Exportações ------------------------------ */
function exportPlanCsv() {
  const plan = buildPlan();
  if (!plan.valid) return toast("Não há plano válido para exportar. Ajuste a data e o horário.", "err");
  const rows = [["data", "inicio", "fim", "minutos", "tipo", "titulo", "descricao", "topico", "concluido"]];
  plan.blocks.forEach((b) => rows.push([
    ymd(new Date(b.start)), fmtTime(b.start), fmtTime(b.end), b.minutes, b.type,
    b.title, b.desc, b.topicId ? TOPIC_BY_ID[b.topicId].title : "", b.done ? "sim" : "não"
  ]));
  downloadFile("uro90-plano-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Plano exportado em CSV.", "ok");
}

function exportQuestionsCsv() {
  const rows = [["id", "banco", "modulo_ap2", "origem", "area", "topico", "dificuldade", "enunciado", "A", "B", "C", "D", "E", "gabarito", "comentario", "fonte", "tentativas", "ultima_resposta", "ultimo_resultado"]];
  QUESTIONS.forEach((q) => {
    const a = lastAttempt(q.id);
    const ap2Mod = q.ap2Module && AP2_BY_ID[q.ap2Module] ? AP2_BY_ID[q.ap2Module].code : "";
    rows.push([
      q.id, q.bank === "ap2" ? "AP2 2026.2" : "amplo", ap2Mod, q.origin || "",
      AREA_BY_ID[q.area].name, TOPIC_BY_ID[q.topicId].title, q.difficulty, q.stem,
      ...[0, 1, 2, 3, 4].map((i) => q.options[i] || ""),
      "ABCDE"[q.answer], q.comment, q.source, attemptsOf(q.id).length,
      a && a.choice != null ? "ABCDE"[a.choice] : "", a ? (a.correct ? "acerto" : "erro") : ""
    ]);
  });
  downloadFile("uro90-questoes-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Banco de questões exportado.", "ok");
}

function exportAp2Csv() {
  if (!AP2_QUESTIONS.length) return toast("Não há questões AP2 para exportar.", "err");
  const rows = [["id", "modulo", "modulo_titulo", "origem", "enunciado", "A", "B", "C", "D", "E", "gabarito", "comentario", "atualizacao_2026", "fonte", "tentativas", "acuracia", "ultimo_resultado"]];
  AP2_QUESTIONS.forEach((q) => {
    const a = lastAttempt(q.id);
    const attempts = attemptsOf(q.id);
    const acc = attempts.length ? Math.round((attempts.filter((x) => x.correct).length / attempts.length) * 100) + "%" : "";
    const mod = AP2_BY_ID[q.ap2Module];
    rows.push([
      q.id, mod ? mod.code : q.ap2Module, mod ? mod.title : "", q.origin || "", q.stem,
      ...[0, 1, 2, 3, 4].map((i) => q.options[i] || ""),
      "ABCDE"[q.answer], q.comment, q.caveat || "", q.source, attempts.length, acc,
      a ? (a.correct ? "acerto" : "erro") : ""
    ]);
  });
  downloadFile("uro90-ap2-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Trilha AP2 exportada em CSV.", "ok");
}

function exportCardsTsv() {
  const rows = [["Pergunta", "Resposta", "Tags", "Topico", "Area", "Banco", "Modulo_AP2"]];
  CARDS.forEach((c) => rows.push([
    stripHtml(c.front), stripHtml(c.back), (c.tags || []).join(" "),
    TOPIC_BY_ID[c.topicId].title, AREA_BY_ID[TOPIC_BY_ID[c.topicId].area].name,
    c.ap2Module ? "AP2 2026.2" : "amplo",
    c.ap2Module && AP2_BY_ID[c.ap2Module] ? AP2_BY_ID[c.ap2Module].code : ""
  ]));
  downloadFile("uro90-flashcards-" + stamp() + ".tsv", rows.map((r) => r.join("\t")).join("\n"), "text/tab-separated-values;charset=utf-8");
  toast("Flashcards exportados em TSV.", "ok");
}

function exportErrorsCsv() {
  const list = errorQuestions();
  if (!list.length) return toast("Não há erros pendentes para exportar.", "err");
  const rows = [["area", "topico", "enunciado", "sua_resposta", "gabarito", "comentario", "fonte", "regra_de_ouro", "erros_acumulados"]];
  list.forEach((q) => {
    const a = lastAttempt(q.id);
    rows.push([
      AREA_BY_ID[q.area].name, TOPIC_BY_ID[q.topicId].title, q.stem,
      a && a.choice != null ? "ABCDE"[a.choice] : "em branco", "ABCDE"[q.answer],
      q.comment, q.source, (state.errors[q.id] && state.errors[q.id].note) || "",
      attemptsOf(q.id).filter((x) => !x.correct).length
    ]);
  });
  downloadFile("uro90-erros-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Caderno de erros exportado.", "ok");
}

function exportCasesTxt() {
  const parts = ["URO 90 — CASOS CLÍNICOS", "Exportado em " + new Date().toLocaleString("pt-BR"), ""];
  CASES.forEach((c) => {
    const rec = caseRecord(c.id);
    const cs = caseScore(c.id);
    parts.push("=".repeat(72));
    parts.push(c.title.toUpperCase() + " (" + AREA_BY_ID[c.area].name + ")");
    parts.push("Rubrica: " + cs.score.toFixed(1).replace(".", ",") + " / " + cs.max.toFixed(0));
    parts.push("");
    parts.push("ENUNCIADO:");
    parts.push(stripHtml(c.prompt));
    parts.push("");
    parts.push("SUA RESPOSTA:");
    parts.push((rec.answer || "(sem resposta)").trim());
    parts.push("");
    parts.push("AUTOAVALIAÇÃO POR CRITÉRIO:");
    c.rubric.forEach((r, i) => parts.push("- " + r.label + ": " + (Number((rec.scores || [])[i]) || 0).toFixed(1).replace(".", ",") + "/" + r.max.toFixed(1).replace(".", ",")));
    parts.push("");
  });
  downloadFile("uro90-casos-" + stamp() + ".txt", parts.join("\r\n"), "text/plain;charset=utf-8");
  toast("Casos exportados em TXT.", "ok");
}

function exportMaterialsCsv() {
  const rows = [["id", "titulo", "organizacao", "tipo", "url", "nota", "tags"]];
  MATERIALS.forEach((m) => rows.push([m.id, m.title, m.org, m.type, m.url, m.note, m.tags.join(" ")]));
  downloadFile("uro90-materiais-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Biblioteca de materiais exportada.", "ok");
}

function exportParetoCsv() {
  const ranking = paretoRanking();
  const max = Math.max.apply(null, ranking.map((r) => r.score)) || 1;
  const rows = [["rank", "topico", "area", "temperatura", "prioridade_normalizada", "tentativas", "acuracia", "aula_concluida"]];
  ranking.forEach((r, i) => {
    const ts = topicStats(r.topic.id);
    rows.push([
      i + 1, r.topic.title, AREA_BY_ID[r.topic.area].name, TEMP_LABEL[r.topic.temp],
      Math.round((r.score / max) * 100), ts.attempts,
      ts.accuracy == null ? "" : Math.round(ts.accuracy * 100) + "%", lessonDone(r.topic.id) ? "sim" : "não"
    ]);
  });
  downloadFile("uro90-pareto-" + stamp() + ".csv", toCsv(rows), "text/csv;charset=utf-8");
  toast("Ranking Pareto exportado.", "ok");
}

function exportJson() {
  downloadFile("uro90-backup-" + stamp() + ".json", JSON.stringify(state, null, 2), "application/json;charset=utf-8");
  toast("Backup completo gerado.", "ok");
}

/* ------------------------------ Simulado ------------------------------ */
function startSim(mode) {
  if (state.activeSim) { go("#/simulado"); return; }
  const order = pickSimQuestions();
  if (!order.length) return toast("O banco não tem questões suficientes para montar o simulado.", "err");
  const now = nowMs();
  state.activeSim = {
    id: "sim-" + now,
    mode: mode === "estudo" ? "estudo" : "oficial",
    order,
    answers: {},
    flags: {},
    createdAt: now,
    runningSince: now,
    elapsed: 0,
    endsAt: now + 60 * 60000,
    paused: false
  };
  ui.simIndex = 0;
  ui.simResult = null;
  ui.simFinishing = false;
  saveState();
  go("#/simulado");
  toast(mode === "estudo" ? "Simulado em modo estudo iniciado." : "Simulado oficial iniciado: 60 minutos.", "ok");
}

function finishSim(auto) {
  const sim = state.activeSim;
  if (!sim || ui.simFinishing) return;
  ui.simFinishing = true;
  const answered = Object.keys(sim.answers || {}).length;
  const blank = sim.order.length - answered;
  if (!auto && blank > 0) {
    const ok = window.confirm("Ainda há " + blank + " questão(ões) em branco. Em branco conta como erro e pode zerar uma área. Finalizar mesmo assim?");
    if (!ok) { ui.simFinishing = false; return; }
  }
  const at = nowMs();
  sim.order.forEach((qid) => {
    const q = Q_BY_ID[qid];
    if (!q) return;
    const choice = sim.answers[qid];
    const correct = choice === q.answer;
    state.questions[qid] = state.questions[qid] || {};
    const attempts = state.questions[qid].attempts || [];
    attempts.push({ choice: choice == null ? null : choice, correct, at, source: "simulado" });
    state.questions[qid].attempts = attempts;
  });
  sim.finishedAt = at;
  sim.elapsed = simElapsedMs(sim);
  sim.runningSince = null;
  state.sims = state.sims || [];
  state.sims.push(sim);
  state.activeSim = null;
  ui.simResult = sim.id;
  ui.simFinishing = false;
  saveState();
  renderShell();
  if (ui.route === "simulado") renderView();
  toast(auto ? "Tempo esgotado. Simulado corrigido automaticamente." : "Simulado finalizado e corrigido.", auto ? "err" : "ok");
}

function pauseSim() {
  const sim = state.activeSim;
  if (!sim || sim.mode !== "estudo") return;
  if (sim.paused) {
    sim.runningSince = nowMs();
    sim.paused = false;
  } else {
    sim.elapsed = simElapsedMs(sim);
    sim.runningSince = null;
    sim.paused = true;
  }
  saveState();
  renderView();
}

/* ------------------------------ Configuração ------------------------------ */
function saveSettings() {
  const name = ($("#set-name") || {}).value || "";
  const examAt = ($("#set-exam") || {}).value || "";
  const startTime = ($("#set-start") || {}).value || "";
  const hours = Number(($("#set-hours") || {}).value || 6);
  const meta = Number(($("#set-meta") || {}).value || 90);
  const exam = parseLocal(examAt);
  if (isNaN(exam.getTime())) return toast("Informe uma data e hora de prova válidas.", "err");
  if (!/^\d{2}:\d{2}$/.test(startTime)) return toast("Informe um horário de início válido.", "err");
  state.settings.name = name.trim().slice(0, 60);
  state.settings.examAt = examAt;
  state.settings.startTime = startTime;
  state.settings.hours = clamp(hours || 6, 1, 12);
  state.settings.meta = clamp(Math.round(meta || 90), 70, 100);
  state.settings.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || META.timezone;
  saveState();
  renderShell();
  renderView();
  toast("Configuração salva. Plano recalculado.", "ok");
}

async function importBackup(file) {
  if (!file) return;
  try {
    const text = await file.text();
    const raw = JSON.parse(text);
    if (!raw || typeof raw !== "object" || !raw.settings || !raw.version) throw new Error("estrutura");
    const base = defaultState();
    const merged = Object.assign(base, raw);
    merged.settings = Object.assign(base.settings, raw.settings || {});
    ["lessons", "questions", "flashcards", "blocks", "cases", "errors", "checklists"].forEach((k) => {
      if (!merged[k] || typeof merged[k] !== "object") merged[k] = {};
    });
    if (!Array.isArray(merged.sims)) merged.sims = [];
    if (!merged.pomodoro) merged.pomodoro = { sessions: 0, minutes: 0 };
    state = merged;
    saveState();
    renderShell();
    renderView();
    toast("Backup importado com sucesso.", "ok");
  } catch (e) {
    toast("Arquivo inválido. Nada foi alterado.", "err");
  }
}

function resetData() {
  const ok = window.confirm("Apagar TODO o progresso deste dispositivo? Essa ação não pode ser desfeita. Exporte o JSON antes.");
  if (!ok) return;
  try { localStorage.removeItem(META.storageKey); } catch (e) { /* ignorar */ }
  state = defaultState();
  saveState();
  closeModal();
  renderShell();
  renderView();
  toast("Dados apagados. O app voltou ao estado inicial.", "ok");
}

/* ------------------------------ Relógios ------------------------------ */
function updateLiveClocks() {
  const exam = parseLocal(state.settings.examAt);
  const cd = $("#countdown-text");
  if (cd && !isNaN(exam.getTime())) cd.textContent = fmtCountdown(exam.getTime() - nowMs());

  const sim = state.activeSim;
  if (sim && ui.route === "simulado") {
    const remaining = sim.mode === "oficial" ? Math.max(0, (sim.endsAt || 0) - nowMs()) : simElapsedMs(sim);
    const timer = $("#sim-timer");
    if (timer) timer.textContent = fmtClock(remaining);
    if (sim.mode === "oficial" && remaining <= 0 && !ui.simFinishing) finishSim(true);
  }

  const pomo = ui.pomo;
  if (pomo.running && pomo.endAt) {
    const remaining = Math.max(0, pomo.endAt - nowMs());
    pomo.seconds = Math.ceil(remaining / 1000);
    if (remaining <= 0) {
      pomo.running = false;
      pomo.endAt = null;
      if (pomo.mode === "focus") {
        state.pomodoro.sessions = (state.pomodoro.sessions || 0) + 1;
        state.pomodoro.minutes = (state.pomodoro.minutes || 0) + 25;
        pomo.mode = "break";
        pomo.seconds = 5 * 60;
        saveState();
        toast("Sessão concluída. Faça uma pausa de 5 minutos.", "ok");
      } else {
        pomo.mode = "focus";
        pomo.seconds = 25 * 60;
        toast("Pausa encerrada. Volte ao foco.", "ok");
      }
      if (ui.route === "dashboard") renderView();
      return;
    }
    const el = $("#pomo-time");
    if (el) {
      const min = Math.floor(pomo.seconds / 60);
      el.textContent = pad2(min) + ":" + pad2(pomo.seconds % 60);
    }
  }
}

/* ------------------------------ Eventos ------------------------------ */
let searchTimer = null;
let inputSaveTimer = null;

function onInput(e) {
  const t = e.target;
  if (t.matches("[data-search]")) {
    const key = t.getAttribute("data-search");
    const id = t.id;
    ui[key] = t.value;
    if (key === "qSearch") ui.qIndex = 0;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      renderView();
      const el = document.getElementById(id);
      if (el && el.focus) {
        el.focus();
        const v = el.value;
        try { el.setSelectionRange(v.length, v.length); } catch (err) { /* alguns tipos não suportam */ }
      }
    }, 220);
    return;
  }

  if (t.matches("[data-case-answer]")) {
    const id = t.getAttribute("data-case-answer");
    state.cases[id] = state.cases[id] || {};
    state.cases[id].answer = t.value;
    state.cases[id].updatedAt = nowMs();
    const chars = $("#case-chars"), words = $("#case-words");
    if (chars) chars.textContent = t.value.length + " caracteres";
    if (words) words.textContent = (t.value.trim() ? t.value.trim().split(/\s+/).length : 0) + " palavras";
    debouncedSave();
    return;
  }

  if (t.matches("[data-error-note]")) {
    const id = t.getAttribute("data-error-note");
    state.errors[id] = state.errors[id] || {};
    state.errors[id].note = t.value;
    state.errors[id].updatedAt = nowMs();
    debouncedSave();
    return;
  }

  if (t.matches("[data-case-score]")) {
    const c = CASE_BY_ID[ui.caseId];
    if (!c) return;
    const idx = Number(t.getAttribute("data-case-score"));
    const rec = state.cases[c.id] || {};
    const scores = rec.scores || c.rubric.map(() => 0);
    scores[idx] = Number(t.value) || 0;
    rec.scores = scores;
    rec.updatedAt = nowMs();
    state.cases[c.id] = rec;
    const label = document.getElementById("rubric-val-" + idx);
    if (label) label.textContent = scores[idx].toFixed(1).replace(".", ",");
    const totalEl = document.getElementById("case-score-total");
    const score = scores.reduce((a, b) => a + (Number(b) || 0), 0);
    if (totalEl) totalEl.textContent = score.toFixed(1).replace(".", ",") + " / 10";
    debouncedSave();
    return;
  }

  if (t.id === "set-hours") {
    const h = Number(t.value);
    const a = $("#hours-val"), b = $("#hours-preview");
    if (a) a.textContent = h.toFixed(0) + " h";
    if (b) b.textContent = h.toFixed(1).replace(".", ",") + " h";
    return;
  }
  if (t.id === "set-meta") {
    const m = Number(t.value);
    const a = $("#meta-val"), b = $("#meta-preview");
    if (a) a.textContent = m + "%";
    if (b) b.textContent = m + "%";
  }
}

function onChange(e) {
  const t = e.target;
  if (t.matches("[data-filter]")) {
    const key = t.getAttribute("data-filter");
    ui[key] = t.value;
    if (key === "qBank") { ui.qModule = "all"; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; }
    if (key === "qModule") { if (ui.qModule !== "all") ui.qBank = "ap2"; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; }
    if (key === "qArea") { ui.qTopic = "all"; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; }
    if (key === "qTopic") { ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; }
    if (key === "qStatus") { ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; }
    if (key === "lessonArea" || key === "lessonTemp") ui.lessonQ = ui.lessonQ || "";
    if (key === "cardArea") { ui.cardIndex = 0; ui.cardFlipped = false; }
    renderView();
    return;
  }
  if (t.id === "import-file") {
    const file = t.files && t.files[0];
    t.value = "";
    importBackup(file);
    return;
  }
  if (t.matches('[data-action="toggle-block"]')) {
    const id = t.getAttribute("data-block");
    state.blocks[id] = { done: !!t.checked, at: nowMs() };
    saveState();
    renderView();
    return;
  }
  if (t.matches('[data-action="toggle-check"]')) {
    const key = t.getAttribute("data-list") + ":" + t.getAttribute("data-id");
    state.checklists[key] = { done: !!t.checked, at: nowMs() };
    saveState();
    const label = t.closest(".check-item");
    if (label) label.classList.toggle("done", !!t.checked);
  }
}

function onClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.getAttribute("data-action");

  if (action === "close-modal" && btn.classList.contains("modal-backdrop") && e.target.closest("[data-modal-panel]")) return;

  switch (action) {
    case "toggle-theme":
      toggleTheme();
      break;
    case "set-theme": {
      const next = btn.getAttribute("data-theme-value") === "dark" ? "dark" : "light";
      if (next === getTheme()) break;
      applyTheme(next);
      saveState();
      renderShell();
      renderView();
      toast(next === "dark" ? "Modo escuro ativado." : "Modo claro ativado.", "ok");
      break;
    }
    case "menu": {
      const sb = $("#sidebar");
      if (sb) sb.classList.toggle("open");
      break;
    }
    case "open-lesson":
      openLesson(btn.getAttribute("data-topic"));
      break;
    case "close-modal":
      closeModal();
      break;
    case "lesson-done":
      toggleLessonDone(btn.getAttribute("data-topic"));
      break;
    case "lesson-questions": {
      const topicId = btn.getAttribute("data-topic");
      ui.qArea = "all"; ui.qTopic = topicId; ui.qStatus = "all"; ui.qBank = "all"; ui.qModule = "all";
      ui.qSearch = ""; ui.qFocus = null; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false;
      closeModal();
      go("#/questoes");
      break;
    }
    case "open-ap2-lesson":
      openAp2Lesson(btn.getAttribute("data-module"));
      break;
    case "ap2-lesson-done":
      toggleAp2LessonDone(btn.getAttribute("data-module"));
      break;
    case "ap2-questions": {
      const moduleId = btn.getAttribute("data-module");
      ui.qBank = "ap2"; ui.qModule = moduleId; ui.qArea = "all"; ui.qTopic = "all"; ui.qStatus = "all";
      ui.qSearch = ""; ui.qFocus = null; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false;
      closeModal();
      go("#/questoes");
      break;
    }
    case "q-select": {
      const last = lastAttempt(currentQuestion(questionList()) ? currentQuestion(questionList()).id : "");
      if (last && !ui.qRetest) break;
      ui.qChoice = Number(btn.getAttribute("data-index"));
      renderView();
      break;
    }
    case "q-submit": {
      const list = questionList();
      const q = currentQuestion(list);
      if (!q || ui.qChoice == null) { toast("Selecione uma alternativa antes de responder.", "err"); break; }
      const correct = ui.qChoice === q.answer;
      state.questions[q.id] = state.questions[q.id] || {};
      const attempts = state.questions[q.id].attempts || [];
      attempts.push({ choice: ui.qChoice, correct, at: nowMs(), source: "banco" });
      state.questions[q.id].attempts = attempts;
      saveState();
      ui.qRetest = false;
      renderShell();
      renderView();
      toast(correct ? "Resposta correta salva." : "Resposta salva. O item entrou no caderno de erros.", correct ? "ok" : "err");
      break;
    }
    case "q-next":
    case "q-prev": {
      const list = questionList();
      if (!list.length) break;
      const dir = action === "q-next" ? 1 : -1;
      ui.qIndex = (ui.qIndex + dir + list.length) % list.length;
      ui.qChoice = null;
      ui.qRetest = false;
      renderView();
      break;
    }
    case "q-retest":
      ui.qRetest = true;
      ui.qChoice = null;
      renderView();
      break;
    case "q-index":
      ui.qIndex = Number(btn.getAttribute("data-index")) || 0;
      ui.qChoice = null;
      ui.qRetest = false;
      renderView();
      break;
    case "q-clear":
      ui.qArea = "all"; ui.qTopic = "all"; ui.qStatus = "all"; ui.qBank = "all"; ui.qModule = "all"; ui.qSearch = ""; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = false; ui.qFocus = null;
      renderView();
      break;
    case "flash-flip":
      ui.cardFlipped = !ui.cardFlipped;
      renderView();
      break;
    case "flash-rate":
      if (!ui.cardFlipped) { toast("Revele a resposta antes de avaliar.", "err"); break; }
      rateCard(flashcardList()[ui.cardIndex] ? flashcardList()[ui.cardIndex].id : "", btn.getAttribute("data-rate"));
      break;
    case "card-mode":
      ui.cardMode = btn.getAttribute("data-mode") === "all" ? "all" : "queue";
      ui.cardIndex = 0;
      ui.cardFlipped = false;
      renderView();
      break;
    case "start-sim":
      startSim(btn.getAttribute("data-mode"));
      break;
    case "sim-answer": {
      const sim = state.activeSim;
      if (!sim) break;
      const qid = sim.order[ui.simIndex];
      sim.answers[qid] = Number(btn.getAttribute("data-index"));
      saveState();
      renderView();
      break;
    }
    case "sim-prev":
    case "sim-next": {
      const sim = state.activeSim;
      if (!sim) break;
      const dir = action === "sim-next" ? 1 : -1;
      ui.simIndex = (ui.simIndex + dir + sim.order.length) % sim.order.length;
      renderView();
      break;
    }
    case "sim-flag": {
      const sim = state.activeSim;
      if (!sim) break;
      const qid = sim.order[ui.simIndex];
      sim.flags = sim.flags || {};
      if (sim.flags[qid]) delete sim.flags[qid];
      else sim.flags[qid] = true;
      saveState();
      renderView();
      break;
    }
    case "sim-goto": {
      const sim = state.activeSim;
      if (!sim) break;
      ui.simIndex = clamp(Number(btn.getAttribute("data-index")) || 0, 0, sim.order.length - 1);
      renderView();
      break;
    }
    case "sim-pause":
      pauseSim();
      break;
    case "sim-finish":
      finishSim(false);
      break;
    case "sim-result":
      ui.simResult = btn.getAttribute("data-id");
      go("#/simulado");
      break;
    case "sim-new":
    case "sim-history":
      ui.simResult = null;
      go("#/simulado");
      break;
    case "case-select":
      ui.caseId = btn.getAttribute("data-case");
      ui.caseExpected = false;
      renderView();
      break;
    case "case-expected":
      ui.caseExpected = !ui.caseExpected;
      renderView();
      break;
    case "case-save": {
      const c = CASE_BY_ID[ui.caseId];
      if (!c) break;
      state.cases[c.id] = state.cases[c.id] || {};
      state.cases[c.id].updatedAt = nowMs();
      saveState();
      toast("Resposta do caso salva.", "ok");
      break;
    }
    case "case-clear": {
      const c = CASE_BY_ID[ui.caseId];
      if (!c) break;
      if (!window.confirm("Limpar a resposta e a rubrica deste caso?")) break;
      delete state.cases[c.id];
      saveState();
      renderView();
      toast("Caso limpo.", "ok");
      break;
    }
    case "error-retest": {
      const qid = btn.getAttribute("data-q");
      ui.qArea = "all"; ui.qTopic = "all"; ui.qStatus = "all"; ui.qBank = "all"; ui.qModule = "all"; ui.qSearch = "";
      ui.qFocus = qid; ui.qIndex = 0; ui.qChoice = null; ui.qRetest = true;
      closeModal();
      go("#/questoes");
      break;
    }
    case "error-clear-search":
      ui.errorsSearch = "";
      renderView();
      break;
    case "material-clear":
      ui.materialType = "all";
      ui.materialSearch = "";
      renderView();
      break;
    case "plan-now": {
      const plan = buildPlan();
      if (!plan.valid) { go("#/config"); break; }
      const focus = focusBlock(plan);
      if (!focus) { toast("Não há bloco pendente. Use flashcards ou o caderno de erros.", "ok"); break; }
      if (focus.action === "lesson" && focus.topicId) openLesson(focus.topicId);
      else if (focus.action === "ap2" && focus.ap2Module) openAp2Lesson(focus.ap2Module);
      else go(blockHref(focus));
      break;
    }
    case "pomo-start": {
      if (ui.pomo.running) break;
      ui.pomo.endAt = nowMs() + Math.max(1, ui.pomo.seconds) * 1000;
      ui.pomo.running = true;
      renderView();
      break;
    }
    case "pomo-pause": {
      if (!ui.pomo.running) break;
      ui.pomo.seconds = Math.max(1, Math.ceil((ui.pomo.endAt - nowMs()) / 1000));
      ui.pomo.running = false;
      ui.pomo.endAt = null;
      renderView();
      break;
    }
    case "pomo-reset":
      ui.pomo.seconds = 25 * 60;
      ui.pomo.running = false;
      ui.pomo.endAt = null;
      ui.pomo.mode = "focus";
      renderView();
      break;
    case "export-plan": exportPlanCsv(); break;
    case "export-questions": exportQuestionsCsv(); break;
    case "export-ap2": exportAp2Csv(); break;
    case "export-cards": exportCardsTsv(); break;
    case "export-errors": exportErrorsCsv(); break;
    case "export-cases": exportCasesTxt(); break;
    case "export-materials": exportMaterialsCsv(); break;
    case "export-pareto": exportParetoCsv(); break;
    case "export-json": exportJson(); break;
    case "save-settings": saveSettings(); break;
    case "reset-data": resetData(); break;
    default: break;
  }
}

function onKeydown(e) {
  if (e.key === "Escape" && ui.modalOpen) { closeModal(); return; }
  const tag = (e.target.tagName || "").toLowerCase();
  if (["input", "textarea", "select"].includes(tag) || e.target.isContentEditable) return;
  if (ui.route === "flashcards" && e.code === "Space") {
    e.preventDefault();
    ui.cardFlipped = !ui.cardFlipped;
    renderView();
    return;
  }
  if (ui.route === "flashcards" && ui.cardFlipped && ["1", "2", "3"].includes(e.key)) {
    const card = flashcardList()[ui.cardIndex];
    if (!card) return;
    rateCard(card.id, e.key === "1" ? "again" : e.key === "2" ? "hard" : "good");
  }
}

/* ------------------------------ Inicialização ------------------------------ */
function init() {
  render();
  window.addEventListener("hashchange", () => {
    closeModal();
    render();
    window.scrollTo({ top: 0, behavior: "instant" in document.documentElement.style ? "instant" : "auto" });
  });
  document.addEventListener("click", onClick);
  document.addEventListener("change", onChange);
  document.addEventListener("input", onInput);
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("beforeunload", saveState);
  setInterval(updateLiveClocks, 1000);

  idbLoad().then((payload) => {
    if (!payload) return;
    try {
      const parsed = JSON.parse(payload);
      if (parsed && parsed.settings && (parsed.updatedAt || 0) > (state.updatedAt || 0)) {
        const base = defaultState();
        const merged = Object.assign(base, parsed);
        merged.settings = Object.assign(base.settings, parsed.settings || {});
        state = merged;
        render();
      }
    } catch (e) { /* espelho inválido é ignorado */ }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

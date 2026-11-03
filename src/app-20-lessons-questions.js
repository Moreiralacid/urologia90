/* ==========================================================================
   URO 90 — Aulas e questões
   ========================================================================== */

function filteredLessons() {
  const q = ui.lessonQ.trim().toLowerCase();
  return LESSONS.filter((l) => {
    const t = TOPIC_BY_ID[l.topicId];
    if (!t) return false;
    if (ui.lessonArea !== "all" && t.area !== ui.lessonArea) return false;
    if (ui.lessonTemp !== "all" && t.temp !== ui.lessonTemp) return false;
    if (q) {
      const hay = (l.title + " " + t.title + " " + (t.subtopics || []).join(" ") + " " + AREA_BY_ID[t.area].name).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function viewLessons() {
  const list = filteredLessons();
  const areaOpts = '<option value="all">Todas as áreas</option>' + AREAS.map((a) => '<option value="' + a.id + '"' + (ui.lessonArea === a.id ? " selected" : "") + ">" + a.name + "</option>").join("");
  const tempOpts = '<option value="all">Todas as temperaturas</option><option value="hot"' + (ui.lessonTemp === "hot" ? " selected" : "") + '>Quente</option><option value="warm"' + (ui.lessonTemp === "warm" ? " selected" : "") + '>Morna</option><option value="cold"' + (ui.lessonTemp === "cold" ? " selected" : "") + ">Fria</option>";

  const cards = list.map((l) => {
    const t = TOPIC_BY_ID[l.topicId];
    const area = AREA_BY_ID[t.area];
    const done = lessonDone(t.id);
    const st = topicStats(t.id);
    return '<div class="card lesson-card' + (done ? " done" : "") + '">' +
      '<div class="lc-top"><span class="badge ' + TEMP_CLASS[t.temp] + '">' + TEMP_LABEL[t.temp] + '</span><span class="badge outline">' + area.short + "</span>" +
      (done ? '<span class="badge green">Concluída</span>' : "") + '<span class="spacer"></span><span class="tiny muted">' + l.minutes + " min</span></div>" +
      "<h3>" + esc(l.title) + "</h3>" +
      '<p>' + esc((t.subtopics || []).slice(0, 3).join(" · ")) + "</p>" +
      '<div class="lesson-meta"><span>' + st.total + " questões</span><span>" + (st.accuracy == null ? "sem diagnóstico" : Math.round(st.accuracy * 100) + "% acerto") + "</span></div>" +
      '<div class="row" style="gap:6px"><button class="btn sm primary" data-action="open-lesson" data-topic="' + t.id + '">Ler aula</button>' +
      '<button class="btn sm" data-action="lesson-questions" data-topic="' + t.id + '">Questões</button></div></div>';
  }).join("");

  const actions = '<span class="badge green">' + lessonCountDone() + "/" + TOPICS.length + " concluídas</span>";
  return pageHead("Aulas de urologia", "Conteúdo denso, orientado a conduta e a pegadinhas de prova. Cada tópico tem questões e flashcards vinculados.", actions) +
    '<div class="toolbar"><div class="search">' + icon("search", "") + '<input class="input" id="lesson-search" data-search="lessonQ" placeholder="Buscar por tema, subtópico ou área…" value="' + esc(ui.lessonQ) + '"></div>' +
    '<select class="select" data-filter="lessonArea">' + areaOpts + "</select>" +
    '<select class="select" data-filter="lessonTemp">' + tempOpts + "</select>" +
    '<span class="spacer"></span><span class="small muted">' + list.length + " aulas</span></div>" +
    (list.length ? '<div class="grid grid-3">' + cards + "</div>" : '<div class="card"><div class="empty"><div class="ico">' + icon("search", "") + "</div><h3>Nenhuma aula encontrada</h3><p>Ajuste a busca ou os filtros. Todos os 28 tópicos continuam disponíveis.</p></div></div>") +
    pageFoot();
}

function openLesson(topicId) {
  const topic = TOPIC_BY_ID[topicId];
  const lesson = LESSON_BY_TOPIC[topicId];
  if (!topic || !lesson) return;
  const area = AREA_BY_ID[topic.area];
  const done = lessonDone(topicId);
  const root = $("#modal-root");
  if (!root) return;
  root.innerHTML = '<div class="modal-backdrop" data-action="close-modal"><div class="modal wide" role="dialog" aria-modal="true" aria-label="Aula: ' + esc(lesson.title) + '" data-modal-panel>' +
    '<div class="modal-head"><div><div class="lesson-meta-line"><span class="badge ' + TEMP_CLASS[topic.temp] + '">' + TEMP_LABEL[topic.temp] + '</span><span class="badge outline">' + area.short + '</span><span class="tiny muted">' + lesson.minutes + " min de leitura</span></div>" +
    "<h2>" + esc(lesson.title) + "</h2><p>Tópico: " + esc(topic.title) + "</p></div>" +
    '<button class="modal-close" data-action="close-modal" aria-label="Fechar">' + icon("x", "") + "</button></div>" +
    '<div class="modal-body"><div class="lesson-body">' + lesson.sections.concept + lesson.sections.practice + lesson.sections.retention +
    '<h2>Erros comuns e pegadinhas da banca</h2><ul>' + lesson.pitfalls.map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul>" +
    '<div class="callout green"><strong>Fonte técnica/normativa:</strong> ' + esc(lesson.source) + ". Conteúdo autoral de revisão; confira a versão vigente da diretriz e o material da sua disciplina.</div>" +
    "</div></div>" +
    '<div class="modal-foot"><button class="btn ' + (done ? "" : "success") + '" data-action="lesson-done" data-topic="' + topicId + '">' + (done ? "Desmarcar estudada" : "Marcar como estudada") + "</button>" +
    '<button class="btn primary" data-action="lesson-questions" data-topic="' + topicId + '">Treinar questões ' + icon("arrow", "") + "</button>" +
    '<div class="spacer"></div><button class="btn ghost" data-action="close-modal">Fechar</button></div></div></div>';
  document.body.style.overflow = "hidden";
  ui.modalOpen = true;
  const close = $("[data-action='close-modal']", root);
  if (close) close.focus();
}

function closeModal() {
  const root = $("#modal-root");
  if (root) root.innerHTML = "";
  document.body.style.overflow = "";
  ui.modalOpen = false;
}

function toggleLessonDone(topicId) {
  if (lessonDone(topicId)) delete state.lessons[topicId];
  else state.lessons[topicId] = { done: true, at: nowMs() };
  saveState();
  const btn = $('[data-action="lesson-done"][data-topic="' + topicId + '"]');
  if (btn) {
    const done = lessonDone(topicId);
    btn.textContent = done ? "Desmarcar estudada" : "Marcar como estudada";
    btn.className = "btn " + (done ? "" : "success");
  }
  renderShell();
  renderView();
  toast(lessonDone(topicId) ? "Aula marcada como estudada." : "Marcação removida.", "ok");
}

/* ------------------------------ Questões ------------------------------ */
function questionList() {
  let list = QUESTIONS.slice();
  if (ui.qBank === "ap2") list = list.filter((q) => q.bank === "ap2");
  if (ui.qBank === "broad") list = list.filter((q) => q.bank !== "ap2");
  if (ui.qModule !== "all") list = list.filter((q) => q.ap2Module === ui.qModule);
  if (ui.qArea !== "all") list = list.filter((q) => q.area === ui.qArea);
  if (ui.qTopic !== "all") list = list.filter((q) => q.topicId === ui.qTopic);
  if (ui.qStatus === "unanswered") list = list.filter((q) => !isAnswered(q.id));
  if (ui.qStatus === "errors") list = list.filter((q) => { const a = lastAttempt(q.id); return a && !a.correct; });
  if (ui.qStatus === "correct") list = list.filter((q) => isCorrectLast(q.id));
  const term = ui.qSearch.trim().toLowerCase();
  if (term) list = list.filter((q) => (q.stem + " " + q.options.join(" ") + " " + TOPIC_BY_ID[q.topicId].title + " " + (q.origin || "")).toLowerCase().includes(term));

  if (ui.qFocus) {
    const focus = ui.qFocus;
    const idx = list.findIndex((q) => q.id === focus);
    if (idx >= 0) { ui.qIndex = idx; list = list; }
    else if (Q_BY_ID[focus]) { list = [Q_BY_ID[focus]]; ui.qIndex = 0; }
    ui.qFocus = null;
  }
  if (list.length) ui.qIndex = clamp(ui.qIndex, 0, list.length - 1);
  else ui.qIndex = 0;
  return list;
}

function currentQuestion(list) {
  return list && list.length ? list[ui.qIndex] : null;
}

function viewQuestions() {
  const list = questionList();
  const q = currentQuestion(list);
  const st = globalStats();
  const bankOpts = [["all", "Todos os bancos (96)"], ["broad", "Banco amplo (60)"], ["ap2", "AP2 2026.2 (36)"]].map(([v, l]) => '<option value="' + v + '"' + (ui.qBank === v ? " selected" : "") + ">" + l + "</option>").join("");
  const moduleOpts = '<option value="all">Todos os módulos AP2</option>' + AP2_MODULES.map((m) => '<option value="' + m.id + '"' + (ui.qModule === m.id ? " selected" : "") + ">" + m.code + " · " + m.short + "</option>").join("");
  const areaOpts = '<option value="all">Todas as áreas</option>' + AREAS.map((a) => '<option value="' + a.id + '"' + (ui.qArea === a.id ? " selected" : "") + ">" + a.name + "</option>").join("");
  const topicPool = ui.qArea === "all" ? TOPICS : TOPICS.filter((t) => t.area === ui.qArea);
  const topicOpts = '<option value="all">Todos os tópicos</option>' + topicPool.map((t) => '<option value="' + t.id + '"' + (ui.qTopic === t.id ? " selected" : "") + ">" + t.title + "</option>").join("");
  const statusOpts = [["all", "Todas"], ["unanswered", "Não respondidas"], ["errors", "Erros"], ["correct", "Acertos"]].map(([v, l]) => '<option value="' + v + '"' + (ui.qStatus === v ? " selected" : "") + ">" + l + "</option>").join("");

  let content = "";
  if (!q) {
    content = '<div class="card"><div class="empty"><div class="ico">' + icon("help", "") + '</div><h3>Nenhuma questão com esses filtros</h3><p>Limpe os filtros ou escolha outra área. O banco tem ' + QUESTIONS.length + ' itens comentados: ' + (QUESTIONS.length - AP2_QUESTIONS.length) + ' amplos + ' + AP2_QUESTIONS.length + ' históricos AP2.</p><button class="btn primary mt-12" data-action="q-clear">Limpar filtros</button></div></div>';
  } else {
    const topic = TOPIC_BY_ID[q.topicId];
    const area = AREA_BY_ID[q.area];
    const isAp2 = q.bank === "ap2";
    const ap2Mod = isAp2 ? AP2_BY_ID[q.ap2Module] : null;
    const last = lastAttempt(q.id);
    const locked = !!last && !ui.qRetest;
    const choice = locked ? last.choice : ui.qChoice;
    const options = q.options.map((opt, i) => {
      let cls = "option";
      if (locked) {
        if (i === q.answer) cls += " correct";
        else if (i === choice) cls += " wrong";
        else cls += " dim";
      } else if (i === choice) cls += " selected";
      return '<button class="' + cls + '" data-action="q-select" data-index="' + i + '"' + (locked ? " disabled" : "") + ">" +
        '<span class="letter">' + "ABCDE"[i] + "</span><span>" + esc(opt) + "</span></button>";
    }).join("");

    let answerBox = "";
    if (locked) {
      const ok = last.correct;
      const provenance = isAp2
        ? "<b>Origem:</b> " + esc(q.origin) + " · <b>gabarito histórico preservado</b>"
        : "<b>Autoral (padrão da prova)</b>";
      const caveat = isAp2 && q.caveat ? '<div class="callout warn mt-12"><strong>Atualização 2026:</strong> ' + esc(q.caveat) + "</div>" : "";
      answerBox = '<div class="answer-box ' + (ok ? "ok" : "bad") + '"><div class="answer-title">' + (ok ? '<span class="badge green">Correta</span> Você marcou ' + "ABCDE"[last.choice] : '<span class="badge red">Incorreta</span> Você marcou ' + "ABCDE"[last.choice] + "; o gabarito é " + "ABCDE"[q.answer]) + "</div>" +
        "<p>" + esc(q.comment) + "</p><div class=\"src\"><b>Fonte:</b> " + esc(q.source) + " · " + provenance + "</div>" + caveat + "</div>";
    }

    const actions = locked
      ? '<button class="btn primary" data-action="q-next">Próxima ' + icon("arrow", "") + "</button>" +
        '<button class="btn" data-action="q-retest">' + icon("rotate", "") + " Refazer</button>" +
        (!last.correct ? '<a class="btn" href="#/erros">Ir ao caderno de erros</a>' : "") +
        '<div class="spacer"></div><a class="btn ghost" href="#/aulas">Ler aula do tópico</a>'
      : '<button class="btn primary" data-action="q-submit"' + (choice == null ? " disabled" : "") + ">Responder e salvar</button>" +
        '<div class="spacer"></div><button class="btn ghost" data-action="q-prev">' + icon("chevronLeft", "") + " Anterior</button>" +
        '<button class="btn ghost" data-action="q-next">Próxima ' + icon("chevronRight", "") + "</button>";

    const nav = list.map((item, i) => {
      const a = lastAttempt(item.id);
      let cls = "";
      if (a) cls = a.correct ? "right" : "wrong";
      if (i === ui.qIndex) cls += " current";
      return '<button class="' + cls + '" data-action="q-index" data-index="' + i + '" aria-label="Questão ' + (i + 1) + '">' + (i + 1) + "</button>";
    }).join("");

    content = '<div class="q-layout"><aside class="card q-side"><div class="card-head"><div><h3>Cartão</h3><p>' + list.length + " questões no filtro</p></div></div>" +
      '<div class="q-nav-grid">' + nav + "</div>" +
      '<div class="mt-16 small muted">' + st.answered + " de " + QUESTIONS.length + " respondidas<br>" + (st.attempts ? "Acurácia global: <b>" + Math.round(st.accuracy * 100) + "%</b>" : "Sem diagnóstico ainda") + "</div>" +
      '<div class="progress mt-8"><i style="width:' + Math.round((st.answered / QUESTIONS.length) * 100) + '%"></i></div></aside>' +
      '<section class="card q-card"><div class="q-meta"><span class="badge outline">' + area.short + '</span><span class="badge ' + TEMP_CLASS[topic.temp] + '">' + TEMP_LABEL[topic.temp] + '</span><span class="badge blue">' + DIFF_LABEL[q.difficulty] + '</span>' +
      (isAp2 ? '<span class="badge purple">AP2 · ' + ap2Mod.code + '</span><span class="badge outline">Histórica</span>' : '<span class="badge outline">Autoral</span>') +
      '<span class="spacer"></span><span class="tiny muted">' + (ui.qIndex + 1) + " / " + list.length + "</span></div>" +
      '<div class="tiny muted mb-8">' + esc(topic.title) + (isAp2 ? " · Origem: " + esc(q.origin) : "") + "</div>" +
      '<div class="q-stem"><p>' + esc(q.stem) + "</p></div>" +
      '<div class="options">' + options + "</div>" + answerBox +
      '<div class="q-actions">' + actions + "</div></section></div>";
  }

  return pageHead("Banco de questões", "Responda, salve e leia o comentário. Itens amplos e históricos AP2 usam o mesmo motor de correção e caderno de erros.", '<span class="badge green">' + st.answered + "/" + QUESTIONS.length + "</span>") +
    '<div class="toolbar"><select class="select" data-filter="qBank">' + bankOpts + "</select>" +
    '<select class="select" data-filter="qModule">' + moduleOpts + "</select>" +
    '<select class="select" data-filter="qArea">' + areaOpts + "</select>" +
    '<select class="select" data-filter="qTopic">' + topicOpts + "</select>" +
    '<select class="select" data-filter="qStatus">' + statusOpts + "</select>" +
    '<div class="search">' + icon("search", "") + '<input class="input" id="q-search" data-search="qSearch" placeholder="Buscar no enunciado…" value="' + esc(ui.qSearch) + '"></div></div>' +
    content + pageFoot();
}

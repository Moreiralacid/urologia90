/* ==========================================================================
   URO 90 — Flashcards e simulado
   ========================================================================== */

function flashcardList() {
  let list;
  if (ui.cardMode === "queue") list = dueCards();
  else list = CARDS.slice();
  if (ui.cardArea !== "all") list = list.filter((c) => TOPIC_BY_ID[c.topicId].area === ui.cardArea);
  if (ui.cardMode === "queue") {
    list = list.slice().sort((a, b) => {
      const ra = cardRecord(a.id), rb = cardRecord(b.id);
      if (!ra && !rb) return 0;
      if (!ra) return -1;
      if (!rb) return 1;
      return (ra.due || 0) - (rb.due || 0);
    });
  }
  if (list.length) ui.cardIndex = clamp(ui.cardIndex, 0, list.length - 1);
  else ui.cardIndex = 0;
  return list;
}

function viewFlashcards() {
  const list = flashcardList();
  const card = list.length ? list[ui.cardIndex] : null;
  const due = dueCards().length;
  const newc = newCards().length;
  const areaOpts = '<option value="all">Todas as áreas</option>' + AREAS.map((a) => '<option value="' + a.id + '"' + (ui.cardArea === a.id ? " selected" : "") + ">" + a.short + "</option>").join("");

  let stage = "";
  if (!card) {
    stage = '<div class="card"><div class="empty"><div class="ico">' + icon("check", "") + '</div><h3>Fila em dia</h3><p>Não há flashcards vencidos neste filtro. Use “Explorar todos” para revisar por livre demanda ou volte depois.</p><div class="row mt-16" style="justify-content:center"><button class="btn primary" data-action="card-mode" data-mode="all">Explorar todos</button><button class="btn" data-action="export-cards">Exportar TSV</button></div></div></div>';
  } else {
    const topic = TOPIC_BY_ID[card.topicId];
    const area = AREA_BY_ID[topic.area];
    const rec = cardRecord(card.id);
    const isNew = !rec;
    const front = card.front;
    const back = card.back;
    const flipped = ui.cardFlipped;
    stage = '<div class="fc-stage"><div class="row mb-12"><span class="badge ' + TEMP_CLASS[topic.temp] + '">' + TEMP_LABEL[topic.temp] + '</span><span class="badge outline">' + area.short + "</span>" +
      (card.ap2Module && AP2_BY_ID[card.ap2Module] ? '<span class="badge purple">AP2 · ' + AP2_BY_ID[card.ap2Module].code + "</span>" : "") +
      (isNew ? '<span class="badge blue">Novo</span>' : '<span class="badge green">Revisão</span>') +
      '<span class="spacer"></span><span class="tiny muted">' + (ui.cardIndex + 1) + " de " + list.length + " na fila</span></div>" +
      '<div class="flashcard' + (flipped ? " flipped" : "") + '" data-action="flash-flip" role="button" tabindex="0" aria-label="Virar flashcard">' +
      '<div class="fc-inner"><div class="fc-face"><div class="fc-label">Pergunta</div><div class="fc-question">' + front + '</div><div class="fc-hint">Clique para revelar · tecla espaço</div></div>' +
      '<div class="fc-face back"><div class="fc-label">Resposta</div><div class="fc-answer">' + back + '</div><div class="fc-hint">Avalie com honestidade: não lembrei / com esforço / lembrei</div></div></div></div>' +
      (flipped
        ? '<div class="fc-controls"><button class="btn danger" data-action="flash-rate" data-rate="again">Não lembrei<small>volta em 10 min</small></button>' +
          '<button class="btn" data-action="flash-rate" data-rate="hard">Com esforço<small>+1 / +3 / +7 dias</small></button>' +
          '<button class="btn success" data-action="flash-rate" data-rate="good">Lembrei<small>+1 / +7 / +14 / +30</small></button></div>'
        : '<div class="notice info">' + icon("info", "") + "<div>Tente responder mentalmente antes de virar. A recordação ativa vale mais que reler.</div></div>") +
      '<div class="fc-stats"><span><b>' + due + "</b> vencidos</span><span><b>" + newc + "</b> novos</span><span><b>" + matureCards().length + "</b> maduros</span><span>tópico: " + esc(topic.title) + "</span></div></div>";
  }

  const actions = '<span class="badge ' + (due ? "red" : "green") + '">' + due + " vencidos</span>" +
    '<button class="btn" data-action="export-cards">' + icon("download", "") + " TSV (Anki)</button>";
  return pageHead("Flashcards", "Pergunta primeiro, resposta depois. O algoritmo agenda a próxima revisão conforme sua classificação de memória.", actions) +
    '<div class="toolbar"><div class="segmented"><button class="' + (ui.cardMode === "queue" ? "active" : "") + '" data-action="card-mode" data-mode="queue">Fila inteligente</button><button class="' + (ui.cardMode === "all" ? "active" : "") + '" data-action="card-mode" data-mode="all">Explorar todos</button></div>' +
    '<select class="select" data-filter="cardArea">' + areaOpts + "</select>" +
    '<span class="spacer"></span><span class="tiny muted">Algoritmo: não lembrei +10 min · esforço +1/+3/+7 d · lembrei +1/+7/+14/+30 d</span></div>' +
    stage + pageFoot();
}

function rateCard(cardId, rating) {
  const card = CARD_BY_ID[cardId];
  if (!card) return;
  const prev = cardRecord(cardId) || { reps: 0, lapses: 0, interval: 0, due: 0 };
  let interval = 0;
  let reps = prev.reps || 0;
  let lapses = prev.lapses || 0;
  let due = nowMs();
  if (rating === "again") {
    interval = 0;
    reps = 0;
    lapses += 1;
    due = nowMs() + 10 * 60000;
  } else if (rating === "hard") {
    reps += 1;
    const seq = [1, 3, 7];
    interval = seq[Math.min(reps - 1, seq.length - 1)];
    due = nowMs() + interval * 86400000;
  } else {
    reps += 1;
    const seq = [1, 7, 14, 30];
    interval = seq[Math.min(reps - 1, seq.length - 1)];
    due = nowMs() + interval * 86400000;
  }
  state.flashcards[cardId] = { due, interval, reps, lapses, last: nowMs(), rating };
  saveState();
  ui.cardFlipped = false;
  const list = flashcardList();
  if (ui.cardIndex >= list.length) ui.cardIndex = 0;
  renderShell();
  renderView();
  toast(rating === "again" ? "Card reagendado para daqui a 10 minutos." : "Revisão agendada em " + interval + " dia" + (interval > 1 ? "s" : "") + ".", "ok");
}

/* ------------------------------ Simulado ------------------------------ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickSimQuestions() {
  const picked = [];
  const used = new Set();
  const poolable = QUESTIONS.filter((q) => q.options.length === 5);
  AREAS.forEach((area) => {
    const need = area.questions;
    let pool = poolable.filter((q) => q.area === area.id && !used.has(q.id));
    pool = shuffle(pool).sort((a, b) => attemptsOf(a.id).length - attemptsOf(b.id).length);
    pool.slice(0, need).forEach((q) => { picked.push(q.id); used.add(q.id); });
  });
  let missing = EXAM.objective.questions - picked.length;
  if (missing > 0) {
    const rest = shuffle(poolable.filter((q) => !used.has(q.id)));
    rest.slice(0, missing).forEach((q) => { picked.push(q.id); used.add(q.id); });
  }
  return shuffle(picked).slice(0, EXAM.objective.questions);
}

function activeSim() { return state.activeSim; }

function simElapsedMs(sim) {
  if (!sim) return 0;
  let ms = sim.elapsed || 0;
  if (sim.runningSince) ms += nowMs() - sim.runningSince;
  return ms;
}

function viewSimulado() {
  if (ui.simResult) {
    const sim = state.sims.find((s) => s.id === ui.simResult);
    if (sim) return simResultView(sim);
    ui.simResult = null;
  }
  const sim = activeSim();
  if (sim) return simInterface(sim);
  return simLanding();
}

function simLanding() {
  const sim = activeSim();
  const history = (state.sims || []).slice().reverse();
  const blueprint = '<div class="table-wrap"><table class="tbl"><thead><tr><th>Área</th><th class="num">Itens</th><th class="num">Pontos</th><th class="num">Banco</th></tr></thead><tbody>' +
    AREAS.map((a) => "<tr><td>" + a.name + '</td><td class="num">' + a.questions + '</td><td class="num">' + (a.questions * EXAM.objective.perQuestion).toFixed(1).replace(".", ",") + '</td><td class="num">' + QUESTIONS.filter((q) => q.area === a.id).length + "</td></tr>").join("") +
    '<tr><td class="strong">Total</td><td class="num strong">' + EXAM.objective.questions + '</td><td class="num strong">100,0</td><td class="num">' + QUESTIONS.length + "</td></tr></tbody></table></div>";

  const historyHtml = history.length
    ? '<div class="table-wrap"><table class="tbl"><thead><tr><th>Data</th><th>Modo</th><th class="num">Acertos</th><th class="num">Nota</th><th>Status</th><th></th></tr></thead><tbody>' +
      history.map((s) => {
        const sc = scoreSim(s);
        return "<tr><td>" + fmtDateTime(s.finishedAt || s.createdAt || nowMs()) + "</td><td>" + (s.mode === "oficial" ? "Oficial" : "Estudo") + '</td><td class="num">' + sc.correct + "/40</td><td class=\"num\"><b>" + sc.score.toFixed(1).replace(".", ",") + '</b></td><td>' +
          (sc.habilitado ? '<span class="badge green">Habilitado</span>' : sc.zeroed.length ? '<span class="badge red">Área zerada</span>' : '<span class="badge warm">Abaixo do corte</span>') +
          '</td><td><button class="btn sm" data-action="sim-result" data-id="' + s.id + '">Ver</button></td></tr>';
      }).join("") + "</tbody></table></div>"
    : '<div class="empty" style="padding:24px"><p>Nenhum simulado finalizado. O primeiro resultado vira seu diagnóstico real — sem estimativa inventada.</p></div>';

  return pageHead("Simulado oficial", "40 itens na distribuição do painel, 5 alternativas e 2,5 pontos por acerto. Cronômetro contínuo ou modo estudo com pausa.", '<span class="badge blue">' + EXAM.objective.questions + " itens · " + EXAM.objective.points + " pts</span>") +
    '<div class="sim-hero"><div><div class="eyebrow" style="color:#93c5fd">Diagnóstico de verdade</div><h2>Uma prova completa, sem repetir item na mesma rodada.</h2><p>O placar por área mostra onde você perderia pontos e se alguma área foi zerada — critério eliminatório. Cada erro alimenta o caderno de erros automaticamente.</p></div>' +
    '<div class="sim-timer"><b>60:00</b><span>limite no modo oficial</span></div></div>' +
    '<div class="grid grid-2 mt-16"><div class="card"><div class="card-head"><div><h3>Começar agora</h3><p>Escolha o modo de aplicação</p></div></div>' +
    '<div class="stack"><button class="btn primary lg block" data-action="start-sim" data-mode="oficial">' + icon("clock", "") + ' Modo oficial — 60 min contínuos</button>' +
    '<button class="btn lg block" data-action="start-sim" data-mode="estudo">' + icon("book", "") + " Modo estudo — com pausa</button>" +
    '<div class="notice info">' + icon("info", "") + "<div>Sem desconto por erro. Responda todas as 40: em branco também conta como erro e pode zerar uma área.</div></div>" +
    '<div class="notice info">' + icon("info", "") + "<div>O simulado usa apenas itens de 5 alternativas. As questões históricas V/F da AP2 continuam disponíveis no banco de questões, mas não entram nos 40 itens.</div></div></div></div>" +
    '<div class="card"><div class="card-head"><div><h3>Distribuição da prova</h3><p>Pesos do painel</p></div></div>' + blueprint + "</div></div>" +
    '<div class="card mt-16"><div class="card-head"><div><h3>Histórico de simulados</h3><p>Resultados reais, salvos neste dispositivo</p></div><span class="badge outline">' + history.length + " finalizados</span></div>" + historyHtml + "</div>" + pageFoot();
}

function simInterface(sim) {
  const order = sim.order;
  const qid = order[ui.simIndex];
  const q = Q_BY_ID[qid];
  const topic = TOPIC_BY_ID[q.topicId];
  const area = AREA_BY_ID[q.area];
  const chosen = sim.answers[qid];
  const flagged = !!(sim.flags && sim.flags[qid]);
  const answered = Object.keys(sim.answers || {}).length;
  const remaining = sim.mode === "oficial" ? Math.max(0, (sim.endsAt || 0) - nowMs()) : simElapsedMs(sim);
  const timerText = sim.mode === "oficial" ? fmtClock(remaining) : fmtClock(remaining);
  const opts = q.options.map((opt, i) => '<button class="option' + (chosen === i ? " selected" : "") + '" data-action="sim-answer" data-index="' + i + '"><span class="letter">' + "ABCDE"[i] + "</span><span>" + esc(opt) + "</span></button>").join("");
  const sheet = order.map((id, i) => {
    const a = sim.answers[id];
    const f = sim.flags && sim.flags[id];
    return '<button class="' + (a != null ? "answered" : "") + (f ? " review" : "") + (i === ui.simIndex ? " current" : "") + '" data-action="sim-goto" data-index="' + i + '"><b>' + (i + 1) + '</b><span class="bubble">' + (a != null ? "ABCDE"[a] : "·") + "</span></button>";
  }).join("");

  return pageHead("Simulado em andamento", (sim.mode === "oficial" ? "Modo oficial · cronômetro contínuo" : "Modo estudo · você pode pausar") + " · rascunho salvo automaticamente", '<span class="badge ' + (sim.mode === "oficial" ? "red" : "blue") + '">' + (sim.mode === "oficial" ? "Oficial" : "Estudo") + "</span>") +
    '<div class="sim-hero"><div><div class="eyebrow" style="color:#93c5fd">Questão ' + (ui.simIndex + 1) + " de " + order.length + "</div><h2>" + answered + " respondidas · " + (order.length - answered) + " em aberto</h2><p>" + (sim.mode === "oficial" ? "O tempo não para. Marque as dúvidas para revisar e volte ao final." : "Use as pausas para consultar o raciocínio, mas evite transformar o simulado em leitura passiva.") + "</p></div>" +
    '<div class="sim-timer"><b id="sim-timer">' + timerText + '</b><span>' + (sim.mode === "oficial" ? "restante" : sim.paused ? "pausado" : "decorrido") + "</span></div></div>" +
    '<div class="sim-q-panel mt-16"><section class="card q-card"><div class="q-meta"><span class="badge outline">' + area.short + '</span><span class="badge ' + TEMP_CLASS[topic.temp] + '">' + TEMP_LABEL[topic.temp] + '</span>' + (flagged ? '<span class="badge warm">Revisar depois</span>' : "") + '<span class="spacer"></span><span class="tiny muted">' + esc(topic.title) + "</span></div>" +
    '<div class="q-stem"><p>' + esc(q.stem) + "</p></div><div class=\"options\">" + opts + "</div>" +
    '<div class="q-actions"><button class="btn" data-action="sim-prev">' + icon("chevronLeft", "") + " Anterior</button>" +
    '<button class="btn" data-action="sim-flag">' + icon("flag", "") + (flagged ? " Remover marcação" : " Revisar depois") + "</button>" +
    '<div class="spacer"></div><button class="btn primary" data-action="sim-next">Próxima ' + icon("chevronRight", "") + "</button></div>" +
    '<div class="notice info mt-16">' + icon("info", "") + "<div>No modo oficial, a correção e o comentário aparecem somente ao finalizar. Não há desconto por erro.</div></div></section>" +
    '<aside class="card sim-side"><div class="card-head"><div><h3>Cartão-resposta</h3><p>Clique para navegar</p></div></div><div class="answer-sheet">' + sheet + '</div>' +
    '<div class="row mt-16" style="gap:6px"><button class="btn sm" data-action="sim-pause"' + (sim.mode === "estudo" ? "" : " disabled") + ">" + icon(sim.paused ? "play" : "pause", "") + (sim.paused ? "Retomar" : "Pausar") + "</button>" +
    '<button class="btn sm danger" data-action="sim-finish">Finalizar</button></div>' +
    '<p class="tiny muted mt-12">Rascunho salvo neste dispositivo. Se sair, retome por esta tela.</p></aside></div>' + pageFoot();
}

function fmtClock(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return (h ? pad2(h) + ":" : "") + pad2(m) + ":" + pad2(s);
}

function simResultView(sim) {
  const sc = scoreSim(sim);
  const status = sc.meta ? ["Meta 90% atingida", "green"] : sc.habilitado ? ["Habilitado", "blue"] : sc.zeroed.length ? ["Eliminado — área zerada", "red"] : ["Abaixo do corte", "warm"];
  const wrong = sim.order.map((id) => Q_BY_ID[id]).filter((q) => (sim.answers || {})[q.id] !== q.answer);
  const byArea = '<div class="table-wrap"><table class="tbl"><thead><tr><th>Área</th><th class="num">Acertos</th><th class="num">Itens</th><th class="num">Pontos</th><th>Status</th></tr></thead><tbody>' +
    sc.byArea.map((r) => "<tr><td>" + AREA_BY_ID[r.area].name + '</td><td class="num">' + r.correct + '</td><td class="num">' + r.total + '</td><td class="num">' + r.points.toFixed(1).replace(".", ",") + "</td><td>" + (r.zero ? '<span class="badge red">Zerada</span>' : '<span class="badge green">OK</span>') + "</td></tr>").join("") + "</tbody></table></div>";
  const wrongHtml = wrong.length
    ? wrong.slice(0, 12).map((q) => {
      const a = (sim.answers || {})[q.id];
      return '<div style="padding:10px 0;border-bottom:1px solid var(--line)"><div class="tiny muted">' + AREA_BY_ID[q.area].short + " · " + esc(TOPIC_BY_ID[q.topicId].title) + '</div><div class="small" style="font-weight:600;margin-top:2px">' + esc(q.stem.slice(0, 170)) + (q.stem.length > 170 ? "…" : "") + '</div><div class="tiny mt-8"><span class="badge red">Sua resposta: ' + (a != null ? "ABCDE"[a] : "em branco") + '</span> <span class="badge green">Gabarito: ' + "ABCDE"[q.answer] + "</span> <a href=\"#/erros\">anotar no caderno</a></div></div>";
    }).join("")
    : '<p class="small muted">Nenhum erro. Use este resultado como diagnóstico, não como garantia: a prova real pode cobrar outros recortes.</p>';

  return pageHead("Resultado do simulado", fmtDateTime(sim.finishedAt || nowMs()) + " · " + (sim.mode === "oficial" ? "modo oficial" : "modo estudo"), '<button class="btn" data-action="sim-new">Novo simulado</button><button class="btn" data-action="sim-history">Histórico</button>') +
    '<div class="card"><div class="result-hero"><div class="score-circle" style="--pct:' + Math.min(100, sc.score) + '%"><div><b>' + sc.score.toFixed(1).replace(".", ",") + "</b><span>de 100</span></div></div>" +
    "<div style=\"flex:1;min-width:240px\"><div class=\"row-wrap\"><span class=\"badge " + status[1] + "\">" + status[0] + "</span><span class=\"badge outline\">" + sc.correct + "/40 acertos</span><span class=\"badge outline\">Corte 50,0</span>" + (sc.meta ? '<span class="badge lime">Meta 90%</span>' : "") + "</div>" +
    '<h2 style="font-size:22px;margin-top:10px">' + (sc.meta ? "Excelente desempenho — mantenha a revisão." : sc.habilitado ? "Você passaria no corte, mas ainda há lacunas." : sc.zeroed.length ? "A nota não basta: área zerada elimina." : "Ainda abaixo do corte mínimo.") + "</h2>" +
    '<p class="small muted mt-8">' + (sc.zeroed.length ? "Áreas zeradas: " + sc.zeroed.map((z) => AREA_BY_ID[z.area].name).join(", ") + ". Volte aos tópicos dessas áreas antes de outro simulado." : "Use o caderno de erros e os flashcards para transformar este resultado em próxima ação.") + "</p>" +
    '<div class="row mt-16"><a class="btn primary" href="#/erros">Abrir caderno de erros</a><a class="btn" href="#/flashcards">Revisar flashcards</a></div></div></div></div>' +
    '<div class="grid grid-2 mt-16"><div class="card"><div class="card-head"><div><h3>Desempenho por área</h3><p>Onde os pontos foram perdidos</p></div></div>' + byArea + "</div>" +
    '<div class="card"><div class="card-head"><div><h3>Questões para revisar</h3><p>Até 12 erros priorizados</p></div><a class="badge red" href="#/erros">' + wrong.length + " erros</a></div>" + wrongHtml + "</div></div>" +
    '<div class="notice warn mt-16">' + icon("alert", "") + "<div>Este resultado é uma medida do seu desempenho neste banco autoral, não uma previsão da prova. O simulado reutiliza itens em rodadas posteriores; o painel mostra o aviso de itens já vistos no histórico.</div></div>" + pageFoot();
}

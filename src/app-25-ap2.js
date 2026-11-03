/* ==========================================================================
   URO 90 — Trilha AP2 2026.2: painel, aulas e progresso
   ========================================================================== */

function ap2ModuleCard(m) {
  const st = ap2ModuleStats(m.id);
  const pct = st.total ? Math.round((st.answered / st.total) * 100) : 0;
  const acc = st.accuracy == null ? "sem diagnóstico" : Math.round(st.accuracy * 100) + "% acerto";
  return '<div class="card ap2-module' + (st.lesson ? " done" : "") + '">' +
    '<div class="lc-top"><span class="badge purple">' + m.code + '</span><span class="badge ' + TEMP_CLASS[m.temp] + '">' + esc(m.priority) + '</span>' +
    (st.lesson ? '<span class="badge green">Aula ok</span>' : "") +
    '<span class="spacer"></span><span class="tiny muted">' + m.minutes + " min</span></div>" +
    "<h3>" + esc(m.title) + "</h3>" +
    "<p>" + esc(m.theme) + "</p>" +
    '<div class="ap2-origin">' + esc(m.origins) + "</div>" +
    '<div class="ap2-module-stats"><span><b>' + st.total + '</b> questões</span><span><b>' + st.answered + '</b> respondidas</span><span><b>' + acc + '</b></span></div>' +
    '<div class="progress sm"><i style="width:' + pct + '%"></i></div>' +
    '<div class="row mt-12" style="gap:6px"><button class="btn sm primary" data-action="open-ap2-lesson" data-module="' + m.id + '">Abrir aula AP2</button>' +
    '<button class="btn sm" data-action="ap2-questions" data-module="' + m.id + '">Treinar ' + st.total + ' questões</button></div></div>';
}

function viewAp2() {
  const overall = ap2Overall();
  const next = ap2NextModule();
  const moduleCards = AP2_MODULES.map(ap2ModuleCard).join("");
  const layers = (AP2_META.layers || []).map((l) =>
    '<div class="ap2-layer"><span class="ap2-layer-n">' + l.n + '</span><div><b>' + esc(l.title) + '</b><p>' + esc(l.desc) + "</p></div></div>"
  ).join("");
  const caveats = AP2_MODULES.map((m) => (m.lesson.caveats || []).map((c) =>
    '<div class="ap2-caveat"><div class="tiny muted">' + m.code + " · " + esc(m.short) + '</div><b>' + esc(c.title) + "</b><p>" + esc(c.body) + "</p></div>"
  ).join("")).join("");
  const sources = AP2_SOURCES.map((s) =>
    "<tr><td><b>" + esc(s.title) + "</b><div class=\"tiny muted\">" + esc(s.org) + " · " + esc(s.type) + "</div></td><td class=\"wrap\">" + esc(s.note) + (s.url ? ' <a href="' + esc(s.url) + '" target="_blank" rel="noopener">abrir</a>' : "") + "</td></tr>"
  ).join("");

  const actions = '<span class="badge purple">' + overall.modules + " módulos</span>" +
    '<span class="badge ' + (overall.answered ? "green" : "outline") + '">' + overall.answered + "/" + overall.total + " questões</span>" +
    '<button class="btn" data-action="export-ap2">' + icon("download", "") + " CSV</button>";

  return pageHead("AP2 2026.2 — Compilado definitivo", "Trilha específica construída a partir do PDF de revisão: 4 módulos, 36 questões históricas e atualização clínica 2026. O banco amplo continua disponível.", actions) +
    '<div class="ap2-hero"><div><div class="eyebrow">MEDCID · UEA/ESA · revisão 2026.2</div><h2>Três camadas, um só objetivo: entender o gabarito e a prática atual.</h2>' +
    "<p>" + esc(AP2_META.scope) + "</p>" +
    '<div class="ap2-hero-stats"><div><b>' + overall.modules + '</b><span>módulos</span></div><div><b>' + overall.total + '</b><span>questões históricas</span></div><div><b>' + overall.lessonsDone + "/" + overall.modules + '</b><span>aulas concluídas</span></div><div><b>' + (overall.accuracy == null ? "—" : Math.round(overall.accuracy * 100) + "%") + '</b><span>acurácia AP2</span></div></div></div>' +
    '<div class="ap2-next"><div class="tiny" style="color:#c4b5fd;text-transform:uppercase;letter-spacing:.1em">Próximo passo</div>' +
    (next ? "<b>" + next.code + " · " + esc(next.title) + "</b><p>" + esc(next.summary) + "</p>" +
      '<div class="row mt-8"><button class="btn primary sm" data-action="open-ap2-lesson" data-module="' + next.id + '">Estudar agora ' + icon("arrow", "") + "</button>" +
      '<button class="btn sm" data-action="ap2-questions" data-module="' + next.id + '">Só questões</button></div>'
      : "<b>Trilha concluída.</b><p>Você marcou as 4 aulas e respondeu aos 36 itens. Refaça os erros e use o simulado para consolidar.</p>") + "</div></div>" +
    '<div class="notice info mt-16">' + icon("info", "") + "<div><b>Escopo honesto:</b> " + esc(AP2_META.caveat) + "</div></div>" +
    '<div class="grid grid-3 mt-16">' + layers + "</div>" +
    '<div class="card mt-16"><div class="card-head"><div><h3>Módulos da AP2</h3><p>Abra a aula, leia as atualizações 2026 e treine as questões históricas com comentário.</p></div><span class="badge outline">' + overall.lessonsDone + "/" + overall.modules + ' aulas</span></div><div class="grid grid-2">' + moduleCards + "</div></div>" +
    '<div class="grid grid-2 mt-16"><div class="card"><div class="card-head"><div><h3>Como usar sem se perder</h3><p>Método de 3 passadas</p></div></div><ol class="ap2-steps">' +
    "<li><b>Leia a aula do módulo.</b> Fixe a fisiopatologia/conduta-base antes de olhar o gabarito.</li>" +
    "<li><b>Responda às questões históricas.</b> O comentário mostra por que cada alternativa está certa ou errada; o gabarito antigo é preservado.</li>" +
    "<li><b>Leia a caixa 2026.</b> Quando a prática mudou, a diferença é explícita. Não apague o gabarito histórico: entenda o contexto da banca.</li>" +
    "<li><b>Volte pelo caderno de erros.</b> Erro corrigido vale mais que aula nova; refaça os itens e leia a regra de ouro.</li></ol>" +
    '<div class="notice warn mt-12">' + icon("alert", "") + "<div><b>Não é previsão de prova.</b> O programa 2026.2 não distribui oficialmente cada tema por prova. As questões são históricas e a origem é preservada.</div></div></div>" +
    '<div class="card"><div class="card-head"><div><h3>Atualizações 2026</h3><p>Onde o ensino antigo diverge da prática</p></div><span class="badge green">' + AP2_MODULES.reduce((a, m) => a + (m.lesson.caveats || []).length, 0) + " notas</span></div><div class=\"ap2-caveat-list\">" + caveats + "</div></div></div>" +
    '<div class="card mt-16"><div class="card-head"><div><h3>Fontes e rastreabilidade</h3><p>Material-base, diretrizes e protocolo</p></div><span class="badge outline">' + AP2_SOURCES.length + " fontes</span></div><div class=\"table-wrap\"><table class=\"tbl\"><thead><tr><th>Fonte</th><th>Uso</th></tr></thead><tbody>" + sources + "</tbody></table></div>" +
    '<p class="tiny muted mt-12">Plataforma autoral de revisão. O conteúdo resume o material da disciplina e diretrizes públicas; não substitui a aula, o professor ou avaliação médica individual.</p></div>' +
    pageFoot();
}

function openAp2Lesson(moduleId) {
  const m = AP2_BY_ID[moduleId];
  if (!m) return;
  const lesson = m.lesson;
  const done = ap2LessonDone(moduleId);
  const root = $("#modal-root");
  if (!root) return;
  const caveats = (lesson.caveats || []).map((c) =>
    '<div class="callout warn"><strong>' + esc(c.title) + ":</strong> " + esc(c.body) + "</div>"
  ).join("");
  root.innerHTML = '<div class="modal-backdrop" data-action="close-modal"><div class="modal wide" role="dialog" aria-modal="true" aria-label="Aula AP2: ' + esc(lesson.title) + '" data-modal-panel>' +
    '<div class="modal-head"><div><div class="lesson-meta-line"><span class="badge purple">AP2 · ' + m.code + '</span><span class="badge ' + TEMP_CLASS[m.temp] + '">' + esc(m.priority) + '</span><span class="tiny muted">' + m.minutes + " min de leitura</span></div>" +
    "<h2>" + esc(lesson.title) + "</h2><p>" + esc(m.origins) + "</p></div>" +
    '<button class="modal-close" data-action="close-modal" aria-label="Fechar">' + icon("x", "") + "</button></div>" +
    '<div class="modal-body"><div class="lesson-body">' + lesson.sections.concept + lesson.sections.practice + lesson.sections.retention +
    "<h2>Atualizações 2026</h2>" + (caveats || '<p class="small muted">Sem divergência registrada para este módulo.</p>') +
    "<h2>Regras de ouro do módulo</h2><ul>" + (lesson.rules || []).map((r) => "<li>" + esc(r) + "</li>").join("") + "</ul>" +
    "<h2>Pegadinhas da banca</h2><ul>" + (lesson.pitfalls || []).map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul>" +
    '<div class="callout green"><strong>Fonte técnica/normativa:</strong> ' + esc(lesson.source) + ". O gabarito histórico é preservado; a atualização 2026 é indicada separadamente. Confira a versão vigente da diretriz e o material da sua disciplina.</div>" +
    "</div></div>" +
    '<div class="modal-foot"><button class="btn ' + (done ? "" : "success") + '" data-action="ap2-lesson-done" data-module="' + m.id + '">' + (done ? "Desmarcar estudada" : "Marcar como estudada") + "</button>" +
    '<button class="btn primary" data-action="ap2-questions" data-module="' + m.id + '">Treinar ' + m.questions + ' questões ' + icon("arrow", "") + "</button>" +
    '<div class="spacer"></div><button class="btn ghost" data-action="close-modal">Fechar</button></div></div></div>';
  document.body.style.overflow = "hidden";
  ui.modalOpen = true;
  const close = $("[data-action='close-modal']", root);
  if (close) close.focus();
}

function toggleAp2LessonDone(moduleId) {
  const key = "ap2:" + moduleId;
  if (ap2LessonDone(moduleId)) delete state.lessons[key];
  else state.lessons[key] = { done: true, at: nowMs() };
  saveState();
  const btn = $('[data-action="ap2-lesson-done"][data-module="' + moduleId + '"]');
  if (btn) {
    const done = ap2LessonDone(moduleId);
    btn.textContent = done ? "Desmarcar estudada" : "Marcar como estudada";
    btn.className = "btn " + (done ? "" : "success");
  }
  renderShell();
  renderView();
  toast(ap2LessonDone(moduleId) ? "Aula AP2 marcada como estudada." : "Marcação removida.", "ok");
}

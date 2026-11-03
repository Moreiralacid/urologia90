/* ==========================================================================
   URO 90 — Shell, rotas, dashboard e plano diário
   ========================================================================== */

const ROUTES = ["dashboard", "plano", "aulas", "ap2", "questoes", "flashcards", "simulado", "casos", "erros", "pareto", "materiais", "config"];

const NAV = [
  { group: "Painel", items: [{ id: "dashboard", label: "Visão geral", icon: "grid" }] },
  { group: "Estudo", items: [
    { id: "plano", label: "Plano de hoje", icon: "calendar" },
    { id: "aulas", label: "Aulas", icon: "book" },
    { id: "ap2", label: "AP2 2026.2", icon: "target" },
    { id: "questoes", label: "Questões", icon: "help" },
    { id: "flashcards", label: "Flashcards", icon: "layers" },
    { id: "simulado", label: "Simulado", icon: "clock" },
    { id: "casos", label: "Casos clínicos", icon: "edit" },
    { id: "erros", label: "Caderno de erros", icon: "alert" }
  ] },
  { group: "Método", items: [
    { id: "pareto", label: "Pareto 90", icon: "target" },
    { id: "materiais", label: "Materiais & prova", icon: "library" }
  ] },
  { group: "Sistema", items: [{ id: "config", label: "Meu plano & backup", icon: "settings" }] }
];

const PAGE = {
  dashboard: { title: "Visão geral", sub: "Retrato honesto do seu preparo — sem métricas fictícias" },
  plano: { title: "Plano de hoje", sub: "Blocos que cabem no seu tempo até a prova" },
  aulas: { title: "Aulas", sub: "28 tópicos densos, com pegadinhas e fontes" },
  ap2: { title: "AP2 2026.2", sub: "4 módulos, 36 questões históricas e atualização clínica 2026" },
  questoes: { title: "Questões", sub: "96 itens comentados: 60 amplos + 36 históricos AP2" },
  flashcards: { title: "Flashcards", sub: "Recordação ativa com repetição espaçada" },
  simulado: { title: "Simulado oficial", sub: "40 itens, distribuição por área e cartão-resposta" },
  casos: { title: "Casos clínicos", sub: "Treino dissertativo com rubrica e espelho de resposta" },
  erros: { title: "Caderno de erros", sub: "O que você errou por último e a regra de ouro" },
  pareto: { title: "Pareto 90", sub: "Macro, meso, micro e ranking pessoal de reforço" },
  materiais: { title: "Materiais & prova", sub: "Fontes oficiais, dados auditados e cobertura" },
  config: { title: "Meu plano & backup", sub: "Configuração, exportação e portabilidade" }
};

const ui = {
  route: "dashboard",
  lessonArea: "all", lessonTemp: "all", lessonQ: "",
  qArea: "all", qTopic: "all", qStatus: "all", qBank: "all", qModule: "all", qSearch: "", qIndex: 0, qChoice: null, qRetest: false, qFocus: null,
  cardMode: "queue", cardIndex: 0, cardFlipped: false, cardArea: "all",
  caseId: null, caseExpected: false,
  materialType: "all", materialSearch: "",
  simIndex: 0, simResult: null, simFinishing: false,
  errorsSearch: "",
  pomo: { seconds: 25 * 60, running: false, endAt: null, mode: "focus" },
  modalOpen: false
};

function routeFromHash() {
  const h = (location.hash || "").replace(/^#\/?/, "").split("?")[0];
  return ROUTES.includes(h) ? h : "dashboard";
}

function navItem(item) {
  let badge = "";
  if (item.id === "questoes") badge = '<span class="nav-badge gray">' + globalStats().answered + "/" + QUESTIONS.length + "</span>";
  if (item.id === "flashcards") {
    const d = dueCards().length;
    if (d) badge = '<span class="nav-badge red">' + d + "</span>";
  }
  if (item.id === "erros") {
    const e = errorQuestions().length;
    if (e) badge = '<span class="nav-badge red">' + e + "</span>";
  }
  const active = ui.route === item.id ? " active" : "";
  return '<a class="nav-item' + active + '" href="#/' + item.id + '">' + icon(item.icon) + "<span>" + item.label + "</span>" + badge + "</a>";
}

function renderShell() {
  const name = (state.settings.name || "").trim();
  const initials = name ? name.split(/\s+/).map((x) => x[0]).slice(0, 2).join("").toUpperCase() : "U9";
  const sb = $("#sidebar");
  if (sb) {
    sb.innerHTML =
      '<div class="brand"><div class="brand-mark">U90</div><div><div class="brand-name">URO <b>90</b></div><div class="brand-sub">Reta final · urologia</div></div></div>' +
      '<nav class="nav">' + NAV.map((g) => '<div class="nav-label">' + g.group + "</div>" + g.items.map(navItem).join("")).join("") + "</nav>" +
      '<div class="sidebar-foot"><div><span class="save-dot" id="save-dot"></span><strong id="save-status">Salvo</strong></div>' +
      '<div class="mt-8">Backup JSON em <b>Meu Plano</b></div>' +
      '<div class="tiny mt-8" style="color:var(--muted-2)">Conteúdo autoral · diretrizes 2025/2026</div></div>';
  }

  const page = PAGE[ui.route] || PAGE.dashboard;
  const ms = msToExam();
  const dark = getTheme() === "dark";
  const themeLabel = dark ? "Claro" : "Escuro";
  const top = $("#topbar");
  if (top) {
    top.innerHTML =
      '<button class="btn ghost menu-btn" data-action="menu" aria-label="Abrir menu">' + icon("menu", "") + "</button>" +
      "<div><div class=\"topbar-title\">" + page.title + '</div><div class="topbar-sub">' + page.sub + "</div></div>" +
      '<div class="topbar-right">' +
      '<button class="btn theme-btn" data-action="toggle-theme" aria-label="Ativar modo ' + themeLabel.toLowerCase() + '" title="Ativar modo ' + themeLabel.toLowerCase() + '">' + icon(dark ? "sun" : "moon", "") + '<span class="theme-label">' + themeLabel + "</span></button>" +
      '<div class="countdown-pill"><span class="dot"></span><span>Prova em <b id="countdown-text">' + fmtCountdown(ms) + "</b></span></div>" +
      '<div class="profile-chip"><div class="avatar">' + initials + "</div><span>" + esc(name || "Estudante") + "</span></div></div>";
  }
  document.title = "URO 90 · " + page.title;
}

function render() {
  ui.route = routeFromHash();
  renderShell();
  renderView();
  updateLiveClocks();
}

function renderView() {
  const view = $("#view");
  if (!view) return;
  let html = "";
  switch (ui.route) {
    case "dashboard": html = viewDashboard(); break;
    case "plano": html = viewPlan(); break;
    case "aulas": html = viewLessons(); break;
    case "ap2": html = viewAp2(); break;
    case "questoes": html = viewQuestions(); break;
    case "flashcards": html = viewFlashcards(); break;
    case "simulado": html = viewSimulado(); break;
    case "casos": html = viewCases(); break;
    case "erros": html = viewErrors(); break;
    case "pareto": html = viewPareto(); break;
    case "materiais": html = viewMaterials(); break;
    case "config": html = viewConfig(); break;
    default: html = viewDashboard();
  }
  view.innerHTML = html;
  const sb = $("#sidebar");
  if (sb) sb.classList.remove("open");
}

function pageHead(title, sub, actions) {
  return '<div class="page-head"><div><h1>' + title + "</h1><p>" + sub + "</p></div>" +
    (actions ? '<div class="page-actions">' + actions + "</div>" : "") + "</div>";
}

function pageFoot() {
  return '<div class="foot-note"><span>URO 90 v' + META.version + "</span><span>Conteúdo autoral baseado em EAU/AUA/SBU/MSD.</span><span>Não substitui avaliação médica nem o material da disciplina.</span></div>";
}

function fmtMinutes(m) {
  const h = Math.floor(m / 60), r = m % 60;
  if (h && r) return h + "h" + pad2(r);
  if (h) return h + "h";
  return r + " min";
}

/* ------------------------------ Dashboard ------------------------------ */
function viewDashboard() {
  const plan = buildPlan();
  const st = globalStats();
  const due = dueCards().length;
  const newc = newCards().length;
  const errs = errorQuestions().length;
  const ap2 = ap2Overall();
  const cov = coveragePct();
  const doneLessons = lessonCountDone();
  const ms = msToExam();
  const exam = examDate();
  const focus = focusBlock(plan);
  const sims = state.sims || [];
  const lastSim = sims.length ? sims[sims.length - 1] : null;
  const lastScored = lastSim ? scoreSim(lastSim) : null;
  const circumference = 2 * Math.PI * 66;
  const offset = circumference * (1 - cov / 100);

  let headline = "Sua prova de Urologia está próxima.";
  let sub = "Use as prioridades certas: oncologia, litíase, infecções e emergências rendem mais pontos por minuto.";
  if (ms <= 0) {
    headline = "A prova já passou — ou a data está incorreta.";
    sub = "Ajuste a data e o horário em Meu Plano & Backup para recalcular a contagem e o cronograma.";
  } else if (ms < 12 * 3600000) {
    headline = "É hoje. Modo execução.";
    sub = "Nada de conteúdo novo: flashcards, caderno de erros e checklist logístico. Confie no que já foi treinado.";
  } else if (ms < 36 * 3600000) {
    headline = "É amanhã. Reta final de alto rendimento.";
    sub = "Um dia não é pouco: priorize emergências, condutas iniciais e as regras que mais aparecem. Durma 7–8 h.";
  } else {
    const days = Math.ceil(ms / 86400000);
    headline = "Sua prova em " + days + " dias.";
    sub = "O plano prioriza os tópicos quentes e transforma leitura em prática. Ajuste a data se necessário.";
  }

  const ring =
    '<div class="hero-ring"><div class="ring-wrap"><svg width="156" height="156" viewBox="0 0 156 156">' +
    '<defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#a3e635"/><stop offset="100%" stop-color="#059669"/></linearGradient></defs>' +
    '<circle class="ring-bg" cx="78" cy="78" r="66" fill="none" stroke-width="11"/>' +
    '<circle class="ring-fg" cx="78" cy="78" r="66" fill="none" stroke-width="11" stroke-dasharray="' + circumference.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"/>' +
    '</svg><div class="ring-center"><b>' + cov + "%</b><span>cobertura</span></div></div>" +
    '<div class="ring-caption"><b style="color:#f8fafc">' + doneLessons + " de " + TOPICS.length + "</b> aulas concluídas<br><span style=\"color:#94a3b8\">" + QUESTIONS.length + " questões · " + CARDS.length + " flashcards</span></div></div>";

  const focusHtml = focus
    ? '<div class="card"><div class="card-head"><div><h3>Foco agora' + (ms < 36 * 3600000 ? " · reta final" : "") + '</h3><p>' + (focus.start <= nowMs() && focus.end > nowMs() ? "Bloco em andamento" : "Próximo bloco pendente") + "</p></div><span class=\"badge " + (focus.type === "sim" ? "red" : focus.type === "cycle" ? "lime" : "blue") + '">' + fmtTime(focus.start) + "–" + fmtTime(focus.end) + "</span></div>" +
      '<div style="font-weight:700;font-size:15px;letter-spacing:-.02em">' + esc(focus.title) + "</div>" +
      '<p class="small muted mt-8">' + esc(focus.desc) + "</p>" +
      '<div class="row mt-16">' + blockAction(focus, "primary") + '<a class="btn" href="#/plano">Ver plano completo ' + icon("arrow", "") + "</a></div></div>"
    : '<div class="card"><div class="card-head"><div><h3>Foco agora</h3><p>Sem bloco pendente</p></div><span class="badge green">Em dia</span></div>' +
      "<p class=\"small muted\">Ou a prova é hoje, ou você concluiu o plano. Vá para o checklist do dia ou revise flashcards.</p>" +
      '<div class="row mt-16"><a class="btn primary" href="#/flashcards">Revisar flashcards</a><a class="btn" href="#/plano">Checklist</a></div></div>';

  const pomo = ui.pomo;
  const pomoMin = Math.floor(pomo.seconds / 60), pomoSec = pomo.seconds % 60;
  const pomoHtml = '<div class="card"><div class="card-head"><div><h3>Pomodoro</h3><p>25 min de foco, 5 de pausa</p></div><span class="badge outline">' + (state.pomodoro.sessions || 0) + " sessões</span></div>" +
    '<div class="pomodoro"><div class="pomo-time" id="pomo-time">' + pad2(pomoMin) + ":" + pad2(pomoSec) + "</div>" +
    '<div class="pomo-actions">' + (pomo.running
      ? '<button class="btn" data-action="pomo-pause">' + icon("pause", "") + "Pausar</button>"
      : '<button class="btn primary" data-action="pomo-start">' + icon("play", "") + "Iniciar</button>") +
    '<button class="btn ghost" data-action="pomo-reset" aria-label="Reiniciar">' + icon("rotate", "") + "</button></div></div>" +
    '<div class="pomo-label mt-12">' + (pomo.running ? "Foco em andamento" : "Pronto para começar") + "</div></div>";

  const hot = TOPICS.filter((t) => t.temp === "hot").slice(0, 5);
  const priorityRows = hot.map((t) => {
    const s = topicStats(t.id);
    const area = AREA_BY_ID[t.area];
    const done = lessonDone(t.id);
    return '<div class="row" style="padding:9px 0;border-bottom:1px solid var(--line);gap:10px">' +
      '<div style="flex:1;min-width:0"><div style="font-size:12.5px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(t.title) + '</div>' +
      '<div class="tiny muted">' + area.short + " · " + (s.accuracy == null ? "Sem diagnóstico (0 tentativas)" : Math.round(s.accuracy * 100) + "% em " + s.attempts + " tentativas") + "</div></div>" +
      (done ? '<span class="badge green">Aula ok</span>' : '<span class="badge ' + TEMP_CLASS[t.temp] + '">' + TEMP_LABEL[t.temp] + "</span>") +
      '<button class="btn sm" data-action="open-lesson" data-topic="' + t.id + '">Abrir</button></div>';
  }).join("");

  const arch =
    '<div class="table-wrap"><table class="tbl"><thead><tr><th>Componente</th><th class="num">Itens</th><th class="num">Valor</th><th>Corte / regra</th><th class="num">Meta 90%</th></tr></thead><tbody>' +
    "<tr><td class=\"strong\">Prova objetiva</td><td class=\"num\">40</td><td class=\"num\">100,0 pts</td><td>≥ 50,0 e ≥ 1 acerto por área</td><td class=\"num\">90,0 (36/40)</td></tr>" +
    "<tr><td class=\"strong\">Caso clínico</td><td class=\"num\">1</td><td class=\"num\">10,0 pts</td><td>≥ 5,0 na rubrica</td><td class=\"num\">9,0</td></tr>" +
    "<tr><td class=\"strong\">Global</td><td class=\"num\">—</td><td class=\"num\">110,0 pts</td><td>Objetiva + caso</td><td class=\"num\">99,0</td></tr>" +
    "</tbody></table></div>";

  const ap2Html = AP2_MODULES.length ? '<div class="card mt-16"><div class="card-head"><div><h3>AP2 2026.2 — trilha específica</h3><p>' + ap2.modules + ' módulos · ' + ap2.total + ' questões históricas · gabarito antigo + atualização 2026</p></div><a class="badge purple" href="#/ap2">Abrir trilha</a></div>' +
    '<div class="grid grid-2 mt-8">' + AP2_MODULES.map((m) => {
      const st = ap2ModuleStats(m.id);
      return '<div class="ap2-mini"><div class="row" style="gap:8px;align-items:center"><span class="badge purple">' + m.code + '</span><b class="small" style="flex:1;min-width:0">' + esc(m.title) + '</b>' + (st.lesson ? '<span class="badge green">Aula ok</span>' : "") + '</div>' +
        '<div class="tiny muted mt-8">' + st.answered + "/" + st.total + " questões · " + (st.accuracy == null ? "sem diagnóstico" : Math.round(st.accuracy * 100) + "% acerto") + '</div>' +
        '<div class="progress sm mt-8"><i style="width:' + (st.total ? Math.round((st.answered / st.total) * 100) : 0) + '%"></i></div></div>';
    }).join("") + "</div>" +
    '<div class="row mt-12"><span class="small muted">' + ap2.lessonsDone + " de " + ap2.modules + " aulas AP2 concluídas · " + (ap2.accuracy == null ? "sem tentativas no bloco" : "acurácia " + Math.round(ap2.accuracy * 100) + "%") + '</span><span class="spacer"></span><a class="btn sm" href="#/ap2">Ver módulos e fontes ' + icon("arrow", "") + "</a></div></div>" : "";

  return pageHead("Olá" + (state.settings.name ? ", " + esc(state.settings.name.split(" ")[0]) : "") + ".", "Seu painel de reta final em urologia — dados reais, prioridades explícitas e nenhuma promessa de adivinhação.", "") +
    '<div class="hero"><div><div class="eyebrow">Reta final · ' + (ms > 0 ? fmtCountdown(ms) + " até a prova" : "prova encerrada") + "</div>" +
    "<h1>" + headline + "</h1><p>" + sub + "</p>" +
    '<div class="hero-stats"><div class="hero-stat"><b>' + TOPICS.length + '</b><span>tópicos</span></div><div class="hero-stat"><b>' + QUESTIONS.length + '</b><span>questões</span></div><div class="hero-stat"><b>' + CARDS.length + '</b><span>flashcards</span></div><div class="hero-stat"><b class="accent">' + (st.attempts ? Math.round(st.accuracy * 100) + "%" : "—") + '</b><span>acurácia real</span></div></div></div>' + ring + "</div>" +

    '<div class="grid grid-kpi mt-16">' +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico blue">' + icon("clock", "") + '</div><span class="kpi-label">Tempo até a prova</span></div><div class="kpi-value">' + fmtCountdown(ms) + '</div><div class="kpi-foot">' + (isNaN(exam.getTime()) ? "Data inválida" : fmtDateLong(exam.getTime()) + " · " + fmtTime(exam.getTime())) + "</div></div>" +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico lime">' + icon("help", "") + '</div><span class="kpi-label">Questões respondidas</span></div><div class="kpi-value">' + st.answered + "<small>/" + QUESTIONS.length + '</small></div><div class="kpi-foot ' + (st.attempts ? "good" : "") + '">' + (st.attempts ? "Acurácia " + Math.round(st.accuracy * 100) + "% em " + st.attempts + " tentativas" : "Sem diagnóstico (0 tentativas)") + "</div></div>" +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico green">' + icon("book", "") + '</div><span class="kpi-label">Aulas concluídas</span></div><div class="kpi-value">' + doneLessons + "<small>/" + TOPICS.length + '</small></div><div class="kpi-foot"><div class="progress sm mt-8"><i style="width:' + cov + '%"></i></div></div></div>' +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico amber">' + icon("layers", "") + '</div><span class="kpi-label">Flashcards vencidos</span></div><div class="kpi-value">' + due + '</div><div class="kpi-foot ' + (due > 15 ? "warn" : "") + '">' + newc + " novos · " + matureCards().length + " maduros</div></div></div>" +

    '<div class="grid grid-3 mt-16" style="grid-template-columns:minmax(0,1.15fr) minmax(0,1fr) minmax(0,.85fr)">' +
    focusHtml +
    '<div class="card"><div class="card-head"><div><h3>Prioridades de hoje</h3><p>Quentes por peso e lacuna</p></div><a class="badge blue" href="#/pareto">Pareto</a></div>' + priorityRows + "</div>" +
    pomoHtml + "</div>" +

    (errs ? '<div class="notice warn mt-16">' + icon("alert", "") + "<div><b>" + errs + " questão" + (errs > 1 ? "ões" : "") + " no caderno de erros.</b> Reteste os itens errados antes de avançar: erro corrigido vale mais que aula nova. <a href=\"#/erros\">Abrir caderno</a></div></div>" : "") +
    ap2Html +

    '<div class="grid grid-2 mt-16">' +
    '<div class="card"><div class="card-head"><div><h3>Arquitetura da nota e meta</h3><p>Formato de referência do simulado</p></div><span class="badge lime">Meta 90%</span></div>' + arch +
    '<p class="tiny muted mt-12">A meta de 90% é uma referência de preparação, não uma previsão. O status de habilitação exige nota mínima global e pelo menos 1 acerto em cada área.</p></div>' +
    '<div class="card"><div class="card-head"><div><h3>Diagnóstico honesto</h3><p>O que os dados permitem afirmar</p></div><span class="badge outline">sem invenção</span></div>' +
    '<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span class="small">Simulado oficial</span><b class="small">' + (lastScored ? lastScored.score.toFixed(1).replace(".", ",") + " / 100" : "Sem simulado") + "</b></div>" +
    '<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span class="small">Acurácia em questões</span><b class="small">' + (st.attempts ? Math.round(st.accuracy * 100) + "%" : "Sem diagnóstico") + "</b></div>" +
    '<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span class="small">Meta pessoal</span><b class="small">' + (state.settings.meta || 90) + "%</b></div>" +
    '<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span class="small">Cobertura de aulas</span><b class="small">' + cov + "%</b></div>" +
    '<div class="row" style="justify-content:space-between;padding:8px 0"><span class="small">Casos clínicos salvos</span><b class="small">' + Object.keys(state.cases).length + " / " + CASES.length + "</b></div>" +
    (lastScored && lastScored.zeroed.length ? '<div class="notice danger mt-12">' + icon("alert", "") + "<div>Último simulado com área zerada: <b>" + lastScored.zeroed.map((z) => AREA_BY_ID[z.area].name).join(", ") + "</b>. Isso elimina, independentemente da nota total.</div></div>" : "") +
    '<p class="tiny muted mt-12">Enquanto não houver tentativas, o painel mostra “Sem diagnóstico”. Nenhum KPI é preenchido com números fictícios.</p></div></div>' +

    pageFoot();
}

function blockAction(block, style) {
  if (!block) return "";
  const cls = "btn " + (style || "sm");
  if (block.action === "lesson" && block.topicId) return '<button class="' + cls + '" data-action="open-lesson" data-topic="' + block.topicId + '">Abrir aula ' + icon("arrow", "") + "</button>";
  if (block.action === "ap2" && block.ap2Module) return '<button class="' + cls + '" data-action="open-ap2-lesson" data-module="' + block.ap2Module + '">Abrir AP2 ' + icon("arrow", "") + "</button>";
  if (block.action === "sim") return '<a class="' + cls + '" href="#/simulado">Abrir simulado ' + icon("arrow", "") + "</a>";
  if (block.action === "cards") return '<a class="' + cls + '" href="#/flashcards">Flashcards ' + icon("arrow", "") + "</a>";
  if (block.action === "errors") return '<a class="' + cls + '" href="#/erros">Caderno de erros ' + icon("arrow", "") + "</a>";
  return '<a class="' + cls + '" href="#/questoes">Praticar ' + icon("arrow", "") + "</a>";
}

/* ------------------------------ Plano ------------------------------ */
function viewPlan() {
  const plan = buildPlan();
  const exam = examDate();
  const examDay = isSameDay(new Date(), exam);
  const now = nowMs();

  let summary = '<div class="grid grid-3 mt-16">' +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico blue">' + icon("clock", "") + '</div><span class="kpi-label">Carga solicitada</span></div><div class="kpi-value">' + fmtMinutes(plan.requested) + '</div><div class="kpi-foot">' + (plan.capped ? "Reduzida para caber na janela" : "Cabe na janela até a prova") + "</div></div>" +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico green">' + icon("calendar", "") + '</div><span class="kpi-label">Plano efetivo</span></div><div class="kpi-value">' + (plan.valid ? fmtMinutes(plan.budget) : "—") + '</div><div class="kpi-foot">' + (plan.valid ? fmtTime(plan.start) + " → " + fmtTime(plan.end) : "Sem janela disponível") + "</div></div>" +
    '<div class="card kpi"><div class="kpi-top"><div class="kpi-ico amber">' + icon("book", "") + '</div><span class="kpi-label">Cobertura do plano</span></div><div class="kpi-value">' + plan.topics + "<small>/" + TOPICS.length + '</small></div><div class="kpi-foot">' + (plan.topics ? "Tópicos prioritários no dia" : "Aulas disponíveis na biblioteca") + "</div></div></div>";

  let body = "";
  if (examDay) {
    body = '<div class="notice danger mt-16">' + icon("alert", "") + "<div><b>É dia de prova.</b> Não há blocos de estudo programados. Use apenas o checklist logístico e a revisão leve de flashcards. Chegue com 60 minutos de antecedência.</div></div>" +
      '<div class="card mt-16"><div class="card-head"><div><h3>Checklist do dia da prova</h3><p>Execução, logística e controle de tempo</p></div><span class="badge red">Hoje</span></div>' + checklistHtml("prova", CHECKLISTS.prova) + "</div>" +
      '<div class="card mt-16"><div class="card-head"><div><h3>Véspera — se ainda não marcou</h3><p>Confira o que ficou pendente</p></div></div>' + checklistHtml("vespera", CHECKLISTS.vespera) + "</div>";
    return pageHead("Plano de hoje", "A prova é hoje: o plano vira checklist de execução.", '<a class="btn" href="#/flashcards">Revisão leve</a>') + summary + body + pageFoot();
  }

  if (!plan.valid) {
    body = '<div class="notice warn mt-16">' + icon("alert", "") + "<div><b>Não há janela útil para montar o plano.</b> " +
      (plan.past ? "A data da prova já passou. Atualize em Meu Plano & Backup." : "O horário de início está muito próximo do fim do dia ou da prova. Ajuste a carga, o horário ou a data.") +
      '</div></div><div class="card mt-16"><div class="empty"><div class="ico">' + icon("calendar", "") + '</div><h3>Ajuste seu plano</h3><p>Defina uma data de prova futura e um horário de início com pelo menos 30 minutos livres.</p><a class="btn primary mt-12" href="#/config">Abrir configurações</a></div></div>';
    return pageHead("Plano de hoje", "O cronograma precisa de uma janela realista até a prova.", "") + summary + body + pageFoot();
  }

  if (plan.capped) {
    body += '<div class="notice warn mt-16">' + icon("alert", "") + "<div><b>Sua carga não cabe inteira antes do descanso.</b> Você pediu " + fmtMinutes(plan.requested) + ", mas a janela até 23h45 permite " + fmtMinutes(plan.budget) + ". O plano foi reduzido e prioriza o essencial. Durma — virar a noite reduz o desempenho.</div></div>";
  }

  const groups = {};
  plan.blocks.forEach((b) => {
    const key = ymd(new Date(b.start));
    groups[key] = groups[key] || [];
    groups[key].push(b);
  });

  let timeline = "";
  Object.keys(groups).forEach((key) => {
    timeline += '<div class="mt-16"><div class="eyebrow">' + fmtDateLong(groups[key][0].start) + "</div>";
    groups[key].forEach((b) => {
      const isCurrent = !b.done && b.start <= now && b.end > now && b.type !== "break";
      if (b.type === "break") {
        timeline += '<div class="tl-item mt-8"><div class="tl-dot"></div><div class="tl-time">' + fmtTime(b.start) + "–" + fmtTime(b.end) + ' · pausa</div><div class="tl-body"><div class="tl-title" style="font-weight:500;color:var(--muted)">' + esc(b.title) + '</div><div class="tl-desc">' + esc(b.desc) + "</div></div></div>";
        return;
      }
      timeline += '<div class="tl-item' + (b.done ? " done" : "") + (isCurrent ? " current-block" : "") + '"><div class="tl-dot"></div>' +
        '<div class="tl-time">' + fmtTime(b.start) + "–" + fmtTime(b.end) + " · " + b.minutes + " min" + (isCurrent ? " · agora" : "") + "</div>" +
        '<div class="tl-body"><div class="tl-title">' + esc(b.title) +
        (b.topicId ? ' <span class="badge ' + TEMP_CLASS[TOPIC_BY_ID[b.topicId].temp] + '">' + TEMP_LABEL[TOPIC_BY_ID[b.topicId].temp] + "</span>" : "") +
        (b.ap2Module ? ' <span class="badge purple">AP2</span>' : "") +
        (b.done ? ' <span class="badge green">Concluído</span>' : "") + "</div>" +
        '<div class="tl-desc">' + esc(b.desc) + "</div>" +
        '<div class="row mt-8"><label class="block-check"><input type="checkbox" data-action="toggle-block" data-block="' + b.id + '"' + (b.done ? " checked" : "") + "> concluir</label>" +
        '<div class="spacer"></div>' + blockAction(b, "sm") + "</div></div></div>";
    });
    timeline += "</div>";
  });

  body += '<div class="grid mt-16" style="grid-template-columns:minmax(0,1.5fr) minmax(0,.8fr)">' +
    '<div class="card"><div class="card-head"><div><h3>Linha do tempo</h3><p>Blocos ordenados por prioridade; intervalos contam na carga.</p></div><button class="btn sm" data-action="export-plan">' + icon("download", "") + "CSV</button></div>" + timeline + "</div>" +
    '<div class="stack">' +
    '<div class="card"><div class="card-head"><div><h3>Cobertura vs. programa</h3><p>Transparência do que cabe hoje</p></div></div>' +
    '<div class="progress-label"><span>' + plan.topics + " tópicos no plano</span><span>" + TOPICS.length + ' no total</span></div><div class="progress green"><i style="width:' + Math.round((plan.topics / TOPICS.length) * 100) + '%"></i></div>' +
    '<p class="small muted mt-12">Os demais tópicos seguem disponíveis em Aulas e no banco de questões. O plano de um dia não finge cobrir o edital inteiro; ele prioriza o maior retorno.</p>' +
    '<div class="notice info mt-12">' + icon("info", "") + "<div>Alta prioridade: oncologia, litíase, infecções e emergências. Tópicos frios ficam para consulta rápida, nunca omitidos.</div></div></div>" +
    '<div class="card"><div class="card-head"><div><h3>Véspera</h3><p>Checklist para hoje à noite</p></div></div>' + checklistHtml("vespera", CHECKLISTS.vespera) + "</div>" +
    '<div class="card"><div class="card-head"><div><h3>Dia da prova</h3><p>Deixe pronto antes de dormir</p></div></div>' + checklistHtml("prova", CHECKLISTS.prova) + "</div>" +
    "</div></div>";

  const actions = '<button class="btn" data-action="plan-now">' + icon("clock", "") + ' Começar agora</button><button class="btn primary" data-action="export-plan">' + icon("download", "") + " Exportar CSV</button>";
  return pageHead("Plano de " + (examDay ? "hoje" : "reta final"), "Cronograma construído a partir da sua carga, do horário de início e da data da prova.", actions) + summary + body + pageFoot();
}

function checklistHtml(list, items) {
  return '<div class="mt-8">' + items.map((it) => {
    const key = list + ":" + it.id;
    const done = !!(state.checklists[key] && state.checklists[key].done);
    return '<label class="check-item' + (done ? " done" : "") + '"><input type="checkbox" data-action="toggle-check" data-list="' + list + '" data-id="' + it.id + '"' + (done ? " checked" : "") + '><span><span class="ci-title">' + esc(it.title) + '</span><span class="ci-desc">' + esc(it.desc) + "</span></span></label>";
  }).join("") + "</div>";
}

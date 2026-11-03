/* ==========================================================================
   URO 90 — Casos, caderno de erros, Pareto, materiais e configuração
   ========================================================================== */

/* ------------------------------ Casos clínicos ------------------------------ */
function caseRecord(id) {
  const rec = state.cases[id];
  return rec && typeof rec === "object" ? rec : {};
}

function caseScore(id) {
  const rec = caseRecord(id);
  const c = CASE_BY_ID[id];
  if (!c) return { score: 0, max: 10, pct: 0, done: false };
  const max = total(c.rubric.map((r) => r.max)) || 10;
  const score = (rec.scores || []).reduce((a, b) => a + (Number(b) || 0), 0);
  return { score: +score.toFixed(1), max, pct: Math.round((score / max) * 100), done: !!(rec.answer && rec.answer.trim()) };
}

function viewCases() {
  if (!ui.caseId || !CASE_BY_ID[ui.caseId]) ui.caseId = CASES[0].id;
  const c = CASE_BY_ID[ui.caseId];
  const rec = caseRecord(c.id);
  const cs = caseScore(c.id);
  const answer = rec.answer || "";
  const scores = rec.scores || c.rubric.map(() => 0);
  const topic = TOPIC_BY_ID[c.topic] || TOPICS.find((t) => t.area === c.area);
  const area = AREA_BY_ID[c.area];
  const status = cs.score >= 9 ? ["Meta 90%", "lime"] : cs.score >= 5 ? ["Acima do corte", "green"] : cs.score > 0 ? ["Abaixo do corte", "warm"] : ["Não avaliado", "outline"];

  const list = CASES.map((item) => {
    const s = caseScore(item.id);
    const active = item.id === c.id ? " active" : "";
    return `<button class="case-pick${active}" data-action="case-select" data-case="${item.id}">
      <span class="badge ${AREA_BY_ID[item.area].short ? "outline" : "outline"}">${AREA_BY_ID[item.area].short}</span>
      <b>${esc(item.title)}</b>
      <span class="tiny muted">${item.minutes} min · ${s.score.toFixed(1).replace(".", ",")}/${s.max.toFixed(0)}</span>
    </button>`;
  }).join("");

  const rubric = c.rubric.map((r, i) => {
    const val = Number(scores[i]) || 0;
    return `<div class="rubric-row">
      <div><div class="small" style="font-weight:650">${esc(r.label)}</div><div class="rubric-note">${esc(r.note)}</div></div>
      <input type="range" min="0" max="${r.max}" step="0.5" value="${val}" data-case-score="${i}" aria-label="${esc(r.label)}">
      <div style="text-align:right"><b class="small" id="rubric-val-${i}">${val.toFixed(1).replace(".", ",")}</b><span class="tiny muted"> / ${r.max.toFixed(1).replace(".", ",")}</span></div>
    </div>`;
  }).join("");

  const expected = ui.caseExpected
    ? `<div class="card mt-16" style="border-color:#a7f3d0"><div class="card-head"><div><h3>Espelho de resposta</h3><p>Compare a estrutura, não decore o texto</p></div><span class="badge green">Autoavaliação</span></div>${c.expected}</div>`
    : `<div class="notice info mt-16">${icon("info", "")}<div>Escreva sua resposta antes de abrir o espelho. A nota da rubrica é autoavaliação guiada — não é correção de professor nem previsão de nota na prova.</div></div>`;

  return pageHead("Casos clínicos", "Cinco cenários dissertativos com rubrica de 10 pontos, espelho de resposta e registro do seu texto.", `<span class="badge ${status[1]}">${status[0]}</span><button class="btn sm" data-action="export-cases">${icon("download", "")} TXT</button>`) +
    `<div class="cases-layout">
      <aside class="card cases-side"><div class="card-head"><div><h3>Casos</h3><p>Treino de raciocínio e conduta</p></div></div><div class="case-list">${list}</div>
      <div class="notice info mt-16">${icon("info", "")}<div>O caso clínico vale 10 pontos no modelo de referência. A meta é 9,0; o corte é 5,0.</div></div></aside>
      <section class="stack">
        <div class="card"><div class="card-head"><div><div class="lesson-meta-line"><span class="badge outline">${area.short}</span><span class="badge blue">Dissertativo</span><span class="badge ${status[1]}">${status[0]}</span></div><h3 style="margin-top:6px">${esc(c.title)}</h3><p>${c.minutes} min sugeridos · ${esc(topic ? topic.title : area.name)}</p></div><div style="text-align:right"><div class="score-mini">${cs.score.toFixed(1).replace(".", ",")}<span>/10</span></div><div class="tiny muted">rubrica</div></div></div>
          <div class="case-prompt">${c.prompt}</div>
          <div class="mt-16"><div class="eyebrow">O que a resposta deve cobrir</div><ul class="task-list">${c.tasks.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
          <div class="mt-16"><label class="field"><span>Sua resposta</span><textarea class="textarea essay-editor" id="case-answer" data-case-answer="${c.id}" placeholder="Estruture: reconhecimento do problema → justificativa → conduta imediata → seguimento. Use terminologia precisa.">${esc(answer)}</textarea></label>
          <div class="essay-meta"><span id="case-chars">${answer.length} caracteres</span><span id="case-words">${answer.trim() ? answer.trim().split(/\s+/).length : 0} palavras</span><span>≈ ${Math.max(1, Math.ceil(answer.length / 65))} linhas de 65 caracteres</span><span>Meta de extensão: ~30 linhas</span></div>
          <div class="row mt-16"><button class="btn primary" data-action="case-save">${icon("save", "")} Salvar resposta</button><button class="btn" data-action="case-expected">${ui.caseExpected ? "Ocultar espelho" : "Ver espelho de resposta"}</button><div class="spacer"></div><button class="btn ghost" data-action="case-clear">${icon("trash", "")} Limpar</button></div></div></div>
        <div class="card"><div class="card-head"><div><h3>Rubrica de autoavaliação</h3><p>Marque com honestidade o que sua resposta comprovou</p></div><span class="badge ${cs.score >= 9 ? "lime" : cs.score >= 5 ? "green" : "outline"}">${cs.score.toFixed(1).replace(".", ",")} / 10</span></div>${rubric}
          <div class="row mt-16" style="justify-content:space-between"><span class="small muted">Corte 5,0 · meta 9,0</span><b id="case-score-total">${cs.score.toFixed(1).replace(".", ",")} / 10</b></div>
          <div class="progress mt-8 ${cs.score >= 9 ? "green" : ""}"><i style="width:${Math.min(100, cs.pct)}%"></i></div>
          <p class="tiny muted mt-12">A rubrica é um guia de estudo. A correção real depende do professor, do comando da questão e da fundamentação. Não há promessa de nota.</p></div>
        ${expected}
      </section>
    </div>` + pageFoot();
}

/* ------------------------------ Caderno de erros ------------------------------ */
function errorListFiltered() {
  const term = ui.errorsSearch.trim().toLowerCase();
  return errorQuestions().filter((q) => {
    if (!term) return true;
    return (q.stem + " " + TOPIC_BY_ID[q.topicId].title + " " + AREA_BY_ID[q.area].name).toLowerCase().includes(term);
  });
}

function viewErrors() {
  const all = errorQuestions();
  const list = errorListFiltered();
  const byArea = {};
  all.forEach((q) => { byArea[q.area] = (byArea[q.area] || 0) + 1; });
  const chips = AREAS.filter((a) => byArea[a.id]).map((a) => `<span class="chip">${a.short} <b>${byArea[a.id]}</b></span>`).join("");

  const rows = list.map((q) => {
    const last = lastAttempt(q.id);
    const topic = TOPIC_BY_ID[q.topicId];
    const area = AREA_BY_ID[q.area];
    const note = (state.errors[q.id] && state.errors[q.id].note) || "";
    const misses = attemptsOf(q.id).filter((a) => !a.correct).length;
    return `<div class="card error-card">
      <div class="card-head"><div><div class="lesson-meta-line"><span class="badge outline">${area.short}</span><span class="badge ${TEMP_CLASS[topic.temp]}">${TEMP_LABEL[topic.temp]}</span><span class="badge red">${misses} erro${misses > 1 ? "s" : ""}</span><span class="tiny muted">${last ? fmtDateTime(last.at) : ""}</span></div><h3 style="margin-top:6px">${esc(topic.title)}</h3></div><button class="btn sm" data-action="error-retest" data-q="${q.id}">${icon("rotate", "")} Refazer</button></div>
      <p class="small" style="line-height:1.6">${esc(q.stem)}</p>
      <div class="option-review">
        ${q.options.map((opt, i) => {
          let cls = "";
          if (i === q.answer) cls = "correct";
          else if (last && i === last.choice) cls = "wrong";
          return `<div class="opt-line ${cls}"><span class="letter">${"ABCDE"[i]}</span><span>${esc(opt)}</span></div>`;
        }).join("")}
      </div>
      <div class="answer-box bad mt-12"><div class="answer-title"><span class="badge red">Sua resposta: ${last && last.choice != null ? "ABCDE"[last.choice] : "em branco"}</span><span class="badge green">Gabarito: ${"ABCDE"[q.answer]}</span></div><p>${esc(q.comment)}</p><div class="src"><b>Fonte:</b> ${esc(q.source)}</div></div>
      <label class="field mt-12"><span>Regra de ouro / por que errei</span><textarea class="textarea" style="min-height:74px" data-error-note="${q.id}" placeholder="Ex.: confundi lesão de uretra posterior com bexiga; sangue no meato = não passar sonda.">${esc(note)}</textarea></label>
    </div>`;
  }).join("");

  return pageHead("Caderno de erros", "Só entra aqui o que você errou por último. A regra de ouro é sua; o reteste é obrigatório antes de considerar o tema resolvido.", `<span class="badge ${all.length ? "red" : "green"}">${all.length} item${all.length === 1 ? "" : "s"}</span><button class="btn sm" data-action="export-errors">${icon("download", "")} CSV</button>`) +
    (all.length ? `<div class="toolbar"><div class="search">${icon("search", "")}<input class="input" id="errors-search" data-search="errorsSearch" placeholder="Buscar erro por tema, área ou enunciado…" value="${esc(ui.errorsSearch)}"></div><div class="row-wrap">${chips}</div><span class="spacer"></span><span class="small muted">${list.length} visíveis</span></div>` : "") +
    (all.length
      ? (list.length ? `<div class="stack">${rows}</div>` : `<div class="card"><div class="empty"><div class="ico">${icon("search", "")}</div><h3>Nenhum erro com essa busca</h3><p>Limpe a busca para ver todos os itens do caderno.</p><button class="btn primary mt-12" data-action="error-clear-search">Limpar busca</button></div></div>`)
      : `<div class="card"><div class="empty"><div class="ico">${icon("check", "")}</div><h3>Nenhum erro pendente</h3><p>Responda questões ou faça o simulado. Todo item errado por último entra aqui automaticamente, com comentário e campo para sua regra de ouro.</p><div class="row mt-16" style="justify-content:center"><a class="btn primary" href="#/questoes">Responder questões</a><a class="btn" href="#/simulado">Fazer simulado</a></div></div></div>`) +
    pageFoot();
}

/* ------------------------------ Pareto 90 ------------------------------ */
function inferredPriority(t) {
  const temp = { hot: 1, warm: 0.62, cold: 0.32 }[t.temp] || 0.5;
  const cost = Math.max(t.minutes / 60, 0.25);
  return (AREA_BY_ID[t.area].weight * temp * 100) / cost;
}

function paretoRanking() {
  return TOPICS.map((t) => {
    const personal = personalPriority(t);
    const score = personal == null ? inferredPriority(t) : personal;
    return { topic: t, personal, score };
  }).sort((a, b) => b.score - a.score);
}

function viewPareto() {
  const ranking = paretoRanking();
  const maxScore = Math.max.apply(null, ranking.map((r) => r.score)) || 1;
  const st = globalStats();
  const diagnosed = TOPICS.filter((t) => topicStats(t.id).attempts > 0).length;

  const macro = AREAS.map((a) => `<span style="width:${a.weight}%;background:${a.color}" title="${esc(a.name)}: ${a.weight}%">${a.short}</span>`).join("");
  const legend = AREAS.map((a) => `<span><i style="background:${a.color}"></i>${a.short} · ${a.weight}%</span>`).join("");

  const rows = ranking.map((r, i) => {
    const t = r.topic;
    const area = AREA_BY_ID[t.area];
    const ts = topicStats(t.id);
    const done = lessonDone(t.id);
    const acc = ts.accuracy == null ? null : Math.round(ts.accuracy * 100);
    return `<div class="topic-row">
      <div class="topic-rank">${String(i + 1).padStart(2, "0")}</div>
      <div style="min-width:0"><div class="topic-title">${esc(t.title)}</div><div class="topic-sub">${area.short} · ${t.minutes} min · ${esc(t.subtopics[0] || "")}</div></div>
      <div><span class="badge ${TEMP_CLASS[t.temp]}">${TEMP_LABEL[t.temp]}</span></div>
      <div class="tiny muted">${done ? '<span class="badge green">Aula ok</span>' : "Pendente"}<div class="tiny muted mt-8">${acc == null ? "sem diagnóstico" : acc + "% acerto"}</div></div>
      <div><div class="priority-score">${Math.round((r.score / maxScore) * 100)}/100</div><div class="meter"><i style="width:${Math.round((r.score / maxScore) * 100)}%"></i></div><button class="btn sm mt-8" data-action="open-lesson" data-topic="${t.id}">Abrir</button></div>
    </div>`;
  }).join("");

  const personal = ranking.filter((r) => r.personal != null).slice(0, 8);
  const personalHtml = personal.length
    ? personal.map((r) => {
      const ts = topicStats(r.topic.id);
      return `<div class="row" style="justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line)"><div style="min-width:0"><div class="small" style="font-weight:650">${esc(r.topic.title)}</div><div class="tiny muted">${Math.round(ts.accuracy * 100)}% em ${ts.attempts} tentativas</div></div><button class="btn sm" data-action="open-lesson" data-topic="${r.topic.id}">Reforçar</button></div>`;
    }).join("")
    : `<div class="empty" style="padding:24px"><div class="ico">${icon("target", "")}</div><h3>Sem ranking pessoal ainda</h3><p>Responda questões para o sistema calcular sua lacuna por tópico. Até lá, o ranking usa prioridade pedagógica declarada — não desempenho inventado.</p><a class="btn primary mt-12" href="#/questoes">Fazer diagnóstico</a></div>`;

  const micro = MICRO.map((m) => {
    const t = TOPIC_BY_ID[m.topicId] || {};
    return `<div class="micro-row"><div class="micro-roi">ROI ${m.roi}</div><div style="min-width:0"><div class="small" style="font-weight:650;line-height:1.5">${esc(m.rule)}</div><div class="tiny muted mt-8">${esc(t.title || "")} · ${m.minutes} min · ${esc(m.source)}</div></div><button class="btn sm" data-action="open-lesson" data-topic="${m.topicId}">Ver aula</button></div>`;
  }).join("");

  return pageHead("Pareto 90", "Macro (áreas), meso (28 tópicos) e micro (18 regras). O ranking combina peso declarado, temperatura e seu desempenho real quando existe.", `<span class="badge blue">${diagnosed}/${TOPICS.length} tópicos diagnosticados</span><button class="btn sm" data-action="export-pareto">${icon("download", "")} CSV</button>`) +
    `<div class="grid grid-3 mt-16">
      <div class="card"><div class="card-head"><div><h3>Macro</h3><p>Distribuição do simulado</p></div><span class="badge blue">40 itens</span></div><div class="macro-bar">${macro}</div><div class="legend">${legend}</div><p class="tiny muted mt-12">O peso é a distribuição assumida do painel. Não é estatística oficial da sua prova — é priorização explícita e editável no método.</p></div>
      <div class="card"><div class="card-head"><div><h3>Seu preparo</h3><p>Dados reais deste dispositivo</p></div></div>
      <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Acurácia em questões</span><b>${st.attempts ? Math.round(st.accuracy * 100) + "%" : "—"}</b></div>
      <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Tentativas registradas</span><b>${st.attempts}</b></div>
      <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Cobertura de aulas</span><b>${coveragePct()}%</b></div>
      <div class="row" style="justify-content:space-between;padding:7px 0"><span class="small">Erros pendentes</span><b>${errorQuestions().length}</b></div>
      <div class="notice info mt-12">${icon("info", "")}<div>Prioridade pessoal = peso da área × lacuna ÷ custo em horas. Sem tentativas, não há lacuna mensurável: usamos a inferência pedagógica e dizemos isso.</div></div></div>
      <div class="card"><div class="card-head"><div><h3>Regra dos 90%</h3><p>O que priorizar em 1 dia</p></div><span class="badge lime">meta</span></div>
      <p class="small" style="line-height:1.65">Em um dia, você não cobre o edital inteiro. Cobre o que mais rende: <b>emergências com conduta objetiva</b>, <b>oncologia de próstata/bexiga/rim</b>, <b>litíase obstrutiva</b> e <b>infecção com sinais de gravidade</b>.</p>
      <div class="callout"><strong>Regra prática:</strong> 60% do tempo em tópicos quentes, 30% em mornos com erro registrado, 10% em revisão de flashcards e caderno. Tópicos frios ficam para consulta, não para aula longa na véspera.</div>
      <p class="tiny muted mt-12">${esc(META.evidenceNote)}</p></div></div>` +
    `<div class="grid mt-16" style="grid-template-columns:minmax(0,1.4fr) minmax(0,.8fr)"><div class="card"><div class="card-head"><div><h3>Ranking meso — 28 tópicos</h3><p>Ordenado por retorno estimado por hora</p></div><span class="badge outline">${TOPICS.length} tópicos</span></div>${rows}</div><div class="stack"><div class="card"><div class="card-head"><div><h3>Ranking pessoal</h3><p>Onde sua lacuna dói mais</p></div><span class="badge ${personal.length ? "warm" : "outline"}">${personal.length}</span></div>${personalHtml}</div><div class="card"><div class="card-head"><div><h3>Micro — 18 regras</h3><p>Alta frequência, resposta curta</p></div></div><div class="micro-list">${micro}</div></div></div></div>` +
    pageFoot();
}

/* ------------------------------ Materiais & prova ------------------------------ */
function materialMatches(m) {
  if (ui.materialType !== "all" && m.type !== ui.materialType) return false;
  const term = ui.materialSearch.trim().toLowerCase();
  if (!term) return true;
  return (m.title + " " + m.org + " " + m.note + " " + m.tags.join(" ")).toLowerCase().includes(term);
}

function viewMaterials() {
  const types = Array.from(new Set(MATERIALS.map((m) => m.type))).sort();
  const list = MATERIALS.filter(materialMatches);
  const st = globalStats();
  const typeOpts = '<option value="all">Todos os tipos</option>' + types.map((t) => `<option value="${esc(t)}"${ui.materialType === t ? " selected" : ""}>${esc(t)}</option>`).join("");

  const coverage = AREAS.map((a) => {
    const topics = TOPICS.filter((t) => t.area === a.id);
    const done = topics.filter((t) => lessonDone(t.id)).length;
    const qs = QUESTIONS.filter((q) => q.area === a.id);
    const answered = qs.filter((q) => isAnswered(q.id)).length;
    const as = areaStats(a.id);
    const cards = CARDS.filter((c) => TOPIC_BY_ID[c.topicId].area === a.id);
    const mature = cards.filter((c) => { const r = cardRecord(c.id); return r && r.interval >= 21; }).length;
    return `<tr><td><b>${a.short}</b><div class="tiny muted">${esc(a.name)}</div></td><td class="num">${a.questions}</td><td class="num">${done}/${topics.length}</td><td class="num">${answered}/${qs.length}</td><td class="num">${as.accuracy == null ? "—" : Math.round(as.accuracy * 100) + "%"}</td><td class="num">${mature}/${cards.length}</td></tr>`;
  }).join("");

  const materials = list.map((m) => `<div class="material-row"><div class="mat-ico">${icon("library", "")}</div><div style="min-width:0"><div class="small" style="font-weight:650">${esc(m.title)}</div><div class="tiny muted">${esc(m.org)} · ${esc(m.type)}</div><p class="tiny muted mt-8" style="line-height:1.5">${esc(m.note)}</p><div class="row-wrap mt-8">${m.tags.map((t) => `<span class="chip">${esc(t === "todas" ? "todas as áreas" : (AREA_BY_ID[t] ? AREA_BY_ID[t].short : t))}</span>`).join("")}</div></div><a class="btn sm" href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">Abrir ${icon("external", "")}</a></div>`).join("");

  return pageHead("Materiais & prova", "Fontes externas, arquitetura da nota, cobertura auditada e o que este app não promete.", `<span class="badge outline">${MATERIALS.length} fontes</span><button class="btn sm" data-action="export-materials">${icon("download", "")} CSV</button>`) +
    `<div class="grid grid-2 mt-16"><div class="card"><div class="card-head"><div><h3>Arquitetura da avaliação</h3><p>Modelo de referência usado no simulado</p></div><span class="badge blue">editável no plano</span></div>
      <div class="table-wrap"><table class="tbl"><thead><tr><th>Componente</th><th class="num">Itens</th><th class="num">Valor</th><th>Corte</th><th class="num">Meta</th></tr></thead><tbody>
      <tr><td>Objetiva</td><td class="num">40</td><td class="num">100,0</td><td>≥ 50,0 + 1 acerto/área</td><td class="num">90,0</td></tr>
      <tr><td>Caso clínico</td><td class="num">1</td><td class="num">10,0</td><td>≥ 5,0</td><td class="num">9,0</td></tr>
      <tr><td class="strong">Global</td><td class="num">—</td><td class="num strong">110,0</td><td>Objetiva + caso</td><td class="num strong">99,0</td></tr>
      </tbody></table></div>
      <div class="notice warn mt-12">${icon("alert", "")}<div><b>Premissa, não fato oficial.</b> O formato acima é o modelo de referência adotado para treinar. Se a sua prova tiver outra arquitetura, ajuste a interpretação — o conteúdo continua válido.</div></div></div>
      <div class="card"><div class="card-head"><div><h3>Cobertura do conteúdo</h3><p>Auditoria local contra o banco</p></div><span class="badge green">${st.answered}/${QUESTIONS.length}</span></div>
      <div class="table-wrap"><table class="tbl"><thead><tr><th>Área</th><th class="num">Itens</th><th class="num">Aulas</th><th class="num">Questões</th><th class="num">Acerto</th><th class="num">Cards</th></tr></thead><tbody>${coverage}</tbody></table></div>
      <p class="tiny muted mt-12">Aulas: concluídas/total. Cards: maduros/total. Acurácia considera todas as tentativas registradas, não só a última.</p></div></div>` +
    `<div class="card mt-16"><div class="card-head"><div><h3>Biblioteca de fontes</h3><p>Links externos; confira a versão vigente antes de estudar</p></div><span class="badge outline">${list.length} resultados</span></div>
      <div class="toolbar"><select class="select" data-filter="materialType">${typeOpts}</select><div class="search">${icon("search", "")}<input class="input" id="material-search" data-search="materialSearch" placeholder="Buscar por título, organização ou tag…" value="${esc(ui.materialSearch)}"></div><span class="spacer"></span><button class="btn sm" data-action="material-clear">Limpar filtros</button></div>
      <div class="material-list">${list.length ? materials : `<div class="empty"><div class="ico">${icon("search", "")}</div><h3>Nenhuma fonte encontrada</h3><p>Ajuste a busca ou o tipo de material.</p></div>`}</div></div>` +
    `<div class="grid grid-2 mt-16"><div class="card"><div class="card-head"><div><h3>O que este app é</h3><p>Escopo honesto</p></div><span class="badge green">autoral</span></div><ul class="plain-list"><li>Revisão densa e treino ativo em urologia, com 28 aulas, 96 questões (60 amplas + 36 históricas AP2), 64 flashcards e 5 casos.</li><li>Prioridades explícitas e editáveis, marcadas como inferência pedagógica.</li><li>Dados reais de desempenho: nada é preenchido se você não respondeu.</li><li>Persistência local e exportação portátil dos seus registros.</li></ul></div>
      <div class="card"><div class="card-head"><div><h3>O que este app não é</h3><p>Limites que importam</p></div><span class="badge red">não promete</span></div><ul class="plain-list"><li>Não é a prova oficial, banco de questões da banca nem material da sua disciplina.</li><li>Não prevê sua nota nem garante aprovação. Meta de 90% é referência de preparação.</li><li>Não substitui diretriz vigente, professor ou avaliação médica individual.</li><li>Não usa estatísticas históricas auditadas desta prova — por isso o selo [VERIFICAR].</li></ul></div></div>` +
    pageFoot();
}

/* ------------------------------ Configuração / backup ------------------------------ */
function settingsPreview() {
  const plan = buildPlan();
  if (!plan.valid) return `<span class="badge warm">Sem janela válida</span>`;
  return `<span class="badge green">${fmtMinutes(plan.budget)} · ${fmtTime(plan.start)}–${fmtTime(plan.end)}</span>`;
}

function viewConfig() {
  const s = state.settings;
  const exam = parseLocal(s.examAt);
  const size = (() => { try { return new Blob([JSON.stringify(state)]).size; } catch (e) { return 0; } })();
  const counts = {
    lessons: lessonCountDone(),
    answered: globalStats().answered,
    cards: Object.keys(state.flashcards).length,
    sims: (state.sims || []).length,
    cases: Object.keys(state.cases).length,
    errors: errorQuestions().length
  };

  return pageHead("Meu plano & backup", "Ajuste a data, a carga e a meta. Exporte tudo antes de trocar de dispositivo ou limpar o navegador.", settingsPreview()) +
    `<div class="grid mt-16" style="grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr)">
      <div class="card"><div class="card-head"><div><h3>Configuração do plano</h3><p>O cronograma recalcula ao salvar</p></div><span class="badge blue">local</span></div>
        <div class="form-grid">
          <label class="field full"><span>Seu nome (opcional)</span><input class="input" id="set-name" maxlength="60" value="${esc(s.name || "")}" placeholder="Como quer ser chamado"></label>
          <label class="field"><span>Data e hora da prova</span><input class="input" type="datetime-local" id="set-exam" value="${esc(s.examAt)}"></label>
          <label class="field"><span>Início do estudo hoje</span><input class="input" type="time" id="set-start" value="${esc(s.startTime)}"></label>
          <label class="field full"><span>Carga de estudo desejada: <b id="hours-val">${Number(s.hours).toFixed(0)} h</b></span><div class="range-row"><input type="range" id="set-hours" min="1" max="12" step="0.5" value="${s.hours}"><span class="range-val" id="hours-preview">${Number(s.hours).toFixed(1).replace(".", ",")} h</span></div><span class="tiny muted">O plano corta automaticamente às 23h45 e 30 min antes da prova. Dormir é parte do método.</span></label>
          <label class="field full"><span>Meta pessoal de acerto: <b id="meta-val">${s.meta}%</b></span><div class="range-row"><input type="range" id="set-meta" min="70" max="100" step="1" value="${s.meta}"><span class="range-val" id="meta-preview">${s.meta}%</span></div><span class="tiny muted">A régua do simulado continua em 90% (36/40) para manter comparabilidade. A meta pessoal é exibida no painel.</span></label>
        </div>
        <div class="row mt-16"><button class="btn primary" data-action="save-settings">${icon("save", "")} Salvar configuração</button><a class="btn" href="#/plano">Ver plano</a><div class="spacer"></div><span class="tiny muted">${isNaN(exam.getTime()) ? "Data inválida" : "Prova: " + fmtDateLong(exam.getTime()) + " · " + fmtTime(exam.getTime())}</span></div>
        <div class="notice info mt-16">${icon("info", "")}<div>Fuso: <b>${esc(s.timezone || META.timezone)}</b>. O horário é interpretado no seu dispositivo. Se mudar de fuso, confira a data da prova.</div></div>
      </div>
      <div class="stack">
        <div class="card"><div class="card-head"><div><h3>Seus dados</h3><p>Somente neste navegador</p></div><span class="badge outline">${(size / 1024).toFixed(1).replace(".", ",")} KB</span></div>
          <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Aulas concluídas</span><b>${counts.lessons}/${TOPICS.length}</b></div>
          <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Questões respondidas</span><b>${counts.answered}/${QUESTIONS.length}</b></div>
          <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Flashcards com histórico</span><b>${counts.cards}/${CARDS.length}</b></div>
          <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Simulados finalizados</span><b>${counts.sims}</b></div>
          <div class="row" style="justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--line)"><span class="small">Casos com resposta</span><b>${counts.cases}/${CASES.length}</b></div>
          <div class="row" style="justify-content:space-between;padding:7px 0"><span class="small">Erros pendentes</span><b>${counts.errors}</b></div>
          <div class="tiny muted mt-12">Última alteração: ${fmtDateTime(state.updatedAt || nowMs())} · chave ${esc(META.storageKey)}</div></div>
        <div class="card"><div class="card-head"><div><h3>Backup e portabilidade</h3><p>Baixe antes de limpar o navegador</p></div></div>
          <div class="stack"><button class="btn primary block" data-action="export-json">${icon("download", "")} Backup completo (JSON)</button>
          <div class="row-wrap"><button class="btn sm" data-action="export-plan">${icon("download", "")} Plano CSV</button><button class="btn sm" data-action="export-questions">${icon("download", "")} Questões CSV</button><button class="btn sm" data-action="export-cards">${icon("download", "")} Flashcards TSV</button><button class="btn sm" data-action="export-errors">${icon("download", "")} Erros CSV</button><button class="btn sm" data-action="export-cases">${icon("download", "")} Casos TXT</button></div>
          <label class="btn block" for="import-file">${icon("upload", "")} Importar backup JSON</label><input class="hidden" type="file" id="import-file" accept=".json,application/json">
          <p class="tiny muted">A importação substitui o estado atual após validação. Se o arquivo for inválido, nada é alterado.</p></div></div>
      </div></div>
      <div class="card mt-16" style="border-color:#fecaca"><div class="card-head"><div><h3>Zona de risco</h3><p>Apagar progresso deste dispositivo</p></div><span class="badge red">irreversível</span></div>
      <p class="small muted">Isso remove aulas, questões, flashcards, simulados, casos e checklists. Exporte o JSON antes. Não há servidor nem cópia na nuvem.</p>
      <button class="btn danger mt-12" data-action="reset-data">${icon("trash", "")} Apagar todos os dados</button></div>
      <div class="card mt-16"><div class="card-head"><div><h3>Método e honestidade</h3><p>Por que o app não promete aprovação</p></div><span class="badge outline">v${esc(META.version)}</span></div>
      <p class="small" style="line-height:1.65">${esc(META.disclaimer)}</p><p class="small muted mt-8" style="line-height:1.65">${esc(META.evidenceNote)}</p>
      <p class="tiny muted mt-12">Conteúdo autoral de revisão baseado em EAU, AUA, SBU, NICE, CDC, OMS, Campbell-Walsh-Wein e MSD. Prioridades marcadas [VERIFICAR] são inferência pedagógica, não estatística oficial da sua prova.</p></div>` +
    pageFoot();
}

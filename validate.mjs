#!/usr/bin/env node
/**
 * URO 90 — auditoria de integridade, cobertura e regras de pontuação.
 * Sem dependências externas. Rode: node validate.mjs
 * Gera VALIDACAO.md e retorna código 1 se houver erro bloqueante.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(root, "src");
const errors = [];
const warnings = [];
const passed = [];
const ok = (msg) => passed.push(msg);
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

function read(name) { return readFileSync(path.join(src, name), "utf8"); }

/* ------------------------------ 1. Sintaxe ------------------------------ */
const files = [
  "config.js", "lessons-a.js", "lessons-b.js", "questions-a.js", "questions-b.js",
  "flashcards.js", "ap2.js", "ap2-questions.js",
  "app-00-core.js", "app-10-shell.js", "app-20-lessons-questions.js", "app-25-ap2.js",
  "app-30-cards-sim.js", "app-40-cases-errors-pareto-materials-config.js", "app-90-actions-init.js"
];
files.forEach((f) => {
  try {
    execFileSync(process.execPath, ["--check", path.join(src, f)], { stdio: "pipe" });
    ok("Sintaxe válida: " + f);
  } catch (e) {
    fail("Erro de sintaxe em " + f + ": " + String(e.stderr || e.message).slice(0, 300));
  }
});

/* ------------------------------ 2. Dados em contexto isolado ------------------------------ */
const context = {
  console, Date, Math, JSON, Intl, Set, Map, Array, Object, String, Number, Boolean, RegExp, Error,
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  indexedDB: undefined,
  document: { querySelector: () => null, querySelectorAll: () => [], addEventListener: () => {} }
};
context.window = context;
vm.createContext(context);
try {
  ["config.js", "lessons-a.js", "lessons-b.js", "questions-a.js", "questions-b.js", "flashcards.js", "ap2.js", "ap2-questions.js", "app-00-core.js", "app-30-cards-sim.js"].forEach((f) => {
    vm.runInContext(read(f), context, { filename: f });
  });
  ok("Dados e núcleo carregados em contexto isolado.");
} catch (e) {
  fail("Falha ao carregar dados/núcleo: " + e.message);
}

const U = context.URO;
const { meta, exam, areas, topics, lessons, questions, flashcards, micro, materials, cases, checklists, ap2 } = U;

/* ------------------------------ 3. Estrutura e unicidade ------------------------------ */
function uniqueIds(label, arr) {
  const ids = arr.map((x) => x.id);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dup.length) fail(label + ": IDs duplicados: " + [...new Set(dup)].join(", "));
  else ok(label + ": " + ids.length + " IDs únicos.");
}
uniqueIds("Áreas", areas);
uniqueIds("Tópicos", topics);
uniqueIds("Aulas", lessons);
uniqueIds("Questões", questions);
uniqueIds("Flashcards", flashcards);
uniqueIds("Micro", micro);
uniqueIds("Materiais", materials);
uniqueIds("Casos", cases);

if (areas.length !== 8) fail("Esperadas 8 áreas; encontradas " + areas.length + ".");
if (topics.length !== 28) fail("Esperados 28 tópicos; encontrados " + topics.length + ".");
if (lessons.length !== 28) fail("Esperadas 28 aulas; encontradas " + lessons.length + ".");
if (questions.length !== 96) fail("Esperadas 96 questões (60 amplas + 36 AP2); encontradas " + questions.length + ".");
if (flashcards.length !== 64) fail("Esperados 64 flashcards (48 amplos + 16 AP2); encontrados " + flashcards.length + ".");
if (micro.length !== 18) fail("Esperadas 18 regras micro; encontradas " + micro.length + ".");
if (materials.length !== 16) fail("Esperados 16 materiais; encontrados " + materials.length + ".");
if (cases.length !== 5) fail("Esperados 5 casos; encontrados " + cases.length + ".");
if (checklists.vespera.length < 5 || checklists.prova.length < 5) fail("Checklists incompletos.");

/* ------------------------------ 4. Blueprint e pesos ------------------------------ */
const blueprint = areas.reduce((a, x) => a + x.questions, 0);
if (blueprint !== exam.objective.questions) fail("Blueprint soma " + blueprint + " itens, não 40.");
else ok("Blueprint do simulado soma exatamente 40 itens.");

const weight = areas.reduce((a, x) => a + x.weight, 0);
if (Math.abs(weight - 100) > 0.01) fail("Pesos das áreas somam " + weight + ", não 100.");
else ok("Pesos macro somam 100%.");

const noBank = areas.filter((a) => questions.filter((q) => q.area === a.id && q.options.length === 5).length < a.questions);
if (noBank.length) fail("Banco de 5 alternativas insuficiente para o blueprint em: " + noBank.map((a) => a.name).join(", "));
else ok("Banco tem itens de 5 alternativas suficientes para cada área do simulado.");

const areaIds = new Set(areas.map((a) => a.id));
const topicIds = new Set(topics.map((t) => t.id));

/* ------------------------------ 5. Integridade referencial e cobertura ------------------------------ */
const lessonByTopic = {};
lessons.forEach((l) => {
  if (!topicIds.has(l.topicId)) fail("Aula " + l.id + " aponta para tópico inexistente " + l.topicId);
  lessonByTopic[l.topicId] = (lessonByTopic[l.topicId] || 0) + 1;
  ["concept", "practice", "retention"].forEach((k) => {
    if (!l.sections || !l.sections[k] || l.sections[k].length < 150) fail("Aula " + l.id + " sem seção densa: " + k);
  });
  if (!Array.isArray(l.pitfalls) || l.pitfalls.length < 3) fail("Aula " + l.id + " tem menos de 3 pegadinhas.");
  if (!l.source || l.source.length < 10) fail("Aula " + l.id + " sem fonte.");
});
topics.forEach((t) => {
  if (!areaIds.has(t.area)) fail("Tópico " + t.id + " com área inválida " + t.area);
  if (lessonByTopic[t.id] !== 1) fail("Tópico " + t.id + " deve ter exatamente 1 aula; tem " + (lessonByTopic[t.id] || 0) + ".");
  if (!t.subtopics || t.subtopics.length < 3) warn("Tópico " + t.id + " com menos de 3 subtópicos.");
  if (!t.evidence || !t.evidence.includes("[VERIFICAR]")) warn("Tópico " + t.id + " sem selo [VERIFICAR] na evidência.");
  if (!["hot", "warm", "cold"].includes(t.temp)) fail("Tópico " + t.id + " com temperatura inválida.");
});
ok("Cobertura de aulas: " + Object.keys(lessonByTopic).length + "/" + topics.length + " tópicos com exatamente 1 aula.");

const ap2ModuleIds = new Set(((ap2 && ap2.modules) || []).map((m) => m.id));
const ap2Q = questions.filter((q) => q.bank === "ap2");
const qByTopic = {};
questions.forEach((q) => {
  if (!topicIds.has(q.topicId)) fail("Questão " + q.id + " com tópico inexistente.");
  if (!areaIds.has(q.area)) fail("Questão " + q.id + " com área inexistente.");
  const t = topics.find((x) => x.id === q.topicId);
  if (t && t.area !== q.area) fail("Questão " + q.id + " com área divergente do tópico (" + q.area + " vs " + t.area + ").");
  const isAp2 = q.bank === "ap2";
  if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 5) fail("Questão " + q.id + " deve ter 2–5 alternativas.");
  if (!isAp2 && (!Array.isArray(q.options) || q.options.length !== 5)) fail("Questão ampla " + q.id + " não tem 5 alternativas.");
  if (Array.isArray(q.options) && q.options.length >= 2) {
    if (new Set(q.options.map((x) => x.trim().toLowerCase())).size !== q.options.length) fail("Questão " + q.id + " tem alternativas repetidas.");
    if (q.options.some((x) => !x || x.trim().length < 2)) fail("Questão " + q.id + " tem alternativa vazia.");
  }
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) fail("Questão " + q.id + " com gabarito inválido.");
  if (!q.comment || q.comment.length < 100) fail("Questão " + q.id + " com comentário insuficiente (<100 chars).");
  if (!q.source || q.source.length < 10) fail("Questão " + q.id + " sem fonte.");
  if (!q.stem || q.stem.length < 30) fail("Questão " + q.id + " com enunciado curto.");
  if (isAp2) {
    if (!q.historical) fail("Questão AP2 " + q.id + " sem selo historical.");
    if (!ap2ModuleIds.has(q.ap2Module)) fail("Questão AP2 " + q.id + " com módulo inválido: " + q.ap2Module);
    if (!q.origin || q.origin.length < 8) fail("Questão AP2 " + q.id + " sem origem histórica.");
  }
  qByTopic[q.topicId] = (qByTopic[q.topicId] || 0) + 1;
});
const topicsNoQ = topics.filter((t) => !qByTopic[t.id]);
if (topicsNoQ.length) fail("Tópicos sem questão: " + topicsNoQ.map((t) => t.id).join(", "));
else ok("Todos os 28 tópicos têm pelo menos 1 questão.");

const cByTopic = {};
flashcards.forEach((c) => {
  if (!topicIds.has(c.topicId)) fail("Flashcard " + c.id + " com tópico inexistente.");
  if (!c.front || c.front.length < 20) fail("Flashcard " + c.id + " com frente curta.");
  if (!c.back || c.back.length < 20) fail("Flashcard " + c.id + " com verso curto.");
  if (!Array.isArray(c.tags) || !c.tags.length) warn("Flashcard " + c.id + " sem tags.");
  cByTopic[c.topicId] = (cByTopic[c.topicId] || 0) + 1;
});
const topicsNoC = topics.filter((t) => !cByTopic[t.id]);
if (topicsNoC.length) fail("Tópicos sem flashcard: " + topicsNoC.map((t) => t.id).join(", "));
else ok("Todos os 28 tópicos têm pelo menos 1 flashcard.");

micro.forEach((m) => {
  if (!topicIds.has(m.topicId)) fail("Micro " + m.id + " com tópico inexistente.");
  if (!m.rule || m.rule.length < 60) fail("Micro " + m.id + " com regra curta.");
  if (!m.source) fail("Micro " + m.id + " sem fonte.");
  if (m.roi < 1 || m.roi > 5) fail("Micro " + m.id + " com ROI fora de 1–5.");
});
ok("18 regras micro validadas (tópico, ROI e fonte).");

materials.forEach((m) => {
  if (!/^https:\/\//.test(m.url || "")) fail("Material " + m.id + " sem URL https.");
  if (!m.title || !m.org || !m.type) fail("Material " + m.id + " incompleto.");
  (m.tags || []).forEach((tag) => {
    if (tag !== "todas" && !areaIds.has(tag)) fail("Material " + m.id + " com tag inválida " + tag);
  });
});
ok("16 materiais com URL https e tags válidas.");

cases.forEach((c) => {
  if (!areaIds.has(c.area)) fail("Caso " + c.id + " com área inválida.");
  if (!c.prompt || c.prompt.length < 300) fail("Caso " + c.id + " com enunciado curto.");
  if (!c.expected || c.expected.length < 400) fail("Caso " + c.id + " sem espelho consistente.");
  if (!Array.isArray(c.rubric) || c.rubric.length < 3) fail("Caso " + c.id + " com rubrica incompleta.");
  const sum = (c.rubric || []).reduce((a, r) => a + (Number(r.max) || 0), 0);
  if (Math.abs(sum - 10) > 0.01) fail("Caso " + c.id + " rubrica soma " + sum + ", não 10.");
  if (!c.tasks || c.tasks.length < 3) warn("Caso " + c.id + " com menos de 3 tarefas.");
});
ok("5 casos com rubrica somando 10 pontos.");

/* ------------------------------ 5b. Trilha AP2 2026.2 ------------------------------ */
const ap2Modules = (ap2 && ap2.modules) || [];
const ap2Cards = flashcards.filter((c) => !!c.ap2Module);
if (!ap2 || !ap2.meta) fail("Objeto URO.ap2 ausente.");
else ok("Metadados AP2 carregados (versão " + ap2.meta.version + ").");
if (ap2Modules.length !== 4) fail("AP2 deve ter 4 módulos; encontrados " + ap2Modules.length + ".");
else ok("AP2: 4 módulos declarados.");
if (ap2Q.length !== 36) fail("AP2 deve ter 36 questões históricas; encontradas " + ap2Q.length + ".");
else ok("AP2: 36 questões históricas mescladas ao banco.");
if (ap2Cards.length !== 16) fail("AP2 deve ter 16 flashcards; encontrados " + ap2Cards.length + ".");
else ok("AP2: 16 flashcards mesclados ao banco.");

const expectedAp2ByModule = { "ap2-m1": 9, "ap2-m2": 7, "ap2-m3": 9, "ap2-m4": 11 };
ap2Modules.forEach((m) => {
  const moduleQs = ap2Q.filter((q) => q.ap2Module === m.id);
  if (moduleQs.length !== expectedAp2ByModule[m.id]) fail("Módulo AP2 " + m.id + " com " + moduleQs.length + " questões (esperado " + expectedAp2ByModule[m.id] + ").");
  if (!Array.isArray(m.questionIds) || m.questionIds.length !== moduleQs.length) fail("Módulo AP2 " + m.id + " com questionIds inconsistentes.");
  (m.questionIds || []).forEach((qid) => {
    if (!questions.find((q) => q.id === qid && q.ap2Module === m.id)) fail("Módulo AP2 " + m.id + " referencia questão ausente/incorreta: " + qid);
  });
  const mc = ap2Cards.filter((c) => c.ap2Module === m.id);
  if (mc.length !== 4) fail("Módulo AP2 " + m.id + " deve ter 4 flashcards; tem " + mc.length + ".");
  const lesson = m.lesson || {};
  ["concept", "practice", "retention"].forEach((k) => {
    if (!lesson.sections || !lesson.sections[k] || lesson.sections[k].length < 300) fail("Aula AP2 " + m.id + " sem seção densa: " + k);
  });
  if (!Array.isArray(lesson.pitfalls) || lesson.pitfalls.length < 5) fail("Aula AP2 " + m.id + " com menos de 5 pegadinhas.");
  if (!Array.isArray(lesson.rules) || lesson.rules.length < 5) fail("Aula AP2 " + m.id + " com menos de 5 regras de ouro.");
  if (!Array.isArray(lesson.caveats) || lesson.caveats.length < 2) fail("Aula AP2 " + m.id + " com menos de 2 atualizações 2026.");
  if (!lesson.source || lesson.source.length < 20) fail("Aula AP2 " + m.id + " sem fonte técnica.");
});
ok("AP2: módulos, aulas, regras, pegadinhas e atualizações 2026 consistentes.");

const binaryAp2 = ap2Q.filter((q) => q.options.length === 2);
const expectedBinary = ["ap2-m2-52", "ap2-m2-53", "ap2-m3-65", "ap2-m3-66"];
if (binaryAp2.length !== 4 || expectedBinary.some((id) => !binaryAp2.find((q) => q.id === id))) fail("AP2: itens V/F esperados ausentes ou com formato errado.");
else ok("AP2: 4 itens históricos V/F preservados com 2 alternativas.");
if (ap2Q.some((q) => q.options.length !== 2 && q.options.length !== 5)) fail("AP2: item com quantidade de alternativas não suportada.");
const originRules = [
  [/^ap2-m3-6[3-6]$/, /AP3 2024/],
  [/^ap2-m3-6[7-9]$|^ap2-m3-70$/, /2022\.2/],
  [/^ap2-m3-71$/, /final\/discursiva/],
  [/^ap2-m2-54$/, /p\.39/],
  [/^ap2-m4-6[34]$/, /p\.27/]
];
originRules.forEach(([idRe, originRe]) => {
  ap2Q.filter((q) => idRe.test(q.id)).forEach((q) => {
    if (!originRe.test(q.origin || "")) fail("AP2 " + q.id + " com origem histórica divergente: " + q.origin);
  });
});
ok("AP2: origens históricas preservadas (M2, M3 e M4).");
if (!(ap2.sources || []).length || ap2.sources.length < 5) fail("AP2 deve listar ao menos 5 fontes.");
else {
  ap2.sources.forEach((s) => {
    if (!s.title || !s.org || !s.type || !s.note) fail("Fonte AP2 incompleta: " + s.id);
    if (s.url && !/^https:\/\//.test(s.url)) fail("Fonte AP2 " + s.id + " com URL não https.");
  });
  ok("AP2: " + ap2.sources.length + " fontes rastreáveis.");
}

/* ------------------------------ 6. Simulador: sorteio ------------------------------ */
try {
  const picks = [];
  for (let i = 0; i < 25; i++) picks.push(vm.runInContext("pickSimQuestions()", context));
  const badLen = picks.filter((p) => p.length !== 40);
  const badUnique = picks.filter((p) => new Set(p).size !== 40);
  const badIds = picks.filter((p) => p.some((id) => !questions.find((q) => q.id === id)));
  const badOptions = picks.filter((p) => p.some((id) => questions.find((q) => q.id === id).options.length !== 5));
  const badBlueprint = picks.filter((p) => areas.some((a) => p.filter((id) => questions.find((q) => q.id === id).area === a.id).length !== a.questions));
  if (badLen.length || badUnique.length || badIds.length || badOptions.length) fail("Sorteio do simulado gerou rodada inválida (tamanho/unicidade/IDs/alternativas).");
  else if (badBlueprint.length) warn("Algumas rodadas do simulado não respeitaram exatamente o blueprint (banco insuficiente em área).");
  else ok("25 rodadas de sorteio: 40 itens únicos de 5 alternativas, IDs válidos e blueprint exato.");
} catch (e) {
  fail("Não foi possível testar pickSimQuestions: " + e.message);
}

/* ------------------------------ 7. Pontuação e eliminatória ------------------------------ */
function buildOrder() {
  const order = [];
  areas.forEach((a) => {
    questions.filter((q) => q.area === a.id && q.options.length === 5).slice(0, a.questions).forEach((q) => order.push(q.id));
  });
  return order.slice(0, 40);
}
function simWith(correctCount, zeroArea) {
  const order = buildOrder();
  const answers = {};
  let remaining = correctCount;
  // Garante pelo menos 1 acerto em cada área que não deve ser zerada.
  areas.forEach((a) => {
    if (remaining <= 0 || a.id === zeroArea) return;
    const q = questions.find((x) => x.area === a.id);
    if (q) { answers[q.id] = q.answer; remaining -= 1; }
  });
  // Preenche o restante respeitando a área que deve permanecer zerada.
  order.forEach((qid) => {
    if (remaining <= 0 || answers[qid] != null) return;
    const q = questions.find((x) => x.id === qid);
    if (zeroArea && q.area === zeroArea) return;
    answers[qid] = q.answer;
    remaining -= 1;
  });
  return vm.runInContext("scoreSim(" + JSON.stringify({ order, answers }) + ")", context);
}
try {
  const full = simWith(40);
  if (full.score !== 100 || !full.meta || !full.habilitado) fail("Cenário 40/40 deveria dar 100, meta e habilitado.");
  else ok("Pontuação 40/40 = 100,0 · meta 90% · habilitado.");

  const zero = simWith(0);
  if (zero.score !== 0 || zero.habilitado || zero.zeroed.length !== areas.length) fail("Cenário 0/40 deveria zerar todas as áreas e eliminar.");
  else ok("Pontuação 0/40 = 0 · todas as áreas zeradas · eliminado.");

  const zeroArea = simWith(30, "onc");
  if (zeroArea.score !== 75 || zeroArea.habilitado || !zeroArea.zeroed.some((z) => z.area === "onc")) fail("Cenário 30/40 com ONCO zerada deveria dar 75 e eliminar por área.");
  else ok("Pontuação 30/40 = 75,0 · ONCO zerada · eliminado apesar da nota.");

  const meta = simWith(36);
  if (meta.score !== 90 || !meta.meta || !meta.habilitado) fail("Cenário 36/40 deveria dar 90, meta e habilitado.");
  else ok("Pontuação 36/40 = 90,0 · meta atingida · habilitado.");

  const belowMeta = simWith(35);
  if (belowMeta.score !== 87.5 || belowMeta.meta || !belowMeta.habilitado) fail("Cenário 35/40 deveria dar 87,5, habilitado sem meta.");
  else ok("Pontuação 35/40 = 87,5 · habilitado, abaixo da meta.");

  const cut = simWith(20);
  if (cut.score !== 50 || !cut.habilitado || cut.meta) fail("Cenário 20/40 deveria dar 50, habilitado sem meta.");
  else ok("Pontuação 20/40 = 50,0 · exatamente no corte · habilitado.");

  const belowCut = simWith(19);
  if (belowCut.score !== 47.5 || belowCut.habilitado) fail("Cenário 19/40 deveria dar 47,5 e ficar abaixo do corte.");
  else ok("Pontuação 19/40 = 47,5 · abaixo do corte.");
} catch (e) {
  fail("Falha nos cenários de pontuação: " + e.message);
}

/* ------------------------------ 8. Plano: janela, teto e dia da prova ------------------------------ */
function localYmd(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
try {
  const now = new Date();
  const tomorrow = new Date(now); tomorrow.setDate(tomorrow.getDate() + 1);
  const today = localYmd(now);
  const tomorrowS = localYmd(tomorrow);
  const run = (settings) => vm.runInContext("state.settings = " + JSON.stringify(settings) + "; buildPlan()", context);
  const base = { name: "", examAt: tomorrowS + "T08:00", startTime: "18:00", hours: 6, timezone: "America/Sao_Paulo", meta: 90 };

  const p1 = run(base);
  if (!p1.valid || !p1.capped) fail("Plano padrão (18h, 6h de carga, prova amanhã 08h) deveria ser válido e reduzido.");
  else {
    const h23 = new Date(p1.end); h23.setHours(23, 45, 0, 0);
    if (p1.end > h23.getTime() + 1000) fail("Plano padrão passou do teto das 23h45.");
    else if (p1.blocks.some((b) => b.end > h23.getTime() + 1000)) fail("Bloco do plano passou das 23h45.");
    else ok("Plano padrão: " + p1.budget + " min efetivos, reduzido da carga solicitada, sem passar das 23h45.");
  }

  const examToday = today + "T20:00";
  const p2 = run({ ...base, examAt: examToday, startTime: "18:00", hours: 6 });
  const cutoff = new Date(now); cutoff.setHours(20, 0, 0, 0); const cutoffMs = cutoff.getTime() - 30 * 60000;
  if (!p2.valid || !p2.examDay) fail("Plano de dia de prova deveria ser reconhecido como examDay.");
  else if (p2.end > cutoffMs + 1000) fail("Plano de dia de prova invadiu os 30 min de segurança antes da prova.");
  else ok("Dia de prova: plano termina antes dos 30 min de segurança (20h00 → limite 19h30).");

  const p3 = run({ ...base, startTime: "23:50", hours: 6 });
  if (p3.valid) fail("Início às 23h50 deveria invalidar o plano por falta de janela.");
  else ok("Início às 23h50 corretamente invalidado (sem janela útil).");

  const p4 = run({ ...base, startTime: "22:00", hours: 6 });
  if (!p4.valid) fail("Início às 22h deveria gerar plano curto válido.");
  else if (p4.budget > 105) fail("Início às 22h deveria limitar a carga a 105 min até 23h45; veio " + p4.budget + ".");
  else ok("Início às 22h: carga limitada a " + p4.budget + " min até 23h45.");
} catch (e) {
  fail("Falha nos cenários de plano: " + e.message);
}

/* ------------------------------ 9. Build e dependências ------------------------------ */
["index.html", "urologia90_plataforma.html"].forEach((f) => {
  const p = path.join(root, f);
  if (!existsSync(p)) { warn(f + " ainda não gerado. Rode node build.mjs."); return; }
  const html = readFileSync(p, "utf8");
  if (/<script[^>]+src=/i.test(html)) fail(f + " contém script externo.");
  if (/<link[^>]+rel=["']stylesheet["']/i.test(html)) fail(f + " contém CSS externo.");
  if (/<img[^>]+src=["']http/i.test(html)) fail(f + " contém imagem externa.");
  if (!html.includes("URO 90")) fail(f + " não contém a marca URO 90.");
  ok(f + " é autocontido (" + (Buffer.byteLength(html, "utf8") / 1024).toFixed(1) + " KB).");
});

/* ------------------------------ 10. Relatório ------------------------------ */
const areaCounts = areas.map((a) => {
  const qn = questions.filter((q) => q.area === a.id).length;
  const tn = topics.filter((t) => t.area === a.id).length;
  return "| " + a.short + " | " + a.name + " | " + a.questions + " | " + qn + " | " + tn + " | " + a.weight + "% |";
}).join("\n");

const ap2Rows = ap2Modules.map((m) => {
  const qn = ap2Q.filter((q) => q.ap2Module === m.id);
  const bn = qn.filter((q) => q.options.length === 2).length;
  const cn = ap2Cards.filter((c) => c.ap2Module === m.id).length;
  return "| " + m.code + " | " + m.title + " | " + qn.length + " | " + bn + " | " + cn + " | " + ((m.lesson.caveats || []).length) + " |";
}).join("\n");

const md = `# Validação — URO 90

Gerado em ${new Date().toLocaleString("pt-BR")}.

## Resultado

- **${errors.length ? "FALHOU" : "APROVADO"}** — ${errors.length} erro(s), ${warnings.length} aviso(s), ${passed.length} verificação(ões) aprovada(s).
- Arquivo de entrega: \`index.html\` (autocontido, sem dependências externas).
- Conteúdo: ${topics.length} tópicos · ${lessons.length} aulas · ${questions.length} questões (60 amplas + ${ap2Q.length} AP2) · ${flashcards.length} flashcards (48 amplos + ${ap2Cards.length} AP2) · ${micro.length} regras micro · ${cases.length} casos · ${materials.length} fontes.

## Distribuição macro e banco

| Área | Nome | Itens no simulado | Questões no banco | Tópicos | Peso |
|---|---|---:|---:|---:|---:|
${areaCounts}
| **Total** | — | **${blueprint}** | **${questions.length}** | **${topics.length}** | **100%** |

## Trilha AP2 2026.2

| Módulo | Tema | Questões | V/F | Flashcards | Notas 2026 |
|---|---|---:|---:|---:|---:|
${ap2Rows}
| **Total** | — | **${ap2Q.length}** | **${ap2Q.filter((q) => q.options.length === 2).length}** | **${ap2Cards.length}** | **${ap2Modules.reduce((a, m) => a + (m.lesson.caveats || []).length, 0)}** |

- Itens V/F históricos ficam no banco de questões, mas são excluídos do simulado de 5 alternativas.
- A origem histórica de cada item AP2 é preservada; divergências com a prática 2026 aparecem em caixa própria.

## Testes de pontuação

- 40/40 → 100,0 · meta · habilitado.
- 36/40 → 90,0 · meta · habilitado.
- 35/40 → 87,5 · habilitado, sem meta.
- 30/40 com uma área zerada → 75,0 · **eliminado por área zerada**.
- 20/40 → 50,0 · exatamente no corte · habilitado.
- 19/40 → 47,5 · abaixo do corte.
- 0/40 → 0 · todas as áreas zeradas · eliminado.

## Testes de plano

- Carga de 6 h iniciada às 18h é reduzida para caber até 23h45.
- Nenhum bloco ultrapassa 23h45.
- No dia da prova, o plano termina 30 min antes do início.
- Início às 23h50 é corretamente invalidado.
- Início às 22h limita a carga a 105 min.

## Erros

${errors.length ? errors.map((e) => "- " + e).join("\n") : "Nenhum erro bloqueante."}

## Avisos

${warnings.length ? warnings.map((w) => "- " + w).join("\n") : "Nenhum aviso."}

## Verificações aprovadas

${passed.map((p) => "- " + p).join("\n")}

## Limites declarados

- As prioridades são inferência pedagógica, marcadas \`[VERIFICAR]\`; não são estatística oficial da prova.
- O formato de 40 itens + caso clínico é um modelo de referência adotado para treino.
- A meta de 90% é referência de preparação, não previsão de nota nem promessa de aprovação.
`;

writeFileSync(path.join(root, "VALIDACAO.md"), md, "utf8");
console.log((errors.length ? "FALHOU" : "APROVADO") + ": " + errors.length + " erro(s), " + warnings.length + " aviso(s), " + passed.length + " verificação(ões).");
if (warnings.length) console.log("Avisos:\n- " + warnings.join("\n- "));
if (errors.length) {
  console.error("Erros:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Relatório: VALIDACAO.md");

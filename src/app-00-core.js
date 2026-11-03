/* ==========================================================================
   URO 90 — Núcleo: utilitários, estado, persistência, cálculos e plano
   ========================================================================== */
"use strict";

const U = window.URO;
const META = U.meta;
const EXAM = U.exam;
const AREAS = U.areas;
const TOPICS = U.topics;
const LESSONS = U.lessons;
const QUESTIONS = U.questions;
const CARDS = U.flashcards;
const MATERIALS = U.materials;
const CASES = U.cases;
const MICRO = U.micro;
const CHECKLISTS = U.checklists;
const AP2 = U.ap2 || { meta: {}, modules: [], sources: [] };
const AP2_MODULES = AP2.modules || [];
const AP2_META = AP2.meta || {};
const AP2_SOURCES = AP2.sources || [];
const AP2_QUESTIONS = QUESTIONS.filter((q) => q.bank === "ap2");

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const nowMs = () => Date.now();
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const total = (arr) => arr.reduce((a, b) => a + b, 0);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const AREA_BY_ID = Object.fromEntries(AREAS.map((a) => [a.id, a]));
const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
const LESSON_BY_TOPIC = Object.fromEntries(LESSONS.map((l) => [l.topicId, l]));
const Q_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
const AP2_BY_ID = Object.fromEntries(AP2_MODULES.map((m) => [m.id, m]));
const CARD_BY_ID = Object.fromEntries(CARDS.map((c) => [c.id, c]));
const CASE_BY_ID = Object.fromEntries(CASES.map((c) => [c.id, c]));

const TEMP_LABEL = { hot: "Quente", warm: "Morna", cold: "Fria" };
const TEMP_CLASS = { hot: "hot", warm: "warm", cold: "cold" };
const TEMP_RANK = { hot: 0, warm: 1, cold: 2 };
const DIFF_LABEL = { 1: "Básica", 2: "Intermediária", 3: "Avançada" };

const ICONS = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/><path d="M8 15h2M14 15h2"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  help: '<circle cx="12" cy="12" r="9.5"/><path d="M9.2 9.2a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2-2.8 3.5"/><path d="M12 17h.01"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  library: '<path d="M12 6.5c2-1.5 4.5-2 8-2v15c-3.5 0-6 .5-8 2-2-1.5-4.5-2-8-2v-15c3.5 0 6 .5 8 2z"/><path d="M12 6.5v15"/>',
  settings: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="#fff"/><circle cx="15" cy="12" r="2" fill="#fff"/><circle cx="10" cy="18" r="2" fill="#fff"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  play: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19h16"/>',
  upload: '<path d="M12 15V3"/><path d="m7 8 5-5 5 5"/><path d="M4 19h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  external: '<path d="M14 3h7v7"/><path d="M21 3 10 14"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8M7 3v5h8"/>',
  trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 15H6L5 6"/><path d="M10 11v6M14 11v6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  info: '<circle cx="12" cy="12" r="9.5"/><path d="M12 11v5M12 8h.01"/>',
  flag: '<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>',
  spark: '<path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  stethoscope: '<path d="M5 3v6a5 5 0 0 0 10 0V3"/><path d="M5 3H3M15 3h2"/><path d="M15 9v3a5 5 0 0 0 5 5h1"/><circle cx="20" cy="17" r="2"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  moon: '<path d="M21 12.8A8.6 8.6 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
};

function icon(name, cls) {
  return '<svg class="' + (cls || "nav-ico") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
}

/* ------------------------------ Datas ------------------------------ */
function pad2(n) { return String(n).padStart(2, "0"); }
function ymd(d) { return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
function toLocalInput(d) { return ymd(d) + "T" + pad2(d.getHours()) + ":" + pad2(d.getMinutes()); }
function toTimeInput(d) { return pad2(d.getHours()) + ":" + pad2(d.getMinutes()); }
function parseLocal(s) {
  if (!s) return new Date(NaN);
  const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?/);
  if (!m) return new Date(s);
  return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), 0, 0);
}
function fmtTime(ts) { return new Date(ts).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }); }
function fmtDate(ts) { return new Date(ts).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }); }
function fmtDateLong(ts) { return new Date(ts).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" }); }
function fmtDateTime(ts) { return new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }); }
function isSameDay(a, b) { return ymd(a) === ymd(b); }
function startOfDay(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
function fmtCountdown(ms) {
  if (!isFinite(ms)) return "data inválida";
  if (ms <= 0) return "prova realizada";
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (d > 0) return d + "d " + h + "h";
  if (h > 0) return h + "h " + pad2(m) + "m";
  return m + "min";
}
function msToExam() {
  const exam = parseLocal(state.settings.examAt);
  return exam.getTime() - nowMs();
}
function examDate() { return parseLocal(state.settings.examAt); }

/* ------------------------------ Estado ------------------------------ */
function defaultSettings() {
  const d = new Date();
  const tomorrow = new Date(d);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(8, 0, 0, 0);
  const start = new Date(nowMs() + 20 * 60000);
  start.setSeconds(0, 0);
  start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15);
  return {
    name: "",
    examAt: toLocalInput(tomorrow),
    startTime: toTimeInput(start),
    hours: 6,
    timezone: (Intl.DateTimeFormat().resolvedOptions().timeZone || META.timezone),
    meta: 90,
    theme: "light"
  };
}

function defaultState() {
  return {
    version: 1,
    createdAt: nowMs(),
    updatedAt: nowMs(),
    settings: defaultSettings(),
    lessons: {},
    questions: {},
    flashcards: {},
    blocks: {},
    sims: [],
    activeSim: null,
    cases: {},
    errors: {},
    checklists: {},
    pomodoro: { sessions: 0, minutes: 0 },
    meta: { firstSeen: nowMs() }
  };
}

function loadState() {
  let s = null;
  try {
    const raw = localStorage.getItem(META.storageKey);
    if (raw) s = JSON.parse(raw);
  } catch (e) { /* storage indisponível */ }
  const base = defaultState();
  if (!s || typeof s !== "object") return base;
  const merged = Object.assign(base, s);
  merged.settings = Object.assign(base.settings, s.settings || {});
  ["lessons", "questions", "flashcards", "blocks", "cases", "errors", "checklists"].forEach((k) => {
    if (!merged[k] || typeof merged[k] !== "object") merged[k] = {};
  });
  if (!Array.isArray(merged.sims)) merged.sims = [];
  if (!merged.pomodoro) merged.pomodoro = { sessions: 0, minutes: 0 };
  return merged;
}

let state = loadState();
let saveTimer = null;
let idbPromise = null;

/* ------------------------------ Tema ------------------------------ */
const THEME_KEY = "URO90_THEME";
function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function applyTheme(theme, persist) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.style.colorScheme = t;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "dark" ? "#0b1220" : "#0f172a");
  if (persist !== false) {
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* storage indisponível */ }
  }
  state.settings.theme = t;
  return t;
}
function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  saveState();
  renderShell();
  renderView();
  toast(next === "dark" ? "Modo escuro ativado." : "Modo claro ativado.", "ok");
}
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* storage indisponível */ }
  const initial = (saved === "dark" || saved === "light") ? saved : getTheme();
  applyTheme(initial, false);
})();

function idbOpen() {
  if (idbPromise) return idbPromise;
  idbPromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) return reject(new Error("no idb"));
    const req = indexedDB.open(META.dbName, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("state")) db.createObjectStore("state", { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return idbPromise;
}

async function idbSave(payload) {
  try {
    const db = await idbOpen();
    await new Promise((resolve, reject) => {
      const tx = db.transaction("state", "readwrite");
      tx.objectStore("state").put({ id: "current", json: payload, at: nowMs() });
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) { /* fallback silencioso */ }
}

async function idbLoad() {
  try {
    const db = await idbOpen();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction("state", "readonly");
      const req = tx.objectStore("state").get("current");
      req.onsuccess = () => resolve(req.result ? req.result.json : null);
      req.onerror = () => reject(req.error);
    });
  } catch (e) { return null; }
}

function saveState() {
  state.updatedAt = nowMs();
  const payload = JSON.stringify(state);
  let ok = true;
  try { localStorage.setItem(META.storageKey, payload); } catch (e) { ok = false; }
  idbSave(payload);
  updateSaveStatus(ok ? "saved" : "error");
}

function updateSaveStatus(kind) {
  const el = $("#save-status");
  const dot = $("#save-dot");
  if (!el) return;
  if (kind === "saving") {
    el.textContent = "Salvando…";
    if (dot) dot.classList.add("saving");
    return;
  }
  if (dot) dot.classList.remove("saving");
  if (kind === "error") { el.textContent = "Falha ao salvar"; return; }
  el.textContent = "Salvo às " + new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function debouncedSave() {
  updateSaveStatus("saving");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveState, 220);
}

/* ------------------------------ Cálculos ------------------------------ */
function attemptsOf(qid) { return (state.questions[qid] && state.questions[qid].attempts) || []; }
function lastAttempt(qid) { const a = attemptsOf(qid); return a.length ? a[a.length - 1] : null; }
function isAnswered(qid) { return !!lastAttempt(qid); }
function isCorrectLast(qid) { const a = lastAttempt(qid); return !!(a && a.correct); }

function globalStats() {
  let attempts = 0, correct = 0;
  QUESTIONS.forEach((q) => {
    const a = attemptsOf(q.id);
    attempts += a.length;
    correct += a.filter((x) => x.correct).length;
  });
  const answered = QUESTIONS.filter((q) => isAnswered(q.id)).length;
  return { attempts, correct, answered, accuracy: attempts ? correct / attempts : null };
}

function areaStats(aid) {
  const qs = QUESTIONS.filter((q) => q.area === aid);
  let attempts = 0, correct = 0;
  qs.forEach((q) => {
    const a = attemptsOf(q.id);
    attempts += a.length;
    correct += a.filter((x) => x.correct).length;
  });
  return { total: qs.length, answered: qs.filter((q) => isAnswered(q.id)).length, attempts, correct, accuracy: attempts ? correct / attempts : null };
}

function topicStats(tid) {
  const qs = QUESTIONS.filter((q) => q.topicId === tid);
  let attempts = 0, correct = 0;
  qs.forEach((q) => {
    const a = attemptsOf(q.id);
    attempts += a.length;
    correct += a.filter((x) => x.correct).length;
  });
  return { total: qs.length, answered: qs.filter((q) => isAnswered(q.id)).length, attempts, correct, accuracy: attempts ? correct / attempts : null };
}

function lessonDone(tid) { return !!(state.lessons[tid] && state.lessons[tid].done); }
function lessonCountDone() { return TOPICS.filter((t) => lessonDone(t.id)).length; }
function coveragePct() { return Math.round((lessonCountDone() / TOPICS.length) * 100); }

/* ------------------------------ AP2 2026.2 ------------------------------ */
function ap2LessonDone(moduleId) {
  const rec = state.lessons["ap2:" + moduleId];
  return !!(rec && rec.done);
}
function ap2QuestionsOf(moduleId) {
  return QUESTIONS.filter((q) => q.ap2Module === moduleId);
}
function ap2ModuleStats(moduleId) {
  const qs = ap2QuestionsOf(moduleId);
  let attempts = 0, correct = 0;
  qs.forEach((q) => {
    const a = attemptsOf(q.id);
    attempts += a.length;
    correct += a.filter((x) => x.correct).length;
  });
  return {
    total: qs.length,
    answered: qs.filter((q) => isAnswered(q.id)).length,
    attempts, correct,
    accuracy: attempts ? correct / attempts : null,
    lesson: ap2LessonDone(moduleId)
  };
}
function ap2Overall() {
  let attempts = 0, correct = 0;
  AP2_QUESTIONS.forEach((q) => {
    const a = attemptsOf(q.id);
    attempts += a.length;
    correct += a.filter((x) => x.correct).length;
  });
  return {
    modules: AP2_MODULES.length,
    lessonsDone: AP2_MODULES.filter((m) => ap2LessonDone(m.id)).length,
    total: AP2_QUESTIONS.length,
    answered: AP2_QUESTIONS.filter((q) => isAnswered(q.id)).length,
    attempts, correct,
    accuracy: attempts ? correct / attempts : null
  };
}
function ap2NextModule() {
  if (!AP2_MODULES.length) return null;
  const pending = AP2_MODULES.filter((m) => {
    const st = ap2ModuleStats(m.id);
    return !st.lesson || st.answered < st.total;
  });
  if (!pending.length) return null;
  return pending.slice().sort((a, b) => {
    const sa = ap2ModuleStats(a.id), sb = ap2ModuleStats(b.id);
    if (sa.lesson !== sb.lesson) return sa.lesson ? 1 : -1;
    const va = sa.accuracy == null ? 0.55 : sa.accuracy;
    const vb = sb.accuracy == null ? 0.55 : sb.accuracy;
    if (va !== vb) return va - vb;
    return (b.questions || 0) - (a.questions || 0);
  })[0] || null;
}

function cardRecord(cid) { return state.flashcards[cid] || null; }
function cardDue(cid) { const r = cardRecord(cid); return !r || !r.due || r.due <= nowMs(); }
function dueCards() { return CARDS.filter((c) => cardDue(c.id)); }
function newCards() { return CARDS.filter((c) => !cardRecord(c.id)); }
function matureCards() { return CARDS.filter((c) => { const r = cardRecord(c.id); return r && r.interval >= 21; }); }

function errorQuestions() {
  return QUESTIONS.filter((q) => { const a = lastAttempt(q.id); return a && !a.correct; });
}

function personalPriority(topic) {
  const st = topicStats(topic.id);
  if (!st.accuracy && st.accuracy !== 0) return null;
  const gap = 1 - st.accuracy;
  const area = AREA_BY_ID[topic.area];
  const costHours = Math.max(topic.minutes / 60, 0.25);
  return (area.weight * gap * 100) / costHours;
}

function scoreSim(sim) {
  const order = sim.order || [];
  let correct = 0;
  const byArea = AREAS.map((a) => ({ area: a.id, name: a.name, total: 0, correct: 0, points: 0, zero: false }));
  const map = Object.fromEntries(byArea.map((x) => [x.area, x]));
  order.forEach((qid) => {
    const q = Q_BY_ID[qid];
    if (!q) return;
    const row = map[q.area];
    row.total += 1;
    const choice = sim.answers ? sim.answers[qid] : undefined;
    if (choice === q.answer) { correct += 1; row.correct += 1; }
  });
  byArea.forEach((r) => { r.points = +(r.correct * EXAM.objective.perQuestion).toFixed(1); r.zero = r.total > 0 && r.correct === 0; });
  const score = +(correct * EXAM.objective.perQuestion).toFixed(1);
  const zeroed = byArea.filter((r) => r.zero);
  const habilitado = score >= EXAM.objective.minScore && zeroed.length === 0;
  const meta = score >= EXAM.objective.meta && zeroed.length === 0;
  return { correct, score, byArea, zeroed, habilitado, meta, answered: Object.keys(sim.answers || {}).length };
}

/* ------------------------------ Plano ------------------------------ */
function planTopicOrder() {
  return TOPICS.slice().sort((a, b) => {
    const da = lessonDone(a.id) ? 1 : 0;
    const db = lessonDone(b.id) ? 1 : 0;
    if (da !== db) return da - db;
    const ta = TEMP_RANK[a.temp], tb = TEMP_RANK[b.temp];
    if (ta !== tb) return ta - tb;
    const aa = topicStats(a.id).accuracy;
    const ab = topicStats(b.id).accuracy;
    const va = aa == null ? 0.55 : aa;
    const vb = ab == null ? 0.55 : ab;
    if (va !== vb) return va - vb;
    return AREA_BY_ID[b.area].weight - AREA_BY_ID[a.area].weight;
  });
}

function buildPlan() {
  const s = state.settings;
  const exam = parseLocal(s.examAt);
  const today = new Date();
  const start = parseLocal(ymd(today) + "T" + (s.startTime || "18:00"));
  const examDay = isSameDay(today, exam);
  const requested = Math.round((Number(s.hours) || 0) * 60);
  const base = { blocks: [], requested, budget: 0, start, end: start, examDay, capped: false, topics: 0, valid: true };

  if (isNaN(exam.getTime()) || isNaN(start.getTime())) { base.valid = false; return base; }
  if (exam.getTime() <= nowMs() && !isSameDay(today, exam)) { base.valid = false; base.past = true; return base; }
  if (examDay && exam.getTime() - start.getTime() < 30 * 60000) { base.examDay = true; base.noTime = true; return base; }

  const dayEnd = new Date(start);
  dayEnd.setHours(23, 45, 0, 0);
  const maxEnd = Math.min(dayEnd.getTime(), exam.getTime() - 30 * 60000);
  if (maxEnd <= start.getTime()) { base.valid = false; base.noTime = true; return base; }

  const budget = Math.min(requested, Math.floor((maxEnd - start.getTime()) / 60000));
  if (budget < 10) { base.valid = false; base.noTime = true; return base; }

  const blocks = [];
  let cursor = start.getTime();
  let remaining = budget;
  const dateKey = ymd(start);

  function add(minutes, type, title, desc, opts) {
    opts = opts || {};
    if (remaining < 5) return 0;
    const available = Math.floor((maxEnd - cursor) / 60000);
    const dur = Math.min(minutes, remaining, available);
    if (dur < 5) return 0;
    const key = opts.key || (type + "-" + blocks.length);
    const id = "blk-" + dateKey + "-" + key;
    blocks.push({
      id, start: cursor, end: cursor + dur * 60000, minutes: dur, type, title, desc,
      topicId: opts.topicId || null, ap2Module: opts.ap2Module || null, action: opts.action || null, done: !!(state.blocks[id] && state.blocks[id].done)
    });
    cursor += dur * 60000;
    remaining -= dur;
    return dur;
  }

  const hasErrors = errorQuestions().length > 0;

  if (remaining >= 90) add(20, "diag", "Diagnóstico relâmpago", "10 questões mistas para calibrar o que você já domina — sem consulta.", { key: "diag", action: "questions" });
  if (remaining >= 200) {
    add(60, "sim", "Simulado oficial — 40 itens", "Prova completa com cronômetro, cartão-resposta e distribuição por área.", { key: "sim", action: "sim" });
    add(10, "break", "Pausa", "Levante, beba água e descanse a vista por 10 minutos.", { key: "break-sim" });
    add(25, "audit", "Auditoria do simulado", "Corrija erros, leia comentários e registre as regras de ouro no caderno.", { key: "audit", action: "errors" });
  }
  if (remaining >= 20) add(15, "cards", "Flashcards vencidos + regras de emergência", "Recordação ativa: 15 minutos na fila inteligente.", { key: "cards", action: "cards" });
  if (remaining >= 25 && hasErrors) add(20, "errors", "Caderno de erros", "Reteste dos itens que você errou e revisão das anotações.", { key: "errors", action: "errors" });

  const ap2Next = ap2NextModule();
  if (remaining >= 40 && ap2Next) {
    add(35, "ap2", "AP2 2026.2 · " + ap2Next.code + " — " + ap2Next.title,
      "Aula AP2 + questões históricas comentadas + atualização 2026. " + ap2Next.questions + " itens no módulo.",
      { key: "ap2-" + ap2Next.id, action: "ap2", ap2Module: ap2Next.id });
  }

  const order = planTopicOrder();
  let i = 0;
  let sinceBreak = 0;
  while (remaining >= 35 && i < order.length) {
    const t = order[i];
    add(35, "cycle", "Aula + questões: " + t.title, "15 min de leitura dirigida + 20 min de prática no tópico.", { key: "topic-" + t.id, topicId: t.id, action: "lesson" });
    i += 1;
    sinceBreak += 1;
    if (sinceBreak >= 2 && remaining >= 10) {
      add(10, "break", "Pausa", "Dois blocos concluídos. Alongue e hidrate-se.", { key: "break-" + i });
      sinceBreak = 0;
    }
  }
  if (remaining >= 20 && i < order.length) {
    const t = order[i];
    add(remaining >= 30 ? 30 : 20, "cycle-short", "Revisão dirigida: " + t.title, "Leitura rápida + questões-chave do tópico.", { key: "short-" + t.id, topicId: t.id, action: "lesson" });
    i += 1;
  }
  if (remaining >= 10) {
    add(remaining, "review", "Revisão ativa final", "Flashcards, caderno de erros e régua de corte. Sem conteúdo novo.", { key: "review", action: "cards" });
  } else if (remaining > 0 && blocks.length) {
    const last = blocks[blocks.length - 1];
    last.minutes += remaining;
    last.end += remaining * 60000;
    cursor += remaining * 60000;
    remaining = 0;
  }

  base.blocks = blocks;
  base.budget = budget;
  base.start = start.getTime();
  base.end = blocks.length ? blocks[blocks.length - 1].end : start.getTime();
  base.capped = budget < requested;
  base.topics = new Set(blocks.filter((b) => b.topicId).map((b) => b.topicId)).size;
  return base;
}

function focusBlock(plan) {
  plan = plan || buildPlan();
  if (!plan.valid || plan.examDay) return null;
  const study = plan.blocks.filter((b) => b.type !== "break");
  const t = nowMs();
  return study.find((b) => !b.done && b.start <= t && b.end > t) ||
    study.find((b) => !b.done) ||
    study[study.length - 1] || null;
}

function blockHref(block) {
  if (!block) return "#/dashboard";
  if (block.action === "lesson" && block.topicId) return "#/aulas";
  if (block.action === "ap2") return "#/ap2";
  if (block.action === "questions") return "#/questoes";
  if (block.action === "sim") return "#/simulado";
  if (block.action === "cards") return "#/flashcards";
  if (block.action === "errors") return "#/erros";
  return "#/plano";
}

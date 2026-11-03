#!/usr/bin/env node
/**
 * URO 90 — build de arquivo único.
 * Concatena CSS + scripts clássicos no shell e gera:
 *   index.html
 *   urologia90_plataforma.html
 *   urologia90_plataforma.zip (index.html + README.md + VALIDACAO.md)
 *
 * Sem dependências externas. Rode: node build.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(root, "src");

const SCRIPTS = [
  "config.js",
  "lessons-a.js",
  "lessons-b.js",
  "questions-a.js",
  "questions-b.js",
  "flashcards.js",
  "ap2.js",
  "ap2-questions.js",
  "app-00-core.js",
  "app-10-shell.js",
  "app-20-lessons-questions.js",
  "app-25-ap2.js",
  "app-30-cards-sim.js",
  "app-40-cases-errors-pareto-materials-config.js",
  "app-90-actions-init.js"
];

function read(name) {
  const p = path.join(src, name);
  if (!existsSync(p)) throw new Error("Arquivo ausente: " + p);
  return readFileSync(p, "utf8");
}

function build() {
  const css = read("styles.css");
  const shell = read("shell.html");
  const scripts = SCRIPTS.map((name) => {
    const code = read(name);
    return '<script>\n/* ===== ' + name + " ===== */\n" + code + "\n</script>";
  }).join("\n\n");

  const html = shell
    .replace("/*STYLES*/", () => css)
    .replace("<!--SCRIPTS-->", () => scripts);

  if (!html.includes('id="view"')) throw new Error("Shell sem #view");
  if (html.includes('src="http') || html.includes('href="http') && html.includes('<link')) {
    throw new Error("Dependência externa detectada no HTML");
  }

  writeFileSync(path.join(root, "index.html"), html, "utf8");
  writeFileSync(path.join(root, "urologia90_plataforma.html"), html, "utf8");

  // ZIP: index.html na raiz + documentos de apoio.
  const zipName = path.join(root, "urologia90_plataforma.zip");
  const files = ["index.html", "README.md", "VALIDACAO.md"].filter((f) => existsSync(path.join(root, f)));
  try {
    execFileSync("zip", ["-j", "-q", "-FS", zipName, ...files.map((f) => path.join(root, f))], { stdio: "inherit" });
  } catch (e) {
    console.warn("Aviso: não foi possível criar o ZIP (zip indisponível). O HTML único foi gerado.");
  }

  const kb = (Buffer.byteLength(html, "utf8") / 1024).toFixed(1);
  console.log("OK  index.html (" + kb + " KB)");
  console.log("OK  urologia90_plataforma.html");
  if (existsSync(zipName)) console.log("OK  urologia90_plataforma.zip");
  console.log("Scripts: " + SCRIPTS.length + " · CSS: " + (Buffer.byteLength(css, "utf8") / 1024).toFixed(1) + " KB");
}

build();

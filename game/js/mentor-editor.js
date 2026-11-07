/**
 * Modo mentor: lápis / disquete, contenteditable, Shift+duplo-clique, Ctrl+Alt+S.
 * Depende de window.__AFOL_MENTOR__ exposto por app.js.
 */

import {
  clearSession,
  detectSlugFromLocation,
  readSession,
  sessionMatchesPage,
  trilhaBySlug,
} from "./mentor-config.js";
import { publishMesaCopy } from "./mentor-publish.js";

let editing = false;
let barEl = null;

function api() {
  return window.__AFOL_MENTOR__ || null;
}

function toast(msg) {
  const a = api();
  if (a && typeof a.toast === "function") a.toast(msg);
  else console.info("[mentor]", msg);
}

function ensureBar() {
  if (barEl) return barEl;
  barEl = document.createElement("div");
  barEl.id = "mentor-bar";
  barEl.hidden = true;
  barEl.innerHTML =
    '<button type="button" id="mentor-btn-edit" class="mentor-btn" title="Editar textos (lápis)" aria-label="Editar">' +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>' +
    "<span>Editar</span></button>" +
    '<button type="button" id="mentor-btn-save" class="mentor-btn mentor-btn--save" title="Salvar e publicar (Ctrl+Alt+S)" aria-label="Salvar" disabled>' +
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/></svg>' +
    "<span>Salvar</span></button>" +
    '<span id="mentor-bar-meta" class="mentor-bar-meta"></span>' +
    '<button type="button" id="mentor-btn-logout" class="mentor-btn mentor-btn--ghost" title="Sair do modo mentor">Sair</button>';
  document.body.appendChild(barEl);

  document.getElementById("mentor-btn-edit").onclick = () => toggleEdit();
  document.getElementById("mentor-btn-save").onclick = () => savePublish();
  document.getElementById("mentor-btn-logout").onclick = () => {
    clearSession();
    setEditing(false);
    refreshBar();
    toast("Sessão mentor encerrada");
  };
  return barEl;
}

function refreshBar() {
  const session = readSession();
  const pageSlug = detectSlugFromLocation();
  const ok = sessionMatchesPage(session, pageSlug);
  ensureBar();
  barEl.hidden = !ok;
  document.body.classList.toggle("mentor-session", ok);
  document.body.classList.toggle("mentor-editing", ok && editing);
  const meta = document.getElementById("mentor-bar-meta");
  if (ok && meta) {
    const t = trilhaBySlug(session.slug);
    meta.textContent = (t && t.label) || session.slug;
  }
  const saveBtn = document.getElementById("mentor-btn-save");
  if (saveBtn) saveBtn.disabled = !ok || !editing;
  const editBtn = document.getElementById("mentor-btn-edit");
  if (editBtn) {
    editBtn.classList.toggle("on", editing);
    editBtn.querySelector("span").textContent = editing ? "Editando" : "Editar";
    editBtn.title = editing
      ? "Clique para sair do modo edição"
      : "Editar textos (lápis)";
  }
}

function syncContentEditable() {
  document.body.classList.toggle("mentor-editing", editing);
  const a = api();
  if (a && typeof a.applyEditAttrs === "function") {
    a.applyEditAttrs();
  }
  document.querySelectorAll("[data-edit-path]").forEach((el) => {
    if (editing) {
      el.setAttribute("contenteditable", "true");
      el.setAttribute("spellcheck", "true");
    } else {
      el.setAttribute("contenteditable", "false");
      el.removeAttribute("spellcheck");
      el.blur();
    }
  });
}

function setEditing(on) {
  editing = !!on;
  document.body.classList.toggle("mentor-editing", editing);
  const a = api();
  if (a && typeof a.setEditMode === "function") a.setEditMode(editing);
  syncContentEditable();
  setTimeout(syncContentEditable, 50);
  setTimeout(syncContentEditable, 200);
  setTimeout(syncContentEditable, 500);
  refreshBar();
  if (editing) toast("Modo edição ON — texto com borda roxa · Ctrl+Alt+S salva");
  else toast("Modo edição OFF");
}

function toggleEdit() {
  const session = readSession();
  const pageSlug = detectSlugFromLocation();
  if (!sessionMatchesPage(session, pageSlug)) {
    toast("Faça login de mentor nesta trilha");
    location.href = "/mentor.html";
    return;
  }
  setEditing(!editing);
}

function tryAutoEdit() {
  const session = readSession();
  const pageSlug = detectSlugFromLocation();
  if (!sessionMatchesPage(session, pageSlug)) return false;
  if (!api()) return false;
  if (!editing) setEditing(true);
  return true;
}

function harvestEditsIntoCopy() {
  const a = api();
  if (!a || typeof a.getMesaCopy !== "function") return null;
  const copy = structuredClone(a.getMesaCopy());
  document.querySelectorAll("[data-edit-path]").forEach((el) => {
    const path = el.getAttribute("data-edit-path");
    if (!path) return;
    const val = (el.innerText || el.textContent || "").replace(/\u00a0/g, " ").trimEnd();
    setByPath(copy, path, val);
  });
  return copy;
}

function setByPath(obj, path, value) {
  const parts = path.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i];
    const next = parts[i + 1];
    const nextIsIndex = /^\d+$/.test(next);
    if (/^\d+$/.test(k) && Array.isArray(cur)) {
      if (cur[Number(k)] == null) cur[Number(k)] = nextIsIndex ? [] : {};
      cur = cur[Number(k)];
      continue;
    }
    if (cur[k] == null) cur[k] = nextIsIndex ? [] : {};
    cur = cur[k];
  }
  const last = parts[parts.length - 1];
  if (last === "tips" && typeof value === "string") {
    cur[last] = value
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  } else if (/^\d+$/.test(last) && Array.isArray(cur)) {
    cur[Number(last)] = value;
  } else {
    cur[last] = value;
  }
}

const PENDING_MESA_KEY = "afol-mentor-pending-mesa-v1";

function stashPendingMesa(copy) {
  try {
    sessionStorage.setItem(PENDING_MESA_KEY, JSON.stringify(copy));
  } catch (_) {
    /* quota / private mode */
  }
}

async function savePublish() {
  const session = readSession();
  const pageSlug = detectSlugFromLocation();
  if (!sessionMatchesPage(session, pageSlug)) {
    toast("Sessão inválida para esta trilha");
    return;
  }
  const a = api();
  if (!a) {
    toast("API da mesa ainda não carregou");
    return;
  }
  const copy = harvestEditsIntoCopy();
  if (!copy) {
    toast("Sem mesa-copy para publicar");
    return;
  }
  a.applyMesaCopy(copy);
  const saveBtn = document.getElementById("mentor-btn-save");
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.querySelector("span").textContent = "Publicando…";
  }
  toast("Publicando no GitHub…");
  const result = await publishMesaCopy(session, copy);
  if (saveBtn) {
    saveBtn.querySelector("span").textContent = "Salvar";
    saveBtn.disabled = !editing;
  }
  if (!result.ok) {
    toast("Falha ao publicar: " + result.error);
    return;
  }
  const published = result.payload || copy;
  a.applyMesaCopy(published);
  stashPendingMesa(published);
  toast(
    "Salvo no GitHub · " +
      result.paths.length +
      " arquivo(s). Recarregando com o seu texto (Pages pode atrasar ~1 min)…"
  );
  // sessionStorage cobre o atraso do GitHub Pages; reload imediato
  const url = new URL(location.href);
  url.searchParams.set("mentor", "1");
  url.searchParams.set("saved", String(Date.now()));
  location.replace(url.toString());
}

function onShiftDblClick(ev) {
  if (!ev.shiftKey) return;
  const session = readSession();
  if (!sessionMatchesPage(session, detectSlugFromLocation())) return;
  const target = ev.target.closest("[data-edit-path]");
  if (!target) return;
  ev.preventDefault();
  ev.stopPropagation();
  if (!editing) setEditing(true);
  target.setAttribute("contenteditable", "true");
  target.focus();
}

function onKeydown(ev) {
  if (ev.ctrlKey && ev.altKey && (ev.key === "s" || ev.key === "S")) {
    const session = readSession();
    if (!sessionMatchesPage(session, detectSlugFromLocation())) return;
    ev.preventDefault();
    if (!editing) setEditing(true);
    savePublish();
  }
}

/** Space/Enter em <button> ativa o card — no modo edição só digita no texto. */
function onEditKeyGuard(ev) {
  if (!document.body.classList.contains("mentor-editing")) return;
  const inEdit = ev.target.closest("[data-edit-path]");
  if (!inEdit) return;
  const inBtn = ev.target.closest("button");
  if (!inBtn) return;
  const isSpace = ev.key === " " || ev.code === "Space" || ev.key === "Spacebar";
  const isEnter = ev.key === "Enter";
  if (!isSpace && !isEnter) return;
  ev.stopPropagation();
  if (isEnter) {
    ev.preventDefault();
    return;
  }
  // botão dispara click no keyup do Space; keydown precisa inserir o espaço
  if (ev.type === "keyup") ev.preventDefault();
}

export function bootMentorEditor() {
  ensureBar();
  refreshBar();
  document.addEventListener("dblclick", onShiftDblClick, true);
  document.addEventListener("keydown", onKeydown, true);
  document.addEventListener("keydown", onEditKeyGuard, true);
  document.addEventListener("keyup", onEditKeyGuard, true);

  // Aguarda app.js; com sessao mentor valida, entra em edicao automaticamente
  let n = 0;
  const wait = setInterval(() => {
    n++;
    refreshBar();
    if (api()) {
      const q = location.search || "";
      if (/mentor=1|saved=/.test(q) || readSession()) {
        if (tryAutoEdit()) {
          clearInterval(wait);
          return;
        }
      }
    }
    if (n > 48) {
      clearInterval(wait);
      refreshBar();
      const session = readSession();
      if (session && !sessionMatchesPage(session, detectSlugFromLocation())) {
        toast("Sessao mentor nao combina com esta URL — entre de novo em /mentor.html");
      }
    }
  }, 250);
}

/**
 * Bootstrap — engine depende do pacote de conteúdo + adapters (brand, aluno/).
 * O BC Trilhas não depende deste runtime.
 * RAG: snapshot `rag-loop.json` (planilha = live; sync via esteira-geracao/rag/).
 */
import { MAP_ISLANDS } from "../content/map-islands.js?v=20261028a";
import { startJornada } from "./app.js?v=20261031a";
import { bootMentorEditor } from "./mentor-editor.js?v=20261023a";

async function loadRagLoop() {
  try {
    const url = new URL("../content/rag-loop.json", import.meta.url);
    url.searchParams.set("v", String(Date.now()));
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (_) {
    return null;
  }
}

const rag = await loadRagLoop();
startJornada({ islands: MAP_ISLANDS, rag });
bootMentorEditor();

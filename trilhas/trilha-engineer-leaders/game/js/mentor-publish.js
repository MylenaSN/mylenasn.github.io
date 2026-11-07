/** Publica mesa-copy.json via GitHub Contents API — path guard por slug. */

import { GITHUB, trilhaBySlug } from "./mentor-config.js";

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

async function getFileSha(token, path) {
  const url =
    `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/contents/${path}` +
    `?ref=${encodeURIComponent(GITHUB.branch)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + token,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    const t = await res.text();
    throw new Error("GET " + path + " → " + res.status + " " + t.slice(0, 200));
  }
  const data = await res.json();
  return data.sha || null;
}

async function putFile(token, path, content, sha) {
  const url = `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/contents/${path}`;
  const body = {
    message: "mentor: atualiza mesa-copy (" + path.split("/")[0] + ")",
    content: utf8ToBase64(content),
    branch: GITHUB.branch,
  };
  if (sha) body.sha = sha;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + token,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error("PUT " + path + " → " + res.status + " " + t.slice(0, 280));
  }
  return res.json();
}

/**
 * @param {{ slug: string, token: string }} session
 * @param {object} mesaCopy
 * @returns {Promise<{ ok: true, paths: string[] } | { ok: false, error: string }>}
 */
export async function publishMesaCopy(session, mesaCopy) {
  const trilha = trilhaBySlug(session.slug);
  if (!trilha) return { ok: false, error: "Slug desconhecido." };
  if (!session.token || session.token.length < 20) {
    return { ok: false, error: "PAT ausente na sessão." };
  }

  const allowed = new Set(trilha.publishPaths);
  const paths = [...trilha.publishPaths];
  for (const p of paths) {
    if (!allowed.has(p)) {
      return { ok: false, error: "Path fora do slug: " + p };
    }
    // Isolamento: product/engineer nunca toca operations / raiz game/
    if (session.slug !== "trilha-operations-leaders") {
      if (p.startsWith("game/") || p.includes("trilha-operations-leaders")) {
        return { ok: false, error: "Isolamento: path recusado para este mentor." };
      }
    }
  }

  const payload = {
    ...mesaCopy,
    slug: session.slug,
    version: mesaCopy.version || 1,
    updatedAt: new Date().toISOString(),
  };
  const text = JSON.stringify(payload, null, 2) + "\n";
  const done = [];

  try {
    for (const path of paths) {
      const sha = await getFileSha(session.token, path);
      await putFile(session.token, path, text, sha);
      done.push(path);
    }
    return { ok: true, paths: done };
  } catch (err) {
    return { ok: false, error: String(err.message || err) };
  }
}

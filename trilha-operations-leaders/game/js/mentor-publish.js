/** Publica mesa-copy.json via Gitea Contents API — path guard por slug. */

import { GITEA, trilhaBySlug } from "./mentor-config.js";

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary);
}

function headers(token) {
  return {
    Accept: "application/json",
    Authorization: "token " + token,
    "Content-Type": "application/json",
  };
}

function contentsUrl(path) {
  return (
    GITEA.host.replace(/\/$/, "") +
    "/api/v1/repos/" + GITEA.owner + "/" + GITEA.repo +
    "/contents/" + path
  );
}

async function getFileSha(token, path) {
  const url = contentsUrl(path) + "?ref=" + encodeURIComponent(GITEA.branch);
  const res = await fetch(url, { headers: headers(token) });
  if (res.status === 404) return null;
  if (!res.ok) {
    const t = await res.text();
    throw new Error("GET " + path + " → " + res.status + " " + t.slice(0, 200));
  }
  const data = await res.json();
  return data.sha || null;
}

async function putFile(token, path, content, sha) {
  const body = {
    message: "mentor: atualiza mesa-copy (" + path.split("/")[0] + ")",
    content: utf8ToBase64(content),
    branch: GITEA.branch,
  };
  if (sha) body.sha = sha;
  const res = await fetch(contentsUrl(path), {
    method: "PUT",
    headers: headers(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error("PUT " + path + " → " + res.status + " " + t.slice(0, 280));
  }
  return res.json();
}

export async function publishMesaCopy(session, mesaCopy) {
  if (!GITEA.owner) {
    return {
      ok: false,
      error: "GITEA.owner vazio. Crie o repo na Gitea e preencha mentor-config.js. Hold até APROVACAO.",
    };
  }
  const trilha = trilhaBySlug(session.slug);
  if (!trilha) return { ok: false, error: "Slug desconhecido." };
  if (!session.token || session.token.length < 20) {
    return { ok: false, error: "Token Gitea ausente na sessão." };
  }
  if (/^(github_pat_|ghp_|gho_)/.test(session.token)) {
    return { ok: false, error: "Este token é GitHub. A esteira final da mentora é Gitea." };
  }

  const allowed = new Set(trilha.publishPaths);
  const paths = [...trilha.publishPaths];
  for (const p of paths) {
    if (!allowed.has(p)) return { ok: false, error: "Path fora do slug: " + p };
  }

  const payload = {
    ...mesaCopy,
    slug: session.slug,
    version: mesaCopy.version || 2,
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
    return { ok: true, paths: done, payload };
  } catch (err) {
    return { ok: false, error: String(err.message || err) };
  }
}

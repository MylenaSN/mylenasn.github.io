/** Configuração de trilhas — esteira final Gitea. Sem secrets no disco. */

export const MENTOR_SESSION_KEY = "afol-mentor-session-v2-gitea";

export const TRILHAS = [
  {
    slug: "trilha-operations-leaders",
    label: "AI-First Operations Leadership",
    mentor: "Mylena de Souza Nascimento",
    playPath: "trilha-operations-leaders/play.html",
    publishPaths: [
      "game/content/mesa-copy.json",
      "trilha-operations-leaders/game/content/mesa-copy.json",
    ],
    reserved: false,
  },
];

/** Repo da mentora. O token da mesa fica neste navegador, não no git. */
export const GITEA = {
  host: "https://gitea.com",
  owner: "MylenaSN",
  repo: "Patron_Loop_Learn",
  branch: "main",
};

export const MENTOR_TOKEN_KEY = "afol-mentor-token-v2-gitea";

export function trilhaBySlug(slug) {
  return TRILHAS.find((t) => t.slug === slug) || null;
}

export function detectSlugFromLocation(loc = window.location) {
  const path = (loc.pathname || "").replace(/\\/g, "/");
  for (const t of TRILHAS) {
    if (path.includes("/" + t.slug + "/") || path.endsWith("/" + t.slug)) {
      return t.slug;
    }
  }
  if (/\/play\.html$/i.test(path) || path.endsWith("/play.html")) {
    return "trilha-operations-leaders";
  }
  return null;
}

export function readSession() {
  try {
    const raw = sessionStorage.getItem(MENTOR_SESSION_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s && s.slug && s.token) return s;
    }
    const saved = localStorage.getItem(MENTOR_TOKEN_KEY);
    if (!saved) return null;
    const s = JSON.parse(saved);
    if (!s || !s.slug || !s.token) return null;
    sessionStorage.setItem(MENTOR_SESSION_KEY, JSON.stringify(s));
    return s;
  } catch {
    return null;
  }
}

export function writeSession({ slug, token, mentor }) {
  const s = { slug, token, mentor: mentor || "", at: Date.now() };
  sessionStorage.setItem(MENTOR_SESSION_KEY, JSON.stringify(s));
  localStorage.setItem(MENTOR_TOKEN_KEY, JSON.stringify(s));
}

export function clearSession() {
  sessionStorage.removeItem(MENTOR_SESSION_KEY);
}

export function forgetToken() {
  clearSession();
  localStorage.removeItem(MENTOR_TOKEN_KEY);
}

export function sessionMatchesPage(session, pageSlug) {
  if (!session || !pageSlug) return false;
  return session.slug === pageSlug;
}

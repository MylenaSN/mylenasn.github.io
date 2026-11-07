/** Configuração de trilhas e sessão mentor (sem secrets no disco). */

export const MENTOR_SESSION_KEY = "afol-mentor-session-v1";

export const TRILHAS = [
  {
    slug: "trilha-operations-leaders",
    label: "AI-First Operations Leadership",
    mentor: "Mylena de Souza Nascimento",
    playPath: "trilha-operations-leaders/play.html",
    /** Paths no repo AI-era-Leaders-Journey (GitHub Pages root). */
    publishPaths: [
      "game/content/mesa-copy.json",
      "trilha-operations-leaders/game/content/mesa-copy.json",
    ],
    reserved: false,
  },
  {
    slug: "trilha-product-leaders",
    label: "AI-First Product Leadership",
    mentor: "Reservado",
    playPath: "trilha-product-leaders/play.html",
    publishPaths: ["trilha-product-leaders/game/content/mesa-copy.json"],
    reserved: true,
  },
  {
    slug: "trilha-engineer-leaders",
    label: "AI-First Engineer Leadership",
    mentor: "Reservado",
    playPath: "trilha-engineer-leaders/play.html",
    publishPaths: ["trilha-engineer-leaders/game/content/mesa-copy.json"],
    reserved: true,
  },
];

export const GITHUB = {
  owner: "MylenaSN",
  repo: "AI-era-Leaders-Journey",
  branch: "main",
};

export function trilhaBySlug(slug) {
  return TRILHAS.find((t) => t.slug === slug) || null;
}

/** Detecta slug pela URL atual (pathname). */
export function detectSlugFromLocation(loc = window.location) {
  const path = (loc.pathname || "").replace(/\\/g, "/");
  for (const t of TRILHAS) {
    if (path.includes("/" + t.slug + "/") || path.endsWith("/" + t.slug)) {
      return t.slug;
    }
  }
  // /play.html raiz = MVP AFOL = operations
  if (/\/play\.html$/i.test(path) || path.endsWith("/play.html")) {
    return "trilha-operations-leaders";
  }
  return null;
}

export function readSession() {
  try {
    const raw = sessionStorage.getItem(MENTOR_SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.slug || !s.token) return null;
    return s;
  } catch {
    return null;
  }
}

export function writeSession({ slug, token, mentor }) {
  sessionStorage.setItem(
    MENTOR_SESSION_KEY,
    JSON.stringify({
      slug,
      token,
      mentor: mentor || "",
      at: Date.now(),
    })
  );
}

export function clearSession() {
  sessionStorage.removeItem(MENTOR_SESSION_KEY);
}

export function sessionMatchesPage(session, pageSlug) {
  if (!session || !pageSlug) return false;
  return session.slug === pageSlug;
}

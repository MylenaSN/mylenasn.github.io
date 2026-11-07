/** Smoke: path guard / isolamento de slug (sem rede). */
import { TRILHAS, trilhaBySlug } from "./mentor-config.js";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const ops = trilhaBySlug("trilha-operations-leaders");
const prod = trilhaBySlug("trilha-product-leaders");
const eng = trilhaBySlug("trilha-engineer-leaders");

assert(ops && ops.publishPaths.length >= 2, "ops paths");
assert(
  ops.publishPaths.every((p) => p.includes("mesa-copy.json")),
  "ops only mesa-copy"
);
assert(
  ops.publishPaths.some((p) => p.startsWith("game/")),
  "ops may write root game/"
);
assert(
  prod.publishPaths.every((p) => p.startsWith("trilha-product-leaders/")),
  "product only own slug"
);
assert(
  eng.publishPaths.every((p) => p.startsWith("trilha-engineer-leaders/")),
  "engineer only own slug"
);
assert(
  !prod.publishPaths.some((p) => p.includes("operations") || p === "game/content/mesa-copy.json"),
  "product cannot touch operations"
);

// Simulate isolation check from mentor-publish.js
function wouldReject(sessionSlug, path) {
  if (sessionSlug !== "trilha-operations-leaders") {
    if (path.startsWith("game/") || path.includes("trilha-operations-leaders")) {
      return true;
    }
  }
  const t = trilhaBySlug(sessionSlug);
  return !t.publishPaths.includes(path);
}

assert(wouldReject("trilha-product-leaders", "game/content/mesa-copy.json"), "prod→ops reject");
assert(wouldReject("trilha-product-leaders", "trilha-operations-leaders/game/content/mesa-copy.json"), "prod→ops slug reject");
assert(!wouldReject("trilha-product-leaders", "trilha-product-leaders/game/content/mesa-copy.json"), "prod own ok");
assert(!wouldReject("trilha-operations-leaders", "game/content/mesa-copy.json"), "ops root ok");

assert(TRILHAS.length === 3, "3 trilhas");
console.log("SMOKE ok · isolamento mentor paths");

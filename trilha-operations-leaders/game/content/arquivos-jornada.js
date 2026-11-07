export const WAVE_DIR = {
  1: "01 Pre-voo",
  2: "02 Produto",
  3: "03 Delivery",
  4: "04 Times hibridos",
  5: "05 Normalizacao evolutiva",
};

const WEEK_WAVE = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3, 7: 4, 8: 4, 9: 5, 10: 5 };

export function rotuloSemana(n) {
  return String(n).padStart(2, "0");
}
export function arquivoHomework(n) {
  const a = ARTIFACTS[n];
  return (a && a.a2) || ("S" + rotuloSemana(n) + "_Homework aula 02 semana " + rotuloSemana(n) + ".md");
}
export function arquivoLab(n) {
  const a = ARTIFACTS[n];
  return (a && a.a3) || ("S" + rotuloSemana(n) + "_Homework aula 03 semana " + rotuloSemana(n) + ".md");
}
const ARTIFACTS = {
  1: {
    a2: "S01_Homework aula 02 semana 01.md",
    a3: "S01_Homework aula 03 semana 01.md",
    extras: [],
  },
  2: {
    a2: "S02_Homework aula 02 semana 02.md",
    a3: "S02_Homework aula 03 semana 02.md",
    extras: ["S02_.PNG", "S02_.PDF", "S02_.CSV"],
  },
  3: {
    a2: "S03_Homework aula 02 semana 03.md",
    a3: "S03_Homework aula 03 semana 03.md",
    extras: ["S03_.PNG", "S03_.PDF", "S03_.CSV", "Agent Writer de Objetivos e Roadmaps (IDE do aluno)"],
  },
  4: {
    a2: "S04_Homework aula 02 semana 04.md",
    a3: "S04_Homework aula 03 semana 04.md",
    extras: ["S04_.PNG", "S04_.PDF", "S04_.CSV", "Agent Writer de Backlog Valioso (IDE do aluno)"],
  },
  5: {
    a2: "S05_Homework aula 02 semana 05.md",
    a3: "S05_Relatório de Diagnóstico de Fluxo do Time.md",
    extras: ["S05_Diagnóstico de Métricas de Fluxo.csv"],
  },
  6: {
    a2: "S06_Homework aula 02 semana 06.md",
    a3: "S06_Homework aula 03 semana 06.md",
    extras: ["S06_Diagnóstico Econômico e ROI de Ciclo.csv"],
  },
  7: {
    a2: "S07_Homework aula 02 semana 07.md",
    a3: "S07_Homework aula 03 semana 07.md",
    extras: ["S07_.PNG", "S07_.PDF", "S07_.CSV"],
  },
  8: {
    a2: "S08_Homework aula 02 semana 08.md",
    a3: "S08_Homework aula 03 semana 08.md",
    extras: ["Agente Orquestrador (IDE do aluno)"],
  },
  9: {
    a2: "S09_Homework aula 02 semana 09.md",
    a3: "S09_Homework aula 03 semana 09.md",
    extras: [],
  },
  10: {
    a2: "S10_Homework aula 02 semana 10.md",
    a3: "S10_Inventário Agêntico AS IS.md",
    extras: ["S10_.PNG", "S10_.PDF", "S10_.CSV", "S10_Workflow Agêntico Humans & AI TO BE (Dashboard Interativo).html"],
  },
};
export const FILES = ARTIFACTS;
export function arquivosHomeworkExtras(n) { return []; }
export function arquivosLabExtras(n) { return (ARTIFACTS[n] && ARTIFACTS[n].extras) || []; }
export function pastaSemana(n) { return "semana-" + rotuloSemana(n); }
export function pastaWave(n) { return WAVE_DIR[WEEK_WAVE[n] || 1]; }
export function pastaBonus() { return WAVE_DIR[5]; }

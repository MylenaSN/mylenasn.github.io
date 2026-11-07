/**
 * Nomes que o aluno lê no Drive e no cofre.
 * Wave acessível · semana-XX · Homework aula 02 / Lab aula 03.
 */
export const WAVE_DIR = {
  1: "01 Pre-voo",
  2: "02 Produto",
  3: "03 Delivery",
  4: "04 Times hibridos",
  5: "05 Equilibrio AI-Era",
};

const WEEK_WAVE = {
  1: 1, 2: 1,
  3: 2, 4: 2, 5: 2, 6: 2,
  7: 3, 8: 3, 9: 3, 10: 3,
  11: 4, 12: 4, 13: 4, 14: 4, 17: 4,
  15: 5, 16: 5,
};

export function rotuloSemana(n) {
  return n === 17 ? "bonus" : String(n).padStart(2, "0");
}

export function arquivoHomework(n) {
  return "Homework aula 02 semana " + rotuloSemana(n) + ".md";
}

export function arquivoLab(n) {
  return "Lab aula 03 semana " + rotuloSemana(n) + ".md";
}

/** Arquivos extras do Homework — o envelope .md pode apontar para outro formulário. */
const HOMEWORK_EXTRAS = {
  2: ["Mapa de cargos aula 02 semana 02.md"],
};

export function arquivosHomeworkExtras(n) {
  return HOMEWORK_EXTRAS[n] || [];
}

/** Arquivos extras do Lab — o .md envelope nao e a unica entrega. */
const LAB_EXTRAS = {
  2: ["Curriculo aula 03 semana 02.md", "Link Project aula 03 semana 02.txt"],
  3: ["Diagrama hierarquia aula 03 semana 03.md"],
  4: ["Grafico KR aula 03 semana 04.csv"],
  5: ["Link prototipo aula 03 semana 05.txt", "Jornada persona aula 03 semana 05.md"],
  7: ["Link overview NotebookLM aula 03 semana 07.txt"],
  8: ["Diagrama fluxo aula 03 semana 08.md"],
  9: ["Pergunta voto aula 03 semana 09.txt"],
  10: ["Deck FinOps aula 03 semana 10.md"],
  11: ["Diagrama esteira aula 03 semana 11.md"],
  12: ["persona.md", "steering.md", "skill.md"],
  13: ["Diagrama spec maestro aula 03 semana 13.md"],
  15: ["Link Project advisor aula 03 semana 15.txt"],
  16: ["Link overview aula 03 semana 16.txt", "Ata ritual aula 03 semana 16.md"],
};

export function arquivosLabExtras(n) {
  return LAB_EXTRAS[n] || [];
}

export function pastaSemana(n) {
  return n === 17 ? "bonus-medida" : "semana-" + rotuloSemana(n);
}

export function pastaWave(n) {
  return WAVE_DIR[WEEK_WAVE[n] || 1];
}

export function pastaBonus() {
  return WAVE_DIR[4] + "/bonus-medida";
}

export const FILES = Object.fromEntries(
  Array.from({ length: 17 }, (_, i) => {
    const n = i + 1;
    return [n, { a2: arquivoHomework(n), a3: arquivoLab(n), extras: arquivosHomeworkExtras(n).concat(arquivosLabExtras(n)) }];
  })
);

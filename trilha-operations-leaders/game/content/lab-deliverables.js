import { arquivoLab, arquivosLabExtras } from "./arquivos-jornada.js";
function labFiles(n) { return [arquivoLab(n)].concat(arquivosLabExtras(n)); }
export const LAB_DELIVERABLES = {
  1: {
    "session": "Arena",
    "deliverable": "Homework da Aula 2 + prompt → consolidado dos 3 pilares. No máximo 3 oportunidades com autor do Gantt. Sem fato no MD → SEM FATO.",
    "why": "O MD da Aula 2 é o insumo; a IA só organiza. Você autoriza o calendário.",
    "outputs": [
      "Lab aula 03 semana 01.md"
    ],
    "files": [
      "Lab aula 03 semana 01.md"
    ],
    artefato: null
  },
  2: {
    "session": "Agent PDI Advisor (CHA por papel/pessoa)",
    "deliverable": "S02_Homework aula 03 semana 02.md",
    "why": "Organograma sem Product, Tech Delivery e Human & AI não sustenta decisão.",
    "outputs": [
      "S02_Homework aula 03 semana 02.md"
    ],
    "files": [
      "Lab aula 03 semana 02.md"
    ],
    "artefato": "Agent PDI Advisor (CHA por papel/pessoa)"
  },
  3: {
    "session": "Construção autoral: Agent Writer de Objetivos e Roadmaps",
    "deliverable": "Dois arquivos Markdown de Writer no repositório do aluno.",
    "why": "Time produtivo prioriza valor — não enche o burndown.",
    "outputs": [
      "Agent Writer de Objetivos e Roadmaps (IDE do aluno)"
    ],
    "files": [
      "Lab aula 03 semana 03.md"
    ],
    "artefato": "Construção autoral: Agent Writer de Objetivos e Roadmaps"
  },
  4: {
    "session": "Construção autoral: Agent Writer de Backlog Valioso",
    "deliverable": "Writer operacional versionado + stories reescritas.",
    "why": "Patton ensinou a ver o backlog como jornada — MVP sem mapa é corte cego.",
    "outputs": [
      "Agent Writer de Backlog Valioso (IDE do aluno)"
    ],
    "files": [
      "Lab aula 03 semana 04.md"
    ],
    "artefato": "Construção autoral: Agent Writer de Backlog Valioso"
  },
  5: {
    "session": "Agent Flow Metrics Judge",
    "deliverable": "Spec do Flow Metrics Judge em Markdown versionado.",
    "why": "A verdadeira fórmula de times produtivos está no fluxo — não no teatro de ocupação.",
    "outputs": [
      "S05_Relatório de Diagnóstico de Fluxo do Time.md"
    ],
    "files": [
      "Lab aula 03 semana 05.md"
    ],
    "artefato": "Agent Flow Metrics Judge"
  },
  6: {
    "session": "Agent Cycle Metrics Judge",
    "deliverable": "S06_Homework aula 03 semana 06.md",
    "why": "Ritmo saudável não é fábrica de ritos. Teto econômico é do líder.",
    "outputs": [
      "S06_Homework aula 03 semana 06.md"
    ],
    "files": [
      "Lab aula 03 semana 06.md"
    ],
    "artefato": "Agent Cycle Metrics Judge"
  },
  7: {
    "session": "Plano Agêntico TO BE com Gates Humanos",
    "deliverable": "S07_Homework aula 03 semana 07.md",
    "why": "Produtividade sem gate é alucinação operacional.",
    "outputs": [
      "S07_Homework aula 03 semana 07.md"
    ],
    "files": [
      "Lab aula 03 semana 07.md"
    ],
    "artefato": "Plano Agêntico TO BE com Gates Humanos"
  },
  8: {
    "session": "Construção autoral: Agente Orquestrador (MCP, subagentes, evals, gates)",
    "deliverable": "S08_Homework aula 03 semana 08.md + arquivos do Orquestrador.",
    "why": "Spec before code. Maestro não executa o ofício dos filhos.",
    "outputs": [
      "S08_Homework aula 03 semana 08.md"
    ],
    "files": [
      "Lab aula 03 semana 08.md"
    ],
    "artefato": "Construção autoral: Agente Orquestrador (MCP, subagentes, evals, gates)"
  },
  9: {
    "session": "Agent PDC Advisor",
    "deliverable": "S09_Homework aula 03 semana 09.md",
    "why": "Transformar é multiplicar o que o time já sabe. Dado de pessoa só entra com autorização.",
    "outputs": [
      "S09_Homework aula 03 semana 09.md"
    ],
    "files": [
      "Lab aula 03 semana 09.md"
    ],
    "artefato": "Agent PDC Advisor"
  },
  10: {
    "session": "Entregáveis finais (Inventário AS IS + Workflow TO BE)",
    "deliverable": "Inventario-Agentico-AS-IS.md + Workflow-Agentico-Humans-AI-TO-BE.html",
    "why": "A ferramenta não é protagonista. O mapa entra no ritual mensal.",
    "outputs": [
      "S10_Inventário Agêntico AS IS.md + S10_Workflow Agêntico Humans & AI TO BE.html"
    ],
    "files": [
      "Lab aula 03 semana 10.md"
    ],
    "artefato": "Entregáveis finais (Inventário AS IS + Workflow TO BE)"
  }
};
export function labPersona(week, reforco) {
  const x = LAB_DELIVERABLES[week];
  const name = x && x.session ? x.session : "Especialista da semana";
  if (reforco) return name + " — modo reforço. Chat novo. Só fatos da Aula 2. Ruler no gate.";
  return name + " — executa a entrega com evidência. Silêncio não aprova.";
}
export function labSessionTitle(week) {
  const meta = LAB_DELIVERABLES[week];
  const tag = meta ? meta.session : "Lab IA";
  return "Semana " + String(week).padStart(2, "0") + " - Aula 03 [" + tag + "]";
}

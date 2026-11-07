import { arquivoLab } from "./arquivos-jornada.js";

/**
 * Prompts estruturados do Lab IA — seções 1–6 (Persona · Contexto · Tarefa · Exemplo · Formato · Tom).
 */
const CRITICAL =
  "⚠️ RESTRIÇÃO CRÍTICA: Use APENAS fatos explícitos que aparecem descritos no cenário atual e nos insumos fornecidos. "
  + "É estritamente proibido inventar dados, usar conhecimentos gerais da web ou assumir que \"todo time faz isso\". "
  + "Se não está descrito no cenário atual, não existe.";

const TOM =
  "Direto, técnico, pragmático e totalmente orientado a entregas. "
  + "Evite floreios teóricos, introduções corteses ou conclusões em formato de ensaio no chat. "
  + "Vá direto ao bloco de código Markdown.";

const EXEMPLO_PADRAO =
  "Siga a lógica do exemplo no painel lateral (um time por wave): use o tipo de evidência factual e a dor real constatada — nunca métricas inventadas ou deduções sem lastro.\n"
  + "- Exemplo ruim: ROI sem baseline, app genérico, dado fora do cenário fornecido.\n"
  + "- Exemplo bom: apontar a dor exata relatada pelo time com evidência do homework da Aula 2.";

function ctxHomework(homework, pad, a2File) {
  return [
    "Analise o painel lateral fornecido e o arquivo `input-semana-" + pad + ".txt` com o insumo da Aula 2.",
    homework,
  ].join("\n");
}

const WEEK_SPECS = {
  1: {
    persona:
      "Você é um gestor sênior de times de tecnologia.\n"
      + "Você mapeia o fluxo como está hoje (AS IS) e consolida o que leu em três pilares: Product Management, Tech Delivery e Human & AI Teams.\n"
      + "No terceiro pilar você olha pontes humanas, ética e desenvolvimento — não catálogo de ferramenta.\n"
      + "Você aponta oportunidade só quando um fato do arquivo sustenta uma prática de autor da Aula 2.",
    contextoExtra:
      "O único cenário é o arquivo `Homework aula 02 semana 01.md`. Sem ele, PERGUNTE. Não invente o time.\n"
      + "As seções 1 a 5 são a leitura STATIK: propósito, demanda, capacidade, fluxo, urgência.\n"
      + "Os blocos Exemplo A e Exemplo B são de outros times. Não são fato do aluno.\n"
      + "Autores permitidos, e só se o fato sustentar: Drucker, Doerr, Perri, Smith, Ford, Anderson, Taylor, Ohno, Skelton e Pais, Deming, Ng, Mollick, Teo.",
    tarefa: (f) =>
      "Leia o arquivo inteiro antes de escrever. Gere `" + f.a3 + "` completo.\n"
      + "Para cada pilar: o que o arquivo mostra, o que já está em uso, a lacuna, e no máximo uma oportunidade.\n"
      + "Depois, no máximo três oportunidades. Cada uma: fato (número da seção) → prática do autor → o que ainda não fazer.\n"
      + "Seção Sua resposta vazia = SEM FATO. Não complete com o Exemplo A ou B.\n"
      + "Não resuma no chat.",
    formato: () =>
      "Markdown pronto para salvar, com estes títulos:\n\n"
      + "```markdown\n# " + arquivoLab(1) + "\n\n## Time\n(1 linha)\n\n"
      + "## Product Management\n- **O que o arquivo mostra:**\n- **Já em uso / lacuna:**\n- **Oportunidade:** ou SEM FATO\n\n"
      + "## Tech Delivery\n- **O que o arquivo mostra:**\n- **Já em uso / lacuna:**\n- **Oportunidade:** ou SEM FATO\n\n"
      + "## Human & AI Teams\n- **O que o arquivo mostra:**\n- **Já em uso / lacuna:**\n- **Oportunidade:** ou SEM FATO\n\n"
      + "## Três oportunidades\n1.\n2.\n3.\n\n"
      + "## GATE HUMANO\n- PARA: a IA não escolhe o que entra no calendário do time\n- QUEM:\n- SÓ DEPOIS:\n- FRASE DE TRAVA: Nenhuma oportunidade deste arquivo entra no calendário sem o sim de [QUEM].\n```\n"
      + "Repita no fim: Exemplo A e Exemplo B não são o time do aluno.",
  },
};


export function buildLabPrompt(week, { reforco, homework, files, lab, persona }) {
  const pad = String(week).padStart(2, "0");
  const spec = WEEK_SPECS[week] || {};

  // Prompt livre: cola direto na ferramenta (ex.: Enhancv). Sem envelope Teo.
  if (spec.livre) {
    return typeof spec.livre === "function" ? spec.livre({ reforco, files, lab }) : spec.livre;
  }

  const personaBlock = spec.persona || persona;
  const ctx = [
    ctxHomework(homework, pad, files.a2),
    spec.contextoExtra || "",
    CRITICAL,
  ].filter(Boolean).join("\n\n");

  const tarefaFn = spec.tarefa || (() => lab.prompt || "Execute a entrega da Aula 3 com os insumos fornecidos.");
  const formatoFn = spec.formato || (() => lab.casca ? "Use o modelo de referência abaixo — mantenha os títulos das seções.\n\n" + lab.casca : "Markdown completo pronto para salvar no arquivo da semana.");

  const sections = [
    "# 1. PERSONA",
    personaBlock,
    "",
    "# 2. CONTEXTO",
    ctx,
    "",
    "# 3. TAREFA",
    tarefaFn(files),
    "",
    "# 4. EXEMPLO",
    EXEMPLO_PADRAO,
    "",
    "# 5. FORMATO",
    formatoFn(lab),
    "",
    "# 6. TOM",
    reforco
      ? "Modo reforço: chat novo, auditor rigoroso. O output anterior foi invalidado. " + TOM
      : TOM,
  ];

  if (reforco) {
    sections.splice(4, 0, "Feche o chat que alucinou. Abra um chat novo antes de colar este prompt.\n");
  }

  return sections.join("\n");
}

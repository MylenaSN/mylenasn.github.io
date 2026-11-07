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
  2: {
    // Duas fases explícitas. Insumo = Homework jornada + LinkedIn. Sem Teo 6 pilares.
    livre: [
      "FASE 1 — Gerar o currículo em PDF no Enhancv",
      "",
      "1) Abra https://app.enhancv.com e entre com o seu LinkedIn.",
      "2) Cole o bloco abaixo na ferramenta (ou no campo de pedido da IA do Enhancv).",
      "3) Exporte o PDF (texto legível, não imagem).",
      "4) Salve o PDF no Drive.",
      "",
      "--- cole na Fase 1 (Enhancv) ---",
      "",
      "Purpose:",
      "Ajustar meu currículo para a vaga que eu sonho, lendo meu LinkedIn",
      "e minha jornada profissional (Homework aula 02 semana 02.md).",
      "",
      "Ação:",
      "Reescreva minhas experiências profissionais usando palavras-chave da vaga",
      "e focando em resultados quantificáveis que estejam no meu Homework / LinkedIn.",
      "",
      "Tool:",
      "Enhancv",
      "",
      "Input:",
      "- Login / upload do meu LinkedIn",
      "- Homework aula 02 (jornada + banco de evidências)",
      "- Anúncio da vaga-alvo",
      "[cole a URL do LinkedIn]",
      "[cole trechos do Homework — só linhas com evidência]",
      "[cole ou anexe o anúncio da vaga]",
      "",
      "Output Ideal:",
      "Keywords da vaga, senioridade correta, resultado/impacto,",
      "linguagem mais executiva e moderna — em layout ATS (uma coluna).",
      "",
      "Não invente número, cargo nem data: se o resultado não estiver no meu perfil ou Homework,",
      "marque como [FALTA EVIDÊNCIA] em vez de preencher.",
      "",
      "--- fim do bloco Enhancv ---",
      "",
      "==========",
      "",
      "FASE 2 — Ativar a esteira agêntica Loop Vitae",
      "",
      "1) Abra https://github.com/MylenaSN/Loop_Vitae",
      "2) Code → Download ZIP",
      "3) Copie a pasta para o seu Drive pessoal.",
      "   Licença individual do aluno matriculado na formação",
      "   AI-First Operations Leadership — NÃO redistribuir.",
      "   Sem conta GitHub: baixe o pacote pela plataforma da .",
      "4) Ative a esteira num Notebook Gemini: suba a pasta + o PDF da Fase 1",
      "   e rode o setup inicial (README da esteira — só markdown / NL, sem script).",
      "5) Rode um loop com o Curriculum-advisor numa vaga hipotética.",
      "   Cole o bloco abaixo para gerar a vaga; depois peça o fit com sua jornada.",
      "6) Analise o output e finalize com md-2-pdf (currículo atualizado para essa vaga).",
      "",
      "--- cole na Fase 2 (Notebook Gemini) — vaga hipotética ---",
      "",
      "Gere UMA vaga fictícia (não use empresa real de mercado):",
      "",
      "Empresa: ",
      "Cargo: AI-Orchestrator Manager",
      "Nível: sênior / liderança de operações com IA",
      "Contexto: formação e operação de times que orquestram humanos + agentes",
      "Responsabilidades: 6 bullets concretos (orquestração, gates humanos,",
      "métricas de fluxo, currículo de papéis, esteiras em linguagem natural)",
      "Requisitos: 6 bullets alinhados a liderança AI-first (não peça PhD em ML)",
      "",
      "Formato: anúncio pronto para colar (título, empresa, sobre a vaga,",
      "responsabilidades, requisitos).",
      "Não invente salários nem benefícios irreais.",
      "Não use nomes de empresas de IA reais.",
      "",
      "Depois: anexe Homework (jornada) + PDF da Fase 1 e peça ao",
      "Curriculum-advisor o fit contra esse anúncio.",
      "Sem evidência no Homework/LinkedIn → [FALTA EVIDÊNCIA].",
      "",
      "--- fim Fase 2 ---",
    ].join("\n"),
  },
  3: {
    tarefa: () =>
      "Mostre o raciocínio da classe ANTES do rótulo para 5 entregas reais do homework. "
      + "Para cada: Output / Outcome / Impact e 1 frase de evidência. Depois: diagrama mermaid da Hierarquia de Valor.",
    formato: () => "Markdown estruturado e bloco mermaid. Não resuma no chat.",
  },
  4: {
    tarefa: () =>
      "Workflow: 1) leia o baseline colado 2) resuma os KRs 3) NÃO altere o alvo. "
      + "KR sem baseline medido = INVÁLIDO. Gere gráfico simples baseline → hoje → target.",
    formato: () => "Tabela ou gráfico com unidades e nota de validação em markdown.",
  },
  5: {
    tarefa: () =>
      "Gere protótipo SÓ da fatia IN do PBB. Não implemente OUT. "
      + "Inclua link do protótipo e 1 imagem da jornada da persona. O MVP deve ligar ao KR da semana 04.",
    formato: () => "URL do protótipo, referência da imagem e nota de ligação ao OKR em markdown.",
  },
  6: {
    tarefa: () =>
      "Avalie as 3 user stories da Aula 2 com Scorecard INVEST (1–3 por critério). "
      + "Some o total (máx. 18). Regra: qualquer nota 1 = REPROVADA. "
      + "Proibido 3 em tudo sem justificativa. Sugira ajuste mínimo só para reprovadas.",
    formato: () => "Tabela por story: critério · nota 1–3 · justificativa · total · veredito.",
  },
  7: {
    tarefa: () =>
      "Com os artefatos da Aula 2 no caderno: liste 8–12 termos conflitantes COM citação do arquivo. "
      + "Depois gere o Overview. Termo sem citação = alucinação.",
    formato: () => "Glossário citado e link ou nota do Overview.",
  },
  8: {
    tarefa: (f) =>
      "Monte `" + f.a3 + "` com LT, CT, TH, WIP e CFD em linguagem do time; Lei de Little (LT ≈ WIP ÷ TH); "
      + "diagrama mermaid do fluxo. Use só números do homework — não invente target externo.",
    formato: () => "Arquivo markdown completo com seções numeradas e diagrama mermaid.",
  },
  9: {
    tarefa: (f) =>
      "A partir da lista fica/sai/muda da Aula 2, desenhe board Agora / Proposta / Voto e 1 pergunta de voto. "
      + "NÃO declare o ritmo vencedor. Salve em `" + f.a3 + "`.",
    formato: () => "Markdown colável no Mural ou IDE — não ensaio no chat.",
  },
  10: {
    tarefa: () =>
      "Gere apresentação curta com 3 cenários de ROI (conservador / base / agressivo) a partir do Passaporte FinOps. "
      + "Slide final = teto assinado por humano. Não recomende só o agressivo.",
    formato: () => "5 slides (Gamma/PDF) e nota do teto em markdown.",
  },
  11: {
    tarefa: () =>
      "Do mapa da Aula 2: 1 nó com automação sem LLM (n8n/Zapier), 1 nó com IDE/GenAI e 1 etapa proibida ao agente. "
      + "Proibido agente em decisão de valor ou gate humano.",
    formato: () => "Dois fluxos documentados (diagrama ou export) com legenda de gates.",
  },
  12: {
    tarefa: () =>
      "Gere persona.md, steering.md e skill.md no disco e hook (evento → condição → gate). "
      + "Inclua 3 proibições no steering. Custom GPT sem arquivo não conta.",
    formato: () => "Três arquivos markdown completos prontos para salvar no repositório.",
  },
  13: {
    tarefa: (f) =>
      "Escreva spec do maestro da Aula 2: requirements, design, gates. NÃO commitar código antes da spec. "
      + "Diagrama: input → roteamento → specialists → gate humano. Salve `" + f.a3 + "`.",
    formato: () => "Spec markdown com contratos de entrada/saída e runbook de falha.",
  },
  14: {
    tarefa: (f) =>
      "A KB da Aula 2 é a base (RAG). Escreva 3 casos de eval com limiar numérico. "
      + "Sem limiar o workflow não promove. Fine-tune só se a KB falhar — documente a decisão. Salve `" + f.a3 + "`.",
    formato: () => "Casos de teste, limiar e relatório eval em markdown.",
  },
  15: {
    tarefa: () =>
      "Alimente o Project com a timeline da Aula 2. Categorias = as do líder. "
      + "Recuse PDI CHA genérico. Entregue 1 gap SMART de duas semanas com evidência.",
    formato: () => "Configuração do Project descrita e gap SMART em markdown.",
  },
  16: {
    tarefa: (f) =>
      "Suba o pacote do ano e gere Overview. A decisão do ritual é escrita offline pelo líder — o modelo não escolhe. Salve `" + f.a3 + "`.",
    formato: () => "Overview e seção separada \"Decisão offline (humano)\" em markdown.",
  },
  17: {
    tarefa: (f) =>
      "Preencha `" + f.a3 + "` estressando a unidade que o time escreveu na Aula 2 — sem inventar PF/COSMIC/LOC. "
      + "Se o bloco da Aula 2 estiver vazio, PERGUNTE. Recuse velocity como tamanho.",
    formato: () =>
      "Markdown com lente copiada, 3 tentações de inflar a unidade, o que a diretoria entenderia errado e GATE HUMANO.",
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

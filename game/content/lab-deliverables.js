import { arquivoLab, arquivosLabExtras } from "./arquivos-jornada.js";

function labFiles(n) {
  return [arquivoLab(n)].concat(arquivosLabExtras(n));
}

/** Metadados de entrega do Lab IA — título da sessão, o quê gerar e por quê. */
export const LAB_DELIVERABLES = {
  1: {
    session: "Arena",
    deliverable: "Pegue o Homework da Aula 2 (já preenchido) + o prompt do lab e cole num chat (ChatGPT ou Gemini). A saída é o consolidado do SEU time nos 3 pilares — Product · Tech Delivery · Human & AI — lendo propósito, demanda, capacidade, fluxo e urgência. No máximo 3 oportunidades, cada uma amarrada a um autor do Gantt da Aula 2. Sem fato no MD → SEM FATO.",
    why: "Simples: o MD da Aula 2 é o insumo; a IA só organiza. Você autoriza o que entra no calendário.",
    outputs: ["Lab aula 03 semana 01.md"],
    files: labFiles(1),
    artefato: null,
  },
  2: {
    session: "Enhancv · Loop Vitae",
    deliverable: "Fase 1: PDF ATS no Enhancv (LinkedIn + jornada). Fase 2: esteira Loop Vitae no Notebook Gemini (vaga AI-Orchestrator Manager) + md-2-pdf.",
    why: "O Homework (jornada) é o insumo. Sem evidência, a linha não entra. Duas fases — não misture Enhancv com a esteira.",
    outputs: ["PDF Fase 1", "Currículo md-2-pdf Fase 2", "Linhas [FALTA EVIDÊNCIA]"],
    files: labFiles(2),
    artefato: null,
  },
  3: {
    session: "Hierarquia",
    deliverable: "5 linhas classificadas (Output / Outcome / Impact) com raciocínio visível e diagrama da hierarquia de valor.",
    why: "CoT antes do rótulo — sem raciocínio, a classe vira chute da IA.",
    outputs: ["Texto estruturado e diagrama (mermaid ou imagem)"],
    files: labFiles(3),
    artefato: null,
  },
  4: {
    session: "OKR",
    deliverable: "Síntese dos KRs com baseline medido e gráfico simples baseline → hoje → target.",
    why: "A IA resume; você assina o alvo. Sem baseline do seu time, o KR é inválido.",
    outputs: ["Planilha ou gráfico e nota de validação"],
    files: labFiles(4),
    artefato: null,
  },
  5: {
    session: "Protótipo",
    deliverable: "Link de protótipo só da fatia core (IN) do PBB e 1 imagem da jornada da persona.",
    why: "O MVP serve o OKR — nunca o contrário. Vitrine que implementa o OUT da Aula 2 não fecha o lab.",
    outputs: ["URL do protótipo e 1 imagem"],
    files: labFiles(5),
    artefato: null,
  },
  6: {
    session: "INVEST",
    deliverable: "Scorecard INVEST (nota 1–3 por critério) de 3 user stories, com total, veredito e reescrita das reprovadas.",
    why: "Wake propôs checklist qualitativo; o scorecard de mercado usa corte em nota 1 — você vê onde a IA infla a pontuação.",
    outputs: ["Tabela scorecard por story", "1 reescrita se houver reprovação"],
    files: labFiles(6),
    artefato: null,
  },
  7: {
    session: "Topologia",
    deliverable: "Mapa dos 4 tipos de time (Stream / Platform / Enabling / Complicated-subsystem) e glossário com citação dos PDFs da Aula 2.",
    why: "Termos decisores do bounded context precisam de significado explícito — RAG real, não chute da web.",
    outputs: ["Mapa e glossário", "1 Audio ou Video Overview (NotebookLM)"],
    files: labFiles(7),
    artefato: "Glossário do time (apoio à esteira)",
  },
  8: {
    session: "Fluxo Kanban",
    deliverable: "Dashboard com LT, CT, TH, WIP e CFD, diagrama mermaid do fluxo e rascunho de prompt para 3 agents (apoio futuro).",
    why: "Kanban sistêmico (Anderson): só se gerencia o que se vê. Métricas do seu contexto — não target externo.",
    outputs: [arquivoLab(8), "diagrama de fluxo"],
    files: labFiles(8),
    artefato: "Métricas de fluxo (apoio aos 3 agents do curso)",
  },
  9: {
    session: "Ritmos",
    deliverable: "Board antes/depois de 1 ritmo (fica / sai / muda) e 1 pergunta de voto.",
    why: "Ritmo sem voto humano é teatro — a IA não escolhe o calendário do time.",
    outputs: ["Board (md ou Mural)", "pergunta Mentimeter"],
    files: labFiles(9),
    artefato: null,
  },
  10: {
    session: "FinOps",
    deliverable: "Apresentação curta (5 slides) com 3 cenários de ROI: conservador, base, agressivo e slide de teto assinado.",
    why: "C-Level precisa ver o conservador — não só o ROI que a IA gosta de vender.",
    outputs: ["Deck (Gamma/PDF)"],
    files: labFiles(10),
    artefato: null,
  },
  11: {
    session: "Esteira híbrida",
    deliverable: "Mapa com 1 etapa em automação clássica (n8n ou Zapier), 1 etapa com GenAI e 1 etapa proibida ao agente.",
    why: "Nem tudo precisa de LLM — gate humano em decisão de valor é obrigatório.",
    outputs: ["Diagrama ou export do fluxo"],
    files: labFiles(11),
    artefato: "Workflow Agêntico (Wave 04)",
  },
  12: {
    session: "Agent files",
    deliverable: "Três arquivos no disco: persona.md, steering.md, skill.md e hook (evento → gate).",
    why: "Agent sem arquivo no repo é chatbot — não entra no pacote do ano.",
    outputs: ["3 arquivos .md no repositório"],
    files: labFiles(12),
    artefato: "Workflow Agêntico (Wave 04)",
  },
  13: {
    session: "Maestro",
    deliverable: "Spec do maestro: requirements → design → gates (sem código antes da spec).",
    why: "Orquestração agêntica sustentável começa em spec, não em PR no primeiro dia.",
    outputs: ["Spec .md e diagrama hierárquico"],
    files: labFiles(13),
    artefato: "Workflow Agêntico (Wave 04)",
  },
  14: {
    session: "Eval e RAG",
    deliverable: "3 casos de eval com limiar numérico e prova de que a KB responde antes de pedir fine-tune.",
    why: "RAG primeiro, fine-tune só se a KB falhar — limiar sem número não promove workflow.",
    outputs: ["Casos de teste e relatório eval"],
    files: labFiles(14),
    artefato: "Workflow Agêntico (Wave 04)",
  },
  15: {
    session: "PDI Advisor",
    deliverable: "Project do advisor com timeline real, categorias suas e 1 gap SMART de duas semanas.",
    why: "Advisor que devolve CHA genérico não fecha a quinzena — categorias vêm da sua trajetória.",
    outputs: ["Project configurado e 1 gap SMART"],
    files: labFiles(15),
    artefato: "Agent: PDI Advisor (Wave 05)",
  },
  16: {
    session: "Fechamento",
    deliverable: "Overview do pacote do ano (áudio ou vídeo) e 1 decisão escrita offline (sem LLM).",
    why: "O modelo conta a história; você assina a decisão do ritual.",
    outputs: ["Overview NotebookLM/Gamma", "ata em texto seu"],
    files: labFiles(16),
    artefato: "Agent: PDI Advisor (Wave 05)",
  },
  17: {
    session: "Medida",
    deliverable: "Língua de tamanho para o C-Level: lente escolhida, unidade, o que não conta, frase de comitê.",
    why: "Comitê ouve função entregue — não velocity nem PF inventado.",
    outputs: ["1 arquivo de medida"],
    files: labFiles(17),
    artefato: null,
  },
};

/** Personas do Lab IA — especialista por semana (hard + soft skills). */
export const LAB_PERSONAS = {
  1: {
    persona:
      "Gestor sênior de times de tecnologia. Hard: ler o Homework STATIK e devolver consolidado nos 3 pilares (Product · Tech Delivery · Human & AI), no máximo 3 oportunidades com autor do Gantt. Soft: sem fato no MD = SEM FATO; não usa Exemplo A/B como se fosse o time do aluno.",
    reforco:
      "Auditor do consolidado — confere se cada oportunidade tem fato no Homework e autor do Gantt. Soft: risca dono, número ou autor inventado.",
  },
  2: {
    persona:
      "Guia das duas fases: (1) PDF ATS no Enhancv com jornada + LinkedIn; (2) Loop Vitae no Notebook Gemini com vaga AI-Orchestrator Manager. Soft: gate do fato — sem evidência → [FALTA EVIDÊNCIA]; licença individual, não redistribuir.",
    reforco:
      "Revisor das duas fases — confere PDF legível, esteira ativada e md-2-pdf. Soft: recusa métrica inventada e mistura de Fase 1 com Fase 2 no mesmo passo.",
  },
  3: {
    persona:
      "Analista de valor e modelagem de hierarquia (Output · Outcome · Impact). Hard: chain-of-thought explícito, classificação com evidência, diagrama mermaid. Soft: pedagogia técnica — mostra o raciocínio antes do rótulo; recusa métrica não medida.",
    reforco:
      "Auditor de classificação de valor — exige CoT visível em cada uma das 5 linhas. Hard: O/O/I, mermaid. Soft: rejeita diagrama bonito sem as 5 linhas fundamentadas.",
  },
  4: {
    persona:
      "Especialista em OKR operacional e visualização de progresso para liderança. Hard: baseline→hoje→target, gráficos com unidade, workflow em passos. Soft: não altera target sem dado; marca KR inválido quando falta baseline.",
    reforco:
      "Controller de OKR — confere se o gráfico usa só números colados pelo líder. Hard: OKR, FinOps leve. Soft: devolve qualquer alteração de meta não autorizada.",
  },
  5: {
    persona:
      "Product designer de discovery com Lean Inception e PBB (Cagan). Hard: prototipação da fatia IN, jornada da persona, coerência com OKR. Soft: recusa OUT no protótipo; exige link clicável, não markdown de tela.",
    reforco:
      "Revisor de escopo de MVP — valida ligação explícita IN → KR da semana 04. Hard: PBB, prototipação. Soft: corta feature fora do IN com justificativa de uma linha.",
  },
  6: {
    persona:
      "Product Owner sênior com Scorecard INVEST em refinamento de backlog. Hard: user stories, critérios de aceite, escala 1–3 por letra, regra de corte em nota 1. Soft: confronta story fraca; proíbe 18/18 automático sem segundo olhar do líder.",
    reforco:
      "Facilitador de refinamento INVEST — reaplica scorecard 1–3 nas stories da Aula 2 em chat novo. Hard: I·N·V·E·S·T. Soft: nomeia qual critério recebeu nota 1 e propõe ajuste mínimo.",
  },
  7: {
    persona:
      "Arquiteto de informação e engenheiro de conhecimento (RAG corporativo). Hard: glossário com citação de fonte, bounded context, mapa de topologias. Soft: precisão terminológica — termo sem citação = alucinação.",
    reforco:
      "Curador de glossário — lista só termos que aparecem nos PDFs da Aula 2 com página/trecho. Hard: RAG, NotebookLM. Soft: recusa overview sem glossário citado.",
  },
  8: {
    persona:
      "Kanban coach e analista de métricas de fluxo (Anderson). Hard: LT, CT, TH, WIP, CFD, Lei de Little, diagrama mermaid do fluxo. Soft: traduz número para alavanca do time — não inventa benchmark externo.",
    reforco:
      "Analista de fluxo em modo auditoria — recalcula LT ≈ WIP ÷ TH com os números colados. Hard: métricas Kanban, Lab aula 03 semana 08.md. Soft: pergunta antes de preencher lacuna.",
  },
  9: {
    persona:
      "Agile coach de cadências e facilitador de decisão coletiva. Hard: board Agora/Proposta/Voto, auditoria fica-sai-muda, artefato no IDE. Soft: neutralidade — não declara ritmo vencedor; prepara pergunta de voto.",
    reforco:
      "Facilitador de workshop remoto — reconstrói o board só com itens da Aula 2. Hard: engenharia de ciclos, Lab aula 03 semana 09.md. Soft: recusa layout sem lista fica/sai/muda.",
  },
  10: {
    persona:
      "Analista financeiro de portfólio tech e FinOps (cenários e teto). Hard: ROI conservador/base/agressivo, deck executivo, console em leitura. Soft: comunicação para C-Level — slide final é teto assinado por humano.",
    reforco:
      "Controller de business case — verifica se os 3 cenários usam o Passaporte FinOps colado. Hard: FinOps, Gamma/deck. Soft: não recomenda cenário agressivo como única opção.",
  },
  11: {
    persona:
      "Arquiteto de automação híbrida (n8n/Zapier e IDE). Hard: mapeamento de nós, automação sem LLM vs etapa com Copilot, gates humanos. Soft: desenha o que o agente nunca toca (valor, risco, cliente).",
    reforco:
      "Revisor de esteira híbrida — exige 1 nó sem GenAI e 1 com IDE, ambos do mapa da Aula 2. Hard: n8n, Zapier, Cursor. Soft: bloqueia agente em decisão de gate.",
  },
  12: {
    persona:
      "Engenheiro de agentes (persona · steering · skill em disco). Hard: arquivos versionados, hooks evento→condição→gate, 3 proibições no steering. Soft: agente com limite de cargo — persona sem proibição é rascunho inválido.",
    reforco:
      "Arquiteto de agent files — valida hook ligado ao gate da semana 11. Hard: Cursor/Kiro, persona.md/steering.md/skill.md. Soft: recusa Custom GPT sem pasta no git.",
  },
  13: {
    persona:
      "Analista de sistemas spec-driven (requirements antes de código). Hard: spec hierárquica, contratos entrada/saída, diagrama maestro→specialists→gate. Soft: disciplina spec-before-code — código sem spec é devolvido.",
    reforco:
      "Revisor de spec do maestro — checa gate humano no diagrama e nos requirements. Hard: Kiro/Eraser, design doc. Soft: pergunta contrato ausente antes de sugerir implementação.",
  },
  14: {
    persona:
      "Engenheiro de avaliação (evals) e RAG em produção. Hard: casos de teste com limiar numérico, Promptfoo/Sheets, decisão RAG vs fine-tune. Soft: não promove workflow sem limiar; RAG antes de fine-tune.",
    reforco:
      "Auditor de evals — reescreve 3 casos ancorados na KB da Aula 2 com limiar mensurável. Hard: RAG, evals, Husain. Soft: recusa fine-tune sem tentativa de KB documentada.",
  },
  15: {
    persona:
      "Coach executivo de desenvolvimento (PDI ancorado em evidências). Hard: timeline real, categorias do líder, gap SMART de duas semanas. Soft: recusa CHA genérico e PDI de prateleira — pede evidência da linha do tempo.",
    reforco:
      "Advisor de carreira em Project — reaplica categorias MINHAS da Aula 2. Hard: PDI, SMART. Soft: devolve qualquer gap sem verbo mensurável e prazo.",
  },
  16: {
    persona:
      "Facilitador de retrospectiva anual e sintetizador de conhecimento (NotebookLM). Hard: overview de pacote (A3, OKR, fluxo, PDI), síntese com fontes. Soft: autoria humana — ritual e decisão offline não são escolhidos pelo modelo.",
    reforco:
      "Curador do fechamento — gera overview só com arquivos do pacote; separa síntese de decisão humana. Hard: manifest, ata offline. Soft: apaga frase onde o modelo 'decidiu' pelo time.",
  },
  17: {
    persona:
      "Métrico de software e estimeiro funcional (Albrecht · COSMIC · Anderson). Hard: lente única escolhida pelo time, unidade de entrega, stress test sem inventar PF/LOC. Soft: não troca lente; pergunta se Aula 2 vazia; recusa velocity como tamanho.",
    reforco:
      "Auditor de língua de tamanho — estressa a unidade escrita na Aula 2 sem escolher lente nova. Hard: B04, medida funcional. Soft: lista 3 tentações de inflar a unidade com linguagem que a diretoria entenderia errado.",
  },
};

export function labPersona(week, reforco) {
  const p = LAB_PERSONAS[week];
  if (!p) return reforco
    ? "Especialista da semana em modo reforço — chat novo, só fatos do contrato da Aula 2."
    : "Especialista da semana — executa a entrega com hard skills do método e soft skills de rigor com evidência.";
  return reforco ? p.reforco : p.persona;
}

export function labSessionTitle(week) {
  const meta = LAB_DELIVERABLES[week];
  const tag = meta ? meta.session : "Lab IA";
  return "Semana " + String(week).padStart(2, "0") + " - Aula 03 [" + tag + "]";
}

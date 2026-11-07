export const AULA03_BRIEF = {
  1: {
    titulo: "First Loop — do fato ao consolidado",
    autor: "Teo · pedido com cláusulas",
    porque: "O coração do prompt é a análise humana da Aula 2. Homework + prompt → chat → consolidado dos 3 pilares. Orion é o tipo; a verdade é a do seu time.",
    takeaway: "Fato → autor do Gantt → oportunidade. Sem evidência, a linha não vive.",
    cards: [
      { t: "Insumo = seu MD", d: "Homework aula 02 (Sua resposta). Sem isso, o lab não começa." },
      { t: "Prompt → chat", d: "Cole homework + prompt. Peça o consolidado Product · Tech Delivery · Human & AI." },
      { t: "Gate do fato", d: "No máximo 3 oportunidades com autor do Gantt. Inventou — risca." },
    ],
    track: [
      { k: "LLM", role: "Motor", d: "Gera e completa texto a partir do que recebe." },
      { k: "Prompt", role: "Pedido", d: "Instrução que define tarefa, tom e formato." },
      { k: "Contexto", role: "Base", d: "Dados, regras e histórico que condicionam a resposta." },
      { k: "Alucinação", role: "Risco", d: "Resposta confiante, inventada ou factualmente incorreta." },
      { k: "Tool", role: "Capacidade", d: "Recurso externo além de gerar texto." },
      { k: "Agente", role: "Ação", d: "IA orientada a objetivo: executa etapas e usa tools." },
      { k: "Loop", role: "Ciclo", d: "Pedir → agir → verificar → ajustar até servir." },
      { k: "HITL", role: "Humano", d: "Human-in-the-Loop: revisa ou autoriza nos pontos críticos." },
      { k: "Gate", role: "Decisor", d: "Momento em que você autoriza ou bloqueia a saída." },
      { k: "Orquestrador", role: "Sistema", d: "Quem articula pessoas, agentes e tools com critérios." },
    ],
    grid: [
      { n: "1", t: "Persona", q: "Quem representa?", d: "Papel e autoridade desta tarefa." },
      { n: "2", t: "Contexto", q: "Em que situação?", d: "Dados, regras e limites — sem responder no vazio." },
      { n: "3", t: "Tarefa", q: "O que fazer agora?", d: "Um verbo único: resumir, listar, comparar." },
      { n: "4", t: "Tom", q: "Como deve soar?", d: "Formalidade, objetividade, didática." },
      { n: "5", t: "Formato", q: "Como entregar?", d: "Frase, bullets, tabela, seções." },
      { n: "6", t: "Exemplos", q: "O que é bom?", d: "Modelo de resultado bom — e, se útil, ruim." },
    ],
  },
  2: {"titulo": "Anatomia do organograma agêntico", "autor": "Teo · Liu · Ruler", "porque": "Organograma sem Product, Tech Delivery e Human & AI não sustenta decisão.", "takeaway": "O líder atrativo não coleciona cargo novo: sabe qual papel serve valor, fluxo ou gate humano.", "cards": [{"t": "Vaga ≠ headcount", "d": "Distinguir vaga (proxy) de headcount pela realidade do contexto, de startup a holding."}, {"t": "Famílias de papel", "d": "Nomear funções que nasceram ou foram absorvidas no mercado agêntico e marcar cada uma em Product, Tech Delivery ou Human & AI."}, {"t": "Escala da operação", "d": "Descrever a base processual para os três pilares no organograma que o time tem hoje."}]},
  3: {"titulo": "Output, Outcome e Impact", "autor": "Teo · Liu · Ruler", "porque": "Time produtivo prioriza valor — não enche o burndown.", "takeaway": "A pergunta que muda o time: que resultado movemos?", "cards": [{"t": "Três camadas (Perri)", "d": "Descrever Output, Outcome e Impact e o que cada um evidencia."}, {"t": "Volume versus valor", "d": "Diferenciar produtividade de volume da produtividade de valor."}, {"t": "OKR como ponte", "d": "Usar Objective + KR com baseline e target — OKR não é nível da hierarquia."}]},
  4: {"titulo": "User Story Mapping e Scorecard INVEST", "autor": "Teo · Liu · Ruler", "porque": "Patton ensinou a ver o backlog como jornada — MVP sem mapa é corte cego.", "takeaway": "Story sem KR rastreável não entra em delivery.", "cards": [{"t": "Jornada, não lista", "d": "Ler o backlog como mapa de jornada (Patton)."}, {"t": "Hierarquia", "d": "Épico → story → task, com rastreio ao KR."}, {"t": "INVEST com corte", "d": "Nota 1 em qualquer critério reprova a story."}]},
  5: {"titulo": "Team Topologies, Kanban e métricas", "autor": "Teo · Liu · Ruler", "porque": "A verdadeira fórmula de times produtivos está no fluxo — não no teatro de ocupação.", "takeaway": "Só se gerencia o que se vê e o que se mede.", "cards": [{"t": "Topologias", "d": "Quatro tipos e carga cognitiva (Skelton & Pais)."}, {"t": "Little", "d": "LT ≈ WIP ÷ TH só quando os três números existem."}, {"t": "Métricas nomeadas", "d": "LT, CT, TH, WIP, CFD, eficiência, retrabalho, DORA."}]},
  6: {"titulo": "Ciclos, cadências e FinOps", "autor": "Teo · Liu · Ruler", "porque": "Ritmo saudável não é fábrica de ritos. Teto econômico é do líder.", "takeaway": "Target e teto são do líder.", "cards": [{"t": "Ritmo × rito", "d": "Distinguir ciclo saudável de fábrica de cerimônias."}, {"t": "Três camadas", "d": "Operacional, tático, estratégico — cada métrica numa cadência."}, {"t": "Lente de investimento", "d": "Core / Adjacente / Transformacional (Nagji & Tuff) + ROI com premissa."}]},
  7: {"titulo": "Loops, gates e a tríade Context / Prompt / Steering", "autor": "Teo · Liu · Ruler", "porque": "Produtividade sem gate é alucinação operacional.", "takeaway": "Ferramenta não é protagonista: o líder acorda no gate.", "cards": [{"t": "Loop com gate", "d": "Onde o humano precisa estar acordado."}, {"t": "Clássico × GenAI", "d": "Nem todo nó pede modelo."}, {"t": "Tríade", "d": "Context, Prompt e Steering como contrato."}]},
  8: {"titulo": "Anatomia do agent: Persona, Tools, Skills, Hooks", "autor": "Teo · Liu · Ruler", "porque": "Spec before code. Maestro não executa o ofício dos filhos.", "takeaway": "Agent sem persona é colaborador sem job description.", "cards": [{"t": "Anatomia", "d": "Persona, Tools, Skills, Hooks e orquestração — agnóstica de marca."}, {"t": "Esteira", "d": "RAG (Lewis), MCP, subagents e evals (Husain/Rajpal) no Discovery → Delivery."}, {"t": "Maestro", "d": "Só roteia. Se executa o filho, virou gargalo."}]},
  9: {"titulo": "Sobrevivente × transformador e o plano coletivo", "autor": "Teo · Liu · Ruler", "porque": "Transformar é multiplicar o que o time já sabe. Dado de pessoa só entra com autorização.", "takeaway": "Multiplicar o que o time já sabe.", "cards": [{"t": "Evidência de gate", "d": "Transformador se prova pelo gate que já opera, não pelo discurso."}, {"t": "Leitura coletiva", "d": "Topologia e carga — cascata de cuidado."}, {"t": "Três pilares no compromisso", "d": "Cada entrega já existente liga a um pilar."}]},
  10: {"titulo": "Potencial humano e quando a ferramenta vira protagonista", "autor": "Teo · Liu · Ruler", "porque": "A ferramenta não é protagonista. O mapa entra no ritual mensal.", "takeaway": "Orquestrar beneficia a pessoa primeiro.", "cards": [{"t": "Protagonista", "d": "Reconhecer quando o julgamento saiu do fluxo."}, {"t": "Autoria", "d": "Nomear o valor humano que o time não entrega a um agente."}, {"t": "Pilar", "d": "O que é decisão de produto, teto de fluxo ou gate de pessoa."}]},
};

export function aula03BriefOf(n) { return AULA03_BRIEF[n] || AULA03_BRIEF[1]; }

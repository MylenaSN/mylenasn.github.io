/**
 * Briefing da Aula 3 — o aluno vê o PORQUÊ do lab antes do prompt.
 * Não é slide. Não é o prompt. Trava: 3 passos; pista visual só quando ensina.
 */
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
  2: {
    titulo: "Duas fases — Enhancv e Loop Vitae",
    autor: "Liu · lost in the middle",
    porque: "O Homework é a sua jornada profissional — esse MD enriquece o prompt. Fase 1 gera o PDF no Enhancv. Fase 2 ativa a esteira Loop Vitae (GitHub → Drive → Notebook Gemini) com vaga hipotética na .",
    takeaway: "A IA reescreve a forma. O fato é seu. Sem evidência no Homework/LinkedIn → [FALTA EVIDÊNCIA].",
    cards: [
      { t: "Jornada no Homework", d: "Marcos, evidências e vaga-alvo. O exemplo da lateral não é a sua história." },
      { t: "Fase 1 · Enhancv", d: "Login LinkedIn → cole o bloco → PDF legível no Drive." },
      { t: "Fase 2 · Loop Vitae", d: "ZIP do repo (licença individual) → Gemini → Curriculum-advisor → md-2-pdf." },
    ],
  },
  3: {
    titulo: "Classificar ≠ gerar",
    autor: "Wei · Chain-of-Thought",
    porque: "Classificar backlog sem raciocínio visível é chute. O lab pede o porquê da classe antes do rótulo — você decide o critério de valor do time.",
    takeaway: "A IA acelera a classificação. O critério de valor continua seu.",
    cards: [
      { t: "Output · Outcome · Impact", d: "Sem evidência do backlog do time, a classe é teatro." },
      { t: "Raciocínio antes do rótulo", d: "Sem o porquê visível antes da classe, o rótulo é chute com confiança." },
      { t: "Critério do líder", d: "A IA classifica; métrica não medida é alucinação — o valor do time é seu." },
    ],
  },
  4: {
    titulo: "Medir → sintetizar → você muda o alvo",
    autor: "Ng · loop agêntico",
    porque: "A IA resume a planilha. Sem baseline do seu time o KR é inválido. O lab existe para você assinar o alvo — o modelo não assina meta.",
    takeaway: "Squads geram dados. C-Level decide com realidade. IA só acelera o insumo.",
    cards: [
      { t: "Medir antes de sintetizar", d: "Se pular a medição, a síntese inventa a base do KR." },
      { t: "Baseline do time", d: "KR sem número de base é inválido — o modelo não cria meta." },
      { t: "Alvo assinado", d: "A IA resume a planilha; quem muda o target e leva ao C-Level é você." },
    ],
  },
  5: {
    titulo: "Intenção → UI — recusa se for vitrine",
    autor: "Cagan · discovery",
    porque: "Protótipo que implementa o OUT é vitrine. O lab só fecha com a fatia IN ligada ao OKR — o líder decide o que merece existir.",
    takeaway: "IA escreve rascunho em minutos. Você decide o que entra no mundo.",
    cards: [
      { t: "Fatia IN", d: "Protótipo só do que o PBB marcou IN — OUT e vitrine não fecham o lab." },
      { t: "Corte com evidência", d: "Sem persona e OKR, o protótipo é opinião em pixels." },
      { t: "Link, não markdown", d: "Protótipo é URL que o time vê — print de chat não conta." },
    ],
  },
  6: {
    titulo: "Modelo como avaliador — líder no gate",
    autor: "Wake · INVEST",
    porque: "A IA infla scorecard. O lab usa INVEST com corte em nota 1 — você é o gate antes do item entrar no delivery.",
    takeaway: "Upstream com IA acelera checagem. Priorizar valor continua humano.",
    cards: [
      { t: "Esteira, não rascunho", d: "A IA rascunha mapa → épico → story; rascunho não entra no sprint." },
      { t: "Nota 1 reprova", d: "INVEST com corte em 1: 18/18 automático é teatro." },
      { t: "Gate do delivery", d: "O modelo pontua; quem autoriza a história no sprint é você." },
    ],
  },
  7: {
    titulo: "RAG caseiro: só o que você enviou",
    autor: "Lewis · RAG",
    porque: "A mesma palavra em duas áreas não é glossário. O lab só aceita termo com citação do arquivo que você enviou — não da web.",
    takeaway: "A IA lista o conflito. Só o líder decide a fronteira do significado.",
    cards: [
      { t: "Fonte no caderno", d: "RAG de verdade começa no arquivo que você anexou — chat sem fonte é chute." },
      { t: "Termo com trecho", d: "Sem citação da fonte o termo não existe: glossário sem lastro é Wikipedia." },
      { t: "Fronteira do significado", d: "Overview bonito não reduz carga; fronteira explícita reduz." },
    ],
  },
  8: {
    titulo: "Spec no repo — target seu",
    autor: "Anderson · fluxo",
    porque: "Métrica sem target do seu time é opinião automatizada. O lab grava a spec no disco — o Judge só julga o que você empodera.",
    takeaway: "LT, CT, TH, WIP e CFD na língua do time. Lei de Little: LT ≈ WIP ÷ TH.",
    cards: [
      { t: "Target do time", d: "Sem número que vocês mediram, o juiz só repete moda de mercado." },
      { t: "Contramedida com evidência", d: "Ação sem número do dashboard é teatro — fluxo só se gerencia o que se vê." },
      { t: "Spec no disco", d: "Print de chat não é Judge: se tudo passa, a spec só elogia." },
    ],
  },
  9: {
    titulo: "Artefato + voto — a IA não escolhe o calendário",
    autor: "cadência × fluxo",
    porque: "A IA pode sugerir o board. Ritmo sem voto do time é teatro — o lab existe para um humano sentir o pulso, não o modelo declarar a cadência.",
    takeaway: "IA sugere o ritmo. O líder sente o pulso e o time vota.",
    cards: [
      { t: "Fica / sai / muda", d: "Board genérico não muda a semana — a lista nasce da auditoria do time." },
      { t: "Três camadas", d: "Ritmo sem métrica de fluxo é calendário decorado." },
      { t: "Voto humano", d: "A IA sugere cadência; ninguém — nem o modelo — declara o ritmo do time." },
    ],
  },
  10: {
    titulo: "Cenário ≠ oráculo de ROI",
    autor: "FinOps · RSP",
    porque: "C-Level precisa ver o conservador. O lab existe para um humano assinar o teto — não o ROI que o modelo gosta de vender.",
    takeaway: "FinOps é o portão dos times híbridos. Sem conta clara, a próxima wave vira experimento sem base.",
    cards: [
      { t: "Três cenários", d: "Esconder o conservador é vender teatro para o C-Level." },
      { t: "Estresse de hipótese", d: "Sem premissa explícita, o ROI é o número que o modelo gosta de vender." },
      { t: "Teto assinado", d: "A IA projeta; quem autoriza gasto é cargo humano." },
    ],
  },
  11: {
    titulo: "Ferramenta pelo papel no loop",
    autor: "Ng · HITL",
    porque: "Ferramenta sem etapa do fluxo é vitrine. O lab amarra cada tool a um nó — e marca o nó que o agente nunca toca.",
    takeaway: "O que muda o jogo é integrar ao loop real. Decisão de valor e gate humano são proibidos ao agente.",
    cards: [
      { t: "Papel, não marca", d: "Ferramenta sem nó no fluxo é catálogo — não sistema." },
      { t: "Nó que o agente não toca", d: "Sem o nó proibido, o time acha que a IA decide valor." },
      { t: "Loop real", d: "Autonomia sem mapa do fluxo só acelera o caos." },
    ],
  },
  12: {
    titulo: "Arquivos de agent, não chatbot",
    autor: "Chase · anatomia",
    porque: "Custom GPT sem arquivo não é sistema. O lab grava persona, limites e skill no disco — a esteira começa quando a IA não depende da sua memória.",
    takeaway: "Hook transforma intenção em ação no contexto certo. Memória no chat morre amanhã.",
    cards: [
      { t: "Persona, steering, skill", d: "Sem proibição no disco a persona faz tudo — e o gate some." },
      { t: "Hook, não chat", d: "Pedir de novo toda semana não é esteira: é dependência da sua memória." },
      { t: "Escalada humana", d: "Agent que nunca escala para humano é agente sem gate." },
    ],
  },
  13: {
    titulo: "Spec-before-code",
    autor: "Ng · orquestração",
    porque: "Código no primeiro commit é voltar atrás. O lab pede o caminho feliz e o gate no disco — antes de commitar.",
    takeaway: "O steering do orquestrador é o manual operacional do time híbrido.",
    cards: [
      { t: "Caminho feliz", d: "Sem o desenho ponta a ponta, o maestro é um chat com várias abas." },
      { t: "Spec antes do código", d: "Commit sem contrato de entrada e saída ensina o time a consertar depois." },
      { t: "Retorno rastreável", d: "Sem rastro de agent e gate você não orquestra — só espera um texto." },
    ],
  },
  14: {
    titulo: "RAG + eval + promoção",
    autor: "Lewis · Husain",
    porque: "Sem limiar numérico o workflow não sobe. O lab promove só o que passou eval — fine-tune só se a base de conhecimento falhar.",
    takeaway: "O artefato não é slide — é esteira no contexto real. Sem STATIK, agent automatiza o caos.",
    cards: [
      { t: "KB antes do eval", d: "Pergunta sem fonte é alucinação; sem KB o eval mede um chatbot." },
      { t: "Limiar numérico", d: "'Funciona no chat' sem número não promove o workflow." },
      { t: "Fine-tune por último", d: "Se a base resolve, não se treina modelo para tapar buraco de contexto." },
    ],
  },
  15: {
    titulo: "Advisor com as SUAS categorias",
    autor: "Parry · CHA como pergunta",
    porque: "PDI CHA genérico é gaiola. O lab ancora o advisor na timeline da sua prática — você assina o plano, a IA não escolhe a carreira.",
    takeaway: "O advisor organiza. O líder que você quer ser continua uma decisão sua.",
    cards: [
      { t: "Advisor ancorado", d: "Sem a timeline da prática o advisor devolve framework de prateleira." },
      { t: "Gap com evidência", d: "Gap sem fato da quinzena vira autoajuda, não PDI do time." },
      { t: "Autoria do plano", d: "A IA não escolhe a carreira — PDI sem assinatura é documento para RH." },
    ],
  },
  16: {
    titulo: "Síntese com fonte — decisão sem modelo",
    autor: "autoria · PI",
    porque: "A IA faz o overview do ano. A ata do ritual o líder escreve offline. O lab separa síntese com fonte de decisão sem modelo.",
    takeaway: "Em times híbridos, humanos vêm na frente. Método e gente — não ferramenta no lugar do juízo.",
    cards: [
      { t: "Síntese com fonte", d: "Overview sem arquivo do pacote é narrativa inventada." },
      { t: "Decisão offline", d: "Se a IA redige a ata do ritual, a autoria some." },
      { t: "Valor insubstituível", d: "O que o time protege nos 90 dias é julgamento — não ferramenta." },
    ],
  },
  17: {
    titulo: "Lente de tamanho — a IA não troca a unidade",
    autor: "medida · comitê",
    porque: "A IA não troca a unidade que o time já escreveu. O lab estressa essa lente — cargo humano assina a língua do trimestre.",
    takeaway: "Comitê ouve função entregue — não ponto de função inventado.",
    cards: [
      { t: "Unidade do time", d: "A lente já está na prática — unidade inventada no lab não serve o comitê." },
      { t: "Tentações de medida", d: "PF, COSMIC ou LOC sem lastro trocam a língua do time no slide." },
      { t: "Gate do comitê", d: "A IA não troca a unidade; velocity no slide do C-Level é recusa." },
    ],
  },
};

export function aula03BriefOf(week) {
  return AULA03_BRIEF[week] || AULA03_BRIEF[1];
}

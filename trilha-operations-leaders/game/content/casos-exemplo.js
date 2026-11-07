/**
 * Exemplos da turma — um time por wave.
 * O aluno copia o TIPO de evidência, não os números nem a empresa.
 *
 * Nomes do elenco (só primeiro nome): Bartolomeu, Frederico, Yoshi, Pops,
 * Lunna, Shipp, Dexter, Maggie, Lisa. Sem sobrenome.
 *
 * Wave 01 · Orion Varejo (logística reversa) — STATIK + jornada / currículo
 *   Lunna (Squad Leader) · Bartolomeu (Product) · Yoshi (Tech Lead) · Pops (Design) · Maggie (QA)
 * Wave 02 · Atlas Logística (janela de entrega)
 * Wave 03 · Lumen Educação (publicação de aula)
 * Wave 04 · Harbor Seguros (sinistro auto)
 * Wave 05 · Cora Indústria (programação da produção)
 * Plus   · Lumen (números de fluxo da semana 08)
 */

export const CASOS = {
  orion: {
    id: "orion",
    marca: "ORION VAREJO · LOGÍSTICA REVERSA",
    banner: "Exemplo · Orion Varejo · Logística Reversa",
    linha: "Orion Varejo · Squad Logística Reversa · Squad Leader Lunna · Product Leader Bartolomeu · Tech Lead Yoshi · Designer Pops · QA Maggie",
  },
  atlas: {
    id: "atlas",
    marca: "ATLAS LOGÍSTICA · JANELA DE ENTREGA",
    banner: "Exemplo · Atlas Logística · Janela",
    linha: "Atlas Logística · Squad Janela de Entrega · Squad Leader Camila Borges · Product Leader Diego Hahn · Tech Lead Yasmin Kaur · Designer Pedro Vale · QA Nara Pires",
  },
  lumen: {
    id: "lumen",
    marca: "LUMEN EDUCAÇÃO · PUBLICAÇÃO DE AULA",
    banner: "Exemplo · Lumen Educação · Aula",
    linha: "Lumen Educação · Squad Publicação de Aula · Squad Leader Paulo Viana · Product Leader Beatriz Lemos · Tech Lead Nina Rocha · Designer João Pires · QA Lúcia Yamamoto",
  },
  harbor: {
    id: "harbor",
    marca: "HARBOR SEGUROS · SINISTRO AUTO",
    banner: "Exemplo · Harbor Seguros · Sinistro",
    linha: "Harbor Seguros · Squad Sinistro Auto · Squad Leader Teresa Lima · Product Leader Hugo Bento · Tech Lead Caio Mendes · Compliance Alan Pires",
  },
  cora: {
    id: "cora",
    marca: "CORA INDÚSTRIA · PROGRAMAÇÃO DA PRODUÇÃO",
    banner: "Exemplo · Cora Indústria · Produção",
    linha: "Cora Indústria · Célula de programação · Squad Leader Elisa Duarte · Planejador Tomás Ribeiro · Manutenção Iara Nunes",
  },
};

const CASO_POR_SEMANA = {
  1: "orion", 2: "orion",
  3: "atlas", 4: "atlas", 5: "atlas", 6: "atlas",
  7: "lumen", 8: "lumen", 9: "lumen", 10: "lumen",
  11: "harbor", 12: "harbor", 13: "harbor", 14: "harbor",
  15: "cora", 16: "cora",
  17: "lumen",
};

export function casoDaSemana(n) {
  return CASOS[CASO_POR_SEMANA[n] || "orion"];
}

export function casoBanner(n) {
  return casoDaSemana(n).banner;
}

export function casoLinha(n) {
  return casoDaSemana(n).linha;
}

export function casoCabecalho(n) {
  return "========== EXEMPLO · " + casoDaSemana(n).marca + " (copie o TIPO, não os números) ==========";
}

export const EX = {
  1: {
    // First Loop · ouro — STATIK Orion com prática real dos autores (inspiração pro Homework)
    chunks: [
      "Squad Leader Lunna lidera a Squad Logística Reversa na Orion Varejo (big tech do varejo). Núcleo: Product Leader Bartolomeu, Tech Lead Yoshi, dois engenheiros, Designer Pops, QA Maggie. Escopo: app e torre de devoluções — solicitação do cliente, triagem no CD, reestoque ou descarte. WMS legado no ar.\n\n## 1. Propósito e demanda (Sua resposta)\n- Objetivo e como mede: reduzir o ciclo devolução → crédito. Hoje a Review conta \"stories Done no prazo\", mas o CD Extrema ainda carimba \"não conforme\" no papel — a métrica de tela não mostra se o cliente recebeu o crédito.\n- O que tira o sono: a demo na Review ganha aplauso; o % de devoluções fechadas no SLA quase nunca entra na pauta.\n- Reclamação: operação do CD e CX pedem previsibilidade do crédito e fila que não explode no pós-Black Friday.\n- Autor: Perri / Deming.\n- Prática no mundo real: Perri = Build Trap (entregamos o card e o resultado de negócio não muda). Deming = sem definição operacional de \"pronto\" (SLA de crédito), a Review vira show de tela.",
      "## 2. Fontes de demanda\n- Quem pede: marketplace ops e CX pedem direto; o canal oficial é o board do Bartolomeu.\n- Como chega: card no Jira quando passa pelo PO; urgência de devolução fura a fila no Slack (#logistica-reversa).\n- Planejado × não planejado: ~55% planejado / 45% urgências — Maggie anotou na última sprint.\n- Autor: Ford / Anderson.\n- Prática no mundo real: Ford = linha oficial vs. fura-fila. Anderson (STATIK) = mapear quem pede e quanto do tempo é interrupção — sem isso o quadro mente.\n\n## 3. Capacidade\n- Especialista: só Yoshi mexe no conector do WMS de RMA; o resto puxa front da jornada do cliente. Tudo que toca o legado espera Yoshi.\n- Tarefas ao mesmo tempo: 3–4 por pessoa quando o CD trava a homologação — em vez de destravar, cada um puxa outra card.\n- Autor: Taylor / Skelton e Pais.\n- Prática no mundo real: Taylor = ilha de conhecimento (só uma pessoa mexe). Skelton & Pais = isso é desenho de time e carga cognitiva, não \"falta de esforço\".",
      "## 4. Fluxo\n- Etapas reais: Análise → Dev → Code review → Homologação no CD → Deploy.\n- Onde mais para: Homologação no CD Extrema — uma pessoa de operações libera o lote; cards ficam dias \"prontos\" sem uso no chão.\n- Regra para avançar: informal — cada um move o card quando \"acha que está ok\".\n- Autor: Ford / Ohno.\n- Prática no mundo real: Ford = a linha tem etapas. Ohno = espera (homologação) é desperdício mesmo quando o quadro não mostra a coluna.\n\n## 5. Urgência\n- Quando entra urgência: pico de devolução ou pedido do diretor de Supply — o card em andamento fica parado no meio.\n- Data fixa: Black Friday / campanhas de marketplace furam a fila por acordo.\n- Próximo item: teoricamente o topo do board; na prática, quem gritou no Slack.\n- Autor: Ohno / Ng.\n- Prática no mundo real: Ohno = se quase tudo é crítico, a fila deixa de existir. Ng = quem autoriza furar a fila é uma pessoa com critério — não o canal que gritou mais alto."
    ],
    a2: "Squad Leader Lunna lidera a Squad Logística Reversa na Orion Varejo (big tech do varejo). Núcleo: Product Leader Bartolomeu, Tech Lead Yoshi, dois engenheiros, Designer Pops, QA Maggie. Escopo: app e torre de devoluções — solicitação do cliente, triagem no CD, reestoque ou descarte. WMS legado no ar.\n\n## 1. Propósito e demanda (Sua resposta)\n- Objetivo e como mede: reduzir o ciclo devolução → crédito. Hoje a Review conta \"stories Done no prazo\", mas o CD Extrema ainda carimba \"não conforme\" no papel — a métrica de tela não mostra se o cliente recebeu o crédito.\n- O que tira o sono: a demo na Review ganha aplauso; o % de devoluções fechadas no SLA quase nunca entra na pauta.\n- Reclamação: operação do CD e CX pedem previsibilidade do crédito e fila que não explode no pós-Black Friday.\n- Autor: Perri / Deming.\n- Prática no mundo real: Perri = Build Trap (entregamos o card e o resultado de negócio não muda). Deming = sem definição operacional de \"pronto\" (SLA de crédito), a Review vira show de tela.\n\n## 2. Fontes de demanda\n- Quem pede: marketplace ops e CX pedem direto; o canal oficial é o board do Bartolomeu.\n- Como chega: card no Jira quando passa pelo PO; urgência de devolução fura a fila no Slack (#logistica-reversa).\n- Planejado × não planejado: ~55% planejado / 45% urgências — Maggie anotou na última sprint.\n- Autor: Ford / Anderson.\n- Prática no mundo real: Ford = linha oficial vs. fura-fila. Anderson (STATIK) = mapear quem pede e quanto do tempo é interrupção — sem isso o quadro mente.\n\n## 3. Capacidade\n- Especialista: só Yoshi mexe no conector do WMS de RMA; o resto puxa front da jornada do cliente. Tudo que toca o legado espera Yoshi.\n- Tarefas ao mesmo tempo: 3–4 por pessoa quando o CD trava a homologação — em vez de destravar, cada um puxa outra card.\n- Autor: Taylor / Skelton e Pais.\n- Prática no mundo real: Taylor = ilha de conhecimento (só uma pessoa mexe). Skelton & Pais = isso é desenho de time e carga cognitiva, não \"falta de esforço\".\n\n## 4. Fluxo\n- Etapas reais: Análise → Dev → Code review → Homologação no CD → Deploy.\n- Onde mais para: Homologação no CD Extrema — uma pessoa de operações libera o lote; cards ficam dias \"prontos\" sem uso no chão.\n- Regra para avançar: informal — cada um move o card quando \"acha que está ok\".\n- Autor: Ford / Ohno.\n- Prática no mundo real: Ford = a linha tem etapas. Ohno = espera (homologação) é desperdício mesmo quando o quadro não mostra a coluna.\n\n## 5. Urgência\n- Quando entra urgência: pico de devolução ou pedido do diretor de Supply — o card em andamento fica parado no meio.\n- Data fixa: Black Friday / campanhas de marketplace furam a fila por acordo.\n- Próximo item: teoricamente o topo do board; na prática, quem gritou no Slack.\n- Autor: Ohno / Ng.\n- Prática no mundo real: Ohno = se quase tudo é crítico, a fila deixa de existir. Ng = quem autoriza furar a fila é uma pessoa com critério — não o canal que gritou mais alto.",
    pv: []
  },
  2: {
    chunks: [
      "Jornada profissional — Squad Leader Lunna (exemplo de outro time; não copie como se fosse a sua).\n\nHoje: lidera a Squad Logística Reversa na Orion Varejo. LinkedIn: [URL dela].\nO que faz de fato na semana: prioriza board com Bartolomeu; destrava homologação no CD Extrema; não escreve o conector WMS de RMA (isso é Yoshi).",
      "Marcos: 2017 analista de operações de CD · 2021 PO de devoluções · 2024 Squad Leader.\nTime em 3 colunas — Encolhe: triagem de \"não conforme\" no Excel do CD. Nasce: papéis de aterrissar a torre de devoluções no chão do CD. Muda: QA Maggie — de achar bug de UI para cronometrar uso real (11 de 14 lotes ainda carimbados em papel, terça 10h15).",
      "Gap #1 / vaga-alvo: Forward Deployed / Enterprise Deployment Lead — fazer a logística reversa aterrissar no CD, não só demo na Review.\nEvidências com âncora: 11/14 lotes em papel (Maggie, terça 10h15) · 15 stories Done / 1 fluxo de crédito em produção no trimestre (board Bartolomeu) · atas das 4 reviews sem linha de ciclo devolução→crédito.\n[FALTA EVIDÊNCIA]: ROI da torre de devoluções — sem baseline. Não entra no currículo."
    ],
    a2: "Jornada profissional — Squad Leader Lunna (exemplo de outro time; não copie como se fosse a sua).\n\n## Quem sou hoje\nCargo: Squad Leader · Logística Reversa · Orion Varejo.\nO que faço de fato: priorizo board com Product Leader Bartolomeu; destravo homologação no CD; não sou dona do conector WMS (Tech Lead Yoshi).\n\n## Marcos\n2017 operações de CD · 2021 PO de devoluções · 2024 Squad Leader.\n\n## 3 colunas\nEncolhe: triagem \"não conforme\" no Excel.\nNasce: aterrissar torre de devoluções no CD.\nMuda: QA Maggie — de bug de UI para uso real (11/14 lotes em papel, terça 10h15).\n\n## Gap #1 / vaga-alvo\nEnterprise Deployment Lead — aterrissagem no CD, não demo na Review.\n\n## Evidências\n11/14 papel (Maggie) · 15 Done / 1 fluxo em produção · atas sem ciclo devolução→crédito.\n[FALTA EVIDÊNCIA]: ROI — sem baseline.",
    pv: [
      { k: "fato", t: "Fato", d: "Marco, número ou cargo com âncora no Homework / LinkedIn. Sem âncora não entra." },
      { k: "hip", t: "Hipótese", d: "Gap e vaga-alvo são escolha sua; a IA não inventa a jornada." },
      { k: "alu", t: "Alucinação", d: "ROI/NPS sem baseline, cargo nunca exercido, ou copiar a jornada do exemplo como se fosse sua." }
    ]
  },
  3: {
    a2: "Hierarquia fechada no quadro — lente Perri (outcome, Product Leader Diego Hahn) e impacto de negócio (Squad Leader Camila Borges).\n\nImpacto: lojista da Atlas não perde a janela que prometeu ao cliente final.\nOutcomes: janela confirmada em < 2h após o pedido (hoje mediana 6h — Diego exportou do TMS na terça) · motorista chega na janela em 71% das rotas last-mile (Yasmin Kaur puxou do GPS da frota).\nOutputs: tela de janela no app do lojista · fila de slots visível no #janela · card no board da Tech Lead Yasmin Kaur.\nTasks: Diego cronometra três terças · Designer Pedro Vale valida a linguagem da janela com dois lojistas piloto.\n\nNÃO é outcome: post \"somos a logística do futuro\" · velocity da sprint · \"app novo de rastreio\".",
    pv: [
      { k: "fato", t: "Fato", d: "Cada classe (output / outcome / impact) leva 1 evidência objetiva." },
      { k: "hip", t: "Hipótese", d: "Raciocínio visível (CoT) antes do rótulo. Sem raciocínio a classe é chute." },
      { k: "alu", t: "Alucinação", d: "Métrica que o time não mediu, ou vanity (post, prêmio) classificado como outcome." }
    ]
  },
  4: {
    a2: "OKR do trimestre — lente Doerr. Números da planilha do Drive (Product Leader Diego Hahn). Sem alvo bonito.\n\nObjetivo: lojista da Atlas não promete janela que a frota não cumpre.\nKR1: mediana de confirmação 6h → 2h (baseline: terça, 48 pedidos, QA Nara Pires exportou do TMS).\nKR2: 85% das rotas last-mile na janela (hoje 71% — Tech Lead Yasmin Kaur, GPS).\nProjetos: tela de janela · cap de slots · fila do hub. FORA: app novo · drone · \"experiência wow\".\n\nAlvo de 2h: diretor de operação assinou com Squad Leader Camila Borges na reunião. \"Omnichannel logístico\" foi sugestão da IA — riscamos.",
    pv: [
      { k: "fato", t: "Fato", d: "Baseline do KR é número que o time mediu (planilha, board). Sem baseline = INVÁLIDO." },
      { k: "hip", t: "Hipótese", d: "O target é o que um cargo assinou. O modelo resume — não muda o alvo." },
      { k: "alu", t: "Alucinação", d: "Moonshot sem baseline, ou KR trocado por slogan (omnichannel, referência)." }
    ]
  },
  5: {
    a2: "PBB na parede da sala — post-it amarelo, letra do time. Facilitação: Product Leader Diego Hahn.\n\nPersona cliente (lente Cagan): dona de loja de roupa, 38 anos, Brás. 40 pedidos/dia no marketplace. Confirma entrega pelo WhatsApp do despachante — não abre o TMS no desktop.\nIN: ver no celular se a janela das 14h ainda cabe, em linguagem de loja, não de WMS.\nOUT: app novo, clube de pontos, \"torre de controle\".\nMVP: os 25 lojistas que mais estouraram janela em julho (lista do Diego). Duas semanas. Se a persona não entender a tela, Squad Leader Camila Borges não autoriza escala.",
    pv: [
      { k: "fato", t: "Fato", d: "Persona e IN vêm do PBB da Aula 2. Protótipo só da fatia IN." },
      { k: "hip", t: "Hipótese", d: "O link do protótipo e 1 imagem da jornada (mesmo traço) testam o OKR da semana 04." },
      { k: "alu", t: "Alucinação", d: "Markdown no chat no lugar do link, stock genérico, ou vitrine que implementa o OUT." }
    ]
  },
  6: {
    a2: "Três stories do fluxo feliz — Scorecard INVEST — Designer Pedro Vale e QA Nara Pires. Priorização: Product Leader Diego Hahn.\n\n1. Como lojista do Brás (persona Cagan), quero ver em uma frase se a janela das 14h ainda cabe.\n2. Como atendimento, quero a regra de slot no TMS (não PDF no Drive).\n3. Como Product Leader Diego Hahn, quero a mediana de terça na planilha, sem export manual da QA Nara Pires.\n\nScorecard (1–3 por critério):\n• Story 1: I3 N3 V3 E2 S3 T3 = 17 — aprovada.\n• Story 2: I1 N2 V3 E2 S2 T2 = 12 — REPROVADA (Independent: depende do macro da QA).\n• Story 3: I3 N2 V3 E3 S2 T3 = 16 — aprovada.\n\nIA inflou tudo com 18/18. Tech Lead Yasmin Kaur recusou a story 2 e mandou reescrever antes do refinamento.",
    pv: [
      { k: "fato", t: "Fato", d: "Story 2 reprovada: nota 1 em Independent (macro da QA)." },
      { k: "hip", t: "Hipótese", d: "Regra no TMS > PDF no Drive; story independente não espera macro." },
      { k: "alu", t: "Alucinação", d: "IA deu 18/18 nas 3 stories sem justificar o vínculo com o macro." }
    ]
  },
  7: {
    a2: "Topologia — lente Skelton & Pais. Facilitação: Squad Leader Paulo Viana. Não é organograma de RH.\n\nStream: Squad Publicação de Aula (Paulo Viana). Aula gravada → publicada no LMS. Uma fila, um dono de prioridade (Product Leader Beatriz Lemos).\nPlataforma: encoder de vídeo. Tech Lead Nina Rocha consome a API — não edita o encoder.\nEnabling: jurídico libera direito de imagem do professor — uma pessoa, toda a escola.\nAjuste: Pedagogia não edita o player sem pedido formal da squad. Fronteira nos dois sentidos — Paulo documentou no Confluence.",
    pv: [
      { k: "fato", t: "Fato", d: "Enabling jurídico: uma pessoa libera direito de imagem para toda a escola" },
      { k: "hip", t: "Hipótese", d: "Fronteira 'Pedagogia não edita o player' baixa o ruído" },
      { k: "alu", t: "Alucinação", d: "IA sugeriu 'squad de plataforma com 8 pessoas'" }
    ]
  },
  8: {
    a2: "Dashboard Kanban — lente Anderson. Dona dos números: Tech Lead Nina Rocha. Fonte: LMS e fila de revisão (export de quarta).\n\nLead Time (LT) aula gravada → publicada: 9,4 dias.\nCycle Time (CT) revisão pedagógica: 36h (mediana quarta).\nThroughput (TH): 11 aulas/semana na semana passada.\nWIP quarta 18h: 23 aulas em revisão.\nCFD: fila de revisão cresceu de segunda a quinta.\n\nLei de Little: LT ≈ WIP ÷ TH — com WIP 23 e TH 11, a fila não fecha. Product Leader Beatriz Lemos quer a mediana descer; Nina quer WIP 12 — não outra reunião de status.",
    pv: [
      { k: "fato", t: "Fato", d: "23 aulas em revisão quarta 18h — QA Lúcia Yamamoto contou no LMS" },
      { k: "hip", t: "Hipótese", d: "Reduzir WIP para 12 é o alavancador via Lei de Little" },
      { k: "alu", t: "Alucinação", d: "IA colou lead time de mercado sem fonte do time" }
    ]
  },
  9: {
    a2: "Ritmos — votamos na terça, Squad Leader Paulo Viana anotou no caderno. O canvas não votou.\n\nFica: huddle 9h20 (Paulo facilita). Doze minutos. Quem segura a publicação sai dali decidido — Product Leader Beatriz Lemos confirma capacidade, Tech Lead Nina Rocha confirma WIP.\nSai: o \"alinhamento\" de sexta, 45 min, que em quatro semanas não gerou uma ata.\nMuda: review mensal com diretor acadêmico vira quinzenal e entra com UM número (aulas publicadas na janela). Sem número, Paulo cancela a reunião.\nVoto: cinco a favor, QA Lúcia Yamamoto absteve. A IA tinha \"aprovado\" ritual de 1h com icebreaker. Riscamos.",
    pv: [
      { k: "fato", t: "Fato", d: "A sexta de 45 min não gerou ata em 4 semanas" },
      { k: "hip", t: "Hipótese", d: "Quinzena com 1 número vale mais que a sexta" },
      { k: "alu", t: "Alucinação", d: "IA 'aprovou' o ritmo novo sozinha" }
    ]
  },
  10: {
    a2: "FinOps com a fatura na mesa. Squad Leader Paulo Viana apresenta; Product Leader Beatriz Lemos e Tech Lead Nina Rocha validam números. Julho: AWS de transcoding, Vimeo e LMS.\n\nVimeo: R$ 2.310 no cartão do centro de custo — consta na fatura. Beatriz conferiu linha a linha.\nConservador: planilha e publicação manual. Zero a mais. É o que já fazemos.\nBase: API de transcoding e QA Lúcia Yamamoto meio período para manter a fila. Cabe no trimestre. Diretor acadêmico acenou com Paulo.\nAgressivo: estúdio 24h com avatar. Teto que a diretoria NÃO assina: R$ 12 mil/mês. Paulo não leva esse cenário para assinatura.",
    pv: [
      { k: "fato", t: "Fato", d: "R$ 2.310 está na fatura de julho do centro de custo" },
      { k: "hip", t: "Hipótese", d: "O cenário base cabe no caixa do trimestre" },
      { k: "alu", t: "Alucinação", d: "IA vendeu só o agressivo com ROI de 400%" }
    ]
  },
  11: {
    a2: "Mapa híbrido — lente Teo (gate humano). Dona do gate: Squad Leader Teresa Lima.\n\nContext: aviso de sinistro do segurado e 3 últimos laudos (Tech Lead Caio Mendes exportou).\nPrompt: roteiro de 10 linhas (texto aprovado por Product Leader Hugo Bento no Confluence).\nSteering: \"indenização já está aprovada\" → modelo NÃO sugere resposta final. Escala Caio Mendes e Compliance Alan Pires.\nProibido: aprovar pagamento · alterar reserva · encerrar sinistro sozinho · prometer prazo de indenização.\n\nModelo escreve rascunho; cargo autoriza publicação.",
    pv: [
      { k: "fato", t: "Fato", d: "\"Indenização já está aprovada\" — aviso real do recorte" },
      { k: "hip", t: "Hipótese", d: "Roteiro no modelo acelera; aprovar pagamento não" },
      { k: "alu", t: "Alucinação", d: "IA quis 'automatizar a liberação da indenização'" }
    ]
  },
  12: {
    a2: "Três arquivos em agents/sinistro-auto/ — lente Chase/Moura/Wang. Custom GPT não conta. Owner: Tech Lead Caio Mendes no repo.\n\npersona.md: fala curto, trata o segurado por \"você\", nunca diz que o pagamento \"já foi\".\nsteering.md: três proibições (aprovar pagamento · mudar reserva · encerrar sinistro sozinho) e escala para Squad Leader Teresa Lima / Compliance Alan Pires.\nskill.md: classificar aviso → roteiro OU Caio Mendes / Alan Pires.\nHook: aviso novo tag sinistro-auto → só se não for \"valor divergente\". Liga no gate da semana 11.",
    pv: [
      { k: "fato", t: "Fato", d: "Os 3 arquivos estão em agents/sinistro-auto/, não num Custom GPT" },
      { k: "hip", t: "Hipótese", d: "Hook no aviso novo basta para o teste" },
      { k: "alu", t: "Alucinação", d: "Chatbot sem arquivo 'já era o agent'" }
    ]
  },
  13: {
    a2: "Spec do maestro — lente Ng (spec antes do código). Review: Squad Leader Teresa Lima e Tech Lead Caio Mendes.\n\nEntrada: aviso no sistema de sinistros tag sinistro-auto.\nRoteamento: triagem → (roteiro automático | Caio Mendes | Compliance Alan Pires).\nSaída: frase no dossiê OU escalada com id da reserva.\nGate: valor > R$ 15 mil ou divergência → Alan confirma; Teresa assina exceção.\n\nTrês rotas. Quarta rota (WhatsApp) = spec recusa até ter gate.",
    pv: [
      { k: "fato", t: "Fato", d: "Spec escrita ANTES de qualquer PR" },
      { k: "hip", t: "Hipótese", d: "3 rotas cobrem o dia do plantão de sinistro" },
      { k: "alu", t: "Alucinação", d: "Código no primeiro commit, spec depois" }
    ]
  },
  14: {
    a2: "KB viva — owner Product Leader Hugo Bento, validação QA do time de sinistro. Dez casos escritos por regulação, com linguagem real (não tom de modelo).\n\n1 colisão simples  2 vidro  3 terceiros  4 furto  5 alagamento  6 oficina credenciada  7 valor divergente  8 \"já paguei a franquia\"  9 boletim atrasado  10 \"sumiu o carro\".\nLimiar: 8/10 com citação da KB. Quinta deu 7/10. Tech Lead Caio Mendes não promove para produção.\nFine-tune: não. A KB resolve. Quem pediu fine-tune foi a IA no primeiro parágrafo.",
    pv: [
      { k: "fato", t: "Fato", d: "7/10 no teste de quinta — abaixo do limiar" },
      { k: "hip", t: "Hipótese", d: "Mais 3 casos de oficina sobem para 8" },
      { k: "alu", t: "Alucinação", d: "IA pediu fine-tune sem tentar a KB" }
    ]
  },
  15: {
    a2: "PDI da Squad Leader Elisa Duarte — categorias SUAS, não CHA genérico. Advisor no Project alimentado com timeline real.\n\nTimeline: 2015 PCP na célula de usinagem · 2019 coordenação de célula · 2022 líder de programação da produção · 2024 orquestra humano & IA com Planejador Tomás Ribeiro e Manutenção Iara Nunes.\nCategorias: pulso do WIP na sexta com o time · manutenção quando o torno para · número único para o diretor industrial (com Tomás).\nGap SMART (2 semanas): assistir o S&OP sem falar — mapear onde nasce a fila que Tomás mede no quadro.",
    pv: [
      { k: "fato", t: "Fato", d: "Timeline da Squad Leader Elisa Duarte — não CHA de catálogo" },
      { k: "hip", t: "Hipótese", d: "Observar o S&OP muda o pulso da fila" },
      { k: "alu", t: "Alucinação", d: "Advisor devolveu 'desenvolver liderança 4.0'" }
    ]
  },
  16: {
    a2: "Fechamento do ano — pensamento arbóreo. Facilitação: Squad Leader Elisa Duarte.\n\nTronco: ordem de produção atrasada na sexta. Galhos: kanban de 1 página (Planejador Tomás Ribeiro) · WIP 8 ordens (Manutenção Iara Nunes) · agent com gate do diretor industrial (Elisa). Folhas: 12 SKUs piloto e persona do operador do terceiro turno.\nPI: Cora ensina o método (Gantt, A3, métricas de fluxo, limiar). Outra planta copia o tipo, não a ordem.\nAta offline (caderno da Elisa): huddle 6h40 FICA. IA não vota. Otimizador 24h NÃO sobe.",
    pv: [
      { k: "fato", t: "Fato", d: "Ata no caderno: huddle das 6h40 fica" },
      { k: "hip", t: "Hipótese", d: "O Overview ajuda a contar o ano, não a decidir" },
      { k: "alu", t: "Alucinação", d: "O modelo escolheu 'acabar o huddle'" }
    ]
  },
  17: {
    a2: "Comitê. Diretor acadêmico: \"quanto software a Publicação de Aula entregou?\" Dashboard da semana 08 na mesa: CT 36h · TH 11 · WIP 23. Tech Lead Nina Rocha responde: \"Isso é fila. Perguntei o que saiu.\"\n\nLente funcional (Albrecht/COSMIC no recorte) — não APF de consultoria. Unidade: movimento que o professor reconhece (aula no ar · legendas · material no LMS). FORA: \"cadê minha senha\" · story point · linha do avatar.\n\nFrase C-Level (Squad Leader Paulo Viana assina com Product Leader Beatriz Lemos): squad publica aula na janela combinada nos 40 cursos do recorte — função nova, não cartão andando.\n\nNo estimates: puxa pelo WIP 12. Comitê ouve função, não velocity.",
    pv: [
      { k: "fato", t: "Lente", d: "Uma. A do time. Não a que a IA preferir." },
      { k: "hip", t: "Arquivo", d: "Homework aula 02 semana bonus.md na mesa. Sem isso o Lab inventa PF." },
      { k: "alu", t: "GATE", d: "A IA não troca a lente nem conta ponto de função no escuro." }
    ]
  }
};

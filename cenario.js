window.PATRONLOOP_CENARIO = {
  prior: 0.5,
  limiar: 0.7,
  waves: [
    { id: 1, nome: "Pré-voo", conhecimento: "Declarativo", faz: "Nomear o que o cenário contém. Sem fonte, a evidência é SEM FATO." },
    { id: 2, nome: "Produto", conhecimento: "Processual", faz: "Escrever a sequência que a pessoa sabe executar." },
    { id: 3, nome: "Tech delivery", conhecimento: "Estrutural", faz: "Ligar dependência, dono e o que quebra se um elo falta." },
    { id: 4, nome: "Humanos e IA", conhecimento: "Metaconhecimento", faz: "Dizer o que a pessoa não sabe julgar e quem valida." },
    { id: 5, nome: "Normalização", conhecimento: "Heurístico", faz: "Uma regra tirada do eval desta pessoa, não de um anúncio." }
  ]
};

function patronloopBayes(prior, evidenciaUtil) {
  var peh = evidenciaUtil ? 0.8 : 0.4;
  var pen = evidenciaUtil ? 0.2 : 0.6;
  var num = peh * prior;
  var den = num + pen * (1 - prior);
  if (den === 0) return prior;
  return num / den;
}

function patronloopEtapaAbre(posterior, gateSim, evidenciaUtil) {
  return gateSim && evidenciaUtil && posterior >= window.PATRONLOOP_CENARIO.limiar;
}

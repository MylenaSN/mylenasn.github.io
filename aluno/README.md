---
id: pacote-aluno
titulo: Pacote que a turma baixa — engine + workspace
atualizado_em: "2026-08-29"
---

# Pacote do aluno

Abra **esta pasta** no Cursor (File → Open Folder). Isto é o workspace. Cada output da trilha cai na wave e na semana certas. Os nomes são os de [`../cofre-artefatos.md`](../cofre-artefatos.md).

Até a Wave 02 o Drive segura. Na **Wave 03 — Delivery** o disco vira a lei: ciclo sem pasta é rito. Na semana 16 importe `jornada.manifest.json` no [`../play.html`](../play.html).

Os 3 agents da autora ficam em `agents/` (ela cola o prompt raiz). O jogo **não** substitui os agents — ele lê o mesmo árvore.

```
aluno/
  jornada.manifest.json
  agents/
  01 Pre-voo/          semana-01  semana-02
  02 Produto/          semana-03–06
  03 Delivery/         semana-07–10   ← IDE do ciclo
  04 Times hibridos/   semana-11–14
  05 Equilibrio AI-Era/       semana-15  semana-16
```

## arquitetura-folder

| Elemento | Tipo | Papel | Liga a |
|----------|------|-------|--------|
| [`README.md`](./README.md) | pacote | O que a turma abre no Cursor | [`cofre-artefatos.md`](../cofre-artefatos.md) · [`play.html`](../play.html) |
| [`jornada.manifest.json`](./jornada.manifest.json) | índice | Lista de ids que o engine aponta | schema [`../jornada.manifest.schema.json`](../jornada.manifest.schema.json) |
| [`01 Pre-voo/`](./01%20Pre-voo/README.md) | wave | semanas 01–02 | nomes em [`cofre-artefatos.md`](../cofre-artefatos.md) |
| [`02 Produto/`](./02%20Produto/README.md) | wave | semanas 03–06 | idem |
| [`03 Delivery/`](./03%20Delivery/README.md) | wave | semanas 07–10 · casa do ciclo no IDE | [`semana-09.md`](../../../../../../trilhas-conhecimento/AI-First-Operations-Leadership/densidade-pedagogica/semana-09.md) |
| [`04 Times hibridos/`](./04%20Times%20hibridos/README.md) | wave | semanas 11–14 + adendo medida | [`bonus-medida/`](./04%20Times%20hibridos/bonus-medida/README.md) |
| [`05 Equilibrio AI-Era/`](./05%20Equilibrio%20AI-Era/README.md) | wave | semanas 15–16 | fechamento + git do engine |
| [`setup-cofre.py`](./setup-cofre.py) | rotina | Cria árvore + stubs no Drive/CMD | [`plus-s01-setup-cofre.md`](../../../../../../trilhas-conhecimento/AI-First-Operations-Leadership/densidade-pedagogica/plus-s01-setup-cofre.md) · [`_ARVORE.txt`](./_ARVORE.txt) |
| [`setup-cofre.bat`](./setup-cofre.bat) | rotina | Atalho Windows (sem Python) | `setup-cofre.py` |
| [`_ARVORE.txt`](./_ARVORE.txt) | mapa | Contrato visual da árvore | [`cofre-artefatos.md`](../cofre-artefatos.md) |
| `agents/` | pasta | AGENT-01, 02, 03 — prompt raiz da autora | não é Library |

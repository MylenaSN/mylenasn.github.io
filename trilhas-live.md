---
id: trilhas-live
titulo: Trilhas no ar em game.patronloop.com
atualizado_em: "2026-10-13"
---

# Trilhas no ar

Fonte que o **Loop Game** lê **antes** de perguntar ao mentor. Uma linha = uma URL isolada. Ninguém edita a pasta de outra linha.

A capa [`http://game.patronloop.com/`](http://game.patronloop.com/) abre o **login mentor** (default). Não é play de trilha.

**Login mentor (edição em produção):** [`/`](http://game.patronloop.com/) ou [`mentor.html`](http://game.patronloop.com/mentor.html) — escolhe a trilha, cola PAT de sessão, edita a mesa (lápis / disquete ou Ctrl+Alt+S). Isolamento por slug.

**Gate do aluno (senha `human loop`):** [`jornada.html`](http://game.patronloop.com/jornada.html) — ativo sempre; depois do login correto, a sessão fica em `sessionStorage` até fechar a aba. Sem chave na sessão = pede senha de novo.

## Catálogo

| Slug | Formação | Mentor | URL isolada | Fonte local | Extra |
|------|----------|--------|-------------|-------------|-------|
| `trilha-operations-leaders` | AI-First Operations Leadership | Mylena de Souza Nascimento | http://game.patronloop.com/trilha-operations-leaders/play.html | `domain/game/` (play.html + game/) | **também** em [`/play.html`](http://game.patronloop.com/play.html) — MVP/POC do Loop; copy editável em `game/content/mesa-copy.json` |
| `trilha-product-leaders` | AI-First Product Leadership *(reservado)* | — | http://game.patronloop.com/trilha-product-leaders/play.html | `domain/game/trilhas/trilha-product-leaders/` | scaffold; mentor só grava esta pasta |
| `trilha-engineer-leaders` | AI-First Engineer Leadership *(reservado)* | — | http://game.patronloop.com/trilha-engineer-leaders/play.html | `domain/game/trilhas/trilha-engineer-leaders/` | scaffold; mentor só grava esta pasta |

Nova formação: acrescente **uma** linha (slug `trilha-{audiencia}-leaders`) **antes** do primeiro push. Não recicle slug. Pasta nova em `domain/game/trilhas/{slug}/`.

## Isolamento

- A Patron Loop tem **duas** URLs de propósito: `/play.html` é o MVP/POC do Loop (Mylena). `/trilha-operations-leaders/play.html` é o slot estável, igual às futuras trilhas.
- Publicar a Patron Loop atualiza **as duas** a partir da mesma fonte (`domain/game/`). Não apagar o `/play.html`.
- Qualquer outra trilha **nunca** grava `/play.html` nem a pasta `trilha-operations-leaders/`.
- Editor mentor: PAT só em `sessionStorage`; publish via GitHub Contents API nos `publishPaths` do slug (`mentor-config.js`). Se um deploy mudar copy de outro slug, o Loop Game **reverte**.

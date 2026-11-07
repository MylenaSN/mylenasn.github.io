# Setup — montar o executável e criar as pastas

Objetivo: **você** cria o arquivo `setup-jornada.py` e roda no terminal.  
O script só cria pastas no Desktop. Arquivos de aula entram depois.

---

## 0) Pré-requisito — Python 3

No terminal:

```text
python --version
```

Se falhar, tente `py --version` ou `python3 --version`.

Sem Python 3:

| Sistema | Instalar |
|---------|----------|
| Windows | `winget install Python.Python.3.12` |
| macOS | `brew install python3` |
| Linux | `sudo apt install -y python3` |

Feche e abra o terminal. Confira de novo.

---

## 1) Crie o arquivo

1. No **Desktop**, crie um arquivo de texto chamado exatamente:

```text
setup-jornada.py
```

(Bloco de Notas / TextEdit / VS Code — extensão **`.py`**, não `.txt`.)

2. Cole **todo** o corpo abaixo, salve e feche.

```python
# -*- coding: utf-8 -*-
# Cria no Desktop a pasta da jornada + 5 pastas Wave.
# Nada mais. Arquivos de aula entram depois, semana a semana.

from __future__ import print_function

import os
import sys

NOME_RAIZ = "AI-First-Operations-Leadership-Jornada"

PASTAS = [
    "01 Pre-voo",
    "02 Produto",
    "03 Delivery",
    "04 Times hibridos",
    "05 Equilibrio AI-Era",
]


def pasta_desktop():
    home = os.path.expanduser("~")
    profile = os.environ.get("USERPROFILE") or home
    candidatos = [
        os.path.join(profile, "Desktop"),
        os.path.join(home, "Desktop"),
        os.path.join(profile, "OneDrive", "Desktop"),
        os.path.join(home, "OneDrive", "Desktop"),
    ]
    for caminho in candidatos:
        if os.path.isdir(caminho):
            return caminho
    return os.path.join(profile, "Desktop")


def main():
    raiz = os.path.join(pasta_desktop(), NOME_RAIZ)
    os.makedirs(raiz, exist_ok=True)
    print("Raiz:", raiz)

    for nome in PASTAS:
        caminho = os.path.join(raiz, nome)
        os.makedirs(caminho, exist_ok=True)
        print("  OK", nome)

    print("Pronto. 5 pastas criadas (ou ja existiam).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

---

## 2) Abra o terminal **no Desktop**

**Windows (Prompt / PowerShell):**

```text
cd Desktop
```

Se o Desktop estiver no OneDrive:

```text
cd "%USERPROFILE%\OneDrive\Desktop"
```

**macOS / Linux:**

```text
cd ~/Desktop
```

Confira se o arquivo está ali:

```text
dir setup-jornada.py
```

(macOS/Linux: `ls setup-jornada.py`)

---

## 3) Execute

**Windows:**

```text
python setup-jornada.py
```

Se der erro de comando: `py setup-jornada.py`

**macOS / Linux:**

```text
python3 setup-jornada.py
```

Você deve ver no terminal algo como:

```text
Raiz: ...\Desktop\AI-First-Operations-Leadership-Jornada
  OK 01 Pre-voo
  OK 02 Produto
  OK 03 Delivery
  OK 04 Times hibridos
  OK 05 Equilibrio AI-Era
Pronto. 5 pastas criadas (ou ja existiam).
```

---

## 4) Confira no Explorer / Finder

```text
Desktop/AI-First-Operations-Leadership-Jornada/
  01 Pre-voo/
  02 Produto/
  03 Delivery/
  04 Times hibridos/
  05 Equilibrio AI-Era/
```

Não renomeie essas pastas. Marque **Feito** no setup.

---

## O que esse comando faz (em uma frase)

`python setup-jornada.py` = o interpretador Python lê o arquivo que **você montou** e cria a raiz + as 5 pastas Wave no Desktop.

---
# MODELO DE PROJETO
# Para criar um projeto novo: copie este arquivo para dentro de pt/, fr/ e en/
# com O MESMO NOME nas três pastas (ex.: meu-projeto.md). O nome do arquivo
# vira o endereço da página: /pt/projects/meu-projeto/
# Use só letras minúsculas, números e hífens no nome. Depois apague estes comentários.
# (Este arquivo fica fora das pastas de língua, então o site o ignora.)

title: Título do projeto
summary: Uma ou duas frases dizendo o que é o projeto. Aparece nas listas e abaixo do título.

date: 2026-01-01          # só serve para ordenar (mais recente primeiro)
period: 2025 – 2026       # texto livre que aparece na ficha
context: Onde foi feito (laboratório, empresa, disciplina, projeto pessoal)
role: O que você fez no projeto, em poucas palavras
tech: [C, ESP32, KiCad]   # tecnologias, separadas por vírgula

links:                    # opcional; apague o bloco se não tiver links
  - label: Código no GitHub
    url: https://github.com/geovaaraujo/nome-do-repositorio

# Imagem de capa: coloque a foto em src/content/projects/_images/meu-projeto/
# (a mesma pasta serve para as três línguas) e aponte para ela aqui.
cover: ../_images/meu-projeto/cover.jpg
coverAlt: Descreva a foto em uma frase (para leitores de tela e para o Google)

featured: true            # true = aparece na página inicial
draft: true               # true = só aparece no seu computador; false = publicado
---

Um parágrafo de abertura: qual era o problema ou o objetivo?

## O que eu fiz

- Sua contribuição concreta, de preferência com verbos de ação
- Decisões técnicas que você tomou e por quê

## Resultados

Números, medidas, fotos, um vídeo, um link para o artigo. O recrutador quer ver que funcionou.

Para colocar uma foto no meio do texto:

![Descrição da foto](../_images/meu-projeto/bancada.jpg)

## O que eu aprendi

O que você faria diferente, o que levou para os projetos seguintes.

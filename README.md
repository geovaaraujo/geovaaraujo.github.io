# Site pessoal de Geová Araujo

Portfólio, blog e CV em três línguas (português, francês, inglês).
Feito com [Astro](https://astro.build) e publicado de graça no GitHub Pages.

## Rodar no seu computador

Você precisa do [Node.js](https://nodejs.org) (versão LTS, 24 ou mais nova).

```bash
npm install     # só na primeira vez: baixa as dependências
npm run dev     # abre o site em http://localhost:4321
```

Com o `npm run dev` ligado, cada vez que você salva um arquivo o navegador atualiza sozinho.
Para desligar: `Ctrl + C` no terminal.

## Onde mexer

| Quero mudar…                              | Arquivo                                                  |
| ----------------------------------------- | -------------------------------------------------------- |
| Meu nome, GitHub, LinkedIn, e-mail        | `src/site.config.ts`                                     |
| A frase grande e a apresentação da home   | `src/content/pages/<língua>/home.md`                     |
| Um projeto                                | `src/content/projects/<língua>/<projeto>.md`             |
| As fotos de um projeto                    | `src/content/projects/_images/<projeto>/`                |
| Um artigo do blog                         | `src/content/blog/<língua>/<artigo>.md`                  |
| Hobbies                                   | `src/content/pages/<língua>/hobbies.md`                  |
| O texto do CV                             | `src/content/pages/<língua>/cv.md`                       |
| O PDF do CV (botão de download)           | `public/cv/cv-pt.pdf`, `cv-fr.pdf`, `cv-en.pdf`          |
| Textos do menu e dos botões               | `src/i18n/ui.ts`                                         |
| Cores e fontes                            | o primeiro bloco de `src/styles/global.css`              |
| Os itens do menu                          | `src/components/Header.astro`                            |
| A estrutura de uma página                 | `src/pages/[lang]/`                                      |

`<língua>` é `pt`, `fr` ou `en`. Cada língua mostra só o que existe na pasta dela.

## Como o site é montado

Três tipos de arquivo, três papéis:

- **Markdown (`.md`) é o conteúdo.** Cada arquivo começa com um cabeçalho entre `---`
  (título, data, etc.) e depois vem o texto. É aqui que você vai passar 90% do tempo.
- **Astro (`.astro`) é o molde.** HTML com um bloco de código no topo. Cada arquivo em
  `src/pages/` vira uma página; os de `src/components/` são pedaços reaproveitados
  (cabeçalho, rodapé, lista de projetos).
- **CSS (`global.css`) é o visual.** Um arquivo só, dividido em blocos numerados.

O comando `npm run build` junta tudo e gera HTML puro na pasta `dist/`. É isso que vai para a internet.

## Criar um projeto novo

1. Copie `src/content/projects/_modelo.md` para dentro de `pt/`, `fr/` e `en/`,
   com o mesmo nome nas três pastas (ex.: `robo-seguidor.md`).
2. Preencha o cabeçalho e o texto. O modelo explica cada campo.
3. Coloque as fotos em `src/content/projects/_images/robo-seguidor/`.
4. Enquanto estiver escrevendo, deixe `draft: true`: o projeto aparece no seu
   computador, mas não no site publicado.

Para um artigo do blog é igual, com `src/content/blog/_modelo.md`.

## Publicar

```bash
git add .
git commit -m "Descreva o que mudou"
git push
```

Um ou dois minutos depois, a mudança está em https://geovaaraujo.github.io.
O acompanhamento fica na aba **Actions** do repositório no GitHub.

Só na primeira vez: crie no GitHub um repositório público chamado `geovaaraujo.github.io`
e, em **Settings → Pages → Source**, escolha **GitHub Actions**.

# Contexto para o Claude Code

Site pessoal de Geová Araujo: portfólio, blog e CV em três línguas (pt, fr, en).
Público principal: recrutadores de estágio (verão 2027, energia e sistemas embarcados).
Endereço final: https://geovaaraujo.github.io (repositório público `geovaaraujo.github.io`).

## Sobre mim e como trabalhar comigo

- Responda em português.
- Sei programar bem em C, mas não conheço front-end nem back-end. Quero aprender
  fazendo: entender onde mexer para mudar algo, sem entrar em cada detalhe.
- Antes de uma mudança grande, explique em 2 ou 3 frases o que vai fazer e em quais
  arquivos. Prefiro perguntas de esclarecimento antes de respostas longas.
- Depois de mudar algo, rode `npm run build` para conferir que nada quebrou.
- Não faça `git push` sem eu pedir.

## Decisões já tomadas (não mudar sem perguntar)

- Astro 7, site estático, sem backend. Conteúdo em Markdown (`src/content/`).
- Publicação: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na `main`.
- Estrutura: `/` = escolha de língua; `/pt/`, `/fr/`, `/en/` = página inicial com
  apresentação curta e projetos em destaque (`featured: true`). Menu: Projetos, Blog, CV, Hobbies.
  Hobbies ficam discretos, numa página à parte.
- CV: página HTML por língua (`src/content/pages/<língua>/cv.md`) + botão de download
  que aparece sozinho se existir `public/cv/cv-<língua>.pdf`. O CV original em LaTeX
  (modelo FortySecondsCV) fica fora deste repositório.
- Visual: fundo marfim `#faf9f5`, texto `#141413`, destaque terracota `#c6613f`.
  Albert Sans nos títulos, Source Serif 4 no texto. Assinatura visual: a onda quadrada
  que vira senoide (`src/components/Wave.astro`). Todo o CSS em `src/styles/global.css`.
- Rascunhos (`draft: true`) aparecem em `npm run dev`, nunca no site publicado.
- Traduções de um projeto ou artigo usam o MESMO nome de arquivo nas pastas de cada língua.
- Telefone e data de nascimento não aparecem no site. E-mail só se eu preencher em `src/site.config.ts`.
- O README tem a tabela "Onde mexer".

## Estado atual

- Esqueleto v0.1 pronto e testado: 4 projetos nas 3 línguas (sensores sem fio na EDF,
  conversor flyback quadrático no GPEC, FarmBot no GPAR, filamento de PET), CV, hobbies,
  1 artigo-rascunho no blog.
- Textos escritos a partir do meu CV, ainda sem detalhes novos. Capas dos projetos são
  diagramas provisórios em `src/content/projects/_images/`, para trocar por fotos reais.
- Estágio na EDF: só publicar o que já está no CV até a EDF confirmar o que pode ir para o site.
- 20/11: sessões 01–03 feitas. Projeto em `Documents\Site`; Git assina com o e-mail noreply
  do GitHub. Repositório público, Pages via GitHub Actions. Apresentação da home reescrita
  nas 3 línguas (mais concreta: EDF, flyback, FarmBot) e aprovada em 22/11.
- 22/11: usuário do GitHub trocado de `geova16` para `geovaaraujo`; repositório renomeado
  para `geovaaraujo/geovaaraujo.github.io`; site em https://geovaaraujo.github.io.
- 22/11: sessão 04 feita (4 mudanças visuais testadas e desfeitas). Sessão 05 adiada: vou
  inserir os outros projetos sozinho depois. Sessão 06: projeto 1 = máquina de filamento PET
  (`pet-filament.md`), texto completo em pt.
- 22/11: sessão 07 feita: projeto PET com 5 fotos reais, traduzido para FR e EN e publicado
  nas 3 línguas. O eletrônico foi montado em placa perfurada (não é PCB fabricada).
  `_images/pet-filament/cover.png` (diagrama antigo) não é mais usado.
- 22/11: projetos flyback e EDF retirados do site (`draft: true`; não posso dar detalhes). O
  estágio na EDF continua no CV, sem link "Ver o projeto". Home não cita mais o flyback.
- 22/11: FarmBot reescrito nas 3 línguas a partir do artigo (CC BY 4.0, 4 figuras com crédito).
  Meu papel: teste de corpos estranhos (impressões 3D, visão computacional em Python, participei
  da lógica nova: 40 % → 72,5 %), experimentos, fotos e manutenção da eletrônica. Não construí o robô.

## Plano (3 sessões de 2h por semana; detalhes de cada sessão no meu Google Agenda)

| Sessão | Data | Objetivo |
|---|---|---|
| 01 | 17/11 | Instalar Node, Git, VS Code; rodar o site localmente |
| 02 | 18/11 | Publicar no GitHub Pages |
| 03 | 20/11 | Passeio pelos arquivos; reescrever a apresentação nas 3 línguas |
| 04–06 | 21–22/11 | HTML/CSS essenciais; inventário de projetos; projeto 1 (texto) |
| 07–09 | 28–29/11 | Projeto 1 completo; projeto 2; início do projeto 3 |
| 10–12 | 05–06/12 | Projetos 3 e 4; destaques definitivos |
| 13–15 | 12–13/12 | CV: página revisada, PDFs FR e EN, download; hobbies; rascunho do artigo 1 |
| 16–18 | 19–20/12 | Publicar artigo 1; acabamento (celular, sitemap, imagem de compartilhamento); revisão FR/EN |
| 19–21 | 09–10/01 | Correções; PDF do CV gerado automaticamente; link do site no CV (meta: 15/01/2027) |

Atualize a seção "Estado atual" quando uma sessão terminar.

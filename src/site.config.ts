// ─────────────────────────────────────────────────────────────
// DADOS GERAIS DO SITE: seu nome e seus links.
// Tudo que aparece no cabeçalho e no rodapé vem daqui.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Geová Araujo',

  github: 'https://github.com/geovaaraujo',
  linkedin: 'https://www.linkedin.com/in/geov%C3%A1-araujo-machado-de-carvalho-594743254/',

  // Repositório com o código deste site (link no rodapé). '' para não mostrar.
  repo: 'https://github.com/geovaaraujo/geovaaraujo.github.io',

  // Opcional. Se preencher, o e-mail aparece no rodapé de todas as páginas.
  // Deixe '' (vazio) para não mostrar. Lembre que o site é público.
  email: '',
};

// Línguas do site. A ordem aqui é a ordem em que aparecem na tela.
// "label" é o nome por extenso; "short" é a sigla do seletor no cabeçalho;
// "html" é o código que os navegadores e o Google usam.
export const languages = {
  pt: { label: 'Português', short: 'PT', html: 'pt-BR' },
  fr: { label: 'Français', short: 'FR', html: 'fr' },
  en: { label: 'English', short: 'EN', html: 'en' },
} as const;

export type Lang = keyof typeof languages;
export const langCodes = Object.keys(languages) as Lang[];

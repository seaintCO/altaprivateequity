/*
 * SEAINT editorial publishing.
 * Change a story's status to "published" ONLY after reviewing it.
 * Add another entry to publish an article. No database or paid CMS required.
 * Drafts never appear on the public website.
 */
export type Localized = { en: string; es: string };
export type EditorialSection = { heading?: Localized; paragraphs: Localized[] };
export type EditorialPost = {
  slug: string;
  status: "draft" | "published";
  title: Localized;
  summary: Localized;
  category: Localized;
  author: string;
  date: string; // YYYY-MM-DD
  sections: EditorialSection[];
};

export const editorialPosts: EditorialPost[] = [
  {
    slug: "welcome-to-the-journal",
    status: "draft", // Edit and approve before publishing.
    title: { en: "Welcome to the SEAINT Journal", es: "Bienvenidos a la Revista SEAINT" },
    summary: {
      en: "A space for original perspectives on technology, company building and long-term investment.",
      es: "Un espacio de perspectivas originales sobre tecnología, empresas e inversión a largo plazo.",
    },
    category: { en: "Editorial", es: "Editorial" },
    author: "SEAINT Editorial",
    date: "2026-11-03",
    sections: [
      {
        heading: { en: "Why this space exists", es: "Por qué existe este espacio" },
        paragraphs: [
          {
            en: "Technology moves quickly. Durable businesses take longer to build. This journal is intended for considered notes on both: what is changing, what matters and which questions are worth asking.",
            es: "La tecnología avanza rápidamente. Las empresas duraderas tardan más en construirse. Esta revista propone reflexiones sobre ambos temas: qué está cambiando, qué importa y qué preguntas vale la pena hacer.",
          },
          {
            en: "We will keep our own analysis separate from third-party market headlines and identify the source of every external story.",
            es: "Mantendremos nuestro análisis separado de los titulares de terceros y señalaremos las fuentes de todas las noticias externas.",
          },
        ],
      },
    ],
  },
];

export function getPublishedPosts(): EditorialPost[] {
  return editorialPosts.filter((post) => post.status === "published").sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPost(slug: string): EditorialPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

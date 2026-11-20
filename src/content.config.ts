import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const products = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    language: z.enum(['en', 'he']),
    category: z.enum(['books', 'audio', 'hebrew']),
    kind: z.enum(['book', 'guide', 'audio', 'music']),
    cover: z.string().optional(),
    coverWide: z.string(),
    headline: z.string(),
    shortDescription: z.string(),
    priceLabel: z.string(),
    priceValue: z.string().optional(),
    priceCurrency: z.string().optional(),
    gumroadUrl: z.string().url(),
    amazonPaperbackUrl: z.string().url().optional(),
    format: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    order: z.number().default(10),
    related: z.array(z.string()).max(2).default([]),
    explores: z.array(z.string()).default([]),
    whoFor: z.string(),
    notFor: z.string().optional(),
    experience: z.array(z.string()).default([]),
    included: z.array(z.string()).default([]),
  }),
});
const journal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    chapter: z.string().optional(),
    cta: z.string().default('stop-pushing'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});
// Hebrew journal: same slug as the English article it pairs with (hreflang is matched by slug).
const journalHe = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/journal-he' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    chapter: z.string().optional(),
    cta: z.string().default('effortless-he'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});
// Glossary of Taoist terms. EN in src/content/glossary, HE in src/content/glossary-he (same slug = hreflang pair).
const glossarySchema = z.object({
  term: z.string(),                       // display name, e.g. "Wu wei"
  aka: z.string().optional(),             // other spellings / Chinese, e.g. "無為 · wuwei · non-doing"
  title: z.string(),                      // <title> / H1
  description: z.string(),                // meta description
  short: z.string(),                      // 1-2 sentence direct definition (GEO answer)
  order: z.number().default(50),
  chapters: z.array(z.number().int().min(1).max(81)).default([]),
  related: z.array(z.string()).default([]),   // other glossary slugs
  journal: z.array(z.string()).default([]),   // journal slugs
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  updated: z.coerce.date(),
});
const glossary = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/glossary' }), schema: glossarySchema });
const glossaryHe = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/glossary-he' }), schema: glossarySchema });
export const collections = { products, journal, journalHe, glossary, glossaryHe };

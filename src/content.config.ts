import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const products = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(), subtitle: z.string().optional(), kind: z.enum(['book','free','music']),
    priceLabel: z.string(), gumroadUrl: z.string().url().optional(),
    amazonUrl: z.string().url().optional(), image: z.string().optional(), imageLarge: z.string().optional(),
    status: z.enum(['published','coming-soon']), order: z.number().default(10),
    cardNote: z.string(), pages: z.string().optional(),
  }),
});
const journal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(), description: z.string(), date: z.coerce.date(),
    chapter: z.string().optional(), cta: z.enum(['unshakable','root','stop-pushing','still']).default('stop-pushing'),
  }),
});
export const collections = { products, journal };

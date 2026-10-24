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
  }),
});
export const collections = { products, journal };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['produtos-fisicos', 'produtos-digitais', 'reviews', 'dicas', 'comparativos']),
    tags: z.array(z.string()).default([]),
    affiliateLink: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

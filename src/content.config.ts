import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      link: z.url(),
      image: image(),
      imageAlt: z.string().default(''),
      summary: z.string(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      tags: z.array(z.string()).default([]),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      authors: z.array(z.string()),
      date: z.coerce.date(),
      venue: z.string(),
      type: z.string().default('Conference paper'),
      image: image().optional(),
      // File name inside public/publication/<id>/
      pdf: z.string().optional(),
      doi: z.string().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { posts, projects, publications };

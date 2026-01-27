import { defineCollection, z } from 'astro:content';

// 1. Define the Blog Schema
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // 'date' is required for the blog feed sorting
        pubDate: z.date(),
        // Optional: Only published posts show up
        draft: z.boolean().default(false),
        // Validate that tags are an array of strings
        tags: z.array(z.string()).optional(),
    }),
});

// 2. Define the Docs Schema
const docsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        // Docs often need a 'sidebarOrder' to control navigation
        sidebarOrder: z.number().default(999),
    }),
});

// 3. Export them to register
export const collections = {
    'blog': blogCollection,
    'docs': docsCollection,
};
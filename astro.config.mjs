// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import autoImport from 'astro-auto-import';


// https://astro.build/config
export default defineConfig({
  integrations: [
    autoImport({
      imports: [
        './src/components/mdx/Callout.astro',
      ],
    }),
    react(),
    mdx(),
    sitemap()
  ],


  vite: {
    plugins: [tailwindcss()]
  }
});
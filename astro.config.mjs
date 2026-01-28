import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import autoImport from 'astro-auto-import';
import pagefind from 'astro-pagefind';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';


// https://astro.build/config
export default defineConfig({
  site: 'https://luminaw.xyz',
  integrations: [
    autoImport({
      imports: [
        './src/components/mdx/Callout.astro',
      ],
    }),
    pagefind(),
    react(),
    mdx({
      syntaxHighlight: false,

      gfm: true,
      remarkRehype: { footnoteLabel: 'Footnotes' },
      remarkPlugins: [],

      rehypePlugins: [
        rehypeSlug, // Adds IDs to headings
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'] }
        ],
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend', // Adds a link icon *before* the text
            properties: { className: ['anchor-link'] }, // CSS class for the icon
            content: { type: 'text', value: '# ' }, // The symbol to show
          },
        ],
        [
          rehypePrettyCode,
          {
            theme: 'catppuccin-mocha',
            keepBackground: true,
            // @ts-expect-error ignore type of any for `node`
            onVisitLine(node) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
          }
        ]
      ],
    }),
    sitemap()
  ],


  vite: {
    plugins: [tailwindcss()]
  }
});
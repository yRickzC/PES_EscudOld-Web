import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.GITHUB_ACTIONS === 'true' ? '/PES_EscudOld-Web' : '/';

export default defineConfig({
  site: 'https://yrickzc.github.io',
  base,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

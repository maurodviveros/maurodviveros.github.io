// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export const locales = ['en', 'es'];
export const defaultLocale = 'es';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true
    }
  },
});
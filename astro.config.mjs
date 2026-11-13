import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import imgDims from './integrations/img-dims.mjs';

// Fully static site (no backend). Enquiries go to WhatsApp / email.
export default defineConfig({
  site: 'https://taxroots.ie',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Draft legal pages (awaiting solicitor review) stay crawlable via the footer but out of the sitemap.
      filter: (page) => !/\/(privacy|terms|cookies|complaints)\/$/.test(new URL(page).pathname),
    }),
    imgDims(),
  ],
  server: { port: 4600, host: true },
});

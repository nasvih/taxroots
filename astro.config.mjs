import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static site (no backend). Enquiries go to WhatsApp / email.
export default defineConfig({
  site: 'https://taxrootsirl.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  server: { port: 4600, host: true },
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://example.com' : 'http://localhost:4321',
  integrations: [tailwind()]
});
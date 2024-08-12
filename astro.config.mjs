import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://example.com' : 'http://localhost:4321',
  integrations: [tailwind(), icon(), mdx()],
  image: {
    domains: ["astro.build"],
  }
});
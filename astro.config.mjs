// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bravesecurity.se",
  trailingSlash: "always", //Inlagd pga SEO, så att alla URL:er slutar med "/". Annars kan det bli problem med sökmotorer som inte hanterar URL:er utan trailing slash korrekt.
  integrations: [sitemap()],
});

// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Troque pela URL final do site (usada no SEO e no sitemap).
export default defineConfig({
  site: "https://exemplo.com.br",
  integrations: [sitemap()],
});

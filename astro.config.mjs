import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://simplai.ca",
  base: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : undefined,
  output: "static",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
});

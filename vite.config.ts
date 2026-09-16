import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { generateSitemapXML } from "./src/lib/sitemap";
import { writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "generate-sitemap",
      closeBundle() {
        const xml = generateSitemapXML();
        writeFileSync(`${__dirname}/dist/sitemap.xml`, xml, "utf-8");
      },
    },
  ],
});

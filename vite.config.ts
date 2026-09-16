import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const CANONICAL = "https://umrisenterprise.co.ke";

const PUBLIC_URLS = [
  { loc: `${CANONICAL}/`, changefreq: "weekly", priority: 1.0 },
  { loc: `${CANONICAL}/about`, changefreq: "monthly", priority: 0.8 },
  { loc: `${CANONICAL}/services`, changefreq: "weekly", priority: 0.9 },
  { loc: `${CANONICAL}/solutions`, changefreq: "monthly", priority: 0.8 },
  { loc: `${CANONICAL}/industries`, changefreq: "monthly", priority: 0.8 },
  { loc: `${CANONICAL}/tracking`, changefreq: "weekly", priority: 0.9 },
  { loc: `${CANONICAL}/quote`, changefreq: "weekly", priority: 0.9 },
  { loc: `${CANONICAL}/faq`, changefreq: "monthly", priority: 0.7 },
  { loc: `${CANONICAL}/locations`, changefreq: "monthly", priority: 0.7 },
  { loc: `${CANONICAL}/case-studies`, changefreq: "monthly", priority: 0.7 },
  { loc: `${CANONICAL}/portfolio`, changefreq: "monthly", priority: 0.7 },
  { loc: `${CANONICAL}/insights`, changefreq: "weekly", priority: 0.8 },
  { loc: `${CANONICAL}/contact`, changefreq: "monthly", priority: 0.9 },
];

const SERVICE_SLUGS = [
  "freight-transportation",
  "secure-warehousing",
  "customs-clearing",
  "freight-forwarding",
  "trucking-services",
  "real-time-tracking",
  "procurement-sourcing",
  "last-mile-delivery",
  "logistics-consultancy",
];

function generateSitemapXML(): string {
  const urls = [
    ...PUBLIC_URLS,
    ...SERVICE_SLUGS.map((s) => ({
      loc: `${CANONICAL}/services/${s}`,
      changefreq: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const urlElements = urls
    .map(
      (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>\n`;
}

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

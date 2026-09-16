import { SERVICES } from "../data/services";

export const CANONICAL = "https://umrisenterprise.co.ke";

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: number;
}

function url(loc: string, changefreq: string, priority: number): SitemapUrl {
  return { loc: `${CANONICAL}${loc}`, changefreq, priority };
}

const PUBLIC_URLS: SitemapUrl[] = [
  url("/", "weekly", 1.0),
  url("/about", "monthly", 0.8),
  url("/services", "weekly", 0.9),
  url("/solutions", "monthly", 0.8),
  url("/industries", "monthly", 0.8),
  url("/tracking", "weekly", 0.9),
  url("/quote", "weekly", 0.9),
  url("/faq", "monthly", 0.7),
  url("/locations", "monthly", 0.7),
  url("/case-studies", "monthly", 0.7),
  url("/portfolio", "monthly", 0.7),
  url("/insights", "weekly", 0.8),
  url("/contact", "monthly", 0.9),
];

const SERVICE_URLS = SERVICES.map((s) =>
  url(`/services/${s.slug}`, "monthly", 0.7)
);

const ALL_URLS = [...PUBLIC_URLS, ...SERVICE_URLS];

export function generateSitemapXML(): string {
  const urlElements = ALL_URLS.map(
    (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>\n`;
}

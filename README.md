# Umris Enterprise Logistics

A conversion-focused website for **Umris Enterprise Logistics** — a Kenyan logistics and transportation company serving businesses across Kenya and East Africa.

**Live site:** https://umris-enterprise-logistics.vercel.app/

---

## Overview

The site presents Umris Enterprise's logistics services (freight transportation, secure warehousing, customs clearing, freight forwarding, trucking, cargo tracking, procurement, last-mile delivery and consultancy), its operational capabilities, industry focus, project evidence and insights. It is built as a fast, accessible, SEO- and AEO-friendly single-page application with server-rendered-equivalent metadata via React.

The project prioritises **authenticity**: all copy, case studies and claims are grounded in the business's actual operations. No clients, statistics, fleet sizes, certifications or results are invented.

---

## Tech Stack

| Layer        | Technology |
| ------------ | ---------- |
| Frontend     | React 19, TypeScript |
| Routing      | React Router 7 (with lazy-loaded routes) |
| Styling      | Hand-authored CSS design system (`src/index.css`) with design tokens |
| Icons        | React Icons (`react-icons/fa` and `react-icons/fa6`) |
| Maps         | Leaflet + React Leaflet (contact page) |
| Build Tool   | Vite 7 |
| Language     | TypeScript (strict-ish, `tsc -b`) |
| Deployment   | Vercel |

> Note: the project does **not** use Tailwind CSS or a UI component library. Styling is a single, token-driven stylesheet.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

Requires Node.js (the project targets the current LTS line compatible with Vite 7 / React 19).

---

## Project Structure

```
src/
  main.tsx              # App entry, BrowserRouter
  App.tsx               # Route definitions, global layout (Header/Footer/CTA)
  index.css             # Design system (tokens, components, utilities)
  data/                 # Single source of truth for content
    siteConfig.ts       # Brand, contact, social, navigation (verify fields flagged)
    services.ts         # Service catalogue + per-service FAQs/process
    industries.tsx      # Industry focus cards
    projects.ts         # Case studies / project evidence
    testimonials.ts     # Client testimonials (classified by verification)
    articles.ts         # Insights / blog articles
    faqs.ts             # Site-wide FAQ content
    process.ts          # "How it works" steps
  lib/
    seo.ts              # Per-route metadata + JSON-LD injection
    schema.ts           # Structured data builders (Org, LocalBusiness, Service, FAQ…)
  components/
    layout/             # Header, Footer, MobileActionBar, ScrollToTop, MapSection
    sections/           # Hero, TrustStrip, WhyUs, HowItWorks, Capabilities, CtaBand
    ui/                 # SectionHeading, Reveal, Faq, Button, Breadcrumbs, WhatsApp
    ServiceCard.tsx, Testimonials.tsx, Gallery.tsx
  pages/                # Home, About, Services, ServiceDetail, Industries,
                        # Portfolio, Insights, Article, Contact, NotFound
public/
  robots.txt            # Crawl rules
  sitemap.xml           # Indexable route map
```

---

## Routes

| Path | Page |
| ---- | ---- |
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/:slug` | Service detail (one per service in `data/services.ts`) |
| `/industries` | Industries served |
| `/portfolio` | Projects / case studies |
| `/insights` | Insights / blog index |
| `/insights/:slug` | Article |
| `/contact` | Contact & quote hub |
| `*` | Not Found (404) |

---

## Design System

Visual identity uses a magenta primary (`#8a2f6a`) with a green accent (`#6cc06b`), a neutral ink/surface scale and Poppins typography. Tokens (colors, spacing, radii, shadows, motion) live as CSS custom properties in `src/index.css`. Motion is restrained and honours `prefers-reduced-motion`.

---

## SEO, AEO & Structured Data

- Per-route titles, meta descriptions, canonical and Open Graph/Twitter tags are managed by `useSeo()` in `lib/seo.ts`.
- JSON-LD structured data is injected per page: `Organization`, `MovingCompany` (LocalBusiness), `WebSite`, `Service`, `Article`, `FAQPage` and `BreadcrumbList`.
- `public/sitemap.xml` and `public/robots.txt` are provided for crawlability.

---

## Business Information — Verify Before Publishing

Several fields in `src/data/siteConfig.ts` are flagged with `verify: true` because the original sources conflicted. **Do not treat the following as confirmed:**

- **HQ location** — original code conflicted between Thika and Naivasha; currently set to Naivasha with Naivasha coordinates.
- **Street address** — placeholder line only; confirm the real address.
- **Instagram** — currently a generic `instagram.com` placeholder and intentionally hidden from the UI until a real handle is supplied.
- **Canonical domain** — currently the Vercel deployment subdomain. Update `canonicalDomain` once the official domain is confirmed so metadata, sitemap and Open Graph all point to the right place.

Update these in **one place** (`src/data/siteConfig.ts`) — they propagate to the footer, contact page, schema and metadata automatically.

Contact details (phone, WhatsApp, email) are taken from the existing codebase and should also be confirmed.

---

## Notes

- No backend or API integrations are present; the quote form is a client-side qualification form (no submission endpoint). Wire it to an email/CRM service before relying on it for leads.
- Images are sourced from `src/assets/`; some are large PNGs and should be optimised (WebP/AVIF + responsive sizes) for Core Web Vitals.
- This README reflects the codebase as built; it does not assert business facts beyond what the application itself states.

# Umri's Enterprises

A conversion-focused website for **Umri's Enterprises** — a Kenyan transportation and logistics company serving businesses across Kenya and East Africa since 2017.

**Official tagline:** Eyes on Perfection.

**Live site:** https://umrisenterprise.co.ke/

---

## Overview

The site presents Umri's Enterprises' transportation and logistics services (freight transportation, secure warehousing, customs clearing, freight forwarding, trucking, last-mile delivery, procurement and consultancy), its operational capabilities, industry focus, project evidence and insights. It is built as a fast, accessible, SEO- and GEO-friendly single-page application with server-rendered-equivalent metadata via React.

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
    siteConfig.ts       # Brand, contact, social, navigation
    services.ts         # Service catalogue + per-service FAQs/process
    coverageAreas.ts    # 13 verified Kenyan coverage counties
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
    logistics/          # QuoteCalculator, TrackingForm, ShipmentCard, NetworkVisual
    ServiceCard.tsx, Testimonials.tsx, Gallery.tsx, QuoteForm.tsx
  pages/                # Home, About, Services, ServiceDetail, Industries,
                        # Portfolio, Insights, Article, Contact, Faq, Locations,
                        # Tracking, CaseStudies, Solutions, NotFound
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
| `/services/:slug` | Service detail |
| `/solutions` | Solutions |
| `/industries` | Industries served |
| `/industries/:slug` | Industry detail |
| `/tracking` | Shipment tracking (demo) |
| `/quote` | Request a quote |
| `/faq` | Frequently asked questions |
| `/locations` | Areas we serve |
| `/case-studies` | Case studies |
| `/portfolio` | Portfolio |
| `/insights` | Insights / blog |
| `/insights/:slug` | Article |
| `/contact` | Contact & quote hub |
| `*` | Not Found (404) |

---

## SEO, AEO & Structured Data

- Per-route titles, meta descriptions, canonical and Open Graph/Twitter tags are managed by `useSeo()` in `lib/seo.ts`.
- JSON-LD structured data is injected per page: `Organization`, `LocalBusiness`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList` and `Article`.
- `public/sitemap.xml` and `public/robots.txt` are provided for crawlability.
- Canonical domain: `https://umrisenterprise.co.ke`

---

## Business Information

| Field | Value |
| ----- | ----- |
| Business name | Umri's Enterprises |
| Tagline | Eyes on Perfection. |
| Established | 2017 |
| Domain | https://umrisenterprise.co.ke |
| HQ | Genesis House, Naivasha, Kenya |
| Phone | +254 764 268 280 |
| Email | umris.enterprises@gmail.com |
| Coverage | 13 Kenyan counties |

---

## Notes

- No backend or API integrations are present; the quote form is a client-side qualification form (no submission endpoint). Wire it to an email/CRM service before relying on it for leads.
- Images are sourced from `src/assets/`; some are large PNGs and should be optimised (WebP/AVIF + responsive sizes) for Core Web Vitals.
- Shipment tracking is currently a frontend demo using sample data — live tracking is not yet available.
- The quote calculator provides illustrative estimates only — not official pricing.
- This README reflects the codebase as built; it does not assert business facts beyond what the application itself states.

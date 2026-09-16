import { BRAND, SITE, COVERAGE_AREAS, absoluteUrl } from "../data/siteConfig";
import { SERVICES, type Service } from "../data/services";
import { SITE_FAQ } from "../data/faqs";
import { ARTICLES, type Article } from "../data/articles";

const coverageAreaNames = COVERAGE_AREAS.map((a) => a.name);
const sameAs = [SITE.social.facebook, SITE.social.instagram, SITE.social.twitter, SITE.social.linkedin].filter(Boolean) as string[];

function orgBase() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LogisticsCompany", "LocalBusiness"],
    "@id": absoluteUrl("/#organization"),
    name: BRAND.name,
    alternateName: BRAND.shortName,
    url: SITE.canonicalDomain,
    description: BRAND.name + " provides dependable transport, warehousing and distribution solutions that keep Kenyan businesses moving.",
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.hq.label,
      addressLocality: SITE.hq.city,
      addressCountry: SITE.hq.country,
    },
    hasMap: SITE.mapsUrl,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kenya",
    },
    sameAs: sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      email: SITE.email,
      availableLanguage: "en",
    },
    foundingDate: String(SITE.foundedYear),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    ...orgBase(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: SITE.canonicalDomain,
    name: BRAND.name,
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.canonicalDomain}/insights?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  const [lat, lng] = SITE.hq.coords;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#organization"),
    name: BRAND.name,
    image: absoluteUrl("/logo512.png"),
    url: SITE.canonicalDomain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.hq.label,
      addressLocality: SITE.hq.city,
      addressCountry: SITE.hq.country,
    },
    hasMap: SITE.mapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
    areaServed: ["Kenya", ...coverageAreaNames],
    sameAs: sameAs,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.short,
    serviceType: s.category,
    provider: { "@id": absoluteUrl("/#organization") },
    areaServed: { "@type": "AdministrativeArea", name: "Kenya" },
    url: absoluteUrl(`/services/${s.slug}`),
  };
}

export function faqSchema(faqs: { q: string; a: string }[] = SITE_FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(a: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(`/insights/${a.slug}`),
  };
}

export function allServiceSchemas() {
  return SERVICES.map(serviceSchema);
}

export function allArticleSchemas() {
  return ARTICLES.map(articleSchema);
}

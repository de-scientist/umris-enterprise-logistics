/* ============================================================
   SITE CONFIG — Single source of truth for Umri's Enterprises
   ------------------------------------------------------------
   Brand and location are defined ONCE here. Components, SEO,
   structured data and pages must consume SITE / BRAND instead
   of hardcoding the company name or address.
   ============================================================ */

/** Central brand source — prevents future name inconsistencies. */
export const BRAND = {
  /** Short brand name for lockups, greetings and prose. */
  name: "Umri's Enterprises",
  /** Full business name for titles, schema and legal contexts. */
  logisticsName: "Umri's Enterprises Logistics",
  /** Shortest reference, e.g. header lockup. */
  shortName: "Umri's",
  /** Official brand signature. Use intentionally — hero, About, footer. */
  tagline: "Eyes on Perfection.",
} as const;

export const SITE = {
  /* Official legal/brand entity — used in schema, titles, footer */
  name: BRAND.logisticsName,
  shortName: BRAND.shortName,
  legalNote: BRAND.name,

   /* ⚠️ VERIFY: production domain. The live deployment is on Vercel's
      subdomain; set this to the official domain once confirmed so
      canonical/sitemap/OG all point to the right place. */
   canonicalDomain: "https://umrisenterprise.co.ke",

  /* Contact — taken from existing codebase (Header/Contact). */
  email: "umris.enterprises@gmail.com",
  phone: "+254 764 268 280",
  phoneDisplay: "+254 764 268 280",
  whatsapp: "254764268280", // international format, no "+"

  /* Confirmed location label: Genesis House, Naivasha, Kenya.
     Coordinates are the approximate Genesis House reference
     supplied by the business (-0.749481, 36.462653). No street
     address is invented — only the confirmed building name. */
  hq: {
    label: "Genesis House",
    city: "Naivasha",
    country: "Kenya",
    coords: [-0.749481, 36.462653] as [number, number],
    addressLine: "Genesis House, Naivasha, Kenya",
  },

  /* Official directions destination supplied by the business. */
  mapsUrl: "https://maps.app.goo.gl/9L5jFbEG9zUTXX3V8?g_st=aw",

  /* Service region description (factual: operates across Kenya + East Africa) */
  serviceArea: "Across Kenya, with regional logistics across East Africa",

  /* Social — only verified accounts. Instagram in original code was a
     generic placeholder (instagram.com) and is flagged for verification. */
  social: {
    facebook: "https://www.facebook.com/100063605441743",
    instagram: "https://www.instagram.com/", // ⚠️ VERIFY handle
    instagramVerify: true,
    twitter: "", // not verified — omitted from UI
    linkedin: "", // not verified — omitted from UI
  },

  /* Official brand signature (single source: BRAND.tagline). */
  tagline: BRAND.tagline,
  positioning:
    "Umri's Enterprises Logistics provides dependable transport, warehousing and distribution solutions that keep Kenyan businesses moving.",
} as const;

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Tracking", to: "/tracking" },
  { label: "Resources", to: "/insights" },
  { label: "About", to: "/about" },
] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  return `${SITE.canonicalDomain}${path}`;
}

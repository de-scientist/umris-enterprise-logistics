/* ============================================================
   SITE CONFIG — Single source of truth for Umri's Enterprises
   ------------------------------------------------------------
   Brand and location are defined ONCE here. Components, SEO,
   structured data and pages must consume SITE / BRAND instead
   of hardcoding the company name or address.
   ============================================================ */

/** Central brand source — prevents future name inconsistencies. */
export const BRAND = {
  /** Official business name — used everywhere. */
  name: "Umri's Enterprises",
  /** Official tagline. */
  tagline: "Eyes on Perfection.",
  /** Shortest reference, e.g. header lockup. */
  shortName: "Umri's",
} as const;

export const SITE = {
  /** Official legal/brand entity — used in schema, titles, footer. */
  name: BRAND.name,
  shortName: BRAND.shortName,
  tagline: BRAND.tagline,

  /* Official production domain — all canonical/sitemap/OG references use this. */
  canonicalDomain: "https://umrisenterprise.co.ke",

  /* Contact */
  email: "umris.enterprises@gmail.com",
  phone: "+254 764 268 280",
  phoneDisplay: "+254 764 268 280",
  whatsapp: "254764268280",

  /* Verified location: Genesis House, Naivasha, Kenya */
  hq: {
    label: "Genesis House",
    city: "Naivasha",
    country: "Kenya",
    coords: [-0.749481, 36.462653] as [number, number],
    addressLine: "Genesis House, Naivasha, Kenya",
  },

  mapsUrl: "https://maps.app.goo.gl/9L5jFbEG9zUTXX3V8?g_st=aw",

  serviceArea: "Across Kenya, with regional logistics across East Africa",

  positioning:
    "Umri's Enterprises provides dependable transport, warehousing and distribution solutions that keep Kenyan businesses moving.",

  foundedYear: 2017,

  social: {
    facebook: "https://www.facebook.com/100063605441743",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Tracking", to: "/tracking" },
  { label: "Resources", to: "/insights" },
  { label: "About", to: "/about" },
] as const;

/** Official description for metadata/schema. */
export const BUSINESS_DESCRIPTION =
  "Since 2017, Umri's Enterprises has been providing exceptional transportation services, building partnerships on trust and delivering excellence through integrity, efficiency, and seamless, timely transportation.";

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  return `${SITE.canonicalDomain}${path}`;
}

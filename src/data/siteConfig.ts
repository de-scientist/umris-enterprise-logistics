/* ============================================================
    SITE CONFIG — Single source of truth for Umri's Enterprises
    ------------------------------------------------------------
    Brand and location are defined ONCE here. Components, SEO,
    structured data and pages must consume SITE / BRAND instead
    of hardcoding the company name or address.
    ============================================================ */

export const BRAND = {
  name: "Umri's Enterprises",
  tagline: "Eyes on Perfection.",
  shortName: "Umri's",
} as const;

export const SITE = {
  name: BRAND.name,
  shortName: BRAND.shortName,
  legalNote: BRAND.name,
  tagline: BRAND.tagline,
  canonicalDomain: "https://umrisenterprise.co.ke",
  email: "umris.enterprises@gmail.com",
  phone: "+254 764 268 280",
  phoneDisplay: "+254 764 268 280",
  whatsapp: "254764268280",
  hq: {
    label: "Genesis House",
    city: "Naivasha",
    country: "Kenya",
    coords: [-0.749481, 36.462653] as [number, number],
    addressLine: "Genesis House, Naivasha, Kenya",
  },
  mapsUrl: "https://maps.app.goo.gl/9L5jFbEG9zUTXX3V8?g_st=aw",
  serviceArea: "Across Kenya, with regional logistics across East Africa",
  positioning: "Umri's Enterprises provides dependable transport, warehousing and distribution solutions that keep Kenyan businesses moving.",
  foundedYear: 2017,
  founded: "2017",
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

export const BUSINESS_DESCRIPTION = "Since 2017, Umri's Enterprises has been providing exceptional transportation services, building partnerships on trust and delivering excellence through integrity, efficiency, and seamless, timely transportation.";

export const MISSION = "We are committed to delivering reliable logistics and transportation solutions with integrity, excellence, and dedication, helping partners achieve their goals and succeed in every journey.";

export const VISION = "Our vision is to build long-term partnerships, supporting developmental and disaster response initiatives to create resilient communities through essential products and services for NGOs and agencies.";

export const VALUES = "We uphold respect, fairness, and transparency as core values, ensuring ethical conduct, fostering trust, and providing an exceptional experience for customers while strengthening partnerships.";

export const OG_IMAGE = absoluteUrl("/logo512.png");

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  return `${SITE.canonicalDomain}${path}`;
}

export function getSocialUrls(): string[] {
  return [SITE.social.facebook].filter(Boolean) as string[];
}

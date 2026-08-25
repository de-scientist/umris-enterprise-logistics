/* ============================================================
   SITE CONFIG — Single source of truth for Umris Enterprise
   ------------------------------------------------------------
   ⚠️ HUMAN VERIFICATION REQUIRED for fields marked `verify: true`.
   The original codebase contained conflicting information:
     - Business name: "Umris Logistics" vs "Umris Enterprise Logistics"
     - HQ location: Hero said "Thika"; Map said "Naivasha"
     - Domain: README -> umrisenterprise.com; Footer -> umrislogistics.co.ke
   These are kept as configurable constants so they can be corrected
   in ONE place without hunting through components.
   ============================================================ */

export const SITE = {
  /* Official legal/brand entity — used in schema, titles, footer */
  name: "Umris Enterprise Logistics",
  shortName: "Umris",
  legalNote: "Umris Enterprise",

  /* ⚠️ VERIFY: production domain. The live deployment is on Vercel's
     subdomain; set this to the official domain once confirmed so
     canonical/sitemap/OG all point to the right place. */
  canonicalDomain: "https://umris-enterprise-logistics.vercel.app",

  /* Contact — taken from existing codebase (Header/Contact). */
  email: "umris.enterprises@gmail.com",
  phone: "+254 764 268 280",
  phoneDisplay: "+254 764 268 280",
  whatsapp: "254764268280", // international format, no "+"

  /* ⚠️ VERIFY: headquarters. Existing code conflicted (Thika vs Naivasha).
     Map component placed the pin in Naivasha. Kept Naivasha as the
     operational hub pending confirmation. Coordinates are Naivasha. */
  hq: {
    city: "Naivasha",
    country: "Kenya",
    verify: true,
    coords: [-0.7167, 36.431] as [number, number],
    addressLine: "Naivasha, Kenya", // ⚠️ VERIFY street address
  },

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

  /* Brand tagline / positioning */
  tagline: "Reliable Logistics. Delivered With Precision.",
  positioning:
    "Umris Enterprise Logistics provides dependable transport, warehousing and distribution solutions that keep Kenyan businesses moving.",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
] as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  return `${SITE.canonicalDomain}${path}`;
}

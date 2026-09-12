/* ============================================================
   LOCATIONS — only publish areas Umri's actually serves.
   Never add a location for SEO alone. Update this file when
   real coverage changes; sitemap + pages derive from it.
   ============================================================ */

export interface ServiceLocation {
  slug: string;
  name: string;
  type: "Hub" | "Service area";
  summary: string;
  /** Honest framing — avoids implying a full branch office. */
  presence: string;
}

export const LOCATIONS: ServiceLocation[] = [
  {
    slug: "kenya",
    name: "Kenya",
    type: "Service area",
    summary:
      "Nationwide transport, warehousing and distribution across Kenya — local, long-distance and consolidated freight.",
    presence: "Nationwide coverage within Kenya",
  },
  {
    slug: "naivasha",
    name: "Naivasha",
    type: "Hub",
    summary:
      "Operational hub for coordination, dispatch and regional movement across the Rift Valley and beyond.",
    presence: "Operational hub — address to be confirmed",
  },
  {
    slug: "nairobi",
    name: "Nairobi",
    type: "Service area",
    summary:
      "Pickup, delivery, warehousing coordination and freight movement across the Nairobi metropolitan area.",
    presence: "Regular pickups and deliveries",
  },
  {
    slug: "mombasa",
    name: "Mombasa",
    type: "Service area",
    summary:
      "Port-linked coordination: customs clearing support and port-to-door handover for imports and exports.",
    presence: "Port coordination on request",
  },
  {
    slug: "east-africa",
    name: "East Africa (Regional)",
    type: "Service area",
    summary:
      "Cross-border coordination into neighbouring East African markets, including route and border documentation.",
    presence: "Cross-border coordination on request",
  },
];

export function getLocation(slug: string): ServiceLocation | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

import dispatchFlagOff from "../assets/t1.jpeg";
import loadedTrucks from "../assets/t2.jpeg";

/* ============================================================
   SUCCESS STORIES — visual proof of Umri's Enterprises' work.
   ------------------------------------------------------------
   Every entry uses a REAL photograph from the company's own
   material (bundled assets or /public). Copy describes ONLY
   what is visible in the photograph — no client names, routes,
   volumes, timelines or results are invented. Keep it that way.

   API-READY: the UI consumes this array through the helpers
   below. When a backend/CMS exists, replace `successStories`
   with a fetch from the Success Stories service — the
   component contract (SuccessStory[]) stays the same.
   ============================================================ */

export type SuccessStoryCategory =
  | "Operations"
  | "Transport"
  | "Delivery"
  | "Cargo Handling"
  | "Field Work"
  | "Vehicle";

export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  /** Bundled import or /public path. */
  image: string;
  category: SuccessStoryCategory;
  alt: string;
  /** Exactly one story should be featured (large editorial slot). */
  featured?: boolean;
}

export const successStories: SuccessStory[] = [
  {
    id: "medical-consignments-facility-door",
    title: "Medical consignments, delivered to the facility door",
    description:
      "The Umri's Enterprises team offloading labelled medical consignments from the company truck at a county health facility in the field.",
    image: "/testimonials/t1.jpeg",
    category: "Delivery",
    alt: "Umri's Enterprises truck offloading labelled medical supply cartons at a county health facility in Kenya",
    featured: true,
  },
  {
    id: "dispatch-flag-off",
    title: "Dispatch, flagged off",
    description:
      "An Umri's Enterprises vehicle prepared for dispatch at a formal flag-off, with the team and partners present.",
    image: dispatchFlagOff,
    category: "Operations",
    alt: "Umri's Enterprises truck at a dispatch flag-off event with officials and team members present",
  },
  {
    id: "fully-loaded-ready-to-move",
    title: "Fully loaded, ready to move",
    description:
      "Umri's Enterprises trucks loaded with labelled medical cartons, prepared for transit.",
    image: loadedTrucks,
    category: "Cargo Handling",
    alt: "Umri's Enterprises trucks fully loaded with labelled medical supply cartons",
  },
  {
    id: "reaching-rural-dispensaries",
    title: "Reaching rural dispensaries",
    description:
      "The Umri's Enterprises truck pictured at Chala Dispensary during field delivery rounds.",
    image: "/testimonials/t4.jpeg",
    category: "Field Work",
    alt: "Umri's Enterprises truck on delivery rounds at a rural dispensary in Kenya",
  },
  {
    id: "branded-fleet-in-the-field",
    title: "Branded fleet in the field",
    description:
      "An Umri's Enterprises branded truck on delivery rounds at a rural health facility.",
    image: "/testimonials/t8.jpeg",
    category: "Vehicle",
    alt: "Umri's Enterprises branded Mitsubishi truck parked at a rural health facility",
  },
  {
    id: "facility-to-facility-movement",
    title: "Facility-to-facility movement",
    description:
      "The Umri's Enterprises truck pictured at Ongata Rongai Sub-County Hospital during delivery operations.",
    image: "/testimonials/t2.jpeg",
    category: "Transport",
    alt: "Umri's Enterprises truck parked outside Ongata Rongai Sub-County Hospital",
  },
];

export function getSuccessStory(id: string): SuccessStory | undefined {
  return successStories.find((s) => s.id === id);
}

export function getFeaturedStory(): SuccessStory {
  return successStories.find((s) => s.featured) ?? successStories[0];
}

export function getSupportingStories(): SuccessStory[] {
  const featured = getFeaturedStory();
  return successStories.filter((s) => s.id !== featured.id);
}

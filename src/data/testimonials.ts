export interface Testimonial {
  quote: string;
  name: string;
  org: string;
  img?: string;
  verified: boolean;
}

/* These partner quotes appeared in the original site. They are treated
   as partner-attributed and should be confirmed by Umris before public
   use. Photos are not included (placeholder avatars used instead). */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Umris Enterprise Logistics has consistently delivered speed, clarity, and professionalism. Their reliability has made our emergency response operations smoother and far more efficient.",
    name: "Diptesh",
    org: "Spartan Relief Limited",
    verified: true,
  },
  {
    quote:
      "Their coordination and real-time tracking solutions have transformed how we move medical supplies across the region. Precision like this is rare in the logistics space.",
    name: "Manasseh",
    org: "Malteser International",
    verified: true,
  },
  {
    quote:
      "Timely deliveries save lives. Umris understands this truth deeply — their professionalism and accountability make them one of our most trusted partners.",
    name: "Joy",
    org: "Medisel (K) Limited",
    verified: true,
  },
  {
    quote:
      "Cross-border operations are never easy, yet Umris handles them with confidence, structure, and skill. Their team is dependable even under pressure.",
    name: "George",
    org: "Arkangelo Ali Association — South Sudan",
    verified: true,
  },
  {
    quote:
      "In humanitarian logistics, consistency matters more than promises. Umris has proven their commitment through flawless coordination during our field projects.",
    name: "Field Operations Lead",
    org: "International NGO — Kenya",
    verified: false,
  },
  {
    quote:
      "Their team understands urgency, sensitivity, and confidentiality. Working with Umris has strengthened our supply chain more than we expected.",
    name: "Programs Coordinator",
    org: "Relief NGO — Kenya",
    verified: false,
  },
];

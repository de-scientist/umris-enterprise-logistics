export interface Testimonial {
  quote: string;
  name: string;
  org: string;
  logo?: string;
  role?: string;
  verified: boolean;
}

/* These partner quotes appeared in the original site. They are treated
   as partner-attributed and should be confirmed by Umri's before public
   use. Logo paths reference partner assets in /public/images/partners/. */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Umri's Enterprises Logistics has consistently delivered speed, clarity, and professionalism. Their reliability has made our emergency response operations smoother and far more efficient.",
    name: "Diptesh",
    org: "Spartan Relief Limited",
    verified: true,
  },
  {
    quote:
      "Their coordination and real-time tracking solutions have transformed how we move medical supplies across the region. Precision like this is rare in the logistics space.",
    name: "Manasseh",
    org: "Malteser International",
    logo: "/images/partners/partner-malteser.png",
    verified: true,
  },
  {
    quote:
      "Timely deliveries save lives. Umri's understands this truth deeply — their professionalism and accountability make them one of our most trusted partners.",
    name: "Joy",
    org: "Medisel (K) Limited",
    logo: "/images/partners/partner-meditel.png",
    verified: true,
  },
  {
    quote:
      "Cross-border operations are never easy, yet Umri's handles them with confidence, structure, and skill. Their team is dependable even under pressure.",
    name: "George",
    org: "Arkangelo Ali Association — South Sudan",
    verified: true,
  },
  {
    quote:
      "In humanitarian logistics, consistency matters more than promises. Umri's has proven their commitment through flawless coordination during our field projects.",
    name: "Field Operations Lead",
    org: "International NGO — Kenya",
    logo: "/images/partners/partner-ngo1.jpeg",
    verified: false,
  },
  {
    quote:
      "Their team understands urgency, sensitivity, and confidentiality. Working with Umri's has strengthened our supply chain more than we expected.",
    name: "Programs Coordinator",
    org: "Relief NGO — Kenya",
    logo: "/images/partners/partner-ngo2.jpeg",
    verified: false,
  },
];

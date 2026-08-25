import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";
import clearance from "../assets/9.png";
import loading from "../assets/2.png";

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  service: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  /* clientVerified: false means the partner is named only where the
     original testimonial already did so; treat as needing confirmation. */
  clientVerified: boolean;
}

/* Case studies are built from the operational gallery and the partner
   testimonials already present in the original site. No quantitative
   results are invented — outcomes are described qualitatively. */
export const PROJECTS: Project[] = [
  {
    slug: "medical-supply-distribution",
    title: "Medical Supply Distribution Across the Region",
    client: "Medisel (K) Ltd & Malteser International",
    industry: "Health & Medical",
    location: "Kenya / East Africa",
    service: "Freight Transportation · Real-Time Tracking",
    challenge:
      "Medical supplies are time-critical and must be handled with accountability from origin to clinic.",
    solution:
      "Umris coordinated movement with monitoring and clear updates, giving the partners visibility of every consignment in transit.",
    outcome:
      "A more accountable supply flow, with partners citing improved trust and smoother coordination of medical cargo.",
    image: t2,
    clientVerified: true,
  },
  {
    slug: "cross-border-relief-operations",
    title: "Cross-Border Relief Operations",
    client: "Arkangelo Ali Association — South Sudan",
    industry: "Humanitarian & NGO",
    location: "East Africa (cross-border)",
    service: "Freight Forwarding · Freight Transportation",
    challenge:
      "Cross-border operations carry extra risk — border processes, route uncertainty and pressure to deliver.",
    solution:
      "Umris managed coordination and documentation with structure, keeping consignments moving even under pressure.",
    outcome:
      "Dependable cross-border movement described by the partner as confident, structured and skilled.",
    image: clearance,
    clientVerified: true,
  },
  {
    slug: "emergency-response-logistics",
    title: "Emergency Response Logistics",
    client: "Spartan Relief Ltd & International NGO Partners",
    industry: "Humanitarian & NGO",
    location: "Kenya",
    service: "Last-Mile Delivery · Secure Warehousing",
    challenge:
      "Emergency response leaves no room for delay; supplies must reach field operations efficiently.",
    solution:
      "Umris supported rapid, well-coordinated dispatch and delivery, with handling suited to sensitive relief cargo.",
    outcome:
      "Smoother, more efficient emergency operations and stronger field coordination for the partners.",
    image: loading,
    clientVerified: true,
  },
  {
    slug: "operational-fleet-dispatch",
    title: "Operational Fleet Dispatch & Loading",
    client: "Umris Enterprise Logistics",
    industry: "Internal Capability",
    location: "Kenya",
    service: "Local & Long-Distance Trucking",
    challenge:
      "Demonstrating dependable day-to-day dispatch for varied commercial and relief cargo.",
    solution:
      "Trained teams manage loading, securing and routing, with a fleet prepared for both planned and urgent dispatch.",
    outcome:
      "Consistent, documented dispatch capability supporting the wider service portfolio.",
    image: t1,
    clientVerified: true,
  },
];

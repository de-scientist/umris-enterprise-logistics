import freight from "../assets/Freight.jpg";
import warehousing from "../assets/Warehousing.jpeg";
import clearing from "../assets/clearing.jpeg";
import forwarding from "../assets/Forwarding.jpeg";
import trucking from "../assets/truck1.jpg";
import tracking from "../assets/Route.jpg";
import procurement from "../assets/Procurement.jpeg";
import lastmile from "../assets/Last.jpeg";
import consultancy from "../assets/Consulting.jpeg";

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  category: "Transportation" | "Logistics" | "Enterprise Services";
  short: string;
  image: string;
  who: string;
  benefit: string;
  intro: string;
  what: string[];
  handles: string[];
  process: { step: string; detail: string }[];
  capabilities: string[];
  advantages: string[];
  faqs: ServiceFAQ[];
  related: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "freight-transportation",
    title: "Freight Transportation",
    category: "Transportation",
    short:
      "Safe, timely movement of goods across Kenya and East Africa — from bulk cargo to delicate shipments.",
    image: freight,
    who: "Manufacturers, wholesalers, NGOs and retailers moving commercial goods between destinations.",
    benefit:
      "Dependable movement of commercial goods with coordination built around your delivery requirements.",
    intro:
      "Freight transportation is at the core of what Umris does. We move commercial cargo between verified destinations across Kenya and into the wider East African region, coordinating each consignment so it arrives safely and as scheduled.",
    what: [
      "Full truckload (FTL) and consolidated freight movement across Kenya.",
      "Cross-border coordination into neighbouring East African markets.",
      "Handling of general, delicate and time-sensitive commercial cargo.",
      "Load planning and route coordination managed by our operations team.",
    ],
    handles: [
      "Booking and confirming capacity for your consignment.",
      "Loading, securing and documenting freight at origin.",
      "Coordinating the route and any border processes required.",
      "Confirming safe delivery and providing closure to the client.",
    ],
    process: [
      { step: "Request & Quote", detail: "Share origin, destination, cargo type and timing; we return a clear quotation." },
      { step: "Schedule & Load", detail: "We confirm capacity, plan the load and secure cargo for transit." },
      { step: "Move & Monitor", detail: "Goods move on the planned route with status updates to the client." },
      { step: "Deliver & Confirm", detail: "Cargo is delivered, verified and signed off at destination." },
    ],
    capabilities: [
      "Nationwide coverage within Kenya",
      "Regional cross-border coordination",
      "Trained handling teams",
      "Status updates through transit",
    ],
    advantages: [
      "Coordination built around your delivery window",
      "Experienced handling of varied cargo types",
      "Transparent communication throughout",
      "Single point of contact for your shipment",
    ],
    faqs: [
      { q: "What size of freight can Umris move?", a: "From consolidated smaller consignments to full truckloads. Share your cargo details and we will confirm the right option." },
      { q: "Do you handle cross-border freight?", a: "Yes. We coordinate regional movement across East Africa where required, managing route and border documentation." },
    ],
    related: ["trucking-services", "freight-forwarding", "last-mile-delivery"],
  },
  {
    slug: "secure-warehousing",
    title: "Secure Warehousing",
    category: "Logistics",
    short:
      "Monitored storage for short- and long-term needs, with stock visibility for businesses of all sizes.",
    image: warehousing,
    who: "Businesses needing storage between inbound and outbound movements, including seasonal stock.",
    benefit:
      "A secure holding point for your goods with monitoring and stock visibility before distribution.",
    intro:
      "Our warehousing service gives businesses a secure place to hold goods between movements. Whether you need short-term buffering or longer-term storage, stock is monitored and handled by trained teams.",
    what: [
      "Secure storage for commercial goods and equipment.",
      "Stock receipt, put-away and retrieval handling.",
      "Monitoring of stored goods while in our care.",
      "Coordination with outbound transport when needed.",
    ],
    handles: [
      "Receiving and recording inbound goods.",
      "Safe storage and organisation of stock.",
      "Picking and preparing outbound consignments.",
      "Coordinating handover to transport.",
    ],
    process: [
      { step: "Intake", detail: "Goods are received, counted and recorded on arrival." },
      { step: "Store", detail: "Items are stored securely and organised for retrieval." },
      { step: "Manage", detail: "Stock is monitored while held in the facility." },
      { step: "Outbound", detail: "Goods are prepared and handed to transport on request." },
    ],
    capabilities: [
      "Monitored storage",
      "Inbound and outbound handling",
      "Short- and long-term options",
      "Coordination with transport",
    ],
    advantages: [
      "A secure buffer between supply and demand",
      "Trained handling of stored goods",
      "Flexible short- and long-term storage",
      "Smooth handover into delivery",
    ],
    faqs: [
      { q: "Can I store goods for a short period?", a: "Yes. Both short-term buffering and longer-term storage can be arranged depending on your needs." },
      { q: "Are stored goods monitored?", a: "Goods are monitored while in our care and handled by trained teams." },
    ],
    related: ["freight-transportation", "distribution", "last-mile-delivery"],
  },
  {
    slug: "customs-clearing",
    title: "Customs Clearing",
    category: "Logistics",
    short:
      "Clearing of imported and exported goods, including documentation and port-to-door coordination.",
    image: clearing,
    who: "Importers, exporters and organisations moving goods through ports and borders.",
    benefit:
      "Faster, structured clearing with compliance, documentation and coordination handled for you.",
    intro:
      "Customs clearing is often where delays happen. Umris supports the clearing of imported and exported goods, handling compliance, duty processing, documentation and port-to-door coordination.",
    what: [
      "Coordination of import and export clearing.",
      "Documentation and compliance support.",
      "Duty and processing coordination.",
      "Port-to-door handover after clearance.",
    ],
    handles: [
      "Reviewing shipment and required documents.",
      "Coordinating clearing and duty steps.",
      "Liaising through the clearance process.",
      "Handing cleared goods to onward transport.",
    ],
    process: [
      { step: "Document Review", detail: "We review the shipment and the paperwork required for clearing." },
      { step: "Clearing", detail: "Clearing and duty steps are coordinated on your behalf." },
      { step: "Confirmation", detail: "Once cleared, we confirm readiness for collection or delivery." },
      { step: "Handover", detail: "Goods are handed to onward transport or collected as arranged." },
    ],
    capabilities: [
      "Import and export support",
      "Documentation handling",
      "Compliance coordination",
      "Port-to-door linkage",
    ],
    advantages: [
      "Reduced risk of clearance delays",
      "One coordinator for the process",
      "Clear communication at each step",
      "Linked to our transport network",
    ],
    faqs: [
      { q: "Do you handle both imports and exports?", a: "Yes. We support clearing for both imported and exported goods." },
      { q: "Is customs clearing linked to transport?", a: "Yes. Once goods are cleared we can hand them to our transport network for delivery." },
    ],
    related: ["freight-forwarding", "freight-transportation", "procurement-sourcing"],
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding",
    category: "Logistics",
    short:
      "End-to-end cargo coordination — schedules, documentation, routing and multi-modal logistics.",
    image: forwarding,
    who: "Businesses needing coordinated cargo movement rather than single-leg transport.",
    benefit:
      "A coordinated flow from origin to destination instead of managing each leg yourself.",
    intro:
      "Freight forwarding brings the pieces together. Umris coordinates shipping schedules, documentation, route planning and multi-modal logistics tailored to your business needs.",
    what: [
      "Coordination of cargo from origin to destination.",
      "Schedule and route planning.",
      "Documentation management.",
      "Multi-modal movement where needed.",
    ],
    handles: [
      "Planning the through-route for your cargo.",
      "Coordinating each leg of the movement.",
      "Managing documentation across the chain.",
      "Keeping you updated on progress.",
    ],
    process: [
      { step: "Plan", detail: "We map the route and requirements for your shipment." },
      { step: "Coordinate", detail: "Each leg and document is coordinated end to end." },
      { step: "Move", detail: "Cargo moves via the planned mode and route." },
      { step: "Complete", detail: "Delivery is confirmed and documented." },
    ],
    capabilities: [
      "End-to-end coordination",
      "Route and schedule planning",
      "Documentation management",
      "Multi-modal options",
    ],
    advantages: [
      "One coordinator for the full journey",
      "Fewer hand-off gaps",
      "Planning around your timing",
      "Clear progress visibility",
    ],
    faqs: [
      { q: "What does a freight forwarder do?", a: "We coordinate the full movement of your cargo — route, documents and each leg — so you are not managing separate suppliers." },
      { q: "Can forwarding include local delivery?", a: "Yes. Forwarding can be linked to our local transport and last-mile delivery." },
    ],
    related: ["customs-clearing", "freight-transportation", "last-mile-delivery"],
  },
  {
    slug: "trucking-services",
    title: "Local & Long-Distance Trucking",
    category: "Transportation",
    short:
      "Full-load and less-than-truckload deliveries with nationwide reach and professional drivers.",
    image: trucking,
    who: "Businesses moving goods within a town or across the country.",
    benefit:
      "Reliable trucking with planned routes and tracked movement across Kenya.",
    intro:
      "Our trucking service covers both local distribution and long-distance haulage. We provide full-load (FTL) and less-than-truckload (LTL) deliveries with nationwide reach, professional drivers and tracked movement.",
    what: [
      "Local and long-distance trucking across Kenya.",
      "Full truckload (FTL) and less-than-truckload (LTL).",
      "Professional drivers and planned routing.",
      "Tracked movement of consignments.",
    ],
    handles: [
      "Matching the right vehicle to the load.",
      "Planning the route and schedule.",
      "Securing and moving the cargo.",
      "Confirming delivery at destination.",
    ],
    process: [
      { step: "Match", detail: "We assign the right vehicle and capacity for your load." },
      { step: "Plan", detail: "Route and timing are planned for efficiency." },
      { step: "Transport", detail: "Goods move with tracking and updates." },
      { step: "Deliver", detail: "Delivery is confirmed and signed off." },
    ],
    capabilities: [
      "Nationwide reach",
      "FTL and LTL options",
      "Professional drivers",
      "Tracked movement",
    ],
    advantages: [
      "Coverage from local to long-distance",
      "Load-sized to your shipment",
      "Planned, efficient routing",
      "Movement you can track",
    ],
    faqs: [
      { q: "Do you offer both full and part loads?", a: "Yes. We handle full truckloads and less-than-truckload consignments." },
      { q: "Can I track the truck?", a: "Movement is tracked and we provide status updates through transit." },
    ],
    related: ["freight-transportation", "last-mile-delivery", "distribution"],
  },
  {
    slug: "real-time-tracking",
    title: "Real-Time Cargo Tracking",
    category: "Logistics",
    short:
      "Visibility of your shipment from pickup to destination with status updates.",
    image: tracking,
    who: "Any client who needs to know where their goods are during transit.",
    benefit:
      "Transparency and accountability — you always know where your cargo is.",
    intro:
      "Real-time cargo tracking gives clients visibility from pickup to destination. With monitoring and status updates, you always know where your cargo is — no guesswork, just transparency.",
    what: [
      "Visibility of shipment location during transit.",
      "Status updates at key stages.",
      "Accountability across the movement.",
      "A clearer picture for planning.",
    ],
    handles: [
      "Capturing shipment status at each stage.",
      "Sharing updates with the client.",
      "Flagging any changes promptly.",
      "Confirming final delivery.",
    ],
    process: [
      { step: "Capture", detail: "Status is captured as the shipment moves." },
      { step: "Update", detail: "You receive updates at key stages." },
      { step: "Alert", detail: "Any change is communicated promptly." },
      { step: "Confirm", detail: "Final delivery is confirmed to you." },
    ],
    capabilities: [
      "Transit visibility",
      "Stage-by-stage updates",
      "Proactive communication",
      "Delivery confirmation",
    ],
    advantages: [
      "Less uncertainty about cargo",
      "Better planning for recipients",
      "Accountability built in",
      "Fewer 'where is it?' calls",
    ],
    faqs: [
      { q: "How do I get tracking updates?", a: "We provide status updates through transit, including via WhatsApp where useful." },
      { q: "Is tracking included with transport?", a: "Tracking is part of how we keep clients informed during movement." },
    ],
    related: ["freight-transportation", "trucking-services", "freight-forwarding"],
  },
  {
    slug: "procurement-sourcing",
    title: "Procurement & Sourcing",
    category: "Enterprise Services",
    short:
      "Corporate and industrial sourcing support with transparent vendor management.",
    image: procurement,
    who: "Businesses and organisations that need goods sourced reliably.",
    benefit:
      "Quality goods sourced at competitive prices with transparent vendor management.",
    intro:
      "Our procurement and sourcing support helps businesses acquire quality goods at competitive prices. We manage vendors transparently so you can focus on your operation.",
    what: [
      "Sourcing of goods for business and institutional needs.",
      "Vendor identification and management.",
      "Transparent pricing and process.",
      "Coordination with our logistics for delivery.",
    ],
    handles: [
      "Understanding your sourcing requirement.",
      "Identifying suitable vendors.",
      "Managing the purchase transparently.",
      "Coordinating delivery through our network.",
    ],
    process: [
      { step: "Brief", detail: "We capture your sourcing requirement and specs." },
      { step: "Source", detail: "Suitable vendors and options are identified." },
      { step: "Procure", detail: "Purchase is managed transparently." },
      { step: "Deliver", detail: "Goods are delivered via our logistics." },
    ],
    capabilities: [
      "Business sourcing",
      "Vendor management",
      "Transparent process",
      "Linked delivery",
    ],
    advantages: [
      "One partner for sourcing and delivery",
      "Transparent vendor management",
      "Competitive, clear pricing",
      "Less administrative overhead",
    ],
    faqs: [
      { q: "What kinds of goods can you source?", a: "We support business and institutional sourcing needs; share your requirement for specifics." },
      { q: "Is the process transparent?", a: "Yes. Vendor management and pricing are handled transparently." },
    ],
    related: ["secure-warehousing", "customs-clearing", "corporate-logistics"],
  },
  {
    slug: "last-mile-delivery",
    title: "Last-Mile Delivery",
    category: "Transportation",
    short:
      "Fast, dependable final-mile distribution for e-commerce, retail and corporate clients.",
    image: lastmile,
    who: "E-commerce sellers, retailers and corporate teams needing final delivery.",
    benefit:
      "The final, critical step between your business and the customer handled reliably.",
    intro:
      "Last-mile delivery is where service is felt. Umris bridges the final step between business and customer with fast, dependable distribution for e-commerce, retail and corporate clients.",
    what: [
      "Final-mile delivery to end recipients.",
      "Distribution for e-commerce and retail.",
      "Corporate and institutional deliveries.",
      "Coordination with earlier logistics legs.",
    ],
    handles: [
      "Receiving goods for final delivery.",
      "Planning efficient delivery runs.",
      "Delivering to the end recipient.",
      "Confirming receipt and closure.",
    ],
    process: [
      { step: "Receive", detail: "Goods arrive for final distribution." },
      { step: "Plan", detail: "Delivery runs are planned for efficiency." },
      { step: "Deliver", detail: "Items are delivered to recipients." },
      { step: "Confirm", detail: "Receipt is confirmed and reported." },
    ],
    capabilities: [
      "Recipient-level delivery",
      "E-commerce ready",
      "Retail and corporate",
      "Proof of delivery",
    ],
    advantages: [
      "Reliable final step to customers",
      "Supports e-commerce operations",
      "Efficient local routing",
      "Delivery confirmation",
    ],
    faqs: [
      { q: "Do you support e-commerce delivery?", a: "Yes. We handle last-mile delivery for e-commerce, retail and corporate clients." },
      { q: "Do you confirm delivery?", a: "Deliveries are confirmed on receipt and reported back." },
    ],
    related: ["trucking-services", "distribution", "freight-transportation"],
  },
  {
    slug: "logistics-consultancy",
    title: "Logistics Consultancy",
    category: "Enterprise Services",
    short:
      "Data-driven logistics strategy — route optimisation, planning and cost reduction.",
    image: consultancy,
    who: "Growing businesses wanting to improve their logistics performance.",
    benefit:
      "Practical strategy to improve efficiency and reduce logistics cost.",
    intro:
      "Our logistics consultancy helps growing businesses improve how they move goods. We focus on route optimisation, supply chain planning, cost reduction and operational excellence.",
    what: [
      "Logistics and supply chain strategy.",
      "Route optimisation analysis.",
      "Cost-reduction planning.",
      "Operational improvement recommendations.",
    ],
    handles: [
      "Reviewing your current logistics flow.",
      "Identifying efficiency opportunities.",
      "Recommending practical changes.",
      "Supporting implementation where needed.",
    ],
    process: [
      { step: "Review", detail: "We assess your current logistics setup." },
      { step: "Analyse", detail: "Opportunities for efficiency are identified." },
      { step: "Recommend", detail: "Practical improvements are proposed." },
      { step: "Support", detail: "We help apply changes where useful." },
    ],
    capabilities: [
      "Strategy review",
      "Route optimisation",
      "Cost analysis",
      "Operational guidance",
    ],
    advantages: [
      "Lower, more predictable costs",
      "More efficient routing",
      "Practical, not theoretical",
      "Backed by our operations experience",
    ],
    faqs: [
      { q: "Who is consultancy for?", a: "Growing businesses that want to improve efficiency and reduce logistics cost." },
      { q: "Is it practical?", a: "Yes. Recommendations are grounded in how logistics actually operates." },
    ],
    related: ["freight-forwarding", "distribution", "procurement-sourcing"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

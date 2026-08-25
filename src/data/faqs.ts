export interface FAQ {
  q: string;
  a: string;
}

/* General site FAQs — derived from the original FAQ content. These
   support both on-page SEO and an FAQPage structured-data block. */
export const SITE_FAQ: FAQ[] = [
  {
    q: "What logistics services does Umris Enterprise Logistics provide?",
    a: "We provide transport, warehousing, last-mile delivery, customs clearing, freight forwarding, procurement support and tailored supply-chain solutions for businesses, institutions and organisations across Kenya and East Africa.",
  },
  {
    q: "Where does Umris Enterprise Logistics operate?",
    a: "We operate across Kenya, with regional logistics coordination across East Africa. Local, long-distance and cross-border movements are supported.",
  },
  {
    q: "How can I request a quotation?",
    a: "You can request a quote through our contact form, by WhatsApp, via our Facebook page, or with a direct call. Share your cargo type, origin, destination and timing for an accurate estimate.",
  },
  {
    q: "How far in advance should I book transportation?",
    a: "As early as possible — especially for planned or bulk movements. For urgent needs, contact us and we will confirm availability quickly.",
  },
  {
    q: "Do you offer warehousing and storage?",
    a: "Yes. We offer secure, monitored warehousing for short-term and longer-term storage, with handling and coordination into outbound transport.",
  },
  {
    q: "Can Umris handle large or bulky shipments?",
    a: "Yes. We manage bulk goods, heavy equipment and multi-package consignments with proper loading, handling and route planning.",
  },
  {
    q: "How do I track my shipment?",
    a: "We provide status updates through transit and can share progress via WhatsApp, SMS or direct calls for full transparency.",
  },
  {
    q: "Do you provide humanitarian and emergency logistics?",
    a: "Yes. We support emergency response, relief missions and NGO-based logistics with structured coordination and careful handling.",
  },
  {
    q: "Does Umris handle business cargo?",
    a: "Yes. Commercial cargo — from manufactured goods to medical supplies — is core to our freight and trucking services.",
  },
  {
    q: "How can I contact Umris Enterprise Logistics?",
    a: "By phone on +254 764 268 280, by WhatsApp on the same number, by email at umris.enterprises@gmail.com, or through the contact form on this website.",
  },
];

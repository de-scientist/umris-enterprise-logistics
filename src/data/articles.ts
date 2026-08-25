import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpeg";
import t3 from "../assets/t3.jpeg";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  blocks: Block[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
}

export const ARTICLES: Article[] = [
  {
    slug: "efficient-logistics-backbone-of-business",
    title: "Why Efficient Logistics Is the Backbone of Modern Business",
    excerpt:
      "Your supply chain decides your speed, reliability and customer satisfaction. Here is how a strong logistics partner moves growth.",
    category: "Logistics",
    author: "Umris Enterprise Logistics",
    date: "5 November 2025",
    readTime: "5 min read",
    image: t1,
    blocks: [
      { type: "p", text: "In today's fast-moving Kenyan economy, your supply chain determines your speed, reliability and customer satisfaction. A strong logistics partner does not just move goods — it moves growth. For businesses across manufacturing, retail, agriculture and the humanitarian sector, the difference between winning and losing a customer is often measured in hours and reliability." },
      { type: "h2", text: "Logistics is a business function, not an afterthought" },
      { type: "p", text: "Too many businesses treat logistics as a cost to minimise at the end. In practice, it shapes cash flow, customer trust and operational continuity. When goods arrive on time and in good condition, everything downstream runs better." },
      { type: "h3", text: "What good logistics delivers" },
      { type: "ul", items: [
        "Predictable delivery windows your customers can plan around.",
        "Less capital tied up in buffer stock and emergency fixes.",
        "Fewer damaged or lost consignments.",
        "A clearer view of where goods are at any moment.",
      ] },
      { type: "h2", text: "Where businesses lose momentum" },
      { type: "p", text: "Most delays are not random. They come from weak coordination, unclear communication and routing that was never planned. A logistics partner who plans the route, confirms capacity and keeps you updated removes most of that friction." },
      { type: "quote", text: "A strong logistics partner doesn't just move goods; it moves growth." },
      { type: "h2", text: "Choosing a partner that fits" },
      { type: "p", text: "Look for a provider who can explain their process, not just quote a price. Ask how they handle tracking, what happens if a delivery slips, and how they coordinate multi-leg movements. The answers tell you whether they run an operation or just a fleet." },
      { type: "p", text: "Umris Enterprise Logistics focuses on dependable transport, warehousing and distribution that keep Kenyan businesses moving — with coordination built around your delivery requirements." },
    ],
    faqs: [
      { q: "Why does logistics matter to small businesses?", a: "Reliable logistics protects your reputation and cash flow — late or damaged deliveries cost more than the service itself." },
      { q: "What should I ask a logistics provider?", a: "Ask about tracking, contingency when deliveries slip, and how they coordinate multi-leg movements." },
    ],
    relatedServices: ["freight-transportation", "last-mile-delivery", "secure-warehousing"],
  },
  {
    slug: "real-time-tracking-customer-trust",
    title: "How Real-Time Tracking Improves Customer Trust",
    excerpt:
      "Customers want transparency. Real-time tracking delivers exactly that — and turns visibility into a competitive advantage.",
    category: "Technology",
    author: "Umris Enterprise Logistics",
    date: "29 October 2025",
    readTime: "4 min read",
    image: t2,
    blocks: [
      { type: "p", text: "Customers want transparency, and real-time tracking delivers exactly that. When clients can follow their shipment every step of the way, trust goes up and uncertainty goes down. For companies, visibility is not a luxury — it is a competitive advantage." },
      { type: "h2", text: "From guesswork to certainty" },
      { type: "p", text: "Without tracking, every 'where is my order?' call is a small tax on your team and your customer relationship. With tracking, the answer is already known, and you can share it proactively." },
      { type: "h3", text: "What transparency unlocks" },
      { type: "ul", items: [
        "Fewer inbound 'status' calls to your team.",
        "Faster response when a route or timing changes.",
        "Accountability baked into the movement.",
        "Happier customers who feel in control.",
      ] },
      { type: "h2", text: "Tracking is only as good as the communication" },
      { type: "p", text: "A dot on a map helps, but the real value is in the update. Umris shares status at key stages and through channels clients actually use — including WhatsApp — so the information reaches the right person." },
      { type: "h2", text: "Making visibility part of your brand" },
      { type: "p", text: "When customers expect an update and consistently get one, your brand becomes the reliable choice. That reputation compounds far beyond a single delivery." },
    ],
    faqs: [
      { q: "Does tracking really reduce complaints?", a: "Yes — most 'where is it?' contacts disappear when clients already have the status." },
      { q: "Can tracking work for small shipments?", a: "Absolutely. Tracking adds value at every scale by removing uncertainty." },
    ],
    relatedServices: ["real-time-tracking", "freight-transportation", "trucking-services"],
  },
  {
    slug: "optimizing-delivery-routes-kenya",
    title: "Optimizing Delivery Routes to Reduce Costs in Kenya",
    excerpt:
      "Poor route planning wastes fuel, time and patience. Data-driven routing cuts cost and lifts reliability.",
    category: "Transportation",
    author: "Umris Enterprise Logistics",
    date: "20 October 2025",
    readTime: "5 min read",
    image: t3,
    blocks: [
      { type: "p", text: "Poor route planning leads to fuel wastage, delays and frustrated clients. Data-driven routing analyses traffic, road conditions and delivery clusters to choose the most efficient paths — lowering cost and raising reliability." },
      { type: "h2", text: "Why routing is a financial decision" },
      { type: "p", text: "Every extra kilometre is fuel, driver time and wear. Multiply that across daily runs and small inefficiencies become large, recurring costs. Good routing is one of the highest-return improvements available to a logistics operation." },
      { type: "h3", text: "Factors that shape a good route" },
      { type: "ul", items: [
        "Real road and traffic conditions, not just distance.",
        "Clustering deliveries to avoid backtracking.",
        "Vehicle size matched to the load.",
        "Buffer time for the unexpected.",
      ] },
      { type: "h2", text: "Reliability follows efficiency" },
      { type: "p", text: "Efficient routes are also more dependable routes. When drivers are not racing to recover lost time, handling improves and delivery windows hold. The result is lower cost and happier customers at the same time." },
      { type: "quote", text: "The result? Lower operational costs, faster deliveries, and happier customers." },
      { type: "h2", text: "Practical first steps" },
      { type: "ol", items: [
        "Map your regular origins, destinations and volumes.",
        "Group deliveries by area and day.",
        "Review actual versus planned times each week.",
        "Adjust routing and capacity based on what the data shows.",
      ] },
    ],
    faqs: [
      { q: "Can routing help a small business?", a: "Yes. Even a few regular routes benefit from clustering and better planning." },
      { q: "Does route optimisation hurt delivery speed?", a: "Done well, it improves both speed and cost by removing wasted movement." },
    ],
    relatedServices: ["trucking-services", "last-mile-delivery", "logistics-consultancy"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

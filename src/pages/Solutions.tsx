import { Link } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import CtaBand from "../components/sections/CtaBand";
import Reveal from "../components/ui/Reveal";
import QuoteCalculator from "../components/logistics/QuoteCalculator";
import { SERVICES } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

const SOLUTIONS = [
  {
    title: "E-commerce Logistics",
    desc: "Last-mile delivery with confirmation — the dependable final step between your store and the customer.",
    link: "/industries/ecommerce",
    service: "Last-mile delivery",
  },
  {
    title: "Business Logistics",
    desc: "Freight, trucking and distribution for SMEs, corporates and manufacturers moving goods regularly.",
    link: "/services/freight-transportation",
    service: "Freight & trucking",
  },
  {
    title: "Import & Export",
    desc: "Customs clearing support plus port-to-door handover for goods moving through Mombasa and borders.",
    link: "/services/customs-clearing",
    service: "Clearing & forwarding",
  },
  {
    title: "Fulfilment & Storage",
    desc: "Secure warehousing between inbound and outbound movements, with handling and stock visibility.",
    link: "/services/secure-warehousing",
    service: "Warehousing",
  },
  {
    title: "Distribution",
    desc: "Planned delivery runs for retail, institutional and corporate recipients across Kenya.",
    link: "/services/last-mile-delivery",
    service: "Distribution",
  },
];

/** /solutions — bundles services into buyer-oriented outcomes. */
export default function Solutions() {
  useSeo({
    title: "Logistics Solutions",
    description:
      "Logistics solutions for e-commerce, business freight, import and export, fulfilment and distribution across Kenya and East Africa.",
    path: "/solutions",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Solutions", path: "/solutions" }])]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Solutions" }]} />
          <h1>Solutions shaped around your operation</h1>
          <p>
            Services are what we do. Solutions are how they fit your business —
            from a single shipment to managed movement of goods.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SOLUTIONS.map((s) => (
              <Reveal key={s.title}>
                <Link to={s.link} className="card card--interactive" style={{ display: "block", height: "100%" }}>
                  <span className="chip">{s.service}</span>
                  <h2 className="h3 mt-2">{s.title}</h2>
                  <p className="text-muted mt-2">{s.desc}</p>
                  <span className="service-card__link">Explore →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container container-narrow">
          <h2 className="text-center">Estimate a solution</h2>
          <p className="text-center text-muted">Illustrative guide — final pricing subject to confirmation.</p>
          <div className="mt-4">
            <QuoteCalculator />
          </div>
          <p className="text-center mt-4">
            Related services:{" "}
            {SERVICES.slice(0, 4).map((s, i) => (
              <span key={s.slug}>
                {i > 0 && " · "}
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <CtaBand title="Not sure which solution fits?" text="Describe your operation and we'll recommend the right setup." />
    </>
  );
}

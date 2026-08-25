import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { SERVICES, type Service } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

const CATEGORIES: Service["category"][] = [
  "Transportation",
  "Logistics",
  "Enterprise Services",
];

export default function Services() {
  useSeo({
    title: "Logistics & Transportation Services",
    description:
      "Explore Umris Enterprise Logistics services: freight transport, warehousing, customs clearing, forwarding, trucking, tracking, procurement, last-mile delivery and consultancy.",
    path: "/services",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Services", path: "/services" }])]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Services" }]} />
          <h1>Logistics services for every movement</h1>
          <p>
            Umris covers the full journey of your goods — transport, storage,
            clearing and final delivery — coordinated as one operation.
          </p>
        </div>
      </section>

      {CATEGORIES.map((cat) => (
        <section className="section" key={cat} style={{ paddingTop: cat === CATEGORIES[0] ? "var(--space-7)" : undefined }}>
          <div className="container">
            <SectionHeading align="left" eyebrow={cat} title={cat === "Transportation" ? "Transportation" : cat === "Logistics" ? "Logistics & Handling" : "Enterprise Services"} />
            <div className="grid-3">
              {SERVICES.filter((s) => s.category === cat).map((s) => (
                <Reveal key={s.slug}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Not sure which service you need?" text="Tell us what you're moving and we'll recommend the right combination." />
    </>
  );
}

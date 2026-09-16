import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import CoverageAreas from "../components/sections/CoverageAreas";
import PageHero from "../components/ui/PageHero";
import { SERVICES, type Service } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";
import servicesHero from "../assets/t2.jpeg";

const CATEGORIES: Service["category"][] = [
  "Transportation",
  "Logistics",
  "Enterprise Services",
];

export default function Services() {
  useSeo({
    title: "Logistics & Transportation Services | Umri's Enterprises",
    description:
      "Explore Umri's Enterprises logistics services: freight transport, warehousing, customs clearing, forwarding, trucking, last-mile delivery and consultancy across Kenya.",
    path: "/services",
    image: "/logo512.png",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Services", path: "/services" }])]} />
      <PageHero
        eyebrow="Transportation & Logistics"
        title="Moving With Precision."
        description="Umri's covers the full journey of your goods — transport, storage, clearing and final delivery — coordinated as one operation."
        image={servicesHero}
        imageAlt="Umri's Enterprises trucks loaded with labelled cargo cartons, prepared for transit"
        crumbs={[{ name: "Services" }]}
        actions={[{ label: "Request a Quote", to: "/quote", variant: "accent" }]}
      />

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

      {/* COVERAGE */}
      <CoverageAreas heading="Logistics Coverage That Goes Further" />

      <CtaBand title="Not sure which service you need?" text="Tell us what you're moving and we'll recommend the right combination." />
    </>
  );
}

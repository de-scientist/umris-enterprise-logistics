import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import PageHero from "../components/ui/PageHero";
import { INDUSTRIES } from "../data/industries";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

export default function Industries() {
  useSeo({
    title: "Industries We Serve | Umri's Enterprises",
    description:
      "Umri's Enterprises serves humanitarian, medical, manufacturing, retail, agriculture, construction, e-commerce and corporate clients across Kenya.",
    path: "/industries",
    image: "/logo512.png",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Industries", path: "/industries" }])]} />
      <PageHero
        eyebrow="Industries"
        title="Logistics tailored to your industry"
        description="Every sector moves goods differently. Here is the logistics problem each faces — and how Umri's solves it."
        image="/testimonials/t5.jpeg"
        imageAlt="Umri's Enterprises truck at a county government health facility in Kenya"
        crumbs={[{ name: "Industries" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {INDUSTRIES.map((ind) => (
              <Reveal key={ind.slug}>
                <article className="industry-card" style={{ height: "100%" }}>
                  <span className="industry-card__icon" aria-hidden>{ind.icon}</span>
                  <h3>{ind.name}</h3>
                  <p><strong style={{ color: "var(--color-ink)" }}>The problem:</strong> {ind.problem}</p>
                  <p><strong style={{ color: "var(--color-primary)" }}>Our solution:</strong> {ind.solution}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your industry, your logistics challenge"
        text="Tell us about your operation and we'll shape a solution around it."
      />
    </>
  );
}

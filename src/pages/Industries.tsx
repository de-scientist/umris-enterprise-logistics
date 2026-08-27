import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { INDUSTRIES } from "../data/industries";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

export default function Industries() {
  useSeo({
    title: "Industries We Serve",
    description:
      "Umris Enterprise Logistics serves humanitarian, medical, manufacturing, retail, agriculture, construction, e-commerce and corporate clients across Kenya.",
    path: "/industries",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Industries", path: "/industries" }])]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Industries" }]} />
          <h1>Logistics tailored to your industry</h1>
          <p>
            Every sector moves goods differently. Here is the logistics problem
            each faces — and how Umris solves it.
          </p>
        </div>
      </section>

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

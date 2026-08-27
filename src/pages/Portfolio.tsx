import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { PROJECTS } from "../data/projects";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

export default function Portfolio() {
  useSeo({
    title: "Portfolio & Case Studies",
    description:
      "See how Umris Enterprise Logistics coordinates freight, relief and cross-border logistics for partners across Kenya and East Africa.",
    path: "/portfolio",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }])]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Portfolio" }]} />
          <h1>Work that keeps things moving</h1>
          <p>
            Selected engagements that show how Umris coordinates logistics under
            real operational conditions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="text-muted mb-4" style={{ fontSize: "1.4rem" }}>
            Note: partner names are shown only where originally attributed; outcomes
            are described qualitatively. Umris should confirm details before public use.
          </p>
          <div className="stack">
            {PROJECTS.map((p) => (
              <Reveal key={p.slug}>
                <article className="card" style={{ display: "grid", gridTemplateColumns: "minmax(220px, 1fr) 2fr", gap: "var(--space-5)" }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: "var(--radius-md)" }} loading="lazy" />
                  <div>
                    <span className="chip">{p.industry}</span>
                    <h3 className="mt-2" style={{ fontSize: "2.2rem" }}>{p.title}</h3>
                    <p className="text-muted" style={{ fontSize: "1.4rem" }}>
                      {p.client} · {p.location} · {p.service}
                    </p>
                    <div className="mt-3 stack" style={{ gap: "0.8rem" }}>
                      <p><strong style={{ color: "var(--color-ink)" }}>Challenge:</strong> {p.challenge}</p>
                      <p><strong style={{ color: "var(--color-ink)" }}>Solution:</strong> {p.solution}</p>
                      <p><strong style={{ color: "var(--color-primary)" }}>Outcome:</strong> {p.outcome}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have a similar logistics challenge?" text="Let's talk about how Umris can support your operation." />
    </>
  );
}

import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/sections/CtaBand";
import { PROJECTS } from "../data/projects";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

/**
 * /case-studies — honest case-study structure (Challenge / Approach /
 * Solution / Result). Partner names shown only where originally
 * attributed; placeholders where real data is pending.
 */
export default function CaseStudies() {
  useSeo({
    title: "Case Studies",
    description:
      "How Umri's Enterprises Logistics coordinates freight, relief and cross-border logistics — challenges, approaches and outcomes.",
    path: "/case-studies",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Case Studies", path: "/case-studies" }])]} />
      <PageHero
        eyebrow="Our Work"
        title="Logistics challenges, solved in the field"
        description="Selected engagements showing how Umri's coordinates movement under real operational conditions. Detailed metrics are published only where verified with partners."
        crumbs={[{ name: "Case Studies" }]}
      />

      <section className="section">
        <div className="container">
          <div className="stack">
            {PROJECTS.map((p) => (
              <Reveal key={p.slug}>
                <article className="card case-card">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div>
                    <span className="chip">{p.industry}</span>
                    <h2 className="h3 mt-2">{p.title}</h2>
                    <p className="text-muted text-sm">{p.client} · {p.location} · {p.service}</p>
                    <dl className="case-card__grid">
                      <div><dt>Challenge</dt><dd>{p.challenge}</dd></div>
                      <div><dt>Approach</dt><dd>{p.solution}</dd></div>
                      <div><dt>Result</dt><dd>{p.outcome}</dd></div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="answer-block mt-5">
            <h2 className="h3">Have a logistics challenge of your own?</h2>
            <p>
              Share your cargo, route and timing — Umri's will confirm whether
              the operation fits and propose a plan.{" "}
              <Link to="/quote">Request a quote →</Link>
            </p>
          </div>

          <p className="text-center text-muted mt-4">
            Also filed under <Link to="/portfolio">Portfolio →</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Your operation could be next" text="Tell us about the goods you need to move." />
    </>
  );
}

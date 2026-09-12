import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/sections/CtaBand";
import Faq from "../components/ui/Faq";
import NotFound from "./NotFound";
import { INDUSTRIES } from "../data/industries";
import { SERVICES } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

/** /industries/:slug — SEO/GEO detail page per industry. */
export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  useSeo({
    title: industry ? `${industry.name} Logistics` : "Industry",
    description: industry
      ? `${industry.name} logistics in Kenya: ${industry.solution}`
      : "Industry logistics solutions in Kenya.",
    path: `/industries/${slug ?? ""}`,
  });

  if (!industry) return <NotFound />;

  const related = SERVICES.slice(0, 3);
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: `/industries/${industry.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Industries"
        title={`${industry.name} logistics in Kenya`}
        description={industry.solution}
        crumbs={[{ name: "Industries", to: "/industries" }, { name: industry.name }]}
        actions={[
          { label: "Get a Quote", to: "/quote", variant: "accent" },
          { label: "Talk to the team", to: "/contact", variant: "light" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">The challenge</span>
              <h2>What {industry.name.toLowerCase()} operations face</h2>
              <p className="text-lead">{industry.problem}</p>
              <span className="eyebrow mt-4">The Umri's solution</span>
              <p className="mt-2">{industry.solution}</p>
              <h3 className="h4 mt-4">How it works</h3>
              <ol className="track-how">
                <li><strong>Request a quote</strong> — share cargo, route and timing.</li>
                <li><strong>Plan &amp; confirm</strong> — capacity, handling and schedule agreed.</li>
                <li><strong>Move with visibility</strong> — status updates through transit.</li>
                <li><strong>Deliver &amp; confirm</strong> — receipt confirmed at destination.</li>
              </ol>
            </div>
            <div className="split__media">
              <div className="industry-hero-icon" aria-hidden>
                {industry.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <h2 className="text-center">Related services</h2>
          <div className="grid-3 mt-4">
            {related.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card card--interactive" style={{ display: "block" }}>
                <h3 style={{ fontSize: "1.9rem" }}>{s.title}</h3>
                <p className="text-muted mt-2">{s.short}</p>
                <span className="service-card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="answer-block">
            <h2 className="h3">Who is this for?</h2>
            <p>
              {industry.name} businesses, institutions and organisations moving
              goods across Kenya and East Africa — from single consignments to
              regular distribution. If your operation matches the challenge
              above, Umri's can coordinate the movement.
            </p>
          </div>
          <div className="mt-4">
            <Faq
              items={[
                {
                  q: `Does Umri's handle ${industry.name.toLowerCase()} logistics?`,
                  a: industry.solution,
                },
                {
                  q: "How do I get started?",
                  a: "Request a quote with your cargo type, origin, destination and timing. The team confirms the plan and pricing from there.",
                },
              ]}
            />
          </div>
          <p className="text-center text-muted mt-5">
            Explore:{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && " · "}
                <Link to={`/industries/${o.slug}`}>{o.name}</Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <CtaBand title={`${industry.name} goods to move?`} text="Request a quote and we'll shape the logistics around your operation." />
    </>
  );
}

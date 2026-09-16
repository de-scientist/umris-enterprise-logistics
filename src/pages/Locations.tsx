import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/sections/CtaBand";
import Reveal from "../components/ui/Reveal";
import { LOCATIONS } from "../data/locations";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";
import { COVERAGE_AREAS } from "../data/coverageAreas";
import locationsHero from "../assets/truck5.jpg";

/** /locations — honest coverage. Only areas Umri's actually serves. */
export default function Locations() {
  useSeo({
    title: "Areas We Serve in Kenya | Umri's Enterprises",
    description:
      "Umri's Enterprises provides transportation and logistics support across 13 counties in Kenya, including Meru, Makueni, Samburu, Taita-Taveta, Nyandarua, Kajiado, Nakuru, Laikipia, Kitui, Kwale, Embu, Machakos and Lamu.",
    path: "/locations",
    image: "/logo512.png",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Coverage", path: "/locations" }])]} />
      <PageHero
        eyebrow="Coverage"
        title="Where Umri's operates"
        description="Nationwide logistics across Kenya, coordinated from Genesis House in Naivasha, with port links in Mombasa and regional coordination across East Africa. We serve selected counties across Kenya."
        image={locationsHero}
        imageAlt="Umri's Enterprises transportation truck ready for dispatch in Kenya"
        crumbs={[{ name: "Coverage" }]}
      />

      {/* COUNTY COVERAGE LIST */}
      <section className="section" aria-label="County coverage areas">
        <div className="container">
          <div className="answer-block">
            <h2 className="h3">Our current coverage areas</h2>
            <p>
              Umri's Enterprises provides transportation and logistics support across selected counties in Kenya. Our current coverage includes:
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: "var(--space-4)" }}>
            {COVERAGE_AREAS.map((area) => (
              <Reveal key={area.slug}>
                <article className="card">
                  <span className="coverage-card__name" style={{ fontSize: "1.6rem" }}>{area.name}</span>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="answer-block mt-5">
            <h2 className="h3">Regional and cross-border coordination</h2>
            <p>
              Beyond the listed counties, Umri's coordinates logistics
              across Kenya and into neighbouring East African markets on
              request. Share your origin and destination when requesting a
              quote and the team will confirm availability.
            </p>
            <p className="mt-3">
              <Link to="/quote" className="btn btn--primary">Check your route →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL HUB */}
      <section className="section section--surface">
        <div className="container">
          <div className="grid-3">
            {LOCATIONS.map((l) => (
              <Reveal key={l.slug}>
                <article className="card card--interactive" style={{ height: "100%" }}>
                  <span className="chip">{l.type}</span>
                  <h2 className="h3 mt-2">{l.name}</h2>
                  <p className="text-muted mt-2">{l.summary}</p>
                  <p className="mt-3" style={{ fontSize: "1.4rem", color: "var(--color-primary)", fontWeight: 600 }}>
                    {l.presence}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Moving goods on one of these routes?" text="Request a quote with your origin and destination." />
    </>
  );
}

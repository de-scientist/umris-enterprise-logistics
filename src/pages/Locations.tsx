import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/sections/CtaBand";
import Reveal from "../components/ui/Reveal";
import { LOCATIONS } from "../data/locations";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";
import locationsHero from "../assets/truck5.jpg";

/** /locations — honest coverage. Only areas Umri's actually serves. */
export default function Locations() {
  useSeo({
    title: "Coverage & Locations",
    description:
      "Umri's Enterprises Logistics operates from Genesis House in Naivasha, Kenya, with coverage across Kenya and regional coordination across East Africa.",
    path: "/locations",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Coverage", path: "/locations" }])]} />
      <PageHero
        eyebrow="Coverage"
        title="Where Umri's operates"
        description="Nationwide logistics across Kenya, coordinated from Genesis House in Naivasha, with port links in Mombasa and regional coordination across East Africa. Only areas we genuinely serve are listed here."
        image={locationsHero}
        imageAlt="Umri's Enterprises transportation truck ready for dispatch in Kenya"
        crumbs={[{ name: "Coverage" }]}
      />

      <section className="section">
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

          <div className="answer-block mt-5">
            <h2 className="h3">What areas does Umri's serve?</h2>
            <p>
              Umri's serves clients across Kenya — including Nairobi, Naivasha,
              Nakuru, Eldoret and Mombasa corridors — and coordinates
              cross-border movement into neighbouring East African markets on
              request. Share your origin and destination when requesting a
              quote and the team will confirm coverage.
            </p>
            <p className="mt-3">
              <Link to="/quote" className="btn btn--primary">Check your route →</Link>
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Moving goods on one of these routes?" text="Request a quote with your origin and destination." />
    </>
  );
}

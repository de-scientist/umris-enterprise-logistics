import { useParams, Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Faq from "../components/ui/Faq";
import CtaBand from "../components/sections/CtaBand";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { getService, SERVICES } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, serviceSchema, breadcrumbSchema } from "../lib/schema";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <NotFound />;

  useSeo({
    title: `${service.title} in Kenya`,
    description: service.short,
    path: `/services/${service.slug}`,
  });

  const related = service.related
    .map((r) => SERVICES.find((s) => s.slug === r))
    .filter(Boolean) as typeof SERVICES;

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Services", to: "/services" }, { name: service.title }]} />
          <span className="chip" style={{ marginBottom: "1.2rem" }}>{service.category}</span>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <div className="mt-4 flex gap-3 wrap">
            <Link to="/contact" className="btn btn--accent btn--lg">Request a Quote</Link>
            <Link to="/services" className="btn btn--light btn--lg">All services</Link>
          </div>
        </div>
      </section>

      {/* Who & benefit */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img src={service.image} alt={service.title} />
          </div>
          <div>
            <span className="eyebrow">Who it's for</span>
            <h2>Built for businesses that move goods</h2>
            <p>{service.who}</p>
            <p className="mt-3"><strong>Benefit:</strong> {service.benefit}</p>
          </div>
        </div>
      </section>

      {/* What Umris handles */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeading align="left" eyebrow="What we do" title={`What ${service.title.toLowerCase()} covers`} />
          <div className="grid-3">
            {service.what.map((w, i) => (
              <Reveal key={i}><div className="card"><h3 style={{ fontSize: "1.8rem" }}><FaCheck style={{ color: "var(--color-accent)", marginRight: 8 }} />{w}</h3></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="Our process" />
          <div className="why-grid">
            {service.process.map((p, i) => (
              <div className="why-item" key={i}>
                <span className="why-item__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.step}</h3>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + Advantages */}
      <section className="section section--surface">
        <div className="container split">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2>What we bring to the table</h2>
            <ul className="mt-3" style={{ listStyle: "none", display: "grid", gap: "1rem" }}>
              {service.capabilities.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <FaCheck style={{ color: "var(--color-primary)", marginTop: 4 }} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Advantages</span>
            <h2>Why businesses choose this service</h2>
            <ul className="mt-3" style={{ listStyle: "none", display: "grid", gap: "1rem" }}>
              {service.advantages.map((a, i) => (
                <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <FaCheck style={{ color: "var(--color-accent)", marginTop: 4 }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Good to know" title={`${service.title} — FAQs`} />
            <Faq items={service.faqs} />
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section section--surface">
          <div className="container">
            <SectionHeading align="left" eyebrow="Related" title="Related services" />
            <div className="grid-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="card card--interactive" style={{ display: "block" }}>
                  <h3 style={{ fontSize: "1.8rem" }}>{r.title}</h3>
                  <p className="text-muted mt-2" style={{ fontSize: "1.4rem" }}>{r.short}</p>
                  <span className="service-card__link mt-3">Explore <FaArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Need ${service.title.toLowerCase()}?`} text="Share your requirement and we'll prepare a clear quotation." topic={service.title} />
    </>
  );
}

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import Capabilities from "../components/sections/Capabilities";
import CtaBand from "../components/sections/CtaBand";
import ServiceCard from "../components/ServiceCard";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Faq from "../components/ui/Faq";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { PROJECTS } from "../data/projects";
import { ARTICLES } from "../data/articles";
import { SITE_FAQ } from "../data/faqs";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, websiteSchema, localBusinessSchema, faqSchema } from "../lib/schema";
import aboutImg from "../assets/t3.jpeg";

export default function Home() {
  useSeo({
    title: `Logistics & Transportation Services in Kenya`,
    description:
      "Umris Enterprise Logistics provides reliable freight, warehousing, distribution and transport solutions across Kenya and East Africa. Request a quote today.",
    path: "/",
  });

  const previewServices = SERVICES.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[organizationSchema(), websiteSchema(), localBusinessSchema(), faqSchema()]}
      />
      <Hero />
      <TrustStrip />

      <HowItWorks />

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Logistics services built around your operation"
            intro="From single shipments to managed supply chains, Umris covers the movement of goods end to end."
          />
          <div className="grid-3">
            {previewServices.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn--ghost btn--lg">
              View all services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Split feature */}
      <section className="section section--surface">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>We move business forward</h2>
            <p>
              Umris Enterprise Logistics exists to keep Kenyan businesses moving.
              Whether it is freight across the country, storage between movements,
              or the final delivery to a customer, we coordinate each step with
              care and clear communication.
            </p>
            <p>
              Our work spans commercial cargo, medical and relief supplies, and
              institutional logistics — always with the same standard of
              reliability.
            </p>
            <div className="mt-4 flex gap-3 wrap">
              <Link to="/about" className="btn btn--primary">About Umris</Link>
              <Link to="/portfolio" className="btn btn--ghost">See our work</Link>
            </div>
          </div>
          <div className="split__media">
            <img src={aboutImg} alt="Umris logistics operation" loading="lazy" />
          </div>
        </div>
      </section>

      <WhyUs />

      <Capabilities />

      {/* Industries preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Logistics that fits your sector"
            intro="Different industries face different logistics problems. Here is how Umris solves them."
          />
          <div className="grid-3">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <Reveal key={ind.slug}>
                <article className="industry-card">
                  <span className="industry-card__icon" aria-hidden>{ind.icon}</span>
                  <h3>{ind.name}</h3>
                  <p>{ind.solution}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/industries" className="btn btn--ghost btn--lg">
              Explore industries <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Portfolio preview */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Proof in the field"
            title="Selected work"
            intro="A look at the kinds of logistics challenges Umris coordinates."
          />
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <Reveal key={p.slug}>
                <Link to={`/portfolio`} className="card card--interactive" style={{ display: "block" }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: "var(--radius-md)", marginBottom: "1.2rem" }} loading="lazy" />
                  <span className="chip">{p.industry}</span>
                  <h3 className="mt-2" style={{ fontSize: "1.9rem" }}>{p.title}</h3>
                  <p className="text-muted mt-2" style={{ fontSize: "1.4rem" }}>{p.challenge}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/portfolio" className="btn btn--primary btn--lg">View portfolio</Link>
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Logistics thinking for growing businesses"
            intro="Practical perspectives on moving goods efficiently in Kenya."
          />
          <div className="grid-3">
            {ARTICLES.slice(0, 3).map((a) => (
              <Reveal key={a.slug}>
                <Link to={`/insights/${a.slug}`} className="card card--interactive" style={{ display: "block", height: "100%" }}>
                  <img src={a.image} alt={a.title} style={{ width: "100%", height: 170, objectFit: "cover", borderRadius: "var(--radius-md)", marginBottom: "1.2rem" }} loading="lazy" />
                  <span className="chip">{a.category}</span>
                  <h3 className="mt-2" style={{ fontSize: "1.9rem" }}>{a.title}</h3>
                  <p className="text-muted mt-2" style={{ fontSize: "1.4rem" }}>{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/insights" className="btn btn--ghost btn--lg">Read insights</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <Faq items={SITE_FAQ} />
        </div>
      </section>

      <Gallery />
      <CtaBand />
    </>
  );
}

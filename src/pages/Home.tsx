import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import WhyUs from "../components/sections/WhyUs";
import HowItWorks from "../components/sections/HowItWorks";
import Capabilities from "../components/sections/Capabilities";
import SuccessStories from "../components/sections/SuccessStories";
import CtaBand from "../components/sections/CtaBand";
import ServiceCard from "../components/ServiceCard";
import NetworkVisual from "../components/logistics/NetworkVisual";
import QuoteCalculator from "../components/logistics/QuoteCalculator";
import CoverageAreas from "../components/sections/CoverageAreas";
import Faq from "../components/ui/Faq";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { SERVICES } from "../data/services";
import { INDUSTRIES } from "../data/industries";
import { ARTICLES } from "../data/articles";
import { SITE_FAQ } from "../data/faqs";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, websiteSchema, localBusinessSchema, faqSchema } from "../lib/schema";
import aboutImg from "../assets/t3.jpeg";

/**
 * Homepage order (§51): hero → trust strip → services →
 * why → how → industries → network → coverage → calculator → insights → FAQ → CTA.
 */
export default function Home() {
  useSeo({
    title: "Umri's Enterprises | Logistics & Transportation in Kenya",
    description:
      "Since 2017, Umri's Enterprises has provided exceptional transportation and logistics services across Kenya. Trusted transport, warehousing, and distribution solutions for businesses.",
    path: "/",
    image: "/logo512.png",
  });

  const previewServices = SERVICES.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[organizationSchema(), websiteSchema(), localBusinessSchema(), faqSchema()]}
      />
      <Hero />
      <TrustStrip />

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Logistics services built around your operation"
            intro="From single shipments to managed supply chains, Umri's covers the movement of goods end to end."
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

      {/* COVERAGE AREAS */}
      <CoverageAreas />

      {/* WHO WE ARE split */}
      <section className="section section--surface">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Logistics built around reliability</h2>
            <p>
              Umri's Enterprises exists to keep Kenyan businesses moving.
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
              <Link to="/about" className="btn btn--primary">About Umri's</Link>
              <Link to="/case-studies" className="btn btn--ghost">See our work</Link>
            </div>
          </div>
          <div className="split__media">
            <img src={aboutImg} alt="Umri's logistics operation" loading="lazy" />
          </div>
        </div>
      </section>

      <WhyUs />

      <HowItWorks />

      <Capabilities />

      {/* SUCCESS STORIES — visual proof of work, before sector content */}
      <SuccessStories />

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Logistics that fits your sector"
            intro="Different industries face different logistics problems. Here is how Umri's solves them."
          />
          <div className="grid-3">
            {INDUSTRIES.slice(0, 6).map((ind) => (
              <Reveal key={ind.slug}>
                <Link to={`/industries/${ind.slug}`} className="industry-card" style={{ height: "100%" }}>
                  <span className="industry-card__icon" aria-hidden>{ind.icon}</span>
                  <h3>{ind.name}</h3>
                  <p>{ind.solution}</p>
                  <span className="service-card__link">Explore →</span>
                </Link>
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

      {/* LOGISTICS NETWORK */}
      <section className="section section--ink" aria-label="Logistics network">
        <div className="container">
          <NetworkVisual />
        </div>
      </section>

      {/* QUOTE CALCULATOR */}
      <section className="section" aria-label="Estimate your shipment">
        <div className="container container-narrow">
          <SectionHeading
            eyebrow="Pricing guide"
            title="Estimate your shipment in seconds"
            intro="Illustrative rates to guide your budget — final pricing is always confirmed with an official quote."
          />
          <QuoteCalculator />
        </div>
      </section>

      {/* FEATURED INSIGHTS */}
      <section className="section section--surface">
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
      <section className="section">
        <div className="container container-narrow">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <Faq items={SITE_FAQ.slice(0, 6)} />
          <div className="text-center mt-4">
            <Link to="/faq" className="btn btn--ghost">View all FAQs</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

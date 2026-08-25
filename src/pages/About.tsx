import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Testimonials from "../components/Testimonials";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";
import { SITE } from "../data/siteConfig";
import truck from "../assets/truck1.jpg";
import team from "../assets/t3.jpeg";

const VALUES = [
  { title: "Reliability", text: "We do what we say we will — because your operation depends on it." },
  { title: "Professionalism", text: "Trained handling and clear communication at every step." },
  { title: "Efficiency", text: "Smart routing and coordination that save time and cost." },
  { title: "Accountability", text: "Tracking and confirmation so you always know the status." },
  { title: "Partnership", text: "We work with you, not just for you." },
];

const CAPABILITIES = [
  "Freight transport across Kenya & East Africa",
  "Secure warehousing and storage",
  "Customs clearing and freight forwarding",
  "Local, long-distance and cross-border trucking",
  "Real-time cargo tracking",
  "Procurement support and logistics consultancy",
];

export default function About() {
  useSeo({
    title: "About Umris Enterprise Logistics",
    description:
      "Umris Enterprise Logistics is a Kenyan logistics partner providing reliable transport, warehousing and distribution for businesses, institutions and NGOs.",
    path: "/about",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "About", path: "/about" }])]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "About" }]} />
          <h1>About {SITE.name}</h1>
          <p>{SITE.positioning}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A logistics partner built on dependability</h2>
            <p>
              {SITE.name} exists to keep businesses, institutions and relief
              efforts moving. We coordinate the movement of goods with the same
              care whether it is a single urgent delivery or a managed supply
              chain.
            </p>
            <p className="mt-3">
              From our base in {SITE.hq.city}, we serve {SITE.serviceArea},
              combining transport, storage and coordination into one dependable
              operation.
            </p>
          </div>
          <div className="split__media">
            <img src={team} alt="Umris team at work" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split split--reverse">
          <div className="split__media">
            <img src={truck} alt="Umris truck on the road" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>Plan. Coordinate. Deliver. Confirm.</h2>
            <p>
              Every movement starts with understanding your requirement, then
              planning the route, capacity and handling. We coordinate the
              execution and keep you informed — confirming delivery so there are
              no loose ends.
            </p>
            <p className="mt-3">
              This approach is what lets us support both commercial cargo and
              sensitive relief logistics with the same standard.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading align="left" eyebrow="Our capabilities" title="What Umris handles" />
          <div className="grid-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={i}>
                <div className="card">
                  <h3 style={{ fontSize: "1.8rem" }}>
                    <FaCheck style={{ color: "var(--color-accent)", marginRight: 8 }} />
                    {c}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="why-grid">
            {VALUES.map((v, i) => (
              <div className="why-item" key={v.title}>
                <span className="why-item__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand title="Work with a logistics partner you can trust" text="Tell us what you need moved and we'll take it from there." />
    </>
  );
}

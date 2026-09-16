import { FaHandshake, FaScaleBalanced, FaEye } from "react-icons/fa6";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import CoverageAreas from "../components/sections/CoverageAreas";
import PageHero from "../components/ui/PageHero";
import SuccessStories from "../components/sections/SuccessStories";
import Testimonials from "../components/Testimonials";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";
import { SITE } from "../data/siteConfig";
import { COMPANY, COMPANY_VALUES } from "../data/company";

const VALUE_ICONS = [FaHandshake, FaScaleBalanced, FaEye];

export default function About() {
  useSeo({
    title: "About Umri's Enterprises | Kenyan Logistics & Transportation",
    description:
      "Since 2017, Umri's Enterprises has provided exceptional transportation services across Kenya. Building partnerships on trust, delivering excellence through integrity and efficiency.",
    path: "/about",
    image: "/logo512.png",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "About", path: "/about" }])]} />

      {/* ABOUT HERO */}
      <PageHero
        eyebrow="About Umri's Enterprises"
        title={
          <>
            Built on Trust.
            <br />
            Driven by Excellence.
          </>
        }
        description="Since 2017, Umri's Enterprises has built partnerships through reliable transportation, integrity, efficiency, and a commitment to excellence."
        image="/testimonials/t1.jpeg"
        imageAlt="Umri's Enterprises truck offloading labelled medical supply cartons at a county health facility in Kenya"
        crumbs={[{ name: "About" }]}
        actions={[
          { label: "Explore Our Services", to: "/services", variant: "accent" },
          { label: "Get in Touch", to: "/contact", variant: "light" },
        ]}
        tagline
        eager
      />

      {/* ABOUT UMRI'S ENTERPRISES */}
      <section className="section">
        <div className="container container-narrow text-center">
          <span className="eyebrow">About Umri's Enterprises</span>
          <h2 className="mt-2">Transportation, built on trust since 2017</h2>
          <p className="mt-3" style={{ fontSize: "1.8rem", lineHeight: 1.7 }}>
            {COMPANY.about}
          </p>
          <p className="mt-3 text-muted">
            Operating from {SITE.hq.label} in {SITE.hq.city},{" "}
            {SITE.hq.country} — {SITE.serviceArea.toLowerCase()}.
          </p>
        </div>
      </section>

      {/* COMPANY STORY — SINCE 2017 */}
      <section className="section section--surface">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Our story</span>
              <p className="story-year" aria-label="Established 2017">2017</p>
              <h2>The year it began</h2>
              <p>
                {COMPANY.about}
              </p>
              <p className="mt-3">
                Today, that same commitment shapes every movement we
                coordinate — from single shipments to managed supply chains
                across Kenya and East Africa.
              </p>
            </div>
            <div className="split__media">
              <img
                src="/testimonials/t3.jpeg"
                alt="Umri's Enterprises truck on delivery rounds at a county health facility in Kenya"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What drives us"
            title="Mission & Vision"
            intro="Two commitments guide every journey we coordinate."
          />
          <div className="mv-grid mt-4">
            <Reveal>
              <div className="mv-block mv-block--mission">
                <span className="eyebrow">{COMPANY.mission.eyebrow}</span>
                <h3 className="mt-2" style={{ fontSize: "2.4rem" }}>{COMPANY.mission.heading}</h3>
                <p>{COMPANY.mission.text}</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="mv-block mv-block--vision">
                <span className="eyebrow">{COMPANY.vision.eyebrow}</span>
                <h3 className="mt-2" style={{ fontSize: "2.4rem" }}>{COMPANY.vision.heading}</h3>
                <p>{COMPANY.vision.text}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="How we work, every day"
            intro={COMPANY.valuesIntro}
          />
          <div className="grid-3 mt-4">
            {COMPANY_VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <Reveal key={v.title}>
                  <div className="card">
                    <span className="value-card__icon" aria-hidden>
                      <Icon />
                    </span>
                    <h3 style={{ fontSize: "2rem" }}>{v.title}</h3>
                    <p className="text-muted mt-2">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* COVERAGE AREAS */}
      <CoverageAreas heading="Where We Serve" />

      {/* REAL WORK. REAL MOVEMENT. */}
      <SuccessStories />

      {/* WHY PARTNERSHIPS MATTER */}
      <section className="section">
        <div className="container container-narrow text-center">
          <span className="eyebrow">Why partnerships matter</span>
          <h2 className="mt-2">More than transportation</h2>
          <p className="mt-3">
            Umri's Enterprises exists to build long-term partnerships —
            supporting development and disaster response initiatives that
            create resilient communities through essential products and
            services.
          </p>
        </div>
      </section>

      <Testimonials />

      <CtaBand title="Work with a logistics partner you can trust" text="Tell us what you need moved and we'll take it from there." />
    </>
  );
}

import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Faq from "../components/ui/Faq";
import CoverageAreas from "../components/sections/CoverageAreas";
import CtaBand from "../components/sections/CtaBand";
import { SITE_FAQ } from "../data/faqs";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema, faqSchema } from "../lib/schema";

/** /faq — AEO-optimised answer hub with FAQPage structured data. */
export default function FaqPage() {
  useSeo({
    title: "Frequently Asked Questions | Umri's Enterprises",
    description:
      "Answers about Umri's Enterprises logistics services, coverage across selected counties in Kenya, quotes, tracking, warehousing, customs clearing. Final pricing is subject to confirmation.",
    path: "/faq",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "FAQs", path: "/faq" }]), faqSchema()]} />
      <PageHero
        eyebrow="Help Center"
        title="Frequently asked questions"
        description="What Umri's does, where we operate, how quotes and tracking work — answered directly."
        crumbs={[{ name: "FAQs" }]}
      />

      {/* COVERAGE INFO */}
      <section className="section">
        <div className="container container-narrow">
          <CoverageAreas heading="Where We Serve" />
        </div>
      </section>

      {/* AEO definition block */}
      <section className="section">
        <div className="container container-narrow">
          <div className="answer-block">
            <h2 className="h3">What logistics services does Umri's Enterprises Logistics provide?</h2>
            <p>
              Umri's provides freight transportation, trucking, secure
              warehousing, customs clearing, freight forwarding, last-mile
              delivery, procurement support and logistics consultancy for
              businesses and organisations across selected counties in Kenya.
            </p>
          </div>
          <div className="mt-4">
            <Faq items={SITE_FAQ} />
          </div>
          <p className="text-center text-muted mt-5">
            Still have a question? <Link to="/contact">Contact the team →</Link>
          </p>
        </div>
      </section>

      <CtaBand title="Ready to move your goods?" text="Get an estimate or request an official quote in minutes." />
    </>
  );
}

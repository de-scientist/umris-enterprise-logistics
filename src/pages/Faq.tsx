import { Link } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Faq from "../components/ui/Faq";
import CtaBand from "../components/sections/CtaBand";
import { SITE_FAQ } from "../data/faqs";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema, faqSchema } from "../lib/schema";

/** /faq — AEO-optimised answer hub with FAQPage structured data. */
export default function FaqPage() {
  useSeo({
    title: "Frequently Asked Questions",
    description:
      "Answers about Umris logistics services, quotes, tracking, warehousing, customs clearing and coverage across Kenya and East Africa.",
    path: "/faq",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "FAQs", path: "/faq" }]), faqSchema()]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "FAQs" }]} />
          <h1>Frequently asked questions</h1>
          <p>
            What Umris does, where we operate, how quotes and tracking work —
            answered directly.
          </p>
        </div>
      </section>

      {/* AEO definition block */}
      <section className="section">
        <div className="container container-narrow">
          <div className="answer-block">
            <h2 className="h3">What logistics services does Umris Enterprise Logistics provide?</h2>
            <p>
              Umris provides freight transportation, trucking, secure
              warehousing, customs clearing, freight forwarding, last-mile
              delivery, procurement support and logistics consultancy for
              businesses and organisations across Kenya and East Africa.
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

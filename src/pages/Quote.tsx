import { Link } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import QuoteCalculator from "../components/logistics/QuoteCalculator";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Faq from "../components/ui/Faq";
import { SITE } from "../data/siteConfig";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema, faqSchema } from "../lib/schema";

const QUOTE_FAQS = [
  {
    q: "What information is required for a quote?",
    a: "Origin, destination, cargo type, approximate weight and timing. The more detail you share, the more accurate the estimate.",
  },
  {
    q: "Is the online estimate final pricing?",
    a: "No. The calculator gives an illustrative guide only. Final pricing is subject to confirmation after the team reviews your shipment.",
  },
  {
    q: "How quickly will I hear back?",
    a: "Requests sent via WhatsApp or email are reviewed by the team directly. For urgent moves, call +254 764 268 280.",
  },
];

/**
 * /quote — high-conversion quote page: estimator + request form.
 * Frontend-only: the form opens WhatsApp/email; nothing is stored
 * on a server. Clearly labelled throughout.
 */
export default function Quote() {
  useSeo({
    title: "Get a Quote",
    description:
      "Request a logistics quote from Umri's Enterprises Logistics. Get an illustrative estimate instantly, then request an official quote for your shipment.",
    path: "/quote",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Get a Quote", path: "/quote" }]), faqSchema(QUOTE_FAQS)]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Get a Quote" }]} />
          <h1>Let&apos;s move your business forward</h1>
          <p>
            Get an illustrative estimate in seconds, then send the details for
            an official quote. No account needed — your request opens in
            WhatsApp or email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-layout">
            <div>
              <span className="eyebrow">Step 1 · Instant guide</span>
              <h2>Estimate your shipment</h2>
              <p className="text-muted">
                Illustrative rates only — not official Umri's pricing.
              </p>
              <div className="mt-3">
                <QuoteCalculator />
              </div>
            </div>
            <aside className="quote-aside card">
              <h2 className="h3">Prefer to talk?</h2>
              <p className="text-muted">
                Call, WhatsApp or email the team directly with your cargo
                details.
              </p>
              <ul className="quote-aside__list">
                <li>
                  <strong>Phone / WhatsApp</strong>
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phoneDisplay}</a>
                </li>
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                <li>
                  <strong>Coverage</strong>
                  <Link to="/locations">See where we operate →</Link>
                </li>
              </ul>
              <p className="text-sm text-muted">
                Your details stay with you — this form opens your own
                WhatsApp or email app. Nothing is stored on a server.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-label="Request an official quote">
        <div className="container container-narrow">
          <span className="eyebrow">Step 2 · Official quote</span>
          <h2>Request your official quote</h2>
          <p className="text-muted">
            Complete the form and it will open in WhatsApp or email, ready to
            send. The team confirms final pricing from there.
          </p>
          <div className="card mt-4">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <h2 className="text-center">Quote questions, answered</h2>
          <div className="mt-4">
            <Faq items={QUOTE_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}

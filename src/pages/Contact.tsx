import { FaPhone, FaWhatsapp, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";
import PageHero from "../components/ui/PageHero";
import QuoteForm from "../components/QuoteForm";
import MapSection from "../components/layout/MapSection";
import { SITE, whatsappLink } from "../data/siteConfig";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from "../lib/schema";

export default function Contact() {
  useSeo({
    title: "Contact & Request a Quote",
    description:
      "Contact Umri's Enterprises Logistics at Genesis House, Naivasha, by phone, WhatsApp or email, or request a quotation online. Operating across Kenya and East Africa.",
    path: "/contact",
  });

  const cards = [
    { icon: <FaPhone />, label: "Call", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
    { icon: <FaWhatsapp />, label: "WhatsApp", value: "Chat with us", href: whatsappLink("Hello Umri's, I'd like a quote.") },
    { icon: <FaEnvelope />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: <FaLocationDot />, label: "Visit us", value: SITE.hq.addressLine, href: SITE.mapsUrl },
  ];

  return (
    <>
      <JsonLd data={[organizationSchema(), localBusinessSchema(), breadcrumbSchema([{ name: "Contact", path: "/contact" }])]} />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's move it together"
        description="Tell us what you need moved. We'll come back with a clear, tailored quotation — no hidden costs. Visit us at Genesis House, Naivasha."
        image="/testimonials/t8.jpeg"
        imageAlt="Umri's Enterprises branded truck in the field during delivery rounds in Kenya"
        crumbs={[{ name: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-info mb-4">
            {cards.map((c, i) => (
              <div className="contact-card" key={i}>
                <span className="contact-card__icon" aria-hidden>{c.icon}</span>
                <span>
                  <span className="contact-card__label">{c.label}</span>
                  <br />
                  {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={c.href === SITE.mapsUrl ? `Get directions to ${SITE.name} at ${SITE.hq.addressLine} (opens Google Maps)` : undefined}>{c.value}</a> : <p>{c.value}</p>}
                </span>
              </div>
            ))}
            <div className="contact-card">
              <span className="contact-card__icon" aria-hidden><FaClock /></span>
              <span>
                <span className="contact-card__label">Coverage</span>
                <br />
                <p>{SITE.serviceArea}</p>
              </span>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h2 className="mb-3">Request a logistics quote</h2>
            <QuoteForm />
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}

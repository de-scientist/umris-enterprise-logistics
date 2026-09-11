import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
import { SITE } from "../../data/siteConfig";
import { SERVICES } from "../../data/services";
import { INDUSTRIES } from "../../data/industries";
import { WhatsAppButton } from "../ui/WhatsApp";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials: { icon: ReactNode; href: string; label: string }[] = [
    { icon: <FaFacebookF />, href: SITE.social.facebook, label: "Facebook" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Final CTA */}
        <div className="footer-cta">
          <div>
            <h2>Ready to move what matters?</h2>
            <p>Tell us about your cargo and we&apos;ll shape a logistics plan around it.</p>
          </div>
          <div className="footer-cta__actions">
            <Link to="/quote" className="btn btn--accent btn--lg">
              Get a Quote
            </Link>
            <Link to="/tracking" className="btn btn--light btn--lg">
              Track Shipment
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo31.png" alt={`${SITE.name} logo`} />
            <p>
              We don&apos;t simply move goods. We connect businesses, people and
              markets through dependable logistics — {SITE.serviceArea.toLowerCase()}.
            </p>
            <div className="mt-3">
              <WhatsAppButton label="WhatsApp Us" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {SERVICES.slice(0, 6).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
            <Link to="/services">All Services →</Link>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/solutions">Business Logistics</Link>
            <Link to="/industries/ecommerce">E-commerce Logistics</Link>
            <Link to="/services/customs-clearing">Import &amp; Export</Link>
            <Link to="/services/secure-warehousing">Fulfilment &amp; Storage</Link>
            <Link to="/quote">Request a Quote</Link>
            <Link to="/tracking">Track Shipment</Link>
          </div>

          <div className="footer-col">
            <h4>Industries</h4>
            {INDUSTRIES.slice(0, 5).map((i) => (
              <Link key={i.slug} to={`/industries/${i.slug}`}>
                {i.name}
              </Link>
            ))}
            <Link to="/industries">All Industries →</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Umris</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/locations">Coverage</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>{SITE.hq.addressLine}</span>
              </li>
              <li>
                <FaPhoneAlt />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span className="footer-legal">
            <Link to="/faq">Privacy &amp; Terms on request</Link>
            {" · "}
            <Link to="/contact">Contact</Link>
          </span>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

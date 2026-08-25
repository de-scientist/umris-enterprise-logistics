import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SITE, NAV_LINKS } from "../../data/siteConfig";
import { SERVICES } from "../../data/services";
import { WhatsAppButton } from "../ui/WhatsApp";

export default function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = SERVICES.slice(0, 6);
  const socials = [
    { icon: <FaFacebookF />, href: SITE.social.facebook, label: "Facebook" },
  ];
  if (SITE.social.instagram && !SITE.social.instagramVerify) {
    socials.push({ icon: <FaInstagram />, href: SITE.social.instagram, label: "Instagram" });
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo31.png" alt={`${SITE.name} logo`} />
            <p>{SITE.positioning}</p>
            <div className="mt-3">
              <WhatsAppButton label="WhatsApp Us" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {serviceLinks.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
            <Link to="/services">All Services →</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            {NAV_LINKS.filter((l) => l.to !== "/").map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FaMapMarkerAlt />
                <span>
                  {SITE.hq.addressLine}
                  <br />
                  <span className="text-muted">HQ — verify address</span>
                </span>
              </li>
              <li>
                <FaPhoneAlt />
                <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <FaEnvelope />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {SITE.name}. All rights reserved.
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

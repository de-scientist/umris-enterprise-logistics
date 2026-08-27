import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { NAV_LINKS, SITE } from "../../data/siteConfig";
import { WhatsAppButton } from "../ui/WhatsApp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
          <img src="/logo31.png" alt={`${SITE.name} logo`} />
          <span className="brand__name">
            {SITE.shortName}
            <small>Enterprise Logistics</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <a className="nav__link" href={`tel:${SITE.phone}`} aria-label="Call Umris">
            <FaPhoneAlt style={{ marginRight: 6 }} />
            {SITE.phoneDisplay}
          </a>
          <HeaderCta link={`mailto:${SITE.email}`} icon={<FaPaperPlane />} label="Email" />
          <WhatsAppButton label="WhatsApp" />
          <HeaderCta to="/contact" label="Request a Quote" primary />
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav__panel">
          <button
            className="mobile-nav__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `mobile-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mobile-nav__actions">
            <Link to="/contact" className="btn btn--primary btn--block">
              Request a Quote
            </Link>
            <WhatsAppButton label="WhatsApp Us" />
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderCta({
  to,
  link,
  label,
  icon,
  primary,
}: {
  to?: string;
  link?: string;
  label: string;
  icon?: React.ReactNode;
  primary?: boolean;
}) {
  const cls = `btn ${primary ? "btn--primary" : "btn--ghost"}`;
  if (to) return <Link to={to} className={cls}>{label}</Link>;
  return (
    <a href={link} className={cls} target="_blank" rel="noopener noreferrer">
      {icon} {label}
    </a>
  );
}

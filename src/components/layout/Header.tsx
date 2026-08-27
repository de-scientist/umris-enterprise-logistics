import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_LINKS, SITE, whatsappLink } from "../../data/siteConfig";
import { WhatsAppButton } from "../ui/WhatsApp";

const SERVICE_CATEGORIES = [
  {
    name: "Transportation",
    desc: "Move goods efficiently across Kenya and East Africa.",
    to: "/services",
  },
  {
    name: "Logistics",
    desc: "Coordinate storage, clearing and forwarding.",
    to: "/services",
  },
  {
    name: "Enterprise Solutions",
    desc: "Procurement and consultancy for business logistics.",
    to: "/services",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname, hash]);

  // Body scroll lock while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Desktop dropdown: Escape + outside click to close
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  // Mobile menu: focus the close button, Escape to close, simple focus trap
  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function navActive(to: string) {
    if (to === "/") return pathname === "/" && !hash;
    if (to === "/#capabilities") return pathname === "/" && hash === "#capabilities";
    return pathname === to || pathname.startsWith(to + "/");
  }

  const servicesActive = pathname.startsWith("/services");

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
          {NAV_LINKS.map((l) => {
            if (l.label === "Services") {
              return (
                <div
                  className={`nav__item has-dropdown ${servicesOpen ? "is-open" : ""}`}
                  key={l.to}
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    className={`nav__link nav__trigger ${servicesActive ? "is-active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {l.label} <FaChevronDown className="nav__chev" aria-hidden />
                  </button>
                  <div className="nav-dropdown" role="menu" aria-label="Services">
                    {SERVICE_CATEGORIES.map((c) => (
                      <Link
                        key={c.name}
                        to={c.to}
                        className="nav-dropdown__group"
                        role="menuitem"
                      >
                        <span className="nav-dropdown__title">{c.name}</span>
                        <span className="nav-dropdown__desc">{c.desc}</span>
                      </Link>
                    ))}
                    <Link to="/services" className="nav-dropdown__all" role="menuitem">
                      View all services <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            }
            const active = navActive(l.to);
            return (
              <div className="nav__item" key={l.to}>
                <Link
                  to={l.to}
                  className={`nav__link ${active ? "is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="header-cta">
          <a
            className="header-wa"
            href={whatsappLink("Hello Umris, I'd like to request a quotation.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Umris on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Request a Quote
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div
          className="mobile-nav__panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <button
            className="mobile-nav__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            ref={closeBtnRef}
          >
            <FaTimes />
          </button>

          <nav className="mobile-nav__links" aria-label="Mobile">
            {NAV_LINKS.map((l) => {
              if (l.label === "Services") {
                return (
                  <div className="mobile-nav__accordion" key={l.to}>
                    <button
                      type="button"
                      className="mobile-nav__accordion-btn"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      {l.label}
                      <FaChevronDown className="chev" aria-hidden />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mobile-nav__sub" id="mobile-services">
                        {SERVICE_CATEGORIES.map((c) => (
                          <Link
                            key={c.name}
                            to={c.to}
                            className="mobile-nav__sublink"
                          >
                            {c.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="mobile-nav__sublink mobile-nav__sublink--all"
                        >
                          View all services
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              const active = navActive(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`mobile-nav__link ${active ? "is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="mobile-nav__actions">
            <Link to="/contact" className="btn btn--primary btn--block btn--lg">
              Request a Quote
            </Link>
            <WhatsAppButton label="WhatsApp Umris" />
          </div>
        </div>
      </div>
    </header>
  );
}

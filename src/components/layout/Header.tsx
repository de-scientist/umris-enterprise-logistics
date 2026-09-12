import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { NAV_LINKS, SITE, whatsappLink } from "../../data/siteConfig";
import { SERVICES } from "../../data/services";
import { INDUSTRIES } from "../../data/industries";
import { WhatsAppButton } from "../ui/WhatsApp";
import ThemeToggle from "../ui/ThemeToggle";

const SOLUTIONS_MENU = [
  { name: "E-commerce Logistics", desc: "Last-mile delivery with confirmation.", to: "/industries/ecommerce" },
  { name: "Business Logistics", desc: "Freight, trucking and distribution.", to: "/solutions" },
  { name: "Import & Export", desc: "Clearing and port-to-door handover.", to: "/services/customs-clearing" },
  { name: "Fulfilment & Storage", desc: "Warehousing between movements.", to: "/services/secure-warehousing" },
];

const RESOURCES_MENU = [
  { name: "Logistics Insights", desc: "Practical guides for growing businesses.", to: "/insights" },
  { name: "Case Studies", desc: "Selected work from the field.", to: "/case-studies" },
  { name: "FAQs", desc: "Answers to common logistics questions.", to: "/faq" },
  { name: "Coverage", desc: "Where Umri's operates.", to: "/locations" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { pathname, hash } = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
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
    return pathname === to || pathname.startsWith(to + "/") || pathname.startsWith(to + "-");
  }

  const toggle = (label: string) => setOpenMenu((m) => (m === label ? null : label));

  const dropdownFor = (label: string) => {
    if (label === "Services")
      return SERVICES.slice(0, 6).map((s) => ({ name: s.title, desc: s.short.slice(0, 72) + "…", to: `/services/${s.slug}` }));
    if (label === "Solutions") return SOLUTIONS_MENU;
    if (label === "Industries")
      return INDUSTRIES.slice(0, 6).map((i) => ({ name: i.name, desc: i.solution.slice(0, 72) + "…", to: `/industries/${i.slug}` }));
    if (label === "Resources") return RESOURCES_MENU;
    return null;
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
          <img src="/logo31.png" alt={`${SITE.name} logo`} />
          <span className="brand__name">
            {SITE.shortName}
            <small>Enterprises Logistics</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary" ref={navRef}>
          {NAV_LINKS.map((l) => {
            const items = dropdownFor(l.label);
            if (items) {
              const isOpen = openMenu === l.label;
              const active = navActive(l.to);
              return (
                <div className={`nav__item has-dropdown ${isOpen ? "is-open" : ""}`} key={l.label}>
                  <button
                    type="button"
                    className={`nav__link nav__trigger ${active ? "is-active" : ""}`}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => toggle(l.label)}
                  >
                    {l.label} <FaChevronDown className="nav__chev" aria-hidden />
                  </button>
                  <div className="nav-dropdown nav-dropdown--mega" role="menu" aria-label={l.label}>
                    {items.map((c) => (
                      <Link key={c.name} to={c.to} className="nav-dropdown__group" role="menuitem">
                        <span className="nav-dropdown__title">{c.name}</span>
                        <span className="nav-dropdown__desc">{c.desc}</span>
                      </Link>
                    ))}
                    <Link to={l.to} className="nav-dropdown__all" role="menuitem">
                      View all {l.label.toLowerCase()} <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            }
            const active = navActive(l.to);
            return (
              <div className="nav__item" key={l.label}>
                <Link to={l.to} className={`nav__link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>
                  {l.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="header-cta">
          <ThemeToggle />
          <Link to="/tracking" className="btn btn--ghost btn--sm">
            Track Shipment
          </Link>
          <a
            className="header-wa"
            href={whatsappLink("Hello Umri's, I'd like to request a quotation.")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Umri's on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <Link to="/quote" className="btn btn--primary btn--sm">
            Get a Quote
          </Link>
        </div>

        <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav">
          <FaBars />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-nav__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="mobile-nav__top">
            <ThemeToggle />
            <button className="mobile-nav__close" onClick={() => setOpen(false)} aria-label="Close menu" ref={closeBtnRef}>
              <FaTimes />
            </button>
          </div>
          <nav className="mobile-nav__links" aria-label="Mobile">
            {NAV_LINKS.map((l) => {
              const items = dropdownFor(l.label);
              if (items) {
                const expanded = mobileExpanded === l.label;
                return (
                  <div className="mobile-nav__accordion" key={l.label}>
                    <button
                      type="button"
                      className="mobile-nav__accordion-btn"
                      aria-expanded={expanded}
                      aria-controls={`mobile-${l.label}`}
                      onClick={() => setMobileExpanded((m) => (m === l.label ? null : l.label))}
                    >
                      {l.label}
                      <FaChevronDown className="chev" aria-hidden />
                    </button>
                    {expanded && (
                      <div className="mobile-nav__sub" id={`mobile-${l.label}`}>
                        {items.map((c) => (
                          <Link key={c.name} to={c.to} className="mobile-nav__sublink">
                            {c.name}
                          </Link>
                        ))}
                        <Link to={l.to} className="mobile-nav__sublink mobile-nav__sublink--all">
                          View all {l.label.toLowerCase()}
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              const active = navActive(l.to);
              return (
                <Link key={l.label} to={l.to} className={`mobile-nav__link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>
                  {l.label}
                </Link>
              );
            })}
            <Link to="/contact" className="mobile-nav__link">
              Contact
            </Link>
          </nav>
          <div className="mobile-nav__actions">
            <Link to="/quote" className="btn btn--primary btn--block btn--lg">
              Get a Quote
            </Link>
            <Link to="/tracking" className="btn btn--ghost btn--block btn--lg">
              Track Shipment
            </Link>
            <WhatsAppButton label="WhatsApp Umri's" />
          </div>
        </div>
      </div>
    </header>
  );
}

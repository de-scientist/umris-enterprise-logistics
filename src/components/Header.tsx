import React from "react";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import logo3 from "../assets/logo3.png"; 
// Replace this logo with your Umris logo when ready.

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  email?: string;
  phone?: string;
  logoSrc?: string;
  logoAlt?: string;
  navLinks?: NavLink[];
}

const Header: React.FC<HeaderProps> = ({
  email = "info@umrislogistics.com",
  phone = "+254 729 934 671",
  logoSrc = logo3, 
  logoAlt = "Umris Logistics Logo",
  navLinks = [
    { label: "home", href: "#home" },
    { label: "about us", href: "#about" },
    { label: "services", href: "#services" },
    { label: "why choose us", href: "#reasons" },
    { label: "our team", href: "#team" },
    { label: "blog", href: "#blog" },
    { label: "testimonials", href: "#testimonial" },
    { label: "gallery", href: "#gallery" },
    { label: "contact us", href: "#contact" },
    { label: "faq", href: "#faq" },
  ],
}) => {
  return (
    <header className="header">
      {/* --- Top Section: Contact + Logo --- */}
      <div className="header-top">
        
        {/* Email */}
        <div className="header-contact">
          <span className="header-contact-icon">
            <FaPaperPlane />
          </span>
          <p className="header-contact-text">
            <a href={`mailto:${email}`} aria-label="Send an email">
              {email}
            </a>
          </p>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={logoSrc} alt={logoAlt} style={{ width: "40px" }} />
          <p className="logo-text">umris logistics</p>
        </div>

        {/* Phone */}
        <div className="header-contact">
          <p className="header-contact-text">
            <a href={`tel:${phone}`} aria-label="Call us">
              {phone}
            </a>
          </p>
          <span className="header-contact-icon">
            <FaPhoneAlt />
          </span>
        </div>
      </div>

      {/* --- Bottom Navigation --- */}
      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li className="nav-list-item" key={index}>
                <a href={link.href} className="nav-list-item-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

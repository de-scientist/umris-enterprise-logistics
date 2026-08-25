import { FaWhatsapp, FaPhoneAlt, FaRegEdit } from "react-icons/fa6";
import { SITE, whatsappLink } from "../../data/siteConfig";
import { Link } from "react-router-dom";

export default function MobileActionBar() {
  return (
    <nav className="mobile-action" aria-label="Quick contact">
      <a href={`tel:${SITE.phone}`} className="action--call">
        <FaPhoneAlt />
        Call
      </a>
      <a
        href={whatsappLink("Hello Umris, I'd like a quick quote.")}
        target="_blank"
        rel="noopener noreferrer"
        className="action--wa"
      >
        <FaWhatsapp />
        WhatsApp
      </a>
      <Link to="/contact" className="action--quote">
        <FaRegEdit />
        Quote
      </Link>
    </nav>
  );
}

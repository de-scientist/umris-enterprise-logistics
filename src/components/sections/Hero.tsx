import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldHalved, FaTruckFast, FaClock, FaCircleCheck } from "react-icons/fa6";
import { SITE } from "../../data/siteConfig";
import { WhatsAppButton } from "../ui/WhatsApp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <span className="hero__eyebrow">Umris Enterprise Logistics · Kenya</span>
        <h1 className="hero__title">
          Moving Your <em>Business</em> Forward.
        </h1>
        <p className="hero__lead">
          Reliable logistics and transportation solutions built around timely
          delivery, operational efficiency and dependable service — across Kenya
          and East Africa.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--accent btn--lg">
            Request a Quote
          </Link>
          <Link to="/services" className="btn btn--light btn--lg">
            Explore Our Services <FaArrowRight />
          </Link>
          <WhatsAppButton label="WhatsApp Us" variant="light" size="lg" />
        </div>
        <ul className="hero__trust">
          <li><FaCircleCheck /> {SITE.serviceArea}</li>
          <li><FaShieldHalved /> Professional handling</li>
          <li><FaTruckFast /> Reliable transport</li>
          <li><FaClock /> Timely delivery</li>
        </ul>
      </div>
    </section>
  );
}

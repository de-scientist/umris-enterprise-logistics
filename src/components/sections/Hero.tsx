import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldHalved, FaTruckFast, FaClock, FaCircleCheck } from "react-icons/fa6";
import { SITE } from "../../data/siteConfig";
import TrackingForm from "../logistics/TrackingForm";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__layout">
        <div className="hero__inner">
          <span className="hero__eyebrow">Umris Enterprise Logistics · Kenya &amp; East Africa</span>
          <h1 className="hero__title">
            Global logistics.<br />
            <em>Local expertise.</em>
          </h1>
          <p className="hero__lead">
            Reliable logistics solutions designed to move your goods, connect
            your markets and keep your supply chain moving.
          </p>
          <div className="hero__actions">
            <Link to="/quote" className="btn btn--accent btn--lg">
              Get a Quote
            </Link>
            <Link to="/tracking" className="btn btn--light btn--lg">
              Track Shipment <FaArrowRight />
            </Link>
          </div>
          <ul className="hero__trust">
            <li><FaCircleCheck /> {SITE.serviceArea}</li>
            <li><FaShieldHalved /> Professional handling</li>
            <li><FaTruckFast /> Reliable transport</li>
            <li><FaClock /> Timely delivery</li>
          </ul>
        </div>
        <div className="hero__track">
          <TrackingForm variant="hero" />
          <p className="hero__track-note">
            We don&apos;t simply move goods — we connect businesses, people
            and markets through dependable logistics.
          </p>
        </div>
      </div>
    </section>
  );
}

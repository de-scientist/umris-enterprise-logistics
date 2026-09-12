import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldHalved, FaTruckFast, FaClock, FaCircleCheck } from "react-icons/fa6";
import { BRAND, SITE } from "../../data/siteConfig";
import heroImg from "../../assets/t1.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__layout">
        <div className="hero__inner">
          <span className="hero__eyebrow">{BRAND.name}</span>
          <h1 className="hero__title">
            Moving What Matters.
            <br />
            <em>With Eyes on Perfection.</em>
          </h1>
          <p className="hero__lead">
            Reliable logistics solutions designed to move your goods, connect
            your markets and keep your supply chain moving.
          </p>
          <div className="hero__actions">
            <Link to="/quote" className="btn btn--accent btn--lg">
              Request a Quote
            </Link>
            <Link to="/services" className="btn btn--light btn--lg">
              Explore Our Services <FaArrowRight />
            </Link>
          </div>
          <ul className="hero__trust">
            <li><FaCircleCheck aria-hidden /> {SITE.serviceArea}</li>
            <li><FaShieldHalved aria-hidden /> Professional handling</li>
            <li><FaTruckFast aria-hidden /> Reliable transport</li>
            <li><FaClock aria-hidden /> Timely delivery</li>
          </ul>
        </div>
        <div className="hero__media">
          <img
            src={heroImg}
            alt="Umri's Enterprises truck at a dispatch flag-off event with officials and team members present"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { TESTIMONIALS } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Partner Voices</span>
          <h2>Trusted by organisations that move with purpose</h2>
          <p>
            Relief, medical and institutional partners rely on Umris for
            coordinated, accountable logistics across Kenya and East Africa.
          </p>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure className="testi" key={i}>
              <FaQuoteLeft style={{ color: "var(--color-primary)", fontSize: "2rem" }} />
              <blockquote className="testi__quote">“{t.quote}”</blockquote>
              <figcaption className="testi__author">
                <span className="testi__avatar" aria-hidden>
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="testi__name">{t.name}</span>
                  <br />
                  <span className="testi__org">{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/portfolio" className="btn btn--ghost">
            See our work <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

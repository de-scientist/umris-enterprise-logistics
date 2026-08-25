import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useSeo } from "../lib/seo";
import { SITE } from "../data/siteConfig";

export default function NotFound() {
  useSeo({
    title: "Page not found",
    description: "The page you were looking for could not be found.",
    path: "/404",
  });

  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <div className="notfound__code">404</div>
        <h1 style={{ fontSize: "3rem", marginTop: "1rem" }}>This route took a wrong turn.</h1>
        <p className="text-lead measure" style={{ marginInline: "auto", marginTop: "1rem" }}>
          The page you're after isn't here — but your cargo still needs to move.
          Let's get you back on the right road.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn--primary btn--lg">Back Home</Link>
          <Link to="/services" className="btn btn--ghost btn--lg">Explore Services</Link>
          <Link to="/contact" className="btn btn--accent btn--lg">
            Request a Quote <FaArrowRight />
          </Link>
        </div>
        <p className="text-muted mt-5" style={{ fontSize: "1.4rem" }}>
          {SITE.name} · {SITE.phoneDisplay}
        </p>
      </div>
    </section>
  );
}

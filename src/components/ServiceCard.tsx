import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import type { Service } from "../../data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card card--interactive service-card">
      <div className="service-card__media">
        <img src={service.image} alt={service.title} loading="lazy" />
      </div>
      <span className="chip" style={{ alignSelf: "flex-start" }}>
        {service.category}
      </span>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link
        to={`/services/${service.slug}`}
        className="service-card__link"
        aria-label={`Explore ${service.title}`}
      >
        Explore service <FaArrowRight />
      </Link>
    </article>
  );
}

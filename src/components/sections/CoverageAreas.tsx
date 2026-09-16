import { COVERAGE_AREAS } from "../../data/coverageAreas";
import Reveal from "../ui/Reveal";

export default function CoverageAreas({
  heading = "Areas We Serve",
  intro,
  className = "",
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  const countyList = COVERAGE_AREAS.map((a) => a.name).join(", ");
  const defaultIntro =
    `Umri's Enterprises provides reliable transportation and logistics support across selected counties in Kenya. Our current coverage includes ${countyList}.`;

  return (
    <section className={`coverage ${className}`} aria-label="Coverage areas">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Coverage</span>
          <h2>{heading}</h2>
          <p>{intro ?? defaultIntro}</p>
        </div>
        <div className="coverage-grid">
          {COVERAGE_AREAS.map((area) => (
            <Reveal key={area.slug}>
              <article className="coverage-card">
                <span className="coverage-card__name">{area.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

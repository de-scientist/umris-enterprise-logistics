import { COVERAGE_AREAS } from "../../data/coverageAreas";
import Reveal from "../ui/Reveal";

export default function CoverageAreas({
  heading = "Serving More of Kenya",
  intro,
  className = "",
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  const defaultIntro =
    "Umri's Enterprises provides reliable transportation and logistics support across selected counties in Kenya, helping move essential goods, cargo and supplies where they are needed.";

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

import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { BRAND } from "../../data/siteConfig";

export interface HeroAction {
  label: string;
  to: string;
  variant?: "primary" | "ghost" | "accent" | "light";
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Authentic operational photograph. Omit for the text-only variant. */
  image?: string;
  imageAlt?: string;
  crumbs: Crumb[];
  actions?: HeroAction[];
  /** Show the "Eyes on Perfection." brand signature. Use sparingly. */
  tagline?: boolean;
  /** Above-the-fold heroes: eager load with high fetch priority. */
  eager?: boolean;
  /** Optional element rendered above the title (e.g. category chip). */
  topNote?: ReactNode;
}

/**
 * PageHero — editorial two-column hero for inner pages.
 * Left: breadcrumbs, eyebrow, H1, description, actions.
 * Right: authentic operational photograph (or text-only variant
 * when no suitable photo exists — never a stock filler).
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs,
  actions,
  tagline = false,
  eager = false,
  topNote,
}: PageHeroProps) {
  return (
    <section className={`page-hero${image ? " page-hero--split" : ""}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <Breadcrumbs items={crumbs} />
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="page-hero__desc">{description}</p>}
          {tagline && (
            <p className="page-hero__tagline" aria-label={`Brand tagline: ${BRAND.tagline}`}>
              {BRAND.tagline}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="page-hero__actions">
              {actions.map((a) => (
                <Link
                  key={a.to + a.label}
                  to={a.to}
                  className={`btn btn--${a.variant ?? "primary"} btn--lg`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className="page-hero__media">
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "auto"}
            />
          </div>
        )}
      </div>
    </section>
  );
}

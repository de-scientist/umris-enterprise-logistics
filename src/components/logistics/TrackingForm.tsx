import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DEMO_TRACKING_NUMBERS } from "../../data/mockShipments";
import { isPlausibleTrackingNumber } from "../../lib/tracking";

interface Props {
  /** Compact hero variant vs large tracking-page variant. */
  variant?: "hero" | "page";
  initial?: string;
  onSearch?: (trackingNumber: string) => void;
  loading?: boolean;
}

/**
 * Tracking search form. Frontend-only: navigates to /tracking?tn=...
 * or delegates to `onSearch` on the tracking page.
 */
export default function TrackingForm({ variant = "hero", initial = "", onSearch, loading = false }: Props) {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const isHero = variant === "hero";

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const v = value.trim();
    if (!v) {
      setError("Enter your tracking number to see the shipment status.");
      return;
    }
    if (!isPlausibleTrackingNumber(v)) {
      setError("That doesn't look like a tracking number. Example: UMRS-2026-001.");
      return;
    }
    setError(null);
    if (onSearch) {
      onSearch(v);
    } else {
      navigate(`/tracking?tn=${encodeURIComponent(v.trim().toUpperCase())}`);
    }
  };

  return (
    <div className={isHero ? "track-box" : "track-box track-box--page"}>
      <form onSubmit={submit} noValidate aria-label="Track your shipment">
        <label className="track-box__label" htmlFor={isHero ? "hero-tn" : "page-tn"}>
          Track your shipment
        </label>
        <div className="track-box__row">
          <div className="track-box__input-wrap">
            <FaMagnifyingGlass aria-hidden className="track-box__icon" />
            <input
              id={isHero ? "hero-tn" : "page-tn"}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(null);
              }}
              placeholder="UMRS-XXXXXXXXXXXX"
              autoComplete="off"
              spellCheck={false}
              aria-invalid={!!error}
              aria-describedby={error ? "tn-error" : "tn-hint"}
            />
          </div>
          <button type="submit" className="btn btn--accent" disabled={loading}>
            {loading ? "Tracking…" : "Track Shipment"}
          </button>
        </div>
        {error ? (
          <p className="track-box__error" id="tn-error" role="alert">
            {error}
          </p>
        ) : (
          <p className="track-box__hint" id="tn-hint">
            Try a demo number:{" "}
            {DEMO_TRACKING_NUMBERS.map((n, i) => (
              <span key={n}>
                {i > 0 && " · "}
                <button
                  type="button"
                  className="track-box__demo"
                  onClick={() => {
                    setValue(n);
                    setError(null);
                    if (onSearch) onSearch(n);
                    else navigate(`/tracking?tn=${encodeURIComponent(n)}`);
                  }}
                >
                  {n}
                </button>
              </span>
            ))}
          </p>
        )}
      </form>
    </div>
  );
}

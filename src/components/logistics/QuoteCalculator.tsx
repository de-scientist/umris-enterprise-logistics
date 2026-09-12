import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

/* ============================================================
   QUOTE CALCULATOR — frontend-only illustrative estimator.
   Rates are NOT official Umri's pricing; the result is labelled
   as an estimate and every CTA routes to /quote for confirmation.
   ============================================================ */

const SERVICE_MULTIPLIER: Record<string, number> = {
  "Road / Trucking": 1,
  "Freight Transport": 1.15,
  "Last-Mile Delivery": 0.85,
  "Warehousing (per month)": 0.6,
  "Customs Clearing Support": 1.4,
};

const BASE_PER_KM = 180; // KES illustrative base per km
const PER_KG = 12; // KES illustrative per kg
const PER_PARCEL = 250; // KES illustrative per parcel

const ROUTES_KM: Record<string, number> = {
  "Nairobi–Mombasa": 485,
  "Nairobi–Nakuru": 160,
  "Nairobi–Eldoret": 310,
  "Nairobi–Naivasha": 90,
  "Naivasha–Nakuru": 70,
  "Mombasa–Nairobi": 485,
};

function formatKES(n: number): string {
  return `KES ${Math.round(n).toLocaleString("en-KE")}`;
}

export default function QuoteCalculator() {
  const [route, setRoute] = useState("Nairobi–Mombasa");
  const [service, setService] = useState("Road / Trucking");
  const [weight, setWeight] = useState("500");
  const [parcels, setParcels] = useState("10");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = (ev: FormEvent) => {
    ev.preventDefault();
    const w = Number(weight);
    const p = Number(parcels);
    if (!Number.isFinite(w) || w <= 0 || w > 30000) {
      setError("Enter a weight between 1 and 30,000 kg.");
      setState("error");
      return;
    }
    if (!Number.isFinite(p) || p < 1 || p > 5000) {
      setError("Enter between 1 and 5,000 packages.");
      setState("error");
      return;
    }
    setError(null);
    setState("loading");
    const km = ROUTES_KM[route] ?? 200;
    const mult = SERVICE_MULTIPLIER[service] ?? 1;
    const mid = (BASE_PER_KM * km + PER_KG * w + PER_PARCEL * p) * mult;
    // Simulated calculation delay for loading-state UX.
    window.setTimeout(() => {
      setEstimate({ low: mid * 0.9, high: mid * 1.15 });
      setState("done");
    }, 700);
  };

  const reset = () => {
    setState("idle");
    setEstimate(null);
    setError(null);
  };

  return (
    <div className="calc card" aria-label="Illustrative quote calculator">
      <form onSubmit={calculate} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="calc-route">Route</label>
            <select id="calc-route" value={route} onChange={(e) => setRoute(e.target.value)}>
              {Object.keys(ROUTES_KM).map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
              <option value="Other route">Other route (uses 200 km guide)</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="calc-service">Service type</label>
            <select id="calc-service" value={service} onChange={(e) => setService(e.target.value)}>
              {Object.keys(SERVICE_MULTIPLIER).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="calc-weight">Total weight (kg)</label>
            <input
              id="calc-weight"
              inputMode="numeric"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="calc-parcels">Package count</label>
            <input
              id="calc-parcels"
              inputMode="numeric"
              value={parcels}
              onChange={(e) => setParcels(e.target.value)}
            />
          </div>
        </div>

        <div className="calc__actions">
          <button type="submit" className="btn btn--primary" disabled={state === "loading"}>
            {state === "loading" ? "Calculating…" : "Calculate estimate"}
          </button>
          {(state === "done" || state === "error") && (
            <button type="button" className="btn btn--ghost" onClick={reset}>
              Reset
            </button>
          )}
        </div>
      </form>

      <div aria-live="polite" className="calc__result">
        {state === "loading" && (
          <div className="calc__skeleton" aria-label="Calculating">
            <span />
            <span />
          </div>
        )}
        {state === "error" && error && (
          <p className="form-status form-status--err" role="alert">
            {error}
          </p>
        )}
        {state === "done" && estimate && (
          <div className="calc__estimate">
            <p className="calc__range">
              {formatKES(estimate.low)} – {formatKES(estimate.high)}
            </p>
            <p className="calc__note">
              <strong>Estimated quote</strong> — final pricing is subject to
              confirmation. Rates shown are illustrative guides, not official
              Umri's pricing.
            </p>
            <div className="calc__actions">
              <Link to="/quote" className="btn btn--primary">
                Request official quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

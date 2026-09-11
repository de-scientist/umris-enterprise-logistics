import { FaCheck, FaCircleDot } from "react-icons/fa6";
import { TRACKING_STAGES, type MockShipment } from "../../data/mockShipments";

/** Vertical shipment timeline + details card (mock-data driven). */
export default function ShipmentCard({ shipment }: { shipment: MockShipment }) {
  const pct = Math.round(((shipment.stageIndex + 1) / TRACKING_STAGES.length) * 100);

  return (
    <div className="shipment" aria-live="polite">
      <div className="shipment__head">
        <div>
          <p className="shipment__tn">
            Shipment {shipment.trackingNumber}{" "}
            <span className="chip chip--demo">Demo shipment</span>
          </p>
          <p className="shipment__route">
            {shipment.origin} → {shipment.destination}
          </p>
        </div>
        <div className="shipment__status">
          <span className="shipment__status-dot" aria-hidden />
          {shipment.status}
        </div>
      </div>

      <div
        className="shipment__progress"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Delivery progress ${pct} percent`}
      >
        <div className="shipment__progress-bar" style={{ width: `${pct}%` }} />
      </div>

      <ol className="shipment__stages">
        {TRACKING_STAGES.map((stage, i) => {
          const done = i < shipment.stageIndex;
          const current = i === shipment.stageIndex;
          return (
            <li
              key={stage}
              className={`shipment__stage ${done ? "is-done" : ""} ${current ? "is-current" : ""}`}
              aria-current={current ? "step" : undefined}
            >
              <span className="shipment__stage-marker" aria-hidden>
                {done ? <FaCheck /> : current ? <FaCircleDot /> : null}
              </span>
              <span className="shipment__stage-name">{stage}</span>
            </li>
          );
        })}
      </ol>

      <dl className="shipment__meta">
        <div>
          <dt>Service</dt>
          <dd>{shipment.service}</dd>
        </div>
        <div>
          <dt>Cargo</dt>
          <dd>
            {shipment.weight} · {shipment.pieces}
          </dd>
        </div>
        <div>
          <dt>Estimated delivery</dt>
          <dd>{shipment.estimatedDelivery}</dd>
        </div>
        <div>
          <dt>Last update</dt>
          <dd>{shipment.lastUpdate}</dd>
        </div>
      </dl>

      <h3 className="shipment__history-title">Activity history</h3>
      <ol className="shipment__history">
        {[...shipment.events].reverse().map((e) => (
          <li key={`${e.date}-${e.title}`}>
            <time dateTime={e.date}>
              {new Date(e.date).toLocaleDateString("en-KE", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <strong>{e.title}</strong>
            <span>
              {e.location}
              {e.detail ? ` — ${e.detail}` : ""}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

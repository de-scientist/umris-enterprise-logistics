import { Link } from "react-router-dom";
import { LOCATIONS } from "../../data/locations";

/**
 * Logistics network visual — honest framing: "connecting businesses
 * across Kenya and beyond". Styled route diagram, not a claim of
 * owned offices. Replace with real coverage data when confirmed.
 */
export default function NetworkVisual() {
  return (
    <div className="network">
      <div className="network__map" role="img" aria-label="Illustrative logistics network connecting Nairobi, Naivasha, Nakuru, Eldoret and Mombasa, with regional links beyond Kenya">
        <svg viewBox="0 0 400 340" className="network__svg" aria-hidden="true">
          {/* routes */}
          <g stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" strokeDasharray="6 6" className="network__routes">
            <path d="M200 90 C 160 130, 150 160, 170 190" />
            <path d="M170 190 C 150 220, 130 240, 110 260" />
            <path d="M200 90 C 240 130, 260 150, 280 190" />
            <path d="M200 90 C 200 160, 220 220, 250 270" />
            <path d="M170 190 C 200 210, 240 220, 280 190" />
          </g>
          {/* trunk line */}
          <g stroke="currentColor" strokeWidth="3" fill="none" opacity="0.9">
            <path d="M200 60 L200 90 L170 190 L110 260" />
            <path d="M200 90 L280 190" />
            <path d="M200 90 L250 270" />
          </g>
          {/* nodes */}
          <g>
            <circle cx="200" cy="60" r="10" className="network__hub" />
            <circle cx="200" cy="90" r="7" className="network__node" />
            <circle cx="170" cy="190" r="7" className="network__node" />
            <circle cx="110" cy="260" r="7" className="network__node" />
            <circle cx="280" cy="190" r="7" className="network__node" />
            <circle cx="250" cy="270" r="9" className="network__node network__node--port" />
          </g>
        </svg>
        <ul className="network__labels">
          <li style={{ top: "8%", left: "56%" }}><span>Nairobi</span></li>
          <li style={{ top: "20%", left: "58%" }}><span>Naivasha · hub</span></li>
          <li style={{ top: "50%", left: "8%" }}><span>Nakuru</span></li>
          <li style={{ top: "50%", left: "72%" }}><span>Eldoret</span></li>
          <li style={{ top: "76%", left: "66%" }}><span>Mombasa · port link</span></li>
        </ul>
      </div>
      <div className="network__side">
        <span className="eyebrow">Coverage</span>
        <h2>Connecting businesses across Kenya and beyond</h2>
        <p className="text-lead">
          From local distribution to long-distance freight and regional
          coordination — planned routes, tracked movement and a single
          point of contact.
        </p>
        <ul className="network__list">
          {LOCATIONS.slice(0, 4).map((l) => (
            <li key={l.slug}>
              <strong>{l.name}</strong>
              <span>{l.presence}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-3 wrap">
          <Link to="/locations" className="btn btn--primary">
            View coverage
          </Link>
          <Link to="/quote" className="btn btn--ghost">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

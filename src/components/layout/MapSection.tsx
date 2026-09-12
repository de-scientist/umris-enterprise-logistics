import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { FaLocationDot, FaDiamondTurnRight } from "react-icons/fa6";
import { SITE } from "../../data/siteConfig";

L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

export default function MapSection() {
  const [lat, lng] = SITE.hq.coords;
  return (
    <section className="section-sm" aria-labelledby="visit-heading">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Find Us</span>
          <h2 id="visit-heading">Our operations hub</h2>
          <p>
            {SITE.name} operates from {SITE.hq.label}, {SITE.hq.city},{" "}
            {SITE.hq.country} — positioned for swift, nationwide delivery
            routes.
          </p>
        </div>
        <div className="location-grid">
          <div
            style={{
              height: "420px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <MapContainer
              center={[lat, lng]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap"
              />
              <Marker position={[lat, lng]}>
                <Popup>
                  <strong>{SITE.name}</strong>
                  <br />
                  {SITE.hq.addressLine}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <aside className="location-card" aria-label="Visit us">
            <span className="eyebrow">Visit us</span>
            <h3>
              <FaLocationDot aria-hidden /> {SITE.hq.label}
            </h3>
            <p className="text-muted">
              {SITE.hq.city}, {SITE.hq.country}
            </p>
            <p className="mt-2" style={{ fontSize: "1.4rem" }}>
              {SITE.serviceArea}. Call {SITE.phoneDisplay} before visiting so
              the team can receive you.
            </p>
            <div className="mt-4 flex gap-3 wrap">
              <a
                className="btn btn--primary"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to ${SITE.name} at ${SITE.hq.addressLine} (opens Google Maps)`}
              >
                <FaDiamondTurnRight aria-hidden /> Get Directions
              </a>
              <a
                className="btn btn--ghost"
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

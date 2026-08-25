import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { SITE } from "../../data/siteConfig";

L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

export default function MapSection() {
  const [lat, lng] = SITE.hq.coords;
  return (
    <section className="section-sm">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Find Us</span>
          <h2>Our operations hub</h2>
          <p>
            Umris Enterprise Logistics operates from {SITE.hq.city}, {SITE.hq.country} —
            positioned for swift, nationwide delivery routes.
          </p>
        </div>
        <div
          style={{
            height: "420px",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap" />
            <Marker position={[lat, lng]}>
              <Popup>
                <strong>{SITE.name}</strong>
                <br />
                {SITE.hq.city}, {SITE.hq.country}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

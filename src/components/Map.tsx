import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet’s default icon paths for builds
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map: React.FC = () => {
  const position: [number, number] = [-0.7167, 36.431]; // Naivasha coordinates

  return (
    <section id="map" className="map-section">
      <h2>Find Us in Naivasha, Kenya</h2>
      <p>
        We are located in the heart of Naivasha, connecting Kenya through
        reliable logistics services.
      </p>

      <div className="map-container">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Umris Enterprise Logistics
              <br />
              Naivasha, Kenya
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;

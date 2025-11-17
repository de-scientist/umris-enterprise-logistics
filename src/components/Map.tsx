import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet’s default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map: React.FC = () => {
  const position: [number, number] = [-0.7167, 36.431];

  return (
    <section
      id="map"
      className="py-12 px-4 md:px-10 bg-gray-100 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our Main Operations Hub
        </h2>
        <p className="text-gray-600">
          Umris Logistics operates from Naivasha — strategically positioned for
          swift, safe, and nationwide delivery routes.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-[420px] z-10"
          attributionControl={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={position}>
            <Popup>
              <strong>Umris Enterprise Logistics</strong>
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

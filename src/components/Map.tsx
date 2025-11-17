import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix markers for Vite/React builds
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Map: React.FC = () => {
  const position: [number, number] = [-0.7167, 36.431];

  useEffect(() => {
    // Fix strict browsers blocking unload
    (window as any).onunload = null;
  }, []);

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

      <div className="relative max-w-5xl mx-auto h-[420px] shadow-lg rounded-xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
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

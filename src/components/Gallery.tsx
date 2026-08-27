import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import gallery1 from "../assets/t1.jpeg";
import gallery2 from "../assets/t2.jpeg";
import gallery3 from "../assets/t3.jpeg";
import gallery4 from "../assets/1.png";
import gallery5 from "../assets/2.png";
import gallery6 from "../assets/9.png";

const ITEMS = [
  { src: gallery1, alt: "Umris truck on transit", cap: "Reliable cross-border transport handled with precision." },
  { src: gallery2, alt: "Warehouse operations", cap: "Secure storage with real-time monitoring." },
  { src: gallery3, alt: "Last-mile delivery in the field", cap: "Delivering supplies where they are needed most." },
  { src: gallery4, alt: "Operational fleet", cap: "A fleet prepared for planned and urgent dispatch." },
  { src: gallery5, alt: "Cargo loading operations", cap: "Efficient loading handled by trained teams." },
  { src: gallery6, alt: "Border clearance process", cap: "Smooth customs clearance for partners across East Africa." },
];

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">In Operation</span>
          <h2>Umris on the ground</h2>
          <p>A glimpse into the daily work that keeps supply chains moving across East Africa.</p>
        </div>
        <div className="gallery-grid">
          {ITEMS.map((it, i) => (
            <button
              key={i}
              className="gallery-item"
              onClick={() => setOpen(it.src)}
              aria-label={`View image: ${it.alt}`}
            >
              <img src={it.src} alt={it.alt} loading="lazy" />
              <span className="gallery-item__cap">{it.cap}</span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label="Image preview">
          <button className="lightbox__close" onClick={() => setOpen(null)} aria-label="Close preview">
            <FaXmark />
          </button>
          <img src={open} alt="Enlarged view" />
        </div>
      )}
    </section>
  );
}

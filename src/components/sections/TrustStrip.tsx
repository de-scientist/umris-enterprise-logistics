import { FaShieldHalved, FaHandshake, FaClock, FaArrowsRotate, FaBuilding } from "react-icons/fa6";

const ITEMS = [
  { icon: <FaShieldHalved />, title: "Reliable Operations", text: "Dependable movement you can plan around." },
  { icon: <FaHandshake />, title: "Professional Handling", text: "Trained teams, careful cargo care." },
  { icon: <FaClock />, title: "Timely Delivery", text: "Coordinated to your schedule." },
  { icon: <FaArrowsRotate />, title: "Flexible Solutions", text: "Scaled to your requirement." },
  { icon: <FaBuilding />, title: "Business Focus", text: "Built for commercial operations." },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why businesses trust Umris">
      <div className="container">
        <ul className="trust-strip__grid">
          {ITEMS.map((it) => (
            <li className="trust-strip__item" key={it.title}>
              <span className="trust-strip__icon" aria-hidden>{it.icon}</span>
              <span>
                <span className="trust-strip__title">{it.title}</span>
                <br />
                <span className="trust-strip__text">{it.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

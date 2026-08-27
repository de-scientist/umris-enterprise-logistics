import {
  FaTruckFast,
  FaBoxesStacked,
  FaWarehouse,
  FaSatelliteDish,
  FaRoute,
  FaGlobe,
} from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const CAPABILITIES = [
  {
    icon: <FaTruckFast />,
    title: "Fleet & Vehicles",
    text: "Local and long-distance trucks sized for full and part loads across Kenya.",
  },
  {
    icon: <FaBoxesStacked />,
    title: "Cargo Handling",
    text: "Trained teams load, secure and document goods for safe transit.",
  },
  {
    icon: <FaWarehouse />,
    title: "Secure Warehousing",
    text: "Monitored storage that buffers goods between inbound and outbound moves.",
  },
  {
    icon: <FaSatelliteDish />,
    title: "Real-Time Tracking",
    text: "Visibility of your shipment from pickup to delivery, with status updates.",
  },
  {
    icon: <FaRoute />,
    title: "Dispatch & Routing",
    text: "Planned routes and scheduling built around your delivery window.",
  },
  {
    icon: <FaGlobe />,
    title: "Cross-Border Coordination",
    text: "Regional East Africa movement with route and border-document handling.",
  },
];

export default function Capabilities() {
  return (
    <section className="section section--surface" id="capabilities">
      <div className="container">
        <SectionHeading
          eyebrow="Operational capability"
          title="Built to move goods, not just talk about it"
          intro="The practical infrastructure behind every Umris shipment — described, not exaggerated."
        />
        <div className="capability-grid">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} className="capability-card" delay={i * 60}>
              <span className="capability-card__icon" aria-hidden>
                {c.icon}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

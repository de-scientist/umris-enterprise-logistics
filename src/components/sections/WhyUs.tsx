import { FaCircleCheck } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";

const PILLARS = [
  {
    title: "Reliability",
    text: "We set clear operational expectations and work to meet them — because your business runs on what we move.",
  },
  {
    title: "Professional Execution",
    text: "From loading to handover, cargo is handled and documented with structure and care.",
  },
  {
    title: "Flexibility",
    text: "Solutions are adapted to different business requirements — one shipment or a continuous flow.",
  },
  {
    title: "Business Focus",
    text: "Services are designed around commercial operations, not generic point-to-point drops.",
  },
  {
    title: "Communication",
    text: "Clear, proactive updates keep you informed at every stage of the movement.",
  },
  {
    title: "Accountability",
    text: "Tracking and confirmation mean you always know where your goods are and when they arrive.",
  },
];

export default function WhyUs() {
  return (
    <section className="section section--surface" id="why">
      <div className="container">
        <SectionHeading
          eyebrow="Why Umris"
          title="A logistics partner, not just a fleet"
          intro="Six reasons businesses across Kenya trust Umris with their cargo."
        />
        <div className="why-grid">
          {PILLARS.map((p, i) => (
            <div className="why-item" key={p.title}>
              <span className="why-item__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

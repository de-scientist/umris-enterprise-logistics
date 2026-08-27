import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { PROCESS } from "../../data/process";

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="A clear path from enquiry to delivery"
          intro="Logistics should not be a mystery. Here is exactly how a requirement moves through Umris."
        />
        <ol className="how-steps">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} className="how-step" delay={i * 70}>
              <span className="how-step__num" aria-hidden>
                {p.step}
              </span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

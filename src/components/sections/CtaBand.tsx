import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { WhatsAppButton } from "../ui/WhatsApp";

export default function CtaBand({
  title = "Ready to move your goods with confidence?",
  text = "Tell us what you need moved and we'll get back to you with a clear, tailored quotation.",
  primaryLabel = "Request a Quote",
  primaryTo = "/contact",
  topic = "",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  topic?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-band__actions">
            <Link to={primaryTo} className="btn btn--light btn--lg">
              {primaryLabel} <FaArrowRight />
            </Link>
            <WhatsAppButton label="WhatsApp Umris" variant="light" size="lg" topic={topic} />
          </div>
        </div>
      </div>
    </section>
  );
}

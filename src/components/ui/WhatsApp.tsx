import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "../../data/siteConfig";

export function whatsappMessage(topic: string, detail = ""): string {
  const base = `Hello Umris Enterprise Logistics, I'd like to request a quotation`;
  const service = topic ? ` for ${topic}` : "";
  const extra = detail ? ` ${detail}` : ".";
  return `${base}${service}${extra}`;
}

interface CtaProps {
  topic?: string;
  detail?: string;
  label?: string;
  variant?: "primary" | "accent" | "ghost" | "light" | "ink";
  size?: "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  topic = "",
  detail = "",
  label = "WhatsApp Umris",
  variant = "accent",
  size = "md",
  className = "",
}: CtaProps) {
  return (
    <a
      href={whatsappLink(whatsappMessage(topic, detail))}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "btn",
        `btn--${variant}`,
        size === "lg" ? "btn--lg" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <FaWhatsapp /> {label}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(whatsappMessage("", "Please share how I can get started."))}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with Umris on WhatsApp"
    >
      <FaWhatsapp />
      <span className="wa-float__label">WhatsApp</span>
    </a>
  );
}

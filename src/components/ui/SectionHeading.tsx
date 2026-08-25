import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className = "",
}: Props) {
  return (
    <div
      className={`section-head ${align === "left" ? "section-head--left" : ""} ${className}`}
      style={align === "left" ? { marginInline: 0, textAlign: "left" } : undefined}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

/* Verified business process — mirrors the service-level process described
   across Umris service pages. No metrics or guarantees invented. */
export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Tell Us What You Need",
    detail:
      "Share your cargo, origin, destination and timing. The more we know, the sharper the plan.",
  },
  {
    step: "02",
    title: "We Plan",
    detail:
      "Umris reviews the requirement and proposes a coordinated solution with a clear quotation.",
  },
  {
    step: "03",
    title: "We Coordinate",
    detail:
      "Transport, handling and documentation are organised — one point of contact for the move.",
  },
  {
    step: "04",
    title: "We Execute",
    detail:
      "The movement is carried out to the agreed plan, with status updates through transit.",
  },
  {
    step: "05",
    title: "We Confirm",
    detail:
      "Delivery is verified, signed off and reported back so you have clean closure.",
  },
];

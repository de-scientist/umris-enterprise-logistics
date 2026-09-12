/* ============================================================
   COMPANY — authoritative Umri's Enterprises messaging.
   ------------------------------------------------------------
   Copy below is the official brand wording supplied by the
   business. Do not change its meaning or invent additional
   claims (clients, fleet size, statistics, milestones).
   ============================================================ */

export const COMPANY = {
  foundedYear: 2017,

  /** Official About Us statement (formatting may adapt; meaning must not). */
  about:
    "Since 2017, Umri's Enterprises has been providing exceptional transportation services, building partnerships on trust and delivering excellence through integrity, efficiency, and seamless, timely transportation.",

  mission: {
    eyebrow: "Our Mission",
    heading: "Reliable movement. Meaningful partnerships.",
    text: "We are committed to delivering reliable logistics and transportation solutions with integrity, excellence, and dedication, helping partners achieve their goals and succeed in every journey.",
  },

  vision: {
    eyebrow: "Our Vision",
    heading: "Building resilient communities.",
    text: "Our vision is to build long-term partnerships, supporting developmental and disaster response initiatives to create resilient communities through essential products and services for NGOs and agencies.",
  },

  valuesIntro:
    "We uphold respect, fairness, and transparency as core values, ensuring ethical conduct, fostering trust, and providing an exceptional experience for customers while strengthening partnerships.",
} as const;

export interface CompanyValue {
  title: string;
  text: string;
}

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: "Respect",
    text: "We treat customers, partners, teams, and communities with dignity.",
  },
  {
    title: "Fairness",
    text: "We believe in equitable and responsible relationships.",
  },
  {
    title: "Transparency",
    text: "We communicate honestly and operate with accountability.",
  },
];

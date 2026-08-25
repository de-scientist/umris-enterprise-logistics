import {
  FaTruckMedical,
  FaIndustry,
  FaCartShopping,
  FaWheatAwn,
  FaBuilding,
  FaHandHoldingMedical,
  FaBoxesStacked,
} from "react-icons/fa6";
import type { ReactNode } from "react";

export interface Industry {
  slug: string;
  name: string;
  icon: ReactNode;
  problem: string;
  solution: string;
}

/* Industries reflect sectors Umris already serves (NGO/humanitarian,
   medical, commercial) plus common Kenyan business sectors where the
   existing services apply. No fabricated results are claimed. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "humanitarian-ngo",
    name: "Humanitarian & NGO",
    icon: <FaHandHoldingMedical />,
    problem:
      "Relief and development organisations need cargo moved quickly, sensitively and accountably — often to hard-to-reach areas.",
    solution:
      "Umris supports NGO logistics with structured coordination, tracking and careful handling of supplies, from medical goods to field equipment.",
  },
  {
    slug: "health-medical",
    name: "Health & Medical",
    icon: <FaTruckMedical />,
    problem:
      "Medical supplies are time-critical and must be handled with care and accountability.",
    solution:
      "We coordinate timely, monitored movement of medical and pharmaceutical cargo so clinics and distributors can rely on delivery.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: <FaIndustry />,
    problem:
      "Manufacturers need raw materials in and finished goods out, on a dependable schedule.",
    solution:
      "Our freight and trucking services link production lines to suppliers and customers across Kenya with planned routing.",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: <FaCartShopping />,
    problem:
      "Retailers lose sales when shelves are empty or replenishment is late.",
    solution:
      "Last-mile and distribution support keeps retail outlets supplied, with delivery confirmation at each stop.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: <FaWheatAwn />,
    problem:
      "Agricultural inputs and produce must move within tight windows to avoid spoilage and downtime.",
    solution:
      "We move agricultural cargo and inputs across regions, coordinating timing with the season and harvest.",
  },
  {
    slug: "construction",
    name: "Construction",
    icon: <FaBuilding />,
    problem:
      "Sites stall when materials and equipment are delayed or mishandled.",
    solution:
      "Bulk and equipment movement is planned and tracked so materials arrive when the site needs them.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: <FaBoxesStacked />,
    problem:
      "Online sellers live or die by reliable, trackable delivery to customers.",
    solution:
      "Last-mile delivery with confirmation gives e-commerce businesses a dependable final step to the customer.",
  },
  {
    slug: "corporate",
    name: "Corporate & Institutional",
    icon: <FaBuilding />,
    problem:
      "Corporate and institutional teams need consistent, documented logistics without managing every detail.",
    solution:
      "From procurement support to scheduled deliveries, Umris acts as a steady logistics partner for institutions.",
  },
];

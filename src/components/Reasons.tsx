import React from "react";

// Define prop types for the reusable ReasonCard
interface ReasonCardProps {
  title: string;
  description: string;
}

/**
 * Reusable ReasonCard component
 */
const ReasonCard: React.FC<ReasonCardProps> = ({ title, description }) => {
  return (
    <div className="reason">
      <h3 className="reason-title">{title}</h3>
      <p className="reason-description">{description}</p>
    </div>
  );
};

/**
 * Main ReasonsSection component
 * Tailored for Umris Logistics
 */
const ReasonsSection: React.FC = () => {
  const reasons = [
    {
      title: "Experienced Logistics Team",
      description:
        "Our operations are driven by seasoned logistics professionals who understand supply chains, transport coordination, and cargo management at every level.",
    },
    {
      title: "Reliable & On-Time Delivery",
      description:
        "We value time. Our systems and fleet are optimized to ensure your goods reach their destination safely and as scheduled.",
    },
    {
      title: "Advanced Tracking Systems",
      description:
        "With real-time GPS monitoring and automated updates, you always know where your cargo is — no guesswork, just transparency.",
    },
    {
      title: "Flexible & Scalable Solutions",
      description:
        "Whether you're moving a single shipment or managing heavy flows, our solutions adapt to your business needs and growth.",
    },
    {
      title: "Trusted by Businesses Nationwide",
      description:
        "Manufacturers, wholesalers, and retailers across Kenya rely on us for efficiency, professionalism, and consistent performance.",
    },
    {
      title: "Exceptional Customer Support",
      description:
        "Our support team responds quickly, communicates clearly, and works tirelessly to resolve issues before they become problems.",
    },
  ];

  return (
    <section className="reasons-section" id="reasons">
      {reasons.map((reason, index) => (
        <ReasonCard key={index} {...reason} />
      ))}
    </section>
  );
};

export default ReasonsSection;

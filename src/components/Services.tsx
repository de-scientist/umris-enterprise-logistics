import React from "react";
import freight from "../assets/Freight.jpg";
import warehousing from "../assets/service-warehousing.png";
import clearing from "../assets/clearing.jpeg";
import forwarding from "../assets/Forwarding.jpeg";
import trucking from "../assets/truck1.jpg";
import tracking from "../assets/Route.jpg";
import procurement from "../assets/Procurement.jpeg";
import lastmile from "../assets/Last.jpeg";
import consultancy from "../assets/Consulting.jpeg";

// Define the prop types for the ServiceCard
interface ServiceCardProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

/**
 * Reusable ServiceCard component
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  altText,
  title,
  description,
}) => {
  return (
    <div className="service-card">
      <div className="service-card-img-wrapper">
        <img src={imgSrc} alt={altText} className="service-image" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

/**
 * Main ServicesSection component for Umris Logistics
 */
const ServicesSection: React.FC = () => {
  const services = [
    {
      imgSrc: freight,
      altText: "freight transportation",
      title: "Freight Transportation",
      description:
        "Safe, timely, and cost-efficient movement of goods across Kenya and East Africa. From bulk cargo to delicate shipments, we deliver with reliability and precision.",
    },
    {
      imgSrc: warehousing,
      altText: "secure warehousing",
      title: "Secure Warehousing",
      description:
        "State-of-the-art storage facilities offering inventory management, climate control, and real-time stock visibility for businesses of all sizes.",
    },
    {
      imgSrc: clearing,
      altText: "customs clearing",
      title: "Customs Clearing",
      description:
        "Fast clearing of imported and exported goods. We handle compliance, duty processing, documentation, and port-to-door coordination.",
    },
    {
      imgSrc: forwarding,
      altText: "freight forwarding",
      title: "Freight Forwarding",
      description:
        "End-to-end cargo coordination — shipping schedules, documentation, route planning, and multi-modal logistics tailored to your business needs.",
    },
    {
      imgSrc: trucking,
      altText: "local and long-distance trucking",
      title: "Local & Long-Distance Trucking",
      description:
        "Reliable trucking services for full-load (FTL) and less-than-truckload (LTL) deliveries. Nationwide reach, professional drivers, and tracked movement.",
    },
    {
      imgSrc: tracking,
      altText: "real time cargo tracking",
      title: "Real-Time Cargo Tracking",
      description:
        "Advanced GPS & telematics for 24/7 cargo visibility. Follow your goods from pickup to destination with instant status updates.",
    },
    {
      imgSrc: procurement,
      altText: "procurement and sourcing",
      title: "Procurement & Sourcing",
      description:
        "Corporate and industrial sourcing support. We help businesses acquire quality goods at competitive prices with transparent vendor management.",
    },
    {
      imgSrc: lastmile,
      altText: "last mile deliveries",
      title: "Last-Mile Delivery",
      description:
        "Fast, dependable last-mile distribution for e-commerce, retail, and corporate clients. We bridge the final step between business and customer.",
    },
    {
      imgSrc: consultancy,
      altText: "logistics consultancy",
      title: "Logistics Consultancy",
      description:
        "Data-driven logistics strategy — route optimization, supply chain planning, cost reduction, and operational excellence for growing businesses.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="title">
        <p className="title-sub">what we deliver for you</p>
        <h2 className="title-main">our services</h2>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

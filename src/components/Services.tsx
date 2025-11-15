import React from "react";

const services = [
  {
    title: "Freight Transportation",
    description: "Safe and timely delivery of goods across the country.",
  },
  {
    title: "Warehousing & Storage",
    description: "Modern, secure storage solutions for your goods.",
  },
  {
    title: "Last-Mile Delivery",
    description: "Efficient delivery to your final destination, on schedule.",
  },
  {
    title: "Customs Clearance",
    description:
      "Professional handling of customs and documentation processes.",
  },
];

const Services: React.FC = () => (
  <section id="services" className="services">
    <h2>Our Services</h2>
    <div className="service-list">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

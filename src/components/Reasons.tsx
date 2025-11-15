import React from "react";

const reasons = [
  {
    title: "Reliable & On-Time Delivery",
    description:
      "We understand that time is money. Our fleet and tracking systems ensure every shipment arrives exactly when expected.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "From Naivasha to Nairobi and beyond, our logistics network spans all major towns across Kenya.",
  },
  {
    title: "Secure Handling",
    description:
      "Your goods are valuable — we use top-grade packaging, GPS tracking, and professional handlers for maximum safety.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs, no surprises. Our quotes are clear and competitive, giving you full control over your logistics spend.",
  },
  {
    title: "Dedicated Support Team",
    description:
      "Our support staff are available round-the-clock to answer questions, provide updates, and handle any special requests.",
  },
];

const Reasons: React.FC = () => (
  <section id="why-us" className="reasons">
    <h2>Why Choose Us</h2>
    <p>
      At Umris Enterprise Logistics, we go beyond moving goods — we move
      businesses forward. Here’s why our clients trust us:
    </p>

    <div className="reasons-list">
      {reasons.map((reason, index) => (
        <div key={index} className="reason-item">
          <h4>{reason.title}</h4>
          <p>{reason.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Reasons;

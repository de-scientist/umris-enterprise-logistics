import React from "react";

const faqData = [
  {
    question: "What areas do you serve?",
    answer: "We operate across Kenya and East Africa.",
  },
  {
    question: "Do you handle fragile goods?",
    answer:
      "Yes, we specialize in careful transport of sensitive and fragile items.",
  },
  {
    question: "How do I get a quote?",
    answer: "Simply fill in the contact form below or call us directly.",
  },
  {
    question: "Can I track my shipment?",
    answer: "Yes, we provide real-time shipment tracking for all deliveries.",
  },
];

const FAQ: React.FC = () => (
  <section id="faq" className="faq">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;

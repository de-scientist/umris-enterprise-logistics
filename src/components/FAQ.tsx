import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What logistics services does Umris Logistics offer?",
    answer:
      "We provide transport, warehousing, last-mile delivery, humanitarian logistics, procurement support, and tailored end-to-end supply chain solutions for individuals, SMEs, and organizations.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes. Same-day delivery is available within designated regions depending on package size, urgency, and dispatch time. Our team confirms availability immediately upon request.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We operate across Kenya, with extended regional delivery options in East Africa. Long-distance and cross-county movements are fully supported.",
  },
  {
    question: "Do you provide warehousing and storage?",
    answer:
      "Yes. We offer secure, monitored warehousing for short-term and long-term storage, including perishables, equipment, and bulk goods depending on your needs.",
  },
  {
    question: "Can Umris Logistics handle large or bulky shipments?",
    answer:
      "Absolutely. We manage oversized cargo, bulk goods, heavy-duty equipment, and multi-package consignments with proper loading, handling, and route planning.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "Clients receive a tracking code once a consignment is dispatched. Our team also provides real-time updates through WhatsApp, SMS, or direct calls for full transparency.",
  },
  {
    question: "What are your delivery charges?",
    answer:
      "Delivery fees depend on distance, package weight, urgency, and service type. We provide instant quotations based on your specific request—no hidden costs.",
  },
  {
    question: "Do you offer humanitarian and emergency logistics?",
    answer:
      "Yes. We support emergency response, charity missions, essential goods delivery, bulk food distribution, and NGO-based logistics with speed and accuracy.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a quote through our contact form, WhatsApp, Facebook page, or via a direct call. Provide package size, destination, and urgency for an accurate cost estimate.",
  },
  {
    question: "Is my package insured during transport?",
    answer:
      "We offer insurance options based on the value and sensitivity of the goods. High-value shipments can be fully covered upon request.",
  },
];

const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFAQs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>{faq.question}</h4>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

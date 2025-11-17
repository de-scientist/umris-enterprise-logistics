import React from "react";
import img1 from "../assets/testimonial-1.jpg";
import img2 from "../assets/testimonial-2.jpg";
import img3 from "../assets/testimonial-3.jpg";
import img4 from "../assets/testimonial-4.jpg";
import img5 from "../assets/testimonial-5.jpg";
import img6 from "../assets/testimonial-6.jpg";

// Define types for testimonial props
interface TestimonialProps {
  imgSrc: string;
  imgAlt: string;
  text: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  imgSrc,
  imgAlt,
  text,
  author,
}) => {
  return (
    <div className="testimonial">
      <img src={imgSrc} alt={imgAlt} className="testimonial-img" />
      <div className="testimonial-content">
        <p className="testimonial-text">"{text}"</p>
        <h4>— {author}</h4>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      imgSrc: img1,
      imgAlt: "Diptesh - Spartan Relief Ltd",
      text:
        "Umris Logistics has consistently delivered speed, clarity, and professionalism. Their reliability has made our emergency response operations smoother and far more efficient.",
      author: "Diptesh, Spartan Relief Limited",
    },
    {
      imgSrc: img2,
      imgAlt: "Manasseh - Malteser International",
      text:
        "Their coordination and real-time tracking solutions have transformed how we move medical supplies across the region. Precision like this is rare in the logistics space.",
      author: "Manasseh, Malteser International",
    },
    {
      imgSrc: img3,
      imgAlt: "Joy - Medisel (K) Ltd",
      text:
        "Timely deliveries save lives. Umris Logistics understands this truth deeply — their professionalism and accountability make them one of our most trusted partners.",
      author: "Joy, Medisel (K) Limited",
    },
    {
      imgSrc: img4,
      imgAlt: "George - Arkangelo Ali Association South Sudan",
      text:
        "Cross-border operations are never easy, yet Umris Logistics handles them with confidence, structure, and skill. Their team is dependable even under pressure.",
      author: "George, Arkangelo Ali Association — South Sudan",
    },
    {
      imgSrc: img5,
      imgAlt: "NGO Partner – Nairobi",
      text:
        "In humanitarian logistics, consistency matters more than promises. Umris has proven their commitment through flawless coordination during our field projects.",
      author: "Field Operations Lead, International NGO – Kenya",
    },
    {
      imgSrc: img6,
      imgAlt: "NGO Partner – Kenya",
      text:
        "Their team understands urgency, sensitivity, and confidentiality. Working with Umris Logistics has strengthened our supply chain more than we expected.",
      author: "Programs Coordinator, Relief NGO – Kenya",
    },
  ];

  return (
    <section id="testimonial" className="testimonial-section">
      <h2 className="title-sub">What Our Partners Say</h2>

      {/* Grid of 3 on top, 3 below */}
      <div className="testimonial-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

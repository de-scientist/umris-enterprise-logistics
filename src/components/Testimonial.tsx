import React from "react";

const testimonials = [
  {
    name: "Jane W.",
    text: "Umris Enterprise has been our go-to logistics partner for years. They never disappoint!",
  },
  {
    name: "Moses K.",
    text: "Their delivery speed and professionalism are unmatched. I highly recommend them.",
  },
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="testimonials">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-list">
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-item">
          <p>"{t.text}"</p>
          <h4>- {t.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

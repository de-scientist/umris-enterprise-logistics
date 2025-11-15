import React, { useState } from "react";

export interface CarouselItem {
  imageUrl: string;
  caption?: string;
}

interface CarouselShowcaseProps {
  title?: string;
  description?: string;
  items: CarouselItem[];
}

const CarouselShowcase: React.FC<CarouselShowcaseProps> = ({
  title = "Our Trucks In Action",
  description = "A look at Umris Enterprise Logistics on the ground — delivering safely, reliably, and consistently across Kenya.",
  items,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div className="carousel-slide">
          <img
            src={items[current].imageUrl}
            alt={`Truck work photo ${current + 1}`}
          />
          {items[current].caption && (
            <p className="carousel-caption">{items[current].caption}</p>
          )}
        </div>

        <button className="carousel-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CarouselShowcase;

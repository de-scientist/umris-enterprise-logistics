import React from "react";

interface HeroProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Umris Logistics — Moving Goods, Moving Trust",
  description = `From Thika to every corner of Kenya, we deliver with precision, speed, and integrity. 
  Whether it's parcels, bulk cargo, or last-mile distribution, Umris ensures your goods 
  arrive safely, on time, every time.`,
  ctaText = "Explore Our Services",
  ctaLink = "#services",
}) => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-textbox">
        <p className="hero-textbox-paragraph">{title}</p>

        <h1 className="hero-textbox-heading">{description}</h1>

        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-textbox-cta"
          aria-label={`Navigate to ${ctaText}`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;

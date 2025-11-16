import React from "react";
import about from "../assets/t3.jpeg";

// Define props for flexibility and reusability
interface AboutProps {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const About: React.FC<AboutProps> = ({
  subtitle = "Reliable logistics for every journey",
  title = "Delivering your goods safely, efficiently, and on time",
  description = `At Umris Logistics, we specialize in fast, secure, and dependable transport solutions 
  across Kenya. From parcel deliveries to bulk cargo movement, we ensure your goods reach 
  their destination with precision. Our commitment is simple — trusted service, transparent 
  communication, and logistics you can rely on every step of the way.`,
  ctaText = "Start Shipping Today",
  ctaLink = "#services",
  imageSrc = about,
  imageAlt = "umris logistics truck",
}) => {
  return (
    <section className="about-section" id="about">
      {/* --- Left Text Box --- */}
      <div className="about-textbox">
        <p className="about-text-subtitle">{subtitle}</p>

        <h2 className="about-title">{title}</h2>

        <p className="about-description">{description}</p>

        <a
          href={ctaLink}
          target="#"
          rel="noopener noreferrer"
          className="about-cta"
          aria-label={ctaText}
        >
          {ctaText}
        </a>
      </div>

      {/* --- Right Image --- */}
      <div className="about-img-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="about-img-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;

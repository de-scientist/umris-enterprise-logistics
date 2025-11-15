import React from "react";

interface ShowcaseProps {
  title?: string;
  description?: string;
  imageUrl: string;
  postLink: string;
}

const Showcase: React.FC<ShowcaseProps> = ({
  title = "Our Trucks In Action",
  description = "Umris Enterprise Logistics is always on the move — serving businesses, delivering safely, and keeping Kenya connected. Here's a recent moment captured while our team was at work.",
  imageUrl,
  postLink,
}) => {
  return (
    <section className="showcase">
      <div className="showcase-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="showcase-card">
          <img src={imageUrl} alt="Umris Enterprise Logistics truck at work" />

          <div className="showcase-footer">
            <a
              href={postLink}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-btn"
            >
              View Original Post
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

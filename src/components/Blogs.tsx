import React from "react";
import img from "../assets/t1.jpeg";
import img2 from "../assets/t2.jpeg";
import img3 from "../assets/blog-img-3.jpg";

// Define types for blog metadata and blog card
interface BlogMeta {
  date: string;
  author: string;
}

interface BlogCardProps {
  title: string;
  synopsis: string;
  imageSrc: string;
  imageAlt: string;
  chips: string[];
  meta: BlogMeta;
  link?: string;
}

/**
 * Reusable BlogCard component
 */
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  synopsis,
  imageSrc,
  imageAlt,
  chips,
  meta,
  link = "#",
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="blog-card-featured-image"
        />
      </div>

      <div className="blog-card-chips-container">
        {chips.map((chip, idx) => (
          <a key={idx} href="#" className="blog-card-chip">
            {chip}
          </a>
        ))}
      </div>

      <a href={link} className="blog-card-title">
        <h3 className="blog-card-title-title">{title}</h3>
      </a>

      <p
        className="blog-synopsis"
        dangerouslySetInnerHTML={{ __html: synopsis }}
      />

      <div className="blog-card-meta-information">
        <div className="blog-card-meta">
          <i className="fa-solid fa-calendar-days"></i>
          <p dangerouslySetInnerHTML={{ __html: meta.date }} />
        </div>
        <div className="blog-card-meta">
          <i className="fa-solid fa-user"></i>
          <a href="#">{meta.author}</a>
        </div>
      </div>
    </div>
  );
};

/**
 * Main BlogSection component (UMRIS LOGISTICS VERSION – ONLY 3 BLOGS)
 */
const BlogSection: React.FC = () => {
  const blogs: BlogCardProps[] = [
    {
      title: "Why Efficient Logistics Is the Backbone of Modern Business",
      synopsis: `
        In today’s fast-moving economy, your supply chain determines your speed, reliability, and customer satisfaction.
        At Umris Logistics, we streamline every link — from warehousing to last-mile delivery — ensuring businesses across Kenya
        operate with precision and confidence. A strong logistics partner doesn’t just move goods; it moves growth.
      `,
      imageSrc: img,
      imageAlt: "Umris Logistics delivery truck",
      chips: ["logistics", "business growth"],
      meta: { date: "5<sup>th</sup> November 2025", author: "Umris Logistics Team" },
    },
    {
      title: "How Real-Time Tracking Improves Customer Trust",
      synopsis: `
        Customers want transparency — and real-time tracking delivers exactly that.
        Our GPS-enabled fleet allows clients to monitor their shipments every step of the way.
        This improves trust, reduces delays, and brings accountability to the entire delivery process.
        For companies, visibility isn’t a luxury; it’s a competitive advantage.
      `,
      imageSrc: img2,
      imageAlt: "Tracking dashboard interface",
      chips: ["technology", "tracking", "innovation"],
      meta: { date: "29<sup>th</sup> October 2025", author: "Umris Logistics Team" },
    },
    {
      title: "Optimizing Delivery Routes to Reduce Costs in Kenya",
      synopsis: `
        Poor route planning leads to fuel wastage, delays, and frustrated clients.
        Umris Logistics uses data-driven routing systems that analyze traffic, road conditions,
        and delivery clusters to choose the most efficient paths.
        The result? Lower operational costs, faster deliveries, and happier customers.
      `,
      imageSrc: img3,
      imageAlt: "Route optimization map",
      chips: ["transport", "efficiency"],
      meta: { date: "20<sup>th</sup> October 2025", author: "Umris Logistics Team" },
    },
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="title">
        <p className="title-sub">latest from our blog</p>
        <h2 className="title-main">our blog</h2>
      </div>

      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

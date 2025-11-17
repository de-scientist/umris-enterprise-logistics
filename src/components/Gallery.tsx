import React, { useState } from "react";

// Umris Logistics in action
import truck1 from "../assets/t1.jpeg";
import warehouse from "../assets/t2.jpeg";
import delivery from "../assets/umris-delivery.jpg";
import fleet from "../assets/umris-fleet.jpg";
import loading from "../assets/umris-loading.jpg";
import clearance from "../assets/umris-customs.jpg";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      src: truck1,
      alt: "Umris Logistics truck on transit",
      caption: "Reliable cross-border transport handled with precision.",
    },
    {
      src: warehouse,
      alt: "Warehouse operations",
      caption: "Secure storage with real-time monitoring.",
    },
    {
      src: delivery,
      alt: "Last-mile delivery in the field",
      caption: "Delivering humanitarian and medical supplies where needed most.",
    },
    {
      src: fleet,
      alt: "Our operational fleet",
      caption: "A growing fleet ready for emergency and planned dispatch.",
    },
    {
      src: loading,
      alt: "Cargo loading operations",
      caption: "Efficient loading handled by trained logistics teams.",
    },
    {
      src: clearance,
      alt: "Border clearance process",
      caption: "Smooth customs clearance for NGO partners across East Africa.",
    },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState<string>("");
  const [currentCaption, setCurrentCaption] = useState<string>("");

  const openLightbox = (src: string, caption?: string) => {
    setCurrentImg(src);
    setCurrentCaption(caption || "");
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg("");
    setCurrentCaption("");
  };

  return (
    <section id="gallery" className="gallery">
      <h2 className="gallery-title">Operational Gallery</h2>
      <p className="gallery-sub">
        A glimpse into the daily work that keeps supply chains alive and missions
        moving across East Africa.
      </p>

      {/* GRID */}
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(item.src, item.caption)}
          >
            <img src={item.src} alt={item.alt} />
            {item.caption && <p className="gallery-item-caption">{item.caption}</p>}
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <img className="lightbox-content" src={currentImg} alt="Enlarged view" />
          {currentCaption && (
            <p className="lightbox-caption">{currentCaption}</p>
          )}
        </div>
      )}

      {/* FACEBOOK POST EMBED */}
      <div className="fb-post-wrapper">
        <h3 className="fb-title">From Our Facebook Feed</h3>

        <div
          className="fb-post"
          dangerouslySetInnerHTML={{
            __html: `
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                  "https://www.facebook.com/100063605441743/posts/1416999480430220/?mibextid=rS40aB7S9Ucbxw6v"
                )}&show_text=true&width=500" 
                width="500" 
                height="680" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
              </iframe>
            `,
          }}
        ></div>
      </div>
    </section>
  );
};

export default GallerySection;

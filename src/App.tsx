// App.tsx
import React from "react";

// Core Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import GalleryCarousel from "./components/GalleryCarousel";
import Reasons from "./components/Reasons";
import Map from "./components/Map";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="app-container">

      {/* Hero / Intro */}
      <Hero />

      {/* Who We Are */}
      <About />

      {/* What We Offer */}
      <Services />

      {/* Why Choose Us */}
      <Reasons />

      {/* Trucks In Action - Dynamic Carousel */}
      <GalleryCarousel />

      {/* Testimonials */}
      <Testimonials />

      {/* Coverage Location - Naivasha, Kenya */}
      <Map />

      {/* Contact / Book a Delivery */}
      <Contact />

    </div>
  );
};

export default App;

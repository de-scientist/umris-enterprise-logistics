// App.tsx
import React from "react";

// Core Sections
import Header from "./components/Header";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="app-container">

      {/* Header */}
      <Header />

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

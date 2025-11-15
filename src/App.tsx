// App.tsx
import React from "react";

// Core Sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reasons from "./components/Reasons";
import CarouselShowcase from "./components/carouselShowcase";
import Testimonials from "./components/Testimonial";
import Showcase from "./components/showcase";
import Map from "./components/Map";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";


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
      <CarouselShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* showcase */}
      <Showcase />

      {/* Coverage Location - Naivasha, Kenya */}
      <Map />

      {/* Contact / Book a Delivery */}
      <Contact />

      {/* FAQ */}
      <FAQ />

    </div>
  );
};

export default App;

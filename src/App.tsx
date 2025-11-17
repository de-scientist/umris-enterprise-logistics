import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/Services";
import ReasonsSection from "./components/Reasons";
import TeamSection from "./components/Team";
import BlogSection from "./components/Blogs";
import TestimonialSection from "./components/Testimonial";
import GallerySection from "./components/Gallery";
//import ContactSection from "./components/Contact";
//import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ServicesSection />
      <ReasonsSection />
      <TeamSection />
      <BlogSection />
      <TestimonialSection />
      <GallerySection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

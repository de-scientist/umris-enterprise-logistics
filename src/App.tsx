import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import MobileActionBar from "./components/layout/MobileActionBar";
import { WhatsAppFloat } from "./components/ui/WhatsApp";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Tracking = lazy(() => import("./pages/Tracking"));
const Quote = lazy(() => import("./pages/Quote"));
const FaqPage = lazy(() => import("./pages/Faq"));
const Locations = lazy(() => import("./pages/Locations"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Insights = lazy(() => import("./pages/Insights"));
const Article = lazy(() => import("./pages/Article"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Loading() {
  return (
    <div className="container section text-center text-muted" aria-label="Loading page">
      <div className="page-skeleton" aria-hidden="true">
        <span className="sk sk--line" />
        <span className="sk sk--block" />
      </div>
      <p>Loading…</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<Article />} />
            {/* Legacy /resources alias → insights hub */}
            <Route path="/resources" element={<Navigate to="/insights" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppFloat />
    </>
  );
}

import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScheduleAndRoute from "./components/ScheduleAndRoute";

// Lazy load below-fold components for better initial load performance
const FleetGallery = lazy(() => import("./components/FleetGallery"));
const BookingForm = lazy(() => import("./components/BookingForm"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingWA = lazy(() => import("./components/FloatingWA"));

// Loading fallback for lazy components
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ScheduleAndRoute />
        <Suspense fallback={<SectionLoader />}>
          <FleetGallery />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BookingForm />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingWA />
      </Suspense>
    </div>
  );
}

export default App;

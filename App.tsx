import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScheduleAndRoute from "./components/ScheduleAndRoute";
import FleetGallery from "./components/FleetGallery";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <ScheduleAndRoute />
        <FleetGallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}

export default App;

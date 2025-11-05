import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

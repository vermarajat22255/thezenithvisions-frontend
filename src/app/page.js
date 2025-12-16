"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GlobalPresence from "@/components/GlobalPresence";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesStrip from "@/components/ServicesStrip";
import Contact from "@/components/Contact";
import SoftwareLogos from "@/components/SoftwareLogos";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <GlobalPresence />
      <WhyChooseUs />
      <ServicesStrip />
      <Contact />
      <SoftwareLogos />
      <Footer />
      <ClientScripts />
    </main>
  );
}

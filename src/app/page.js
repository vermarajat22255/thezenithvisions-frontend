"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import About from "@/components/About";
import Brochure from "@/components/Brochure";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import GlobalPresence from "@/components/GlobalPresence";
import WhyChooseUs from "@/components/WhyChooseUs";
import BenefitsStrip from "@/components/BenefitsStrip";
import Contact from "@/components/Contact";
import SoftwareLogos from "@/components/SoftwareLogos";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesStrip />
      <About />
      <Brochure />
      <Services />
      <Projects />
      <GlobalPresence />
      <WhyChooseUs />
      <BenefitsStrip />
      <Contact />
      <MeetTheTeam />
      <SoftwareLogos />
      <Footer />
      <ClientScripts />
    </>
  );
}

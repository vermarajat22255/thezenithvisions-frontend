"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import SoftwareLogos from "@/components/SoftwareLogos";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("1");
  const [activeSubService, setActiveSubService] = useState(null);

  const services = [
    {
      id: "1",
      name: "ARCHITECTURE BIM",
      description: "At The Zenith Visions, we specialize in delivering cutting-edge Architectural BIM Services that redefine the way architecture meets technology. Our approach focuses on creating intelligent, data-rich 3D models that streamline the design, documentation, and execution of architectural projects, ensuring unmatched precision and efficiency can bring your vision to life.",
      subServices: [
        { name: "ARCHITECTURE BIM MODELING", desc: "Creating detailed 3D architectural models with accurate geometry, materials, and spatial relationships for design visualization and coordination." },
        { name: "BIM DOCUMENTATION SERVICE", desc: "Comprehensive construction documentation including floor plans, elevations, sections, and details extracted directly from the BIM model." },
        { name: "REVIT FAMILY CREATION", desc: "Custom parametric Revit families tailored to your project requirements, ensuring consistency and efficiency across all design elements." },
        { name: "LANDSCAPE MODELING", desc: "Detailed landscape BIM models including terrain, hardscape, softscape, and site elements for complete project visualization." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/ARCHITECTURE_BIM_zykljc.jpg"
    },
    {
      id: "2",
      name: "STRUCTURAL BIM",
      description: "At The Zenith Visions, we specialize in delivering cutting-edge Structural BIM Services that revolutionize how structural design integrates with advanced technology. Our approach focuses on developing intelligent, data-rich 3D models that optimize the analysis, design, and documentation processes.",
      subServices: [
        { name: "STRUCTURE BIM MODELING", desc: "Comprehensive structural modeling including foundations, columns, beams, slabs, and connections with accurate load paths and member sizes." },
        { name: "STEEL STRUCTURE MODELING", desc: "Detailed steel fabrication models with connections, shop drawings, and erection sequences for seamless steel construction." },
        { name: "REBAR DETAILING & MODELING", desc: "Precise reinforcement detailing and 3D rebar modeling for concrete structures, ensuring constructability and code compliance." },
        { name: "CLASH DETECTION", desc: "Advanced clash detection and coordination between structural and other disciplines to eliminate field conflicts." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/STRUCTURE_BIM_f5z6ff.jpg"
    },
    {
      id: "3",
      name: "MEP BIM",
      description: "At The Zenith Visions, we excel in providing state-of-the-art MEP BIM Services, revolutionizing how mechanical, electrical, and plumbing systems integrate with technology. Our expertise lies in creating intelligent, data-enriched 3D models that optimize design coordination.",
      subServices: [
        { name: "MECHANICAL BIM MODELING", desc: "Complete HVAC system modeling including ductwork, equipment, piping, and controls for optimal system performance." },
        { name: "ELECTRICAL BIM MODELING", desc: "Detailed electrical system modeling including power distribution, lighting, fire alarm, and low voltage systems." },
        { name: "PLUMBING BIM MODELING", desc: "Comprehensive plumbing and fire protection modeling with accurate pipe sizing, fixtures, and system coordination." },
        { name: "MEP DOCUMENTATION", desc: "Complete MEP construction documents including plans, sections, details, and schedules extracted from the coordinated model." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/MEP_vvp1pb.jpg"
    },
    {
      id: "4",
      name: "DRAFTING",
      description: "At The Zenith Visions, we pride ourselves on delivering precise and high-quality drafting services tailored to meet the needs of architects, engineers, contractors, and designers. Whether you need detailed CAD drafting, permit set documentation, or interior design documentation.",
      subServices: [
        { name: "CAD DOCUMENTATION SERVICE", desc: "Professional CAD drafting services for architectural, structural, and MEP documentation with industry-standard deliverables." },
        { name: "CAD DETAILING SERVICE", desc: "Detailed CAD drawings including construction details, assembly drawings, and custom specifications." },
        { name: "PDF TO CAD CONVERSION", desc: "Accurate conversion of PDF drawings, sketches, and scanned documents to editable CAD formats." },
        { name: "PERMIT SETS & ADU DRAWINGS", desc: "Complete permit-ready drawing sets for building permits, ADU projects, and code compliance submissions." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/DRAFTING_jmfgd8.jpg"
    },
    {
      id: "5",
      name: "INTERIOR",
      description: "Interior documentation is a critical part of the design and construction process, ensuring accurate translation of design intent into executable plans. At The Zenith Visions, we specialize in delivering comprehensive interior documentation services.",
      subServices: [
        { name: "BIM INTERIOR MODELING", desc: "Detailed interior BIM models including millwork, furniture, fixtures, and finishes for complete design visualization." },
        { name: "INTERIOR DESIGN DOCUMENTATION", desc: "Comprehensive interior design documents including finish schedules, furniture plans, and material specifications." },
        { name: "JOINERY DESIGN & DETAILS", desc: "Custom millwork and joinery design with detailed shop drawings for fabrication and installation." },
        { name: "QUANTITY TAKE-OFF", desc: "Accurate material quantities extracted from BIM models for cost estimation and procurement planning." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/INTERIOR_DOCUMENTATION_faqifu.jpg"
    },
    {
      id: "6",
      name: "SCAN TO BIM",
      description: "Scan to BIM involves converting point cloud data obtained through 3D laser scanning or LiDAR technology into accurate, information-rich Building Information Models (BIM). These models capture the as-built conditions of a structure or site.",
      subServices: [
        { name: "SCAN TO BIM", desc: "Converting point cloud data into intelligent BIM models for existing buildings, capturing as-built conditions accurately." },
        { name: "SCAN TO CAD", desc: "Transforming laser scan data into 2D CAD drawings for renovation, documentation, and facility management." },
        { name: "SCAN TO BIM STRUCTURE & MEP", desc: "Detailed modeling of existing structural and MEP systems from point cloud data for renovation projects." },
        { name: "AS-BUILT BIM MODEL", desc: "Complete as-built documentation capturing existing conditions for facility management and future renovations." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/SCAN_TO_BIM_urqwzw.jpg"
    },
    {
      id: "7",
      name: "3D VISUALIZATION",
      description: "We specialize in providing cutting-edge 3D visualization services that bring architectural, interior, and conceptual designs to life. Using advanced tools like Revit, Lumion, Enscape, Twinmotion, and SketchUp.",
      subServices: [
        { name: "3D ARCHITECTURAL RENDERING", desc: "Photorealistic exterior renderings showcasing design intent, materials, lighting, and landscaping." },
        { name: "ANIMATION & WALKTHROUGH", desc: "Dynamic 3D animations and virtual walkthroughs for project presentations and marketing." },
        { name: "INTERIOR RENDERING", desc: "High-quality interior visualizations with realistic materials, lighting, and furniture styling." },
        { name: "VIRTUAL REALITY VISUALIZATION", desc: "Immersive VR experiences allowing clients to explore designs in virtual reality before construction." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/3D_VISUALIZATION_jilyrz.jpg"
    },
    {
      id: "8",
      name: "3D MODELING",
      description: "Welcome to The Zenith Visions, where innovation meets precision in 3D modeling. Our comprehensive range of 3D modeling services is tailored to architects, designers, engineers, and contractors who seek accuracy and efficiency.",
      subServices: [
        { name: "REVIT BIM MODELING", desc: "Professional Revit modeling services for architectural, structural, and MEP disciplines." },
        { name: "ARCHICAD BIM MODELING", desc: "Expert ArchiCAD modeling for architects preferring the ArchiCAD platform." },
        { name: "SKETCHUP MODELING", desc: "Fast and efficient SketchUp modeling for concept design and early-stage visualization." },
        { name: "VECTORWORKS MODELING", desc: "Specialized Vectorworks modeling for landscape architecture and entertainment design." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765898212/3D_MODELING_je6gpz.jpg"
    },
    {
      id: "9",
      name: "REVIT FAMILIES",
      description: "At The Zenith Visions, we specialize in creating custom Revit Families that enhance your BIM workflow and project efficiency. Our expertly crafted parametric families are designed to meet industry standards.",
      subServices: [
        { name: "MEP FAMILIES", desc: "Custom MEP equipment families including mechanical units, electrical fixtures, and plumbing elements." },
        { name: "FURNITURE FAMILIES", desc: "Parametric furniture families for interior design with multiple size and finish options." },
        { name: "GENERIC ANNOTATION", desc: "Custom annotation symbols, tags, and detail components for enhanced documentation." },
        { name: "STRUCTURAL FAMILIES", desc: "Structural connection families, custom profiles, and framing elements for steel and concrete." }
      ],
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/REVIT_FAMILIES_2_rgkf3u.jpg"
    }
  ];

  const currentService = services.find(s => s.id === activeService);
  const currentSubService = activeSubService !== null ? currentService?.subServices[activeSubService] : null;

  return (
    <>
      <Navbar />
      
      {/* Video Hero Section */}
      <section className="page-video-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="page-hero-video"
          poster="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
        >
          <source
            src="https://res.cloudinary.com/dx0nrghqt/video/upload/v1765996392/FINAL_VIDEO_fprwyh.mp4"
            type="video/mp4"
          />
        </video>
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="page-hero-tag">OUR SERVICES</span>
            <h1 className="page-hero-title">What We Offer</h1>
            <p className="page-hero-description">
              Comprehensive BIM solutions tailored to transform your architectural vision into reality
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-page-section">
        <div className="services-page-header">
          <span className="services-page-tag">SERVICES</span>
          <h2 className="services-page-title">WHAT WE OFFER</h2>
          <p className="services-page-desc">
            &quot;The Zenith Visions&quot; transforms your design goals into reality through intelligent 
            BIM workflows, detailed documentation, and photorealistic visualization.
          </p>
        </div>

        {/* Horizontal Service Tabs */}
        <div className="services-tabs-wrapper">
          <div className="services-tabs-container">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveService(service.id);
                  setActiveSubService(null);
                }}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="service-content-wrapper">
          <div className="service-content-container">
            <div className="service-main-content">
              <h3 className="service-content-title">{currentService?.name} SERVICE</h3>
              <p className="service-content-desc">{currentService?.description}</p>
              
              {/* Sub Services */}
              <div className="subservices-list">
                {currentService?.subServices.map((sub, index) => (
                  <div
                    key={index}
                    className={`subservice-item ${activeSubService === index ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubService(index)}
                    onMouseLeave={() => setActiveSubService(null)}
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="service-visual-content">
              {currentSubService ? (
                <div className="subservice-detail">
                  <h4>{currentSubService.name}</h4>
                  <p>{currentSubService.desc}</p>
                </div>
              ) : (
                <div className="service-image-wrapper">
                  <img src={currentService?.image} alt={currentService?.name} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let&apos;s discuss how our BIM services can transform your next project</p>
          <div className="services-cta-buttons">
            <a href="/contact" className="services-cta-primary">Get Started</a>
            <a href="/projects" className="services-cta-secondary">View Our Work</a>
          </div>
        </div>
      </section>

      <SoftwareLogos />
      <Footer />
      <ClientScripts />
    </>
  );
}

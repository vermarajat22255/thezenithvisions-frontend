"use client";

import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState("1");

  const handleClick = (serviceId) => {
    setActiveService(serviceId);
  };

  return (
    <section id="services" className="services">
      <div className="services-hero-header">
        <div className="services-centered-container">
          <div className="services-tag-center">SERVICES</div>
          <h2 className="services-main-title">WHAT WE OFFER</h2>
          <p className="services-main-description">
            &quot;The Zenith Visions&quot; transforms your design goals into
            reality through intelligent BIM workflows, detailed documentation,
            and photorealistic visualization. We bridge innovation and
            efficiency, empowering AEC firms worldwide to deliver better,
            faster, and more profitably-making outsourcing not just convenient,
            but strategically powerful.
          </p>
        </div>
      </div>

      <div className="services-content-wrapper">
        <div className="services-container">
          <div className="services-content">
            <div className="services-list">
              <div 
                className={`service-link ${activeService === "1" ? "active" : ""}`}
                onClick={() => handleClick("1")}
              >
                ARCHITECTURE BIM SERVICE
              </div>
              <div 
                className={`service-link ${activeService === "2" ? "active" : ""}`}
                onClick={() => handleClick("2")}
              >
                STRUCTURAL BIM SERVICE
              </div>
              <div 
                className={`service-link ${activeService === "3" ? "active" : ""}`}
                onClick={() => handleClick("3")}
              >
                MEP BIM SERVICE
              </div>
              <div 
                className={`service-link ${activeService === "4" ? "active" : ""}`}
                onClick={() => handleClick("4")}
              >
                DRAFTING SERVICES
              </div>
              <div 
                className={`service-link ${activeService === "5" ? "active" : ""}`}
                onClick={() => handleClick("5")}
              >
                INTERIOR DOCUMENTATION
              </div>
              <div 
                className={`service-link ${activeService === "6" ? "active" : ""}`}
                onClick={() => handleClick("6")}
              >
                SCAN TO BIM SERVICES
              </div>
              <div 
                className={`service-link ${activeService === "7" ? "active" : ""}`}
                onClick={() => handleClick("7")}
              >
                3D VISUALIZATION
              </div>
              <div 
                className={`service-link ${activeService === "8" ? "active" : ""}`}
                onClick={() => handleClick("8")}
              >
                3D MODELING
              </div>
              <div 
                className={`service-link ${activeService === "9" ? "active" : ""}`}
                onClick={() => handleClick("9")}
              >
                REVIT FAMILIES
              </div>
            </div>

            <div className="service-details">
              {activeService === "1" && (
                <div className="service-detail-item active">
                  <h3>ARCHITECTURE BIM SERVICE</h3>
                  <p className="service-description-text">
                    At The Zenith Visions, we specialize in delivering
                    cutting-edge Architectural BIM Services that redefine the way
                    architecture meets technology. Our approach focuses on
                    creating intelligent, data-rich 3D models that streamline the
                    design, documentation, and execution of architectural
                    projects, ensuring unmatched precision and efficiency can
                    bring your vision to life.
                  </p>
                  <ul className="sub-services">
                    <li>ARCHITECTURE BIM MODELING</li>
                    <li>BIM DOCUMENTATION SERVICE</li>
                    <li>REVIT FAMILY CREATION</li>
                    <li>LANDSCAPE MODELING</li>
                  </ul>
                </div>
              )}
              {activeService === "2" && (
                <div className="service-detail-item active">
                  <h3>STRUCTURAL BIM SERVICE</h3>
                  <p className="service-description-text">
                    At The Zenith Visions, we specialize in delivering
                    cutting-edge Structural BIM Services that revolutionize how
                    structural design integrates with advanced technology. Our
                    approach focuses on developing intelligent, data-rich 3D
                    models that optimize the analysis, design, and documentation
                    processes. By seamlessly integrating structural integrity with
                    precision and efficiency, we ensure every project is executed
                    to perfection, bringing your vision to life with unparalleled
                    expertise.
                  </p>
                  <ul className="sub-services">
                    <li>STRUCTURE BIM MODELING</li>
                    <li>STEEL STRUCTURE MODELING</li>
                    <li>REBAR DETAILING & MODELING</li>
                    <li>CLASH DETECTION</li>
                  </ul>
                </div>
              )}
              {activeService === "3" && (
                <div className="service-detail-item active">
                  <h3>MEP BIM SERVICE</h3>
                  <p className="service-description-text">
                    At The Zenith Visions, we excel in providing state-of-the-art
                    MEP BIM Services, revolutionizing how mechanical, electrical,
                    and plumbing systems integrate with technology. Our expertise
                    lies in creating intelligent, data-enriched 3D models that
                    optimize design coordination, documentation, and execution
                    processes. With a focus on precision and efficiency, we ensure
                    seamless integration of MEP systems, bringing your vision to
                    reality with unparalleled accuracy and innovation.
                  </p>
                  <ul className="sub-services">
                    <li>MECHANICAL BIM MODELING</li>
                    <li>ELECTRICAL BIM MODELING</li>
                    <li>PLUMBING BIM MODELING</li>
                    <li>MEP DOCUMENTATION</li>
                  </ul>
                </div>
              )}
              {activeService === "4" && (
                <div className="service-detail-item active">
                  <h3>DRAFTING SERVICES</h3>
                  <p className="service-description-text">
                    At The Zenith Visions, we pride ourselves on delivering
                    precise and high-quality drafting services tailored to meet
                    the needs of architects, engineers, contractors, and
                    designers. Whether you need detailed CAD drafting, permit set
                    documentation, or interior design documentation, our team of
                    experts is committed to exceeding expectations.
                  </p>
                  <ul className="sub-services">
                    <li>CAD DOCUMENTATION SERVICE</li>
                    <li>CAD DETAILING SERVICE</li>
                    <li>PDF TO CAD CONVERSION</li>
                    <li>PERMIT SETS & ADU DRAWINGS</li>
                  </ul>
                </div>
              )}
              {activeService === "5" && (
                <div className="service-detail-item active">
                  <h3>INTERIOR DOCUMENTATION</h3>
                  <p className="service-description-text">
                    Interior documentation is a critical part of the design and
                    construction process, ensuring accurate translation of design
                    intent into executable plans. At The Zenith Visions, we
                    specialize in delivering comprehensive interior documentation
                    services that cater to the highest standards of quality and
                    precision.
                  </p>
                  <ul className="sub-services">
                    <li>BIM INTERIOR MODELING</li>
                    <li>INTERIOR DESIGN DOCUMENTATION</li>
                    <li>JOINERY DESIGN & DETAILS</li>
                    <li>QUANTITY TAKE-OFF</li>
                  </ul>
                </div>
              )}
              {activeService === "6" && (
                <div className="service-detail-item active">
                  <h3>SCAN TO BIM SERVICES</h3>
                  <p className="service-description-text">
                    Scan to BIM involves converting point cloud data obtained
                    through 3D laser scanning or LiDAR technology into accurate,
                    information-rich Building Information Models (BIM). These
                    models capture the as-built conditions of a structure or site,
                    providing detailed and precise data for architects, engineers,
                    and contractors.
                  </p>
                  <ul className="sub-services">
                    <li>SCAN TO BIM</li>
                    <li>SCAN TO CAD</li>
                    <li>SCAN TO BIM STRUCTURE & MEP</li>
                    <li>AS-BUILT BIM MODEL</li>
                  </ul>
                </div>
              )}
              {activeService === "7" && (
                <div className="service-detail-item active">
                  <h3>3D VISUALIZATION</h3>
                  <p className="service-description-text">
                    We specialize in providing cutting-edge 3D visualization
                    services that bring architectural, interior, and conceptual
                    designs to life. Using advanced tools like Revit, Lumion,
                    Enscape, Twinmotion, and SketchUp, we deliver stunning visuals
                    that help our clients visualize their ideas with unparalleled
                    accuracy and realism.
                  </p>
                  <ul className="sub-services">
                    <li>3D ARCHITECTURAL RENDERING</li>
                    <li>ANIMATION & WALKTHROUGH</li>
                    <li>INTERIOR RENDERING</li>
                    <li>VIRTUAL REALITY VISUALIZATION</li>
                  </ul>
                </div>
              )}
              {activeService === "8" && (
                <div className="service-detail-item active">
                  <h3>3D MODELING</h3>
                  <p className="service-description-text">
                    Welcome to The Zenith Visions, where innovation meets
                    precision in 3D modeling. Our comprehensive range of 3D
                    modeling services is tailored to architects, designers,
                    engineers, and contractors who seek accuracy, efficiency, and
                    cutting-edge visualizations.
                  </p>
                  <ul className="sub-services">
                    <li>REVIT BIM MODELING</li>
                    <li>ARCHICAD BIM MODELING</li>
                    <li>SKETCHUP MODELING</li>
                    <li>VECTORWORKS MODELING</li>
                    <li>CHIEF ARCHITECT MODELING</li>
                  </ul>
                </div>
              )}
              {activeService === "9" && (
                <div className="service-detail-item active">
                  <h3>REVIT FAMILIES</h3>
                  <p className="service-description-text">
                    At The Zenith Visions, we specialize in creating custom Revit
                    Families that enhance your BIM workflow and project
                    efficiency. Our expertly crafted parametric families are
                    designed to meet industry standards while being flexible
                    enough to adapt to your specific project requirements.
                  </p>
                  <ul className="sub-services">
                    <li>MEP FAMILIES</li>
                    <li>FURNITURE FAMILIES</li>
                    <li>GENERIC ANNOTATION</li>
                    <li>STRUCTURAL FAMILIES</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="service-image-container">
              {activeService === "1" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/ARCHITECTURE_BIM_zykljc.jpg"
                    alt="Architecture BIM Service"
                  />
                </div>
              )}
              {activeService === "2" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/STRUCTURE_BIM_f5z6ff.jpg"
                    alt="Structural BIM Service"
                  />
                </div>
              )}
              {activeService === "3" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/MEP_vvp1pb.jpg"
                    alt="MEP BIM Service"
                  />
                </div>
              )}
              {activeService === "4" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/DRAFTING_jmfgd8.jpg"
                    alt="Drafting Services"
                  />
                </div>
              )}
              {activeService === "5" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/INTERIOR_DOCUMENTATION_faqifu.jpg"
                    alt="Interior Documentation"
                  />
                </div>
              )}
              {activeService === "6" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/SCAN_TO_BIM_urqwzw.jpg"
                    alt="Scan to BIM Services"
                  />
                </div>
              )}
              {activeService === "7" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/3D_VISUALIZATION_jilyrz.jpg"
                    alt="3D Visualization"
                  />
                </div>
              )}
              {activeService === "8" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765898212/3D_MODELING_je6gpz.jpg"
                    alt="3D Modeling"
                  />
                </div>
              )}
              {activeService === "9" && (
                <div className="service-image active">
                  <img
                    src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/REVIT_FAMILIES_2_rgkf3u.jpg"
                    alt="Revit Families"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Services() {
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
              <div className="service-link active" data-service="1">
                Architecture Bim Service
              </div>
              <div className="service-link" data-service="2">
                Structural Bim Service
              </div>
              <div className="service-link" data-service="3">
                Mep Bim Service
              </div>
              <div className="service-link" data-service="4">
                Drafting Services
              </div>
              <div className="service-link" data-service="5">
                Interior Documentation
              </div>
              <div className="service-link" data-service="6">
                Scan To Bim Services
              </div>
              <div className="service-link" data-service="7">
                3d Visualization
              </div>
              <div className="service-link" data-service="8">
                3d Modeling
              </div>
              <div className="service-link" data-service="9">
                Revit Families
              </div>
            </div>

            <div className="service-details">
              <div
                className="service-detail-item active"
                data-service-detail="1"
              >
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
              <div className="service-detail-item" data-service-detail="2">
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
              <div className="service-detail-item" data-service-detail="3">
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
              <div className="service-detail-item" data-service-detail="4">
                <h3>DRAFTING SERVICES</h3>
                <p className="service-description-text">
                  At The Zenith Visions, we pride ourselves on delivering
                  precise and high-quality drafting services tailored to meet
                  the needs of architects, engineers, contractors, and
                  designers. Whether you need detailed CAD drafting, permit set
                  documentation, or interior design documentation, our team of
                  experts is committed to exceeding expectations. Here&apos;s an
                  in-depth look at our drafting services:
                </p>
                <ul className="sub-services">
                  <li>CAD DOCUMENTATION SERVICE</li>
                  <li>CAD DETAILING SERVICE</li>
                  <li>PDF TO CAD CONVERSION</li>
                  <li>PERMIT SETS & ADU DRAWINGS</li>
                </ul>
              </div>
              <div className="service-detail-item" data-service-detail="5">
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
              <div className="service-detail-item" data-service-detail="6">
                <h3>SCAN TO BIM SERVICES</h3>
                <p className="service-description-text">
                  Scan to BIM involves converting point cloud data obtained
                  through 3D laser scanning or LiDAR technology into accurate,
                  information-rich Building Information Models (BIM). These
                  models capture the as-built conditions of a structure or site,
                  providing detailed and precise data for architects, engineers,
                  and contractors. We offer a comprehensive range of services in
                  Scan to BIM, ensuring unparalleled accuracy, efficiency, and
                  adherence to project requirements:
                </p>
                <ul className="sub-services">
                  <li>SCAN TO BIM</li>
                  <li>SCAN TO CAD</li>
                  <li>SCAN TO BIM STRUCTURE & MEP</li>
                  <li>AS-BUILT BIM MODEL</li>
                </ul>
              </div>
              <div className="service-detail-item" data-service-detail="7">
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
              <div className="service-detail-item" data-service-detail="8">
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
              <div className="service-detail-item" data-service-detail="9">
                <h3>REVIT FAMILIES</h3>
                <p className="service-description-text">
                  At The Zenith Visions, we specialize in creating custom Revit
                  Families that enhance your BIM workflow and project
                  efficiency. Our expertly crafted parametric families are
                  designed to meet industry standards while being flexible
                  enough to adapt to your specific project requirements. From
                  MEP components to furniture and structural elements, our
                  families are optimized for performance, accuracy, and ease of
                  use.
                </p>
                <ul className="sub-services">
                  <li>MEP FAMILIES</li>
                  <li>FURNITURE FAMILIES</li>
                  <li>GENERIC ANNOTATION</li>
                  <li>STRUCTURAL FAMILIES</li>
                </ul>
              </div>
            </div>

            <div className="service-image-container">
              <div className="service-image active" data-service-image="1">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%232C3E50'/%3E%3C/svg%3E"
                  alt="Architecture"
                />
              </div>
              <div className="service-image" data-service-image="2">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%23445566'/%3E%3C/svg%3E"
                  alt="Structural"
                />
              </div>
              <div className="service-image" data-service-image="3">
                <img
                  src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765005865/f92890fcb67def5e167565309ea649c1_a3mlps.jpg"
                  alt="MEP BIM Service - Mechanical BIM Modeling"
                />
              </div>
              <div className="service-image" data-service-image="4">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%23667788'/%3E%3C/svg%3E"
                  alt="Drafting"
                />
              </div>
              <div className="service-image" data-service-image="5">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%23778899'/%3E%3C/svg%3E"
                  alt="Interior"
                />
              </div>
              <div className="service-image" data-service-image="6">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%2388'/%3E%3C/svg%3E"
                  alt="Scan"
                />
              </div>
              <div className="service-image" data-service-image="7">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%2399AABB'/%3E%3C/svg%3E"
                  alt="Visualization"
                />
              </div>
              <div className="service-image" data-service-image="8">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%23AABBCC'/%3E%3C/svg%3E"
                  alt="Modeling"
                />
              </div>
              <div className="service-image" data-service-image="9">
                <img
                  src="data:image/svg+xml,%3Csvg width='500' height='500' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='500' height='500' fill='%23BBCCDD'/%3E%3C/svg%3E"
                  alt="Revit Families"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

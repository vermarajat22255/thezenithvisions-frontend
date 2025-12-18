"use client";

import { useState, useRef } from "react";

export default function Brochure() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    { id: "architecture", name: "ARCHITECTURE BIM" },
    { id: "structural", name: "STRUCTURAL BIM" },
    { id: "mep", name: "MEP BIM" },
    { id: "drafting", name: "DRAFTING" },
    { id: "interior", name: "INTERIOR" },
    { id: "scan", name: "SCAN TO BIM" },
    { id: "visualization", name: "3D VISUALIZATION" },
    { id: "modeling", name: "3D MODELING" },
    { id: "revit", name: "REVIT FAMILIES" },
  ];

  const handleMouseMove = (e, itemId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.3, y: y * 0.3 });
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="brochure-section">
      <div className="brochure-container">
        <div className="brochure-tag">OUR BROCHURE</div>
        <p className="brochure-subtitle">Click on the brochure to view</p>
        <h2 className="brochure-title">
          <a 
            href="/SERVICE_BROCHURE.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            OUR SERVICES BROCHURE
          </a>
        </h2>
        <a 
          href="/SERVICE_BROCHURE.pdf" 
          download="TheZenithVisions_Service_Brochure.pdf"
          className="brochure-download-btn"
        >
          <span>↓</span> Download Brochure
        </a>
        <div className="brochure-services-single-line">
          {services.map((item, index) => (
            <span key={item.id}>
              <span 
                className={`brochure-service-text ${hoveredItem === item.id ? "hovered" : ""}`}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseLeave={handleMouseLeave}
                style={hoveredItem === item.id ? {
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                  background: '#000',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px'
                } : {}}
              >
                {item.name}
              </span>
              {index < services.length - 1 && <span className="brochure-separator">•</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

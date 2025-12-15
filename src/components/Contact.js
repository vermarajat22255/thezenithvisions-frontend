"use client";

import { useState } from "react";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("business");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted! (Backend integration pending)");
  };

  return (
    <section id="contact" className="work-together">
      <div className="work-container">
        <div className="work-content">
          <h2>Let's Work Together</h2>
          <p>
            Transform your vision into reality with our expert BIM services. Get
            in touch today.
          </p>

          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:info@thezenithvisions.com">
              info@thezenithvisions.com
            </a>
          </div>

          <div className="contact-info">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/thezenithvisions"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/thezenithvisions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="work-form">
          <div className="work-cta-buttons">
            <button
              className={`work-cta ${
                activeForm === "business" ? "active" : ""
              }`}
              onClick={() => setActiveForm("business")}
            >
              Business Inquiry
            </button>
            <button
              className={`work-cta ${activeForm === "career" ? "active" : ""}`}
              onClick={() => setActiveForm("career")}
            >
              Career Opportunities
            </button>
          </div>

          {/* Business Form */}
          <div
            className={`contact-form-wrapper ${
              activeForm === "business" ? "active" : ""
            }`}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name *" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email *" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select required>
                    <option value="">Select Service *</option>
                    <option value="architecture">Architecture BIM</option>
                    <option value="mep">MEP BIM</option>
                    <option value="structural">Structural BIM</option>
                    <option value="3d">3D Visualization</option>
                    <option value="scan">Scan to BIM</option>
                    <option value="interior">Interior Documentation</option>
                    <option value="shop">Shop Drawings</option>
                    <option value="cad">CAD Drafting</option>
                    <option value="revit">Revit Families</option>
                  </select>
                </div>
                <div className="form-group">
                  <select>
                    <option value="">Project Timeline</option>
                    <option value="urgent">Urgent (1-2 weeks)</option>
                    <option value="short">Short Term (2-4 weeks)</option>
                    <option value="medium">Medium Term (1-3 months)</option>
                    <option value="long">Long Term (3+ months)</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <textarea
                  placeholder="Project Details *"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Career Form */}
          <div
            className={`contact-form-wrapper ${
              activeForm === "career" ? "active" : ""
            }`}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" placeholder="Full Name *" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email *" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number *" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Position Applying For *</option>
                    <option value="architect">BIM Architect</option>
                    <option value="mep">MEP Engineer</option>
                    <option value="structural">Structural Engineer</option>
                    <option value="modeler">BIM Modeler</option>
                    <option value="coordinator">BIM Coordinator</option>
                    <option value="manager">Project Manager</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Years of Experience"
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Current Location" />
                </div>
              </div>
              <div className="form-group full-width">
                <textarea
                  placeholder="Cover Letter *"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <input type="file" accept=".pdf,.doc,.docx" />
                </div>
              </div>
              <button type="submit" className="submit-btn">
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

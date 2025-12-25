"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        setError("Please fill in all required fields");
        setLoading(false);
        return;
      }

      const response = await fetch(
        "https://mhic0dglu6.execute-api.us-east-1.amazonaws.com/dev/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to send message. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <span className="page-hero-tag">CONTACT US</span>
            <h1 className="page-hero-title">Let&apos;s Connect</h1>
            <p className="page-hero-description">
              Ready to transform your project? Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Left Side - Info */}
          <div className="contact-info-side">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Transform your vision into reality with our expert BIM services. 
              Whether you have a question, a project proposal, or just want to 
              say hello, we&apos;re here to help.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Email</span>
                  <a href="mailto:info@thezenithvisions.com">info@thezenithvisions.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Phone</span>
                  <span>India: +91 8770093683</span>
                  <span>USA: +1 551 347 6950</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Address</span>
                  <span>81/2 Bhawanipur Colony,</span>
                  <span>Annapurna Road, Indore, India</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span className="contact-detail-label">Working Hours</span>
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://www.linkedin.com/company/thezenithvisions" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/thezenithvisions" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-side">
            {success && (
              <div className="form-success">
                ✅ Thank you! Your message has been sent. We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {error && (
              <div className="form-error">
                ❌ {error}
              </div>
            )}

            <form className="contact-form-slick" onSubmit={handleSubmit}>
              <div className="form-group-slick">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-group-slick">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
              </div>
              <div className="form-row-slick">
                <div className="form-group-slick">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="form-group-slick">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group-slick">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="">Select Service</option>
                  <option value="Architecture BIM">Architecture BIM</option>
                  <option value="MEP BIM">MEP BIM</option>
                  <option value="Structural BIM">Structural BIM</option>
                  <option value="3D Visualization">3D Visualization</option>
                  <option value="Scan to BIM">Scan to BIM</option>
                  <option value="Interior Documentation">Interior Documentation</option>
                  <option value="Shop Drawings">Shop Drawings</option>
                  <option value="CAD Drafting">CAD Drafting</option>
                  <option value="Revit Families">Revit Families</option>
                </select>
              </div>
              <div className="form-group-slick">
                <textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn-slick" disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE"}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2069774088795!2d75.85361507530576!3d22.69422527940831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6b8e0e4923%3A0x4c8a3e1e8c5f1234!2sBhawanipur%20Colony%2C%20Annapurna%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1703232000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TheZenithVisions Location"
        ></iframe>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

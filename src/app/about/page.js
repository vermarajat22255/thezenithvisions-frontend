"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import SoftwareLogos from "@/components/SoftwareLogos";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    coverLetter: "",
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

    try {
      const response = await fetch(
        "https://mhic0dglu6.execute-api.us-east-1.amazonaws.com/dev/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            type: "career",
            subject: `Career Application: ${formData.position}`,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          location: "",
          coverLetter: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const leadershipTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  const bimTeam = [
    {
      id: 1,
      name: "David Williams",
      role: "Senior BIM Manager",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Jennifer Lee",
      role: "Lead Architect",
      image:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Robert Taylor",
      role: "Structural Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Amanda Foster",
      role: "MEP Coordinator",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "James Wilson",
      role: "3D Visualization Specialist",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Lisa Martinez",
      role: "CAD Drafter",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    },
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "96%", label: "Client Retention" },
    { number: "1500+", label: "Projects Completed" },
    { number: "200+", label: "Global Clients" },
    { number: "50%", label: "Cost Savings" },
    { number: "10+", label: "Countries Served" },
  ];

  // Countries where we've worked
  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "UAE",
    "Israel",
    "South Africa",
    "Singapore",
    "India",
  ];

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
            <span className="page-hero-tag">ABOUT US</span>
            <h1 className="page-hero-title">Who We Are</h1>
            <p className="page-hero-description">
              A team of passionate BIM professionals dedicated to transforming
              the AEC industry
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="about-content-container">
          <div className="about-image-side">
            <img
              src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1766009815/ABOUT_US_msogo2.jpg"
              alt="TheZenithVisions Team"
            />
          </div>
          <div className="about-text-side">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize the AEC industry, The
              Zenith Visions has grown into a leading BIM services provider. We
              combine cutting-edge technology with deep industry expertise to
              deliver exceptional results.
            </p>
            <p>
              Our team of certified professionals works tirelessly to ensure
              every project meets the highest standards of quality, accuracy,
              and efficiency. We believe in building lasting partnerships based
              on trust and mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="about-stats-header">
          <span className="about-stats-tag">BY THE NUMBERS</span>
          <h2>Our Impact in Numbers</h2>
        </div>
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-card">
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-section">
        <div className="about-mission-container">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower architects, engineers, and contractors with innovative
              BIM solutions that streamline workflows, reduce costs, and enhance
              project outcomes.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in BIM services, setting industry
              standards for quality, innovation, and client satisfaction in the
              AEC sector.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence with World Map */}
      <section className="about-global-section">
        <div className="about-global-header">
          <span className="about-global-tag">Global Presence</span>
          <h2>Serving Clients Worldwide</h2>
          <p>
            From architectural firms to construction giants, we&apos;ve
            partnered with industry leaders across the globe.
          </p>
        </div>
        <div className="about-global-content">
          <div className="world-map-container">
            {/* MAp svg start here */}
            <img
              src="/globe.svg"
              alt="Global presence map"
              className="world-map-svg"
            />
          </div>
          <div className="global-stats-row">
            <div className="global-stat-item">
              <span className="global-stat-num">200+</span>
              <span className="global-stat-text">Clients Served</span>
            </div>
            <div className="global-stat-item">
              <span className="global-stat-num">10+</span>
              <span className="global-stat-text">Countries</span>
            </div>
            <div className="global-stat-item">
              <span className="global-stat-num">1500+</span>
              <span className="global-stat-text">Projects Delivered</span>
            </div>
          </div>
          <div className="countries-list">
            {countries.map((country, index) => (
              <span key={index} className="country-tag">
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Experts - Leadership Team */}
      <section className="team-section">
        <div className="team-section-header">
          <span className="team-section-tag">OUR TEAM</span>
          <h2>Meet The Experts</h2>
          <p>Leadership team driving innovation and excellence</p>
        </div>
        <div className="team-section-content">
          <div className="team-grid-leadership">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architects & BIM Team */}
      <section className="team-section bim-team-section">
        <div className="team-section-header">
          <span className="team-section-tag">ARCHITECTS & BIM TEAM</span>
          <h2>Our Technical Experts</h2>
          <p>Skilled professionals delivering precision and excellence</p>
        </div>
        <div className="team-section-content">
          <div className="team-grid-bim">
            {bimTeam.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="join-team-section-white">
        <div className="join-team-container">
          <div className="join-team-info">
            <span className="join-team-tag-dark">CAREERS</span>
            <h2 className="join-team-title-dark">Join Our Team</h2>
            <p className="join-team-desc-dark">
              We&apos;re always looking for talented individuals who share our
              passion for innovation and excellence in BIM services. If
              you&apos;re ready to make an impact in the AEC industry, we&apos;d
              love to hear from you.
            </p>
            <div className="join-team-perks-dark">
              <div className="perk-item-dark">✓ Competitive Salary</div>
              <div className="perk-item-dark">✓ Remote Work Options</div>
              <div className="perk-item-dark">✓ Professional Growth</div>
              <div className="perk-item-dark">✓ Collaborative Culture</div>
            </div>
          </div>
          <div className="join-team-form-wrapper-light">
            {success && (
              <div className="form-success">
                ✅ Application submitted! We&apos;ll be in touch soon.
              </div>
            )}
            {error && <div className="form-error">❌ {error}</div>}
            <form className="join-team-form-light" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  disabled={loading}
                >
                  <option value="">Select Position *</option>
                  <option value="BIM Modeler">BIM Modeler</option>
                  <option value="Architect">Architect</option>
                  <option value="Structural Engineer">
                    Structural Engineer
                  </option>
                  <option value="MEP Engineer">MEP Engineer</option>
                  <option value="CAD Drafter">CAD Drafter</option>
                  <option value="3D Visualizer">3D Visualizer</option>
                  <option value="Project Manager">Project Manager</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="">Experience Level</option>
                    <option value="0-2 years">0-2 years</option>
                    <option value="2-5 years">2-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="Current Location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="coverLetter"
                  placeholder="Tell us about yourself and why you want to join..."
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn-dark"
                disabled={loading}
              >
                {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <SoftwareLogos />
      <Footer />
      <ClientScripts />
    </>
  );
}

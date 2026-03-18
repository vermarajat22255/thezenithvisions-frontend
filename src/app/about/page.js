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
      name: "Abhijeet Verma",
      role: "Founder & CEO",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853849/ABHIJEET_qpubex.jpg",
      linkedin: "https://www.linkedin.com/in/abhijeet-verma/",
    },
    {
      id: 2,
      name: "Gaurav Kasera",
      role: "Co-Founder",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853857/WhatsApp_Image_2026-03-18_at_8.31.56_PM_zqgxli.jpg",
      linkedin: "https://www.linkedin.com/in/gaurav-kasera/",
    },
    {
      id: 3,
      name: "Janhvi Dudhat",
      role: "Co-Founder",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853847/WhatsApp_Image_2026-03-18_at_8.30.36_PM_hmbxvy.jpg",
      linkedin: "https://www.linkedin.com/in/janhvi-dudhat/",
    },
    {
      id: 4,
      name: "Abhishek Verma",
      role: "Business Development Associate",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773855634/PIKKU_pwddpa.jpg",
      linkedin: "https://www.linkedin.com/in/abhishek-varma/",
    },
    {
      id: 5,
      name: "Archana Vairagi",
      role: "Business Development",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853875/Gemini_Generated_Image_wt90nzwt90nzwt90_qxiyx6.png",
      linkedin: "https://www.linkedin.com/in/archana-vairagi/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
  ];

  const bimTeam = [
    {
      id: 1,
      name: "Vishnu Chouhan",
      role: "BIM Manager",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853863/WhatsApp_Image_2026-03-18_at_9.26.41_PM_immdjq.jpg",
      linkedin: "https://www.linkedin.com/in/vishnu-chouhan/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
    {
      id: 2,
      name: "Sheetal Dawar",
      role: "Senior BIM Engineer",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853868/SHEETAL_DAWAR_nexfgh.png",
      linkedin: "https://www.linkedin.com/in/sheetal-dawer/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
    {
      id: 3,
      name: "Bharat Mahajan",
      role: "BIM Engineer",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853871/BHARAT_MAHAJAN_vsccuk.png",
      linkedin: "https://www.linkedin.com/in/bharat-mahajan/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
    {
      id: 4,
      name: "Aarti Panchal",
      role: "BIM Engineer",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853876/AARTI_PANCHAL_mlne9h.png",
      linkedin: "https://www.linkedin.com/in/aarti-panchal/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
    {
      id: 5,
      name: "Devansh Kasera",
      role: "BIM Architect",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853880/WhatsApp_Image_2026-03-18_at_9.16.21_PM_pl5nfw.jpg",
      linkedin: "https://www.linkedin.com/in/devansh-kasera/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
    },
    {
      id: 6,
      name: "Parth Kasera",
      role: "BIM Architect",
      image:
        "https://res.cloudinary.com/dx0nrghqt/image/upload/v1773853881/WhatsApp_Image_2026-03-18_at_9.19.14_PM_hnpru9.jpg",
      linkedin: "https://www.linkedin.com/in/parth-kasera/",
      imageStyle: { objectFit: "contain", background: "#f4f4f4" },
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
                  <img
                    src={member.image}
                    alt={member.name}
                    style={member.imageStyle || {}}
                  />
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin-btn"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="14"
                        height="14"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
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
                  <img
                    src={member.image}
                    alt={member.name}
                    style={member.imageStyle || {}}
                  />
                </div>
                <div className="team-member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-linkedin-btn"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="14"
                        height="14"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
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

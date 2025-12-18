"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("business");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
  });
  const [careerData, setCareerData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (activeForm === "business") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setCareerData({ ...careerData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        setError("Please upload a PDF or Word document");
        e.target.value = "";
        return;
      }

      if (file.size > maxSize) {
        setError("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      setResumeFile(file);
      setError("");
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get base64 part only
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      let dataToSend;

      if (activeForm === "business") {
        if (!formData.name || !formData.email || !formData.message) {
          setError("Please fill in all required fields");
          setLoading(false);
          return;
        }
        dataToSend = formData;
      } else {
        // Career form
        if (
          !careerData.name ||
          !careerData.email ||
          !careerData.phone ||
          !careerData.position ||
          !careerData.coverLetter
        ) {
          setError("Please fill in all required fields");
          setLoading(false);
          return;
        }

        // Convert resume to base64 if uploaded
        let resumeFileBase64 = null;
        let resumeFileName = null;

        if (resumeFile) {
          resumeFileBase64 = await fileToBase64(resumeFile);
          resumeFileName = resumeFile.name;
        }

        dataToSend = {
          name: careerData.name,
          email: careerData.email,
          phone: careerData.phone,
          company: `Career Application - ${careerData.position}`,
          service: "Career Opportunity",
          message: `Position: ${careerData.position}\nExperience: ${careerData.experience} years\nLocation: ${careerData.location}\n\nCover Letter:\n${careerData.coverLetter}`,
          resumeFile: resumeFileBase64,
          resumeFileName: resumeFileName,
        };
      }

      const response = await fetch(
        "https://mhic0dglu6.execute-api.us-east-1.amazonaws.com/dev/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);

        // Clear form
        if (activeForm === "business") {
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            timeline: "",
            message: "",
          });
        } else {
          setCareerData({
            name: "",
            email: "",
            phone: "",
            position: "",
            experience: "",
            location: "",
            coverLetter: "",
          });
          setResumeFile(null);
          // Clear file input
          const fileInput = document.querySelector('input[type="file"]');
          if (fileInput) fileInput.value = "";
        }

        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
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
            <Logo size="xlarge" className="contact-logo-svg" />
          </div>
        </div>

        <div className="work-form">
          {success && (
            <div
              style={{
                background: "#4CAF50",
                color: "white",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              ✅ Thank you! Your{" "}
              {activeForm === "business" ? "message" : "application"} has been
              sent. We'll get back to you within 24 hours.
            </div>
          )}

          {error && (
            <div
              style={{
                background: "#f44336",
                color: "white",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              ❌ {error}
            </div>
          )}

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
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
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
              <div className="form-row">
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  >
                    <option value="">Select Service *</option>
                    <option value="Architecture BIM">Architecture BIM</option>
                    <option value="MEP BIM">MEP BIM</option>
                    <option value="Structural BIM">Structural BIM</option>
                    <option value="3D Visualization">3D Visualization</option>
                    <option value="Scan to BIM">Scan to BIM</option>
                    <option value="Interior Documentation">
                      Interior Documentation
                    </option>
                    <option value="Shop Drawings">Shop Drawings</option>
                    <option value="CAD Drafting">CAD Drafting</option>
                    <option value="Revit Families">Revit Families</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="">Project Timeline</option>
                    <option value="Urgent (1-2 weeks)">
                      Urgent (1-2 weeks)
                    </option>
                    <option value="Short Term (2-4 weeks)">
                      Short Term (2-4 weeks)
                    </option>
                    <option value="Medium Term (1-3 months)">
                      Medium Term (1-3 months)
                    </option>
                    <option value="Long Term (3+ months)">
                      Long Term (3+ months)
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <textarea
                  name="message"
                  placeholder="Project Details *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE"}
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={careerData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={careerData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={careerData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="position"
                    value={careerData.position}
                    onChange={handleChange}
                    disabled={loading}
                    required
                  >
                    <option value="">Position Applying For *</option>
                    <option value="BIM Architect">BIM Architect</option>
                    <option value="MEP Engineer">MEP Engineer</option>
                    <option value="Structural Engineer">
                      Structural Engineer
                    </option>
                    <option value="BIM Modeler">BIM Modeler</option>
                    <option value="BIM Coordinator">BIM Coordinator</option>
                    <option value="Project Manager">Project Manager</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="number"
                    name="experience"
                    placeholder="Years of Experience"
                    value={careerData.experience}
                    onChange={handleChange}
                    disabled={loading}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="location"
                    placeholder="Current Location"
                    value={careerData.location}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group full-width">
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter *"
                  rows="5"
                  value={careerData.coverLetter}
                  onChange={handleChange}
                  disabled={loading}
                  required
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontSize: "14px",
                    }}
                  >
                    Upload Resume (PDF or Word, max 5MB){" "}
                    {resumeFile && `✓ ${resumeFile.name}`}
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={loading}
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

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

  const trackEvent = (eventName, eventParams) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

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
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024;

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
      reader.onload = () => resolve(reader.result.split(",")[1]);
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

        trackEvent("form_submission", {
          form_type:
            activeForm === "business"
              ? "Business Inquiry"
              : "Career Application",
          service:
            activeForm === "business" ? formData.service : careerData.position,
        });

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
                aria-label="Visit our LinkedIn page"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/thezenithvisions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="work-form">
          {success && (
            <div
              role="alert"
              aria-live="polite"
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
              role="alert"
              aria-live="assertive"
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

          <div className="work-cta-buttons" role="tablist">
            <button
              role="tab"
              aria-selected={activeForm === "business"}
              aria-controls="business-form"
              className={`work-cta ${
                activeForm === "business" ? "active" : ""
              }`}
              onClick={() => setActiveForm("business")}
              aria-label="Switch to Business Inquiry form"
            >
              Business Inquiry
            </button>
            <button
              role="tab"
              aria-selected={activeForm === "career"}
              aria-controls="career-form"
              className={`work-cta ${activeForm === "career" ? "active" : ""}`}
              onClick={() => setActiveForm("career")}
              aria-label="Switch to Career Opportunities form"
            >
              Career Opportunities
            </button>
          </div>

          {/* Business Form */}
          <div
            id="business-form"
            role="tabpanel"
            aria-labelledby="business-tab"
            className={`contact-form-wrapper ${
              activeForm === "business" ? "active" : ""
            }`}
            hidden={activeForm !== "business"}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="business-name" className="visually-hidden">
                    Full Name
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="business-email" className="visually-hidden">
                    Email Address
                  </label>
                  <input
                    id="business-email"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="business-phone" className="visually-hidden">
                    Phone Number
                  </label>
                  <input
                    id="business-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="business-company" className="visually-hidden">
                    Company Name
                  </label>
                  <input
                    id="business-company"
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
                  <label htmlFor="business-service" className="visually-hidden">
                    Select Service
                  </label>
                  <select
                    id="business-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
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
                  <label
                    htmlFor="business-timeline"
                    className="visually-hidden"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="business-timeline"
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
                <label htmlFor="business-message" className="visually-hidden">
                  Project Details
                </label>
                <textarea
                  id="business-message"
                  name="message"
                  placeholder="Project Details *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
                aria-label={loading ? "Sending message" : "Send message"}
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>

          {/* Career Form */}
          <div
            id="career-form"
            role="tabpanel"
            aria-labelledby="career-tab"
            className={`contact-form-wrapper ${
              activeForm === "career" ? "active" : ""
            }`}
            hidden={activeForm !== "career"}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="career-name" className="visually-hidden">
                    Full Name
                  </label>
                  <input
                    id="career-name"
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={careerData.name}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="career-email" className="visually-hidden">
                    Email Address
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={careerData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="career-phone" className="visually-hidden">
                    Phone Number
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={careerData.phone}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="career-position" className="visually-hidden">
                    Position Applying For
                  </label>
                  <select
                    id="career-position"
                    name="position"
                    value={careerData.position}
                    onChange={handleChange}
                    disabled={loading}
                    required
                    aria-required="true"
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
                  <label
                    htmlFor="career-experience"
                    className="visually-hidden"
                  >
                    Years of Experience
                  </label>
                  <input
                    id="career-experience"
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
                  <label htmlFor="career-location" className="visually-hidden">
                    Current Location
                  </label>
                  <input
                    id="career-location"
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
                <label
                  htmlFor="career-cover-letter"
                  className="visually-hidden"
                >
                  Cover Letter
                </label>
                <textarea
                  id="career-cover-letter"
                  name="coverLetter"
                  placeholder="Cover Letter *"
                  rows="5"
                  value={careerData.coverLetter}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label
                    htmlFor="career-resume"
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
                    id="career-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={loading}
                    aria-label="Upload resume file"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
                aria-label={
                  loading ? "Submitting application" : "Submit application"
                }
              >
                {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

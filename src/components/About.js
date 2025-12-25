"use client";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        {/* Left: Stats */}
        <div className="about-stats">
          <p className="about-tag">About Us</p>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>95%</h3>
              <p>Model Accuracy</p>
            </div>
            <div className="stat-item">
              <h3>96%</h3>
              <p>Client Retention</p>
            </div>
            <div className="stat-item">
              <h3>1500+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Clients Served</p>
            </div>
            <div className="stat-item">
              <h3>50%</h3>
              <p>Cost Saved</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2>
            Our outsourcing services empower businesses to{" "}
            <span>innovate faster, scale smarter, and operate leaner</span>.
          </h2>

          <p>
            We focus on ensuring <strong>maximum efficiency</strong>, reducing
            costs, and driving <strong>guaranteed success</strong> in today’s
            fast-evolving global marketplace.
          </p>

          <div className="about-image">
            <img
              src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1766009815/ABOUT_US_msogo2.jpg"
              alt="Modern workspace"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

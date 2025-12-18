"use client";

export default function About() {
  return (
    <section id="about" className="about-us">
      <div className="about-container">
        <div className="about-box">
          <div className="about-stats">
            <div className="about-tag">About us</div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Model Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">96%</div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50%</div>
              <div className="stat-label">Cost Saved</div>
            </div>
          </div>
          <div className="about-content">
            <h2>
              Our outsourcing services empower businesses to{" "}
              <strong>
                &ldquo;innovate faster, scale smarter, and operate leaner&rdquo;
              </strong>
              . We focus on ensuring{" "}
              <strong>
                &ldquo;maximum efficiency, reducing costs, and driving
                guaranteed success in today&apos;s fast-evolving global
                marketplace&rdquo;
              </strong>
              .
            </h2>
            <div className="about-image">
              <img
                src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1766009815/ABOUT_US_msogo2.jpg"
                alt="BIM Interior"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

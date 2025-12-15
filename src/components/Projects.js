"use client";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-hero-header">
        <div className="projects-centered-container">
          <div className="projects-tag-center">PROJECTS</div>
          <h2 className="projects-main-title">OUR WORK</h2>
          <p className="projects-main-description">
            At Zenith Visions, we combine precision, innovation, and experience
            to deliver accurate and dependable BIM solutions. Our focus is on
            building trust-driven partnerships through quality work and on-time
            delivery.
          </p>
        </div>
      </div>

      <div className="projects-content-wrapper">
        <div className="projects-categories-horizontal">
          <button
            className="project-category-tab active"
            data-category="Architecture"
          >
            Architecture BIM
          </button>
          <button className="project-category-tab" data-category="Structural">
            Structural BIM
          </button>
          <button className="project-category-tab" data-category="MEP">
            MEP BIM
          </button>
          <button className="project-category-tab" data-category="Drafting">
            Drafting Projects
          </button>
          <button className="project-category-tab" data-category="Interior">
            Interior Documentation
          </button>
          <button className="project-category-tab" data-category="Scan to BIM">
            Scan to BIM Projects
          </button>
          <button
            className="project-category-tab"
            data-category="Visualization"
          >
            3D Visualization
          </button>
          <button className="project-category-tab" data-category="3D Modeling">
            3D Modeling
          </button>
          <button
            className="project-category-tab"
            data-category="Revit Families"
          >
            Revit Families
          </button>
        </div>

        <div className="projects-slider-container">
          <button className="projects-control-btn" id="projectsControlBtn">
            <span className="control-icon">⏸</span>
            <span className="control-text">Pause</span>
          </button>

          {/* Timeline Progress with clickable dots */}
          <div className="timeline-progress">
            <button
              className="timeline-dot"
              data-step="1"
              aria-label="Go to first set"
            ></button>
            <button
              className="timeline-dot"
              data-step="2"
              aria-label="Go to second set"
            ></button>
            <div className="timeline-bar">
              <div className="timeline-bar-fill" id="timelineBarFill"></div>
            </div>
            <button
              className="timeline-dot"
              data-step="3"
              aria-label="Go to third set"
            ></button>
            <button
              className="timeline-dot"
              data-step="4"
              aria-label="Go to fourth set"
            ></button>
          </div>

          <div className="projects-slider-wrapper">
            <div className="projects-grid">
              {/* Row 1 - Architecture */}
              <div className="projects-row projects-row-1">
                <div
                  className="project-card-premium"
                  data-category="Architecture"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
                      alt="Classical Farmhouse Villa"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">REVIT</span>
                        <span className="project-card-label">LOD350</span>
                      </div>
                      <h3 className="project-card-title">
                        Classical Farmhouse Villa
                      </h3>
                      <p className="project-card-desc">
                        A luxury classical-style farmhouse villa with complete
                        Revit modeling, interior design, and construction
                        drawings.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card-premium"
                  data-category="Architecture"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387033/ARCHIOCAD_MODELLING_1_vt7t5o.png"
                      alt="Residential Community"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">ARCHICAD</span>
                        <span className="project-card-label">MASTERPLAN</span>
                      </div>
                      <h3 className="project-card-title">
                        Residential Community
                      </h3>
                      <p className="project-card-desc">
                        A premium residential society with complete modeling and
                        photorealistic renderings.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card-premium"
                  data-category="Architecture"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/CONTAINER_MODELING_1_wzjrkh.png"
                      alt="Container Retail Hub"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">REVIT</span>
                        <span className="project-card-label">LOD300</span>
                      </div>
                      <h3 className="project-card-title">
                        Container Retail Hub
                      </h3>
                      <p className="project-card-desc">
                        Modular retail and café hub designed with shipping
                        containers.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card-premium"
                  data-category="Architecture"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
                      alt="Classical Farmhouse Villa"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">REVIT</span>
                        <span className="project-card-label">LOD350</span>
                      </div>
                      <h3 className="project-card-title">
                        Classical Farmhouse Villa
                      </h3>
                      <p className="project-card-desc">
                        A luxury classical-style farmhouse villa with complete
                        Revit modeling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 - MEP/Structural */}
              <div className="projects-row projects-row-2">
                <div className="project-card-premium" data-category="MEP">
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765005865/f92890fcb67def5e167565309ea649c1_a3mlps.jpg"
                      alt="MEP Systems"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">MEP</span>
                        <span className="project-card-label">LOD400</span>
                      </div>
                      <h3 className="project-card-title">
                        Commercial MEP Systems
                      </h3>
                      <p className="project-card-desc">
                        Complete MEP modeling with HVAC, electrical, and
                        plumbing coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card-premium"
                  data-category="Structural"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387033/ARCHIOCAD_MODELLING_1_vt7t5o.png"
                      alt="Structural BIM"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">STRUCTURAL</span>
                        <span className="project-card-label">REBAR</span>
                      </div>
                      <h3 className="project-card-title">
                        Structural Steel Frame
                      </h3>
                      <p className="project-card-desc">
                        Detailed structural modeling with rebar detailing and
                        connections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="project-card-premium" data-category="Interior">
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387034/CONTAINER_MODELING_1_wzjrkh.png"
                      alt="Interior Design"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">INTERIOR</span>
                        <span className="project-card-label">DESIGN</span>
                      </div>
                      <h3 className="project-card-title">Office Interior</h3>
                      <p className="project-card-desc">
                        Complete interior documentation with furniture and
                        finish schedules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Visualization */}
              <div className="projects-row projects-row-3">
                <div
                  className="project-card-premium"
                  data-category="Visualization"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
                      alt="3D Visualization"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">3D RENDER</span>
                        <span className="project-card-label">VR</span>
                      </div>
                      <h3 className="project-card-title">
                        Luxury Resort Render
                      </h3>
                      <p className="project-card-desc">
                        Photorealistic 3D renderings and VR walkthrough.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card-premium"
                  data-category="Scan to BIM"
                >
                  <div className="project-card-image">
                    <img
                      src="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765005865/f92890fcb67def5e167565309ea649c1_a3mlps.jpg"
                      alt="Scan to BIM"
                    />
                  </div>
                  <div className="project-card-overlay">
                    <div className="project-card-content">
                      <div className="project-card-tags">
                        <span className="project-card-label">SCAN TO BIM</span>
                        <span className="project-card-label">LOD500</span>
                      </div>
                      <h3 className="project-card-title">As-Built Model</h3>
                      <p className="project-card-desc">
                        Point cloud to BIM conversion with LOD 500 detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

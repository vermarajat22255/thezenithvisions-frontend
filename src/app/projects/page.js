"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  /* ---------------- FETCH PROJECTS ---------------- */
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);

        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data.projects || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  /* ---------------- DERIVED DATA ---------------- */
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const stats = [
    { number: "1500+", label: "Projects" },
    { number: "200+", label: "Clients" },
    { number: "10+", label: "Countries" },
    { number: "95%", label: "Accuracy" },
  ];

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <>
        <Navbar />
        <section className="projects-page-content">
          <div className="projects-loading">Loading projects...</div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="page-video-hero">
        <video autoPlay muted loop playsInline className="page-hero-video">
          <source
            src="https://res.cloudinary.com/dx0nrghqt/video/upload/v1765996392/FINAL_VIDEO_fprwyh.mp4"
            type="video/mp4"
          />
        </video>

        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="page-hero-tag">PORTFOLIO</span>
            <h1 className="page-hero-title">Our Projects</h1>
            <p className="page-hero-description">
              Explore our extensive portfolio of BIM projects across disciplines
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <div className="projects-stats-bar">
        {stats.map((stat, index) => (
          <div key={index} className="projects-stat">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <section className="projects-page-content">
        {/* Filters */}
        <div className="projects-filter-bar">
          <div className="projects-categories-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              Grid
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              List
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className={`projects-display ${viewMode}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                />
                {project.tags && (
                  <div className="project-overlay">
                    <div className="project-tags">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">No projects found in this category.</div>
        )}
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="projects-cta-section">
        <div className="projects-cta-container">
          <h2>Have a Project in Mind?</h2>
          <p>Let’s discuss how we can bring your vision to life</p>
          <a href="/contact" className="cta-button">
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

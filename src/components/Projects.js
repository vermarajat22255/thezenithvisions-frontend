"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/projects?limit=20`
        );

        if (!response.ok) throw new Error("Failed to fetch projects");

        const data = await response.json();
        const projectsData = data.projects || [];

        setProjects(projectsData);
        setFilteredProjects(projectsData);

        setCategories([
          "All",
          ...Array.from(new Set(projectsData.map((p) => p.category))),
        ]);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  /* ---------------- CATEGORY FILTER ---------------- */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === category));
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section-home">
        <div className="projects-container-home">
          <div className="projects-header-home">
            <span className="projects-tag-home">• PORTFOLIO</span>
            <h2 className="projects-title-home">OUR PROJECTS</h2>
            <p className="projects-description-home">
              Explore our extensive portfolio of BIM projects
            </p>
          </div>
          <div className="projects-loading-home">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section-home">
      <div className="projects-container-home">
        {/* Header */}
        <div className="projects-header-home">
          <span className="projects-tag-home">• PORTFOLIO</span>
          <h2 className="projects-title-home">OUR PROJECTS</h2>
          <p className="projects-description-home">
            Explore our extensive portfolio of BIM projects spanning
            architecture, structure, MEP, and visualization across residential,
            commercial, and industrial sectors worldwide.
          </p>
        </div>

        {/* ---------------- FILTER BAR (REUSED CSS) ---------------- */}
        <div className="projects-filter-bar">
          <div className="projects-categories-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- GRID ---------------- */}
        <div className="projects-grid-home">
          {filteredProjects.slice(0, 9).map((project) => (
            <div key={project.id} className="project-card-home">
              <div className="project-image-home">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="project-content-home">
                <div className="project-tags-home">
                  {project.tags &&
                    project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="project-tag-home">
                        {tag}
                      </span>
                    ))}
                </div>
                <h3 className="project-title-card-home">{project.title}</h3>
                <p className="project-category-home">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects-cta-home">
          <Link href="/projects" className="view-all-btn-home">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

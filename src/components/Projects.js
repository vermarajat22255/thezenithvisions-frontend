"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12; // Show 12 projects per page

  const categories = [
    "All",
    "Architecture",
    "Structural",
    "MEP",
    "Interior",
    "Scan to BIM",
    "Revit Families",
    "Shop Drawings",
    "CAD Drafting",
    "3D Modeling",
  ];

  // Fetch all projects once
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/projects`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data.projects || []);
        setFilteredProjects(data.projects || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Unable to load projects. Please try again later.");
        setProjects([]);
        setFilteredProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeCategory
      );
      setFilteredProjects(filtered);
    }
    setCurrentPage(1); // Reset to first page when filtering
  }, [activeCategory, projects]);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle category change
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful BIM projects across various
            industries and specializations
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="projects-count-top">
            <p>
              Showing{" "}
              <strong>
                {indexOfFirstProject + 1}-
                {Math.min(indexOfLastProject, filteredProjects.length)}
              </strong>{" "}
              of <strong>{filteredProjects.length}</strong> project
              {filteredProjects.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="projects-loading">
            <div className="spinner"></div>
            <p>Loading amazing projects...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="projects-error">
            <p>{error}</p>
            <button
              className="retry-btn"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && currentProjects.length > 0 && (
          <>
            <div className="projects-grid">
              {currentProjects.map((project, index) => (
                <div key={project.id} className="project-card">
                  {/* Project Image */}
                  <div className="project-image">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="project-img"
                      loading={index < 6 ? "eager" : "lazy"} // Load first 6 immediately, rest lazy
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    {/* Tags */}
                    <div className="project-tags">
                      {project.tags &&
                        project.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="project-title">{project.title}</h3>

                    {/* Description */}
                    <p className="project-description">{project.description}</p>

                    {/* Category Badge */}
                    <div className="project-footer">
                      <span className="category-badge">{project.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="pagination-btn prev"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.5 15L7.5 10L12.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>

                <div className="pagination-numbers">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 &&
                        pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNumber}
                          className={`pagination-number ${
                            currentPage === pageNumber ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      );
                    } else if (
                      pageNumber === currentPage - 2 ||
                      pageNumber === currentPage + 2
                    ) {
                      return (
                        <span key={pageNumber} className="pagination-dots">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  className="pagination-btn next"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

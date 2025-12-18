"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

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

  // Fetch projects from API
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const url =
          activeCategory === "All"
            ? `${process.env.NEXT_PUBLIC_API_URL}/projects`
            : `${
                process.env.NEXT_PUBLIC_API_URL
              }/projects?category=${encodeURIComponent(activeCategory)}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data.projects || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Unable to load projects. Please try again later.");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [activeCategory]);

  // Filter button click handler
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful BIM projects across various
            industries
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
              onClick={() => setActiveCategory(activeCategory)}
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}

        {/* Swiper Carousel */}
        {!loading && !error && projects.length > 0 && (
          <div className="projects-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={projects.length > 3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  coverflowEffect: {
                    rotate: 30,
                    depth: 80,
                  },
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              className="projects-swiper"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="project-card">
                    {/* Project Image */}
                    <div className="project-image">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="project-img"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg=="
                      />
                    </div>

                    {/* Project Content */}
                    <div className="project-content">
                      {/* Tags */}
                      <div className="project-tags">
                        {project.tags &&
                          project.tags.map((tag, index) => (
                            <span key={index} className="project-tag">
                              {tag}
                            </span>
                          ))}
                      </div>

                      {/* Title */}
                      <h3 className="project-title">{project.title}</h3>

                      {/* Description */}
                      <p className="project-description">
                        {project.description}
                      </p>

                      {/* Category Badge */}
                      <div className="project-category">
                        <span className="category-badge">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Project Count */}
            <div className="projects-count">
              <p>
                Showing <strong>{projects.length}</strong> project
                {projects.length !== 1 ? "s" : ""}
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

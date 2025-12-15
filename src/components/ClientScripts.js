"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Services Tab Switching
    const serviceLinks = document.querySelectorAll(".service-link");
    const serviceDetails = document.querySelectorAll(".service-detail-item");
    const serviceImages = document.querySelectorAll(".service-image");

    serviceLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const serviceId = this.getAttribute("data-service");
        serviceLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
        serviceDetails.forEach((detail) => {
          detail.classList.remove("active");
          if (detail.getAttribute("data-service-detail") === serviceId) {
            detail.classList.add("active");
          }
        });
        serviceImages.forEach((img) => {
          img.classList.remove("active");
          if (img.getAttribute("data-service-image") === serviceId) {
            img.classList.add("active");
          }
        });
      });
    });

    // Projects Category Filtering
    const projectCategoryTabs = document.querySelectorAll(
      ".project-category-tab"
    );

    projectCategoryTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const category = this.getAttribute("data-category");

        // Update active tab
        projectCategoryTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Filter projects
        const allProjects = document.querySelectorAll(".project-card-premium");
        const allRows = document.querySelectorAll(".projects-row");

        allProjects.forEach((project) => {
          const projectCategory = project.getAttribute("data-category");
          if (projectCategory === category) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });

        // Show/hide rows based on visible cards
        allRows.forEach((row) => {
          const cards = row.querySelectorAll(".project-card-premium");
          let hasVisibleCard = false;

          cards.forEach((card) => {
            if (card.style.display !== "none") {
              hasVisibleCard = true;
            }
          });

          if (hasVisibleCard) {
            row.style.display = "flex";
          } else {
            row.style.display = "none";
          }
        });
      });
    });

    // Projects Auto-Scroll Animation with Hover Pause
    let isPaused = false;
    let isHovering = false;
    const projectRows = document.querySelectorAll(".projects-row");
    const controlBtn = document.getElementById("projectsControlBtn");

    const rowPositions = [0, 0, 0];
    const speeds = [0.5, 0.3, 0.4];

    // Add hover listeners to project cards
    const allProjectCards = document.querySelectorAll(".project-card-premium");
    allProjectCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        isHovering = true;
      });
      card.addEventListener("mouseleave", () => {
        isHovering = false;
      });
    });

    // Pause when hovering over entire project area
    const projectsSlider = document.querySelector(".projects-slider-wrapper");
    if (projectsSlider) {
      projectsSlider.addEventListener("mouseenter", () => {
        isHovering = true;
      });
      projectsSlider.addEventListener("mouseleave", () => {
        isHovering = false;
      });
    }

    // Timeline Dot Click Functionality
    const timelineDots = document.querySelectorAll(".timeline-dot");
    timelineDots.forEach((dot) => {
      dot.addEventListener("click", function () {
        const step = parseInt(this.getAttribute("data-step"));

        // Update active dot
        timelineDots.forEach((d) => d.classList.remove("active"));
        this.classList.add("active");

        // Jump to corresponding position
        // Each step represents 25% of the scroll distance
        const cardWidth = 600; // Approximate card width
        const gap = 24;
        const scrollDistance = cardWidth + gap;
        const targetPosition = -(step - 1) * (scrollDistance / 4);

        projectRows.forEach((row, index) => {
          rowPositions[index] = targetPosition;
          row.style.transform = `translateX(${targetPosition}px)`;
        });
      });
    });

    function animateProjects() {
      if (!isPaused && !isHovering) {
        projectRows.forEach((row, index) => {
          const cards = row.querySelectorAll(".project-card-premium");
          if (cards.length === 0) return;

          const firstCard = cards[0];
          const cardWidth = firstCard.offsetWidth;
          const gap = 24;
          const scrollDistance = cardWidth + gap;

          rowPositions[index] -= speeds[index];

          // Reset position for infinite scroll
          if (Math.abs(rowPositions[index]) >= scrollDistance) {
            rowPositions[index] = 0;
          }

          row.style.transform = `translateX(${rowPositions[index]}px)`;

          // Update timeline progress
          const progress =
            (Math.abs(rowPositions[index]) / scrollDistance) * 100;
          const timelineBarFill = document.getElementById("timelineBarFill");
          if (timelineBarFill) {
            timelineBarFill.style.width = `${progress}%`;
          }
        });
      }
      requestAnimationFrame(animateProjects);
    }

    animateProjects();

    // Pause/Play Button
    if (controlBtn) {
      controlBtn.addEventListener("click", function () {
        isPaused = !isPaused;
        const icon = this.querySelector(".control-icon");
        const text = this.querySelector(".control-text");

        if (isPaused) {
          icon.textContent = "▶";
          text.textContent = "Play";
          this.classList.add("paused");
        } else {
          icon.textContent = "⏸";
          text.textContent = "Pause";
          this.classList.remove("paused");
        }
      });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const scrollProgress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollToTopBtn) {
        if (scrollTop > 300) {
          scrollToTopBtn.classList.add("visible");
        } else {
          scrollToTopBtn.classList.remove("visible");
        }
      }

      if (scrollProgress) {
        const circumference = 2 * Math.PI * 25;
        const offset = circumference - (scrollPercent / 100) * circumference;
        scrollProgress.style.strokeDashoffset = offset;
      }
    });

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Custom Cursor (Desktop only)
    if (window.innerWidth > 768) {
      const cursorDot = document.querySelector(".cursor-dot");
      const cursorLens = document.querySelector(".cursor-lens");

      document.addEventListener("mousemove", (e) => {
        if (cursorDot) {
          cursorDot.style.left = e.clientX + "px";
          cursorDot.style.top = e.clientY + "px";
        }
        if (cursorLens) {
          cursorLens.style.left = e.clientX - 75 + "px";
          cursorLens.style.top = e.clientY - 75 + "px";
        }
      });

      // Add hover class for clickable elements
      const clickables = document.querySelectorAll(
        "a, button, .service-link, .project-category-tab, .project-card-premium"
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (cursorDot) cursorDot.classList.add("over-clickable");
        });
        el.addEventListener("mouseleave", () => {
          if (cursorDot) cursorDot.classList.remove("over-clickable");
        });
      });
    }
  }, []);

  return null;
}

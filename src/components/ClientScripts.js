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

    // Projects Category Filtering is now handled by React state in Projects.js

    // Projects animations are now handled by CSS in globals.css

    // Navbar Hide/Show on Scroll
    const navbar = document.querySelector("nav");
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (navbar) {
        // At top of page - transparent navbar
        if (currentScrollY <= 50) {
          navbar.classList.remove("hidden");
          navbar.classList.remove("visible");
        }
        // Scrolling down and past threshold - hide navbar
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          navbar.classList.add("hidden");
          navbar.classList.remove("visible");
        } 
        // Scrolling up - show solid navbar
        else {
          navbar.classList.remove("hidden");
          navbar.classList.add("visible");
        }
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    // Initial check
    updateNavbar();

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });

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

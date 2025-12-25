"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "BIM Tips",
    "Industry News",
    "Case Studies",
    "Tutorials",
    "Company Updates",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of BIM: Trends to Watch in 2025",
      excerpt: "Explore the emerging trends shaping the future of Building Information Modeling and how they will transform the AEC industry.",
      category: "Industry News",
      author: "Sarah Johnson",
      date: "December 20, 2024",
      readTime: "5 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/ARCHITECTURE_BIM_zykljc.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Best Practices for MEP Coordination in Large Projects",
      excerpt: "Learn the essential strategies for effective MEP coordination that can save time and reduce costly errors in complex building projects.",
      category: "BIM Tips",
      author: "Michael Chen",
      date: "December 18, 2024",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/MEP_vvp1pb.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "Case Study: Hospital BIM Implementation Success",
      excerpt: "How our team delivered a complex healthcare facility project with 99% clash-free coordination.",
      category: "Case Studies",
      author: "Emily Rodriguez",
      date: "December 15, 2024",
      readTime: "10 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/STRUCTURE_BIM_f5z6ff.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Getting Started with Revit Families: A Beginner's Guide",
      excerpt: "Master the basics of creating custom Revit families to enhance your BIM workflow and project efficiency.",
      category: "Tutorials",
      author: "David Williams",
      date: "December 12, 2024",
      readTime: "12 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/REVIT_FAMILIES_2_rgkf3u.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Scan to BIM: Revolutionizing Renovation Projects",
      excerpt: "Discover how point cloud technology is transforming the way we approach building renovations and historic preservation.",
      category: "Industry News",
      author: "Jennifer Lee",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894330/SCAN_TO_BIM_urqwzw.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "TheZenithVisions Expands to European Market",
      excerpt: "We're excited to announce our expansion into the European market, bringing world-class BIM services to new clients.",
      category: "Company Updates",
      author: "Sarah Johnson",
      date: "December 8, 2024",
      readTime: "3 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894331/3D_VISUALIZATION_jilyrz.jpg",
      featured: false,
    },
    {
      id: 7,
      title: "LOD 100 to LOD 500: Understanding Level of Development",
      excerpt: "A comprehensive guide to Level of Development standards and how to apply them effectively in your BIM projects.",
      category: "BIM Tips",
      author: "Robert Taylor",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765898212/3D_MODELING_je6gpz.jpg",
      featured: false,
    },
    {
      id: 8,
      title: "Interior Documentation: From Concept to Construction",
      excerpt: "Learn the complete workflow for creating comprehensive interior documentation that ensures flawless execution.",
      category: "Tutorials",
      author: "Amanda Foster",
      date: "December 2, 2024",
      readTime: "9 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765894332/INTERIOR_DOCUMENTATION_faqifu.jpg",
      featured: false,
    },
    {
      id: 9,
      title: "Sustainable Design with BIM: Green Building Strategies",
      excerpt: "How BIM technology enables sustainable design decisions and helps achieve green building certifications.",
      category: "Industry News",
      author: "Lisa Martinez",
      date: "November 28, 2024",
      readTime: "6 min read",
      image: "https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg",
      featured: false,
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <>
      <Navbar />
      
      {/* Video Hero Section */}
      <section className="page-video-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="page-hero-video"
          poster="https://res.cloudinary.com/dx0nrghqt/image/upload/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
        >
          <source
            src="https://res.cloudinary.com/dx0nrghqt/video/upload/v1765996392/FINAL_VIDEO_fprwyh.mp4"
            type="video/mp4"
          />
        </video>
        <div className="page-hero-overlay">
          <div className="page-hero-content">
            <span className="page-hero-tag">BLOG</span>
            <h1 className="page-hero-title">Insights & Updates</h1>
            <p className="page-hero-description">
              Stay updated with the latest trends, tips, and news from the BIM industry
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content-section">
        {/* Search and Filter */}
        <div className="blog-filter-bar">
          <div className="blog-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`blog-category-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <div className="featured-blogs">
            <h2 className="section-title">Featured Articles</h2>
            <div className="featured-blogs-grid">
              {featuredBlogs.map((blog) => (
                <article key={blog.id} className="featured-blog-card">
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} />
                    <span className="featured-badge">Featured</span>
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="blog-meta">
                      <span className="blog-author">{blog.author}</span>
                      <span className="blog-divider">•</span>
                      <span className="blog-date">{blog.date}</span>
                      <span className="blog-divider">•</span>
                      <span className="blog-read-time">{blog.readTime}</span>
                    </div>
                    <a href="#" className="read-more-btn">Read Article →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Blogs */}
        <div className="all-blogs">
          <h2 className="section-title">All Articles</h2>
          {regularBlogs.length > 0 ? (
            <div className="blogs-grid">
              {regularBlogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className="blog-meta">
                      <span className="blog-author">{blog.author}</span>
                      <span className="blog-divider">•</span>
                      <span className="blog-date">{blog.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="newsletter-section">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest BIM insights delivered to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

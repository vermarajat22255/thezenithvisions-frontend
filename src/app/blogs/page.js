"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  /* ---------------- FETCH BLOGS ---------------- */
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs?status=published`
        );

        if (!res.ok) throw new Error("Failed to fetch blogs");

        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  /* ---------------- DERIVED DATA ---------------- */
  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = filteredBlogs.filter((b) => b.featured);
  const regularBlogs = filteredBlogs.filter((b) => !b.featured);

  const formatDate = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <>
        <Navbar />
        <section className="blog-content-section">
          <div className="blogs-loading">Loading articles...</div>
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
            <span className="page-hero-tag">BLOG</span>
            <h1 className="page-hero-title">Insights & Updates</h1>
            <p className="page-hero-description">
              Stay updated with the latest trends, tips, and news from the BIM
              industry
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CONTENT ---------------- */}
      <section className="blog-content-section">
        {/* Search + Categories */}
        <div className="blog-filter-bar">
          <div className="blog-search">
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
                className={`blog-category-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- FEATURED ---------------- */}
        {featuredBlogs.length > 0 && (
          <div className="featured-blogs">
            <h2 className="section-title">Featured Articles</h2>

            <div className="featured-blogs-grid">
              {featuredBlogs.map((blog) => (
                <article key={blog.id} className="featured-blog-card">
                  <div className="blog-card-image">
                    <img src={blog.featuredImage} alt={blog.title} />
                    <span className="featured-badge">Featured</span>
                  </div>

                  <div className="blog-card-content">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>

                    <div className="blog-meta">
                      <span>{blog.author}</span>
                      <span>•</span>
                      <span>{formatDate(blog.publishedDate)}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <a href={`/blog/${blog.slug}`} className="read-more-btn">
                      Read Article →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- ALL BLOGS ---------------- */}
        <div className="all-blogs">
          <h2 className="section-title">All Articles</h2>

          {regularBlogs.length > 0 ? (
            <div className="blogs-grid">
              {regularBlogs.map((blog) => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={blog.featuredImage} alt={blog.title} />
                  </div>

                  <div className="blog-card-content">
                    <span className="blog-category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>

                    {blog.tags.map((tag) => (
                      <div key={tag} className="blog-tags">
                        <span>{tag}</span>
                      </div>
                    ))}

                    <div className="blog-meta">
                      <span>{blog.author}</span>
                      <span>•</span>
                      <span>{formatDate(blog.publishedDate)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

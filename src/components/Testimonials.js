"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I didn't have to explain things twice. the BIM builders understood the brief, delivered fast, and didn't drop the ball once. That's rare in outsourced work.",
      name: "Siddharth N.",
      role: "CEO | Gigfactory",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      text: "Honestly, the BIM builders feel like an extension of our team now. Seamless communication, dependable delivery, and always ready to jump in during crunch time.",
      name: "Halsey M.",
      role: "Founder | Halsey Meem Designs",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      text: "Harshit brought our project to life with precise modeling and seamless coordination. The accuracy and attention to detail exceeded our expectations, and our team loved how easy it was to work with the final model.",
      name: "David M.",
      role: "Owner | Manica Architecture",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      text: "Working with Harshit brought a level of clarity we didn't even know we needed. Their models were clean, on-point, and easy to coordinate across teams",
      name: "Corbin J.",
      role: "Managing Architect | OVID (Design+Development)",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      text: "I didn't have to explain things twice. the BIM builders understood the brief, delivered fast, and didn't drop the ball once. That's rare in outsourced work.",
      name: "Siddharth N.",
      role: "CEO | Gigfactory",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      text: "BIM builders not only delivered a precise and visually impressive model, but also made the entire process smooth and stress-free. We can't wait to collaborate with them again.",
      name: "Rianne G.",
      role: "Founder | Rooted Interior Design",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
      id: 7,
      text: "the BIM builders are hands down the most reliable BIM team we've worked with. They combined accuracy with practical coordination, eliminating costly rework and delays — the results speak for themselves.",
      name: "Sarah M.",
      role: "Project Architect | NorthPoint Studios",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    },
    {
      id: 8,
      text: "Harshit delivered models that took our project visuals to the next level. Their work helped us present with clarity, capture client attention, and get faster approvals than ever before.",
      name: "Isabelle S.",
      role: "Principal, Creative Director | Chirp Design Studio",
      rating: "4.7/5",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=100&h=100&fit=crop"
    },
    {
      id: 9,
      text: "the BIM builders understood our project requirements from day one and delivered models that perfectly captured our design intent.",
      name: "David A.",
      role: "Founder & CEO | Cognition Architecture",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      id: 10,
      text: "BIM builders not only delivered a precise and visually impressive model, but also made the entire process smooth and stress-free. We can't wait to collaborate with them again.",
      name: "Rianne G.",
      role: "Founder | Rooted Interior Design",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
  ];

  // Duplicate for seamless scrolling
  const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const row2 = [...testimonials.slice(5), ...testimonials.slice(5)];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-tag">• Testimonials</span>
        <h2 className="testimonials-title">Don&apos;t take our Word.</h2>
        <p className="testimonials-subtitle">Real Stories, Real Results - Straight from the people we have worked with</p>
      </div>

      <div className="testimonials-container">
        {/* Row 1 - scrolls left */}
        <div className="testimonials-row testimonials-row-1">
          <div className="testimonials-track">
            {row1.map((testimonial, index) => (
              <div key={`row1-${index}`} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    <span className="rating-value">{testimonial.rating}</span>
                    <span className="rating-star">★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="testimonials-row testimonials-row-2">
          <div className="testimonials-track reverse">
            {row2.map((testimonial, index) => (
              <div key={`row2-${index}`} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-rating">
                    <span className="rating-value">{testimonial.rating}</span>
                    <span className="rating-star">★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

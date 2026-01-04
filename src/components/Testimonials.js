"use client";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The Zenith Visions felt like an extension of our in-house team rather than an outsourced partner. The Zenith team was responsive, organized, and always ready to step in when timelines were tight.",
      rating: 5,
    },
    {
      id: 2,
      text: "Working with The Zenith Visions brought a level of clarity and structure that made coordination easy across disciplines. The team delivered clean, well-organized models that integrated seamlessly into our workflow.",
      rating: 5,
    },
    {
      id: 3,
      text: "The Zenith team consistently delivered accurate, build-ready BIM models that reduced coordination issues and rework. Their process-driven approach made a noticeable difference in overall project efficiency.",
      rating: 4.5,
    },
    {
      id: 4,
      text: "We appreciated how quickly The Zenith Visions understood our standards and expectations. The team worked independently, communicated clearly, and delivered dependable results without constant follow-ups.",
      rating: 5,
    },
    {
      id: 5,
      text: "Abhijeet's leadership, combined with the strength of The Zenith Visions team, ensured high-quality output throughout the project. The models were precise, coordinated, and practical for real-world execution.",
      rating: 5,
    },
    {
      id: 6,
      text: "The Zenith Visions delivered more than just models—they delivered confidence. The team's attention to detail and proactive coordination helped keep the project moving smoothly from start to finish.",
      rating: 4.5,
    },
    {
      id: 7,
      text: "The Zenith team was highly reliable and consistent in their delivery. Deadlines were met, revisions were handled efficiently, and the overall collaboration was stress-free.",
      rating: 5,
    },
    {
      id: 8,
      text: "What stood out most was the coordination quality. The Zenith Visions identified potential issues early, helping us avoid costly changes later in the project.",
      rating: 4.5,
    },
    {
      id: 9,
      text: "The combination of technical expertise and strong communication made The Zenith Visions a valuable partner. The team worked seamlessly with our architects, engineers, and consultants.",
      rating: 5,
    },
    {
      id: 10,
      text: "The Zenith Visions set a strong benchmark for BIM delivery. With clear leadership and a capable team behind it, the results were clean, coordinated, and ready for construction use.",
      rating: 5,
    },
  ];

  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    return stars;
  };

  // Duplicate for seamless scrolling - 5 boxes per row
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
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="testimonials-row testimonials-row-2">
          <div className="testimonials-track reverse">
            {row2.map((testimonial, index) => (
              <div key={`row2-${index}`} className="testimonial-card">
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

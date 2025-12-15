'use client'

export default function Hero() {
  return (
    <>
      <section className="video-hero">
        <iframe 
          src="https://www.youtube.com/embed/FbNTnx-rrVU?autoplay=1&mute=1&loop=1&playlist=FbNTnx-rrVU&controls=0&showinfo=0&rel=0&modestbranding=1" 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen>
        </iframe>
        <div className="video-overlay">
          <div className="video-text">
            <h1>Precision Scan to BIM Services</h1>
            <span className="service-separator">—</span>
          </div>
        </div>
      </section>

      <section className="action-buttons">
        <div className="buttons-container">
          <a href="#services" className="action-btn"><span>View All Services</span></a>
          <a href="#projects" className="action-btn"><span>Our Projects</span></a>
          <a href="#contact" className="action-btn"><span>Get Free Consultation</span></a>
          <a href="#team" className="action-btn"><span>Meet The Team</span></a>
        </div>
      </section>
    </>
  )
}

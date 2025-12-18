'use client'

export default function Hero() {
  return (
    <>
      <section className="video-hero">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="https://res.cloudinary.com/dx0nrghqt/video/upload/v1765996392/FINAL_VIDEO_fprwyh.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
          <div className="hero-text-content">
            <span className="hero-tagline">Your Dedicated BIM Team for AEC & GC Firms</span>
            <h1 className="hero-title">The Zenith Visions</h1>
          </div>
        </div>
      </section>
    </>
  )
}

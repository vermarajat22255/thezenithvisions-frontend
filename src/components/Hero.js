"use client";

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
          poster="https://res.cloudinary.com/dx0nrghqt/image/upload/f_auto,q_auto,w_1920/v1765387605/FARMHOUSE_BIM_MODEL_uuvlfs.jpg"
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dx0nrghqt/video/upload/q_auto,f_auto,w_1920/v1765996392/FINAL_VIDEO_fprwyh.mp4"
            type="video/mp4"
          />
          {/* Fallback for older browsers */}
          <source
            src="https://res.cloudinary.com/dx0nrghqt/video/upload/q_auto,f_webm,w_1920/v1765996392/FINAL_VIDEO_fprwyh.webm"
            type="video/webm"
          />
        </video>
        <div className="video-overlay">
          <div className="hero-text-content">
            <span className="hero-tagline">
              Your Dedicated BIM Team for AEC & GC Firms
            </span>
            <h1 className="hero-title">The Zenith Visions</h1>
          </div>
        </div>
      </section>
    </>
  );
}

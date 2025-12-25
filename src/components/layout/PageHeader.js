export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  gradient = "from-purple-900/90 to-blue-900/90",
}) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(109, 40, 217, 0.9) 0%, rgba(37, 99, 235, 0.9) 100%)",
      }}
    >
      {/* Background Image (optional) */}
      {backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "white",
          padding: "0 1rem",
          maxWidth: "56rem",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative gradient at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6rem",
          background: "linear-gradient(to top, #0f172a, transparent)",
        }}
      />
    </section>
  );
}

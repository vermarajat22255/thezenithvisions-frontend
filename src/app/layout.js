import "./globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "TheZenithVisions | Professional BIM Services | Architecture, MEP, Structural BIM",
  description:
    "TheZenithVisions offers professional BIM services including Architecture BIM, MEP BIM, Structural BIM, 3D Visualization, Scan to BIM, and Interior Documentation. Trusted by 200+ clients across 10+ countries.",
  keywords:
    "BIM Services, Architecture BIM, MEP BIM, Structural BIM, 3D Visualization, Scan to BIM, Revit Modeling, LOD 350, Shop Drawings, CAD Drafting, Interior Documentation, HVAC Modeling, Plumbing Design",
  authors: [{ name: "TheZenithVisions" }],
  openGraph: {
    type: "website",
    url: "https://thezenithvisions.com/",
    title: "TheZenithVisions | Professional BIM Services",
    description:
      "Precision BIM solutions for Architecture, MEP, Structural, and more. 1500+ projects delivered worldwide.",
    images: [
      {
        url: "https://thezenithvisions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheZenithVisions BIM Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheZenithVisions | Professional BIM Services",
    description:
      "Precision BIM solutions for Architecture, MEP, Structural, and more. 1500+ projects delivered worldwide.",
    images: ["https://thezenithvisions.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GSAP */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />

        {/* Lenis Smooth Scroll */}
        <Script
          src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"
          strategy="beforeInteractive"
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TheZenithVisions",
              url: "https://thezenithvisions.com",
              logo: "https://thezenithvisions.com/logo.png",
              description:
                "Professional BIM services including Architecture BIM, MEP BIM, Structural BIM, 3D Visualization, and Scan to BIM.",
              foundingDate: "2020",
              sameAs: [
                "https://www.linkedin.com/company/thezenithvisions",
                "https://www.instagram.com/thezenithvisions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "info@thezenithvisions.com",
              },
              areaServed: [
                "US",
                "UK",
                "CA",
                "AU",
                "DE",
                "AE",
                "IN",
                "SA",
                "SG",
                "NZ",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}

                {/* Scroll to Top Button */}
        <button className="scroll-to-top">
          <svg viewBox="0 0 60 60">
            <circle className="scroll-progress" cx="30" cy="30" r="25"></circle>
          </svg>
          <span className="scroll-to-top-arrow">↑</span>
        </button>

        {/* Custom Cursor */}
        <div className="cursor-dot"></div>
        <div className="cursor-lens"></div>
      </body>
    </html>
  );
}

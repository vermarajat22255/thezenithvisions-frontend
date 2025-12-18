"use client";

export default function Logo({ size = "medium", className = "" }) {
  // Size presets
  const sizes = {
    small: { width: 150, height: 45 },
    medium: { width: 200, height: 60 },
    large: { width: 280, height: 85 },
    xlarge: { width: 350, height: 105 }
  };

  const { width, height } = sizes[size] || sizes.medium;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 350 105" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer V Triangle */}
      <path 
        d="M10 10 L50 95 L90 10 L75 10 L50 65 L25 10 Z" 
        fill="currentColor"
      />
      {/* Inner Triangle */}
      <path 
        d="M35 25 L50 55 L65 25 Z" 
        fill="currentColor"
      />
      
      {/* THE ZENITH text */}
      <text 
        x="105" 
        y="30" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="600" 
        letterSpacing="3"
        fill="currentColor"
      >
        THE ZENITH
      </text>
      
      {/* VISIONS text */}
      <text 
        x="105" 
        y="75" 
        fontFamily="Arial, sans-serif" 
        fontSize="42" 
        fontWeight="700" 
        letterSpacing="2"
        fill="currentColor"
      >
        VISIONS
      </text>
    </svg>
  );
}

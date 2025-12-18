"use client";

export default function BenefitsStrip() {
  const benefits = [
    "100% ON TIME DELIVERY",
    "COST-EFFICIENT OUTSOURCING",
    "ACCURATE, CONSTRUCTIBLE BIM MODELS",
    "LOD 300–500 EXPERTS",
    "DEDICATED BIM TEAMS",
    "MULTI-LEVEL QC BEFORE DELIVERY",
    "LONG-TERM BIM PARTNER",
    "UP TO 60% COST SAVINGS"
  ];

  return (
    <section className="benefits-strip">
      <div className="benefits-strip-track">
        {benefits.map((benefit, index) => (
          <span key={index}>
            <span className="benefit-dot">●</span>
            <span className="benefit-item">{benefit}</span>
          </span>
        ))}
        {benefits.map((benefit, index) => (
          <span key={`dup-${index}`}>
            <span className="benefit-dot">●</span>
            <span className="benefit-item">{benefit}</span>
          </span>
        ))}
        {benefits.map((benefit, index) => (
          <span key={`dup2-${index}`}>
            <span className="benefit-dot">●</span>
            <span className="benefit-item">{benefit}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

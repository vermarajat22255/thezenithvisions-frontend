import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export const metadata = {
  title: "Terms & Conditions | TheZenithVisions BIM Services",
  description:
    "Read the Terms & Conditions governing all engagements, services, and communications with TheZenithVisions — a global provider of BIM and architectural services.",
  keywords:
    "TheZenithVisions Terms and Conditions, BIM Services Agreement, Service Terms, Legal Policy",
  openGraph: {
    type: "website",
    url: "https://thezenithvisions.com/legal/terms-and-conditions",
    title: "Terms & Conditions | TheZenithVisions",
    description:
      "Terms & Conditions governing all engagements and services provided by TheZenithVisions.",
  },
  alternates: {
    canonical: "https://thezenithvisions.com/legal/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "Agreement Framework",
    content: `All services are delivered strictly under a mutually accepted written document, such as a proposal, contract, or MoU. Project execution begins only after formal confirmation of scope, deliverables, timelines, and commercial terms.

In the event of any discrepancy, the signed agreement shall take precedence over this document.`,
  },
  {
    number: "02",
    title: "Engagement & Pricing Models",
    content: `We offer flexible commercial structures based on project requirements, including fixed or area-based pricing, dedicated monthly engagements, time-based (hourly) billing, and customized service packages.

All project-specific details, including scope and deliverables, are clearly defined and approved prior to commencement.`,
  },
  {
    number: "03",
    title: "Payment Structure",
    bullets: [
      "An advance payment ranging from 50% to 100% is required before initiating work.",
      "Final deliverables will only be issued after full settlement of outstanding payments.",
      "Delayed payments beyond 10 days from invoice issuance may incur a 3% monthly surcharge.",
      "Payments are non-refundable once work has commenced or any deliverables have been shared, unless explicitly agreed otherwise.",
    ],
  },
  {
    number: "04",
    title: "Ownership & Usage Rights",
    content: `All outputs, including BIM models, drawings, and documentation, remain the property of The Zenith Visions until full payment is received.

Upon complete payment, ownership of final deliverables is transferred to the client. Internal assets such as templates, parametric families, workflows, and libraries remain proprietary and are not transferred.

The Zenith Visions is not liable for any intellectual property concerns related to client-provided data.`,
  },
  {
    number: "05",
    title: "Scope Control & Modifications",
    bullets: [
      "Standard engagements include limited revision cycles (typically 1–2 rounds), to be requested within a defined review period.",
      "Any additional changes beyond the approved scope will be treated as separate work and quoted accordingly.",
      "Significant deviations from the original scope may require revised timelines and formal approval through a new agreement.",
    ],
  },
  {
    number: "06",
    title: "Client Commitments",
    content: `To ensure smooth execution, clients are expected to provide accurate and complete base data, drawings, and references; respond to submissions and approvals within agreed timelines; ensure legal authorization for all shared materials; and maintain clear and timely communication.

Project timelines may be impacted by delays in inputs or approvals.`,
  },
  {
    number: "07",
    title: "Liability Disclaimer",
    content: `The Zenith Visions shall not be responsible for delays caused by incomplete or late client inputs, errors resulting from inaccurate base information, or any construction, engineering, or compliance issues arising from direct use of deliverables without professional validation.

Clients are advised to have all outputs reviewed by licensed professionals prior to execution.`,
  },
  {
    number: "08",
    title: "Confidentiality & Data Protection",
    bullets: [
      "Data is stored on secure, encrypted cloud platforms.",
      "Access is limited to authorized personnel only.",
      "No information is shared externally without written consent.",
      "Non-Disclosure Agreements (NDAs) can be executed upon request.",
    ],
  },
  {
    number: "09",
    title: "Suspension & Termination Rights",
    content: `We reserve the right to suspend or terminate services in cases of breach of payment terms, unprofessional conduct or misuse of communication, or unauthorized changes to agreed scope.

In such cases, all completed work remains billable and deliverables may be withheld until outstanding dues are cleared. For unresolved payment issues, especially in international engagements, we reserve the right to pursue legal recovery through appropriate jurisdictions.`,
  },
  {
    number: "10",
    title: "Legal Governance",
    content: `These terms shall be governed by applicable laws based on project jurisdiction: India – Indian Contract Act, 1872 & IT Act; United States – Relevant State Laws & UCC provisions; United Kingdom – English Contract Law.`,
  },
  {
    number: "11",
    title: "Quality Standards & BIM Protocols",
    content: `All deliverables are developed in line with recognized BIM standards and project requirements, including LOD 300–500 (as agreed), coordination through industry tools (Revit, Navisworks, BIM 360, etc.), and alignment with client BIM Execution Plans if provided.`,
  },
  {
    number: "12",
    title: "Force Majeure",
    content: `The Zenith Visions shall not be held liable for delays or failure in performance due to events beyond reasonable control, including natural disasters, technical failures, regulatory changes, or global disruptions.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="page-hero-tag">LEGAL</span>
          <h1 className="legal-hero-title">Terms &amp; Conditions</h1>
          <p className="legal-hero-subtitle">
            Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: January
            1, 2025
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="legal-intro-section">
        <div className="legal-container">
          <div className="legal-intro-box">
            <p>
              Welcome to <strong>The Zenith Visions</strong>, a global provider
              of BIM and architectural services. These Terms &amp; Conditions
              outline the principles governing all engagements, services, and
              communications with our clients.
            </p>
            <p>
              By accessing our website, requesting our services, or entering
              into a project agreement, you confirm that you have read,
              understood, and accepted these terms. They apply to all services
              including BIM modeling, documentation, coordination,
              visualization, and related consultancy.
            </p>
            <p>
              If you do not agree with these terms, we advise not proceeding
              with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="legal-sections">
        <div className="legal-container">
          {sections.map((section) => (
            <div key={section.number} className="legal-section-item">
              <div className="legal-section-number">{section.number}</div>
              <div className="legal-section-body">
                <h2 className="legal-section-title">{section.title}</h2>
                {section.bullets ? (
                  <ul className="legal-bullets">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  section.content
                    .split("\n\n")
                    .map((para, i) => <p key={i}>{para}</p>)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="legal-contact-section">
        <div className="legal-container">
          <div className="legal-contact-box">
            <h3>Have Questions About These Terms?</h3>
            <p>
              For any queries or clarifications regarding these Terms &amp;
              Conditions, please reach out to our team.
            </p>
            <a
              href="mailto:admin@thezenithvisions.com"
              className="legal-contact-btn"
            >
              admin@thezenithvisions.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

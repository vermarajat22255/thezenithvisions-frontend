import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export const metadata = {
  title: "Refund Policy | TheZenithVisions BIM Services",
  description:
    "Understand the refund policy for TheZenithVisions BIM and architectural services — including eligible scenarios, non-refundable conditions, and the refund request procedure.",
  keywords:
    "TheZenithVisions Refund Policy, BIM Services Refund, Service Cancellation Policy, Payment Refund",
  openGraph: {
    type: "website",
    url: "https://thezenithvisions.com/legal/refund-policy",
    title: "Refund Policy | TheZenithVisions",
    description:
      "Refund Policy for TheZenithVisions — conditions, procedures, and timelines for refund requests on BIM and architectural services.",
  },
  alternates: {
    canonical: "https://thezenithvisions.com/legal/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "Nature of Services",
    content:
      "Our services involve design development, BIM modeling, and technical documentation, all of which are tailored and resource-intensive. Once work has commenced, significant time, expertise, and operational costs are committed.\n\nAs a result, refunds are generally not applicable once project execution has started or deliverables have been shared.",
  },
  {
    number: "02",
    title: "Situations Where Refunds May Be Considered",
    content:
      "Refund requests may be reviewed under the following specific scenarios:",
    subsections: [
      {
        heading: "2.1 Duplicate Transactions",
        body: "If an overpayment or duplicate charge occurs due to a technical or billing issue, the excess amount will be returned in full within 7 working days after verification.",
      },
      {
        heading: "2.2 Work Yet to Commence",
        body: "If a payment has been made but project activities have not been initiated — meaning no team allocation, modeling, or documentation work has begun — you may request a refund. A nominal administrative deduction (approximately 10%) will apply.",
      },
      {
        heading: "2.3 Early-Stage Subscription Engagements",
        body: "For ongoing or retainer-based services, if a concern is raised within the initial few working days (typically within 5 days) regarding quality or alignment, a partial refund of up to 80% of the billed amount may be considered after deducting applicable operational costs.",
      },
      {
        heading: "2.4 Failure to Initiate Project",
        body: "If we are unable to begin work within a reasonable timeframe (generally within 10 working days of the agreed start date), and no prior communication or justification has been provided, you may submit a written request for a full refund.",
      },
    ],
  },
  {
    number: "03",
    title: "Non-Refundable Conditions",
    content: "Refunds will not be applicable under the following circumstances:",
    bullets: [
      "Project scope has been approved and confirmed",
      "Required inputs (drawings, point clouds, specifications, etc.) have been received",
      "Work has already commenced in any form",
      "Delays are caused by lack of client inputs or approvals",
      "Services are discontinued due to violation of agreed terms",
      "The engagement involves trial work, pilot tasks, or discounted services",
    ],
  },
  {
    number: "04",
    title: "Adjustments, Partial Refunds & Credits",
    content:
      "In exceptional cases, we may offer a partial refund or credit adjustment, particularly when a project is mutually paused or cancelled before reaching key milestones, or the scope is significantly reduced during execution.\n\nAny such adjustment will be calculated after deducting:",
    bullets: [
      "Work already completed",
      "Time invested by the project team",
      "Resources allocated to the project",
    ],
  },
  {
    number: "05",
    title: "Refund Request Procedure",
    content:
      "To initiate a refund request, please share the following details via email:",
    bullets: [
      "Invoice or reference number",
      "Payment details and transaction ID",
      "Reason for the request",
      "Supporting documents (if applicable)",
    ],
    note: "Once approved, refunds will be processed through the original payment method within 7–14 business days.",
  },
  {
    number: "06",
    title: "Dispute & Chargeback Policy",
    content:
      "We encourage direct communication to resolve any concerns. By engaging our services, you agree to contact us prior to initiating any payment disputes or chargebacks.\n\nIn cases where a chargeback is raised without prior notice:",
    bullets: [
      "All ongoing services may be suspended immediately",
      "We reserve the right to pursue recovery of funds, including associated damages and costs",
    ],
  },
  {
    number: "07",
    title: "Legal Jurisdiction",
    content:
      "This Refund Policy is governed by the applicable laws of India. For international engagements, disputes may be resolved through mutually agreed arbitration mechanisms, if required.",
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="page-hero-tag">LEGAL</span>
          <h1 className="legal-hero-title">Refund Policy</h1>
          <p className="legal-hero-subtitle">
            Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="legal-intro-section">
        <div className="legal-container">
          <div className="legal-intro-box">
            <p>
              At <strong>The Zenith Visions</strong>, we are committed to delivering high-quality
              BIM and architectural services with transparency and professionalism. This Refund
              Policy explains the circumstances under which refunds may be granted, ensuring clear
              expectations before any engagement begins.
            </p>
            <p>
              Due to the customized and service-based nature of our work, refunds are limited and
              subject to the conditions outlined below.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-sections">
        <div className="legal-container">
          {sections.map((section) => (
            <div key={section.number} className="legal-section-item">
              <div className="legal-section-number">{section.number}</div>
              <div className="legal-section-body">
                <h2 className="legal-section-title">{section.title}</h2>

                {section.content &&
                  section.content.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                {section.subsections &&
                  section.subsections.map((sub, si) => (
                    <div key={si} className="legal-subsection">
                      <h3 className="legal-subsection-heading">{sub.heading}</h3>
                      <p>{sub.body}</p>
                    </div>
                  ))}

                {section.bullets && (
                  <ul className="legal-bullets">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="legal-note">{section.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="legal-contact-section">
        <div className="legal-container">
          <div className="legal-contact-box">
            <h3>Refund Queries or Requests?</h3>
            <p>
              For any questions regarding this policy or to initiate a refund request, please
              reach out to our team directly.
            </p>
            <a href="mailto:Admin@thezenithvisions.com" className="legal-contact-btn">
              Admin@thezenithvisions.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ClientScripts />
    </>
  );
}

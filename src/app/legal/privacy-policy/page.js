import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export const metadata = {
  title: "Privacy Policy | TheZenithVisions BIM Services",
  description:
    "Learn how TheZenithVisions collects, processes, stores, and protects your data while delivering BIM and architectural services across international markets.",
  keywords:
    "TheZenithVisions Privacy Policy, BIM Services Data Protection, GDPR, CCPA, Data Privacy, Information Security",
  openGraph: {
    type: "website",
    url: "https://thezenithvisions.com/legal/privacy-policy",
    title: "Privacy Policy | TheZenithVisions",
    description:
      "Privacy Policy explaining how TheZenithVisions handles your data across our global BIM services operations.",
  },
  alternates: {
    canonical: "https://thezenithvisions.com/legal/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: "We gather different types of information depending on your interaction with us.",
    subsections: [
      {
        heading: "a. Contact & Identity Information",
        bullets: [
          "Full name, email address, phone number",
          "Company details and professional designation",
          "Billing details including address and applicable tax information",
        ],
      },
      {
        heading: "b. Project & Technical Inputs",
        bullets: [
          "BIM files, CAD drawings, Revit/IFC models, specifications",
          "Markups, comments, and communication records (emails, Teams, etc.)",
        ],
      },
      {
        heading: "c. System & Usage Data",
        bullets: [
          "IP address, browser type, and device details",
          "Session activity, duration, and interaction patterns",
          "Approximate location data",
        ],
        note: "Users can manage cookie preferences through their browser settings.",
      },
    ],
  },
  {
    number: "02",
    title: "Purpose of Data Processing",
    content: "Your data is used strictly for operational and service-related purposes, including:",
    bullets: [
      "Managing communication and project coordination",
      "Delivering BIM models, drawings, and revisions",
      "Processing invoices and financial transactions",
      "Maintaining organized and secure project records",
      "Ensuring system security and improving service performance",
    ],
    note: "We do not engage in unsolicited promotions or sell user data.",
  },
  {
    number: "03",
    title: "Legal Grounds for Processing",
    content: "Depending on your location, data processing is carried out under:",
    bullets: [
      "User Consent — when you submit forms or initiate contact",
      "Contractual Obligation — to fulfill agreed project deliverables",
      "Legitimate Interest — to enhance service quality and security",
      "Regulatory Compliance — for taxation, audits, and legal requirements",
    ],
  },
  {
    number: "04",
    title: "Data Sharing & Third Parties",
    content: "Your information is shared only when necessary and under strict control:",
    bullets: [
      "Within our internal team, all bound by confidentiality agreements",
      "With trusted payment gateways (such as Stripe, Razorpay, PayPal)",
      "With secure cloud service providers (Microsoft, Google)",
      "With regulatory authorities when legally required",
    ],
    note: "We do not sell, lease, or distribute your data to external parties.",
  },
  {
    number: "05",
    title: "International Data Handling",
    content:
      "As a global service provider, your data may be processed across multiple regions, including India, the USA, and the UK. To ensure protection:",
    bullets: [
      "We follow internationally accepted data protection standards",
      "Use secure cloud infrastructures with compliance certifications",
      "Apply contractual safeguards for cross-border data transfers",
    ],
  },
  {
    number: "06",
    title: "Data Storage & Retention",
    content:
      "We retain personal and project-related data for a reasonable duration to support operations, typically up to five years, unless extended retention is required for legal or contractual reasons.\n\nClients may request earlier deletion, subject to applicable legal obligations.",
  },
  {
    number: "07",
    title: "Your Data Rights",
    content: "Depending on applicable laws, you may have the right to:",
    bullets: [
      "Access the personal data we hold about you",
      "Request corrections or updates",
      "Request deletion of your data",
      "Withdraw previously given consent",
      "Restrict or object to certain processing activities",
      "Request a copy/export of your data (where applicable)",
    ],
    note: "Requests can be submitted through our official contact channels.",
  },
  {
    number: "08",
    title: "Data Protection Measures",
    content: "We implement industry-standard security practices to protect your information:",
    bullets: [
      "Encrypted cloud storage systems",
      "Controlled, role-based access to project files",
      "Secure communication channels and audit tracking",
      "Internal protocols for handling and segregating client data",
    ],
  },
  {
    number: "09",
    title: "Regulatory Compliance",
    content: "Our privacy practices are aligned with key data protection regulations, including:",
    bullets: [
      "India — Information Technology Act, 2000 & SPDI Rules",
      "United States — Applicable frameworks such as CCPA",
      "United Kingdom — UK GDPR requirements",
    ],
  },
  {
    number: "10",
    title: "Policy Updates",
    content:
      "This Privacy Policy may be updated periodically to reflect operational, legal, or technological changes. Continued use of our services indicates acceptance of the revised policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="page-hero-tag">LEGAL</span>
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">
            Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: January 1, 2025
          </p>
        </div>
      </section>

      <section className="legal-intro-section">
        <div className="legal-container">
          <div className="legal-intro-box">
            <p>
              At <strong>The Zenith Visions</strong>, safeguarding your information is a core
              priority. This Privacy Policy explains how we collect, process, store, and protect
              your data while delivering our BIM and architectural services across international
              markets.
            </p>
            <p>
              By accessing our website or engaging with our services, you agree to the practices
              described in this policy. Our data handling approach aligns with applicable
              regulations in India, the United States, and the United Kingdom.
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

                {section.bullets && (
                  <ul className="legal-bullets">
                    {section.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {section.subsections &&
                  section.subsections.map((sub, si) => (
                    <div key={si} className="legal-subsection">
                      <h3 className="legal-subsection-heading">{sub.heading}</h3>
                      <ul className="legal-bullets">
                        {sub.bullets.map((b, bi) => (
                          <li key={bi}>{b}</li>
                        ))}
                      </ul>
                      {sub.note && <p className="legal-note">{sub.note}</p>}
                    </div>
                  ))}

                {section.note && !section.subsections && (
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
            <h3>Questions About Your Privacy?</h3>
            <p>
              For any queries, requests, or concerns regarding this Privacy Policy, please reach
              out to our team directly.
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

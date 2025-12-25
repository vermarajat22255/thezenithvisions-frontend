import React from "react";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Leading the company with 15+ years of experience in BIM technology and architectural design.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@thezenithvisions.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Driving innovation with cutting-edge BIM solutions and technology integration.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@thezenithvisions.com",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Architecture",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Specializing in architectural BIM with expertise in complex commercial projects.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@thezenithvisions.com",
      },
    },
  ];

  return (
    <section className="meet-the-team">
      <div className="team-header-section">
        <div className="team-container">
          <div className="team-header">
            <span className="team-tag">OUR TEAM</span>
            <h2 className="team-title">Meet The Experts Behind Your Success</h2>
            <p className="team-description">
              Our talented team of professionals brings decades of combined
              experience in BIM services, architectural design, and engineering
              excellence to deliver outstanding results for every project.
            </p>
          </div>
        </div>
      </div>

      <div className="team-content-section">
        <div className="team-container">
          {/* Team Grid */}
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-inner">
                  {/* Front of card */}
                  <div className="team-card-front">
                    <div className="team-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-image"
                      />
                      <div className="team-overlay">
                        <span className="view-profile">View Profile</span>
                      </div>
                    </div>
                    <div className="team-info">
                      <h3 className="team-member-name">{member.name}</h3>
                      <p className="team-member-role">{member.role}</p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="team-card-back">
                    <div className="team-back-content">
                      <h3 className="team-member-name-back">{member.name}</h3>
                      <p className="team-member-role-back">{member.role}</p>
                      <p className="team-member-bio">{member.bio}</p>
                      <div className="team-social">
                        <a
                          href={member.social.linkedin}
                          className="social-icon"
                          aria-label="LinkedIn"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          className="social-icon"
                          aria-label="Twitter"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="social-icon"
                          aria-label="Email"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="team-cta">
            <p className="team-cta-text">Want to join our talented team?</p>
            <a href="#contact" className="team-cta-button">
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

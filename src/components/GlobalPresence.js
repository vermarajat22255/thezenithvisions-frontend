"use client";

export default function GlobalPresence() {
  return (
    <section className="global-presence">
      <div className="global-container">
        <div className="global-header">
          <div className="global-tag">Global Presence</div>
          <h2 className="global-title">SERVING CLIENTS WORLDWIDE</h2>
          <p className="global-description">
            From architectural firms to construction giants, we&apos;ve
            partnered with industry leaders across the globe. Our BIM expertise
            transcends borders, delivering precision and excellence to projects
            spanning multiple continents.
          </p>
        </div>

        <div className="global-stats">
          <div className="global-stat">
            <div className="global-stat-number">200+</div>
            <div className="global-stat-label">Clients Served</div>
          </div>
          <div className="global-stat">
            <div className="global-stat-number">10+</div>
            <div className="global-stat-label">Countries</div>
          </div>
          <div className="global-stat">
            <div className="global-stat-number">1500+</div>
            <div className="global-stat-label">Projects Delivered</div>
          </div>
        </div>

        <div className="flags-container">
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/us.png" alt="USA Flag" />
            <span>USA</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/gb.png" alt="UK Flag" />
            <span>UK</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/ca.png" alt="Canada Flag" />
            <span>Canada</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/au.png" alt="Australia Flag" />
            <span>Australia</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/de.png" alt="Germany Flag" />
            <span>Germany</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/ae.png" alt="UAE Flag" />
            <span>UAE</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/il.png" alt="Israel Flag" />
            <span>Israel</span>
          </div>
          <div className="flag-item">
            <img
              src="https://flagcdn.com/w160/za.png"
              alt="South Africa Flag"
            />
            <span>South Africa</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/sg.png" alt="Singapore Flag" />
            <span>Singapore</span>
          </div>
          <div className="flag-item">
            <img src="https://flagcdn.com/w160/in.png" alt="India Flag" />
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

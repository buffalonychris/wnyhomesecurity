import { NavLink } from 'react-router-dom';

const NewSiteContact = () => (
  <div className="newsite-container">
    <section className="newsite-hero">
      <div>
        <span className="newsite-badge">Concierge contact</span>
        <h1>Connect with a security advisor</h1>
        <p>
          Reach us in the way that feels most comfortable. We will tailor recommendations around the packages that fit
          your home, pace, and priorities.
        </p>
        <p>If you’d rather not decide alone, we can walk you through it.</p>
        <div className="newsite-cta-row">
          <a className="newsite-btn" href="tel:17163912405">
            Call now (716) 391-2405
          </a>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/callback">
            Request a callback
          </NavLink>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/on-site-quote">
            Request an on-site quote
          </NavLink>
        </div>
      </div>
      <div className="newsite-card">
        <strong>White-glove response</strong>
        <p>We confirm details quickly, prioritize your timing, and align next steps before the call ends.</p>
        <ul className="newsite-list">
          <li>Same-day or next-day call windows when available.</li>
          <li>Guidance on which packages deliver the best coverage.</li>
          <li>Clear next steps with no pressure.</li>
        </ul>
      </div>
    </section>

    <section className="newsite-section">
      <h2>Choose your preferred path</h2>
      <div className="newsite-grid">
        <div className="newsite-card">
          <span className="newsite-badge">Immediate</span>
          <strong>Call now</strong>
          <p>Tap to connect instantly with a concierge advisor.</p>
          <a className="newsite-btn newsite-btn-secondary" href="tel:17163912405">
            Call (716) 391-2405
          </a>
        </div>
        <div className="newsite-card">
          <span className="newsite-badge">Concierge call</span>
          <strong>Request a callback</strong>
          <p>Share a few details and we will call at the time you prefer.</p>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/callback">
            Schedule my call
          </NavLink>
        </div>
        <div className="newsite-card">
          <span className="newsite-badge">On-site guidance</span>
          <strong>Request an on-site quote</strong>
          <p>We will visit your home to map coverage and recommend the right packages.</p>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/on-site-quote">
            Book a visit
          </NavLink>
        </div>
      </div>
    </section>
  </div>
);

export default NewSiteContact;

import { NavLink } from 'react-router-dom';

const NewSiteQuote = () => (
  <div className="newsite-container">
    <section className="newsite-hero">
      <div>
        <span className="newsite-badge">Online quote</span>
        <h1>Online quote coming soon</h1>
        <p>
          We are building a fast, guided quote experience for NewSite. In the meantime, explore packages or talk with an
          advisor to get your next steps.
        </p>
        <div className="newsite-cta-row">
          <NavLink className="newsite-btn" to="/newsite/home-security/packages">
            View packages
          </NavLink>
          <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/contact">
            Talk to an advisor
          </NavLink>
        </div>
      </div>
      <div className="newsite-card">
        <strong>What to expect</strong>
        <ul className="newsite-list">
          <li>Quick questions about your home and priorities.</li>
          <li>Package recommendations with clear next steps.</li>
          <li>Support from a local advisor whenever you want it.</li>
        </ul>
      </div>
    </section>
  </div>
);

export default NewSiteQuote;

import { NavLink } from 'react-router-dom';

const DemosIndex = () => {
  return (
    <div className="newsite-container">
      <section className="newsite-hero">
        <div>
          <span className="newsite-badge">Read-only demos</span>
          <h1>Explore the HA Gold demo suite</h1>
          <p>
            Preview the premium homeowner dashboard experience. Each demo is powered by simulated data and is fully
            read-only.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Demo mode — simulated data only</strong>
          <p>These environments are intentionally locked to ensure no live actions can be triggered.</p>
        </div>
      </section>

      <section className="newsite-section">
        <h2>Available demos</h2>
        <div className="newsite-grid">
          <div className="newsite-card">
            <strong>HA Gold dashboard</strong>
            <p>Review monitoring status, automation routines, and smart device health.</p>
            <NavLink className="newsite-btn" to="/newsite/demos/ha-gold-dashboard">
              Open demo
            </NavLink>
          </div>
          <div className="newsite-card">
            <strong>HA Gold onboarding</strong>
            <p>Coming soon — guided setup walkthrough and site survey recap.</p>
            <span className="newsite-badge">In development</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemosIndex;

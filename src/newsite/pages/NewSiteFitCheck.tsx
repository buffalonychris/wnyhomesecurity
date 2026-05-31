import FitCheck from '../../components/FitCheck';
import { fitCheckConfigs } from '../../content/fitCheckConfigs';

const NewSiteFitCheck = () => (
  <div className="newsite-container">
    <section className="newsite-hero">
      <div>
        <span className="newsite-badge">Fit Check</span>
        <h1>Find practical next steps in minutes</h1>
        <p>
          Answer a few quick questions about your property, routines, and concerns. We will suggest possible solution
          categories to discuss next.
        </p>
      </div>
      <div className="newsite-card">
        <strong>Quick, guided, and clear</strong>
        <p>Use Fit Check as a starting point before requesting a call or on-site estimate.</p>
        <ul className="newsite-list">
          <li>Less than 3 minutes to complete.</li>
          <li>Based on situations homeowners actually recognize.</li>
          <li>Clear categories to review with WNY Home Security.</li>
        </ul>
      </div>
    </section>

    <section className="newsite-section">
      <FitCheck config={fitCheckConfigs['newsite-home-security']} layout="embedded" />
    </section>
  </div>
);

export default NewSiteFitCheck;

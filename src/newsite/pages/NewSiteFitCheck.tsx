import FitCheck from '../../components/FitCheck';
import { fitCheckConfigs } from '../../content/fitCheckConfigs';

const NewSiteFitCheck = () => (
  <div className="newsite-container">
    <section className="newsite-hero">
      <div>
        <span className="newsite-badge">Fit Check</span>
        <h1>Find the right package in minutes</h1>
        <p>
          Answer a few quick questions and we will suggest the package that fits your home, priorities, and desired level of
          coverage.
        </p>
      </div>
      <div className="newsite-card">
        <strong>Quick, guided, and clear</strong>
        <p>Get a tailored recommendation and move directly into the next steps when you are ready.</p>
        <ul className="newsite-list">
          <li>Less than 3 minutes to complete.</li>
          <li>Aligned to WNY Home Security packages.</li>
          <li>Actionable next steps after you submit.</li>
        </ul>
      </div>
    </section>

    <section className="newsite-section">
      <FitCheck config={fitCheckConfigs['newsite-home-security']} layout="embedded" />
    </section>
  </div>
);

export default NewSiteFitCheck;

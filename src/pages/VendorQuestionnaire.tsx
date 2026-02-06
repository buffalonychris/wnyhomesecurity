import Seo from '../components/Seo';
import VendorJourneyNav from '../components/VendorJourneyNav';
import { brandSite } from '../lib/brand';

const VendorQuestionnaire = () => {
  return (
    <div className="container section">
      <Seo
        title={`Technical Questionnaire | ${brandSite}`}
        description="Binary vendor technical questionnaire for offline-first hardware evaluation readiness."
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Binary gate
          </p>
          <h2 style={{ margin: 0 }}>Vendor Technical Questionnaire</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            Answer each item Yes or No. This page is informational only.
          </p>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            Any required “No” = not eligible for evaluation at this time.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>1) Offline operation</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: core functions operate without internet connectivity.</span>
            </li>
            <li>
              <span />
              <span>Required: local fallback behavior is documented.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>2) Local control interface</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: LAN APIs or protocols are available for local control.</span>
            </li>
            <li>
              <span />
              <span>Required: commands are documented and stable.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>3) Cloud/subscription independence</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: no mandatory cloud account for core functions.</span>
            </li>
            <li>
              <span />
              <span>Required: no required subscriptions for ongoing operation.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>4) Firmware/update policy</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: updates do not brick devices or remove offline functionality.</span>
            </li>
            <li>
              <span />
              <span>Required: no forced cloud pairing after updates.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>5) Privacy posture</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: no audio monitoring requirements.</span>
            </li>
            <li>
              <span />
              <span>Required: no video monitoring requirements.</span>
            </li>
            <li>
              <span />
              <span>Required: no GPS required for core operation.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>6) Determinism &amp; documentation</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: behavior is deterministic and explainable.</span>
            </li>
            <li>
              <span />
              <span>Required: documentation is available for firmware behavior.</span>
            </li>
            <li>
              <span />
              <span>Optional: logs or telemetry can remain local.</span>
            </li>
          </ul>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>7) Supply &amp; reliability signals</h3>
          <ul className="list">
            <li>
              <span />
              <span>Required: basic supply continuity information is available.</span>
            </li>
            <li>
              <span />
              <span>Required: hardware reliability data or test notes can be shared.</span>
            </li>
            <li>
              <span />
              <span>Required: clear lifecycle or end-of-life notice process.</span>
            </li>
          </ul>
        </section>

        <section className="card" aria-labelledby="contact-for-evaluation">
          <h3 id="contact-for-evaluation" style={{ marginTop: 0, color: '#fff7e6' }}>
            Contact for evaluation (manual)
          </h3>
          <p>
            Email only. This is a manual process and every request is reviewed individually.
          </p>
          <p className="mono-text break-all" style={{ marginBottom: '0.75rem' }}>
            admin@reliableeldercare.com
          </p>
          <ul className="list">
            <li>
              <span />
              <span>Company name and primary contact.</span>
            </li>
            <li>
              <span />
              <span>Product summary and offline operation details.</span>
            </li>
            <li>
              <span />
              <span>Local control interface documentation or references.</span>
            </li>
            <li>
              <span />
              <span>Availability for shipping 1–2 evaluation units if requested.</span>
            </li>
          </ul>
        </section>

        <VendorJourneyNav />
      </div>
    </div>
  );
};

export default VendorQuestionnaire;

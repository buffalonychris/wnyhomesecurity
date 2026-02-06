import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import VendorJourneyNav from '../components/VendorJourneyNav';
import { brandSite } from '../lib/brand';

const VendorEvaluationToolkit = () => {
  return (
    <div className="container section">
      <Seo
        title={`Evaluation Toolkit | ${brandSite}`}
        description="A calm overview of the vendor evaluation toolkit, scope, and acceptance discipline."
      />
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Vendor evaluation
          </p>
          <h2 style={{ margin: 0 }}>Evaluation Toolkit</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            This overview explains what vendors receive and how KAEC evaluates hardware and firmware against
            offline-first standards.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>1) Overview</h3>
          <p>
            Vendors receive a clear evaluation outline, logistics expectations, and the binary technical gate.
            KAEC evaluates offline reliability, deterministic behavior, and local control readiness.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>2) Evaluation scope</h3>
          <p>
            1–2 units are requested for initial review. We keep coordination minimal and avoid extended
            back-and-forth during the test window.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>3) Timeline</h3>
          <ul className="list">
            <li>
              <span />
              <span>Week 1: intake, setup, and baseline offline verification.</span>
            </li>
            <li>
              <span />
              <span>Week 2: deterministic behavior checks and local control validation.</span>
            </li>
            <li>
              <span />
              <span>Week 3 (if needed): stress checks, scoring, and sign-off.</span>
            </li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>Total window: 14–21 days.</p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>4) Pass/Fail technical gate</h3>
          <p>
            The gate is binary and must be satisfied before evaluation begins. See the
            {' '}<Link to="/vendors/questionnaire">technical questionnaire</Link> for the exact requirements.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>5) Objective scoring and acceptance criteria</h3>
          <p>
            Scoring is technical and objective. We avoid subjective marketing criteria and do not offer
            commitments or guarantees based on evaluation outcomes.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>6) Firmware/control expectations</h3>
          <p>
            Local APIs, documented protocols, and predictable firmware behavior are required. Updates cannot
            force cloud pairing or break offline operation.
          </p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>7) NDA-lite availability</h3>
          <p>NDA-lite is available on request. It is optional and used only when needed.</p>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>8) Outcomes</h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>If accepted</h4>
              <ul className="list">
                <li>
                  <span />
                  <span>Approved list eligibility</span>
                </li>
                <li>
                  <span />
                  <span>BOM lock eligibility</span>
                </li>
                <li>
                  <span />
                  <span>Production PO eligibility</span>
                </li>
                <li>
                  <span />
                  <span>Verified Hardware Partner status (B2B only)</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>If not accepted</h4>
              <p>We provide a professional decline and preserve goodwill.</p>
            </div>
          </div>
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

export default VendorEvaluationToolkit;

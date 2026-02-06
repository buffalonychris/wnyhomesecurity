import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import VendorJourneyNav from '../components/VendorJourneyNav';
import VendorSelfQualificationChecklist from '../components/VendorSelfQualificationChecklist';
import { brandSite } from '../lib/brand';

const VendorLanding = () => {
  return (
    <div className="container section">
      <Seo
        title={`Vendor Alignment | ${brandSite}`}
        description={`A calm, selective alignment gateway for hardware and technology vendors who can meet ${brandSite} standards.`}
      />
      {/* Internal note: Keep this page informational only. Route next steps through contact without forms or uploads. */}
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <section style={{ textAlign: 'center' }}>
          <p className="badge" style={{ marginBottom: '0.5rem' }}>
            Vendor alignment gateway
          </p>
          <h2 style={{ margin: 0 }}>Vendor landing page</h2>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            {brandSite} works with a limited number of aligned hardware and technology vendors.
            This is a selective alignment path, not a sales funnel.
          </p>
          <p style={{ maxWidth: 760, margin: '0.75rem auto 0' }}>
            This is not a reseller program. This is not a marketplace. This is not a marketing partnership.
          </p>
        </section>

        <section className="card" aria-labelledby="vendor-links">
          <h3 id="vendor-links" style={{ marginTop: 0, color: '#fff7e6' }}>
            Vendor journey resources
          </h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Standards &amp; Alignment</h4>
              <p>Read the alignment doctrine before engaging.</p>
              <Link className="btn btn-primary" to="/vendors/standards">
                View standards
              </Link>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Evaluation Toolkit</h4>
              <p>Understand the evaluation scope and acceptance criteria.</p>
              <Link className="btn btn-primary" to="/vendors/evaluation-toolkit">
                View toolkit
              </Link>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Technical Questionnaire</h4>
              <p>Binary pass/fail questions aligned to platform requirements.</p>
              <Link className="btn btn-primary" to="/vendors/questionnaire">
                View questionnaire
              </Link>
            </div>
          </div>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0, color: '#fff7e6' }}>Journey at a glance</h3>
          <ol className="list" style={{ marginTop: '0.75rem' }}>
            <li>
              <span />
              <span>
                <Link to="/vendors/standards">Standards &amp; alignment overview</Link>
              </span>
            </li>
            <li>
              <span />
              <span>Vendor self-qualification gate</span>
            </li>
            <li>
              <span />
              <span>
                <Link to="/vendors/evaluation-toolkit">Evaluation toolkit access (informational)</Link>
              </span>
            </li>
            <li>
              <span />
              <span>Active evaluation phase</span>
            </li>
            <li>
              <span />
              <span>Decision &amp; routing</span>
            </li>
          </ol>
        </section>

        <section className="card" aria-labelledby="standards-alignment">
          <h3 id="standards-alignment" style={{ marginTop: 0, color: '#fff7e6' }}>
            Standards &amp; alignment overview
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <p>
              Our platform is offline-first, locally controllable, and subscription-free. Cloud services may
              exist as optional enhancements but can never be required for core operation.
            </p>
            <p>
              {brandSite} retains brand and firmware authority. We do not expose vendor apps,
              dashboards, or cloud accounts to end users.
            </p>
            <p>
              Ethical posture is non-negotiable: no audio monitoring, no video monitoring, and no GPS tracking
              required for core operation. Behavior must be deterministic and explainable.
            </p>
            <p>
              If your model depends on mandatory cloud access, subscriptions, or customer-facing branding, this
              platform is not a fit.
            </p>
          </div>
        </section>

        <section className="card" aria-labelledby="self-qualification">
          <h3 id="self-qualification" style={{ marginTop: 0, color: '#fff7e6' }}>
            Vendor self-qualification checklist
          </h3>
          <VendorSelfQualificationChecklist />
        </section>

        <section className="card" aria-labelledby="evaluation-toolkit">
          <h3 id="evaluation-toolkit" style={{ marginTop: 0, color: '#fff7e6' }}>
            Evaluation toolkit access (gated content)
          </h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Hardware evaluation scope</h4>
              <p>1–2 units max for initial technical review.</p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Technical questionnaire</h4>
              <p>Binary pass/fail scoring aligned to offline-first requirements.</p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Evaluation timeline</h4>
              <p>14–21 days from receipt of hardware.</p>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Acceptance criteria</h4>
              <p>Objective scoring only. No subjective marketing considerations.</p>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>
            NDA-Lite is available only if requested. No uploads or forms are required at this stage.
          </p>
        </section>

        <section className="card" aria-labelledby="active-evaluation">
          <h3 id="active-evaluation" style={{ marginTop: 0, color: '#fff7e6' }}>
            Active evaluation phase (informational)
          </h3>
          <ul className="list">
            <li>
              <span />
              <span>Minimal back-and-forth communication.</span>
            </li>
            <li>
              <span />
              <span>Objective technical scoring only.</span>
            </li>
            <li>
              <span />
              <span>No roadmap commitments or custom engineering promises.</span>
            </li>
            <li>
              <span />
              <span>No exposure to end users during evaluation.</span>
            </li>
          </ul>
        </section>

        <section className="card" aria-labelledby="decision-routing">
          <h3 id="decision-routing" style={{ marginTop: 0, color: '#fff7e6' }}>
            Decision &amp; routing
          </h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>If accepted</h4>
              <ul className="list">
                <li>
                  <span />
                  <span>Approved Vendor List eligibility</span>
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
                  <span>Verified Hardware Partner recognition (internal / B2B only)</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>If not accepted</h4>
              <p>
                We provide a professional, respectful decline. There is no blacklist and no negative signaling.
              </p>
            </div>
          </div>
        </section>

        <section className="card" aria-labelledby="recognition-rules">
          <h3 id="recognition-rules" style={{ marginTop: 0, color: '#fff7e6' }}>
            Incentive &amp; recognition rules
          </h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Allowed</h4>
              <ul className="list">
                <li>
                  <span />
                  <span>Verified Hardware Partner status</span>
                </li>
                <li>
                  <span />
                  <span>Preferred supply positioning</span>
                </li>
                <li>
                  <span />
                  <span>Engineering collaboration credit</span>
                </li>
                <li>
                  <span />
                  <span>Non-consumer-facing case studies</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h4 style={{ marginTop: 0, color: '#fff7e6' }}>Disallowed</h4>
              <ul className="list">
                <li>
                  <span />
                  <span>Co-branding or customer-facing logos</span>
                </li>
                <li>
                  <span />
                  <span>Vendor apps or dashboards in customer UX</span>
                </li>
                <li>
                  <span />
                  <span>Public certifications or endorsements</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card" aria-labelledby="next-step">
          <h3 id="next-step" style={{ marginTop: 0, color: '#fff7e6' }}>
            Next step
          </h3>
          <p>
            If you meet every standard above, request the evaluation toolkit through a simple introduction.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact {brandSite}
          </Link>
        </section>

        <VendorJourneyNav />
      </div>
    </div>
  );
};

export default VendorLanding;

import { Link } from 'react-router-dom';
import AccordionSection from '../components/AccordionSection';

const HealthHomes = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ maxWidth: 780, display: 'grid', gap: '0.75rem' }}>
          <p className="badge">Health Home partner path</p>
          <h1 style={{ margin: 0 }}>Health Home Executive / Decision Maker</h1>
          <p style={{ margin: 0, color: '#e6ddc7' }}>
            Offline-first, deterministic safety coverage that aligns to payer-funded objectives. Built
            from proven components, with audit-ready reporting and explicit non-clinical boundaries.
          </p>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <strong style={{ color: '#fff7e6' }}>What we do</strong>
            <p style={{ margin: 0, color: '#e6ddc7' }}>
              KAEC integrates vetted hardware and workflows into a single Home Assistant–anchored
              package. The goal: reduce avoidable ER/EMS utilization by improving situational
              awareness and structured escalation—without introducing medical monitoring or clinical
              risk.
            </p>
          </div>
          <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ display: 'grid', gap: '0.35rem' }}>
              <strong style={{ color: '#fff7e6' }}>Why Health Homes use it</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
                <li>Reduce uncertainty-driven escalation and unnecessary 911 calls.</li>
                <li>Deliver predictable coordination that payers can fund and audit.</li>
                <li>Close wearable gaps with local presence sensing and graduated alerts.</li>
              </ul>
            </div>
            <div style={{ display: 'grid', gap: '0.35rem' }}>
              <strong style={{ color: '#fff7e6' }}>What’s different</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
                <li>Architectural integration of proven components; no speculative hardware.</li>
                <li>Offline-first posture with deterministic event logs and acceptance records.</li>
                <li>Health Home coordinates; payer funds via compliant pathways.</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link className="btn btn-primary" to="/health-homes/outcomes">
              View Outcomes & Measurement
            </Link>
            <Link className="btn btn-secondary" to="/health-homes/funding">
              View Funding & Contracting
            </Link>
            <Link className="btn" to="/health-homes/packages">
              View Bronze / Silver / Gold Coverage
            </Link>
            <Link className="btn" to="/health-homes/intake">
              Start a Pilot Intake
            </Link>
          </div>
        </div>
        <button type="button" className="btn btn-secondary hide-when-print" onClick={() => window.print()}>
          Print one-pager
        </button>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <strong style={{ color: '#fff7e6' }}>Decision checkpoints</strong>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <h3 style={{ marginTop: 0 }}>Is this payer-aligned?</h3>
            <p style={{ margin: 0, color: '#e6ddc7' }}>
              Yes. Health Home coordinates; payer funds. Medicaid MCO vendor payments, waiver-style
              programs, and grant-backed pilots are supported without referral incentives.
            </p>
          </div>
          <div className="mini-card">
            <h3 style={{ marginTop: 0 }}>Does it reduce avoidable ER/EMS?</h3>
            <p style={{ margin: 0, color: '#e6ddc7' }}>
              Planning ranges: ~15–30% fewer ER visits for higher-risk cohorts, ~20–40% fewer EMS
              calls with early escalation options. Results vary and must be validated per population.
            </p>
          </div>
          <div className="mini-card">
            <h3 style={{ marginTop: 0 }}>What gets deployed?</h3>
            <p style={{ margin: 0, color: '#e6ddc7' }}>
              Elder Care Bronze / Silver / Gold packages with pre-integrated sensors, PERS, and
              local-first automation. Coverage is documented in the package rollups.
            </p>
          </div>
          <div className="mini-card">
            <h3 style={{ marginTop: 0 }}>How is risk managed?</h3>
            <p style={{ margin: 0, color: '#e6ddc7' }}>
              Non-clinical, deterministic escalation guidance. Always direct emergencies to 911. Event
              logs and acceptance records provide auditability.
            </p>
          </div>
        </div>
      </div>

      <AccordionSection
        title="Execution in brief"
        description="High-trust overview with technical details available as needed."
        defaultOpen
      >
        <div className="grid grid-3" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Measurement-first</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Pre/post and matched cohort measurement plans are built before deployment. Audit trail
              available for payer review.
            </p>
          </div>
          <div className="mini-card">
            <strong>Coverage fit</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Bronze/Silver/Gold mapped to member risk, covering wearable gaps and context-aware
              alerts. No diagnosis or clinical monitoring.
            </p>
          </div>
          <div className="mini-card">
            <strong>Deterministic operations</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Intake → package match → install → acceptance. Support boundaries and reporting cadence
              are defined up front.
            </p>
          </div>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomes;

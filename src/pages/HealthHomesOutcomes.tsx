import AccordionSection from '../components/AccordionSection';

const HealthHomesOutcomes = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
        <div>
          <p className="badge">Outcomes & measurement</p>
          <h1 style={{ margin: 0 }}>How ER/EMS reduction is measured</h1>
          <p style={{ maxWidth: 760, color: '#e6ddc7' }}>
            Deterministic measurement using pre/post and matched cohort methods. No medical monitoring;
            always instruct members to call 911 for emergencies. Results vary by population and must be
            validated by the payer or Health Home.
          </p>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Pre/Post</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Compare 6–12 months pre-install to the post-install period for the same members,
              controlling for seasonality and known care plan changes.
            </p>
          </div>
          <div className="mini-card">
            <strong>Matched cohort</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Compare against a matched group (age, acuity, prior ER utilization) to reduce bias.
              Suitable for counties piloting with constrained sample sizes.
            </p>
          </div>
        </div>
        <div className="grid grid-3" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Metrics tracked</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>ER visits per member per year</li>
              <li>EMS/911 calls and urgent escalations</li>
              <li>Caregiver response time and “near-miss” interventions</li>
            </ul>
          </div>
          <div className="mini-card">
            <strong>Planning ranges</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              ER visit reduction: ~15–30% for higher-risk cohorts. EMS/911 call reduction: ~20–40%
              with earlier escalation paths. Ranges are conservative planning guides only.
            </p>
          </div>
          <div className="mini-card">
            <strong>Reporting posture</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Deterministic event logs, audit trail, document verification via /verify, and SICAR
              acceptance records where applicable.
            </p>
          </div>
        </div>
      </div>

      <AccordionSection
        title="Measurement implementation details"
        description="Technical notes kept behind a click for executives; printable as a one-pager."
      >
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Data sources</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Installation and acceptance timestamps (SICAR when applicable).</li>
              <li>Escalation logs from Home Assistant automations and caregiver responses.</li>
              <li>Member-level event exports reviewed with the Health Home for completeness.</li>
            </ul>
          </div>
          <div className="mini-card">
            <strong>Method controls</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Exclude months with hospitalization or hospice enrollment when appropriate.</li>
              <li>Match cohorts on age band, acuity flag, and prior ER utilization.</li>
              <li>Document all exclusions and assumptions for audit readiness.</li>
            </ul>
          </div>
        </div>
        <div className="mini-card">
          <strong>Non-clinical boundary</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            KAEC is not medical monitoring and does not dispatch emergency services. All emergency
            instructions direct members and caregivers to call 911. Escalation guidance is deterministic
            and policy-driven.
          </p>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomesOutcomes;

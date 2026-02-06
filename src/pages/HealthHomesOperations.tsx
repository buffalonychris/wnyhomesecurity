import AccordionSection from '../components/AccordionSection';

const HealthHomesOperations = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Deployment & governance</p>
        <h1 style={{ margin: 0 }}>How KAEC is deployed for Health Homes</h1>
        <p style={{ maxWidth: 820, color: '#e6ddc7' }}>
          Deterministic workflow: intake → package match → quote (optional) → agreement → install →
          acceptance. Support boundaries and reporting cadence are documented up front.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="grid grid-3" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Deployment steps</strong>
            <ol style={{ margin: '0.35rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Intake and package matching</li>
              <li>Quote (if needed) and agreement (agency-friendly)</li>
              <li>Install and acceptance record (SICAR when applicable)</li>
            </ol>
          </div>
          <div className="mini-card">
            <strong>Support boundaries</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              KAEC supports installed components, automations, and reporting. Health Home manages member
              communication and clinical decisions. All emergencies direct to 911.
            </p>
          </div>
          <div className="mini-card">
            <strong>Reporting cadence</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Cadence set during intake (monthly or quarterly). Includes ER/EMS tallies, escalation log
              summaries, and acceptance/verification references.
            </p>
          </div>
        </div>
      </div>

      <AccordionSection title="Governance and data posture" description="Built for audit-readiness and minimal data exposure." defaultOpen>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Access control</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Role-based access for installers and support. Health Home controls who receives alerts and
              reports.
            </p>
          </div>
          <div className="mini-card">
            <strong>Data retention</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Local logging first; cloud only where required for alert delivery. Retention settings can
              be aligned to agency policy.
            </p>
          </div>
          <div className="mini-card">
            <strong>Auditability</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Event logs, acceptance records, and document verification (/verify) are available for
              payer review.
            </p>
          </div>
          <div className="mini-card">
            <strong>Representative components</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Home Assistant core, presence sensors, PERS wearables, and HA-compatible cameras (where
              approved). No new dependencies introduced beyond vetted vendors.
            </p>
          </div>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomesOperations;

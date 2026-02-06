import AccordionSection from '../components/AccordionSection';

const HealthHomesPilot = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Pilot starter</p>
        <h1 style={{ margin: 0 }}>Deterministic pilot to validate fit</h1>
        <p style={{ maxWidth: 760, color: '#e6ddc7' }}>
          Pilots are designed to quantify magnitude, validate workflow fit, and set the reporting
          cadence. No speculation—inputs and outputs are defined before installation.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Pilot inputs</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>County/region and member count target</li>
              <li>Risk criteria and prior ER/EMS history</li>
              <li>Escalation contacts and routing order</li>
              <li>Reporting cadence and recipients</li>
            </ul>
          </div>
          <div className="mini-card">
            <strong>Pilot outputs</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Deterministic pilot plan with timelines</li>
              <li>Package alignment (Bronze/Silver/Gold) by risk level</li>
              <li>Measurement design (pre/post and matched cohort)</li>
              <li>Print-ready summary for procurement review</li>
            </ul>
          </div>
        </div>
      </div>

      <AccordionSection title="Pilot flow" description="Everything is defined before install; no surprises." defaultOpen>
        <div className="mini-card">
          <strong>Scope and member selection</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Health Home provides the member list and risk notes. We map each member to a package tier
            and document any exclusions or site constraints.
          </p>
        </div>
        <div className="mini-card">
          <strong>Timeline and KPIs</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Typical pilots run 60–120 days with midpoint and final readouts. KPIs include ER visits per
            member, EMS calls, response time to alerts, and documented near-miss prevention.
          </p>
        </div>
        <div className="mini-card">
          <strong>Print artifacts</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Pilot plan, package rollups, and acceptance records are printable and can be shared with
            procurement or payer reviewers without additional formatting.
          </p>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomesPilot;

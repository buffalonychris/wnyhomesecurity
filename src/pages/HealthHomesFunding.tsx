import AccordionSection from '../components/AccordionSection';

const HealthHomesFunding = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Funding & contracting</p>
        <h1 style={{ margin: 0 }}>How Health Homes fund KAEC</h1>
        <p style={{ maxWidth: 780, color: '#e6ddc7' }}>
          Health Homes typically coordinate; payers fund. We align to Medicaid MCO vendor payments,
          waiver/HCBS programs, grants/pilots, and future value-based models. No referral incentives, no
          diagnosis, and minimum PHI captured on this retail site.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="grid grid-3" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Medicaid MCO vendor payment</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              KAEC serves as a vendor delivering Elder Care Bronze/Silver/Gold packages. Billing can be
              structured as installation + service blocks with clear deliverables.
            </p>
          </div>
          <div className="mini-card">
            <strong>Waiver / HCBS style programs</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Fits non-clinical home safety and caregiver support categories. Offline-first footprint
              supports rural and limited-connectivity homes.
            </p>
          </div>
          <div className="mini-card">
            <strong>Grants and pilots</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Deterministic pilots with defined KPIs and reporting cadence. Suitable for initial
              validation prior to broader contracting.
            </p>
          </div>
        </div>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>Value-based / shared savings</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Future-aligned. Measurement artifacts (pre/post + cohort comparisons) can support
              value-based programs once local data is validated.
            </p>
          </div>
          <div className="mini-card">
            <strong>Compliance stance</strong>
            <ul style={{ margin: '0.25rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>No referral kickbacks or financial incentives for referrals.</li>
              <li>No diagnosis or medical monitoring on the retail site.</li>
              <li>Only minimum PHI collected (contact and intent) for pilot coordination.</li>
            </ul>
          </div>
        </div>
      </div>

      <AccordionSection title="Operational funding notes" description="Contracting-ready structure in plain language.">
        <div className="mini-card">
          <strong>Roles and responsibilities</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Health Home: member selection, escalation policy, and coordination. KAEC: package delivery,
            installation, deterministic event logging, and reporting. Payer: funding and audit review.
          </p>
        </div>
        <div className="mini-card">
          <strong>What gets invoiced</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Hardware + installation where applicable, plus service/readiness blocks aligned to the
            reporting cadence. No subscription required for included capabilities.
          </p>
        </div>
        <div className="mini-card">
          <strong>Documentation</strong>
          <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
            Intake summary, package rollup, agreement terms, SICAR acceptance record (when used), and
            measurement plan are provided as printable artifacts.
          </p>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomesFunding;

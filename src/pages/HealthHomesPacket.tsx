import { useMemo } from 'react';
import { brandLegal } from '../lib/brand';
import AccordionSection from '../components/AccordionSection';
import TierBadge from '../components/TierBadge';
import { PackageTierId } from '../data/pricing';

const tiers: {
  id: PackageTierId;
  name: string;
  fit: string;
  coverage: string;
  mitigations: string[];
  rollup: string;
}[] = [
  {
    id: 'A1',
    name: 'Bronze',
    fit: 'Stable members living independently who need basic fall-risk visibility without intrusive monitoring.',
    coverage: 'PERS-class wearable path with presence sensing coverage to close “not worn” gaps and basic anomaly prompts.',
    mitigations: ['Wearable non-compliance or forgetting to press a button', 'Binary escalation paths without context', 'Delayed awareness of movement/routine changes'],
    rollup: 'Entry tier establishing the baseline safety signal.',
  },
  {
    id: 'A2',
    name: 'Silver',
    fit: 'Members with prior EMS/ER utilization or nighttime wandering risk; caregivers need actionable context.',
    coverage: 'Adds routine detection, context-rich notifications, and multi-contact routing to prevent uncertainty-driven EMS calls.',
    mitigations: ['Lack of context for EMS decisions', 'Primary contact unavailable with no alternate path', 'Nighttime movement without notice'],
    rollup: 'Includes Bronze capabilities plus contextual notifications and laddered outreach.',
  },
  {
    id: 'A3',
    name: 'Gold',
    fit: 'Highest-risk members with repeated EMS calls or caregiver coverage gaps.',
    coverage: 'Full presence coverage with optional local-only visuals where permitted, deterministic escalation playbooks, and install health monitoring.',
    mitigations: ['Repeated EMS calls driven by uncertainty', 'Caregiver coordination gaps across shifts', 'Hidden install/device failures'],
    rollup: 'Includes Bronze and Silver coverage with additional escalation controls and site health checks.',
  },
];

const HealthHomesPacket = () => {
  const issuedAt = useMemo(() => new Date().toISOString(), []);

  return (
    <div className="print-page" style={{ padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <div className="print-document kaec-doc" role="document" aria-label="Health Home Executive Justification Packet">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start' }}>
            <div>
              <p className="badge" style={{ margin: 0 }}>Health Homes — Executive Conversion Readiness</p>
              <h1 style={{ marginBottom: '0.25rem' }}>Health Home In-Home Safety Technology — Executive Justification Packet</h1>
              <p style={{ margin: 0, maxWidth: 680 }}>
                payer-aligned, non-clinical intervention supporting reduction of avoidable ER utilization via situational awareness and graduated escalation (no promises).
              </p>
            </div>
            <div className="hide-when-print" style={{ display: 'grid', gap: '0.4rem', justifyItems: 'flex-end' }}>
              <button type="button" className="btn btn-primary" onClick={() => window.print()}>
                Print / Save Packet
              </button>
              <small style={{ color: '#555' }}>Use “Save to PDF” for distribution.</small>
            </div>
          </div>

          <div
            className="card"
            style={{ marginTop: '1rem', display: 'grid', gap: '0.35rem', borderColor: '#000', background: '#fdfdfd' }}
          >
            <strong>Metadata</strong>
            <div style={{ display: 'grid', gap: '0.2rem', fontSize: '0.98rem' }}>
              <div>
                <span style={{ fontWeight: 700 }}>Document type:</span> Executive Justification
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Issued:</span> {issuedAt}
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Service scope note:</span> See Funding Alignment Scope (section 5.5) for current geographic and tier limits.
              </div>
              <div className="hide-when-print" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 700 }}>Primary CTA:</span> Print / Save Packet
              </div>
            </div>
          </div>

          <div className="print-section" style={{ display: 'grid', gap: '0.75rem', marginTop: '1.25rem' }}>
            <h2>2) Problem alignment</h2>
            <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.35rem' }}>
              <li>Health Homes are accountable for reducing avoidable utilization and uncertainty-driven escalation.</li>
              <li>Legacy single-device approaches fail when wearables are not worn and escalation paths are binary.</li>
              <li>Lack of situational context drives unnecessary EMS/ER utilization.</li>
              <li>KAEC integrates already-proven components into a coherent, offline-first system to close known gaps.</li>
            </ul>
          </div>

          <div className="print-section" style={{ display: 'grid', gap: '0.5rem', marginTop: '1rem' }}>
            <h2>3) Outcome logic (defensible)</h2>
            <p style={{ margin: 0 }}>
              Category is established (PERS / monitoring / security / safety technology). KAEC supplies an integrated architecture with local-first control.
            </p>
            <p style={{ margin: 0 }}>
              Structural advantage: contextual awareness plus graduated escalation with an offline-first posture that preserves alerts when connectivity is unstable.
            </p>
            <div className="card" style={{ display: 'grid', gap: '0.35rem', borderColor: '#000', background: '#fdfdfd' }}>
              <strong>Planning ranges (not guarantees)</strong>
              <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.2rem' }}>
                <li>ER reduction planning range: ~15–30% for higher-risk cohorts.</li>
                <li>EMS/911 call reduction planning range: ~20–40% when early escalation routes are enabled.</li>
                <li>Disclaimer: results vary; validate per population and site.</li>
              </ul>
            </div>
          </div>

          <div className="print-section" style={{ display: 'grid', gap: '0.5rem', marginTop: '1rem' }}>
            <h2>4) Measurement & validation methodology</h2>
            <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.3rem' }}>
              <li>Pre/Post analysis over 6–12 months where feasible.</li>
              <li>Matched cohort comparison by age, acuity, prior utilization, and living situation.</li>
              <li>Suitable for pilots and payer reporting; deterministic event documentation supports audit.</li>
            </ul>
          </div>

          <div className="print-section" style={{ display: 'grid', gap: '0.6rem', marginTop: '1rem' }}>
            <h2>5) Funding & compliance reality</h2>
            <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.3rem' }}>
              <li>Payer funds; Health Home coordinates.</li>
              <li>KAEC is vendor-paid; no referral compensation.</li>
              <li>Non-clinical tool; no diagnosis; emergencies = 911.</li>
            </ul>
            <div className="card" style={{ display: 'grid', gap: '0.35rem', borderColor: '#000', background: '#fdfdfd' }}>
              <strong>5.5) Funding Alignment Scope (Current Phase)</strong>
              <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.25rem' }}>
                <li>Current funding alignment work is limited to the Bronze tier to ensure defensible mapping and controlled rollout.</li>
                <li>Initial geographic scope is Western New York service coverage only.</li>
                <li>Eligibility screening and assisted paperwork support are governed by separate internal validation frameworks and are non-binding.</li>
                <li>No public “no-cost” claims are made in this executive packet.</li>
              </ul>
            </div>
          </div>

          <div className="print-section" style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
            <h2>6) Intervention tiers (coverage levels)</h2>
            <p style={{ margin: 0 }}>Silver includes Bronze. Gold includes Bronze and Silver.</p>
            <div className="grid grid-3" style={{ gap: '0.75rem' }}>
              {tiers.map((tier) => (
                <div key={tier.id} className="mini-card" style={{ display: 'grid', gap: '0.35rem', borderColor: '#000' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <TierBadge tierId={tier.id} labelOverride={`Elder Care ${tier.name}`} />
                    <strong>{tier.name} coverage</strong>
                  </div>
                  <div>
                    <small>Best fit for</small>
                    <p style={{ margin: '0.15rem 0' }}>{tier.fit}</p>
                  </div>
                  <div>
                    <small>Coverage summary</small>
                    <p style={{ margin: '0.15rem 0' }}>{tier.coverage}</p>
                  </div>
                  <div>
                    <small>Failure modes mitigated</small>
                    <ul className="print-list" style={{ margin: '0.15rem 0 0', display: 'grid', gap: '0.2rem' }}>
                      {tier.mitigations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <small>Roll-up behavior</small>
                    <p style={{ margin: '0.15rem 0' }}>{tier.rollup}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <AccordionSection title="7) Representative technology categories" defaultOpen>
            <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.25rem' }}>
              <li>PERS / emergency alert category.</li>
              <li>Local-first automation & monitoring platform category.</li>
              <li>Presence / fall-risk sensing category.</li>
              <li>Environmental safety monitoring category.</li>
            </ul>
          </AccordionSection>

          <AccordionSection title="8) Pilot framing" description="Optional; scope references are examples and non-binding." defaultOpen>
            <ul className="print-list" style={{ margin: 0, display: 'grid', gap: '0.25rem' }}>
              <li>Pilots quantify magnitude, not prove concept.</li>
              <li>Typical scope: 20–50 members, 90–180 days (example ranges, not commitments).</li>
              <li>One or two pilots typically sufficient for broader adoption (non-binding statement).</li>
            </ul>
          </AccordionSection>

          <footer className="print-footer">
            © 2025 {brandLegal} All Rights Reserved. Unauthorized use is prohibited.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HealthHomesPacket;

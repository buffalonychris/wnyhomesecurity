import TierBadge from '../components/TierBadge';
import AccordionSection from '../components/AccordionSection';
import { PackageTierId } from '../data/pricing';

type Tier = {
  id: PackageTierId;
  name: string;
  fit: string;
  coverage: string;
  mitigates: string[];
};

const tiers: Tier[] = [
  {
    id: 'A1',
    name: 'Elder Care Bronze',
    fit: 'Members living independently with basic fall-risk awareness needs.',
    coverage: 'Core PERS wearable path plus presence sensing to close “not worn” gaps.',
    mitigates: ['Wearable not worn or forgotten', 'Delayed awareness of movement changes', 'Binary “press button or nothing” escalation'],
  },
  {
    id: 'A2',
    name: 'Elder Care Silver',
    fit: 'Higher fall risk or prior ER utilization; caregivers need context-rich alerts.',
    coverage: 'Adds room-level presence and routine detection, local-first automations, and caregiver notification laddering.',
    mitigates: ['Lack of context for 911 decisions', 'Nighttime wandering without notice', 'Slow caregiver routing when primary contact is unavailable'],
  },
  {
    id: 'A3',
    name: 'Elder Care Gold',
    fit: 'Highest acuity members with frequent EMS usage or caregiver constraints.',
    coverage: 'Full presence coverage, optional local camera views where permitted, and deterministic multi-contact escalations.',
    mitigates: ['Repeated EMS calls driven by uncertainty', 'Caregiver coordination gaps across shifts', 'Install or device failures hidden from staff'],
  },
];

const HealthHomesPackages = () => {
  return (
    <div className="container section" style={{ display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Coverage overview</p>
        <h1 style={{ margin: 0 }}>Elder Care Bronze / Silver / Gold for Health Homes</h1>
        <p style={{ maxWidth: 820, color: '#e6ddc7' }}>
          Tiers are framed as coverage levels, not consumer bundles. Each package is deterministic,
          offline-first, and built from proven components. No clinical monitoring; emergencies are
          directed to 911.
        </p>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="grid grid-3" style={{ gap: '0.75rem' }}>
          {tiers.map((tier) => (
            <div key={tier.id} className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <TierBadge tierId={tier.id} />
                <strong>{tier.name}</strong>
              </div>
              <div>
                <small style={{ color: '#c8c0aa' }}>Best fit for</small>
                <p style={{ margin: '0.2rem 0', color: '#e6ddc7' }}>{tier.fit}</p>
              </div>
              <div>
                <small style={{ color: '#c8c0aa' }}>Coverage summary</small>
                <p style={{ margin: '0.2rem 0', color: '#e6ddc7' }}>{tier.coverage}</p>
              </div>
              <div>
                <small style={{ color: '#c8c0aa' }}>What it mitigates</small>
                <ul style={{ margin: '0.2rem 0 0', paddingLeft: '1.1rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
                  {tier.mitigates.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AccordionSection
        title="Representative components"
        description="Controlled references only; actual bill of materials is selected per site."
      >
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card">
            <strong>PERS and alerting</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Wearable PERS in the Medical Guardian category, paired with presence sensing to cover
              “not worn” scenarios.
            </p>
          </div>
          <div className="mini-card">
            <strong>Local-first control</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Home Assistant–anchored control platform with offline automations and local logging.
            </p>
          </div>
          <div className="mini-card">
            <strong>Presence and fall-risk sensing</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              Presence sensors (Aqara class) to infer motion, routines, and anomalies without cameras.
            </p>
          </div>
          <div className="mini-card">
            <strong>Local recording (where permitted)</strong>
            <p style={{ margin: '0.25rem 0', color: '#e6ddc7' }}>
              HA-compatible cameras with local recording for agency-approved locations, respecting site
              policies and privacy constraints.
            </p>
          </div>
        </div>
      </AccordionSection>
    </div>
  );
};

export default HealthHomesPackages;

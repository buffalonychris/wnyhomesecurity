import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackLandingCtaClick, trackLandingView } from '../lib/analytics';
import { brandSite } from '../lib/brand';

const AgencyLanding = () => {
  const location = useLocation();

  useEffect(() => {
    trackLandingView('agency', location.pathname);
  }, [location.pathname]);

  const handleCta = () => {
    trackLandingCtaClick('agency', location.pathname);
  };

  return (
    <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <p className="badge">Health Homes / Agencies</p>
        <h1 style={{ margin: 0 }}>Deterministic safety coverage your teams can rely on</h1>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Western New York partners use {brandSite} to reduce avoidable EMS calls without clinical
          monitoring risk. Offline-first components and clear boundaries mean your coordinators stay in
          control even when internet or power is shaky.
        </p>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Why it&apos;s different</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Offline-capable stack: Home Assistant core, wired backbones, and audit-ready logs.</li>
              <li>Privacy-first posture with explicit non-clinical boundaries and documented consent.</li>
              <li>Local crews familiar with Buffalo housing stock and winter outages.</li>
            </ul>
          </div>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>What you get</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Package templates aligned to agency workflows—no speculative hardware.</li>
              <li>Escalation playbooks tuned to payer expectations and WNY emergency services.</li>
              <li>Shared reporting your teams can show to members, families, and auditors.</li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/qualify?audience=agency" onClick={handleCta}>
            Check agency fit
          </Link>
          <span style={{ alignSelf: 'center', color: '#e6ddc7' }}>
            We validate eligibility before moving to install.
          </span>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <strong style={{ color: '#fff7e6' }}>Ready for Buffalo operations</strong>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Packages are tuned for Western New York weather, mixed-building wiring, and intermittent
          connectivity. If broadband drops, local automations still run and event records stay intact for
          QA and reimbursement.
        </p>
      </div>
    </div>
  );
};

export default AgencyLanding;

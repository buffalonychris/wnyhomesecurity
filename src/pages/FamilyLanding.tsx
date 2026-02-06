import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackLandingCtaClick, trackLandingView } from '../lib/analytics';
import { brandSite } from '../lib/brand';

const FamilyLanding = () => {
  const location = useLocation();

  useEffect(() => {
    trackLandingView('family', location.pathname);
  }, [location.pathname]);

  const handleCta = () => {
    trackLandingCtaClick('family', location.pathname);
  };

  return (
    <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <p className="badge">Family Members &amp; Caregivers</p>
        <h1 style={{ margin: 0 }}>Stay ahead of emergencies without hovering</h1>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          You want mom or dad safe in Buffalo without feeling watched. {brandSite} delivers clear,
          privacy-first alerts that keep working when the internet is shaky, so you know when to step in and
          when they are fine.
        </p>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Why it&apos;s different</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Deterministic alerts with who-to-call guidance—no vague “someone should check.”</li>
              <li>Privacy-first stance: no indoor cameras, no surprise data trails, consent-first sharing.</li>
              <li>Offline resiliency built for Western New York outages and bad weather.</li>
            </ul>
          </div>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>What you get</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Local presence sensing that spots stalled routines or overnight wandering.</li>
              <li>Door, fall, and kitchen safeguards without forcing wearables.</li>
              <li>Simple logs you can share with siblings, nurses, or neighbors.</li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/qualify?audience=family" onClick={handleCta}>
            Start fit check
          </Link>
          <span style={{ alignSelf: 'center', color: '#e6ddc7' }}>
            We confirm coverage options before any commitment.
          </span>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <strong style={{ color: '#fff7e6' }}>Grounded in Western New York homes</strong>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Lake-effect storms and brick construction can make Wi‑Fi uneven. Packages use a Home
          Assistant core and wired backbones so alerts stay reliable. If the internet goes out, the system
          still records activity and delivers local chimes or neighbor alerts.
        </p>
      </div>
    </div>
  );
};

export default FamilyLanding;

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackLandingCtaClick, trackLandingView } from '../lib/analytics';
import { brandSite } from '../lib/brand';

const SeniorLanding = () => {
  const location = useLocation();

  useEffect(() => {
    trackLandingView('senior', location.pathname);
  }, [location.pathname]);

  const handleCta = () => {
    trackLandingCtaClick('senior', location.pathname);
  };

  return (
    <div className="container section" style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card" style={{ display: 'grid', gap: '0.75rem' }}>
        <p className="badge">Seniors / Aging in Place</p>
        <h1 style={{ margin: 0 }}>Live independently with reliable, local-first coverage</h1>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Western New York homes see storms, spotty internet, and power blips. {brandSite} keeps
          safety coverage running even when the Wi‑Fi or cloud is down, so you can stay in control at home.
        </p>
        <div className="grid grid-2" style={{ gap: '0.75rem' }}>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>Why it&apos;s different</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Offline-first sensors and alerts that keep working through internet or power outages.</li>
              <li>Privacy-first: no cameras in living areas, no surprise data sharing, clear consent.</li>
              <li>Plainspoken playbooks for when to call family, neighbors, or 911.</li>
            </ul>
          </div>
          <div className="mini-card" style={{ display: 'grid', gap: '0.35rem' }}>
            <strong>What you get</strong>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#e6ddc7', display: 'grid', gap: '0.25rem' }}>
              <li>Local presence sensing that notices daily routines without wearables.</li>
              <li>Deterministic alerts for falls, doors left open, or unusual inactivity.</li>
              <li>Western New York install partners who keep things tidy and working.</li>
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="btn btn-primary" to="/qualify?audience=senior" onClick={handleCta}>
            Check my fit
          </Link>
          <span style={{ alignSelf: 'center', color: '#e6ddc7' }}>
            No sales push. We verify fit before anything ships.
          </span>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '0.5rem' }}>
        <strong style={{ color: '#fff7e6' }}>Built for Western New York</strong>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Buffalo basements, multi-family buildings, and lake-effect outages are common here. Packages use
          wired and battery-backed components to keep coverage steady. If the internet drops, local
          automation still runs and records what happened.
        </p>
      </div>
    </div>
  );
};

export default SeniorLanding;

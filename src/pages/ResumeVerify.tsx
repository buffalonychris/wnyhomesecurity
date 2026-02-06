import { NavLink } from 'react-router-dom';
import { brandSite } from '../lib/brand';

const ResumeVerify = () => {
  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '1.25rem' }}>
      <div>
        <p className="badge">Resume or verify documents</p>
        <h1 style={{ margin: '0.5rem 0 0.75rem' }}>Resume / Verify</h1>
        <p style={{ color: 'var(--kaec-muted)', maxWidth: '720px' }}>
          Links to resume an agreement or verify documents come from {brandSite} emails
          or printed paperwork. If you have one of those links, you can jump back in here.
        </p>
      </div>
      <div className="card" style={{ display: 'grid', gap: '0.75rem', maxWidth: '720px' }}>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Resume your paperwork</h2>
          <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
            Use the personalized link from your email to pick up where you left off. If you need
            a fresh link, contact your advisor and we will re-send it.
          </p>
          <NavLink to="/resume" className="btn btn-secondary" style={{ width: 'fit-content' }}>
            Go to /resume
          </NavLink>
        </div>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.35rem' }}>Verify a document</h2>
          <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
            Use your verification link to confirm agreement details or paperwork authenticity.
          </p>
          <NavLink to="/verify" className="btn btn-secondary" style={{ width: 'fit-content' }}>
            Go to /verify
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResumeVerify;

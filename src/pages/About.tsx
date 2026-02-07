import { NavLink } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import { brandHomeSecurity, brandLegal, brandPhonePrimary, brandServiceLocation } from '../lib/brand';

const About = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Home Security', href: '/home-security' },
      { label: 'About Us' },
    ],
  });

  return (
    <div className="container section">
      <div className="card" style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <div className="badge">About</div>
          <h2 style={{ margin: 0 }}>{brandHomeSecurity}</h2>
        </div>
        <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
          {brandHomeSecurity} is operated by {brandLegal}. We focus on local-first home security systems with clear, one-time pricing and
          professional installation.
        </p>
        <div style={{ display: 'grid', gap: '0.35rem' }}>
          <strong>Service location</strong>
          <span style={{ color: 'var(--kaec-muted)' }}>{brandServiceLocation}</span>
          <strong>Phone</strong>
          <span style={{ color: 'var(--kaec-muted)' }}>{brandPhonePrimary}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <NavLink className="btn btn-primary" to="/contact?vertical=home-security">
            Contact us
          </NavLink>
          <NavLink className="btn btn-secondary" to="/support?vertical=home-security">
            Support
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;

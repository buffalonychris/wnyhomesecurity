import { NavLink, useSearchParams } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import { brandHomeSecurity, brandLegal, brandPhonePrimary, brandServiceLocation } from '../lib/brand';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';

const About = () => {
  const [searchParams] = useSearchParams();
  const isHomeSecurityHost = typeof window !== 'undefined' && window.location.hostname.includes('wnyhomesecurity.com');
  const isHomeSecurity = searchParams.get('vertical') === 'home-security' || isHomeSecurityHost;

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'About Us' },
        ]
      : [],
  });

  const content = (
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
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        <div className="wnyhs-marketing-stack">{content}</div>
      </WnyhsMarketingLayout>
    );
  }

  return <div className="container section">{content}</div>;
};

export default About;

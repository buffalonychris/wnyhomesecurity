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
    <section className="wnyhs-section" aria-labelledby="about-heading">
      <div className="wnyhs-section-header">
        <p className="wnyhs-eyebrow">About</p>
        <h1 id="about-heading" className="wnyhs-heading">{brandHomeSecurity}</h1>
      </div>
      <p className="wnyhs-description">
        {brandHomeSecurity} is operated by {brandLegal}. We focus on local-first home security systems with clear, one-time pricing and
        professional installation.
      </p>
      <div className="wnyhs-card">
        <strong>Service location</strong>
        <span className="wnyhs-card-copy">{brandServiceLocation}</span>
        <strong>Phone</strong>
        <span className="wnyhs-card-copy">{brandPhonePrimary}</span>
      </div>
      <div className="wnyhs-action-row">
        <NavLink className="wnyhs-button wnyhs-button--primary" to="/contact?vertical=home-security">
          Contact us
        </NavLink>
        <NavLink className="wnyhs-button wnyhs-button--secondary" to="/support?vertical=home-security">
          Support
        </NavLink>
      </div>
    </section>
  );

  if (isHomeSecurity) {
    return (
      <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
        <div className="wnyhs-shell wnyhs-marketing-stack">{content}</div>
      </WnyhsMarketingLayout>
    );
  }

  return <div className="container section">{content}</div>;
};

export default About;

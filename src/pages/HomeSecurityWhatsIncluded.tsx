import { useLayoutConfig } from '../components/LayoutConfig';
import WnyhsPageLayout from '../components/homeSecurity/WnyhsPageLayout';
import {
  HOME_SECURITY_CLARITY_FOOTER,
  HOME_SECURITY_PACKAGE_SPECS,
  getHomeSecurityHardwareItems,
} from '../content/homeSecurityPackageData';

const tierOrder = ['a1', 'a2', 'a3'] as const;

const HomeSecurityWhatsIncluded = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Home Security', href: '/home-security' },
      { label: 'What’s Included' },
    ],
  });

  return (
    <WnyhsPageLayout mode="marketing" ctaLink="/discovery?vertical=home-security">
      <div className="wnyhs-marketing-stack">
        <div style={{ display: 'grid', gap: '0.5rem', maxWidth: 720 }}>
          <div className="badge">What’s Included</div>
          <h2 style={{ margin: 0 }}>Hardware and capabilities by tier</h2>
          <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
            Each tier keeps Home Assistant as your single dashboard, with local-first coverage and optional remote access.
          </p>
        </div>

        <div className="section" style={{ display: 'grid', gap: '1.5rem' }}>
          {tierOrder.map((tierId) => {
            const tier = HOME_SECURITY_PACKAGE_SPECS[tierId];
            const hardwareItems = getHomeSecurityHardwareItems(tierId);
            return (
              <section key={tier.id} className="card">
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  <div className="badge">{tier.name} Tier</div>
                  <h3 style={{ margin: 0 }}>Typical coverage</h3>
                  <ul className="list" style={{ margin: 0 }}>
                    <li>
                      <span />
                      <span>Square footage: {tier.coverage}</span>
                    </li>
                    <li>
                      <span />
                      <span>Entrances: {tier.entrances}</span>
                    </li>
                    <li>
                      <span />
                      <span>Cameras: {tier.cameras}</span>
                    </li>
                  </ul>
                </div>
                <div className="section">
                  <h4 style={{ marginTop: 0 }}>Included hardware</h4>
                  <ul className="list">
                    {hardwareItems.map((item) => (
                      <li key={`${tier.id}-${item.label}`}>
                        <span />
                        <span>
                          {item.label} ({item.qty})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="section">
                  <h4 style={{ marginTop: 0 }}>Capabilities</h4>
                  <ul className="list">
                    {tier.capabilities.map((capability) => (
                      <li key={`${tier.id}-${capability}`}>
                        <span />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Clarity</h3>
          <p style={{ marginBottom: 0, color: 'var(--kaec-muted)' }}>{HOME_SECURITY_CLARITY_FOOTER}</p>
        </div>
      </div>
    </WnyhsPageLayout>
  );
};

export default HomeSecurityWhatsIncluded;

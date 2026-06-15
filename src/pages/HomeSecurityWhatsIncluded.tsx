import AccordionSection from '../components/AccordionSection';
import { useLayoutConfig } from '../components/LayoutConfig';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import {
  HOME_SECURITY_CLARITY_FOOTER,
  HOME_SECURITY_PACKAGE_SPECS,
  getHomeSecurityHardwareItems,
} from '../content/homeSecurityPackageData';

const tierOrder = ['a1', 'a2', 'a3'] as const;

const HomeSecurityWhatsIncluded = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
      <div className="wnyhs-shell wnyhs-marketing-stack">
        <section className="wnyhs-section" aria-labelledby="whats-included-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">What’s Included</p>
            <h1 id="whats-included-heading" className="wnyhs-heading">Hardware and capabilities by tier</h1>
          <p className="wnyhs-description">
            Each tier keeps Home Assistant as your single dashboard, with local-first coverage and optional remote access.
          </p>
          </div>
        </section>

        <section className="wnyhs-section wnyhs-whats-included-grid" aria-label="Package tier inclusions">
          {tierOrder.map((tierId) => {
            const tier = HOME_SECURITY_PACKAGE_SPECS[tierId];
            const hardwareItems = getHomeSecurityHardwareItems(tierId);
            return (
              <section key={tier.id} className="wnyhs-card wnyhs-whats-included-card">
                <div className="wnyhs-section-header">
                  <p className="wnyhs-price-chip">{tier.name} Tier</p>
                  <h2 className="wnyhs-card-title">Typical coverage</h2>
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
                <AccordionSection title="Included hardware" description="Full hardware counts for this tier." defaultOpen={false}>
                  <ul className="list" style={{ marginTop: 0 }}>
                    {hardwareItems.map((item) => (
                      <li key={`${tier.id}-${item.label}`}>
                        <span />
                        <span>
                          {item.label} ({item.qty})
                        </span>
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
                <AccordionSection title="Capabilities" description="Core coverage and automation highlights." defaultOpen={false}>
                  <ul className="list" style={{ marginTop: 0 }}>
                    {tier.capabilities.map((capability) => (
                      <li key={`${tier.id}-${capability}`}>
                        <span />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              </section>
            );
          })}
        </section>

        <section className="wnyhs-section" aria-labelledby="clarity-heading">
          <h2 id="clarity-heading" className="wnyhs-heading">Clarity</h2>
          <p className="wnyhs-description">{HOME_SECURITY_CLARITY_FOOTER}</p>
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default HomeSecurityWhatsIncluded;

import { useSearchParams } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
import { resolveVertical } from '../lib/verticals';

const Reliability = () => {
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'How it works' },
        ]
      : [],
  });

  const content = (
    <div className={isHomeSecurity ? 'wnyhs-shell wnyhs-marketing-stack' : 'container section'}>
      <section className="wnyhs-section" aria-labelledby="reliability-heading">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">How it works</p>
          <h1 id="reliability-heading" className="wnyhs-heading">Offline reliability</h1>
          <p className="wnyhs-description">
            We prioritize local control so useful automations can continue during internet outages when the equipment has power.
          </p>
        </div>
        <OwnershipOfflineGuarantee intro="Home Assistant orchestrates every workflow while keeping privacy and ownership intact." />
      </section>
      <section className="wnyhs-section" aria-labelledby="reliability-core-heading">
        <div className="wnyhs-section-header">
          <p className="wnyhs-eyebrow">Local-first design</p>
          <h2 id="reliability-core-heading" className="wnyhs-heading">What supports day-to-day reliability</h2>
        </div>
        <div className="card-grid">
          <div className="wnyhs-card">
            <h3 className="wnyhs-card-title">Home Assistant at the core</h3>
            <p className="wnyhs-card-copy">Every device is integrated through Home Assistant. Families and caregivers learn one interface, and local automations live there—not in cloud accounts.</p>
          </div>
          <div className="wnyhs-card">
            <h3 className="wnyhs-card-title">Local-first automations</h3>
            <p className="wnyhs-card-copy">Lighting, lock schedules, and sensor-based routines execute on-site. Remote viewing may pause when connectivity drops, but local routines can continue when powered.</p>
          </div>
          <div className="wnyhs-card">
            <h3 className="wnyhs-card-title">Power-aware design</h3>
            <p className="wnyhs-card-copy">Controllers and networking gear include backup power where listed. We document power requirements so you understand outage limitations before installation.</p>
          </div>
          {vertical === 'home-security' && (
            <div className="wnyhs-card">
              <h3 className="wnyhs-card-title">UniFi Protect + Home Assistant</h3>
              <p className="wnyhs-card-copy">UniFi Protect handles local recording and LAN streaming. Home Assistant surfaces live views, triggers automations, and keeps the primary dashboard consistent.</p>
            </div>
          )}
        </div>
      </section>
      <section className="wnyhs-section" aria-labelledby="outage-heading">
        <h2 id="outage-heading" className="wnyhs-heading">What can stay available during outages?</h2>
        <ul className="list">
          <li><span /><span>Local lighting automations for nighttime navigation.</span></li>
          <li><span /><span>Lock control and PIN entry at the door.</span></li>
          <li><span /><span>Sensor notices configured for local-only notifications.</span></li>
          {vertical === 'home-security' && <li><span /><span>Local siren and arming status inside Home Assistant.</span></li>}
        </ul>
        <p className="wnyhs-description">Remote notifications and viewing may require available internet or cellular backup, but core on-site controls remain centralized in Home Assistant.</p>
        {vertical === 'home-security' && <p className="wnyhs-description">Assumption: the local-first Home Assistant core runs on your LAN even if the internet is down. Remote access requires an active connection.</p>}
      </section>
    </div>
  );

  if (isHomeSecurity) {
    return <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">{content}</WnyhsMarketingLayout>;
  }

  return content;
};

export default Reliability;

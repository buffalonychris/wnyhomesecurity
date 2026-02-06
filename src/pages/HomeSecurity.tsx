import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import AccordionSection from '../components/AccordionSection';
import DemoDashboardLink from '../components/DemoDashboardLink';
import HomeSecurityComparisonTable from '../components/HomeSecurityComparisonTable';
import PackageCard from '../components/PackageCard';
import ResponsivePublicImage from '../components/ResponsivePublicImage';
import SelfMonitoringDisclosure from '../components/disclosures/SelfMonitoringDisclosure';
import { useLayoutConfig } from '../components/LayoutConfig';
import { getPackages } from '../content/packages';
import { HOME_SECURITY_TIER_MEDIA } from '../content/homeSecurityPackageData';
import { HomeSecurityPathChoice } from '../lib/homeSecurityFunnel';
import { loadRetailFlow, updateRetailFlow } from '../lib/retailFlow';

const monitoringCopy = (
  <>
    <strong>Professional monitoring is optional</strong> and, if selected, is provided directly through{' '}
    <strong>third-party</strong> monitoring services chosen by the customer.
  </>
);

const HomeSecurity = () => {
  const [searchParams] = useSearchParams();
  const packages = useMemo(() => getPackages('home-security'), []);
  const [selectedPath, setSelectedPath] = useState<HomeSecurityPathChoice | null>(() => {
    return loadRetailFlow().homeSecurity?.selectedPath ?? null;
  });

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
  });

  useEffect(() => {
    const pathParam = searchParams.get('path');
    if (pathParam === 'online' || pathParam === 'onsite') {
      setSelectedPath(pathParam);
      updateRetailFlow({ homeSecurity: { selectedPath: pathParam } });
    }
  }, [searchParams]);

  const pathParam = selectedPath ? `&path=${selectedPath}` : '';
  return (
    <div className="container section home-security-page hub-container">
      <section className="vertical-hero vertical-hero--media vertical-hero--campaign">
        <div className="vertical-hero-media" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="/images/home-security/hs_hero_home-security.webp" />
            <img
              src="/images/home-security/hs_hero_home-security.png"
              alt="Local-first home security dashboard with calm lighting"
              loading="eager"
            />
          </picture>
          <div className="vertical-hero-overlay vertical-hero-overlay--muted" />
        </div>
        <div className="vertical-hero-content">
          <div className="space-section-header">
            <div className="badge">Local-first</div>
            <h1>Home security that works even when the internet doesn’t</h1>
            <p>
              A wireless home security system you control from one simple dashboard. No required subscriptions. No “cloud-only” lock-in.
              Your sensors and alarms still work inside your home even if the internet goes out. Remote access is optional when internet is available.
            </p>
            <div className="space-section-actions">
              <a className="btn btn-primary" href="#packages">
                View Packages
              </a>
            </div>
            <SelfMonitoringDisclosure variant="short" className="home-security-disclosure" />
          </div>
          <div className="vertical-hero-badges" aria-label="Key promises">
            <span>Offline-first</span>
            <span>No subscriptions sold by us</span>
            <span>Local control</span>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="orientation" className="space-grid two-column">
        <div className="card">
          <div className="badge">Orientation</div>
          <h2 style={{ marginTop: 0 }}>What this is (and isn’t)</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            <strong>Professionally installed</strong> home security with a local-first Home Assistant dashboard that stays reliable
            even when internet access drops.
          </p>
          <p style={{ color: 'var(--kaec-muted)' }}>{monitoringCopy}</p>
          <ul className="list">
            <li>
              <span />
              <span>You own the equipment, automations, and local data.</span>
            </li>
            <li>
              <span />
              <span>
                <strong>No subscriptions are sold by us.</strong>
              </span>
            </li>
            <li>
              <span />
              <span>Packages are expandable later as your needs change.</span>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="packages" style={{ display: 'grid', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div className="badge">Packages</div>
          <h2 style={{ margin: 0 }}>Choose a Home Security package</h2>
          <p style={{ margin: 0, color: 'var(--kaec-muted)' }}>
            Bronze, Silver (recommended), and Gold tiers are professionally installed and keep Home Assistant as your single dashboard.
          </p>
        </div>
        <div className="card-grid motion-stagger">
          {packages.map((pkg) => {
            const tierMedia = HOME_SECURITY_TIER_MEDIA[pkg.id as keyof typeof HOME_SECURITY_TIER_MEDIA];
            return (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                vertical="home-security"
                imageCaption={tierMedia?.caption}
                image={tierMedia?.image}
              />
            );
          })}
        </div>
        <div id="compare-coverage">
          <AccordionSection title="Compare coverage" description="Typical coverage ranges and included hardware by tier.">
            <HomeSecurityComparisonTable />
          </AccordionSection>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="dashboard-demo" className="space-grid">
        <div className="card demo-tile">
          <div className="badge">Demo</div>
          <h2 style={{ marginTop: 0 }}>Preview the dashboard</h2>
          <p style={{ color: 'var(--kaec-muted)', margin: 0 }}>
            This is the same Home Assistant dashboard you’ll use locally on your phone/tablet.
          </p>
          <ul className="list" style={{ margin: 0 }}>
            <li>
              <span />
              <span>Cameras + recordings (local-first)</span>
            </li>
            <li>
              <span />
              <span>Sensor status + alerts</span>
            </li>
            <li>
              <span />
              <span>Day/Night camera views</span>
            </li>
          </ul>
          <DemoDashboardLink variant="button" />
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="how-this-works" className="space-grid">
        <div
          className="card"
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div className="badge">How this works</div>
            <h2 style={{ marginTop: 0 }}>How this works</h2>
            <ol className="operator-list" style={{ margin: 0 }}>
              <li>Choose a package.</li>
              <li>Confirm fit (5 minutes).</li>
              <li>Lock your quote with a deposit.</li>
              <li>Pick an installation date.</li>
            </ol>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>What to expect</h3>
            <ul className="operator-list" style={{ margin: 0 }}>
              <li>Professionally installed.</li>
              <li>Optional remote access (requires internet).</li>
              <li>You can change packages or paths before installation.</li>
            </ul>
            <a className="btn btn-primary" href="#fit-check">
              Confirm fit in minutes
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="fit-check" className="space-grid">
        <div className="card">
          <div className="badge">Fit Check</div>
          <h2 style={{ marginTop: 0 }}>Confirm fit in minutes</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            Answer a few questions about home size, entry points, outdoor coverage, and camera comfort to receive a recommendation.
          </p>
          <Link className="btn btn-secondary" to={`/discovery?vertical=home-security${pathParam}`}>
            Start Fit Check
          </Link>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="generate-quote" className="space-grid" style={{ gap: '1.5rem' }}>
        <div className="card">
          <div className="badge">Quote → Deposit → Scheduling</div>
          <h2 style={{ marginTop: 0 }}>Lock in your quote, then pick a date</h2>
          <p style={{ color: 'var(--kaec-muted)' }}>
            The quote confirms your tier, the deposit reserves pricing and equipment availability, and scheduling only happens after you choose a date.
          </p>
          <Link className="btn btn-secondary" to={`/quote?vertical=home-security${pathParam}`}>
            Generate Quote
          </Link>
        </div>
        <div id="what-happens-next">
          <AccordionSection title="What happens after you generate a quote?" description="Details on the deposit and scheduling flow.">
            <ul className="list">
              <li>
                <span />
                <span>Deposit reserves system pricing and equipment availability for 30 days.</span>
              </li>
              <li>
                <span />
                <span>Installation is not scheduled until you select a date.</span>
              </li>
              <li>
                <span />
                <span>Final placement is confirmed before installation begins.</span>
              </li>
              <li>
                <span />
                <span>Remaining balance is due on the day of installation.</span>
              </li>
            </ul>
          </AccordionSection>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurity;

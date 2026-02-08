import DemoDashboardLink from '../components/DemoDashboardLink';
import { useLayoutConfig } from '../components/LayoutConfig';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';

const HomeSecurityDashboard = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Home Security', href: '/home-security' },
      { label: 'Dashboard Preview' },
    ],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/discovery?vertical=home-security">
      <div className="wnyhs-marketing-stack">
        <div className="card demo-tile">
          <div className="badge">Dashboard Preview</div>
          <h2 style={{ marginTop: 0 }}>Preview the Home Assistant dashboard</h2>
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
      </div>
    </WnyhsMarketingLayout>
  );
};

export default HomeSecurityDashboard;

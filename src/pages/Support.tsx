import { useSearchParams } from 'react-router-dom';
import { useLayoutConfig } from '../components/LayoutConfig';
import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import OwnershipOfflineGuarantee from '../components/OwnershipOfflineGuarantee';
import { resolveVertical } from '../lib/verticals';

const Support = () => {
  const [searchParams] = useSearchParams();
  const vertical = resolveVertical(searchParams.get('vertical'));
  const isHomeSecurity = vertical === 'home-security';

  useLayoutConfig({
    layoutVariant: isHomeSecurity ? 'funnel' : 'sitewide',
    showBreadcrumbs: isHomeSecurity,
    breadcrumb: isHomeSecurity
      ? [
          { label: 'Home Security', href: '/home-security' },
          { label: 'Support' },
        ]
      : [],
  });

  return (
    <div className="space-shell">
      <div className="container section space-grid">
        <SectionHeader
          kicker="Support"
          title="FAQ & Support"
          subtitle="Quick answers, plus a direct way to reach the team."
        />

        <OwnershipOfflineGuarantee
          variant="frame"
          title="Ownership & Offline Guarantee"
          intro="These rules apply across Home Security, Home Automation, and Elder Tech — you stay in control, and the system keeps working locally."
          items={[
            'You own the equipment, automations, and your data.',
            'We don’t sell monthly subscriptions. Optional third-party services are between you and them.',
            'Key features keep working on your home network even if the internet goes out.',
            'Remote access is optional and requires internet.',
            'Home Assistant is the main dashboard across our installs.',
          ]}
        />

        <SpaceFrame>
          <h2>Email</h2>
          <p>Send us a message and include your name, address, and the best number to reach you.</p>
          <p>
            <strong>admin@reliableeldercare.com</strong>
          </p>
        </SpaceFrame>

        <SpaceFrame>
          <h2>Response expectations</h2>
          <p>
            We reply within 1–2 business days. If it’s urgent, put URGENT in the subject line and tell us your best
            callback window.
          </p>
        </SpaceFrame>
      </div>
    </div>
  );
};

export default Support;

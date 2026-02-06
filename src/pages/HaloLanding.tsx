import VerticalLandingShell from '../components/VerticalLandingShell';
import { verticalContent } from '../content/systemRestoration';

const HaloLanding = () => {
  const content = verticalContent.halo;
  return (
    <VerticalLandingShell
      verticalName="HALO PERS"
      badgeLabel="PERS"
      heroHeadline="HALO PERS delivers a resilient personal safety layer"
      heroSubhead="On-body safety signaling with clear escalation pathways and local-first reliability for homes and campuses."
      primaryCTA={{ label: 'See HALO Options', to: '/support' }}
      chartData={[
        { label: 'Mon', value: 6 },
        { label: 'Tue', value: 9 },
        { label: 'Wed', value: 8 },
        { label: 'Thu', value: 11 },
        { label: 'Fri', value: 10 },
      ]}
      keyCapabilities={[
        'Wearable safety options with configurable response routing.',
        'Local alerting paths that stay active during connectivity loss.',
        'Operational reporting to keep families and teams aligned.',
      ]}
      journeySteps={content.journeySteps}
      agreementHighlights={content.agreements}
      packageHighlights={content.packageHighlights}
      playbooks={content.playbooks}
    />
  );
};

export default HaloLanding;

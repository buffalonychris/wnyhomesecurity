import VerticalLandingShell from '../components/VerticalLandingShell';
import { verticalContent } from '../content/systemRestoration';

const ElderCare = () => {
  const content = verticalContent.elderCare;
  return (
    <VerticalLandingShell
      verticalName="Elder Care Tech"
      badgeLabel="Caregiver-grade"
      heroHeadline="Elder Care Tech that protects dignity while supporting independence"
      heroSubhead="Resident-centered safety behaviors with caregiver-friendly visibility, all delivered through Home Assistant as a single, privacy-first dashboard."
      primaryCTA={{ label: 'Talk to a Care Specialist', to: '/support' }}
      journeyLinks={[
        { label: 'Packages', to: '/elder-care-tech/packages' },
        { label: 'Add-ons', to: '/elder-care-tech/add-ons' },
        { label: 'How it Works', to: '/elder-care-tech/how-it-works' },
        { label: 'FAQ & Support', to: '/support' },
      ]}
      chartData={[
        { label: 'Mon', value: 9 },
        { label: 'Tue', value: 12 },
        { label: 'Wed', value: 11 },
        { label: 'Thu', value: 15 },
        { label: 'Fri', value: 13 },
      ]}
      keyCapabilities={[
        'Built for residents who want independence and families or caregivers who want calm, shared visibility.',
        'Outcomes: safer night navigation, hazard awareness, and reassurance that preserves dignity.',
        'Wireless-first sensors with privacy-first design keep the experience calm and respectful.',
        'What this is: non-medical, support-focused home technology (no diagnosis, no PHI).',
        'What this is not: surveillance by default; cameras are optional and off by default.',
        'Home Assistant is the single dashboard; customers own the hardware, automations, and data.',
        'No subscriptions sold; optional third-party services can be connected directly by the customer.',
        'Offline Dignity Rule: core safety behaviors run locally without internet.',
      ]}
      journeySteps={content.journeySteps}
      agreementHighlights={content.agreements}
      packageHighlights={content.packageHighlights}
      playbooks={content.playbooks}
    />
  );
};

export default ElderCare;

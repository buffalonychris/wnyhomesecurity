import VerticalLandingShell from '../components/VerticalLandingShell';
import { verticalContent } from '../content/systemRestoration';

const HomeAutomation = () => {
  const content = verticalContent.homeAutomation;
  return (
    <VerticalLandingShell
      verticalName="Home Automation"
      badgeLabel="Automation"
      heroHeadline="Home Automation that keeps routines running even offline"
      heroSubhead="Wireless-first automation designed around Home Assistant, local execution, and homeowner ownership—no subscriptions required."
      primaryCTA={{ label: 'Explore Automations', to: '/support' }}
      journeyLinks={[
        { label: 'Packages', to: '/home-automation/packages' },
        { label: 'Add-ons', to: '/home-automation/add-ons' },
        { label: 'How it Works', to: '/home-automation/how-it-works' },
        { label: 'FAQ & Support', to: '/support' },
      ]}
      chartData={[
        { label: 'Mon', value: 14 },
        { label: 'Tue', value: 20 },
        { label: 'Wed', value: 17 },
        { label: 'Thu', value: 24 },
        { label: 'Fri', value: 21 },
      ]}
      keyCapabilities={[
        'Who it is for: households that want consistent daily routines, privacy-first control, and reliable comfort without cloud lock-in.',
        'Outcomes: comfort, consistency, convenience, energy awareness, and safety overlap through lighting and climate coordination.',
        'Automation vs. remote control: true automation uses schedules, sensors, and presence to run locally—without requiring a phone tap.',
        'Single dashboard ownership: Home Assistant is the control plane, the customer owns the system outright, and local control stays available even when the internet drops.',
      ]}
      journeySteps={content.journeySteps}
      agreementHighlights={content.agreements}
      packageHighlights={content.packageHighlights}
      playbooks={content.playbooks}
    />
  );
};

export default HomeAutomation;

import { getHomeSecurityHardwareList, HOME_SECURITY_PACKAGE_SPECS } from './homeSecurityPackageData';

export type HomeSecurityPdpGroup = {
  title: string;
  items: string[];
};

export type HomeSecurityPdpContent = {
  heroOneLiner: string;
  keyOutcomes: string[];
  idealFor: string[];
  whatYouGet: HomeSecurityPdpGroup[];
  whatsIncluded: string[];
  typicalCoverage: {
    squareFootage: string;
    entrances: string;
    cameras: string;
  };
  capabilities: string[];
  limitations: string[];
  howItWorks: string[];
};

export const HOME_SECURITY_PDP_CONTENT: Record<'a1' | 'a2' | 'a3', HomeSecurityPdpContent> = {
  a1: {
    heroOneLiner: 'Starter coverage with local-first alerts, entry awareness, and essential cameras.',
    keyOutcomes: [
      'Know when doors/windows open and who approaches the main entry.',
      'Get indoor motion alerts with a local siren/chime response.',
      'Catch common leaks or smoke events early.',
      'Automations that still work even when the internet doesn’t.',
      'Single dashboard control in Home Assistant.',
    ],
    idealFor: [
      'Apartments and small homes (~800–1,200 sq ft).',
      'First-time security setups.',
      'Households that want local-first alerts without subscriptions.',
    ],
    whatYouGet: [
      {
        title: 'Hardware',
        items: getHomeSecurityHardwareList('a1'),
      },
    ],
    whatsIncluded: getHomeSecurityHardwareList('a1'),
    typicalCoverage: {
      squareFootage: HOME_SECURITY_PACKAGE_SPECS.a1.coverage,
      entrances: HOME_SECURITY_PACKAGE_SPECS.a1.entrances,
      cameras: HOME_SECURITY_PACKAGE_SPECS.a1.cameras,
    },
    capabilities: [
      'Local-first alerts for entry, motion, and leak/smoke events.',
      'Camera views and recordings stay on your LAN by default.',
      'Local automations inside Home Assistant.',
    ],
    limitations: [
      'Not a professionally monitored alarm unless you add a third-party service.',
      'Single outdoor/doorbell view versus expanded coverage in Silver/Gold.',
    ],
    howItWorks: [
      'Quick discovery call: goals, layout, and priorities.',
      'Site-specific plan: sensor placement + camera angles.',
      'Install day: devices mounted, paired, tested.',
      'Automation setup: alerts + routines.',
      'Handoff: walkthrough + basic training.',
    ],
  },
  a2: {
    heroOneLiner: 'Whole-home coverage with more sensors, more indoor views, and two PoE outdoor cameras.',
    keyOutcomes: [
      'Balanced coverage for most homeowners.',
      'Expanded entry and motion coverage across main living areas.',
      'Two indoor views for faster verification.',
      'Local-first recording and control with optional remote access.',
      'Expandable foundation without subscriptions sold by us.',
    ],
    idealFor: [
      'Most homeowners (~1,200–2,000 sq ft).',
      'Homes with a main and secondary entry.',
      'Households that want reliable outdoor visibility.',
    ],
    whatYouGet: [
      {
        title: 'Hardware',
        items: getHomeSecurityHardwareList('a2'),
      },
    ],
    whatsIncluded: getHomeSecurityHardwareList('a2'),
    typicalCoverage: {
      squareFootage: HOME_SECURITY_PACKAGE_SPECS.a2.coverage,
      entrances: HOME_SECURITY_PACKAGE_SPECS.a2.entrances,
      cameras: HOME_SECURITY_PACKAGE_SPECS.a2.cameras,
    },
    capabilities: [
      'Indoor + dual outdoor PoE camera coverage.',
      'More sensors for entry + motion.',
      'Multiple leak/smoke detection zones.',
      'Automation scenes (night mode, away mode, etc.).',
    ],
    limitations: ['NVR capacity is sized by tier and finalized after site assessment.'],
    howItWorks: [
      'Discovery: confirm entrances, camera goals, and notification style.',
      'Placement plan: optimize coverage for day + night.',
      'Install & pairing: cameras + sensors + siren tested.',
      'Automation tuning: reduce false alarms; refine alert rules.',
      'Handoff: training + support path.',
    ],
  },
  a3: {
    heroOneLiner:
      'Maximum coverage with dedicated local recording and the highest camera + sensor footprint.',
    keyOutcomes: [
      'Dedicated UNVR + drives for reliable local recording.',
      'Three PoE outdoor cameras for multi-angle visibility.',
      'Highest sensor coverage across doors/windows and motion zones.',
      'Fast local alerts + automations that keep working offline.',
      'Built to expand into whole-home automation later.',
    ],
    idealFor: [
      'Larger homes (~2,000–3,500+ sq ft).',
      'Homes with multiple exterior entries.',
      'Higher risk tolerance and maximum coverage needs.',
    ],
    whatYouGet: [
      {
        title: 'Hardware',
        items: getHomeSecurityHardwareList('a3'),
      },
    ],
    whatsIncluded: getHomeSecurityHardwareList('a3'),
    typicalCoverage: {
      squareFootage: HOME_SECURITY_PACKAGE_SPECS.a3.coverage,
      entrances: HOME_SECURITY_PACKAGE_SPECS.a3.entrances,
      cameras: HOME_SECURITY_PACKAGE_SPECS.a3.cameras,
    },
    capabilities: [
      'Dedicated local recording + expanded camera coverage.',
      'Highest sensor footprint for doors/windows/motion.',
      'Best foundation for layered routines (night/away/vacation).',
    ],
    limitations: ['Requires more install time and planning (more devices).'],
    howItWorks: [
      'Discovery: map property + threat/risk priorities.',
      'Coverage plan: camera angles + sensor placement.',
      'Install: NVR + cameras + sensors + siren, fully tested.',
      'Automation tuning + recording checks.',
      'Handoff: training + expansion roadmap.',
    ],
  },
};

import {
  getHomeSecurityHardwareItems,
  getHomeSecurityPackageSpec,
  HomeSecurityHardwareItem,
} from './homeSecurityPackageData';

export type PackageTier = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  tagline: string;
  oneLiner: string;
  bio: string;
  includes: string[];
  features?: string[];
  hardware?: HomeSecurityHardwareItem[];
  billOfMaterials: string[];
  automationFlows: string[];
  journeyFlow: string[];
  agreements: string[];
  differentiators: string[];
  idealFor: string;
  typicalCoverage?: string;
};

export const packages: PackageTier[] = [
  {
    id: 'a1',
    name: 'Elder Tech Basic',
    price: '$2,850 one-time',
    badge: 'Basic tier',
    tagline: 'Night pathway safety, hazard awareness, and gentle check-ins with local-first dignity.',
    oneLiner:
      'Local lighting cues, hazard alerts, and missed-activity awareness that keep working offline.',
    bio:
      'Elder Tech Basic delivers quiet safety behaviors for aging-in-place households without default surveillance.',
    idealFor: 'Residents who want a safer night routine and caregivers who need calm, privacy-first updates.',
    includes: [
      'Home Assistant controller as the single control surface',
      'Night pathway lighting kit for hallways and bathrooms',
      'Wireless motion sensors for key pathways',
      'Door contact for primary entry awareness',
      'Leak + temperature sensors for kitchen and bath hazards',
      'Local chime or voice check-in prompt device',
      'Secure local network configuration with caregiver roles',
    ],
    billOfMaterials: [
      'Home Assistant hub + local storage kit',
      'Night pathway lighting kit',
      'Wireless motion sensors',
      'Door contact sensor',
      'Leak + temperature sensors',
      'Local check-in prompt device',
      'Local network configuration + device pairing',
    ],
    automationFlows: [
      'What your home does: low-glare night lighting, hazard alerts, and gentle missed-activity cues.',
      'Works without internet: lighting cues, sensor triggers, and local alerts continue on-site (power permitting).',
      'Cameras are optional and off by default.',
    ],
    journeyFlow: [
      'Caregiver consult intake',
      'Safety walkthrough + package match',
      'Quote + agreement',
      'Deposit gate',
      'Schedule + install',
      'Verification + caregiver training',
    ],
    agreements: [
      'Scope + deliverables agreement',
      'Non-medical services disclosure',
      'Privacy-first local data handling disclosure',
      'Deposit and scheduling acknowledgment',
      'Verification + caregiver handoff summary',
    ],
    differentiators: [
      'Home Assistant remains the only dashboard for resident and caregiver access',
      'No subscriptions sold; optional third-party services are contracted directly',
      'Offline Dignity Rule: core safety behaviors keep running locally during outages',
    ],
  },
  {
    id: 'a2',
    name: 'Elder Tech Plus',
    price: '$4,950 one-time',
    badge: 'Plus tier',
    tagline: 'Routine-aware support, door usage awareness, and privacy-first caregiver summaries.',
    oneLiner:
      'Adds routine deviation detection, door awareness, and caregiver-ready summaries without surveillance.',
    bio:
      'Elder Tech Plus adds routine intelligence and shared visibility while keeping signals local and dignified.',
    idealFor: 'Families who want routine-aware reassurance and respectful visibility across caregivers.',
    includes: [
      'Everything in Elder Tech Basic',
      'Additional motion and presence sensors for routine awareness',
      'Door usage awareness for primary exits',
      'Privacy-first caregiver summary dashboard setup',
      'Expanded hazard sensor coverage',
      'Role-based access configuration for shared caregivers',
    ],
    billOfMaterials: [
      'Basic hardware set',
      'Presence sensors for core rooms',
      'Door contact sensors',
      'Caregiver summary dashboard configuration',
      'Additional hazard sensors',
      'Role-based access configuration',
    ],
    automationFlows: [
      'What your home does: routine deviation detection, door usage awareness, and caregiver summaries.',
      'Works without internet: routine alerts and lighting cues run locally; summaries sync when back online.',
      'Cameras are optional and off by default.',
    ],
    journeyFlow: [
      'Caregiver consult intake',
      'Routine mapping + package match',
      'Quote + agreement',
      'Deposit gate',
      'Schedule + install',
      'Verification + caregiver training',
    ],
    agreements: [
      'Scope + deliverables agreement',
      'Non-medical services disclosure',
      'Privacy-first local execution disclosure',
      'Deposit and scheduling acknowledgment',
      'Verification + caregiver summary checklist',
    ],
    differentiators: [
      'Single Home Assistant view for resident and caregiver dashboards',
      'Offline-capable routines keep core alerts and lighting responsive',
      'No monthly fees for included capabilities',
    ],
  },
  {
    id: 'a3',
    name: 'Elder Tech Pro',
    price: '$7,750 one-time',
    badge: 'Pro tier',
    tagline: 'Multi-signal correlation, adaptive escalation, and advanced guardrails.',
    oneLiner:
      'Adds multi-signal correlation and adaptive escalation for complex caregiving needs.',
    bio:
      'Elder Tech Pro blends multiple safety signals into a reliable, privacy-first escalation ladder.',
    idealFor: 'Homes needing layered guardrails, shared caregiver teams, and advanced escalation logic.',
    includes: [
      'Everything in Elder Tech Plus',
      'Multi-signal correlation for motion, door, and hazard cues',
      'Adaptive escalation ladder with caregiver tiers',
      'Advanced guardrails for overnight and high-risk windows',
      'System health and battery backup tuning',
      'On-site configuration session for advanced caregiver workflows',
    ],
    billOfMaterials: [
      'Plus hardware set',
      'Additional motion, door, and hazard sensors',
      'UPS for Home Assistant and network gear',
      'Advanced escalation configuration session',
    ],
    automationFlows: [
      'What your home does: multi-signal correlation, adaptive escalation, and proactive safety guardrails.',
      'Works without internet: escalation ladders and local rules continue without cloud services.',
      'Cameras are optional and off by default.',
    ],
    journeyFlow: [
      'Caregiver consult intake',
      'Routine mapping + package match',
      'Quote + agreement',
      'Deposit gate',
      'Schedule + install',
      'Verification + caregiver training',
    ],
    agreements: [
      'Scope + deliverables agreement',
      'Non-medical services disclosure',
      'Resilience + outage behavior disclosure',
      'Deposit and scheduling acknowledgment',
      'Verification + caregiver escalation acceptance',
    ],
    differentiators: [
      'Prioritizes local processing; cloud context is optional for remote reach',
      'Home Assistant remains the only control surface for the household',
      'Advanced rules stay editable by the customer without subscriptions',
    ],
  },
];

export const homeSecurityPackages: PackageTier[] = [
  {
    id: 'a1',
    name: 'Bronze',
    badge: 'Bronze tier',
    price: '$1,699 one-time',
    tagline: 'Starter Security & Awareness',
    oneLiner:
      'Entry awareness with a doorbell, one indoor camera, and local-first alerts.',
    bio:
      'Bronze delivers starter security coverage with local-first alerts, essential sensors, and local recording for apartments or small homes.',
    idealFor:
      'Apartments and small homes that need reliable entry awareness and local control.',
    typicalCoverage: getHomeSecurityPackageSpec('a1').coverage,
    includes: getHomeSecurityPackageSpec('a1').capabilities,
    features: getHomeSecurityPackageSpec('a1').capabilities,
    hardware: getHomeSecurityHardwareItems('a1'),
    billOfMaterials: [],
    automationFlows: [
      'Arm/disarm locally in Home Assistant with clear modes and status tiles.',
      'Entry + motion triggers local lights and siren response while logging events on-site.',
      'Leak alerts trigger local notifications and dashboard banners for rapid response.',
      'Remote access is optional and requires internet; local control remains functional on LAN.',
    ],
    journeyFlow: [
      'Security consult intake and property profile',
      'Coverage design + Bronze tier confirmation',
      'Quote and agreement confirmation',
      'Deposit capture and installation scheduling',
      'Install, verification, and homeowner handoff',
    ],
    agreements: [
      'Security coverage agreement',
      'Privacy-first, local data handling acknowledgement',
      'Offline Dignity Rule confirmation (local control stays available)',
      'Deposit and scheduling gate confirmation',
      'Verification summary and handoff record',
    ],
    differentiators: [
      'Home Assistant remains the single dashboard for arming, sensors, lighting, and alerts.',
      'No subscriptions sold; optional third-party monitoring is contracted directly by the homeowner.',
      'Offline Dignity Rule: core security behaviors keep running locally without cloud dependency.',
    ],
  },
  {
    id: 'a2',
    name: 'Silver',
    badge: 'Silver tier',
    price: '$2,599 one-time',
    tagline: 'Whole-Home Coverage (Recommended)',
    oneLiner:
      'Two indoor views, two PoE outdoor cameras, plus a doorbell for most homeowners.',
    bio:
      'Silver delivers whole-home coverage with more sensors, two indoor views, and reliable outdoor PoE visibility.',
    idealFor:
      'Most homeowners who want balanced coverage across main and secondary entries.',
    typicalCoverage: getHomeSecurityPackageSpec('a2').coverage,
    includes: getHomeSecurityPackageSpec('a2').capabilities,
    features: getHomeSecurityPackageSpec('a2').capabilities,
    hardware: getHomeSecurityHardwareItems('a2'),
    billOfMaterials: [],
    automationFlows: [
      'Outdoor PoE camera events surface in Home Assistant with local chimes and lighting cues.',
      'Indoor and outdoor cameras stay reliable on LAN; Home Assistant can trigger recordings or alerts.',
      'Intrusion, motion, and leak workflows stay local; remote access is optional with internet.',
      'Optional third-party monitoring can be added directly by the homeowner if desired.',
    ],
    journeyFlow: [
      'Security consult intake and property profile',
      'Coverage design + Silver tier confirmation',
      'Quote and agreement confirmation',
      'Deposit capture and installation scheduling',
      'Install, verification, and homeowner handoff',
    ],
    agreements: [
      'Security coverage agreement',
      'Privacy-first, local data handling acknowledgement',
      'Offline Dignity Rule confirmation (local control stays available)',
      'Deposit and scheduling gate confirmation',
      'Verification summary and handoff record',
    ],
    differentiators: [
      'Home Assistant remains the primary dashboard for arming, sensors, and camera tiles.',
      'Outdoor cameras emphasize local LAN reliability; cloud access is optional.',
      'No subscriptions sold; the homeowner contracts optional monitoring directly.',
    ],
  },
  {
    id: 'a3',
    name: 'Gold',
    badge: 'Gold tier',
    price: '$3,499 one-time',
    tagline: 'Local Recording + Highest Coverage',
    oneLiner:
      'Dedicated NVR recording, three indoor cameras, and the highest sensor coverage.',
    bio:
      'Gold delivers the highest coverage with dedicated local recording, multiple PoE outdoor angles, and expanded interior awareness.',
    idealFor:
      'Larger homes and households with higher risk tolerance or maximum coverage needs.',
    typicalCoverage: getHomeSecurityPackageSpec('a3').coverage,
    includes: getHomeSecurityPackageSpec('a3').capabilities,
    features: getHomeSecurityPackageSpec('a3').capabilities,
    hardware: getHomeSecurityHardwareItems('a3'),
    billOfMaterials: [],
    automationFlows: [
      'Dedicated local recording captures events on-site with LAN playback.',
      'Home Assistant remains the core dashboard for arming, alerts, and automations.',
      'Camera events can trigger local lights, siren, and on-site notifications without cloud reliance.',
      'Remote viewing requires internet; local controls remain functional over LAN.',
    ],
    journeyFlow: [
      'Security consult intake and property profile',
      'Coverage design + Gold tier confirmation',
      'Quote and agreement confirmation',
      'Deposit capture and installation scheduling',
      'Install, verification, and homeowner handoff',
    ],
    agreements: [
      'Security coverage agreement',
      'Privacy-first, local data handling acknowledgement',
      'Offline Dignity Rule confirmation (local control stays available)',
      'Deposit and scheduling gate confirmation',
      'Verification summary and handoff record',
    ],
    differentiators: [
      'Dedicated local recording stays on-premises with homeowner ownership.',
      'No subscriptions sold; optional third-party monitoring is homeowner-contracted.',
      'Home Assistant remains the single dashboard, even with advanced camera coverage.',
    ],
  },
];

export const packagesByVertical = {
  'elder-tech': packages,
  'home-security': homeSecurityPackages,
};

export const getPackages = (vertical: 'elder-tech' | 'home-security' = 'elder-tech') =>
  packagesByVertical[vertical];

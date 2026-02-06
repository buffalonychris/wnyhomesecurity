import { automationPlaybooks } from './automationPlaybooks';

export type LegacyMapping = {
  legacyItem: string;
  currentLocation: string;
  notes: string;
};

export type SystemInventory = {
  pages: string[];
  agreements: string[];
  systemLogic: string[];
  intakeJourneys: string[];
};

export type VerticalContent = {
  journeySteps: string[];
  agreements: string[];
  packageHighlights: string[];
  playbooks: typeof automationPlaybooks.homeSecurity;
};

export const systemInventory: SystemInventory = {
  pages: [
    'Holding Company Hub (/) and vertical portals',
    'Home Security (/home-security)',
    'Home Automation (/home-automation)',
    'Elder Care Tech (/elder-care-tech)',
    'HALO PERS (/halo)',
    'Operator SaaS (/operator)',
    'Package catalog (/packages, /packages/:id)',
    'Recommendation and quote journey (/recommend, /quote, /quoteReview)',
    'Agreement, deposit, and scheduling (/agreementReview, /payment, /schedule)',
    'Verification and certificates (/verify, /certificate)',
    'Health Homes program hub (/health-homes/*)',
    'Vendor onboarding (/vendors/*)',
    'HALO Launch experience (/halo/*)',
  ],
  agreements: [
    'Quote summary with hash verification',
    'Combined Agreement (review + print)',
    'Deposit acknowledgment and payment gate',
    'Installation scheduling request',
    'Certificate + verification flow',
    'Privacy policy and terms',
  ],
  systemLogic: [
    'Retail flow checkpoints stored in localStorage',
    'Document hash + resume tokens for recoverable journeys',
    'Deposit gating before scheduling unlocks',
    'UTM capture and routing telemetry',
    'Email payload composition for quote and agreement sharing',
  ],
  intakeJourneys: [
    'Retail intake → package match → quote → agreement → deposit → schedule',
    'Health Homes intake → package alignment → reporting readiness',
    'Vendor standards → evaluation → questionnaire → apply',
    'HALO setup → Test & Verified → support',
  ],
};

export const legacyMappings: LegacyMapping[] = [
  {
    legacyItem: 'Step001–Step003 Hub + Vertical segmentation',
    currentLocation: 'Holding company hub routes to each vertical portal in /home-security, /home-automation, /elder-care-tech, /halo, /operator',
    notes: 'Preserves hub-first navigation while keeping vertical subsites independent.',
  },
  {
    legacyItem: 'Core Functionality Workflow',
    currentLocation: 'Quote → Agreement → Deposit → Schedule → Verify',
    notes: 'Retail flow state persists locally with resumable links and hash verification.',
  },
  {
    legacyItem: 'Business Design Packages',
    currentLocation: 'Package catalog and detailed package intelligence under /packages',
    notes: 'BOMs, automation flows, and journey steps are bound to each tier.',
  },
  {
    legacyItem: 'Automation diagrams',
    currentLocation: 'Structured playbooks embedded in each vertical landing',
    notes: 'Converted to trigger/action/handoff playbooks.',
  },
];

export const verticalContent: Record<string, VerticalContent> = {
  homeSecurity: {
    journeySteps: [
      'Security consult intake and property profile',
      'Coverage design + tier match',
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
    packageHighlights: [
      'Bronze: Starter Security & Awareness with entry sensors, local siren response, and leak awareness.',
      'Silver: Whole-Home Coverage + Outdoor Camera Reliability with doorbell awareness and expanded sensors.',
      'Gold: Local Recording + Highest Coverage with dedicated on-site recording and expanded camera angles.',
      'No subscriptions sold; optional third-party monitoring can be added directly by the homeowner.',
      'Home Assistant remains the single dashboard for arming, sensors, lighting, and alerts.',
    ],
    playbooks: automationPlaybooks.homeSecurity,
  },
  homeAutomation: {
    journeySteps: [
      'Routine discovery + room-by-room preference capture',
      'Automation blueprint + Basic/Plus/Pro match',
      'Quote and agreement confirmation',
      'Deposit capture and scheduling',
      'Install, local calibration, and homeowner training',
    ],
    agreements: [
      'Automation scope agreement',
      'Offline Dignity Rule confirmation (lights/scenes/climate stay local)',
      'Home Assistant ownership + privacy controls',
      'No subscriptions sold; optional third-party services are contracted directly',
      'Deposit and scheduling gate confirmation',
      'Post-install acceptance checklist',
    ],
    packageHighlights: [
      'Automation Basic — What your home does: scheduled lighting and climate scenes plus simple one-touch routines that run locally.',
      'Automation Basic — Works without internet: schedules, scenes, and manual wall control keep working when connectivity drops.',
      'Automation Basic — No cloud required for local control of lights, scenes, or climate.',
      'Automation Plus — What your home does: presence-aware routines, adaptive lighting, and meaningful daily patterns that adjust to occupancy.',
      'Automation Plus — Works without internet: presence routines and lighting adjustments stay local, with manual overrides always available.',
      'Automation Plus — No cloud required for local control of lights, scenes, or climate.',
      'Automation Pro — What your home does: multi-zone orchestration, layered rules, and resilient handoffs across rooms and specialty spaces.',
      'Automation Pro — Works without internet: local rule execution and recovery behaviors keep critical routines running.',
      'Automation Pro — No cloud required for local control of lights, scenes, or climate.',
    ],
    playbooks: automationPlaybooks.homeAutomation,
  },
  elderCare: {
    journeySteps: [
      'Caregiver intake + resident consent and dignity priorities',
      'Safety walkthrough, routine mapping, and package match',
      'Quote and agreement confirmation',
      'Deposit capture and scheduling',
      'Install, privacy tuning, and caregiver onboarding',
    ],
    agreements: [
      'Care support agreement with consent and dignity guardrails',
      'Non-medical services disclosure (no diagnosis, no PHI)',
      'Offline Dignity Rule acknowledgment (local safety stays online even if internet drops)',
      'Home Assistant ownership + privacy-first data handling',
      'No subscriptions sold; optional third-party services are contracted directly',
      'Verification + caregiver handoff summary',
    ],
    packageHighlights: [
      'Elder Tech Basic — What your home does: night pathway safety lighting, environmental hazard alerts, and gentle missed-activity awareness.',
      'Elder Tech Basic — Works without internet: lighting cues, local alerts, and sensor triggers run on-site (power permitting).',
      'Elder Tech Plus — What your home does: routine deviation detection, door usage awareness, and privacy-first caregiver summaries.',
      'Elder Tech Plus — Works without internet: routine alerts and lighting cues run locally; summaries sync when the connection returns.',
      'Elder Tech Plus — Cameras are optional and off by default; sensor-first signals are the standard.',
      'Elder Tech Pro — What your home does: multi-signal correlation, adaptive escalation logic, and additional safety guardrails.',
      'Elder Tech Pro — Works without internet: local rules and escalation ladders run on-site without cloud dependence.',
      'Elder Tech Pro — Cameras are optional and off by default; privacy-first alternatives remain available.',
      'Home Assistant is the single dashboard; customers own the system, automations, and data.',
      'No subscriptions sold; optional third-party monitoring or nursing programs are contracted directly by the customer.',
      'Offline Dignity Rule: core safety behaviors never require cloud services.',
    ],
    playbooks: automationPlaybooks.elderCare,
  },
  halo: {
    journeySteps: [
      'Launch checklist and contact intake',
      'Test & Verified documentation',
      'Support readiness and escalation practice',
      'Checkout confirmation (if enabled)',
    ],
    agreements: [
      'HALO launch terms + privacy',
      'Test & Verified attestation',
      'Support and escalation expectations',
    ],
    packageHighlights: [
      'Wearable signaling with local-first fallbacks',
      'Configured escalation pathways',
      'Plain-language caregiver verification',
    ],
    playbooks: automationPlaybooks.elderCare,
  },
};

import { getAddOns, getPackagePricing, PackageTierId } from '../data/pricing';
import { getHardwareList } from '../data/hardware';
import { getFeatureCategories } from '../data/features';
import { siteConfig } from '../config/site';
import { buildQuoteReference } from './quoteUtils';
import { brandSite } from './brand';
import { VerticalKey } from './verticals';

export type QuoteContext = {
  vertical?: VerticalKey;
  customerName?: string;
  contact?: string;
  issuedAt?: string;
  issuedAtISO?: string;
  emailIssuedAt?: string;
  emailIssuedAtISO?: string;
  emailTo?: string;
  emailSubject?: string;
  emailBody?: string;
  emailStatus?: 'not_sent' | 'issued' | 'draft_opened';
  emailProvider?: string;
  emailMessageId?: string;
  emailLastStatus?: 'sent' | 'mock' | 'failed';
  emailLastError?: string;
  emailRecipients?: string[];
  city?: string;
  homeType?: string;
  homeSize?: string;
  internetReliability?: string;
  generatedAt?: string;
  packageId: PackageTierId;
  selectedAddOns: string[];
  pricing: {
    packagePrice: number;
    addOnTotal: number;
    total: number;
  };
  quoteHash?: string;
  priorQuoteHash?: string;
  quoteDocVersion?: string;
  quoteHashAlgorithm?: string;
};

export type AgreementContent = {
  header: {
    title: string;
    version: string;
    generatedDate: string;
  };
  customerSummary: string[];
  quoteSummary: {
    packageName: string;
    addOnLabels: string[];
    total: string;
  };
  installationCommitments: string[];
  validationSteps: string[];
  scope: string[];
  assumptions: string[];
  exclusions: string[];
  offlineBehavior: string;
  installationWindow: string;
  warrantyPlaceholders: string[];
  noMonthlyStatement: string;
  termsVersion: string;
  terms: string[];
  quoteBinding: {
    reference: string;
    quoteVersion: string;
    quoteHash?: string;
    priorQuoteHash?: string;
    total: string;
  };
  quoteAppendix: {
    packageName: string;
    addOnLabels: string[];
    hardwareSummary: string[];
    featureSummary: string[];
  };
};

const packageScope: Record<PackageTierId, string[]> = {
  A1: [
    'Deploy Home Assistant as the single control hub with secure local access.',
    'Install night pathway lighting, motion sensing, and hazard alerts for key rooms.',
    'Configure gentle check-in prompts and caregiver notification preferences.',
  ],
  A2: [
    'Expand routine awareness and door usage alerts across common areas.',
    'Enable privacy-first caregiver summaries with role-based access.',
    'Tune notification thresholds and quiet hours with resident consent.',
  ],
  A3: [
    'Deliver multi-signal correlation across motion, door, and hazard cues.',
    'Implement adaptive escalation ladders with caregiver tiers.',
    'Set up resilience tuning and system health checks for critical coverage.',
  ],
};

const addOnDeliverables: Record<string, string> = {
  'night-pathway-lighting': 'Expand low-glare pathway lighting coverage for safer overnight movement.',
  'hazard-sensors': 'Add leak and temperature sensors for additional rooms.',
  'gentle-checkin': 'Install additional check-in buttons for resident reassurance.',
  'door-awareness': 'Extend door usage awareness with additional entry sensors.',
  'routine-summary': 'Deliver caregiver summary dashboards inside Home Assistant.',
  'air-quality': 'Install air quality and CO listening sensors.',
  'adaptive-escalation': 'Configure tiered caregiver escalation ladders.',
  'multi-signal-correlation': 'Tune multi-signal correlation to reduce false alarms.',
  'backup-power': 'Add backup power protection for hub and network.',
  'optional-video-checkin':
    'Install optional video check-in equipment (off by default; enabled only with explicit consent).',
};

const assumptions = [
  'Existing Wi-Fi and power are available where equipment is installed.',
  'Residents and caregivers participate in configuration preferences during installation.',
  'Local-first design keeps safety behaviors running when internet is offline but power is available.',
  'Caregiver contact lists and consent preferences are provided before installation.',
];

const exclusions = [
  'No permitting, trenching, or structural work is included in this agreement.',
  'Optional third-party subscriptions are only added when explicitly selected by the customer.',
  'This agreement does not provide medical advice, diagnosis, monitoring, or emergency response.',
  'No services are sold as surveillance; cameras remain optional and off by default.',
];

const installationCommitments = [
  '1-day installation window coordinated with caregivers.',
  '2-person crew for coverage and safety.',
  'On-site setup and configuration of all listed equipment.',
  'Essential resident and caregiver training with hands-on walkthroughs.',
  'Post-install test and verification of alerts, automations, and access.',
  '1-year replacement warranty for all included equipment (retail placeholder copy).',
];

const validationSteps = [
  'Pre-flight check for Wi-Fi coverage and power at device locations.',
  'Confirm safety zones and routine preferences with residents and caregivers.',
  'Verify automations continue to run during simulated internet outages.',
];

const terms = [
  `Non-medical and informational: ${brandSite} provides configuration and training only; we do not provide medical care or monitoring.`,
  'Safety first: If there is an urgent safety issue, call 911 or local emergency services.',
  'Consent and dignity: resident consent and caregiver roles govern access to dashboards and alerts.',
  'Privacy design: cameras are optional and off by default; sensor-first signals are the standard.',
  'Data handling: Local-first configuration is prioritized; any cloud connections are only enabled for selected services.',
  'Service boundaries: Warranty and service boundaries will be finalized in the KAEC backend signing package.',
  'Change management: Scope changes may adjust pricing and installation time after mutual agreement.',
  'Scheduling: Installation windows are coordinated with customers; exact times depend on site access.',
];

const currency = (amount: number) => `$${amount.toLocaleString()}`;

const buildScope = (context: QuoteContext) => {
  const base = packageScope[context.packageId] ?? packageScope.A2;
  const extras = context.selectedAddOns
    .map((id) => addOnDeliverables[id])
    .filter(Boolean) as string[];
  return [...base, ...extras];
};

const defaultQuote = (): QuoteContext => ({
  vertical: 'elder-tech',
  packageId: 'A2',
  selectedAddOns: [],
  pricing: {
    packagePrice: getPackagePricing('elder-tech').find((pkg) => pkg.id === 'A2')?.basePrice ?? 0,
    addOnTotal: 0,
    total: getPackagePricing('elder-tech').find((pkg) => pkg.id === 'A2')?.basePrice ?? 0,
  },
  quoteDocVersion: siteConfig.quoteDocVersion,
  quoteHashAlgorithm: siteConfig.quoteHashAlgorithm,
});

export const generateAgreement = (input?: QuoteContext): AgreementContent => {
  const context = input ?? defaultQuote();
  const vertical = context.vertical ?? 'elder-tech';
  const packageInfo = getPackagePricing(vertical).find((pkg) => pkg.id === context.packageId) ?? getPackagePricing(vertical)[0];
  const addOns = getAddOns(vertical);
  const addOnLabels = addOns
    .filter((addOn) => context.selectedAddOns.includes(addOn.id))
    .map((addOn) => addOn.label);
  const hardwareSummary =
    vertical === 'home-security'
      ? []
      : getHardwareList(context.packageId, context.selectedAddOns)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((category) =>
            `${category.title}: ${category.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}`,
          );
  const featureSummary =
    vertical === 'home-security'
      ? []
      : getFeatureCategories(context.packageId, context.selectedAddOns)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((category) => `${category.title}: ${category.items.slice().sort().join('; ')}`);
  const quoteVersion = context.quoteDocVersion ?? siteConfig.quoteDocVersion;
  const agreementVersion = siteConfig.agreementDocVersion;
  const quoteReference = buildQuoteReference({ ...context, generatedAt: context.generatedAt });

  return {
    header: {
      title: `${brandSite} — Combined Agreement`,
      version: agreementVersion,
      generatedDate: new Date().toISOString().slice(0, 10),
    },
    customerSummary: [
      context.customerName ? `Customer: ${context.customerName}` : 'Customer: Not provided',
      context.contact ? `Contact: ${context.contact}` : 'Contact: Not provided',
      context.city ? `City: ${context.city}` : 'City: Not provided',
    ].filter(Boolean),
    quoteSummary: {
      packageName: `${packageInfo.name} (${currency(packageInfo.basePrice)})`,
      addOnLabels: addOnLabels.length ? addOnLabels : ['No add-ons selected'],
      total: currency(context.pricing.total),
    },
    installationCommitments,
    validationSteps,
    scope: buildScope(context),
    assumptions,
    exclusions,
    offlineBehavior:
      'Offline Dignity Rule: Automations and local control are prioritized to function without internet; optional external context depends on connectivity.',
    installationWindow:
      'Installation window: Coordinated with caregivers based on site readiness; no exact appointment is promised until scheduling is confirmed.',
    warrantyPlaceholders: [
      'Warranty placeholder: Final equipment and service warranty terms will be provided in the KAEC backend signing package.',
      'Service boundary placeholder: Support boundaries and response expectations will be documented in the final signing link.',
    ],
    noMonthlyStatement: 'Pricing is one-time for listed equipment, configuration, and training. No monthly subscriptions are required.',
    termsVersion: 'v1.0',
    terms,
    quoteBinding: {
      reference: quoteReference,
      quoteVersion,
      quoteHash: context.quoteHash,
      priorQuoteHash: context.priorQuoteHash,
      total: currency(context.pricing.total),
    },
    quoteAppendix: {
      packageName: `${packageInfo.name} (${currency(packageInfo.basePrice)})`,
      addOnLabels: addOnLabels.length ? addOnLabels : ['No add-ons selected'],
      hardwareSummary,
      featureSummary,
    },
  };
};

export default generateAgreement;

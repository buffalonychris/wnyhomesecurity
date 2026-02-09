export type HomeSecurityTier = 'bronze' | 'silver' | 'gold';

export type HomeSecurityPackageFeature = {
  title: string;
  detail: string;
};

export type HomeSecurityPackage = {
  tier: HomeSecurityTier;
  name: string;
  priceCents: number;
  highlight?: string;
  summary: string;
  includedSummary: string[];
  features: HomeSecurityPackageFeature[];
  goodFit: string[];
};

export const homeSecurityPackages: HomeSecurityPackage[] = [
  {
    tier: 'bronze',
    name: 'Bronze Package',
    priceCents: 169900,
    summary: 'Essential protection with core sensors and fast mobile alerts for everyday coverage.',
    includedSummary: [
      'Entry + motion coverage for key zones',
      'Mobile app control with instant alerts',
      'Professional setup + walkthrough',
    ],
    features: [
      {
        title: 'Starter sensor suite',
        detail: 'Protect primary entry points and high-traffic areas with dependable sensors.',
      },
      {
        title: 'Mobile command center',
        detail: 'Arm, disarm, and check status from anywhere with the WNY Home Security app.',
      },
      {
        title: 'Real-time system oversight',
        detail: 'Around-the-clock visibility with concierge support when you need it.',
      },
      {
        title: 'Guided setup session',
        detail: 'Concierge onboarding ensures your system is ready on day one.',
      },
    ],
    goodFit: [
      'Townhomes, condos, and smaller footprints',
      'Homeowners focused on entry protection',
      'Households upgrading from DIY alarms',
    ],
  },
  {
    tier: 'silver',
    name: 'Silver Package',
    priceCents: 259900,
    highlight: 'Recommended',
    summary: 'Balanced coverage with expanded sensors, smart scenes, and priority care.',
    includedSummary: [
      'Expanded perimeter coverage',
      'Smart automation scenes prebuilt',
      'Priority care guides',
    ],
    features: [
      {
        title: 'Expanded sensor coverage',
        detail: 'Add coverage to secondary entry points and common gathering spaces.',
      },
      {
        title: 'Smart automation starter kit',
        detail: 'Preset scenes for arrival, bedtime, and away routines.',
      },
      {
        title: 'Priority care workflow',
        detail: 'Enhanced check-ins keep your household informed.',
      },
      {
        title: 'Camera-ready infrastructure',
        detail: 'Wiring and placement guidance for future indoor or outdoor cameras.',
      },
      {
        title: 'Remote health checks',
        detail: 'Monthly system reviews to keep sensors aligned and batteries fresh.',
      },
    ],
    goodFit: [
      'Families wanting added automation',
      'Multi-entry homes needing wider coverage',
      'Households seeking proactive system updates',
    ],
  },
  {
    tier: 'gold',
    name: 'Gold Package',
    priceCents: 349900,
    summary: 'Premium coverage with white-glove onboarding, smart integrations, and camera guidance.',
    includedSummary: [
      'Whole-home coverage strategy',
      'White-glove onboarding + training',
      'Camera and smart home integration',
    ],
    features: [
      {
        title: 'Whole-home protection map',
        detail: 'Custom zone mapping for every entry, window cluster, and high-value area.',
      },
      {
        title: 'Premium automation scenes',
        detail: 'Advanced routines that sync lighting, locks, and alarm states.',
      },
      {
        title: 'Video-ready placement guidance',
        detail: 'Curated camera placement recommendations for interior and exterior coverage.',
      },
      {
        title: 'White-glove onboarding',
        detail: 'Hands-on training plus personalized handoff documentation.',
      },
      {
        title: 'Dedicated support lane',
        detail: 'Priority access to support for adjustments and seasonal tuning.',
      },
    ],
    goodFit: [
      'Larger homes or multi-level properties',
      'Homeowners seeking concierge support',
      'Smart home enthusiasts expanding automation',
    ],
  },
];

export const formatPackagePrice = (priceCents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
    priceCents / 100,
  );

export const getHomeSecurityPackage = (tier: HomeSecurityTier) =>
  homeSecurityPackages.find((pkg) => pkg.tier === tier);

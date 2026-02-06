export type PackageTierId = 'A1' | 'A2' | 'A3';

export type PackagePricing = {
  id: PackageTierId;
  name: string;
  basePrice: number;
  summary: string;
};

export type AddOn = {
  id: string;
  label: string;
  tier: 'Low' | 'Mid' | 'High';
  price: number;
  description: string;
  priceLabel?: string;
};

export const elderTechPackagePricing: PackagePricing[] = [
  {
    id: 'A1',
    name: 'Elder Tech Basic',
    basePrice: 2850,
    summary: 'Night pathway safety, hazard alerts, and gentle check-ins with local-first control.',
  },
  {
    id: 'A2',
    name: 'Elder Tech Plus',
    basePrice: 4950,
    summary: 'Routine-aware support, door usage awareness, and privacy-first caregiver summaries.',
  },
  {
    id: 'A3',
    name: 'Elder Tech Pro',
    basePrice: 7750,
    summary: 'Multi-signal correlation, adaptive escalation, and advanced guardrails.',
  },
];

export const homeSecurityPackagePricing: PackagePricing[] = [
  {
    id: 'A1',
    name: 'Bronze',
    basePrice: 1699,
    summary: 'Starter Security & Awareness.',
  },
  {
    id: 'A2',
    name: 'Silver',
    basePrice: 2599,
    summary: 'Whole-Home Coverage + Outdoor Camera Reliability.',
  },
  {
    id: 'A3',
    name: 'Gold',
    basePrice: 3499,
    summary: 'Local Recording + Highest Coverage.',
  },
];

export const packagePricing: PackagePricing[] = elderTechPackagePricing;

const tierLabelsByVertical: Record<'elder-tech' | 'home-security', Record<PackageTierId, string>> = {
  'elder-tech': {
    A1: 'Elder Tech Basic',
    A2: 'Elder Tech Plus',
    A3: 'Elder Tech Pro',
  },
  'home-security': {
    A1: 'Bronze',
    A2: 'Silver',
    A3: 'Gold',
  },
};

const tierBadgeClass: Record<PackageTierId, string> = {
  A1: 'tier-badge-bronze',
  A2: 'tier-badge-silver',
  A3: 'tier-badge-gold',
};

export const getTierBadgeClass = (tier: PackageTierId): string => tierBadgeClass[tier];

export const elderTechAddOns: AddOn[] = [
  {
    id: 'night-pathway-lighting',
    label: 'Night pathway lighting kit',
    tier: 'Low',
    price: 320,
    description:
      'Adds low-glare pathway lighting that triggers on motion for safer overnight trips. Install complexity: Light.',
  },
  {
    id: 'hazard-sensors',
    label: 'Hazard sensor bundle (leak + temperature)',
    tier: 'Low',
    price: 260,
    description:
      'Adds leak and temperature alerts with local notifications for kitchens and baths. Install complexity: Light.',
  },
  {
    id: 'gentle-checkin',
    label: 'Gentle check-in buttons',
    tier: 'Low',
    price: 220,
    description:
      'Adds one-touch check-ins for resident reassurance and caregiver acknowledgment. Install complexity: Light.',
  },
  {
    id: 'door-awareness',
    label: 'Door usage awareness pack',
    tier: 'Mid',
    price: 420,
    description:
      'Adds entry/exit awareness with quiet chimes and caregiver alerts for unusual activity. Install complexity: Medium.',
  },
  {
    id: 'routine-summary',
    label: 'Routine summary dashboard',
    tier: 'Mid',
    price: 390,
    description:
      'Delivers privacy-first activity summaries inside Home Assistant (no audio/video). Install complexity: Medium.',
  },
  {
    id: 'air-quality',
    label: 'Air quality + CO listener kit',
    tier: 'Mid',
    price: 480,
    description:
      'Adds air quality and CO alerts with local notifications for healthier indoor environments. Install complexity: Medium.',
  },
  {
    id: 'adaptive-escalation',
    label: 'Adaptive escalation ladder',
    tier: 'Mid',
    price: 520,
    description:
      'Adds tiered caregiver escalation with time-based logic that runs locally. Install complexity: Medium.',
  },
  {
    id: 'multi-signal-correlation',
    label: 'Multi-signal correlation engine',
    tier: 'High',
    price: 760,
    description:
      'Combines motion, door, and hazard signals to reduce false alarms and improve confidence. Install complexity: Heavy.',
  },
  {
    id: 'backup-power',
    label: 'Backup power resilience kit',
    tier: 'High',
    price: 880,
    description:
      'Adds UPS coverage for the hub and network so local safety behaviors persist during outages. Install complexity: Heavy.',
  },
  {
    id: 'optional-video-checkin',
    label: 'Optional video check-in kit (off by default)',
    tier: 'High',
    price: 950,
    description:
      'Surveillance-adjacent: cameras remain off by default and require explicit consent; privacy-first alternatives include sensor-only check-ins and door/motion cues. Install complexity: Heavy.',
  },
];

export const homeSecurityAddOns: AddOn[] = [
  {
    id: 'wall-tablet-dashboard',
    label: 'Wall-mounted tablet/dashboard',
    tier: 'Low',
    price: 0,
    priceLabel: 'Quoted separately',
    description: 'A dedicated in-home screen for arming, cameras, and status.',
  },
  {
    id: 'additional-sensors',
    label: 'Additional entry/motion/leak sensors',
    tier: 'Low',
    price: 0,
    priceLabel: 'Quoted separately',
    description: 'Add coverage for more doors, rooms, and water-risk areas.',
  },
  {
    id: 'additional-cameras',
    label: 'Additional cameras (per angle)',
    tier: 'Mid',
    price: 0,
    priceLabel: 'Quoted separately',
    description: 'Add indoor or outdoor views by location/angle.',
  },
  {
    id: 'ups-backup',
    label: 'UPS battery backup for hub/NVR/network gear',
    tier: 'Mid',
    price: 0,
    priceLabel: 'Quoted separately',
    description: 'Keeps the hub, network, and local recording running during power outages.',
  },
  {
    id: 'water-shutoff',
    label: 'Water shutoff valve (plumbing required)',
    tier: 'High',
    price: 0,
    priceLabel: 'Quoted separately',
    description: 'Enables automatic shutoff and local control; requires plumbing coordination.',
  },
];

export const addOns: AddOn[] = elderTechAddOns;

export const packagePricingByVertical = {
  'elder-tech': elderTechPackagePricing,
  'home-security': homeSecurityPackagePricing,
};

export const addOnsByVertical = {
  'elder-tech': elderTechAddOns,
  'home-security': homeSecurityAddOns,
};

export const getPackagePricing = (vertical: 'elder-tech' | 'home-security' = 'elder-tech') =>
  packagePricingByVertical[vertical];

export const getAddOns = (vertical: 'elder-tech' | 'home-security' = 'elder-tech') =>
  addOnsByVertical[vertical];

export const getTierLabel = (
  tier: PackageTierId,
  vertical: 'elder-tech' | 'home-security' = 'elder-tech'
): string => tierLabelsByVertical[vertical][tier];

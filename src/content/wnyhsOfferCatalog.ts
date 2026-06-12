export type OfferCategory = {
  id: string;
  name: string;
  outcome: string;
  anchor: string;
};

export type OfferSolution = {
  id: string;
  title: string;
  categoryId: string;
  status: 'Live solution' | 'Standard candidate' | 'Planning topic' | 'Quote-reviewed' | 'Custom / Vault';
  body: string;
  href: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export type OfferPackage = {
  id: string;
  name: string;
  status: string;
  customerProblem: string;
  includedTopics: string[];
  coreRule: string;
  href: string;
};

export type VaultBucket = {
  id: string;
  name: string;
  body: string;
};

export const offeringsPath = '/packages?vertical=home-security';
export const fitCheckPath = '/discovery?vertical=home-security';
export const estimatePath = '/contact?vertical=home-security';

export const offerAnchors = {
  core: `${offeringsPath}#wnyhs-core`,
  categories: `${offeringsPath}#offer-categories`,
  solutions: `${offeringsPath}#standard-planning-solutions`,
  packages: `${offeringsPath}#package-starting-points`,
  vault: `${offeringsPath}#the-vault`,
} as const;

export const wnyhsCoreOffer = {
  eyebrow: 'WNYHS Core / Control Plane',
  title: 'The local dashboard foundation behind supported solutions',
  body:
    'WNYHS Core is the Home Assistant-based local dashboard and control-plane foundation for supported dashboards, selected alerts, automations, and future expansion through WNYHS Core.',
  firstCustomer:
    'First-time WNYHS customers usually include Core with the first solution, package starting point, or custom project.',
  existingCustomer:
    'Existing WNYHS Core customers should not be charged for Core again; future work is add-on scope only.',
  bullets: [
    'Local dashboard for supported equipment',
    'Selected alerts and practical automations where supported',
    'Customer-owned equipment foundation',
    'Future expansion through WNYHS Core',
  ],
} as const;

export const offerCategories: OfferCategory[] = [
  {
    id: 'home-security',
    name: 'Home Security',
    outcome: 'Entry, package-area, garage, driveway, and perimeter awareness for the everyday parts of the property people ask about most.',
    anchor: fitCheckPath,
  },
  {
    id: 'environmental-safety',
    name: 'Home Safety / Environmental Safety',
    outcome: 'Water, temperature, sump, basement, and utility-room visibility for selected areas.',
    anchor: fitCheckPath,
  },
  {
    id: 'home-lighting',
    name: 'Home Lighting',
    outcome: 'Everyday lighting, entry lighting, night paths, and routines where circuits and supported equipment allow it.',
    anchor: fitCheckPath,
  },
  {
    id: 'home-automation',
    name: 'Home Automation',
    outcome: 'Modes, notification routing, dashboard views, scenes, and routines for supported devices and integrations.',
    anchor: fitCheckPath,
  },
  {
    id: 'aging-in-place',
    name: 'Aging-in-Place / Elder Care',
    outcome: 'Non-medical home awareness, family visibility, entry and exit awareness, and selected notifications.',
    anchor: fitCheckPath,
  },
  {
    id: 'vault',
    name: 'The Vault / Custom Projects',
    outcome: 'Site-reviewed, quote-only smart-property ideas for custom controls, detached spaces, specialty lighting, and advanced dashboards.',
    anchor: offerAnchors.vault,
  },
];

export const publicSolutions: OfferSolution[] = [
  {
    id: 'front-door-package-protection',
    title: 'Front Door Package Protection',
    categoryId: 'home-security',
    status: 'Standard candidate',
    body: 'Front-door and package-area awareness using supported hardware and selected alerts.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/solution-package-protection.png',
    imageAlt: 'Front porch delivery area with package awareness equipment',
  },
  {
    id: 'entry-perimeter-awareness',
    title: 'Entry & Perimeter Awareness',
    categoryId: 'home-security',
    status: 'Planning topic',
    body: 'Visibility around selected doors, approaches, and perimeter areas after property review.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-home-security.png',
    imageAlt: 'Exterior home entry with smart property awareness equipment',
  },
  {
    id: 'driveway-watch',
    title: 'Driveway Awareness / Driveway Watch',
    categoryId: 'home-security',
    status: 'Planning topic',
    body: 'Arrivals, visitors, and driveway activity awareness where placement and equipment support it.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/solution-driveway-watch.png',
    imageAlt: 'Driveway and garage area with property awareness camera',
  },
  {
    id: 'smart-entry',
    title: 'Smart Entry / Smart Lock & Guest Access',
    categoryId: 'home-security',
    status: 'Standard candidate',
    body: 'Access-code planning, supported locks, and entry awareness with customer-owned equipment.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/solutions/front-door-package-protection.png',
    imageAlt: 'Front door smart entry area with package and access awareness equipment',
  },
  {
    id: 'garage-door-awareness',
    title: 'Garage Door Awareness',
    categoryId: 'home-security',
    status: 'Standard candidate',
    body: 'Open or closed status visibility and selected reminders for supported garage setups.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/solutions/connected-garage-workshop.png',
    imageAlt: 'Connected garage and workshop area for garage status awareness',
  },
  {
    id: 'door-window-left-open-awareness',
    title: 'Door / Window Left-Open Awareness',
    categoryId: 'home-security',
    status: 'Standard candidate',
    body: 'Selected open or closed awareness for doors and windows included in the reviewed scope.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-home-security.png',
    imageAlt: 'Home entry area planned for selected door and window awareness',
  },
  {
    id: 'water-leak-alerts',
    title: 'Water Leak Awareness / Water Leak Alerts',
    categoryId: 'environmental-safety',
    status: 'Live solution',
    body: 'Earlier awareness when water appears in selected areas.',
    href: '/solutions/water-protection',
    ctaLabel: 'View Solution',
    imageSrc: '/images/home-security/solutions/solutions-water-hero.png',
    imageAlt: 'Home utility area planned for water leak awareness',
  },
  {
    id: 'freeze-risk-awareness',
    title: 'Freeze Risk Awareness',
    categoryId: 'environmental-safety',
    status: 'Standard candidate',
    body: 'Selected temperature awareness for scoped spaces during WNY cold-weather routines.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-environmental-safety.png',
    imageAlt: 'Home utility area with environmental safety awareness equipment',
  },
  {
    id: 'basement-utility-awareness',
    title: 'Basement & Utility Room Awareness',
    categoryId: 'environmental-safety',
    status: 'Standard candidate',
    body: 'Water, temperature, humidity, and utility-space visibility after site details are reviewed.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/package-basement-utility-protection.png',
    imageAlt: 'Basement and utility awareness equipment near home utility systems',
  },
  {
    id: 'sump-area-awareness',
    title: 'Sump Area Awareness',
    categoryId: 'environmental-safety',
    status: 'Planning topic',
    body: 'Sump-area water presence and selected alerts where sensor placement is practical.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/solution-sump-pump-awarenes.png',
    imageAlt: 'Sump pump area with awareness equipment for basement visibility',
  },
  {
    id: 'smarter-everyday-lighting',
    title: 'Smarter Everyday Lighting',
    categoryId: 'home-lighting',
    status: 'Standard candidate',
    body: 'Everyday lighting control and routines where supported switches, circuits, and goals align.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-home-lighting.png',
    imageAlt: 'Home exterior with planned lighting for arrival and outdoor visibility',
  },
  {
    id: 'night-path-lighting',
    title: 'Night Path Lighting',
    categoryId: 'home-lighting',
    status: 'Standard candidate',
    body: 'Night movement lighting routines for selected routes and supported equipment.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/solution-security-lighting.png',
    imageAlt: 'Home exterior lighting planned for visibility around the property',
  },
  {
    id: 'entry-lighting-automation',
    title: 'Entry Lighting Automation',
    categoryId: 'home-lighting',
    status: 'Standard candidate',
    body: 'Arrival and entry lighting behavior for reviewed circuits and supported controls.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/solution-security-lighting.png',
    imageAlt: 'Entry and exterior lighting planned for supported home routines',
  },
  {
    id: 'away-night-vacation-modes',
    title: 'Away / Night / Vacation Modes',
    categoryId: 'home-automation',
    status: 'Standard candidate',
    body: 'Mode-based routines and selected alerts for supported devices and household patterns.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-home-automation.png',
    imageAlt: 'Smart home dashboard and automation controls for everyday routines',
  },
  {
    id: 'family-awareness',
    title: 'Family Awareness',
    categoryId: 'aging-in-place',
    status: 'Live solution',
    body: 'Practical household awareness around doors, arrivals, packages, garage use, and routines.',
    href: '/solutions/family-awareness',
    ctaLabel: 'View Solution',
    imageSrc: '/images/home-security/solutions/solutions-awareness-hero.png',
    imageAlt: 'Family home scene planned for household awareness',
  },
  {
    id: 'senior-safety',
    title: 'Senior Safety / Aging-in-Place Awareness',
    categoryId: 'aging-in-place',
    status: 'Live solution',
    body: 'Non-medical awareness and family visibility for older adults who want independence at home.',
    href: '/solutions/senior-safety',
    ctaLabel: 'View Solution',
    imageSrc: '/images/home-security/solutions/solutions-aging-hero.png',
    imageAlt: 'Comfortable home environment planned for aging-in-place awareness',
  },
  {
    id: 'entry-exit-older-adult',
    title: 'Entry / Exit Awareness for Older Adult',
    categoryId: 'aging-in-place',
    status: 'Standard candidate',
    body: 'Consent-aware entry and exit awareness with selected family notifications.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/category-aging-in-place.png',
    imageAlt: 'Comfortable home interior planned for family awareness and independence',
  },
  {
    id: 'help-button',
    title: 'Help Button / Assistance Trigger',
    categoryId: 'aging-in-place',
    status: 'Standard candidate',
    body: 'Fixed in-home assistance trigger for selected notifications, not medical service or urgent-service response.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/package-family-confidence.png',
    imageAlt: 'Family confidence package supporting home awareness and trusted access',
  },
  {
    id: 'family-check-in-dashboard',
    title: 'Family Check-In Dashboard',
    categoryId: 'aging-in-place',
    status: 'Planning topic',
    body: 'A local dashboard view for approved household awareness signals and family check-ins.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/solutions/solutions-awareness-sample.png',
    imageAlt: 'Illustrative family awareness dashboard and home context',
  },
  {
    id: 'notification-routing',
    title: 'Notification & Alert Routing Setup',
    categoryId: 'home-automation',
    status: 'Standard candidate',
    body: 'Selected alerts, recipients, quiet hours, and routing rules for the reviewed system scope.',
    href: fitCheckPath,
    ctaLabel: 'Ask In Fit Check',
    imageSrc: '/images/home-security/homepage/WNYHSCorePhone.png',
    imageAlt: 'Phone view for selected WNYHS Core awareness notifications',
  },
  {
    id: 'local-camera-awareness',
    title: 'Local Camera Property Awareness',
    categoryId: 'home-security',
    status: 'Quote-reviewed',
    body: 'Supported camera visibility with site-reviewed placement, privacy, recording, and support boundaries.',
    href: estimatePath,
    ctaLabel: 'Request Estimate',
    imageSrc: '/images/solutions/smart-home-security.png',
    imageAlt: 'Smart home property awareness camera view for reviewed camera placement',
  },
  {
    id: 'vacation-home-awareness',
    title: 'Vacation Home Awareness',
    categoryId: 'home-automation',
    status: 'Live solution',
    body: 'Remote property awareness for seasonal and second homes, shaped by site conditions.',
    href: '/solutions/vacation-homes',
    ctaLabel: 'View Solution',
    imageSrc: '/images/home-security/solutions/solutions-vacation-hero.png',
    imageAlt: 'Seasonal home planned for remote property awareness',
  },
];

export const packageStartingPoints: OfferPackage[] = [
  {
    id: 'front-door-protection',
    name: 'Front Door Protection Package',
    status: 'Starting point',
    customerProblem: 'For homeowners who want clearer front-door and package-area awareness without a scattered app setup.',
    includedTopics: ['Front Door Package Protection', 'Entry Lighting Automation', 'Notification & Alert Routing Setup'],
    coreRule: 'Can include WNYHS Core for first-time customers. Final scope confirmed after property review.',
    href: estimatePath,
  },
  {
    id: 'home-security-starter',
    name: 'Home Security Starter Package',
    status: 'Starting point',
    customerProblem: 'For a practical first layer of entry, garage, and door/window awareness.',
    includedTopics: ['Front Door Package Protection', 'Garage Door Awareness', 'Door / Window Left-Open Awareness'],
    coreRule: 'Can include WNYHS Core for first-time customers. Existing Core customers are add-on scope only.',
    href: estimatePath,
  },
  {
    id: 'entry-access',
    name: 'Entry & Access Package',
    status: 'Reviewed after site details',
    customerProblem: 'For family, guest, cleaner, contractor, or caregiver access planning.',
    includedTopics: ['Smart Lock & Guest Access', 'Entry / Exit Awareness', 'Notification Routing'],
    coreRule: 'Can include WNYHS Core for first-time customers. Access details are site-reviewed.',
    href: fitCheckPath,
  },
  {
    id: 'basement-utility',
    name: 'Basement / Utility Protection Package',
    status: 'Starting point',
    customerProblem: 'For water, temperature, sump, humidity, and utility-area awareness.',
    includedTopics: ['Water Leak Awareness', 'Freeze Risk Awareness', 'Basement & Utility Room Awareness'],
    coreRule: 'Can include WNYHS Core for first-time customers. Final scope confirmed after property review.',
    href: estimatePath,
  },
  {
    id: 'property-watch',
    name: 'Property Watch Package',
    status: 'Reviewed after site details',
    customerProblem: 'For a broader property-status view while away, at night, or between visits.',
    includedTopics: ['Entry & Perimeter Awareness', 'Garage Door Awareness', 'Away / Night / Vacation Modes'],
    coreRule: 'Can include WNYHS Core for first-time customers. Cameras and exterior scope are site-reviewed.',
    href: estimatePath,
  },
  {
    id: 'daily-lighting-routines',
    name: 'Daily Lighting & Routines Package',
    status: 'Starting point',
    customerProblem: 'For everyday lighting, scenes, and practical household routines.',
    includedTopics: ['Smarter Everyday Lighting', 'Scene Button / Wall Control Setup', 'Away / Night / Vacation Modes'],
    coreRule: 'Can include WNYHS Core for first-time customers where supported equipment allows it.',
    href: fitCheckPath,
  },
  {
    id: 'night-safety-comfort',
    name: 'Night Safety & Comfort Package',
    status: 'Starting point',
    customerProblem: 'For night movement visibility and comfort awareness without a medical-service promise.',
    includedTopics: ['Night Path Lighting', 'Comfort & Temperature Awareness', 'Selected Notifications'],
    coreRule: 'Can include WNYHS Core for first-time customers. Final scope confirmed after property review.',
    href: fitCheckPath,
  },
  {
    id: 'aging-in-place-awareness',
    name: 'Aging-in-Place Awareness Package',
    status: 'Reviewed after site details',
    customerProblem: 'For non-medical household awareness and consent-aware family visibility.',
    includedTopics: ['Entry / Exit Awareness', 'Help Button / Assistance Trigger', 'Family Check-In Dashboard'],
    coreRule: 'Can include WNYHS Core for first-time customers. Recipient and privacy rules are reviewed.',
    href: fitCheckPath,
  },
  {
    id: 'garage-workshop-awareness',
    name: 'Garage / Workshop Awareness Package',
    status: 'Reviewed after site details',
    customerProblem: 'For garage, detached garage, or workshop status and lighting awareness.',
    includedTopics: ['Garage Door Awareness', 'Garage / Workshop Lighting', 'Detached Space Awareness'],
    coreRule: 'Can include WNYHS Core for first-time customers. Detached spaces may need connectivity review.',
    href: fitCheckPath,
  },
  {
    id: 'local-property-camera',
    name: 'Local Property Camera Package',
    status: 'Quote-reviewed',
    customerProblem: 'For local-first camera visibility where site conditions, privacy, wiring, and support scope are reviewed.',
    includedTopics: ['Local Camera Property Awareness', 'Front Door Package Protection', 'Notification Routing'],
    coreRule: 'Can include WNYHS Core for first-time customers. Camera-heavy scope is quote-reviewed.',
    href: estimatePath,
  },
];

export const vaultBuckets: VaultBucket[] = [
  {
    id: 'outdoor-living-controls',
    name: 'Outdoor Living Controls',
    body: 'Custom outdoor-living controls reviewed individually around wiring, weather exposure, equipment, and customer goals.',
  },
  {
    id: 'pool-hot-tub-awareness-controls',
    name: 'Pool / Hot Tub Awareness and Controls',
    body: 'Quote-only after review where equipment, manufacturer requirements, and site conditions support it.',
  },
  {
    id: 'specialty-lighting',
    name: 'Specialty Lighting',
    body: 'Specialty lighting for eligible circuits, outdoor areas, seasonal use, and site-reviewed goals.',
  },
  {
    id: 'detached-space-controls',
    name: 'Detached Space Controls',
    body: 'Detached garage, outbuilding, or exterior-space controls reviewed for power, network, and support limits.',
  },
  {
    id: 'gates-access-exterior-equipment',
    name: 'Gates / Access / Exterior Equipment',
    body: 'Access and exterior equipment ideas handled as custom, quote-only after compatibility and safety review.',
  },
  {
    id: 'workshops-utility-spaces',
    name: 'Workshops and Utility Spaces',
    body: 'Workshop and utility-space awareness or controls reviewed around loads, equipment ratings, and customer goals.',
  },
  {
    id: 'custom-dashboards',
    name: 'Custom Dashboards',
    body: 'Custom dashboard views for supported equipment, household priorities, and future expansion through WNYHS Core.',
  },
  {
    id: 'advanced-automation-design',
    name: 'Advanced Automation Design',
    body: 'Advanced automation design reviewed individually around reliability, support scope, and homeowner expectations.',
  },
];

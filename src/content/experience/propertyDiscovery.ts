export type PropertyZoneId =
  | 'front-door'
  | 'driveway'
  | 'garage'
  | 'basement-utility'
  | 'aging-in-place-living-area'
  | 'backyard-property';

export type PropertyDiscoveryPriority = {
  id: string;
  label: string;
  explanation: string;
  recommendedZoneIds: PropertyZoneId[];
  concern: string;
  outcomes: string[];
  connectedCategories: string[];
  destinations: Array<{
    label: string;
    to: string;
  }>;
};

export const propertyDiscoveryPriorities: PropertyDiscoveryPriority[] = [
  {
    id: 'entry-package-awareness',
    label: 'Entry and package awareness',
    explanation: 'Start with the places that shape arrivals, deliveries, and approach awareness.',
    recommendedZoneIds: ['front-door', 'driveway'],
    concern: 'You want a clearer view of arrivals, deliveries, and supported entry activity.',
    outcomes: [
      'Know when someone or something arrives.',
      'Review supported doorbell or entry awareness.',
      'Coordinate supported access and lighting.',
    ],
    connectedCategories: ['Home Security', 'Home Automation', 'Home Lighting'],
    destinations: [
      { label: 'Explore Home Security', to: '/categories/home-security' },
      { label: 'See entry and package solutions', to: '/solutions' },
    ],
  },
  {
    id: 'water-utility-equipment-awareness',
    label: 'Water, utility, and equipment awareness',
    explanation: 'Focus on selected basement and utility conditions that may benefit from earlier visibility.',
    recommendedZoneIds: ['basement-utility'],
    concern: 'You want earlier visibility into selected water, utility, or equipment conditions.',
    outcomes: [
      'Surface leaks or abnormal utility conditions sooner.',
      'Coordinate compatible shutoff or alerts where supported.',
    ],
    connectedCategories: ['Home Safety', 'Home Automation', 'Property Management'],
    destinations: [
      { label: 'Explore Home Safety', to: '/categories/home-safety' },
      { label: 'See water awareness options', to: '/solutions/water-protection' },
    ],
  },
  {
    id: 'easier-everyday-control',
    label: 'Easier everyday control',
    explanation: 'Explore practical controls and routines across the entry, garage, and main living area.',
    recommendedZoneIds: ['front-door', 'garage', 'aging-in-place-living-area'],
    concern: 'You want everyday property routines to take fewer repeated steps.',
    outcomes: [
      'Reduce repeated daily steps.',
      'Coordinate entry, garage, lighting, and common routines.',
    ],
    connectedCategories: ['Home Automation', 'Home Lighting'],
    destinations: [
      { label: 'Explore Home Automation', to: '/categories/home-automation' },
      { label: 'Explore Home Lighting', to: '/categories/home-lighting' },
    ],
  },
  {
    id: 'aging-in-place-support',
    label: 'Aging-in-place support',
    explanation: 'Consider non-medical support for easier daily control, trusted entry, and household independence.',
    recommendedZoneIds: ['aging-in-place-living-area', 'front-door'],
    concern: 'You want the home to support easier daily control and household independence.',
    outcomes: [
      'Make controls, pathways, and daily routines easier.',
      'Provide consent-aware, non-medical household awareness.',
    ],
    connectedCategories: [
      'Aging in Place',
      'Home Safety',
      'Home Automation',
      'Home Lighting',
    ],
    destinations: [
      { label: 'Explore Aging in Place', to: '/categories/aging-in-place' },
      { label: 'See household independence options', to: '/solutions/senior-safety' },
    ],
  },
  {
    id: 'exterior-driveway-garage-awareness',
    label: 'Exterior, driveway, and garage awareness',
    explanation: 'See how approach, garage, and outdoor-property awareness can work as one reviewed picture.',
    recommendedZoneIds: ['driveway', 'garage', 'backyard-property'],
    concern: 'You want better visibility around arrivals, the garage, driveway, and exterior areas.',
    outcomes: [
      'Improve arrival, garage, driveway, and exterior visibility.',
      'Coordinate supported awareness and lighting.',
    ],
    connectedCategories: [
      'Home Security',
      'Home Automation',
      'Home Lighting',
      'Property Management',
    ],
    destinations: [
      { label: 'Explore Home Security', to: '/categories/home-security' },
      { label: 'Explore Home Lighting', to: '/categories/home-lighting' },
    ],
  },
  {
    id: 'second-property-outdoor-management',
    label: 'Second property, detached structure, pool, or outdoor management',
    explanation: 'Explore selected outdoor, detached-structure, and utility signals in one practical view.',
    recommendedZoneIds: ['backyard-property', 'basement-utility'],
    concern: 'You want a practical way to review conditions across a remote or distributed property.',
    outcomes: [
      'Make remote or distributed property conditions easier to review.',
      'Coordinate outdoor, utility, and property-awareness capabilities where supported.',
    ],
    connectedCategories: [
      'Home Security',
      'Home Safety',
      'Home Automation',
      'Home Lighting',
      'Property Management',
    ],
    destinations: [
      { label: 'Explore Property Management', to: '/categories/property-management' },
      { label: 'See seasonal property awareness', to: '/solutions/vacation-homes' },
    ],
  },
];

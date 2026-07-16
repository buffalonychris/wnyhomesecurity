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
};

export const propertyDiscoveryPriorities: PropertyDiscoveryPriority[] = [
  {
    id: 'entry-package-awareness',
    label: 'Entry and package awareness',
    explanation: 'Start with the places that shape arrivals, deliveries, and approach awareness.',
    recommendedZoneIds: ['front-door', 'driveway'],
  },
  {
    id: 'water-utility-equipment-awareness',
    label: 'Water, utility, and equipment awareness',
    explanation: 'Focus on selected basement and utility conditions that may benefit from earlier visibility.',
    recommendedZoneIds: ['basement-utility'],
  },
  {
    id: 'easier-everyday-control',
    label: 'Easier everyday control',
    explanation: 'Explore practical controls and routines across the entry, garage, and main living area.',
    recommendedZoneIds: ['front-door', 'garage', 'aging-in-place-living-area'],
  },
  {
    id: 'aging-in-place-support',
    label: 'Aging-in-place support',
    explanation: 'Consider non-medical support for easier daily control, trusted entry, and household independence.',
    recommendedZoneIds: ['aging-in-place-living-area', 'front-door'],
  },
  {
    id: 'exterior-driveway-garage-awareness',
    label: 'Exterior, driveway, and garage awareness',
    explanation: 'See how approach, garage, and outdoor-property awareness can work as one reviewed picture.',
    recommendedZoneIds: ['driveway', 'garage', 'backyard-property'],
  },
  {
    id: 'second-property-outdoor-management',
    label: 'Second property, detached structure, pool, or outdoor management',
    explanation: 'Explore selected outdoor, detached-structure, and utility signals in one practical view.',
    recommendedZoneIds: ['backyard-property', 'basement-utility'],
  },
];

export type ExperienceCategory = {
  slug: string;
  name: string;
  summary: string;
  concern: string;
  outcome: string;
  zones: string[];
  route: string;
};

export type ExperienceSolution = {
  slug: string;
  name: string;
  summary: string;
};

export const smartPropertyHero = {
  eyebrow: 'WNY Home Security · Smart Property Systems',
  headline: 'One property. One coordinated system. Built to grow with you.',
  supportingMessage:
    'WNY Home Security professionally designs and installs unified smart-property systems around your property, priorities, and everyday routines—not a collection of disconnected gadgets.',
  primaryCta: 'Explore the Smart Property Experience',
  secondaryCta: 'Browse the Six Categories',
};

export const experienceCategories: ExperienceCategory[] = [
  {
    slug: 'home-security',
    name: 'Home Security',
    summary: 'Entry, access, package, driveway, garage, camera, and away-property awareness.',
    concern: 'Knowing what is happening around the property’s everyday arrival and access points.',
    outcome:
      'Bring entry, driveway, garage, package, camera, and away-property awareness into one site-reviewed view.',
    zones: ['Front Door', 'Driveway', 'Garage', 'Backyard / Property'],
    route: '/categories/home-security',
  },
  {
    slug: 'aging-in-place',
    name: 'Aging in Place',
    summary: 'Accessible control, pathway visibility, and consent-aware household routines.',
    concern: 'Making everyday home routines easier to use while respecting independence and privacy.',
    outcome:
      'Support easier controls, pathway visibility, accessibility, and consent-aware non-medical routines after site review.',
    zones: ['Front Door', 'Living Area', 'Basement / Utility'],
    route: '/categories/aging-in-place',
  },
  {
    slug: 'home-safety',
    name: 'Home Safety',
    summary: 'Practical awareness for water, temperature, utility areas, air, and equipment conditions.',
    concern: 'Seeing changing property conditions before they are easy to notice during a normal day.',
    outcome:
      'Coordinate water, temperature, air, utility, equipment, sump, freezer, and condition awareness where supported.',
    zones: ['Living Area', 'Basement / Utility', 'Garage', 'Backyard / Property'],
    route: '/categories/home-safety',
  },
  {
    slug: 'home-automation',
    name: 'Home Automation',
    summary: 'Supported routines, scenes, entry, garage, lighting, and coordinated everyday controls.',
    concern: 'Reducing the number of separate actions needed for familiar property routines.',
    outcome:
      'Coordinate supported routines, scenes, entry, garage, lighting, and everyday controls around how the property is used.',
    zones: ['Front Door', 'Garage', 'Living Area', 'Backyard / Property'],
    route: '/categories/home-automation',
  },
  {
    slug: 'home-lighting',
    name: 'Home Lighting',
    summary: 'Pathway, arrival, exterior, scene, vacation, accessibility, and everyday lighting ideas.',
    concern: 'Making arrivals, pathways, and everyday spaces easier to see and use.',
    outcome:
      'Shape pathway, arrival, exterior, scene, accessibility, and everyday lighting where circuits and controls are compatible.',
    zones: ['Front Door', 'Driveway', 'Living Area', 'Backyard / Property'],
    route: '/categories/home-lighting',
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    summary: 'Property awareness and coordinated control for second homes, outbuildings, and shared sites.',
    concern: 'Keeping selected conditions understandable across more than one structure, area, or property.',
    outcome:
      'Connect detached structures, second properties, outdoor areas, pools or hot tubs, utilities, and shared-site awareness after site review.',
    zones: ['Driveway', 'Garage', 'Basement / Utility', 'Backyard / Property'],
    route: '/categories/property-management',
  },
];

export const experienceSolutions: ExperienceSolution[] = [
  {
    slug: 'senior-safety',
    name: 'Household Independence',
    summary: 'Consent-aware visibility and practical routines designed around household expectations.',
  },
  {
    slug: 'water-protection',
    name: 'Water Awareness',
    summary: 'Earlier awareness of water in selected areas using supported, site-reviewed equipment.',
  },
  {
    slug: 'family-awareness',
    name: 'Family Awareness',
    summary: 'Selected household notifications and practical property visibility.',
  },
  {
    slug: 'vacation-homes',
    name: 'Seasonal Property Awareness',
    summary: 'A clearer view of selected property conditions when a site is not routinely occupied.',
  },
];

export const findExperienceCategory = (slug?: string) =>
  experienceCategories.find((category) => category.slug === slug);

export const findExperienceSolution = (slug?: string) =>
  experienceSolutions.find((solution) => solution.slug === slug);

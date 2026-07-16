export type ExperienceCategory = {
  slug: string;
  name: string;
  summary: string;
};

export type ExperienceSolution = {
  slug: string;
  name: string;
  summary: string;
};

export const experienceCategories: ExperienceCategory[] = [
  {
    slug: 'home-security',
    name: 'Home Security',
    summary: 'Entry, access, package, driveway, garage, camera, and away-property awareness.',
  },
  {
    slug: 'aging-in-place',
    name: 'Aging in Place',
    summary: 'Accessible control, pathway visibility, and consent-aware household routines.',
  },
  {
    slug: 'home-safety',
    name: 'Home Safety',
    summary: 'Practical awareness for water, temperature, utility areas, air, and equipment conditions.',
  },
  {
    slug: 'home-automation',
    name: 'Home Automation',
    summary: 'Supported routines, scenes, dashboards, modes, and coordinated everyday controls.',
  },
  {
    slug: 'home-lighting',
    name: 'Home Lighting',
    summary: 'Pathway, arrival, exterior, scene, vacation, accessibility, and everyday lighting ideas.',
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    summary: 'Property awareness and coordinated control for second homes, outbuildings, and shared sites.',
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

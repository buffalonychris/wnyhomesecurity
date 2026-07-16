export type PropertyScenario = {
  id: string;
  name: string;
  summary: string;
  categories: string[];
};

export const propertyScenarios: PropertyScenario[] = [
  {
    id: 'front-door',
    name: 'Front Door',
    summary:
      'When a package arrives, supported doorbell awareness can surface the event, coordinate reviewed access, and support a relock or secure-close reminder.',
    categories: ['Home Security', 'Home Automation'],
  },
  {
    id: 'driveway',
    name: 'Driveway',
    summary:
      'A supported camera or sensor can add arrival awareness and coordinate exterior lighting without treating every movement as a confirmed threat.',
    categories: ['Home Security', 'Home Automation', 'Home Lighting'],
  },
  {
    id: 'garage',
    name: 'Garage',
    summary:
      'If the garage appears left open, the system can surface its status, offer a supported close action, and coordinate lighting shutdown with visual verification where supported.',
    categories: ['Home Security', 'Home Automation', 'Home Lighting'],
  },
  {
    id: 'basement-utility',
    name: 'Basement / Utility',
    summary:
      'Selected leak, sump, freezer, temperature, or utility conditions can become visible sooner, with optional shutoff coordination where compatible.',
    categories: ['Home Safety', 'Home Automation', 'Property Management'],
  },
  {
    id: 'aging-in-place-living-area',
    name: 'Aging-in-Place Living Area',
    summary:
      'Pathway lighting, easier controls, and consent-aware household routines can support everyday independence through non-medical awareness.',
    categories: ['Aging in Place', 'Home Automation', 'Home Lighting'],
  },
  {
    id: 'backyard-property',
    name: 'Backyard / Property',
    summary:
      'Supported exterior lighting, pool or hot-tub awareness, and detached-structure or second-property signals can share one reviewed view.',
    categories: ['Home Safety', 'Home Automation', 'Home Lighting', 'Property Management'],
  },
];

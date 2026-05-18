export type OurWorkGalleryCategory =
  | 'Residential Security'
  | 'Outdoor Protection'
  | 'Smart Home Control'
  | 'Water & Leak Protection'
  | 'Commercial Security'
  | 'Family Safety';

export type OurWorkGalleryItem = {
  slug: string;
  title: string;
  category: OurWorkGalleryCategory;
  image: string;
  alt: string;
  description: string;
  featured: boolean;
  priority: number;
};

export const ourWorkGallery: OurWorkGalleryItem[] = [
  {
    slug: 'buffalo-fade-co-night',
    title: 'Buffalo Fade Co. Night Presence',
    category: 'Commercial Security',
    image: '/images/our-work/Buffalo Fade Co. barbershop at night.png',
    alt: 'Buffalo Fade Co. storefront at night with warm lighting and clear exterior visibility.',
    description: 'Commercial storefront visibility setup designed for clear nighttime awareness.',
    featured: true,
    priority: 1,
  },
  {
    slug: 'snowy-night-check',
    title: 'Snowy Night Exterior Check',
    category: 'Outdoor Protection',
    image: '/images/our-work/Checking security on a snowy night.png',
    alt: 'Snow-covered driveway and home exterior monitored at night.',
    description: 'Practical perimeter coverage for winter conditions across Western New York.',
    featured: true,
    priority: 2,
  },
  {
    slug: 'cozy-barber-wet-night',
    title: 'Rainy Night Barbershop Coverage',
    category: 'Commercial Security',
    image: '/images/our-work/Cozy barber shop on a wet night.png',
    alt: 'Cozy barber shop on a rainy night with warm exterior lighting.',
    description: 'Street-facing visibility for small business entries in wet weather.',
    featured: false,
    priority: 9,
  },
  {
    slug: 'cozy-cafe-night',
    title: 'Café Evening Visibility',
    category: 'Commercial Security',
    image: '/images/our-work/Cozy café night with warm ambiance.png',
    alt: 'Neighborhood café at night with warm lighting and clear entry perspective.',
    description: 'Balanced camera and lighting placement around a high-traffic small business entrance.',
    featured: false,
    priority: 10,
  },
  {
    slug: 'family-night-smart-security',
    title: 'Family Night Smart Protection',
    category: 'Family Safety',
    image: '/images/our-work/Cozy family night with smart home security.png',
    alt: 'Family living room at night with integrated smart security controls.',
    description: 'Comfort-first layout with smart alerts and practical coverage for everyday life.',
    featured: true,
    priority: 3,
  },
  {
    slug: 'hallway-smart-security',
    title: 'Hallway Security Integration',
    category: 'Residential Security',
    image: '/images/our-work/Cozy hallway and smart security system.png',
    alt: 'Interior hallway with discreet smart security system integration.',
    description: 'Clean residential installs designed to blend into the home while staying effective.',
    featured: false,
    priority: 11,
  },
  {
    slug: 'cozy-home-smart-security',
    title: 'Cozy Home Smart Security',
    category: 'Residential Security',
    image: '/images/our-work/Cozy home interior with smart security.png',
    alt: 'Cozy home interior using modern smart security devices.',
    description: 'Custom security systems that stay practical, clean, and easy to use.',
    featured: false,
    priority: 12,
  },
  {
    slug: 'entryway-dusk',
    title: 'Dusk Entryway Protection',
    category: 'Outdoor Protection',
    image: '/images/our-work/Cozy modern entryway at dusk.png',
    alt: 'Modern entryway at dusk with strong approach visibility.',
    description: 'Front-entry planning built for clear arrivals and dependable outdoor awareness.',
    featured: true,
    priority: 4,
  },
  {
    slug: 'smart-home-night-scene',
    title: 'Night Smart Home Scene',
    category: 'Smart Home Control',
    image: '/images/our-work/Cozy smart home night scene.png',
    alt: 'Smart home environment at night with calm ambient lighting.',
    description: 'Automation and camera systems tuned for realistic nighttime routines.',
    featured: false,
    priority: 13,
  },
  {
    slug: 'basement-leak-detection',
    title: 'Basement Leak Detection Coverage',
    category: 'Water & Leak Protection',
    image: '/images/our-work/Organized basement utility with leak detection system.png',
    alt: 'Organized basement utility area with leak detection hardware installed.',
    description: 'Early warning water and leak protection in critical utility areas.',
    featured: true,
    priority: 5,
  },
  {
    slug: 'rainy-alley-visibility',
    title: 'Rainy Exterior Visibility',
    category: 'Outdoor Protection',
    image: '/images/our-work/Rainy alley lit by warm lights.png',
    alt: 'Rainy alley and exterior access path lit for improved visibility.',
    description: 'Exterior lighting and camera alignment focused on real-world weather and motion.',
    featured: false,
    priority: 14,
  },
  {
    slug: 'living-space-smart-control',
    title: 'Living Space Smart Control',
    category: 'Smart Home Control',
    image: '/images/our-work/Smart home control in cozy living space.png',
    alt: 'Smart home control panel integrated into a cozy living room.',
    description: 'Simple everyday control of camera, alarm, and automation systems.',
    featured: true,
    priority: 6,
  },
  {
    slug: 'suburban-night-camera',
    title: 'Suburban Night Camera Coverage',
    category: 'Outdoor Protection',
    image: '/images/our-work/Suburban night with cars and security camera.png',
    alt: 'Suburban night street scene with visible security camera coverage.',
    description: 'Perimeter planning for driveways, curb approach, and parked vehicles.',
    featured: false,
    priority: 15,
  },
  {
    slug: 'patio-dusk-reflections',
    title: 'Patio Dusk Perimeter View',
    category: 'Residential Security',
    image: '/images/our-work/Suburban patio at dusk with reflections.png',
    alt: 'Suburban patio at dusk with reflective surfaces and perimeter sight lines.',
    description: 'Backyard and patio coverage that supports practical nightly use.',
    featured: false,
    priority: 16,
  },
  {
    slug: 'mechanical-room-organization',
    title: 'Mechanical Room Organization',
    category: 'Water & Leak Protection',
    image: '/images/our-work/Well-organized home mechanical room.png',
    alt: 'Well-organized home mechanical room prepared for monitoring and leak detection.',
    description: 'Utility-room protection strategy with clean layout and alert-ready devices.',
    featured: false,
    priority: 17,
  },
  {
    slug: 'winter-suburban-home',
    title: 'Winter Suburban Home Security',
    category: 'Family Safety',
    image: '/images/our-work/Winter night at a suburban home.png',
    alt: 'Suburban home exterior at winter night with visible approach lighting.',
    description: 'Local-first system design for seasonal weather and family routines.',
    featured: false,
    priority: 18,
  },
  {
    slug: 'winter-driveway-lights',
    title: 'Winter Driveway Lighting & Awareness',
    category: 'Outdoor Protection',
    image: '/images/our-work/Winter night with warm driveway lights.png',
    alt: 'Winter driveway at night with warm approach lighting.',
    description: 'Driveway-focused visibility with smart alerts for practical protection.',
    featured: true,
    priority: 7,
  },
];

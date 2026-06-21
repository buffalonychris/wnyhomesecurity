import { Link } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { estimatePath, offeringsPath } from '../content/wnyhsOfferCatalog';
import { buildTel, wnyhsContact } from '../content/wnyhsContact';

type ImageSpec = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

type CategoryScene = ImageSpec & {
  title: string;
};

type FeaturedSolution = ImageSpec & {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type CategoryLandingConfig = {
  slug: string;
  routeLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  hero: ImageSpec;
  revealEyebrow: string;
  revealHeadline: string;
  revealDescription: string;
  outcomes: readonly string[];
  revealImage: ImageSpec;
  revealBaseImage?: ImageSpec;
  whatYouSee: string;
  whatWeSee: string;
  revealItems: readonly { label: string; body: string }[];
  lifeHeadline: string;
  dashboardCaption: string;
  mobileCaption: string;
  routineIntroTitle: string;
  routineIntroBody: string;
  scenes: readonly CategoryScene[];
  lifeCards: readonly { title: string; body: string }[];
  featuredEyebrow: string;
  featuredHeadline: string;
  featuredDescription: string;
  featuredSolutions: readonly FeaturedSolution[];
  coreHeadline: string;
  coreBody: readonly string[];
  coreItems: readonly string[];
  coreDashboard: ImageSpec;
  corePhone: ImageSpec;
  catalogEyebrow: string;
  catalogHeadline: string;
  catalogDescription: string;
  catalogItems: readonly string[];
  customHeadline: string;
  customDescription: string;
  customBody: readonly string[];
  customBullets: readonly string[];
};

const commonImages = {
  dashboard: {
    src: '/images/home-security/homepage/WNYHSCoreDashboard.png',
    alt: 'WNYHS Core dashboard showing supported home systems in one clean view',
    width: '1536',
    height: '1024',
  },
  phone: {
    src: '/images/home-security/homepage/WNYHSCorePhone.png',
    alt: 'WNYHS Core phone view for supported home awareness and control',
    width: '1024',
    height: '1536',
  },
} as const;

const coreExpansionText =
  'The same WNYHS Core foundation can support other WNYHS categories later without starting over. Dashboards are built around the solutions you choose, supported local automations can keep running during internet interruptions, and equipment or data can stay customer-owned where supported.';

export const homeSecurityCategoryConfig: CategoryLandingConfig = {
  slug: 'home-security',
  routeLabel: 'Home Security',
  eyebrow: 'Home Security',
  headline: 'Property Awareness Without Alarm-Company Pressure.',
  description:
    'Smarter entry, access, camera, package, driveway, and away routines planned around your property and owned by you.',
  hero: {
    src: '/images/home-security/homepage/category-home-security.png',
    alt: 'Exterior home entry planned for smart property awareness',
    width: '1536',
    height: '1024',
  },
  revealEyebrow: 'Property Awareness Reveal',
  revealHeadline: 'Your home already has the places people care about most.',
  revealDescription: 'WNYHS helps organize doors, driveways, packages, cameras, and routines into a practical home-owned view.',
  outcomes: ['Entry awareness', 'Package visibility', 'Camera review', 'Away routines'],
  revealImage: {
    src: '/images/home-security/homepage/category-home-security.png',
    alt: 'Home security reveal showing selected property awareness opportunities',
    width: '1536',
    height: '1024',
  },
  whatYouSee: 'A front door, driveway, garage, and package area.',
  whatWeSee: 'Practical places to improve awareness, access, and everyday property visibility.',
  revealItems: [
    { label: 'Entry', body: 'See selected doors and access points in one place.' },
    { label: 'Packages', body: 'Know when deliveries arrive at the front door.' },
    { label: 'Driveway', body: 'Add awareness for vehicles and visitors where placement supports it.' },
    { label: 'Cameras', body: 'Review supported camera views without national alarm-company pressure.' },
    { label: 'Away', body: 'Coordinate selected alerts and routines when nobody is home.' },
    { label: 'Access', body: 'Plan guest or caregiver access with supported locks and clear rules.' },
  ],
  lifeHeadline: 'Know more about the ordinary moments around your property.',
  dashboardCaption: 'See entry, camera, package, garage, and away status from one clean dashboard.',
  mobileCaption: 'Check supported property awareness from your phone when you need to.',
  routineIntroTitle: 'Popular Security Routines',
  routineIntroBody: 'Everyday routines can combine entry, package, camera, driveway, and away awareness.',
  scenes: [
    {
      title: 'Front Door',
      src: '/images/home-security/homepage/solution-package-protection.png',
      alt: 'Front door package awareness scene',
    },
    {
      title: 'Driveway',
      src: '/images/home-security/homepage/solution-driveway-watch.png',
      alt: 'Driveway awareness scene',
    },
    {
      title: 'Garage',
      src: '/images/solutions/connected-garage-workshop.png',
      alt: 'Garage and workshop awareness scene',
    },
    {
      title: 'Access',
      src: '/images/solutions/front-door-package-protection.png',
      alt: 'Smart entry and access awareness scene',
    },
    {
      title: 'Away',
      src: '/images/home-security/solutions/solutions-vacation-hero.png',
      alt: 'Away property awareness scene',
    },
  ],
  lifeCards: [
    { title: 'Property In One View', body: 'Bring selected doors, cameras, packages, and garage status into one dashboard.' },
    { title: 'Less App Hopping', body: 'Use a cleaner customer-owned foundation where supported equipment allows it.' },
    { title: 'Practical Alerts', body: 'Shape selected alerts around the property areas you actually care about.' },
  ],
  featuredEyebrow: 'Most Popular Home Security Solutions',
  featuredHeadline: 'Start with everyday property concerns.',
  featuredDescription: 'These are the home security outcomes homeowners ask about most often.',
  featuredSolutions: [
    {
      title: 'Smart Entry & Access Management',
      body: 'Plan supported locks, access codes, and entry awareness around family, guests, and service visits.',
      src: '/images/solutions/front-door-package-protection.png',
      alt: 'Smart entry and access management at a front door',
      href: `${offeringsPath}#solution-smart-entry`,
      cta: 'Learn more',
    },
    {
      title: 'Video Doorbell & Package Awareness',
      body: 'Improve front-door and package-area visibility with supported hardware and selected alerts.',
      src: '/images/home-security/homepage/solution-package-protection.png',
      alt: 'Front porch package awareness and video doorbell planning',
      href: `${offeringsPath}#solution-front-door-package-protection`,
      cta: 'Learn more',
    },
    {
      title: 'Property Camera Awareness',
      body: 'Use site-reviewed camera views for practical visibility around the property.',
      src: '/images/solutions/smart-home-security.png',
      alt: 'Property camera awareness for a smart home',
      href: `${offeringsPath}#solution-local-camera-awareness`,
      cta: 'Talk through cameras',
    },
    {
      title: 'Arrival / Away Security Routines',
      body: 'Coordinate selected lighting, access, cameras, and alerts for arrival and away moments.',
      src: '/images/home-security/solutions/solutions-vacation-hero.png',
      alt: 'Away routine for property awareness',
      href: `${offeringsPath}#solution-away-night-vacation-modes`,
      cta: 'Learn more',
    },
  ],
  coreHeadline: 'A local-first foundation for property awareness and security.',
  coreBody: [
    'Home Security is one category powered by WNYHS Core. Your selected entry, camera, package, access, and away routines can be organized around one customer-owned foundation.',
    coreExpansionText,
  ],
  coreItems: [
    'Entry, package, camera, and access awareness today',
    'Future supported safety, lighting, automation, and aging-in-place additions',
    'Dashboard and mobile views built around your selected property concerns',
    'Supported local automations can keep running during an internet interruption',
    'Customer-owned equipment and data where supported',
  ],
  coreDashboard: commonImages.dashboard,
  corePhone: {
    src: '/images/home-security/homepage/category-home-security.png',
    alt: 'Home security category scene supporting WNYHS Core property awareness',
    width: '1536',
    height: '1024',
  },
  catalogEyebrow: 'Explore More Home Security Solutions',
  catalogHeadline: 'Browse More Home Security Ideas',
  catalogDescription: 'Explore additional property awareness and access solutions that can be reviewed for your home.',
  catalogItems: [
    'Garage Door Awareness',
    'Door / Window Left-Open Awareness',
    'Driveway Awareness',
    'Local Camera Property Awareness',
    'Front Door Package Protection',
    'Smart Lock & Guest Access',
    'Away / Night / Vacation Modes',
    'Notification Routing',
    'Detached Space Awareness',
    'And More Solutions',
  ],
  customHeadline: 'Have a property concern that is not listed?',
  customDescription: 'That is often where the best security plan starts.',
  customBody: [
    'Some homes need a custom mix of entry, driveway, camera, lighting, garage, or access awareness.',
    'WNY Home Security can talk through the property, site conditions, support needs, and customer goals before recommending the right path.',
  ],
  customBullets: [
    'Solutions are scoped around real property conditions.',
    'Camera and access scope is reviewed for privacy, wiring, placement, and support boundaries.',
    'Customer-owned equipment with no required monthly fees where supported.',
  ],
};

export const agingInPlaceCategoryConfig: CategoryLandingConfig = {
  slug: 'aging-in-place',
  routeLabel: 'Aging In Place',
  eyebrow: 'Aging In Place / Elder Safety',
  headline: 'Dignity, independence, and gentle home awareness.',
  description:
    'Support safer routines, pathway lighting, entry awareness, and caregiver-friendly visibility without making the home feel institutional.',
  hero: {
    src: '/images/home-security/homepage/category-aging-in-place.png',
    alt: 'Comfortable home interior planned for aging-in-place awareness',
    width: '1536',
    height: '1024',
  },
  revealEyebrow: 'Gentle Awareness Reveal',
  revealHeadline: 'Small household signals can help families stay informed.',
  revealDescription: 'The goal is practical awareness and dignity, not turning the home into a facility.',
  outcomes: ['Night pathway visibility', 'Gentle activity awareness', 'Door awareness', 'Caregiver check-ins'],
  revealImage: {
    src: '/images/home-security/homepage/category-aging-in-place.png',
    alt: 'Aging-in-place reveal showing gentle awareness opportunities in a comfortable home',
    width: '1536',
    height: '1024',
  },
  whatYouSee: 'A normal, comfortable home.',
  whatWeSee: 'Ways to support independence, movement, and family visibility with consent-aware planning.',
  revealItems: [
    { label: 'Pathways', body: 'Support nighttime movement with low-glare lighting where supported.' },
    { label: 'Activity', body: 'Surface gentle household activity patterns without making the home feel clinical.' },
    { label: 'Entry', body: 'Add selected door and entry awareness for important routines.' },
    { label: 'Check-ins', body: 'Create dashboard views for approved family check-in signals.' },
    { label: 'Comfort', body: 'Include comfort and temperature awareness where supported equipment fits.' },
    { label: 'Access', body: 'Plan trusted access for caregivers, family, or service visits.' },
  ],
  lifeHeadline: 'Support independence without making the home feel different.',
  dashboardCaption: 'See approved household awareness signals and check-in details from one clean view.',
  mobileCaption: 'Family or caregivers can check supported dashboard views where remote access is configured.',
  routineIntroTitle: 'Popular Aging-In-Place Routines',
  routineIntroBody: 'Practical routines can support pathways, doors, activity, comfort, and family check-ins.',
  scenes: [
    {
      title: 'SafePath Night Lighting',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'Night pathway lighting scene for safer movement',
    },
    {
      title: 'Family Awareness',
      src: '/images/home-security/homepage/solution-family-awareness.png',
      alt: 'Family awareness scene for aging-in-place support',
    },
    {
      title: 'Entry Awareness',
      src: '/images/home-security/homepage/category-aging-in-place.png',
      alt: 'Comfortable entry awareness scene for an older adult at home',
    },
    {
      title: 'Check-In Dashboard',
      src: '/images/home-security/solutions/solutions-awareness-sample.png',
      alt: 'Family check-in dashboard sample',
    },
    {
      title: 'Comfort Awareness',
      src: '/images/home-security/solutions/solutions-aging-hero.png',
      alt: 'Comfortable home scene for aging-in-place awareness',
    },
  ],
  lifeCards: [
    { title: 'Quiet Confidence', body: 'Support everyday routines without making the home feel watched or institutional.' },
    { title: 'Family Visibility', body: 'Create approved views for check-ins, entry events, and selected home status.' },
    { title: 'Expandable Support', body: 'Add lighting, access, comfort, or home security pieces later where supported.' },
  ],
  featuredEyebrow: 'Most Popular Aging-In-Place Solutions',
  featuredHeadline: 'Start with gentle support for daily routines.',
  featuredDescription: 'These examples focus on dignity, independence, and household visibility.',
  featuredSolutions: [
    {
      title: 'SafePath Night Lighting',
      body: 'Low-glare pathway lighting can support nighttime movement along selected routes.',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'SafePath night lighting for selected home pathways',
      href: `${offeringsPath}#solution-night-path-lighting`,
      cta: 'Learn more',
    },
    {
      title: 'Gentle Activity Awareness',
      body: 'Approved household signals can help families understand everyday activity patterns.',
      src: '/images/home-security/homepage/solution-family-awareness.png',
      alt: 'Gentle activity awareness in a home setting',
      href: '/solutions/family-awareness',
      cta: 'View solution',
    },
    {
      title: 'Door / Entry Awareness',
      body: 'Selected entry awareness can support daily routines, arrivals, and trusted access.',
      src: '/images/home-security/homepage/category-aging-in-place.png',
      alt: 'Door and entry awareness for aging-in-place support',
      href: `${offeringsPath}#solution-entry-exit-older-adult`,
      cta: 'Learn more',
    },
    {
      title: 'Caregiver Check-In Dashboard',
      body: 'Dashboard views can be shaped around approved signals and practical family check-ins.',
      src: '/images/home-security/solutions/solutions-awareness-sample.png',
      alt: 'Caregiver check-in dashboard sample for supported home awareness',
      href: `${offeringsPath}#solution-family-check-in-dashboard`,
      cta: 'Talk through this',
    },
  ],
  coreHeadline: 'A local-first foundation for family awareness and independence.',
  coreBody: [
    'Aging In Place is one category powered by WNYHS Core. The same foundation can organize supported pathway, activity, entry, comfort, and family check-in views around the person and home.',
    coreExpansionText,
  ],
  coreItems: [
    'Pathway, activity, entry, and check-in awareness today',
    'Future supported security, lighting, automation, and home safety additions',
    'Dashboards built around chosen family and household visibility',
    'Supported local automations can keep running during an internet interruption',
    'Customer-owned equipment and data where supported',
  ],
  coreDashboard: commonImages.dashboard,
  corePhone: {
    src: '/images/home-security/homepage/category-aging-in-place.png',
    alt: 'Aging-in-place category scene supporting WNYHS Core',
    width: '1536',
    height: '1024',
  },
  catalogEyebrow: 'Explore More Aging-In-Place Solutions',
  catalogHeadline: 'Browse More Supportive Home Ideas',
  catalogDescription: 'Explore additional gentle awareness, lighting, access, and comfort solutions.',
  catalogItems: [
    'Family Awareness',
    'Senior Safety / Aging-in-Place Awareness',
    'Entry / Exit Awareness',
    'Help Button / Assistance Trigger',
    'Family Check-In Dashboard',
    'Night Path Lighting',
    'Comfort & Temperature Awareness',
    'Notification Routing',
    'Trusted Access Planning',
    'And More Solutions',
  ],
  customHeadline: 'Need support for a specific routine?',
  customDescription: 'Many aging-in-place projects start with one real household concern.',
  customBody: [
    'If there is a nighttime route, door routine, family check-in need, or comfort issue that does not fit neatly into a preset package, WNYHS can talk through it.',
    'The goal is practical support that respects dignity, privacy, site conditions, and family expectations.',
  ],
  customBullets: [
    'Supportability, consent, and privacy are reviewed before recommendations.',
    'Final scope depends on equipment, layout, power, connectivity, and household goals.',
    'Customer-owned equipment with no required monthly fees where supported.',
  ],
};

export const homeSafetyCategoryConfig: CategoryLandingConfig = {
  slug: 'home-safety',
  routeLabel: 'Home Safety',
  eyebrow: 'Home Safety / Environmental Safety',
  headline: 'Catch household problems earlier.',
  description:
    'Water, freeze, sump, utility room, air quality, and comfort awareness for the everyday risks that can become expensive.',
  hero: {
    src: '/images/home-security/homepage/category-environmental-safety.png',
    alt: 'Home utility area planned for environmental safety awareness',
    width: '1536',
    height: '1024',
  },
  revealEyebrow: 'Home Safety Reveal',
  revealHeadline: 'Utility rooms and basements can tell you more than you think.',
  revealDescription: 'WNYHS helps surface practical home condition signals before small issues become harder to deal with.',
  outcomes: ['Water awareness', 'Freeze awareness', 'Sump visibility', 'Air and comfort checks'],
  revealImage: {
    src: '/images/home-security/homepage/category-environmental-safety.png',
    alt: 'Environmental safety reveal showing utility and basement awareness opportunities',
    width: '1536',
    height: '1024',
  },
  whatYouSee: 'A basement, sump, utility room, and comfort equipment.',
  whatWeSee: 'Places where practical awareness can help you notice water, temperature, sump, and air conditions earlier.',
  revealItems: [
    { label: 'Water', body: 'Know when water appears in selected areas.' },
    { label: 'Freeze', body: 'Add temperature awareness for scoped cold-weather spaces.' },
    { label: 'Sump', body: 'Surface sump-area status where sensor placement is practical.' },
    { label: 'Utility', body: 'Bring basement and utility-room awareness into one view.' },
    { label: 'Air', body: 'Include air quality or comfort awareness where supported equipment fits.' },
    { label: 'Alerts', body: 'Route selected alerts to the right people for the reviewed scope.' },
  ],
  lifeHeadline: 'Make hidden home conditions easier to understand.',
  dashboardCaption: 'See selected water, temperature, sump, utility, and comfort signals in one dashboard.',
  mobileCaption: 'Check supported home safety alerts and status from a phone where remote access is configured.',
  routineIntroTitle: 'Popular Home Safety Routines',
  routineIntroBody: 'Routines can combine water, temperature, sump, utility, and comfort awareness.',
  scenes: [
    {
      title: 'Leak Awareness',
      src: '/images/home-security/solutions/solutions-water-hero.png',
      alt: 'Water leak awareness in a utility area',
    },
    {
      title: 'Freeze Awareness',
      src: '/images/home-security/homepage/category-environmental-safety.png',
      alt: 'Temperature and freeze awareness in a utility space',
    },
    {
      title: 'Utility Room',
      src: '/images/home-security/homepage/package-basement-utility-protection.png',
      alt: 'Basement and utility room awareness',
    },
    {
      title: 'Sump Area',
      src: '/images/home-security/homepage/solution-sump-pump-awarenes.png',
      alt: 'Sump area awareness scene',
    },
    {
      title: 'Comfort',
      src: '/images/home-security/homepage/solution-water-damage-prevention.png',
      alt: 'Home condition awareness scene',
    },
  ],
  lifeCards: [
    { title: 'Earlier Awareness', body: 'Selected alerts can help you notice water, temperature, or utility-room changes sooner.' },
    { title: 'One Home View', body: 'Bring practical environmental signals into the same Core dashboard as other supported systems.' },
    { title: 'Seasonal Readiness', body: 'Plan for WNY freeze, sump, basement, and utility-room concerns before the next season.' },
  ],
  featuredEyebrow: 'Most Popular Home Safety Solutions',
  featuredHeadline: 'Start with the problem areas homeowners worry about most.',
  featuredDescription: 'These solutions focus on practical awareness, not absolute prevention promises.',
  featuredSolutions: [
    {
      title: 'Leak & Water Awareness',
      body: 'Earlier awareness when water appears in selected areas like sinks, basements, or utility rooms.',
      src: '/images/home-security/solutions/solutions-water-hero.png',
      alt: 'Leak and water awareness in a home utility area',
      href: '/solutions/water-protection',
      cta: 'View solution',
    },
    {
      title: 'Freeze / Temperature Awareness',
      body: 'Selected temperature awareness for scoped areas during WNY cold-weather routines.',
      src: '/images/home-security/homepage/category-environmental-safety.png',
      alt: 'Temperature awareness for utility and basement spaces',
      href: `${offeringsPath}#solution-freeze-risk-awareness`,
      cta: 'Learn more',
    },
    {
      title: 'Sump & Utility Room Awareness',
      body: 'Bring sump-area, utility-room, water, humidity, and temperature signals into a cleaner view.',
      src: '/images/home-security/homepage/package-basement-utility-protection.png',
      alt: 'Sump and utility room awareness equipment',
      href: `${offeringsPath}#solution-basement-utility-awareness`,
      cta: 'Learn more',
    },
    {
      title: 'Air Quality / Comfort Awareness',
      body: 'Review supported comfort and air condition signals as part of a practical home safety plan.',
      src: '/images/home-security/homepage/solution-water-damage-prevention.png',
      alt: 'Home comfort and condition awareness scene',
      href: estimatePath,
      cta: 'Talk through this',
    },
  ],
  coreHeadline: 'A local-first foundation for practical home protection.',
  coreBody: [
    'Home Safety is one category powered by WNYHS Core. Water, temperature, sump, utility, air, and comfort awareness can connect to the same customer-owned foundation.',
    coreExpansionText,
  ],
  coreItems: [
    'Water, temperature, sump, and utility awareness today',
    'Future supported security, lighting, automation, and aging-in-place additions',
    'Dashboards built around chosen home condition signals',
    'Supported local automations can keep running during an internet interruption',
    'Customer-owned equipment and data where supported',
  ],
  coreDashboard: commonImages.dashboard,
  corePhone: {
    src: '/images/home-security/homepage/category-environmental-safety.png',
    alt: 'Environmental safety category scene supporting WNYHS Core',
    width: '1536',
    height: '1024',
  },
  catalogEyebrow: 'Explore More Home Safety Solutions',
  catalogHeadline: 'Browse More Environmental Safety Ideas',
  catalogDescription: 'Explore additional water, utility, temperature, comfort, and alert-routing ideas.',
  catalogItems: [
    'Water Leak Awareness',
    'Freeze Risk Awareness',
    'Basement & Utility Room Awareness',
    'Sump Area Awareness',
    'Comfort & Temperature Awareness',
    'Air Quality Awareness',
    'Notification Routing',
    'Workshop and Utility Spaces',
    'Custom Dashboards',
    'And More Solutions',
  ],
  customHeadline: 'Have a specific home condition concern?',
  customDescription: 'Older homes, basements, and utility spaces often need practical custom planning.',
  customBody: [
    'If there is a leak-prone area, cold corner, sump concern, utility-room issue, or comfort pattern you want to understand better, WNYHS can review it with you.',
    'Recommendations depend on site conditions, sensor placement, power, connectivity, equipment support, and homeowner goals.',
  ],
  customBullets: [
    'No absolute water, freeze, or damage prevention promises.',
    'Supported local alerts and automations are planned where equipment and site conditions allow.',
    'Customer-owned equipment with no required monthly fees where supported.',
  ],
};

export const homeLightingCategoryConfig: CategoryLandingConfig = {
  slug: 'home-lighting',
  routeLabel: 'Home Lighting',
  eyebrow: 'Home Lighting',
  headline: 'Lighting that supports how you live.',
  description:
    'Pathways, arrivals, evenings, outdoor spaces, vacations, and everyday scenes planned around comfort, visibility, and routines.',
  hero: {
    src: '/images/home-security/homepage/category-home-lighting.png',
    alt: 'Home exterior with planned lighting for arrival and outdoor visibility',
    width: '1536',
    height: '1024',
  },
  revealEyebrow: 'Lighting Reveal',
  revealHeadline: 'The right lighting can make daily routines feel easier.',
  revealDescription: 'WNYHS plans lighting around safety, comfort, arrival, outdoor spaces, and supported automation.',
  outcomes: ['Pathway visibility', 'Arrival lighting', 'Outdoor comfort', 'Evening scenes'],
  revealImage: {
    src: '/images/home-security/homepage/category-home-lighting.png',
    alt: 'Home lighting reveal showing exterior and pathway lighting opportunities',
    width: '1536',
    height: '1024',
  },
  whatYouSee: 'Switches, fixtures, paths, entries, and outdoor areas.',
  whatWeSee: 'Lighting routines that can support visibility, comfort, arrival, and everyday living.',
  revealItems: [
    { label: 'SafePath', body: 'Support selected nighttime routes with low-glare pathway lighting.' },
    { label: 'Arrival', body: 'Bring entry or driveway lighting into arrival routines.' },
    { label: 'Outdoor', body: 'Plan landscape or outdoor-living lighting where equipment supports it.' },
    { label: 'Evening', body: 'Create practical movie, dining, or wind-down scenes.' },
    { label: 'Away', body: 'Use supported lighting routines while you are out.' },
    { label: 'Controls', body: 'Keep familiar switches and controls where practical.' },
  ],
  lifeHeadline: 'Make lighting useful before you think about devices.',
  dashboardCaption: 'See selected lighting, scenes, pathways, and routines in one dashboard.',
  mobileCaption: 'Adjust supported lights or scenes from your phone where remote access is configured.',
  routineIntroTitle: 'Popular Lighting Routines',
  routineIntroBody: 'Lighting routines can support nighttime movement, arrivals, evenings, outdoor areas, and away modes.',
  scenes: [
    {
      title: 'SafePath',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'SafePath lighting for selected home pathways',
    },
    {
      title: 'Arrival',
      src: '/images/home-security/homepage/category-home-lighting.png',
      alt: 'Arrival lighting at a home exterior',
    },
    {
      title: 'Outdoor Living',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'Outdoor and landscape lighting scene',
    },
    {
      title: 'Evening Scene',
      src: '/images/category-pages/home-automation/movie-night-thumb.jpg',
      alt: 'Evening scene lighting thumbnail',
    },
    {
      title: 'Vacation Mode',
      src: '/images/category-pages/home-automation/vacation-mode-thumb.jpg',
      alt: 'Vacation lighting routine thumbnail',
    },
  ],
  lifeCards: [
    { title: 'Visibility Where It Matters', body: 'Support selected walkways, entries, driveways, and outdoor areas with practical routines.' },
    { title: 'Scenes Without Complexity', body: 'Use simple lighting behavior for evenings, arrivals, vacations, and everyday moments.' },
    { title: 'Built To Expand', body: 'Lighting can connect to future supported security, safety, automation, and aging-in-place work.' },
  ],
  featuredEyebrow: 'Most Popular Home Lighting Solutions',
  featuredHeadline: 'Start with the lighting moments people use every day.',
  featuredDescription: 'These solutions focus on visibility, comfort, routines, and practical supported controls.',
  featuredSolutions: [
    {
      title: 'SafePath Lighting',
      body: 'Low-glare pathway lighting for selected routes like halls, stairs, bathrooms, or entries.',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'SafePath lighting for selected home pathways',
      href: `${offeringsPath}#solution-night-path-lighting`,
      cta: 'Learn more',
    },
    {
      title: 'Arrival Lighting',
      body: 'Entry, driveway, and exterior lighting routines for reviewed circuits and supported controls.',
      src: '/images/home-security/homepage/category-home-lighting.png',
      alt: 'Arrival lighting around a home exterior',
      href: `${offeringsPath}#solution-entry-lighting-automation`,
      cta: 'Learn more',
    },
    {
      title: 'Outdoor / Landscape Lighting',
      body: 'Outdoor and landscape lighting reviewed around wiring, weather exposure, controls, and homeowner goals.',
      src: '/images/home-security/homepage/solution-security-lighting.png',
      alt: 'Outdoor and landscape lighting around a home',
      href: `${offeringsPath}#the-vault`,
      cta: 'Explore custom',
    },
    {
      title: 'Movie / Evening Scene Lighting',
      body: 'Practical lighting scenes for evenings, entertainment, dining, and wind-down routines.',
      src: '/images/category-pages/home-automation/solution-movie-night-scenes-thumb.jpg',
      alt: 'Movie and evening scene lighting thumbnail',
      href: estimatePath,
      cta: 'Talk through this',
    },
  ],
  coreHeadline: 'A local-first foundation for smarter lighting and visibility.',
  coreBody: [
    'Home Lighting is one category powered by WNYHS Core. Supported lighting scenes, arrival routines, pathway behavior, and outdoor lighting can be organized around the same customer-owned foundation.',
    coreExpansionText,
  ],
  coreItems: [
    'Pathway, arrival, outdoor, and scene lighting today',
    'Future supported security, home safety, automation, and aging-in-place additions',
    'Dashboards built around chosen lighting solutions',
    'Supported local automations can keep running during an internet interruption',
    'Customer-owned equipment and data where supported',
  ],
  coreDashboard: commonImages.dashboard,
  corePhone: {
    src: '/images/home-security/homepage/category-home-lighting.png',
    alt: 'Home lighting category scene supporting WNYHS Core',
    width: '1536',
    height: '1024',
  },
  catalogEyebrow: 'Explore More Home Lighting Solutions',
  catalogHeadline: 'Browse More Lighting Ideas',
  catalogDescription: 'Explore additional supported lighting, scenes, outdoor, and specialty ideas.',
  catalogItems: [
    'SafePath Lighting',
    'Arrival Lighting',
    'Entry Lighting Automation',
    'Outdoor / Landscape Lighting',
    'Daily Lighting Routines',
    'Movie / Evening Scenes',
    'Vacation Lighting Behavior',
    'Garage / Workshop Lighting',
    'Specialty Lighting',
    'And More Solutions',
  ],
  customHeadline: 'Have a lighting idea that does not fit a package?',
  customDescription: 'Lighting is often most useful when it matches the way the home is actually used.',
  customBody: [
    'If you want a path to light a certain way, an outdoor area to feel more usable, an evening scene to be simpler, or a seasonal lighting idea reviewed, WNYHS can talk through it.',
    'Custom lighting depends on circuits, loads, fixtures, weather exposure, equipment support, and installation boundaries.',
  ],
  customBullets: [
    'Final recommendations depend on site review and supported equipment.',
    'Supported local lighting automations can continue during internet interruptions.',
    'Customer-owned equipment with no required monthly fees where supported.',
  ],
};

const CategoryLandingPage = ({ config }: { config: CategoryLandingConfig }) => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  const revealBase = config.revealBaseImage;

  return (
    <WnyhsMarketingLayout ctaLink={estimatePath}>
      <div className="wnyhs-page wnyhs-shell hs-premium-shell hs-premium-shell--home-redesign wnyhs-category-landing">
        <section className="wnyhs-section wnyhs-section--dark wnyhs-category-hero" aria-labelledby={`${config.slug}-heading`}>
          <div className="wnyhs-category-hero-copy">
            <p className="wnyhs-eyebrow hs-premium-eyebrow">{config.eyebrow}</p>
            <h1 id={`${config.slug}-heading`} className="wnyhs-heading">
              {config.headline}
            </h1>
            <p className="wnyhs-description">{config.description}</p>
            <div className="wnyhs-inline-actions">
              <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
                Request Estimate
              </Link>
              <a className="wnyhs-button wnyhs-button--secondary btn btn-secondary" href={buildTel()}>
                Request Call
              </a>
            </div>
          </div>
          <figure className="wnyhs-category-hero-media wnyhs-card-media">
            <img
              src={config.hero.src}
              alt={config.hero.alt}
              width={config.hero.width ?? '1536'}
              height={config.hero.height ?? '1024'}
              loading="eager"
            />
          </figure>
        </section>

        <section className="wnyhs-section wnyhs-category-reveal" aria-labelledby={`${config.slug}-reveal-heading`}>
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">{config.revealEyebrow}</p>
            <h2 id={`${config.slug}-reveal-heading`} className="wnyhs-heading">
              {config.revealHeadline}
            </h2>
            <p className="wnyhs-description">{config.revealDescription}</p>
          </div>
          <div className="wnyhs-category-outcome-row" aria-label={`${config.routeLabel} outcomes`}>
            {config.outcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="wnyhs-category-reveal-layout">
            <figure className="wnyhs-category-reveal-media wnyhs-card-media" tabIndex={0}>
              <img
                className="wnyhs-category-reveal-image wnyhs-category-reveal-image--active"
                src={config.revealImage.src}
                alt={config.revealImage.alt}
                width={config.revealImage.width ?? '1536'}
                height={config.revealImage.height ?? '1024'}
                loading="lazy"
              />
              {revealBase && (
                <img
                  className="wnyhs-category-reveal-image wnyhs-category-reveal-image--base"
                  src={revealBase.src}
                  alt=""
                  width={revealBase.width ?? '1536'}
                  height={revealBase.height ?? '1024'}
                  loading="lazy"
                  aria-hidden="true"
                />
              )}
              <figcaption className="wnyhs-category-reveal-label">
                <span>What you see</span>
                {config.whatYouSee}
              </figcaption>
            </figure>
            <div className="wnyhs-category-reveal-opportunities">
              <div className="wnyhs-category-reveal-summary">
                <span>What we see</span>
                <p>{config.whatWeSee}</p>
              </div>
              <div className="wnyhs-category-reveal-grid" aria-label={`${config.routeLabel} opportunities`}>
                {config.revealItems.map((item) => (
                  <article key={item.label} className="wnyhs-card wnyhs-category-reveal-card">
                    <span>{item.label}</span>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="wnyhs-section" aria-labelledby={`${config.slug}-life-heading`}>
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">What Life Could Be Like</p>
            <h2 id={`${config.slug}-life-heading`} className="wnyhs-heading">
              {config.lifeHeadline}
            </h2>
          </div>
          <div className="wnyhs-category-control-proof">
            <figure className="wnyhs-category-proof-dashboard wnyhs-card-media">
              <img
                src={commonImages.dashboard.src}
                alt={commonImages.dashboard.alt}
                width={commonImages.dashboard.width}
                height={commonImages.dashboard.height}
                loading="lazy"
              />
              <figcaption className="wnyhs-category-proof-caption">
                <strong>Whole Home Dashboard</strong>
                <span>{config.dashboardCaption}</span>
              </figcaption>
            </figure>
            <figure className="wnyhs-category-proof-phone wnyhs-card-media">
              <img
                src={commonImages.phone.src}
                alt={commonImages.phone.alt}
                width={commonImages.phone.width}
                height={commonImages.phone.height}
                loading="lazy"
              />
              <figcaption className="wnyhs-category-proof-caption">
                <strong>Mobile App Access</strong>
                <span>{config.mobileCaption}</span>
              </figcaption>
            </figure>
          </div>
          <div className="wnyhs-category-routine-intro">
            <h3>{config.routineIntroTitle}</h3>
            <p>{config.routineIntroBody}</p>
          </div>
          <div className="wnyhs-category-scene-strip" aria-label={`${config.routeLabel} examples`}>
            {config.scenes.map((scene) => (
              <figure key={scene.title} className="wnyhs-category-scene-card wnyhs-card-media">
                <img src={scene.src} alt={scene.alt} loading="lazy" />
                <figcaption>{scene.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="wnyhs-category-card-grid wnyhs-category-card-grid--six">
            {config.lifeCards.map((item, index) => (
              <article key={item.title} className="wnyhs-card wnyhs-category-life-card">
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wnyhs-section wnyhs-section--solutions" aria-labelledby={`${config.slug}-featured-heading`}>
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">{config.featuredEyebrow}</p>
            <h2 id={`${config.slug}-featured-heading`} className="wnyhs-heading">
              {config.featuredHeadline}
            </h2>
            <p className="wnyhs-description">{config.featuredDescription}</p>
          </div>
          <div className="wnyhs-category-card-grid wnyhs-category-card-grid--four">
            {config.featuredSolutions.map((solution) => (
              <Link key={solution.title} className="wnyhs-card wnyhs-card--solution wnyhs-category-linked-card" to={solution.href}>
                <figure className="wnyhs-card-media wnyhs-category-solution-media">
                  <img src={solution.src} alt={solution.alt} loading="lazy" />
                </figure>
                <span className="wnyhs-eyebrow">Solution</span>
                <h3 className="wnyhs-card-title">{solution.title}</h3>
                <p className="wnyhs-card-copy">{solution.body}</p>
                <span className="wnyhs-category-card-cta">{solution.cta}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="wnyhs-section wnyhs-section--dark wnyhs-category-core" aria-labelledby={`${config.slug}-core-heading`}>
          <div>
            <p className="wnyhs-eyebrow hs-premium-eyebrow">WNYHS Core</p>
            <h2 id={`${config.slug}-core-heading`} className="wnyhs-heading">
              {config.coreHeadline}
            </h2>
            {config.coreBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul>
              {config.coreItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="hs-home-core-media" aria-label="WNYHS Core platform visuals">
            <img
              className="hs-home-core-dashboard wnyhs-category-core-whole-home"
              src={config.coreDashboard.src}
              alt={config.coreDashboard.alt}
              width={config.coreDashboard.width ?? '1536'}
              height={config.coreDashboard.height ?? '1024'}
              loading="lazy"
            />
            <img
              className="hs-home-core-phone"
              src={config.corePhone.src}
              alt={config.corePhone.alt}
              width={config.corePhone.width ?? '1536'}
              height={config.corePhone.height ?? '1024'}
              loading="lazy"
            />
            <img
              className="hs-home-core-logo"
              src="/images/home-security/homepage/core-logo-mark-on-black.png"
              alt="WNYHS Core logo mark"
              width="1254"
              height="1254"
              loading="lazy"
            />
          </figure>
        </section>

        <section className="wnyhs-section" aria-labelledby={`${config.slug}-catalog-heading`}>
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">{config.catalogEyebrow}</p>
            <h2 id={`${config.slug}-catalog-heading`} className="wnyhs-heading">
              {config.catalogHeadline}
            </h2>
            <p className="wnyhs-description">{config.catalogDescription}</p>
          </div>
          <div className="wnyhs-category-chip-grid" aria-label={`${config.routeLabel} solution catalog`}>
            {config.catalogItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="wnyhs-inline-actions">
            <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to={`${offeringsPath}#standard-planning-solutions`}>
              View All Solutions
            </Link>
          </div>
        </section>

        <section className="wnyhs-section wnyhs-category-custom-cta" aria-labelledby={`${config.slug}-custom-heading`}>
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Custom Solutions</p>
            <h2 id={`${config.slug}-custom-heading`} className="wnyhs-heading">
              {config.customHeadline}
            </h2>
            <p className="wnyhs-description">{config.customDescription}</p>
          </div>
          <div className="wnyhs-category-copy">
            {config.customBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="wnyhs-category-list">
            {config.customBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="wnyhs-inline-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
              Schedule a Consultation
            </Link>
          </div>
        </section>

        <section className="wnyhs-section hs-premium-final-cta-panel">
          <div className="hs-premium-final-cta-copy">
            <p className="wnyhs-eyebrow hs-premium-eyebrow">Primary CTA</p>
            <h2>Ready to talk through your home?</h2>
            <p>
              Request an estimate or call/text WNYHS to discuss categories, packages, and solutions that fit your property.
            </p>
          </div>
          <div className="hs-premium-final-cta-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimatePath}>
              Request Estimate
            </Link>
            <a className="wnyhs-button wnyhs-button--secondary btn btn-secondary" href={buildTel()}>
              Call / Text {wnyhsContact.phone.display}
            </a>
          </div>
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default CategoryLandingPage;

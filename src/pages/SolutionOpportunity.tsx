import { Link, useLocation } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';

type OpportunitySlug = 'senior-safety' | 'water-protection' | 'family-awareness' | 'vacation-homes';

type OpportunityPage = {
  slug: OpportunitySlug;
  eyebrow: string;
  title: string;
  intro: string;
  forWhom: string;
  problem: string;
  solution: string;
  outcome: string;
  wnyContext: string;
  features: string[];
  exampleScenario: string;
  secondaryLinks: { label: string; to: string }[];
};

const pages: Record<OpportunitySlug, OpportunityPage> = {
  'senior-safety': {
    slug: 'senior-safety',
    eyebrow: 'Senior Safety',
    title: 'Help an Aging Parent Live More Independently at Home',
    intro:
      'A Smart Property Solution can help families reduce uncertainty without making the home feel clinical or intrusive.',
    forWhom:
      'For families supporting an aging parent, grandparent, or loved one who wants independence while relatives want practical awareness.',
    problem:
      'Living alone can create unanswered questions: did they come through the door, is the house active today, did a light get left off, or did a routine change unexpectedly?',
    solution:
      'WNY Home Security can plan non-invasive awareness around doors, motion/activity patterns, lighting, smart entry, and simple family notifications when the equipment and setup support it.',
    outcome:
      'The household gets a calmer way to check in, support independence, and decide when a call or visit makes sense.',
    wnyContext:
      'Western New York families often balance older homes, winter routines, side entries, detached garages, and relatives spread across the region. The right setup should fit the home and the people using it.',
    features: [
      'Door and entry awareness',
      'Motion/activity awareness',
      'Lighting automation for normal routines',
      'Smart entry options',
      'Family notification planning where supported',
      'Customer-owned equipment with no required monthly fees',
    ],
    exampleScenario:
      'An aging parent wants to stay independent, while family members want a simple way to understand normal daily routines. A plan might focus on entry activity, a few routine-aware devices, and lighting that supports common paths through the home.',
    secondaryLinks: [
      { label: 'Compare Starting Points', to: '/packages?vertical=home-security' },
      { label: 'See Example Work', to: '/our-work?vertical=home-security' },
    ],
  },
  'water-protection': {
    slug: 'water-protection',
    eyebrow: 'Water Protection',
    title: 'Know Sooner About Water, Freeze, and Sump Concerns',
    intro:
      'Water problems can move quickly. A local smart property setup can help you notice common risk points sooner.',
    forWhom:
      'For homeowners worried about frozen pipes, water leaks, sump areas, basement utility spaces, and spring thaw conditions.',
    problem:
      'A leak, freeze concern, or sump issue can start in a basement, mechanical room, or utility area before anyone sees it.',
    solution:
      'WNY Home Security can place water sensors, temperature awareness, and practical alerts around the areas most likely to matter for the property.',
    outcome:
      'You get a clearer early-warning layer for high-risk areas, with final placement based on the home layout and site conditions.',
    wnyContext:
      'WNY winters, older housing stock, basement utilities, lake-effect weather, and spring thaw all make water and temperature awareness worth planning around before the next hard freeze or wet season.',
    features: [
      'Water sensor placement',
      'Temperature awareness',
      'Sump area awareness',
      'Basement and mechanical-room planning',
      'Alert routing for practical follow-up',
      'Customer-owned equipment with no required monthly fees',
    ],
    exampleScenario:
      'A homeowner is away during a cold stretch and wants better awareness around a basement utility area and sump location. A plan might include water placement, temperature awareness, and simple alert routing so the right person can decide on practical follow-up.',
    secondaryLinks: [
      { label: 'Compare Starting Points', to: '/packages?vertical=home-security' },
      { label: 'See Example Work', to: '/our-work?vertical=home-security' },
    ],
  },
  'family-awareness': {
    slug: 'family-awareness',
    eyebrow: 'Family Awareness',
    title: 'Know More About Doors, Driveways, Packages, and Daily Arrivals',
    intro:
      'Family awareness should feel practical, low-pressure, and built around household routines instead of a heavy-handed setup.',
    forWhom:
      'For parents and caregivers who want better visibility around kids arriving home, doors opening, garage use, packages, and driveway activity.',
    problem:
      'Busy households often want to know who came home, whether the garage was used, or when a package arrived without constantly checking multiple apps.',
    solution:
      'WNY Home Security can plan cameras, smart locks, door alerts, garage awareness, and package visibility around the normal flow of the home.',
    outcome:
      'The family gets a clearer picture of routine activity and fewer unknowns during the parts of the day that matter most.',
    wnyContext:
      'From school schedules to winter darkness, side doors, detached garages, and busy driveways, WNY homes need awareness that works around real family patterns.',
    features: [
      'Door and garage awareness',
      'Smart lock planning',
      'Driveway and package visibility',
      'Camera awareness for key approaches',
      'Simple alert planning',
      'Customer-owned equipment with no required monthly fees',
    ],
    exampleScenario:
      'A family wants less uncertainty around after-school arrivals, garage use, driveway activity, and packages. A plan might combine door awareness, garage awareness, camera placement for key approaches, and simple alerts tied to normal routines.',
    secondaryLinks: [
      { label: 'Compare Starting Points', to: '/packages?vertical=home-security' },
      { label: 'See Example Work', to: '/our-work?vertical=home-security' },
    ],
  },
  'vacation-homes': {
    slug: 'vacation-homes',
    eyebrow: 'Vacation Home Awareness',
    title: 'Keep Better Awareness of a Seasonal or Second Home While Away',
    intro:
      'A second home or seasonal property needs practical visibility when nobody is there every day.',
    forWhom:
      'For owners of vacation homes, seasonal properties, cabins, lake-area properties, or second homes who want practical remote awareness.',
    problem:
      'When you are away, small issues can sit unnoticed: temperature changes, water concerns, access questions, driveway activity, or a door that should not be open.',
    solution:
      'WNY Home Security can plan temperature awareness, water alerts, smart access, camera/property awareness, and remote check-in options around the property.',
    outcome:
      'You get a calmer way to check on the property between visits and decide when someone should take a closer look.',
    wnyContext:
      'Many WNY owners split time between a primary home and a seasonal property. Winter weather, water/freeze concerns, access events, and inconsistent internet service can all affect what belongs in the plan.',
    features: [
      'Temperature awareness',
      'Water and leak alerts',
      'Camera and property awareness',
      'Smart access planning',
      'Remote check-in options',
      'Customer-owned equipment with no required monthly fees',
    ],
    exampleScenario:
      'A seasonal property sits empty for stretches between visits. A plan might focus on temperature awareness, water points, access events, and camera placement for practical remote check-ins without implying a fixed package or one-size-fits-all setup.',
    secondaryLinks: [
      { label: 'Compare Starting Points', to: '/packages?vertical=home-security' },
      { label: 'See Example Work', to: '/our-work?vertical=home-security' },
    ],
  },
};

const getSlugFromPath = (pathname: string): OpportunitySlug => {
  const segments = pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];
  if (slug === 'senior-safety' || slug === 'water-protection' || slug === 'family-awareness' || slug === 'vacation-homes') {
    return slug;
  }
  return 'senior-safety';
};

const SolutionOpportunity = () => {
  const location = useLocation();
  const page = pages[getSlugFromPath(location.pathname)];

  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  return (
    <WnyhsMarketingLayout ctaLink="/contact?vertical=home-security">
      <div className="wnyhs-marketing-stack opportunity-page">
        <section className="card opportunity-hero">
          <div>
            <p className="eyebrow wnyhs-gallery-text-reset">{page.eyebrow}</p>
            <h1 className="wnyhs-gallery-text-reset">{page.title}</h1>
            <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">{page.intro}</p>
          </div>
          <div className="opportunity-hero-panel" aria-label="Solution positioning">
            <span>Local Smart Property Solutions</span>
            <span>No Required Monthly Fees</span>
            <span>Customer-Owned Equipment</span>
            <span>Professionally Installed & Locally Supported</span>
          </div>
          <div className="wnyhs-gallery-actions">
            <Link className="btn btn-primary" to="/contact?vertical=home-security">
              Request Estimate
            </Link>
            <Link className="btn btn-secondary" to="/discovery?vertical=home-security">
              Start Fit Check
            </Link>
          </div>
        </section>

        <section className="card opportunity-section" aria-labelledby={`${page.slug}-fit-heading`}>
          <p className="eyebrow wnyhs-gallery-text-reset">Who This Helps</p>
          <h2 id={`${page.slug}-fit-heading`} className="wnyhs-gallery-text-reset">Built around the homeowner problem</h2>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">{page.forWhom}</p>
        </section>

        <section className="card opportunity-section" aria-labelledby={`${page.slug}-story-heading`}>
          <p className="eyebrow wnyhs-gallery-text-reset">Problem / Solution / Outcome</p>
          <h2 id={`${page.slug}-story-heading`} className="wnyhs-gallery-text-reset">A practical way to think about the setup</h2>
          <div className="opportunity-three-up">
            <article>
              <h3>Problem</h3>
              <p>{page.problem}</p>
            </article>
            <article>
              <h3>Solution</h3>
              <p>{page.solution}</p>
            </article>
            <article>
              <h3>Outcome</h3>
              <p>{page.outcome}</p>
            </article>
          </div>
        </section>

        <section className="card opportunity-section" aria-labelledby={`${page.slug}-wny-heading`}>
          <p className="eyebrow wnyhs-gallery-text-reset">Western New York Context</p>
          <h2 id={`${page.slug}-wny-heading`} className="wnyhs-gallery-text-reset">Planned for local homes and real routines</h2>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">{page.wnyContext}</p>
        </section>

        <section className="card opportunity-section" aria-labelledby={`${page.slug}-features-heading`}>
          <p className="eyebrow wnyhs-gallery-text-reset">Safe Feature Examples</p>
          <h2 id={`${page.slug}-features-heading`} className="wnyhs-gallery-text-reset">Possible Pieces Of The Plan</h2>
          <div className="opportunity-feature-grid">
            {page.features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </section>

        <section className="card opportunity-section opportunity-scenario" aria-labelledby={`${page.slug}-scenario-heading`}>
          <p className="eyebrow wnyhs-gallery-text-reset">Example Scenario</p>
          <h2 id={`${page.slug}-scenario-heading`} className="wnyhs-gallery-text-reset">How this might look</h2>
          <p className="wnyhs-gallery-body wnyhs-gallery-body--wide">{page.exampleScenario}</p>
        </section>

        <section className="card opportunity-section opportunity-links" aria-labelledby={`${page.slug}-next-heading`}>
          <div>
            <p className="eyebrow wnyhs-gallery-text-reset">Next Step</p>
            <h2 id={`${page.slug}-next-heading`} className="wnyhs-gallery-text-reset">Talk through your property</h2>
            <p className="wnyhs-gallery-body">
              Final recommendations depend on layout, power, internet, entry points, and what you actually want to know sooner.
            </p>
          </div>
          <div className="wnyhs-gallery-actions">
            <Link className="btn btn-primary" to="/contact?vertical=home-security">
              Request Estimate
            </Link>
            <Link className="btn btn-secondary" to="/discovery?vertical=home-security">
              Start Fit Check
            </Link>
            {page.secondaryLinks.map((link) => (
              <Link key={link.to} className="btn btn-secondary" to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </WnyhsMarketingLayout>
  );
};

export default SolutionOpportunity;

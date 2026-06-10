import { Link } from 'react-router-dom';
import type { PackageTier } from '../../content/packages';
import { buildTel, wnyhsContact } from '../../content/wnyhsContact';
import '../../styles/homeSecurityPremium.css';

type Props = {
  packages: PackageTier[];
  ctaLink: string;
};

const categoryExplorer = [
  {
    name: 'Home Security',
    body: 'Entry, driveway, package, garage, and property awareness planned around the way your home is used.',
    focus: 'Doors, driveways, packages, garages',
  },
  {
    name: 'Aging-In-Place',
    body: 'Home awareness that helps families support independence, routines, safer movement, and caregiver access.',
    focus: 'Family confidence, routines, access',
  },
  {
    name: 'Environmental Safety',
    body: 'Practical awareness for water, sump, utility, freeze, and home condition concerns common in WNY properties.',
    focus: 'Water, sump, utility rooms',
  },
  {
    name: 'Home Automation',
    body: 'Connected routines, dashboard control, garage awareness, and everyday automations built on a local-first core.',
    focus: 'Control, routines, garage status',
  },
  {
    name: 'Home Lighting',
    body: 'Arrival, pathway, security, vacation, and outdoor lighting designed to improve visibility and usability.',
    focus: 'Arrival, pathways, outdoor living',
  },
] as const;

const featuredPackages = [
  {
    name: 'Property Awareness Package',
    summary: 'A discovery path for homeowners who want better visibility around entries, driveways, garages, and packages.',
    includes: ['Package Protection', 'Driveway Watch', 'Smart Entry'],
  },
  {
    name: 'Basement & Utility Protection Package',
    summary: 'A practical starting point for water, sump, utility room, and environmental concerns.',
    includes: ['Water Damage Prevention', 'Sump Pump Awareness', 'Utility Room Protection'],
  },
  {
    name: 'Family Confidence Package',
    summary: 'A homeowner-friendly path for aging-in-place awareness, safer movement, and trusted access.',
    includes: ['Family Awareness', 'Safer Night Movement', 'Caregiver Access'],
  },
] as const;

const featuredSolutions = [
  {
    name: 'Package Protection',
    category: 'Home Security',
    summary: 'Know when deliveries arrive and reduce the chance of packages being forgotten, exposed, or left unattended.',
  },
  {
    name: 'Driveway Watch',
    category: 'Home Security',
    summary: 'Gain awareness of vehicles and visitors entering the property before they reach the home.',
  },
  {
    name: 'Water Damage Prevention',
    category: 'Environmental Safety',
    summary: 'Detect water-related concerns early and improve awareness before major damage occurs.',
  },
  {
    name: 'Sump Pump Awareness',
    category: 'Environmental Safety',
    summary: 'Know when sump activity becomes abnormal or protection may be compromised.',
  },
  {
    name: 'Family Awareness',
    category: 'Aging-In-Place',
    summary: 'Help loved ones remain independent while giving family members greater confidence and awareness.',
  },
  {
    name: 'Security Lighting',
    category: 'Home Lighting',
    summary: 'Improve property visibility and awareness through strategically controlled lighting.',
  },
] as const;

const trustItems = ['Locally Owned', 'Customer-Owned', 'No Required Monthly Fees', 'Professional Installation', 'Built To Expand'] as const;

const coreItems = [
  'Home Assistant-based local control',
  'Unified dashboard for supported systems',
  'Customer-owned equipment and data',
  'No vendor lock-in',
  'Expansion-ready foundation',
] as const;

const whyItems = [
  {
    title: 'Local Planning',
    body: 'Recommendations are shaped around WNY homes, weather, property layouts, and how homeowners actually use their space.',
  },
  {
    title: 'Professional Installation',
    body: 'The goal is a clean installed system with clear ownership, practical handoff, and room to add more later.',
  },
  {
    title: 'Consultation First',
    body: 'The homepage points you toward a conversation and estimate path before committing you to a fixed package.',
  },
] as const;

const searchExamples = ['doorbell camera', 'basement leak', 'mom living alone', 'holiday lights'] as const;
const estimateLink = '/contact?vertical=home-security';

const HomeSecurityLanding = (_props: Props) => {
  void _props;

  return (
    <div className="hs-premium-shell hs-premium-shell--home-redesign">
      <section id="home-search" className="hs-home-search-access" aria-labelledby="home-search-heading">
        <div>
          <p className="hs-premium-eyebrow">Search Access</p>
          <h2 id="home-search-heading">Find the right starting point in your own words.</h2>
          <p>
            Search is planned for categories, packages, solutions, and public help pages. For now, use these examples
            as a guided entry point while full search indexing remains out of scope.
          </p>
        </div>
        <div className="hs-home-search-box" role="search" aria-label="Search placeholder">
          <span>Search WNYHS</span>
          <div className="hs-home-search-input" aria-hidden="true">
            Try: {searchExamples[0]}
          </div>
          <p>Placeholder only. Search results and query handling are not implemented in this task.</p>
        </div>
        <div className="hs-home-search-examples" aria-label="Example search terms">
          {searchExamples.map((term) => (
            <span key={term}>{term}</span>
          ))}
        </div>
      </section>

      <section className="hs-home-hero" aria-labelledby="home-hero-heading">
        <div className="hs-home-hero-copy">
          <p className="hs-premium-eyebrow">WNY Home Security</p>
          <h1 id="home-hero-heading">Smart home and security solutions built around your home.</h1>
          <p className="hs-premium-hero-subhead">
            Local planning for cameras, property awareness, environmental safety, automation, and lighting with a
            customer-owned core that can grow over time.
          </p>
          <div className="hs-premium-hero-actions">
            <Link className="btn btn-primary" to={estimateLink}>
              Request Estimate
            </Link>
            <a className="btn btn-secondary" href={buildTel()}>
              Call / Text {wnyhsContact.phone.display}
            </a>
          </div>
        </div>
        <figure className="hs-home-hero-media">
          <img src="/brand/heros/HomePageHero.png" alt="WNY Home Security smart home and security overview" loading="eager" />
        </figure>
      </section>

      <section className="hs-home-trust-bar" aria-label="WNY Home Security trust indicators">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section id="category-explorer" className="hs-premium-section-panel hs-home-section" aria-labelledby="category-explorer-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Category Explorer</p>
          <h2 id="category-explorer-heading">Start with the concern, not the hardware.</h2>
          <p>Choose a broad homeowner need first, then narrow into packages and solutions.</p>
        </div>
        <div className="hs-home-category-grid">
          {categoryExplorer.map((category) => (
            <article key={category.name} className="hs-home-category-card">
              <span>{category.name}</span>
              <h3>{category.focus}</h3>
              <p>{category.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-packages" className="hs-premium-section-panel hs-home-section" aria-labelledby="featured-packages-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Featured Packages</p>
          <h2 id="featured-packages-heading">Outcome-based paths for common homeowner situations.</h2>
          <p>Packages group related approved solutions without turning the homepage into pricing tiers.</p>
        </div>
        <div className="hs-home-package-grid">
          {featuredPackages.map((item) => (
            <article key={item.name} className="hs-home-package-card">
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.includes.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-solutions" className="hs-premium-section-panel hs-home-section" aria-labelledby="featured-solutions-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Featured Solutions</p>
          <h2 id="featured-solutions-heading">A selected sample from the approved solution catalog.</h2>
          <p>These examples represent multiple categories and do not replace a full solution catalog.</p>
        </div>
        <div className="hs-home-solution-grid">
          {featuredSolutions.map((solution) => (
            <article key={solution.name} className="hs-home-solution-card">
              <span>{solution.category}</span>
              <h3>{solution.name}</h3>
              <p>{solution.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="wnyhs-core" className="hs-home-core-section" aria-labelledby="wnyhs-core-heading">
        <div>
          <p className="hs-premium-eyebrow">WNYHS Core</p>
          <h2 id="wnyhs-core-heading">A local-first foundation for the solutions you choose.</h2>
          <p>
            WNYHS Core is the customer-owned platform layer behind supported solutions: local control, one dashboard,
            no required monthly fees, and room to expand without starting over.
          </p>
        </div>
        <ul>
          {coreItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="hs-premium-section-panel hs-home-section hs-home-process" aria-labelledby="how-it-works-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">How It Works</p>
          <h2 id="how-it-works-heading">Simple steps before anything gets installed.</h2>
        </div>
        <ol className="hs-premium-process-timeline">
          <li>
            <span>01</span>
            <h3>Explore Solutions</h3>
            <p>Browse by category, package, or solution to understand what is possible for your home.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Request Estimate</h3>
            <p>Use the estimate path or call/text to start a practical conversation about your property.</p>
          </li>
          <li>
            <span>03</span>
            <h3>We Build The Right Plan</h3>
            <p>WNYHS turns your concerns, layout, and goals into a scoped recommendation.</p>
          </li>
        </ol>
      </section>

      <section id="why-wnyhs" className="hs-premium-section-panel hs-home-section" aria-labelledby="why-wnyhs-heading">
        <div className="hs-premium-section-header">
          <p className="hs-premium-eyebrow">Why WNYHS</p>
          <h2 id="why-wnyhs-heading">Built for ownership, clarity, and future expansion.</h2>
        </div>
        <div className="hs-premium-trust-card-grid">
          {whyItems.map((item) => (
            <article key={item.title} className="hs-premium-trust-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hs-premium-section-panel hs-premium-final-cta-panel">
        <div className="hs-premium-final-cta-copy">
          <p className="hs-premium-eyebrow">Primary CTA</p>
          <h2>Ready to talk through your home?</h2>
          <p>
            Request an estimate or call/text WNYHS to discuss categories, packages, and solutions that fit your
            property.
          </p>
        </div>
        <div className="hs-premium-final-cta-actions">
          <Link className="btn btn-primary" to={estimateLink}>
            Request Estimate
          </Link>
          <span className="hs-premium-final-cta-or">OR</span>
          <a className="btn btn-secondary" href={buildTel()}>
            Call / Text {wnyhsContact.phone.display}
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;

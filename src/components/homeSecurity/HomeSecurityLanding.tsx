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
    image: '/images/home-security/homepage/category-home-security.png',
    imageAlt: 'Exterior home entry with smart property awareness equipment',
    icon: '/images/home-security/homepage/icon-category-home-security.png',
    iconAlt: 'Home security category icon',
  },
  {
    name: 'Aging-In-Place',
    body: 'Home awareness that helps families support independence, routines, safer movement, and caregiver access.',
    focus: 'Family confidence, routines, access',
    image: '/images/home-security/homepage/category-aging-in-place.png',
    imageAlt: 'Comfortable home interior planned for family awareness and independence',
    icon: '/images/home-security/homepage/icon-category-aging-in-place.png',
    iconAlt: 'Aging-in-place category icon',
  },
  {
    name: 'Environmental Safety',
    body: 'Practical awareness for water, sump, utility, freeze, and home condition concerns common in WNY properties.',
    focus: 'Water, sump, utility rooms',
    image: '/images/home-security/homepage/category-environmental-safety.png',
    imageAlt: 'Home utility area with environmental safety awareness equipment',
    icon: '/images/home-security/homepage/icon-category-environmental-safety.png',
    iconAlt: 'Environmental safety category icon',
  },
  {
    name: 'Home Automation',
    body: 'Connected routines, dashboard control, garage awareness, and everyday automations built on a local-first core.',
    focus: 'Control, routines, garage status',
    image: '/images/home-security/homepage/category-home-automation.png',
    imageAlt: 'Smart home dashboard and automation controls for everyday routines',
    icon: '/images/home-security/homepage/icon-category-home-automation.png',
    iconAlt: 'Home automation category icon',
  },
  {
    name: 'Home Lighting',
    body: 'Arrival, pathway, security, vacation, and outdoor lighting designed to improve visibility and usability.',
    focus: 'Arrival, pathways, outdoor living',
    image: '/images/home-security/homepage/category-home-lighting.png',
    imageAlt: 'Home exterior with planned lighting for arrival and outdoor visibility',
    icon: '/images/home-security/homepage/icon-category-home-lighting.png',
    iconAlt: 'Home lighting category icon',
  },
] as const;

const featuredPackages = [
  {
    name: 'Property Awareness Package',
    summary: 'A discovery path for homeowners who want better visibility around entries, driveways, garages, and packages.',
    includes: ['Package Protection', 'Driveway Watch', 'Smart Entry'],
    image: '/images/home-security/homepage/package-property-awareness-showcase.png',
    imageAlt: 'Property awareness package with connected home equipment and app dashboard',
  },
  {
    name: 'Basement & Utility Protection Package',
    summary: 'A practical starting point for water, sump, utility room, and environmental concerns.',
    includes: ['Water Leak Awareness', 'Sump Pump Awareness', 'Utility Room Awareness'],
    image: '/images/home-security/homepage/package-basement-utility-protection.png',
    imageAlt: 'Basement and utility awareness equipment near home utility systems',
  },
  {
    name: 'Family Confidence Package',
    summary: 'A homeowner-friendly path for aging-in-place awareness, safer movement, and trusted access.',
    includes: ['Family Awareness', 'Safer Night Movement', 'Caregiver Access'],
    image: '/images/home-security/homepage/package-family-confidence.png',
    imageAlt: 'Family confidence package supporting home awareness and trusted access',
  },
] as const;

const featuredSolutions = [
  {
    name: 'Package Protection',
    category: 'Home Security',
    summary: 'Know when deliveries arrive and reduce the chance of packages being forgotten, exposed, or left unattended.',
    image: '/images/home-security/homepage/solution-package-protection.png',
    imageAlt: 'Front porch delivery area with package awareness equipment',
  },
  {
    name: 'Driveway Watch',
    category: 'Home Security',
    summary: 'Gain awareness of vehicles and visitors entering the property before they reach the home.',
    image: '/images/home-security/homepage/solution-driveway-watch.png',
    imageAlt: 'Driveway and garage area with property awareness camera',
  },
  {
    name: 'Water Leak Awareness',
    category: 'Environmental Safety',
    summary: 'Adds earlier awareness of water-related conditions in selected areas.',
    image: '/images/home-security/homepage/solution-water-damage-prevention.png',
    imageAlt: 'Water leak awareness equipment near home plumbing area',
  },
  {
    name: 'Sump Pump Awareness',
    category: 'Environmental Safety',
    summary: 'Know when sump activity becomes abnormal or protection may be compromised.',
    image: '/images/home-security/homepage/solution-sump-pump-awarenes.png',
    imageAlt: 'Sump pump area with awareness equipment for basement protection',
  },
  {
    name: 'Family Awareness',
    category: 'Aging-In-Place',
    summary: 'Help loved ones remain independent while giving family members greater confidence and awareness.',
    image: '/images/home-security/homepage/solution-family-awareness.png',
    imageAlt: 'Home living area arranged for family awareness and independence',
  },
  {
    name: 'Security Lighting',
    category: 'Home Lighting',
    summary: 'Improve property visibility and awareness through strategically controlled lighting.',
    image: '/images/home-security/homepage/solution-security-lighting.png',
    imageAlt: 'Home exterior lighting planned for visibility around the property',
  },
] as const;

const trustItems = [
  'Locally Owned',
  'Customer-Owned',
  'No Required Monthly Fees Where Supported',
  'Professional Installation',
  'Built To Expand',
] as const;

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
    <div className="wnyhs-page wnyhs-shell hs-premium-shell hs-premium-shell--home-redesign">
      <section id="home-search" className="wnyhs-section hs-home-search-access" aria-labelledby="home-search-heading">
        <div>
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Search Access</p>
          <h2 id="home-search-heading">Find the right starting point in your own words.</h2>
          <p>
            Use these examples as a starting point while we finish building full site search.
          </p>
        </div>
        <div className="hs-home-search-box" role="search" aria-label="Search placeholder">
          <span>Search WNYHS</span>
          <div className="hs-home-search-input" aria-hidden="true">
            Try: {searchExamples[0]}
          </div>
          <p>Full search is coming soon.</p>
        </div>
        <div className="hs-home-search-examples" aria-label="Example search terms">
          {searchExamples.map((term) => (
            <span key={term}>{term}</span>
          ))}
        </div>
      </section>

      <section className="wnyhs-section wnyhs-section--dark hs-home-hero" aria-labelledby="home-hero-heading">
        <div className="hs-home-hero-copy">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">WNY Home Security</p>
          <h1 id="home-hero-heading">Smart property solutions built around your home.</h1>
          <p className="hs-premium-hero-subhead">
            Local planning for cameras, property awareness, environmental safety, automation, and lighting with a
            customer-owned core that can grow over time.
          </p>
          <div className="hs-premium-hero-actions">
            <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimateLink}>
              Request Estimate
            </Link>
            <a className="wnyhs-button wnyhs-button--secondary btn btn-secondary" href={buildTel()}>
              Call / Text {wnyhsContact.phone.display}
            </a>
          </div>
        </div>
        <figure className="hs-home-hero-media">
          <img
            src="/images/home-security/homepage/category-home-security.png"
            alt="WNY Home Security exterior home with smart property awareness equipment"
            width="1536"
            height="1024"
            loading="eager"
          />
        </figure>
      </section>

      <section className="wnyhs-section hs-home-trust-bar" aria-label="WNY Home Security trust indicators">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section id="category-explorer" className="wnyhs-section wnyhs-section--category hs-premium-section-panel hs-home-section" aria-labelledby="category-explorer-heading">
        <div className="wnyhs-section-header hs-premium-section-header">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Category Explorer</p>
          <h2 id="category-explorer-heading">Start with the concern, not the hardware.</h2>
          <p>Choose a broad homeowner need first, then narrow into packages and solutions.</p>
        </div>
        <div className="hs-home-category-grid">
          {categoryExplorer.map((category) => (
            <article key={category.name} className="wnyhs-card wnyhs-card--category hs-home-category-card">
              <div className="hs-home-category-media">
                <img className="hs-home-category-icon" src={category.icon} alt={category.iconAlt} width="1254" height="1254" loading="lazy" />
                <img className="hs-home-card-image" src={category.image} alt={category.imageAlt} width="1536" height="1024" loading="lazy" />
              </div>
              <span>{category.name}</span>
              <h3>{category.focus}</h3>
              <p>{category.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-packages" className="wnyhs-section wnyhs-section--packages hs-premium-section-panel hs-home-section" aria-labelledby="featured-packages-heading">
        <div className="wnyhs-section-header hs-premium-section-header">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Featured Packages</p>
          <h2 id="featured-packages-heading">Outcome-based paths for common homeowner situations.</h2>
          <p>Packages group related approved solutions without turning the homepage into pricing tiers.</p>
        </div>
        <div className="hs-home-package-grid">
          {featuredPackages.map((item) => (
            <article key={item.name} className="wnyhs-card wnyhs-card--package hs-home-package-card">
              <img className="hs-home-card-image" src={item.image} alt={item.imageAlt} width="1536" height="1024" loading="lazy" />
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

      <section id="featured-solutions" className="wnyhs-section wnyhs-section--solutions hs-premium-section-panel hs-home-section" aria-labelledby="featured-solutions-heading">
        <div className="wnyhs-section-header hs-premium-section-header">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Featured Solutions</p>
          <h2 id="featured-solutions-heading">A selected sample from the approved solution catalog.</h2>
          <p>These examples represent multiple categories and do not replace a full solution catalog.</p>
        </div>
        <div className="hs-home-solution-grid">
          {featuredSolutions.map((solution) => (
            <article key={solution.name} className="wnyhs-card wnyhs-card--solution hs-home-solution-card">
              <img className="hs-home-card-image" src={solution.image} alt={solution.imageAlt} width="1536" height="1024" loading="lazy" />
              <span>{solution.category}</span>
              <h3>{solution.name}</h3>
              <p>{solution.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="wnyhs-core" className="wnyhs-section wnyhs-section--dark hs-home-core-section" aria-labelledby="wnyhs-core-heading">
        <div>
          <p className="wnyhs-eyebrow hs-premium-eyebrow">WNYHS Core</p>
          <h2 id="wnyhs-core-heading">A local-first foundation for the solutions you choose.</h2>
          <p>
            WNYHS Core is the customer-owned platform layer behind supported solutions: local control, one dashboard,
            no required monthly fees where selected hardware supports that path, and room to expand without starting over.
          </p>
        </div>
        <figure className="hs-home-core-media" aria-label="WNYHS Core platform visuals">
          <img
            className="hs-home-core-dashboard"
            src="/images/home-security/homepage/WNYHSCoreDashboard.png"
            alt="WNYHS Core dashboard for supported home systems"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <img
            className="hs-home-core-phone"
            src="/images/home-security/homepage/WNYHSCorePhone.png"
            alt="WNYHS Core phone view for homeowner system awareness"
            width="1024"
            height="1536"
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
        <ul>
          {coreItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="wnyhs-section hs-premium-section-panel hs-home-section hs-home-process" aria-labelledby="how-it-works-heading">
        <div className="wnyhs-section-header hs-premium-section-header">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">How It Works</p>
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

      <section id="why-wnyhs" className="wnyhs-section hs-premium-section-panel hs-home-section" aria-labelledby="why-wnyhs-heading">
        <div className="wnyhs-section-header hs-premium-section-header">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Why WNYHS</p>
          <h2 id="why-wnyhs-heading">Built for ownership, clarity, and future expansion.</h2>
        </div>
        <div className="hs-premium-trust-card-grid">
          {whyItems.map((item) => (
            <article key={item.title} className="wnyhs-card hs-premium-trust-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wnyhs-section hs-premium-section-panel hs-premium-final-cta-panel">
        <div className="hs-premium-final-cta-copy">
          <p className="wnyhs-eyebrow hs-premium-eyebrow">Primary CTA</p>
          <h2>Ready to talk through your home?</h2>
          <p>
            Request an estimate or call/text WNYHS to discuss categories, packages, and solutions that fit your
            property.
          </p>
        </div>
        <div className="hs-premium-final-cta-actions">
          <Link className="wnyhs-button wnyhs-button--primary btn btn-primary" to={estimateLink}>
            Request Estimate
          </Link>
          <span className="hs-premium-final-cta-or">OR</span>
          <a className="wnyhs-button wnyhs-button--secondary btn btn-secondary" href={buildTel()}>
            Call / Text {wnyhsContact.phone.display}
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeSecurityLanding;

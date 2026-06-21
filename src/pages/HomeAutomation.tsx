import { Link } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { estimatePath, offeringsPath } from '../content/wnyhsOfferCatalog';
import { buildTel, wnyhsContact } from '../content/wnyhsContact';

const revealItems = [
  {
    label: 'Comfort',
    body: 'Keeps rooms comfortable automatically.',
  },
  {
    label: 'Lighting',
    body: 'Lights respond to routines and time of day.',
  },
  {
    label: 'Awareness',
    body: 'Knows when spaces are occupied.',
  },
  {
    label: 'Protection',
    body: 'Warns about water before damage spreads.',
  },
  {
    label: 'Control',
    body: 'Control devices from anywhere.',
  },
  {
    label: 'Routines',
    body: 'Daily tasks can happen automatically.',
  },
] as const;

const outcomes = [
  'Convenience that saves time',
  'Comfort that adjusts automatically',
  'Awareness that gives peace of mind',
  'Energy savings that add up',
] as const;

const lifeCards = [
  'The garage closed itself when you forgot.',
  'Pathway lights guided you safely at night.',
  'The thermostat adjusted before you noticed.',
  'Your home knew the difference between empty and occupied.',
  'Water leaks were caught before damage spread.',
  'Routines happened automatically every day.',
] as const;

const featuredSolutions = [
  {
    title: 'SafePath Lighting',
    body: 'Lights that respond to occupancy, time of day, and routines.',
    imageSrc: '/images/home-security/homepage/solution-security-lighting.png',
    href: `${offeringsPath}#solution-entry-lighting-automation`,
    cta: 'Learn more',
  },
  {
    title: 'Smart Entry & Garage Awareness',
    body: 'Know the status of important entry points and simplify everyday access.',
    imageSrc: '/images/solutions/connected-garage-workshop.png',
    href: `${offeringsPath}#solution-garage-door-awareness`,
    cta: 'Learn more',
  },
  {
    title: 'Comfort Automation',
    body: 'Temperature, fans, and shades work together for practical everyday comfort.',
    imageSrc: '/images/home-security/homepage/category-home-automation.png',
    href: estimatePath,
    cta: 'Talk through this',
  },
  {
    title: 'Arrival & Departure Automation',
    body: 'Lights, locks, garage, and comfort settings respond automatically.',
    imageSrc: '/images/home-security/homepage/category-home-automation.png',
    href: `${offeringsPath}#solution-away-night-vacation-modes`,
    cta: 'Learn more',
  },
] as const;

const coreItems = [
  'Home Assistant-based local control',
  'Unified dashboard for supported systems',
  'Customer-owned equipment and data',
  'No vendor lock-in',
  'Expansion-ready foundation',
] as const;

const catalogItems = [
  'Vacation & Away Modes',
  'Entertainment Automation',
  'Blinds & Shade Automation',
  'Energy Monitoring',
  'Voice & Announcements',
  'Occupancy Intelligence',
  'Outdoor & Landscape',
  'Pet Awareness',
  'Air Quality Awareness',
  'And More Solutions',
] as const;

const customBullets = [
  "If it can be safely automated and properly supported, we'll help figure out the right way to do it.",
  'Customer-owned equipment with no required monthly fees where supported.',
  'Solutions built around real homes, real routines, and real homeowner goals.',
] as const;

const HomeAutomation = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: false,
    breadcrumb: [],
  });

  return (
    <WnyhsMarketingLayout ctaLink={estimatePath}>
      <div className="wnyhs-page wnyhs-shell hs-premium-shell hs-premium-shell--home-redesign wnyhs-category-landing">
        <section className="wnyhs-section wnyhs-section--dark wnyhs-category-hero" aria-labelledby="home-automation-heading">
          <div className="wnyhs-category-hero-copy">
            <p className="wnyhs-eyebrow hs-premium-eyebrow">Home Automation</p>
            <h1 id="home-automation-heading" className="wnyhs-heading">
              A Smarter Home. Built Around You.
            </h1>
            <p className="wnyhs-description">
              From everyday convenience to whole-home awareness and automation, we help your home respond to you - so you can focus on what matters most.
            </p>
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
              src="/images/home-security/homepage/category-home-automation.png"
              alt="Smart home dashboard and automation controls for everyday routines"
              width="1536"
              height="1024"
              loading="eager"
            />
          </figure>
        </section>

        <section className="wnyhs-section wnyhs-category-reveal" aria-labelledby="automation-reveal-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Automation Reveal</p>
            <h2 id="automation-reveal-heading" className="wnyhs-heading">
              There May Be More Possibilities In Your Home Than You Realize.
            </h2>
            <p className="wnyhs-description">Most automation opportunities are already hiding in plain sight.</p>
          </div>
          <div className="wnyhs-category-outcome-row" aria-label="Home automation outcomes">
            {outcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="wnyhs-category-reveal-layout">
            <figure className="wnyhs-category-reveal-media wnyhs-card-media">
              <img
                src="/images/home-security/homepage/category-home-automation.png"
                alt="Living space with smart home automation dashboard and routine controls"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <figcaption className="wnyhs-category-reveal-label">
                <span>What you see</span>
                A comfortable home.
              </figcaption>
            </figure>
            <div className="wnyhs-category-reveal-opportunities">
              <div className="wnyhs-category-reveal-summary">
                <span>What we see</span>
                <p>Opportunities to simplify routines, improve awareness, and support comfort.</p>
              </div>
              <div className="wnyhs-category-reveal-grid" aria-label="Automation opportunities">
                {revealItems.map((item) => (
                  <article key={item.label} className="wnyhs-card wnyhs-category-reveal-card">
                    <span>{item.label}</span>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <p className="wnyhs-category-reveal-prompt">Hover or tap to reveal automation opportunities.</p>
        </section>

        <section className="wnyhs-section" aria-labelledby="life-like-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">What Life Could Be Like</p>
            <h2 id="life-like-heading" className="wnyhs-heading">
              Small moments that make the home feel easier.
            </h2>
          </div>
          <div className="wnyhs-category-card-grid wnyhs-category-card-grid--six">
            {lifeCards.map((item, index) => (
              <article key={item} className="wnyhs-card wnyhs-category-life-card">
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wnyhs-section wnyhs-section--solutions" aria-labelledby="featured-automation-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Most Popular Automation Solutions</p>
            <h2 id="featured-automation-heading" className="wnyhs-heading">
              Start With What Matters Most
            </h2>
            <p className="wnyhs-description">These are the solutions homeowners ask about most.</p>
          </div>
          <div className="wnyhs-category-card-grid wnyhs-category-card-grid--four">
            {featuredSolutions.map((solution) => (
              <Link key={solution.title} className="wnyhs-card wnyhs-card--solution wnyhs-category-linked-card" to={solution.href}>
                <figure className="wnyhs-card-media wnyhs-category-solution-media">
                  <img src={solution.imageSrc} alt={`${solution.title} home automation solution`} loading="lazy" />
                </figure>
                <span className="wnyhs-eyebrow">Solution</span>
                <h3 className="wnyhs-card-title">{solution.title}</h3>
                <p className="wnyhs-card-copy">{solution.body}</p>
                <span className="wnyhs-category-card-cta">{solution.cta}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="wnyhs-section wnyhs-section--dark wnyhs-category-core" aria-labelledby="automation-core-heading">
          <div>
            <p className="wnyhs-eyebrow hs-premium-eyebrow">WNYHS Core</p>
            <h2 id="automation-core-heading" className="wnyhs-heading">
              A local-first foundation for the automations you choose.
            </h2>
            <p>
              WNYHS Core is the customer-owned platform layer behind supported automation solutions: local control, one dashboard, no required monthly fees where selected hardware supports that path, and room to expand without starting over.
            </p>
            <ul>
              {coreItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
        </section>

        <section className="wnyhs-section" aria-labelledby="automation-catalog-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Explore More Home Automation Solutions</p>
            <h2 id="automation-catalog-heading" className="wnyhs-heading">
              Browse All Home Automation Solutions
            </h2>
            <p className="wnyhs-description">Explore the complete range of automation ideas we can build around your home.</p>
          </div>
          <div className="wnyhs-category-chip-grid" aria-label="Home automation solution catalog">
            {catalogItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="wnyhs-inline-actions">
            <Link className="wnyhs-button wnyhs-button--secondary btn btn-secondary" to={`${offeringsPath}#standard-planning-solutions`}>
              View All Solutions
            </Link>
          </div>
        </section>

        <section className="wnyhs-section wnyhs-category-custom-cta" aria-labelledby="custom-solutions-heading">
          <div className="wnyhs-section-header">
            <p className="wnyhs-eyebrow">Custom Solutions</p>
            <h2 id="custom-solutions-heading" className="wnyhs-heading">
              Not Seeing Your Idea?
            </h2>
            <p className="wnyhs-description">That's exactly what we love to solve.</p>
          </div>
          <div className="wnyhs-category-copy">
            <p>Not every useful automation fits neatly into a preset package.</p>
            <p>
              If there is something in your home you wish worked differently - a routine you repeat every day, a room that never feels right, a door you keep checking, lights you want to behave a certain way, or a custom idea you have been thinking about - we can help design a practical solution.
            </p>
          </div>
          <ul className="wnyhs-category-list">
            {customBullets.map((item) => (
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

export default HomeAutomation;

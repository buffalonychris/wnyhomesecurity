import { Link } from 'react-router-dom';
import WnyhsMarketingLayout from '../components/homeSecurity/WnyhsMarketingLayout';
import { useLayoutConfig } from '../components/LayoutConfig';
import { estimatePath, offeringsPath } from '../content/wnyhsOfferCatalog';
import { buildTel, wnyhsContact } from '../content/wnyhsContact';

const automationImageBase = '/images/category-pages/home-automation';

const automationImages = {
  hero: `${automationImageBase}/homeautomationhero.png`,
  revealOn: `${automationImageBase}/neonimage.png`,
  revealOff: `${automationImageBase}/neonimagenoneon.png`,
  dashboard: `${automationImageBase}/fullsizehomeautomationdashboard.png`,
  phone: `${automationImageBase}/cellphonedashhomeautomation.png`,
  arrival: `${automationImageBase}/homearrivalscene.png`,
  movieNight: `${automationImageBase}/movienightscene.png`,
  goodNight: `${automationImageBase}/goodnightautomation.png`,
  goodMorning: `${automationImageBase}/goodmorningautomation.png`,
  vacation: `${automationImageBase}/vacationmodehomeautomation.png`,
  arrivalThumb: `${automationImageBase}/arrival-automation-thumb.jpg`,
  movieNightThumb: `${automationImageBase}/movie-night-thumb.jpg`,
  goodNightThumb: `${automationImageBase}/goodnight-routine-thumb.jpg`,
  goodMorningThumb: `${automationImageBase}/good-morning-thumb.jpg`,
  vacationThumb: `${automationImageBase}/vacation-mode-thumb.jpg`,
  solutionArrivalThumb: `${automationImageBase}/solution-arrival-automation-thumb.jpg`,
  solutionMovieNightThumb: `${automationImageBase}/solution-movie-night-scenes-thumb.jpg`,
  solutionGoodNightThumb: `${automationImageBase}/solution-goodnight-routine-thumb.jpg`,
  solutionVacationThumb: `${automationImageBase}/solution-vacation-mode-thumb.jpg`,
  wholeHome: `${automationImageBase}/wholehomeautomation.png`,
} as const;

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
  {
    title: 'Everything In One Place',
    body: "See your home's security, lighting, comfort, cameras, and automation from a single dashboard.",
  },
  {
    title: 'Stay Connected Anywhere',
    body: "Check your home, make adjustments, and run routines from your phone whether you're home or away.",
  },
  {
    title: 'Let Your Home Do More Automatically',
    body: 'Simple routines can help lights, comfort settings, and awareness features work together for everyday convenience.',
  },
] as const;

const automationScenes = [
  {
    title: 'Good Morning',
    imageSrc: automationImages.goodMorningThumb,
    alt: 'Good morning thumbnail showing daily comfort and lighting routines starting cleanly',
  },
  {
    title: 'Arrival Automation',
    imageSrc: automationImages.arrivalThumb,
    alt: 'Arrival automation thumbnail showing the home preparing as a homeowner returns',
  },
  {
    title: 'Movie Night',
    imageSrc: automationImages.movieNightThumb,
    alt: 'Movie night thumbnail showing coordinated comfort and lighting',
  },
  {
    title: 'Goodnight Routine',
    imageSrc: automationImages.goodNightThumb,
    alt: 'Goodnight routine thumbnail showing a calm evening shutdown',
  },
  {
    title: 'Vacation Mode',
    imageSrc: automationImages.vacationThumb,
    alt: 'Vacation mode thumbnail showing away routines and remote awareness',
  },
] as const;

const featuredSolutions = [
  {
    title: 'Arrival Automation',
    body: 'Lights, comfort, and supported access points prepare the home as you arrive.',
    imageSrc: automationImages.solutionArrivalThumb,
    alt: 'Arrival automation solution thumbnail showing the home preparing for a homeowner coming home',
    href: `${offeringsPath}#solution-entry-lighting-automation`,
    cta: 'Learn more',
  },
  {
    title: 'Movie Night Scenes',
    body: 'Lighting and comfort can shift together for simple everyday moments.',
    imageSrc: automationImages.solutionMovieNightThumb,
    alt: 'Movie night scenes solution thumbnail with lighting and comfort adjusted for the routine',
    href: estimatePath,
    cta: 'Learn more',
  },
  {
    title: 'Goodnight Routine',
    body: 'Supported lights, locks, comfort, and awareness checks can settle the home for the night.',
    imageSrc: automationImages.solutionGoodNightThumb,
    alt: 'Goodnight routine solution thumbnail showing a calm evening shutdown',
    href: estimatePath,
    cta: 'Talk through this',
  },
  {
    title: 'Vacation Mode',
    body: 'Away settings can coordinate lighting, comfort, and awareness while you are out.',
    imageSrc: automationImages.solutionVacationThumb,
    alt: 'Vacation mode solution thumbnail showing a home set up for away routines and remote awareness',
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
              src={automationImages.hero}
              alt="Whole-home automation scene showing clean connected control for everyday routines"
              width="1604"
              height="980"
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
            <figure className="wnyhs-category-reveal-media wnyhs-card-media" tabIndex={0}>
              <img
                className="wnyhs-category-reveal-image wnyhs-category-reveal-image--active"
                src={automationImages.revealOn}
                alt="Home automation reveal showing highlighted opportunities around a clean living space"
                width="1672"
                height="941"
                loading="lazy"
              />
              <img
                className="wnyhs-category-reveal-image wnyhs-category-reveal-image--base"
                src={automationImages.revealOff}
                alt=""
                width="1672"
                height="941"
                loading="lazy"
                aria-hidden="true"
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
          <div className="wnyhs-category-control-proof">
            <figure className="wnyhs-category-proof-dashboard wnyhs-card-media">
              <img
                src={automationImages.dashboard}
                alt="Full-size home automation dashboard showing supported rooms and routines in one clean view"
                width="1536"
                height="1024"
                loading="lazy"
              />
              <figcaption className="wnyhs-category-proof-caption">
                <strong>Whole Home Dashboard</strong>
                <span>See security, comfort, lighting, cameras, and home status from one clean place.</span>
              </figcaption>
            </figure>
            <figure className="wnyhs-category-proof-phone wnyhs-card-media">
              <img
                src={automationImages.phone}
                alt="Phone dashboard for quick homeowner control of supported automation routines"
                width="1024"
                height="1536"
                loading="lazy"
              />
              <figcaption className="wnyhs-category-proof-caption">
                <strong>Mobile App Access</strong>
                <span>Check your home, adjust supported devices, and run routines from your phone.</span>
              </figcaption>
            </figure>
          </div>
          <div className="wnyhs-category-routine-intro">
            <h3>Popular Automation Routines</h3>
            <p>Everyday routines can adjust lighting, comfort, awareness, and supported devices automatically.</p>
          </div>
          <div className="wnyhs-category-scene-strip" aria-label="Automation scenes lifecycle">
            {automationScenes.map((scene) => (
              <figure key={scene.title} className="wnyhs-category-scene-card wnyhs-card-media">
                <img src={scene.imageSrc} alt={scene.alt} loading="lazy" />
                <figcaption>{scene.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="wnyhs-category-card-grid wnyhs-category-card-grid--six">
            {lifeCards.map((item, index) => (
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
                  <img src={solution.imageSrc} alt={solution.alt} loading="lazy" />
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
              className="hs-home-core-dashboard wnyhs-category-core-whole-home"
              src={automationImages.wholeHome}
              alt="Whole-property automation view showing connected rooms and supported home systems"
              width="1536"
              height="1024"
              loading="lazy"
            />
            <img
              className="hs-home-core-phone"
              src={automationImages.goodMorning}
              alt="Good morning automation scene showing daily comfort and lighting routines starting cleanly"
              width="1535"
              height="1024"
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

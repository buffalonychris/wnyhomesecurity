import { NavLink } from 'react-router-dom';

const packages = [
  {
    name: 'HA Gold',
    description: 'Premium monitoring with smart automation and concierge onboarding.',
    highlight: 'Most popular',
  },
  {
    name: 'HA Silver',
    description: 'Balanced protection with priority response and guided setup.',
    highlight: 'Best value',
  },
  {
    name: 'HA Bronze',
    description: 'Essential coverage with flexible add-on upgrades.',
    highlight: 'Starter',
  },
];

const steps = [
  {
    title: 'Personalized discovery',
    detail: 'Quick intake captures your home layout, lifestyle, and smart home goals.',
  },
  {
    title: 'Design with Fit Check',
    detail: 'Validate device placement, entry coverage, and monitoring needs.',
  },
  {
    title: 'Precision Planner',
    detail: 'Advanced planning maps sensors, zones, and automation routines.',
  },
];

const faq = [
  {
    question: 'How fast can I get installed?',
    answer: 'Most installs can be scheduled within 7-10 days after confirming your plan.',
  },
  {
    question: 'Is monitoring 24/7?',
    answer: 'Yes. Our team monitors alarms around the clock with rapid dispatch protocols.',
  },
  {
    question: 'Can I add smart devices later?',
    answer: 'Absolutely. Every package is designed to expand with cameras, sensors, and automations.',
  },
];

const NewSiteHome = () => {
  return (
    <div className="newsite-container">
      <section className="newsite-hero" id="overview">
        <div>
          <span className="newsite-badge">NewSite experience</span>
          <h1>Warm bronze design. Elevated protection for WNY homes.</h1>
          <p>
            The NewSite experience brings a premium, concierge-first journey to home security. Explore curated packages,
            design your protection plan, and preview the HA Gold dashboard in demo mode.
          </p>
        </div>
        <div className="newsite-card">
          <strong>Next step: Design your system</strong>
          <p>Start the planning flow to match sensors, zones, and smart automations.</p>
          <div>
            <NavLink className="newsite-btn" to="/quote">
              Start online quote
            </NavLink>
            <NavLink className="newsite-btn newsite-btn-secondary" to="/newsite/demos">
              View demos
            </NavLink>
          </div>
        </div>
      </section>

      <section className="newsite-section" id="packages">
        <h2>Packages built for premium peace of mind</h2>
        <p>Choose a starting point, then layer in smart automation and monitoring enhancements.</p>
        <div className="newsite-grid">
          {packages.map((pkg) => (
            <div className="newsite-card" key={pkg.name}>
              <span className="newsite-badge">{pkg.highlight}</span>
              <strong>{pkg.name}</strong>
              <p>{pkg.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section" id="fit-check">
        <h2>How it works</h2>
        <p>
          Every engagement starts with a warm consultation and a modern planning workflow that ensures every point of
          entry is protected.
        </p>
        <div className="newsite-grid">
          {steps.map((step) => (
            <div className="newsite-card" key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section" id="planner">
        <div className="newsite-surface">
          <span className="newsite-badge">Precision Planner (Advanced)</span>
          <h2>Plan device placement with confidence</h2>
          <p>
            Use the Precision Planner to map zones, assign sensors, and forecast response coverage before your
            technician arrives.
          </p>
        </div>
      </section>

      <section className="newsite-section" id="pricing">
        <h2>Transparent pricing tiers</h2>
        <div className="newsite-grid">
          <div className="newsite-card">
            <strong>Essential</strong>
            <p>Starter monitoring with core sensors and mobile alerts.</p>
          </div>
          <div className="newsite-card">
            <strong>Premium</strong>
            <p>Expanded coverage with automation scenes and camera intelligence.</p>
          </div>
          <div className="newsite-card">
            <strong>Concierge</strong>
            <p>White-glove onboarding, priority response, and ongoing optimization.</p>
          </div>
        </div>
      </section>

      <section className="newsite-section" id="faq">
        <h2>Frequently asked questions</h2>
        <div className="newsite-grid">
          {faq.map((item) => (
            <div className="newsite-card" key={item.question}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsite-section" id="contact">
        <div className="newsite-surface">
          <h2>Connect with a security advisor</h2>
          <p>Call us at (716) 391-2405 or request a callback to begin planning your system.</p>
          <NavLink className="newsite-btn" to="/newsite/contact">
            Request callback
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default NewSiteHome;

import { experienceCategories, smartPropertyHero } from '../../../content/experience/baseline';

const SmartPropertyHero = () => (
  <>
    <section className="smart-property-hero" aria-labelledby="experience-home-title">
      <div className="smart-property-hero__message">
        <p className="experience-eyebrow">{smartPropertyHero.eyebrow}</p>
        <h1 id="experience-home-title">{smartPropertyHero.headline}</h1>
        <p className="experience-lede">{smartPropertyHero.supportingMessage}</p>
        <div className="experience-actions" aria-label="Smart Property Experience actions">
          <a className="wnyhs-button wnyhs-button--primary" href="#smart-property-principles">
            {smartPropertyHero.primaryCta}
          </a>
          <a className="wnyhs-button wnyhs-button--secondary" href="#categories">
            {smartPropertyHero.secondaryCta}
          </a>
        </div>
      </div>

      <aside className="smart-property-hero__position" aria-label="The WNY Home Security approach">
        <p className="smart-property-hero__position-label">The Smart Property approach</p>
        <p className="smart-property-hero__position-statement">
          One clear experience for the systems that help a property work better.
        </p>
        <ul className="smart-property-hero__principles">
          <li>Local-first where supported</li>
          <li>Privacy-first planning</li>
          <li>Customer-owned foundation</li>
          <li>Expandable without replacing the core</li>
        </ul>
      </aside>
    </section>

    <section
      id="smart-property-principles"
      className="smart-property-story"
      aria-labelledby="smart-property-story-title"
    >
      <div className="smart-property-story__heading">
        <p className="experience-eyebrow">Planned as one system</p>
        <h2 id="smart-property-story-title">Start with today. Expand through the same foundation.</h2>
        <p>
          WNY Home Security plans supported equipment and useful automations as one coordinated
          architecture, so new capabilities can be added without requiring a replacement of the core
          system.
        </p>
      </div>

      <div className="smart-property-story__details">
        <div className="smart-property-story__detail">
          <h3>Professionally designed for real life</h3>
          <p>
            The property, existing equipment, site conditions, and everyday routines shape the design.
            Normal physical controls remain usable.
          </p>
        </div>
        <div className="smart-property-story__detail">
          <h3>Local-first, private, and yours</h3>
          <p>
            Where supported, core behavior stays local. Privacy is planned from the start, and the
            customer owns the equipment, automations, and data.
          </p>
        </div>
        <div className="smart-property-story__detail">
          <h3>Clear about subscriptions</h3>
          <p>
            WNY Home Security does not require a subscription for supported core local functionality.
            Optional third-party services may have separate fees, accounts, connectivity, or equipment
            requirements.
          </p>
        </div>
      </div>

      <div className="smart-property-story__categories" aria-labelledby="connected-categories-title">
        <p id="connected-categories-title">One system can connect six property priorities</p>
        <ol>
          {experienceCategories.map((category) => (
            <li key={category.slug}>{category.name}</li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default SmartPropertyHero;

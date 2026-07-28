import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaSafety.css";

const risks = [
  "Water can appear near plumbing, appliances, sumps, or utility equipment between routine checks.",
  "Selected spaces can trend toward freeze-risk temperatures before the change is obvious elsewhere.",
  "Persistent humidity or moisture can deserve attention even when a room looks normal.",
  "Basements, utility rooms, and other low-traffic spaces are easy to overlook.",
  "An unoccupied property can benefit from a clearer view of selected conditions.",
] as const;

const capabilities = [
  [
    "Water awareness",
    "Know sooner when supported sensors detect water in selected monitored areas.",
    "Placement, coverage, and notification paths depend on the reviewed property.",
  ],
  [
    "Temperature and freeze-risk awareness",
    "Surface monitored spaces that trend toward elevated freeze-risk temperatures.",
    "This adds information; it does not guarantee frozen-pipe prevention.",
  ],
  [
    "Humidity and moisture awareness",
    "Bring persistent humidity or dampness trends into a clearer property view.",
    "Readings support investigation and do not replace inspection or remediation.",
  ],
  [
    "Basement and utility-area visibility",
    "Organize selected sump-area, mechanical-room, or appliance-area signals in one place.",
    "Available signals depend on compatible equipment and the approved design.",
  ],
  [
    "Selected smoke and CO awareness",
    "Where supported, add secondary visibility from compatible devices to the property view.",
    "This never replaces required smoke or carbon-monoxide alarms or life-safety systems.",
  ],
  [
    "Qualified automation and shutoff",
    "A reviewed design may support selected actions after a compatible signal.",
    "Valve, equipment, site, power, and connectivity requirements must be validated first.",
  ],
] as const;

const scenarios = [
  [
    "A water concern while you are away",
    "A supported sensor may provide earlier notice that water is present in a selected monitored area so you can investigate or contact the right person.",
  ],
  [
    "A space trending toward freeze risk",
    "A monitored basement, garage, or utility area may create an alert when its temperature crosses a reviewed threshold.",
  ],
  [
    "A basement or utility-room change",
    "Selected water, humidity, temperature, or equipment-condition signals may appear together in one clearer view.",
  ],
  [
    "Secondary smoke or CO awareness",
    "Compatible equipment may contribute selected secondary status or alerts without replacing required alarms, inspections, or emergency response.",
  ],
  [
    "A property that is not occupied every day",
    "Selected conditions may remain easier to review between visits, subject to power, connectivity, equipment, and service availability.",
  ],
] as const;

const connections = [
  [
    "Home Security",
    "Selected property conditions can appear beside supported entry and perimeter awareness.",
  ],
  [
    "Aging in Place",
    "Clear, non-medical property awareness can support a more manageable household experience.",
  ],
  [
    "Home Automation",
    "Reviewed signals may support selected routines or actions where compatibility allows.",
  ],
  [
    "Home Lighting",
    "Supported lighting can help make selected utility or nighttime areas easier to approach.",
  ],
  [
    "Property Management",
    "Water, temperature, and utility-area awareness can contribute to a wider view of a remote or seasonal property.",
  ],
] as const;

const learningTopics = [
  "Choosing useful sensor locations without overstating coverage",
  "Separating awareness, notification, automation, and response",
  "Understanding water-shutoff compatibility and site requirements",
  "Planning for power, internet, and third-party service dependencies",
] as const;

function BetaSafety() {
  const related = new Map(
    betaSolutionNavigation.map((item) => [item.label, item]),
  );

  return (
    <div className="beta-safety-page">
      <section className="beta-safety-hero" aria-labelledby="safety-title">
        <div className="beta-shell beta-safety-hero__layout">
          <div>
            <p className="beta-eyebrow">Earlier property awareness</p>
            <h1 id="safety-title">Home Safety</h1>
            <p className="beta-safety-hero__lead">
              Add earlier awareness of selected environmental and property
              conditions so you can investigate sooner.
            </p>
            <p>
              Bring practical water, temperature, humidity, utility-area, and
              other supported signals into one thoughtful property system.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#safety-capabilities"
              >
                Explore Home Safety Capabilities
              </a>
            </div>
            <p className="beta-trust-line">
              Earlier awareness and selected-area visibility—not guaranteed
              prevention, emergency response, or a replacement for maintenance,
              insurance, or required alarms.
            </p>
          </div>
          <div
            className="beta-safety-hero__visual"
            aria-label="Illustrative architectural property awareness map"
          >
            <span>Selected conditions in view</span>
            <strong>Know sooner. Respond with context.</strong>
            <div>
              <i>Water areas</i>
              <i>Temperature</i>
              <i>Humidity</i>
              <i>Utility spaces</i>
            </div>
            <small>Illustrative layout—not a customer installation.</small>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-safety-outcome"
        aria-labelledby="safety-outcome-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">The outcome</p>
            <h2 id="safety-outcome-title">
              Earlier awareness of selected conditions that deserve attention.
            </h2>
          </div>
          <div>
            <p>
              Home Safety solutions can surface water presence, freeze-risk
              temperature trends, humidity conditions, sump-area concerns, and
              other supported signals in reviewed locations.
            </p>
            <p>
              They add practical information. They do not eliminate property
              risks or replace maintenance, plumbing, HVAC, electrical work,
              insurance, required alarms, or emergency services.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate"
        aria-labelledby="safety-risks-title"
      >
        <div className="beta-shell beta-safety-risks">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Common property risks</p>
            <h2 id="safety-risks-title">
              Important conditions do not always announce themselves.
            </h2>
            <p>
              Start with the spaces and conditions that are difficult to check
              consistently—not with a fixed equipment list.
            </p>
          </header>
          <ul>
            {risks.map((risk, index) => (
              <li key={risk}>
                <span>0{index + 1}</span>
                {risk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="safety-capabilities"
        className="beta-section beta-safety-capabilities"
        aria-labelledby="safety-capabilities-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Supported capability groups</p>
            <h2 id="safety-capabilities-title">
              Practical awareness organized around the property.
            </h2>
            <p>
              Every capability depends on compatible equipment, selected
              locations, site conditions, and an approved design.
            </p>
          </header>
          <div className="beta-safety-capability-grid">
            {capabilities.map(([title, outcome, boundary], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{outcome}</p>
                <small>{boundary}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-safety-scenarios"
        aria-labelledby="safety-scenarios-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Practical scenarios</p>
            <h2 id="safety-scenarios-title">
              Selected signals can turn an unseen condition into useful
              information.
            </h2>
            <p>
              These are qualified examples—not universal inclusions, guaranteed
              detection, or guaranteed prevention.
            </p>
          </header>
          <div className="beta-safety-scenario-grid">
            {scenarios.map(([title, copy], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--dark beta-safety-dashboard"
        aria-labelledby="safety-dashboard-title"
      >
        <div className="beta-shell beta-safety-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="safety-dashboard-title">
              See selected property conditions without hunting through
              unrelated applications.
            </h2>
            <p>
              Supported status, alerts, trends, and available controls may
              appear together where the approved system supports them.
            </p>
            <p className="beta-trust-line">
              This dashboard is illustrative. Actual information, controls, and
              response paths depend on the approved design.
            </p>
          </div>
          <aside aria-label="Illustrative Home Safety Property Dashboard">
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative safety view</small>
            </header>
            <strong>Selected conditions</strong>
            <div>
              <span>
                Water areas <b>Clear</b>
              </span>
              <span>
                Basement temperature <b>In range</b>
              </span>
              <span>
                Utility room <b>Normal</b>
              </span>
              <span>
                Selected alerts <b>On</b>
              </span>
              <span>
                Shutoff <b>Design dependent</b>
              </span>
            </div>
            <small>
              Status and availability depend on compatible equipment, power,
              connectivity, placement, and reviewed site conditions.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-safety-response"
        aria-labelledby="safety-response-title"
      >
        <div className="beta-shell beta-safety-response__layout">
          <div>
            <p className="beta-eyebrow">Awareness, action, and response</p>
            <h2 id="safety-response-title">
              A signal, a notification, an automation, and a response are not
              the same thing.
            </h2>
          </div>
          <div className="beta-safety-response__steps">
            <article>
              <span>01</span>
              <h3>Awareness</h3>
              <p>A supported device observes a selected condition.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Notification</h3>
              <p>A reviewed path may inform selected people or services.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Optional automation</h3>
              <p>
                A compatible design may perform a selected action, including a
                qualified water-shutoff path.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Human or third-party response</h3>
              <p>
                A person or separately arranged service decides and performs
                the appropriate next step.
              </p>
            </article>
          </div>
          <p className="beta-safety-response__boundary">
            Water shutoff requires validated valve, plumbing, power,
            connectivity, and site compatibility. No design guarantees damage
            prevention, uninterrupted alert delivery, or emergency response.
          </p>
        </div>
      </section>

      <section
        className="beta-section beta-safety-ownership"
        aria-labelledby="safety-ownership-title"
      >
        <div className="beta-shell beta-safety-ownership__layout">
          <div>
            <p className="beta-eyebrow">
              Ownership and qualified local control
            </p>
            <h2 id="safety-ownership-title">
              Useful awareness should remain understandable and yours.
            </h2>
          </div>
          <div>
            <p>
              You own the purchased equipment. Supported core local control does
              not require a monthly fee from W. N. Y. Home Security.
            </p>
            <p>
              Some alerts, remote access, products, or third-party services may
              depend on internet access, vendor services, compatible equipment,
              or optional subscriptions. Those dependencies should be explained
              before the scope is approved.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-safety-connections"
        aria-labelledby="safety-connections-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Connections to other pillars</p>
            <h2 id="safety-connections-title">
              Home Safety can contribute to a wider property system.
            </h2>
            <p>
              Relationships are shown without creating links to beta
              destinations that are not yet implemented.
            </p>
          </header>
          <div>
            {connections.map(([name, copy]) => {
              const item = related.get(name);
              return (
                <article key={name}>
                  <h3>{name}</h3>
                  <p>{copy}</p>
                  {item?.href?.startsWith("/beta/") ? (
                    <Link to={item.href}>Explore {name} →</Link>
                  ) : (
                    <small>Dedicated beta destination in development</small>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-safety-expand"
        aria-labelledby="safety-expand-title"
      >
        <div className="beta-shell beta-safety-expand__layout">
          <div aria-hidden="true">
            <span>Observe</span>
            <span>Inform</span>
            <span>Expand</span>
          </div>
          <div>
            <p className="beta-eyebrow">Expandable by design</p>
            <h2 id="safety-expand-title">
              Start with the conditions that matter now.
            </h2>
            <p>
              A thoughtful foundation can make compatible additions easier
              without unnecessarily replacing the main system. Expansion
              remains subject to capacity, product lifecycle, placement, site
              conditions, and reviewed compatibility.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-safety-learn"
        aria-labelledby="safety-learn-title"
      >
        <div className="beta-shell beta-safety-learn__layout">
          <div>
            <p className="beta-eyebrow">Education and planning</p>
            <h2 id="safety-learn-title">
              Make the boundaries as clear as the benefits.
            </h2>
            <p>
              These topics preview useful planning conversations without
              turning this page into a technical or emergency-response guide.
            </p>
          </div>
          <ul>
            {learningTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <Link className="beta-action beta-action--secondary" to="/faq">
            Explore Common Questions
          </Link>
        </div>
      </section>

      <section
        className="beta-final-cta beta-safety-final"
        aria-labelledby="safety-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Start with the property</p>
          <h2 id="safety-final-title">
            Let’s identify which conditions deserve earlier awareness.
          </h2>
          <p>
            Tell us which rooms, systems, and concerns matter. We will review
            the property, equipment compatibility, dependencies, and supported
            response paths before recommending a sensible next step.
          </p>
          <Link className="beta-action" to={assessmentHref}>
            Request a Property Assessment
          </Link>
          <p className="beta-trust-line beta-centered">
            Requesting an assessment is not a purchase agreement.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BetaSafety;

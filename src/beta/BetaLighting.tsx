import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaLighting.css";

const concerns = [
  "Dark entries, walkways, steps, or room transitions are difficult to use comfortably.",
  "Exterior lighting is inconsistent, overly bright, or poorly matched to the property.",
  "The same lighting changes repeat every morning, evening, arrival, and bedtime.",
  "Several applications or controls make whole-property lighting difficult to understand.",
  "Family members need simpler control without losing familiar physical switches.",
  "Seasonal presentation requires repeated temporary setup instead of a reusable reviewed design.",
] as const;

const capabilities = [
  [
    "Entry and pathway lighting",
    "Improve selected arrivals, walkways, steps, and transitions with useful, comfortable light.",
    "Placement, fixtures, circuits, glare, and controls require property review.",
  ],
  [
    "Interior daily-use lighting",
    "Coordinate selected kitchens, living areas, halls, and frequently used rooms around everyday routines.",
    "Existing wiring, loads, switches, and fixture behavior determine what is supportable.",
  ],
  [
    "Evening and nighttime lighting",
    "Use selected low-level paths, room states, or bedtime scenes while retaining normal control.",
    "No lighting design guarantees prevention of falls, accidents, or other risks.",
  ],
  [
    "Architectural and accent lighting",
    "Support selected surfaces, details, and outdoor living areas without making the property feel theatrical.",
    "Final appearance depends on placement, materials, fixture output, and the reviewed design.",
  ],
  [
    "Exterior and landscape lighting",
    "Coordinate selected entry, driveway, patio, landscape, or detached-area lighting where eligible.",
    "Weather, power, transformers, circuits, access, and electrical scope require review.",
  ],
  [
    "Security-support lighting",
    "Make selected exterior lighting easier to activate through a customer action or supported event.",
    "Lighting supports awareness and visibility; it does not prevent crime or replace security equipment.",
  ],
  [
    "Scenes and schedules",
    "Reuse customer-readable states such as Welcome, Evening, Good Night, or All Off.",
    "Schedules, sunrise/sunset conditions, and scene participation depend on compatible controls.",
  ],
  [
    "Permanent exterior lighting",
    "Use a site-designed exterior system for architectural white light and selected seasonal or event scenes.",
    "Vendor, roofline, power, weather, mounting, support, and color behavior remain custom-review items.",
  ],
] as const;

const scenarios = [
  [
    "Evening arrival",
    "Selected driveway, pathway, entry, and interior lighting may coordinate with a supported arrival or customer action. Manual control remains available.",
  ],
  [
    "Bedtime routine",
    "Selected interior lights may adjust while exterior lighting moves to the customer's preferred nighttime state and useful paths remain available.",
  ],
  [
    "Nighttime movement",
    "Low-level selected pathway lighting may respond to time, motion, or customer input where supported, with reduced glare and normal controls retained.",
  ],
  [
    "Security-support lighting",
    "A supported event or customer action may activate selected exterior lights and show status in the Property Dashboard. No crime-prevention outcome is promised.",
  ],
  [
    "Seasonal or event scene",
    "Selected permanent exterior lighting may use customer-chosen, labeled patterns while ordinary architectural white lighting remains available.",
  ],
  [
    "Game-day or celebration scene",
    "A customer-controlled scene may use physically believable repeated color groups without logos, official-affiliation claims, or exact-color guarantees.",
  ],
  [
    "Away routine",
    "Selected lighting may follow a reviewed schedule or supported property mode without claiming deterrence or a guaranteed security outcome.",
  ],
] as const;

const controlModes = [
  [
    "Physical switches and keypads",
    "Familiar wall control should remain available where practical.",
  ],
  [
    "Property Dashboard",
    "Supported zones, scenes, schedules, and status may share one plain-language view.",
  ],
  [
    "Customer-selected scenes",
    "A labeled control can start a reviewed group of selected lighting actions.",
  ],
  [
    "Schedules and sun conditions",
    "Selected behavior may follow time, sunrise, or sunset where the design supports it.",
  ],
  [
    "Supported property conditions",
    "Motion, entry, security, safety, or property modes may inform selected lighting behavior after review.",
  ],
  [
    "Manual overrides and fallback",
    "Customers retain an understandable way to take control, disable behavior, and recover from a dependency loss.",
  ],
] as const;

const connections = [
  [
    "Home Security",
    "Selected entry or property events may coordinate useful exterior lighting without promising prevention.",
  ],
  [
    "Aging in Place",
    "Low-level pathways and simpler controls may support easier non-medical nighttime routines.",
  ],
  [
    "Home Safety",
    "Selected lighting may help communicate or respond to a supported condition while dedicated safety owners remain controlling.",
  ],
  [
    "Home Automation",
    "Arrival, departure, bedtime, entertainment, and property modes may coordinate supported lighting.",
  ],
  [
    "Property Management",
    "Selected exterior, landscape, seasonal, and wider-property lighting may contribute to a managed property view.",
  ],
] as const;

const learningTopics = [
  "Planning entry and pathway lighting",
  "Choosing comfortable color temperature and reducing glare",
  "Preserving physical switches and manual control",
  "Permanent exterior lighting for everyday white light and selected scenes",
  "Lighting scenes versus broader automation",
  "Reviewing wiring, compatibility, local control, and future expansion",
] as const;

function BetaLighting() {
  const related = new Map(
    betaSolutionNavigation.map((item) => [item.label, item]),
  );

  return (
    <div className="beta-lighting-page">
      <section className="beta-lighting-hero" aria-labelledby="lighting-title">
        <div className="beta-shell beta-lighting-hero__layout">
          <div>
            <p className="beta-eyebrow">Professionally designed illumination</p>
            <h1 id="lighting-title">Home Lighting</h1>
            <p className="beta-lighting-hero__lead">
              Make supported indoor and outdoor lighting easier, more
              consistent, and better aligned with daily routines.
            </p>
            <p>
              Improve selected visibility, comfort, architectural character,
              exterior presentation, and customer-controlled scenes through one
              reviewed property design.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#lighting-capabilities"
              >
                Explore Lighting Capabilities
              </a>
            </div>
            <p className="beta-trust-line">
              Circuits, wiring, loads, locations, controls, fixtures, and
              integrations require compatibility review. Familiar manual control
              remains part of the design.
            </p>
          </div>
          <div
            className="beta-lighting-hero__visual"
            aria-label="Illustrative architectural lighting composition"
          >
            <span>Practical light first</span>
            <strong>Visibility. Character. Control.</strong>
            <div>
              <i>Welcome</i>
              <i>Evening</i>
              <i>Pathway</i>
              <i>All Off</i>
            </div>
            <small>
              Illustrative lighting composition—not a customer installation.
            </small>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-lighting-outcome"
        aria-labelledby="lighting-system-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">Lighting as a property system</p>
            <h2 id="lighting-system-title">
              More useful, consistent lighting with simpler everyday control.
            </h2>
          </div>
          <div>
            <p>
              Home Lighting can coordinate selected indoor and outdoor areas
              around practical outcomes, customer priorities, and the way the
              property is actually used.
            </p>
            <p>
              It begins with visibility and everyday function, then may add
              atmosphere, architectural character, seasonal presentation, and
              wider property coordination where supported.
            </p>
          </div>
        </div>
        <div className="beta-shell beta-lighting-compare__grid">
          <article>
            <span>Isolated lighting control</span>
            <h3>Separate schedules, applications, and controls.</h3>
            <ul>
              <li>Repeated manual steps</li>
              <li>Inconsistent room and exterior behavior</li>
              <li>Limited whole-property visibility</li>
              <li>Controls that may not match household routines</li>
            </ul>
          </article>
          <article>
            <span>Professionally designed lighting</span>
            <h3>Selected areas coordinated around useful experiences.</h3>
            <ul>
              <li>Physical controls retained</li>
              <li>Customer-readable scenes and schedules</li>
              <li>Property Dashboard control where supported</li>
              <li>
                Design based on actual circuits, wiring, fixtures, layout, and
                compatibility
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-lighting-friction"
        aria-labelledby="lighting-concerns-title"
      >
        <div className="beta-shell beta-lighting-friction__layout">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Common lighting concerns</p>
            <h2 id="lighting-concerns-title">
              The property should not be harder to use after the sun goes down.
            </h2>
            <p>
              Start with the dark areas, repeated actions, glare, disconnected
              controls, and exterior presentation that deserve a better
              experience.
            </p>
          </header>
          <ol>
            {concerns.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="lighting-capabilities"
        className="beta-section beta-lighting-capabilities"
        aria-labelledby="lighting-capabilities-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Supported capability groups</p>
            <h2 id="lighting-capabilities-title">
              Lighting outcomes organized around real property use.
            </h2>
            <p>
              Every capability depends on compatible circuits, wiring, loads,
              fixtures, controls, property conditions, and an approved scope.
            </p>
          </header>
          <div className="beta-lighting-capability-grid">
            {capabilities.map(([title, outcome, boundary], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{outcome}</p>
                <small>{boundary}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-lighting-scenarios"
        aria-labelledby="lighting-scenarios-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Practical lighting scenarios</p>
            <h2 id="lighting-scenarios-title">
              Begin with moments that repeat.
            </h2>
            <p>
              These examples are possible reviewed outcomes—not universal
              inclusions or promises that every existing light can participate.
            </p>
          </header>
          <div className="beta-lighting-scenario-grid">
            {scenarios.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-lighting-permanent"
        aria-labelledby="permanent-lighting-title"
      >
        <div className="beta-shell beta-lighting-permanent__layout">
          <div>
            <p className="beta-eyebrow">Permanent exterior lighting</p>
            <h2 id="permanent-lighting-title">
              Everyday architectural white light—with selected scenes when
              wanted.
            </h2>
            <p>
              A custom, site-reviewed permanent exterior system may support
              subtle curb appeal, entry and pathway use, customer-created
              scenes, and selected seasonal or event presentation.
            </p>
            <p>
              Vendor, roofline, mounting, exterior power, weather, controller,
              support, and actual color behavior must be reviewed. Permanent
              lighting does not replace dedicated security equipment.
            </p>
          </div>
          <div
            className="beta-lighting-scene-list"
            aria-label="Illustrative permanent exterior lighting scene patterns"
          >
            <article>
              <span>Architectural White</span>
              <small>Warm everyday exterior presentation</small>
            </article>
            <article>
              <span>Buffalo Football Scene</span>
              <small>
                Repeated blue, white, and red groups—no official affiliation
              </small>
            </article>
            <article>
              <span>Buffalo Hockey Scene</span>
              <small>
                Repeated blue and gold groups—no official affiliation
              </small>
            </article>
            <article>
              <span>Halloween Scene</span>
              <small>Repeated purple and orange groups</small>
            </article>
            <article>
              <span>Christmas Scene</span>
              <small>Repeated red and green groups</small>
            </article>
            <article>
              <span>Customer Party Scene</span>
              <small>Labeled customer-selected grouped pattern</small>
            </article>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--dark beta-lighting-dashboard"
        aria-labelledby="lighting-dashboard-title"
      >
        <div className="beta-shell beta-lighting-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="lighting-dashboard-title">
              Bring selected zones, scenes, schedules, and status together.
            </h2>
            <p>
              The WNY Home Security Customer Control Center may provide one
              plain-language view of supported lighting while familiar physical
              controls remain available.
            </p>
            <p className="beta-trust-line">
              This dashboard is illustrative secondary proof. It does not
              promise to replace every manufacturer control or service.
            </p>
          </div>
          <aside aria-label="Illustrative Home Lighting Property Dashboard">
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative lighting view</small>
            </header>
            <strong>Lighting and scenes</strong>
            <div>
              <span>
                Welcome lighting <b>Ready</b>
              </span>
              <span>
                Evening lighting <b>Scheduled</b>
              </span>
              <span>
                Pathway lights <b>Available</b>
              </span>
              <span>
                Exterior lights <b>Manual control</b>
              </span>
              <span>
                Holiday scene <b>Available</b>
              </span>
              <span>
                All lights off <b>Scene</b>
              </span>
            </div>
            <small>
              Actual zones, scenes, status, and controls depend on the approved
              design and installed compatible equipment.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-lighting-control"
        aria-labelledby="lighting-control-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">
              Manual controls, schedules, scenes, and automation
            </p>
            <h2 id="lighting-control-title">
              Useful lighting should remain understandable when someone reaches
              for a switch.
            </h2>
            <p>
              Customer-selected behavior may use physical controls, dashboard
              actions, scenes, schedules, sun conditions, or supported property
              events without making basic lighting confusing.
            </p>
          </header>
          <div className="beta-lighting-control__grid">
            {controlModes.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="beta-lighting-control__boundary">
            Behavior depends on compatible equipment, wiring, power, network,
            and service availability. Some electrical work may require an
            appropriately qualified trade. This page provides no electrical
            installation instructions or code-compliance promise.
          </p>
        </div>
      </section>

      <section
        className="beta-section beta-lighting-ownership"
        aria-labelledby="lighting-ownership-title"
      >
        <div className="beta-shell beta-lighting-ownership__layout">
          <div>
            <p className="beta-eyebrow">
              Ownership and qualified local control
            </p>
            <h2 id="lighting-ownership-title">
              Your lighting experience should remain clear, supportable, and
              yours.
            </h2>
          </div>
          <div>
            <p>
              You own purchased equipment where applicable and choose the
              approved scenes and routines. Supported core local control does
              not require a monthly fee from W. N. Y. Home Security.
            </p>
            <p>
              Standard WNYHS lighting deployments use a WNY Home Security
              customer control experience powered by Home Assistant. Customers
              see plain-language WNYHS controls rather than technical
              implementation vocabulary.
            </p>
            <p>
              Some products, remote features, integrations, licenses, or
              services may still depend on internet access, manufacturer clouds,
              or optional subscriptions. Availability and future compatibility
              are not guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-lighting-connections"
        aria-labelledby="lighting-connections-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Connections to other pillars</p>
            <h2 id="lighting-connections-title">
              Lighting can support a wider property experience.
            </h2>
            <p>
              Implemented beta destinations are linked. Future destinations
              remain clearly non-clickable.
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
        className="beta-section beta-lighting-expand"
        aria-labelledby="lighting-expand-title"
      >
        <div className="beta-shell beta-lighting-expand__layout">
          <div aria-hidden="true">
            <span>Select an area</span>
            <span>Design useful control</span>
            <span>Expand after review</span>
          </div>
          <div>
            <p className="beta-eyebrow">Start with selected areas</p>
            <h2 id="lighting-expand-title">
              Begin where better lighting would matter most.
            </h2>
            <p>
              A front entry, pathway, nighttime hall, kitchen, living area,
              exterior security-support area, permanent roofline, or one
              repeatable scene can establish a useful foundation.
            </p>
            <p>
              Compatible areas may be added later after review. Expansion can
              require additional equipment, electrical work, labor,
              configuration, service support, and product availability.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-lighting-learn"
        aria-labelledby="lighting-learn-title"
      >
        <div className="beta-shell beta-lighting-learn__layout">
          <div>
            <p className="beta-eyebrow">Education and planning</p>
            <h2 id="lighting-learn-title">
              Plan for practical light before choosing effects.
            </h2>
            <p>
              These topics preview useful assessment conversations without
              creating a separate education hub.
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
        className="beta-final-cta beta-lighting-final"
        aria-labelledby="lighting-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Start with the property</p>
          <h2 id="lighting-final-title">
            Let’s identify where better lighting would make daily life easier.
          </h2>
          <p>
            Tell us about dark areas, repeated routines, exterior presentation,
            controls, and future scene ideas. We will review the property,
            circuits, wiring, compatibility, electrical scope, dependencies, and
            manual-control needs before recommending a sensible next step.
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

export default BetaLighting;

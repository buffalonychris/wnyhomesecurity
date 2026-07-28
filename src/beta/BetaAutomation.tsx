import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaAutomation.css";

const frictionPoints = [
  "Several applications are needed to understand or control one property.",
  "The same lighting, comfort, entry, or equipment steps repeat every day.",
  "Property status is difficult to review before leaving or going to bed.",
  "Schedules and controls do not adapt clearly when household routines change.",
  "Family members need simpler controls without losing practical manual access.",
] as const;

const capabilities = [
  [
    "Daily routines",
    "Coordinate selected everyday actions around useful moments such as morning, leaving, arriving, or bedtime.",
    "Supported lighting, comfort, entry, and property modes may participate after compatibility review.",
  ],
  [
    "Arrival and departure support",
    "Bring selected entry lighting, supported access status, garage awareness, and property modes into a clearer sequence.",
    "The customer retains manual control and confirms which actions are appropriate.",
  ],
  [
    "Lighting coordination",
    "Use selected scenes, schedules, status, or customer input to coordinate supported lighting.",
    "Circuit, control, placement, and integration compatibility remain subject to review.",
  ],
  [
    "Climate and environmental support",
    "Coordinate selected comfort settings or responses to supported environmental conditions.",
    "Thermostat and HVAC behavior requires compatibility review and carries no savings or performance guarantee.",
  ],
  [
    "Property-response automation",
    "A supported signal may inform selected people or trigger a reviewed compatible action.",
    "Water shutoff and other consequential actions require site validation, safeguards, and a clear fallback.",
  ],
  [
    "Scenes, status, and notifications",
    "Organize selected one-touch scenes, property modes, status, and notification routing in one clearer experience.",
    "Availability depends on approved integrations, services, power, network, and the reviewed design.",
  ],
] as const;

const scenarios = [
  [
    "Leaving the property",
    "Selected lighting and property modes may change while supported lock or garage status remains visible for review. Manual control stays available.",
  ],
  [
    "Arriving home",
    "Selected entry lighting, compatible access behavior, comfort settings, and dashboard status may work together where supported.",
  ],
  [
    "An evening routine",
    "A one-touch or scheduled routine may coordinate selected interior and exterior lighting, entry status, shades, or comfort settings.",
  ],
  [
    "A water concern",
    "Supported water awareness may create a selected notification and, after site validation, a compatible shutoff action.",
  ],
  [
    "Nighttime movement",
    "Selected low-level pathway lighting may respond to time, motion, or customer input while preserving manual override.",
  ],
  [
    "A seasonal or outdoor routine",
    "Selected exterior lighting or property-care systems may follow reviewed schedules and conditions with manual control retained.",
  ],
] as const;

const operatingModes = [
  [
    "Time-based routines",
    "Selected actions may follow a reviewed schedule.",
  ],
  [
    "Customer-selected scenes",
    "A person can start a known group of supported actions.",
  ],
  [
    "Status-based actions",
    "A compatible property condition may inform a selected response.",
  ],
  [
    "Occupancy-aware behavior",
    "Selected routines may use supported presence information where appropriate and approved.",
  ],
  [
    "Manual controls",
    "Dashboard controls, switches, buttons, or keypads remain available where the design requires them.",
  ],
  [
    "Notifications",
    "Selected people may receive useful information through reviewed delivery paths.",
  ],
] as const;

const connections = [
  [
    "Home Security",
    "Selected entry or away status may coordinate supported lighting, modes, and notifications.",
  ],
  [
    "Aging in Place",
    "Simpler routines and controls can support a more manageable, non-medical household experience.",
  ],
  [
    "Home Safety",
    "A supported environmental signal may contribute to notification or a carefully reviewed response.",
  ],
  [
    "Home Lighting",
    "Scenes, arrival lighting, pathways, and schedules can support useful property routines.",
  ],
  [
    "Property Management",
    "Selected schedules, outdoor systems, and property status can contribute to a wider managed view.",
  ],
] as const;

const learningTopics = [
  "Automation versus remote control",
  "Choosing a few routines that remove real friction",
  "Preserving switches, manual controls, and fallback behavior",
  "Understanding local, internet, vendor, and service dependencies",
  "Planning notifications without creating unnecessary noise",
] as const;

function BetaAutomation() {
  const related = new Map(
    betaSolutionNavigation.map((item) => [item.label, item]),
  );

  return (
    <div className="beta-automation-page">
      <section
        className="beta-automation-hero"
        aria-labelledby="automation-title"
      >
        <div className="beta-shell beta-automation-hero__layout">
          <div>
            <p className="beta-eyebrow">Designed coordination</p>
            <h1 id="automation-title">Home Automation</h1>
            <p className="beta-automation-hero__lead">
              Coordinate supported routines and controls so the property
              responds more naturally to everyday life.
            </p>
            <p>
              Bring selected lighting, entry, comfort, awareness, and property
              modes into one clearer, professionally designed experience.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#automation-capabilities"
              >
                Explore Automation Capabilities
              </a>
            </div>
            <p className="beta-trust-line">
              Supported integrations and reviewed devices only. Manual control,
              practical fallbacks, and customer choice remain part of the
              design.
            </p>
          </div>
          <div
            className="beta-automation-hero__visual"
            aria-label="Illustrative architectural routine map"
          >
            <span>One designed property system</span>
            <strong>Less repetition. Clearer control.</strong>
            <div>
              <i>Arrive</i>
              <i>Evening</i>
              <i>Away</i>
              <i>Manual</i>
            </div>
            <small>Illustrative routine map—not a live installation.</small>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-automation-outcome"
        aria-labelledby="automation-outcome-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">The outcome</p>
            <h2 id="automation-outcome-title">
              Easier routines and more coherent everyday property control.
            </h2>
          </div>
          <div>
            <p>
              Home Automation can coordinate supported lighting, access,
              temperature, notifications, scenes, and property modes through
              reviewed integrations.
            </p>
            <p>
              The goal is practical behavior and fewer disconnected control
              steps—not technology for its own sake.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-automation-compare"
        aria-labelledby="automation-compare-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">
              Automation versus isolated device control
            </p>
            <h2 id="automation-compare-title">
              Remote control is useful. Designed coordination goes further.
            </h2>
            <p>
              Manufacturer applications and cloud services may remain useful.
              The difference is whether selected systems work together around
              an approved customer outcome.
            </p>
          </header>
          <div className="beta-automation-compare__grid">
            <article>
              <span>Isolated device control</span>
              <h3>Several controls, each doing its own job.</h3>
              <ul>
                <li>Separate applications and schedules</li>
                <li>Repeated manual steps</li>
                <li>Limited coordination between supported systems</li>
                <li>An inconsistent whole-property view</li>
              </ul>
            </article>
            <article>
              <span>Designed automation</span>
              <h3>Selected systems coordinated around practical routines.</h3>
              <ul>
                <li>One Property Dashboard where supported</li>
                <li>Reviewed time, status, presence, or customer input</li>
                <li>Understandable routines and conditions</li>
                <li>Manual control and fallback behavior retained</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-automation-friction"
        aria-labelledby="automation-friction-title"
      >
        <div className="beta-shell beta-automation-friction__layout">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Common property friction</p>
            <h2 id="automation-friction-title">
              Daily property tasks should not require unnecessary complexity.
            </h2>
            <p>
              Start with the repeated actions and unclear status that deserve a
              better experience.
            </p>
          </header>
          <ol>
            {frictionPoints.map((point, index) => (
              <li key={point}>
                <span>0{index + 1}</span>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="automation-capabilities"
        className="beta-section beta-automation-capabilities"
        aria-labelledby="automation-capabilities-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Supported capability groups</p>
            <h2 id="automation-capabilities-title">
              Useful coordination organized around outcomes.
            </h2>
            <p>
              Every capability depends on compatible equipment, supported
              integrations, property conditions, and an approved design.
            </p>
          </header>
          <div className="beta-automation-capability-grid">
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
        className="beta-section beta-automation-scenarios"
        aria-labelledby="automation-scenarios-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Practical automation scenarios</p>
            <h2 id="automation-scenarios-title">
              Begin with routines that solve a real, repeated problem.
            </h2>
            <p>
              These examples show possible coordination—not universal
              inclusions or guarantees that every product can participate.
            </p>
          </header>
          <div className="beta-automation-scenario-grid">
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
        className="beta-section beta-section--dark beta-automation-dashboard"
        aria-labelledby="automation-dashboard-title"
      >
        <div className="beta-shell beta-automation-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="automation-dashboard-title">
              Keep selected routines, status, and manual controls together.
            </h2>
            <p>
              The WNY Home Security Customer Control Center may bring supported
              property information and controls into one plain-language view.
            </p>
            <p className="beta-trust-line">
              The dashboard is secondary proof of the designed system. It does
              not promise to replace every manufacturer interface or service.
            </p>
          </div>
          <aside aria-label="Illustrative Home Automation Property Dashboard">
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative automation view</small>
            </header>
            <strong>Routines and status</strong>
            <div>
              <span>
                Morning routine <b>Ready</b>
              </span>
              <span>
                Away routine <b>Available</b>
              </span>
              <span>
                Evening routine <b>Scheduled</b>
              </span>
              <span>
                Exterior lights <b>Manual control</b>
              </span>
              <span>
                Selected alerts <b>On</b>
              </span>
            </div>
            <small>
              Actual routines, status, and controls depend on the approved
              design and supported integrations.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-automation-control"
        aria-labelledby="automation-control-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">
              Conditions, routines, and manual control
            </p>
            <h2 id="automation-control-title">
              Understandable automation should never hide how to take control.
            </h2>
            <p>
              Customer-selected conditions define behavior. Appropriate
              physical controls, dashboard controls, disable paths, and
              recovery behavior remain part of the reviewed design.
            </p>
          </header>
          <div className="beta-automation-control__grid">
            {operatingModes.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="beta-automation-control__boundary">
            Behavior depends on compatible equipment, power, network, and
            service availability. Automation does not make every decision and
            does not remove the need for customer judgment or practical
            fallback controls.
          </p>
        </div>
      </section>

      <section
        className="beta-section beta-automation-ownership"
        aria-labelledby="automation-ownership-title"
      >
        <div className="beta-shell beta-automation-ownership__layout">
          <div>
            <p className="beta-eyebrow">
              Ownership and qualified local control
            </p>
            <h2 id="automation-ownership-title">
              The customer experience should remain clear, supportable, and
              yours.
            </h2>
          </div>
          <div>
            <p>
              You own the purchased equipment and choose the approved routines.
              Supported core local control does not require a monthly fee from
              W. N. Y. Home Security.
            </p>
            <p>
              Standard WNYHS automation deployments use a WNY Home Security
              customer control experience powered by Home Assistant. Customers
              see plain-language WNYHS controls rather than technical
              implementation vocabulary.
            </p>
            <p>
              Some products, remote features, integrations, or services may
              still depend on internet access, manufacturer clouds, or optional
              subscriptions. Those dependencies should be explained before the
              scope is approved.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-automation-connections"
        aria-labelledby="automation-connections-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Connections to other pillars</p>
            <h2 id="automation-connections-title">
              Automation can coordinate supported outcomes across the property.
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
        className="beta-section beta-automation-expand"
        aria-labelledby="automation-expand-title"
      >
        <div className="beta-shell beta-automation-expand__layout">
          <div aria-hidden="true">
            <span>Choose</span>
            <span>Coordinate</span>
            <span>Review</span>
          </div>
          <div>
            <p className="beta-eyebrow">Start useful. Expand thoughtfully.</p>
            <h2 id="automation-expand-title">
              Begin with a few routines that matter.
            </h2>
            <p>
              An arrival routine, evening scene, selected lighting, property
              status, or environmental alert can establish a useful foundation.
              Compatible additions may follow after future review.
            </p>
            <p>
              Expansion can require additional equipment, labor,
              configuration, and service support. Product lifecycle, capacity,
              site conditions, and compatibility still apply.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-automation-learn"
        aria-labelledby="automation-learn-title"
      >
        <div className="beta-shell beta-automation-learn__layout">
          <div>
            <p className="beta-eyebrow">Education and planning</p>
            <h2 id="automation-learn-title">
              Plan routines around real habits—not novelty.
            </h2>
            <p>
              These topics preview useful planning conversations without
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
        className="beta-final-cta beta-automation-final"
        aria-labelledby="automation-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Start with daily life</p>
          <h2 id="automation-final-title">
            Let’s identify which routines would remove useful friction.
          </h2>
          <p>
            Tell us which repeated actions, controls, and property conditions
            matter. We will review the property, compatibility, dependencies,
            safeguards, and manual-control needs before recommending a sensible
            next step.
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

export default BetaAutomation;

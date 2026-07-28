import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaSolutions.css";

const pillarContent = [
  {
    outcome:
      "Clearer awareness and control around selected entry and property areas.",
    examples: "Entry awareness · Supported camera views · Compatible access",
  },
  {
    outcome:
      "A more manageable home and better non-medical awareness for the people you choose.",
    examples: "Easier routines · Night paths · Selected family notifications",
  },
  {
    outcome: "Earlier awareness of selected conditions that deserve attention.",
    examples: "Water presence · Temperature trends · Humidity awareness",
  },
  {
    outcome: "Easier routines and more coherent everyday property control.",
    examples: "Property modes · Useful scenes · Supported control routines",
  },
  {
    outcome: "More useful, consistent lighting with simpler everyday control.",
    examples: "Entry lighting · Night paths · Exterior routines",
  },
  {
    outcome:
      "A clearer view of selected property conditions and everyday operations.",
    examples: "Second-property status · Outbuildings · Selected property modes",
  },
] as const;

const scenarios = [
  {
    number: "01",
    title: "A more useful arrival",
    copy: "Supported entry awareness, compatible access features, and entry lighting can work together so arrival takes fewer disconnected steps.",
    pillars: "Security · Lighting · Automation",
  },
  {
    number: "02",
    title: "Earlier water awareness",
    copy: "A selected water signal can provide earlier awareness and, where the reviewed design supports it, connect with a compatible shutoff response.",
    pillars: "Safety · Automation · Property Management",
  },
  {
    number: "03",
    title: "Respectful everyday support",
    copy: "Non-medical home awareness, night-path lighting, and selected notifications can support easier routines without replacing caregivers or emergency services.",
    pillars: "Aging in Place · Lighting · Safety",
  },
  {
    number: "04",
    title: "A clearer Away mode",
    copy: "Selected entry status, exterior lighting routines, camera views, and property signals can be organized around a supported Away or Vacation mode.",
    pillars: "Security · Lighting · Property Management",
  },
] as const;

const designReasons = [
  [
    "Start with the property",
    "Priorities, site conditions, compatibility, and the approved scope shape the design.",
  ],
  [
    "Connect only what is supported",
    "Useful relationships are selected deliberately instead of assuming every product works together.",
  ],
  [
    "Explain the finished system",
    "The handoff identifies what you own, what depends on other services, and where to get help.",
  ],
] as const;

function BetaSolutions() {
  return (
    <div className="beta-solutions-page">
      <section
        className="beta-solutions-hero"
        aria-labelledby="solutions-page-title"
      >
        <div className="beta-shell beta-solutions-hero__layout">
          <div className="beta-solutions-hero__copy">
            <p className="beta-eyebrow">Whole-property solutions</p>
            <h1 id="solutions-page-title">Six ways to improve one property.</h1>
            <p className="beta-solutions-hero__support">
              Explore security, aging support, safety awareness, automation,
              lighting, and property management as connected parts of one
              professionally designed system.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#solution-pillars"
              >
                Explore the Six Pillars
              </a>
            </div>
            <p className="beta-trust-line">
              We recommend only supported capabilities that the reviewed design
              can actually deliver.
            </p>
          </div>
          <div
            className="beta-solutions-map"
            aria-label="Six solution pillars connected around one designed property system"
          >
            <strong>One designed system</strong>
            <div>
              {betaSolutionNavigation.map((item, index) => (
                <span key={item.label}>
                  <small>0{index + 1}</small>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-solutions-intro"
        aria-labelledby="designed-system-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">One designed system</p>
            <h2 id="designed-system-title">
              Begin with one priority. Connect more when it makes sense.
            </h2>
          </div>
          <div>
            <p>
              Start with the problem you want to solve. Each pillar contains
              practical outcomes and can connect with related areas where the
              selected design supports it.
            </p>
            <p>
              The property, priorities, compatibility, and approved scope
              determine the final design—not a fixed box of devices.
            </p>
          </div>
        </div>
      </section>

      <section
        id="solution-pillars"
        className="beta-section beta-section--alternate beta-solutions-pillars"
        aria-labelledby="pillar-overview-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Six connected pillars</p>
            <h2 id="pillar-overview-title">
              Find the area that matches your first priority.
            </h2>
            <p>
              Every pillar can be useful on its own. The wider value appears
              when supported areas share useful status, routines, and controls.
            </p>
          </header>
          <div className="beta-solutions-pillar-grid">
            {betaSolutionNavigation.map((item, index) => {
              const content = pillarContent[index];
              const card = (
                <>
                  <div className="beta-solutions-pillar__top">
                    <span>0{index + 1}</span>
                    <small>
                      {item.href ? "Supported destination" : "In development"}
                    </small>
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <strong>{content.outcome}</strong>
                  <small>{content.examples}</small>
                  <span className="beta-solutions-pillar__action">
                    {item.href
                      ? `Explore ${item.label} →`
                      : "Dedicated destination in development"}
                  </span>
                </>
              );

              return item.href ? (
                <Link
                  className="beta-solutions-pillar"
                  to={item.href}
                  key={item.label}
                >
                  {card}
                </Link>
              ) : (
                <article
                  className="beta-solutions-pillar beta-solutions-pillar--provisional"
                  key={item.label}
                  aria-label={`${item.label}, destination in development`}
                >
                  {card}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-solutions-scenarios"
        aria-labelledby="scenario-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Coordinated outcomes</p>
            <h2 id="scenario-title">
              Several priorities can become one clearer experience.
            </h2>
            <p>
              These examples show how supported areas may relate. They are not
              universal inclusions or guarantees.
            </p>
          </header>
          <div className="beta-solutions-scenario-grid">
            {scenarios.map((scenario) => (
              <article key={scenario.title}>
                <span>{scenario.number}</span>
                <h3>{scenario.title}</h3>
                <p>{scenario.copy}</p>
                <small>{scenario.pillars}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--dark beta-solutions-dashboard"
        aria-labelledby="dashboard-title"
      >
        <div className="beta-shell beta-solutions-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="dashboard-title">
              The Property Dashboard brings the selected system into view.
            </h2>
            <p>
              Supported status, alerts, scenes, and everyday controls can be
              brought into one primary interface. What appears there depends on
              the reviewed integrations and selected system.
            </p>
            <p className="beta-trust-line">
              The dashboard is the interface—not the whole solution.
            </p>
          </div>
          <aside
            className="beta-solutions-dashboard__preview"
            aria-label="Illustrative Property Dashboard"
          >
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative view</small>
            </header>
            <strong>Property overview</strong>
            <p>Selected conditions in one calm view.</p>
            <div>
              <span>
                Entry <strong>Closed</strong>
              </span>
              <span>
                Evening routine <strong>Ready</strong>
              </span>
              <span>
                Water areas <strong>Clear</strong>
              </span>
              <span>
                Garage <strong>Appears closed</strong>
              </span>
            </div>
            <small>
              Actual controls depend on the approved design and supported
              integrations.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-solutions-expand"
        aria-labelledby="expand-later-title"
      >
        <div className="beta-shell beta-solutions-expand__layout">
          <div className="beta-solutions-expand__path" aria-hidden="true">
            <span>Start</span>
            <span>Connect</span>
            <span>Expand</span>
          </div>
          <div>
            <p className="beta-eyebrow">Expandable by design</p>
            <h2 id="expand-later-title">
              Start with what matters now. Plan for what may come next.
            </h2>
            <p>
              A well-designed foundation can make it easier to add compatible
              capabilities later while preserving the main control experience.
              Expansion still depends on capacity, product lifecycle, site
              conditions, and reviewed compatibility.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-solutions-design"
        aria-labelledby="professional-design-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Why professional design matters</p>
            <h2 id="professional-design-title">
              Useful connections begin with responsible choices.
            </h2>
          </header>
          <div className="beta-solutions-design__grid">
            {designReasons.map(([title, copy], index) => (
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
        className="beta-section beta-solutions-learn"
        aria-labelledby="learn-before-title"
      >
        <div className="beta-shell beta-solutions-learn__layout">
          <div>
            <p className="beta-eyebrow">Education before pressure</p>
            <h2 id="learn-before-title">
              Clear answers help you choose the right starting point.
            </h2>
            <p>
              Explore current common questions, then return to the solutions
              that fit your priorities. Education explains choices and
              limitations; it does not replace a property-specific assessment.
            </p>
          </div>
          <Link className="beta-action beta-action--secondary" to="/faq">
            Explore Common Questions
          </Link>
        </div>
      </section>

      <section
        className="beta-final-cta beta-solutions-final"
        aria-labelledby="solutions-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Ready to discuss the property?</p>
          <h2 id="solutions-final-title">
            Let’s find the right place to begin.
          </h2>
          <p>
            Tell us what you want the property to do. We will review the
            priorities, conditions, and supported paths before recommending a
            sensible next step.
          </p>
          <div className="beta-actions beta-actions--centered">
            <Link className="beta-action" to={assessmentHref}>
              Request a Property Assessment
            </Link>
            <a
              className="beta-action beta-action--secondary"
              href="#solution-pillars"
            >
              Review the Six Pillars
            </a>
          </div>
          <p className="beta-trust-line beta-centered">
            Requesting an assessment is not a purchase agreement.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BetaSolutions;

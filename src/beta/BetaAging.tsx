import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaAging.css";

const concerns = [
  "Make everyday controls and routines easier to use.",
  "Support a clearer, gentler path through the home at night.",
  "Help chosen people stay informed without turning the home into a surveillance space.",
  "Make selected entry, comfort, and property conditions easier to understand.",
  "Provide a simple, fixed way to request household assistance.",
] as const;

const capabilities = [
  [
    "Simpler everyday control",
    "Bring selected lighting, comfort, entry, and routine controls into a clearer experience.",
    "Controls are designed around the person, the property, and supported integrations.",
  ],
  [
    "Night-path lighting",
    "Use supported lighting to make selected nighttime routes easier to navigate.",
    "Placement and behavior depend on the reviewed property and approved design.",
  ],
  [
    "Entry and exit awareness",
    "Make selected door activity easier to understand for the people who are meant to know.",
    "Awareness is consent-aware and does not become a promise of constant supervision.",
  ],
  [
    "Selected family notifications",
    "Share chosen non-medical home events with specific people when the approved design supports it.",
    "The household decides who receives what information and why.",
  ],
  [
    "Environmental awareness",
    "Bring selected water, temperature, humidity, or comfort conditions into view.",
    "Availability and response options depend on compatible products and site conditions.",
  ],
  [
    "Routine and dashboard support",
    "Organize selected status and controls around useful daily moments.",
    "The Property Dashboard is a clear interface—not a clinical monitoring system.",
  ],
] as const;

const scenarios = [
  [
    "A calmer evening routine",
    "Selected lighting, door status, comfort controls, and a simple Good Night routine may work together where the reviewed design supports them.",
  ],
  [
    "Easier nighttime movement",
    "Supported pathway lighting can make a selected route easier to follow without requiring several switches or applications.",
  ],
  [
    "Respectful family awareness",
    "Chosen people may receive selected non-medical home notifications with the household’s knowledge and approval.",
  ],
  [
    "Earlier property awareness",
    "A supported water or temperature signal may provide useful notice that a selected area deserves attention.",
  ],
  [
    "Simpler entry support",
    "Supported entry status, lighting, and compatible access features may be organized into a clearer arrival experience.",
  ],
] as const;

const connections = [
  [
    "Home Security",
    "Selected entry awareness can contribute to a clearer household view without medical or surveillance framing.",
  ],
  [
    "Home Safety",
    "Water, temperature, humidity, and other selected property conditions may support earlier awareness.",
  ],
  [
    "Home Lighting",
    "Pathway, entry, and routine lighting can make everyday movement and control easier.",
  ],
  [
    "Home Automation",
    "Supported routines can reduce repetitive steps around selected daily moments.",
  ],
  [
    "Property Management",
    "Selected household and property status may contribute to a wider, permission-based view.",
  ],
] as const;

const learningTopics = [
  "Planning respectful, non-medical home awareness",
  "Choosing who receives selected notifications",
  "Making lighting and controls easier to use",
  "Understanding local control and service dependencies",
] as const;

function BetaAging() {
  const related = new Map(
    betaSolutionNavigation.map((item) => [item.label, item]),
  );

  return (
    <div className="beta-aging-page">
      <section className="beta-aging-hero" aria-labelledby="aging-title">
        <div className="beta-shell beta-aging-hero__layout">
          <div>
            <p className="beta-eyebrow">Independence with dignity</p>
            <h1 id="aging-title">Aging in Place</h1>
            <p className="beta-aging-hero__lead">
              Support independence with respectful, non-medical awareness,
              easier routines, and selected family notifications.
            </p>
            <p>
              Create a more manageable home around the people who live there,
              with supported lighting, controls, property awareness, and chosen
              connections brought into one thoughtful system.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#aging-capabilities"
              >
                Explore Aging in Place Capabilities
              </a>
            </div>
            <p className="beta-trust-line">
              Non-medical home awareness and convenience—not clinical care,
              emergency response, or a substitute for personal support.
            </p>
          </div>
          <div
            className="beta-aging-hero__visual"
            aria-label="Illustrative architectural home support map"
          >
            <span>Designed around daily life</span>
            <strong>More ease. More choice. More dignity.</strong>
            <div>
              <i>Entry</i>
              <i>Night path</i>
              <i>Comfort</i>
              <i>Family view</i>
            </div>
            <small>Illustrative layout—not a customer installation.</small>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-aging-outcome"
        aria-labelledby="aging-outcome-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">The outcome</p>
            <h2 id="aging-outcome-title">
              A more manageable home with respectful awareness for the people
              you choose.
            </h2>
          </div>
          <div>
            <p>
              Aging in Place solutions can make selected routines, lighting,
              entry awareness, comfort controls, and non-medical notifications
              easier to understand and use.
            </p>
            <p>
              The design begins with the person, the household, consent, and the
              property—not a label, assumption, or fixed list of equipment.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate"
        aria-labelledby="aging-concerns-title"
      >
        <div className="beta-shell beta-aging-concerns">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Common household priorities</p>
            <h2 id="aging-concerns-title">
              Start with what would make daily life easier.
            </h2>
            <p>
              Good design supports independence without turning ordinary life
              into a technical or clinical experience.
            </p>
          </header>
          <ul>
            {concerns.map((concern, index) => (
              <li key={concern}>
                <span>0{index + 1}</span>
                {concern}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="aging-capabilities"
        className="beta-section beta-aging-capabilities"
        aria-labelledby="aging-capabilities-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Supported capability groups</p>
            <h2 id="aging-capabilities-title">
              Useful support organized around people—not products.
            </h2>
            <p>
              Every capability remains subject to consent, compatibility,
              property conditions, and the approved design.
            </p>
          </header>
          <div className="beta-aging-capability-grid">
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
        className="beta-section beta-aging-scenarios"
        aria-labelledby="aging-scenarios-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Everyday support scenarios</p>
            <h2 id="aging-scenarios-title">
              Selected capabilities can make ordinary moments simpler.
            </h2>
            <p>
              These are qualified examples, not universal inclusions,
              guarantees, or health assessments.
            </p>
          </header>
          <div className="beta-aging-scenario-grid">
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
        className="beta-section beta-section--dark beta-aging-dashboard"
        aria-labelledby="aging-dashboard-title"
      >
        <div className="beta-shell beta-aging-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="aging-dashboard-title">
              Keep selected household information clear and approachable.
            </h2>
            <p>
              Supported controls, property status, routines, and chosen
              notifications may appear together where the approved system
              supports them.
            </p>
            <p className="beta-trust-line">
              This illustrative dashboard shows property information—not health
              data, diagnosis, or continuous supervision.
            </p>
          </div>
          <aside aria-label="Illustrative Aging in Place Property Dashboard">
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative household view</small>
            </header>
            <strong>Home overview</strong>
            <div>
              <span>
                Entry <b>Closed</b>
              </span>
              <span>
                Evening lights <b>Ready</b>
              </span>
              <span>
                Comfort <b>Set</b>
              </span>
              <span>
                Water areas <b>Clear</b>
              </span>
              <span>
                Family update <b>Selected</b>
              </span>
            </div>
            <small>
              Actual status, controls, and recipients depend on the approved
              design and supported integrations.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-aging-dignity"
        aria-labelledby="aging-dignity-title"
      >
        <div className="beta-shell beta-aging-dignity__layout">
          <div>
            <p className="beta-eyebrow">Privacy, dignity, and consent</p>
            <h2 id="aging-dignity-title">
              Awareness should respect the person who lives there.
            </h2>
          </div>
          <div>
            <p>
              The household should understand what information is collected, who
              can see it, and which selected events may create a notification.
            </p>
            <p>
              Family awareness must be permission-based and limited to the
              agreed purpose. Remote support is support—not surveillance.
            </p>
            <p>
              These systems provide non-medical awareness and convenience. They
              do not diagnose conditions, provide clinical oversight, contact
              emergency services, or replace people.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-aging-ownership"
        aria-labelledby="aging-ownership-title"
      >
        <div className="beta-shell beta-aging-ownership__layout">
          <div>
            <p className="beta-eyebrow">
              Ownership and qualified local control
            </p>
            <h2 id="aging-ownership-title">
              A useful foundation should remain understandable and yours.
            </h2>
          </div>
          <div>
            <p>
              You own the purchased equipment. Supported core local control does
              not require a monthly fee from W. N. Y. Home Security.
            </p>
            <p>
              Some capabilities may depend on internet access, vendor services,
              compatible hardware, or optional third-party subscriptions. Those
              dependencies should be explained before the scope is approved.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-aging-connections"
        aria-labelledby="aging-connections-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Connections to other pillars</p>
            <h2 id="aging-connections-title">
              Everyday support can connect with a wider property system.
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
        className="beta-section beta-aging-expand"
        aria-labelledby="aging-expand-title"
      >
        <div className="beta-shell beta-aging-expand__layout">
          <div aria-hidden="true">
            <span>Listen</span>
            <span>Design</span>
            <span>Adapt</span>
          </div>
          <div>
            <p className="beta-eyebrow">Expandable by design</p>
            <h2 id="aging-expand-title">
              Begin with today’s priorities. Adapt as life changes.
            </h2>
            <p>
              A thoughtful foundation can make compatible additions easier
              without unnecessarily replacing the main system. Expansion remains
              subject to capacity, product lifecycle, site conditions, consent,
              and reviewed compatibility.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-aging-learn"
        aria-labelledby="aging-learn-title"
      >
        <div className="beta-shell beta-aging-learn__layout">
          <div>
            <p className="beta-eyebrow">Education and planning</p>
            <h2 id="aging-learn-title">
              Plan respectful support with clearer questions.
            </h2>
            <p>
              These topics preview useful conversations without turning this
              page into a technical or clinical guide.
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
        className="beta-final-cta beta-aging-final"
        aria-labelledby="aging-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Start with the person and the property</p>
          <h2 id="aging-final-title">
            Let’s design around what would make everyday life easier.
          </h2>
          <p>
            Tell us which routines, spaces, and household priorities matter. We
            will review the property, consent boundaries, compatibility, and
            supported paths before recommending a sensible next step.
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

export default BetaAging;

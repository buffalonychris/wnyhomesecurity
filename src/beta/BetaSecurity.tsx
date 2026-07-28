import { Link } from "react-router-dom";
import { assessmentHref, betaSolutionNavigation } from "./navigation";
import "./BetaSecurity.css";

const concerns = [
  "Know when selected exterior doors or windows are open.",
  "See important entry, driveway, garage, and package areas.",
  "Check supported locks and selected camera views.",
  "Receive practical alerts chosen for the property.",
  "Review selected property status before Away or bedtime.",
] as const;

const capabilities = [
  [
    "Entry awareness",
    "Understand selected door and window status in one clearer view.",
    "Can support alerts, routines, and a wider property-status review.",
  ],
  [
    "Video awareness",
    "Bring supported camera views for selected areas into the planned experience.",
    "May connect entry, driveway, garage, and exterior context where supported.",
  ],
  [
    "Access control",
    "Check and manage supported locks and access features where compatible.",
    "Can connect selected access status with arrival, Away, or bedtime routines.",
  ],
  [
    "Selected alerts",
    "Choose practical notifications around the events that matter most.",
    "Alert paths depend on the reviewed design, connectivity, and supported services.",
  ],
  [
    "Garage and exterior awareness",
    "See selected garage, gate, driveway, yard, or entrance conditions.",
    "May coordinate with supported lighting, cameras, and property modes.",
  ],
  [
    "Away and nighttime routines",
    "Organize selected status, lighting, and controls around repeatable property modes.",
    "Every routine is designed from approved capabilities—not assumed inclusions.",
  ],
] as const;

const scenarios = [
  [
    "Evening arrival",
    "Selected exterior lighting, entry awareness, supported lock control, and dashboard status can work together where the reviewed design supports them.",
  ],
  [
    "Away mode",
    "Selected entry status, camera views, lighting routines, and notifications may be organized around one supported Away mode.",
  ],
  [
    "Garage or driveway awareness",
    "A supported camera view, garage status, selected lighting, and a practical alert can provide clearer context around an important property area.",
  ],
  [
    "Bedtime review",
    "Selected entry and lock status, exterior lighting, and other approved conditions may appear together in one dashboard review.",
  ],
] as const;

const connections = [
  [
    "Home Lighting",
    "Selected security awareness may support useful entry or exterior lighting behavior.",
  ],
  [
    "Home Automation",
    "Door status and approved property modes can support coordinated routines.",
  ],
  [
    "Home Safety",
    "Selected environmental awareness may appear beside security status in the same dashboard.",
  ],
  [
    "Aging in Place",
    "Consent-aware family notifications may connect with selected entry awareness without medical or surveillance framing.",
  ],
  [
    "Property Management",
    "Security status may contribute to a wider view of garages, outbuildings, and eligible properties.",
  ],
] as const;

const learningTopics = [
  "Planning entry and exterior awareness",
  "Choosing useful camera locations",
  "Understanding selected alerts",
  "Local control and cloud dependencies",
] as const;

function BetaSecurity() {
  const related = new Map(
    betaSolutionNavigation.map((item) => [item.label, item]),
  );

  return (
    <div className="beta-security-page">
      <section className="beta-security-hero" aria-labelledby="security-title">
        <div className="beta-shell beta-security-hero__layout">
          <div>
            <p className="beta-eyebrow">Connected property awareness</p>
            <h1 id="security-title">Home Security</h1>
            <p className="beta-security-hero__lead">
              Improve awareness, visibility, and supported access control around
              the parts of the property that matter most.
            </p>
            <p>
              Bring selected entries, cameras, locks, and alerts into one
              professionally designed system—without forcing everyday property
              awareness across disconnected devices and applications.
            </p>
            <div className="beta-actions">
              <Link className="beta-action" to={assessmentHref}>
                Request a Property Assessment
              </Link>
              <a
                className="beta-action beta-action--secondary"
                href="#security-capabilities"
              >
                Explore Security Capabilities
              </a>
            </div>
            <p className="beta-trust-line">
              Awareness and practical control—not professional monitoring,
              dispatch, or a promise that events will be prevented.
            </p>
          </div>
          <div
            className="beta-security-hero__visual"
            aria-label="Illustrative architectural property awareness map"
          >
            <span>Designed property view</span>
            <strong>Selected areas. Clearer context.</strong>
            <div>
              <i>Entry</i>
              <i>Garage</i>
              <i>Driveway</i>
              <i>Exterior</i>
            </div>
            <small>Illustrative layout—not a customer installation.</small>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-security-outcome"
        aria-labelledby="security-outcome-title"
      >
        <div className="beta-shell beta-split">
          <div>
            <p className="beta-eyebrow">The outcome</p>
            <h2 id="security-outcome-title">
              Clearer awareness around the property areas you select.
            </h2>
          </div>
          <div>
            <p>
              Home Security solutions can bring supported entry awareness,
              camera visibility, lock status, garage status, and practical
              notifications into the wider Property Dashboard.
            </p>
            <p>
              The final design depends on reviewed coverage needs, compatible
              hardware, responsible placement, connectivity, and your
              priorities.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate"
        aria-labelledby="concerns-title"
      >
        <div className="beta-shell beta-security-concerns">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Common property concerns</p>
            <h2 id="concerns-title">Start with what you want to understand.</h2>
            <p>
              Good design begins with useful questions—not a fixed list of
              devices.
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
        id="security-capabilities"
        className="beta-section beta-security-capabilities"
        aria-labelledby="capabilities-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Supported capability groups</p>
            <h2 id="capabilities-title">
              Organized by the outcome—not the hardware aisle.
            </h2>
            <p>
              Each capability is selected only where the reviewed design and
              supported products can deliver it.
            </p>
          </header>
          <div className="beta-security-capability-grid">
            {capabilities.map(([title, outcome, connection], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{outcome}</p>
                <small>{connection}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-security-scenarios"
        aria-labelledby="security-scenarios-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Coordinated security scenarios</p>
            <h2 id="security-scenarios-title">
              Selected capabilities can work as one clearer experience.
            </h2>
            <p>
              These are qualified examples, not universal inclusions or
              guarantees.
            </p>
          </header>
          <div className="beta-security-scenario-grid">
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
        className="beta-section beta-section--dark beta-security-dashboard"
        aria-labelledby="security-dashboard-title"
      >
        <div className="beta-shell beta-security-dashboard__layout">
          <div>
            <p className="beta-eyebrow">One primary interface</p>
            <h2 id="security-dashboard-title">
              Review supported security information in the Property Dashboard.
            </h2>
            <p>
              Selected status, camera access, alerts, and routine controls may
              appear together where the approved system supports them.
            </p>
            <p className="beta-trust-line">
              The dashboard is secondary proof of the designed solution—not the
              product by itself.
            </p>
          </div>
          <aside aria-label="Illustrative Home Security Property Dashboard">
            <header>
              <span>Property Dashboard</span>
              <small>Illustrative security view</small>
            </header>
            <strong>Security overview</strong>
            <div>
              <span>
                Entry <b>Closed</b>
              </span>
              <span>
                Garage <b>Closed</b>
              </span>
              <span>
                Front door <b>Locked</b>
              </span>
              <span>
                Selected cameras <b>Available</b>
              </span>
              <span>
                Away routine <b>Ready</b>
              </span>
            </div>
            <small>
              Actual status and controls depend on the approved design and
              supported integrations.
            </small>
          </aside>
        </div>
      </section>

      <section
        className="beta-section beta-security-ownership"
        aria-labelledby="ownership-title"
      >
        <div className="beta-shell beta-security-ownership__layout">
          <div>
            <p className="beta-eyebrow">
              Ownership and qualified local control
            </p>
            <h2 id="ownership-title">
              Designed to stay understandable and in your control.
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
            <p>Privacy-conscious remote support is support—not surveillance.</p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-section--alternate beta-security-connections"
        aria-labelledby="connections-title"
      >
        <div className="beta-shell">
          <header className="beta-section-heading">
            <p className="beta-eyebrow">Connections to other pillars</p>
            <h2 id="connections-title">
              Security can contribute to a wider property system.
            </h2>
            <p>
              Relationships are shown without creating links to destinations
              that are not yet part of the beta.
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
        className="beta-section beta-security-expand"
        aria-labelledby="security-expand-title"
      >
        <div className="beta-shell beta-security-expand__layout">
          <div aria-hidden="true">
            <span>Start</span>
            <span>Connect</span>
            <span>Expand</span>
          </div>
          <div>
            <p className="beta-eyebrow">Expandable by design</p>
            <h2 id="security-expand-title">
              Begin with selected priorities. Plan for what may come next.
            </h2>
            <p>
              A thoughtful foundation can make compatible additions easier
              without unnecessarily replacing the main system. Expansion remains
              subject to capacity, product lifecycle, site conditions, and
              reviewed compatibility.
            </p>
          </div>
        </div>
      </section>

      <section
        className="beta-section beta-security-learn"
        aria-labelledby="security-learn-title"
      >
        <div className="beta-shell beta-security-learn__layout">
          <div>
            <p className="beta-eyebrow">Education and planning</p>
            <h2 id="security-learn-title">
              Know what to consider before choosing a design.
            </h2>
            <p>
              These planning topics preview useful questions without inventing a
              separate education system.
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
        className="beta-final-cta beta-security-final"
        aria-labelledby="security-final-title"
      >
        <div className="beta-shell beta-final-cta__inner">
          <p className="beta-eyebrow">Start with the property</p>
          <h2 id="security-final-title">
            Let’s design around what you want to understand and control.
          </h2>
          <p>
            Tell us which areas and concerns matter. We will review the
            property, compatibility, and supported paths before recommending a
            sensible next step.
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

export default BetaSecurity;

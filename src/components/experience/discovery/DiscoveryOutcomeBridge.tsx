import { Link } from 'react-router-dom';
import type { PropertyDiscoveryPriority } from '../../../content/experience/propertyDiscovery';

type DiscoveryOutcomeBridgeProps = {
  priority: PropertyDiscoveryPriority;
};

const DiscoveryOutcomeBridge = ({ priority }: DiscoveryOutcomeBridgeProps) => {
  const headingId = `discovery-outcome-${priority.id}`;

  return (
    <section className="discovery-outcome-bridge" aria-labelledby={headingId}>
      <div className="discovery-outcome-bridge__intro">
        <p className="discovery-outcome-bridge__eyebrow">Your discovery path</p>
        <h4 id={headingId}>From this concern to a coordinated next step.</h4>
        <p className="discovery-outcome-bridge__priority">Selected: {priority.label}</p>
      </div>

      <div className="discovery-outcome-bridge__details">
        <section aria-labelledby={`${headingId}-concern`}>
          <h5 id={`${headingId}-concern`}>What you may be trying to solve</h5>
          <p>{priority.concern}</p>
        </section>

        <section aria-labelledby={`${headingId}-outcome`}>
          <h5 id={`${headingId}-outcome`}>What a coordinated property could do</h5>
          <ul className="discovery-outcome-bridge__outcomes">
            {priority.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby={`${headingId}-categories`}>
          <h5 id={`${headingId}-categories`}>Connected public categories</h5>
          <ul className="discovery-outcome-bridge__categories">
            {priority.connectedCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section>

        <nav aria-labelledby={`${headingId}-destinations`}>
          <h5 id={`${headingId}-destinations`}>Continue in the prototype</h5>
          <div className="discovery-outcome-bridge__destinations">
            {priority.destinations.map((destination) => (
              <Link key={destination.to} to={destination.to}>
                {destination.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default DiscoveryOutcomeBridge;

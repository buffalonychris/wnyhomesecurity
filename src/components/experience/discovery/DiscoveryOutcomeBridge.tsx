import { Link } from 'react-router-dom';
import type { PropertyDiscoveryPriority } from '../../../content/experience/propertyDiscovery';

type DiscoveryOutcomeBridgeProps = {
  priority: PropertyDiscoveryPriority;
};

const categoryRoutes: Record<string, string> = {
  'Home Security': '/categories/home-security',
  'Aging in Place': '/categories/aging-in-place',
  'Home Safety': '/categories/home-safety',
  'Home Automation': '/categories/home-automation',
  'Home Lighting': '/categories/home-lighting',
  'Property Management': '/categories/property-management',
};

const DiscoveryOutcomeBridge = ({ priority }: DiscoveryOutcomeBridgeProps) => {
  const headingId = `discovery-outcome-${priority.id}`;

  return (
    <section className="discovery-outcome-bridge" aria-labelledby={headingId}>
      <div className="discovery-outcome-bridge__problem">
        <h4 id={headingId}>What you may be trying to solve</h4>
        <p>{priority.concern}</p>
      </div>

      <section className="discovery-outcome-bridge__outcome" aria-labelledby={`${headingId}-outcome`}>
        <h5 id={`${headingId}-outcome`}>What a coordinated property could do</h5>
        <p>{priority.outcomes.join(' ')}</p>
      </section>

      <nav
        className="discovery-outcome-bridge__category-navigation"
        aria-labelledby={`${headingId}-categories`}
      >
        <h5 id={`${headingId}-categories`}>Connected categories</h5>
        <ul className="discovery-outcome-bridge__categories">
          {priority.connectedCategories.map((category) => (
            <li key={category}>
              <Link to={categoryRoutes[category]}>{category}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="discovery-outcome-bridge__next"
        aria-labelledby={`${headingId}-destinations`}
      >
        <h5 id={`${headingId}-destinations`}>Explore next</h5>
        <div className="discovery-outcome-bridge__destinations">
          {priority.destinations.map((destination) => (
            <Link key={destination.to} to={destination.to}>
              {destination.label}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default DiscoveryOutcomeBridge;

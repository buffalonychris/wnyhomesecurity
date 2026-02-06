import PortalTile from '../components/PortalTile';
import SectionHeader from '../components/operator/SectionHeader';
import businessAutomationImage from '../assets/tiles/business-automation.png';
import businessSecurityImage from '../assets/tiles/business-security.png';
import elderTechImage from '../assets/tiles/elder-tech.png';
import haloImage from '../assets/tiles/halo.png';
import homeAutomationImage from '../assets/tiles/home-automation.png';
import homeSecurityImage from '../assets/tiles/home-security.png';
import mancaveImage from '../assets/tiles/mancave.png';
import operatorImage from '../assets/tiles/saas-operator.png';

const activePortals = [
  {
    title: 'Home Security',
    status: 'ACTIVE' as const,
    category: 'SECURITY',
    description: 'Local-first protection workflows with sensors, deterrence, and resilience.',
    ctaLabel: 'Enter Home Security',
    to: '/home-security',
    image: homeSecurityImage,
    imageAlt: 'Home security control surfaces and monitoring visuals',
  },
  {
    title: 'Home Automation',
    status: 'ACTIVE' as const,
    category: 'AUTOMATION',
    description: 'Deterministic routines and scenes for comfort, efficiency, and reliability.',
    ctaLabel: 'Enter Home Automation',
    to: '/home-automation',
    image: homeAutomationImage,
    imageAlt: 'Smart home automation interface and connected devices',
  },
  {
    title: 'Home Elder Tech Systems',
    status: 'ACTIVE' as const,
    category: 'ELDER TECH',
    description: 'Dignity-first in-home safety and awareness for aging-in-place.',
    ctaLabel: 'Enter Elder Tech Systems',
    to: '/elder-care-tech',
    image: elderTechImage,
    imageAlt: 'Elder tech safety monitoring and wellbeing systems',
  },
  {
    title: 'HALO PERS',
    status: 'ACTIVE' as const,
    category: 'PERS',
    description: 'Personal safety signaling with clear response pathways.',
    ctaLabel: 'Enter HALO PERS',
    to: '/halo',
    image: haloImage,
    imageAlt: 'Halo personal emergency response system visuals',
  },
  {
    title: 'SaaS Operator Platform',
    status: 'ACTIVE' as const,
    category: 'SAAS',
    description: 'Operator-grade scheduling, follow-up, and escalation workflows.',
    ctaLabel: 'Enter Operator Platform',
    to: '/operator',
    image: operatorImage,
    imageAlt: 'Operator platform dashboards and workflow controls',
  },
];

const futurePortals = [
  {
    title: 'ManCave Systems',
    status: 'COMING SOON' as const,
    category: 'LIFESTYLE',
    description: 'Specialized entertainment and environment control workflows.',
    ctaLabel: 'Coming Soon',
    image: mancaveImage,
    imageAlt: 'Man cave lifestyle systems showcase',
  },
  {
    title: 'Business Security',
    status: 'COMING SOON' as const,
    category: 'SECURITY',
    description: 'Commercial-grade protection and incident response workflows.',
    ctaLabel: 'Coming Soon',
    image: businessSecurityImage,
    imageAlt: 'Business security monitoring with enterprise control systems',
  },
  {
    title: 'Business Automation',
    status: 'COMING SOON' as const,
    category: 'AUTOMATION',
    description: 'Operational routines and deterministic facility orchestration.',
    ctaLabel: 'Coming Soon',
    image: businessAutomationImage,
    imageAlt: 'Business automation systems and facility controls',
  },
  {
    title: 'Property Management',
    status: 'COMING SOON' as const,
    category: 'OPS',
    description: 'Portfolio oversight, access coordination, and service workflows.',
    ctaLabel: 'Coming Soon',
  },
];

const RetailLanding = () => {
  return (
    <div className="space-shell hub-shell-bg">
      <div className="container section space-grid hub-shell hub-container">
        <div className="hub-hero">
          <SectionHeader
            kicker="PLATFORM HUB"
            title="KickAss Connected Systems Platform"
            subtitle="Choose your portal. Each tile opens a dedicated workspace with its own workflows, controls, and operating context."
          />
        </div>

        <section className="space-grid" aria-label="Active portals">
          <div className="portal-section-header">
            <span className="portal-section-kicker">Live Systems</span>
            <h2>Active Portals</h2>
            <p>Launch live workspaces with dedicated workflows and controls.</p>
            <span className="portal-section-divider" aria-hidden="true" />
          </div>
          <div className="space-grid portal-grid portal-grid-active">
            {activePortals.map((card) => (
              <PortalTile key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="space-grid" aria-label="Future portals">
          <div className="portal-section-header">
            <span className="portal-section-kicker">Roadmap Queue</span>
            <h2>Future Portals</h2>
            <p>Roadmapped workspaces staged for upcoming launches.</p>
            <span className="portal-section-divider" aria-hidden="true" />
          </div>
          <div className="space-grid portal-grid portal-grid-future">
            {futurePortals.map((card) => (
              <PortalTile key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetailLanding;

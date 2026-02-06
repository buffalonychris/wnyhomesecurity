import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import ChartCard from './operator/ChartCard';
import SectionHeader from './operator/SectionHeader';
import SpaceFrame from './operator/SpaceFrame';
import AccordionSection from './AccordionSection';

export type VerticalLandingShellProps = {
  verticalName: string;
  badgeLabel: string;
  heroHeadline: string;
  heroSubhead: string;
  heroBadges?: string[];
  heroVariant?: 'default' | 'campaign';
  heroMedia?: {
    alt: string;
    src: string;
    srcSet?: string;
    sizes?: string;
    sources?: Array<{
      type: string;
      srcSet: string;
    }>;
  };
  heroOverlayClassName?: string;
  primaryCTA: {
    label: string;
    to: string;
  };
  secondaryCTA?: {
    label: string;
    to: string;
  };
  layoutVariant?: 'default' | 'explainer';
  containerClassName?: string;
  journeyLinks?: Array<{
    label: string;
    to: string;
  }>;
  chartData: Array<{ label: string; value: number }>;
  keyCapabilities: string[];
  valueBlocks?: Array<{
    title: string;
    description: string;
  }>;
  accordionSections?: Array<{
    title: string;
    description?: string;
    content: ReactNode;
  }>;
  afterValueBlocks?: ReactNode;
  preCtaSections?: ReactNode;
  reliabilityLink?: {
    summary: string;
    label: string;
    to: string;
  };
  supportLink?: string;
  bottomCTA?: {
    heading: string;
    body: string;
  };
  journeySteps?: string[];
  agreementHighlights?: string[];
  packageHighlights?: string[];
  playbooks?: Array<{
    title: string;
    purpose: string;
    trigger: string;
    actions: string[];
    handoff: string;
  }>;
};

const VerticalLandingShell = ({
  verticalName,
  badgeLabel,
  heroHeadline,
  heroSubhead,
  heroBadges,
  heroVariant = 'default',
  heroMedia,
  heroOverlayClassName,
  primaryCTA,
  secondaryCTA,
  layoutVariant = 'default',
  containerClassName,
  journeyLinks,
  chartData,
  keyCapabilities,
  valueBlocks,
  accordionSections,
  afterValueBlocks,
  preCtaSections,
  reliabilityLink,
  supportLink = '/support',
  bottomCTA,
  journeySteps,
  agreementHighlights,
  packageHighlights,
  playbooks,
}: VerticalLandingShellProps) => {
  const containerClasses = ['container', 'section', 'space-grid', containerClassName].filter(Boolean).join(' ');
  const isExplainer = layoutVariant === 'explainer';

  return (
    <div className="space-shell">
      <div className={containerClasses}>
        <section
          className={`vertical-hero${heroMedia ? ' vertical-hero--media' : ''}${
            heroVariant === 'campaign' ? ' vertical-hero--campaign' : ''
          }`}
        >
          {heroMedia ? (
            <div className="vertical-hero-media" aria-hidden="true">
              <picture>
                {heroMedia.sources?.map((source) => (
                  <source key={source.type} type={source.type} srcSet={source.srcSet} />
                ))}
                <img
                  src={heroMedia.src}
                  srcSet={heroMedia.srcSet}
                  sizes={heroMedia.sizes}
                  alt={heroMedia.alt}
                  fetchPriority="high"
                  loading="eager"
                />
              </picture>
              <div className={['vertical-hero-overlay', heroOverlayClassName].filter(Boolean).join(' ')} />
            </div>
          ) : null}
          <div className="vertical-hero-content">
            <SectionHeader
              kicker={badgeLabel}
              title={heroHeadline}
              subtitle={heroSubhead}
              actions={
                <>
                  <Link className="btn btn-primary" to={primaryCTA.to}>
                    {primaryCTA.label}
                  </Link>
                  {secondaryCTA ? (
                    <Link className="btn btn-secondary" to={secondaryCTA.to}>
                      {secondaryCTA.label}
                    </Link>
                  ) : null}
                </>
              }
            />
            {heroBadges && heroBadges.length > 0 ? (
              <div className="vertical-hero-badges" aria-label="Key promises">
                {heroBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {!isExplainer && journeyLinks && journeyLinks.length > 0 && (
          <SpaceFrame>
            <div className="badge">Navigate this vertical</div>
            <h2>{verticalName} quick links</h2>
            <p>
              Jump between packages, add-ons, and support resources without leaving this portal.
            </p>
            <div className="space-section-actions">
              {journeyLinks.map((link) => (
                <Link key={link.label} className="btn btn-secondary" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </SpaceFrame>
        )}

        {isExplainer ? (
          <>
            {valueBlocks && valueBlocks.length > 0 && (
              <div className="space-grid three-column">
                {valueBlocks.map((block) => (
                  <SpaceFrame key={block.title}>
                    <h3 style={{ marginTop: 0 }}>{block.title}</h3>
                    <p>{block.description}</p>
                  </SpaceFrame>
                ))}
              </div>
            )}
            {afterValueBlocks}
            {accordionSections && accordionSections.length > 0 && (
              <div className="space-grid two-column" style={{ alignItems: 'stretch' }}>
                {accordionSections.map((section) => (
                  <AccordionSection key={section.title} title={section.title} description={section.description}>
                    {section.content}
                  </AccordionSection>
                ))}
              </div>
            )}
            {reliabilityLink ? (
              <SpaceFrame>
                <div className="badge">System reliability</div>
                <h2>Reliability and health checks</h2>
                <p>
                  {reliabilityLink.summary}{' '}
                  <Link to={reliabilityLink.to}>{reliabilityLink.label}</Link>
                </p>
              </SpaceFrame>
            ) : null}
          </>
        ) : (
          <div className="space-grid two-column">
            <SpaceFrame>
              <h2>{verticalName} key capabilities</h2>
              <p>
                A focused business line built to deliver predictable operations, reliable integrations, and
                clear visibility for teams.
              </p>
              <ul className="operator-list">
                {keyCapabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SpaceFrame>

            <ChartCard title={`${verticalName} activity`} subtitle="Example / demo data">
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.15)" strokeDasharray="3 3" />
                  <XAxis dataKey="label" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(15, 23, 42, 0.95)',
                      borderColor: 'rgba(125, 211, 252, 0.35)',
                      color: '#e2e8f0',
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#38bdf8" fill="rgba(56, 189, 248, 0.25)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        )}

        {!isExplainer && (journeySteps || agreementHighlights) && (
          <div className="space-grid two-column">
            {journeySteps && (
              <SpaceFrame>
                <div className="badge">Intake journey</div>
                <h2>{verticalName} journey steps</h2>
                <ul className="operator-list">
                  {journeySteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </SpaceFrame>
            )}
            {agreementHighlights && (
              <SpaceFrame>
                <div className="badge">Agreements</div>
                <h2>Agreement checkpoints</h2>
                <ul className="operator-list">
                  {agreementHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SpaceFrame>
            )}
          </div>
        )}

        {!isExplainer && packageHighlights && (
          <SpaceFrame>
            <div className="badge">Package intelligence</div>
            <h2>Restored package coverage</h2>
            <ul className="operator-list">
              {packageHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SpaceFrame>
        )}

        {!isExplainer && playbooks && (
          <SpaceFrame>
            <div className="badge">Automation playbooks</div>
            <h2>Structured automation playbooks</h2>
            <div className="card-grid" style={{ marginTop: '1rem' }}>
              {playbooks.map((playbook) => (
                <div className="card" key={playbook.title}>
                  <h3 style={{ marginTop: 0, color: '#fff7e6' }}>{playbook.title}</h3>
                  <p style={{ color: '#c8c0aa' }}>{playbook.purpose}</p>
                  <p style={{ margin: '0.5rem 0', color: '#c8c0aa' }}>
                    <strong>Trigger:</strong> {playbook.trigger}
                  </p>
                  <ul className="list">
                    {playbook.actions.map((action) => (
                      <li key={action}>
                        <span />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ margin: '0.75rem 0 0', color: '#c8c0aa' }}>
                    <strong>Handoff:</strong> {playbook.handoff}
                  </p>
                </div>
              ))}
            </div>
          </SpaceFrame>
        )}

        {preCtaSections}
        <SpaceFrame className="vertical-cta">
          <h2>{bottomCTA?.heading ?? `Ready to explore ${verticalName}?`}</h2>
          <p>{bottomCTA?.body ?? 'Start a guided intake and we will route you to the right team for the next step.'}</p>
          <div className="space-section-actions">
            <Link className="btn btn-primary" to={primaryCTA.to}>
              {primaryCTA.label}
            </Link>
            {!isExplainer && (
              <Link className="btn btn-secondary" to={supportLink}>
                Explore solutions
              </Link>
            )}
          </div>
        </SpaceFrame>
      </div>
    </div>
  );
};

export default VerticalLandingShell;

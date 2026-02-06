import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  BudgetRange,
  CaregiverSituation,
  HomeSize,
  InternetReliability,
  RecommendationInput,
  RiskLevel,
  TechComfort,
  buildRecommendation,
} from '../lib/recommendationRules';
import { generateNarrative, NarrativeResponse } from '../lib/narrative';
import { loadRetailFlow, markFlowStep, updateRetailFlow } from '../lib/retailFlow';
import { getTierLabel } from '../data/pricing';
import TierBadge from '../components/TierBadge';
import ComparisonLadder from '../components/ComparisonLadder';
import { brandSite } from '../lib/brand';

const optionStyles: CSSProperties = {
  display: 'grid',
  gap: '0.35rem',
  alignItems: 'start',
  padding: '0.9rem 1rem',
  borderRadius: '12px',
  border: '1px solid rgba(245, 192, 66, 0.25)',
  background: 'rgba(255,255,255,0.02)',
  cursor: 'pointer',
};

const steps = [
  {
    key: 'homeSize',
    title: 'Home size',
    description: 'We tune device counts and wiring expectations to the footprint.',
    options: [
      { value: 'small', label: 'Small (condo or ADU)', helper: '1-2 bedrooms, tight wiring runs' },
      { value: 'medium', label: 'Medium single-family', helper: '3-4 bedrooms with mixed wiring' },
      { value: 'large', label: 'Large or multi-unit', helper: 'Expansive layout or multiple entries' },
    ],
  },
  {
    key: 'caregiverSituation',
    title: 'Caregiver situation',
    description: 'Who needs consistent access?',
    options: [
      { value: 'solo', label: 'Solo family caregiver', helper: 'One person manages alerts' },
      { value: 'shared', label: 'Shared family team', helper: 'Two to three people rotating' },
      { value: 'professional', label: 'Professional staff involved', helper: 'Agency or on-site pros' },
    ],
  },
  {
    key: 'fallRisk',
    title: 'Fall-risk signal',
    description: 'Helps us prioritize lighting and alert paths.',
    options: [
      { value: 'low', label: 'Low', helper: 'Stable mobility' },
      { value: 'medium', label: 'Medium', helper: 'Uses support devices or occasional stumbles' },
      { value: 'high', label: 'High', helper: 'Recent falls or unsteady gait' },
    ],
  },
  {
    key: 'techComfort',
    title: 'Tech comfort',
    description: 'Sets how much training and interface complexity we introduce.',
    options: [
      { value: 'low', label: 'Low', helper: 'Prefers simple buttons and automations' },
      { value: 'medium', label: 'Medium', helper: 'Okay with a short tutorial' },
      { value: 'high', label: 'High', helper: 'Comfortable tweaking Home Assistant' },
    ],
  },
  {
    key: 'internetReliability',
    title: 'Internet reliability',
    description: 'We keep core automations local, and plan for outages when needed.',
    options: [
      { value: 'good', label: 'Good', helper: 'Rare outages' },
      { value: 'spotty', label: 'Spotty', helper: 'Drops a few times a month' },
      { value: 'none', label: 'Limited/none', helper: 'Service gaps are common' },
    ],
  },
  {
    key: 'budgetRange',
    title: 'Budget guardrail',
    description: 'All packages are one-time pricing. We right-size within your range.',
    options: [
      { value: 'entry', label: 'Entry: under $3k', helper: 'Security Basic starter fit' },
      { value: 'core', label: 'Core: $3k-$5k', helper: 'Security Basic or Plus depending on need' },
      { value: 'expanded', label: 'Expanded: $5k-$8k', helper: 'Security Plus or Pro coverage' },
      { value: 'flexible', label: 'Flexible for the right fit', helper: 'We prioritize coverage' },
    ],
  },
] as const;

type StepKey = typeof steps[number]['key'];
const labels: Record<StepKey, string> = {
  homeSize: 'Home size',
  caregiverSituation: 'Caregiver situation',
  fallRisk: 'Fall-risk signal',
  techComfort: 'Tech comfort',
  internetReliability: 'Internet reliability',
  budgetRange: 'Budget guardrail',
};

type OptionValue = HomeSize | CaregiverSituation | RiskLevel | TechComfort | InternetReliability | BudgetRange;

const Recommendation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [stepIndex, setStepIndex] = useState(0);
  const [responses, setResponses] = useState<RecommendationInput>({
    homeSize: 'small',
    caregiverSituation: 'solo',
    fallRisk: 'low',
    techComfort: 'medium',
    internetReliability: 'good',
    budgetRange: 'core',
  });
  const [showResult, setShowResult] = useState(false);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [narrativeLoading, setNarrativeLoading] = useState(false);
  const [guidedMode, setGuidedMode] = useState<boolean>(() => loadRetailFlow().guidedMode ?? false);

  const handleSelect = (key: StepKey, value: OptionValue) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex((idx) => idx + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      setStepIndex((idx) => idx - 1);
    }
  };

  const recommendation = useMemo(() => buildRecommendation(responses), [responses]);
  const progress = ((stepIndex + 1) / steps.length) * 100;

  useEffect(() => {
    const guidedParam = searchParams.get('guided') === '1';
    if (guidedParam) {
      setGuidedMode(true);
      updateRetailFlow({ guidedMode: true, currentStep: 'select' });
      return;
    }
    markFlowStep('select');
    const stored = loadRetailFlow().guidedMode;
    if (stored) setGuidedMode(true);
  }, [searchParams]);

  useEffect(() => {
    if (!showResult) return;
    let mounted = true;
    setNarrativeLoading(true);
    generateNarrative({
      source: 'recommendation',
      recommendation,
      responses,
    })
      .then((result) => {
        if (mounted) setNarrative(result);
      })
      .finally(() => {
        if (mounted) setNarrativeLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [recommendation, responses, showResult]);

  const handleCopyExplanation = async () => {
    if (!narrative) return;
    const text = `${narrative.sections
      .map((section) => `${section.title}: ${section.body}`)
      .join('\n')}\nDisclaimer: ${narrative.disclaimer.join(' ')}`;
    await navigator.clipboard.writeText(text);
  };

  const exitGuidedMode = () => {
    setGuidedMode(false);
    updateRetailFlow({ guidedMode: false });
    navigate('/');
  };

  const handleQuote = () => {
    updateRetailFlow({ currentStep: 'quote' });
    const tierParam = recommendation?.tier ? `?tier=${encodeURIComponent(recommendation.tier)}` : '';
    navigate(`/quote${tierParam}`);
  };

  return (
    <div className="container" style={{ padding: '3rem 0', display: 'grid', gap: '2rem' }}>
      {guidedMode && (
        <div
          className="hero-card"
          role="status"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
        >
          <div>
            <strong style={{ color: '#fff7e6' }}>Guided setup</strong>
            <p style={{ margin: '0.25rem 0 0', color: '#e6ddc7' }}>
              Answer a few questions and we will recommend the right package, then move you into a quote.
            </p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={exitGuidedMode}>
            Exit guided setup
          </button>
        </div>
      )}
      <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
        <div className="badge">Build my package</div>
        <h1 style={{ margin: 0, color: '#fff7e6' }}>Package recommender wizard</h1>
        <p style={{ margin: 0, color: '#e6ddc7' }}>
          Answer a few non-sensitive questions to see which {brandSite} package tier fits best. This tool
          is informational only and does not provide medical advice. If this is urgent, call 911.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link className="btn btn-primary" to="/packages">
            Choose a package
          </Link>
          <Link className="btn btn-secondary" to="/quote">
            Jump to quote
          </Link>
          <small style={{ color: '#c8c0aa' }}>
            No subscriptions. Professional installation with offline-first Home Assistant.
          </small>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} aria-label="Progress">
          <div style={{ flex: 1, height: '8px', background: '#1f1b14', borderRadius: '999px' }}>
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(135deg, var(--kaec-gold), var(--kaec-amber))',
                borderRadius: '999px',
              }}
            />
          </div>
          <small style={{ color: '#c8c0aa' }}>
            Step {stepIndex + 1} of {steps.length}
          </small>
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <div className="badge">Step {stepIndex + 1}</div>
          <h2 style={{ margin: '0.5rem 0' }}>{steps[stepIndex].title}</h2>
          <p style={{ margin: 0, color: '#c8c0aa' }}>{steps[stepIndex].description}</p>
        </div>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {steps[stepIndex].options.map((option) => {
            const isSelected = responses[steps[stepIndex].key] === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(steps[stepIndex].key, option.value)}
                style={{
                  ...optionStyles,
                  border: isSelected ? '1px solid var(--kaec-gold)' : optionStyles.border,
                  background: isSelected ? 'rgba(245, 192, 66, 0.12)' : optionStyles.background,
                  color: '#fff7e6',
                }}
              >
                <span style={{ fontWeight: 700 }}>{option.label}</span>
                <small style={{ color: '#c8c0aa' }}>{option.helper}</small>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={goBack}
            disabled={stepIndex === 0}
            style={{ opacity: stepIndex === 0 ? 0.5 : 1 }}
          >
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={goNext}>
            {stepIndex === steps.length - 1 ? 'See my recommendation' : 'Next'}
          </button>
        </div>
      </div>

      {showResult && (
        <div className="card" style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div className="badge">Recommended tier</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <TierBadge tierId={recommendation.tier} />
                <h2 style={{ margin: '0.25rem 0' }}>{getTierLabel(recommendation.tier)}</h2>
              </div>
            </div>
            <div style={{ textAlign: 'right', color: '#c8c0aa' }}>
              <div>Install complexity: {recommendation.installComplexity} / 5</div>
              <div>Offline readiness: {recommendation.offlineReadiness} / 5</div>
            </div>
          </div>
          <p style={{ margin: 0, color: '#e6ddc7' }}>{recommendation.rationale}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={handleQuote}>
              Get a Quote for {getTierLabel(recommendation.tier)}
            </button>
            <small style={{ color: '#c8c0aa' }}>
              We will carry your answers forward and start a quote for this tier.
            </small>
          </div>

          <div className="hero-card" style={{ display: 'grid', gap: '0.5rem' }}>
            <h3 style={{ margin: 0, color: '#fff7e6' }}>Suggested add-ons</h3>
            <ul className="list">
              {recommendation.suggestedAddOns.map((addon) => (
                <li key={addon}>
                  <span />
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-card" style={{ display: 'grid', gap: '0.4rem' }}>
            <h4 style={{ margin: 0, color: '#fff7e6' }}>Your inputs</h4>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
              {Object.entries(responses).map(([key, value]) => (
                <div key={key} style={{ display: 'grid', gap: '0.2rem' }}>
                  <small style={{ color: '#c8c0aa' }}>{labels[key as StepKey]}</small>
                  <strong style={{ color: '#fff7e6' }}>{value}</strong>
                </div>
              ))}
            </div>
            <small style={{ color: '#c8c0aa' }}>
              These answers guide equipment counts and training depth. We avoid collecting sensitive health
              data here.
            </small>
          </div>

          <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <div>
                <div className="badge">AI Explanation (Advisory)</div>
                <h3 style={{ margin: '0.25rem 0', color: '#fff7e6' }}>Narrative overview</h3>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCopyExplanation}
                  disabled={!narrative}
                >
                  Copy explanation
                </button>
              </div>
            </div>
            <p style={{ margin: 0, color: '#c8c0aa' }}>
              Advisory narrative that explains why this tier was recommended, how offline-first behavior works, and what to
              expect during install. No medical advice; if this is an emergency, call 911.
            </p>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {(narrativeLoading || !narrative) && (
                <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
                  <strong>Building explanation…</strong>
                  <small style={{ color: '#c8c0aa' }}>Using deterministic templates; no external AI required.</small>
                </div>
              )}
              {narrative?.sections.map((section) => (
                <div
                  key={section.title}
                  className="card"
                  style={{ display: 'grid', gap: '0.4rem', border: '1px solid rgba(245, 192, 66, 0.35)' }}
                >
                  <strong>{section.title}</strong>
                  <p style={{ margin: 0, color: '#c8c0aa' }}>{section.body}</p>
                </div>
              ))}
            </div>
            <div className="card" style={{ border: '1px solid rgba(245, 192, 66, 0.35)' }}>
              <strong>Disclaimers</strong>
              <ul className="list" style={{ marginTop: '0.35rem' }}>
                {(narrative?.disclaimer ?? [
                  'Informational only. Not medical advice or a diagnosis.',
                  'If you have an urgent safety concern, call 911.',
                  'Final configuration depends on on-site conditions and local code.',
                ]).map((item) => (
                  <li key={item}>
                    <span />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {showResult && <ComparisonLadder />}
    </div>
  );
};

export default Recommendation;

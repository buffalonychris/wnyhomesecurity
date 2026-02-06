import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import type { FitCheckConfig, FitCheckTier } from '../content/fitCheckConfigs';
import {
  HomeSecurityFitCheckAnswers,
  HomeSecurityFitCheckResult,
  defaultHomeSecurityFitCheckAnswers,
  entrySummaryLabels,
  indoorSummaryLabels,
  perimeterSummaryLabels,
  buildAssumedCoverage,
  isHomeSecurityFitCheckComplete,
  tierToPackageId,
  PerimeterVideo,
  LiveView,
  EntryPoints,
  ExteriorArea,
  IndoorAreas,
  SpecialRoom,
  HomeSize,
  Preference,
} from '../lib/homeSecurityFunnel';
import { track } from '../lib/analytics';
import { loadRetailFlow, updateRetailFlow } from '../lib/retailFlow';

type FitCheckAnswers = HomeSecurityFitCheckAnswers;
type FitCheckResult = HomeSecurityFitCheckResult;

const optionCardStyle: CSSProperties = {
  display: 'grid',
  gap: '0.4rem',
  alignItems: 'start',
  padding: '0.85rem 1rem',
  borderRadius: '12px',
  border: '1px solid rgba(90, 210, 255, 0.2)',
  background: 'rgba(4, 18, 30, 0.7)',
  cursor: 'pointer',
};

const questionCardStyle: CSSProperties = {
  borderRadius: '16px',
  border: '1px solid rgba(90, 210, 255, 0.15)',
  background: 'rgba(6, 18, 32, 0.75)',
  padding: '1.5rem',
  boxShadow: '0 16px 40px rgba(4, 12, 24, 0.35)',
};

const sectionSpacingStyle: CSSProperties = {
  display: 'grid',
  gap: '1.25rem',
};

const initialAnswers: FitCheckAnswers = defaultHomeSecurityFitCheckAnswers;

const perimeterOptions: Array<{ value: PerimeterVideo; label: string; helper: string }> = [
  { value: 'none', label: 'No exterior video yet', helper: 'Focus on entry sensors first' },
  { value: 'couple', label: 'A couple of cameras', helper: 'Front door + driveway or back patio' },
  { value: 'full', label: 'Full perimeter coverage', helper: 'Front, sides, and backyard' },
];

const liveViewOptions: Array<{ value: LiveView; label: string; helper: string }> = [
  { value: 'no', label: 'Rarely', helper: 'I just want alerts' },
  { value: 'occasionally', label: 'Occasionally', helper: 'A few times a week' },
  { value: 'regularly', label: 'Regularly', helper: 'Daily check-ins' },
];

const entryPointOptions: Array<{ value: EntryPoints; label: string; helper: string }> = [
  { value: '1-2', label: '1–2 entry points', helper: 'Front door + one additional entry' },
  { value: '3-4', label: '3–4 entry points', helper: 'Multiple doors and main windows' },
  { value: '5+', label: '5+ entry points', helper: 'Larger footprint with many openings' },
];

const exteriorAreaOptions: Array<{ value: ExteriorArea; label: string; helper: string }> = [
  { value: 'front', label: 'Front entry', helper: 'Front door and street side' },
  { value: 'driveway', label: 'Driveway', helper: 'Vehicle and garage line of sight' },
  { value: 'back', label: 'Backyard', helper: 'Patio, deck, or pool' },
  { value: 'side', label: 'Side yards', helper: 'Side gates and walkways' },
  { value: 'garage', label: 'Garage interior', helper: 'Interior garage access' },
];

const indoorAreaOptions: Array<{ value: IndoorAreas; label: string; helper: string }> = [
  { value: 'none', label: 'No indoor coverage', helper: 'Just doors and windows' },
  { value: '1-2', label: '1–2 rooms', helper: 'Main living areas' },
  { value: '3+', label: '3+ rooms', helper: 'Multiple floors or zones' },
];

const specialRoomOptions: Array<{ value: SpecialRoom; label: string; helper: string }> = [
  { value: 'office', label: 'Home office', helper: 'Workstations or equipment' },
  { value: 'safe_room', label: 'Safe room', helper: 'Dedicated secure space' },
  { value: 'mancave', label: 'Media / hobby room', helper: 'Entertainment gear' },
  { value: 'nursery', label: 'Nursery', helper: 'Child or infant room' },
  { value: 'not_really', label: 'Not really', helper: 'No special rooms' },
];

const homeSizeOptions: Array<{ value: HomeSize; label: string; helper: string }> = [
  { value: 'small', label: 'Small', helper: 'Condo, ADU, or small footprint' },
  { value: 'typical', label: 'Typical', helper: 'Average single-family home' },
  { value: 'large', label: 'Large', helper: 'Large or multi-level layout' },
];

const preferenceOptions: Array<{ value: Preference; label: string; helper: string }> = [
  { value: 'simple', label: 'Keep it simple', helper: 'Cover the basics' },
  { value: 'balanced', label: 'Balanced coverage', helper: 'Everyday + key upgrades' },
  { value: 'maximum', label: 'Maximum coverage', helper: 'Full scope coverage' },
];

const scopeExteriorAreas: FitCheckAnswers['exteriorAreas'] = ['driveway', 'back', 'side'];
const scopeSpecialRooms: FitCheckAnswers['specialRooms'] = ['office', 'safe_room', 'mancave', 'nursery'];

const getRecommendationTier = (answers: FitCheckAnswers): FitCheckTier => {
  const isBronze =
    answers.perimeterVideo === 'none' && answers.entryPoints === '1-2' && answers.indoorAreas === 'none';

  if (isBronze) {
    return 'Bronze';
  }

  const scopeExteriorCount = answers.exteriorAreas.filter((area) => scopeExteriorAreas.includes(area)).length;
  const hasSpecialScope = answers.specialRooms.some((room) => scopeSpecialRooms.includes(room));

  const isGold =
    (answers.perimeterVideo === 'full' && (answers.entryPoints === '3-4' || answers.entryPoints === '5+')) ||
    answers.entryPoints === '5+' ||
    answers.indoorAreas === '3+' ||
    (answers.homeSize === 'large' && answers.liveView === 'regularly') ||
    (hasSpecialScope && scopeExteriorCount >= 2);

  if (isGold) {
    return 'Gold';
  }

  return 'Silver';
};

const buildSummary = (answers: FitCheckAnswers): string => {
  const parts = [
    answers.perimeterVideo ? `Video: ${perimeterSummaryLabels[answers.perimeterVideo]}` : null,
    answers.entryPoints ? `Entry points: ${entrySummaryLabels[answers.entryPoints]}` : null,
    answers.indoorAreas ? `Indoor coverage: ${indoorSummaryLabels[answers.indoorAreas]}` : null,
  ].filter((part): part is string => Boolean(part));

  return parts.slice(0, 3).join(' • ');
};

const buildReasons = (answers: FitCheckAnswers): string[] => {
  const reasons: string[] = [];

  if (answers.entryPoints === '5+') {
    reasons.push('Five or more entry points benefit from expanded sensor coverage and faster response routing.');
  }

  if (answers.perimeterVideo === 'full') {
    reasons.push('Full-perimeter video coverage calls for higher-capacity recording and camera counts.');
  }

  if (answers.indoorAreas === '3+') {
    reasons.push('Three or more indoor areas require broader motion, door, and alert coverage.');
  }

  if (answers.homeSize === 'large') {
    reasons.push('Large homes need more devices to close coverage gaps across floors and wings.');
  }

  if (answers.liveView === 'regularly') {
    reasons.push('Regular live viewing benefits from higher-quality video and dedicated viewing workflows.');
  }

  if (answers.exteriorAreas.length > 1) {
    reasons.push('Multiple exterior zones benefit from coordinated lighting and camera angles.');
  }

  if (answers.specialRooms.length > 0 && !answers.specialRooms.includes('not_really')) {
    reasons.push('Special rooms deserve dedicated sensors and stricter entry protections.');
  }

  if (answers.perimeterVideo === 'none') {
    reasons.push('Minimal video coverage keeps the system focused on core entry sensors.');
  }

  if (answers.entryPoints === '1-2') {
    reasons.push('A small number of entry points keeps the system lean and efficient.');
  }

  if (answers.indoorAreas === 'none') {
    reasons.push('Skipping indoor coverage keeps the install focused on perimeter alerts.');
  }

  const fallbackReasons = [
    'Balanced coverage ensures you can grow the system without rewiring later.',
    'Local-first controls keep core protections running even during outages.',
    'A guided install keeps sensors, lighting, and alerts tuned to your layout.',
  ];

  while (reasons.length < 3) {
    const nextReason = fallbackReasons.shift();
    if (nextReason) reasons.push(nextReason);
  }

  return reasons.slice(0, 3);
};

const buttonClassByVariant: Record<FitCheckConfig['tiers'][FitCheckTier]['ctas'][number]['variant'], string> = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn',
};

type FitCheckProps = {
  config: FitCheckConfig;
  layout?: 'standalone' | 'embedded';
  className?: string;
};

const FitCheck = ({ config, layout = 'standalone', className }: FitCheckProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isHomeSecurity = searchParams.get('vertical') === 'home-security';
  const plannerParams = new URLSearchParams(searchParams);
  if (!plannerParams.get('vertical')) {
    plannerParams.set('vertical', 'home-security');
  }
  const plannerHref = `/home-security/planner?${plannerParams.toString()}`;
  const [answers, setAnswers] = useState<FitCheckAnswers>(initialAnswers);
  const [result, setResult] = useState<FitCheckResult | null>(null);
  const [exteriorLimitWarning, setExteriorLimitWarning] = useState(false);

  const canSubmit: boolean = isHomeSecurityFitCheckComplete(answers);
  const handlePlannerOpen = () => {
    track('hs_planner_opened', { source: 'fit_check' });
  };

  useEffect(() => {
    const stored = loadRetailFlow().homeSecurity;
    if (stored?.fitCheckAnswers) {
      setAnswers({ ...initialAnswers, ...stored.fitCheckAnswers });
    }
    if (stored?.fitCheckResult) {
      setResult(stored.fitCheckResult);
    }
  }, []);

  useEffect(() => {
    updateRetailFlow({ homeSecurity: { fitCheckAnswers: answers } });
    if (canSubmit) {
      const params = new URLSearchParams(searchParams);
      params.set('fit', 'complete');
      setSearchParams(params, { replace: true });
    }
  }, [answers, canSubmit, searchParams, setSearchParams]);

  const selectedSpecialRooms = useMemo(() => {
    return answers.specialRooms.filter((room) => room !== 'not_really');
  }, [answers.specialRooms]);

  const updateAnswer = <K extends keyof FitCheckAnswers>(key: K, value: FitCheckAnswers[K]) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleExteriorArea = (area: FitCheckAnswers['exteriorAreas'][number]) => {
    setAnswers((prev) => {
      const isSelected = prev.exteriorAreas.includes(area);
      if (isSelected) {
        setExteriorLimitWarning(false);
        return { ...prev, exteriorAreas: prev.exteriorAreas.filter((item) => item !== area) };
      }
      if (prev.exteriorAreas.length >= 2) {
        setExteriorLimitWarning(true);
        return prev;
      }
      setExteriorLimitWarning(false);
      return { ...prev, exteriorAreas: [...prev.exteriorAreas, area] };
    });
  };

  const toggleSpecialRoom = (room: FitCheckAnswers['specialRooms'][number]) => {
    setAnswers((prev) => {
      const isSelected = prev.specialRooms.includes(room);
      if (isSelected) {
        return { ...prev, specialRooms: prev.specialRooms.filter((item) => item !== room) };
      }
      return { ...prev, specialRooms: [...prev.specialRooms, room] };
    });
  };

  const buildNextResult = () => {
    const tier = getRecommendationTier(answers);
    return {
      tier,
      nextResult: {
        tier,
        summary: buildSummary(answers),
        reasons: buildReasons(answers),
        assumedCoverage: buildAssumedCoverage(answers),
      },
    };
  };

  const submitFitCheck = () => {
    if (!canSubmit) return null;
    const { tier, nextResult } = buildNextResult();
    setResult(nextResult);
    updateRetailFlow({
      homeSecurity: {
        fitCheckResult: nextResult,
        selectedPackageId: tierToPackageId(tier),
      },
    });
    const params = new URLSearchParams(searchParams);
    params.set('fitTier', tier);
    params.set('package', tierToPackageId(tier));
    setSearchParams(params, { replace: true });
    return tier;
  };

  const handleSubmit = () => {
    submitFitCheck();
  };

  const handleGenerateQuote = () => {
    const tier = submitFitCheck();
    if (!tier) return;
    const params = new URLSearchParams(searchParams);
    params.set('vertical', 'home-security');
    params.set('package', tierToPackageId(tier));
    navigate(`/quote?${params.toString()}`);
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setResult(null);
    setExteriorLimitWarning(false);
    updateRetailFlow({ homeSecurity: { fitCheckAnswers: initialAnswers, fitCheckResult: undefined } });
    const params = new URLSearchParams(searchParams);
    params.delete('fitTier');
    params.delete('fit');
    setSearchParams(params, { replace: true });
  };

  const questionNumberStyle: CSSProperties = {
    fontSize: '0.85rem',
    color: 'rgba(139, 211, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  const gridStyle: CSSProperties = {
    display: 'grid',
    gap: '0.75rem',
    marginTop: '0.9rem',
  };

  const helperStyle: CSSProperties = {
    margin: 0,
    color: 'rgba(173, 226, 255, 0.7)',
    fontSize: '0.9rem',
  };

  const labelStyle: CSSProperties = {
    fontWeight: 600,
    color: '#f5fbff',
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: '1.8rem',
    marginBottom: '0.25rem',
  };

  const submitClassName = `btn btn-primary${canSubmit ? '' : ' disabled'}`;
  const recommendationClassName = isHomeSecurity ? `btn btn-secondary${canSubmit ? '' : ' disabled'}` : submitClassName;

  const content = (
    <div
      className={layout === 'standalone' ? `container section ${className ?? ''}`.trim() : className}
      style={{ display: 'grid', gap: '2rem' }}
    >
      <header style={{ display: 'grid', gap: '0.75rem' }}>
        <h1 style={{ marginBottom: 0 }}>{config.heroTitle}</h1>
        <p style={{ margin: 0, maxWidth: '54rem', color: 'rgba(214, 233, 248, 0.88)' }}>{config.heroSubtitle}</p>
      </header>

      <section style={sectionSpacingStyle}>
        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 1</span>
            <h2 style={sectionTitleStyle}>How much exterior video do you want?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              This tells us whether to prioritize basic entry sensors or full perimeter visibility (and how comfortable you are with cameras).
            </p>
          </div>
          <div style={gridStyle}>
            {perimeterOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="perimeterVideo"
                    value={option.value}
                    checked={answers.perimeterVideo === option.value}
                    onChange={() => updateAnswer('perimeterVideo', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 2</span>
            <h2 style={sectionTitleStyle}>How often do you check live video?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              More frequent viewing suggests more cameras and easier access views.
            </p>
          </div>
          <div style={gridStyle}>
            {liveViewOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="liveView"
                    value={option.value}
                    checked={answers.liveView === option.value}
                    onChange={() => updateAnswer('liveView', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 3</span>
            <h2 style={sectionTitleStyle}>How many entry points need coverage?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              Entry points guide door/window sensor counts and alert tuning.
            </p>
          </div>
          <div style={gridStyle}>
            {entryPointOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="entryPoints"
                    value={option.value}
                    checked={answers.entryPoints === option.value}
                    onChange={() => updateAnswer('entryPoints', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 4</span>
            <h2 style={sectionTitleStyle}>Which exterior areas are the most important?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              Select up to two areas so we can prioritize camera placement.
            </p>
          </div>
          <div style={gridStyle}>
            {exteriorAreaOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="checkbox"
                    name="exteriorAreas"
                    value={option.value}
                    checked={answers.exteriorAreas.includes(option.value)}
                    onChange={() => toggleExteriorArea(option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
          {exteriorLimitWarning ? (
            <p style={{ marginTop: '0.75rem', color: 'rgba(255, 205, 92, 0.9)' }}>
              You can select up to two exterior areas.
            </p>
          ) : null}
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 5</span>
            <h2 style={sectionTitleStyle}>How much indoor coverage do you want?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              Indoor coverage informs motion sensor and alert placement.
            </p>
          </div>
          <div style={gridStyle}>
            {indoorAreaOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="indoorAreas"
                    value={option.value}
                    checked={answers.indoorAreas === option.value}
                    onChange={() => updateAnswer('indoorAreas', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 6</span>
            <h2 style={sectionTitleStyle}>Any special rooms that need extra attention?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              Optional: choose any spaces that should be prioritized.
            </p>
          </div>
          <div style={gridStyle}>
            {specialRoomOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="checkbox"
                    name="specialRooms"
                    value={option.value}
                    checked={answers.specialRooms.includes(option.value)}
                    onChange={() => toggleSpecialRoom(option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
          {selectedSpecialRooms.length > 0 ? (
            <p style={{ marginTop: '0.75rem', color: 'rgba(165, 216, 247, 0.8)' }}>
              Selected: {selectedSpecialRooms.join(', ').replaceAll('_', ' ')}
            </p>
          ) : null}
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 7</span>
            <h2 style={sectionTitleStyle}>How would you describe your home size?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              Home size helps us set expectations for device counts and coverage zones.
            </p>
          </div>
          <div style={gridStyle}>
            {homeSizeOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="homeSize"
                    value={option.value}
                    checked={answers.homeSize === option.value}
                    onChange={() => updateAnswer('homeSize', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Question 8</span>
            <h2 style={sectionTitleStyle}>What coverage style feels right?</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              This helps us balance simplicity and future-proofing.
            </p>
          </div>
          <div style={gridStyle}>
            {preferenceOptions.map((option) => (
              <label key={option.value} style={optionCardStyle}>
                <span style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                  <input
                    type="radio"
                    name="preference"
                    value={option.value}
                    checked={answers.preference === option.value}
                    onChange={() => updateAnswer('preference', option.value)}
                  />
                  <span>
                    <span style={labelStyle}>{option.label}</span>
                    <p style={helperStyle}>{option.helper}</p>
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...questionCardStyle, display: 'grid', gap: '1rem' }}>
        <h2 style={{ margin: 0 }}>Ready for your recommendation?</h2>
        <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
          Answer all required questions and we’ll suggest the best-fit tier instantly.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button type="button" className={recommendationClassName} disabled={!canSubmit} onClick={handleSubmit}>
            Show recommendation
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Start over
          </button>
        </div>
        {isHomeSecurity && (
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className={submitClassName} disabled={!canSubmit} onClick={handleGenerateQuote}>
              Generate Quote
            </button>
          </div>
        )}
      </section>

      {result ? (
        <section style={{ ...questionCardStyle, display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <span style={questionNumberStyle}>Recommendation</span>
            <h2 style={{ margin: 0 }}>Recommended tier: {result.tier}</h2>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>{result.summary}</p>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Why this fits</h3>
            <ul className="operator-list">
              {result.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Assumed coverage (based on your answers)</h3>
            <ul className="operator-list">
              {result.assumedCoverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <small style={{ color: 'rgba(214, 233, 248, 0.8)' }}>
              Final quantities may adjust after the walkthrough and layout confirmation.
            </small>
          </div>

          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Included in {result.tier}</h3>
            <ul className="operator-list">
              {config.tiers[result.tier].included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              You can change your answers or package at any time before installation.
            </p>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>
              If exterior equipment installation is restricted by an HOA or property manager, the system will be designed for interior-only coverage.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {config.tiers[result.tier].ctas.map((cta) => (
              <Link key={cta.label} to={cta.href} className={buttonClassByVariant[cta.variant]}>
                {cta.label}
              </Link>
            ))}
            {isHomeSecurity && (
              <Link to="/packages?vertical=home-security" className="btn btn-link">
                Change package
              </Link>
            )}
            {isHomeSecurity && (
              <Link to={plannerHref} className="btn btn-secondary" onClick={handlePlannerOpen}>
                Precision Planner (optional)
              </Link>
            )}
            <button type="button" className="btn btn-secondary" onClick={() => setResult(null)}>
              Edit answers
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );

  if (layout === 'embedded') {
    return <div className={['fit-check', className].filter(Boolean).join(' ')}>{content}</div>;
  }

  return content;
};

export default FitCheck;

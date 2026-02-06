import { FlowStep } from '../lib/retailFlow';

const flowOrder: FlowStep[] = ['learn', 'select', 'quote', 'agreement', 'payment', 'schedule'];

const labels: Record<FlowStep, string> = {
  learn: 'Learn',
  select: 'Select package',
  quote: 'Quote',
  agreement: 'Agreement',
  payment: 'Deposit/payment',
  schedule: 'Schedule',
};

type FlowGuidePanelProps = {
  currentStep: FlowStep;
  nextDescription: string;
  ctaLabel: string;
  onCta: () => void;
  title?: string;
};

const FlowGuidePanel = ({ currentStep, nextDescription, ctaLabel, onCta, title }: FlowGuidePanelProps) => {
  const currentIndex = flowOrder.indexOf(currentStep);

  return (
    <div className="card flow-guide" style={{ display: 'grid', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'grid', gap: '0.25rem' }}>
          <div className="badge">Guided flow</div>
          <strong style={{ color: '#fff7e6' }}>{title ?? 'What happens next'}</strong>
          <small style={{ color: '#c8c0aa' }}>{nextDescription}</small>
        </div>
        <button type="button" className="btn btn-primary" onClick={onCta}>
          {ctaLabel}
        </button>
      </div>
      <div className="flow-guide-steps" role="list">
        {flowOrder.map((step, idx) => {
          const status = idx < currentIndex ? 'complete' : idx === currentIndex ? 'current' : 'upcoming';
          return (
            <div key={step} className={`flow-guide-step ${status}`} role="listitem">
              <span className="flow-guide-icon" aria-hidden="true">
                {status === 'complete' ? '✓' : idx === currentIndex ? '•' : ''}
              </span>
              <span>{labels[step]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowGuidePanel;

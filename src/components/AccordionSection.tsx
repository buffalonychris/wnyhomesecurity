import { useId, useState, type ReactNode } from 'react';

export type AccordionSectionProps = {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

const AccordionSection = ({ title, description, defaultOpen = false, children }: AccordionSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className="card accordion-section" style={{ display: 'grid', gap: '0.5rem' }}>
      <button
        type="button"
        className="accordion-toggle"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {description && (
        <small id={`${contentId}-desc`} style={{ color: '#c8c0aa' }}>
          {description}
        </small>
      )}
      <div
        id={contentId}
        className={`accordion-content ${open ? 'open' : 'collapsed'}`}
        aria-labelledby={description ? `${contentId}-desc` : undefined}
        style={{ gap: '0.75rem' }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionSection;

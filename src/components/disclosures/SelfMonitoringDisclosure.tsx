import type { FC } from 'react';

export type SelfMonitoringDisclosureVariant = 'short' | 'full';

export type SelfMonitoringDisclosureProps = {
  variant?: SelfMonitoringDisclosureVariant;
  className?: string;
};

const SHORT_COPY = (
  <>
    <strong>No monthly fees.</strong> No remote monitoring. You control your system and are responsible for monitoring alerts and
    contacting emergency services (911) when needed.
  </>
);

const FULL_COPY =
  'Reliable Elder Care does not provide 24/7 professional monitoring or emergency dispatch. Your system is self-monitored. You are responsible for configuring notifications, monitoring alerts, and contacting emergency services (including 911) if needed. If you want professional monitoring, you must obtain it separately through a third-party provider compatible with your configuration.';

const SelfMonitoringDisclosure: FC<SelfMonitoringDisclosureProps> = ({ variant = 'short', className }) => {
  const disclosureClassName = ['ka-disclosure', className].filter(Boolean).join(' ');

  if (variant === 'full') {
    return (
      <aside className={disclosureClassName} role="note" aria-label="Monitoring & emergency response disclosure">
        <h3 className="ka-disclosure__title">Monitoring &amp; Emergency Response</h3>
        <p className="ka-disclosure__body">{FULL_COPY}</p>
      </aside>
    );
  }

  return (
    <aside className={disclosureClassName} role="note" aria-label="Self-monitoring disclosure">
      <p className="ka-disclosure__body">{SHORT_COPY}</p>
    </aside>
  );
};

export default SelfMonitoringDisclosure;

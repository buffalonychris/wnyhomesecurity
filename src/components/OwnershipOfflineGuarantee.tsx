import type { ReactNode } from 'react';
import SpaceFrame from './operator/SpaceFrame';

type OwnershipOfflineGuaranteeProps = {
  title?: string;
  intro?: string;
  items?: string[];
  variant?: 'card' | 'frame';
  className?: string;
  media?: ReactNode;
};

const OwnershipOfflineGuarantee = ({
  title = 'Ownership & Offline Guarantee',
  intro = 'Clear expectations for what you control, what stays local, and what remains optional.',
  items,
  variant = 'card',
  className = '',
  media,
}: OwnershipOfflineGuaranteeProps) => {
  const defaultItems = [
    'You own the equipment, automations, and data (wireless-first and privacy-first by default).',
    'No monthly fees sold by us; optional third-party services connect directly to you.',
    'Offline Dignity Rule: core functions work without internet for safety and daily routines.',
    'Cloud access is only for optional external context and remote sharing.',
    'Home Assistant remains the single dashboard for every vertical.',
  ];
  const listItems = items ?? defaultItems;
  const content = (
    <div className="ownership-offline-content">
      <div className="badge">Ownership & Offline Guarantee</div>
      <h3 style={{ marginTop: '0.35rem', color: '#fff7e6' }}>{title}</h3>
      <p style={{ marginTop: 0, color: '#c8c0aa' }}>{intro}</p>
      <ul className="operator-list">
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  if (variant === 'frame') {
    return (
      <SpaceFrame className={['ownership-offline', className].filter(Boolean).join(' ')}>
        {content}
        {media ? <div className="ownership-offline-media">{media}</div> : null}
      </SpaceFrame>
    );
  }

  return (
    <div className={['card', 'ownership-offline', className].filter(Boolean).join(' ')}>
      {content}
      {media ? <div className="ownership-offline-media">{media}</div> : null}
    </div>
  );
};

export default OwnershipOfflineGuarantee;

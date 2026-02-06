import { Link } from 'react-router-dom';

import Pill from './operator/Pill';
import SpaceFrame from './operator/SpaceFrame';

type PortalTileProps = {
  title: string;
  status: 'ACTIVE' | 'COMING SOON';
  category: string;
  description: string;
  ctaLabel: string;
  to?: string;
  image?: string;
  imageAlt?: string;
};

const PortalTile = ({ title, status, category, description, ctaLabel, to, image, imageAlt }: PortalTileProps) => {
  const isDisabled = status === 'COMING SOON' || !to;

  return (
    <SpaceFrame
      className={`portal-card ${isDisabled ? 'portal-card-disabled' : 'portal-card-active'}`}
      as="article"
    >
      <div className="portal-media">
        {image ? (
          <img className="portal-media-image" src={image} alt={imageAlt ?? title} loading="lazy" />
        ) : (
          <div className="portal-media-placeholder" aria-hidden="true">
            <span>Asset Pending</span>
          </div>
        )}
      </div>
      <div className="portal-chip-row">
        <Pill className={`portal-chip portal-chip-status ${isDisabled ? 'portal-chip-muted' : 'portal-chip-active'}`}>
          {status}
        </Pill>
        <Pill className="portal-chip portal-chip-category">{category}</Pill>
      </div>
      <div className="portal-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="portal-actions">
        {isDisabled ? (
          <span className="btn btn-secondary disabled portal-cta portal-cta-disabled" aria-disabled="true">
            Coming Soon
          </span>
        ) : (
          <Link className="btn btn-primary portal-cta" to={to}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </SpaceFrame>
  );
};

export default PortalTile;

import React from 'react';

import SpaceFrame from './SpaceFrame';

type KpiTileProps = {
  label: string;
  value: string | number;
  trend?: string;
  footer?: string;
};

const KpiTile = ({ label, value, trend, footer }: KpiTileProps) => {
  return (
    <SpaceFrame className="kpi-tile" as="article">
      <span className="kpi-label">{label}</span>
      <strong className="kpi-value">{value}</strong>
      {trend ? <span className="kpi-trend">{trend}</span> : null}
      {footer ? <small className="kpi-footer">{footer}</small> : null}
    </SpaceFrame>
  );
};

export default KpiTile;

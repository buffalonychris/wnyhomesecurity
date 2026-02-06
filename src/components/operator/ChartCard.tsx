import React from 'react';

import SpaceFrame from './SpaceFrame';

type ChartCardProps = {
  title: string;
  subtitle?: string;
  helperText?: string;
  children: React.ReactNode;
  className?: string;
};

const ChartCard = ({ title, subtitle, helperText, children, className = '' }: ChartCardProps) => {
  return (
    <SpaceFrame className={`chart-card ${className}`.trim()} as="article">
      <div className="chart-card-header">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      <div className="chart-card-body">{children}</div>
      <p className="chart-helper">{helperText ?? 'Example / demo data for illustration only.'}</p>
    </SpaceFrame>
  );
};

export default ChartCard;

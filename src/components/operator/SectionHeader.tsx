import React from 'react';

import Pill from './Pill';

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
};

const SectionHeader = ({ kicker, title, subtitle, actions }: SectionHeaderProps) => {
  return (
    <div className="space-section-header">
      <div>
        {kicker ? <Pill>{kicker}</Pill> : null}
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {actions ? <div className="space-section-actions">{actions}</div> : null}
    </div>
  );
};

export default SectionHeader;

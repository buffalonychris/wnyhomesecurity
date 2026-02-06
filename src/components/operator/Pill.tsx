import React from 'react';

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

const Pill = ({ children, className = '' }: PillProps) => {
  return <span className={`space-pill ${className}`.trim()}>{children}</span>;
};

export default Pill;

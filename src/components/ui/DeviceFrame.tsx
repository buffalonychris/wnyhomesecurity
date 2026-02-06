import React from 'react';

type DeviceFrameProps = {
  children: React.ReactNode;
  className?: string;
};

const DeviceFrame = ({ children, className = '' }: DeviceFrameProps) => {
  return <div className={`device-frame ${className}`.trim()}>{children}</div>;
};

export default DeviceFrame;

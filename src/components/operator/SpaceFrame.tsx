import React from 'react';

type SpaceFrameElement = 'section' | 'div' | 'article' | 'aside' | 'header';

type SpaceFrameProps = React.HTMLAttributes<HTMLElement> & {
  as?: SpaceFrameElement;
};

const SpaceFrame = ({ children, className = '', as: Component = 'section', ...rest }: SpaceFrameProps) => {
  return (
    <Component className={`space-frame ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

export default SpaceFrame;

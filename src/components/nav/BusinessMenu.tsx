import { NavLink } from 'react-router-dom';

import Pill from '../operator/Pill';

type BusinessItem = {
  path: string;
  label: string;
  badge?: string;
};

type BusinessMenuProps = {
  items: BusinessItem[];
  className?: string;
};

const BusinessMenu = ({ items, className = '' }: BusinessMenuProps) => {
  return (
    <div className={`business-menu ${className}`.trim()}>
      {items.map((item) => (
        <NavLink key={item.path} to={item.path} className="business-menu-item">
          <span>{item.label}</span>
          {item.badge ? <Pill className="pill-inline">{item.badge}</Pill> : null}
        </NavLink>
      ))}
    </div>
  );
};

export default BusinessMenu;

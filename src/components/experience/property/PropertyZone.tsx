import type { Dispatch } from 'react';

type PropertyZoneProps = {
  id: string;
  index: number;
  name: string;
  isActive: boolean;
  onSelect: Dispatch<string>;
};

const PropertyZone = ({ id, index, name, isActive, onSelect }: PropertyZoneProps) => (
  <button
    className={`property-zone property-zone--${id}`}
    type="button"
    aria-controls="smart-property-detail"
    aria-label={`${name}: show coordinated property scenario`}
    aria-pressed={isActive}
    onClick={() => onSelect(id)}
  >
    <span className="property-zone__marker" aria-hidden="true">
      {String(index + 1).padStart(2, '0')}
    </span>
    <span className="property-zone__label">{name}</span>
    {isActive && <span className="property-zone__state">Selected</span>}
  </button>
);

export default PropertyZone;

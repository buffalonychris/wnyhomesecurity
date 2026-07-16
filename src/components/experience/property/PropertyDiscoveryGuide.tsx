import type { Dispatch } from 'react';
import { propertyDiscoveryPriorities } from '../../../content/experience/propertyDiscovery';
import { propertyScenarios } from '../../../content/experience/propertyScenarios';
import type { PropertyZoneId } from '../../../content/experience/propertyDiscovery';

type PropertyDiscoveryGuideProps = {
  selectedPriorityId: string | null;
  onSelectPriority: Dispatch<string>;
  onOpenZone: Dispatch<PropertyZoneId>;
  onReset: () => void;
};

const PropertyDiscoveryGuide = ({
  selectedPriorityId,
  onSelectPriority,
  onOpenZone,
  onReset,
}: PropertyDiscoveryGuideProps) => {
  const selectedPriority = propertyDiscoveryPriorities.find(
    (priority) => priority.id === selectedPriorityId,
  );

  return (
    <div className="property-discovery" aria-labelledby="property-discovery-title">
      <div className="property-discovery__heading">
        <div>
          <p className="property-discovery__eyebrow">Guided discovery</p>
          <h3 id="property-discovery-title">What matters most around your property?</h3>
        </div>
        <p>Choose one priority to bring relevant property zones forward without hiding the rest.</p>
      </div>

      <div className="property-discovery__priorities" aria-label="Property priorities">
        {propertyDiscoveryPriorities.map((priority) => (
          <button
            key={priority.id}
            className="property-discovery__priority"
            type="button"
            aria-pressed={selectedPriorityId === priority.id}
            onClick={() => onSelectPriority(priority.id)}
          >
            <span>{priority.label}</span>
            <span className="property-discovery__priority-state" aria-hidden="true">
              {selectedPriorityId === priority.id ? 'Selected' : 'Explore'}
            </span>
          </button>
        ))}
      </div>

      <div className="property-discovery__response" aria-live="polite" aria-atomic="true">
        {selectedPriority ? (
          <>
            <div className="property-discovery__recommendation">
              <p className="property-discovery__recommendation-label">Recommended property zones</p>
              <p>{selectedPriority.explanation}</p>
              <div className="property-discovery__zone-actions">
                {selectedPriority.recommendedZoneIds.map((zoneId) => {
                  const zone = propertyScenarios.find((scenario) => scenario.id === zoneId);

                  return (
                    <button key={zoneId} type="button" onClick={() => onOpenZone(zoneId)}>
                      Open {zone?.name ?? zoneId} scenario
                    </button>
                  );
                })}
              </div>
            </div>
            <button className="property-discovery__reset" type="button" onClick={onReset}>
              Reset guided discovery
            </button>
          </>
        ) : (
          <p className="property-discovery__prompt">Select a priority to see matching zones.</p>
        )}
      </div>

      <p className="property-discovery__notice">
        Prototype only: selections are temporary, remain only in the current browser view, and are
        not stored or submitted.
      </p>
    </div>
  );
};

export default PropertyDiscoveryGuide;

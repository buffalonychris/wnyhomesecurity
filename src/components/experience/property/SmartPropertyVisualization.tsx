import { useState } from 'react';
import { experienceCategories } from '../../../content/experience/baseline';
import { propertyScenarios } from '../../../content/experience/propertyScenarios';
import PropertyZone from './PropertyZone';

const SmartPropertyVisualization = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string | null>(null);
  const selectedScenario = propertyScenarios.find((scenario) => scenario.id === selectedZoneId);

  const zoneAreaClassName = (zoneId: string) =>
    `smart-property-canvas__zone-area smart-property-canvas__zone-area--${zoneId}${
      selectedZoneId === zoneId ? ' is-active' : ''
    }`;

  return (
    <section
      id="smart-property-visualization"
      className="smart-property-visualization"
      aria-labelledby="smart-property-visualization-title"
    >
      <header className="smart-property-visualization__heading">
        <div>
          <p className="experience-eyebrow">Explore the property</p>
          <h2 id="smart-property-visualization-title">See how one property can work together.</h2>
        </div>
        <p className="smart-property-visualization__instruction">
          Choose any numbered zone to reveal a coordinated, outcome-first scenario.
        </p>
      </header>

      <div className="smart-property-visualization__layout">
        <div className="smart-property-canvas" aria-label="Interactive smart property zones">
          <div className="smart-property-canvas__scene" aria-hidden="true">
            <span className="smart-property-canvas__sky" />
            <span className="smart-property-canvas__horizon" />
            <span className="smart-property-canvas__property-boundary" />
            <span className={zoneAreaClassName('backyard-property')} />
            <span className="smart-property-canvas__tree smart-property-canvas__tree--left" />
            <span className="smart-property-canvas__tree smart-property-canvas__tree--right" />
            <span className={zoneAreaClassName('driveway')} />
            <span className="smart-property-canvas__walkway" />
            <span className="smart-property-canvas__house" />
            <span className="smart-property-canvas__roof" />
            <span className="smart-property-canvas__chimney" />
            <span className="smart-property-canvas__wing" />
            <span className="smart-property-canvas__wing-roof" />
            <span className={zoneAreaClassName('garage')}>
              <span className="smart-property-canvas__garage-slats" />
            </span>
            <span className={zoneAreaClassName('front-door')}>
              <span className="smart-property-canvas__door-window" />
              <span className="smart-property-canvas__door-handle" />
            </span>
            <span className={zoneAreaClassName('aging-in-place-living-area')}>
              <span className="smart-property-canvas__window-frame" />
            </span>
            <span className="smart-property-canvas__window smart-property-canvas__window--upper" />
            <span className={zoneAreaClassName('basement-utility')}>
              <span className="smart-property-canvas__utility-window" />
              <span className="smart-property-canvas__utility-indicator" />
            </span>
            <span className="smart-property-canvas__foundation-line" />
            <span className="smart-property-canvas__shrub smart-property-canvas__shrub--left" />
            <span className="smart-property-canvas__shrub smart-property-canvas__shrub--right" />
          </div>

          <div className="smart-property-canvas__zones">
            {propertyScenarios.map((scenario, index) => (
              <PropertyZone
                key={scenario.id}
                id={scenario.id}
                index={index}
                name={scenario.name}
                shortName={
                  scenario.id === 'aging-in-place-living-area'
                    ? 'Living Area'
                    : scenario.id === 'backyard-property'
                      ? 'Backyard'
                      : scenario.id === 'basement-utility'
                        ? 'Utility'
                        : undefined
                }
                isActive={selectedZoneId === scenario.id}
                onSelect={setSelectedZoneId}
              />
            ))}
          </div>

          <p className="smart-property-canvas__caption">
            Representative property view · Select a zone to explore
          </p>
        </div>

        <aside
          id="smart-property-detail"
          className="smart-property-detail"
          aria-live="polite"
          aria-atomic="true"
        >
          {selectedScenario ? (
            <>
              <div className="smart-property-detail__status">
                <span>Selected zone</span>
                <span>{String(propertyScenarios.indexOf(selectedScenario) + 1).padStart(2, '0')}</span>
              </div>
              <h3>{selectedScenario.name}</h3>
              <p className="smart-property-detail__scenario">{selectedScenario.summary}</p>
              <div className="smart-property-detail__categories">
                <p>Connected categories</p>
                <ul>
                  {selectedScenario.categories.map((category) => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </div>
              <button
                className="smart-property-detail__reset"
                type="button"
                onClick={() => setSelectedZoneId(null)}
              >
                Return to full property view
              </button>
            </>
          ) : (
            <>
              <div className="smart-property-detail__status">
                <span>Full property view</span>
                <span>06 zones</span>
              </div>
              <h3>One home. Coordinated possibilities.</h3>
              <p className="smart-property-detail__scenario">
                Explore how representative property concerns can connect across the same reviewed
                foundation.
              </p>
              <div className="smart-property-detail__categories">
                <p>Six connected categories</p>
                <ol>
                  {experienceCategories.map((category) => (
                    <li key={category.slug}>{category.name}</li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default SmartPropertyVisualization;

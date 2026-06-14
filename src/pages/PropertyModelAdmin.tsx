import { useMemo, useState } from 'react';
import type React from 'react';

import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import {
  areaNameOptions,
  bomStatusOptions,
  createEmptyPropertyModelRecord,
  createPropertyModelChildId,
  createPropertyModelRecord,
  customerConcernCategoryOptions,
  loadPropertyModelRecords,
  occupancyContextOptions,
  propertyBaseFloorplanStatusOptions,
  propertyQuoteStageOptions,
  propertyTypeOptions,
  savePropertyModelRecord,
  type PropertyModelAreaPlaceholder,
  type PropertyModelBomLineItem,
  type PropertyModelCustomerConcern,
  type PropertyModelRecord,
  type PropertyModelSolution,
} from '../lib/propertyModel';
import { getHomeSecurityHardwareItems } from '../content/homeSecurityPackageData';
import { offerCategories, packageStartingPoints, publicSolutions } from '../content/wnyhsOfferCatalog';

const paymentPolicyItems = [
  '50% deposit required before scheduling.',
  'Job-specific inventory purchase begins only after deposit verification.',
  'A scheduling date is set only after deposit verification.',
  'Final payment is due upon technician arrival on install day unless Chris or Lou explicitly approve an exception.',
  'Accepted payment methods: credit card, cashiers check, Venmo, Cash App, Zelle, and Klarna financing.',
];

const fallbackHardwareTypes = [
  'WNYHS Core controller',
  'Z-Wave radio',
  'Video doorbell',
  'Indoor camera',
  'Outdoor PoE camera',
  'Door/window sensor',
  'Motion sensor',
  'Water/leak sensor',
  'Temperature/humidity sensor',
  'Siren/chime',
  'Lighting control',
  'Smart lock',
  'Dashboard/configuration item',
  'Mounting/accessory item',
  'Other / freehand',
];

const hardwareTypeOptions = Array.from(
  new Set([...getHomeSecurityHardwareItems('a2').map((item) => item.label), ...fallbackHardwareTypes]),
);

const concernLabel = (concern: PropertyModelCustomerConcern) =>
  [concern.category, concern.text].filter(Boolean).join(' - ') || 'Customer concern not entered';

const Field = ({ label, children, help }: { label: string; children: React.ReactNode; help?: string }) => (
  <label className="quote-workspace-field">
    <span>{label}</span>
    {children}
    {help ? <small>{help}</small> : null}
  </label>
);

const createConcern = (): PropertyModelCustomerConcern => ({
  id: createPropertyModelChildId('CONCERN'),
  category: 'Custom / freehand',
  text: '',
  notes: '',
});

const createArea = (): PropertyModelAreaPlaceholder => ({
  id: createPropertyModelChildId('AREA'),
  label: '',
  notes: '',
});

const createSolution = (): PropertyModelSolution => ({
  id: createPropertyModelChildId('SOL'),
  title: '',
  categoryId: '',
  packageRef: '',
  concernServed: '',
  notes: '',
});

const createBomLineItem = (): PropertyModelBomLineItem => ({
  id: createPropertyModelChildId('BOM'),
  itemName: '',
  hardwareType: '',
  quantity: 1,
  locationRef: '',
  customerConcernServed: '',
  bomStatus: 'gpt_proposed',
  dashboardPrepNote: '',
  installerNote: '',
});

const PropertyModelAdmin = () => {
  const [records, setRecords] = useState<PropertyModelRecord[]>(() => loadPropertyModelRecords());
  const [selectedRecordId, setSelectedRecordId] = useState(() => records[0]?.recordId ?? '');
  const [draft, setDraft] = useState<PropertyModelRecord>(() => records[0] ?? createEmptyPropertyModelRecord());
  const [savedMessage, setSavedMessage] = useState('');

  const selectedRecordLabel = useMemo(() => {
    if (!draft.customer.name && !draft.propertyAddress.line1) {
      return draft.recordId;
    }
    return [draft.customer.name, draft.propertyAddress.line1].filter(Boolean).join(' / ');
  }, [draft.customer.name, draft.propertyAddress.line1, draft.recordId]);

  const hasHubSpotRecord = Boolean(draft.hubSpotLink.contactUrl || draft.hubSpotLink.dealUrl);
  const quoteStageLabel =
    propertyQuoteStageOptions.find((stage) => stage.value === draft.quoteStage)?.label ?? 'Requested Quote';
  const baseFloorplanStatusLabel =
    propertyBaseFloorplanStatusOptions.find((status) => status.value === draft.evidence.baseFloorplanStatus)?.label ??
    'Not Started';

  const updateDraft = (updater: React.SetStateAction<PropertyModelRecord>) => {
    setDraft((current) => {
      if (typeof updater === 'function') {
        return Reflect.apply(updater, undefined, [current]) as PropertyModelRecord;
      }
      return updater;
    });
    setSavedMessage('');
  };

  const handleSelectRecord = (recordId: string) => {
    const selected = records.find((record) => record.recordId === recordId);
    if (selected) {
      setSelectedRecordId(recordId);
      setDraft(selected);
      setSavedMessage('');
    }
  };

  const handleCreateRecord = () => {
    const next = createPropertyModelRecord();
    const nextRecords = loadPropertyModelRecords();
    setRecords(nextRecords);
    setSelectedRecordId(next.recordId);
    setDraft(next);
    setSavedMessage(`Created ${next.recordId}`);
  };

  const updateConcern = (concernId: string, updates: Partial<PropertyModelCustomerConcern>) => {
    updateDraft((record) => ({
      ...record,
      customerConcerns: record.customerConcerns.map((concern) =>
        concern.id === concernId ? { ...concern, ...updates } : concern,
      ),
    }));
  };

  const updateArea = (areaId: string, updates: Partial<PropertyModelAreaPlaceholder>) => {
    updateDraft((record) => ({
      ...record,
      areas: record.areas.map((area) => (area.id === areaId ? { ...area, ...updates } : area)),
    }));
  };

  const updateSolution = (solutionId: string, updates: Partial<PropertyModelSolution>) => {
    updateDraft((record) => ({
      ...record,
      proposedSolutions: record.proposedSolutions.map((solution) =>
        solution.id === solutionId ? { ...solution, ...updates } : solution,
      ),
    }));
  };

  const updateBomLineItem = (itemId: string, updates: Partial<PropertyModelBomLineItem>) => {
    updateDraft((record) => ({
      ...record,
      bomLineItems: record.bomLineItems.map((item) => (item.id === itemId ? { ...item, ...updates } : item)),
    }));
  };

  const removeConcern = (concernId: string) => {
    updateDraft((record) => ({
      ...record,
      customerConcerns: record.customerConcerns.filter((concern) => concern.id !== concernId),
    }));
  };

  const removeArea = (areaId: string) => {
    updateDraft((record) => ({
      ...record,
      areas: record.areas.filter((area) => area.id !== areaId),
    }));
  };

  const removeSolution = (solutionId: string) => {
    updateDraft((record) => ({
      ...record,
      proposedSolutions: record.proposedSolutions.filter((solution) => solution.id !== solutionId),
    }));
  };

  const removeBomLineItem = (itemId: string) => {
    updateDraft((record) => ({
      ...record,
      bomLineItems: record.bomLineItems.filter((item) => item.id !== itemId),
    }));
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = savePropertyModelRecord(draft);
    if (result.ok) {
      setDraft(result.record);
      setRecords(result.records);
      setSelectedRecordId(result.record.recordId);
      setSavedMessage(`Saved ${result.record.recordId} at ${new Date(result.record.updatedAt).toLocaleString()}`);
    } else {
      setSavedMessage('Unable to save in this browser storage session.');
    }
  };

  return (
    <div className="quote-workspace-shell">
      <div className="container quote-workspace-page">
        <SectionHeader
          kicker="Internal WNYHS"
          title="WNYHS Quote Workspace"
          subtitle="Property Model workspace for HubSpot-owned customer/deal records, customer concerns, selected WNYHS solutions, and draft hardware planning."
          actions={
            <button className="btn btn-primary" type="button" onClick={handleCreateRecord}>
              New Property Model
            </button>
          }
        />

        <SpaceFrame className="quote-workspace-hero">
          <div>
            <p className="quote-workspace-eyebrow">Property Model</p>
            <h2>{selectedRecordLabel}</h2>
            <p>
              HubSpot owns customer identity, lead source, lifecycle, deal ownership, and deal stage context. This
              workspace only stores local draft planning details for quote preparation.
            </p>
          </div>
          <div className="quote-workspace-status-grid">
            <div>
              <span>Quote Stage</span>
              <strong>{quoteStageLabel}</strong>
            </div>
            <div>
              <span>HubSpot Record</span>
              <strong>{hasHubSpotRecord ? 'Linked' : 'Create or link first'}</strong>
            </div>
            <div>
              <span>Storage</span>
              <strong>Local draft only</strong>
            </div>
          </div>
        </SpaceFrame>

        <form className="quote-workspace-form" onSubmit={handleSave}>
          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">HubSpot Authority</p>
                <h2>Customer / Deal Link</h2>
                <p>Create or link HubSpot Contact/Deal first when a CRM record does not exist yet.</p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Stored Property Models">
                <select value={selectedRecordId} onChange={(event) => handleSelectRecord(event.target.value)}>
                  {records.length === 0 ? <option value="">No stored records</option> : null}
                  {records.map((record) => (
                    <option key={record.recordId} value={record.recordId}>
                      {[record.customer.name || record.recordId, record.propertyAddress.line1].filter(Boolean).join(' / ')}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Request ID" help="Reference only. Do not change requestId generation from this page.">
                <input
                  value={draft.requestId}
                  onChange={(event) => updateDraft((record) => ({ ...record, requestId: event.target.value }))}
                />
              </Field>
              <Field label="HubSpot Contact URL">
                <input
                  value={draft.hubSpotLink.contactUrl}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      hubSpotLink: { ...record.hubSpotLink, contactUrl: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="HubSpot Deal URL">
                <input
                  value={draft.hubSpotLink.dealUrl}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      hubSpotLink: { ...record.hubSpotLink, dealUrl: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="HubSpot Deal Owner">
                <input
                  value={draft.hubSpotLink.owner}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      hubSpotLink: { ...record.hubSpotLink, owner: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="HubSpot Lead Source">
                <input
                  value={draft.hubSpotLink.leadSource}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      hubSpotLink: { ...record.hubSpotLink, leadSource: event.target.value },
                    }))
                  }
                />
              </Field>
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Floorplan & Property Evidence</p>
                <h2>Floorplan & Property Evidence</h2>
                <p>Source sketch orientation controls during Trace Mode.</p>
                <p>
                  Exterior and interior photos validate the sketch/redraw; they do not override source geometry unless
                  WNYHS approves a correction.
                </p>
                <p>No security/device overlay should proceed until the base floorplan is approved.</p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Source Sketch Reference" help="URL, filename, storage note, or handwritten sketch reference.">
                <input
                  value={draft.evidence.sourceSketchReference}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, sourceSketchReference: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Professional Redraw Reference" help="URL, filename, or redraw work reference.">
                <input
                  value={draft.evidence.professionalRedrawReference}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, professionalRedrawReference: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Base Floorplan Status">
                <select
                  value={draft.evidence.baseFloorplanStatus}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: {
                        ...record.evidence,
                        baseFloorplanStatus: event.target.value as PropertyModelRecord['evidence']['baseFloorplanStatus'],
                      },
                    }))
                  }
                >
                  {propertyBaseFloorplanStatusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </Field>
              {(['north', 'south', 'east', 'west'] as const).map((side) => (
                <Field key={side} label={`${side[0].toUpperCase()}${side.slice(1)} Exterior Photo Reference`}>
                  <input
                    value={draft.evidence.exteriorPhotoReferences[side]}
                    onChange={(event) =>
                      updateDraft((record) => ({
                        ...record,
                        evidence: {
                          ...record.evidence,
                          exteriorPhotoReferences: {
                            ...record.evidence.exteriorPhotoReferences,
                            [side]: event.target.value,
                          },
                        },
                      }))
                    }
                  />
                </Field>
              ))}
              <Field label="Interior Photo References" help="Room photo URLs, filenames, or grouped reference notes.">
                <textarea
                  rows={3}
                  value={draft.evidence.interiorPhotoReferences}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, interiorPhotoReferences: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Compass / Orientation Notes">
                <textarea
                  rows={3}
                  value={draft.evidence.compassOrientationNotes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, compassOrientationNotes: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Known Measurements">
                <textarea
                  rows={3}
                  value={draft.evidence.measurementNotes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, measurementNotes: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Floorplan Validation Notes">
                <textarea
                  rows={3}
                  value={draft.evidence.validationNotes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      evidence: { ...record.evidence, validationNotes: event.target.value },
                    }))
                  }
                />
              </Field>
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Property Model</p>
                <h2>Customer + Property</h2>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Customer Name">
                <input
                  value={draft.customer.name}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, name: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={draft.customer.email}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, email: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Phone">
                <input
                  value={draft.customer.phone}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, phone: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Preferred Contact">
                <select
                  value={draft.customer.preferredContactMethod}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: { ...record.customer, preferredContactMethod: event.target.value },
                    }))
                  }
                >
                  <option value="">Select</option>
                  {['Text', 'Call', 'Email', 'Any'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Address Line 1">
                <input
                  value={draft.propertyAddress.line1}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, line1: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Address Line 2">
                <input
                  value={draft.propertyAddress.line2}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, line2: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="City">
                <input
                  value={draft.propertyAddress.city}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, city: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="State">
                <input
                  value={draft.propertyAddress.state}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, state: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Postal Code">
                <input
                  value={draft.propertyAddress.postalCode}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, postalCode: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Property Type">
                <select
                  value={draft.propertyContext.propertyType}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, propertyType: event.target.value },
                    }))
                  }
                >
                  <option value="">Select</option>
                  {propertyTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Occupancy Context">
                <select
                  value={draft.propertyContext.occupancyContext}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, occupancyContext: event.target.value },
                    }))
                  }
                >
                  <option value="">Select</option>
                  {occupancyContextOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Quote Stage">
                <select
                  value={draft.quoteStage}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      quoteStage: event.target.value as PropertyModelRecord['quoteStage'],
                    }))
                  }
                >
                  {propertyQuoteStageOptions.map((stage) => (
                    <option key={stage.value} value={stage.value}>
                      {stage.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Customer Concerns</p>
                <h2>Customer Concerns</h2>
                <p>Preserve the customer wording for quote personalization. Freehand wording remains available.</p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({ ...record, customerConcerns: [...record.customerConcerns, createConcern()] }))
                }
              >
                Add Concern
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.customerConcerns.length === 0 ? <p>No customer concerns entered yet.</p> : null}
              {draft.customerConcerns.map((concern, index) => (
                <article className="quote-workspace-item" key={concern.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Concern {index + 1}</h3>
                    <button className="btn btn-secondary btn-small" type="button" onClick={() => removeConcern(concern.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Concern Category">
                      <select value={concern.category} onChange={(event) => updateConcern(concern.id, { category: event.target.value })}>
                        {customerConcernCategoryOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Customer Wording">
                      <textarea
                        rows={3}
                        value={concern.text}
                        onChange={(event) => updateConcern(concern.id, { text: event.target.value })}
                      />
                    </Field>
                    <Field label="Internal Notes">
                      <textarea
                        rows={3}
                        value={concern.notes}
                        onChange={(event) => updateConcern(concern.id, { notes: event.target.value })}
                      />
                    </Field>
                  </div>
                </article>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Property Rooms / Areas To Cover</p>
                <h2>Property Rooms / Areas To Cover</h2>
                <p>Use the room or area names the customer uses when possible.</p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => updateDraft((record) => ({ ...record, areas: [...record.areas, createArea()] }))}
              >
                Add Area
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.areas.length === 0 ? <p>No rooms or areas entered yet.</p> : null}
              {draft.areas.map((area, index) => (
                <article className="quote-workspace-item" key={area.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Area {index + 1}</h3>
                    <button className="btn btn-secondary btn-small" type="button" onClick={() => removeArea(area.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Room / Area Name">
                      <input list="quote-workspace-area-options" value={area.label} onChange={(event) => updateArea(area.id, { label: event.target.value })} />
                    </Field>
                    <Field label="Area Notes">
                      <textarea rows={3} value={area.notes} onChange={(event) => updateArea(area.id, { notes: event.target.value })} />
                    </Field>
                  </div>
                </article>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Selected WNYHS Solutions</p>
                <h2>Selected WNYHS Solutions</h2>
                <p>Source-backed options use the current offer catalog; notes remain optional.</p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({ ...record, proposedSolutions: [...record.proposedSolutions, createSolution()] }))
                }
              >
                Add Solution
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.proposedSolutions.length === 0 ? <p>No WNYHS solutions selected yet.</p> : null}
              {draft.proposedSolutions.map((solution, index) => (
                <article className="quote-workspace-item" key={solution.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Solution {index + 1}</h3>
                    <button className="btn btn-secondary btn-small" type="button" onClick={() => removeSolution(solution.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="WNYHS Category">
                      <select value={solution.categoryId} onChange={(event) => updateSolution(solution.id, { categoryId: event.target.value })}>
                        <option value="">Select</option>
                        {offerCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="WNYHS Solution">
                      <select value={solution.title} onChange={(event) => updateSolution(solution.id, { title: event.target.value })}>
                        <option value="">Select or enter note below</option>
                        {publicSolutions.map((item) => (
                          <option key={item.id} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Package / Starting Point">
                      <select value={solution.packageRef} onChange={(event) => updateSolution(solution.id, { packageRef: event.target.value })}>
                        <option value="">Not tied to a package</option>
                        {packageStartingPoints.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Goal / Concern Served">
                      <input
                        list="quote-workspace-concern-options"
                        value={solution.concernServed}
                        onChange={(event) => updateSolution(solution.id, { concernServed: event.target.value })}
                      />
                    </Field>
                    <Field label="Solution Notes">
                      <textarea rows={3} value={solution.notes} onChange={(event) => updateSolution(solution.id, { notes: event.target.value })} />
                    </Field>
                  </div>
                </article>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Draft Hardware / BOM</p>
                <h2>Draft Hardware / BOM</h2>
                <p>Manual planning surface only. Chris/Lou can adjust line items before approval or lock.</p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({ ...record, bomLineItems: [...record.bomLineItems, createBomLineItem()] }))
                }
              >
                Add Hardware
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.bomLineItems.length === 0 ? <p>No draft hardware entered yet.</p> : null}
              {draft.bomLineItems.map((item, index) => (
                <article className="quote-workspace-item" key={item.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Hardware {index + 1}</h3>
                    <button className="btn btn-secondary btn-small" type="button" onClick={() => removeBomLineItem(item.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Item Name / Type">
                      <input list="quote-workspace-hardware-options" value={item.itemName} onChange={(event) => updateBomLineItem(item.id, { itemName: event.target.value })} />
                    </Field>
                    <Field label="Hardware Class">
                      <select value={item.hardwareType} onChange={(event) => updateBomLineItem(item.id, { hardwareType: event.target.value })}>
                        <option value="">Select</option>
                        {hardwareTypeOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Quantity">
                      <input
                        min={1}
                        type="number"
                        value={item.quantity}
                        onChange={(event) => updateBomLineItem(item.id, { quantity: Math.max(1, Number(event.target.value) || 1) })}
                      />
                    </Field>
                    <Field label="BOM Status">
                      <select value={item.bomStatus} onChange={(event) => updateBomLineItem(item.id, { bomStatus: event.target.value as PropertyModelBomLineItem['bomStatus'] })}>
                        {bomStatusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Location / Floorplan Reference">
                      <input value={item.locationRef} onChange={(event) => updateBomLineItem(item.id, { locationRef: event.target.value })} />
                    </Field>
                    <Field label="Customer Concern Served">
                      <input
                        list="quote-workspace-concern-options"
                        value={item.customerConcernServed}
                        onChange={(event) => updateBomLineItem(item.id, { customerConcernServed: event.target.value })}
                      />
                    </Field>
                    <Field label="Dashboard Prep Note">
                      <textarea rows={3} value={item.dashboardPrepNote} onChange={(event) => updateBomLineItem(item.id, { dashboardPrepNote: event.target.value })} />
                    </Field>
                    <Field label="Installer Note">
                      <textarea rows={3} value={item.installerNote} onChange={(event) => updateBomLineItem(item.id, { installerNote: event.target.value })} />
                    </Field>
                  </div>
                </article>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Draft Quote Preview</p>
                <h2>Draft Quote Preview</h2>
              </div>
            </div>
            <div className="quote-workspace-preview">
              <section>
                <h3>Section 1: Floorplan / Property Plan</h3>
                <ul className="operator-list">
                  <li>
                    <strong>Base floorplan status:</strong> {baseFloorplanStatusLabel}
                  </li>
                  <li>
                    <strong>Source sketch reference:</strong>{' '}
                    {draft.evidence.sourceSketchReference || 'Not entered yet.'}
                  </li>
                  <li>
                    <strong>Professional redraw reference:</strong>{' '}
                    {draft.evidence.professionalRedrawReference || 'Not entered yet.'}
                  </li>
                  <li>
                    <strong>Validation notes:</strong> {draft.evidence.validationNotes || 'No conflicts noted yet.'}
                  </li>
                </ul>
              </section>
              <section>
                <h3>Section 2: Customer Concerns + WNYHS Accommodation Plan</h3>
                {draft.customerConcerns.length === 0 && draft.proposedSolutions.length === 0 ? (
                  <p>No customer concerns or selected WNYHS solutions entered yet.</p>
                ) : null}
                {draft.customerConcerns.length > 0 ? (
                  <>
                    <h4>Customer Concerns</h4>
                    <ul className="operator-list">
                      {draft.customerConcerns.map((concern) => (
                        <li key={concern.id}>{concern.text || concern.category}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {draft.proposedSolutions.length > 0 ? (
                  <>
                    <h4>WNYHS Accommodation Plan</h4>
                    <ul className="operator-list">
                      {draft.proposedSolutions.map((solution) => (
                        <li key={solution.id}>
                          <strong>{solution.title || 'Untitled WNYHS solution'}:</strong>{' '}
                          {solution.concernServed || 'Customer concern not selected yet.'}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </section>
              <section>
                <h3>Section 3: Formal Quote / Hardware List / Payment Terms</h3>
                {draft.bomLineItems.length > 0 ? (
                  <ul className="operator-list">
                    {draft.bomLineItems.map((item) => (
                      <li key={item.id}>
                        {item.quantity} x {item.itemName || item.hardwareType || 'Unnamed hardware'} at{' '}
                        {item.locationRef || 'location not entered'}; serves{' '}
                        {item.customerConcernServed || 'concern not entered'}.
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hardware line items entered yet.</p>
                )}
                <h4>Payment Terms</h4>
                <ul className="operator-list">
                  {paymentPolicyItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Operational Gates</p>
                <h2>Gate Placeholders</h2>
              </div>
            </div>
            <div className="quote-workspace-check-grid">
              {[
                ['floorplanApproved', 'Base floorplan approved'],
                ['depositVerified', 'Deposit verified'],
                ['inventoryReady', 'Inventory readiness checked'],
                ['schedulingReady', 'Scheduling ready'],
                ['finalBalanceExceptionApproved', 'Final balance exception approved'],
              ].map(([key, label]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={draft.gates[key as keyof PropertyModelRecord['gates']]}
                    onChange={(event) =>
                      updateDraft((record) => ({
                        ...record,
                        gates: { ...record.gates, [key]: event.target.checked },
                      }))
                    }
                  />
                  {label}
                </label>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-grid">
              <Field label="Property Context Notes">
                <textarea
                  rows={5}
                  value={draft.propertyContext.notes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, notes: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="General Notes">
                <textarea rows={5} value={draft.notes} onChange={(event) => updateDraft((record) => ({ ...record, notes: event.target.value }))} />
              </Field>
            </div>
            <div className="quote-workspace-save-row">
              <button className="btn btn-primary" type="submit">
                Save Property Model
              </button>
              <span>
                Created {new Date(draft.createdAt).toLocaleString()} / Updated {new Date(draft.updatedAt).toLocaleString()}
              </span>
              {savedMessage ? <strong>{savedMessage}</strong> : null}
            </div>
          </SpaceFrame>
        </form>

        <datalist id="quote-workspace-area-options">
          {areaNameOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <datalist id="quote-workspace-concern-options">
          {draft.customerConcerns.map((concern) => (
            <option key={concern.id} value={concernLabel(concern)} />
          ))}
        </datalist>
        <datalist id="quote-workspace-hardware-options">
          {hardwareTypeOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default PropertyModelAdmin;

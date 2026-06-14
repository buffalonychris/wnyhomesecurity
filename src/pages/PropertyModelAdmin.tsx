import { useMemo, useState } from 'react';
import type React from 'react';

import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import {
  createEmptyPropertyModelRecord,
  createPropertyModelChildId,
  createPropertyModelRecord,
  loadPropertyModelRecords,
  propertyQuoteStageOptions,
  savePropertyModelRecord,
  type PropertyModelAreaPlaceholder,
  type PropertyModelBomLineItem,
  type PropertyModelCustomerGoal,
  type PropertyModelDevicePlaceholder,
  type PropertyModelRecord,
  type PropertyModelSolution,
} from '../lib/propertyModel';

const splitLines = (value: string) =>
  value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);

const joinLines = (items: string[]) => items.join('\n');

const parseAreas = (value: string): PropertyModelAreaPlaceholder[] =>
  splitLines(value).map((label, index) => ({
    id: `area-${index + 1}`,
    label,
    notes: '',
  }));

const parseDevices = (value: string): PropertyModelDevicePlaceholder[] =>
  splitLines(value).map((label, index) => ({
    id: `device-${index + 1}`,
    label,
    locationRef: '',
    notes: '',
  }));

const formatAreas = (areas: PropertyModelAreaPlaceholder[]) => areas.map((area) => area.label).join('\n');

const formatDevices = (devices: PropertyModelDevicePlaceholder[]) => devices.map((device) => device.label).join('\n');

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label style={{ display: 'grid', gap: '0.4rem' }}>
    <span style={{ color: '#cbd5e1', fontSize: '0.9rem', fontWeight: 700 }}>{label}</span>
    {children}
  </label>
);

const inputStyle = {
  width: '100%',
  border: '1px solid rgba(148, 163, 184, 0.28)',
  borderRadius: '0.6rem',
  background: 'rgba(15, 23, 42, 0.74)',
  color: '#f8fafc',
  padding: '0.75rem 0.9rem',
} satisfies React.CSSProperties;

const gridStyle = {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
} satisfies React.CSSProperties;

const paymentPolicyItems = [
  '50% deposit required before scheduling.',
  'No job-specific inventory purchase before deposit verification.',
  'Final balance due upon technician arrival on install day unless Chris or Lou authorize an exception.',
];

const createGoal = (): PropertyModelCustomerGoal => ({
  id: createPropertyModelChildId('GOAL'),
  goal: '',
  notes: '',
});

const createSolution = (): PropertyModelSolution => ({
  id: createPropertyModelChildId('SOL'),
  title: '',
  customerGoalRef: '',
  wnyhsPurpose: '',
  notes: '',
});

const createBomLineItem = (): PropertyModelBomLineItem => ({
  id: createPropertyModelChildId('BOM'),
  itemName: '',
  quantity: 1,
  locationRef: '',
  customerGoalServed: '',
  wnyhsPurpose: '',
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

  const updateGoal = (goalId: string, updates: Partial<PropertyModelCustomerGoal>) => {
    updateDraft((record) => ({
      ...record,
      customerGoals: record.customerGoals.map((goal) => (goal.id === goalId ? { ...goal, ...updates } : goal)),
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

  const removeGoal = (goalId: string) => {
    updateDraft((record) => ({
      ...record,
      customerGoals: record.customerGoals.filter((goal) => goal.id !== goalId),
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
    <div className="space-shell">
      <div className="container section space-grid">
        <SectionHeader
          kicker="Internal"
          title="Property Model Intake"
          subtitle="Operator-only skeleton for capturing the central property record before future quote-system stages."
        />

        <SpaceFrame>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ margin: 0 }}>{selectedRecordLabel}</h2>
              <p style={{ color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                Local browser storage only. No quote generation, pricing, inventory automation, calendar writes, or
                payment processing runs from this page.
              </p>
            </div>
            <button className="btn btn-primary" type="button" onClick={handleCreateRecord}>
              New property record
            </button>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Field label="Stored records">
              <select
                style={inputStyle}
                value={selectedRecordId}
                onChange={(event) => handleSelectRecord(event.target.value)}
              >
                {records.length === 0 ? <option value="">No stored records</option> : null}
                {records.map((record) => (
                  <option key={record.recordId} value={record.recordId}>
                    {[record.customer.name || record.recordId, record.propertyAddress.line1].filter(Boolean).join(' / ')}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </SpaceFrame>

        <form className="space-grid" onSubmit={handleSave}>
          <SpaceFrame>
            <h2>Customer And Property</h2>
            <div style={gridStyle}>
              <Field label="Request ID">
                <input
                  style={inputStyle}
                  value={draft.requestId}
                  onChange={(event) => updateDraft((record) => ({ ...record, requestId: event.target.value }))}
                />
              </Field>
              <Field label="Customer name">
                <input
                  style={inputStyle}
                  value={draft.customer.name}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, name: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Email">
                <input
                  style={inputStyle}
                  type="email"
                  value={draft.customer.email}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, email: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Phone">
                <input
                  style={inputStyle}
                  value={draft.customer.phone}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customer: { ...record.customer, phone: event.target.value } }))
                  }
                />
              </Field>
              <Field label="Preferred contact">
                <input
                  style={inputStyle}
                  value={draft.customer.preferredContactMethod}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: { ...record.customer, preferredContactMethod: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Address line 1">
                <input
                  style={inputStyle}
                  value={draft.propertyAddress.line1}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, line1: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Address line 2">
                <input
                  style={inputStyle}
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
                  style={inputStyle}
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
                  style={inputStyle}
                  value={draft.propertyAddress.state}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, state: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Postal code">
                <input
                  style={inputStyle}
                  value={draft.propertyAddress.postalCode}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyAddress: { ...record.propertyAddress, postalCode: event.target.value },
                    }))
                  }
                />
              </Field>
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <h2>Context And Planning Placeholders</h2>
            <div style={gridStyle}>
              <Field label="Property type">
                <input
                  style={inputStyle}
                  value={draft.propertyContext.propertyType}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, propertyType: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Occupancy/context">
                <input
                  style={inputStyle}
                  value={draft.propertyContext.occupancyContext}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, occupancyContext: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="Quote stage">
                <select
                  style={inputStyle}
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
            <div style={{ ...gridStyle, marginTop: '1rem' }}>
              <Field label="Customer concerns/situations">
                <textarea
                  rows={6}
                  style={inputStyle}
                  value={joinLines(draft.customerConcerns)}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, customerConcerns: splitLines(event.target.value) }))
                  }
                />
              </Field>
              <Field label="Selected/recommended solution categories">
                <textarea
                  rows={6}
                  style={inputStyle}
                  value={joinLines(draft.solutionCategories)}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, solutionCategories: splitLines(event.target.value) }))
                  }
                />
              </Field>
              <Field label="Rooms/areas/zones placeholder">
                <textarea
                  rows={6}
                  style={inputStyle}
                  value={formatAreas(draft.areas)}
                  onChange={(event) => updateDraft((record) => ({ ...record, areas: parseAreas(event.target.value) }))}
                />
              </Field>
              <Field label="Devices/hardware placeholder">
                <textarea
                  rows={6}
                  style={inputStyle}
                  value={formatDevices(draft.devices)}
                  onChange={(event) =>
                    updateDraft((record) => ({ ...record, devices: parseDevices(event.target.value) }))
                  }
                />
              </Field>
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0 }}>Customer Goals</h2>
                <p style={{ color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Capture what the customer is trying to accomplish before hardware is selected.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({ ...record, customerGoals: [...record.customerGoals, createGoal()] }))
                }
              >
                Add goal
              </button>
            </div>
            <div className="space-grid" style={{ marginTop: '1rem' }}>
              {draft.customerGoals.length === 0 ? (
                <p style={{ color: '#cbd5e1', margin: 0 }}>No customer goals entered yet.</p>
              ) : null}
              {draft.customerGoals.map((goal, index) => (
                <div key={goal.id} style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ marginTop: 0 }}>Goal {index + 1}</h3>
                    <button className="btn btn-secondary" type="button" onClick={() => removeGoal(goal.id)}>
                      Remove
                    </button>
                  </div>
                  <div style={gridStyle}>
                    <Field label="Customer goal">
                      <input
                        style={inputStyle}
                        value={goal.goal}
                        onChange={(event) => updateGoal(goal.id, { goal: event.target.value })}
                      />
                    </Field>
                    <Field label="Goal notes">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={goal.notes}
                        onChange={(event) => updateGoal(goal.id, { notes: event.target.value })}
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0 }}>Proposed WNYHS Solutions</h2>
                <p style={{ color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Map WNYHS outcome language back to customer goals before the BOM is treated as quote-ready.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    proposedSolutions: [...record.proposedSolutions, createSolution()],
                  }))
                }
              >
                Add solution
              </button>
            </div>
            <div className="space-grid" style={{ marginTop: '1rem' }}>
              {draft.proposedSolutions.length === 0 ? (
                <p style={{ color: '#cbd5e1', margin: 0 }}>No WNYHS solutions entered yet.</p>
              ) : null}
              {draft.proposedSolutions.map((solution, index) => (
                <div key={solution.id} style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ marginTop: 0 }}>Solution {index + 1}</h3>
                    <button className="btn btn-secondary" type="button" onClick={() => removeSolution(solution.id)}>
                      Remove
                    </button>
                  </div>
                  <div style={gridStyle}>
                    <Field label="Solution title">
                      <input
                        style={inputStyle}
                        value={solution.title}
                        onChange={(event) => updateSolution(solution.id, { title: event.target.value })}
                      />
                    </Field>
                    <Field label="Customer goal served">
                      <input
                        style={inputStyle}
                        value={solution.customerGoalRef}
                        onChange={(event) => updateSolution(solution.id, { customerGoalRef: event.target.value })}
                      />
                    </Field>
                    <Field label="WNYHS purpose">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={solution.wnyhsPurpose}
                        onChange={(event) => updateSolution(solution.id, { wnyhsPurpose: event.target.value })}
                      />
                    </Field>
                    <Field label="Solution notes">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={solution.notes}
                        onChange={(event) => updateSolution(solution.id, { notes: event.target.value })}
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0 }}>Hardware / BOM Line Items</h2>
                <p style={{ color: '#cbd5e1', margin: '0.35rem 0 0' }}>
                  Prototype-only line items. This does not calculate price, reserve inventory, or create orders.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({ ...record, bomLineItems: [...record.bomLineItems, createBomLineItem()] }))
                }
              >
                Add hardware
              </button>
            </div>
            <div className="space-grid" style={{ marginTop: '1rem' }}>
              {draft.bomLineItems.length === 0 ? (
                <p style={{ color: '#cbd5e1', margin: 0 }}>No hardware line items entered yet.</p>
              ) : null}
              {draft.bomLineItems.map((item, index) => (
                <div key={item.id} style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ marginTop: 0 }}>Hardware {index + 1}</h3>
                    <button className="btn btn-secondary" type="button" onClick={() => removeBomLineItem(item.id)}>
                      Remove
                    </button>
                  </div>
                  <div style={gridStyle}>
                    <Field label="Item name">
                      <input
                        style={inputStyle}
                        value={item.itemName}
                        onChange={(event) => updateBomLineItem(item.id, { itemName: event.target.value })}
                      />
                    </Field>
                    <Field label="Quantity">
                      <input
                        min={1}
                        style={inputStyle}
                        type="number"
                        value={item.quantity}
                        onChange={(event) =>
                          updateBomLineItem(item.id, { quantity: Math.max(1, Number(event.target.value) || 1) })
                        }
                      />
                    </Field>
                    <Field label="Location / floorplan reference">
                      <input
                        style={inputStyle}
                        value={item.locationRef}
                        onChange={(event) => updateBomLineItem(item.id, { locationRef: event.target.value })}
                      />
                    </Field>
                    <Field label="Customer goal served">
                      <input
                        style={inputStyle}
                        value={item.customerGoalServed}
                        onChange={(event) => updateBomLineItem(item.id, { customerGoalServed: event.target.value })}
                      />
                    </Field>
                    <Field label="WNYHS purpose">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={item.wnyhsPurpose}
                        onChange={(event) => updateBomLineItem(item.id, { wnyhsPurpose: event.target.value })}
                      />
                    </Field>
                    <Field label="Dashboard prep note">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={item.dashboardPrepNote}
                        onChange={(event) => updateBomLineItem(item.id, { dashboardPrepNote: event.target.value })}
                      />
                    </Field>
                    <Field label="Installer note">
                      <textarea
                        rows={3}
                        style={inputStyle}
                        value={item.installerNote}
                        onChange={(event) => updateBomLineItem(item.id, { installerNote: event.target.value })}
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <h2>Draft Quote Structure</h2>
            <div className="space-grid">
              <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                <h3>Section 1: Floorplan / Property Plan</h3>
                <p style={{ color: '#cbd5e1' }}>
                  Placeholder pending approved floorplan/property plan. Use the approved redraw and location labels before
                  treating hardware placement as final.
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                <h3>Section 2: Customer Goals + WNYHS Accommodation Plan</h3>
                {draft.customerGoals.length === 0 && draft.proposedSolutions.length === 0 ? (
                  <p style={{ color: '#cbd5e1' }}>No customer goals or WNYHS solutions entered yet.</p>
                ) : null}
                {draft.customerGoals.length > 0 ? (
                  <>
                    <h4>Customer Goals</h4>
                    <ul className="operator-list">
                      {draft.customerGoals.map((goal) => (
                        <li key={goal.id}>{goal.goal || 'Untitled customer goal'}</li>
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
                          <strong>{solution.title || 'Untitled solution'}:</strong>{' '}
                          {solution.wnyhsPurpose || 'Purpose not entered yet.'}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
              <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.2)', paddingTop: '1rem' }}>
                <h3>Section 3: Formal Quote / Hardware List / Payment Terms</h3>
                {draft.bomLineItems.length > 0 ? (
                  <ul className="operator-list">
                    {draft.bomLineItems.map((item) => (
                      <li key={item.id}>
                        {item.quantity} x {item.itemName || 'Unnamed hardware'} at{' '}
                        {item.locationRef || 'location not entered'}; serves{' '}
                        {item.customerGoalServed || 'goal not entered'}.
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ color: '#cbd5e1' }}>No hardware line items entered yet.</p>
                )}
                <h4>Payment Terms</h4>
                <ul className="operator-list">
                  {paymentPolicyItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SpaceFrame>

          <SpaceFrame>
            <h2>Operational Gate Placeholders</h2>
            <div style={gridStyle}>
              {[
                ['floorplanApproved', 'Base floorplan approved'],
                ['depositVerified', 'Deposit verified'],
                ['inventoryReady', 'Inventory readiness checked'],
                ['schedulingReady', 'Scheduling ready'],
                ['finalBalanceExceptionApproved', 'Final balance exception approved'],
              ].map(([key, label]) => (
                <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#e2e8f0' }}>
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

          <SpaceFrame>
            <h2>Operator Notes</h2>
            <div style={gridStyle}>
              <Field label="Property context notes">
                <textarea
                  rows={5}
                  style={inputStyle}
                  value={draft.propertyContext.notes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      propertyContext: { ...record.propertyContext, notes: event.target.value },
                    }))
                  }
                />
              </Field>
              <Field label="General notes">
                <textarea
                  rows={5}
                  style={inputStyle}
                  value={draft.notes}
                  onChange={(event) => updateDraft((record) => ({ ...record, notes: event.target.value }))}
                />
              </Field>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem', alignItems: 'center' }}>
              <button className="btn btn-primary" type="submit">
                Save property record
              </button>
              <span style={{ color: '#cbd5e1' }}>
                Created {new Date(draft.createdAt).toLocaleString()} / Updated {new Date(draft.updatedAt).toLocaleString()}
              </span>
              {savedMessage ? <strong style={{ color: '#a3e635' }}>{savedMessage}</strong> : null}
            </div>
          </SpaceFrame>
        </form>
      </div>
    </div>
  );
};

export default PropertyModelAdmin;

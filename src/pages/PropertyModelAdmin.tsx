import { useMemo, useState } from 'react';
import type React from 'react';

import SectionHeader from '../components/operator/SectionHeader';
import SpaceFrame from '../components/operator/SpaceFrame';
import {
  createEmptyPropertyModelRecord,
  createPropertyModelRecord,
  loadPropertyModelRecords,
  propertyQuoteStageOptions,
  savePropertyModelRecord,
  type PropertyModelAreaPlaceholder,
  type PropertyModelDevicePlaceholder,
  type PropertyModelRecord,
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

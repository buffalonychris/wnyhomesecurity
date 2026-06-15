import { useRef, useMemo, useState } from "react";
import type React from "react";
import { Link } from "react-router-dom";

import SectionHeader from "../components/operator/SectionHeader";
import SpaceFrame from "../components/operator/SpaceFrame";
import {
  areaNameOptions,
  bomStatusOptions,
  installerAssignmentOptions,
  createEmptyPropertyModelRecord,
  createPropertyModelChildId,
  createPropertyModelImportCopy,
  createPropertyModelRecord,
  createFuneralHomeTestCasePropertyModelRecordInStorage,
  customerConcernCategoryOptions,
  isPropertyModelImportCandidate,
  loadPropertyModelRecords,
  occupancyContextOptions,
  propertyEvidenceOrientationOptions,
  propertyEvidenceStatusOptions,
  propertyEvidenceTypeOptions,
  propertyQuoteStageOptions,
  propertyTypeOptions,
  redrawStatusOptions,
  normalizePropertyModelRecord,
  savePropertyModelRecord,
  savePropertyModelRecords,
  type PropertyModelAreaPlaceholder,
  type PropertyModelBomLineItem,
  type PropertyModelCustomerConcern,
  type PropertyModelEvidenceItem,
  type PropertyModelPricing,
  type PropertyModelRecord,
  type PropertyModelSolution,
} from "../lib/propertyModel";
import {
  catalogCategories,
  catalogHardwareItems,
  catalogPackages,
  catalogSolutions,
} from "../data/catalog";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    Number.isFinite(value) ? value : 0,
  );

const calculatePricing = (
  pricing: PropertyModelPricing,
): PropertyModelPricing => {
  const subtotal = Number(pricing.quoteSubtotal) || 0;
  const discount = Number(pricing.quoteDiscount) || 0;
  const taxOrFees = Number(pricing.quoteTaxOrFees) || 0;
  const total = Math.max(0, subtotal - discount + taxOrFees);
  const depositPercent = Number(pricing.depositPercent) || 50;
  const depositAmount = pricing.depositRequired
    ? Math.max(0, total * (depositPercent / 100))
    : 0;

  return {
    ...pricing,
    quoteSubtotal: subtotal,
    quoteDiscount: discount,
    quoteTaxOrFees: taxOrFees,
    quoteTotal: total,
    depositPercent,
    depositAmount,
    balanceDueOnArrival: Math.max(0, total - depositAmount),
  };
};

const paymentPolicyItems = [
  "50% deposit required before scheduling.",
  "Job-specific inventory purchase begins only after deposit verification.",
  "A scheduling date is set only after deposit verification.",
  "Final payment is due upon technician arrival on install day unless Chris or Lou explicitly approve an exception.",
  "Accepted payment methods: credit card, cashiers check, Venmo, Cash App, Zelle, and Klarna financing.",
];

const fallbackHardwareTypes = [
  "WNYHS Core controller",
  "Z-Wave radio",
  "Video doorbell",
  "Indoor camera",
  "Outdoor PoE camera",
  "Door/window sensor",
  "Motion sensor",
  "Water/leak sensor",
  "Temperature/humidity sensor",
  "Siren/chime",
  "Lighting control",
  "Smart lock",
  "Dashboard/configuration item",
  "Mounting/accessory item",
  "Other / freehand",
];

const hardwareTypeOptions = Array.from(
  new Set([
    ...catalogHardwareItems.map((item) => item.hardwareType),
    ...catalogHardwareItems.map((item) => item.label),
    ...fallbackHardwareTypes,
  ]),
);

const concernLabel = (concern: PropertyModelCustomerConcern) =>
  [concern.category, concern.text].filter(Boolean).join(" - ") ||
  "Customer concern not entered";

const Field = ({
  label,
  children,
  help,
}: {
  label: string;
  children: React.ReactNode;
  help?: string;
}) => (
  <label className="quote-workspace-field">
    <span>{label}</span>
    {children}
    {help ? <small>{help}</small> : null}
  </label>
);

const createConcern = (): PropertyModelCustomerConcern => ({
  id: createPropertyModelChildId("CONCERN"),
  category: "Custom / freehand",
  text: "",
  notes: "",
});

const createArea = (): PropertyModelAreaPlaceholder => ({
  id: createPropertyModelChildId("AREA"),
  label: "",
  notes: "",
});

const createSolution = (): PropertyModelSolution => ({
  id: createPropertyModelChildId("SOL"),
  title: "",
  categoryId: "",
  packageRef: "",
  concernServed: "",
  notes: "",
});

const createBomLineItem = (): PropertyModelBomLineItem => ({
  id: createPropertyModelChildId("BOM"),
  itemName: "",
  hardwareType: "",
  quantity: 1,
  catalogHardwareItemId: "",
  locationRef: "",
  propertyAreaRef: "",
  customerConcernServed: "",
  selectedSolutionRef: "",
  evidenceRef: "",
  bomStatus: "needs_placement",
  dashboardPrepNote: "",
  installerNote: "",
  installerAssignment: "unassigned",
});

const createEvidenceItem = (): PropertyModelEvidenceItem => ({
  id: createPropertyModelChildId("EVID"),
  evidenceType: "hand_drawn_floorplan",
  label: "",
  sourceReference: "",
  orientationSide: "unknown_na",
  notes: "",
  status: "source_provided",
});

const PropertyModelAdmin = () => {
  const [records, setRecords] = useState<PropertyModelRecord[]>(() =>
    loadPropertyModelRecords(),
  );
  const [selectedRecordId, setSelectedRecordId] = useState(
    () => records[0]?.recordId ?? "",
  );
  const [draft, setDraft] = useState<PropertyModelRecord>(
    () => records[0] ?? createEmptyPropertyModelRecord(),
  );
  const [savedMessage, setSavedMessage] = useState("");
  const importInputRef = useRef<HTMLInputElement | null>(null);

  const selectedRecordLabel = useMemo(() => {
    if (!draft.customer.name && !draft.propertyAddress.line1) {
      return draft.recordId;
    }
    return [draft.customer.name, draft.propertyAddress.line1]
      .filter(Boolean)
      .join(" / ");
  }, [draft.customer.name, draft.propertyAddress.line1, draft.recordId]);

  const hasHubSpotRecord = Boolean(
    draft.hubSpotLink.contactUrl || draft.hubSpotLink.dealUrl,
  );
  const quoteStageLabel =
    propertyQuoteStageOptions.find((stage) => stage.value === draft.quoteStage)
      ?.label ?? "Requested Quote";

  const reconciliationSummary = useMemo(
    () => ({
      totalHardwareItems: draft.bomLineItems.length,
      missingRoomArea: draft.bomLineItems.filter(
        (item) => !(item.propertyAreaRef || item.locationRef).trim(),
      ).length,
      missingConcern: draft.bomLineItems.filter(
        (item) => !item.customerConcernServed.trim(),
      ).length,
      missingSolution: draft.bomLineItems.filter(
        (item) => !item.selectedSolutionRef.trim(),
      ).length,
      missingEvidence: draft.bomLineItems.filter(
        (item) => !item.evidenceRef.trim(),
      ).length,
      missingInstallerNote: draft.bomLineItems.filter(
        (item) => !item.installerNote.trim(),
      ).length,
      missingDashboardNote: draft.bomLineItems.filter(
        (item) => !item.dashboardPrepNote.trim(),
      ).length,
      approved: draft.bomLineItems.filter(
        (item) => item.bomStatus === "approved",
      ).length,
      locked: draft.bomLineItems.filter((item) => item.bomStatus === "locked")
        .length,
    }),
    [draft.bomLineItems],
  );
  const securitySolutionSelected =
    draft.solutionCategories.includes("home-security") ||
    draft.proposedSolutions.some((solution) => {
      const haystack = [
        solution.categoryId,
        solution.title,
        solution.packageRef,
        solution.notes,
      ]
        .join(" ")
        .toLowerCase();
      return (
        haystack.includes("security") ||
        haystack.includes("camera") ||
        haystack.includes("video")
      );
    });
  const hasCameraHardware = draft.bomLineItems.some((item) => {
    const haystack = [
      item.itemName,
      item.hardwareType,
      item.catalogHardwareItemId,
    ]
      .join(" ")
      .toLowerCase();
    return (
      haystack.includes("camera") ||
      haystack.includes("video") ||
      haystack.includes("doorbell")
    );
  });
  const showMastReminder = securitySolutionSelected && hasCameraHardware;
  const calculatedPricing = calculatePricing(draft.pricing);
  const statusMessage =
    savedMessage || `Updated ${new Date(draft.updatedAt).toLocaleString()}`;

  const getReconciliationCardClass = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.startsWith("missing"))
      return "quote-workspace-reconciliation-card quote-workspace-reconciliation-card--missing";
    if (lowerLabel === "approved")
      return "quote-workspace-reconciliation-card quote-workspace-reconciliation-card--approved";
    if (lowerLabel === "locked")
      return "quote-workspace-reconciliation-card quote-workspace-reconciliation-card--locked";
    return "quote-workspace-reconciliation-card";
  };

  const floorplanEvidenceSummary = useMemo(
    () => ({
      handDrawnFloorplan: draft.evidenceItems.some(
        (item) => item.evidenceType === "hand_drawn_floorplan",
      ),
      professionalRedraw: draft.evidenceItems.some(
        (item) => item.evidenceType === "professional_redraw",
      ),
      exteriorPhotos: draft.evidenceItems.some(
        (item) => item.evidenceType === "exterior_photo",
      ),
      interiorPhotos: draft.evidenceItems.some(
        (item) => item.evidenceType === "interior_photo",
      ),
      orientationEvidence: draft.evidenceItems.some(
        (item) => item.evidenceType === "compass_orientation_note",
      ),
    }),
    [draft.evidenceItems],
  );

  const updateDraft = (updater: React.SetStateAction<PropertyModelRecord>) => {
    setDraft((current) => {
      if (typeof updater === "function") {
        return Reflect.apply(updater, undefined, [
          current,
        ]) as PropertyModelRecord;
      }
      return updater;
    });
    setSavedMessage("");
  };

  const handleSelectRecord = (recordId: string) => {
    const selected = records.find((record) => record.recordId === recordId);
    if (selected) {
      setSelectedRecordId(recordId);
      setDraft(selected);
      setSavedMessage("");
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

  const handleLoadFuneralHomeTestCase = () => {
    const result = createFuneralHomeTestCasePropertyModelRecordInStorage();
    if (result.ok) {
      setRecords(result.records);
      setSelectedRecordId(result.record.recordId);
      setDraft(result.record);
      setSavedMessage(
        `Loaded funeral home local test case ${result.record.recordId}. Existing records were not overwritten.`,
      );
    } else {
      setSavedMessage(
        "Unable to save the funeral home test case in this browser storage session.",
      );
    }
  };

  const makeExportFileName = (record: PropertyModelRecord) => {
    const label =
      record.propertyAddress.line1 || record.customer.name || record.recordId;
    const safeLabel = label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);
    return `wnyhs-property-model-${safeLabel || record.recordId}.json`;
  };

  const downloadJson = (fileName: string, payload: unknown) => {
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const exportEnvelope = (payload: unknown) => ({
    schema: "wnyhs-property-model-local-json",
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    storage: "local-browser-backup-only",
    payload,
  });

  const handleExportCurrentRecord = () => {
    downloadJson(makeExportFileName(draft), exportEnvelope(draft));
    setSavedMessage(`Exported ${draft.recordId} as local JSON.`);
  };

  const handleExportAllRecords = () => {
    const currentRecords = loadPropertyModelRecords();
    downloadJson(
      "wnyhs-property-models-backup.json",
      exportEnvelope(currentRecords),
    );
    setSavedMessage(
      `Exported ${currentRecords.length} local Property Model record(s).`,
    );
  };

  const extractImportRecords = (value: unknown): unknown[] => {
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") {
      const candidate = value as { payload?: unknown; records?: unknown };
      if (Array.isArray(candidate.payload)) return candidate.payload;
      if (isPropertyModelImportCandidate(candidate.payload))
        return [candidate.payload];
      if (Array.isArray(candidate.records)) return candidate.records;
    }
    return [value];
  };

  const handleImportFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const parsed = JSON.parse(await file.text()) as unknown;
      const candidates = extractImportRecords(parsed);
      const normalizedImports = candidates
        .filter(isPropertyModelImportCandidate)
        .map((candidate) => normalizePropertyModelRecord(candidate));

      if (normalizedImports.length === 0) {
        setSavedMessage(
          "Import failed: JSON did not match the expected Property Model shape.",
        );
        return;
      }

      const currentRecords = loadPropertyModelRecords();
      const currentIds = new Set(
        currentRecords.map((record) => record.recordId),
      );
      const importIds = new Set<string>();
      const importedRecords = normalizedImports.map((record) => {
        if (currentIds.has(record.recordId) || importIds.has(record.recordId)) {
          const copy = createPropertyModelImportCopy(record);
          importIds.add(copy.recordId);
          return copy;
        }
        importIds.add(record.recordId);
        return { ...record, updatedAt: new Date().toISOString() };
      });
      const nextRecords = [...importedRecords, ...currentRecords];

      if (savePropertyModelRecords(nextRecords)) {
        setRecords(nextRecords);
        setSelectedRecordId(importedRecords[0].recordId);
        setDraft(importedRecords[0]);
        setSavedMessage(
          `Imported ${importedRecords.length} Property Model record(s). ID collisions were imported as new local copies.`,
        );
      } else {
        setSavedMessage(
          "Import failed: unable to save in this browser storage session.",
        );
      }
    } catch {
      setSavedMessage("Import failed: choose a valid local JSON export file.");
    }
  };

  const updateConcern = (
    concernId: string,
    updates: Partial<PropertyModelCustomerConcern>,
  ) => {
    updateDraft((record) => ({
      ...record,
      customerConcerns: record.customerConcerns.map((concern) =>
        concern.id === concernId ? { ...concern, ...updates } : concern,
      ),
    }));
  };

  const updateArea = (
    areaId: string,
    updates: Partial<PropertyModelAreaPlaceholder>,
  ) => {
    updateDraft((record) => ({
      ...record,
      areas: record.areas.map((area) =>
        area.id === areaId ? { ...area, ...updates } : area,
      ),
    }));
  };

  const updateSolution = (
    solutionId: string,
    updates: Partial<PropertyModelSolution>,
  ) => {
    updateDraft((record) => ({
      ...record,
      proposedSolutions: record.proposedSolutions.map((solution) =>
        solution.id === solutionId ? { ...solution, ...updates } : solution,
      ),
    }));
  };

  const updateBomLineItem = (
    itemId: string,
    updates: Partial<PropertyModelBomLineItem>,
  ) => {
    updateDraft((record) => ({
      ...record,
      bomLineItems: record.bomLineItems.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item,
      ),
    }));
  };

  const updatePricing = (updates: Partial<PropertyModelPricing>) => {
    updateDraft((record) => ({
      ...record,
      pricing: calculatePricing({ ...record.pricing, ...updates }),
    }));
  };

  const updateRedrawPhotoHandoff = (
    updates: Partial<PropertyModelRecord["redrawPhotoHandoff"]>,
  ) => {
    updateDraft((record) => ({
      ...record,
      redrawPhotoHandoff: { ...record.redrawPhotoHandoff, ...updates },
    }));
  };

  const updateEvidenceItem = (
    itemId: string,
    updates: Partial<PropertyModelEvidenceItem>,
  ) => {
    updateDraft((record) => ({
      ...record,
      evidenceItems: record.evidenceItems.map((item) =>
        item.id === itemId ? { ...item, ...updates } : item,
      ),
    }));
  };

  const removeConcern = (concernId: string) => {
    updateDraft((record) => ({
      ...record,
      customerConcerns: record.customerConcerns.filter(
        (concern) => concern.id !== concernId,
      ),
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
      proposedSolutions: record.proposedSolutions.filter(
        (solution) => solution.id !== solutionId,
      ),
    }));
  };

  const removeBomLineItem = (itemId: string) => {
    updateDraft((record) => ({
      ...record,
      bomLineItems: record.bomLineItems.filter((item) => item.id !== itemId),
    }));
  };

  const removeEvidenceItem = (itemId: string) => {
    updateDraft((record) => ({
      ...record,
      evidenceItems: record.evidenceItems.filter((item) => item.id !== itemId),
    }));
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = savePropertyModelRecord(draft);
    if (result.ok) {
      setDraft(result.record);
      setRecords(result.records);
      setSelectedRecordId(result.record.recordId);
      setSavedMessage(
        `Saved ${result.record.recordId} at ${new Date(result.record.updatedAt).toLocaleString()}`,
      );
    } else {
      setSavedMessage("Unable to save in this browser storage session.");
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
            <>
              <Link
                className="btn btn-secondary"
                to={`/operator/property-model/quote-preview?recordId=${encodeURIComponent(draft.recordId)}`}
              >
                Preview / Print Quote
              </Link>
              <Link
                className="btn btn-secondary"
                to={`/operator/property-model/installer-packet?recordId=${encodeURIComponent(draft.recordId)}`}
              >
                Preview / Print Installer Packet
              </Link>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleExportCurrentRecord}
              >
                Export JSON
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleExportAllRecords}
              >
                Export All JSON
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => importInputRef.current?.click()}
              >
                Import JSON
              </button>
              <input
                ref={importInputRef}
                className="quote-workspace-hidden-file"
                type="file"
                accept="application/json,.json"
                onChange={handleImportFile}
              />
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleLoadFuneralHomeTestCase}
              >
                Load Funeral Home Test Case
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleCreateRecord}
              >
                New Property Model
              </button>
            </>
          }
        />

        <SpaceFrame className="quote-workspace-hero">
          <div>
            <p className="quote-workspace-eyebrow">Property Model</p>
            <h2>{selectedRecordLabel}</h2>
            <p>
              Live-entry workspace for the active customer/deal frame, property
              basics, evidence, selected solutions, hardware draft, quote
              preview, and local backup actions.
            </p>
          </div>
          <div className="quote-workspace-status-grid">
            <div>
              <span>Quote Stage</span>
              <strong>{quoteStageLabel}</strong>
            </div>
            <div>
              <span>HubSpot Record</span>
              <strong>
                {hasHubSpotRecord ? "Linked" : "Create or link first"}
              </strong>
            </div>
            <div>
              <span>Storage</span>
              <strong>Local draft only</strong>
            </div>
          </div>
        </SpaceFrame>

        <div
          className="quote-workspace-action-bar"
          aria-label="Quote workspace actions"
        >
          <div>
            <span>Selected record</span>
            <strong>{selectedRecordLabel}</strong>
            <small>{statusMessage}</small>
          </div>
          <div className="quote-workspace-action-buttons">
            <button
              className="btn btn-primary"
              type="submit"
              form="quote-workspace-form"
            >
              Save
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleLoadFuneralHomeTestCase}
            >
              Load Funeral Home Test Case
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleCreateRecord}
            >
              New Property Model
            </button>
            <Link
              className="btn btn-secondary"
              to={`/operator/property-model/quote-preview?recordId=${encodeURIComponent(draft.recordId)}`}
            >
              Preview / Print Quote
            </Link>
            <Link
              className="btn btn-secondary"
              to={`/operator/property-model/installer-packet?recordId=${encodeURIComponent(draft.recordId)}`}
            >
              Preview / Print Installer Packet
            </Link>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleExportCurrentRecord}
            >
              Export JSON
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => importInputRef.current?.click()}
            >
              Import JSON
            </button>
          </div>
        </div>

        <form
          id="quote-workspace-form"
          className="quote-workspace-form"
          onSubmit={handleSave}
        >
          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">HubSpot Authority</p>
                <h2>Customer / Deal Link</h2>
                <p>
                  Create or link HubSpot Contact/Deal first when a CRM record
                  does not exist yet.
                </p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Stored Property Models">
                <select
                  value={selectedRecordId}
                  onChange={(event) => handleSelectRecord(event.target.value)}
                >
                  {records.length === 0 ? (
                    <option value="">No stored records</option>
                  ) : null}
                  {records.map((record) => (
                    <option key={record.recordId} value={record.recordId}>
                      {[
                        record.customer.name || record.recordId,
                        record.propertyAddress.line1,
                      ]
                        .filter(Boolean)
                        .join(" / ")}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label="Request ID"
                help="Reference only. Do not change requestId generation from this page."
              >
                <input
                  value={draft.requestId}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      requestId: event.target.value,
                    }))
                  }
                />
              </Field>
              <Field label="HubSpot Contact URL">
                <input
                  value={draft.hubSpotLink.contactUrl}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      hubSpotLink: {
                        ...record.hubSpotLink,
                        contactUrl: event.target.value,
                      },
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
                      hubSpotLink: {
                        ...record.hubSpotLink,
                        dealUrl: event.target.value,
                      },
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
                      hubSpotLink: {
                        ...record.hubSpotLink,
                        owner: event.target.value,
                      },
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
                      hubSpotLink: {
                        ...record.hubSpotLink,
                        leadSource: event.target.value,
                      },
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
                <h2>Property Basics</h2>
                <p>
                  Capture the plain customer and property details needed while
                  entering the quote.
                </p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Customer Name">
                <input
                  value={draft.customer.name}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: {
                        ...record.customer,
                        name: event.target.value,
                      },
                    }))
                  }
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={draft.customer.email}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: {
                        ...record.customer,
                        email: event.target.value,
                      },
                    }))
                  }
                />
              </Field>
              <Field label="Phone">
                <input
                  value={draft.customer.phone}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: {
                        ...record.customer,
                        phone: event.target.value,
                      },
                    }))
                  }
                />
              </Field>
              <Field label="Preferred Contact">
                <select
                  value={draft.customer.preferredContactMethod}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      customer: {
                        ...record.customer,
                        preferredContactMethod: event.target.value,
                      },
                    }))
                  }
                >
                  <option value="">Select</option>
                  {["Text", "Call", "Email", "Any"].map((option) => (
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
                      propertyAddress: {
                        ...record.propertyAddress,
                        line1: event.target.value,
                      },
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
                      propertyAddress: {
                        ...record.propertyAddress,
                        line2: event.target.value,
                      },
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
                      propertyAddress: {
                        ...record.propertyAddress,
                        city: event.target.value,
                      },
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
                      propertyAddress: {
                        ...record.propertyAddress,
                        state: event.target.value,
                      },
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
                      propertyAddress: {
                        ...record.propertyAddress,
                        postalCode: event.target.value,
                      },
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
                      propertyContext: {
                        ...record.propertyContext,
                        propertyType: event.target.value,
                      },
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
                      propertyContext: {
                        ...record.propertyContext,
                        occupancyContext: event.target.value,
                      },
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
                      quoteStage: event.target
                        .value as PropertyModelRecord["quoteStage"],
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
                <p>
                  Enter the customer's own words once, then map them to
                  solutions and hardware below.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    customerConcerns: [
                      ...record.customerConcerns,
                      createConcern(),
                    ],
                  }))
                }
              >
                Add Concern
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.customerConcerns.length === 0 ? (
                <div className="quote-workspace-empty-state">
                  No customer concerns yet. Add the first concern before
                  selecting solutions.
                </div>
              ) : null}
              {draft.customerConcerns.map((concern, index) => (
                <article className="quote-workspace-item" key={concern.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Concern {index + 1}</h3>
                    <button
                      className="btn btn-secondary btn-small"
                      type="button"
                      onClick={() => removeConcern(concern.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Concern Category">
                      <select
                        value={concern.category}
                        onChange={(event) =>
                          updateConcern(concern.id, {
                            category: event.target.value,
                          })
                        }
                      >
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
                        onChange={(event) =>
                          updateConcern(concern.id, {
                            text: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Internal Notes">
                      <textarea
                        rows={3}
                        value={concern.notes}
                        onChange={(event) =>
                          updateConcern(concern.id, {
                            notes: event.target.value,
                          })
                        }
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
                <p className="quote-workspace-eyebrow">
                  Property Rooms / Areas To Cover
                </p>
                <h2>Property Rooms / Areas To Cover</h2>
                <p>
                  Use the room or area names the customer uses when possible.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    areas: [...record.areas, createArea()],
                  }))
                }
              >
                Add Area
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.areas.length === 0 ? (
                <div className="quote-workspace-empty-state">
                  No rooms or areas yet. Add customer-friendly room or property
                  area names before placing hardware.
                </div>
              ) : null}
              {draft.areas.map((area, index) => (
                <article className="quote-workspace-item" key={area.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Area {index + 1}</h3>
                    <button
                      className="btn btn-secondary btn-small"
                      type="button"
                      onClick={() => removeArea(area.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Room / Area Name">
                      <input
                        list="quote-workspace-area-options"
                        value={area.label}
                        onChange={(event) =>
                          updateArea(area.id, { label: event.target.value })
                        }
                      />
                    </Field>
                    <Field label="Area Notes">
                      <textarea
                        rows={3}
                        value={area.notes}
                        onChange={(event) =>
                          updateArea(area.id, { notes: event.target.value })
                        }
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
                <p className="quote-workspace-eyebrow">
                  Floorplan / Property Evidence
                </p>
                <h2>Floorplan / Property Evidence</h2>
                <p>
                  Hand-drawn floorplan and professional redraw are separate
                  evidence items.
                </p>
                <p>
                  Exterior/interior photos validate the floorplan but do not
                  override sketch geometry during Trace Mode unless approved.
                </p>
                <p>
                  Compass/orientation matters for camera, sensor, lighting,
                  environmental, and future coverage planning.
                </p>
                <p>
                  LiDAR/Digital Twin capture is a future source type, not
                  implemented here.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    evidenceItems: [
                      ...record.evidenceItems,
                      createEvidenceItem(),
                    ],
                  }))
                }
              >
                Add Evidence
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.evidenceItems.length === 0 ? (
                <div className="quote-workspace-empty-state">
                  No evidence yet. Add a sketch, redraw, photo batch, or
                  orientation note when it is available.
                </div>
              ) : null}
              {draft.evidenceItems.map((item, index) => (
                <article className="quote-workspace-item" key={item.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Evidence {index + 1}</h3>
                    <button
                      className="btn btn-secondary btn-small"
                      type="button"
                      onClick={() => removeEvidenceItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Evidence Type">
                      <select
                        value={item.evidenceType}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            evidenceType: event.target
                              .value as PropertyModelEvidenceItem["evidenceType"],
                          })
                        }
                      >
                        {propertyEvidenceTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Label / Name">
                      <input
                        value={item.label}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            label: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field
                      label="Source / Reference"
                      help="Filename, local path, Google Drive note, photo batch note, uploaded in chat, onsite phone photo, or future LiDAR capture."
                    >
                      <textarea
                        rows={3}
                        value={item.sourceReference}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            sourceReference: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Orientation / Side">
                      <select
                        value={item.orientationSide}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            orientationSide: event.target
                              .value as PropertyModelEvidenceItem["orientationSide"],
                          })
                        }
                      >
                        {propertyEvidenceOrientationOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Status">
                      <select
                        value={item.status}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            status: event.target
                              .value as PropertyModelEvidenceItem["status"],
                          })
                        }
                      >
                        {propertyEvidenceStatusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Notes">
                      <textarea
                        rows={3}
                        value={item.notes}
                        onChange={(event) =>
                          updateEvidenceItem(item.id, {
                            notes: event.target.value,
                          })
                        }
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
                <p className="quote-workspace-eyebrow">
                  Selected WNYHS Solutions
                </p>
                <h2>Selected WNYHS Solutions</h2>
                <p>
                  Use catalog-backed solutions where possible; keep notes short
                  and tied to a customer concern.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    proposedSolutions: [
                      ...record.proposedSolutions,
                      createSolution(),
                    ],
                  }))
                }
              >
                Add Solution
              </button>
            </div>
            <div className="quote-workspace-stack">
              {draft.proposedSolutions.length === 0 ? (
                <div className="quote-workspace-empty-state">
                  No selected solutions yet. Choose the WNYHS solution that
                  answers the customer concern.
                </div>
              ) : null}
              {draft.proposedSolutions.map((solution, index) => (
                <article className="quote-workspace-item" key={solution.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Solution {index + 1}</h3>
                    <button
                      className="btn btn-secondary btn-small"
                      type="button"
                      onClick={() => removeSolution(solution.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="WNYHS Category">
                      <select
                        value={solution.categoryId}
                        onChange={(event) =>
                          updateSolution(solution.id, {
                            categoryId: event.target.value,
                          })
                        }
                      >
                        <option value="">Select</option>
                        {catalogCategories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="WNYHS Solution">
                      <select
                        value={solution.title}
                        onChange={(event) =>
                          updateSolution(solution.id, {
                            title: event.target.value,
                          })
                        }
                      >
                        <option value="">Select or enter note below</option>
                        {catalogSolutions.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Package / Starting Point">
                      <select
                        value={solution.packageRef}
                        onChange={(event) =>
                          updateSolution(solution.id, {
                            packageRef: event.target.value,
                          })
                        }
                      >
                        <option value="">Not tied to a package</option>
                        {catalogPackages.map((item) => (
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
                        onChange={(event) =>
                          updateSolution(solution.id, {
                            concernServed: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Solution Notes">
                      <textarea
                        rows={3}
                        value={solution.notes}
                        onChange={(event) =>
                          updateSolution(solution.id, {
                            notes: event.target.value,
                          })
                        }
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
                <p className="quote-workspace-eyebrow">Manual Pricing</p>
                <h2>Pricing / Totals Placeholder</h2>
                <p>
                  Manual quote totals only. This does not calculate catalog
                  pricing, inventory cost, margin, or collect payment.
                </p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Subtotal">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={draft.pricing.quoteSubtotal}
                  onChange={(event) =>
                    updatePricing({
                      quoteSubtotal: Number(event.target.value) || 0,
                    })
                  }
                />
              </Field>
              <Field label="Discount">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={draft.pricing.quoteDiscount}
                  onChange={(event) =>
                    updatePricing({
                      quoteDiscount: Number(event.target.value) || 0,
                    })
                  }
                />
              </Field>
              <Field label="Tax / Fees">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={draft.pricing.quoteTaxOrFees}
                  onChange={(event) =>
                    updatePricing({
                      quoteTaxOrFees: Number(event.target.value) || 0,
                    })
                  }
                />
              </Field>
              <Field label="Deposit Required">
                <select
                  value={draft.pricing.depositRequired ? "yes" : "no"}
                  onChange={(event) =>
                    updatePricing({
                      depositRequired: event.target.value === "yes",
                    })
                  }
                >
                  <option value="yes">Yes</option>
                  <option value="no">No / exception noted</option>
                </select>
              </Field>
              <Field
                label="Deposit Percent"
                help="Default is 50%. Change only when Chris or Lou authorize an exception."
              >
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={draft.pricing.depositPercent}
                  onChange={(event) =>
                    updatePricing({
                      depositPercent: Number(event.target.value) || 0,
                    })
                  }
                />
              </Field>
              <Field label="Pricing Notes">
                <textarea
                  rows={3}
                  value={draft.pricing.pricingNotes}
                  onChange={(event) =>
                    updatePricing({ pricingNotes: event.target.value })
                  }
                />
              </Field>
            </div>
            <div
              className="quote-workspace-summary-grid"
              aria-label="Manual pricing totals"
            >
              <div>
                <span>Total</span>
                <strong>{formatCurrency(calculatedPricing.quoteTotal)}</strong>
              </div>
              <div>
                <span>Deposit amount</span>
                <strong>
                  {formatCurrency(calculatedPricing.depositAmount)}
                </strong>
              </div>
              <div>
                <span>Balance due on arrival</span>
                <strong>
                  {formatCurrency(calculatedPricing.balanceDueOnArrival)}
                </strong>
              </div>
            </div>
            <div className="quote-workspace-reminder" role="note">
              50% deposit required before scheduling. No job-specific inventory
              purchase before deposit verification. Final balance is due upon
              technician arrival on install day unless Chris or Lou authorize an
              exception.
            </div>
          </SpaceFrame>

          <SpaceFrame className="quote-workspace-panel">
            <div className="quote-workspace-panel-head">
              <div>
                <p className="quote-workspace-eyebrow">Draft Hardware / BOM</p>
                <h2>Draft Hardware / BOM</h2>
                <p>
                  Manual draft only. Reconcile each item to a room/area,
                  concern, solution, evidence item, and installer note before
                  approval.
                </p>
              </div>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  updateDraft((record) => ({
                    ...record,
                    bomLineItems: [...record.bomLineItems, createBomLineItem()],
                  }))
                }
              >
                Add Hardware
              </button>
            </div>
            {showMastReminder ? (
              <div className="quote-workspace-reminder" role="note">
                At least one camera in a full security design should have an
                intentional MAST-purpose placement: best practical identifying
                image of a person/assailant where needed.
              </div>
            ) : null}
            <div
              className="quote-workspace-summary-grid"
              aria-label="Hardware reconciliation summary"
            >
              {[
                [
                  "Total hardware items",
                  reconciliationSummary.totalHardwareItems,
                ],
                ["Missing room/area", reconciliationSummary.missingRoomArea],
                ["Missing concern", reconciliationSummary.missingConcern],
                ["Missing solution", reconciliationSummary.missingSolution],
                ["Missing evidence", reconciliationSummary.missingEvidence],
                [
                  "Missing installer note",
                  reconciliationSummary.missingInstallerNote,
                ],
                [
                  "Missing dashboard note",
                  reconciliationSummary.missingDashboardNote,
                ],
                ["Approved", reconciliationSummary.approved],
                ["Locked", reconciliationSummary.locked],
              ].map(([label, value]) => (
                <div
                  className={getReconciliationCardClass(String(label))}
                  key={label}
                >
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="quote-workspace-stack">
              {draft.bomLineItems.length === 0 ? (
                <div className="quote-workspace-empty-state">
                  No draft hardware yet. Add hardware only after rooms,
                  concerns, evidence, and selected solutions are started.
                </div>
              ) : null}
              {draft.bomLineItems.map((item, index) => (
                <article className="quote-workspace-item" key={item.id}>
                  <div className="quote-workspace-item-head">
                    <h3>Hardware {index + 1}</h3>
                    <button
                      className="btn btn-secondary btn-small"
                      type="button"
                      onClick={() => removeBomLineItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="quote-workspace-grid">
                    <Field label="Catalog Hardware Item">
                      <select
                        value={item.catalogHardwareItemId}
                        onChange={(event) => {
                          const selected = catalogHardwareItems.find(
                            (hardware) => hardware.id === event.target.value,
                          );
                          updateBomLineItem(item.id, {
                            catalogHardwareItemId: event.target.value,
                            itemName: selected?.label ?? item.itemName,
                            hardwareType:
                              selected?.hardwareType ?? item.hardwareType,
                            dashboardPrepNote:
                              item.dashboardPrepNote ||
                              selected?.dashboardImplication ||
                              "",
                            installerNote:
                              item.installerNote ||
                              selected?.installerNote ||
                              "",
                          });
                        }}
                      >
                        <option value="">Freehand / not selected</option>
                        {catalogHardwareItems.map((hardware) => (
                          <option key={hardware.id} value={hardware.id}>
                            {hardware.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Item Name / Type">
                      <input
                        list="quote-workspace-hardware-options"
                        value={item.itemName}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            itemName: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Hardware Class">
                      <select
                        value={item.hardwareType}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            hardwareType: event.target.value,
                          })
                        }
                      >
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
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            quantity: Math.max(
                              1,
                              Number(event.target.value) || 1,
                            ),
                          })
                        }
                      />
                    </Field>
                    <Field label="BOM Status">
                      <select
                        value={item.bomStatus}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            bomStatus: event.target
                              .value as PropertyModelBomLineItem["bomStatus"],
                          })
                        }
                      >
                        {bomStatusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Installer Assignment"
                      help="Used by the installer packet only; leave unassigned until reviewed."
                    >
                      <select
                        value={item.installerAssignment}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            installerAssignment: event.target
                              .value as PropertyModelBomLineItem["installerAssignment"],
                          })
                        }
                      >
                        {installerAssignmentOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Property Room / Area">
                      <input
                        list="quote-workspace-area-options"
                        value={item.propertyAreaRef || item.locationRef}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            propertyAreaRef: event.target.value,
                            locationRef: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Floorplan / Evidence Reference">
                      <select
                        value={item.evidenceRef}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            evidenceRef: event.target.value,
                          })
                        }
                      >
                        <option value="">Select or use location note</option>
                        {draft.evidenceItems.map((evidence) => (
                          <option
                            key={evidence.id}
                            value={
                              evidence.label ||
                              evidence.sourceReference ||
                              evidence.id
                            }
                          >
                            {evidence.label ||
                              evidence.sourceReference ||
                              evidence.id}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Customer Concern Served">
                      <input
                        list="quote-workspace-concern-options"
                        value={item.customerConcernServed}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            customerConcernServed: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Selected WNYHS Solution">
                      <input
                        list="quote-workspace-solution-options"
                        value={item.selectedSolutionRef}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            selectedSolutionRef: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Dashboard Prep Note">
                      <textarea
                        rows={3}
                        value={item.dashboardPrepNote}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            dashboardPrepNote: event.target.value,
                          })
                        }
                      />
                    </Field>
                    <Field label="Installer Note">
                      <textarea
                        rows={3}
                        value={item.installerNote}
                        onChange={(event) =>
                          updateBomLineItem(item.id, {
                            installerNote: event.target.value,
                          })
                        }
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
                <p className="quote-workspace-eyebrow">Redraw / Photo Analysis Handoff</p>
                <h2>Redraw / Photo Analysis Handoff</h2>
                <p>Capture manual handoff notes for professional redraw review and quote-risk decisions. This workspace does not analyze images or generate redraws.</p>
              </div>
            </div>
            <div className="quote-workspace-grid">
              <Field label="Redraw Status">
                <select
                  value={draft.redrawPhotoHandoff.redrawStatus}
                  onChange={(event) =>
                    updateRedrawPhotoHandoff({
                      redrawStatus: event.target.value as PropertyModelRecord["redrawPhotoHandoff"]["redrawStatus"],
                    })
                  }
                >
                  {redrawStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Rough Estimate Allowed">
                <select
                  value={draft.redrawPhotoHandoff.roughEstimateAllowed ? "yes" : "no"}
                  onChange={(event) =>
                    updateRedrawPhotoHandoff({
                      roughEstimateAllowed: event.target.value === "yes",
                    })
                  }
                >
                  <option value="no">No</option>
                  <option value="yes">Yes - with risk notes</option>
                </select>
              </Field>
              <Field label="Redraw Reference">
                <textarea rows={3} value={draft.redrawPhotoHandoff.redrawReference} onChange={(event) => updateRedrawPhotoHandoff({ redrawReference: event.target.value })} />
              </Field>
              <Field label="Photo Analysis Summary">
                <textarea rows={4} value={draft.redrawPhotoHandoff.photoAnalysisSummary} onChange={(event) => updateRedrawPhotoHandoff({ photoAnalysisSummary: event.target.value })} />
              </Field>
              <Field label="Door / Lock Notes">
                <textarea rows={3} value={draft.redrawPhotoHandoff.doorLockNotes} onChange={(event) => updateRedrawPhotoHandoff({ doorLockNotes: event.target.value })} />
              </Field>
              <Field label="Window / Sensor Notes">
                <textarea rows={3} value={draft.redrawPhotoHandoff.windowSensorNotes} onChange={(event) => updateRedrawPhotoHandoff({ windowSensorNotes: event.target.value })} />
              </Field>
              <Field label="Camera Placement Notes">
                <textarea rows={3} value={draft.redrawPhotoHandoff.cameraPlacementNotes} onChange={(event) => updateRedrawPhotoHandoff({ cameraPlacementNotes: event.target.value })} />
              </Field>
              <Field label="Ambiguity / Risk Notes">
                <textarea rows={3} value={draft.redrawPhotoHandoff.ambiguityNotes} onChange={(event) => updateRedrawPhotoHandoff({ ambiguityNotes: event.target.value })} />
              </Field>
              <Field label="Onsite Verification Notes">
                <textarea rows={3} value={draft.redrawPhotoHandoff.onsiteVerificationNotes} onChange={(event) => updateRedrawPhotoHandoff({ onsiteVerificationNotes: event.target.value })} />
              </Field>
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
                    <strong>Hand-drawn floorplan:</strong>{" "}
                    {floorplanEvidenceSummary.handDrawnFloorplan
                      ? "Evidence entered"
                      : "Not entered yet."}
                  </li>
                  <li>
                    <strong>Professional redraw:</strong>{" "}
                    {floorplanEvidenceSummary.professionalRedraw
                      ? "Evidence entered"
                      : "Not entered yet."}
                  </li>
                  <li>
                    <strong>Exterior photos:</strong>{" "}
                    {floorplanEvidenceSummary.exteriorPhotos
                      ? "Evidence entered"
                      : "Not entered yet."}
                  </li>
                  <li>
                    <strong>Interior photos:</strong>{" "}
                    {floorplanEvidenceSummary.interiorPhotos
                      ? "Evidence entered"
                      : "Not entered yet."}
                  </li>
                  <li>
                    <strong>Compass / orientation evidence:</strong>{" "}
                    {floorplanEvidenceSummary.orientationEvidence
                      ? "Evidence entered"
                      : "Not entered yet."}
                  </li>
                  <li>
                    <strong>Redraw handoff:</strong>{" "}
                    {redrawStatusOptions.find((option) => option.value === draft.redrawPhotoHandoff.redrawStatus)?.label ?? "Not Started"}
                    {draft.redrawPhotoHandoff.roughEstimateAllowed ? " - rough estimate allowed with notes." : " - rough estimate not marked allowed."}
                  </li>
                  <li>
                    <strong>Photo analysis summary:</strong>{" "}
                    {draft.redrawPhotoHandoff.photoAnalysisSummary || "Not entered yet."}
                  </li>
                  <li>
                    <strong>Onsite verification:</strong>{" "}
                    {draft.redrawPhotoHandoff.onsiteVerificationNotes || "Not entered yet."}
                  </li>
                  <li>
                    Base floorplan must be approved before hardware placement or
                    quote finalization.
                  </li>
                </ul>
              </section>
              <section>
                <h3>Section 2: Customer Concerns + WNYHS Accommodation Plan</h3>
                {draft.customerConcerns.length === 0 &&
                draft.proposedSolutions.length === 0 ? (
                  <p>
                    No customer concerns or selected WNYHS solutions entered
                    yet.
                  </p>
                ) : null}
                {draft.customerConcerns.length > 0 ? (
                  <>
                    <h4>Customer Concerns</h4>
                    <ul className="operator-list">
                      {draft.customerConcerns.map((concern) => (
                        <li key={concern.id}>
                          {concern.text || concern.category}
                        </li>
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
                          <strong>
                            {solution.title || "Untitled WNYHS solution"}:
                          </strong>{" "}
                          {solution.concernServed ||
                            "Customer concern not selected yet."}
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
                        <strong>
                          {item.quantity} x{" "}
                          {item.itemName ||
                            item.hardwareType ||
                            "Unnamed hardware"}
                        </strong>{" "}
                        — room/area:{" "}
                        {item.propertyAreaRef ||
                          item.locationRef ||
                          "not entered"}
                        ; concern: {item.customerConcernServed || "not entered"}
                        ; solution: {item.selectedSolutionRef || "not entered"};
                        evidence: {item.evidenceRef || "not entered"}.
                        {item.installerNote ? (
                          <span> Installer: {item.installerNote}</span>
                        ) : null}
                        {item.dashboardPrepNote ? (
                          <span> Dashboard: {item.dashboardPrepNote}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hardware line items entered yet.</p>
                )}
                <h4>Manual Totals</h4>
                <ul className="operator-list">
                  <li>
                    <strong>Subtotal:</strong>{" "}
                    {formatCurrency(calculatedPricing.quoteSubtotal)}
                  </li>
                  {calculatedPricing.quoteDiscount > 0 ? (
                    <li>
                      <strong>Discount:</strong>{" "}
                      {formatCurrency(calculatedPricing.quoteDiscount)}
                    </li>
                  ) : null}
                  {calculatedPricing.quoteTaxOrFees > 0 ? (
                    <li>
                      <strong>Tax / fees:</strong>{" "}
                      {formatCurrency(calculatedPricing.quoteTaxOrFees)}
                    </li>
                  ) : null}
                  <li>
                    <strong>Total:</strong>{" "}
                    {formatCurrency(calculatedPricing.quoteTotal)}
                  </li>
                  <li>
                    <strong>Deposit required:</strong>{" "}
                    {calculatedPricing.depositRequired
                      ? `${calculatedPricing.depositPercent}%`
                      : "Exception / not required"}
                  </li>
                  <li>
                    <strong>Deposit amount:</strong>{" "}
                    {formatCurrency(calculatedPricing.depositAmount)}
                  </li>
                  <li>
                    <strong>Balance due on arrival:</strong>{" "}
                    {formatCurrency(calculatedPricing.balanceDueOnArrival)}
                  </li>
                  {calculatedPricing.pricingNotes ? (
                    <li>
                      <strong>Pricing notes:</strong>{" "}
                      {calculatedPricing.pricingNotes}
                    </li>
                  ) : null}
                </ul>
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
                ["floorplanApproved", "Base floorplan approved"],
                ["depositVerified", "Deposit verified"],
                ["inventoryReady", "Inventory readiness checked"],
                ["schedulingReady", "Scheduling ready"],
                [
                  "finalBalanceExceptionApproved",
                  "Final balance exception approved",
                ],
              ].map(([key, label]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={
                      draft.gates[key as keyof PropertyModelRecord["gates"]]
                    }
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

          <SpaceFrame className="quote-workspace-panel quote-workspace-guidance">
            <div>
              <p className="quote-workspace-eyebrow">Local Backup Guidance</p>
              <h2>Import / Export is prototype-only local JSON</h2>
              <p>
                This page uses localStorage only: no durable storage and no
                backend save. Exported JSON may contain sensitive customer,
                property, quote, and installer-planning information, so store
                files carefully. Import creates local browser records only; it
                does not sync CRM, send email, create PDFs, process payment,
                reserve inventory, place orders, or schedule work.
              </p>
              <p>
                Imported records with an existing ID are saved as a new local
                copy.
              </p>
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
                      propertyContext: {
                        ...record.propertyContext,
                        notes: event.target.value,
                      },
                    }))
                  }
                />
              </Field>
              <Field label="General Notes">
                <textarea
                  rows={5}
                  value={draft.notes}
                  onChange={(event) =>
                    updateDraft((record) => ({
                      ...record,
                      notes: event.target.value,
                    }))
                  }
                />
              </Field>
            </div>
            <div className="quote-workspace-save-row">
              <button className="btn btn-primary" type="submit">
                Save Property Model
              </button>
              <span>
                Created {new Date(draft.createdAt).toLocaleString()} / Updated{" "}
                {new Date(draft.updatedAt).toLocaleString()}
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
        <datalist id="quote-workspace-solution-options">
          {draft.proposedSolutions.map((solution) => (
            <option
              key={solution.id}
              value={solution.title || solution.packageRef || solution.id}
            />
          ))}
          {catalogSolutions.map((solution) => (
            <option key={solution.id} value={solution.name} />
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

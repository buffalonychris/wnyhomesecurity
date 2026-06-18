import { useMemo, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  bomStatusOptions,
  installerAssignmentOptions,
  loadPropertyModelRecords,
  propertyEvidenceOrientationOptions,
  propertyEvidenceStatusOptions,
  propertyEvidenceTypeOptions,
  propertyQuoteStageOptions,
  redrawStatusOptions,
  type PropertyModelBomLineItem,
  type PropertyModelPricing,
  type PropertyModelRecord,
} from "../lib/propertyModel";

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

const optionLabel = <T extends string>(
  options: Array<{ value: T; label: string }>,
  value: T,
) => options.find((option) => option.value === value)?.label ?? value;

const compact = (parts: Array<string | undefined>) =>
  parts
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(", ");

const textOrGap = (value: string | undefined, gap = "Not entered") =>
  value?.trim() || gap;

const formatDateTime = (iso?: string) => {
  if (!iso) return "Not entered";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const formatAddress = (record: PropertyModelRecord) =>
  compact([
    record.propertyAddress.line1,
    record.propertyAddress.line2,
    compact([
      record.propertyAddress.city,
      record.propertyAddress.state,
      record.propertyAddress.postalCode,
    ]),
  ]);

const redrawStatusLabel = (record: PropertyModelRecord) =>
  optionLabel(redrawStatusOptions, record.redrawPhotoHandoff.redrawStatus);

const describeEvidence = (record: PropertyModelRecord, evidenceRef: string) => {
  if (!evidenceRef.trim()) return "Not entered";
  const evidence = record.evidenceItems.find((item) =>
    [item.id, item.label, item.sourceReference].includes(evidenceRef),
  );
  return evidence
    ? evidence.label ||
        evidence.sourceReference ||
        optionLabel(propertyEvidenceTypeOptions, evidence.evidenceType)
    : evidenceRef;
};

const describeSolution = (record: PropertyModelRecord, solutionRef: string) => {
  if (!solutionRef.trim()) return "Not entered";
  const solution = record.proposedSolutions.find((item) =>
    [item.id, item.title].includes(solutionRef),
  );
  return solution?.title || solutionRef;
};

const describeConcern = (record: PropertyModelRecord, concernRef: string) => {
  if (!concernRef.trim()) return "Not entered";
  const concern = record.customerConcerns.find((item) =>
    [item.id, item.text].includes(concernRef),
  );
  return concern?.text || concernRef;
};

const describeArea = (
  record: PropertyModelRecord,
  item: PropertyModelBomLineItem,
) => {
  if (item.propertyAreaRef.trim()) {
    const area = record.areas.find((candidate) =>
      [candidate.id, candidate.label].includes(item.propertyAreaRef),
    );
    return area?.label || item.propertyAreaRef;
  }
  return item.locationRef || "Not entered";
};

const hasText = (value: string) => value.trim().length > 0;

const countMissingField = (
  items: PropertyModelBomLineItem[],
  field: keyof Pick<
    PropertyModelBomLineItem,
    | "customerConcernServed"
    | "selectedSolutionRef"
    | "evidenceRef"
    | "installerNote"
    | "dashboardPrepNote"
  >,
) => items.filter((item) => !hasText(item[field])).length;

const hardwareReconciliation = (items: PropertyModelBomLineItem[]) => ({
  totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
  missingArea: items.filter(
    (item) => !hasText(item.propertyAreaRef) && !hasText(item.locationRef),
  ).length,
  missingConcern: countMissingField(items, "customerConcernServed"),
  missingSolution: countMissingField(items, "selectedSolutionRef"),
  missingEvidence: countMissingField(items, "evidenceRef"),
  missingInstallerNote: countMissingField(items, "installerNote"),
  missingDashboardNote: countMissingField(items, "dashboardPrepNote"),
  approvedCount: items.filter((item) => item.bomStatus === "approved").length,
  lockedCount: items.filter((item) => item.bomStatus === "locked").length,
});

const isAccessControlItem = (item: PropertyModelBomLineItem) =>
  [item.itemName, item.hardwareType, item.installerNote, item.dashboardPrepNote]
    .join(" ")
    .toLowerCase()
    .includes("lock") ||
  [item.itemName, item.hardwareType].join(" ").toLowerCase().includes("access");

const isDoorbellItem = (item: PropertyModelBomLineItem) =>
  [item.itemName, item.hardwareType, item.installerNote, item.dashboardPrepNote]
    .join(" ")
    .toLowerCase()
    .includes("doorbell") ||
  [item.itemName, item.hardwareType].join(" ").toLowerCase().includes("video");

const uniqueValues = (values: string[]) =>
  Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));

const DefinitionGrid = ({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) => (
  <dl className="quote-print-details">
    {items.map((item) => (
      <div key={item.label}>
        <dt>{item.label}</dt>
        <dd>{item.value}</dd>
      </div>
    ))}
  </dl>
);

const GapCard = ({ children }: { children: ReactNode }) => (
  <p className="quote-print-note">{children}</p>
);

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="installer-packet-checklist">
    {items.map((item) => (
      <li key={item}>
        <span aria-hidden="true" /> {item}
      </li>
    ))}
  </ul>
);

const HardwareRow = ({
  record,
  item,
}: {
  record: PropertyModelRecord;
  item: PropertyModelBomLineItem;
}) => (
  <tr>
    <td>{item.quantity}</td>
    <td>{item.itemName || item.hardwareType || "Hardware item pending"}</td>
    <td>{item.catalogHardwareItemId || "Freehand / not selected"}</td>
    <td>{item.hardwareType || "Not entered"}</td>
    <td>{describeArea(record, item)}</td>
    <td>{describeConcern(record, item.customerConcernServed)}</td>
    <td>{describeSolution(record, item.selectedSolutionRef)}</td>
    <td>{describeEvidence(record, item.evidenceRef)}</td>
    <td>{optionLabel(installerAssignmentOptions, item.installerAssignment)}</td>
    <td>{item.installerNote || "Missing"}</td>
    <td>{item.dashboardPrepNote || "Missing"}</td>
    <td>{optionLabel(bomStatusOptions, item.bomStatus)}</td>
  </tr>
);

const TaskCard = ({
  record,
  item,
}: {
  record: PropertyModelRecord;
  item: PropertyModelBomLineItem;
}) => (
  <article className="quote-print-card">
    <h3>{optionLabel(installerAssignmentOptions, item.installerAssignment)}</h3>
    <DefinitionGrid
      items={[
        {
          label: "Item",
          value: `${item.itemName || item.hardwareType || "Hardware item pending"} × ${item.quantity}`,
        },
        { label: "Room / area", value: describeArea(record, item) },
        {
          label: "Task note",
          value: item.installerNote || "No installer task note entered yet.",
        },
        { label: "Evidence ref", value: describeEvidence(record, item.evidenceRef) },
        {
          label: "Dashboard prep",
          value: item.dashboardPrepNote || "No dashboard prep note entered yet.",
        },
        { label: "Reconciliation", value: optionLabel(bomStatusOptions, item.bomStatus) },
      ]}
    />
  </article>
);

const PropertyModelInstallerPacket = () => {
  const [searchParams] = useSearchParams();
  const records = useMemo(() => loadPropertyModelRecords(), []);
  const requestedRecordId = searchParams.get("recordId") ?? "";
  const record =
    records.find((item) => item.recordId === requestedRecordId) ?? records[0];
  const generatedAt = useMemo(() => new Date(), []);

  if (!record) {
    return (
      <main className="quote-print-shell installer-packet-shell">
        <section className="quote-print-page quote-print-empty">
          <p className="quote-print-eyebrow">WNYHS Internal SOW Packet</p>
          <h1>No local Property Model found</h1>
          <p>
            Create or save a Property Model draft before opening the installer
            packet preview.
          </p>
          <Link
            className="btn btn-primary quote-print-no-print"
            to="/operator/property-model"
          >
            Back to Quote Workspace
          </Link>
        </section>
      </main>
    );
  }

  const address = formatAddress(record);
  const pricing = calculatePricing(record.pricing);
  const customerLabel =
    record.customer.name || record.propertyAddress.line1 || record.recordId;
  const reconciliation = hardwareReconciliation(record.bomLineItems);
  const accessItems = record.bomLineItems.filter(isAccessControlItem);
  const doorbellItems = record.bomLineItems.filter(isDoorbellItem);
  const dashboardSections = uniqueValues(
    record.bomLineItems.flatMap((item) => [
      item.hardwareType,
      describeArea(record, item),
      item.dashboardPrepNote,
    ]),
  );
  const unresolvedItems = [
    record.redrawPhotoHandoff.ambiguityNotes &&
      `Redraw/photo ambiguity: ${record.redrawPhotoHandoff.ambiguityNotes}`,
    record.redrawPhotoHandoff.onsiteVerificationNotes &&
      `Onsite verification: ${record.redrawPhotoHandoff.onsiteVerificationNotes}`,
    !record.gates.floorplanApproved &&
      "Floorplan is not approved in the local gate.",
    ...record.bomLineItems
      .filter((item) => item.bomStatus !== "approved" && item.bomStatus !== "locked")
      .map(
        (item) =>
          `${item.itemName || item.hardwareType || item.id}: ${optionLabel(bomStatusOptions, item.bomStatus)}`,
      ),
  ].filter(Boolean) as string[];

  return (
    <main className="quote-print-shell installer-packet-shell">
      <section className="quote-print-page">
        <header className="quote-print-header">
          <div>
            <p className="quote-print-eyebrow">
              INTERNAL / NOT CUSTOMER-FACING
            </p>
            <h1>Internal SOW / Installer Packet</h1>
            <p>
              Local-only technical planning packet for {customerLabel}. This is
              not a customer proposal and requires WNYHS review before field use.
            </p>
          </div>
          <div className="quote-print-actions quote-print-no-print">
            <Link className="btn btn-secondary" to="/operator/property-model">
              Back to Workspace
            </Link>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => window.print()}
            >
              Print
            </button>
          </div>
        </header>

        <section className="quote-print-section">
          <p className="quote-print-section-label">1</p>
          <h2>Internal Header / Job Identity</h2>
          <DefinitionGrid
            items={[
              { label: "Audience", value: "INTERNAL / NOT CUSTOMER-FACING" },
              { label: "Customer / property", value: customerLabel },
              { label: "Property address", value: address || "Not entered" },
              { label: "Local record ID", value: record.recordId },
              { label: "Request reference", value: record.requestId || "Local only / not linked" },
              { label: "Quote / project status", value: optionLabel(propertyQuoteStageOptions, record.quoteStage) },
              { label: "Generated / print date", value: formatDateTime(generatedAt.toISOString()) },
              { label: "Source record status", value: `Created ${formatDateTime(record.createdAt)}; updated ${formatDateTime(record.updatedAt)}` },
              { label: "Lead source", value: record.hubSpotLink.leadSource || "Not entered" },
            ]}
          />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">2</p>
          <h2>Property / Scope Baseline</h2>
          <DefinitionGrid
            items={[
              { label: "Property type", value: textOrGap(record.propertyContext.propertyType) },
              { label: "Occupancy / context", value: textOrGap(record.propertyContext.occupancyContext) },
              { label: "Protected area notes", value: textOrGap(record.propertyContext.notes) },
              { label: "Customer / property notes", value: textOrGap(record.notes) },
              { label: "Scope summary", value: record.proposedSolutions.length ? `${record.proposedSolutions.length} selected solution(s), ${record.bomLineItems.length} draft hardware/BOM line(s), ${record.areas.length} area(s).` : "No selected solutions entered yet." },
              { label: "Planning-only warning", value: "Local prototype packet only; do not treat as customer-facing approval, durable storage, fulfillment order, or schedule authority." },
            ]}
          />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">3</p>
          <h2>Evidence + Floorplan / Redraw Handoff</h2>
          <DefinitionGrid
            items={[
              { label: "Redraw status", value: redrawStatusLabel(record) },
              { label: "Redraw reference", value: textOrGap(record.redrawPhotoHandoff.redrawReference) },
              { label: "Photo analysis summary", value: textOrGap(record.redrawPhotoHandoff.photoAnalysisSummary) },
              { label: "Door / lock notes", value: textOrGap(record.redrawPhotoHandoff.doorLockNotes) },
              { label: "Window / sensor notes", value: textOrGap(record.redrawPhotoHandoff.windowSensorNotes) },
              { label: "Camera placement notes", value: textOrGap(record.redrawPhotoHandoff.cameraPlacementNotes) },
              { label: "Ambiguity notes", value: textOrGap(record.redrawPhotoHandoff.ambiguityNotes) },
              { label: "Onsite verification notes", value: textOrGap(record.redrawPhotoHandoff.onsiteVerificationNotes) },
              { label: "Rough estimate allowed", value: record.redrawPhotoHandoff.roughEstimateAllowed ? "Yes" : "No" },
            ]}
          />
          {record.evidenceItems.length > 0 ? (
            <div className="quote-print-table-wrap">
              <table className="quote-print-table installer-packet-table">
                <thead>
                  <tr>
                    <th>Evidence</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Orientation</th>
                    <th>Source / reference</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {record.evidenceItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.label || item.id}</td>
                      <td>{optionLabel(propertyEvidenceTypeOptions, item.evidenceType)}</td>
                      <td>{optionLabel(propertyEvidenceStatusOptions, item.status)}</td>
                      <td>{optionLabel(propertyEvidenceOrientationOptions, item.orientationSide)}</td>
                      <td>{item.sourceReference || "Not entered"}</td>
                      <td>{item.notes || "Not entered"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <GapCard>No local evidence items have been entered yet.</GapCard>
          )}
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">4</p>
          <h2>Opening / Area Inventory</h2>
          {record.areas.length > 0 ? (
            <div className="quote-print-card-grid">
              {record.areas.map((area) => (
                <article className="quote-print-card" key={area.id}>
                  <h3>{area.label || area.id}</h3>
                  <p>{area.notes || "No area notes entered."}</p>
                  <p>
                    Evidence references: {record.bomLineItems.filter((item) => item.propertyAreaRef === area.id || item.locationRef === area.id || item.propertyAreaRef === area.label).map((item) => describeEvidence(record, item.evidenceRef)).filter((value) => value !== "Not entered").join("; ") || "Not mapped"}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <GapCard>No local property areas have been entered yet.</GapCard>
          )}
          <GapCard>Structured opening inventory is not implemented yet.</GapCard>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">5</p>
          <h2>Selected Solutions + Customer Concerns</h2>
          <div className="quote-print-card-grid">
            {record.customerConcerns.length > 0 ? (
              record.customerConcerns.map((concern) => (
                <article className="quote-print-card" key={concern.id}>
                  <h3>{concern.category || "Customer concern"}</h3>
                  <p>{concern.text || "No concern text entered."}</p>
                  <p>Accommodation / internal notes: {concern.notes || "Not entered"}</p>
                  <p>
                    Mapped solutions: {record.proposedSolutions.filter((solution) => solution.concernServed === concern.id || solution.concernServed === concern.text).map((solution) => `${solution.title}${solution.packageRef ? ` (${solution.packageRef})` : ""}`).join("; ") || "No mapped solution entered."}
                  </p>
                </article>
              ))
            ) : (
              <GapCard>No customer concerns have been entered yet.</GapCard>
            )}
            {record.proposedSolutions.map((solution) => (
              <article className="quote-print-card" key={solution.id}>
                <h3>{solution.title || solution.id}</h3>
                <DefinitionGrid
                  items={[
                    { label: "Package / source reference", value: solution.packageRef || "Not entered" },
                    { label: "Concern served", value: describeConcern(record, solution.concernServed) },
                    { label: "Solution notes", value: solution.notes || "Not entered" },
                  ]}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">6</p>
          <h2>Hardware / BOM + Placement Reconciliation</h2>
          <DefinitionGrid
            items={[
              { label: "Total items", value: String(reconciliation.totalItems) },
              { label: "Missing room / area", value: String(reconciliation.missingArea) },
              { label: "Missing concern", value: String(reconciliation.missingConcern) },
              { label: "Missing solution", value: String(reconciliation.missingSolution) },
              { label: "Missing evidence", value: String(reconciliation.missingEvidence) },
              { label: "Missing installer note", value: String(reconciliation.missingInstallerNote) },
              { label: "Missing dashboard note", value: String(reconciliation.missingDashboardNote) },
              { label: "Approved count", value: String(reconciliation.approvedCount) },
              { label: "Locked count", value: String(reconciliation.lockedCount) },
            ]}
          />
          {record.bomLineItems.length > 0 ? (
            <div className="quote-print-table-wrap">
              <table className="quote-print-table installer-packet-table">
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Item</th>
                    <th>Catalog ref</th>
                    <th>Hardware class</th>
                    <th>Room / area</th>
                    <th>Concern</th>
                    <th>Solution</th>
                    <th>Evidence</th>
                    <th>Assignment</th>
                    <th>Installer note</th>
                    <th>Dashboard note</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {record.bomLineItems.map((item) => (
                    <HardwareRow key={item.id} record={record} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <GapCard>No draft hardware/BOM line items have been entered yet.</GapCard>
          )}
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">7</p>
          <h2>Access Control / Doorbell / Dashboard Planning Notes</h2>
          <DefinitionGrid
            items={[
              { label: "Access-control items", value: accessItems.map((item) => item.itemName || item.hardwareType).join("; ") || "None mapped" },
              { label: "Lock / door notes", value: textOrGap(record.redrawPhotoHandoff.doorLockNotes) },
              { label: "Doorbell / video-entry items", value: doorbellItems.map((item) => item.itemName || item.hardwareType).join("; ") || "None mapped" },
              { label: "Dashboard sections implied", value: dashboardSections.join("; ") || "No dashboard sections inferred yet" },
              { label: "Dashboard preview note", value: "Customer-facing dashboard preview is separate from this internal packet." },
            ]}
          />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">8</p>
          <h2>Installer Task Plan</h2>
          <ul className="quote-print-terms">
            <li>Use the BOM table as the local parts/pick list; verify all final selections before field work.</li>
            <li>Installer assignments are shown per line item and can remain unassigned until reviewed.</li>
            <li>Sequence control plane, radios, entry devices, sensors, video-entry, dashboard naming, then handoff checks unless site conditions require another order.</li>
            <li>Readiness gates: floorplan approved, deposit verified, inventory ready, and owner-approved scheduling readiness.</li>
            <li>No job-specific inventory purchase before deposit verification.</li>
          </ul>
          <div className="quote-print-card-grid">
            {record.bomLineItems.length > 0 ? (
              record.bomLineItems.map((item) => (
                <TaskCard key={item.id} record={record} item={item} />
              ))
            ) : (
              <GapCard>No installer tasks available yet.</GapCard>
            )}
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">9</p>
          <h2>Testing / Handoff Checklist</h2>
          <Checklist
            items={[
              "Device installed",
              "Device enrolled",
              "Device named",
              "Dashboard card present",
              "Notification behavior tested",
              "Lock / doorbell tested if present",
              "Customer orientation complete",
              "Export / backup complete if applicable",
              "Open issues documented",
            ]}
          />
          <GapCard>Display-only printable checklist; no persistent checklist state is stored by this route.</GapCard>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">10</p>
          <h2>Assumptions, Exclusions, Unresolved Decisions</h2>
          <DefinitionGrid
            items={[
              { label: "Assumptions", value: "Final scope depends on site conditions, approved placement, customer selections, and WNYHS review." },
              { label: "Exclusions", value: "This route does not create PDFs, send customer delivery, sync CRM, purchase inventory, place orders, or automate scheduling." },
              { label: "Pricing notes", value: pricing.pricingNotes || "No pricing notes entered." },
              { label: "Payment math reference", value: `${formatCurrency(pricing.depositAmount)} deposit calculation and ${formatCurrency(pricing.balanceDueOnArrival)} balance calculation are local display values only.` },
            ]}
          />
          {unresolvedItems.length > 0 ? (
            <ul className="quote-print-terms">
              {unresolvedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <GapCard>No unresolved decisions flagged in the local record.</GapCard>
          )}
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">11</p>
          <h2>Payment / Scheduling Gate Notes</h2>
          <ul className="quote-print-terms">
            <li>50% deposit required before scheduling unless approved exception.</li>
            <li>No job-specific inventory purchase before deposit verification.</li>
            <li>Final balance due on install day unless approved exception.</li>
            <li>Payment runtime / Stripe verification is not implemented in this local prototype route.</li>
            <li>Scheduling automation is not implemented in this local prototype route.</li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default PropertyModelInstallerPacket;

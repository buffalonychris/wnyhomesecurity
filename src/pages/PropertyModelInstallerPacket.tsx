import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  bomStatusOptions,
  installerAssignmentOptions,
  loadPropertyModelRecords,
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

const redrawStatusLabel = (record: PropertyModelRecord) =>
  redrawStatusOptions.find(
    (option) => option.value === record.redrawPhotoHandoff.redrawStatus,
  )?.label ?? "Not Started";

const optionLabel = <T extends string>(
  options: Array<{ value: T; label: string }>,
  value: T,
) => options.find((option) => option.value === value)?.label ?? value;

const compact = (parts: Array<string | undefined>) =>
  parts
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(", ");

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

const evidenceSummary = (record: PropertyModelRecord) => {
  if (record.evidenceItems.length === 0)
    return "No local evidence references entered.";
  const accepted = record.evidenceItems.filter(
    (item) =>
      item.status === "accepted_for_trace" ||
      item.status === "accepted_for_validation",
  ).length;
  const needsReview = record.evidenceItems.filter(
    (item) => item.status === "needs_review",
  ).length;
  return `${record.evidenceItems.length} evidence reference(s): ${accepted} accepted, ${needsReview} needs review.`;
};

const statusForEvidenceType = (
  record: PropertyModelRecord,
  evidenceType: PropertyModelBomLineItem["bomStatus"] | string,
) => {
  const matches = record.evidenceItems.filter(
    (item) => item.evidenceType === evidenceType,
  );
  if (matches.length === 0) return "Not entered yet.";
  return matches
    .map(
      (item) =>
        `${item.label || item.sourceReference || optionLabel(propertyEvidenceTypeOptions, item.evidenceType)} (${optionLabel(propertyEvidenceStatusOptions, item.status)})`,
    )
    .join("; ");
};

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
    <td>{item.itemName || item.hardwareType || "Hardware item pending"}</td>
    <td>{item.quantity}</td>
    <td>{item.catalogHardwareItemId || "Freehand / not selected"}</td>
    <td>{describeArea(record, item)}</td>
    <td>{item.customerConcernServed || "Not entered"}</td>
    <td>{describeSolution(record, item.selectedSolutionRef)}</td>
    <td>{describeEvidence(record, item.evidenceRef)}</td>
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
    <dl>
      <div>
        <dt>Item</dt>
        <dd>
          {item.itemName || item.hardwareType || "Hardware item pending"} ×{" "}
          {item.quantity}
        </dd>
      </div>
      <div>
        <dt>Room / area</dt>
        <dd>{describeArea(record, item)}</dd>
      </div>
      <div>
        <dt>Install note</dt>
        <dd>{item.installerNote || "No installer note entered yet."}</dd>
      </div>
      <div>
        <dt>Evidence ref</dt>
        <dd>{describeEvidence(record, item.evidenceRef)}</dd>
      </div>
      <div>
        <dt>Dashboard prep</dt>
        <dd>
          {item.dashboardPrepNote || "No dashboard prep note entered yet."}
        </dd>
      </div>
      <div>
        <dt>Reconciliation</dt>
        <dd>{optionLabel(bomStatusOptions, item.bomStatus)}</dd>
      </div>
    </dl>
  </article>
);

const PropertyModelInstallerPacket = () => {
  const [searchParams] = useSearchParams();
  const records = useMemo(() => loadPropertyModelRecords(), []);
  const requestedRecordId = searchParams.get("recordId") ?? "";
  const record =
    records.find((item) => item.recordId === requestedRecordId) ?? records[0];

  if (!record) {
    return (
      <main className="quote-print-shell installer-packet-shell">
        <section className="quote-print-page quote-print-empty">
          <p className="quote-print-eyebrow">WNYHS Installer Packet</p>
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

  return (
    <main className="quote-print-shell installer-packet-shell">
      <section className="quote-print-page">
        <header className="quote-print-header">
          <div>
            <p className="quote-print-eyebrow">
              Internal WNYHS Installer Packet
            </p>
            <h1>Installer Packet Preview / Print View</h1>
            <p>
              Prototype/local-only packet for {customerLabel}. Requires WNYHS
              review before field use.
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
          <p className="quote-print-section-label">A</p>
          <h2>Job Summary</h2>
          <dl className="quote-print-details">
            <div>
              <dt>Customer / property</dt>
              <dd>{customerLabel}</dd>
            </div>
            <div>
              <dt>Property address</dt>
              <dd>{address || "Not entered"}</dd>
            </div>
            <div>
              <dt>Property type</dt>
              <dd>{record.propertyContext.propertyType || "Not entered"}</dd>
            </div>
            <div>
              <dt>Occupancy context</dt>
              <dd>
                {record.propertyContext.occupancyContext || "Not entered"}
              </dd>
            </div>
            <div>
              <dt>Quote stage</dt>
              <dd>
                {optionLabel(propertyQuoteStageOptions, record.quoteStage)}
              </dd>
            </div>
            <div>
              <dt>Evidence status</dt>
              <dd>{evidenceSummary(record)}</dd>
            </div>
            <div>
              <dt>Deposit gate</dt>
              <dd>
                {record.gates.depositVerified
                  ? "Deposit verified in local gate"
                  : "Deposit must be verified before scheduling/install preparation"}
              </dd>
            </div>
            <div>
              <dt>Final balance gate</dt>
              <dd>
                {formatCurrency(pricing.balanceDueOnArrival)} due on arrival
                unless exception authorized
              </dd>
            </div>
            <div>
              <dt>Approved floorplan</dt>
              <dd>
                {record.gates.floorplanApproved
                  ? "Approved in local gate"
                  : "Not approved in local gate"}
              </dd>
            </div>
            <div>
              <dt>Professional redraw</dt>
              <dd>{statusForEvidenceType(record, "professional_redraw")}</dd>
            </div>
            <div>
              <dt>Redraw handoff status</dt>
              <dd>{redrawStatusLabel(record)}</dd>
            </div>
            <div>
              <dt>Photo analysis summary</dt>
              <dd>{record.redrawPhotoHandoff.photoAnalysisSummary || "Not entered"}</dd>
            </div>
            <div>
              <dt>Door / lock notes</dt>
              <dd>{record.redrawPhotoHandoff.doorLockNotes || "Not entered"}</dd>
            </div>
            <div>
              <dt>Window / sensor notes</dt>
              <dd>{record.redrawPhotoHandoff.windowSensorNotes || "Not entered"}</dd>
            </div>
            <div>
              <dt>Camera placement notes</dt>
              <dd>{record.redrawPhotoHandoff.cameraPlacementNotes || "Not entered"}</dd>
            </div>
            <div>
              <dt>Onsite verification</dt>
              <dd>{record.redrawPhotoHandoff.onsiteVerificationNotes || "Not entered"}</dd>
            </div>
          </dl>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">B</p>
          <h2>Pre-Install Readiness</h2>
          <ul className="quote-print-terms">
            <li>Deposit verified before scheduling/install preparation.</li>
            <li>
              Final balance is due upon technician arrival on install day unless
              Chris or Lou authorize an exception.
            </li>
            <li>
              This packet is prototype/local only and requires WNYHS review
              before field use.
            </li>
            <li>
              Standard jobs should fit within an 8-hour onsite window; target
              working time is 6 hours.
            </li>
            <li>
              Task splitting should support Installer A, Installer B, either
              installer, and both-installers-required work.
            </li>
          </ul>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">C</p>
          <h2>Parts / Pick List</h2>
          {record.bomLineItems.length > 0 ? (
            <div className="quote-print-table-wrap">
              <table className="quote-print-table installer-packet-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Catalog ref</th>
                    <th>Room / area</th>
                    <th>Concern</th>
                    <th>Solution</th>
                    <th>Evidence</th>
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
            <p>No draft hardware line items have been entered yet.</p>
          )}
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">D / E</p>
          <h2>Installer Task Plan + Install Notes</h2>
          <div className="quote-print-card-grid">
            {record.bomLineItems.length > 0 ? (
              record.bomLineItems.map((item) => (
                <TaskCard key={item.id} record={record} item={item} />
              ))
            ) : (
              <p>No tasks available yet.</p>
            )}
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">F</p>
          <h2>Testing / Verification Checklist</h2>
          <Checklist
            items={[
              "Device installed",
              "Device powered/paired",
              "Device named correctly",
              "Home Assistant area assigned",
              "Dashboard card/visibility noted",
              "Alert/automation expectation noted",
              "Customer-facing function tested",
              "Exception logged if incomplete",
            ]}
          />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">G</p>
          <h2>Customer Handoff Checklist</h2>
          <Checklist
            items={[
              "Customer shown dashboard/control surface",
              "Customer understands relevant alerts/controls",
              "Remaining balance policy acknowledged",
              "Unfinished exceptions reviewed",
              "Next steps documented",
            ]}
          />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">H</p>
          <h2>Exception / Open Items Log</h2>
          <Checklist
            items={[
              "Missing part",
              "Blocked placement",
              "Customer change",
              "Unsupported device issue",
              "Dashboard/config item pending",
              "Follow-up required",
            ]}
          />
        </section>
      </section>
    </main>
  );
};

export default PropertyModelInstallerPacket;

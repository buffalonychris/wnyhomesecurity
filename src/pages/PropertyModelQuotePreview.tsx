import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  loadPropertyModelRecords,
  propertyEvidenceStatusOptions,
  propertyEvidenceTypeOptions,
  redrawStatusOptions,
  type PropertyModelBomLineItem,
  type PropertyModelEvidenceItem,
  type PropertyModelPricing,
  type PropertyModelRecord,
  type PropertyModelSolution,
} from "../lib/propertyModel";

const paymentTerms = [
  "A 50% deposit is required to reserve installation scheduling unless the local record shows an approved exception.",
  "Installation scheduling is reserved after deposit receipt and operator confirmation.",
  "Remaining balance is due upon installation completion or install day unless an approved exception is recorded.",
  "Sales tax is shown as additional/placeholder unless an explicit treatment is entered in the local record.",
  "Accepted payment methods may include credit card, cashier's check, Venmo, Cash App, Zelle, and Klarna financing when available.",
];

const defaultExclusions = [
  "Existing camera system excluded unless explicitly included in the accepted scope.",
  "Second-floor or other-floor coverage excluded unless explicitly included in the accepted scope.",
  "Offsite staffed notification services excluded unless explicitly sold using approved provider language.",
  "Law-enforcement, emergency-response, or third-party urgent-response services excluded unless explicitly sold using approved provider language.",
  "HVAC / thermostat work excluded unless explicitly included in the accepted scope.",
  "Third-party subscriptions excluded unless explicitly included in the accepted scope.",
];

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

const statusForEvidenceType = (
  record: PropertyModelRecord,
  evidenceType: PropertyModelEvidenceItem["evidenceType"],
) => {
  const matches = record.evidenceItems.filter(
    (item) => item.evidenceType === evidenceType,
  );
  if (matches.length === 0) return "Not entered yet.";
  return matches
    .map((item) => {
      const status = optionLabel(propertyEvidenceStatusOptions, item.status);
      const label =
        item.label ||
        item.sourceReference ||
        optionLabel(propertyEvidenceTypeOptions, item.evidenceType);
      return `${label} (${status})`;
    })
    .join("; ");
};

const includesText = (value: string, terms: string[]) => {
  const normalized = value.toLowerCase();
  return terms.some((term) => normalized.includes(term));
};

const solutionText = (solution: PropertyModelSolution) =>
  [solution.title, solution.categoryId, solution.packageRef, solution.notes]
    .join(" ")
    .toLowerCase();

const bomText = (item: PropertyModelBomLineItem) =>
  [
    item.itemName,
    item.hardwareType,
    item.locationRef,
    item.propertyAreaRef,
    item.selectedSolutionRef,
    item.dashboardPrepNote,
  ]
    .join(" ")
    .toLowerCase();

const hasSolution = (record: PropertyModelRecord, terms: string[]) =>
  record.proposedSolutions.some((solution) =>
    includesText(solutionText(solution), terms),
  ) || record.bomLineItems.some((item) => includesText(bomText(item), terms));

const describeSolution = (record: PropertyModelRecord, solutionRef: string) => {
  if (!solutionRef.trim()) return "Selected WNYHS solution";
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
  return item.locationRef || "Property area to be confirmed";
};

const customerOutcomes = (record: PropertyModelRecord) => {
  const concernOutcomes = record.customerConcerns
    .slice(0, 4)
    .map((concern) => concern.text || concern.category)
    .filter(Boolean);
  const solutionOutcomes = record.proposedSolutions
    .slice(0, 4)
    .map((solution) => solution.title)
    .filter(Boolean);

  if (concernOutcomes.length > 0) return concernOutcomes;
  if (solutionOutcomes.length > 0) return solutionOutcomes;
  return [
    "A clearer property protection layout.",
    "A WNYHS-reviewed smart-home security scope.",
    "Customer dashboard access for everyday awareness.",
  ];
};

const executiveSummary = (record: PropertyModelRecord, address: string) => {
  const property = record.propertyContext.propertyType || "property";
  const target = address || record.customer.name || "the listed property";
  const solutionCount = record.proposedSolutions.length;
  const areaCount = record.areas.length;
  return `This customer estimate summarizes the proposed WNY Home Security scope for ${target}. The proposal is based on the local Property Model record for this ${property}${areaCount > 0 ? ` with ${areaCount} identified protected area(s)` : ""}${solutionCount > 0 ? ` and ${solutionCount} selected solution component(s)` : ""}. Final installation details remain subject to operator review and accepted project terms.`;
};

const DeliverableList = ({ record }: { record: PropertyModelRecord }) => {
  const deliverables = [
    ["WNYHS Core / Home Assistant platform", ["home assistant", "wnyhs core", "dashboard"]],
    ["Smart lock / access control", ["lock", "access"]],
    ["Doorbell / video entry", ["doorbell", "video entry"]],
    ["Door protection", ["door", "contact"]],
    ["Window protection", ["window"]],
    ["Motion awareness", ["motion"]],
    ["Glass-break awareness", ["glass", "break"]],
    ["Local alert devices", ["siren", "alert", "chime"]],
    ["Mobile dashboard access", ["mobile", "phone", "app"]],
    ["Desktop dashboard access", ["desktop", "pc", "dashboard"]],
    ["Remote notifications", ["notification", "remote"]],
  ] as const;

  const selected = deliverables.filter(([, terms]) => hasSolution(record, [...terms]));
  const fallback = record.proposedSolutions.map((solution) => solution.title).filter(Boolean);

  return (
    <ul className="quote-print-check-list">
      {(selected.length > 0 ? selected.map(([label]) => label) : fallback).map(
        (label) => (
          <li key={label}>{label}</li>
        ),
      )}
      {selected.length === 0 && fallback.length === 0 ? (
        <li>Customer-facing deliverables will appear after solutions are selected.</li>
      ) : null}
    </ul>
  );
};

const HardwareDeliverableRows = ({ record }: { record: PropertyModelRecord }) => {
  const rows = record.bomLineItems.filter((item) => item.itemName || item.hardwareType);
  if (rows.length === 0) return <p>No customer-facing hardware summary has been entered yet.</p>;

  return (
    <div className="quote-print-table-wrap">
      <table className="quote-print-table">
        <thead>
          <tr>
            <th>Deliverable</th>
            <th>Qty</th>
            <th>Area</th>
            <th>Customer purpose</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr key={item.id}>
              <td>{item.itemName || item.hardwareType}</td>
              <td>{item.quantity}</td>
              <td>{describeArea(record, item)}</td>
              <td>{describeSolution(record, item.selectedSolutionRef)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SignatureLine = ({ label }: { label: string }) => (
  <div className="quote-print-signature-line">
    <span>{label}</span>
  </div>
);

const PropertyModelQuotePreview = () => {
  const [searchParams] = useSearchParams();
  const records = useMemo(() => loadPropertyModelRecords(), []);
  const requestedRecordId = searchParams.get("recordId") ?? "";
  const record =
    records.find((item) => item.recordId === requestedRecordId) ?? records[0];

  if (!record) {
    return (
      <main className="quote-print-shell">
        <section className="quote-print-page quote-print-empty">
          <p className="quote-print-eyebrow">WNYHS Customer Estimate</p>
          <h1>No local Property Model found</h1>
          <p>
            Create or save a Property Model draft before opening the
            customer-facing preview.
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
  const issueDate = new Date(record.updatedAt || record.createdAt).toLocaleDateString();
  const taxTreatment =
    pricing.quoteTaxOrFees > 0
      ? `Additional tax / fees placeholder: ${formatCurrency(pricing.quoteTaxOrFees)}`
      : "Sales tax additional/placeholder unless explicit treatment is entered.";
  const desktopNotes = record.bomLineItems
    .map((item) => item.dashboardPrepNote)
    .filter(Boolean)
    .slice(0, 5);

  return (
    <main className="quote-print-shell">
      <section className="quote-print-page">
        <header className="quote-print-header">
          <div>
            <p className="quote-print-eyebrow">WNY Home Security Customer Estimate</p>
            <h1>Customer Estimate Preview</h1>
            <p>
              Proposal and acceptance preview generated from the local Property
              Model draft only.
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

        <section className="quote-print-section quote-print-cover">
          <p className="quote-print-section-label">Section 1</p>
          <h2>Cover / Executive Summary</h2>
          <dl className="quote-print-details">
            <div><dt>Prepared For</dt><dd>{customerLabel}</dd></div>
            <div><dt>Prepared By</dt><dd>WNY Home Security / JDL Communications</dd></div>
            <div><dt>Business / Property Address</dt><dd>{address || "Not entered"}</dd></div>
            <div><dt>Proposal / Record Reference</dt><dd>{record.requestId || record.recordId}</dd></div>
            <div><dt>Revision / Source Status</dt><dd>{record.quoteStage.replaceAll("_", " ")} / Updated {issueDate}</dd></div>
          </dl>
          <p>{executiveSummary(record, address)}</p>
          <h3>Customer Outcomes</h3>
          <ul className="quote-print-check-list">
            {customerOutcomes(record).map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 2</p>
          <h2>Project Investment &amp; Acceptance</h2>
          <dl className="quote-print-details quote-print-investment">
            <div><dt>Project Investment / Quote Total</dt><dd>{formatCurrency(pricing.quoteTotal)}</dd></div>
            <div><dt>Deposit Required</dt><dd>{pricing.depositRequired ? `${pricing.depositPercent}% (${formatCurrency(pricing.depositAmount)})` : "Approved exception / not required"}</dd></div>
            <div><dt>Remaining Balance</dt><dd>{formatCurrency(pricing.balanceDueOnArrival)}</dd></div>
            <div><dt>Sales Tax Treatment</dt><dd>{taxTreatment}</dd></div>
            <div><dt>Install Scheduling Condition</dt><dd>Scheduling is reserved after deposit receipt and operator confirmation.</dd></div>
            <div><dt>Payment Terms</dt><dd>Remaining balance due upon installation completion / install day.</dd></div>
          </dl>
          <ul className="quote-print-terms">
            {paymentTerms.map((term) => <li key={term}>{term}</li>)}
          </ul>
          <div className="quote-print-signature-grid">
            <SignatureLine label="Deposit Amount Paid" />
            <SignatureLine label="Date Deposit Received" />
            <SignatureLine label="Remaining Balance Due" />
            <SignatureLine label="WNY Home Security Representative Signature / Date" />
            <SignatureLine label="Customer Signature / Date" />
            <SignatureLine label="Print Name" />
            <SignatureLine label="Business / Property Address" />
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 3</p>
          <h2>First Floor / Property Protection Layout</h2>
          <div className="quote-print-placeholder-card">
            <h3>First floor / protected area plan</h3>
            <p>No image is embedded in this local prototype preview.</p>
            <dl className="quote-print-details">
              <div><dt>Property / floorplan reference</dt><dd>{statusForEvidenceType(record, "hand_drawn_floorplan")}</dd></div>
              <div><dt>Evidence status</dt><dd>{record.evidenceItems.length} local evidence reference(s) entered.</dd></div>
              <div><dt>Redraw status</dt><dd>{redrawStatusLabel(record)}</dd></div>
              <div><dt>First floor / protected area notes</dt><dd>{record.redrawPhotoHandoff.photoAnalysisSummary || record.propertyContext.notes || "Protected-area notes to be confirmed during operator review."}</dd></div>
            </dl>
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 4</p>
          <h2>System Deliverables</h2>
          <DeliverableList record={record} />
          <HardwareDeliverableRows record={record} />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 5</p>
          <h2>PC / Desktop Dashboard Experience</h2>
          <div className="quote-print-placeholder-card">
            <h3>Desktop dashboard concept</h3>
            <p>
              Customer-facing desktop view for property status, device areas,
              activity review, and everyday system awareness.
            </p>
            <ul className="quote-print-check-list">
              {(desktopNotes.length > 0 ? desktopNotes : ["Property overview", "Door / window status", "Device activity", "Optional tablet view for approved dashboard layouts"]).map((note) => <li key={note}>{note}</li>)}
            </ul>
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 6</p>
          <h2>Mobile Dashboard Experience</h2>
          <div className="quote-print-placeholder-card">
            <h3>Mobile dashboard concept</h3>
            <ul className="quote-print-check-list">
              <li>Remote awareness for selected property devices.</li>
              {hasSolution(record, ["lock", "access"]) ? <li>Door control where smart locks are included.</li> : null}
              <li>Notifications for configured device events.</li>
              <li>Activity history for supported connected devices.</li>
              <li>Building / property status summary.</li>
            </ul>
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 7</p>
          <h2>Assumptions, Exclusions &amp; Warranty</h2>
          <h3>Assumptions / Exclusions</h3>
          <ul className="quote-print-terms">
            {defaultExclusions.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h3>Warranty</h3>
          <ul className="quote-print-terms">
            <li>One-year workmanship warranty unless a later local record supports an approved override.</li>
            <li>Hardware warranty subject to manufacturer terms.</li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default PropertyModelQuotePreview;

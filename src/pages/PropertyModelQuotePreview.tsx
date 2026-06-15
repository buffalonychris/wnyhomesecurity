import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  loadPropertyModelRecords,
  propertyEvidenceOrientationOptions,
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
  "A 50% deposit is required before scheduling.",
  "Job-specific inventory purchase begins only after deposit verification.",
  "A scheduling date is set only after deposit verification.",
  "Final payment is due upon technician arrival on install day unless Chris or Lou explicitly approve an exception.",
  "Accepted payment methods: credit card, cashiers check, Venmo, Cash App, Zelle, and Klarna financing.",
];

const legalPlaceholder =
  "Legal and compliance wording requires operator and/or attorney approval before production customer use.";

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

const describeEvidence = (record: PropertyModelRecord, evidenceRef: string) => {
  if (!evidenceRef.trim()) return "Not entered";
  const evidence = record.evidenceItems.find((item) =>
    [item.id, item.label, item.sourceReference].includes(evidenceRef),
  );
  if (!evidence) return evidenceRef;
  return (
    evidence.label ||
    evidence.sourceReference ||
    optionLabel(propertyEvidenceTypeOptions, evidence.evidenceType)
  );
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

const EvidenceList = ({ record }: { record: PropertyModelRecord }) => {
  if (record.evidenceItems.length === 0)
    return <p>No source evidence references entered yet.</p>;

  return (
    <ul className="quote-print-evidence-list">
      {record.evidenceItems.map((item) => (
        <li key={item.id}>
          <strong>
            {item.label ||
              optionLabel(propertyEvidenceTypeOptions, item.evidenceType)}
          </strong>
          <span>
            {optionLabel(propertyEvidenceTypeOptions, item.evidenceType)}
          </span>
          <span>
            {optionLabel(
              propertyEvidenceOrientationOptions,
              item.orientationSide,
            )}
          </span>
          <span>{optionLabel(propertyEvidenceStatusOptions, item.status)}</span>
          {item.sourceReference ? (
            <span>Ref: {item.sourceReference}</span>
          ) : null}
          {item.notes ? <span>{item.notes}</span> : null}
        </li>
      ))}
    </ul>
  );
};

const SolutionBlock = ({
  record,
  solution,
}: {
  record: PropertyModelRecord;
  solution: PropertyModelSolution;
}) => {
  const concerns = solution.concernServed
    ? record.customerConcerns.filter((concern) =>
        [concern.id, concern.text, concern.category].includes(
          solution.concernServed,
        ),
      )
    : [];
  const servedLabel =
    concerns.length > 0
      ? concerns.map((concern) => concern.text || concern.category).join("; ")
      : solution.concernServed;

  return (
    <article className="quote-print-card">
      <h3>{solution.title || "WNYHS accommodation item"}</h3>
      <dl>
        <div>
          <dt>Concerns served</dt>
          <dd>{servedLabel || "To be matched during operator review."}</dd>
        </div>
        {solution.packageRef ? (
          <div>
            <dt>Package / source</dt>
            <dd>{solution.packageRef}</dd>
          </div>
        ) : null}
        {solution.notes ? (
          <div>
            <dt>Accommodation plan</dt>
            <dd>{solution.notes}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
};

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
    <td>{describeArea(record, item)}</td>
    <td>{item.customerConcernServed || "Not entered"}</td>
    <td>{describeSolution(record, item.selectedSolutionRef)}</td>
    <td>{describeEvidence(record, item.evidenceRef)}</td>
    <td>
      {[item.dashboardPrepNote, item.installerNote].filter(Boolean).join(" ") ||
        "No customer-appropriate notes entered."}
    </td>
  </tr>
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
          <p className="quote-print-eyebrow">WNYHS Quote Preview</p>
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

  return (
    <main className="quote-print-shell">
      <section className="quote-print-page">
        <header className="quote-print-header">
          <div>
            <p className="quote-print-eyebrow">WNY Home Security</p>
            <h1>Quote Preview / Print View</h1>
            <p>
              Prepared for {customerLabel}. This browser-print view uses the
              local Property Model draft only.
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
          <p className="quote-print-section-label">Section 1</p>
          <h2>Floorplan / Property Plan</h2>
          <dl className="quote-print-details">
            <div>
              <dt>Property</dt>
              <dd>{address || customerLabel}</dd>
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
              <dt>Floorplan / evidence summary</dt>
              <dd>
                {record.evidenceItems.length} local evidence reference(s)
                entered.
              </dd>
            </div>
            <div>
              <dt>Hand-drawn floorplan</dt>
              <dd>{statusForEvidenceType(record, "hand_drawn_floorplan")}</dd>
            </div>
            <div>
              <dt>Professional redraw</dt>
              <dd>{statusForEvidenceType(record, "professional_redraw")}</dd>
            </div>
            <div>
              <dt>Exterior photo evidence</dt>
              <dd>{statusForEvidenceType(record, "exterior_photo")}</dd>
            </div>
            <div>
              <dt>Interior photo evidence</dt>
              <dd>{statusForEvidenceType(record, "interior_photo")}</dd>
            </div>
            <div>
              <dt>Orientation / compass</dt>
              <dd>
                {statusForEvidenceType(record, "compass_orientation_note")}
              </dd>
            </div>
            <div>
              <dt>Redraw handoff status</dt>
              <dd>{redrawStatusLabel(record)}</dd>
            </div>
            <div>
              <dt>Rough estimate allowed</dt>
              <dd>{record.redrawPhotoHandoff.roughEstimateAllowed ? "Yes - with risk notes" : "No"}</dd>
            </div>
            <div>
              <dt>Photo analysis summary</dt>
              <dd>{record.redrawPhotoHandoff.photoAnalysisSummary || "Not entered"}</dd>
            </div>
            <div>
              <dt>Ambiguity / onsite verification</dt>
              <dd>{record.redrawPhotoHandoff.ambiguityNotes || record.redrawPhotoHandoff.onsiteVerificationNotes || "Not entered"}</dd>
            </div>
          </dl>
          {record.propertyContext.notes ? (
            <p>{record.propertyContext.notes}</p>
          ) : null}
          <p className="quote-print-note">
            Final placement depends on the approved property plan where a
            floorplan or redraw is part of the job scope.
          </p>
          <EvidenceList record={record} />
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 2</p>
          <h2>Customer Concerns + WNYHS Accommodation Plan</h2>
          {record.customerConcerns.length > 0 ? (
            <ul className="quote-print-concern-list">
              {record.customerConcerns.map((concern) => (
                <li key={concern.id}>
                  <strong>{concern.text || concern.category}</strong>
                  {concern.notes ? <span>{concern.notes}</span> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p>No customer concerns have been entered yet.</p>
          )}
          <div className="quote-print-card-grid">
            {record.proposedSolutions.length > 0 ? (
              record.proposedSolutions.map((solution) => (
                <SolutionBlock
                  key={solution.id}
                  record={record}
                  solution={solution}
                />
              ))
            ) : (
              <p>No WNYHS accommodation plan items have been selected yet.</p>
            )}
          </div>
        </section>

        <section className="quote-print-section">
          <p className="quote-print-section-label">Section 3</p>
          <h2>Formal Quote / Hardware List / Payment Terms</h2>
          {record.bomLineItems.length > 0 ? (
            <div className="quote-print-table-wrap">
              <table className="quote-print-table">
                <thead>
                  <tr>
                    <th>Hardware / BOM item</th>
                    <th>Qty</th>
                    <th>Room / area</th>
                    <th>Concern served</th>
                    <th>Selected solution</th>
                    <th>Evidence ref</th>
                    <th>Customer-appropriate notes</th>
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
          <h3>Manual pricing totals</h3>
          <dl className="quote-print-details">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatCurrency(pricing.quoteSubtotal)}</dd>
            </div>
            {pricing.quoteDiscount > 0 ? (
              <div>
                <dt>Discount</dt>
                <dd>{formatCurrency(pricing.quoteDiscount)}</dd>
              </div>
            ) : null}
            {pricing.quoteTaxOrFees > 0 ? (
              <div>
                <dt>Tax / fees</dt>
                <dd>{formatCurrency(pricing.quoteTaxOrFees)}</dd>
              </div>
            ) : null}
            <div>
              <dt>Total</dt>
              <dd>{formatCurrency(pricing.quoteTotal)}</dd>
            </div>
            <div>
              <dt>Deposit required</dt>
              <dd>
                {pricing.depositRequired
                  ? `${pricing.depositPercent}%`
                  : "Exception / not required"}
              </dd>
            </div>
            <div>
              <dt>Deposit amount</dt>
              <dd>{formatCurrency(pricing.depositAmount)}</dd>
            </div>
            <div>
              <dt>Balance due on arrival</dt>
              <dd>{formatCurrency(pricing.balanceDueOnArrival)}</dd>
            </div>
          </dl>
          {pricing.pricingNotes ? (
            <p className="quote-print-note">
              Pricing notes: {pricing.pricingNotes}
            </p>
          ) : null}
          <h3>Payment terms</h3>
          <ul className="quote-print-terms">
            {paymentTerms.map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
          <p className="quote-print-note">{legalPlaceholder}</p>
        </section>
      </section>
    </main>
  );
};

export default PropertyModelQuotePreview;

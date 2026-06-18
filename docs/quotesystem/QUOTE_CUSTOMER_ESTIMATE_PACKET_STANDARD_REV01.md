# Quote Customer Estimate Packet Standard REV01

Status: ACTIVE
Customer-facing: Yes, after operator review
Implementation authority: No
Task: QUOTE-SYSTEM-STANDARD-001

## Purpose

This standard defines the approved WNYHS customer-facing estimate/proposal packet format. The Customer Estimate Packet is the proposal and acceptance artifact that explains the business-readable scope, project investment, payment terms, and customer approval fields in a signature-ready document suitable to email after operator review.

Key rule: **Customer-facing estimate = proposal/acceptance packet. Internal SOW = technical planning and fulfillment packet.**

The accepted reference model is the Brian K. Lewis Funeral Home Customer Proposal REV04 format.

## Required Packet Use

Use this packet when WNYHS needs a customer-ready document for:

- Customer-facing proposal review.
- Pricing and acceptance.
- Business-readable project scope.
- Visual confidence through clean floorplan, property, layout, or dashboard examples.
- Signature-ready approval.
- Operator-reviewed email delivery.

This packet must not be used as an engineering worksheet, parts research artifact, installer checklist, or unresolved quote draft.

## Required Page and Section Order

1. Cover / Executive Summary.
2. Project Investment & Acceptance.
3. First Floor / Property Protection Layout.
4. System Deliverables.
5. PC / Desktop Dashboard Experience.
6. Mobile Dashboard Experience.
7. Assumptions, Exclusions & Warranty.

For projects where a first-floor plan is not applicable, the layout page may be renamed to Property Plan, Coverage Plan, Site Layout, or Protected Area Layout. The layout page may be omitted only when it is not applicable and the operator explicitly approves the omission.

## Required Customer-Facing Fields

Every packet must provide fields or content for:

- Prepared For.
- Prepared By.
- Proposal Number.
- Revision Number.
- Issue Date.
- Customer/property identity.
- Executive summary.
- Customer outcomes.
- Project investment.
- Deposit requirement.
- Remaining balance.
- Sales tax treatment.
- Install scheduling condition.
- Acceptance/signature section.
- Scope/deliverables.
- Property/floorplan/layout visual.
- Dashboard examples where applicable.
- Assumptions.
- Exclusions.
- Warranty.

## Acceptance and Payment Language

The packet must support the following language or operator-approved equivalent:

- 50% deposit required to reserve installation scheduling unless otherwise approved.
- Remaining balance due upon installation completion or installation day, as approved by operator.
- Sales tax must be shown as included, additional, or not applicable.

The acceptance area must include fields for:

- Deposit amount paid.
- Date deposit received.
- Contractor signature and date.
- Remaining balance.
- Customer signature and date.
- Printed customer name.
- Customer/property address.

## Required Customer-Facing Exclusions

Customer-facing exclusions must make clear that, unless explicitly included in the sold scope:

- No offsite staffed notification service is included.
- No law-enforcement, emergency-response, or third-party urgent-response service is included unless sold through approved provider language.
- The system is not represented as preventing break-ins, theft, damage, or emergencies.
- Unsupported insurance or risk-reduction claims are excluded.
- Existing systems are excluded unless explicitly included.
- Floors and areas are excluded unless explicitly included.
- HVAC and thermostat work are excluded unless explicitly included.
- Third-party subscriptions are excluded unless explicitly included.

## Visual and Presentation Guidance

The Customer Estimate Packet must read as a professional proposal, not an engineering worksheet.

Required presentation controls:

- WNYHS branded header/footer.
- Page numbering.
- Proposal and revision control.
- Clear typography.
- Black/gold branding is acceptable when consistent with current WNYHS brand standards.
- Customer-facing language only.
- Clean framing and captions for dashboard, floorplan, property, layout, and site images.

Forbidden customer-facing content:

- Internal research notes.
- Working BOM cost tables.
- Pricing-pending language.
- Format-review language.
- Unresolved compatibility notes.
- Internal installer notes.
- Margin, internal cost, vendor research uncertainty, or draft-only language.

The customer should understand what they are buying without reading internal technical detail.

## Shared Quote-System Source Data

The customer estimate should eventually be generated from the same quote-system source data as the Internal SOW Packet, while exposing only approved customer-facing fields:

- Property Model.
- Customer concerns.
- Property rooms/areas.
- Evidence references.
- Redraw/photo-analysis handoff.
- Selected WNYHS solutions/packages.
- Canonical catalog data.
- Hardware/BOM reconciliation, customer-safe only.
- Pricing/totals.
- Dashboard notes, customer-safe only.
- Assumptions/exclusions.
- Payment/deposit gates.
- Acceptance state.
- Revision/version metadata.

## Output Separation Rule

The Customer Estimate Packet must pull only approved customer-facing fields. It must not expose internal installer notes, margin, research uncertainty, internal BOM pricing, unresolved compatibility, or draft-only language.

## Future Generator Guidance

Future Quote Workspace work should support generating/exporting this packet from shared quote data. The Quote Preview route should align with this standard. Customer-facing PDFs require operator review before sending, and future durable storage/HQ sync should preserve proposal number, revision number, issue date, acceptance state, and exported-packet metadata.

## Protected Systems Confirmation

This standard is documentation-only. It does not authorize runtime UI changes, quote generator code, PDF generator code, Quote Preview route changes, Installer Packet route changes, import/export changes, pricing engine implementation, durable storage, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, lead-signal/requestId changes, catalog schema changes, package data/pricing changes, auth changes, dependencies, package-lock changes, or public website changes.

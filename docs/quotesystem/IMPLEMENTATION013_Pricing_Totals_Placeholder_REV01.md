# IMPLEMENTATION013 Pricing Totals Placeholder REV01

Status: IMPLEMENTED
Task: QUOTESYSTEM-013
Customer-facing: Internal preview only
Implementation authority: Records this bounded implementation only

## Purpose

This note records the bounded QUOTESYSTEM-013 implementation that adds manual pricing and totals fields to the local WNYHS Quote Workspace Property Model prototype.

The implementation is a manual pricing placeholder only. It does not create a pricing engine, automatic catalog pricing, inventory costing, margin calculation, payment collection, Stripe verification, scheduling automation, ordering automation, email sending, PDF generation, durable production storage, or HubSpot write path.

## Runtime Scope Implemented

- Added local Property Model pricing fields for subtotal, discount, tax/fees, total, deposit requirement, deposit percent, deposit amount, balance due on arrival, and pricing notes.
- Added a Pricing / Totals Placeholder section to `/operator/property-model`.
- Calculates manual totals locally from operator-entered subtotal, discount, tax/fees, and deposit percent.
- Defaults the deposit percent to 50 for new and normalized records.
- Keeps pricing data inside browser local storage and local JSON import/export payloads.
- Updates quote preview Section 3 to show customer-appropriate manual totals and payment terms.
- Updates installer packet readiness guidance to show only field-relevant payment gate reminders.

## Manual Totals Behavior

The quote workspace calculates:

- Quote total = subtotal minus discount plus tax/fees.
- Deposit amount = quote total multiplied by deposit percent when deposit is required.
- Balance due on arrival = quote total minus deposit amount.

Operators can adjust pricing notes and deposit percent manually. Any exception must remain operator-reviewed; this placeholder does not verify payments or authorize exceptions automatically.

## Payment Policy Display

The workspace and previews align to `GATES001_Quote_To_Install_Operational_Gates_REV01.md`:

- 50% deposit required before scheduling.
- No job-specific inventory purchase before deposit verification.
- Final balance due upon technician arrival on install day unless Chris or Lou authorize an exception.

## Import / Export Compatibility

Pricing fields are part of the Property Model record. Older local records normalize with default zero-dollar totals, deposit required enabled, a 50% deposit percent, and blank pricing notes.

Existing local JSON export/import continues to serialize and normalize the entire Property Model record through the existing local-storage adapter.

## Protected Systems Confirmation

No HubSpot files, schema, properties, pipeline configuration, or write paths were changed.

No Stripe files, checkout flow, webhook logic, payment verification, payment collection, or payment state authority was changed.

No inventory purchasing, scheduling automation, ordering automation, email sending, auth system, PDF generation, new dependency, package-lock update, or durable production storage was added.

## Remaining Gaps

- No automatic catalog pricing.
- No inventory cost or margin logic.
- No payment verification or collection.
- No production quote approval workflow.
- No legal/compliance-approved final quote language.

# IMPLEMENTATION005 Draft Quote Workspace REV01

Status: PARTIAL
Customer-facing: No
Implementation authority: Yes, bounded to QUOTESYSTEM-005

## Purpose

This implementation note records the first bounded draft quote workspace extension to the internal Property Model prototype.

The implementation extends `/operator/property-model` so operators can capture customer goals, proposed WNYHS solutions, hardware/BOM line items, and a visible draft quote structure while staying local-storage only.

## Implemented Surface

- Route: `/operator/property-model`.
- Runtime type and storage helper: `src/lib/propertyModel.ts`.
- Operator page: `src/pages/PropertyModelAdmin.tsx`.
- Visible app version for this implementation: `v1.0.129`.

## Workspace Fields

The workspace adds:

- Customer goals.
- Proposed WNYHS solutions.
- Hardware/BOM line items.

Each hardware/BOM line item includes:

- Item name.
- Quantity.
- Location / floorplan reference.
- Customer goal served.
- WNYHS purpose.
- Dashboard prep note.
- Installer note.

## Draft Quote Structure

The operator page displays a generated draft quote structure with:

1. Floorplan / Property Plan placeholder.
2. Customer Goals + WNYHS Accommodation Plan.
3. Formal Quote / Hardware List / Payment Terms.

The payment-policy text reflects the quote-to-install operational gates:

- 50% deposit required before scheduling.
- No job-specific inventory purchase before deposit verification.
- Final balance due upon technician arrival on install day unless Chris or Lou authorize an exception.

## Persistence

Persistence remains browser `localStorage` under the existing `wnyhs_property_models_v1` key.

The implementation includes normalization for older local prototype records that do not yet contain the QUOTESYSTEM-005 workspace fields.

## Boundaries

The implementation does not:

- Generate public customer quotes.
- Generate quote PDFs.
- Calculate pricing.
- Send email.
- Write to HubSpot.
- Implement Stripe or payment processing.
- Automate inventory.
- Automate scheduling.
- Add authentication.
- Generate installer packets.
- Generate Home Assistant dashboards.
- Add package dependencies.

## Future Expansion

Future controlled passes may define production persistence, authenticated operator access, quote review/approval workflow, pricing inputs, PDF generation, email delivery, payment verification integration, inventory reservation, scheduling integration, installer packet generation, and Home Assistant dashboard prep generation.

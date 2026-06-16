# QUOTESYSTEM017 Quote Workspace Workflow Alignment REV01

Status: Completed docs-only alignment record
Task ID: QUOTESYSTEM-017
Customer-facing: No
Runtime authority: No runtime implementation authority
Controlling context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Controlling SOP: `docs/quotesystem/WNYHS_Quote_Workspace_Operator_Playbook_REV01.md`

## 1. Purpose

This document maps the current internal WNYHS Quote Workspace / Property Model UI to the active Quote Workspace Operator Playbook phases.

This is a workflow-alignment document only. It records current UI support, gaps, and future bounded task recommendations. It does not rebuild the UI, change app/source code, change routes, change CSS, change runtime behavior, or authorize implementation.

## 2. Controlling SOP

The controlling SOP for this alignment is `docs/quotesystem/WNYHS_Quote_Workspace_Operator_Playbook_REV01.md`.

The playbook defines the required quote sequence as:

```text
Evidence -> Property Model -> Floorplan Baseline -> Customer Requirements -> Solution Design -> Dashboard Design -> Hardware BOM -> Pricing -> Estimate Packet -> Internal Review -> Customer Delivery
```

For this alignment, the playbook is treated as the workflow authority. Current UI behavior is treated as observed implementation state only.

## 3. Current Quote Workspace Route(s) Reviewed

The current source review was limited to the internal Quote Workspace / Property Model surfaces needed to document the existing workflow state:

| Route / source | Review purpose | Current role |
| --- | --- | --- |
| `/operator/property-model` via `src/pages/PropertyModelAdmin.tsx` | Primary workspace review | Local browser-storage Property Model workspace for customer/deal references, property basics, concerns, areas, evidence, WNYHS solutions, manual pricing, Draft Hardware / BOM, redraw/photo handoff, draft quote preview, gate placeholders, notes, and local JSON import/export. |
| `/operator/property-model/quote-preview` via `src/pages/PropertyModelQuotePreview.tsx` | Estimate packet / preview review | Browser-print quote preview backed by the same local Property Model record. |
| `/operator/property-model/installer-packet` via `src/pages/PropertyModelInstallerPacket.tsx` | Installer handoff context review | Browser-print installer packet backed by the same local Property Model record. |
| `src/App.tsx` | Route registration confirmation only | Confirms the three internal operator routes above are registered. |
| `src/lib/propertyModel.ts` | Data-shape confirmation only | Confirms local Property Model fields used by the workspace, preview, installer packet, normalization, sample records, and local storage adapter. |

No app/source files were edited.

## 4. Current Workflow Sections Found

The current `/operator/property-model` workspace includes these visible workflow sections:

1. Workspace header and primary action bar.
2. Current Property Model summary.
3. Customer / Deal Link with HubSpot reference fields only.
4. Property Basics.
5. Customer Concerns.
6. Property Rooms / Areas To Cover.
7. Floorplan / Property Evidence.
8. Selected WNYHS Solutions.
9. Pricing / Totals Placeholder.
10. Draft Hardware / BOM.
11. Redraw / Photo Analysis Handoff.
12. Draft Quote Preview with three sections:
    - Section 1: Floorplan / Property Plan.
    - Section 2: Customer Concerns + WNYHS Accommodation Plan.
    - Section 3: Formal Quote / Hardware List / Payment Terms.
13. Gate Placeholders.
14. Local Backup Guidance for prototype-only JSON import/export.
15. Property Context Notes.
16. General Notes.
17. Save Property Model action.

The current quote-preview route includes these visible estimate-preview sections:

1. Floorplan / Property Plan.
2. Customer Concerns + WNYHS Accommodation Plan.
3. Formal Quote / Hardware List / Payment Terms.
4. Manual pricing totals.
5. Payment terms.

The current installer-packet route includes these visible internal handoff sections:

1. Job Summary.
2. Pre-Install Readiness.
3. Parts / Pick List.
4. Installer Task Plan + Install Notes.
5. Testing / Verification Checklist.
6. Customer Handoff Checklist.
7. Exception / Open Items Log.

## 5. Playbook-to-Current-UI Mapping

| Playbook phase | Current UI support | Gap | Future task needed |
| --- | --- | --- | --- |
| Evidence Collection | Partially supported by Floorplan / Property Evidence items, evidence type/orientation/status fields, evidence notes, and redraw/photo handoff notes. | The UI stores references and notes only. It does not enforce a complete evidence package, exterior-side checklist, opening inventory completeness, measurement capture completeness, or evidence-readiness status before design. | QUOTESYSTEM-018 and/or a future evidence completeness checklist task. |
| Property Model | Partially supported by Property Basics, customer/deal reference fields, property type, occupancy context, quote stage, concerns, areas, solutions, BOM, pricing, gates, and notes. | The UI is currently a flexible local record rather than a guided phase workflow. It does not enforce the playbook two-pass interior topology / exterior inventory sequence before quote planning. | QUOTESYSTEM-018. |
| Floorplan Baseline | Partially supported by Floorplan / Property Evidence and Redraw / Photo Analysis Handoff fields. | The exact playbook statuses `TOPOLOGY LOCKED`, `EXTERIOR INVENTORY LOCKED`, and `READY FOR ROOM DETAIL PASS` are not presented as a required baseline gate. No quote-finalization gate requires a locked or rough/limited-evidence floorplan baseline. | QUOTESYSTEM-020. |
| Customer Requirements | Partially supported by Customer Concerns, concern categories, customer wording, internal notes, areas, and goal/concern served on WNYHS solution entries. | The UI does not present a dedicated requirements phase that translates each concern into outcome categories before solution design. | QUOTESYSTEM-018. |
| Dashboard Design | Minimally supported through per-BOM Dashboard Prep Note fields. | There is no mandatory dashboard preview step, no capture standard, no preview status, and no evidence that every estimate includes a dashboard concept before customer delivery. Dashboard preview must be mandatory for every estimate. | QUOTESYSTEM-019. |
| Solution Design | Partially supported by Selected WNYHS Solutions with category, solution, package/starting point, concern served, and notes. | The UI can select solutions before evidence, floorplan baseline, requirements, or dashboard concept are complete. It does not enforce sequence or design-review status. | QUOTESYSTEM-018. |
| BOM | Partially supported by Draft Hardware / BOM, catalog-backed/freehand item entry, quantity, hardware class, BOM status, area, evidence reference, concern served, selected solution, dashboard prep note, installer note, and reconciliation summary. | BOM validation remains manual. There is no bounded validation standard that checks each item against area, evidence, concern, selected solution, status, pricing inclusion, and dashboard-design dependency before final quote. | QUOTESYSTEM-022. |
| Pricing | Partially supported by Pricing / Totals Placeholder and quote-preview manual pricing totals. | Pricing is manual and placeholder-based. The UI does not enforce pricing readiness after BOM validation or before estimate packet creation. | QUOTESYSTEM-018, with any pricing-specific follow-up requiring a separate bounded task. |
| Estimate Packet | Partially supported by `/operator/property-model/quote-preview` browser-print quote preview. | The current route is browser-print only and does not define export governance, approval authority, attachment/email rules, or packet finalization criteria. | QUOTESYSTEM-021. |
| Internal Review | Partially supported by Gate Placeholders, quote stage, BOM statuses, and installer packet readiness language. | The UI does not provide a dedicated internal-review phase that verifies dashboard preview, locked or rough/limited-evidence floorplan state, BOM validation, pricing readiness, and packet readiness before customer delivery. | QUOTESYSTEM-018. |
| Customer Delivery | Partially adjacent via browser-print quote preview. | No delivery workflow is implemented or authorized. There is no email, PDF export, upload, CRM write, customer portal, or storage behavior. This task does not recommend implementing delivery behavior outside future bounded governance. | Future delivery governance only if separately authorized; not created by this task. |

## 6. Minimum Future UI Sequence

Future bounded implementation work should align the UI to this minimum sequence before a quote is treated as ready for final customer estimate review:

1. Evidence Collection.
2. Property Model.
3. Floorplan Baseline.
4. Customer Requirements.
5. Dashboard Design.
6. Solution Design.
7. BOM.
8. Pricing.
9. Estimate Packet.
10. Internal Review.

This sequence intentionally separates dashboard design from solution design and BOM. The dashboard concept is not optional context; it is part of the designed customer outcome.

## 7. Mandatory Dashboard Preview Note

Dashboard preview is mandatory for every estimate.

The current UI has dashboard prep notes at the BOM line-item level, but it does not yet provide a mandatory dashboard preview phase, preview capture field, preview status, or final-review gate. Future implementation should require the dashboard preview to be captured or explicitly marked as blocked before the estimate packet is treated as ready.

## 8. Floorplan Baseline Lock / Rough-Limited-Evidence Note

Before quote finalization, the floorplan baseline must be either:

- locked through the playbook statuses required for quote use, or
- clearly marked rough / limited-evidence.

The current UI has evidence and redraw/photo handoff fields, including rough-estimate allowance, but it does not yet enforce the playbook baseline statuses or require a locked/rough-limited-evidence decision before quote finalization.

## 9. Future Bounded Task Recommendations Only

The following are recommended future bounded task names for planning. They are documentation recommendations only and do not authorize implementation:

1. `QUOTESYSTEM-018 — Quote Workspace Step Sequence UI`
   - Add a guided phase sequence matching the playbook.
   - Preserve local-storage boundaries unless separately revised.
   - Do not add protected-system writes.
2. `QUOTESYSTEM-019 — Dashboard Preview Capture Standard`
   - Define and/or implement mandatory dashboard preview capture/status behavior through a bounded task.
   - Keep preview governance separate from any dashboard-generation automation.
3. `QUOTESYSTEM-020 — Floorplan Baseline Lock Gate UI`
   - Add the playbook baseline lock/rough-limited-evidence gate.
   - Use exact approved floorplan status language.
4. `QUOTESYSTEM-021 — Customer Estimate Packet Export Governance`
   - Define packet export, print, storage, delivery, and approval boundaries before any export behavior expands.
   - Do not add email, PDF, upload, CRM write, or storage behavior without separate authority.
5. `QUOTESYSTEM-022 — Quote Workspace BOM Validation Standard`
   - Define validation rules tying BOM lines to area, evidence, concern, solution, dashboard preview, pricing readiness, and quote-readiness status.

No implementation tasks are created by this document. Future task activation must happen through the Master Task Register and the controlling context.

## 10. Protected-System Confirmation

This QUOTESYSTEM-017 alignment is docs-only.

Protected-system confirmations:

- HubSpot untouched; no schema, property, pipeline, API, frontend write path, or CRM runtime behavior changed.
- Stripe/payment untouched; no payment state, webhook, checkout, redirect, secret, or payment confirmation behavior changed.
- Scheduling untouched.
- Quote runtime behavior untouched.
- Routes untouched.
- CSS untouched.
- App/source code untouched.
- Public customer-facing pages untouched.
- No storage, upload, export, PDF, email, durable persistence, environment variable, package, package-lock, or Cloudflare config behavior added or changed.

## 11. Version

Document version: REV01. Site/app version was not changed because the authorized scope was docs-only and explicitly forbade app/source changes.

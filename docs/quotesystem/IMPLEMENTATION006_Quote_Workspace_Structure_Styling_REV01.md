# IMPLEMENTATION006 Quote Workspace Structure Styling REV01

Status: PARTIAL implementation record
Customer-facing: No
Task: QUOTESYSTEM-006

## Purpose

This document records the bounded QUOTESYSTEM-006 refactor of `/operator/property-model` from a generic prototype form into a WNY Home Security quote workspace.

The implementation remains an internal local-storage workspace. It does not create production persistence, quote automation, pricing automation, HubSpot writes, Stripe/payment behavior, scheduling automation, inventory automation, quote PDF generation, email sending, or authentication.

## Source Authority Used

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`
- `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`
- `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`
- `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `src/content/wnyhsOfferCatalog.ts`
- `src/content/homeSecurityPackageData.ts`
- `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`
- `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`

## Implementation Summary

QUOTESYSTEM-006 updates the local Property Model workspace to:

- Frame customer identity, lead source, lifecycle, deal ownership, and deal context as HubSpot-owned.
- Provide local reference fields for HubSpot Contact and Deal links without writing to HubSpot.
- Replace the previous generic quote stages with WNYHS quote-stage options:
  - Requested Call
  - Requested Quote
  - Rough Quote Provided - No Onsite
  - Onsite Quote Provided
  - Accepted Quote - Owes Deposit
  - Quote Complete - Deposit Paid
- Convert Property Type and Occupancy Context into controlled option lists with an "Other / needs review" fallback.
- Make Customer Concerns the primary customer-language capture area.
- Preserve freehand concern wording for quote personalization.
- Replace vague Rooms/Zones wording with Property Rooms / Areas To Cover.
- Source WNYHS categories, solutions, and package starting points from `src/content/wnyhsOfferCatalog.ts`.
- Source draft hardware class options from existing Home Security package hardware plus a small temporary fallback list.
- Rename the BOM section to Draft Hardware / BOM.
- Add BOM status values:
  - GPT Proposed
  - WNYHS Modified
  - Approved
  - Locked
- Keep BOM planning manual and adjustable by Chris/Lou.
- Preserve the three draft quote preview sections aligned to QUOTE001 and GATES001.
- Replace inline prototype styling with WNYHS token-based `quote-workspace-*` classes in `src/index.css`.

## Temporary Fallback Data

The workspace uses repo source data where practical:

- Categories, solutions, and package starting points from `src/content/wnyhsOfferCatalog.ts`.
- Hardware labels from `src/content/homeSecurityPackageData.ts`.
- Hardware governance references from `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`.

A small local fallback hardware class list remains in `src/pages/PropertyModelAdmin.tsx` for manual planning entries that are not represented in package hardware source data yet. This fallback is temporary and should be replaced by a future dedicated operator catalog or hardware registry export when authorized.

## Protected-System Boundary

This task did not modify:

- `/api/lead-signal`
- HubSpot API helpers or sync runtime
- HubSpot schema, properties, pipeline, or stage IDs
- Stripe checkout, webhook, success/cancel, or payment verification logic
- Scheduling runtime or owner-confirmation logic
- Resend/email runtime
- Inventory automation
- Quote PDF generation

The page remains local browser-storage only.

## Remaining Gaps

- No production database persistence.
- No HubSpot read/write integration.
- No quote PDF/export.
- No pricing engine.
- No inventory reservation or purchasing workflow.
- No dedicated exported hardware registry source module.
- No visual browser QA recorded in this implementation note.

## Validation Expectations

Task validation should include:

- `npm run build`
- Targeted lint/typecheck for touched runtime files
- `git diff --check`
- Protected-system changed-file scan
- Added-line forbidden-claim scan
- Confirmation that WNYHS token/CSS standards were followed as much as the existing codebase permits

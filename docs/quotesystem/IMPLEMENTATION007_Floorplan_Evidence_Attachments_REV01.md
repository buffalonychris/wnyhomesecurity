# IMPLEMENTATION007 Floorplan Evidence Attachments REV01

Status: PARTIAL implementation record
Customer-facing: No
Task: QUOTESYSTEM-007

## Purpose

This document records the bounded QUOTESYSTEM-007 extension of `/operator/property-model` so the WNYHS Quote Workspace can capture floorplan and property evidence references for a local Property Model draft.

The implementation remains an internal local-storage prototype. It captures text and URL references only. It does not create file uploads, durable storage, cloud storage, image processing, a floorplan rendering engine, AI redraw generation, HubSpot writes, Stripe/payment behavior, scheduling automation, inventory automation, quote PDF generation, email sending, or authentication.

## Source Authority Used

- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- `docs/system/master-task-register.md`
- `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`
- `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`
- `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`
- `docs/quotesystem/FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`
- `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`
- `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`

## Implementation Summary

QUOTESYSTEM-007 updates the local Property Model workspace to store floorplan and property evidence references for:

- Source Sketch Reference
- Professional Redraw Reference
- Exterior Photo References for north, south, east, and west sides
- Interior Photo References
- Compass / Orientation Notes
- Known Measurements
- Floorplan Validation Notes
- Base Floorplan Status

Base Floorplan Status uses the controlled options:

- Not Started
- Source Evidence Collected
- Redraw Needed
- Redraw In Review
- Approved For Quote Use

The UI adds a WNYHS-styled `Floorplan & Property Evidence` section that follows existing `quote-workspace-*` token-based classes. Helper language records that source sketch orientation controls during Trace Mode, photos validate rather than override source geometry unless WNYHS approves a correction, and no security/device overlay should proceed until the base floorplan is approved.

Draft Quote Preview Section 1 now summarizes the base floorplan status, source sketch reference, professional redraw reference, and floorplan validation notes.

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
- Upload, cloud-storage, image-processing, floorplan-rendering, or AI redraw runtime

The page remains local browser-storage only.

## Remaining Gaps

- No real file upload handling.
- No durable storage for evidence assets.
- No image processing or automatic redraw generation.
- No floorplan rendering or overlay engine.
- No production database persistence.
- No HubSpot read/write integration.
- No quote PDF/export.

## Validation Expectations

Task validation should include:

- `npm run build`
- Targeted lint/typecheck for touched runtime files
- `git diff --check`
- Protected-system changed-file scan
- Added-line forbidden-claim scan
- Confirmation that WNYHS token/CSS standards were followed as much as the existing codebase permits

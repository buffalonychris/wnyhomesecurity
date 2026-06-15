# IMPLEMENTATION011 Local Import / Export REV01

Status: PARTIAL
Task: QUOTESYSTEM-011
Customer-facing: No
Implementation authority: Records completed bounded implementation only

## Purpose

This document records the bounded QUOTESYSTEM-011 implementation of local JSON import/export for WNYHS Quote Workspace Property Model records.

## Implemented Scope

- Added single-record export for the currently selected Property Model draft.
- Added full local collection export for browser backup/device-transfer support.
- Added local `.json` file import through a browser file input.
- Added visible local-backup guidance inside `/operator/property-model`.
- Normalized imported records through the existing Property Model normalization path before saving.
- Kept persistence local to browser `localStorage` only.

## Export Behavior

The operator workspace can download:

- `Export Property Model JSON` for the current draft record.
- `Export All Property Models JSON` for the full local collection.

Exports use a JSON envelope with:

- `schema`
- `schemaVersion`
- `exportedAt`
- `storage`
- `payload`

The export flow creates a local browser download only. It does not call a network API, write to HubSpot, write to Stripe, send email, generate PDF output, or add durable backend persistence.

## Import Behavior

The operator workspace accepts local JSON files from the browser file picker.

Accepted shapes are:

- A single Property Model record.
- An array of Property Model records.
- A QUOTESYSTEM-011 export envelope containing either one record or an array under `payload`.

Minimal validation requires a record-like object with a string `recordId`, a `customer` object, and a `propertyAddress` object. Accepted records are normalized before save so older/local partial records receive current default fields.

## Collision Handling

If an imported record ID already exists in local storage, the import is saved as a new local copy with a new Property Model ID. This is intentionally safer than replacing existing browser records during prototype local backup work.

## Operator Guidance Added

The workspace warns operators that:

- This is prototype/local backup only.
- JSON may contain customer, property, quote, and installer-planning information.
- Exported files should be stored securely.
- Sensitive customer files should not be uploaded into public tools.
- Future durable storage is expected to replace this local backup workflow.

## Protected Boundaries

This implementation did not add:

- Cloud storage.
- Durable backend persistence.
- HubSpot sync or writes.
- Stripe/payment changes.
- Inventory automation.
- Ordering automation.
- Scheduling automation.
- Email sending.
- PDF generation.
- Authentication.
- New dependencies.

## Remaining Gaps

- JSON import validation remains intentionally minimal for the local prototype.
- There is no durable multi-user backup/history, by design.
- Exported file protection remains an operator responsibility until future durable storage exists.

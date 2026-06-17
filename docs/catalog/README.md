# WNYHS Catalog Governance

Status: Active
Scope: Reusable WNYHS catalog governance and runtime-catalog source rules

## Purpose

`docs/catalog/` is the governance home for WNYHS catalog rules.

The catalog source owns reusable business catalog truth, including reusable categories, packages, solutions, and hardware/parts references that can be shared by website pages, the quote workspace, future inventory readiness, future ordering prep, future installer pick lists, and future dashboard prep.

## Boundary

The catalog is not a CRM. It must not store customer identity, deal ownership, lead source, lifecycle stage, contact records, or job records.

The catalog is not customer or job storage. Quote and Property Model records own job-specific customer, property, floorplan, evidence, quote, gate, and install-planning truth.

## Ownership Split

- Catalog source: reusable business catalog truth.
- Quote workspace / Property Model records: job-specific customer, property, quote, and install-planning truth.
- CRM: customer/deal authority through the protected API layer only.

## Initial Runtime Source

The initial runtime source lives in `src/data/catalog/` and is intentionally file-backed. A future controlled task may move editable catalog data to durable backend storage, an admin interface, or a GitHub-backed editing workflow.


## CATALOG002 Master Parts Layer

CATALOG002 adds the exact part-number layer to the file-backed catalog. Exact `part_id` records are the future atomic source for solutions, packages, quotes, installs, inventory planning, warranty support, and customer asset snapshots. The initial mapping scaffold is intentionally migration-safe and may remain empty until a bounded backfill/import task promotes validated records.


## CATALOG003 GPT Master Parts Import Alignment

CATALOG003 defines the import alignment contract for GPT-generated exact-part files before any hardware backfill occurs. `CatalogMasterPart` remains the target model, JSONL is the preferred canonical GPT import format, CSV is a convenience/review format, and `src/data/catalog/masterPartsData.ts` remains empty until a future bounded backfill/import task.

# CATALOG002 Master Parts Data Model REV01

Status: Active
Task: CATALOG002
Scope: Master part-number data model and migration-safe mapping scaffold
Version: v1.0.152

## Purpose

CATALOG002 expands CATALOG001 so the exact part number, SKU, or model becomes the atomic internal catalog record for WNYHS solutions, packages, quotes, installs, inventory planning, warranty support, and future CRM/customer asset references.

The business model remains:

1. Part numbers
2. Solutions
3. Packages
4. Categories

Customer and operator navigation may still present the inverse path when useful:

1. Categories
2. Packages
3. Solutions
4. Parts

## Relationship to CATALOG001

CATALOG001 created the initial file-backed runtime catalog under `src/data/catalog/` and preserved current public/runtime behavior. CATALOG002 does not replace that runtime behavior. It adds a master parts layer beside the existing category, package, solution, and generic hardware references so future tasks can migrate from generic labels to exact stable `part_id` references.

## Atomic Part Record Rule

A master part record must describe one exact product identity, not a vague hardware label. The record supports fields for brand, manufacturer, product line, product name, exact model, SKU, device class, qualification status, inventory classification, integration path, category applicability, validation state, evidence, support notes, warranty notes, and review dates.

Category applicability must be stored as machine-readable booleans or Yes/No-compatible values for:

- Home Security
- Aging in Place
- Home Automation
- Home Safety / Environmental
- Home Lighting

A part may apply to more than one category.

## Mapping Scaffold

CATALOG002 establishes migration-safe structures for:

- `solutionId -> recommendedPartIds / allowedPartIds`
- `packageId -> partIds / quantityBasis`
- `hardware label or type -> candidatePartIds`

These mappings may start empty. Existing public catalog and quote runtime behavior may continue using CATALOG001 generic hardware references until a future bounded task backfills exact part IDs.

## Deferred Full Backfill

The full parts list is intentionally deferred because the hardware registry and package/BOM documents are governance inputs, not a completed validated runtime import. This task does not evaluate new hardware, create final BOMs, authorize purchasing, change pricing, or promote public claims.

Future backfill must be a bounded task that identifies source documents, import method, validation status, evidence confidence, and review owner.

## GPT CSV/JSONL Import Path

Future WNYHS hardware qualification GPT exports should be imported into `src/data/catalog/masterPartsData.ts` or a successor source only after a bounded task confirms the export schema and source evidence. Imports should preserve each exact part number as one `part_id`, normalize category applicability into machine-readable values, mark unknown or unverified fields as unknown/needs validation, and retain source references for audit.

Recommended import checks:

1. Confirm each row has one stable `part_id`.
2. Confirm exact model and SKU are not replaced by generic product labels.
3. Confirm category applicability booleans are populated.
4. Confirm validation/evidence fields are present.
5. Reject or quarantine records that imply unsupported public claims, pricing authority, direct CRM writes, or payment behavior.

## Customer Asset Snapshot Rule

Installed customer asset records must snapshot the installed facts instead of relying only on the live catalog record. Future asset records should store at minimum:

- `part_id`
- exact model
- SKU
- serial number when available
- install date
- installed location
- catalog version used at install time

The live master catalog may change after installation, so warranty, support, and replacement decisions need the installed snapshot plus the current catalog record.

## Protected Boundaries

CATALOG002 does not authorize:

- Public pricing changes
- Stripe/payment changes
- HubSpot changes or direct CRM writes
- Scheduling changes
- Quote runtime behavior changes
- Customer-facing solution or package copy changes
- Inventory automation
- Hardware purchasing
- Full hardware backfill
- New hardware evaluation
- Public claims expansion

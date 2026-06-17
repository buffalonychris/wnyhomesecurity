# CATALOG003 GPT Master Parts Import File Alignment REV01

Status: Active
Task: CATALOG003
Scope: GPT-generated master parts import alignment only
Version: v1.0.153

## Purpose

CATALOG003 defines the repository-side import contract between the WNYHS Hardware Qualification GPT and the canonical `CatalogMasterPart` model in `src/data/catalog/catalogTypes.ts`.

This standard exists before any hardware backfill so GPT output can be checked against the exact repo field names, value shapes, normalization rules, and review expectations before records are promoted into `src/data/catalog/masterPartsData.ts`.

## Protected Boundary

CATALOG003 does not backfill hardware, evaluate new hardware, approve products, change pricing, alter quote runtime behavior, change public solution or package copy, add inventory automation, add installer automation, or touch CRM, payment, scheduling, or lead intake logic.

`src/data/catalog/masterPartsData.ts` remains empty until a future bounded backfill/import task promotes validated records.

## Import Target

The import target is one JSON object per exact product identity matching `CatalogMasterPart`. The repo-side helper artifact is `src/data/catalog/masterPartsImportSchema.ts` and exports:

- `catalogMasterPartImportColumns`
- `catalogMasterPartRequiredColumns`
- `catalogMasterPartArrayColumns`
- `catalogMasterPartBooleanLikeColumns`
- `catalogMasterPartNullableColumns`
- `catalogMasterPartEnumGuidance`
- `emptyCatalogMasterPartImportRow`

The column list must be kept aligned with `CatalogMasterPart`; future model changes require a bounded schema-alignment update before GPT import files are accepted.

## Expected GPT Output Files

A GPT qualification batch should produce these review files:

1. `wnyhs_master_parts_records.jsonl` — preferred canonical GPT import format.
2. `wnyhs_master_parts_records.csv` — spreadsheet/import convenience format using the same columns.
3. `wnyhs_master_parts_gap_report.md` — missing evidence, uncertain fields, conflicts, and review blockers.
4. `wnyhs_master_parts_sources.md` — source list and evidence notes used by the GPT batch.

JSONL is preferred because it preserves arrays, booleans, nulls, and enum strings without spreadsheet ambiguity. CSV is allowed for review convenience but must not introduce different field names or value semantics.

## JSONL Record Shape

Each JSONL line must be one complete object whose keys match `catalogMasterPartImportColumns`. Array fields must be JSON arrays. Nullable fields must use `null` when no value is available. Boolean-like fields may use JSON booleans or the repo-compatible strings `yes`, `no`, or `unknown`.

Docs-only placeholder example, not an approved part:

```json
{"part_id":"example-placeholder-part","brand":"Example Brand","manufacturer":"Example Manufacturer","product_line":null,"product_name":"Placeholder Device","exact_model":"PLACEHOLDER-MODEL","sku":null,"device_class":"placeholder","hard_gate_result":"UNKNOWN","qualification_status":"unknown","master_hardware_list_action":"needs_operator_review","inventory_classification":"unknown","home_security":"unknown","aging_in_place":"unknown","home_automation":"unknown","home_safety_environmental":"unknown","home_lighting":"unknown","approved_for_standard_use":"unknown","approved_for_conditional_use":"unknown","field_test_required":"unknown","research_pending":"unknown","custom_pass_through_only":"unknown","do_not_use":"unknown","customer_facing_outcome":null,"internal_wnyhs_purpose":null,"required_integration_path":null,"home_assistant_compatibility_level":"unknown","ha_green_suitability":null,"vendor_app_role":null,"cloud_role":null,"subscription_role":null,"power_type":null,"network_type":null,"battery_dependency":null,"hub_bridge_dependency":null,"retrofit_suitability":null,"commercial_suitability":null,"dashboard_implications":null,"automation_implications":null,"quote_line_item_role":null,"required_bundled_accessories":[],"optional_accessories":[],"customer_disclosure_notes":["Placeholder only; not approved."],"installer_notes":[],"support_notes":[],"warranty_notes":[],"stocking_recommendation":null,"validation_status":"needs_validation","required_wnyhs_validation_tests":[],"evidence_confidence":"unknown","primary_evidence_sources":[],"missing_evidence":["real product evidence"],"source":"CATALOG003 placeholder","record_status":"needs_review","last_evaluated_date":null,"next_review_date":null}
```

## CSV Column Expectations

CSV headers must match `catalogMasterPartImportColumns` exactly. CSV arrays use `|` as the list delimiter. Empty array cells import as `[]`; non-empty cells split on `|` after trimming whitespace. CSV nullable blanks import as `null` for nullable columns. Required text fields must not be blank.

## GPT Alias Handling

Older GPT instructions may use category-prefixed names. Import review must map these aliases to repo fields before acceptance:

| GPT alias | Repo field |
| --- | --- |
| `category_home_security` | `home_security` |
| `category_aging_in_place` | `aging_in_place` |
| `category_home_automation` | `home_automation` |
| `category_home_safety_environmental` | `home_safety_environmental` |
| `category_home_lighting` | `home_lighting` |

Future GPT instructions should emit repo field names directly after CATALOG003.

## Normalization Rules

### Booleans and Yes/No/Unknown

For `catalogMasterPartBooleanLikeColumns`, normalize:

- `true`, `TRUE`, `yes`, `YES`, `Y` -> `true` or `yes`, based on importer policy.
- `false`, `FALSE`, `no`, `NO`, `N` -> `false` or `no`, based on importer policy.
- blank, `unknown`, `UNKNOWN`, `not found`, `unclear` -> `unknown` unless the target field is nullable.

### Enums

Use exact repo enum values. GPT-readable labels must normalize before import:

| GPT-readable value | Repo value |
| --- | --- |
| `APPROVED STANDARD` | `approved_standard` |
| `APPROVED CONDITIONAL` | `conditional` |
| `FIELD TEST REQUIRED` | `field_test` |
| `RESEARCH PENDING` | `research_pending` |
| `CUSTOM / PASS-THROUGH` | `custom_pass_through_only` |
| `REJECTED / Do Not Use` | `do_not_use` |
| `ADD TO STANDARD CATALOG` | `add_to_standard_catalog` |
| `CONDITIONAL CATALOG CANDIDATE` | `conditional_catalog_candidate` |
| `FIELD TEST BEFORE STANDARD USE` | `field_test_before_standard_use` |
| `RESEARCH ONLY` | `research_only` |
| `CUSTOM QUOTE ONLY` | `custom_quote_only` |
| `EXCLUDE FROM STANDARD USE` | `exclude_from_standard_use` |
| `STANDARD STOCK CANDIDATE` | `standard_stock_candidate` |
| `CONDITIONAL STOCK CANDIDATE` | `conditional_stock_candidate` |
| `SPECIAL ORDER` | `special_order` |
| `CUSTOM PASS-THROUGH` | `custom_pass_through` |
| `DO NOT STOCK` | `do_not_stock` |

`hard_gate_result` is currently a string field. Preserve the current evidence label casing from the source process, such as `PASS`, `FAIL`, `UNKNOWN`, or `NOT_PROVEN`, until a future bounded task formalizes it as an enum.

### Arrays

JSONL arrays must be arrays. CSV arrays must use `|`. Do not serialize arrays with commas because source names and notes may contain commas.

### Nullable Fields and Blanks

Columns in `catalogMasterPartNullableColumns` may be blank in CSV or `null` in JSONL. Required non-null fields must contain a meaningful value or the row belongs in the gap report instead of an import file.

### Unknown and Not Proven

Use `unknown` when a value is missing or unclear. Use `NOT_PROVEN` in `hard_gate_result` only when the hard-gate evidence specifically shows a requirement was not proven. Do not convert unknown evidence into approval language.

## Source and Evidence Handling

`primary_evidence_sources` must list the evidence inputs used for the row. `source` must identify the GPT batch, source standard, or evidence package. `missing_evidence` must list gaps that block stronger approval. `evidence_confidence` must remain `unknown`, `low`, or `medium` unless high-confidence primary evidence supports the row.

## Gap Report Expectations

`wnyhs_master_parts_gap_report.md` should list rows with missing required fields, unsupported enum labels, unknown exact model/SKU when material, source conflicts, missing Home Assistant compatibility evidence, missing warranty/support evidence, and any row that might imply unsupported public claims.

## Source Report Expectations

`wnyhs_master_parts_sources.md` should list source title/name, URL or repository path when available, access date, extracted evidence summary, and the affected `part_id` values. The report is audit support only; it does not approve a part.

## Import Review Checklist

Before a future bounded task imports records:

- Confirm every row maps to one exact product identity and one stable `part_id`.
- Confirm JSONL/CSV fields match `catalogMasterPartImportColumns`.
- Confirm required columns are populated.
- Confirm enum values match `catalogMasterPartEnumGuidance`.
- Confirm array fields use JSON arrays or the CSV `|` delimiter.
- Confirm unknowns and not-proven findings are preserved without approval inflation.
- Confirm gap and source reports accompany the record file.
- Confirm no public copy, pricing, CRM, payment, scheduling, quote runtime, inventory automation, or installer automation changes are included.

## Future Work

A future bounded CATALOG backfill/import task may validate files generated under this standard and promote approved records into `catalogMasterParts`. That future task must cite evidence, keep unsupported rows out of runtime data, and preserve CATALOG001 runtime behavior unless separately authorized.

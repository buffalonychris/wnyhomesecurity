# CATALOG001 Canonical Catalog Source Standard REV01

Status: Active
Task: CATALOG001
Scope: First canonical runtime catalog source standard

## Standard

WNYHS catalog truth follows this chain:

1. Parts become solutions.
2. Solutions become packages.
3. Packages assign to categories.
4. Quote workspace consumes catalog data.
5. Website pages should eventually consume catalog data.
6. Inventory readiness, ordering prep, installer pick lists, and dashboard prep should eventually consume catalog data.

## No Duplicate Catalog Truth

Do not duplicate parts, package, solution, or category data in multiple places when the same data can be read from the canonical catalog source.

Temporary duplication may remain only when a migration is incomplete and documented in the implementation note for that task.

## Initial Runtime Source

The current initial runtime source lives in `src/data/catalog/`.

That source is file-backed TypeScript for this first promotion pass. It promotes existing package, solution, category, and hardware/parts-like data without rebuilding the full catalog.

## Future Migration

A future controlled task may move editable catalog data to durable backend storage, an admin interface, or a GitHub-backed editing workflow.

That future migration must preserve these boundaries:

- Catalog data remains reusable business data.
- Quote and Property Model records remain job-specific records.
- CRM writes remain protected by the API layer.
- Payment state remains outside catalog authority.

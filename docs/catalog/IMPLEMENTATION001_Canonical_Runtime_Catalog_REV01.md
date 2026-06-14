# IMPLEMENTATION001 Canonical Runtime Catalog REV01

Status: Active
Task: CATALOG001
Scope: Initial file-backed runtime catalog implementation

## Existing Source Files Discovered

Short source inventory from local repo discovery:

- `src/content/homeSecurityPackageData.ts` — Home Security tier specs and package hardware quantities.
- `src/content/packages.ts` — customer-facing package tier data, prices where already available, summaries, features, hardware lists, and package flow language.
- `src/content/wnyhsOfferCatalog.ts` — offer categories, public solution options, and package starting points.
- `src/data/hardware.ts` — existing hardware-like public planning data outside this first promotion scope.
- `src/pages/Packages.tsx` — current package page consumer of existing package content.
- `src/pages/PropertyModelAdmin.tsx` — internal quote workspace consumer of source-backed categories, solutions, package starting points, and draft hardware options.
- `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md` — solution catalog reconciliation governance reference.
- `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md` — hardware registry governance reference.
- `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md` — package/BOM pricing input governance reference.
- `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md` — Home Assistant compatibility and BOM governance reference.
- `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md` — inventory readiness governance reference.
- `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md` — Property Model ownership and boundary reference.

## Data Promoted

The first runtime catalog promotes:

- Catalog categories from the existing WNYHS offer categories.
- Catalog solutions from the existing public WNYHS solution options.
- Catalog packages from the existing Home Security package tiers and package starting points.
- Catalog hardware/parts references from the existing Home Security package hardware quantities.
- Existing customer-facing price labels where already available in source package data.

## Temporary Data

The runtime catalog is currently TypeScript-backed in `src/data/catalog/`.

Some package-to-solution relationships are inferred from existing package topics and should be reviewed in a future catalog hardening pass.

Catalog pricing remains future work beyond preserving existing package price labels. No exact costs were invented.

## Intentionally Not Migrated Yet

This pass intentionally did not migrate:

- Public package page rendering.
- Public solution pages.
- Full hardware registry details from governance docs.
- Durable production storage.
- Inventory automation.
- Ordering automation.
- Installer pick-list generation.
- Dashboard generation.
- Quote PDF generation.
- Customer, property, or job records.

## Next Migration Candidates

Recommended next candidates:

1. Reconcile `src/data/hardware.ts` into the catalog hardware/parts model.
2. Move public package pages to read package data from `src/data/catalog/` after visual parity review.
3. Move solution pages/listings to read solution/category data from `src/data/catalog/` after route and copy audit.
4. Add explicit reviewed package-to-solution mappings instead of topic-name inference.
5. Add durable editing workflow only after a bounded storage/admin task is authorized.

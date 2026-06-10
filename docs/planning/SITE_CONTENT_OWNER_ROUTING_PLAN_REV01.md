# SITE CONTENT OWNER ROUTING PLAN REV01

## 1. Document Status

- **Task ID:** SITE-CONTENT-OWNER-ROUTING-001
- **Status:** Planning Document
- **Scope:** Site content ownership and routing planning only.
- **Authority:** This plan translates promoted governance standards and planning docs into a future implementation-ready ownership model.
- **implementation boundary:** This document does not authorize source, route, CSS, component, asset, Search, Homepage, QR Landing, Category, Package, Solution, runtime, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, analytics, attribution, catalog-generation, Fit Check, or protected-system changes.

## 2. Controlling Sources

This plan is based only on promoted governance docs and existing repo documentation:

- `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`
- `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`
- `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`
- `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`
- `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`
- `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`
- `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`
- `docs/planning/SEARCH_UX_PLAN_REV01.md`

## 3. Content Ownership Philosophy

Public-site content should have one canonical owner per content layer. Downstream pages should consume, reference, filter, and summarize upstream content rather than copying it into page-specific catalogs.

Solutions are the authoritative content source. Packages curate Solutions. Categories organize Packages and Solutions. Homepage presents selected discovery paths. QR Landing presents a smaller conversion-focused subset.

This ownership model exists to prevent duplicated content, drift between pages, and inconsistent homeowner language.

## 4. Content Source Hierarchy

Approved content source hierarchy:

```text
Solution
Package
Category
Homepage
QR Landing
```

Inheritance direction:

```text
Solution metadata and messaging
-> Package curation and rollups
-> Category discovery grouping
-> Homepage discovery highlights
-> QR Landing conversion highlights
```

Solutions remain the source of truth for customer-facing outcome descriptions, categories, package relationships, search terms, media metadata, WNYHS Core dependency, related content, and catalog-generation readiness.

## 5. Solution Content Ownership

Where should Solution content live?

Solution content should live in the future canonical Solution Object content source, derived from `MASTER_SOLUTION_CATALOG_V1.md` and governed by `SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`.

Recommended future repository structure, subject to a separate implementation task:

- `src/content/site/solutions.ts` or an equivalent structured content module for canonical Solution Object metadata.
- `public/images/solutions/` or an equivalent approved asset directory for Solution media assets.
- Solution routes or pages should consume the canonical Solution Object instead of maintaining separate page-only descriptions.

Solution content should manually author:

- Solution name.
- Slug.
- Status.
- Customer summary.
- Outcome explanation.
- Primary Category and secondary Categories.
- Related Packages and related Solutions.
- Search terms, homeowner problem language, and common hardware terms.
- WNYHS Core relationship.
- Media metadata required by the Solution Media Standard.

Solution content should be inherited by Packages, Categories, Homepage, QR Landing, Search, Fit Check recommendations, and future Catalog generation.

## 6. Package Content Ownership

Where should Package content live?

Package content should live in a future canonical Package content source governed by `PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`.

Recommended future repository structure, subject to a separate implementation task:

- `src/content/site/packages.ts` or an equivalent structured content module for canonical Package metadata.
- Package routes or sections should reference Solution IDs or slugs instead of duplicating Solution copy.

Package content should manually author:

- Package name.
- Slug.
- Customer summary.
- Included Solution references.
- Optional Solution references.
- Recommended upgrades.
- Expansion paths.
- Related Packages and related Solutions.
- Core requirement status.
- Search terms and homeowner situation language.

Package content should inherit Solution descriptions, Solution media metadata, Solution category assignments, and Solution search metadata.

## 7. Category Content Ownership

Where should Category content live?

Category content should live in a future canonical Category content source governed by `CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`.

Recommended future repository structure, subject to a separate implementation task:

- `src/content/site/categories.ts` or an equivalent structured content module for canonical Category metadata.
- Category routes or sections should reference Package and Solution IDs or slugs instead of duplicating Package or Solution descriptions.

Category content should manually author:

- Category name.
- Slug.
- Short description.
- Who this helps.
- Common situations.
- Featured Package references.
- Featured Solution references.
- Related Solution references.
- Adjacent Category references.
- Search terms and synonyms.

Category content should inherit Package summaries where Packages exist and Solution content wherever Solutions are shown directly.

## 8. Homepage Content Ownership

What should Homepage consume?

Homepage should consume:

- Approved Category metadata for the Category Explorer.
- Approved Package metadata for Featured Packages.
- Approved Solution metadata for Featured Solutions.
- WNYHS Core positioning from promoted governance docs.
- Public Information page links such as How It Works, Why WNYHS, Contact, and Support.
- Search access requirements from the Search UX plan.

Homepage should manually author only page-level framing content:

- Broad public positioning.
- Hero framing.
- Trust bar labels.
- Section headings.
- Short section intros.
- Primary CTA framing.
- Footer presentation where not inherited from shared navigation or public information content.

Homepage should not become a second catalog. It should highlight and route to existing content.

## 9. QR Landing Content Ownership

What should QR Landing consume?

QR Landing should consume:

- A limited set of approved Solution metadata for Popular Solutions.
- Selected Category concepts where they help visitors self-identify quickly.
- WNYHS Core positioning from promoted governance docs.
- Search access requirements from the Search UX plan.
- QR runtime and attribution preservation requirements from existing QR planning and runtime docs.

QR Landing should manually author only conversion-page framing content:

- Scan acknowledgment.
- QR-specific hero framing.
- Compact trust copy.
- CTA framing.
- Short footer presentation.

QR Landing should consume existing content rather than become a second Homepage. It should remain shorter, more direct, and conversion-focused.

Future implementation must preserve `/qrlanding` behavior, QR attribution, requestId behavior if present, lead-signal behavior if present, and protected runtime behavior.

## 10. Public Information Page Ownership

Public Information Pages should own their own public customer-facing content.

Public Information Pages may include:

- About.
- Contact.
- Support.
- How It Works.
- Why WNYHS.

These pages should manually author their own page-specific copy and Search metadata. They should not duplicate Solution, Package, or Category descriptions except for brief references that route visitors to canonical public content.

## 11. Search Ownership And Indexing Sources

What should Search index?

Search should index:

- Categories.
- Packages.
- Solutions.
- Public Information Pages.

Search should not index:

- Runtime docs.
- Governance docs.
- Internal docs.
- Repository documentation.
- Hidden routes.
- Admin pages.
- Draft-only pages.
- Protected pages.
- API endpoints.
- Deployment or runtime information.

Search should reference indexed content rather than maintain separate descriptions. Search metadata should be inherited from the canonical Category, Package, Solution, and Public Information content sources.

Search should manually author only search-specific metadata when needed, such as synonyms, homeowner problem phrases, result labels, and ranking hints. Those fields should still live with the canonical content object or be generated from it.

## 12. Image And Media Ownership

Image and media ownership should follow `SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`.

Solution media should be owned by the canonical Solution Object because Solution images explain outcomes, hardware examples, dashboard examples, and homeowner scenarios.

Recommended future ownership model:

- Solution media metadata lives with the canonical Solution Object.
- Physical asset files live in an approved public asset directory.
- Package, Category, Homepage, and QR Landing sections reference approved Solution media where appropriate.
- Page-specific hero or brand imagery may be page-owned only when it is not a duplicated Solution asset.

This planning task does not generate images, replace assets, alter filenames, or change image interaction behavior.

## 13. Future Fit Check Ownership Guidance

Future Fit Check recommendations should reference Solution Objects rather than duplicating solution descriptions.

Fit Check should output or rank canonical Solution IDs, slugs, or equivalent stable references. It may use homeowner answers to select relevant Solutions, Packages, or Categories, but the displayed Solution description should come from the canonical Solution Object source.

Fit Check should not maintain separate long-form descriptions, media metadata, package composition, category mappings, or WNYHS Core explanations.

## 14. Future Catalog Generation Ownership Guidance

Future Catalog generation systems should consume Solution metadata as the primary source of truth.

Catalog generation may derive:

- Package rollups from Package references to Solutions.
- Category listings from Category references to Packages and Solutions.
- Homepage highlights from eligibility and featured flags.
- QR Landing highlights from QR Landing eligibility and conversion priority.
- Search index records from public content metadata.

Catalog generation should not create independent Solution descriptions or shadow catalogs.

## 15. Duplication Prevention Rules

What content should never be duplicated?

- Solutions should not be duplicated across Packages.
- Solutions should not be duplicated across Categories.
- Homepage should consume existing content rather than become a second catalog.
- QR Landing should consume existing content rather than become a second Homepage.
- Search should reference indexed content rather than maintain separate descriptions.
- Fit Check should reference Solution Objects rather than duplicate solution descriptions.
- Catalog generation should consume Solution metadata rather than create a separate Solution inventory.

What content should be inherited?

- Solution descriptions, categories, media metadata, WNYHS Core dependency, search terms, and related content should be inherited by Packages, Categories, Homepage, QR Landing, Search, Fit Check, and Catalog generation.
- Package included-solution references and package summaries should be inherited by Category, Homepage, and Search surfaces where Packages are displayed.
- Category names, descriptions, common situations, and search terms should be inherited by Homepage, Search, and QR Landing where category concepts are used.

What content should be manually authored?

- Solution Objects should manually author canonical Solution metadata.
- Packages should manually author package-specific curation and relationship metadata.
- Categories should manually author broad concern-area framing and discovery metadata.
- Homepage should manually author only page-level positioning, section framing, and CTA context.
- QR Landing should manually author only scan acknowledgment, conversion framing, and compact CTA context.
- Public Information Pages should manually author their own public page copy.

## 16. Recommended Repository Content Structure

Recommended future structure, subject to a separate implementation task:

| Content type | Recommended future owner | Consumers |
| --- | --- | --- |
| Solution content | `src/content/site/solutions.ts` or equivalent canonical Solution Object source | Solution pages, Packages, Categories, Homepage, QR Landing, Search, Fit Check, Catalog generation |
| Package content | `src/content/site/packages.ts` or equivalent canonical Package source | Package pages, Categories, Homepage, Search, Catalog generation |
| Category content | `src/content/site/categories.ts` or equivalent canonical Category source | Category pages, Homepage, QR Landing concepts, Search |
| Public Information content | Public page content modules or route-owned public content | Search, navigation, footer |
| Search metadata | Derived from canonical public content objects, with object-owned synonyms where needed | Search UI and result routing |
| Solution media | Canonical Solution media metadata plus approved public asset files | Solution pages, Packages, Categories, Homepage, QR Landing |
| Homepage framing | Homepage page/component content only where page-specific | Homepage only |
| QR Landing framing | QR Landing page/component content only where page-specific | QR Landing only |

This table is planning guidance only. It does not authorize creating, moving, editing, or deleting source files.

## 17. Implementation Readiness Checklist

Before implementation, a future task must confirm:

- The active task register entry explicitly authorizes implementation.
- Source, route, style, asset, data, and test files are named in the work order.
- The canonical Solution content owner is selected.
- The canonical Package content owner is selected.
- The canonical Category content owner is selected.
- Homepage consumes existing content and does not become a second catalog.
- QR Landing consumes existing content and does not become a second Homepage.
- Search indexes only approved public content types.
- Fit Check references Solution Objects rather than duplicate descriptions.
- Catalog generation consumes Solution metadata as source of truth.
- QR attribution and runtime preservation gates are listed if QR Landing files are touched.
- Protected-system exclusions are restated.
- No secrets or protected-system data are placed in content files.
- Build, route-level validation, Search result-scope validation, and no-duplication checks are defined for implementation.

## 18. Follow-Up Implementation Recommendation

Recommended follow-up task:

- **Task ID:** SITE-CONTENT-OWNER-ROUTING-IMPLEMENTATION-001
- **Type:** Bounded public-site content source implementation.
- **Dependency:** `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`
- **Recommended scope:** Implement canonical content owner modules for Solutions, Packages, Categories, Public Information Search metadata, and page-level consumers using the approved hierarchy.
- **Required exclusions unless separately authorized:** Homepage redesign implementation, QR Landing redesign implementation, Search UI implementation, QR attribution behavior changes, Fit Check implementation, catalog-generation implementation, route changes outside approved scope, protected systems, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, analytics, secrets, and unsupported asset changes.

This recommendation is planning only and does not authorize implementation.

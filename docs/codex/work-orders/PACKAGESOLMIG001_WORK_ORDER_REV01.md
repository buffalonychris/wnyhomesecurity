# PACKAGESOLMIG001 Work Order REV01

## Document control

- **Task ID:** PACKAGESOLMIG001
- **Title:** Package-to-Solution Terminology and Funnel Compatibility
- **Status:** EXECUTED — PENDING MANUAL PR REVIEW
- **Operator authorization date:** 2026-07-27
- **Branch:** `codex/packagesolmig001`
- **Base branch:** `main`
- **Base commit:** `ab147bd45df4fd612b7e3f588ad5a9a955ff1304`
- **Task type:** Bounded audit, reconciliation, migration planning, and documentation only
- **Runtime authority:** None
- **Merge authority:** None
- **Deployment authority:** None

## 1. Objective

Create the controlling package-to-solution terminology and funnel-compatibility authority for the replacement website. Audit production evidence read-only, classify material dependencies, compare three migration models, select one model, establish the Property Assessment destination, define a staged migration, and issue a concise HOMEIMPL001 handoff without changing production.

## 2. Authority

Follow the repository authority chain and the operator-provided PACKAGESOLMIG001 authorization. Preserve HOMEAUTH001, UXAUTH001, VISREF001, NAVIA001, COPYAUTH001, HOMEHERO001, CLAIMS001, Package/Solution/Offering owners, public-funnel and protected-runtime contracts, and all dedicated Stripe, payment, planner, quote, agreement, scheduling, CRM, analytics, attribution, QR, SEO, and route owners.

## 3. Exact tracked-file allowlist

Only these five tracked files may change:

1. `docs/site-architecture/PACKAGESOLMIG001_WNYHS_PACKAGE_TO_SOLUTION_MIGRATION_AND_FUNNEL_COMPATIBILITY_REV01.md`
2. `docs/codex/work-orders/PACKAGESOLMIG001_WORK_ORDER_REV01.md`
3. `docs/system/master-task-register.md`
4. `docs/DOCUMENT_CATALOG.md`
5. `docs/MARKDOWN_MANIFEST.md`

## 4. Required outputs

- material package-terminology and identifier inventory;
- classification across public, route, runtime, transaction, CRM, analytics, attribution, QR, SEO, administrative, documentation, historical, unrelated, and unknown uses;
- three migration models with one selected;
- public terminology and protected identifier rules;
- compatibility mapping contract;
- Property Assessment destination decision;
- pricing/package-presentation recommendation;
- route and SEO disposition;
- transaction protections;
- four-phase staged migration;
- concise HOMEIMPL001 handoff;
- current-schema MTR entry;
- catalog and Markdown manifest entries;
- one bounded commit; and
- one draft pull request.

## 5. Prohibited scope

Do not modify application source, routes, redirects, navigation, production copy, package pages, prices, planner, quote, agreement, payment, Stripe, HubSpot, CRM mappings, forms, scheduling, analytics, attribution, QR behavior, sitemap, SEO configuration, Cloudflare, environment variables, secrets, customer records, or production assets.

Do not perform global replacement, rename package IDs or transaction descriptions, modify historical records, implement adapters, merge, or deploy.

## 6. Selected decisions

- **Migration model:** Compatibility-layer migration.
- **Property Assessment destination:** `/discovery?vertical=home-security`.
- **Primary beta posture:** Solution-first public discovery; no Bronze/Silver/Gold package cards on the homepage.
- **Protected posture:** Preserve all legacy package/tier IDs and protected funnel behavior.
- **Legacy routes:** Preserve; omit package-first routes from future primary navigation only during separately authorized implementation.

## 7. Validation

Required:

- synchronized clean `main` containing merged HOMEHERO001;
- branch exactly `codex/packagesolmig001`;
- exactly five tracked paths changed and no deletions;
- material package occurrences classified;
- at least three models compared and one selected;
- public and protected terminology separated;
- Property Assessment destination, compatibility rules, pricing posture, route/SEO disposition, transaction safety, staged plan, and HOMEIMPL001 handoff present;
- valid repository-relative references;
- Document Catalog and Markdown Manifest synchronized;
- `git diff --check`;
- no source, configuration, route, redirect, ID, price, protected-system, external-system, merge, or deployment change;
- one bounded commit;
- draft PR only; and
- clean final worktree after commit.

## 8. Governed build decision

Application builds and unrelated tests are skipped. This task changes Markdown governance only. Repository evidence review, path/reference checks, exact allowlist validation, catalog/manifest consistency, and `git diff --check` are the proportional governed validation.

## 9. Completion state

Completion means the five-file documentation package is committed, pushed, and open as a draft PR for manual review. It does not authorize implementation, merge, or deployment.

# NAVIA001 Work Order REV01

## 1. Repository and controlling context

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Local path:** `C:\dev\wnyhomesecurity`
- **Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Base:** `main` at merged VISREF001 commit `ce46b7802bc24fe8b0ec5c167e8649334082ad52`

## 2. Task identity

- **Task ID:** NAVIA001
- **Task name:** Replacement-Site Navigation and Information Architecture Authority
- **Status:** Executed pending manual PR review
- **Category:** GOV
- **Task type:** Governance, information architecture, route planning, and documentation only
- **Operator authorization:** 2026-07-27

## 3. Workstream routing

- **Primary workstream:** Site Architecture
- **Related workstreams:** SEO; Search; Category; Solution; Package; Public Content; Visual System; Funnel; Accessibility; Analytics; Runtime; Project Governance
- **Protected systems:** Production routes/navigation/header/footer; sitemap/robots/SEO behavior; `/api/lead-signal`; HubSpot/CRM; Stripe/payment; scheduling; planner/quote/agreement; QR/attribution; Cloudflare; secrets; customer data; Google Drive

## 4. Read mode

**READ MODE: TARGETED PLUS COMPLETE ROUTE INVENTORY**

Load the authority chain, current context, OPS004/OPS005, HOMEAUTH001, UXAUTH001, VISREF001, SITEARCH001-005, current header/footer, route/navigation/search/SEO source inventories, funnel/claims/analytics/runtime protections, and catalog/manifest conventions. Inspect all production route declarations without modifying source.

## 5. Objective

Create the controlling future replacement-site navigation and information-architecture authority while preserving current production navigation, routes, redirects, funnels, analytics, attribution, and runtime behavior.

## 6. Authorization and prechecks

Execution was authorized by the attached NAVIA001 operator work order dated 2026-07-27.

Prechecks confirmed:

- repository identity and path;
- `main` at `ce46b7802bc24fe8b0ec5c167e8649334082ad52`;
- local `main` matched `origin/main`;
- clean working tree;
- HOMEAUTH001, UXAUTH001, and merged VISREF001 present;
- no existing NAVIA001 task or owner;
- `docs/site-architecture/` is the canonical owner location;
- existing production header/footer authority can remain current while NAVIA001 governs future replacement-site planning.

## 7. Required work

1. Create this bounded work order.
2. Create the NAVIA001 owner document.
3. Inspect and classify the complete current React route declaration inventory.
4. Define audiences, compare three architecture models, select one, and explain limited retained features.
5. Define public hierarchy, page families, six pillars, solution/outcome rules, desktop/mobile navigation, Solutions menu, conversion/support/education paths, deep-link orientation, breadcrumbs, contextual navigation, footer, taxonomy, legacy compatibility, package transition, accessibility, analytics, rejection, maps, and future tasks.
6. Preserve HOMEAUTH001, UXAUTH001, VISREF001, SITEARCH005, DESIGN002/token authority, production route/navigation/footer behavior, and protected systems.
7. Record NAVIA001 once in the MTR.
8. Add both new documents to the catalog and manifest.
9. Validate and deliver one bounded commit and draft PR.

## 8. Exact tracked-file allowlist

Only these five tracked files may change:

1. `docs/site-architecture/NAVIA001_WNYHS_REPLACEMENT_SITE_NAVIGATION_AND_INFORMATION_ARCHITECTURE_REV01.md`
2. `docs/codex/work-orders/NAVIA001_WORK_ORDER_REV01.md`
3. `docs/system/master-task-register.md`
4. `docs/DOCUMENT_CATALOG.md`
5. `docs/MARKDOWN_MANIFEST.md`

No deletion is authorized.

## 9. Reference-only inputs

All existing authority, source, route, navigation, SEO, sitemap, redirect, search, funnel, runtime, and external-system files are read-only.

## 10. Architecture decision boundary

NAVIA001 owns future replacement-site IA recommendations. It does not amend or implement current production header/footer, routes, redirects, indexing, content, analytics, funnels, or runtime.

COPYAUTH001 owns final labels and CTA wording. PACKAGESOLMIG001 owns terminology/runtime migration. Implementation tasks own code after approval.

## 11. Forbidden scope and protected systems

Do not modify React, Next.js, JavaScript, TypeScript, CSS, HTML, route declarations, redirects, menus, navigation, header/footer, breadcrumbs, pages, content, images, video, fonts, sitemap, robots, SEO policy, search index, forms, planner, quote, agreement, payment, Stripe, HubSpot, CRM, scheduling, analytics, attribution, QR behavior, Cloudflare, dependencies, environment variables, secrets, customer data, or Google Drive.

Do not create, rename, remove, redirect, consolidate, index, deploy, or merge a production route.

## 12. Change posture and build decision

Documentation-only and additive. No site version bump applies. The broad site build is skipped under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` because no source or runtime file changes.

## 13. Validation

- Confirm exactly five allowlisted tracked files and no deletions.
- Run unstaged and staged `git diff --check`.
- Validate all repository-relative Markdown references.
- Validate catalog and manifest entries.
- Confirm NAVIA001 appears once in the MTR.
- Confirm three architecture models and one selected model.
- Confirm nine audiences, page families, six-pillar order, solution/outcome rules, desktop/mobile models, Solutions menu, prospect/support/education paths, deep-link/breadcrumb/contextual/footer rules, route taxonomy, complete React route inventory classification, protected route relationships, accessibility, analytics recommendations, rejection criteria, ten textual maps, and future tasks.
- Confirm HOME-001 through HOME-010 and canonical pillar order unchanged.
- Confirm HOMEAUTH001, UXAUTH001, VISREF001, SITEARCH005, DESIGN002/token authority, production header/footer, and protected owners remain controlling.
- Confirm no production source, route, redirect, navigation, sitemap, robots, search, funnel, payment, scheduling, CRM, analytics, QR, Cloudflare, Drive, secret, customer-data, merge, or deployment change.
- Confirm clean worktree after commit.

## 14. Git and delivery

- Branch: `codex/navia001`
- One bounded commit.
- Commit message: `docs: define replacement-site navigation architecture`
- Push branch.
- Open one draft PR against `main`.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 15. Closeout

Report branch, commit, draft PR, exact files, authority and production sources reviewed, owners/conflicts, selected architecture, audiences, hierarchy, page families, pillar/solution/outcome rules, desktop/mobile/Solutions menu, prospect/support/education/deep-link/breadcrumb/contextual/footer authority, route taxonomy/inventory/protection/migration, package transition, accessibility, analytics, rejection, maps, open decisions, future tasks, validation, MTR status, protected systems, and Context Efficiency Report.

## 16. Stop and exit conditions

Stop for an unclean or unsynchronized base, missing HOMEAUTH001/UXAUTH001/VISREF001, higher-authority conflict, irreconcilable duplicate owner, unclear protected route ownership, ambiguous owner path, materially larger file scope, implementation need, protected-system risk, unsupported claims, or destructive work.

Exit only when the five-file package validates, one bounded commit is pushed, one draft PR is open, and nothing is merged or deployed.

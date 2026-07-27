# VISREF001 Work Order REV01

## 1. Repository and controlling context

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Local path:** `C:\dev\wnyhomesecurity`
- **Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Base:** `main` at merged UXAUTH001 commit `22b32d8fc59ab6c7fde428f2e764a97fedc05097`

## 2. Task identity

- **Task ID:** VISREF001
- **Task name:** Visual Reference, Concept Development, and Comparative Design Authority
- **Status:** Executed pending manual PR review
- **Category:** GOV
- **Task type:** Governance, design analysis, and documentation only
- **Operator authorization:** 2026-07-27

## 3. Workstream routing

- **Primary workstream:** Visual System
- **Related workstreams:** Site Architecture; Public Content System; Category System; Solution System; Funnel; Accessibility; Analytics; Project Governance
- **Protected systems:** Production source/assets; routes/navigation; `/api/lead-signal`; HubSpot/CRM; Stripe/payment; scheduling; Fit Check/planner/quote/agreement; analytics; Cloudflare; secrets; customer data; Google Drive

## 4. Read mode

**READ MODE: TARGETED**

Load the authority chain, HOMEAUTH001, UXAUTH001, current visual/token/brand/page standards, claims and funnel owners, WEBBETADISC001 decisions, catalog/manifest conventions, and execution standard. Search for duplicate visual-reference and concept owners before creating authority.

## 5. Objective

Create the controlling visual-reference and concept-development authority for the replacement website, compare at least three meaningfully different directions, select one primary direction, and define future visual intake and review rules without producing or implementing a design.

## 6. Authorization and prechecks

Execution was authorized by the attached VISREF001 operator work order dated 2026-07-27.

Required prechecks:

- repository identity confirmed;
- current branch was `main`;
- local `main` matched `origin/main`;
- working tree was clean;
- UXAUTH001 PR #543 was merged and present on `main`;
- HOMEAUTH001 was present;
- no competing replacement-site concept owner existed;
- `docs/brand/` was the smallest valid owner location.

## 7. Required work

1. Create this bounded work order.
2. Create the visual-reference and concept authority.
3. Compare three concepts across emotional, architectural, technology, theme, image, material, type, component, dashboard, motion, mobile, conversion, accessibility, performance, and brand criteria.
4. Select one primary concept and identify only compatible supporting qualities.
5. Define visual language, photography, generated-image evaluation, reference intake, homepage roles, hero, themes, interactions, navigation appearance, mobile, dashboard, motion, trust, rejection, scorecard, and future review package.
6. Preserve HOMEAUTH001 order, IDs, pillar order, current hero, dedicated owners, semantic tokens, and protected systems.
7. Record VISREF001 once in the MTR.
8. Add both new documents to the catalog and manifest.
9. Validate and deliver one bounded commit and draft PR.

## 8. Exact tracked-file allowlist

Only these five tracked files may change:

1. `docs/brand/VISREF001_WNYHS_VISUAL_REFERENCE_AND_CONCEPT_AUTHORITY_REV01.md`
2. `docs/codex/work-orders/VISREF001_WORK_ORDER_REV01.md`
3. `docs/system/master-task-register.md`
4. `docs/DOCUMENT_CATALOG.md`
5. `docs/MARKDOWN_MANIFEST.md`

No deletion is authorized.

## 9. Reference-only inputs

Existing authority, evidence, and owner documents are read-only. Production source, assets, routes, runtime contracts, visual references, connected services, and external systems are reference-only or forbidden.

## 10. Forbidden scope

Do not modify React, JavaScript, TypeScript, CSS, HTML, routes, redirects, navigation, header/footer components, assets, images, videos, fonts, public copy, forms, planner, quote, agreement, payment, Stripe, HubSpot, CRM, scheduling, analytics events, Cloudflare, deployment configuration, environment variables, secrets, customer data, or Google Drive.

Do not create production assets, generated images, mockups, page implementations, navigation architecture, final copy, another owner, a merge, or deployment.

## 11. Change posture and version

Documentation-only and additive. No deployed-site version bump applies.

## 12. Validation

- Confirm exactly five allowlisted tracked files changed and no deletions.
- Run `git diff --check` and staged equivalent.
- Validate repository-relative Markdown references.
- Validate catalog and manifest paths.
- Confirm VISREF001 appears exactly once in the MTR.
- Confirm three distinct concepts and one selected primary direction.
- Confirm HOME-001 through HOME-010 and exact pillar order remain unchanged.
- Confirm photography, generated-image, reference-intake, hero, theme, mobile, dashboard, motion, conversion/trust, rejection, and scorecard authority.
- Confirm semantic-token-only implementation posture.
- Confirm current `HomePageHero.png`, navigation, dedicated owners, claims, funnels, and runtime boundaries remain unchanged.
- Confirm no production, runtime, asset, route, navigation, funnel, payment, scheduling, CRM, analytics, Cloudflare, Drive, secret, customer-data, merge, or deployment change.
- Record the governed docs-only build skip under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`.
- Confirm clean worktree after commit.

## 13. Git and delivery

- Branch: `codex/visref001`
- One bounded commit.
- Commit message: `docs: define replacement-site visual concept authority`
- Push branch.
- Open one draft PR against `main`.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 14. Closeout

Report branch, commit, draft PR, exact files, authority reviewed, selected concept, comparison, visual/reference/image rules, homepage/hero/theme/mobile/dashboard posture, future gates, validation, MTR status, protected systems, no-merge/no-deploy confirmation, and Context Efficiency Report.

## 15. Stop and exit conditions

Stop for an unclean or unsynchronized base, missing UXAUTH001/HOMEAUTH001, higher-authority conflict, duplicate owner, ambiguous owner path, materially larger scope, implementation need, claims conflict, protected-system risk, or destructive work.

Exit only when the five-file package validates, one bounded commit is pushed, one draft PR is open, and nothing is merged or deployed.

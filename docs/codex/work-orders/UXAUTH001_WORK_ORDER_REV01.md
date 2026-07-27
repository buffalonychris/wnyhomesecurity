# UXAUTH001 Work Order REV01

## 1. Repository and controlling context

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Local path:** `C:\dev\wnyhomesecurity`
- **Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Base:** `main` at merged HOMEAUTH001 commit `59081bc714f9f17026c8945830e30466d04fad37`

## 2. Task identity

- **Task ID:** UXAUTH001
- **Task name:** Replacement Website Digital Experience, Visual, Interaction, and Conversion Authority
- **Status:** Executed pending manual PR review
- **Category:** GOV
- **Task type:** Governance, design-authority, and documentation only
- **Operator authorization:** 2026-07-27

## 3. Workstream routing

- **Primary workstream:** Visual System
- **Related workstreams:** Site Architecture; Public Content System; Category System; Solution System; Funnel; Accessibility; Analytics; Project Governance
- **Protected systems:** Production source and assets; routes/navigation; `/api/lead-signal`; HubSpot/CRM; Stripe/payment; scheduling; Fit Check/planner/quote/agreement; analytics; Cloudflare; secrets; customer data; Google Drive

## 4. Read mode

**READ MODE: TARGETED**

Search exact task IDs, owner paths, headings, and current standards first. Full reads are permitted for HOMEAUTH001 and focused visual, claims, funnel, and WEBBETADISC001 owner documents because this task creates a cross-site owner and must reconcile their complete experience boundaries.

## 5. Objective

Create the controlling creative and experience authority for the WNY Home Security replacement beta website without changing production or implementing the design.

## 6. Authorization and prechecks

Execution was authorized by the attached UXAUTH001 operator work order dated 2026-07-27.

Required prechecks:

- repository identity confirmed;
- current branch was `main`;
- local `main` matched `origin/main`;
- working tree was clean;
- HOMEAUTH001 PR #542 was merged and its authority was present on `main`;
- no competing digital-experience owner existed;
- `docs/brand/` was confirmed as the smallest valid owner location.

## 7. Required authority and owner documents

Required reads include:

- repository system authority and current context;
- MTR and canonical Codex execution standard;
- HOMEAUTH001 owner, reconciliation report, and work order;
- page layout, header/footer, and brand asset standards;
- DESIGN002 REV02 and the Page Token Compliance Gate;
- UX001 and PACKAGE001 status;
- SITEARCH005;
- CLAIMS001;
- public and QR funnel standards;
- WEBBETADISC001 charter, requirements, decisions, build-location, and interview framework;
- Document Catalog and Markdown Manifest conventions.

## 8. Required work

1. Create this bounded work order.
2. Create the digital-experience and conversion authority.
3. Define visitor experience, visual quality, photography/generated imagery, hero, typography, themes, CTA/state behavior, navigation experience, mobile navigation, dashboard presentation, motion, transitions, responsiveness, conversion, trust, accessibility, performance, measurement, rejection criteria, and future gates.
4. Preserve HOMEAUTH001 hierarchy and stable IDs.
5. Record UXAUTH001 once in the MTR.
6. Add the two new documents to the Document Catalog and Markdown Manifest.
7. Validate and deliver one bounded commit and draft PR.

## 9. Exact tracked-file allowlist

Only these five tracked files may change:

1. `docs/brand/UXAUTH001_WNYHS_DIGITAL_EXPERIENCE_AND_CONVERSION_AUTHORITY_REV01.md`
2. `docs/codex/work-orders/UXAUTH001_WORK_ORDER_REV01.md`
3. `docs/system/master-task-register.md`
4. `docs/DOCUMENT_CATALOG.md`
5. `docs/MARKDOWN_MANIFEST.md`

No deletion is authorized.

## 10. Reference-only inputs

All authority and owner documents named in Section 7 are read-only. Production source, assets, routes, runtime contracts, connected services, and external systems are reference-only or forbidden.

## 11. Forbidden scope

Do not modify React, JavaScript, TypeScript, CSS, HTML, production routes, redirects, navigation, header/footer components, hero assets, images, video, fonts, final public copy, forms, planner, quote, agreement, payment, Stripe, HubSpot, CRM, scheduling, analytics events, Cloudflare, deployment configuration, environment variables, secrets, customer data, Google Drive, or Google Drive permissions.

Do not create mockups, final production assets, final production copy, implementation architecture, a beta scaffold, another owner, a merge, or a deployment.

## 12. Change posture and version

Documentation-only and additive. No deployed-site version bump applies because no production source or deployment artifact changes.

## 13. Validation

- Tier: Governance / docs-only.
- Confirm exactly five allowlisted tracked files changed.
- Confirm no deletions.
- Run `git diff --check` and staged equivalent.
- Validate every repository-relative Markdown reference.
- Validate Document Catalog and Markdown Manifest entries and paths.
- Confirm UXAUTH001 appears exactly once in the MTR.
- Confirm HOME-001 through HOME-010 and the exact SITEARCH005 pillar order remain unchanged.
- Confirm solution-first positioning and qualified claims.
- Confirm accessibility, responsive behavior, mobile navigation, conversion, performance, themes, motion, and rejection criteria are present.
- Confirm no package-first public authority is created.
- Confirm no production, runtime, asset, navigation, route, funnel, payment, scheduling, CRM, analytics, Cloudflare, Drive, secret, customer-data, merge, or deployment change.
- Governed docs-only build skip under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`.
- Confirm clean worktree after commit.

## 14. Git and delivery

- Branch: `codex/uxauth001`
- One bounded commit.
- Commit message: `docs: define replacement-site digital experience authority`
- Push branch.
- Open one draft PR against `main`.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 15. Closeout

Report branch, commit, draft PR, exact files, authority reviewed, conflicts and disposition, owner document, major experience decisions, future task gates, validation, MTR status, protected systems, no-merge/no-deploy confirmation, and Context Efficiency Report.

## 16. Stop and exit conditions

Stop for an unclean base, unsynchronized main, missing HOMEAUTH001, higher-authority conflict, duplicate owner, ambiguous owner path, materially larger file scope, need for implementation, protected-system risk, unsupported claims, or destructive work.

Exit only when the five-file package validates, one bounded commit is pushed, one draft PR is open, and nothing is merged or deployed.

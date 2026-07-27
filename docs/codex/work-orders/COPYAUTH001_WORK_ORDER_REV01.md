# COPYAUTH001 Work Order REV01

## 1. Repository and controlling context

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Local path:** `C:\dev\wnyhomesecurity`
- **Controlling context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Base:** `main` at merged NAVIA001 commit `79f1289247f21d35d47662027260a0f7c70cac54`

## 2. Task identity

- **Task ID:** COPYAUTH001
- **Task name:** Sales Messaging and Conversion Copy Authority
- **Status:** Executed pending manual PR review
- **Category:** COPY / GOV
- **Task type:** Public messaging, conversion-copy authority, claims reconciliation, and documentation only
- **Operator authorization:** 2026-07-27

## 3. Workstream routing

- **Primary workstream:** Public Content System
- **Related workstreams:** Site Architecture; Visual System; Category System; Solution System; Funnel; Claims; Support; SEO; Accessibility; Project Governance
- **Protected systems:** Production pages and copy; routes/navigation/header/footer; `/api/lead-signal`; HubSpot/CRM; planner/quote/agreement; Stripe/payment; scheduling; analytics/attribution/QR; Cloudflare; secrets; customer data; Google Drive

## 4. Read mode

**READ MODE: TARGETED AUTHORITY AND COPY RECONCILIATION**

Load the repository authority chain, current context, OPS004/OPS005, HOMEAUTH001, UXAUTH001, VISREF001, NAVIA001, SITEARCH005, the Business Bible, claims and customer-language standards, page-layout and public-funnel standards, current support/handoff owners, current production copy for analysis only, catalog/manifest conventions, and the current MTR schema.

## 5. Objective

Create the controlling public messaging and conversion-copy authority for the replacement beta website. Supply implementation-ready homepage, hero, pillar, Solutions overview, differentiation, process, ownership/privacy/local-control, dashboard, outcome, expansion, education, support, CTA, form, trust, terminology, and claims language without changing production.

## 6. Authorization and prechecks

The attached COPYAUTH001 operator authorization dated 2026-07-27 explicitly created this bounded task.

Prechecks confirmed:

- repository identity and path;
- current branch `main` before task branching;
- local `main` matched `origin/main`;
- clean working tree;
- merged NAVIA001 PR #545 and base commit `79f1289247f21d35d47662027260a0f7c70cac54`;
- HOMEAUTH001, UXAUTH001, VISREF001, and NAVIA001 present;
- Public Content System is the primary workstream;
- `docs/brand/` is the approved owner location;
- no production or protected-system change is required.

## 7. Required work

1. Create this bounded work order.
2. Create the COPYAUTH001 owner document.
3. Reconcile existing business doctrine, copy, claims, IA, experience, visual, funnel, and support owners.
4. Compare three materially different messaging directions and select one.
5. Evaluate at least five hero headline options and select one primary copy set.
6. Create implementation-ready copy for HOME-001 through HOME-010 in the locked order.
7. Create complete six-pillar copy in the locked SITEARCH005 order.
8. Define Solutions overview, Why W. N. Y., process, ownership/privacy/local control, unified dashboard, outcomes, expansion, education, existing-customer, CTA, form, trust, terminology, claims, and rejection authority.
9. Record COPYAUTH001 once in the MTR.
10. Add both new documents to the Document Catalog and Markdown Manifest.
11. Validate and deliver one bounded commit and one draft PR.

## 8. Exact tracked-file allowlist

Only these five tracked files may change:

1. `docs/brand/COPYAUTH001_WNYHS_SALES_MESSAGING_AND_CONVERSION_COPY_AUTHORITY_REV01.md`
2. `docs/codex/work-orders/COPYAUTH001_WORK_ORDER_REV01.md`
3. `docs/system/master-task-register.md`
4. `docs/DOCUMENT_CATALOG.md`
5. `docs/MARKDOWN_MANIFEST.md`

No deletion is authorized.

## 9. Ownership and conflict boundary

COPYAUTH001 owns future replacement-site public messaging and CTA wording. It does not displace:

- HOMEAUTH001 page order and stable IDs;
- UXAUTH001 experience and conversion behavior;
- VISREF001 visual concept;
- NAVIA001 IA, navigation roles, and destinations;
- SITEARCH005 pillar names/order;
- CLAIMS001 restrictions;
- dedicated funnel, runtime, support, privacy, legal, pricing, package, technical, and implementation owners.

The customer-language standard’s current-production `Request a Callback` rule remains valid for production. COPYAUTH001 approves `Request a Property Assessment` for the future replacement site because NAVIA001 assigns assessment as the primary conversion role. A later implementation task must verify the destination truth and preserve protected runtime behavior before deployment.

## 10. Forbidden scope

Do not modify React, Next.js, JavaScript, TypeScript, CSS, HTML, production copy, routes, redirects, navigation, header/footer, pages, forms, planner, quote, agreement, payment, Stripe, HubSpot, CRM, scheduling, analytics, attribution, QR behavior, Cloudflare, deployment files, environment variables, secrets, customer data, or Google Drive.

Do not implement copy, create production routes, generate production imagery, weaken claims restrictions, merge, enable auto-merge, mark the PR ready, or deploy.

## 11. Change posture and build decision

Documentation-only and additive. No site version bump applies. The broad site build is skipped under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` because no source or runtime file changes.

## 12. Validation

- Confirm exactly five allowlisted tracked files and no deletions.
- Run unstaged and staged `git diff --check`.
- Validate repository-relative Markdown references.
- Validate catalog and manifest entries.
- Confirm COPYAUTH001 appears exactly once in the MTR.
- Confirm HOME-001 through HOME-010 remain in the locked order.
- Confirm the six pillars remain in the exact locked order.
- Confirm Pillar-First Solution Architecture remains selected.
- Confirm three messaging directions and one selected direction.
- Confirm five hero options, one primary set, and limited alternates.
- Confirm implementation-ready homepage and six-pillar copy.
- Confirm terminology, CTA hierarchy, trust, form reassurance, and claims matrix.
- Confirm ownership, privacy, local-control, dashboard, process, education, support, and expansion language.
- Confirm forbidden claims remain forbidden.
- Confirm no production/protected/external-system change.
- Confirm governed documentation-only build skip.
- Confirm clean worktree after commit.

## 13. Git and delivery

- Branch: `codex/copyauth001`
- One bounded commit.
- Commit message: `docs: define replacement-site copy authority`
- Push branch.
- Open one draft PR against `main`.
- Do not merge, enable auto-merge, mark ready, or deploy.

## 14. Future task gates

COPYAUTH001 informs but does not activate:

1. HOMEHERO001 — homepage hero visual development and approval.
2. PACKAGESOLMIG001 — package-to-solution terminology and runtime compatibility.
3. HOMEIMPL001 — governed homepage implementation.
4. SITEIMPL001 — full replacement-site implementation.
5. Future navigation implementation.
6. Future pillar and solution-page implementation.
7. Future educational-content work.
8. Future conversion and usability testing.

## 15. Stop and exit conditions

Stop for an unclean or unsynchronized base, missing prerequisite, higher-authority conflict, unsupported fact, unclear owner, materially expanded file scope, implementation need, protected-system risk, destructive work, or a public claim that cannot be qualified safely.

Exit only when the five-file package validates, one bounded commit is pushed, one draft PR is open, and nothing is merged or deployed.

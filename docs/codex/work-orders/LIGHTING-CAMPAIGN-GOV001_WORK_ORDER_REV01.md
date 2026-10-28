# LIGHTING-CAMPAIGN-GOV001 Work Order REV01

## 1. Repository and controlling context

- **Repository:** `buffalonychris/wnyhomesecurity`
- **Local path:** `C:\dev\wnyhomesecurity`
- **Base branch:** `main`
- **Controlling context:** `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`
- **Controlling authorization:** Operator-created bounded task `LIGHTING-CAMPAIGN-GOV001`, authorized in the October 27, 2026 dispatch under the current context's permitted governance and bounded business-development task creation rules.
- **Task relationship:** This repository-owned work order is the controlling bounded task definition for this run. It does not authorize the later landing-page implementation.

## 2. Task identity

- **Task ID:** `LIGHTING-CAMPAIGN-GOV001`
- **Task name:** Permanent Outdoor Lighting Campaign Governance Reconciliation
- **Status:** `ACTIVE` — prompt-created task permitted by higher governance
- **Category:** `GOV`
- **Task type:** Docs-only governance

## 3. Workstream routing

- **Primary workstream:** Project Governance
- **Related workstreams:** Category System; Solution System; Catalog System; Public Content System; Site Architecture; Fit Check System; Estimate / Quote System; Image System; Visual System
- **Current-state source:** `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`, limited to applicable workstream sections
- **Routing constraint:** Related workstreams constrain ownership and validation only. They do not authorize source, route, runtime, asset, visual, quote-engine, or protected-system implementation.

## 4. Read mode

`READ MODE: TARGETED`

Search exact task IDs, headings, owner sections, status fields, and cited source paths first. Do not broadly load the Master Task Register, catalogs, manifests, audits, inventories, or historical documents. Read a whole file only when it is small or the complete file is the authorized reconciliation target.

## 5. Reasoning posture

`REASONING POSTURE: ADAPTIVE`

- Precheck: verify repository identity, clean synchronized `main`, task absence, current context, registered workstream, source access, and owner routing.
- Reconciliation: apply only the approved decisions to the exact existing owners named below.
- Validation: use deterministic documentation, scope, citation, protected-boundary, and diff checks.

## 6. Execution posture

`EXECUTION POSTURE: DIRECT`

Repository reads, surgical documentation edits, Git validation, commit, push, and draft-PR creation are directly executable. Operator review, merge, future implementation approval, and deployment remain operator-controlled handoffs.

## 7. Objective

Promote the operator-approved permanent outdoor lighting campaign decisions into existing repository governance owners while preserving the canonical Home Lighting category, `HL-008` Permanent Exterior Lighting solution, standard website funnel, shared back-office processes, and all protected systems. Record a narrowly bounded future implementation handoff without implementing a page, route, UI, runtime, pricing engine, or deployment in this run.

## 8. Authorization and required precheck

Before governance edits:

1. Confirm repository identity is `buffalonychris/wnyhomesecurity` and the resolved checkout is `C:\Dev\wnyhomesecurity`.
2. Fetch `origin/main`; confirm local `main` equals `origin/main` and the working tree/index are clean.
3. Confirm `docs/system/master-task-register.md` exists, is populated, and is readable. Stop rather than recreate or replace it if empty, missing, or inaccessible.
4. Read the current authority chain and exact operational context.
5. Confirm `Project Governance` is an exact OPS004 workstream and inspect applicable OPS005 status sections.
6. Confirm no existing `LIGHTING-CAMPAIGN-GOV001` task, branch, or PR exists.
7. Read the primary and supporting Google Drive sources. Stop if the sources cannot be read.
8. Inspect the exact owner sections named in the routing matrix and stop if a higher-authority conflict cannot be reconciled by this bounded task.

## 9. Required authority and owner documents

### Authority and execution

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- targeted Master Task Register governance/schema/current task sections
- `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV02.md`
- applicable sections of `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`

### Existing decision owners

- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`
- `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
- `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`
- `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
- `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`

### Reference-only owner boundaries

- `docs/specs/main_funnel_contract_rev01.md`
- `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`
- `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`
- `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`
- `docs/quotesystem/IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md`
- `docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md`
- `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`

## 10. Operator-approved Owner Routing Matrix

| Approved concept | Current canonical owner | Exact target file | Exact section or behavior | Action | Why this owner is correct | Why not another plausible owner | Authority conflict | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bounded task authority and delivery | Project Governance | This work order; `docs/system/master-task-register.md` | Work order plus one exact current-schema task record | CREATE / MODIFY | Codex work-order and MTR mechanics are Project Governance-owned. | Capability owners cannot create execution authority. | NO | HIGH |
| Preserve Home Lighting and allow one narrow campaign exception | Category System | `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md` | Home Lighting/public-marketing duplicate-prevention relationship | MODIFY | CATEGORY001 owns canonical category identity and marketing-to-category routing. | A route owner cannot redefine category relationships. | NO — bounded exception reconciles the existing default rule | HIGH |
| Separate direct-link campaign entry point under existing domain | Site Architecture | `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md` | Campaign route decision | MODIFY | SITEARCH002 already owns campaign/direct-entry route classification. | Category and marketing owners do not own route class/canonical relationship. | NO | HIGH |
| `HL-008` remains the permanent exterior lighting solution owner; all Govee outdoor families are business offerings | Solution/Offering System | `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`; `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md` | Vault/custom offer posture and exact `HL-008` solution record | MODIFY | OFFERING001 owns public/custom offer visibility; the arsenal owns the current `HL-008` record. | Hardware status alone cannot authorize a business offering or duplicate the solution. | NO | HIGH |
| Preserve model-specific technical qualification | Hardware System | `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md` | Permanent exterior lighting Premium/Custom row and qualification note | MODIFY | HARDWARE001 owns model/SKU technical status and BOM eligibility. | Business offering approval must not silently promote hardware status. | NO | HIGH |
| Direct-link/email-only acquisition exception; shared process reuse after inquiry | Public Content / Marketing | `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md` | Campaign acquisition and back-office reuse addendum | MODIFY | This spec owns public solution marketing, CTA, attribution, and intake posture. | Funnel/runtime owners remain protected and are not being reimplemented. | NO | HIGH |
| Email-only campaign acquisition does not replace the standard funnel | Fit Check / Public Funnel | `docs/specs/public_funnel_standards_rev01.md` | Narrow permanent outdoor lighting campaign exception | MODIFY | This locked standard owns public funnel and CTA discipline. | The marketing spec cannot independently override funnel defaults. | NO — explicit bounded exception preserves the default funnel | HIGH |
| AI property previews, track/finish language, and certification/exclusivity limits | Claims System | `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md` | Home Lighting claims and required disclosures | MODIFY | CLAIMS001 owns customer-facing claim posture and hardware-status alignment. | Visual/asset owners govern presentation/provenance, not truth claims. | NO | HIGH |
| Interim 40% gross margin on qualifying materials, with labor and other costs separate and no public pricing | Package/BOM Pricing Inputs | `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md` | Pricing input schema / custom quote rules | MODIFY | PACKAGEBOM001 owns internal BOM and pricing-input structure while explicitly separating public/final pricing. | The Quote Workspace implementation record documents manual totals but does not own business margin policy or authorize an engine. | NO | HIGH |
| Existing visual and asset rules remain binding for later implementation | Visual System / Brand Asset System | Existing visual/brand owner files listed as reference-only | Future page/preview asset presentation and provenance | REFERENCE ONLY | These owners constrain a later page task. | No visual or asset implementation is authorized now. | NO | HIGH |
| Existing quote, inventory, CRM, payment, scheduling, email, and runtime processes remain reused and protected | Estimate / Quote and protected systems | Existing quote/inventory/runtime owners listed as reference-only | Reuse boundary only | REFERENCE ONLY | Existing owners already govern the shared processes. | This campaign must not create parallel systems or mutate protected owners. | NO | HIGH |
| Catalog/manifest traceability for the new work order | Project Governance | `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md` | One exact work-order entry in each index | MODIFY | Current repo bookkeeping indexes repository documentation. | Decision owners do not own documentation discovery indexes. | NO | HIGH |

## 11. Primary and supporting business sources

Primary approved work order:

- [07 — Approved Campaign Governance Promotion Work Order REV01](https://docs.google.com/document/d/12vyQAroE8KxJaiLGNO5JORN64Ni9Bnlf0Dg_BhvYOnM/edit)

Supporting approved decisions folder:

- [WNY Home Security Lighting Solutions](https://drive.google.com/drive/folders/1yUBoZ6N8DM9eK1AJLQhRCqXa5HXRhD7w)
- [01 — Lighting Solutions Decision Register REV01](https://docs.google.com/document/d/1_FiD-n4xkshe8sI0y-p7hHi8SyYp0V4tHMIBEvPhxVM/edit)
- [02 — Lighting Installation Landing Page Copy REV01](https://docs.google.com/document/d/13eXl98Ole_QvL0hJYMobDuXy8_KJ-s8Nev3yDjtUVzE/edit)
- [03 — LIGHTING-LANDING-001 Implementation Brief REV01](https://docs.google.com/document/d/1ZlepwuGasX0-D-8JWBGcVgyNkh0-oiYFXmQNACkrC-E/edit)
- [04 — Launch Claims and QA Checklist REV01](https://docs.google.com/document/d/1V_pbNxDrO4X64w0t1qNQk0c-7O3vP7CJI6uaJlhRTBo/edit)
- [05 — Approved Campaign Exception and Back-Office Reuse REV01](https://docs.google.com/document/d/1XzHOqtOyOkM5CC4gHmQkaRdfNX2Rm249eOsYlH5GcXE/edit)
- [06 — Outdoor Lighting Historical Pricing Recovery and Interim 40 Percent Materials Margin REV01](https://docs.google.com/document/d/1HzQaWA-3QnWFmWE4-ncQABKdzYJeSLLE2x19H2YLpdI/edit)

The Drive documents are approved business inputs, not repository implementation authority. This work order and the exact MTR task record promote only the decisions named here.

## 12. Required work

1. Create this work order before any governance-owner edit.
2. Add one exact `ACTIVE` current-schema `LIGHTING-CAMPAIGN-GOV001` MTR record without modifying unrelated entries.
3. Add a narrow permanent outdoor lighting campaign exception while preserving the canonical Home Lighting category, `HL-008`, and default category-marketing routing.
4. Record the campaign as a separate direct-link entry point under the existing domain, with route/indexing/navigation implementation deferred to `LIGHTING-LANDING-001`.
5. Record all Govee outdoor lighting families as business-approved offer families under `HL-008`, while preserving model/SKU-specific technical qualification, availability, compatibility, and BOM gates.
6. Permit optional compatible permanent track/channel and color-keyed finishes without exclusivity, partnership, accreditation, or certification claims.
7. Govern AI property previews as illustrative concepts based on actual property photos, available measurements, and best verified manufacturer specifications, with material variance and field-verification disclosures.
8. Record direct-link/email-only acquisition as the only campaign exception. All post-inquiry customer/property records, BOM, pricing, quoting, purchasing, fulfillment, installation, payment, scheduling, handoff, and support reuse current WNYHS processes and maturity limitations.
9. Record the interim internal materials rule: qualifying materials selling price equals validated qualifying materials cost divided by `0.60`, representing a 40% gross margin. Keep labor, travel, equipment, access/lift, preview/design services, tax, discounts, and other installation costs separate. Do not publish costs, margin, internal prices, or per-foot pricing.
10. Add one catalog and one manifest entry for this work order.
11. Define `LIGHTING-LANDING-001` only as the next separately bounded implementation task; do not activate, register, or execute it in this run.

## 13. Allowed scope and exact target files

Only these files may change:

1. `docs/codex/work-orders/LIGHTING-CAMPAIGN-GOV001_WORK_ORDER_REV01.md`
2. `docs/system/master-task-register.md`
3. `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
4. `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
5. `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`
6. `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
7. `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`
8. `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
9. `docs/specs/public_funnel_standards_rev01.md`
10. `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`
11. `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`
12. `docs/DOCUMENT_CATALOG.md`
13. `docs/MARKDOWN_MANIFEST.md`

Changes must be additive and surgical. Existing statuses, historical figures, unrelated records, and owner content remain unchanged except for the exact campaign reconciliation additions.

## 14. Reference-only inputs

- The Google Drive sources in Section 11.
- Authority, execution, status, visual, brand, funnel-contract, solution-page, quote-system, inventory, and implementation documents listed in Sections 9 and 10 but not included in the target-file allowlist.
- Current source/routes may be searched only if needed to prove a future-task collision or boundary; no source file may be edited.

## 15. Forbidden scope and protected systems

Forbidden:

- React, TypeScript, JavaScript, CSS, source, route, navigation, sitemap, robots, SEO implementation, page, component, asset, image, or visual implementation.
- Landing-page implementation or registration of an implementation task as `ACTIVE`.
- Cloudflare configuration, deployment, DNS, environment, dependency, package-lock, secret, or external-system mutation.
- HubSpot/CRM schema or runtime, `/api/lead-signal`, `requestId`, Stripe/payment, scheduling/calendar, Resend/email, quote runtime, pricing engine, planner, agreement, purchasing, inventory runtime, fulfillment runtime, customer records, or customer data.
- Public price cards, per-foot pricing, vendor costs, internal material prices, margin assumptions, BOMs, or historical scenario figures.
- Claims of monitoring, dispatch, response, guarantees, universal compatibility, manufacturer partnership, PermTrack exclusivity, or installer certification/accreditation.
- Historical deletion, owner supersession, broad cleanup, unrelated MTR change, merge, ready-for-review transition, or deployment.

Protected systems remain untouched: HubSpot/CRM; `/api/lead-signal`; Lead Signal/requestId; Stripe/payment/webhooks; scheduling/calendar authority; Resend/email runtime; Cloudflare/runtime/environment/DNS; quote-agreement-payment-schedule chain; Precision Planner; customer data; secrets; production routes and navigation.

## 16. Change posture and version rule

- **Posture:** Additive, surgical, docs-only governance.
- **Destructive changes:** None authorized.
- **Site version:** No version bump. No deployed-site source or configuration changes are authorized.
- **Build:** Governed skip under `docs/codex/CODEX_EXECUTION_STANDARD_REV01.md` Section 16 because only documentation changes are authorized.

## 17. Validation

- **Tier:** Governance / docs-only
- Confirm changed files exactly match the 13-file allowlist.
- Confirm no unexpected deletion: `git diff --diff-filter=D --name-only` returns empty.
- Confirm only one exact `LIGHTING-CAMPAIGN-GOV001` task record and one work order exist.
- Confirm the MTR remains populated and unrelated content is preserved; inspect the focused task hunk.
- Confirm `Project Governance` is the exact OPS004 primary workstream.
- Confirm every promoted decision is traceable to the primary/supporting source URLs.
- Confirm `HL-008` remains the solution owner and Home Lighting remains canonical.
- Confirm all Govee outdoor families are business-approved offerings without SKU/model technical approval, stocking, purchase, universal compatibility, or Home Assistant claims.
- Confirm the track/finish language disclaims PermTrack exclusivity, partnership, certification, and universal compatibility.
- Confirm AI previews are labeled illustrative and require actual property imagery, best verified manufacturer specifications, and field verification.
- Confirm the direct-link/email-only exception is limited to acquisition and does not modify the standard funnel or post-inquiry systems.
- Confirm the exact internal materials formula is `materials cost / 0.60`, is identified as 40% gross margin rather than markup, and keeps labor/other costs separate.
- Confirm no public per-foot pricing, historical price cards, material prices, vendor costs, or margin assumptions were promoted to public-copy owners.
- Confirm protected systems, source, routes, runtime, assets, dependencies, secrets, merge, and deployment are untouched.
- Verify repository-relative Markdown links and exact Google source URLs.
- Run `git diff --check` and inspect `git diff --stat`, `git diff --name-only`, and focused diffs for every changed owner.
- Do not run `npm run build`; record the governed docs-only skip.

## 18. Git and delivery

- Branch: `task/lighting-campaign-gov001`
- Base: clean synchronized `main`
- Use one dedicated task branch and one bounded commit.
- Push the task branch and open one draft PR against `main`.
- Do not merge, enable auto-merge, mark ready for review, or deploy.
- Leave the working tree clean after commit/push and verify draft PR file scope.

## 19. Required closeout

Report:

- controlling task and current operational context;
- created work-order path;
- authority and Owner Routing Matrix outcome;
- files changed and purpose;
- exact validation results and governed build skip;
- protected systems untouched;
- branch, commit, and draft PR URL;
- no-merge/no-deploy confirmation;
- unresolved blockers/risks;
- exactly one next step;
- Token Utilization / Recursive Self Improvement report and Context Efficiency Report.

## 20. Stop conditions and exit criteria

Stop if:

- repository identity, base synchronization, clean state, current context, task authorization, OPS004 workstream, source access, MTR integrity, owner routing, allowed files, protected boundaries, source citations, or required validation is missing, ambiguous, or conflicting;
- a required decision needs a file outside the allowlist;
- any higher authority forbids the narrowly authorized campaign exception;
- the primary or supporting Drive sources cannot be read;
- the MTR is empty, missing, or inaccessible;
- the task would require source/runtime/external-system mutation.

Exit only when the approved decisions are durably reconciled into the exact existing owners, the MTR record is complete, validation passes, one bounded commit is pushed, one draft PR is open, and no implementation, protected-system change, merge, or deployment has occurred.

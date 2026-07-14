# T-CATEGORYRECON001 Work Order - Reconcile and Expand WNYHS Canonical Public Categories - REV01

Status: Ready for execution after merge
Task ID: `T-CATEGORYRECON001`
Repository: `buffalonychris/wnyhomesecurity`
Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## Objective

Reconcile the existing WNYHS category system around this operator-approved public model:

1. Home Security
2. Aging in Place
3. Home Safety
4. Home Automation
5. Home Lighting
6. Property Management

Rules:

- `Home Safety` is the canonical public label.
- `Environmental Safety` remains only as an internal classification, historical label, SEO-supporting phrase, or documented alias under Home Safety.
- Property Management is the sixth canonical public category.
- Reconcile the existing category pages, solution pages, routes, homepage explorer, navigation, footer, SEO, aliases, redirects, and solution ownership.
- Do not create a parallel category system.
- Preserve all existing routes, funnels, planner, quote, payment, scheduling, lead-intake, and runtime behavior.
- `T-NEWSOLUTIONS001` remains ACTIVE and blocked until this task is completed, merged, and synchronized.

## Authority Order

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. This work order
8. Active category, site-architecture, route, SEO, solution, and runtime owners
9. Governance audit and reference model

Stop on unresolved conflict.

## Required Precheck

1. Confirm `C:\dev\wnyhomesecurity`.
2. Confirm clean synchronized `main`.
3. Confirm PR #522 is merged.
4. Confirm `T-CATEGORYRECON001` exists exactly once and is ACTIVE.
5. Confirm `T-NEWSOLUTIONS001` remains ACTIVE.
6. Confirm this work order exists on `main`.
7. Confirm no equivalent open PR or branch exists.
8. Identify exact current owners and source surfaces for:
   - category governance
   - public information architecture
   - route ownership
   - homepage category explorer
   - header/navigation
   - footer
   - category pages
   - solution-page relationships
   - redirects and aliases
   - SEO/canonical metadata
   - sitemap/search data
   - funnel and analytics boundaries
9. Create a fresh branch from synchronized `main`.
10. Stop if unrelated tracked changes exist.

Suggested branch:

`docs/t-categoryrecon001-six-category-reconciliation-rev01`

## Required Inputs

Read:

- `AGENTS.md`
- core system authority documents
- targeted task records for `T-CATEGORYRECON001` and `T-NEWSOLUTIONS001`
- Codex run/task rules and OPS003/004/005/009
- `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md`
- `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md`
- current route, homepage, navigation, footer, category-page, solution-page, SEO, sitemap, redirect, and search sources
- governance audit and governance reference model

Verify exact source paths before editing.

## Required Decisions

### Canonical public categories

Use the exact six labels and order above everywhere changed.

### Alias posture

- Home Safety is canonical.
- Environmental Safety is not a separate public category.
- Preserve Environmental Safety only where appropriate as internal terminology, historical lineage, SEO support, or alias documentation.

### Route posture

Determine and document:

- canonical Home Safety route
- legacy Environmental Safety redirect/alias posture
- canonical Property Management route
- which existing routes remain canonical
- which legacy routes remain supported
- what source changes are required now versus deferred

Do not remove existing routes.

### Existing architecture

Reconcile, do not replace:

- homepage category explorer
- category pages
- solution pages
- header/navigation
- footer
- SEO/canonical metadata
- sitemap
- redirects/aliases
- search/filter data
- category-to-solution ownership
- future catalog and marketing routing

### Property Management

Define:

- category purpose and boundaries
- relationship to the other five categories
- route recommendation
- homepage/navigation/footer position
- solution ownership rules
- duplication-prevention rules
- SEO and marketing relationship

## Required Deliverables

Create:

1. `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md`
2. `docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md`

Update only when required:

- existing category/site-architecture pointers
- route/SEO governance references
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- only `T-CATEGORYRECON001` for closeout

Do not create duplicate owners.

## CATEGORY001 REV02 Requirements

Include:

- authority and status
- supersession of REV01
- six canonical labels and order
- category purpose and boundaries
- solution ownership and overlap rules
- duplicate-prevention rules
- customer-facing naming rules
- internal alias/classification rules
- public marketing rules
- SEO-supporting terminology rules
- future category-change governance
- traceability to `T-CATEGORYRECON001`

## SITEARCH005 Requirements

Include:

- current-state and conflict summary
- six-category decision
- preservation of existing architecture
- homepage explorer reconciliation
- navigation and footer reconciliation
- category-page and solution-page reconciliation
- canonical route decisions
- redirect and alias posture
- Home Safety/Environmental Safety handling
- Property Management route recommendation
- sitemap, canonical metadata, SEO, and search posture
- funnel and analytics protections
- exact source implementation inventory
- source changes made or deferred
- validation criteria
- condition that unblocks `T-NEWSOLUTIONS001`

## Source-Change Rule

This is primarily governance and architecture reconciliation.

Small source updates are allowed only when all are true:

1. Current authority clearly requires them now.
2. Exact source files are identified.
3. Changes are limited to category labels, order, alias wiring, or non-destructive route registration.
4. Existing routes and funnels remain intact.
5. Relevant tests and build run.

Otherwise, document exact source changes for a later implementation task.

## Allowed Scope

- Create the two required documents.
- Update only necessary authority pointers and documentation indexes.
- Make narrowly justified non-destructive source updates under the Source-Change Rule.
- Update only `T-CATEGORYRECON001` to DONE after validation.
- Commit, push, and open a draft PR.

## Forbidden Scope

- No redesign.
- No parallel category/catalog system.
- No broad homepage rewrite.
- No destructive route changes or route removal.
- No funnel, planner, quote, agreement, payment, scheduling, lead-intake, HubSpot, Stripe, Home Assistant runtime, Cloudflare, dependency, package-lock, environment, secret, or social-platform changes.
- No activation of adjacent tasks.
- No merge or auto-merge.

## Validation

Run:

```powershell
git status --short
git diff --check
git diff --stat
git diff --name-only
git ls-files --deleted
rg -n "T-CATEGORYRECON001|T-NEWSOLUTIONS001" docs/system/master-task-register.md
rg -n "Home Security|Aging in Place|Home Safety|Home Automation|Home Lighting|Property Management" docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md
rg -n "Environmental Safety|alias|historical|SEO" docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV02.md
rg -n "homepage|navigation|footer|route|redirect|sitemap|canonical|Property Management" docs/site-architecture/SITEARCH005_WNYHS_SIX_CATEGORY_RECONCILIATION_DECISION_REV01.md
rg -n "<<<<<<<|=======|>>>>>>>" docs/governance docs/site-architecture docs/system/master-task-register.md
npm run build
```

Confirm:

- six-category order is exact
- Home Safety is canonical
- Environmental Safety is not a separate public category
- Property Management is sixth
- no duplicate system was created
- routes and funnels remain protected
- source changes are justified or deferred
- only authorized files changed
- no deleted files or secrets
- build passes
- `T-NEWSOLUTIONS001` remains ACTIVE
- `T-CATEGORYRECON001` changes to DONE only after validation

## Closeout

After validation:

- change only `T-CATEGORYRECON001` from ACTIVE to DONE
- record deliverables
- record canonical labels/order
- record alias posture
- record Property Management route recommendation
- record source changes made or deferred
- record that `T-NEWSOLUTIONS001` remains ACTIVE and may resume after merge and sync
- do not activate another task

## Commit and PR

Commit:

`T-CATEGORYRECON001 reconcile six-category governance`

PR title:

`T-CATEGORYRECON001 - Reconcile WNYHS six-category governance`

Open as draft. Do not merge.

## Required Closeout Summary

Return:

1. Branch
2. Commit SHA
3. Draft PR URL
4. Exact files changed
5. Category standard revision
6. Site-architecture reconciliation document
7. Canonical labels/order
8. Alias decision
9. Property Management route recommendation
10. Route/redirect posture
11. Homepage/navigation/footer reconciliation
12. Source changes made or deferred
13. `T-NEWSOLUTIONS001` status
14. Build/validation
15. Protected systems
16. No adjacent task activation
17. No merge
18. Token Utilization / RSI Report

## Stop Conditions

Stop if:

- task is not ACTIVE
- main is stale or dirty
- PR #522 is not merged
- equivalent PR exists
- owners or route posture cannot be established
- source changes risk routes/funnels
- protected-system changes are required
- unrelated changes contaminate the branch

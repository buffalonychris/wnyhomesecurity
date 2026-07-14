# T-GOVREF001 Work Order — Create WNYHS Governance Audit Reference Model — REV01

Status: Ready for execution under active task `T-GOVREF001`
Task type: Docs-only governance synthesis
Repository: `buffalonychris/wnyhomesecurity`
Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## Operating Model

- Operator sets business priority and approves promotion.
- ChatGPT owns dispatch and work-order quality.
- Codex executes one bounded work order.
- The Master Task Register is the dispatch board.
- Repository documents are durable authority.
- Project KB is a compact ChatGPT control layer, not implementation authority.
- Skills, plugins, connectors, hooks, and tool access provide capability only.
- The operator reviews and merges PRs manually.
- Do not merge.

## Authority Order

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. This work order
8. Active owner standards and runtime contracts
9. Audit and historical evidence

Stop on unresolved same-level conflict.

## Objective

Create one readable WNY Home Security-specific governance handbook at:

`docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`

The handbook must explain how WNYHS routes ideas, approved products, offerings, website work, public marketing, social campaigns, Home Assistant deployments, protected systems, and Codex execution through existing governance.

It must help answer:

- Where does an approved transcript-derived idea or product go?
- What records must change before it becomes an approved offering, hardware option, or BOM consideration?
- What must happen before it can be marketed publicly?
- Which authorities control a new public offerings page?
- What homepage, subpage, SEO, CTA, analytics, lead-intake, HubSpot, scheduling, and campaign work is required?
- How should social video campaigns connect to approved offers and tracked sales funnels?

The handbook explains and routes to authority. It does not replace governance, owner standards, runtime contracts, ACTIVE tasks, or work orders.

## Required Precheck

1. Confirm repository path and identity.
2. Confirm clean synchronized `main`.
3. Confirm PR #517 is merged.
4. Confirm `T-GOVREF001` exists exactly once and is `ACTIVE`.
5. Confirm this work order exists and is complete.
6. Confirm no equivalent open PR or branch exists.
7. Confirm the target document does not already exist as a newer accepted revision.
8. Create a fresh branch from synchronized `main`.
9. Stop if unrelated tracked changes could contaminate the task.

Suggested branch: `docs/t-govref001-reference-model-rev01`

## Required Inputs

### Primary authority

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- targeted `T-GOVREF001` section in `docs/system/master-task-register.md`

### Execution governance

- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`

### Audit evidence

- `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`

### Project KB evidence

- `00_PROJECT_KB_README_REV01.md`
- `01_PROJECT_KB_ARCHITECTURE_REV01.md`
- `02_AUTHORITY_MAP_REV01.md`
- `03_OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`
- `04_CURRENT_PROJECT_POSTURE_REV01.md`

Use GOVAUTH001 as the primary domain-routing source. Open lower owner documents only to verify exact paths or status. Do not load the entire repository indiscriminately.

## Required Handbook Header

Include:

- Title: `WNY Home Security Governance Authority & Operating Reference`
- Subtitle: `Audit Findings, Current Authority Model, Domain Routing, and Remediation Roadmap`
- Document ID: `WNYHS-GOVREF-REV01`
- Status: `Active Reference — Non-Authoritative Narrative Companion`
- Controlling task and context
- Primary source audit
- Authority disclaimer

Required disclaimer:

> This document explains and routes to WNYHS authority. It does not replace repository governance, owner standards, runtime contracts, the Master Task Register, active bounded tasks, or task-specific work orders.

## Required Chapters

1. **Executive Overview** — purpose, benefits, and boundaries.
2. **Governance Evolution** — ordered phases from chat-driven work through Master Task Register, bounded Codex execution, repo-native work orders, GOVAUTH001, Project KB reconciliation, and GOVREF001. Do not invent dates.
3. **Final Authority Chain** — platform/tool rules, operator decisions, Project instructions, repository governance, current context, ACTIVE task, work order, owner standards/runtime contracts, implementation/PR evidence, and historical evidence.
4. **Roles and Responsibilities** — Operator, ChatGPT, Codex, GitHub, Cloudflare, capability tools, and domain owners. Include a `May / Must / Must Not` table.
5. **Standard Execution Lifecycle** — `Idea → Discussion → Decision → Promotion → Task → Work Order → Codex → Draft PR → Review → Merge → Deployment Validation When Relevant → Local Sync → Closeout`.
6. **Capability Versus Authority** — tools and automatic workflows control method only and never grant business, merge, deployment, or protected-system authority.
7. **Domain Authority Directory** — matrix for all major WNYHS domains.
8. **Practical Routing for New Ideas and Products** — mandatory decision path and transcript/hardware example.
9. **Practical Routing for a New Public Offerings Page** — mandatory website, claims, SEO, funnel, analytics, and sales-routing model.
10. **Marketing-to-Sales Campaign Model** — approved solution to website destination to social video to tracked CTA to lead and estimate request.
11. **Protected Systems and Hard Stops** — HubSpot, Stripe, scheduling, email, Cloudflare, Home Assistant runtime, customer data, planner, quote, SOW, agreements, routes, and SEO.
12. **Audit Findings** — strong areas, conflicts, stale documents, duplicate authority, missing owners, runtime uncertainty, and current-practice drift.
13. **Remediation Roadmap** — preserve all required follow-up tasks without activating them.
14. **Governance Evolution Timeline** — compact evidence-based event table.
15. **Source Directory and Glossary** — exact paths and key terms.

## Domain Authority Matrix

Include:

| Domain | Primary owner/path | Supporting authority | Current posture | Controls | Does not control | Required task type | Known gap |

Cover at minimum:

- core project governance and current context
- task and work-order execution
- website architecture, routes, navigation, SEO, brand, claims, funnel, and analytics
- solutions, offerings, hardware, catalog, BOM, procurement, inventory, and installed assets
- property discovery, estimates, quotes, SOWs, agreements, and change orders
- Home Assistant, automations, dashboards, notifications, installer workflow, commissioning, handoff, and support
- security, cameras/NVR/audio/privacy/retention, locks/access/garage, aging in place, environmental safety, property management, networking/PoE/cabling/backup power
- HubSpot, Stripe, scheduling, email, lead intake, request IDs, Cloudflare, deployment, documentation, and skills/plugins/hooks/local configuration

## Mandatory Product and Transcript Routing Model

Include:

`Research/transcript → operator approval → solution classification → hardware status → HA integration purpose → claims review → offering status → catalog/BOM consideration → public visibility decision → marketing task → implementation task`

Distinguish:

- research candidate
- internal capability
- pilot
- approved install option
- approved hardware
- approved BOM consideration
- publicly marketable offering
- customer-specific exception

Add one worked example showing where manufacturer, model, part, purpose, compatibility, limitations, approval status, offering use, and BOM consideration are recorded.

## Mandatory Public Offerings Page Routing Model

Include:

`Business objective → target audience/problem → approved offering set → claims-safe messaging → page architecture → SEO/search intent → homepage/subpage relationship → CTA/funnel → analytics/attribution → lead intake → task/work order → implementation → PR/deployment validation`

Identify required owner sets for offerings, solutions, claims, website architecture, SEO, brand/tokens, navigation/routes, funnel, analytics, HubSpot boundaries, and scheduling boundaries.

## Mandatory Marketing-to-Sales Model

Include:

`Approved solution → campaign angle → website destination → Higgsfield/video concept → social post → tracked CTA → lead signal → estimate request → sales follow-up`

Before video production, require:

- approved offering status
- hardware status when named
- claims-safe customer benefit
- audience/problem
- CTA destination
- tracking method
- conversion objective

This chapter is governance routing, not campaign copy.

## Required Decision Tables

### Idea/Product Routing Table

| Operator request | First classification | Primary owners | Required status decision | Typical next task |

### Public Marketing Routing Table

| Marketing request | Required approved inputs | Required owner set | Protected dependencies | Validation |

### Task-Type Load Table

Summarize the GOVAUTH001 minimum load sets for idea review, decision promotion, hardware/BOM, solution/public marketing, website, Home Assistant, automation, dashboard, quote/SOW, HubSpot, Stripe, scheduling, deployment, PR review, and governance reconciliation. Do not create a competing standard.

## Remediation Roadmap

Include in this order without activation:

1. `PROJECTKB-RECON001`
2. `GOVAUTH-RECON001`
3. `DOCSYNC002`
4. `RUNTIME-STATUS002`
5. `ROUTE-AUTH002`
6. `OPS-CAPABILITY001`
7. `ID-NORMALIZE001`
8. `DOMAIN-OWNER001`
9. `PROC-ASSET001`
10. `CHANGEORDER001`

For each state purpose, dependency, risk addressed, and why it remains a separate task.

## Allowed Scope

- Create `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`.
- Update `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md` only if required for registration.
- Update only `T-GOVREF001` for closeout after validation.
- Commit, push, and open a draft PR.

## Forbidden Scope

- No edits to GOVAUTH001, Project KB files, or owner standards.
- No conflict reconciliation or remediation-task activation.
- No source code, website page, route, navigation, SEO, public copy, or campaign implementation.
- No hardware approval, catalog, BOM, procurement, or product-status changes.
- No Home Assistant, automation, dashboard, or notification runtime changes.
- No HubSpot, Stripe, scheduling, email, Cloudflare, dependency, environment, or secret changes.
- No merge, auto-merge, or ready-for-review transition.

## Target Files

Primary:

- `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`

Conditional:

- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/system/master-task-register.md`

No other files may change.

## Quality Standard

- Explain and route; do not copy entire standards.
- Separate current authority from historical evolution.
- Separate approved practice from unresolved findings.
- Use exact repository paths.
- Keep the document WNYHS-specific.
- Use tables and decision paths.
- Target approximately 4,000–8,000 words.
- Do not create an encyclopedia.

## Validation

Run:

```powershell
git status --short
git diff --check
git diff --stat
git diff --name-only
git ls-files --deleted
rg -n "T-GOVREF001" docs/system/master-task-register.md
rg -n "This document explains and routes to WNYHS authority" docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md
rg -n "Practical Routing for New Ideas and Products|Practical Routing for a New Public Offerings Page|Marketing-to-Sales Campaign Model|Remediation Roadmap|Governance Evolution Timeline" docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md
rg -n "PROJECTKB-RECON001|GOVAUTH-RECON001|DOCSYNC002|RUNTIME-STATUS002|ROUTE-AUTH002|OPS-CAPABILITY001|ID-NORMALIZE001|DOMAIN-OWNER001|PROC-ASSET001|CHANGEORDER001" docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md
rg -n "<<<<<<<|=======|>>>>>>>" docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md
npm run build
```

Also confirm:

- all 15 chapters exist
- all three decision tables exist
- unsupported dates were not invented
- missing owners remain unresolved
- remediation tasks remain inactive
- only allowed files changed
- no secrets were included
- the handbook states it is non-authoritative

## Task Closeout

After validation:

- change only `T-GOVREF001` from `ACTIVE` to `DONE`
- record the reference-model path
- record that no authority or owner standard changed
- record unresolved remediation tasks without activating them
- do not close unrelated tasks

## Commit and PR

Commit message:

`T-GOVREF001 create WNYHS governance audit reference model`

PR title:

`T-GOVREF001 — Create WNYHS governance audit reference model`

Open as draft. Do not merge.

## Required Closeout Summary

Return:

1. Branch
2. Commit SHA
3. Draft PR URL
4. Exact files changed
5. Reference-model path
6. Word count and chapter count
7. Authority-chain summary
8. Product/transcript routing summary
9. Public-offerings-page routing summary
10. Marketing-to-sales routing summary
11. Conflicts and missing owners preserved
12. Remediation roadmap included
13. Validation and build results
14. Protected systems confirmation
15. Confirmation no remediation task was activated
16. Confirmation no merge occurred

## Token Utilization / RSI Report

Report exact token metrics when visible. Otherwise state:

`Exact token metrics not visible in Codex.`

Then report:

- model and reasoning level
- model turns
- files read and modified
- commands and validation commands
- failed or retried commands
- broad searches and large documents
- redundant reads
- elapsed runtime if visible
- context pressure
- essential and unnecessary documents
- targeted-read opportunities
- prompt compression
- chat-derived context promoted into the reference
- recommended next prompt pattern

## Stop Conditions

Stop if:

- the task is not ACTIVE
- main is stale
- an equivalent open PR exists
- authority conflicts prevent bounded synthesis
- the target has a newer accepted revision
- required audit evidence is missing
- unrelated tracked changes contaminate the branch
- completion would require owner-standard or protected-system changes

## Self-Check

Confirm before response:

- the task was ACTIVE
- work remained docs-only
- the reference explains but does not replace authority
- product/transcript, offerings-page, and marketing-to-sales routing models are present
- owner standards were referenced, not rewritten
- conflicts and missing owners remain visible
- no remediation task was activated
- protected systems were untouched
- only allowed files changed
- PR is draft
- no merge occurred

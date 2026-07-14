# T-NEWSOLUTIONS001 Work Order - Build the WNYHS Solution Arsenal and New Solutions Campaign Package - REV01

Status: Ready for execution after this work order is merged
Task ID: `T-NEWSOLUTIONS001`
Task type: Governed solution, hardware, catalog, BOM-consideration, public-content, and campaign documentation
Repository: `buffalonychris/wnyhomesecurity`
Controlling context: `CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01`

## 1. Operating Model

- The operator sets business priority and approves promotion.
- ChatGPT owns dispatch, scope design, and work-order quality.
- Codex executes one bounded work order.
- The Master Task Register is the dispatch board.
- Repository owner documents are durable authority.
- The completed governance audit and reference model provide routing, not replacement authority.
- Tool, skill, plugin, connector, hook, or CLI availability does not grant scope.
- The operator reviews and merges PRs manually.
- Do not merge.

## 2. Authority Order

1. `docs/system/project.md`
2. `docs/system/guardrails.md`
3. `docs/system/agent.md`
4. `docs/system/plan.md`
5. `docs/system/step-current.md`
6. `docs/system/master-task-register.md`
7. This work order
8. Active owner standards, catalogs, registries, and runtime contracts
9. `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
10. `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`
11. Historical and research evidence

Stop on an unresolved authority conflict.

## 3. Objective

Convert operator-approved YouTube transcript research and existing WNYHS research into a governed commercial system that includes:

1. A comprehensive internal WNYHS solution arsenal containing as many defensible solutions as the evidence supports.
2. Governed hardware and BOM-consideration records for products supported by adequate evidence.
3. A customer-facing solution catalog organized under the exact five current website categories.
4. A claims-safe New Solutions public-content specification.
5. A Higgsfield-ready video and social campaign asset pack.
6. A traceable commercial chain:

`Approved solution -> customer-facing catalog -> website destination -> social video -> tracked CTA -> lead signal -> estimate request -> sales follow-up`

This task creates governed documentation and campaign content. It does not implement a website page, change runtime behavior, operate external systems, or publish a campaign.

## 4. Business Outcome

After completion, WNYHS must be able to take an operator-approved transcript, product, or idea and determine:

- which solution or use cases it supports
- which customer problem each use case solves
- where it belongs internally
- whether the hardware is approved, conditional, pilot-only, or research-only
- whether it is eligible for BOM consideration
- how Home Assistant participates
- which limitations and claims boundaries apply
- whether it may appear publicly
- where it appears in the five-category customer catalog
- which campaign wave should promote it
- which CTA and sales path it supports

The internal catalog may be extensive. The customer-facing catalog must remain simple, relatable, and easy to navigate.

## 5. Required Precheck

Before editing:

1. Confirm the repository is `C:\dev\wnyhomesecurity`.
2. Confirm local `main` is clean and synchronized with `origin/main`.
3. Confirm PR #520 is merged.
4. Confirm `T-NEWSOLUTIONS001` exists exactly once and is `ACTIVE`.
5. Confirm `T-GOVREF001` is `DONE`.
6. Confirm `T-SMARTRESEARCH001` is complete or otherwise available as accepted evidence.
7. Confirm this work order exists on `main`.
8. Confirm no equivalent open PR or branch exists.
9. Read the exact current five website categories from current source and controlling site/solution documents. Do not assume category names from chat.
10. Identify the exact current owner files for solutions, offerings, hardware, catalog, BOM consideration, claims, Home Assistant, automation, dashboards, notifications, website architecture, SEO, funnel, analytics, HubSpot boundaries, scheduling boundaries, and deployment.
11. Confirm all proposed target files exist or are explicitly authorized new files.
12. Create a fresh branch from synchronized `main`.
13. Stop if unrelated tracked changes could contaminate the task.

Suggested branch:

`docs/t-newsolutions001-solution-arsenal-campaign-rev01`

## 6. Required Inputs

### Core governance

- `AGENTS.md`
- `docs/system/project.md`
- `docs/system/guardrails.md`
- `docs/system/agent.md`
- `docs/system/plan.md`
- `docs/system/step-current.md`
- targeted `T-NEWSOLUTIONS001` record in `docs/system/master-task-register.md`

### Work-order and execution governance

- `docs/codex/CODEX_RUN_CONTRACT.md`
- `docs/codex/CODEX001_CODEX_WORK_ORDER_SPECIFICATION_REV01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`
- `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md`
- `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md`
- `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md`

### Governance routing references

- `docs/governance/GOVAUTH001_WNYHS_COMPLETE_GOVERNANCE_AUTHORITY_AUDIT_REV01.md`
- `docs/governance/WNYHS_GOVERNANCE_AUDIT_REFERENCE_MODEL_REV01.md`

### Research and catalog evidence

Use targeted reads to locate and inspect:

- accepted transcript-derived research
- `T-SMARTRESEARCH001` outputs
- existing deep-research reports
- current WNYHS capability catalog
- current solution catalog reconciliation
- current approved hardware registry
- current package/BOM schema
- current Home Assistant automation standard
- current dashboard, notification, installer, and commissioning standards
- current claims and public-copy rules
- current site architecture, routes, SEO, funnel, analytics, and lead-intake owners

Do not treat a transcript mention, creator preference, anecdote, or product appearance as proof of compatibility or approval.

## 7. Evidence and Promotion Rules

Every solution and hardware record must identify its evidence level.

### Solution evidence levels

- `RESEARCH_CANDIDATE`
- `INTERNAL_CAPABILITY`
- `PILOT`
- `APPROVED_INSTALL_OPTION`
- `PUBLICLY_MARKETABLE_OFFERING`
- `CUSTOMER_SPECIFIC_EXCEPTION`

### Hardware evidence levels

- `RESEARCH_ONLY`
- `CONDITIONAL`
- `PILOT`
- `APPROVED`
- `LEGACY_SUPPORTED`
- `REJECTED`

### BOM posture

- `NOT_EVALUATED`
- `CONSIDERATION`
- `CONDITIONAL`
- `APPROVED_INPUT`
- `EXCLUDED`

Codex must not elevate a status beyond available evidence.

Operator approval of a transcript means the ideas may be evaluated and promoted through governance. It does not automatically make every statement, product, or compatibility claim approved.

## 8. Comprehensive Internal Solution Arsenal

Create or update the authoritative internal solution/catalog owner so it contains as many defensible solutions as the accepted evidence supports.

Cover all applicable domains:

- security
- smart-home automation
- aging in place
- home safety
- environmental sensing
- property management
- energy
- resilience
- convenience
- accessibility

Do not impose an arbitrary maximum.

A single device may support multiple distinct solutions when each solution has a different customer outcome. For example, a smart plug may support lighting routines, occupancy simulation, appliance shutoff, power-state awareness, equipment reboot, holiday lighting, bedtime shutdown, or other evidence-supported uses.

Do not inflate the catalog with superficial duplicates. Separate entries only when the customer problem, behavior, implementation pattern, or claims boundary is materially different.

### Required internal solution fields

For each solution:

- stable solution ID
- internal name
- plain-language customer name
- exact website category
- solution family
- customer problem
- customer outcome
- typical user or property
- trigger or input
- Home Assistant behavior
- output or action
- dashboard need
- notification need
- hardware classes
- named hardware where evidence supports it
- protocol or connection method
- local-first posture
- internet or third-party dependency
- limitations
- safety or claims boundary
- evidence source
- current solution status
- public visibility status
- BOM posture
- related solutions
- campaign suitability
- operator review note when needed

## 9. Hardware and BOM Reconciliation

For each named product or part supported by the evidence, record:

- manufacturer
- exact model
- part number when known
- product class
- purpose
- supported solution IDs
- protocol
- power requirements
- Home Assistant integration method
- local-control posture
- required hub, bridge, relay, adapter, enclosure, or power supply
- known limitations
- installation constraints
- security/privacy considerations
- evidence source
- hardware status
- BOM posture
- substitution posture
- customer-specific restrictions
- validation still required

Do not claim Home Assistant compatibility unless supported by accepted evidence or current repository authority.

Do not convert a creator's demonstrated personal setup into universal compatibility.

Use additive, status-controlled updates. Preserve existing approved records unless higher evidence requires a documented correction.

## 10. Two Linked Catalogs

### 10.1 Internal governed catalog

The internal catalog must be:

- comprehensive
- technical
- status-controlled
- hardware/BOM linked
- Home Assistant linked
- claims-controlled
- evidence-linked
- usable for estimates, SOW planning, installation design, and future marketing

### 10.2 Customer-facing solution catalog

Create a customer-facing catalog specification and content set that is:

- organized under the exact five current website categories
- written in plain language
- outcome-focused
- progressively disclosed
- easy for a non-technical customer to understand
- easy to navigate on mobile
- traceable to approved internal solution IDs
- free from unsupported claims
- free from technical overload

The public catalog must expose possibilities without showing implementation complexity by default.

## 11. Customer Catalog Information Architecture

Use this layered model:

`Five website categories -> solution families -> individual possibilities -> optional details -> estimate CTA`

### First layer

Show only the five current website categories using the exact current names.

### Second layer

Within each category, group solutions into relatable outcome families.

### Third layer

Each solution card must include:

- customer-facing name
- one-sentence problem
- one-sentence outcome
- three concise examples at most
- eligibility/status language appropriate for public use
- optional "How it can work" expansion
- CTA

### Progressive disclosure

The initial catalog view must not show:

- part numbers
- protocols
- entity IDs
- YAML
- implementation internals
- dense hardware lists
- technical compatibility matrices

These may be used internally or in an optional technical detail section only when customer decision-making benefits.

### Navigation requirements

The content specification must define:

- five-category navigation
- search or plain-language filtering recommendation
- "Popular solutions" entry point
- "Explore more possibilities" entry point
- related-solution links
- no dead ends
- persistent estimate CTA
- mobile-first behavior
- accessibility requirements
- category and solution URL recommendations, without implementing routes

## 12. Public Content Requirements

Create a claims-safe New Solutions public-content specification including:

- page purpose
- audience
- customer problems
- value proposition
- hero options
- category overview copy
- solution-family copy
- representative solution cards
- trust and privacy copy
- local-first language
- subscription language only where supported
- installation and estimate CTA
- FAQ recommendations
- homepage support recommendation
- relevant subpage support recommendation
- SEO title and description recommendations
- structured data recommendation if applicable
- attribution and analytics recommendation
- lead-intake and scheduling boundaries

Do not implement source, routes, navigation, metadata, analytics, or forms in this task.

## 13. Campaign Wave Model

The complete internal arsenal must not be reduced to one campaign.

Organize approved public solutions into smaller campaign waves based on:

- customer relevance
- visual clarity
- hardware readiness
- claims safety
- broad applicability
- seasonality
- urgency without fear tactics
- sales potential
- destination-page readiness

Create at least:

- Wave 1: immediate launch candidates
- Wave 2: follow-up candidates
- Evergreen catalog candidates
- Hold/pilot candidates

The number of solutions in a campaign wave must be driven by clarity and conversion purpose, not by an arbitrary total-catalog limit.

## 14. Higgsfield Video Asset Pack

For each Wave 1 campaign concept, create:

- campaign name
- target audience
- customer problem
- approved solution IDs
- website destination recommendation
- conversion objective
- visual hook
- 15-second script
- 30-second script
- 40-second script
- scene-by-scene shot list
- Higgsfield generation prompt per scene
- voiceover
- on-screen copy
- final CTA
- alternate opening
- alternate ending
- 9:16 primary format
- 1:1 adaptation notes
- 16:9 adaptation notes
- claims review note
- prohibited visual or wording note

Use:

`Problem -> consequence -> WNYHS solution -> visual demonstration -> customer outcome -> CTA`

Keep tone direct, professional, local, non-technical, and non-alarmist.

## 15. Social Campaign Asset Pack

For each Wave 1 campaign concept, create:

- Facebook caption
- Instagram caption
- YouTube Shorts title
- YouTube Shorts description
- TikTok caption
- thumbnail headline
- first-comment CTA
- local hashtag set
- campaign identifier
- destination URL recommendation
- UTM recommendation
- posting sequence
- follow-up content recommendation
- sales follow-up intent
- measurement recommendation

Do not publish, schedule, or operate social platforms.

## 16. Commercial Traceability Matrix

Create a matrix linking:

| Internal solution ID | Public catalog entry | Website category | Hardware status | BOM posture | Campaign wave | Video asset | CTA destination | Lead signal | Estimate/Sales next step |

Every public or campaign item must trace to an internal solution record.

No public content may be created from an unclassified idea.

## 17. Required Deliverables

Create these new documentation artifacts unless current owner documents require an explicitly equivalent canonical path:

1. `docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md`
2. `docs/catalogs/WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md`
3. `docs/marketing/WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01.md`
4. `docs/marketing/WNYHS_NEW_SOLUTIONS_HIGGSFIELD_SOCIAL_ASSET_PACK_REV01.md`
5. `docs/marketing/WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01.md`

Update existing authoritative owner files only when required and permitted:

- current capability catalog
- current solution catalog reconciliation
- current approved hardware registry
- current package/BOM input schema
- current Home Assistant automation standard
- current dashboard/notification/installer standards
- document catalog
- Markdown manifest
- only the `T-NEWSOLUTIONS001` task record for closeout

Before editing any existing owner file, verify its exact path, status, and authority. Do not create a duplicate owner.

## 18. Allowed Scope

- Create the five deliverables listed above.
- Add evidence-based, status-controlled records to existing solution, capability, hardware, BOM, Home Assistant, dashboard, notification, or installer owner documents when required for traceability.
- Register new documents in the catalog/manifest according to current repository practice.
- Update only `T-NEWSOLUTIONS001` for task closeout after validation.
- Commit, push, and open a draft PR.

## 19. Forbidden Scope

- No website source implementation.
- No route, navigation, homepage, subpage, CSS, token, component, SEO runtime, analytics runtime, form, API, or public deployment changes.
- No HubSpot writes.
- No Stripe/payment changes.
- No scheduling changes.
- No email or Resend changes.
- No Cloudflare configuration changes.
- No Home Assistant runtime/YAML/customer-instance changes.
- No purchasing or inventory transactions.
- No price or package changes.
- No secrets, environment variables, dependencies, or package-lock changes.
- No social publishing or account operation.
- No unsupported security, emergency-response, dispatch, guarantee, medical, or insurance claims.
- Do not use forbidden public claim terminology from `AGENTS.md`.
- No adjacent task activation.
- No merge, auto-merge, or ready-for-review transition.

## 20. Claims and Safety Rules

All public-facing content must:

- describe customer outcomes accurately
- avoid guarantees
- avoid implying emergency response or professional dispatch
- avoid medical diagnosis, medical treatment, or caregiver replacement claims
- avoid implying that sensing eliminates risk
- distinguish awareness, notification, automation, and customer action
- state limitations where material
- preserve privacy and customer ownership principles
- use "environmental sensing" or another permitted term, not forbidden terminology
- remain consistent with current claims governance and approved public copy

## 21. Validation Requirements

Run:

```powershell
git status --short
git diff --check
git diff --stat
git diff --name-only
git ls-files --deleted
rg -n "T-NEWSOLUTIONS001" docs/system/master-task-register.md
rg -n "WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01|WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01|WNYHS_NEW_SOLUTIONS_PUBLIC_CONTENT_SPEC_REV01|WNYHS_NEW_SOLUTIONS_HIGGSFIELD_SOCIAL_ASSET_PACK_REV01|WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01" docs
rg -n "RESEARCH_CANDIDATE|INTERNAL_CAPABILITY|PILOT|APPROVED_INSTALL_OPTION|PUBLICLY_MARKETABLE_OFFERING|CUSTOMER_SPECIFIC_EXCEPTION" docs/catalogs/WNYHS_INTERNAL_SOLUTION_ARSENAL_REV01.md
rg -n "Popular solutions|Explore more possibilities|progressive disclosure" docs/catalogs/WNYHS_CUSTOMER_SOLUTION_CATALOG_REV01.md
rg -n "15-second|30-second|40-second|Higgsfield|9:16|1:1|16:9" docs/marketing/WNYHS_NEW_SOLUTIONS_HIGGSFIELD_SOCIAL_ASSET_PACK_REV01.md
rg -n "Internal solution ID|Public catalog entry|Campaign wave|CTA destination|Lead signal" docs/marketing/WNYHS_NEW_SOLUTIONS_COMMERCIAL_TRACEABILITY_MATRIX_REV01.md
rg -n "<<<<<<<|=======|>>>>>>>" docs/catalogs docs/marketing docs/system/master-task-register.md
npm run build
```

Also confirm:

- the exact five current website categories were verified from current authority/source
- as many defensible solutions as evidence supports were considered
- no arbitrary total-catalog cap was applied
- customer-facing entries trace to internal solution IDs
- every named product has an evidence and hardware status
- no hardware status was elevated without evidence
- no public entry relies on research-only status
- campaign waves are smaller subsets of the larger arsenal
- public content remains understandable to non-technical customers
- forbidden terminology and claims are absent
- only authorized files changed
- protected systems were untouched
- no deleted files
- no secrets
- build passes

## 22. Task Closeout

After validation:

- change only `T-NEWSOLUTIONS001` from `ACTIVE` to `DONE`
- record all created deliverables
- record owner files updated
- record total solution count by status
- record hardware count by status
- record customer-catalog count by exact website category
- record Wave 1, Wave 2, Evergreen, and Hold counts
- record unresolved compatibility or evidence gaps
- record that website implementation requires a separate task
- do not activate that implementation task
- do not close unrelated tasks

## 23. Commit and PR

Commit message:

`T-NEWSOLUTIONS001 build solution arsenal and campaign package`

PR title:

`T-NEWSOLUTIONS001 - Build WNYHS solution arsenal and New Solutions campaign package`

Open as draft. Do not merge.

## 24. Required Closeout Summary

Return:

1. Branch
2. Commit SHA
3. Draft PR URL
4. Exact files changed
5. Internal solution count by status
6. Hardware count by status
7. BOM-posture count
8. Customer-facing solution count by exact website category
9. Campaign-wave counts
10. Wave 1 campaign concepts
11. Higgsfield asset count
12. Social asset count
13. Claims and safety validation
14. Evidence gaps and conditional items
15. Owner documents updated
16. Build and validation results
17. Protected systems confirmation
18. Confirmation no website implementation occurred
19. Confirmation no adjacent task was activated
20. Confirmation no merge occurred
21. Token Utilization / RSI Report

## 25. Token Utilization / RSI Report

Report exact token metrics when visible. Otherwise state:

`Exact token metrics not visible in Codex.`

Then report:

- model and reasoning level
- execution turns
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
- chat-derived context promoted
- recommended next prompt pattern

## 26. Stop Conditions

Stop if:

- `T-NEWSOLUTIONS001` is not ACTIVE
- main is stale or dirty
- PR #520 is not merged
- an equivalent open PR exists
- the exact five website categories cannot be established
- required owner paths are materially ambiguous
- accepted research evidence is unavailable
- completing the task would require source/runtime/protected-system edits
- hardware compatibility cannot be supported
- public claims conflict with guardrails
- unrelated tracked changes contaminate the branch

## 27. Self-Check

Before responding, confirm:

- the task was ACTIVE
- the work remained documentation and content only
- the internal arsenal is comprehensive and status-controlled
- the customer catalog uses the exact five current website categories
- public content is plain-language and progressively disclosed
- campaign waves are focused subsets, not total-catalog limits
- every public item traces to an internal solution
- every named product has evidence and status
- no unsupported claims were introduced
- no protected system changed
- no website implementation occurred
- only authorized files changed
- PR is draft
- no merge occurred

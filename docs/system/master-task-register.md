# Master Task Register

Status: Active  
Current Operational Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Controlling Step: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 — Final-Hour Business Development Execution Unblock — REV01

---

## Master Task Register Governance Standard (GOV002)

- This register is the **operational execution driver** for bounded Codex task execution.
- This register does **not** override higher governance documents in `/docs/system/project.md`, `/docs/system/guardrails.md`, `/docs/system/agent.md`, `/docs/system/plan.md`, or `/docs/system/step-current.md`.
- This register operates under the single controlling context declared in `/docs/system/step-current.md`.
- Codex may execute only:
  - tasks in **Active Tasks** with `Status: ACTIVE`, or
  - explicitly bounded prompt-created tasks when allowed by higher-governance execution gates.
- No task may silently expand scope beyond its declared Allowed Scope and controlling context.

### Allowed Task Statuses

- BACKLOG
- READY
- ACTIVE
- BLOCKED
- DONE
- ARCHIVED

### Required Task Fields (Actionable Task Schema)

Every actionable task record must include:

- Task ID
- Task Name
- Status
- Category
- Controlling Context
- Purpose
- Allowed Scope
- Forbidden Scope
- Target Files
- Runtime Systems Affected
- Documentation Updates Required
- Validation Required
- Exit Criteria
- Dependencies
- Operator Decision Required

### Task Category Taxonomy (Allowed Values)

- GOV
- RUNTIME
- CRM
- PAYMENT
- EMAIL
- LEAD
- QR
- SCHED
- QA
- COPY
- FUNNEL
- HIST

### Task Lifecycle and Activation Rules

- BACKLOG and READY are non-executable preparation states.
- ACTIVE is the only executable status.
- BLOCKED requires a documented unblock condition.
- DONE requires required validation plus exit-criteria satisfaction.
- ARCHIVED preserves historical traceability and is non-executable.
- Activation to ACTIVE requires controlling-context alignment and complete required task fields.

### Current Context ↔ Task Record ↔ Codex Execution Relationship

- `step-current.md` defines the single active operational context.
- The Master Task Register defines bounded execution tasks within that context.
- Prompt-created bounded tasks are allowed only when higher-authority governance explicitly permits them.
- If request scope conflicts with the context or task schema, Codex must stop and request revision.

### Legacy/Historical Record Handling

- Historical task records are preserved for lineage and audit traceability.
- Legacy entries that predate GOV002 schema standardization are retained unless safe, bounded normalization is possible.
- No destructive rewrite of historical records is required for GOV002.

---

## Active Tasks (Execution Driver)

Only tasks in this section with `Status: ACTIVE` are executable by Codex.
Multiple ACTIVE tasks under CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 are pre-authorized for bounded final-hour execution, but Codex may only execute the single task explicitly named in the current prompt. ACTIVE is authorization, not permission to bundle. Hard guardrails for claims, Stripe, HubSpot, runtime/routes/UI, secrets, historical docs, and generated binary print files remain enforced.



### GOV001
- **Task ID:** GOV001
- **Task Name:** Governance Precedence Reconciliation
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile governance precedence to a single current-context + Master Task Register execution model and remove multi-active-Step ambiguity.
- **Allowed Scope:**
  - docs-only governance reconciliation in `/docs/system/` and `/docs/DOCUMENT_CATALOG.md`
  - authority hierarchy clarification
  - current operational context clarification
  - historical Step lineage-role clarification
  - task-register role clarification and GOV001 lifecycle updates
- **Forbidden Scope:**
  - no runtime/source/frontend/API/route changes
  - no Stripe logic/payment verification changes
  - no HubSpot schema/workflow/write-path changes
  - no deletion of historical docs
- **Validation Required:**
  - `git diff -- docs/system docs/DOCUMENT_CATALOG.md docs/codex`
  - `rg -n "active step|active Step|controlling step|controlling Step|multi-active|multiple active|Step101|Step102|Step201|current operational context|Master Task Register|authority hierarchy|precedence" docs/system docs/DOCUMENT_CATALOG.md docs/codex`
  - `rg -n "Vercel|vercel" docs`
- **Exit Criteria:**
  - authority hierarchy is explicit and unambiguous
  - `step-current.md` is explicitly single-current-context authority
  - historical Steps are lineage/reference unless promoted
  - Master Task Register is explicitly the operational task driver
  - document catalog authority labels/classifications are aligned

### GOV002
- **Task ID:** GOV002
- **Task Name:** Master Task Register Promotion / Standardization
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Standardize the Master Task Register as the operational execution driver with explicit status taxonomy, required task fields, lifecycle rules, activation rules, and Codex execution relationship.
- **Allowed Scope:**
  - docs-only governance updates in `/docs/system/master-task-register.md`
  - alignment updates in `/docs/codex/CODEX_TASK_REGISTER_RULES.md` and `/docs/codex/CODEX_TASK_TEMPLATE.md`
  - optional catalog classification wording alignment in `/docs/DOCUMENT_CATALOG.md`
  - safe normalization metadata for current/recent task records without destructive historical rewrites
- **Forbidden Scope:**
  - no runtime/source/frontend/API changes
  - no route/UI behavior changes
  - no Stripe/payment logic changes
  - no HubSpot schema/workflow/write-path changes
  - no deletion of historical documentation
- **Target Files:** `docs/system/master-task-register.md`, `docs/codex/CODEX_TASK_REGISTER_RULES.md`, `docs/codex/CODEX_TASK_TEMPLATE.md`, `docs/DOCUMENT_CATALOG.md` (if needed)
- **Runtime Systems Affected:** None (docs-only governance change)
- **Documentation Updates Required:** Governance intro and execution-driver language, required schema fields, status/category taxonomy, lifecycle/activation rules, legacy handling guidance, and GOV002 task lifecycle record update.
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md docs/codex docs/DOCUMENT_CATALOG.md docs/system/plan.md docs/system/agent.md`
  - `rg -n "BACKLOG|READY|ACTIVE|BLOCKED|DONE|ARCHIVED|Task ID|Allowed Scope|Forbidden Scope|Validation Required|Exit Criteria|Operator Decision Required|Master Task Register|operational execution driver" docs/system/master-task-register.md docs/codex`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/system/master-task-register.md docs/codex`
  - `npm run build` (or explicit docs-only skip note)
- **Exit Criteria:**
  - Master Task Register explicitly defines execution-driver behavior under controlling context
  - allowed statuses and category taxonomy are explicit
  - required task field schema is explicit
  - lifecycle/activation/validation/exit discipline is explicit
  - current/recent task records are normalized where safe and legacy handling is explicit
  - no runtime behavior changes introduced
- **Dependencies:** GOV001 = DONE
- **Operator Decision Required:** No
- **Completion Notes:** GOV002 standardized governance/task-register schema and lifecycle language in MTR and synchronized Codex rules/template docs without runtime changes.



### FUNNEL001
- **Task ID:** FUNNEL001
- **Task Name:** Canonical Estimate Request Form + Quote Review Route Repair
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Repair `/quoteReview` non-render path from Fit Check recommendation/contact flow and enforce one canonical estimate request form based on QRLanding pattern.
- **Allowed Scope:** `/quoteReview` defensive rendering repair, canonical estimate form reuse/extraction, Fit Check/contact estimate form replacement, bounded funnel/runtime docs/register updates.
- **Forbidden Scope:** no Stripe/payment logic changes; no HubSpot schema/workflow changes; no pricing logic changes; no unrelated route/UI redesign.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|Review Estimate Summary|Request My Estimate|Start My Estimate|qrlanding|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** quote review no longer blank-screens from Fit Check review action; canonical estimate form reused across QRLanding and Fit Check/contact flow; QR attribution preserved only for QR entry.
- **Completion Notes:** Completed in commit `c5d7bbf` and follow-up revision `FUNNEL001` hardening. `/quoteReview` blank render path fixed via null-safe add-on lookup; canonical form reuse in `/qrlanding` and `/contact` retained; previously removed intake fields (`requestedHelp`, `requestDetails`, `whereDidYouSeeUs`) restored in the canonical component while preserving `/api/lead-signal` submission path and QR attribution behavior.

### FINISH-LINE-PUBLICATION001
- **Task ID:** FINISH-LINE-PUBLICATION001
- **Task Name:** Final publication readiness for QR placards and WNYHS public site
- **Status:** ACTIVE
- **Category:** GOV / OPS / PUBLICATION
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Authorize tightly bounded final-hour publication tasks needed before QR placards/flyers and public site updates go live.
- **Allowed Scope:**
  - governance/task-register coordination for final-hour publication readiness
  - bounded readiness tasks explicitly promoted to ACTIVE
  - release-readiness checks and sequencing notes
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema/pipeline changes
  - no scheduling implementation changes
  - no route changes unless explicitly activated by a separate bounded task
  - no unbounded bundling of unrelated implementation

### CONTACT-PHONE001
- **Task ID:** CONTACT-PHONE001
- **Task Name:** Canonical public phone number replacement across WNYHS site and QR Landing site
- **Status:** ACTIVE
- **Category:** COPY / FUNNEL / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Replace all customer-facing phone references across QR Landing and main WNYHS site with the canonical public Google Voice business number.
- **Canonical Number:**
  - Display: `716-201-0364`
  - E.164: `+1 716-201-0364`
  - Tel href: `tel:+17162010364`
- **Allowed Scope:**
  - update customer-facing phone references
  - update tel links
  - update QR Landing phone references
  - update main site phone references
  - update public metadata/structured data phone references
  - update relevant public contact docs/config
  - include visible site version bump
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema changes
  - no scheduling logic changes
  - no Google Calendar logic changes
  - no Resend behavior changes
  - no routes changed
  - no new features
  - no redesign
  - no claims/copy expansion
  - no personal numbers published

### SCHED-AVAIL001
- **Task ID:** SCHED-AVAIL001
- **Task Name:** Server-side Google Calendar iCal availability read integration
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Track server-side availability read integration using `GOOGLE_CALENDAR_ICAL_SECRET`.
- **Status Basis:** Marked DONE because server-side availability integration and tests already exist in repository history/source (`functions/api/scheduling/availability.ts`, `functions/api/scheduling/googleCalendarAvailability.ts`, `tests/googleCalendarAvailability.test.ts`).

### FINAL-HOUR-BUSDEV001
- **Task ID:** FINAL-HOUR-BUSDEV001
- **Task Name:** Final-Hour Business Development Execution Lane
- **Status:** ACTIVE
- **Category:** GOV / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** keep business development, physical marketing, print asset, QR campaign, local acquisition, and deployment-support categories open for bounded execution without repeated activation blockers.
- **Allowed Scope:**
  - creating bounded task entries under active final-hour categories
  - print asset source packages
  - local marketing docs/assets
  - QR campaign materials
  - business development materials
  - deployment-support documentation
  - task-register updates
- **Forbidden Scope:**
  - unsupported product claims
  - runtime changes without explicit bounded task
  - Stripe/payment changes without explicit bounded task
  - HubSpot changes without explicit bounded task
  - route/UI changes without explicit bounded task
  - generated binary PDF/PNG commits unless explicitly authorized
  - secrets
- **Validation Required:**
  - task entries must remain bounded
  - hard guardrails preserved
  - generated binary rules preserved
- **Exit Criteria:**
  - final-hour business-development execution lane exists and is ACTIVE
  - bounded task execution no longer blocked solely because the category was not pre-opened

### PRINT-ASSET005
- **Task ID:** PRINT-ASSET005
- **Task Name:** Full-Page Pole / Mall Flyer Source Package
- **Status:** DONE
- **Category:** PRINT-ASSET / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** create source-only reproducible 8.5 x 11 full-page pole/mall/community-board flyer package using the operator-approved PoleFlyerMallFlyer.png composition and replacing the embedded QR with the approved QR Landing / Campaign QR.
- **Allowed Scope:**
  - `/public/brand/print-assets/pole-mall-flyer/README.md`
  - `/public/brand/print-assets/pole-mall-flyer/source/generate-pole-mall-flyer.mjs`
  - `/public/brand/print-assets/pole-mall-flyer/source/pole-mall-flyer-config.json`
  - `/.gitignore`
  - `/docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs/PNGs are not tracked
  - PoleFlyerMallFlyer.png used as base/reference
  - QR Landing / Campaign QR used
  - business-card QR not used
  - visible claims reviewed and caveated where needed
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - source generator exists
  - config exists
  - README/manifest exists
  - `.gitignore` prevents generated binaries from being committed
  - generated color and grayscale PDFs can be produced locally
  - no generated binaries are committed
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-only pole/mall flyer package created under `/public/brand/print-assets/pole-mall-flyer/`; generated PDFs are local-only under ignored `generated/`; canonical `PoleFlyerMallFlyer.png` is used as the full-page base/reference; exact on-disk QR Landing / Campaign QR asset `/public/brand/forprint/QR QRLANDING  Home Page QR.png` is overlaid; main website / business-card QR asset is documented as blocked and not used for output generation; claim caveats for “No Cloud Required” and “You Own. You Control.” are recorded for operator review before bulk production.

### PRINT-ASSET002B
- **Task ID:** PRINT-ASSET002B
- **Task Name:** QR Placard Visual System Refinement
- **Status:** DONE
- **Category:** PRINT-ASSET
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** refine the existing QR placard generator so placards visually align with the operator-approved premium pole/mall flyer system while remaining scan-first, simple, QR-reliable, and source-only
- **Allowed Scope:**
  - `/public/brand/print-assets/qr-placards/README.md`
  - `/public/brand/print-assets/qr-placards/source/generate-placards.mjs`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - half-sheet flyer changes
  - pole/mall flyer changes
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - PoleFlyerMallFlyer.png used as visual benchmark
  - QR Landing / Campaign QR used
  - business-card QR not used
  - color outputs use dark premium WNYHS placard composition
  - grayscale outputs remain readable
  - QR remains scannable
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - QR placard generator visually refined
  - placards are dark/premium, not white-card style
  - crest presence improved
  - QR block integrated better
  - placards remain scan-first and simpler than flyers
  - README updated
  - task registered or updated
  - generated outputs remain local/ignored only
  - no generated binaries committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the existing QR placard generator into a dark premium WNYHS composition benchmarked against `/public/brand/forprint/PoleFlyerMallFlyer.png`; strengthened crest presence, integrated the black-on-white QR into a restrained dark/gold scan module, preserved the QR Landing / Campaign QR only, kept copy scan-first with three approved bullets, updated README source-only guidance, and left generated PDFs local/ignored only.

### PRINT-ASSET005B
- **Task ID:** PRINT-ASSET005B
- **Task Name:** Pole / Mall Flyer QR Integration Polish
- **Status:** DONE
- **Category:** PRINT-ASSET
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** polish the full-page pole/mall flyer QR overlay so it blends into the approved flyer composition while preserving QR scan reliability and source-only generated-output workflow.
- **Allowed Scope:**
  - `/public/brand/print-assets/pole-mall-flyer/README.md`
  - `/public/brand/print-assets/pole-mall-flyer/source/generate-pole-mall-flyer.mjs`
  - `/public/brand/print-assets/pole-mall-flyer/source/pole-mall-flyer-config.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
  - changes to canonical source image assets
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - QR Landing / Campaign QR used
  - business-card QR not used
  - QR overlay visually refined
  - QR remains scannable
  - grayscale output remains readable
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - QR overlay is smaller/better integrated
  - border/shadow is less intrusive
  - vertical alignment avoids visual collision with the banner
  - lower-center composition feels intentional
  - generated outputs remain local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the PRINT-ASSET005 pole/mall flyer QR overlay only: reduced QR visual bulk, moved it slightly upward, replaced the heavy floating white patch with a smaller white quiet-zone field on a restrained dark backing plate, thinned the frame treatment, removed heavy shadow styling, preserved the approved QR Landing / Campaign QR, and kept generated PDFs local/ignored only.


### SUPPORT-FLOW001
- **Task ID:** SUPPORT-FLOW001
- **Task Name:** Support page intake wiring / support request handling
- **Status:** DONE
- **Category:** SUPPORT / OPS
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Wire support form to dedicated `/api/support`; send operator support notifications and customer acknowledgement using existing email runtime; maintain strict runtime separation from estimate flow.
- **Forbidden Scope:** No QUOTE-GEN001/CRM-STAGEFLOW001/SCHED-FOLLOWUP001 work; no `/api/lead-signal` changes; no HubSpot estimate pipeline/stage/requestId/Stripe/scheduling authority changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Support form backend endpoint added at `/api/support`; frontend submission UX hardened with explicit success/error messaging; operator notification + customer acknowledgement implemented via existing Resend runtime env pattern; HubSpot support write deferred for separate task; version bumped to `v1.0.59`.
- **Next Task Recommendation:** QUOTE-GEN001 only after SUPPORT-FLOW001 manual QA pass.

### SUPPORT-HUBSPOT001
- **Task ID:** SUPPORT-HUBSPOT001
- **Task Name:** Optional HubSpot ticket/task support-request sync
- **Status:** READY
- **Category:** SUPPORT / CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Optional bounded support-request to HubSpot ticket/task sync only if contract-safe without estimate pipeline impact.
- **Forbidden Scope:** No estimate deal-stage automation changes; no schema/property/pipeline changes without explicit revision.

### FITCHECK-CTA001
- **Task ID:** FITCHECK-CTA001
- **Task Name:** Recommendation-state CTA hierarchy cleanup
- **Status:** DONE
- **Category:** FUNNEL / UX
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Keep one clear primary CTA (`Continue To Estimate Request`), keep `Compare Packages` as secondary, demote utility actions (review answers/start over/planner/change package) to lower emphasis, preserve recommendation logic and contact-route context propagation.
- **Forbidden Scope:** No SUPPORT-FLOW001, QUOTE-GEN001, CRM-STAGEFLOW001, or SCHED-FOLLOWUP001 implementation; no `/api/lead-signal`/HubSpot/Stripe/requestId/Resend/scheduling runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Removed duplicate estimate CTA (`Request My Estimate`), retained primary/secondary hierarchy, moved utility actions to low-emphasis link treatment, preserved `/contact` query propagation for fit/discovery context, version bumped to `v1.0.58`, protected runtime untouched.
- **Next Task Recommendation:** SUPPORT-FLOW001

### FUNNEL-ARCH002
- **Task ID:** FUNNEL-ARCH002
- **Task Name:** Funnel architecture implementation cleanup
- **Status:** DONE
- **Category:** FUNNEL / UX-ARCHITECTURE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Implement approved nav/page-role cleanup from `docs/audits/funnel_arch001_rev01.md`.
- **Allowed Scope:** remove/demote irrelevant links; align nav hierarchy; align page CTAs with final journey; keep System Planner (Preview) non-authoritative; preserve estimate/contact route behavior.
- **Forbidden Scope:** no quote generation; no HubSpot changes; no Stripe changes; no scheduling changes; no protected runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required diff/rg audits completed.
- **Completion Notes:** Primary nav cleaned to funnel-first hierarchy (Home, Packages, Fit Check, Estimate), disruptive primary links demoted/removed, System Planner (Preview) retained as secondary utility access, Support retained, `/contact` intake behavior preserved, protected runtime untouched.
- **Next Task Recommendation:** ESTIMATE-FLOW001

### CRM-CONTRACT001
- **Task ID:** CRM-CONTRACT001
- **Task Name:** Canonical HubSpot Pipeline Contract Lock
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/runtime-contract hardening)
- **Purpose:** Permanently document live HubSpot pipeline internal IDs and production initial-stage env var to eliminate future guesswork.
- **Allowed Scope:** Documentation-only updates under `docs/`; task register lifecycle note updates.
- **Forbidden Scope:** No runtime code changes; no HubSpot API writes/mutations; no Stripe changes; no scheduling implementation changes; no SMS/reminders.
- **Target Files:**
  - `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
  - `docs/runtime/hubspot_sync_contract.md`
  - `docs/runtime/hubspot_properties.md`
  - `docs/system/master-task-register.md`
  - `docs/DOCUMENT_CATALOG.md` (if catalog update needed)
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "2282258169|3680633583|HUBSPOT_ESTIMATE_INITIAL_STAGE_ID|WNYHS Sales Pipeline|New Estimate Request|PROTECTED_RUNTIME" docs .`
- **Completion Notes:** Live pipeline ID (`2282258169`) and canonical stage IDs documented; Cloudflare production env `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583` documented; protected runtime and post-deploy QR validation rule restated.

### CRM-PIPELINE001
- **Task ID:** CRM-PIPELINE001
- **Task Name:** Canonical HubSpot Pipeline Architecture
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** Documentation-only CRM architecture hardening
- **Purpose:** Define canonical HubSpot deal pipeline stages, movement rules, operator workflow, dedupe guidance for CRM-DEAL002B, stage-ID/env guidance, and protected-runtime boundaries without runtime code changes.
- **Allowed Scope:**
  - create/update documentation under `docs/`
  - define canonical stage lifecycle architecture
  - define operator workflow and dedupe rules
  - update task register status
- **Forbidden Scope:**
  - do not modify runtime/source code
  - do not modify Stripe logic
  - do not modify scheduling implementation
  - do not modify HubSpot schema/properties/pipeline records directly from code
- **Target Files:**
  - `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
  - `docs/system/master-task-register.md`
  - `docs/DOCUMENT_CATALOG.md` (if catalog update needed)
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "CRM-PIPELINE001|New Estimate Request|Operator Review Needed|Walkthrough Scheduled|Deposit Paid|HUBSPOT_ESTIMATE_INITIAL_STAGE_ID|PROTECTED_RUNTIME|Protected runtime" docs .`
- **Completion Notes:** REV01 canonical pipeline architecture doc added; runtime protections restated; CRM-DEAL002B scope clarified and deferred.

### PLANNER-GUARD001
- **Task ID:** PLANNER-GUARD001
- **Task Name:** System Planner preview labeling and non-authoritative guardrails
- **Status:** DONE
- **Category:** FUNNEL / COPY / GUARDRAIL
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Keep planner accessible while clearly non-authoritative for quote/agreement/scope/pricing/HubSpot/Stripe/scheduling state.
- **Allowed Scope:** Planner label update to `System Planner (Preview)`; preview disclaimer copy; preserve route/behavior; docs + task register updates.
- **Forbidden Scope:** No quote generation; no HubSpot/Stripe/scheduling integration changes; no `/api/lead-signal` or `requestId` lifecycle changes; no SMS/reminders.
- **Target Files:** `src/content/wnyhsNavigation.ts`, `src/components/nav/WnyHomeSecurityNav.tsx`, `src/pages/HomeSecurityPlanner.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`, `docs/audits/planner_guard001_rev01.md`.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `git diff`/`rg` audits.
- **Completion Notes:** Updated visible version to v1.0.53; renamed customer-facing Planner labels to `System Planner (Preview)`; added preview/non-authoritative disclaimer copy on planner page; preserved planner route access and existing planner behavior; protected runtime untouched.


### FINISH-LINE-PAGES002
- **Task ID:** FINISH-LINE-PAGES002
- **Task Name:** Public funnel page QA cleanup and standards enforcement
- **Status:** ACTIVE
- **Category:** FUNNEL / QA / COPY / QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Authorize bounded finish-line cleanup across public WNYHS pages until operator explicitly closes the category.
- **Allowed Scope:**
  - Visual/page-shell cleanup
  - Header/footer consistency
  - QR funnel hardening
  - Legal/about/support copy cleanup
  - Public page layout consistency
  - Removal of SaaS/demo/assistant leakage
  - Standards enforcement using locked standards docs
  - Version bumps for visible deploy confirmation
- **Forbidden Scope:**
  - No Stripe/payment changes
  - No HubSpot schema/pipeline changes
  - No lead API behavior changes
  - No form payload changes
  - No field name/state key/payload key changes
  - No source tracking changes
  - No scheduling backend changes
  - No backend architecture changes
  - No pricing logic changes
  - No route behavior changes unless explicitly scoped
  - No asset renaming/moving/deleting
  - No unrelated lint cleanup
- **Target Files:**
  - Public page components
  - WNYHS layout/shell components
  - WNYHS styles
  - siteVersion.ts
  - standards docs only when needed
- **Runtime Systems Affected:** none unless explicitly approved
- **Validation Required:**
  - `npm run build`
  - page-specific bad-content scans
  - forbidden-claims scan
  - route/CTA scan
  - protected payload scan when forms are touched
- **Exit Criteria:**
  - Public funnel pages match locked standards
  - No SaaS/demo/operator leakage remains
  - Header/footer behavior is consistent
  - Protected systems untouched
- **Operator Decision Required:**
  - Category remains ACTIVE until operator explicitly closes it

### QR-HARDEN001
- **Task ID:** QR-HARDEN001
- **Task Name:** QR Landing shell hardening and SaaS contamination removal
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Parent Task:** FINISH-LINE-PAGES002
- **Purpose:** Remove remaining SaaS/operator/assistant shell leakage from QR Landing after QR-REDUX001.
- **Allowed Scope:**
  - remove assistant disclaimer banner
  - suppress legacy SaaS/operator footer
  - suppress duplicate footer wrappers
  - enforce WNYHS footer only
  - normalize QR success-state layout
  - preserve QR nav
  - preserve WNYHS assets
  - version bump
- **Forbidden Scope:**
  - no HubSpot changes
  - no lead API changes
  - no form payload changes
  - no field name changes
  - no consent logic changes
  - no source tracking changes
  - no Stripe changes
  - no scheduling backend changes
  - no route changes
  - no backend/API changes
- **Target Files:**
  - src/pages/QrLanding.tsx
  - src/components/Layout.tsx
  - src/components/homeSecurity/WnyhsSiteFooter.tsx
  - src/styles/qrLanding.css
  - src/styles/homeSecurityPremium.css
  - src/lib/siteVersion.ts
- **Validation Required:**
  - `npm run build`
  - bad-content scan
  - footer scan
  - protected-payload scan
  - QR nav scan
  - forbidden-claims scan
- **Exit Criteria:**
  - QR routes use pure WNYHS shell only
  - assistant banner gone
  - SaaS footer gone
  - duplicate footer/meta gone
  - success state normalized
  - protected form behavior preserved

### FUNNEL-OPS001
- **Task ID:** FUNNEL-OPS001
- **Task Name:** Main Funnel + QR Funnel Link/Form/CRM/Artifact/Customer Timing Audit
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** Current WNY Home Security funnel/runtime audit context
- **Purpose:** Audit the full operational customer journey across the main WNYHomeSecurity.com funnel and QR landing funnel, from page entry through lead capture, CRM writes, scheduling handoffs, customer/operator notifications, generated artifacts, payment/deposit handoffs, timing expectations, and missing pipeline states.
- **Allowed Scope:**
  - documentation/task-register update only
  - add FUNNEL-OPS001 as audit-first task
  - preserve scheduling as open
  - preserve completed scheduling implementation task statuses
  - reference DESIGN-SKINNING as active under CTX-BRANDING-UX-REV01 without changing design scope
  - define audit deliverables and validation expectations
- **Forbidden Scope:**
  - do not implement runtime features
  - do not close scheduling
  - do not downgrade scheduling
  - do not add SMS
  - do not add reminders
  - do not add install scheduling
  - do not add dispatch behavior
  - do not add customer self-confirmation
  - do not change Stripe behavior
  - do not change HubSpot schema
  - do not change customer-facing claims
  - do not change routes
  - do not change UI
  - do not modify source runtime files
- **Required Audit Deliverables:**
  - full route/page inventory
  - full link/CTA inventory
  - full form/API inventory
  - CRM write map
  - scheduling handoff map
  - customer notification map
  - operator notification map
  - artifact/document generation map
  - customer timing/state map
  - missing pipeline state list
  - broken/mismatched behavior list
  - forbidden claim/copy risk list
  - exact next implementation queue
- **Validation Required:**
  - `git diff -- docs/system/master-task-register.md docs/system/step-current.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "FUNNEL-OPS001|SCHED-IMPL|SCHED-HARDEN|DESIGN-SKINNING|CTX-BRANDING-UX-REV01" docs/system docs/DOCUMENT_CATALOG.md docs/specs docs/runtime`
  - confirm no source files changed

### DESIGN-SKINNING
- **Task Family ID:** DESIGN-SKINNING
- **Category:** DESIGN
- **Controlling Context:** CTX-BRANDING-UX-REV01
- **Status:** ACTIVE
- **Purpose:** Authorize ongoing bounded visual/branding/skinning refinement work across WNY Home Security funnels and operational UI surfaces without repeated governance activation overhead.
- **Allowed Scope:**
  - visual skinning
  - branding alignment
  - typography refinement
  - spacing/layout refinement
  - responsive polish
  - semantic-token-safe color/styling work
  - conversion-oriented UX refinement
  - visual hierarchy improvements
  - animation polish
  - landing page optimization
  - QR funnel visual refinement
  - yard sign / flyer / visual asset integration support
  - iconography refinement
  - component visual consistency
  - design-system refinement
  - token-safe accessibility improvements
- **Forbidden Scope:**
  - no Stripe/payment logic changes unless separately authorized
  - no scheduling architecture changes unless separately authorized
  - no HubSpot schema/runtime changes unless separately authorized
  - no backend security/auth changes unless separately authorized
  - no destructive repo cleanup
  - no silent architectural rewrites
  - no claims violating guardrails
  - no hardcoded styling outside approved semantic token system
  - no install scheduling implementation unless separately authorized
  - no SMS/reminder systems unless separately authorized
- **Execution Rule:** Multiple DESIGN-SKINNING subtasks may exist simultaneously, but Codex may execute only the explicitly named task in the active prompt.
- **Completion Rule:** This task family remains ACTIVE until the operator explicitly declares the branding/skinning initiative complete.
- **Example Subtasks (illustrative only):**
  - DESIGN-SKIN001 — Homepage visual refinement
  - DESIGN-SKIN002 — QR funnel conversion polish
  - DESIGN-SKIN003 — Mobile responsiveness polish
  - DESIGN-SKIN004 — Typography/system refinement
  - DESIGN-SKIN005 — Yard sign/print branding alignment
  - DESIGN-SKIN006 — Animation/motion polish
  - DESIGN-SKIN007 — Site-wide tactical brand system (VISUAL001 + VISUAL002)

### SCHED-IMPL002
- **Task ID:** SCHED-IMPL002
- **Task Name:** Shared Google Calendar Availability Read
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement read-only shared Google Calendar availability lookup through `GET /api/scheduling/availability` for estimate scheduling only.
- **Allowed Scope:**
  - implement Google Calendar read-only availability adapter
  - complete `GET /api/scheduling/availability`
  - normalize busy/free availability response
  - handle timezone safely
  - fail safely when Google Calendar config is missing or invalid
  - document required Google Calendar runtime variables
  - update scheduling runtime docs and deployment validation
- **Forbidden Scope:**
  - no Google Calendar event creation
  - no calendar writes
  - no appointment confirmation
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no Stripe/payment changes
  - no confirmed appointment claims
- **Target Files:**
  - existing scheduling API route/service files discovered from `SCHED-IMPL001`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, create if absent
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md`, only if new docs are created
- **Runtime Systems Affected:**
  - Scheduling
  - Google Calendar read-only availability
  - Deployment/runtime env documentation
- **Documentation Updates Required:**
  - scheduling ownership contract
  - Google Calendar runtime contract
  - deployment validation checklist
  - document catalog only if new doc added
- **Validation Required:**
  - `npm run build`
  - `npm run lint`, if available
  - `npm run test`, if available
  - `npm run typecheck`, if available
  - `rg` searches proving no calendar writes, no booking claims, no SMS/reminders/install scheduling
- **Exit Criteria:**
  - `GET /api/scheduling/availability` returns normalized read-only availability response
  - missing/invalid Google config fails safely
  - no calendar write exists
  - no appointment confirmation exists
  - no customer-facing booking confirmation claim exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL001` complete
  - scheduling architecture spec REV01 available
  - Google Calendar credentials/config supplied out-of-band by operator before runtime validation
- **Operator Decision Required:**
  - provide actual Google Calendar ID and credentials in deployment environment only, never in repo

## Scheduling Queue (CTX-SCHED-MVP-REV01)

### SCHED-IMPL003
- **Task ID:** SCHED-IMPL003
- **Task Name:** Estimate Appointment Request Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Create canonical estimate appointment request creation behavior tied to requestId and lead intake, while preserving pending owner/manual confirmation posture.
- **Allowed Scope:**
  - create appointment request data model or persistence boundary
  - connect estimate request submission to appointment request creation
  - preserve requestId correlation
  - set status to `PENDING_OWNER_CONFIRMATION`
  - notify operator if already supported by existing email/lead notification infrastructure
  - update HubSpot only if existing fields/supporting pattern already exists or documentation explicitly allows it
- **Forbidden Scope:**
  - no automatic booking
  - no confirmed appointment claim
  - no owner acceptance backend
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe/payment changes
  - no calendar event creation unless explicitly deferred to `SCHED-IMPL004` after owner confirmation
- **Target Files:**
  - existing estimate/lead/scheduling request handlers
  - existing scheduling service/module files
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/request_id_contract.md`
  - `/docs/runtime/lead_signal_contract.md`
  - `/docs/runtime/hubspot_sync_contract.md`, only if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - requestId lifecycle
  - lead signal
  - HubSpot sync, if directly affected
  - email notification, if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - requestId contract
  - lead signal contract
  - HubSpot sync contract only if behavior changes
  - deployment validation checklist
- **Validation Required:**
  - build/lint/test/typecheck where available
  - estimate request submission validation
  - requestId propagation validation
  - pending confirmation status validation
  - no confirmed booking claim search
- **Exit Criteria:**
  - estimate requests create or record appointment request state
  - appointment request is tied to requestId
  - status is pending owner/manual confirmation
  - no automatic booking exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL002` complete or explicitly not blocking
  - `SCHED-IMPL001` complete
- **Operator Decision Required:**
  - choose final persistence location if multiple viable repo patterns exist

### SCHED-IMPL004
- **Task ID:** SCHED-IMPL004
- **Task Name:** Owner Acceptance + Confirmation State
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Implement owner/manual confirmation state transition for estimate appointments after customer request creation.
- **Allowed Scope:**
  - create owner confirmation API/action
  - transition appointment request from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED`
  - record `confirmedBy` and `confirmedAt`
  - send confirmation email only after owner/manual confirmation
  - optionally create Google Calendar event only after owner confirmation if scheduling architecture spec allows it and runtime docs define it
  - update HubSpot status only if existing sync contract supports it
- **Forbidden Scope:**
  - no automatic booking
  - no customer self-confirmation
  - no install scheduling
  - no SMS
  - no reminders
  - no technician dispatch
  - no route optimization
  - no Stripe/payment changes
  - no owner bypass without audit fields
- **Target Files:**
  - existing scheduling API/service files
  - existing email notification files, if directly required
  - existing HubSpot sync files, if directly required
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/google_calendar_runtime.md`, if calendar event creation after owner confirmation is included
  - `/docs/runtime/hubspot_sync_contract.md`, if directly affected
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Runtime Systems Affected:**
  - Scheduling
  - Email notification
  - Google Calendar only if post-confirmation event creation is included
  - HubSpot sync only if directly affected
- **Documentation Updates Required:**
  - scheduling ownership contract
  - deployment validation checklist
  - Google Calendar runtime contract only if event creation after owner confirmation is included
  - HubSpot sync contract only if behavior changes
- **Validation Required:**
  - build/lint/test/typecheck where available
  - owner confirmation route/action validation
  - state transition validation
  - customer confirmation email validation, if implemented
  - audit fields validation
  - forbidden scope search
- **Exit Criteria:**
  - owner can confirm requested estimate appointment
  - appointment state transitions only after owner action
  - confirmation audit fields are stored
  - customer confirmation is only sent after owner confirmation
  - no automatic booking exists
  - no SMS/reminder/install scheduling exists
  - docs updated
  - validation reported
- **Dependencies:**
  - `SCHED-IMPL003` complete
  - `SCHED-IMPL002` complete if confirmation depends on calendar availability or calendar event creation
- **Operator Decision Required:**
  - confirm whether `SCHED-IMPL004` should create a Google Calendar event after owner confirmation, or only update internal state first
- **Completion Notes:**
  - Owner confirmation endpoint/action implemented at `POST /api/scheduling/confirm`.
  - `requestId`-keyed appointment requests now transition from `PENDING_OWNER_CONFIRMATION` to `CONFIRMED` only after owner/manual action.
  - Audit fields `confirmedBy` and `confirmedAt` are persisted on confirmation.
  - Invalid `requestId` handling and no-auto-confirm behavior are covered by tests.
  - Google Calendar event creation intentionally deferred; no calendar writes introduced.

### SCHED-IMPL005
- **Task ID:** SCHED-IMPL005
- **Task Name:** Durable Appointment Request Storage
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Replace or supplement the temporary in-memory appointment request store with a durable repo-approved persistence boundary for estimate appointment requests.
- **Allowed Scope:**
  - evaluate existing repo storage patterns
  - implement durable storage for appointment request records
  - preserve requestId correlation
  - preserve scheduling statuses
  - preserve confirmedBy / confirmedAt audit fields
  - migrate API usage from in-memory-only store to durable boundary
  - maintain existing endpoint behavior
- **Forbidden Scope:**
  - no install scheduling
  - no SMS
  - no reminders
  - no automatic booking
  - no customer self-confirmation
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
  - no calendar writes unless already implemented elsewhere and explicitly authorized
- **Target Files:**
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - related scheduling API files
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - appointment requests survive beyond single in-memory process scope using approved durable boundary
  - requestId lookup works
  - confirmation audit fields persist
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - Scheduling appointment-request storage now supports durable Cloudflare KV through `APPOINTMENT_REQUESTS_KV` with in-memory fallback limited to local/test scenarios.
  - `/api/lead-signal`, `/api/scheduling/request`, and `/api/scheduling/confirm` now read/write through the durable-ready boundary while preserving `requestId` correlation and owner-confirmation gating.
  - Confirmation metadata (`confirmedBy`, `confirmedAt`) and status transitions remain preserved with persisted updates.
  - Added/updated tests cover request creation, lookup, confirmation persistence, invalid `requestId`, and no-auto-confirm posture.
  - Runtime docs updated with required KV binding and deployment validation checklist updates.

### SCHED-IMPL006
- **Task ID:** SCHED-IMPL006
- **Task Name:** Post-Owner-Confirmation Calendar Event Creation
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** After owner confirmation only, create a Google Calendar event for the confirmed estimate appointment.
- **Allowed Scope:**
  - add Google Calendar write behavior only after owner confirmation
  - store calendarEventId on appointment request if supported
  - preserve confirmedBy / confirmedAt audit fields
  - fail safely if calendar write fails
  - keep appointment state behavior explicit and documented
- **Forbidden Scope:**
  - no calendar write before owner confirmation
  - no automatic booking
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no Stripe changes
  - no HubSpot schema changes unless explicitly required and separately documented
- **Target Files:**
  - `functions/api/scheduling/googleCalendarAvailability.ts` or new calendar write adapter
  - `functions/api/scheduling/confirm.ts`
  - `functions/api/scheduling/appointmentRequestStore.ts`
  - tests
  - `/docs/runtime/google_calendar_runtime.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - calendar event creation occurs only after owner confirmation
  - calendarEventId is recorded if event creation succeeds
  - failure is logged/safely returned without exposing secrets
  - no pre-confirmation calendar writes exist
  - tests added/updated
  - docs updated

### SCHED-IMPL007
- **Task ID:** SCHED-IMPL007
- **Task Name:** Customer Confirmation Email After Owner Acceptance
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Send customer confirmation email only after owner acceptance confirms the estimate appointment.
- **Allowed Scope:**
  - use existing email infrastructure
  - send confirmation only after `POST /api/scheduling/confirm` succeeds
  - include safe pending/confirmed language based on actual state
  - preserve requestId correlation
  - log/send failure safely
- **Forbidden Scope:**
  - no SMS
  - no reminders
  - no install scheduling
  - no technician dispatch
  - no automatic booking
  - no payment/Stripe changes
  - no marketing automation expansion
  - no unsupported claims
- **Target Files:**
  - existing email/resend runtime files
  - `functions/api/scheduling/confirm.ts`
  - tests
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/runtime/resend_runtime.md`
  - `/docs/runtime/deployment_validation.md`
  - `/docs/system/master-task-register.md`
- **Exit Criteria:**
  - customer confirmation email is sent only after owner confirmation
  - failure does not create false confirmation claims
  - requestId correlation is included
  - tests added/updated
  - docs updated
- **Completion Notes:**
  - `POST /api/scheduling/confirm` now performs customer confirmation email attempts only after owner confirmation succeeds and after the post-confirmation calendar write attempt completes.
  - Email copy uses bounded owner-confirmed estimate language and includes `requestId`, confirmed window text, timezone, and company contact details.
  - Calendar event link is included only when `calendarEventHtmlLink` is available; failure/no-link paths avoid false invite claims.
  - Email delivery failures are logged with safe diagnostics and do not roll back `CONFIRMED` status or calendar metadata.
  - Tests updated to cover sequencing, requestId inclusion, safe failure behavior, and invalid request handling without pre-confirmation email sends.

### SCHED-IMPL008
- **Task ID:** SCHED-IMPL008
- **Task Name:** Scheduling MVP End-to-End Validation Pass
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Purpose:** Validate the full estimate scheduling MVP path from lead intake through availability read, appointment request creation, owner confirmation, and allowed post-confirmation effects.
- **Allowed Scope:**
  - end-to-end validation only
  - test coverage updates
  - documentation corrections
  - deployment checklist updates
  - issue list for remaining defects
- **Forbidden Scope:**
  - no new features
  - no SMS
  - no reminders
  - no install scheduling
  - no dispatch
  - no Stripe changes
  - no HubSpot schema changes
  - no copy expansion beyond correcting unsafe claims
- **Target Files:**
  - tests
  - `/docs/runtime/deployment_validation.md`
  - `/docs/runtime/scheduling_ownership.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md` only if needed
- **Exit Criteria:**
  - scheduling MVP validation matrix is complete
  - known baseline lint/test/typecheck failures are separated from task regressions
  - request/pending/confirmed behavior is validated
  - forbidden scope search passes
  - docs updated
- **Completion Notes:**
  - Validation pass confirmed implemented estimate scheduling MVP lifecycle: availability read, appointment request creation, pending-owner state, owner confirmation transition, post-confirmation calendar write attempt, and post-confirmation customer email attempt.
  - Focused scheduling tests pass (`appointmentRequestCreation`, `appointmentOwnerConfirmation`, `googleCalendarAvailability`).
  - Known repository baseline failures remain unrelated to scheduling scope: lint repo errors, full test suite failure in `src/pages/__tests__/operatorNavbar.test.tsx`, and api typecheck issues.
  - No forbidden-scope scheduling behavior (automatic booking, customer self-confirmation, SMS/reminders/install/dispatch runtime implementation) was introduced in scheduling API path.
  - Follow-up defects identified for MVP hardening: customer contact durability on confirm retries, duplicate calendar/email attempt risk on repeated confirm calls, and visibility/observability hardening for calendar/email failures.

---

## Historical / Supporting Tasks and Records

### T-RUNTIME003-001
- **Task ID:** T-RUNTIME003-001
- **Task Name:** RUNTIME003 — Stripe Runtime Contract
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical Stripe runtime contract document to codify server-side verification and webhook-authoritative payment success semantics.
- **Allowed Scope:** Documentation-only updates for Stripe runtime contract and required register/catalog status updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes except documentation-only description; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/stripe_runtime.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Stripe runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update runtime contract doc from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 Stripe runtime contract created; runtime ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/stripe_runtime.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Stripe runtime contract exists with template sections populated; ownership map reflects current status; register status and notes updated; no implementation code changes.
- **Dependencies:** RUNTIME005 documentation should be completed first per execution order guidance.
- **Operator Decision Required:** No.

### T-RUNTIME004-001
- **Task ID:** T-RUNTIME004-001
- **Task Name:** RUNTIME004 — Email Runtime Contracts
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical email runtime contracts for Resend outbound and Cloudflare Email Routing inbound ownership boundaries.
- **Allowed Scope:** Documentation-only updates to runtime email contracts and required register/catalog status updates.
- **Completion Notes:** REV01 contracts created for Resend and Cloudflare Email Routing; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/resend_runtime.md`, `/docs/runtime/cloudflare_email_routing.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Email runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update both email runtime contract docs from template, update ownership-map status, update task lifecycle in register.
- **Validation Required:** `git diff -- docs/runtime/resend_runtime.md docs/runtime/cloudflare_email_routing.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Both email runtime contracts exist with template coverage and clear inbound/outbound ownership boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME002 completed.
- **Operator Decision Required:** No.

### T-RUNTIME005-001
- **Task ID:** T-RUNTIME005-001
- **Task Name:** RUNTIME005 — Lead Signal + requestId Contracts
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical runtime contracts for `/api/lead-signal` and request-id lifecycle/diagnostics.
- **Allowed Scope:** Documentation-only updates to lead signal and request-id runtime contracts plus required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only reference to REV03; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Lead and diagnostics documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update lead-signal and request-id contract docs from template, update ownership-map status, update register task lifecycle.
- **Completion Notes:** REV01 contracts created for lead signal and requestId; ownership map updated to PARTIAL pending operator verification; DOCUMENT_CATALOG updated.
- **Validation Required:** `git diff -- docs/runtime/lead_signal_contract.md docs/runtime/request_id_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Lead-signal and request-id contracts exist with clear API-path and diagnostics boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME004 recommended first.
- **Operator Decision Required:** No.

### T-RUNTIME006-001
- **Task ID:** T-RUNTIME006-001
- **Task Name:** RUNTIME006 — HubSpot Runtime Contracts
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author canonical HubSpot runtime property and sync contracts aligned to locked REV03 constraints.
- **Allowed Scope:** Documentation-only updates to HubSpot runtime contracts and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes except documentation-only description; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/hubspot_properties.md`, `/docs/runtime/hubspot_sync_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** CRM runtime documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update HubSpot runtime contract docs from template, preserve REV03 API-write constraints, update ownership-map status and task lifecycle.
- **Validation Required:** `git diff -- docs/runtime/hubspot_properties.md docs/runtime/hubspot_sync_contract.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** HubSpot runtime contracts exist and explicitly preserve `/api/lead-signal` write path and REV03 boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME005 and RUNTIME003 documentation should precede this task.
- **Operator Decision Required:** No.

### T-RUNTIME007-001
- **Task ID:** T-RUNTIME007-001
- **Task Name:** RUNTIME007 — Scheduling Ownership Contract
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Author the canonical scheduling ownership runtime contract for request-capture/degrade ownership boundaries.
- **Allowed Scope:** Documentation-only updates for scheduling ownership contract and required register/catalog updates.
- **Forbidden Scope:** Source code edits; runtime behavior changes; environment variable changes; secret exposure; Stripe logic changes; HubSpot logic/schema changes; UI changes; route changes; product claims; deletion of docs.
- **Target Files:** `/docs/runtime/scheduling_ownership.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md` (if catalog entries must be updated).
- **Runtime Systems Affected:** Scheduling documentation only; no runtime behavior impact.
- **Documentation Updates Required:** Create/update scheduling ownership contract from template, update ownership-map status, update task lifecycle in register.
- **Completion Notes:** REV01 scheduling ownership contract created; runtime ownership map updated to PARTIAL; DOCUMENT_CATALOG entry added for scheduling runtime contract.
- **Validation Required:** `git diff -- docs/runtime/scheduling_ownership.md docs/runtime/runtime_ownership_map.md docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md` and `npm run build`.
- **Exit Criteria:** Scheduling ownership contract exists with documented ownership/fallback boundaries; ownership map updated; no implementation code changes.
- **Dependencies:** RUNTIME006 documentation recommended first.
- **Operator Decision Required:** No.

### T-RUNTIME008-001
- **Task ID:** T-RUNTIME008-001
- **Task Name:** RUNTIME008 — QR Attribution + Funnel Analytics Runtime Documentation
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Author documentation-only runtime governance for QR placard attribution assumptions, requestId lifecycle expectations, Cloudflare analytics interpretation, and campaign KPI ladder model.
- **Allowed Scope:** Runtime/governance documentation updates only.
- **Forbidden Scope:** No runtime implementation changes; no route/UI updates; no Stripe logic changes; no HubSpot schema/pipeline changes; no analytics SDK implementation.
- **Target Files:** `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/runtime/runtime_ownership_map.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** Documentation only.
- **Documentation Updates Required:** QR attribution model, requestId lifecycle expectations, Cloudflare interpretation guidance, KPI model, ownership-map status updates.
- **Validation Required:** `git diff -- docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`, targeted `rg` scans, and `npm run build`.
- **Exit Criteria:** Required runtime docs updated with bounded attribution governance and no production logic changes.
- **Dependencies:** RUNTIME005 and RUNTIME007 runtime documentation lineage.
- **Operator Decision Required:** No.


### T-RUNTIME009-001
- **Task ID:** T-RUNTIME009-001
- **Task Name:** RUNTIME009 — QRLanding Event Instrumentation
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement bounded QRLanding attribution instrumentation for `qrlanding_view`, `estimate_form_started`, and `estimate_form_submitted` while preserving `/api/lead-signal` write-path protections.
- **Allowed Scope:** Existing `/qrlanding` instrumentation wiring, requestId session persistence for QR attribution events, bounded runtime contract doc updates, and task register evidence updates.
- **Forbidden Scope:** No Stripe/payment logic changes; no HubSpot schema/pipeline/workflow changes; no route changes; no UI redesign; no new analytics vendors/SDKs.
- **Target Files:** `src/pages/QrLanding.tsx`, `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/system/master-task-register.md`.
- **Runtime Systems Affected:** QRLanding client event submission through existing `/api/lead-signal` path only.
- **Documentation Updates Required:** Reflect implemented event payload shape and requestId persistence behavior for QRLanding runtime events.
- **Completion Notes:** Added one-time `qrlanding_view` tracking on `/qrlanding` load, first-interaction `estimate_form_started` tracking, and submit-time `estimate_form_submitted` metadata on lead submission payload; preserved existing lead submission and protected runtime boundaries.
- **Validation Required:** `npm run build`; `rg -n "qrlanding_view|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`.
- **Exit Criteria:** All three QRLanding attribution events are emitted with `eventName`, `requestId`, `timestamp`, and `entryRoute=/qrlanding` via existing lead-signal path; build passes; protected systems untouched.
- **Dependencies:** RUNTIME008 documentation lineage.
- **Operator Decision Required:** No.




### T-RUNTIME010-001
- **Task ID:** T-RUNTIME010-001
- **Task Name:** RUNTIME010 — QR Attribution Event Schema Validation Contract
- **Status:** DONE
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define strict documentation contract for QR attribution event payload naming, required fields, validation expectations, failure handling, and reporting/join assumptions introduced after RUNTIME009.
- **Allowed Scope:** Runtime documentation/governance updates only across QR attribution, requestId contract clarification, and lead-signal contract clarification.
- **Forbidden Scope:** No runtime implementation code; no frontend/API logic changes; no Stripe changes; no HubSpot schema/pipeline/workflow changes; no route/UI copy changes.
- **Target Files:** `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/request_id_contract.md`, `/docs/runtime/lead_signal_contract.md`, `/docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Documentation-only schema contract; no runtime behavior changes.
- **Documentation Updates Required:** Canonical event-name list, required payload field rules, optional metadata guidance, requestId authority distinction, future validation expectations, and reporting/join assumptions.
- **Completion Notes:** Added RUNTIME010 documentation contract sections across runtime docs; clarified client attribution requestId vs server authoritative requestId; documented reject/ignore behavior for unknown event names and non-blocking posture for optional metadata.
- **Validation Required:** `git diff -- docs/runtime docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/codex/QA_CHECKLIST.md`; `rg -n "qrlanding_view|estimate_form_started|estimate_form_submitted|eventName|entryRoute|requestId|schema|validation" docs/runtime docs/system`; `rg -n "TODO|placeholder|implement|implementation" docs/runtime docs/system/master-task-register.md`; `npm run build`.
- **Exit Criteria:** RUNTIME010 schema validation contract is fully documented with bounded ownership and zero runtime implementation changes.
- **Dependencies:** RUNTIME009 completion evidence.
- **Operator Decision Required:** No.



### T-RUNTIME011-001
- **Task ID:** T-RUNTIME011-001
- **Task Name:** RUNTIME011 — QR Attribution Reporting / Review SOP
- **Status:** DONE
- **Category:** QR / OPS / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Create canonical, repeatable weekly QR attribution reporting/review SOP covering placard inventory, `/qrlanding` traffic, event ladder progression, lead/call/quote/job outcomes, directional conversion ratios, and operator decisions.
- **Allowed Scope:** Documentation-only reporting SOP updates; bounded cross-reference updates in runtime/QA docs; task lifecycle/register updates; document catalog update for new canonical doc.
- **Forbidden Scope:** No source code/runtime changes; no frontend/API changes; no Stripe changes; no HubSpot schema/workflow changes; no route/UI copy changes; no dashboard/SDK implementation.
- **Target Files:** `/docs/runtime/qr_attribution_reporting.md`, `/docs/system/master-task-register.md`, `/docs/DOCUMENT_CATALOG.md`, optional bounded references in `/docs/runtime/qrlanding_runtime.md`, `/docs/runtime/deployment_validation.md`, `/docs/codex/QA_CHECKLIST.md`.
- **Validation Required:**
  - `git diff -- docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "RUNTIME011|QR attribution reporting|placard|qrlanding_view|estimate_form_started|estimate_form_submitted|Cloudflare|KPI|closed jobs|booked quotes|evidence|weekly" docs/runtime docs/codex docs/system docs/DOCUMENT_CATALOG.md`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `npm run build`
- **Exit Criteria:** QR attribution reporting SOP exists with weekly cadence, required inputs, KPI ladder, directional conversion formulas, interpretation rules, decision rules, evidence format, and bounded governance notes; no runtime behavior changes.
- **Completion Notes:** Added canonical RUNTIME011 REV01 reporting/review SOP at `/docs/runtime/qr_attribution_reporting.md`; documented weekly cadence, KPI ladder, directional conversion calculations, Cloudflare/requestId interpretation boundaries, operator decision rules, and required evidence template; preserved docs-only scope and protected runtime boundaries.
- **Dependencies:** RUNTIME008, RUNTIME009, RUNTIME010, QA001 documentation lineage.
- **Operator Decision Required:** No.

## Ready Tasks

### FUNNEL-FIX001
- **Task ID:** FUNNEL-FIX001
- **Task Name:** Main Funnel Stage-Consistent CTA and Link Progression Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Eliminate wrong-stage CTA/link progression risk in the classic funnel without changing runtime architecture.
- **Allowed Scope:** Route/CTA target audit fixes and stage-accurate copy gating within existing funnel path.
- **Forbidden Scope:** No new features; no scheduling closure; no Stripe behavior change; no HubSpot schema/pipeline edits; no SMS/reminders/install scheduling/dispatch/self-confirmation.
- **Target Files:** `src/pages/**`, `src/routes/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel navigation only.
- **Documentation Updates Required:** Update audit evidence and register status lifecycle.
- **Completion Notes:** Implemented in `docs/audits/funnel_fix001_implementation_rev01.md` with stage-correct CTA and route normalization.
- **Validation Required:** Build + route/CTA grep validation + no forbidden claim regressions.
- **Exit Criteria:** All audited classic-funnel CTAs/links map to stage-correct next steps with no broken-stage destinations.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### QR-FIX001
- **Task ID:** QR-FIX001
- **Task Name:** QR/Newsite Stage-Safe Claim and Status Hardening
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Remove QR/newsite wording or status cues that imply confirmed scheduling/install readiness before owner confirmation.
- **Allowed Scope:** Bounded QR/newsite status/claim hardening aligned with manual-owner-confirmed scheduling posture.
- **Forbidden Scope:** No route changes; no scheduling automation; no Stripe logic change; no HubSpot schema change.
- **Target Files:** `src/pages/QrLanding.tsx`, `src/newsite/pages/**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Funnel messaging only.
- **Documentation Updates Required:** Audit delta log and register lifecycle.
- **Completion Notes:** Implemented in `docs/audits/qr_fix001_implementation_rev01.md` with stage-safe QR/newsite copy hardening and CTA/status continuity checks.
- **Validation Required:** Build + forbidden-claims grep + payment/scheduling promise grep.
- **Exit Criteria:** QR/newsite payment/scheduling claims remain pending-owner-safe and guardrail-compliant.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** No.

### COPY-FIX001
- **Task ID:** COPY-FIX001
- **Task Name:** Forbidden Claim Sweep and Approved Phrasing Matrix
- **Status:** DONE
- **Category:** COPY
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize prohibited claim handling and define approved replacements for future funnel copy updates.
- **Allowed Scope:** Documentation-first claim matrix + bounded copy-risk inventory updates.
- **Forbidden Scope:** No new customer promises; no architecture/runtime behavior changes.
- **Target Files:** `docs/audits/**`, `docs/specs/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None (documentation/copy governance).
- **Documentation Updates Required:** Add approved-phrasing matrix reference and update audit register links.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in COPY-FIX001 implementation REV01 after bounded copy sweep and validation.
- **Completion Notes:** Implemented in `docs/audits/copy_fix001_implementation_rev01.md` with claim-safe copy rewrites across main, newsite, and shared customer-facing surfaces.
- **Validation Required:** Claim-term grep scans + build.
- **Exit Criteria:** Forbidden claims inventory resolved into approved phrasing matrix and actionable file-level remediation map.
- **Dependencies:** FUNNEL-OPS001 audit accepted.
- **Operator Decision Required:** Yes (final claim-language approvals).

### CRM-FIX001
- **Task ID:** CRM-FIX001
- **Task Name:** Lead-Signal Parity and API Write Reliability Alignment
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure parity and reliability across lead-signal implementations while preserving REV03 API-layer-only write rules.
- **Allowed Scope:** API-layer parity/remediation within existing `/api/lead-signal` ownership boundaries.
- **Forbidden Scope:** No HubSpot schema/property/pipeline changes; no frontend direct HubSpot writes.
- **Target Files:** `functions/api/lead-signal.ts`, `api/lead-signal.ts`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead intake + CRM sync orchestration.
- **Documentation Updates Required:** Update runtime contracts with finalized parity ownership notes.
- **Validation Required:** Build + API diff review + CRM-write-path grep.
- **Exit Criteria:** Lead-signal paths are parity-audited with explicit owner path and no schema/pipeline drift.
- **Dependencies:** FUNNEL-OPS001 audit accepted; HubSpot REV03 lock maintained.
- **Operator Decision Required:** Yes (single-path consolidation vs dual-path parity policy).

### LEAD-FIX001
- **Task ID:** LEAD-FIX001
- **Task Name:** Lead Data Continuity / Funnel Intelligence Preservation
- **Status:** DONE
- **Category:** LEAD
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize customer-visible pending-owner states and request lifecycle visibility across funnel variants.
- **Allowed Scope:** State presentation/persistence refinement that preserves manual owner confirmation posture.
- **Forbidden Scope:** No auto-booking; no customer self-confirmation; no install scheduling.
- **Target Files:** `src/pages/**schedule**`, `src/newsite/pages/**schedule**`, `functions/api/lead-signal.ts`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Lead + scheduling handoff state visibility.
- **Documentation Updates Required:** Scheduling ownership and requestId/lead contract deltas where affected.
- **Validation Required:** Build + request status grep + no confirmed-booking claim grep.
- **Exit Criteria:** Pending-owner lifecycle states are consistently represented without implying confirmed appointments.
- **Dependencies:** CRM-FIX001 recommended first.
- **Operator Decision Required:** No.

### EMAIL-FIX001
- **Task ID:** EMAIL-FIX001
- **Task Name:** Customer and Operator Notification Timing Matrix Alignment
- **Status:** DONE
- **Category:** EMAIL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Align outbound message timing/content to explicit runtime states for customer and operator notifications.
- **Allowed Scope:** Template/state-mapping hardening within existing Resend outbound constraints.
- **Forbidden Scope:** No inbound routing changes; no SMS/reminders automation.
- **Target Files:** `functions/api/lead-signal.ts`, `functions/utils/emailTemplates.ts`, `docs/runtime/resend_runtime.md`, `docs/runtime/scheduling_ownership.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Resend outbound notifications.
- **Documentation Updates Required:** Runtime state-to-notification matrix documentation updates.
- **Validation Required:** Build + notification template grep + protected-claim grep.
- **Exit Criteria:** Notification outputs map cleanly to pending-owner/confirmed states with no overstated scheduling promises.
- **Dependencies:** LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (SLA/escalation policy thresholds).
- **Completion Notes:** EMAIL-FIX001 implemented bounded lead-signal customer acknowledgement + operator routing/context hardening using existing Resend runtime path; no HubSpot schema changes; no Stripe/scheduling architecture changes; version bumped to v1.0.44; validation + build completed.

### PAYMENT-FIX001
- **Task ID:** PAYMENT-FIX001
- **Task Name:** Post-Deposit Handoff Language and State Clarity
- **Status:** DONE
- **Category:** PAYMENT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Ensure payment-success and post-deposit messaging do not imply automatic scheduling confirmation.
- **Allowed Scope:** Copy/state framing hardening after verified payment success.
- **Forbidden Scope:** No Stripe checkout/webhook/verification semantic changes.
- **Target Files:** `src/pages/**payment**`, `src/newsite/pages/**payment**`, `docs/runtime/stripe_runtime.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Payment handoff messaging only.
- **Documentation Updates Required:** Stripe runtime handoff note updates if messaging contracts are revised.
- **Validation Required:** Build + payment-claim grep + verification-route integrity check.
- **Exit Criteria:** Post-payment surfaces preserve verified payment success while clearly preserving pending-owner scheduling confirmation.
- **Dependencies:** QR-FIX001 and COPY-FIX001 recommended first.
- **Operator Decision Required:** No.
- **Execution Lifecycle:** Promoted READY -> ACTIVE -> DONE in PAYMENT-FIX001 implementation REV01 after bounded payment handoff verification and claim-safe hardening.
- **Completion Notes:** PAYMENT-FIX001 implemented bounded Stripe payment/deposit handoff copy/state hardening while preserving server-side verification posture and existing Stripe architecture; no HubSpot schema/Stripe product/webhook redesign changes; version bumped to v1.0.45; validation + build completed.

### ARTIFACT-FIX001
- **Task ID:** ARTIFACT-FIX001
- **Task Name:** Quote/Agreement Artifact Lifecycle and Owed-Document Checklist
- **Status:** READY
- **Category:** ARTIFACT
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Normalize artifact lifecycle expectations and define customer owed-document checklist consistency.
- **Allowed Scope:** Artifact handling documentation + bounded artifact flow consistency updates.
- **Forbidden Scope:** No legal-term re-authoring outside approved docs; no route removals.
- **Target Files:** `src/pages/**quote**`, `src/pages/**agreement**`, `src/newsite/pages/**quote**`, `src/newsite/pages/**agreement**`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Quote/agreement artifact generation and presentation.
- **Documentation Updates Required:** Artifact lifecycle map updates and register lifecycle updates.
- **Validation Required:** Build + artifact route/CTA checks + print/review flow verification.
- **Exit Criteria:** Artifact lifecycle is consistent, traceable, and customer-owed-document expectations are explicit.
- **Dependencies:** FUNNEL-FIX001 recommended first.
- **Operator Decision Required:** No.

### PIPELINE-FIX001
- **Task ID:** PIPELINE-FIX001
- **Task Name:** Intermediate Pipeline State Model Completion
- **Status:** READY
- **Category:** PIPELINE
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Define and align missing intermediate funnel/CRM/scheduling states identified by FUNNEL-OPS001.
- **Allowed Scope:** State-model documentation and bounded transition-mapping updates.
- **Forbidden Scope:** No HubSpot schema/pipeline mutations without explicit Step revision.
- **Target Files:** `docs/runtime/hubspot_sync_contract.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/**`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Pipeline/state governance documentation.
- **Documentation Updates Required:** Add state-transition map and ownership notes.
- **Validation Required:** State keyword grep + build.
- **Exit Criteria:** Missing states are documented with transition ownership and no schema mutations.
- **Dependencies:** CRM-FIX001 and LEAD-FIX001 recommended first.
- **Operator Decision Required:** Yes (future runtime exposure sequencing).

### QA-FIX001
- **Task ID:** QA-FIX001
- **Task Name:** Funnel Journey Validator Expansion
- **Status:** READY
- **Category:** QA
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post-FUNNEL-OPS001 queue normalization)
- **Purpose:** Add repeatable validation coverage for links/CTAs/forms/API mappings against the normalized queue outcomes.
- **Allowed Scope:** QA script/checklist enhancement and audit validation documentation.
- **Forbidden Scope:** No funnel architecture changes; no runtime feature additions.
- **Target Files:** `docs/runtime/deployment_validation.md`, `docs/audits/**`, `package.json` (scripts only if needed), `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** QA validation process.
- **Documentation Updates Required:** Deployment validation and audit playbook updates.
- **Validation Required:** Build + QA command set execution evidence.
- **Exit Criteria:** Deterministic validation procedure exists for customer journey integrity and stage-safe claims.
- **Dependencies:** Completion of FUNNEL-FIX001 through PAYMENT-FIX001 recommended.
- **Operator Decision Required:** No.

---

## Active Tasks (Execution Driver)

Only tasks in this section with `Status: ACTIVE` are executable by Codex.

### FINISH-LINE-PAGES001
- **Task ID:** FINISH-LINE-PAGES001
- **Task Name:** Customer-Facing Page Completion, Redesign, Additions, Gallery, and Visual Polish
- **Status:** ACTIVE
- **Category:** FUNNEL / COPY / QA / VISUAL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Allowed Scope:**
  - create or improve customer-facing public pages
  - add `/our-work` gallery page
  - improve existing public page design consistency
  - improve homepage, QR funnel, main funnel, packages, contact, support, about, FAQ, trust, comparison, and related public pages
  - add structured image/gallery metadata
  - add reusable visual components if directly needed
  - add navigation/footer links where appropriate
  - improve copy clarity while obeying claims guardrails
  - use uploaded/public assets already in repo
  - improve responsive layout and customer-facing polish
  - keep finish-line page/design categories active until operator explicitly closes them
- **Forbidden Scope:**
  - no Stripe logic changes
  - no HubSpot schema or sync behavior changes
  - no scheduling/backend behavior changes
  - no lead API behavior changes
  - no pricing logic changes
  - no payment flow changes
  - no secrets/env var changes
  - no destructive deletes
  - no route removals
  - no claims implying guaranteed protection, crime prevention, police-grade, military-grade, hack-proof, or absolute safety
- **Execution Rule:** This finish-line task category remains ACTIVE until explicitly closed by the operator.

### VISUAL-OURWORK001
- **Task ID:** VISUAL-OURWORK001
- **Task Name:** Our Work gallery page implementation
- **Status:** ACTIVE
- **Category:** VISUAL / FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Parent Task:** FINISH-LINE-PAGES001
- **Scope:** Implement and polish `/our-work` using repository-hosted assets in `/public/images/our-work/` with centralized gallery metadata and customer-facing responsive presentation.
- **Forbidden Scope:** Inherits all FINISH-LINE-PAGES001 forbidden scope plus no image renaming/moves and no new package installs unless absolutely necessary.

### T-QA001-001
- **Task ID:** T-QA001-001
- **Task Name:** QA001 — Deployment Validation SOP + QA Checklist
- **Status:** DONE
- **Category:** QA / GOV / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Parent Task:** FINISH-LINE-PUBLICATION001
- **Purpose:** Maintain a repeatable pre-release/post-deploy validation SOP and checklist before publishing and before QR placard traffic expansion.
- **Allowed Scope:**
  - documentation-only updates to deployment validation SOP
  - documentation-only updates to QA checklist
  - bounded task-register lifecycle/status updates for QA001
  - document-catalog update only if canonical authority changes
- **Forbidden Scope:**
  - no source code edits
  - no runtime behavior changes
  - no frontend/API/route changes
  - no Stripe logic changes
  - no HubSpot schema/workflow changes
  - no secrets exposure
  - no historical document deletion
- **Target Files:**
  - `/docs/runtime/deployment_validation.md`
  - `/docs/codex/QA_CHECKLIST.md`
  - `/docs/system/master-task-register.md`
  - `/docs/DOCUMENT_CATALOG.md` (only if required by authority/catalog changes)
- **Validation Required:**
  - `npm run build`
  - `git diff -- docs/runtime docs/codex docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md`
  - `rg -n "QA001|deployment validation|QRLanding|qrlanding_view|estimate_form_started|estimate_form_submitted|requestId|Stripe|HubSpot|Cloudflare|lead signal|rollback|evidence" docs/runtime docs/codex docs/system docs/DOCUMENT_CATALOG.md`
  - `rg -n "TODO|placeholder|TBD|implement|implementation" docs/runtime/deployment_validation.md docs/codex/QA_CHECKLIST.md docs/system/master-task-register.md`
- **Exit Criteria:**
  - deployment validation SOP documents build/route/event/lead/requestId/Cloudflare/protected-system checks
  - QA checklist includes QRLanding attribution, protected-system, and evidence-capture requirements
  - rollback/escalation guidance is documented
  - task remains docs-only with no runtime behavior changes
- **Completion Notes:** Updated QA001 governance docs to REV02 with explicit QRLanding attribution checks (`qrlanding_view`, `estimate_form_started`, `estimate_form_submitted`), requestId correlation, Cloudflare deployment expectations, protected Stripe/HubSpot/route/claims safeguards, required evidence template, and rollback/escalation guidance; no source/runtime behavior changes performed.

---


### CRM-SCHEMA001
- **Task ID:** CRM-SCHEMA001
- **Task Name:** HubSpot CRM Contract Repair
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Forbidden Scope:** Stripe, SMS, reminders, install scheduling
- **Validation:** `npm run lint`; `npm run test -- --run`; required `rg` mapping/contract checks.




### FUNNEL-ARCH001
- **Task ID:** FUNNEL-ARCH001
- **Task Name:** Full funnel/page/nav architecture cleanup plan
- **Status:** DONE
- **Category:** FUNNEL / GOV / UX-ARCHITECTURE
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/audit-only planning gate before quote-generation implementation)
- **Scope:** Inspect route/page/nav/CTA architecture; define final journey, page roles, nav hierarchy, estimate role, planner role, duplicate/disruptive link findings, and bounded implementation sequence.
- **Forbidden Scope:** No UI/route/runtime/API/HubSpot/Stripe/scheduling implementation changes beyond visible version bump; no QUOTE-GEN001 or CRM-STAGEFLOW001 implementation.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `git diff` + `rg` governance checks.
- **Completion Notes:** Bumped visible site version to `v1.0.55`; added architecture audit doc `docs/audits/funnel_arch001_rev01.md` with dominant journey and alternate paths, page-role matrix, nav hierarchy recommendations, estimate/planner role decisions, duplicate/disruptive link findings, risk analysis, and bounded implementation order (`FUNNEL-ARCH002` → `ESTIMATE-FLOW001` → `QUOTE-GEN001` → `CRM-STAGEFLOW001`); protected runtime and HubSpot/Stripe logic unchanged.
### NAV-UX001
- **Task ID:** NAV-UX001
- **Task Name:** Route transition page-top normalization + intentional form persistence/reset
- **Status:** DONE
- **Category:** FUNNEL / UX-STABILITY
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Scope:** Normalize major customer-facing route transitions to open at page top; preserve existing persisted fit-check behavior; provide clear reset behavior for persisted fit-check state.
- **Forbidden Scope:** No `/api/lead-signal`, HubSpot runtime/schema/pipeline, requestId lifecycle, Resend, Stripe, scheduling authority, quote-generation, or CRM stage-flow changes.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `rg` + `git diff` audits.
- **Completion Notes:** Bumped visible version to `v1.0.54`; added route transition manager for major public routes (home/packages/discovery/contact/system planner/support) with hash-safe behavior; retained fit-check persistence and reset, normalized label to `Start Over`; preserved recommendation/query/contact propagation and protected runtime boundaries; added audit doc `docs/audits/nav_ux001_rev01.md`.

## Backlog Tasks

### NAV-BUG001
- **Task ID:** NAV-BUG001
- **Task Name:** Back/forward black screen + quote artifact render stability
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME-STABILITY
- **Controlling Context:** CTX-SCHED-MVP-REV01 (post MAIN-FUNNEL-FIX003C bounded stability hardening)
- **Scope:** Fix browser back/forward black-screen risk and add bounded quote/review missing-state fallbacks without adding quote-generation behavior.
- **Forbidden Scope:** No HubSpot/Stripe/requestId/scheduling authority changes; no QUOTE-GEN001 or CRM-STAGEFLOW001 behavior; no `/api/lead-signal` modifications.
- **Validation:** `npm run lint`; `npm run test -- --run`; `npm run build`; required `rg`/`git diff` audits.
- **Completion Notes:** Site version bumped to v1.0.52; removed duplicated hook-closure in `src/pages/QuoteReview.tsx` causing render instability risk; improved quote/review missing-data fallback messaging + recovery paths; protected runtime systems preserved; audit note added at `docs/audits/nav_bug001_rev01.md`.

- **QUOTE-GEN001** — Quote generation, HubSpot quote-stage update, customer/operator quote email delivery. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)
- **CRM-STAGEFLOW001** — Deal pipeline advancement rules after quote/deposit/scheduling events. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)

---

## Runtime Hardening Queue (GOV004)

Runtime documentation hardening is authorized as documentation-only work under the current Step102 context. The following recommended execution order is approved to avoid repeated one-by-one promotion stops while preserving ACTIVE-task gating:

1. **RUNTIME004 — Email Runtime Contracts**
2. **RUNTIME005 — Lead Signal + requestId Contracts**
3. **RUNTIME003 — Stripe Runtime Contract**
4. **RUNTIME006 — HubSpot Runtime Contracts**
5. **RUNTIME007 — Scheduling Ownership Contract**
6. **QA001 — Deployment Validation SOP** (promote from READY when safe)

Rationale:
- Cloudflare runtime is already documented.
- Email delivery boundaries should be locked before downstream lead/payment/customer-notification assumptions.
- Lead/request-id contract definitions should precede Stripe and HubSpot dependency contracts.
- Stripe runtime documentation should be completed before full deployment validation SOP activation.
- HubSpot token/property ambiguity should be isolated in its own bounded runtime contracts.
- Scheduling ownership remains documentation-only until any future implementation authorization.

---



### ESTIMATE-FLOW001
- **Task ID:** ESTIMATE-FLOW001
- **Task Name:** Estimate/contact/QR intake consolidation
- **Status:** DONE
- **Category:** FUNNEL / LEAD
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Consolidate estimate/contact/QR intake role and page structure after FUNNEL-ARCH002.
- **Scope:** Clarify `/contact?vertical=home-security` as central estimate gateway; support contextual estimate entry for recommended system, selected package, on-site walkthrough intent, QR/flyer context; preserve existing estimate submit behavior and `/api/lead-signal` contract.
- **Forbidden Scope:** no quote generation; no HubSpot schema/property/pipeline changes; no Stripe changes; no scheduling authority changes; no `/api/lead-signal` contract/runtime changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` and `rg` checks completed.
- **Completion Notes:** Estimate page copy/layout reframed as estimate gateway; direct nav estimate visitors now see explicit options; selected package links pass estimate intent context; on-site walkthrough intent framing added; QR/flyer context preserved; protected runtime untouched.
- **Next Task Recommendation:** QUOTE-GEN001 only after QA-LAUNCH001 passes.

### QUOTE-GEN001
- **Task ID:** QUOTE-GEN001
- **Task Name:** Quote generation and delivery
- **Status:** DONE
- **Category:** FUNNEL / CRM / EMAIL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Generate quote/review output from existing selected/recommended package context and deliver customer/operator quote copy.
- **Scope:** Preserve existing `/quoteReview` wiring with safe missing-context fallback; ensure estimate-review disclaimer language is visible; implement bounded quote email endpoint (`/api/send-quote`) reusing existing Resend runtime pattern for customer + operator/ownership copies.
- **Forbidden Scope:** No `/api/lead-signal` or `/api/support` changes; no Stripe/scheduling/SMS/reminders/autonomous booking changes; no PDF or AI proposal generation; no HubSpot schema/pipeline/property changes; no broad CRM-STAGEFLOW001 implementation.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Visible site version bumped to `v1.0.61`; quote review flow renders estimate-summary guidance from existing selected/recommended package context and retains safe missing-context fallback UI; `/api/send-quote` delivers estimate-summary copy to customer (when email exists) and operator/ownership with review-only disclaimer language; HubSpot quote logging and stage update deferred to bounded follow-up tasks (`QUOTE-HUBSPOT001`, `QUOTE-STAGE001`) pending safe API-layer contract path and idempotent stage-transition guardrails.
- **Next Task Recommendation:** CRM-STAGEFLOW001 only after manual QA passes.

### QUOTE-GEN001B
- **Task ID:** QUOTE-GEN001B
- **Task Name:** Quote flow completion + estimate-to-quote routing
- **Status:** DONE
- **Category:** FUNNEL / QUOTE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Complete customer-facing route from estimate gateway context into quote review while preserving protected runtime boundaries.
- **Scope:** Add estimate-gateway review CTA when selected/recommended context exists; ensure quote review can render from durable query/bootstrap context in addition to existing token/storage paths; provide safe missing-context recovery CTAs; preserve estimate-review disclaimer and existing quote send runtime path.
- **Forbidden Scope:** No `/api/lead-signal` or `/api/support` changes; no Stripe/scheduling/SMS/reminders/autonomous booking; no HubSpot schema/property/pipeline changes; no CRM stage-flow automation.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Version bumped to `v1.0.62`; `/contact` now conditionally shows “Review Estimate Summary” when selected-package or recommendation context exists and routes into `/quoteReview` with durable query context; `/quoteReview` now hydrates from token → saved quote → bounded query tier/recommendation fallback and shows required missing-context recovery CTAs (Find The Right System / Choose a Package / Request Estimate); send-quote path remained operational with existing customer-email validation and operator/ownership copy support.
- **Next Task Recommendation:** CRM-STAGEFLOW001 after manual QA.





### ESTIMATE-EMAIL001
- **Task ID:** ESTIMATE-EMAIL001
- **Task Name:** Refine customer estimate-request acknowledgement email
- **Status:** DONE
- **Category:** EMAIL / CUSTOMER TRUST / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Refine customer acknowledgement subject/body/greeting/next-step language for estimate requests while preserving existing dynamic context, protected `/api/lead-signal` runtime behavior, operator notification path, and HubSpot sync behavior.
- **Forbidden Scope:** No `/api/lead-signal` control-flow changes; no requestId lifecycle changes; no HubSpot schema/property/pipeline/stage logic changes; no Stripe/scheduling/SMS/support/quote runtime changes; no forbidden claims.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` and `rg` audits completed.
- **Completion Notes:** Visible version bumped to `v1.0.81`; customer acknowledgement email subject refined to “We received your WNY Home Security estimate request”; greeting/next-step/disclaimer/response-expectation/contact footer language updated for local professional clarity and mobile readability; dynamic selected-package + discovery context preserved; operator notification path and HubSpot/requestId/runtime behavior untouched.
- **Next Task Recommendation:** SCHED-GCAL001 only after ESTIMATE-EMAIL001 manual QA and launch-readiness review.

### QUOTE-SEND001
- **Task ID:** QUOTE-SEND001
- **Task Name:** Verify and harden send-quote runtime
- **Status:** DONE
- **Category:** FUNNEL / EMAIL / QUOTE
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Inspect/harden `/api/send-quote` validation + QuoteReview send UX, preserve estimate-summary disclaimer language, preserve missing-context safety and protected runtimes.
- **Forbidden Scope:** No QUOTE-HUBSPOT001, QUOTE-STAGE001, or CRM-STAGEFLOW001 implementation; no `/api/lead-signal` or `/api/support` behavior changes; no Stripe/scheduling/SMS/reminders/PDF/AI proposal changes.
- **Validation:** `npm run lint` (pre-existing unrelated failures unchanged), `npm run test -- --run` (pre-existing `src/pages/__tests__/operatorNavbar.test.tsx` failure unchanged), `npm run build` pass, required `git diff` + `rg` audits completed.
- **Completion Notes:** Visible version bumped to `v1.0.63`; `/api/send-quote` now rejects missing quote tier/review URL context and returns clearer delivery failure messaging; QuoteReview now exposes explicit home-security send action (`Send estimate summary`) with existing success/error banner flow; required estimate-summary disclaimer preserved in review + email path; HubSpot quote logging/stage automation remains deferred to `QUOTE-HUBSPOT001` / `QUOTE-STAGE001`.
- **Next Task Recommendation:** QUOTE-HUBSPOT001 (only after manual end-to-end send QA confirms stable delivery).

### QUOTE-HUBSPOT001
- **Task ID:** QUOTE-HUBSPOT001
- **Task Name:** Quote HubSpot context logging hardening
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Add bounded quote-summary note logging through protected API-layer path when safe against existing contracts.
- **Forbidden Scope:** No HubSpot schema/pipeline changes; no direct frontend writes; no broad CRM stage-flow automation.

### QUOTE-STAGE001
- **Task ID:** QUOTE-STAGE001
- **Task Name:** Quote stage transition hardening
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Scope:** Bounded idempotent quote stage transitions only after safe deal identification and exact stage-ID contract validation.
- **Forbidden Scope:** No broad CRM-STAGEFLOW001 implementation; no schema/pipeline changes; no Stripe/scheduling logic changes.

### CRM-STAGEFLOW001
- **Task ID:** CRM-STAGEFLOW001
- **Task Name:** CRM deal stage-flow rules
- **Status:** READY
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Define and implement deal pipeline advancement rules after quote/deposit/scheduling events.
- **Allowed Scope:** stage transition rules; idempotent stage updates; diagnostics.
- **Forbidden Scope:** no schema changes unless separately authorized; no Stripe verification changes; no scheduling authority changes.

### QA-LAUNCH001
- **Task ID:** QA-LAUNCH001
- **Task Name:** Launch QA for flyer/public traffic
- **Status:** READY
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Final public-traffic launch QA for flyer publishing.
- **Allowed Scope:** route QA; mobile QA; estimate request QA; email QA; HubSpot QA; back/forward navigation QA; QR flyer path QA.
- **Forbidden Scope:** no feature work unless a separate bug task is created.

### SCHED-FOLLOWUP001
- **Task ID:** SCHED-FOLLOWUP001
- **Task Name:** Scheduling follow-up hardening queue preservation
- **Status:** READY
- **Category:** SCHED
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Preserve scheduling category as open for future hardening without making it current blocker.
- **Allowed Scope:** scheduling QA/future hardening docs only unless separately activated.
- **Forbidden Scope:** no autonomous booking; no SMS/reminders unless separately authorized; no scheduling authority model changes unless separately authorized.

## Blocked Tasks

No BLOCKED tasks are currently recorded.

---

## Completed Tasks


### FUNNEL-CLEANUP001
- **Task ID:** FUNNEL-CLEANUP001
- **Task Name:** Main Funnel CTA + Structure Consolidation
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded frontend cleanup)
- **Purpose:** Reduce duplicate CTA competition, normalize CTA hierarchy, simplify package-card actions, and preserve package-aware context propagation.
- **Completion Notes:** Implemented canonical `/home-security` CTA hierarchy, normalized discovery completion CTA labels, simplified package card actions to Select + View details, preserved `vertical=home-security` and `tier=bronze|silver|gold` routing, and added audit doc `docs/audits/funnel_cleanup001_rev01.md`.

### FUNNEL-CLEANUP002
- **Task ID:** FUNNEL-CLEANUP002
- **Task Name:** Context Persistence + Intake Display
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded funnel-context hardening)
- **Purpose:** Display selected package tier on intake, preserve tier through lead submission, and propagate additive package context in existing email/HubSpot note paths.
- **Completion Notes:** Implemented selected-tier intake display for `tier=bronze|silver|gold`, added `deal.packageTier` submission from contact route context, added additive package tier lines to operator/customer email content and HubSpot note/context summary, preserved protected runtime constraints, and added audit doc `docs/audits/funnel_cleanup002_rev01.md`.

### FUNNEL-CLEANUP003
- **Task ID:** FUNNEL-CLEANUP003
- **Task Name:** Discovery Persistence + Recommendation Propagation
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded funnel-context persistence)
- **Purpose:** Preserve fit-check discovery context into contact intake payload and additive downstream operator email + HubSpot note context.
- **Completion Notes:** Added deterministic recommendation context propagation from discovery completion into `/contact` route params, added compact contact intake discovery summary display, added canonical `discoveryContext` payload submission from contact flow, and added additive discovery-summary lines to existing operator/customer email and HubSpot note output paths in `/api/lead-signal`; protected runtime behavior preserved; audit doc added at `docs/audits/funnel_cleanup003_rev01.md`.




### MAIN-FUNNEL-FIX003C
- **Task ID:** MAIN-FUNNEL-FIX003C
- **Task Name:** Planner CTA positioning / low-friction nav minimization
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded main funnel UX cleanup)
- **Purpose:** Clarify Planner as optional/advanced/later and reduce nav distraction from estimate-request conversion flow.
- **Completion Notes:** Updated visible site version to v1.0.51; repositioned top-nav Planner entry as secondary optional item; retained Planner route access; tightened Planner CTA wording in recommendation state to emphasize later optional use; preserved home-security → discovery → recommendation → contact path and runtime boundaries; documented implementation in `docs/audits/main_funnel_fix003c_rev01.md`.

### MAIN-FUNNEL-FIX003B
- **Task ID:** MAIN-FUNNEL-FIX003B
- **Task Name:** Recommendation-state clarity only
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-SCHED-MVP-REV01 (bounded main funnel UX clarity)
- **Purpose:** Make recommendation the clear primary post-submit state while preserving existing runtime and route/query contracts.
- **Completion Notes:** Added recommendation-state focus/scroll behavior, hid completed questionnaire by default after recommendation generation, added `Review my answers` toggle for reversible answer review, preserved recommendation logic and existing `Continue To Estimate Request` query propagation, and documented task in `docs/audits/main_funnel_fix003b_rev01.md`.

### T-STEP103-QA-001
- **Task ID:** T-STEP103-QA-001
- **Task Name:** Diagnose and fix Quote Review quote generation/display failure
- **Status:** DONE
- **Category:** QA

### T-STEP102-HARDEN-001
- **Task ID:** T-STEP102-HARDEN-001
- **Task Name:** Fix Payment → Schedule quote-scoped deposit validation
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-002
- **Task ID:** T-STEP102-HARDEN-002
- **Task Name:** Replace hardcoded payment vertical metadata with validated vertical context
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-003
- **Task ID:** T-STEP102-HARDEN-003
- **Task Name:** Add Agreement → Payment binding metadata
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-004
- **Task ID:** T-STEP102-HARDEN-004
- **Task Name:** Strengthen Quote → Agreement validation
- **Status:** DONE
- **Category:** PAYMENT

---


### T-SCHED001-001
- **Task ID:** T-SCHED001-001
- **Task Name:** SCHED001 — Safe Scheduling Posture + Future Scheduling Model Lock-In
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-STEP102-QRLANDING-REV01 with GOV004 runtime documentation hardening authorization in `/docs/system/step-current.md`.
- **Purpose:** Remove false-confirmation risk from current scheduling UX/copy and lock future scheduling model guidance for subsequent implementation tasks.
- **Allowed Scope:** Scheduling copy safety audit, minimal customer-facing copy hardening, runtime scheduling model documentation updates, bounded SCHED queue documentation, and register lifecycle update for this task only.
- **Forbidden Scope:** No Google Calendar implementation; no SMS/reminder/owner-acceptance implementation; no backend scheduling implementation; no Stripe/HubSpot/Resend/env-var/secret changes.
- **Target Files:** `docs/runtime/scheduling_future_model.md`, `docs/runtime/scheduling_ownership.md`, `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `src/pages/NeverMissAnotherEstimate.tsx`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Scheduling documentation and customer-facing scheduling safety copy only.
- **Documentation Updates Required:** Create future model doc, cross-link scheduling ownership/audit docs, update document catalog, and record task completion in register.
- **Validation Required:** `git branch --show-current`; `git rev-parse HEAD`; required `rg` audits for scheduling copy/semantics; `npm run build`; `git diff -- docs src functions`.
- **Exit Criteria:** Current copy does not imply auto-confirmed scheduling in audited customer-facing scheduling paths; future scheduling model is documented; bounded future SCHED queue recorded.
- **Dependencies:** IMPL009 completion context (manual-confirmation classification).
- **Operator Decision Required:** Yes (provided in operator prompt).



### CRM-DEAL002B
- **Task ID:** CRM-DEAL002B
- **Status:** DONE

### MAIN-FUNNEL-AUDIT002
- **Task ID:** MAIN-FUNNEL-AUDIT002
- **Status:** DONE

### MAIN-FUNNEL-FIX003A
- **Task ID:** MAIN-FUNNEL-FIX003A
- **Status:** DONE

### NAV-BUG001
- **Task ID:** NAV-BUG001
- **Status:** DONE

### NAV-UX001
- **Task ID:** NAV-UX001
- **Status:** DONE

### FUNNEL-ARCH001
- **Task ID:** FUNNEL-ARCH001
- **Status:** DONE

## Archived Tasks

No ARCHIVED tasks are currently recorded.

---

## Promotion Rule

- A task may be promoted to **ACTIVE** only when authorized by the current operational context in `/docs/system/step-current.md`.
- A promoted task must include the required task schema defined in `/docs/codex/CODEX_TASK_REGISTER_RULES.md`.
- If scope is unclear or outside the current context/controlling Step, stop and request a context revision before promotion.

---

## Codex Execution Rule

- Codex may execute only tasks in **Active Tasks** with `Status: ACTIVE`.
- Codex must not execute tasks in READY, BACKLOG, BLOCKED, DONE, or ARCHIVED states.
- Active Tasks are the operational execution driver within the current context.
- On completion, Codex must move finished work to DONE and preserve traceability.


### SCHED-HARDEN001
- **Task ID:** SCHED-HARDEN001
- **Task Name:** Owner Confirmation Idempotency + Durable Customer Contact Fields
- **Status:** DONE
- **Category:** SCHED
- **Controlling Context:** CTX-SCHED-MVP-REV01
- **Completion Notes:** Added idempotency guards for repeated owner confirmation side effects, persisted durable customer contact fields at appointment request creation, and added calendar/email audit metadata persistence with focused tests.


- **Completion Notes:** LEAD-FIX001 implemented canonical sendLeadSignal funnelContext continuity capture from existing funnel/newsite storage and URL metadata without HubSpot schema changes; version bumped to v1.0.43; validation + build completed.

### GOV-HARDEN002
- **Task ID:** GOV-HARDEN002
- **Task Name:** Protected Runtime + Funnel Contract Lock
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-SCHED-MVP-REV01 (documentation/governance hardening only)
- **Purpose:** Lock known-good protected runtime systems, canonical funnel flow, context fields, and HubSpot pipeline/stage/env contracts to prevent drift.
- **Scope:** Docs-only (`docs/`); no runtime/source changes.

## GOV-HARDEN002 Status Normalization Snapshot

- CRM-SCHEMA001 = DONE
- HOTFIX-LEAD001 = DONE
- CRM-DEAL002A = DONE / partial completion
- CRM-PIPELINE001 = DONE
- CRM-CONTRACT001 = DONE
- FUNNEL-CLEANUP001 = DONE
- FUNNEL-CLEANUP002 = DONE
- FUNNEL-CLEANUP003 = DONE
- GOV-HARDEN002 = DONE


### STD-LOCK001
- **Task ID:** STD-LOCK001
- **Task Name:** WNYHS brand, layout, and funnel standards lock + task-register authorization
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Create locked standards docs and authorize QR-REDUX001 execution.
- **Target Files:** `docs/brand/brand_asset_standards_rev01.md`, `docs/brand/page_layout_standards_rev01.md`, `docs/brand/header_footer_standards_rev01.md`, `docs/specs/qr_funnel_standards_rev01.md`, `docs/specs/public_funnel_standards_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`, `docs/system/step-current.md`, `docs/brand/visual_system_rev01.md`.
- **Runtime Systems Affected:** none
- **Validation Required:** docs grep checks only; build not required for docs-only scope unless separately demanded.
- **Exit Criteria:** standards docs created, catalog updated, QR-REDUX001 registered.

### QR-REDUX001
- **Task ID:** QR-REDUX001
- **Task Name:** QR Landing trust-first redesign (payload-safe)
- **Status:** ACTIVE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Redesign QR Landing as a WNYHS trust-first QR intake page.
- **Allowed Scope:** `/qrlanding` visual/layout/copy redesign; use existing approved assets; simplified QR nav; progressive form layout only if payload preserved; remove SaaS/demo/assistant leakage; footer parity.
- **Forbidden Scope:** no HubSpot changes; no lead API changes; no form payload changes; no field name changes; no source tracking changes; no consent logic changes; no Stripe/scheduling/backend changes.
- **Target Files:** actual QR page files; layout/footer/style files only as needed; `siteVersion` when executed.
- **Validation Required:** `npm run build`; bad-content scan; payload safety scan; footer scan; route/nav scan; forbidden claims scan.
- **Exit Criteria:** QR page no longer appears SaaS/demo; existing intake behavior preserved; WNYHS footer/header standards followed.


### BRAND-AUTH001
- **Task ID:** BRAND-AUTH001
- **Task Name:** Brand Asset Authority Document
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINISH-LINE-REV01
- **Purpose:** Establish canonical visual asset authority for WNYHS physical and digital branding.
- **Allowed Scope:**
  - `docs/brand/brand_asset_authority_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md` entry update only
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - routes
  - Stripe
  - HubSpot
  - new logo generation
- **Validation Required:**
  - documentation diff
  - asset path verification
- **Exit Criteria:**
  - brand authority doc exists
  - catalog updated
  - task registered or updated


### PRINTSYSTEM001
- **Task ID:** PRINTSYSTEM001
- **Task Name:** Print Production Standards
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish canonical physical print production standards after brand asset authority was created
- **Allowed Scope:**
  - `docs/brand/print_system_standards_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - production layout creation
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - related doc references verified
  - forbidden-claims scan
- **Exit Criteria:**
  - print standards doc exists
  - catalog updated
  - task registered or updated
  - no runtime/source behavior changed


### PRINT-ASSET004B
- **Task ID:** PRINT-ASSET004B
- **Task Name:** Half-Sheet Flyer Visual System Refinement
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** refine the half-sheet flyer generator so outputs align with the canonical premium WNYHS poster/placard visual style while preserving source-only generated-output workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if needed
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - QR placards
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - color outputs use premium dark WNYHS visual composition
  - grayscale outputs remain readable
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - half-sheet flyer generator visually refined
  - README updated
  - task registered or updated
  - generated outputs are local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Refined the generator from a plain white card layout to a premium dark WNYHS campaign composition using `PoleFlyerMallFlyer.png` as the visual benchmark, preserving the source-only generated-output workflow and the three approved half-sheet flyer variants.


### PRINT-ASSET004C
- **Task ID:** PRINT-ASSET004C
- **Task Name:** Flyer Composition Polish
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** polish the half-sheet flyer generator after PRINT-ASSET004B by reducing visual noise, improving focal hierarchy, integrating the crest better, elevating the QR block, tightening typography, and improving footer spacing while preserving the source-only workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/docs/system/master-task-register.md`
  - `/.gitignore` only if strictly necessary
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - new flyer variants
  - QR placards
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - flyer composition is visually polished, not rebuilt
  - crest integration improved
  - QR block improved
  - footer spacing improved
  - grayscale outputs remain readable
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - half-sheet flyer generator polished
  - exactly three flyer variants preserved
  - README updated if needed
  - task registered or updated
  - generated outputs are local/ignored only
  - no generated binaries are committed
  - no runtime/source behavior changed
- **Completion Notes:** Polished the PRINT-ASSET004B flyer composition without rebuilding the system: reduced background density, integrated the crest in a restrained dark/gold treatment, elevated the QR block with a campaign CTA, tightened typography, improved footer breathing room, preserved exactly three approved variants, and kept generated outputs local/ignored only.





### PRINT-ASSET004
- **Task ID:** PRINT-ASSET004
- **Task Name:** Half-Sheet Flyer Source Generator Package
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** create source-only reproducible half-sheet flyer generator package following the non-committed generated binary workflow
- **Allowed Scope:**
  - `/public/brand/print-assets/half-sheet-flyers/README.md`
  - `/public/brand/print-assets/half-sheet-flyers/source/generate-half-sheet-flyers.mjs`
  - `/public/brand/print-assets/half-sheet-flyers/source/flyer-content.json`
  - `/.gitignore`
  - `/docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - committed generated PDFs
  - committed generated PNGs
  - committed binary print outputs
  - QR placards
  - yard signs
  - identity card source packages
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - generator runs locally
  - generated outputs go only to ignored `generated/`
  - generated PDFs are not tracked
  - canonical QR Landing asset used
  - main website QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - source generator exists
  - content config exists
  - README/manifest exists
  - `.gitignore` prevents generated flyer binaries from being committed
  - generated outputs can be produced locally
  - no generated binaries are committed
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-controlled package uses generator, JSON content config, and manifest only; generated PDFs are reproducible local outputs written to `/public/brand/print-assets/half-sheet-flyers/generated/` and are intentionally not committed.

### PRINT-ASSET003
- **Task ID:** PRINT-ASSET003
- **Task Name:** Half-Sheet Flyer Production System
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish the half-sheet flyer production system after QR placard production system
- **Allowed Scope:**
  - `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - alternate AI logo versions
  - generated PDFs
  - generated PNGs
  - binary print outputs
  - production flyer files
  - yard signs
  - business cards
  - car magnets
  - apparel
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - asset path verification
  - forbidden-claims scan
  - source-only print asset workflow confirmed
- **Exit Criteria:**
  - half-sheet flyer system doc exists
  - catalog updated
  - task registered or updated
  - no production flyer binaries created
  - no runtime/source behavior changed

### PRINT-ASSET002
- **Task ID:** PRINT-ASSET002
- **Task Name:** QR Placard Production Files
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** generate first production-ready QR placard files for local campaign deployment
- **Allowed Scope:**
  - `/public/brand/print-assets/qr-placards/`
  - `/docs/system/master-task-register.md`
  - optionally `/docs/DOCUMENT_CATALOG.md` only if catalog conventions require listing print packages
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - unrelated print assets
  - yard signs
  - business cards
  - car magnets
  - leave-behinds
  - apparel
  - vendor purchasing
- **Validation Required:**
  - production files exist
  - PDFs open/build successfully
  - canonical QR Landing asset used
  - business-card QR not used
  - forbidden-claims scan
  - build check if repo standard requires it
- **Exit Criteria:**
  - color two-up PDF exists
  - color full-page PDF exists
  - grayscale two-up PDF exists
  - grayscale full-page PDF exists
  - README exists
  - task registered or updated
  - no runtime/source behavior changed
- **Completion Notes:** Source-controlled package uses generator + manifest only; production PDFs are reproducible local outputs written to `/public/brand/print-assets/qr-placards/generated/` and are intentionally not committed.

### PRINT-ASSET001
- **Task ID:** PRINT-ASSET001
- **Task Name:** QR Placard Production System
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** current physical brand / print execution context
- **Purpose:** establish the first deployable physical marketing asset system for QR placards
- **Allowed Scope:**
  - `docs/brand/print_assets/qr_placard_system_rev01.md`
  - `docs/DOCUMENT_CATALOG.md`
  - `docs/system/master-task-register.md`
  - optionally `public/brand/print-assets/qr-placards/` only if safe production source/output stubs are created
- **Forbidden Scope:**
  - runtime code
  - UI behavior
  - route changes
  - Stripe
  - HubSpot
  - new logo generation
  - unrelated print assets
  - yard signs
  - business cards
  - car magnets
  - apparel
  - vendor purchasing
- **Validation Required:**
  - documentation diff
  - asset path verification
  - forbidden-claims scan
  - QR destination/usage rule verification
- **Exit Criteria:**
  - QR placard system doc exists
  - catalog updated
  - task registered or updated
  - QR Landing QR is the only approved QR for placards
  - no runtime/source behavior changed

### ARCH001
- **Task ID:** ARCH001
- **Task Name:** Document Home Assistant + Node-RED automation architecture direction
- **Status:** READY
- **Category:** GOV / DOCS / ARCH
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Capture approved future local-first automation/orchestration direction without implementing runtime changes.
- **Allowed Scope:**
  - docs-only updates describing Home Assistant as customer-facing control layer
  - docs-only updates describing Node-RED as future advanced operator-facing orchestration layer
  - phased-adoption guidance and bounded follow-up task candidates
  - document-catalog updates if authority/status metadata changes
- **Forbidden Scope:**
  - no runtime/source code changes
  - no Home Assistant/Node-RED/MQTT/Frigate/AI configuration changes
  - no Stripe/HubSpot/Cloudflare/email behavior changes
  - no route/UI changes
- **Validation Required:**
  - `git diff -- docs`
  - `rg -n "Node-RED|Node RED|Home Assistant|MQTT|Frigate|automation orchestration" docs`
  - `rg -n "monitoring|guarantee|guaranteed|prevent|prevents" docs`
- **Exit Criteria:**
  - architecture direction documented as future-state only
  - Home Assistant remains primary customer-facing control layer in documentation
  - Node-RED documented as operator-facing advanced layer only
  - follow-up work captured as bounded future tasks only

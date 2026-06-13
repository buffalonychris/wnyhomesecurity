# Master Task Register

Status: Active  
Current Operational Context: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
Current Context Authority: CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Final-Hour Business Development Execution Unblock ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â REV01

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

### Current Context ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Task Record ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Codex Execution Relationship

- `step-current.md` defines the single active operational context.
- The Master Task Register defines bounded execution tasks within that context.
- Prompt-created bounded tasks are allowed only when higher-authority governance explicitly permits them.
- If request scope conflicts with the context or task schema, Codex must stop and request revision.

### Legacy/Historical Record Handling

- Historical task records are preserved for lineage and audit traceability.
- Legacy entries that predate GOV002 schema standardization are retained unless safe, bounded normalization is possible.
- No destructive rewrite of historical records is required for GOV002.

---

## Initiative Records (Non-Executable)

Initiative records group bounded tasks but are not executable task records. Codex may execute only task records promoted to `ACTIVE` in Active Tasks or explicitly bounded prompt-created work orders permitted by higher-authority governance.

### SOLUTION001
- **Initiative ID:** SOLUTION001
- **Initiative Name:** WNYHS Solution Page Standardization
- **Status:** ACTIVE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Establish and apply a repeatable WNYHS solution-page system for opportunity pages using the current approved standard in `docs/solution-system/`.
- **Current Authorized Task:** None. SOLUTION001-A and SOLUTION001-B are DONE.
- **Reserved Future Task:** Future production image generation or replacement-image wiring requires a separate bounded task and operator approval.
- **Protected Boundaries:** No protected runtime systems, global navigation, unrelated public pages, pricing/business rules, semantic token definitions, or unsupported claims.

### DESIGN001
- **Initiative ID:** DESIGN001
- **Initiative Name:** WNYHS Visual Design System Standard
- **Status:** DONE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Extract and apply the active WNYHS homepage visual system through bounded design-system governance tasks.
- **Current Authorized Task:** None. DESIGN001-A and DESIGN001-B are DONE.
- **Reserved Future Task:** No DESIGN001 lock task is authorized by DESIGN001-B.
- **Protected Boundaries:** No Homepage changes, Packages page changes, QR Landing changes, Support changes, Our Work changes, global navigation changes, semantic token definition changes, protected runtime systems, pricing/business rules, unsupported claims, UX001 work, or SOLUTION001-B locking work.

---

## Active Tasks (Execution Driver)

This section is the dispatch board for executable registered tasks. Codex may execute a registered task only when it appears here with `Status: ACTIVE`; prompt-created work orders remain executable only when explicitly bounded and permitted by higher-authority governance.

### QUOTESYSTEM-001
- **Task ID:** QUOTESYSTEM-001
- **Task Name:** Create Initial Quote System Governance Folder And Document Set
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the initial `/docs/quotesystem/` governance folder and document set, with floorplan capture and professional redraw as the first fully developed topic and the remaining quote-system areas represented as clear placeholders for future controlled passes.
- **Allowed Scope:** Docs-only governance setup; create `docs/quotesystem/`; create the quote-system governance standards and placeholders; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No app code, routes, UI changes, pricing engine, quote generator implementation, Home Assistant dashboard generator implementation, Stripe changes, HubSpot changes, scheduling changes, payment flow changes, runtime environment changes, source files, assets, dependencies, package-lock, public pricing, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/README.md`, `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`, `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`, `docs/quotesystem/SOLUTION_PLACEMENT001_Hardware_Placement_Standard_REV01.md`, `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`, `docs/quotesystem/FEATURES001_CUSTOMER_CAPABILITY_MAPPING_STANDARD_REV01.md`, `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`, `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the quote-system governance document set, register the documents in the document catalog, and record QUOTESYSTEM-001 as DONE after validation.
- **Validation Required:** Confirm all quote-system files exist; confirm markdown headings render/read cleanly; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for quote-system required terms; forbidden-claim grep on touched quote-system docs; `npm run build` per repository execution rules.
- **Exit Criteria:** `/docs/quotesystem/` exists; all required quote-system documents exist; document map lists every created quote-system document with maturity; floorplan capture and redraw standards are developed; placeholder standards identify future controlled expansion; document catalog is updated; this task is recorded as DONE; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Current governance authority chain, `docs/system/step-current.md`, `docs/system/master-task-register.md`, `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`, and `docs/catalogs/wnyhs_capability_catalog_rev03.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created the initial quote-system governance folder and document set. Floorplan field capture and professional redraw standards are active; property photo validation, hardware placement, Home Assistant compatibility/BOM, customer capability mapping, customer proposal structure, and dashboard-prep standards are placeholders for future controlled passes. No app code, runtime behavior, payment flow, HubSpot logic, scheduling behavior, assets, dependencies, or package-lock files were changed.

### QUOTESYSTEM-002
- **Task ID:** QUOTESYSTEM-002
- **Task Name:** Floorplan Redraw Fidelity Calibration
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refine floorplan reconstruction standards and add redraw fidelity calibration so the first usable quote-system task is clearly defined: producing a professional-looking replica from a customer/operator sketch plus reference photos while preserving original layout fidelity.
- **Allowed Scope:** Docs-only governance; expand floorplan capture/redraw/photo validation standards; add explicit symbol interpretation, acceptance/rejection, and source-photo validation rules; create `FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`; update the quote-system document map; update the document catalog; update this task register.
- **Forbidden Scope:** No application code, quote generator implementation, image-generation implementation, floorplan rendering tool implementation, camera placement implementation, sensor placement implementation, BOM/pricing implementation, Home Assistant dashboard generator implementation, UI, routes, assets, dependencies, package-lock, Stripe/payment changes, HubSpot changes, scheduling changes, runtime environment changes, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/FLOORPLAN000_Field_Capture_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN001_Professional_Redraw_Reconstruction_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN002_Property_Photo_Validation_Standard_REV01.md`, `docs/quotesystem/FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Refine the floorplan standards, add the redraw fidelity calibration standard, update the quote-system document map, add the catalog entry, and record QUOTESYSTEM-002 as DONE after validation.
- **Validation Required:** Confirm all target files exist; confirm markdown headings/readability; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for required fidelity, overlay, symbol, photo-validation, and downstream-gate terms; `npm run build`.
- **Exit Criteria:** FLOORPLAN000 reinforces sketch primacy, orientation, photo capture, symbols, door/opening width, and ambiguity rules; FLOORPLAN001 reinforces professional replica, preservation, no-inference/no-normalization, overlay validation, and rejection rules; FLOORPLAN002 is refined as an active photo validation standard; FLOORPLAN003 exists with calibration inputs, outputs, overlay test, acceptance/rejection criteria, funeral-home pilot notes, and downstream gate; catalog and document map are updated; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-001, current governance authority chain, `docs/system/step-current.md`, `docs/system/master-task-register.md`, and quote-system floorplan standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Refined the quote-system floorplan field capture, redraw, and photo validation standards; added `FLOORPLAN003_Redraw_Fidelity_Calibration_REV01.md`; updated the quote-system document map and document catalog. No app code, runtime behavior, payment flow, HubSpot logic, scheduling behavior, UI/routes/assets/dependencies, package-lock, quote generator, image generation, floorplan rendering tool, camera/sensor placement, BOM/pricing, or Home Assistant dashboard generator implementation was changed.

### QUOTESYSTEM-003
- **Task ID:** QUOTESYSTEM-003
- **Task Name:** Property Model + Operational Gates Architecture
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only quote-system governance defining the WNYHS Property Model as the central operational record connecting floorplan, photos, customer goals, solution placement, BOM, inventory, payment gates, scheduling gates, installer packets, and Home Assistant dashboard prep.
- **Allowed Scope:** Docs-only governance; create Property Model, quote-to-install gates, inventory readiness, and installer packet standards; update related quote-system docs with references; update the quote-system document map, document catalog, and this task register.
- **Forbidden Scope:** No app code, routes, UI, pricing engine, quote generator implementation, inventory implementation, dashboard generator implementation, Stripe/payment implementation, HubSpot implementation, scheduling implementation, runtime/environment changes, assets, dependencies, package-lock, or customer-facing deployment.
- **Target Files:** `docs/quotesystem/PROPERTY001_Property_Model_Architecture_REV01.md`, `docs/quotesystem/GATES001_Quote_To_Install_Operational_Gates_REV01.md`, `docs/quotesystem/INVENTORY001_Quote_System_Inventory_Readiness_REV01.md`, `docs/quotesystem/INSTALLER001_Installer_Packet_Standard_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_DOCUMENT_MAP_REV01.md`, `docs/quotesystem/QUOTE_SYSTEM_GOALS_REV01.md`, `docs/quotesystem/HARDWARE001_HA_COMPATIBILITY_AND_BOM_STANDARD_REV01.md`, `docs/quotesystem/QUOTE001_CUSTOMER_PROPOSAL_STRUCTURE_REV01.md`, `docs/quotesystem/DASHBOARD_PREP001_HA_DASHBOARD_REQUIREMENTS_STANDARD_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the four new quote-system governance standards, update related quote-system docs with references, add document-map entries, add catalog entries, and record QUOTESYSTEM-003 as DONE after validation.
- **Validation Required:** Confirm all target files exist; confirm markdown headings/readability; `git status`; `git diff --stat`; `git diff --check`; confirm only documentation files changed; targeted grep for Property Model, operational gates, inventory readiness, installer packet, payment method, and protected-boundary terms; forbidden-claim scan; `npm run build`.
- **Exit Criteria:** PROPERTY001 defines the central Property Model record and solution-first chain; GATES001 defines deposit, scheduling, inventory-purchase, final-payment, payment-method, and compliance gates; INVENTORY001 defines inventory readiness philosophy and buffer rules; INSTALLER001 defines installer packet contents, ownership, onsite window, and warehouse departure gate; related docs reference the new standards without implementation; no app/runtime/payment/HubSpot/scheduling systems are touched; validation passes; PR targets `main` without merge.
- **Dependencies:** QUOTESYSTEM-001, QUOTESYSTEM-002, current governance authority chain, `docs/system/step-current.md`, and quote-system floorplan standards.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created Property Model, operational gates, inventory readiness, and installer packet governance standards; updated quote-system goals, hardware/BOM, customer proposal, dashboard prep, document map, and document catalog. No app code, runtime behavior, payment flow, Stripe implementation, HubSpot logic, scheduling behavior, UI/routes/assets/dependencies, package-lock, quote generator, inventory system, or dashboard generator implementation was changed.

### PAGE-TOKEN-COMPLIANCE-GATE-001
- **Task ID:** PAGE-TOKEN-COMPLIANCE-GATE-001
- **Task Name:** Add Public Page Token Compliance Gate and Page-Level Task Pack
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add a standing public-page token compliance gate requiring every future public page edit to ask whether the target page is compliant with the current homepage-derived Token CSS Governance, and register the next page-level task pack.
- **Allowed Scope:** Docs-only governance closeout; register the new compliance gate and task pack; update catalog and manifest; no source/runtime/page/style changes.
- **Forbidden Scope:** No source code changes, no CSS changes, no app changes, no route changes, no navigation changes, no page implementation, no visual implementation, no pricing, no claims changes, no HubSpot, no Stripe/payment, no Resend, no Gmail/Workspace, no scheduling, no API/runtime behavior changes, no Cloudflare config, no secrets, no assets, no dependencies, no package-lock.
- **Target Files:** `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Documentation-only closeout.
- **Documentation Updates Required:** Add task-register closeout record; add catalog entries; add markdown manifest entries/addendum.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "PAGE_TOKEN_COMPLIANCE_GATE_REV01|PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01|PAGE-TOKEN-COMPLIANCE-GATE-001|Token CSS Governance|Page structure is page-specific|Visual language is shared" docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`. No `npm run build` because this is docs-only.
- **Exit Criteria:** The compliance gate and task pack are registered in the Master Task Register, Document Catalog, and Markdown Manifest; Task 0 is recorded as DONE; only docs bookkeeping files are changed; no app/source/runtime/protected-system files are changed; validation passes; PR targets `main` without merge.
- **Dependencies:** `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md`, `docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md`, DESIGN002, DESIGN003, DESIGN001, SOLUTION002, OPS002.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only governance bookkeeping for the public page token compliance gate and task pack. Registered both documents in the catalog, added the manifest addendum, and recorded PAGE-TOKEN-COMPLIANCE-GATE-001 as DONE without editing source, CSS, app, runtime, HubSpot, Stripe/payment, protected-system, asset, dependency, package-lock, or version files.

### OPS003-CODEX-CONTEXT-EFFICIENCY-001
- **Task ID:** OPS003-CODEX-CONTEXT-EFFICIENCY-001
- **Task Name:** Add Codex Context Efficiency Standard
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a reusable repository standard for reducing Codex prompt and context token usage while preserving authority-chain enforcement, bounded task execution, protected-system boundaries, validation discipline, and accuracy.
- **Allowed Scope:** Docs-only governance; create OPS003 context efficiency standard; register it in DOCUMENT_CATALOG and MARKDOWN_MANIFEST; add DONE task-register record.
- **Forbidden Scope:** No source/app/CSS/page changes; no visual implementation; no route/navigation changes; no runtime/API behavior changes; no Cloudflare config changes; no HubSpot changes; no Stripe/payment changes; no Resend changes; no Gmail/Workspace changes; no scheduling changes; no secrets; no assets; no dependencies; no package-lock; no version bump.
- **Target Files:** `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create OPS003, catalog it, add it to manifest, add completed task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "OPS003|Codex Context Efficiency|CONTEXT EFFICIENCY REQUIREMENT|Use repo docs as authority|Load only the smallest set|OPS003-CODEX-CONTEXT-EFFICIENCY-001" docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`. No `npm run build` required because this is docs-only.
- **Exit Criteria:** OPS003 exists; catalog and manifest include OPS003; Master Task Register records OPS003-CODEX-CONTEXT-EFFICIENCY-001 as DONE; only docs files changed; no source/app/CSS/runtime/protected-system files changed; no version bump; validation passes; PR targets `main` and is not merged.
- **Dependencies:** OPS002, PAGE_TOKEN_COMPLIANCE_GATE_REV01, PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01, current governance authority chain.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only governance creation for OPS003. Created the context efficiency standard, registered it in the document catalog, added the manifest addendum, and recorded OPS003-CODEX-CONTEXT-EFFICIENCY-001 as DONE without editing source, CSS, app, runtime, HubSpot, Stripe/payment, protected-system, asset, dependency, package-lock, or version files.

### DESIGN-TOKEN-SYSTEM-002
- **Task ID:** DESIGN-TOKEN-SYSTEM-002
- **Task Name:** Public Visual QA Cleanup After v1.0.121
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix specific post-deploy visual QA defects after DESIGN-TOKEN-SYSTEM-001 without redesigning pages, adding features, changing routes, or touching protected systems.
- **Allowed Scope:** Visible site version patch bump to `v1.0.122`; visual contrast fixes; typography/wrapping fixes; CSS token/primitives cleanup; image framing/object-fit fixes; minor class additions needed to apply existing visual primitives; minor copy spacing fixes only if verified real in the app; this task-register record.
- **Forbidden Scope:** No new business strategy, sections, routes, route renames, navigation structure changes, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, dependency changes, package-lock changes, asset generation, image generation, public pricing values, invented package prices, invented solution prices, supplier costs, BOM values, invented packages, invented solutions, invented hardware standardization, unsupported claims, or hardcoded new colors outside the visual token system unless unavoidable and explained.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public visual presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add/update this bounded `DESIGN-TOKEN-SYSTEM-002` task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; spacing-artifact grep; hardcoded color grep; `npm run build`; safe standard lint/typecheck scripts if present and applicable; manual local visual review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`.
- **Exit Criteria:** Visible site version is `v1.0.122`; header brand text is readable; packages premier-card text is readable; solution detail hero headings are less cramped; homepage hero image no longer has heavy letterboxing; WNYHS Core image framing is improved; third premier card layout is less awkward; spacing artifacts are verified as browser issues and fixed or documented as extraction artifacts; no fake prices, prohibited claims, broken images, route/navigation changes, features, or protected-system changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** DESIGN-TOKEN-SYSTEM-001, current context, DESIGN001/DESIGN002 visual governance, claims guardrails, offer architecture, package/BOM governance, brand/page/header/footer/public funnel standards, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Marked DONE based on production `v1.0.122` deployment visibility and follow-on authorization for the next bounded public offering publishing task.

### SOLUTION-PUBLISHING-001
- **Task ID:** SOLUTION-PUBLISHING-001
- **Task Name:** Publish Public Solution, Package, Category, Core, and Vault Offering Layer
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Turn governed WNYHS offer architecture into a usable public offering layer on `/packages?vertical=home-security` while preserving protected runtime, payment, CRM, scheduling, and claims boundaries.
- **Allowed Scope:** Visible site version patch bump to `v1.0.123`; governed public offer catalog data source; homepage category/package/solution card link wiring; home-security Packages/Solutions landing content for WNYHS Core, public categories, standard/planning solution cards, package starting points, and Vault quote-only public visibility; CSS needed to support those surfaces with existing visual tokens; this task-register record.
- **Forbidden Scope:** No public amounts, supplier costs, BOM cost publication, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, dependency changes, package-lock changes, asset generation, image generation, route renames, route removals, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, Planner behavior changes, Our Work behavior changes, Support form changes, medical-service claims, professional alarm service claims, public-safety response claims, theft or crime outcome promises, water damage or frozen-pipe outcome promises, all-device compatibility claims, code-compliance or safety-certification claims for Vault/custom work, or public promise that Vault/custom items are standard installed packages.
- **Target Files:** `src/lib/siteVersion.ts`, `src/content/wnyhsOfferCatalog.ts`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/index.css`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public offering visibility, linking, and content only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this bounded `SOLUTION-PUBLISHING-001` task-register record and mark it `DONE` only after validation passes and PR is opened.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; no-public-amount/payment-term grep on touched public files; `npm run build`; safe lint/typecheck scripts if present; manual/local review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` if possible.
- **Exit Criteria:** Visible site version is `v1.0.123`; offer catalog data source exists; homepage cards link somewhere useful; `/packages?vertical=home-security` explains WNYHS Core, categories, solution statuses, package starting points, and Vault quote-only review; four existing solution pages remain intact; no public amounts, unsupported claims, protected-system changes, route/nav changes, dependency changes, package-lock changes, or asset-generation changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded `SOLUTION-PUBLISHING-001` work order; current context; SOLUTION001, CLAIMS001, OFFERING001, PACKAGEBOM001, DESIGN001/DESIGN002, brand, public funnel, and OPS002 governance.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added `src/content/wnyhsOfferCatalog.ts` as the governed public offer catalog source; wired homepage category, package, and solution cards to useful offer anchors or existing live solution routes; rebuilt `/packages?vertical=home-security` as the public offerings landing page with WNYHS Core, categories, standard/planning solution visibility, package starting points, and Vault quote-only reviewed-individually visibility; bumped visible site version to `v1.0.123`; preserved existing solution detail routes, global navigation, protected runtime systems, HubSpot, Stripe/payment, scheduling, Cloudflare config, dependencies, package-lock, assets, and public amount boundaries. `npm run build`, touched-file ESLint, `git diff --check`, version grep, route/link inspection, and scoped no-public-amount/payment-term grep passed. Broad `npm run lint` and `npm run typecheck:api` still report unrelated baseline issues outside this task; `npm run typecheck:test` passed. Manual visual review is deferred to operator review because browser/screenshot automation was intentionally stopped for this run.

### SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX
- **Task ID:** SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX
- **Task Name:** Public Offerings Page Card Contrast Fix
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix post-merge readability regressions on `/packages?vertical=home-security` where light offering cards inherited pale text from dark or mixed visual sections.
- **Allowed Scope:** CSS-only contrast/readability fixes for public offerings card selectors; visible site version patch bump to `v1.0.124`; this task-register record.
- **Forbidden Scope:** No catalog data changes, public copy/content changes, route changes, navigation changes, new sections, pricing, supplier costs, BOM values, package/solution strategy changes, new claims, protected-system changes, dependency changes, package-lock changes, assets, image generation, or browser automation.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. CSS/readability and deploy-visible version only; protected runtime systems remain untouched.
- **Documentation Updates Required:** Add this minimal HOTFIX task-register record and mark DONE after validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; forbidden-claim grep; `npm run build`.
- **Exit Criteria:** Visible site version is `v1.0.124`; `.packages-core-card`, `.packages-category-card`, `.packages-vault-card`, `.packages-signature-card`, and `.packages-card-link` text is forced to readable existing WNYHS ink/accent tokens on light card surfaces; no content, catalog, routes, pricing, claims, protected systems, dependencies, assets, or browser automation are changed; validation passes and PR targets `main` without merge.
- **Dependencies:** SOLUTION-PUBLISHING-001, DESIGN001/DESIGN002 visual governance, CLAIMS001, OFFERING001, PACKAGEBOM001, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Scoped light-card text and link colors to existing WNYHS ink/accent tokens for public offerings readability; preserved `.wnyhs-card` global behavior, content, routes, catalog data, pricing, claims, and protected systems. Validation passed and PR opened to `main` without merge.

### SOLUTION-PUBLISHING-001-POLISH-HOTFIX
- **Task ID:** SOLUTION-PUBLISHING-001-POLISH-HOTFIX
- **Task Name:** Public Offerings Page Final Readability Polish
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Fix remaining package topic pill readability on `/packages?vertical=home-security` after SOLUTION-PUBLISHING-001 and its contrast hotfix.
- **Allowed Scope:** CSS-only readability fix for package topic pills; visible site version patch bump to `v1.0.125`; literal package-title spacing fixes only if confirmed in source; this minimal DONE record.
- **Forbidden Scope:** No catalog strategy changes, solution/package/Vault content changes, page restructure, route/navigation changes, pricing, claims, protected-system changes, runtime/API changes, dependency changes, package-lock changes, assets, image generation, or browser automation.
- **Target Files:** `src/lib/siteVersion.ts`, `src/index.css`, `src/content/wnyhsOfferCatalog.ts` only if source spacing errors are confirmed, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public CSS/readability and deploy-visible version only; protected runtime systems remain untouched.
- **Documentation Updates Required:** Add this minimal DONE hotfix task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; spacing-artifact grep; forbidden-claim grep; `npm run build`; safe focused lint/typecheck if quick and available.
- **Exit Criteria:** Visible site version is `v1.0.125`; package topic pills in `.packages-signature-card li` use existing WNYHS tokens for readable text; package title source strings are fixed only if literal spacing errors exist; no catalog strategy, routes, pricing, claims, or protected systems are changed; validation passes and PR targets `main` without merge.
- **Dependencies:** SOLUTION-PUBLISHING-001, SOLUTION-PUBLISHING-001-CONTRAST-HOTFIX, DESIGN001/DESIGN002 visual governance, CLAIMS001, OFFERING001, PACKAGEBOM001, and OPS002 repository-aware dispatch standard.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Scoped package topic pill text to existing WNYHS dark-surface text token for readability; verified package title strings already include expected spacing, so no catalog content changes were needed; preserved catalog strategy, routes, pricing, claims, and protected systems.

### SOLUTION-LISTING-VISUAL-PARITY-001
- **Task ID:** SOLUTION-LISTING-VISUAL-PARITY-001
- **Task Name:** Rebuild Public Solutions Listing Page for Visual Parity and Correct Page Structure
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rebuild the home-security branch of `/packages?vertical=home-security` as the governed public Solutions Listing surface with Home Landing Page visual parity, image-led solution cards, compact Vault presentation, Core value panel placement, and homepage-style CTA.
- **Allowed Scope:** Visible site version patch bump to `v1.0.126`; extend the existing governed public offer catalog with approved existing image paths and meaningful alt text; rebuild only the home-security branch of `src/pages/Packages.tsx`; remove the rendered category-card matrix and package starting-point matrix from the home-security Solutions page; add semantic CSS selectors for the Solutions Listing, solution grid/cards, Vault panel, Core value panel, and page CTA using existing WNYHS tokens; update this task-register record.
- **Forbidden Scope:** No route renames, route removals, global navigation changes, Search implementation, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, Contact form behavior changes, Support form changes, Planner behavior changes, Our Work changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, scheduling changes, API/runtime behavior changes, Cloudflare config changes, secrets, dependency changes, package-lock changes, asset generation, image generation, public prices, starting prices, supplier costs, BOM values, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, invented packages, package starting-point matrix on the Solutions page, large public category-card matrix on the Solutions page, professional alarm service claims, police/fire/medical dispatch claims, medical monitoring claims, caregiver replacement claims, theft/crime/burglary prevention claims, water-damage/frozen-pipe/mold prevention claims, universal compatibility claims, no monthly fees ever, works with everything, own it for life, never need another app, guaranteed future compatibility, or always local-only.
- **Target Files:** `src/lib/siteVersion.ts`, `src/content/wnyhsOfferCatalog.ts`, `src/pages/Packages.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`. `src/components/homeSecurity/HomeSecurityLanding.tsx` may be touched only if inspection proves shared image constants or card primitives must be reused safely.
- **Runtime Systems Affected:** None. Public Solutions Listing presentation and catalog image metadata only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this bounded task-register record and mark it `DONE` only after validation passes and PR is opened. Do not update `DOCUMENT_CATALOG.md` or `MARKDOWN_MANIFEST.md` for this implementation task.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep; category/package matrix removal grep; no-public-pricing/payment/product grep; forbidden-claim grep across `src docs`; `npm run build`; safe focused lint/typecheck if quick and available; manual review for `/packages?vertical=home-security`, `/home-security`, and the four live solution routes if possible without browser automation.
- **Exit Criteria:** Visible site version is `v1.0.126`; Solutions Listing follows Hero / Intro, Image-led solution grid, Vault / custom section, WNYHS Core value panel, Homepage-style CTA, Footer order; rendered category-card matrix and package starting-point matrix are removed from the home-security Solutions page; every public solution card is image-led with meaningful alt text; Vault remains quote-only/custom-reviewed and compact; Core appears after Vault and before final CTA with add-on expansion copy; final CTA prioritizes Request Estimate and Call/Text; existing live solution routes are preserved; no pricing, unsupported claims, protected-system changes, route/nav changes, assets, dependency changes, package-lock changes, catalog-strategy changes, or Home Landing regressions are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded `SOLUTION-LISTING-VISUAL-PARITY-001` work order; current context; SOLUTION002, DESIGN003, DESIGN002, DESIGN001, SOLUTION001, CLAIMS001, OFFERING001, PACKAGEBOM001, brand, page layout, public funnel, and OPS002 governance.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Rebuilt the home-security branch of `/packages?vertical=home-security` into the governed Solutions Listing order: homeowner-readable hero, image-led public solution grid, compact quote-only Vault section, WNYHS Core add-on value panel, and homepage-style estimate/call CTA. Removed the rendered public category-card matrix and package starting-point matrix from the Solutions page while preserving non-home-security package behavior and the existing package catalog data source. Extended `publicSolutions` with existing approved image paths and meaningful alt text; all catalog image paths were verified present. Bumped visible site version to `v1.0.126`. Preserved existing live solution routes, global navigation, catalog strategy, route behavior, assets, dependencies, package-lock, HubSpot, Stripe/payment, Resend, scheduling, API/runtime behavior, Cloudflare config, pricing, and protected systems. `npm run build`, focused ESLint on touched TS/TSX files, `npm run typecheck:test`, image-path verification, `git diff --check`, version grep, category/package matrix removal grep, and no-public-pricing/payment/product grep passed. Broad `npm run lint` and `npm run typecheck:api` still report unrelated baseline issues outside touched files. Manual visual review is deferred to operator because browser/headless screenshot automation was not authorized for this run.

### SOLUTION-DETAIL-VISUAL-PARITY-001
- **Task ID:** SOLUTION-DETAIL-VISUAL-PARITY-001
- **Task Name:** Bring Solution Detail Pages Into Token-Governed Visual Parity
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring existing Solution Detail pages into visual parity with the current Home Landing Page and Solutions Landing Page token-governed system while preserving existing page structure and avoiding media/data-model expansion.
- **Allowed Scope:** Visible site version patch bump to `v1.0.127`; token-governed visual parity updates for existing solution detail pages; typography, spacing, shell/panel styling, button styling, section borders/radii, card styling, CTA/footer parity, semantic selector cleanup, and this task-register record.
- **Forbidden Scope:** No two-image sample/media expansion, hardware image field addition, dashboard/app image field addition, media data-model expansion, modal/lightbox implementation, new image assets, image generation, asset replacement, new solution strategy, new solution pages, route changes, navigation changes, Solutions Landing page restructure, Homepage changes except unavoidable shared CSS effects, QR Landing changes, Fit Check behavior changes, Estimate behavior changes, Contact form behavior changes, Support form changes, Planner behavior changes, Our Work changes, HubSpot changes, Stripe/payment changes, Resend changes, Gmail/Workspace changes, scheduling changes, API/runtime behavior changes, Cloudflare config changes, secrets, dependencies, package-lock changes, public prices, supplier costs, BOM values, Stripe product IDs, checkout changes, quote calculation changes, hardware purchasing authorization, customer installation authorization, or unsupported public claims.
- **Target Files:** `src/lib/siteVersion.ts`, `src/pages/SolutionOpportunity.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `docs/system/master-task-register.md`. Optional files only if inspection proves necessary: `src/styles/wnyhsVisualGovernance.css`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`.
- **Runtime Systems Affected:** None. Public frontend presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this task-register record and mark DONE after validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; version grep for `v1.0.127`; targeted route/source grep confirming four solution slugs preserved; no-public-pricing/payment/product grep on touched public files; forbidden-claim grep on touched source/docs; hardcoded-color grep on touched CSS/source; `npm run build`; safe focused lint/typecheck if quick and available.
- **Exit Criteria:** Visible site version is `v1.0.127`; existing Solution Detail routes remain intact; existing Solution Detail structure is preserved; pages visually align with homepage-derived WNYHS token system; old dark-heavy/legacy visual drift is reduced; no media/data-model expansion, no new images, no modal/lightbox, no routes/nav, no pricing, no unsupported claims, no protected-system changes, no dependencies, and no package-lock changes are introduced; validation passes or unrelated baseline failures are documented; PR targets `main` and is not merged.
- **Dependencies:** PAGE_TOKEN_COMPLIANCE_GATE_REV01, PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01, OPS003, DESIGN002, DESIGN003, SOLUTION001 page/object standard, current public site version `v1.0.126`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Bumped visible site version to `v1.0.127` and brought the shared Solution Detail implementation closer to the current homepage/Solutions Listing token system using existing WNYHS homepage token variables and shared button/card primitives. Preserved the existing seven-section Solution Detail structure, four live solution routes, hero/sample image fields, media data model, navigation, assets, protected runtime systems, HubSpot, Stripe/payment, dependencies, and package-lock. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `npm run typecheck:test`, `git diff --check`, version grep, and route/source preservation grep passed. Required pricing/payment/claim/color greps were run; matches are existing CSS/register governance text or existing baseline style-token definitions, not new public pricing/payment behavior, unsupported claims, or newly introduced raw color values.

### DESIGN-TOKEN-SYSTEM-001
- **Task ID:** DESIGN-TOKEN-SYSTEM-001
- **Task Name:** Implement Sitewide Visual Token System and Normalize Public Marketing Pages
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement a governed WNYHS visual token system and normalize public marketing page presentation so shared visual tokens/classes replace scattered legacy dark/blue styling where practical.
- **Allowed Scope:** Visible site version patch bump; add `src/styles/wnyhsVisualGovernance.css`; import it globally; update font loading to Inter plus Manrope; normalize relevant global tokens in `src/index.css`; map WNYHS public marketing CSS and touched public proof surfaces to shared visual primitives; add claim-safe copy corrections on touched surfaces; add DESIGN002 REV02 governance record; update document catalog, markdown manifest, and this task record; run required validation and open PR to `main` without merge.
- **Forbidden Scope:** No new business strategy, invented packages, invented solutions, invented prices, supplier costs, BOM calculations, hardware purchase authorization, public pricing values, Stripe/payment changes, HubSpot changes, Resend changes, Gmail/Workspace changes, Cloudflare config changes, scheduling changes, API/runtime behavior changes, secrets, route changes, navigation redesign, QR Landing redesign, Fit Check behavior changes, Estimate behavior changes, payment/deposit behavior changes, protected-system edits, dependency changes, package-lock changes, deleted routes/components/assets, or hardcoded new colors outside the token system.
- **Target Files:** `index.html`, `src/main.tsx`, `src/index.css`, `src/styles/wnyhsVisualGovernance.css`, `src/styles/homeSecurityPremium.css`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/pages/Packages.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/components/homeSecurity/WnyhsMarketingLayout.tsx`, `src/components/homeSecurity/WnyhsPageLayout.tsx`, `src/components/homeSecurity/WnyhsSiteFooter.tsx`, `src/lib/siteVersion.ts`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Public marketing presentation and documentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add DESIGN002 REV02 governance record if input is available or record missing-source implementation standard; update `docs/DOCUMENT_CATALOG.md`; update `docs/MARKDOWN_MANIFEST.md`; add this bounded task-register record.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; font/token grep; forbidden-claim grep; hardcoded visual debt grep; `npm run build`; safe standard lint/typecheck scripts if applicable; manual local review for `/home-security`, `/packages?vertical=home-security`, `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` if possible.
- **Exit Criteria:** Site version is `v1.0.121`; WNYHS visual token CSS exists and is globally imported after `src/index.css`; public font loading uses Inter and Manrope; public marketing/homepage/package/solution surfaces use shared WNYHS primitives where practical; claim-risk copy touched by the task is corrected; no public pricing values are added; no catalog, package, hardware, HubSpot, Stripe, scheduling, API/runtime, route, navigation, secret, or Cloudflare changes occur; validation passes or unrelated baseline failures are documented; PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded DESIGN-TOKEN-SYSTEM-001 work order; current context; visual, catalog, solution, claims, offering, package/BOM, brand, public funnel, and repository dispatch governance documents.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Added the sitewide WNYHS visual governance CSS primitives, switched public font loading to Inter/Manrope, moved touched public marketing pages toward shared token classes, corrected touched claim-risk copy, recorded DESIGN002 REV02, and preserved protected systems and runtime behavior.

### HOMEPAGE-ASSET-POLISH-001
- **Task ID:** HOMEPAGE-ASSET-POLISH-001
- **Task Name:** Homepage Approved Asset Placement Polish
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve the existing `/home-security` homepage presentation by placing approved homepage image assets while preserving the current page structure and funnel behavior.
- **Allowed Scope:** Homepage image placement from `public/images/home-security/homepage/`; listed homepage copy cleanup only; CSS styling needed for correct responsive image scaling; visible site version patch bump; required validation.
- **Forbidden Scope:** No new routes, navigation rewrite, QR Landing changes, Fit Check changes, Quote/Estimate behavior changes, HubSpot changes, Stripe/payment changes, scheduling changes, API/runtime changes, Cloudflare changes, design-system rewrite, solution catalog rewrite, package/category architecture changes, large refactor, unsupported claims, or merge.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, approved existing assets under `public/images/home-security/homepage/`.
- **Runtime Systems Affected:** None. Homepage presentation only; protected runtime systems must remain untouched.
- **Documentation Updates Required:** Add this minimal ACTIVE task-register entry before implementation.
- **Validation Required:** `npm run build`; `git diff --check`; `git status`; confirm corrected sump pump asset usage and protected systems untouched.
- **Exit Criteria:** Homepage uses approved hero, category, package, solution, and WNYHS Core assets from `public/images/home-security/homepage/`; corrected `solution-sump-pump-awarenes.png` asset is used for Sump Pump Awareness; listed copy cleanup is applied only if matching text is present; visible site version is bumped; validation passes; PR targets `main` without merge.
- **Dependencies:** Operator confirmation to use `public/images/home-security/homepage/solution-sump-pump-awarenes.png` for the sump pump asset.
- **Operator Decision Required:** Review and merge PR if accepted.

### GOV009
- **Task ID:** GOV009
- **Task Name:** Promote Site Architecture / Visual / Solution Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Adopt, validate, catalog, and promote the eight local governance markdown documents placed in `docs/governance/` as official repository governance and standards references.
- **Allowed Scope:** Docs-only governance promotion; inspect the eight new governance docs; update their status labels when needed; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; add planning-only follow-up placeholders.
- **Forbidden Scope:** No application/source files, routes, assets, generated images, CSS/components, runtime behavior, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, homepage implementation, QR Landing implementation, category implementation, package implementation, solution implementation, visual-system implementation, asset implementation, or search implementation.
- **Target Files:** `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only promotion.
- **Documentation Updates Required:** Promote the eight governance docs, add catalog entries, add manifest addendum, record GOV009, and queue planning-only follow-up placeholders.
- **Validation Required:** `git status`; targeted `git diff`; targeted `rg` for required governance/search/content terms; `git diff --check`. No `npm run build` unless application files are changed.
- **Exit Criteria:** All eight docs are inspected and registered; statuses are clear; implementation boundaries remain explicit; no secrets or protected-system authorizations are recorded; follow-up tasks are planning-only; only allowed documentation files change; validation passes; branch is pushed and PR targets `main` without merge.
- **Dependencies:** Prompt-created bounded GOV009 work order, `docs/system/step-current.md`, `docs/governance/AUTHORITY-MAP-REV01.md`, `docs/governance/REPO-GOVERNANCE-ARCHITECTURE-REV01.md`, `docs/governance/OPS001_OPERATOR_WORKFLOW_STANDARD_REV01.md`, `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Operator Decision Required:** Review and merge PR if the promoted governance docs and planning placeholders are accepted.
- **Completion Notes:** Promoted eight local governance documents as docs-only official references. Updated status labels to `Working Standard` where appropriate, retained `Approved Governance Context` and `Approved Catalog V1`, removed guardrail-sensitive claim wording from the promoted docs, updated catalog and manifest, queued planning-only follow-up placeholders, and made no implementation, runtime, protected-system, secret, route, source, CSS, asset, or image-generation changes.

### GOV-REPOACCESS-001-B
- **Task ID:** GOV-REPOACCESS-001-B
- **Task Name:** Complete Repository Connector Dispatch Governance Bookkeeping
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Complete documentation bookkeeping for the repo-access dispatcher governance file already added at `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`.
- **Allowed Scope:** Docs-only bookkeeping; register `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md` in `docs/DOCUMENT_CATALOG.md`; add an OPS002 addendum to `docs/MARKDOWN_MANIFEST.md`; add this completed task record to `docs/system/master-task-register.md`.
- **Forbidden Scope:** No edits to `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`; no src changes; no CSS changes; no visual implementation; no route changes; no homepage changes; no Solutions page changes; no package/catalog implementation; no pricing implementation; no HubSpot changes; no Stripe/payment changes; no Resend changes; no Gmail/Workspace changes; no Cloudflare config changes; no scheduling changes; no API changes; no runtime behavior changes; no secrets; no assets; no dependency changes; no package-lock changes; no build config changes.
- **Target Files:** `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only bookkeeping.
- **Documentation Updates Required:** Add catalog registration, manifest addendum, and completed task-register record for OPS002 repository connector dispatch governance.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `rg -n "OPS002|Repository Connector Dispatch|GOV-REPOACCESS-001-B|GitHub connector|repo-aware dispatcher" docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`. No `npm run build` unless application/source files are changed.
- **Exit Criteria:** OPS002 is registered in the document catalog; the markdown manifest includes an OPS002 addendum; this task record is DONE; only target docs bookkeeping files changed; OPS002 source document remains untouched; no source, CSS, route, runtime, API, protected-system, package/catalog implementation, pricing, secrets, assets, dependencies, package-lock, or build-config files changed; validation passes.
- **Dependencies:** Prompt-created bounded GOV-REPOACCESS-001-B work order; existing `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md`; `docs/system/step-current.md`; `docs/DOCUMENT_CATALOG.md`; `docs/MARKDOWN_MANIFEST.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Completed docs-only bookkeeping for OPS002 repository connector dispatch governance. Registered the OPS002 document in the catalog, added the manifest addendum, and recorded this task as DONE without editing the OPS002 source document or any source/runtime/protected-system files.

### HOMEPAGE-REDESIGN-PLANNING-001
- **Task ID:** HOMEPAGE-REDESIGN-PLANNING-001
- **Task Name:** Plan Homepage Redesign From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded Homepage redesign planning document using GOV009-promoted governance docs.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No Homepage implementation, source changes, CSS/component changes, routes, assets, Search implementation, runtime systems, protected systems, QR Landing implementation, or public-page changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for Homepage planning terms and implementation boundary language; `git diff --check`.
- **Exit Criteria:** Homepage plan defines purpose, section order, navigation, Search, Hero, Trust Bar, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core, How It Works, Why WNYHS, CTA, footer, visual-system requirements, content source mapping, forbidden scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing Homepage, Search, QR Landing, runtime, or protected-system changes.
- **Dependencies:** GOV009, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`. Follow-up implementation recommendation recorded as HOMEPAGE-REDESIGN-IMPLEMENTATION-001 planning recommendation only; implementation remains unauthorized until a separate active implementation task is approved.

### HOMEPAGE-REDESIGN-IMPLEMENTATION-001
- **Task ID:** HOMEPAGE-REDESIGN-IMPLEMENTATION-001
- **Task Name:** Implement Homepage Redesign From Approved Planning Docs
- **Status:** ACTIVE
- **Type:** Bounded frontend implementation
- **Category:** FUNNEL / UX / FRONTEND
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement the redesigned Homepage only, using the approved Homepage redesign plan and promoted governance standards.
- **Controlling Docs:** `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`, `docs/planning/SEARCH_UX_PLAN_REV01.md`, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`.
- **Allowed Scope:** Homepage redesign only. Implement the approved Homepage section order: Navigation, Search Access placeholder or entry point only, Hero, Trust Bar, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core Section, How It Works, Why WNYHS, Primary CTA, and Footer. Use approved categories, approved Solution catalog content, promoted content ownership guidance, existing safe routes, existing components/patterns, and semantic visual tokens where possible.
- **Forbidden Scope:** No QR Landing implementation or QR Landing behavior changes; no Search implementation, indexing, routing, result UI, or search logic; no Category page implementation; no Package page implementation; no Solution page implementation; no backend/runtime changes; no payment, Stripe, scheduling, HubSpot, lead-signal, requestId, QR attribution, API route, Cloudflare, Resend, Google Workspace, environment variable, analytics, protected-system, or secret changes; no asset generation; no image generation; no unrelated route changes; no merge.
- **Target Files:** Existing Homepage frontend, style/content, navigation support, and visible site version files only as required by the implementation. Exact files must be identified by implementation inspection before edits.
- **Runtime Systems Affected:** None. Homepage frontend presentation only; protected runtime systems must remain untouched.
- **Version Bump Required:** Yes. Visible site version must be bumped according to the existing repo convention.
- **Documentation Updates Required:** None unless implementation findings require a bounded task-register completion note after implementation validation.
- **Validation Required:** `git status`; `git diff --stat`; `git diff --check`; `npm run build`; run standard lint/typecheck scripts if `package.json` indicates they are standard validation scripts and they are applicable after implementation.
- **PR Target:** `main`
- **Exit Criteria:** Homepage implements the approved section order; Search access is present only as a placeholder or entry point without Search functionality; approved Categories and approved Solution catalog content are used; Homepage presents Category before Package before Solution; visual implementation follows Light Theme primary, charcoal/black structural contrast, antique gold accent, premium residential feel, existing WNYHS shield/eagle logo preservation, semantic tokens where possible, readable fonts, and mobile-first responsive behavior; visible site version is bumped; QR Landing is untouched; Search functionality is not implemented; Category, Package, and Solution pages are not implemented; protected systems are untouched; validation passes; branch is pushed and PR targets `main` without merge.
- **Dependencies:** HOMEPAGE-REDESIGN-PLANNING-001, SITE-CONTENT-OWNER-ROUTING-001, SEARCH-UX-PLANNING-001, GOV009, and listed controlling docs.
- **Operator Decision Required:** Review and merge the implementation PR if validation passes and the Homepage-only implementation is accepted.
- **Activation Notes:** Activated by TASK-AUTH-001 as a docs-only task-register authorization. This entry authorizes the future bounded Homepage redesign implementation only; TASK-AUTH-001 did not implement Homepage, QR Landing, Search, Category pages, Package pages, Solution pages, runtime behavior, protected systems, assets, or routes.

### QRLANDING-REDESIGN-PLANNING-001
- **Task ID:** QRLANDING-REDESIGN-PLANNING-001
- **Task Name:** Plan QR Landing Redesign From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded QR Landing redesign planning document using GOV009-promoted governance docs, the Homepage planning artifact, and QR runtime contracts.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No QR Landing implementation, Homepage implementation, route changes, source changes, CSS/component changes, assets, Search implementation, QR attribution behavior changes, requestId behavior changes, lead-signal changes, HubSpot changes, Stripe changes, scheduling changes, analytics changes, runtime systems, protected systems, or public-page changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for QR Landing planning terms, attribution terms, requestId, lead-signal, and implementation boundary language; `git diff --check`.
- **Exit Criteria:** QR Landing plan defines purpose, section order, navigation, Search, scan acknowledgment, Hero, Trust Bar, Popular Solutions, WNYHS Core, Why People Choose WNYHS, CTA, footer, visual-system requirements, content source mapping, QR attribution preservation, forbidden scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing QR Landing, Homepage, Search, runtime, attribution, requestId, lead-signal, or protected-system changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/runtime/qrlanding_runtime.md`, `docs/runtime/request_id_contract.md`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/runtime_ownership_map.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`. Follow-up implementation recommendation recorded as QRLANDING-REDESIGN-IMPLEMENTATION-001 planning recommendation only; implementation and QR attribution/runtime behavior changes remain unauthorized until a separate active implementation task is approved.

### SEARCH-UX-PLANNING-001
- **Task ID:** SEARCH-UX-PLANNING-001
- **Task Name:** Plan Public Search UX From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a bounded public Search UX planning document using GOV009-promoted governance docs and existing Homepage / QR Landing planning docs.
- **Allowed Scope:** Planning-only document creation and registration in the document catalog, markdown manifest, and task register.
- **Forbidden Scope:** No Search implementation, indexing implementation, source changes, route changes, CSS/component changes, runtime behavior, protected systems, public-page changes, Homepage implementation, QR Landing implementation, QR attribution behavior changes, API changes, analytics changes, or protected-system changes until a separate ACTIVE task authorizes them.
- **Target Files:** `docs/planning/SEARCH_UX_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Create `docs/planning/SEARCH_UX_PLAN_REV01.md`; register it in `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`; mark this task complete in the register.
- **Validation Required:** `git status`; scoped `git diff`; scoped `rg` for Search planning terms, mapping examples, Public Information, implementation boundary language, and authorization boundaries; `git diff --check`.
- **Exit Criteria:** Search UX plan defines purpose, scope, result types, placement, behavior, ranking recommendations, metadata requirements, Category / Package / Solution / Public Information mapping, Homepage Search requirements, QR Landing Search requirements, mobile/accessibility requirements, forbidden result types, forbidden implementation scope, implementation readiness checklist, and a follow-up implementation task recommendation without implementing Search, indexing, Homepage, QR Landing, runtime, attribution, API, or protected-system changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, QRLANDING-REDESIGN-PLANNING-001, `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md`, `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md`, `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md`.
- **Operator Decision Required:** None. Activated by explicit bounded planning prompt.
- **Completion Notes:** Completed as docs-only planning in `docs/planning/SEARCH_UX_PLAN_REV01.md`. Follow-up implementation recommendation recorded as SEARCH-UX-IMPLEMENTATION-001 planning recommendation only; Search implementation, indexing, Homepage implementation, QR Landing implementation, QR attribution behavior changes, runtime, API, and protected-system changes remain unauthorized until a separate active implementation task is approved.

### SITE-CONTENT-OWNER-ROUTING-001
- **Task ID:** SITE-CONTENT-OWNER-ROUTING-001
- **Task Name:** Plan Site Content Owner Routing From Promoted Governance Docs
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the authoritative docs-only content ownership and routing plan that determines where Homepage, QR Landing, Category, Package, Solution, Search, Public Information, media, Fit Check, and Catalog content should live within the repository.
- **Allowed Scope:** Planning-only documentation; create `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No implementation work, source changes, routes, assets, CSS/components, runtime systems, protected systems, public-page changes, Search implementation, Homepage implementation, QR Landing implementation, Category implementation, Package implementation, Solution implementation, Fit Check implementation, Catalog generation, catalog expansion, content migration, secrets, or merge.
- **Target Files:** `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add the content owner-routing plan, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Solution|Package|Category|Homepage|QR Landing|Search|Fit Check|Catalog|ownership|source of truth|duplicate|inheritance|implementation boundary" docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Content ownership philosophy, source hierarchy, Homepage ownership, QR Landing ownership, Category ownership, Package ownership, Solution ownership, Public Information ownership, Search indexing sources, image/media ownership, Fit Check guidance, Catalog guidance, duplication prevention, recommended repository content structure, implementation readiness checklist, and follow-up implementation recommendation are documented without implementation or forbidden file changes.
- **Dependencies:** GOV009, HOMEPAGE-REDESIGN-PLANNING-001, QRLANDING-REDESIGN-PLANNING-001, SEARCH-UX-PLANNING-001, and all eight GOV009-promoted governance docs.
- **Operator Decision Required:** None for this planning task; future implementation requires a separate active task.
- **Completion Notes:** Created `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md` as a docs-only content ownership and routing plan. The plan reinforces Solution as the source of truth, defines Package and Category reference ownership, requires Homepage and QR Landing to consume existing content instead of duplicating catalogs, limits Search to approved public content sources, and documents Fit Check and Catalog generation guidance. No source/app/runtime/protected-system files, routes, assets, CSS/components, QR attribution behavior, HubSpot, Stripe, Cloudflare, Resend, Google Workspace, scheduling, secrets, or implementation behavior were changed.

### RUNTIME-AUDIT-001
- **Task ID:** RUNTIME-AUDIT-001
- **Task Name:** Cloudflare Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Cloudflare configuration relevant to runtime ownership, DNS, deployment, Pages/Workers, environment bindings, email routing, and security posture.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/cloudflare_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark dashboard/API-only areas as `Not inspected` where Cloudflare access or operator export is unavailable.
- **Forbidden Scope:** No Cloudflare configuration changes, DNS changes, deployment setting changes, Worker changes, Pages changes, route changes, code changes, runtime behavior changes, secret values, Stripe changes, HubSpot changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/cloudflare_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Cloudflare current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Cloudflare|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/cloudflare_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Cloudflare runtime facts, identifies live dashboard/API-only gaps as `Not inspected`, records no secret values, and confirms no Cloudflare, DNS, deployment, Worker, Pages, route, code, runtime, Stripe, HubSpot, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/cloudflare_env.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/deployment_validation.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Cloudflare dashboard/API export or screenshots before any future live configuration verification task.
- **Completion Notes:** Created the docs-only Cloudflare current config inventory. Live Cloudflare dashboard/API, DNS, Pages settings, Email Routing aliases, security controls, deployment logs, and analytics were not inspected because no Cloudflare credentials or operator export were available. No configuration changes and No secret values.

### RUNTIME-AUDIT-002
- **Task ID:** RUNTIME-AUDIT-002
- **Task Name:** HubSpot Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current HubSpot configuration relevant to CRM ownership, contact/deal properties, pipeline/stage IDs, forms, lists, workflows, and API integration posture.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/hubspot_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark HubSpot dashboard/API-only areas as `Not inspected` where HubSpot access or operator export is unavailable; preserve `/api/lead-signal` as the canonical boundary under HubSpot REV03.
- **Forbidden Scope:** No HubSpot schema changes, property changes, pipeline changes, stage changes, workflow changes, direct frontend/client write path to HubSpot, `/api/lead-signal` bypass, code changes, runtime behavior changes, secret values, Stripe changes, Cloudflare changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/hubspot_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add HubSpot current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "HubSpot|Current Config Inventory|REV03|/api/lead-signal|Not inspected|No configuration changes|No secret values" docs/runtime/hubspot_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented HubSpot object model, property names, pipeline/stage IDs, forms/lists/workflows status, integration variable names without values, and API-layer touchpoints; identifies live HubSpot dashboard/API-only gaps as `Not inspected`; records no secret values; preserves `/api/lead-signal`; and confirms no HubSpot configuration, schema, property, pipeline, stage, workflow, code, runtime, Stripe, Cloudflare, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/crm/hubspot/hubspot_kb_rev03.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/hubspot_properties.md`, `docs/runtime/hubspot_sync_contract.md`, `docs/runtime/lead_signal_contract.md`, `docs/runtime/request_id_contract.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide HubSpot dashboard/API export or screenshots before any future live HubSpot configuration verification task.
- **Completion Notes:** Created the docs-only HubSpot Current Config Inventory aligned to HubSpot REV03. Live HubSpot account/portal identity, property schema details, pipeline dashboard, forms, lists, workflows, token scopes, audit logs, and API call history were Not inspected because no HubSpot credentials or operator export were available. `/api/lead-signal` remains the canonical boundary. No configuration changes and No secret values.

### RUNTIME-AUDIT-003
- **Task ID:** RUNTIME-AUDIT-003
- **Task Name:** Resend Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Resend configuration relevant to WNY Home Security email sending, verified domains, sender identities, API key naming, webhook posture, and operator/customer email boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/resend_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Resend dashboard/API-only areas as `Not inspected` where Resend access or operator export is unavailable.
- **Forbidden Scope:** No Resend configuration changes, domain changes, sender changes, DNS changes, webhook changes, API key changes, email runtime behavior changes, code changes, secret values, Cloudflare changes, HubSpot changes, Stripe changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/resend_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Resend current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Resend|Current Config Inventory|Not inspected|No configuration changes|No secret values" docs/runtime/resend_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Resend domains, sender identity references, API key/env variable names without values, webhook posture, suppression/bounce posture, and email ownership notes; identifies live Resend dashboard/API-only gaps as `Not inspected`; records no secret values; and confirms no Resend configuration, domain, sender, DNS, webhook, API key, email runtime, code, Cloudflare, HubSpot, Stripe, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/resend_runtime.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/protected_runtime_contract.md`, `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`.
- **Operator Decision Required:** Provide Resend dashboard/API export or screenshots before any future live Resend configuration verification task.
- **Completion Notes:** Created the docs-only Resend Current Config Inventory. Live Resend account identity, verified domains, sender verification status, API key labels/scopes/status, webhooks, suppression/bounce settings, and delivery logs were Not inspected because no Resend credentials or operator export were available. No configuration changes and No secret values.

### RUNTIME-AUDIT-004
- **Task ID:** RUNTIME-AUDIT-004
- **Task Name:** Stripe Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Stripe configuration relevant to WNY Home Security payment ownership, products/prices, checkout posture, webhook endpoints, deposit/payment verification, and secret-management boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/stripe_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Stripe dashboard/API-only areas as `Not inspected` where Stripe access or operator export is unavailable; reaffirm server-side verification and webhook authority boundaries.
- **Forbidden Scope:** No Stripe configuration changes, product changes, price changes, checkout changes, payment link changes, webhook changes, tax changes, payout changes, account changes, client-side payment confirmation logic, payment success authority from redirect URLs, code changes, runtime behavior changes, secret values, HubSpot changes, Cloudflare changes, Resend changes, Google Workspace changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/stripe_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Stripe current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Stripe|Current Config Inventory|webhook|server-side|Not inspected|No configuration changes|No secret values" docs/runtime/stripe_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Stripe account-mode gaps, product/price posture, checkout settings, webhook endpoint URLs, webhook event names, payment verification posture, and environment variable names without values; identifies live Stripe dashboard/API-only gaps as `Not inspected`; records no secret values; confirms No configuration changes; preserves webhook and server-side verification authority boundaries; confirms redirect URLs were not treated as payment authority; and confirms no Stripe configuration, product, price, checkout, payment link, webhook, tax, payout, account, code, runtime, HubSpot, Cloudflare, Resend, or Google Workspace changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/stripe_runtime.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Stripe dashboard/API export or screenshots before any future live Stripe configuration verification task.
- **Completion Notes:** Created the docs-only Stripe Current Config Inventory. Live Stripe account identity, account mode, live/test status, products, prices, payment links, checkout dashboard settings, webhook dashboard settings, subscribed webhook events, delivery logs, API key labels/scopes/status, tax settings, payout settings, and production payment/session histories were Not inspected because no Stripe credentials or operator export were available. Payment success was not inferred from redirect URLs. Server-side verification and webhook authority boundaries were preserved. No configuration changes and No secret values.

### RUNTIME-AUDIT-005
- **Task ID:** RUNTIME-AUDIT-005
- **Task Name:** Google Workspace Current Config Inventory
- **Status:** DONE
- **Category:** RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a read-only inventory of current Google Workspace configuration relevant to WNY Home Security domain identity, email aliases/groups, calendar ownership, account roles, security posture, and integration boundaries.
- **Allowed Scope:** Documentation-only inventory in `docs/runtime/google_workspace_current_config_inventory_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; record non-secret repo-documented facts; mark Google Admin/Workspace-only areas as `Not inspected` where Google Workspace access or operator export is unavailable; confirm no scheduling or email routing behavior changed.
- **Forbidden Scope:** No Google Workspace configuration changes, user changes, group changes, alias changes, calendar changes, routing changes, security setting changes, scheduling behavior changes, email routing changes, code changes, runtime behavior changes, secret values, Cloudflare changes, HubSpot changes, Stripe changes, Resend changes, or new runtime contract creation.
- **Target Files:** `docs/runtime/google_workspace_current_config_inventory_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Inventory only.
- **Documentation Updates Required:** Add Google Workspace current config inventory document, catalog entry, manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `rg -n "Google Workspace|Current Config Inventory|Calendar|Not inspected|No configuration changes|No secret values" docs/runtime/google_workspace_current_config_inventory_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --check`.
- **Exit Criteria:** Inventory records repo-documented Google Workspace domain references, user/account role gaps, group/alias references, Calendar ownership posture, integration posture, retention/security gaps, and unknown areas; identifies live Google Admin/Workspace-only gaps as `Not inspected`; records no secret values; confirms No configuration changes; confirms no scheduling or email routing behavior changed; and confirms no Google Workspace, user, group, alias, calendar, routing, security, scheduling, email routing, code, runtime, Cloudflare, HubSpot, Stripe, or Resend changes.
- **Dependencies:** `docs/governance/NEXT_GOVERNANCE_TASK_QUEUE_REV01.md`, `docs/runtime/runtime_ownership_map.md`, `docs/runtime/google_calendar_runtime.md`, `docs/runtime/scheduling_ownership.md`, `docs/runtime/scheduling_future_model.md`, `docs/runtime/cloudflare_email_routing.md`, `docs/runtime/protected_runtime_contract.md`.
- **Operator Decision Required:** Provide Google Admin/Workspace export or screenshots before any future live Google Workspace configuration verification task.
- **Completion Notes:** Created the docs-only Google Workspace Current Config Inventory. Live Google Workspace domain identity, users, account roles, admin roles, groups, aliases, Gmail routing, calendar ownership/sharing, OAuth app/API posture, retention, Vault, security controls, and audit logs were Not inspected because no Google Admin access, Google Workspace export, Google Calendar admin export, OAuth console export, operator screenshots, or read-only administrative credentials were available. No scheduling or email routing behavior changed. No configuration changes and No secret values.

### SOLUTIONS-LANDING-003
- **Task ID:** SOLUTIONS-LANDING-003
- **Task Name:** Add Visuals + Complete Solution Category Browse List
- **Status:** PARTIAL
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Polish the existing nav-linked Solutions landing page at `/packages?vertical=home-security` by adding existing approved visuals to the three premier solution cards and completing the category browse list for customer window-shopping.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; use only existing image files with claim-safe alt text; update this task-register lifecycle entry.
- **Forbidden Scope:** No new `/solutions` route, route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing logic changes, image generation, image file changes, individual solution-page changes, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or customer-facing use of `monitoring`/`monitored` terminology.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-003 as `ACTIVE` for this run and mark `DONE` only after build passes and manual visual review notes are included.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions visual/browse labels and old package/restricted terms in `src` and `docs`; `npm run build`; focused ESLint for `src/pages/Packages.tsx`; manual review of `/packages?vertical=home-security` if browser review is available.
- **Exit Criteria:** `/packages?vertical=home-security` preserves the SOLUTIONS-LANDING-002 flow; Home Security, Home Automation, and Aging In Place premier cards each use existing visuals with claim-safe alt text; Browse Our Solutions By Category includes Family Awareness, Vacation Homes, Package Protection, Driveway Awareness, Smart Entry, Water Protection, Smart Lighting, Garage Control, Energy Awareness, Senior Safety, Caregiver Awareness, and Daily Activity Awareness; live solution links route to the four existing solution pages; non-live items route only to valid Fit Check/Estimate paths; no protected systems, pricing logic, routes, nav, images, individual solution pages, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** SOLUTIONS-LANDING-002, DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, existing approved image assets, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge if browser review cannot be completed by Codex.
- **Partial Completion Notes:** Implemented the existing `/packages?vertical=home-security` Solutions landing page polish with visuals for the three premier cards, the complete requested category browse list, valid live solution links, valid Fit Check routing for planning topics, and visible version bump to `v1.0.118`. Build and focused ESLint passed, and local HTTP checks returned 200 for the target page, four live solution routes, and reused image assets. Manual visual review is still required before merge because the in-app browser surface was unavailable in this session.

### SOLUTIONS-LANDING-002
- **Task ID:** SOLUTIONS-LANDING-002
- **Task Name:** Rebuild Solutions Landing Page As Storefront + Browsing Hub
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Correct the existing nav-linked Solutions landing page rendered at `/packages?vertical=home-security` so it functions as a storefront and browsing hub for homeowner-focused WNYHS solution families instead of an old package/pricing page.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; use claim-safe awareness terminology required by repository guardrails; add/update this task-register lifecycle entry.
- **Forbidden Scope:** No new `/solutions` route, route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing logic changes, image generation, image file changes, individual solution-page changes, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or customer-facing use of `monitoring`/`monitored` terminology.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-002 as `ACTIVE` for this run and mark `DONE` only after build passes and manual visual review notes are included.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions storefront labels and old package terms in `src` and `docs`; `npm run build`; focused ESLint for `src/pages/Packages.tsx`; manual review of `/packages?vertical=home-security` if browser review is available.
- **Exit Criteria:** `/packages?vertical=home-security` keeps the existing hero direction and clear Fit Check/Estimate CTAs; the first major content section is exactly three premium cards for Home Security, Home Automation, and Aging In Place; old Essential Awareness/Balanced Home Coverage/Expanded Property Coverage/Bronze/Silver/Gold/pricing-card framing is removed from the home-security landing page; Browse Our Solutions By Category appears below the premier cards with Home Security, Home Automation, and Aging In Place categories; live links route to Senior Safety, Water Protection, Family Awareness, and Vacation Homes; final CTA routes to Fit Check and Estimate; no protected systems, pricing logic, routes, nav, images, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge if browser review cannot be completed by Codex.

### SOLUTIONS-LANDING-001
- **Task ID:** SOLUTIONS-LANDING-001
- **Task Name:** Rework Solutions Landing Page Around Signature Categories
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rework the existing Solutions landing page rendered at `/packages?vertical=home-security` so it introduces WNYHS through three premier/signature categories before routing visitors into the existing solution detail pages and Fit Check/Estimate paths.
- **Allowed Scope:** Update the existing home-security branch of `src/pages/Packages.tsx`; update scoped Solutions landing page CSS in `src/index.css`; bump visible site version in `src/lib/siteVersion.ts`; preserve existing route structure and navigation; add/update this task-register lifecycle entry.
- **Forbidden Scope:** No route changes, navigation changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing changes, image generation, new image files, individual solution-page image replacement, unrelated page edits, unrelated CSS changes, hardcoded brand colors outside semantic tokens, unsupported claims, fake proof, fear-based framing, or destructive cleanup outside this page scope.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/Packages.tsx`, `src/index.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public Solutions landing page presentation only.
- **Documentation Updates Required:** Add/promote SOLUTIONS-LANDING-001 as `ACTIVE` for this run and mark `DONE` only after validation and manual review requirements are satisfied.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; targeted `rg` for required Solutions landing labels in `src` and `docs`; `npm run build`; existing lint/typecheck scripts as appropriate; manual review of `/packages?vertical=home-security` for desktop/mobile layout, CTA/link behavior, and no unrelated page drift.
- **Exit Criteria:** `/packages?vertical=home-security` keeps the existing hero direction and clear Fit Check/Estimate CTAs; the first major cards are Home Security, Home Automation, and Aging In Place; Common Homeowner Situations links to Senior Safety, Water Protection, Family Awareness, and Vacation Homes; secondary/future ideas are lower priority and route only to Fit Check/Estimate where no detail page exists; no protected systems, pricing, routes, nav, images, or unrelated pages are changed; validation passes and any manual-review limitation is documented.
- **Dependencies:** DESIGN001 REV01, SOLUTION001 REV02, existing `/packages?vertical=home-security` page, existing four solution detail routes, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** Manual visual review before merge.
### IMAGE002-B
- **Task ID:** IMAGE002-B
- **Task Name:** Wire Replacement Solution Page Images
- **Status:** ACTIVE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Wire the committed replacement solution-page images to the four existing solution routes while preserving SOLUTION001 REV02 and DESIGN001 visual standards.
- **Allowed Scope:** Inspect and reconcile solution image asset paths; use `/public/images/home-security/solutions` as the canonical solution-image folder when aligned with SOLUTION001 REV02 and current code; replace canonical copies with the operator-provided replacement files from `public/images/solutions` if needed; remove only duplicate tracked replacement copies from the non-canonical folder after the canonical copies are preserved; update the shared solution page implementation and scoped solution image CSS if needed; bump the visible site version; validate desktop, tablet, and mobile rendering for `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`.
- **Forbidden Scope:** No Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, runtime behavior changes, pricing changes, route changes, global navigation changes, unrelated page redesign, unrelated CSS changes, semantic-token changes, hardcoded colors, unsupported claims, copy rewrites except alt text if necessary, or destructive cleanup outside duplicate image-path cleanup needed for this task.
- **Target Files:** `docs/system/master-task-register.md`, `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `public/images/home-security/solutions/*.png`, duplicate tracked `public/images/solutions/solutions-*-hero.png` and `public/images/solutions/solutions-*-sample.png` files only when preserved in the canonical folder first.
- **Runtime Systems Affected:** None. Public solution-page presentation and static assets only.
- **Documentation Updates Required:** Add/promote IMAGE002-B as `ACTIVE` for this run and mark it `DONE` only after successful validation.
- **Validation Required:** `git status`; `git diff --check`; `git diff --stat`; `rg -n "solutions-aging|solutions-water|solutions-awareness|solutions-vacation" src public docs`; `npm run build`; available lint/typecheck scripts as appropriate; local dev-server visual checks for all four solution routes at desktop, tablet/narrow, and mobile widths.
- **Exit Criteria:** All four solution routes use the operator-provided replacement hero and sample files from the canonical image folder; duplicate tracked replacement copies are avoided; hero and sample images render without broken paths, distortion, or critical cropping; mobile layout preserves the main subject and awareness panel; no protected systems, pricing, routes, or unrelated pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** SOLUTION001 REV02, DESIGN001 REV01, existing four solution routes, committed replacement image assets, bounded operator prompt approval, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01.
- **Operator Decision Required:** PR review and visual approval before merge.

### SOLUTION001-B
- **Task ID:** SOLUTION001-B
- **Task Name:** Add Solution Image Standard To Solution Page Governance
- **Status:** DONE
- **Category:** GOV / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Update the WNYHS Solution Page Standard to formally include the approved solution image system for `solution-hero-image` and `solution-sample-image`.
- **Allowed Scope:** Documentation-only governance update; create `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` from the existing REV01 standard; define hero image, sample image, awareness-panel language, image relationship, claims guardrails, naming, and storage standards; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register.
- **Forbidden Scope:** No source code changes, React/TSX changes, CSS changes, image generation, image file changes, route changes, navigation changes, runtime contract changes, Stripe changes, HubSpot changes, Scheduling/calendar changes, Email/Resend changes, environment variable changes, secrets, pricing/business-rule changes, semantic-token changes, unsupported claims, fake customer proof, or implementation work.
- **Target Files:** `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add/promote SOLUTION001-B as `ACTIVE` for this run; create/register REV02; update catalog and manifest; mark SOLUTION001-B `DONE` only after successful validation.
- **Validation Required:** `git diff --check`; targeted `rg` checks for `SOLUTION001`, `solution-hero-image`, `solution-sample-image`, and `Solution Image System Standard`; protected-system/source drift check; `npm run build` if required by repo convention.
- **Exit Criteria:** REV02 exists or the standard is clearly revised to REV02; the image standard clearly separates hero and sample image purposes; claims guardrails and naming/storage rules are documented; catalog/manifest/register are updated; only docs/index files changed; no protected systems, source, CSS, route, image, pricing, or business-rule files changed; validation passes or unrelated baseline failures are documented.
- **Dependencies:** SOLUTION001-A completion, IMAGE001-A completion or approved image direction, current bounded operator prompt, and CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance allowance for bounded documentation tasks.
- **Operator Decision Required:** Separate follow-up approval is required before generating replacement production images or wiring any new image assets into the site.
- **Completion Notes:** Added SOLUTION001-B to the Active Tasks section for this bounded run and marked it `DONE` after successful validation. Created and registered `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` as the current solution-page standard. REV02 adds the approved image system for `solution-hero-image` and `solution-sample-image`, including hero outcome/lifestyle rules, sample scenario + relevant hardware + awareness-panel rules, plain-language awareness-panel examples, image relationship rules, claims guardrails, illustrative-only/alt-text requirements, and naming/storage guidance for `/public/images/home-security/solutions`. Updated `docs/DOCUMENT_CATALOG.md` and `docs/MARKDOWN_MANIFEST.md`. No source, CSS, image, route, runtime, Stripe, HubSpot, Scheduling, Email/Resend, environment, pricing, or business-rule files were modified. `git diff --check`, targeted traceability `rg`, protected-system/source drift checks, and `npm run build` passed.

### IMAGE001-A
- **Task ID:** IMAGE001-A
- **Task Name:** Wire Solution Images Into Solution Pages
- **Status:** DONE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add the approved local solution hero and sample images to the four existing solution opportunity pages while preserving the SOLUTION001 structure and DESIGN001 visual system.
- **Allowed Scope:** Update only `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes` through the shared solution page component and scoped solution-page CSS; place one hero image and one Example Scenario supporting image per page; copy approved local image files into `public/images/home-security/solutions` if required for the requested public URL mapping; bump visible site version; update this task-register lifecycle entry.
- **Forbidden Scope:** No Homepage changes, Packages page changes, QR Landing changes, Support page changes, Our Work page changes, new routes, global navigation changes, semantic token definition changes, HubSpot changes, Stripe changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, unsupported claims, fake social proof, fake customer stories, fake project claims, or broad copy rewrites.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`, `public/images/home-security/solutions/*.png`.
- **Runtime Systems Affected:** None. Public solution-page visual presentation only.
- **Documentation Updates Required:** Add/promote IMAGE001-A for this run and record completion notes when validation succeeds.
- **Validation Required:** `npm run build`; `git diff --check`; focused ESLint for touched TS/TSX files if feasible; confirm mapped image files exist; protected-system diff check; source forbidden-claims scan; local route availability checks for the four solution routes if feasible.
- **Exit Criteria:** All four target solution routes use the requested hero and sample image mapping; hero images sit in the hero section without shrinking trust pills or CTAs; sample images support the Example Scenario section; alt text is descriptive, neutral, and claim-safe; SOLUTION001 section order is preserved; DESIGN001 visual system classes/tokens are followed; no protected systems or unrelated pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** Existing four solution routes, SOLUTION001-A completion, DESIGN001-B completion, bounded operator prompt approval, and approved local image assets.
- **Operator Decision Required:** Visual approval after PR review.
- **Completion Notes:** Added IMAGE001-A to the Active Tasks section before implementation and marked it `DONE` after successful validation. Copied the approved local solution images into `public/images/home-security/solutions` so the requested `/images/home-security/solutions/...` URL mapping resolves. Wired each solution page to one right-side hero image and one Example Scenario supporting image through the shared `SolutionOpportunity` component. Added neutral, illustrative alt text and scoped responsive image framing using existing DESIGN001/SOLUTION001 visual patterns and semantic tokens. Preserved the SOLUTION001 section order, existing routes, hero copy, trust pills, CTAs, page copy posture, and protected runtime boundaries. Bumped visible site version to `v1.0.115`. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `git diff --check`, target image existence checks, source forbidden-claim scan, and HTTP 200 checks for all four solution routes passed.

### DESIGN001-A
- **Task ID:** DESIGN001-A
- **Task Name:** Extract Homepage Visual System Standard
- **Status:** DONE
- **Category:** GOV / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only authoritative WNYHS visual design standard by extracting the visual system currently implemented on the active `/home-security` homepage and its active semantic tokens/styles.
- **Allowed Scope:** Inspect current homepage implementation, homepage CSS, shared homepage layout/nav/footer components, active semantic token files, and older design/brand/style docs as reference only; create `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register; add a future DESIGN001-B BACKLOG placeholder if useful.
- **Forbidden Scope:** No Homepage changes, Packages changes, QR Landing changes, Support changes, Our Work changes, Solution page changes, React/TSX implementation changes, CSS implementation changes, semantic token definition changes, global navigation changes, Stripe changes, HubSpot changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, implementation work, commits that include source changes, or visible site version bump.
- **Target Files:** `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add/register the DESIGN001 REV01 visual system standard and record task status/completion notes.
- **Validation Required:** `git diff --check`; documentation traceability grep for DESIGN001 entries; `npm run build` if required by controlling context/repo convention; no-implementation-file diff check.
- **Exit Criteria:** Standard document clearly states authority model, extraction sources, non-authoritative older-doc handling, homepage-derived standards, token/class reference, visual element rules, allowed reuse, forbidden drift, future implementation guidance, and review/adoption workflow; no implementation files are modified; validation passes.
- **Dependencies:** Current homepage implementation and active semantic tokens on `main`; bounded operator prompt approval.
- **Operator Decision Required:** Review and approve DESIGN001 REV01 before any future implementation task.
- **Completion Notes:** Created `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` as a docs-only homepage-derived visual system standard. Extracted page shell/canvas, typography, token/color usage, panels, cards, CTAs, pills/badges, images, layout patterns, responsive behavior, raw values to tokenize later, allowed reuse patterns, forbidden visual drift, and future adoption workflow from current `/home-security` implementation and active semantic token/CSS files. Reviewed older brand/design docs as reference only and did not treat them as source of truth unless aligned with current code. Added catalog and manifest entries. Added DESIGN001-B as a BACKLOG-only future implementation placeholder and did not execute it. No public website files, React/TSX files, CSS implementation files, token definitions, global navigation, protected runtime systems, pricing/business rules, or visible site version files were changed. `git diff --check`, documentation traceability grep, no-implementation-file diff check, deleted-file check, and `npm run build` passed.

### DESIGN001-B
- **Task ID:** DESIGN001-B
- **Task Name:** Apply Visual System Standard To Solution Pages
- **Status:** DONE
- **Category:** GOV / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply the reviewed homepage-derived DESIGN001 visual system standard to the four existing solution opportunity pages while preserving SOLUTION001 structure and safe-copy guardrails.
- **Allowed Scope:** Update the shared four-page solution component and scoped solution-page CSS/classes for `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`; reuse existing homepage premium classes/tokens where practical; make the visible site version patch bump; update this task-register lifecycle entry.
- **Forbidden Scope:** No Homepage changes, Packages page changes, Support page changes, Our Work page changes, QR Landing changes, new routes, global navigation redesign, UX001 documents/tasks, SOLUTION001-B creation/execution/locking, semantic token definition changes, Stripe changes, HubSpot changes, Scheduling changes, Email/Resend changes, runtime contract changes, environment variable changes, secrets, pricing/business-rule changes, hardcoded new colors, unsupported claims, fake social proof, fake real-project claims, or broad copy rewrites.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Record DESIGN001-B promotion, execution scope, and completion notes in this task register only.
- **Validation Required:** `npm run build`; `git diff --check`; focused lint/typecheck for touched TS/TSX if feasible; forbidden-claim source scan in changed solution page files; local route availability checks for the four target solution routes if feasible.
- **Exit Criteria:** The four existing solution pages visually align with the homepage-derived premium system for shell, hero hierarchy, eyebrows, headings, body copy, trust pills, CTAs, cards/panels, spacing, and responsive behavior; SOLUTION001 section order is preserved; no full Why WNYHS block is added; no protected systems or semantic token definitions are changed; validation passes or failures are clearly attributed.
- **Dependencies:** DESIGN001-A completed and operator-approved by bounded prompt; SOLUTION001-A completed.
- **Operator Decision Required:** Visual/operator approval remains required before any future design-system locking task.
- **Completion Notes:** Applied the DESIGN001 homepage-derived premium visual system to the four existing solution opportunity routes by updating the shared `SolutionOpportunity` component and scoped opportunity CSS. Reused the premium shell, hero hierarchy, eyebrow, hero proof strip, section panel, problem card, final CTA, and global CTA button classes; replaced older gallery/card markup and opportunity-only card styling with semantic-token-backed scoped styles. Preserved SOLUTION001 section order, page copy posture, trust pill content, primary/secondary CTAs, internal links, and the four existing routes. Did not add a full Why WNYHS block, UX001 work, SOLUTION001-B locking work, global navigation changes, semantic token definition changes, protected runtime changes, new hardcoded colors, unsupported claims, fake social proof, or fake real-project claims. Bumped visible site version to `v1.0.114`. `npm run build`, focused ESLint for `src/pages/SolutionOpportunity.tsx`, `git diff --check`, forbidden-claim source scan, and local HTTP route checks for all four solution routes passed. Browser plugin visual smoke check was attempted but unavailable because the in-app browser backend did not expose `iab` in this session.

### CONTENT001-B
- **Task ID:** CONTENT001-B
- **Task Name:** Sprint 1 Conversion Leak Fixes
- **Status:** DONE
- **Category:** COPY / FUNNEL / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remediate highest-priority conversion leaks on the Homepage and QR Landing page while preserving route, runtime, and protected-system boundaries.
- **Allowed Scope:** Future bounded implementation for Homepage and QR Landing only; hero CTA clarity; verified social proof placement or missing-content documentation; no-required-monthly-fees positioning; customer-owned-equipment positioning when claim-safe; homeowner-problem-first messaging; local WNY trust signals; QR placard-scan context alignment; QR perceived-load investigation only within page/component scope.
- **Forbidden Scope:** No Packages page edits, no Support page edits, no Our Work page edits, no new routes, no broad redesign, no fabricated testimonials/reviews, no unsupported neighbor claims, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no runtime contract changes, and no implementation outside Homepage + QR Landing.
- **Target Files:** Future activation must discover exact Homepage, QR Landing, shared content/component, style, and site-version files before editing.
- **Runtime Systems Affected:** Public page presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document missing verified social-proof/content requirements if implementation cannot safely add them.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for required traceability items, forbidden-claims scan, protected-system diff check, and desktop/mobile render verification where tooling is available.
- **Exit Criteria:** Homepage has a clear above-fold CTA; Homepage and QR Landing surface no-required-monthly-fees positioning; customer-owned-equipment positioning appears where claim-safe; QR Landing matches placard-scan context; social proof is verified or documented as missing; no unsupported claims or protected-system changes occur.
- **Dependencies:** CONTENT001, tracked CONTENT001 remediation docs, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation copy/assets and activate CONTENT001-B.
- **Operator Approval Requirements:** Requires separate implementation approval before any Homepage or QR Landing edits.
- **Completion Notes:** Homepage now has an above-fold Fit Check CTA, no-required-monthly-fees and customer-owned-equipment positioning, Smart Property Solutions homeowner framing, and required Security & Awareness / Property Protection / Family Awareness problem sections. QR Landing now uses placard-scan context, outcome-focused H1/subheadline, visible no-required-monthly-fees and ownership positioning, local WNY trust language, a clear local estimate CTA, and a lighter existing WebP hero image to improve perceived load without runtime dependency or lead-signal changes. Verified reviews/testimonials/customer counts were not found in repo source material, so no social proof was fabricated; operator follow-up is needed for approved review/testimonial/story assets. Version bumped to `v1.0.109`.

### CONTENT001-C
- **Task ID:** CONTENT001-C
- **Task Name:** Solutions / Packages Remediation
- **Status:** DONE
- **Category:** COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reframe the Packages page around homeowner outcomes and clear package guidance while preserving pricing/business rules and existing funnel behavior.
- **Allowed Scope:** Future bounded implementation for the Packages page only; outcome/problem-based package framing; "best for" homeowner mapping; no-required-monthly-fees positioning; customer-owned-equipment positioning when claim-safe; verified package-related social proof or missing-content documentation; pricing visibility only from approved/current source data when separately authorized.
- **Forbidden Scope:** No Homepage edits, no QR Landing edits, no Support edits, no Our Work edits, no route creation, no package architecture rename unless explicitly approved, no invented pricing, no pricing/business-rule drift, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no runtime contract changes, no environment variable changes, and no secrets.
- **Target Files:** `src/pages/Packages.tsx`, `src/components/PackageCard.tsx`, `src/content/packages.ts`, `src/index.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public Packages presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document pricing/social-proof/content gaps if blocked by missing approved source material.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for outcome framing/no-required-monthly-fees/customer-owned-equipment/pricing-source handling, forbidden-claims scan, pricing/business-rule drift check, and protected-system diff check.
- **Exit Criteria:** Packages page reads as homeowner outcome guidance rather than a hardware menu; each package has clear use-case mapping; differentiators are visible; pricing visibility is either sourced and authorized or documented as a gap; CTAs and protected systems remain unchanged.
- **Dependencies:** CONTENT001, CONTENT001-B preferred completion/review, approved pricing/source material for any pricing changes, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation scope, pricing-source posture, and activation of CONTENT001-C.
- **Operator Approval Requirements:** Requires separate implementation approval before any Packages page edits.
- **Completion Notes:** Promoted CONTENT001-C from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Packages page now frames the page as Smart Property Solutions, adds visible no-required-monthly-fees/customer-owned-equipment/local-support/property-fit differentiators, adds problem-first WNY context for entry/package awareness, driveway/garage/workshop awareness, water/freeze awareness, and family awareness, strengthens each package with Best for guidance, and surfaces existing source-backed package starting prices without changing price values, package IDs, routes, or CTA destinations. No verified package testimonials/reviews/ratings/customer counts were found in repo source material, so no social proof was fabricated; operator follow-up is needed for approved proof assets. Version bumped to `v1.0.110`.

### CONTENT001-D
- **Task ID:** CONTENT001-D
- **Task Name:** Trust & Authority Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve Support and Our Work as trust/authority pages through local support positioning, self-service support structure, and customer-outcome storytelling.
- **Allowed Scope:** Future bounded implementation for Support and Our Work only; Support FAQ/self-service structure; realistic local support expectations; local WNY support positioning; Our Work problem-solution-outcome case-study framing; verified story/photo/quote usage or missing-content documentation; safe customer-owned-equipment positioning where appropriate.
- **Forbidden Scope:** No Homepage edits, no QR Landing edits, no Packages edits, no new routes, no fabricated locations, no fabricated customer quotes, no misleading imagery claims, no response-time promises unsupported by operations, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no runtime contract changes, no environment variable changes, and no secrets.
- **Target Files:** `src/pages/Support.tsx`, `src/pages/OurWork.tsx`, `src/data/ourWorkGallery.ts`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public Support and Our Work presentation only if activated; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and document missing verified project/story/review/FAQ content if unavailable.
- **Validation Required:** Future activation must run `npm run build`, page-scope grep for FAQ/self-service and case-study traceability, forbidden-claims scan, fabricated-proof guard check, and protected-system diff check.
- **Exit Criteria:** Support clearly communicates local support paths and self-service help without overpromising; Our Work reads as customer outcome stories rather than a hardware gallery; verified proof is used only when available; no protected-system changes occur.
- **Dependencies:** CONTENT001, CONTENT001-B and CONTENT001-C preferred review, verified support/story/photo/quote content where needed, operator approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve exact implementation copy/assets and activate CONTENT001-D.
- **Operator Approval Requirements:** Requires separate implementation approval before any Support or Our Work edits.
- **Completion Notes:** Promoted CONTENT001-D from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Support now adds local WNY support positioning, preserves call/text/email/form paths, adds support categories, adds FAQ/self-serve guidance, clarifies follow-up expectations without faster-time promises, and adds a support-first add-on path for existing customers. Our Work now uses Smart Property Solutions framing, problem-solution-outcome example cards, per-card CTAs, safe concept/example image language, and explicit verified-story/quote gap language instead of fabricated customer proof. CONTENT001-E stayed in `BACKLOG` and was not executed. Version bumped to `v1.0.111`.

### CONTENT001-E
- **Task ID:** CONTENT001-E
- **Task Name:** Opportunity Expansion Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Queue future opportunity-page work for high-value homeowner problem areas identified by the audit without creating routes or pages in the governance task.
- **Allowed Scope:** Future bounded implementation planning or explicitly approved page creation for Senior Safety, Water Protection, Family Awareness, and Vacation Home Monitoring only after core remediation review; demand/priority validation; safe claims review; route/content design within future activated scope.
- **Forbidden Scope:** No route creation in CONTENT001-A; no public page creation until separately authorized; no medical/fall-detection guarantees; no emergency-response claims; no monitoring/dispatch claims; no fabricated demand proof; no Stripe changes; no HubSpot changes; no Scheduling changes; no Email changes; no runtime contract changes; no environment variable changes; and no secrets.
- **Target Files:** `src/App.tsx`, `src/pages/SolutionOpportunity.tsx`, `src/pages/Packages.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public page presentation and route wiring only; no protected runtime systems.
- **Documentation Updates Required:** Update task status/completion notes and create any needed page-specific governance specs before implementation if scope is broad.
- **Validation Required:** Future activation must run `npm run build`, route/nav grep, forbidden-claims scan, protected-system diff check, and desktop/mobile render verification where tooling is available.
- **Exit Criteria:** Opportunity pages remain queued until operator approval; when activated, each page is bounded by problem area, claim-safe copy, route approval, and validation; no silent route/page creation occurs.
- **Dependencies:** CONTENT001, completion/review of CONTENT001-B/C/D or explicit operator override, route approval, copy/claims approval, and promotion to `ACTIVE`.
- **Operator Decision Required:** Approve whether and when each opportunity page should be created.
- **Operator Approval Requirements:** Requires separate implementation approval before any new route or page creation.
- **Completion Notes:** Promoted CONTENT001-E from `BACKLOG` to `ACTIVE` and moved the task into the Active Tasks execution section before implementation. Created four explicit routes only: `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`. Added a shared problem-first Smart Property Solutions page component covering homeowner problem, emotional reason, WNY context, solution approach, safe feature examples, ownership/no-required-monthly-fees positioning, local install/support, and CTAs/internal links. Added conservative Packages-page internal links to the four pages without changing global navigation. Public copy avoids guarantees, fabricated proof, invented statistics, emergency-response claims, medical/fall-detection claims, insurance-savings claims, and public monitoring/dispatch language. Version bumped to `v1.0.112`. Build, diff check, focused lint, route grep, and source forbidden-claims scan passed; repo-wide lint still has pre-existing unrelated baseline failures outside touched TS/TSX files.

### SOLUTION001-A
- **Task ID:** SOLUTION001-A
- **Task Name:** Apply Solution Page Standard To Existing Opportunity Pages
- **Status:** DONE
- **Category:** COPY / FUNNEL / GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Apply `SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01` to the four existing opportunity solution pages so they share a repeatable WNYHS solution-page structure, visual hierarchy, CTA pattern, and claim-safe content posture.
- **Allowed Scope:** Update only `/solutions/senior-safety`, `/solutions/water-protection`, `/solutions/family-awareness`, and `/solutions/vacation-homes`; update the shared solution page component and scoped solution-page styling; add/register the SOLUTION001 standard document; update document catalog/manifest/task register; bump visible site version.
- **Forbidden Scope:** No Homepage changes, no Packages page changes, no Support page changes, no Our Work page changes, no QR Landing page changes, no new routes beyond the four existing solution routes, no global navigation redesign, no SOLUTION001-B creation or execution, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email/Resend changes, no runtime contract changes, no environment variable changes, no secrets, no pricing/business-rule changes, no semantic token definition changes, no hardcoded colors, no unsupported claims, no fake customer stories, and no invented locations/outcomes.
- **Target Files:** `src/pages/SolutionOpportunity.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Public solution-page presentation only; no protected runtime systems.
- **Documentation Updates Required:** Include and register the SOLUTION001 REV01 standard document; update catalog/manifest/register status and completion notes.
- **Validation Required:** `npm run build`; `git diff --check`; focused lint/typecheck where feasible for touched TS/TSX files; source scan for forbidden claims in changed solution page files; protected-system diff check.
- **Exit Criteria:** All four solution pages follow Hero, Who This Helps, Problem / Solution / Outcome, Western New York Context, Possible Pieces Of The Plan, Example Scenario, and Next Step order; hero trust pills and CTA hierarchy match the standard; copy remains problem-first, local, and claim-safe; internal links include Packages, Fit Check, and Estimate; standard doc is included; no protected systems or forbidden pages are changed; validation passes or any unrelated baseline issue is documented.
- **Dependencies:** SOLUTION001 standard document, CONTENT001-E opportunity pages, controlling context alignment, and bounded operator prompt approval.
- **Operator Decision Required:** Visual approval of the standardized solution-page system before any future SOLUTION001-B locking task.
- **Completion Notes:** Created the non-executable SOLUTION001 initiative record and promoted SOLUTION001-A to `ACTIVE` before implementation, then marked it `DONE` after successful validation. Added and registered `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md`; updated the four existing solution opportunity routes through the shared `SolutionOpportunity` component to follow Hero, Who This Helps, Problem / Solution / Outcome, Western New York Context, Possible Pieces Of The Plan, Example Scenario, and Next Step order; aligned hero trust pills and CTA hierarchy to the standard; added illustrative scenario copy without names, towns, or real-project claims; tightened scoped card styling with existing semantic tokens; preserved required Packages, Fit Check, Estimate, and Our Work links without global navigation changes. Version bumped to `v1.0.113`. `npm run build`, `git diff --check`, focused ESLint, source forbidden-claim scan, and documentation traceability grep passed.

### HOMEPAGE-SOLUTIONS-CARD-POLISH-MAIN-001
- **Task ID:** HOMEPAGE-SOLUTIONS-CARD-POLISH-MAIN-001
- **Task Name:** Homepage Solutions Card Layout Polish
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** Current emergency customer-facing homepage/live conversion cleanup effort
- **Purpose:** Polish the `/home-security` Solutions cards so each card has a clearer premium sales-card layout: large image zone, strong title zone, short description zone, and a bottom value row with starting price and base/add-on availability.
- **Allowed Scope:** Modify `/home-security` homepage Solutions card layout only; modify CSS required for the Solutions card layout only; update the three approved solution descriptions; keep the existing three solution images; keep the existing three solution titles; keep the existing three starting prices; keep the existing base/add-on availability concept; bump visible site version once.
- **Forbidden Scope:** Do not modify Stripe; do not modify HubSpot; do not modify forms; do not modify routes; do not modify QR Landing; do not modify Support; do not modify final CTA; do not modify Trust panel; do not re-add Example Projects; do not modify image files; do not hardcode colors; do not introduce new claims; do not change backend/runtime behavior.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`.
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add this bounded task-register entry as `ACTIVE`.
- **Validation Required:** `npm run build`; grep validation for new solution copy/pricing; grep validation that Example Projects remains removed; confirm one `SITE_VERSION` export; confirm protected systems untouched.
- **Exit Criteria:** Each solution card uses the approved 4-zone card layout; images are visually larger and more prominent; price and availability are presented in a dedicated bottom value row; card heights align cleanly; build passes; PR opens against `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and merged HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001.
- **Operator Decision Required:** Approve merge after QA validation.

### HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001
- **Task ID:** HOMEPAGE-SOLUTIONS-CATALOG-MAIN-001
- **Task Name:** Homepage Solutions Catalog Upgrade + Example Projects Removal
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** Current emergency customer-facing homepage/live conversion cleanup effort
- **Purpose:** Upgrade the `/home-security` homepage Solutions section so it reads as purchasable customer solutions with images, homeowner-friendly copy, starting installed prices, and base/add-on language. Remove the duplicative Example Projects section.
- **Allowed Scope:** Modify `/home-security` homepage Solutions section only; add/use the three solution images from `public/images/solutions`; update solution card titles, body copy, pricing lines, and availability lines; remove the Example Projects section from `/home-security`; update styling needed for solution images, price line, and availability line using semantic tokens only; bump visible site version once.
- **Forbidden Scope:** Do not modify Stripe; do not modify HubSpot; do not modify forms; do not modify routes; do not modify QR Landing; do not modify Support; do not modify final CTA; do not modify Trust panel; do not hardcode colors; do not introduce new claims; do not change backend/runtime behavior.
- **Target Files:** `docs/system/master-task-register.md`, `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `public/images/solutions/front-door-package-protection.png`, `public/images/solutions/smart-home-security.png`, `public/images/solutions/connected-garage-workshop.png`.
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add this bounded task-register entry as `ACTIVE`.
- **Validation Required:** `npm run build`; grep validation for new solution copy/pricing; grep validation that Example Projects homepage copy is removed; confirm one `SITE_VERSION` export; confirm protected systems untouched.
- **Exit Criteria:** Homepage Solutions section uses the approved three-card purchasable solution layout; Example Projects section is removed; images are included in the PR; build passes; PR opens against `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and operator-supplied image assets.
- **Operator Decision Required:** Approve merge after QA validation.

### HOMEPAGE-EXAMPLE-PROJECTS-MAIN-001
- **Task ID:** HOMEPAGE-EXAMPLE-PROJECTS-MAIN-001
- **Task Name:** Replace Main Homepage Our Work Panel With Example Projects Panel
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Secondary Category:** COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace only the main `/home-security` homepage Our Work panel with the approved Example Projects panel while preserving homepage order and protected runtime systems.
- **Allowed Scope:** Update only the main `/home-security` homepage Our Work panel; replace it with the approved Example Projects panel; use only existing repo images listed in the task; update site version.
- **Forbidden Scope:** Do not modify hero; do not modify How It Works; do not modify trust row; do not modify Solutions panel; do not modify final CTA; do not modify QR Landing; do not modify Fit Check logic; do not modify estimate/contact forms; do not modify HubSpot; do not modify Stripe; do not modify routes.
- **Target Files:** `src/components/homeSecurity/HomeSecurityLanding.tsx`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None. Public homepage presentation/copy only.
- **Documentation Updates Required:** Add or activate this bounded task-register entry.
- **Validation Required:** `npm run build`; `rg -n "OUR WORK|Our work|Real installs\. Real homes\. Real results\.|See more of our projects" src/components/homeSecurity/HomeSecurityLanding.tsx`.
- **Exit Criteria:** Example Projects panel appears on `/home-security`; old Our Work wording is gone from that panel; PR targets `main`; no merge performed.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and revised task image paths supplied by operator.
- **Operator Decision Required:** Approve merge after QA validation.

- **Task ID:** FUNNEL005
- **Task Name:** Reframe Package Page From Pricing Packages To Protection Planning
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reframe public package/protection surfaces from fixed package sales language to consultative protection planning while preserving estimate flows and protected runtime systems.
- **Allowed Scope:** Public package/protection copy cleanup, visible pricing-anchor removal on package surfaces, CTA label shifts to walkthrough/planning language, Build Your System guidance, no-required-monthly-contract messaging, bounded register updates.
- **Forbidden Scope:** Stripe/payment flow changes, HubSpot schema/workflow changes, lead-signal transport/runtime contract changes, QR attribution contract changes, autoresponder changes, quote review CTA reintroduction, and route architecture rewrites.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public funnel presentation only (no runtime behavior changes).
- **Documentation Updates Required:** Task register entry only.
- **Validation Required:** `npm run build`; `rg -n "1799|2499|3499|one-time|Select Bronze|Select Silver|Select Gold|What.s included|Buy|Purchase|guarantee|guaranteed|Review Estimate Summary|quoteReview|Build Your System|no required monthly" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Public package/protection surfaces avoid hard pricing anchors and rigid package-purchase language; walkthrough-led protection planning and Build Your System direction are visible; estimate capture flows and protected systems remain unchanged.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and existing FUNNEL hardening tasks.
- **Operator Decision Required:** Approve merge after QA validation.


### FUNNEL006
- **Task ID:** FUNNEL006
- **Task Name:** Polish Protection Styles + Build Your System Positioning
- **Status:** DONE
- **Category:** FUNNEL / COPY / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Refine package surfaces so protection-style planning and local walkthrough positioning are primary, while preserving all protected lead, CRM, and payment systems.
- **Allowed Scope:** Packages and package-detail copy/layout polish, consultative CTA labeling, Build Around Your Property section prominence, visible site version bump, bounded task-register update.
- **Forbidden Scope:** no form submit logic changes; no `/api/lead-signal` transport/runtime changes; no HubSpot schema/workflow changes; no autoresponder changes; no Stripe/payment changes; no quoteReview CTA reintroduction; no image creation/replacement.
- **Target Files:** `src/pages/Packages.tsx`, `src/components/PackageCard.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/content/homeSecurityPackageData.ts`, `src/content/packages.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (public funnel presentation/copy only).
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `npm run build`; `rg -n "Bronze tier|Silver tier|Gold tier|Walkthrough estimate|No subscriptions sold by us|Use As Starting Point|two indoor|PoE|NVR included|Home Assistant with LAN|Build Around Your Property|Review Estimate Summary|quoteReview|guarantee|guaranteed" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Protection-style names are primary on package cards; pricing-like walkthrough block removed/softened; Build Around Your Property is a distinct major section; risky subscription phrasing replaced; no protected runtime system behavior changed.
- **Dependencies:** FUNNEL005 framing preserved.
- **Operator Decision Required:** Yes (merge approval).
- **Completion Notes:** Completed by making protection-style names the dominant visible headings, replacing large walkthrough-estimate visual emphasis with supportive review copy, reducing technical density in package copy, upgrading CTA language to consultative walkthrough wording, promoting Build Around Your Property with module chips and local walkthrough guidance, and bumping visible site version. Build and scope-grep validations passed with no form/lead/HubSpot/Stripe/runtime behavior edits.

### FUNNEL007
- **Task ID:** FUNNEL007
- **Task Name:** Package Page Visual Cleanup + Duplicate CTA Removal
- **Status:** DONE
- **Category:** FUNNEL / COPY / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Clean up post-FUNNEL006 package/pdp visual hierarchy, remove duplicate package-detail CTA block, and keep consultative protection-style presentation while preserving all protected runtime systems.
- **Allowed Scope:** packages top-section visual cleanup, package-detail duplicate CTA removal, protection-style-first hierarchy refinement, overlay/card clutter reduction, visible site version bump, bounded task-register update.
- **Forbidden Scope:** no form submit changes; no lead-signal runtime/transport changes; no HubSpot schema/workflow changes; no autoresponder changes; no Stripe/payment changes; no quoteReview CTA reintroduction; no image creation/replacement.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/PackageCard.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/index.css`, `src/styles/homeSecurityPremium.css`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (presentation-only package and package-detail cleanup).
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `npm run build`; `rg -n "Request Walkthrough Estimate|Bronze tier|Silver tier|Gold tier|Review Estimate Summary|quoteReview|guarantee|guaranteed|CanonicalEstimateRequestForm|sendLeadSignal" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** package detail pages show one primary walkthrough CTA; package-card hierarchy emphasizes protection-style names with reduced tier-label dominance; package-page top section reads cleaner with less cramped headers/overlays; protected routes/forms/lead/payment systems unchanged.
- **Dependencies:** FUNNEL006 completion.
- **Operator Decision Required:** Yes (merge approval).
- **Completion Notes:** Removed the redundant sticky duplicate walkthrough CTA from package detail pages, tightened package-page hero spacing and wording, reduced overlay/ribbon/caption visual noise, and promoted protection-style naming on package cards while de-emphasizing bronze/silver/gold labels as secondary context. Version bumped for deployment visibility. Build and scope grep validations passed with no form, lead-signal, HubSpot, Stripe, autoresponder, or route logic edits.
Multiple ACTIVE tasks under CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 are pre-authorized for bounded final-hour execution, but Codex may only execute the single task explicitly named in the current prompt. ACTIVE is authorization, not permission to bundle. Hard guardrails for claims, Stripe, HubSpot, runtime/routes/UI, secrets, historical docs, and generated binary print files remain enforced.



### GOV001
- **Task ID:** GOV001
- **Task Name:** Governance Precedence Reconciliation
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile governance precedence to a single current-context + Master Task Register execution model and remove parallel-Step ambiguity.
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
  - `rg -n "current operational context|Master Task Register|authority hierarchy|precedence|Step101|Step102|Step201" docs/system docs/DOCUMENT_CATALOG.md docs/codex`
  - `rg -n "Cloudflare|deployment" docs/system docs/DOCUMENT_CATALOG.md docs/codex`
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

### CODEX-CONTRACT001
- **Task ID:** CODEX-CONTRACT001
- **Task Name:** Standard Codex Run Contract
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a reusable standard Codex run contract so future Codex prompts can reference one stable governance document instead of repeating base governance, protected-system, review, validation, and output rules.
- **Allowed Scope:** Documentation/governance only; create `docs/codex/CODEX_RUN_CONTRACT.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No runtime code, UI components, routes, form components, HubSpot code/schema/workflows, Stripe code/webhooks/payment verification, scheduling code/calendar writes, lead-signal implementation, QRLanding implementation, LEADFLOW002 implementation, referral logic, named QR logic, request estimate behavior changes, document deletion, document renaming, or document consolidation.
- **Target Files:** `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** New Codex run contract, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/codex/CODEX_RUN_CONTRACT.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Contract exists with required metadata and sections, catalog and manifest reference it, register records CODEX-CONTRACT001 as complete, validation passes, and no implementation or forbidden file changes occur.
- **Dependencies:** Current governance context, GOV002, DOC001, DOCSTATUS001.
- **Operator Decision Required:** No.
- **Completion Notes:** Created `docs/codex/CODEX_RUN_CONTRACT.md` as active Codex governance contract REV01 and updated the catalog, manifest addendum, and register only. No runtime/source behavior, UI, routes, forms, HubSpot, Stripe, scheduling, lead-signal, QRLanding, referral, named QR, or request estimate changes were made.



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

### FUNNEL002
- **Task ID:** FUNNEL002
- **Task Name:** Package Estimate Flow Repair
- **Status:** DONE
- **Category:** FUNNEL / RUNTIME / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Repair package-selected estimate request submission and package-selected `/quoteReview` rendering while preserving working Fit Check and QRLanding behavior.
- **Allowed Scope:** package-selected contact flow submit repair, package-selected `/quoteReview` defensive rendering repair, query/context preservation, canonical estimate form staged/card formatting cleanup, bounded register update.
- **Forbidden Scope:** no Stripe/payment logic changes; no HubSpot schema/workflow changes; no pricing logic changes; no unrelated routes/features.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|Review Estimate Summary|selected-package|estimateIntent|CanonicalEstimateRequestForm|sendLeadSignal|qrlanding|estimate_form_started|estimate_form_submitted|entryRoute|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** package-selected contact submission uses canonical `/api/lead-signal` path with preserved contextual query metadata; package-selected `/quoteReview` never blank-screens when Fit Check-only parameters are absent; QR attribution remains scoped to QR sessions only.
- **Completion Notes:** Contact page now forwards package/funnel query context (`estimateIntent`, `recommended`, `fit`, `propertySize`, `coverageExpectation`, `tier`, `package`) into quote-review routing and lead-signal payload context, while keeping non-QR entry route values local to actual path. QuoteReview blank render fixed by eliminating conditional-hook ordering risk during null quote fallback rendering. Canonical estimate form kept shared while tightening staged grouping/spacing in the common component.


### FUNNEL003
- **Task ID:** FUNNEL003
- **Task Name:** Package Flow Hotfix: CRM Verification + QuoteReview Blank Screen
- **Status:** DONE
- **Category:** FUNNEL / CRM / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Verify package-selected estimate submissions remain HubSpot-compatible through `/api/lead-signal` while preserving non-QR attribution and repair `/quoteReview` blank-screen behavior for package query URLs.
- **Allowed Scope:** package/contact lead-signal payload verification against QRLanding baseline, bounded package-flow parity fixes if required, `/quoteReview` defensive fallback rendering for query-only package review paths, bounded register updates.
- **Forbidden Scope:** no Stripe/payment changes; no HubSpot schema/pipeline/workflow changes; no pricing logic changes; no unrelated route or UI redesign.
- **Validation Required:** `npm run build`; `rg -n "quoteReview|QuoteReview|Review Estimate Summary|selected-package|estimateIntent|CanonicalEstimateRequestForm|sendLeadSignal|lead-signal|HubSpot|sourceFamily|qrlanding|estimate_form_submitted|entryRoute|requestId|dedupe|dedup" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** package-selected submissions use the canonical `/api/lead-signal` path with non-QR context preserved and without QR-only attribution leakage; `/quoteReview` query-only package URLs render visible fallback/summary and never blank-screen; QRLanding and Fit Check flows remain intact.
- **Completion Notes:** Verified QRLanding and package/contact flows both submit through `sendLeadSignal` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `/api/lead-signal` with shared canonical contact/request contract; package flow intentionally keeps non-QR `sourceFamily=MAIN_SITE`, non-QR source strings, and `estimateIntent=selected-package` context. HubSpot behavior aligns with expected contact dedupe/append when reused identities are submitted. `/quoteReview` black-screen root cause was conditional hook ordering (early return before later hooks), repaired by ensuring hooks execute in stable order before null-quote fallback rendering.


### HOTFIX002
- **Task ID:** HOTFIX002
- **Task Name:** Remove Public Review Summary CTAs + Preserve Estimate Form Styling
- **Status:** DONE
- **Category:** FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remove public-facing Review Summary CTAs that route to `/quoteReview` while keeping `/quoteReview` route/component dormant and preserving canonical estimate submit behavior.
- **Allowed Scope:** remove/hide customer-facing `/quoteReview` CTA links; keep `/quoteReview` route/component intact; preserve canonical estimate request form submit logic and QR/package/Fit Check behavior; update bounded task register record.
- **Forbidden Scope:** no Stripe/payment changes; no HubSpot schema/workflow changes; no lead-signal payload contract changes; no pricing changes; no route deletion.
- **Target Files:** `src/pages/Contact.tsx`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Contact-page UI CTA visibility only.
- **Documentation Updates Required:** Add HOTFIX002 completion record with scope and validation evidence.
- **Validation Required:** `npm run build`; `rg -n "Review Estimate Summary|Review Request Summary|Review my estimate|Review my answers|quoteReview" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** No public Review Summary CTA routes users to `/quoteReview`; `/quoteReview` route/component remains present; canonical estimate submission flows remain unchanged.
- **Dependencies:** FUNNEL001/FUNNEL002/FUNNEL003 history retained.
- **Operator Decision Required:** No
- **Completion Notes:** Removed the contact-page public `Review Estimate Summary` button that linked to `/quoteReview` while preserving call/text CTAs and canonical estimate request form wiring. Kept `/quoteReview` route/component untouched and retained canonical submit path via `sendLeadSignal` to `/api/lead-signal`.



### UIHOTFIX003
- **Task ID:** UIHOTFIX003
- **Task Name:** Standardize Estimate Form Visual Styling
- **Status:** DONE
- **Category:** FUNNEL / QA / VISUAL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Standardize customer-facing estimate/request quote form presentation to the cleaner staged QRLanding-style layout while preserving all runtime behavior.
- **Allowed Scope:** shared estimate form class/layout styling updates, staged card spacing/grouping improvements, mobile-safe field grid refinement, bounded task register update.
- **Forbidden Scope:** no submit logic changes; no payload shape changes; no lead-signal changes; no HubSpot schema/workflow changes; no Stripe/payment changes; no QR attribution contract changes; no Review Summary CTA reintroduction.
- **Target Files:** `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/canonicalEstimateForm.css`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None (presentation-only hotfix).
- **Documentation Updates Required:** Add UIHOTFIX003 completion record with scope and validation evidence.
- **Validation Required:** `npm run build`; `rg -n "CanonicalEstimateRequestForm|Review Estimate Summary|Review Request Summary|quoteReview|sendLeadSignal|lead-signal|entryRoute|estimate_form_submitted|requestId" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`.
- **Exit Criteria:** customer-facing estimate forms share staged card form presentation quality; QR attribution contract preserved for QR entry only; non-QR flows remain non-QR attributed; no Review Summary CTA reintroduced.
- **Dependencies:** HOTFIX002 completion preserved.
- **Operator Decision Required:** No
- **Completion Notes:** Canonical form markup/classes were updated to use shared staged-card presentation styles across QRLanding and non-QR surfaces, including improved field grouping, spacing, dark input styling, mobile responsiveness, and full-width submit button; submit handlers, payload keys, `/api/lead-signal` path, and QR/non-QR attribution behavior remained unchanged.
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
- **Completion Notes:** Source-only pole/mall flyer package created under `/public/brand/print-assets/pole-mall-flyer/`; generated PDFs are local-only under ignored `generated/`; canonical `PoleFlyerMallFlyer.png` is used as the full-page base/reference; exact on-disk QR Landing / Campaign QR asset `/public/brand/forprint/QR QRLANDING  Home Page QR.png` is overlaid; main website / business-card QR asset is documented as blocked and not used for output generation; claim caveats for ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“No Cloud RequiredÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â and ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“You Own. You Control.ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â are recorded for operator review before bulk production.

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

### FITCHECK001
- **Task ID:** FITCHECK001
- **Task Name:** Remove Legacy Quote Routing + Route Fit Check To Modern Intake
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Prevent customer-facing Fit Check next-step CTAs from sending users into the legacy `/quote` workflow and route them to the modern contact intake instead.
- **Allowed Scope:** Fit Check CTA route/copy updates, Fit Check CTA config updates, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Fit Check rebuild, question/scoring/recommendation changes, Quote page changes, legacy route deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling changes, referral logic, payout logic, pricing claims, instant quote language, or confirmed appointment language.
- **Target Files:** `src/components/FitCheck.tsx`, `src/content/fitCheckConfigs.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Fit Check CTA routing only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Customer-facing Fit Check next-step CTAs route to `/contact?vertical=home-security`; CTA copy uses consultation-first intake language; Fit Check logic and protected systems are unchanged.
- **Completion Notes:** Updated Fit Check primary next-step actions from legacy quote routing to `/contact?vertical=home-security`, replaced quote-oriented CTA language with `Request a Call or On-Site Estimate`, and bumped visible site version to `v1.0.92`. No Quote page, route deletion, Contact intake, QRLanding, lead-signal, HubSpot, Stripe, scheduling, scoring, question, or recommendation logic changes were made.

### FITCHECK001B
- **Task ID:** FITCHECK001B
- **Task Name:** Legacy Discovery CTA Cleanup + Modern Intake Routing
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Remove remaining legacy customer-facing Discovery/Fit Check CTA exposure and route modern next-step action to contact intake.
- **Allowed Scope:** Discovery top-nav CTA routing/copy, Fit Check customer-facing next-step utility cleanup, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Fit Check question/scoring/recommendation rebuild, broad Discovery redesign, Quote page changes, legacy route deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling changes, referral logic, payout logic, pricing claims, instant quote language, or confirmed appointment language.
- **Target Files:** `src/pages/Discovery.tsx`, `src/components/FitCheck.tsx`, `src/components/homeSecurity/WnyhsFunnelLayout.tsx`, `src/components/homeSecurity/WnyhsTopNav.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Discovery/Fit Check CTA routing/copy only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Discovery/Fit Check customer-facing CTA no longer exposes legacy Get Started routing, quote routing, or planner next-step routing; modern intake CTA routes to `/contact?vertical=home-security`; Fit Check logic and protected systems are unchanged.
- **Completion Notes:** Updated the Discovery/Fit Check top-right CTA from `Get Started` to `Request a Call or On-Site Estimate` and routed it to `/contact?vertical=home-security`; removed the optional planner link from Fit Check results to avoid sending Discovery/Fit Check users into planning from this path; bumped visible site version to `v1.0.93`. No Fit Check questions, scoring, recommendations, Discovery redesign, Quote page, Contact intake, QRLanding, lead-signal, HubSpot, Stripe, scheduling, or legacy route files were changed.

### BUILD001
- **Task ID:** BUILD001
- **Task Name:** Fix FloorplanFurnishings Build Blocker
- **Status:** DONE
- **Category:** QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Restore clean build validation by fixing the floorplan furnishings casing/default-export mismatch.
- **Allowed Scope:** Floorplan furnishings import/export casing fix, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No funnel behavior changes, Contact, QRLanding, Fit Check, Discovery, Quote, Agreement, Deposit, Schedule, HubSpot, Stripe, Scheduling, lead-signal, requestId, customer-facing copy, pricing, or package changes.
- **Target Files:** `src/components/floorplan/FloorplanFurnishings.tsx`, `src/components/floorplan/floorplanFurnishingRules.ts`, `src/components/floorplan/floorplanFurnishings.ts`, `src/components/floorplan/__tests__/floorplanFurnishings.test.ts`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** None; build-only floorplan module casing repair.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; targeted floorplan furnishings grep; `npm run build`.
- **Exit Criteria:** `npm run build` passes without the FloorplanFurnishings casing/default-export blocker; floorplan runtime behavior is preserved; protected funnel/runtime systems remain untouched.
- **Completion Notes:** Renamed the lower-case furnishings helper module to `floorplanFurnishingRules.ts` and updated the component/test imports so the default-export `FloorplanFurnishings.tsx` component no longer collides with a same-basename helper on case-insensitive filesystems. Bumped visible site version to `v1.0.94`. No funnel behavior, Contact, QRLanding, Fit Check, Discovery, Quote, HubSpot, Stripe, Scheduling, lead-signal, requestId, customer-facing copy, pricing, or package changes were made.

### FITCHECK002
- **Task ID:** FITCHECK002
- **Task Name:** Rebuild Fit Check As Consultative Discovery Tool
- **Status:** DONE
- **Category:** FUNNEL / COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Rebuild Fit Check from legacy package/tier selection into a situation-based consultative discovery tool that routes to modern intake.
- **Allowed Scope:** Fit Check questions, adaptive follow-ups, solution-category recommendation output, Fit Check copy/config, visible site version bump, and bounded task-register completion note.
- **Forbidden Scope:** No Quote page changes, legacy route deletion, Agreement/Deposit/Schedule/System Planner deletion, Contact intake changes, QRLanding changes, `/api/lead-signal` changes, HubSpot changes, Stripe changes, scheduling/calendar changes, requestId changes, referral/payout/named-QR logic, package pricing, instant quote language, confirmed appointment language, or package checkout behavior.
- **Target Files:** `src/components/FitCheck.tsx`, `src/content/fitCheckConfigs.ts`, `src/newsite/pages/NewSiteFitCheck.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public Fit Check presentation/routing only; protected runtime systems untouched.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; task grep; `npm run build`.
- **Exit Criteria:** Fit Check uses no more than three primary situation-based questions, no more than three relevant adaptive follow-ups, category-based recommendations framed as a starting point, and final CTA routing to `/contact?vertical=home-security` without quote/package checkout exposure.
- **Completion Notes:** Rebuilt Fit Check around homeowner situations, away-from-property concerns, and property context; added priority-limited adaptive follow-ups; replaced tier/package output with solution-category recommendations and careful starting-point framing; routed the final CTA to `/contact?vertical=home-security`; bumped visible site version to `v1.0.95`. No Quote page, legacy route deletion, Contact intake, QRLanding, `/api/lead-signal`, HubSpot, Stripe, scheduling, requestId, pricing, or package checkout changes were made.

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
  - DESIGN-SKIN001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Homepage visual refinement
  - DESIGN-SKIN002 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR funnel conversion polish
  - DESIGN-SKIN003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Mobile responsiveness polish
  - DESIGN-SKIN004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Typography/system refinement
  - DESIGN-SKIN005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Yard sign/print branding alignment
  - DESIGN-SKIN006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Animation/motion polish
  - DESIGN-SKIN007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Site-wide tactical brand system (VISUAL001 + VISUAL002)

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
- **Task Name:** RUNTIME003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Stripe Runtime Contract
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
- **Task Name:** RUNTIME004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Email Runtime Contracts
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
- **Task Name:** RUNTIME005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Lead Signal + requestId Contracts
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
- **Task Name:** RUNTIME006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â HubSpot Runtime Contracts
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
- **Task Name:** RUNTIME007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Scheduling Ownership Contract
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
- **Task Name:** RUNTIME008 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution + Funnel Analytics Runtime Documentation
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
- **Task Name:** RUNTIME009 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QRLanding Event Instrumentation
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
- **Task Name:** RUNTIME010 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution Event Schema Validation Contract
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
- **Task Name:** RUNTIME011 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â QR Attribution Reporting / Review SOP
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

- **Task ID:** FUNNEL004
- **Task Name:** Replace Public Package Pricing With Guided Protection Styles + Build Your System Direction
- **Status:** ACTIVE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace rigid public Bronze/Silver/Gold package pricing emphasis with consultative protection-style guidance and modular Build Your System direction while preserving estimate flows and protected runtime systems.
- **Allowed Scope:** Home-security package/protection copy/layout updates, CTA text shifts toward estimate/walkthrough actions, modular Build Your System guidance sections, and bounded register updates.
- **Forbidden Scope:** Stripe/payment flow changes, HubSpot schema/workflow changes, lead-signal transport/runtime contract changes, QR attribution contract changes, autoresponder changes, quote review CTA reintroduction, and route architecture rewrites.
- **Target Files:** `src/pages/Packages.tsx`, `src/pages/PackageDetail.tsx`, `src/components/homeSecurity/PackageTierCards.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`
- **Runtime Systems Affected:** Public funnel presentation only (no runtime behavior changes).
- **Documentation Updates Required:** Task register entry only.
- **Validation Required:** `npm run build`; `rg -n "Bronze|Silver|Gold|1799|2499|3499|Build Your System|Request Free Estimate|CanonicalEstimateRequestForm|sendLeadSignal|lead-signal|quoteReview" src docs`; `git diff -- src docs/system/master-task-register.md docs/specs docs/runtime docs/codex/QA_CHECKLIST.md`
- **Exit Criteria:** Public home-security package/protection surfaces avoid hard public package pricing; consultative protection-style + Build Your System direction is visible; estimate capture flows and protected systems remain unchanged.
- **Dependencies:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01 governance and existing FUNNEL hardening tasks.
- **Operator Decision Required:** Approve merge after QA validation.

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
- **Task Name:** QA001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deployment Validation SOP + QA Checklist
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
- **Completion Notes:** Bumped visible site version to `v1.0.55`; added architecture audit doc `docs/audits/funnel_arch001_rev01.md` with dominant journey and alternate paths, page-role matrix, nav hierarchy recommendations, estimate/planner role decisions, duplicate/disruptive link findings, risk analysis, and bounded implementation order (`FUNNEL-ARCH002` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `ESTIMATE-FLOW001` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `QUOTE-GEN001` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ `CRM-STAGEFLOW001`); protected runtime and HubSpot/Stripe logic unchanged.
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

### CATALOG002
- **Task ID:** CATALOG002
- **Task Name:** Expand/Validate Missing Feature Categories
- **Status:** ACTIVE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Review the REV02 capability catalog for missing categories, duplicate context rows, naming consistency, and category boundaries before REV03.
- **Allowed Scope:** Documentation-only catalog review and proposed category/feature changes.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, pricing, customer-facing package commitments, and final hardware commitments.
- **Target Files:** `docs/catalogs/wnyhs_capability_catalog_rev02.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if a new revision is created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Update catalog revision notes and register status if activated.
- **Validation Required:** Catalog diff review and targeted prohibited-claims scans.
- **Exit Criteria:** Category and feature coverage gaps are documented or corrected in a future catalog revision.
- **Dependencies:** CATALOG001.
- **Operator Decision Required:** Confirm whether expansion proceeds as REV03 or a separate addendum.

### CATALOG003
- **Task ID:** CATALOG003
- **Task Name:** Research HA Integration / Local-Only Viability / Complexity / Market Interest
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace REV02 placeholder values with evidence-backed Home Assistant integration paths, local-only viability notes, complexity estimates, and market-interest assumptions.
- **Allowed Scope:** Documentation-only research, evidence notes, and catalog revision work.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, pricing, customer-facing package commitments, final hardware commitments, and vendor-cloud claims without evidence.
- **Target Files:** `docs/catalogs/wnyhs_capability_catalog_rev02.md` or successor revision, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if a new revision is created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Document evidence sources and unresolved validation items in the successor catalog revision.
- **Validation Required:** Catalog diff review, prohibited-claims scan, and competitor-name scan.
- **Exit Criteria:** Candidate rows have documented research status and remaining unknowns are explicit.
- **Dependencies:** CATALOG001 and CATALOG002 if category expansion is needed first.
- **Operator Decision Required:** Approve research source standards and priority order.
- **Completion Notes:** Created `docs/catalogs/wnyhs_capability_catalog_rev03.md` as a governed internal validation artifact using REV02 as the authoritative 187-row feature universe and `docs/catalogs/deep-research-report.md` as the validation source. REV03 keeps researcher-suggested additions separate, avoids pricing/BOM approval, and preserves protected runtime boundaries.

### BENCH001
- **Task ID:** BENCH001
- **Task Name:** Bench Validation Matrix For High-Risk / Validation-Required Features
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only bench-validation matrix for REV03 rows marked Validation Required, Research Required, Custom Quote Only, or Research Only before BOM/package work.
- **Allowed Scope:** Internal validation planning notes, acceptance criteria, evidence fields, risk flags, and unresolved dependency tracking.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, pricing, customer-facing package commitments, final hardware commitments, and live device deployment.
- **Target Files:** Future internal validation documents under `docs/`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add validation matrix and catalog cross-references if activated.
- **Validation Required:** Documentation diff review, protected-runtime scope audit, prohibited-claims scan.
- **Exit Criteria:** High-risk and validation-required REV03 rows have documented bench tests, pass/fail criteria, and unresolved risks.
- **Dependencies:** CATALOG003.
- **Operator Decision Required:** Approve validation matrix format and priority order.

### BOM001
- **Task ID:** BOM001
- **Task Name:** Build BOMs For Top 10 Priority Capabilities
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Build internal BOMs for the top 10 immediate capability priorities after integration and local-only viability research is sufficient.
- **Allowed Scope:** Internal documentation-only BOM research and validation notes for priority capabilities.
- **Forbidden Scope:** Public pricing, customer-facing package commitments, final hardware commitments before validation, runtime code, UI components, routes, Stripe, HubSpot, scheduling, and analytics.
- **Target Files:** Future internal BOM documents under `docs/` as approved, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add BOM docs and catalog cross-references if activated.
- **Validation Required:** BOM diff review, no-public-pricing scan, and protected-runtime scope audit.
- **Exit Criteria:** Top 10 priority capabilities have internal minimum/recommended BOM candidates and unresolved validation risks documented.
- **Dependencies:** CATALOG001 and CATALOG003.
- **Operator Decision Required:** Approve BOM document format and vendor-research boundaries.

### PACKAGE001
- **Task ID:** PACKAGE001
- **Task Name:** Create Solution Packages From Validated Capabilities
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Group validated capabilities into solution-package concepts only after feature feasibility and BOM work are complete enough to avoid arbitrary package design.
- **Allowed Scope:** Internal documentation-only package planning from validated capabilities and BOM evidence.
- **Forbidden Scope:** Public pricing, customer-facing package commitments without approval, runtime code, UI components, routes, Stripe, HubSpot, scheduling, analytics, and final hardware commitments without validation.
- **Target Files:** Future internal package-planning documents under `docs/` as approved, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add package-planning docs and catalog/BOM cross-references if activated.
- **Validation Required:** Package-planning diff review, no-public-pricing scan, and protected-runtime scope audit.
- **Exit Criteria:** Solution packages are derived from validated capabilities and BOM evidence, with unresolved assumptions documented.
- **Dependencies:** CATALOG001, CATALOG003, and BOM001.
- **Operator Decision Required:** Approve transition from internal package concepts to any future customer-facing copy task.

### CLAIMS001
- **Task ID:** CLAIMS001
- **Task Name:** Claims Boundary Notes For Life Safety / Health / Security / Savings Features
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create internal claims-boundary notes for REV03 rows with elevated life-safety, health, security, weather, caregiver, or savings-language risk.
- **Allowed Scope:** Internal documentation-only claims notes, restricted terminology, review flags, and future approval requirements.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, public copy, public pricing, package commitments, and legal conclusions.
- **Target Files:** Future internal claims-boundary documents under `docs/`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md` if new docs are created.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add claims-boundary notes and catalog cross-references if activated.
- **Validation Required:** Documentation diff review, forbidden-claims scan, protected-runtime scope audit.
- **Exit Criteria:** Elevated-risk capability rows have conservative internal wording boundaries before any future customer-facing copy task.
- **Dependencies:** CATALOG003.
- **Operator Decision Required:** Approve claims review standard and any required external review path.


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

- **QUOTE-GEN001** ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Quote generation, HubSpot quote-stage update, customer/operator quote email delivery. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)
- **CRM-STAGEFLOW001** ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deal pipeline advancement rules after quote/deposit/scheduling events. (Deferred; not implemented in MAIN-FUNNEL-FIX003B.)

---

### CONTENT001
- **Task ID:** CONTENT001
- **Task Name:** Website Content Remediation Initiative
- **Status:** BACKLOG
- **Category:** GOV / COPY / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Establish the audit-driven website content remediation initiative and preserve traceability from the live website audit, remediation instructions, and finding-to-remediation matrix into bounded future implementation work.
- **Allowed Scope:** Governance tracking, task sequencing, remediation traceability, and future bounded implementation-task preparation for Homepage, QR Landing, Packages, Support, Our Work, and approved opportunity pages.
- **Forbidden Scope:** No public website page edits, no route creation, no UI creation, no runtime logic changes, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no public-facing copy changes, and no implementation bundling.
- **Target Files:** `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`, `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None. Governance and task tracking only.
- **Documentation Updates Required:** Maintain source remediation docs, catalog/manifest references, parent initiative status, and child implementation-track status.
- **Validation Required:** Documentation diff; targeted `CONTENT001`/traceability grep; no-forbidden-file drift check; `npm run build` as repo-standard validation.
- **Exit Criteria:** CONTENT001 source docs are tracked; parent initiative and bounded child tasks exist; traceability is preserved for missing social proof, missing hero CTA, missing no-required-monthly-fees positioning, missing customer-owned-equipment positioning, hardware-first messaging, missing local trust signals, missing QR context alignment, missing FAQ/self-service support, missing case-study storytelling, and future opportunity pages; no implementation occurs.
- **Dependencies:** CONTENT001-A completion and operator approval to activate any child implementation track.
- **Operator Decision Required:** Approve activation of each child task individually before implementation.
- **Operator Approval Requirements:** Implementation may begin only after the specific child task is promoted to `ACTIVE` or explicitly authorized by a future bounded prompt under the controlling context.

### CONTENT001-A
- **Task ID:** CONTENT001-A
- **Task Name:** Website Content Remediation Backlog / Governance Entry
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Reconcile CONTENT001 audit findings with the repository governance model and create the bounded task structure for future implementation.
- **Allowed Scope:** Documentation/governance only: CONTENT001 source docs, Master Task Register entries, Document Catalog entry, and Markdown Manifest addendum.
- **Forbidden Scope:** No website page edits, no route changes, no UI creation, no runtime logic changes, no Stripe changes, no HubSpot changes, no Scheduling changes, no Email changes, no environment variable changes, no secrets, no public-facing copy changes, and no implementation work.
- **Target Files:** `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md`, `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md`, `docs/system/master-task-register.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add parent initiative, child implementation tracks, catalog entries, and manifest addendum.
- **Validation Required:** `git diff -- docs/content-remediation docs/system/master-task-register.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md`; targeted `CONTENT001` grep; no-forbidden-file drift check; `npm run build`.
- **Exit Criteria:** CONTENT001 parent and child tasks exist, implementation child tracks remain bounded/non-active, traceability to audit findings is preserved, and no implementation occurs.
- **Dependencies:** Operator-provided CONTENT001 remediation instructions and matrix.
- **Operator Decision Required:** Approve future activation of child implementation tasks individually.
- **Operator Approval Requirements:** No implementation approval is granted by CONTENT001-A.

## Runtime Hardening Queue (GOV004)

Runtime documentation hardening is authorized as documentation-only work under the current Step102 context. The following recommended execution order is approved to avoid repeated one-by-one promotion stops while preserving ACTIVE-task gating:

1. **RUNTIME004 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Email Runtime Contracts**
2. **RUNTIME005 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Lead Signal + requestId Contracts**
3. **RUNTIME003 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Stripe Runtime Contract**
4. **RUNTIME006 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â HubSpot Runtime Contracts**
5. **RUNTIME007 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Scheduling Ownership Contract**
6. **QA001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Deployment Validation SOP** (promote from READY when safe)

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
- **Completion Notes:** Version bumped to `v1.0.62`; `/contact` now conditionally shows ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“Review Estimate SummaryÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â when selected-package or recommendation context exists and routes into `/quoteReview` with durable query context; `/quoteReview` now hydrates from token ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ saved quote ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ bounded query tier/recommendation fallback and shows required missing-context recovery CTAs (Find The Right System / Choose a Package / Request Estimate); send-quote path remained operational with existing customer-email validation and operator/ownership copy support.
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
- **Completion Notes:** Visible version bumped to `v1.0.81`; customer acknowledgement email subject refined to ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“We received your WNY Home Security estimate requestÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â; greeting/next-step/disclaimer/response-expectation/contact footer language updated for local professional clarity and mobile readability; dynamic selected-package + discovery context preserved; operator notification path and HubSpot/requestId/runtime behavior untouched.
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

### CATALOG001
- **Task ID:** CATALOG001
- **Task Name:** Add WNYHS Capability Catalog REV02 Baseline
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Add an internal planning catalog that defines the WNYHS control-plane capability universe for future validation, BOM, package, website, installation-standard, and hardware-standard work.
- **Allowed Scope:** Create `/docs/catalogs/wnyhs_capability_catalog_rev02.md`; update `/docs/DOCUMENT_CATALOG.md`; add bounded follow-up task records in this register.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot, scheduling, analytics, customer-facing package commitments, public pricing, final hardware commitments, competitor attack language, and deletion of historical docs.
- **Target Files:** `docs/catalogs/wnyhs_capability_catalog_rev02.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None; documentation/catalog governance only.
- **Documentation Updates Required:** Add catalog entry and task-register records for catalog validation, BOM research, and package-design follow-up work.
- **Validation Required:** `npm run build`; `git diff -- docs/catalogs docs/DOCUMENT_CATALOG.md docs/system`; targeted forbidden-pricing and competitor-name scans against the new catalog.
- **Exit Criteria:** REV02 catalog exists with required sections, required table columns, required categories, currently identified features, immediate BOM priority list, REV03 research path, and explicit no-public-pricing warning.
- **Dependencies:** Prompt-created bounded governance task; current operational context and protected runtime locks remain in force.
- **Operator Decision Required:** Approve REV02 as planning baseline and decide when to activate CATALOG002, CATALOG003, BOM001, and PACKAGE001.



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
- **Completion Notes:** Updated visible site version to v1.0.51; repositioned top-nav Planner entry as secondary optional item; retained Planner route access; tightened Planner CTA wording in recommendation state to emphasize later optional use; preserved home-security ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ discovery ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ recommendation ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ contact path and runtime boundaries; documented implementation in `docs/audits/main_funnel_fix003c_rev01.md`.

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
- **Task Name:** Fix Payment ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Schedule quote-scoped deposit validation
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-002
- **Task ID:** T-STEP102-HARDEN-002
- **Task Name:** Replace hardcoded payment vertical metadata with validated vertical context
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-003
- **Task ID:** T-STEP102-HARDEN-003
- **Task Name:** Add Agreement ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Payment binding metadata
- **Status:** DONE
- **Category:** PAYMENT

### T-STEP102-HARDEN-004
- **Task ID:** T-STEP102-HARDEN-004
- **Task Name:** Strengthen Quote ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Agreement validation
- **Status:** DONE
- **Category:** PAYMENT

---


### T-SCHED001-001
- **Task ID:** T-SCHED001-001
- **Task Name:** SCHED001 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Safe Scheduling Posture + Future Scheduling Model Lock-In
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
- If scope is unclear or outside the current operational context, stop and request a context revision before promotion.

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

### DOC001
- **Task ID:** DOC001
- **Task Name:** Repository Markdown Manifest
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a repo-wide markdown manifest so future Codex tasks can identify source-of-truth documents, runtime contracts, HubSpot docs, request/estimate docs, catalog docs, and stale/duplicate documentation before making changes.
- **Allowed Scope:** Documentation-only manifest creation, document catalog update, and task-register completion record.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe, HubSpot integration code, scheduling code, referral implementation, estimate behavior changes, document deletion, document renaming, document consolidation, public pricing, and customer-facing claims.
- **Target Files:** `docs/MARKDOWN_MANIFEST.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add manifest entry to `docs/DOCUMENT_CATALOG.md` and mark DOC001 complete in this register.
- **Validation Required:** `git status`; `git diff -- docs/MARKDOWN_MANIFEST.md docs/DOCUMENT_CATALOG.md docs/system/master-task-register.md`; `git diff --name-only`; markdown file scan excluding `.git` and `node_modules`; targeted manifest review-set grep.
- **Exit Criteria:** Manifest inventories every scanned markdown file, high-risk review sets exist, LEADFLOW001/HubSpot/QR/BOM-package review sets exist, and no runtime/source behavior changes are introduced.
- **Dependencies:** Current governance context and existing documentation corpus.
- **Operator Decision Required:** No.
- **Completion Notes:** Created `docs/MARKDOWN_MANIFEST.md` with 107 markdown files inventoried and explicit review sets for LEADFLOW001, HubSpot, QR/source attribution, BOM/package, Stripe, and scheduling work. No implementation tasks were completed.

### DOCSTATUS001
- **Task ID:** DOCSTATUS001
- **Task Name:** Documentation Reconciliation + Status Classification
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Perform a docs-only reconciliation pass using the markdown manifest so future implementation work does not break existing HubSpot, request estimate, QR attribution, scheduling, Stripe, runtime, catalog, or funnel systems.
- **Allowed Scope:** Documentation-only reconciliation document creation, document catalog update, markdown manifest addendum, and task-register completion record.
- **Forbidden Scope:** Runtime code, UI components, routes, Stripe code, HubSpot integration code, scheduling code, LEADFLOW001 implementation, referral logic, request estimate behavior changes, document deletion, document renaming, document consolidation, historical document rewrite, public pricing, and customer-facing claims.
- **Target Files:** `docs/system/document_status_reconciliation_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add the reconciliation document, add document catalog entry, add markdown manifest addendum, and mark DOCSTATUS001 complete in this register.
- **Validation Required:** `git status`; `git diff -- docs/system/document_status_reconciliation_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; targeted reconciliation grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Reconciliation document exists, high-risk review sets are present, LEADFLOW001 review set is focused and practical, documentation gaps and future tasks are identified, and no runtime/source behavior changes are introduced.
- **Dependencies:** DOC001, CATALOG003, current governance context, runtime contracts, HubSpot REV03, funnel standards, Scheduling contracts, Stripe runtime contract, and Capability Catalog REV03.
- **Operator Decision Required:** Review DOCSYNC001 and LEADFLOW001 ordering before implementation work.
- **Completion Notes:** Created `docs/system/document_status_reconciliation_rev01.md`, classified authoritative/supporting/historical/superseded/unknown docs, captured current HubSpot/QR/Scheduling/Stripe/catalog realities, listed known documentation gaps, and preserved protected runtime systems.

### LEADFLOW001
- **Task ID:** LEADFLOW001
- **Task Name:** Lead Intake, Referral Attribution, and Quote-Aware CRM Workflow Runtime Contract
- **Status:** DONE
- **Category:** GOV / LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the lead intake, referral attribution, named QR source attribution, and quote-aware CRM workflow runtime contract before any implementation work.
- **Allowed Scope:** Documentation-only runtime contract drafting, review-set use, source attribution model definition, referral-awareness boundaries, HubSpot mapping proposal, document catalog update, markdown manifest addendum, task-register update, and follow-up task definition.
- **Forbidden Scope:** Runtime code changes, UI changes, route changes, HubSpot schema/property creation, HubSpot workflow implementation, Stripe changes, scheduling behavior changes, referral payout automation, request estimate behavior changes, and direct CRM writes.
- **Target Files:** `docs/runtime/leadflow_referral_attribution_runtime.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** New runtime contract, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Validation Required:** `git status`; `git diff -- docs/runtime/leadflow_referral_attribution_runtime.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Runtime contract exists, includes all required sections, keeps manual referral and source attribution separate, defines future implementation gates, and clearly separates documentation decisions from implementation.
- **Dependencies:** DOCSTATUS001.
- **Operator Decision Required:** Approve scope and HubSpot/referral boundaries before activation.
- **Completion Notes:** Created `docs/runtime/leadflow_referral_attribution_runtime.md` as a documentation-only runtime contract for future leadflow/referral/source/quote-awareness work. No runtime behavior, API payload behavior, HubSpot schema, named QR implementation, payout automation, quote automation, Stripe behavior, Scheduling behavior, route, UI, or form changes were made.

### LEADFLOW002A
- **Task ID:** LEADFLOW002A
- **Task Name:** Estimate Intake Conversion Split + Callback Request Path
- **Status:** DONE
- **Category:** LEAD / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve estimate-intake conversion by splitting the contact-page intake experience into Request a Call and Request On-Site Estimate paths while preserving protected lead-signal, requestId, HubSpot, QRLanding, Scheduling, Stripe, and referral payout boundaries.
- **Allowed Scope:** Existing lead intake/form/page components, existing lead-signal callback handling through `/api/lead-signal`, safe operator/customer notification wording, optional referral context in existing request/note context only, visible site version bump, and task-register completion record.
- **Forbidden Scope:** No replacement or bypass of `/api/lead-signal`, no direct frontend HubSpot writes, no HubSpot property/schema/pipeline/stage changes, no Stripe changes, no payment behavior changes, no named QR source parsing, no `/qrlanding?src=` implementation, no QRLanding attribution event changes, no referral payout logic/status/percentage/amount, no customer-authoritative booking, no quote approval automation, no automatic discounts, no installer/contractor onboarding, no broad redesign, and no deletion of existing estimate fields.
- **Target Files:** `src/components/CanonicalEstimateRequestForm.tsx`, `src/pages/Contact.tsx`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, `functions/api/lead-signal.ts`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** Additive lead intake behavior through existing `/api/lead-signal`; no new CRM write path or protected-system replacement.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; targeted lead-signal/HubSpot/requestId/QR/referral/safety grep; targeted HubSpot property/pipeline grep; `npm run build`; scoped tests where available.
- **Exit Criteria:** Contact page offers Request a Call and Request On-Site Estimate; existing canonical estimate submission remains available and preserves supported fields; callback path requires only name and phone with optional email, notes, and `referredByName`; submissions use `/api/lead-signal`; HubSpot sync remains API-mediated with no new properties; QRLanding attribution events remain unchanged; Scheduling remains request/pending owner confirmation; no Stripe or payout logic changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001, QUOTE-REFERRAL001, scheduling runtime contracts, protected runtime contract.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** Added a contact-page intake split, callback request event handling through existing `/api/lead-signal`, optional `referredByName` in request/note/operator context only, callback-safe acknowledgement text, and a visible site version bump. Existing estimate submissions, HubSpot API-mediated sync, server requestId behavior, QRLanding attribution events, Scheduling confirmation boundary, Stripe behavior, and referral payout boundary were preserved.

### LEADFLOW002B
- **Task ID:** LEADFLOW002B
- **Task Name:** QRLanding Conversion Fix + Intake Parity
- **Status:** DONE
- **Category:** QR / LEAD / FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Improve QRLanding conversion by tightening the hero footprint, moving the Request a Call / Request On-Site Estimate choice higher, hiding forms until path selection, reducing non-essential QR estimate requirements, and preserving protected lead-signal, requestId, HubSpot, QR attribution, Scheduling, Stripe, and referral payout boundaries.
- **Allowed Scope:** `src/pages/QrLanding.tsx`, `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/qrLanding.css`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, bounded `/api/lead-signal` validation relaxation for optional QR estimate fields, and this task-register completion record.
- **Forbidden Scope:** No Stripe changes, no payment behavior changes, no HubSpot properties/schema/pipeline/stage changes, no direct frontend HubSpot writes, no named QR source parsing, no source registry logic, no referral payout logic/status/amount/percentage, no scheduling automation, no calendar event creation, no customer-authoritative booking, no referral discount/customer-facing payout language, no quote automation, no contractor onboarding, no revoke-permission feature, no broad site redesign, no QR attribution event rename/removal, and no deletion of supported estimate fields without optional access.
- **Runtime Systems Affected:** QRLanding form UX and bounded lead-signal validation only; existing `/api/lead-signal` endpoint, server requestId generation, API-mediated HubSpot sync, operator/customer notification paths, QR attribution event names, Scheduling confirmation boundary, and Stripe behavior remain preserved.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src functions docs`; `git ls-files --deleted`; `git diff --check`; targeted QR/lead-signal/HubSpot/requestId/referral/safety grep; targeted HubSpot property/pipeline grep; scoped lead-signal/HubSpot tests; `npm run build`.
- **Exit Criteria:** QRLanding presents Request a Call / Request On-Site Estimate choice before showing either form; hero footprint is reduced; callback form remains low-friction; QR estimate path uses optional non-essential fields where safe; where-did-you-hear-about-us is removed from the QR required flow; preferred communication supports multiple selections; final communication permission is visually separate and mandatory; duplicate communication controls are removed; `/qrlanding?src=placard`, QR attribution event names, `/api/lead-signal`, HubSpot API-mediated sync, requestId behavior, Scheduling request-only posture, Stripe boundary, named QR boundary, and referral payout boundary are preserved.
- **Dependencies:** LEADFLOW002A, LEADFLOW001, QRLanding runtime contract, lead-signal/requestId/HubSpot/Scheduling/Resend protected runtime contracts, HubSpot REV03.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** QRLanding now uses the shared intake split with deferred path selection, compact QR-specific estimate requirements, multi-select communication preferences, and a mandatory permission acknowledgement. The hero was tightened into a two-column conversion layout. `/api/lead-signal` remains the submission boundary; QR estimate validation was relaxed so optional email/date/window fields do not block submission. No HubSpot properties, direct frontend HubSpot writes, Stripe changes, scheduling automation, named QR parsing, or referral payout logic were added.

### LEADFLOW002C
- **Task ID:** LEADFLOW002C
- **Task Name:** Main Contact Intake Styling Parity + Estimate Entry Cleanup
- **Status:** DONE
- **Category:** LEAD / FUNNEL / QA
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Bring the main `/contact?vertical=home-security` intake styling into parity with the polished QRLanding shared intake experience while preserving protected lead-signal, requestId, HubSpot, Scheduling, QR attribution, Stripe, and referral payout boundaries.
- **Allowed Scope:** `src/pages/Contact.tsx`, `src/components/CanonicalEstimateRequestForm.tsx`, `src/styles/canonicalEstimateForm.css`, `src/lib/siteVersion.ts`, and this task-register completion record.
- **Forbidden Scope:** No Stripe changes, no payment behavior changes, no HubSpot properties/schema/pipeline/stage changes, no direct frontend HubSpot writes, no `/api/lead-signal` behavior changes, no named QR source parsing, no source registry logic, no referral payout logic/status/amount/percentage, no scheduling automation, no calendar event creation, no customer-authoritative booking, no quote automation, no Fit Check changes, no Quote page changes, no Agreement/Deposit/Schedule/System Planner legacy route changes, and no broad site redesign.
- **Runtime Systems Affected:** Contact-page intake presentation only through the existing shared form; protected runtime behavior remains unchanged.
- **Documentation Updates Required:** Task register completion record only.
- **Validation Required:** `git status`; `git diff --name-only`; `git diff -- src docs`; `git ls-files --deleted`; `git diff --check`; targeted Contact/intake/lead-signal/HubSpot/requestId/referral/safety/Fit Check/Quote grep; scoped lead-signal/HubSpot tests; `npm run build`.
- **Exit Criteria:** Contact page uses the same deferred Request a Call / Request On-Site Estimate path-selection posture as QRLanding; shared intake controls render as polished cards/permission sections instead of browser-default controls; submit buttons use premium CTA styling and path-specific labels; excess whitespace above path selection is tightened; callback path remains low-friction; non-essential fields remain optional where safe; `/api/lead-signal`, requestId, HubSpot API-mediated sync, Scheduling request-only posture, QR attribution, Stripe, Fit Check, and Quote pages remain preserved.
- **Dependencies:** LEADFLOW002A, LEADFLOW002B, LEADFLOW001, protected runtime contracts, HubSpot REV03, public/main funnel standards.
- **Operator Decision Required:** Approve PR after validation and protected-flow review.
- **Completion Notes:** Contact now uses the deferred compact shared intake variant and the shared form CSS owns the polished path cards, communication method cards, mandatory permission box, and premium submit button styling. Visible site version bumped. No backend, HubSpot, Stripe, Scheduling, QR source parsing, Fit Check, Quote, or legacy transaction route changes were made.

### LEADFLOW002
- **Task ID:** LEADFLOW002
- **Task Name:** Lead Intake + Referral Attribution Implementation
- **Status:** BACKLOG
- **Category:** LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement approved lead intake modernization, referral capture, and named source attribution only after LEADFLOW001, HubSpot mapping, attribution schema, quote-awareness, referral SOP, and QA plans are approved.
- **Allowed Scope:** Future implementation scope to be defined when activated.
- **Forbidden Scope:** Any implementation before required contracts and mappings are approved; direct frontend HubSpot writes; Stripe changes; Scheduling authority changes; route/funnel changes outside explicit scope; payout automation without approval.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** Future lead intake runtime if activated.
- **Documentation Updates Required:** Update runtime contracts and task register when activated.
- **Validation Required:** Future scoped validation plus QA-LEADFLOW001.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, QUOTE-REFERRAL001, REFERRAL-SOP001, QA-LEADFLOW001.
- **Operator Decision Required:** Approve implementation scope.

### HUBSPOT-REFERRAL001
- **Task ID:** HUBSPOT-REFERRAL001
- **Task Name:** HubSpot Referral Property Mapping Contract
- **Status:** DONE
- **Category:** CRM
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define proposed HubSpot contact/deal/note/task field placement, internal property names, field types, enum values, ownership, approval gates, and sync rules for referral attribution, named QR source attribution, lead entry path, and referral payout review before LEADFLOW002 implementation.
- **Allowed Scope:** Documentation-only HubSpot mapping contract creation, document catalog entry, markdown manifest addendum, and task-register completion record.
- **Forbidden Scope:** No runtime code, UI, routes, form components, HubSpot implementation code, HubSpot property creation, HubSpot writes, API payload changes, lead-signal implementation changes, QRLanding implementation changes, Stripe code, Scheduling code, tests, quote behavior changes, payout automation, named QR implementation, or customer-facing copy changes.
- **Target Files:** `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add CRM mapping contract, catalog entry, manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted mapping-contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Proposed field mapping and approval posture are documented; no HubSpot properties are created; no runtime/source behavior changes occur; LEADFLOW002 remains incomplete.
- **Dependencies:** LEADFLOW001.
- **Operator Decision Required:** Approve or revise proposed HubSpot property names, enum values, object placement, privacy posture, payout policy, and source registry model before implementation.
- **Completion Notes:** Created `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` as a docs-only internal CRM mapping contract. No HubSpot properties were created, no HubSpot records were written, and no runtime code, API payload, lead-signal, QRLanding, quote, payout, Stripe, Scheduling, route, form, UI, or customer-facing copy behavior changed.

### ATTRIBUTION001
- **Task ID:** ATTRIBUTION001
- **Task Name:** Named QR Source Attribution Schema Contract
- **Status:** DONE
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only attribution schema contract defining how future partner-specific, location-specific, campaign-specific, and print-asset-specific QR sources should be named, registered, validated, preserved, reviewed, and mapped through future leadflow/HubSpot/reporting work.
- **Allowed Scope:** Documentation-only named QR source attribution schema contract, document catalog entry, markdown manifest addendum, register completion record, and future placeholder task records for ATTRIBUTION002 and ATTRIBUTION003.
- **Forbidden Scope:** No runtime code, UI, routes, form components, public files, QR codes, print assets, URL parsing implementation, QRLanding implementation, lead-signal implementation, HubSpot properties, HubSpot writes, HubSpot runtime code, Stripe code, Scheduling code, tests, referral capture, payout logic, quote behavior changes, or customer-facing copy changes.
- **Target Files:** `docs/runtime/named_qr_source_attribution_schema_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add runtime schema contract, catalog entry, manifest addendum, register completion record, and future placeholders.
- **Validation Required:** `git status`; `git diff -- docs/runtime/named_qr_source_attribution_schema_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted schema-contract grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Named source ID rules, source taxonomy, registry field model, URL parameter contract, fallback rules, QR asset registration rules, HubSpot relationship, reporting rules, and future gates are documented; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001.
- **Operator Decision Required:** Approve registry location, source owner process, partner QR creation process, URL parameter acceptance posture, and HubSpot mapping before implementation.
- **Completion Notes:** Created `docs/runtime/named_qr_source_attribution_schema_rev01.md` as a docs-only internal runtime schema contract. No QR codes, print assets, URL parsing, QRLanding changes, lead-signal changes, HubSpot properties, HubSpot writes, quote changes, payout automation, public files, or runtime behavior changes were made.

### ATTRIBUTION002
- **Task ID:** ATTRIBUTION002
- **Task Name:** Named QR Source Registry
- **Status:** BACKLOG
- **Category:** QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create the approved named QR source registry only after ATTRIBUTION001 and operator approval define registry location, ownership, required fields, and source approval process.
- **Allowed Scope:** Future documentation/configuration scope to be defined when activated.
- **Forbidden Scope:** QR code creation, print asset creation, URL parsing implementation, QRLanding changes, lead-signal changes, HubSpot property creation, HubSpot writes, payout logic, quote behavior changes, customer-facing copy changes, and runtime implementation unless explicitly authorized.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** None until a later approved implementation.
- **Documentation Updates Required:** Update named QR source attribution schema, catalog, manifest, and task register when activated.
- **Validation Required:** Future scoped validation plus no-forbidden-file checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** ATTRIBUTION001.
- **Operator Decision Required:** Approve registry storage location and initial source records.

### ATTRIBUTION003
- **Task ID:** ATTRIBUTION003
- **Task Name:** Source Parameter Validation Implementation
- **Status:** BACKLOG
- **Category:** QR / RUNTIME
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Implement approved source parameter validation and preservation only after ATTRIBUTION001 schema and ATTRIBUTION002 registry are approved.
- **Allowed Scope:** Future implementation scope to be defined when activated.
- **Forbidden Scope:** Unmanaged source creation, arbitrary URL parameter trust, HubSpot schema creation, direct HubSpot writes, payout automation, quote behavior changes, Scheduling changes, Stripe changes, and customer-facing copy changes unless explicitly authorized.
- **Target Files:** Future scoped files only.
- **Runtime Systems Affected:** Future QRLanding/lead-signal attribution behavior if activated.
- **Documentation Updates Required:** Update runtime contracts, HubSpot mapping docs, QA plan, catalog/manifest, and task register when activated.
- **Validation Required:** Future scoped validation plus QRLanding, lead-signal, requestId, HubSpot partial-failure, and no-regression checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** ATTRIBUTION001, ATTRIBUTION002, HUBSPOT-REFERRAL001, LEADFLOW002 or explicit lead-signal attribution implementation authorization, QA-LEADFLOW001.
- **Operator Decision Required:** Approve implementation scope and rollout plan.

### QUOTE-REFERRAL001
- **Task ID:** QUOTE-REFERRAL001
- **Task Name:** Internal Quote-Visible Referral Awareness Spec
- **Status:** DONE
- **Category:** GOV / CRM / LEAD
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define how referral and named-source attribution may become visible to operators during future quote preparation without customer-facing referral language, automatic discounting, payout automation, quote automation, Stripe changes, or HubSpot runtime changes.
- **Allowed Scope:** Documentation-only internal quote/referral awareness specification; create `docs/specs/quote_referral_awareness_spec_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No runtime implementation, source code, functions, public files, quote UI changes, quote automation, pricing changes, discounts, payout automation, HubSpot properties, HubSpot sync changes, HubSpot runtime code, Stripe/payment behavior, Scheduling code, lead-signal implementation, QRLanding implementation, tests, customer-facing copy, package/pricing copy, or request estimate behavior changes.
- **Target Files:** `docs/specs/quote_referral_awareness_spec_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal quote/referral spec, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/specs/quote_referral_awareness_spec_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted quote-awareness spec grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Internal-only quote visibility boundaries are documented; referral/source context, requestId/HubSpot correlation, operator review rules, customer-facing restrictions, pricing/discount restrictions, Stripe/HubSpot boundaries, payout SOP relationship, future gates, and validation requirements are defined; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001.
- **Operator Decision Required:** Approve internal visibility boundaries.
- **Completion Notes:** Created `docs/specs/quote_referral_awareness_spec_rev01.md` as a docs-only internal quote/referral specification. No quote UI, quote automation, pricing, discounts, customer-facing copy, HubSpot schema/sync/runtime behavior, Stripe behavior, payout automation, lead-signal implementation, QRLanding implementation, route, form, public file, or test changes were made.

### REFERRAL-SOP001
- **Task ID:** REFERRAL-SOP001
- **Task Name:** Manual Referral Payout Review SOP
- **Status:** DONE
- **Category:** GOV / CRM / OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define manual referral review, eligibility, approval, decline, dispute, and paid-status procedures without payout automation.
- **Allowed Scope:** Documentation-only internal operations SOP; create `docs/ops/referral_payout_review_sop_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No code, HubSpot changes, Stripe changes, payout automation, quote automation, form changes, API payload changes, QRLanding changes, customer-facing copy, automatic payouts, customer-facing referral program page, or HubSpot workflow automation.
- **Target Files:** `docs/ops/referral_payout_review_sop_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal SOP, document catalog entry, markdown manifest addendum, and register completion record.
- **Validation Required:** `git status`; `git diff -- docs/ops/referral_payout_review_sop_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted SOP grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Manual referral payout review process is documented with required statuses, payout timing, evidence, HubSpot recording expectations, quote/Stripe/customer-facing boundaries, future gates, validation, and no implementation or forbidden file changes.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001.
- **Operator Decision Required:** Approve referral payout policy and manual workflow.
- **Completion Notes:** Created `docs/ops/referral_payout_review_sop_rev01.md` as a docs-only internal operations SOP for manual referral payout review. No code, HubSpot schema/write behavior, Stripe behavior, payout automation, quote automation, form/API payload behavior, QRLanding behavior, or customer-facing copy was changed.

### REFERRAL-POLICY001
- **Task ID:** REFERRAL-POLICY001
- **Task Name:** Referral Compensation + Payee Documentation Policy
- **Status:** DONE
- **Category:** OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create a docs-only internal policy defining referral compensation models, default customer referral rate, partner/referrer override rules, documentation thresholds, tax/payee documentation hold rules, purchased hot-lead/vendor lead handling, and installer/contractor separation.
- **Allowed Scope:** Documentation-only internal operations policy; create `docs/ops/referral_compensation_policy_rev01.md`; update `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, and this task register only.
- **Forbidden Scope:** No code, runtime changes, HubSpot changes, Stripe changes, scheduling changes, form changes, API payload changes, quote behavior changes, payout automation, customer-facing copy, legal/tax filing implementation, document deletion, document renaming, or document consolidation.
- **Target Files:** `docs/ops/referral_compensation_policy_rev01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Add internal operations policy, document catalog entry, markdown manifest addendum, task-register completion record, and future contractor onboarding placeholder if absent.
- **Validation Required:** `git status`; `git diff -- docs/ops/referral_compensation_policy_rev01.md docs/DOCUMENT_CATALOG.md docs/MARKDOWN_MANIFEST.md docs/system/master-task-register.md`; `git diff --name-only`; `git ls-files --deleted`; targeted policy grep; targeted catalog/manifest/register grep; `npm run build`.
- **Exit Criteria:** Referral compensation relationship types, model types, default 10% customer referral policy, custom partner rules, purchased hot-lead/vendor lead rules, payment timing, documentation threshold holds, annual payment tracking, cash acknowledgement, tax/1099 governance boundary, installer/contractor separation, future gates, and open questions are documented; no implementation or forbidden file changes occur.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, REFERRAL-SOP001, QUOTE-REFERRAL001.
- **Operator Decision Required:** Approve policy before referral payout implementation, LEADFLOW002, or contractor/referrer payment tracking.
- **Completion Notes:** Created `docs/ops/referral_compensation_policy_rev01.md` as a docs-only internal operations policy. No code, runtime behavior, HubSpot schema/write behavior, Stripe behavior, scheduling behavior, form/API payload behavior, quote behavior, payout automation, customer-facing copy, or tax/legal filing implementation was changed.

### CONTRACTOR-ONBOARDING001
- **Task ID:** CONTRACTOR-ONBOARDING001
- **Task Name:** Contractor / Installer Payee Onboarding Policy
- **Status:** BACKLOG
- **Category:** OPS
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define contractor/installer onboarding, payee documentation, relationship separation, and payment-readiness rules before assigning work or issuing installer/contractor payments.
- **Allowed Scope:** Future documentation-only policy scope to be defined when activated.
- **Forbidden Scope:** Runtime changes, HubSpot changes, Stripe changes, scheduling changes, form changes, API payload changes, quote behavior changes, payout automation, customer-facing copy, legal/tax filing implementation, and contractor payment implementation unless explicitly authorized by a future bounded task.
- **Target Files:** Future scoped documentation only.
- **Runtime Systems Affected:** None until a future approved implementation.
- **Documentation Updates Required:** Update ops policy, catalog, manifest, and task register when activated.
- **Validation Required:** Future scoped documentation validation plus no-forbidden-file checks.
- **Exit Criteria:** To be defined when activated.
- **Dependencies:** REFERRAL-POLICY001.
- **Operator Decision Required:** Approve contractor/installer onboarding policy and documentation requirements before implementation.

### QA-LEADFLOW001
- **Task ID:** QA-LEADFLOW001
- **Task Name:** Leadflow Referral End-to-End QA Plan
- **Status:** BACKLOG
- **Category:** QA / LEAD / CRM / QR
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define end-to-end validation for callback lead path, estimate path, referral capture, named source attribution, requestId correlation, HubSpot sync, quote visibility, and no-regression protected systems.
- **Allowed Scope:** Documentation-only QA plan.
- **Forbidden Scope:** Runtime implementation, UI changes, route changes, HubSpot schema changes, Stripe changes, Scheduling changes, and payout automation.
- **Target Files:** Future scoped documentation only.
- **Runtime Systems Affected:** None until implementation QA is activated.
- **Documentation Updates Required:** QA checklist/runtime contract updates if approved.
- **Validation Required:** Future implementation-specific commands and protected-system regression checks.
- **Exit Criteria:** QA plan is documented and ready to run against future implementation.
- **Dependencies:** LEADFLOW001, HUBSPOT-REFERRAL001, ATTRIBUTION001, QUOTE-REFERRAL001, REFERRAL-SOP001.
- **Operator Decision Required:** Approve QA coverage before implementation release.

### DOCSYNC001
- **Task ID:** DOCSYNC001
- **Task Name:** Decide DOCUMENT_CATALOG vs MARKDOWN_MANIFEST Relationship
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Define whether `docs/DOCUMENT_CATALOG.md` is a curated authority catalog and `docs/MARKDOWN_MANIFEST.md` is the exhaustive inventory, including update rules for each.
- **Allowed Scope:** Documentation-only governance clarification and bounded catalog/manifest updates.
- **Forbidden Scope:** Runtime code, UI, routes, HubSpot, Stripe, scheduling, document deletion, document renaming, and document consolidation.
- **Target Files:** `docs/DOCUMENT_CATALOG.md`, `docs/MARKDOWN_MANIFEST.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Relationship rule and update responsibility notes.
- **Validation Required:** Documentation diff and targeted grep for catalog/manifest relationship language.
- **Exit Criteria:** Future tasks can determine which index must be updated for new, renamed, superseded, or promoted docs.
- **Dependencies:** DOC001 and DOCSTATUS001.
- **Operator Decision Required:** Approve preferred catalog/manifest ownership model.

### DOCSTATUS002
- **Task ID:** DOCSTATUS002
- **Task Name:** Stale / Superseded Document Promotion Review
- **Status:** BACKLOG
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Review documents classified as superseded candidates or unknown/needs-review and decide whether to promote, relabel, or leave unchanged.
- **Allowed Scope:** Documentation-only status review, metadata notes, and register/catalog updates.
- **Forbidden Scope:** Document deletion, document renaming, document consolidation, historical audit rewrites, runtime code, UI, routes, HubSpot, Stripe, scheduling, referral implementation, and request estimate behavior changes.
- **Target Files:** Documentation files only, to be scoped when activated.
- **Runtime Systems Affected:** None.
- **Documentation Updates Required:** Updated status notes for reviewed documents.
- **Validation Required:** Documentation diff, no-delete/no-rename verification, and targeted status-label grep.
- **Exit Criteria:** Superseded candidates and unknown/needs-review documents have explicit operator-reviewed status without destructive cleanup.
- **Dependencies:** DOCSTATUS001 and DOCSYNC001 if catalog/manifest ownership affects status labels.
- **Operator Decision Required:** Approve status actions before activation.


### HOTFIX004
- **Task ID:** HOTFIX004
- **Task Name:** Simplify Package Tile Content
- **Status:** DONE
- **Category:** COPY
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Completion Notes:** Simplified the three home-security package tiles to homeowner-facing protection copy, removed tier-heavy/technical/accordion clutter from tile bodies, preserved routes/forms/integrations, and bumped site version for deploy visibility.

### HOTFIX006
- **Task ID:** HOTFIX006
- **Task Name:** Replace Package Card Images + Remove Image Overlay Labels
- **Status:** DONE
- **Category:** FUNNEL
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Replace package tile images with newly uploaded package visuals and remove image-area overlay clutter while preserving HOTFIX004 tile body copy and Request Walkthrough CTA behavior.
- **Allowed Scope:** `src/content/homeSecurityPackageData.ts`, `src/components/PackageCard.tsx`, `src/pages/Packages.tsx`, `src/components/homeSecurity/LegacyHomeSecurityContent.tsx`, `src/lib/siteVersion.ts`, `docs/system/master-task-register.md`.
- **Forbidden Scope:** No route changes; no form changes; no lead-signal/HubSpot/autoresponder changes; no Stripe/payment changes; no QRLanding changes; no package body-copy rewrites.
- **Validation Required:** `ls -la public/images/home-security`; `npm run build`; `rg -n "essential-awareness|balanced-home-coverage|expanded-property-coverage|Essential indoor visibility|Balanced indoor|Maximum coverage|View Details|Talk to Us|Request Walkthrough" src public docs`; `git diff -- src public docs/system/master-task-register.md`.
- **Exit Criteria:** Three new package card images are wired from `/public/images/home-security`; image overlay labels/buttons are removed from card media area; HOTFIX004 body copy and Request Walkthrough CTA remain intact; protected systems untouched.
- **Completion Notes:** Wired package cards to uploaded PNG assets (`essential-awareness-card.png`, `balanced_home_coverage_card_v01.png`, `expanded_property_coverage_card_v1.png`) because `.webp` filenames requested in prompt were not present; removed media overlay layer + image caption rendering from package cards; preserved tile body copy and Request Walkthrough CTA; bumped visible site version to `v1.0.88`; build passed.


### T-CATALOG001
- **Task ID:** T-CATALOG001
- **Task Name:** Create Solution Catalog Reconciliation Governance Doc REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Promote the completed solution-catalog reconciliation pass into a durable docs-only repository governance document that consolidates the Home Safety, Home Security, Home Lighting, Home Automation, and Aging-in-Place research outputs into one governed working catalog.
- **Allowed Scope:** Docs-only creation of `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`; update `docs/DOCUMENT_CATALOG.md` with a catalog entry; update this task register with the bounded task record and completion status.
- **Forbidden Scope:** No application/source files, routes, assets, generated images, CSS/components, runtime behavior, Cloudflare, HubSpot, Stripe, Resend, Google Workspace, scheduling, secrets, homepage implementation, QR Landing implementation, category implementation, package implementation, solution implementation, pricing, BOM commitments, hardware purchasing, or public copy deployment.
- **Target Files:** `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create the solution catalog reconciliation document; register it in `docs/DOCUMENT_CATALOG.md`; record T-CATALOG001 in this register.
- **Validation Required:** `git status`; targeted `git diff`; `git diff --check`; confirm only documentation files changed.
- **Exit Criteria:** Reconciliation governance document exists; document states no implementation is authorized; master solution list, primary/secondary category ownership, status definitions, package compatibility guidance, hardware summary, BOM/pricing gaps, field-test summary, SOP/disclosure queue, and claims guardrail summary are captured; document catalog is updated; no protected systems or application files are changed.
- **Dependencies:** Completed Home Safety / Environmental Safety research result, completed Home Security / Entry / Garage / Access research result, completed Home Lighting / Home Automation / Aging-in-Place research result, existing solution-system governance docs, current project guardrails.
- **Operator Decision Required:** Review and promote via the operatorÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢s normal GitHub PR process if accepted.
- **Completion Notes:** Prepared docs-only reconciliation governance content. Follow-up tasks recommended: T-HARDWARE001, T-CLAIMS001, T-QUOTE001, T-FIELDTEST001, T-SOP001, T-SOLUTIONCAT001, T-BOM001, and T-PACKAGE001.


### T-OFFERING001
- **Task ID:** T-OFFERING001
- **Task Name:** Create Offer Architecture, Visibility Tiers, and The Vault Governance REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only WNYHS offer architecture governance defining public standard catalog, The Vault/custom-project visibility, internal operator catalog, research/excluded tiering, and Core first-time vs existing-customer offer rules.
- **Allowed Scope:** Docs-only offer architecture governance creation; create `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No application/source files, routes, pages, components, styles, runtime behavior, HubSpot, Stripe/payment, scheduling, Cloudflare, environment variables, public pricing, hardware purchasing, customer installation authorization, public copy deployment, The Vault page deployment, ad launch, package/solution page edits, or site version bump.
- **Target Files:** `docs/solution-system/OFFERING001_WNYHS_OFFER_ARCHITECTURE_VISIBILITY_TIERS_AND_VAULT_GOVERNANCE_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create offer architecture governance, register it in the document catalog, and record T-OFFERING001 in the task register.
- **Validation Required:** `git status --short`; `git diff --name-only`; `git diff --check`; `git diff --cached --check` before commit.
- **Exit Criteria:** Offer architecture document exists; public/custom/internal/research tiers are defined; The Vault custom-project concept is governed; Core first-time vs existing-customer rules are documented; internal operator catalog requirement is documented; implementation hold language is present; document catalog is updated; task register is updated; only intended docs files changed; validation passes.
- **Dependencies:** T-CATALOG001, T-HARDWARE001, T-CLAIMS001, `docs/solution-system/SOLUTION_CATALOG_RECONCILIATION_REV01.md`, `docs/solution-system/HARDWARE001_WNYHS_APPROVED_HARDWARE_REGISTRY_REV01.md`, `docs/solution-system/CLAIMS001_WNYHS_UNIFIED_CLAIMS_GUARDRAIL_ADDENDUM_REV01.md`.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created docs-only offer architecture governance. No app/source/runtime/payment/HubSpot/scheduling files were changed. No public copy, The Vault deployment, pricing, hardware purchasing, customer installation, or implementation was authorized.

### T-PACKAGEBOM001
- **Task ID:** T-PACKAGEBOM001
- **Task Name:** Create Package Map + BOM/Pricing Input Schema REV01
- **Status:** DONE
- **Category:** GOV
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Purpose:** Create docs-only WNYHS package/BOM/pricing-input governance defining package structure, Core inclusion logic, existing-customer add-on treatment, BOM input fields, pricing-input fields, install/labor planning inputs, and Vault/custom quote inputs without setting final prices.
- **Allowed Scope:** Docs-only package/BOM/pricing-input governance creation; create `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`; update `docs/DOCUMENT_CATALOG.md`; update this task register.
- **Forbidden Scope:** No app/source files, routes, pages, components, styles, CSS, tokens, runtime behavior, public copy deployment, site version bump, final public prices, supplier costs, invented hardware prices, Stripe/payment changes, HubSpot changes, scheduling changes, Cloudflare/environment changes, hardware purchasing authorization, or customer installation authorization.
- **Target Files:** `docs/solution-system/PACKAGEBOM001_WNYHS_PACKAGE_MAP_AND_BOM_PRICING_INPUT_SCHEMA_REV01.md`, `docs/DOCUMENT_CATALOG.md`, `docs/system/master-task-register.md`.
- **Runtime Systems Affected:** None. Documentation-only governance.
- **Documentation Updates Required:** Create package/BOM/pricing-input governance, register it in the document catalog, and record T-PACKAGEBOM001 in the task register.
- **Validation Required:** `git status --short`; `git diff --name-only`; `git diff --check`; stage only target files; `git diff --cached --check`; confirm only intended docs files changed.
- **Exit Criteria:** Package concepts are mapped from governed solutions; Core first-time and existing-customer add-on rules are documented; BOM and pricing-input schemas exist; install/labor planning assumptions are recorded as internal inputs only; Vault/custom quote inputs preserve The Vault tiers; explicit non-pricing and implementation-hold language is present; document catalog is updated; task register is updated; only intended docs files changed; validation passes.
- **Dependencies:** T-CATALOG001, T-HARDWARE001, T-CLAIMS001, T-OFFERING001.
- **Operator Decision Required:** Review and merge PR if accepted.
- **Completion Notes:** Created docs-only package/BOM/pricing-input governance. No app/source/runtime/payment/HubSpot/scheduling/public copy/pricing files were changed. No final prices, supplier costs, invented hardware prices, public pricing, site version bump, hardware purchasing, customer installation, or implementation was authorized.

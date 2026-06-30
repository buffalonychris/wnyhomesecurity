# Repository Markdown Manifest

Status: Internal governance / repo inventory / documentation manifest
Customer-facing: No
Total markdown files inventoried: 107

DOCSTATUS001 addendum: `docs/system/document_status_reconciliation_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration.

OPS002 addendum: `docs/system/OPS002_REPOSITORY_CONNECTOR_DISPATCH_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a repo-aware dispatcher governance standard for using the GitHub connector to inspect current repository facts before creating Codex work orders. It does not authorize source, CSS, route, runtime, API, HubSpot, Stripe, Resend, Gmail/Workspace, Cloudflare, scheduling, secrets, assets, dependency, package-lock, package/catalog implementation, pricing implementation, or protected-system changes by itself.

OPS003-CODEX-CONTEXT-EFFICIENCY-001 addendum: `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a Codex context efficiency standard for using repo docs as authority while reducing prompt bloat, unnecessary document loading, broad searches, and repeated governance restatement. It does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself.

T-OPS001-002 addendum: `docs/codex/CODEX_RUN_CONTRACT.md`, `docs/governance/CODEX_WORK_ORDER_STANDARD_REV01.md`, `docs/system/OPS003_CODEX_CONTEXT_EFFICIENCY_STANDARD_REV01.md`, and `docs/system/agent.md` were updated after this manifest scan to require future Codex work orders to include model/reasoning guidance, prohibit Mini for WNYHS repo work, add targeted-read context-efficiency instructions, and require ChatGPT post-run review of scope compliance, validation evidence, protected-system compliance, Context Efficiency Reports, prompt lessons, and governance-update need. This is docs-only governance and does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself.

T-OPS001-003 addendum: `docs/system/OPS004_WORKSTREAM_CONTEXT_ROUTING_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. `docs/codex/CODEX_RUN_CONTRACT.md` and `docs/system/agent.md` were updated to require workstream context routing before task execution. OPS004 is a project-wide routing standard for classifying primary and related workstreams, loading current-state/status docs, loading owner docs, and checking protected systems before discussion or implementation continues. It does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend/email, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself. Follow-up task listed: T-OPS001-004 Workstream Status Board.

T-OPS001-004 addendum: `docs/system/OPS005_WORKSTREAM_STATUS_BOARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. `docs/codex/CODEX_RUN_CONTRACT.md` and `docs/system/agent.md` were updated to reference OPS005 after OPS004 routing when current workstream status is needed. OPS005 records current state, completed work, outstanding work, required docs, related workstreams, protected-system concerns, and next recommended tasks for the 22 OPS004 workstreams. It does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend/email, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, implementation, pricing, claims, or protected-system changes by itself.

OPS009 addendum: `docs/system/OPS009_CODEX_WORKFLOW_AND_RSI_GOVERNANCE_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. `docs/codex/CODEX_RUN_CONTRACT.md` was updated narrowly to preserve current full-read defaults while allowing future targeted reads only under OPS009 conditions. OPS009 defines Codex workflow roles, operator handoff, PR review posture, lightweight prerequisite verification, missing-task handling, Windows Codex hook guidance, RSI/context-efficiency reporting, token/context usage categories, semantic-token reporting, theme-readiness reporting, and future INSTALL/THEME planning notes. It does not authorize source, CSS, route, page, runtime, API, HubSpot, Stripe/payment, Resend/email, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, THEME implementation, INSTALL implementation, hooks, automation, implementation, pricing, claims, or protected-system changes by itself.

LEADFLOW001 addendum: `docs/runtime/leadflow_referral_attribution_runtime.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before LEADFLOW001 implementation, HubSpot referral mapping, named QR attribution, quote-visible referral work, and referral SOP work.

CODEX-CONTRACT001 addendum: `docs/codex/CODEX_RUN_CONTRACT.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review/load material for all future Codex tasks.

HUBSPOT-REFERRAL001 addendum: `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before LEADFLOW002, ATTRIBUTION001, QUOTE-REFERRAL001, and referral-aware HubSpot sync changes.

ATTRIBUTION001 addendum: `docs/runtime/named_qr_source_attribution_schema_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before named QR source implementation, partner QR creation, and source-aware HubSpot mapping.

REFERRAL-SOP001 addendum: `docs/ops/referral_payout_review_sop_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before referral payout handling implementation.

QUOTE-REFERRAL001 addendum: `docs/specs/quote_referral_awareness_spec_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before quote-visible referral awareness implementation.

QUOTESYSTEM-006 addendum: `docs/quotesystem/IMPLEMENTATION006_Quote_Workspace_Structure_Styling_REV01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It records the bounded internal `/operator/property-model` quote workspace structure and styling refactor, including HubSpot-owned CRM framing, WNYHS terminology, source-backed solution/package selectors, Draft Hardware / BOM status, and token-based styling. It does not authorize HubSpot writes, Stripe/payment behavior, production persistence, pricing automation, inventory automation, scheduling automation, quote PDF generation, email sending, protected runtime changes, or customer-facing quote automation.

QUOTESYSTEM-007 addendum: `docs/quotesystem/IMPLEMENTATION007_Floorplan_Evidence_Attachments_REV01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It records the bounded internal `/operator/property-model` floorplan/property evidence reference extension, including repeatable evidence items, controlled evidence type/orientation/status options, WNYHS workflow guidance, localStorage-only persistence, and Draft Quote Preview Section 1 evidence summary. It does not authorize file uploads, durable storage, cloud storage, Google Drive integration, image processing, floorplan rendering, AI redraw generation, HubSpot writes, Stripe/payment behavior, inventory automation, scheduling automation, quote PDF generation, email sending, protected runtime changes, or customer-facing quote automation.

REFERRAL-POLICY001 addendum: `docs/ops/referral_compensation_policy_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is an internal operations policy required before referral payout implementation, LEADFLOW002, and contractor/referrer payment tracking.

CONTENT001 addendum: `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md` and `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md` were added after this manifest scan and should be included in the next full manifest regeneration. They are governance-only remediation planning and traceability sources required before CONTENT001-B/C/D/E activation; they do not authorize runtime, route, UI, HubSpot, Stripe, Scheduling, Email, environment, or public copy changes by themselves.

SOLUTION001 addendum: `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is the solution-page standard for SOLUTION001-A updates to the four existing opportunity solution pages and does not authorize protected-system, global navigation, pricing, semantic-token, or unrelated page changes.

SOLUTION001-B addendum: `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is the current solution-page governance standard for the approved two-image system, including `solution-hero-image`, `solution-sample-image`, awareness-panel language, image relationship, claims, naming, and storage rules. It does not authorize image generation, source/CSS/runtime implementation, protected-system changes, global navigation, pricing, semantic-token, or unrelated page changes by itself.

DESIGN001 addendum: `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a docs-only homepage-derived visual design system standard for review and does not authorize implementation, public page changes, CSS changes, semantic token changes, protected-system changes, or a visible site version bump.

RUNTIME-AUDIT-001 addendum: `docs/runtime/cloudflare_current_config_inventory_rev01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a read-only Cloudflare Current Config Inventory that records repo-documented facts and marks dashboard/API-only areas as `Not inspected`; it records No configuration changes and No secret values.

RUNTIME-AUDIT-002 addendum: `docs/runtime/hubspot_current_config_inventory_rev01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a read-only HubSpot Current Config Inventory aligned to HubSpot REV03 that preserves `/api/lead-signal`, records repo-documented facts, marks live HubSpot dashboard/API-only areas as `Not inspected`, and records No configuration changes and No secret values.

RUNTIME-AUDIT-003 addendum: `docs/runtime/resend_current_config_inventory_rev01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a read-only Resend Current Config Inventory that records repo-documented facts, marks live Resend dashboard/API-only areas as `Not inspected`, and records No configuration changes and No secret values.

RUNTIME-AUDIT-004 addendum: `docs/runtime/stripe_current_config_inventory_rev01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a read-only Stripe Current Config Inventory that records repo-documented facts, marks live Stripe dashboard/API-only areas as `Not inspected`, preserves webhook and server-side payment verification boundaries, and records No configuration changes and No secret values.

RUNTIME-AUDIT-005 addendum: `docs/runtime/google_workspace_current_config_inventory_rev01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a read-only Google Workspace Current Config Inventory that records repo-documented Google Workspace and Calendar facts, marks live Google Admin/Workspace-only areas as `Not inspected`, confirms no scheduling or email routing behavior changed, and records No configuration changes and No secret values.

GOV009 addendum: `docs/governance/SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01.md`, `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md`, `docs/governance/MASTER_SOLUTION_CATALOG_V1.md`, `docs/governance/SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02.md`, `docs/governance/SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01.md`, `docs/governance/PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01.md`, `docs/governance/CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01.md`, and `docs/governance/UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01.md` were promoted after this manifest scan and should be included in the next full manifest regeneration. They are governance and standards documents for site/content architecture, visual system, solution catalog, Solution Object structure, solution media, packages, categories, homepage, QR Landing, and search planning. They do not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, asset, image-generation, or implementation changes by themselves.

DESIGN-TOKEN-SYSTEM-001 addendum: `docs/governance/DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV02.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the governed sitewide WNYHS visual token system, Manrope heading / Inter body standard, required public CSS primitives, pricing boundary, catalog boundary, claims-safe copy posture, and protected-system exclusions. It does not authorize public pricing values, invented packages, invented solutions, hardware standardization, HubSpot, Stripe, Resend, Gmail/Workspace, Cloudflare config, scheduling, API/runtime behavior, secrets, route changes, or navigation behavior.

PAGE-TOKEN-COMPLIANCE-GATE-001 addendum: `docs/governance/PAGE_TOKEN_COMPLIANCE_GATE_REV01.md` and `docs/system/PAGE_TOKEN_COMPLIANCE_TASK_PACK_REV01.md` were added after this manifest scan and should be included in the next full manifest regeneration. They record the standing public page Token CSS Governance compliance gate and the planning/dispatch aid for future page-level token-compliance tasks, including page structure is page-specific, visual language is shared boundaries. They do not authorize source, CSS, route, page, runtime, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, visual implementation, pricing, claims, or protected-system changes by themselves.

CATEGORY002-GOV-001 addendum: `docs/governance/CATEGORY002_WNYHS_CATEGORY_LANDING_PAGE_STRUCTURE_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a docs-only category landing page structure standard for public category pages, including the Homepage -> Category -> Featured Solutions -> Full Solution Catalog -> Specific Solution Page -> Estimate / Consultation journey, required section order, reveal section, featured solutions rule, WNYHS Core requirement, Custom Solutions CTA, global CTA, visual/token requirements, claims guardrails, and relationship to CATEGORY001. It does not authorize source, CSS, route, component, image, homepage link, runtime, API/backend, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, semantic token definition, deployment, or protected-system changes by itself.

CATEGORY003-GOV-001 addendum: `docs/governance/CATEGORY003_WNYHS_CATEGORY_PAGE_IMAGE_AND_VISUAL_PARITY_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a docs-only category landing page image and visual parity standard using the approved Home Automation category page as the reference implementation for future category pages. It defines asset classes, thumbnail standards, dashboard/mobile/routine proof hierarchy, WNYHS Core image/copy behavior, visual parity rules, repeatable asset packages, and compliance checks. It does not authorize source, CSS, route, component, image, homepage, `/home-automation`, runtime, API/backend, HubSpot, Stripe/payment, Resend, Gmail/Workspace, scheduling, Cloudflare, secrets, assets, dependencies, package-lock, semantic token definition, deployment, or protected-system changes by itself.

HOMEPAGE-REDESIGN-PLANNING-001 addendum: `docs/planning/HOMEPAGE_REDESIGN_PLAN_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a planning-only Homepage redesign implementation-readiness artifact covering Search, Category Explorer, Featured Packages, Featured Solutions, WNYHS Core, Light Theme alignment, Request Estimate, Call / Text, content source mapping, implementation boundary, forbidden scope, and a follow-up implementation task recommendation. It does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, asset, image-generation, Search implementation, Homepage implementation, QR Landing implementation, or protected-system changes by itself.

QRLANDING-REDESIGN-PLANNING-001 addendum: `docs/planning/QRLANDING_REDESIGN_PLAN_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a planning-only QR Landing redesign implementation-readiness artifact covering Search, Popular Solutions, WNYHS Core, Light Theme alignment, Request Estimate, Call / Text, scan acknowledgment, attribution preservation, requestId preservation, lead-signal preservation, content source mapping, implementation boundary, forbidden scope, and a follow-up implementation task recommendation. It does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search implementation, Homepage implementation, QR Landing implementation, qrlanding behavior changes, requestId behavior changes, lead-signal behavior changes, or protected-system changes by itself.

SEARCH-UX-PLANNING-001 addendum: `docs/planning/SEARCH_UX_PLAN_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a planning-only public Search UX implementation-readiness artifact covering Search purpose, scope, search result types, Category mapping, Package mapping, Solution mapping, Public Information mapping, Homepage Search requirements, QR Landing Search requirements, mobile/accessibility requirements, example searches including doorbell camera, basement leak, mom living alone, holiday lights, Contact, and Support, implementation boundary, forbidden result types, forbidden scope, and a follow-up implementation task recommendation. It does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search implementation, Search indexing, Homepage implementation, QR Landing implementation, QR attribution changes, API changes, or protected-system changes by itself.

SITE-CONTENT-OWNER-ROUTING-001 addendum: `docs/planning/SITE_CONTENT_OWNER_ROUTING_PLAN_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a planning-only site content ownership and routing implementation-readiness artifact covering Solution, Package, Category, Homepage, QR Landing, Search, Public Information, image/media, Fit Check, and Catalog ownership; source of truth hierarchy; inheritance; duplicate prevention; recommended repository content structure; implementation boundary; and a follow-up implementation task recommendation. It does not authorize source, CSS, component, route, runtime, HubSpot, Stripe, Resend, Google Workspace, Cloudflare, scheduling, analytics, attribution, asset, image-generation, Search implementation, Homepage implementation, QR Landing implementation, Category implementation, Package implementation, Solution implementation, Fit Check implementation, Catalog generation, API changes, or protected-system changes by itself.

CATALOG001 addendum: `docs/catalog/README.md`, `docs/catalog/CATALOG001_Canonical_Catalog_Source_Standard_REV01.md`, and `docs/catalog/IMPLEMENTATION001_Canonical_Runtime_Catalog_REV01.md` were added after this manifest scan and should be included in the next full manifest regeneration. They define catalog governance boundaries, the canonical runtime catalog standard, and the implementation record for `src/data/catalog/`. They do not authorize CRM writes, Stripe/payment changes, durable production storage, inventory automation, ordering automation, installer pick-list generation, dashboard generation, public page refactors, quote PDF generation, email sending, or protected-system changes by themselves.

QUOTESYSTEM-016 addendum: `docs/quotesystem/IMPLEMENTATION016_Live_Test_Bug_Fix_PASS_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the focused local Quote Workspace live-test and stabilization pass using the Funeral Home Test Case, including route, local import/export, quote preview, installer packet validation, and the customer-facing quote-preview installer-note exposure fix. It does not authorize HubSpot writes, Stripe/payment runtime changes, durable storage, PDF generation, email sending, inventory automation, ordering automation, scheduling automation, auth, image upload, or AI redraw generation.


VISUAL-PARITY-004 addendum: `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_004_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the bounded Fit Check visual parity pass to WNYHS public primitives and confirms Fit Check behavior, top navigation/footer destinations, HubSpot, Stripe/payment, scheduling, lead-signal/requestId, Resend/email, quote-system, package data, catalog schema, auth, durable storage, dependencies, and package-lock files were not changed.

WNYHS-PUBLIC-FOOTER-NAV-001 addendum: `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_FOOTER_NAV_001_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the bounded public footer navigation cleanup limiting footer links to About, Contact, Privacy, Terms, and Support, preserving their existing destinations, and confirming top navigation, redirects, HubSpot, Stripe/payment, scheduling, lead-signal/requestId, Resend/email, forms, quote-system runtime, catalog schema, package data/pricing, dependencies, and package-lock files were not changed.

CATEGORY-LANDING-001-A addendum: `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_A_HOME_AUTOMATION_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the bounded Home Automation category landing page implementation for `/home-automation`, the homepage Home Automation card link update, WNYHS token/CSS compliance, CATEGORY-LANDING-001-A-POLISH contrast/reveal/bridge/featured-card refinements, image/route debt, visible version `v1.0.160`, and confirms HubSpot, Stripe/payment, scheduling, Resend/email, APIs/backend, Cloudflare config, environment/secrets, dependencies, package-lock, quote/estimate runtime, catalog schema, package pricing, protected operator routes, QRLanding, Lead Signal/requestId, and other category pages were not changed.

CATEGORY-LANDING-001 remaining categories addendum: `docs/governance/IMPLEMENTATION_CATEGORY_LANDING_001_REMAINING_CATEGORIES_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the bounded implementation of `/home-security`, `/aging-in-place`, `/home-safety`, and `/home-lighting`, including shared CATEGORY002/CATEGORY003 structure, homepage category-card link updates, reused approved image assets, dedicated category asset debt, visible version `v1.0.167`, and confirms HubSpot, Stripe/payment, scheduling, Resend/email, APIs/backend, Cloudflare config, environment/secrets, dependencies, package-lock, quote/estimate runtime, catalog schema, package pricing, protected operator routes, QRLanding, and Lead Signal/requestId were not changed.


CREATE-ESTIMATE-MANUAL-REV02 addendum: `docs/quotesystem/WNYHS_Create_Estimate_Instruction_Manual_REV02.md` was added after this manifest scan and should be included in the next full manifest regeneration. This internal docs-only manual preserves the REV01 customer-discovery-to-deposit-ready-quote purpose while embedding the mandatory REV08 floorplan evidence gate, two-pass reconstruction, controlled SVG/vector baseline workflow, exact lock statuses, customer quote Section 1 evidence output, quality checklist, and Appendix A GPT Proposed prompt controls. It does not authorize quote runtime code, HubSpot, Stripe/payment, scheduling, support/contact forms, catalog schema, package pricing/data, auth, durable storage, dependencies, package-lock, image processing, uploads, LiDAR capture, computer vision, or AI redraw generation.


CATALOG002 addendum: `docs/catalog/CATALOG002_Master_Parts_Data_Model_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It defines the exact master part-number data model, migration-safe mapping scaffold, GPT import path, installed asset snapshot rule, deferred full-backfill rationale, and protected boundaries. It does not authorize full hardware backfill, new hardware evaluation, pricing changes, Stripe/payment changes, HubSpot changes, scheduling changes, quote runtime changes, public copy changes, inventory automation, or hardware purchasing.


CATALOG003 addendum: `docs/catalog/CATALOG003_GPT_Master_Parts_Import_File_Alignment_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It defines the GPT master parts JSONL/CSV import alignment contract, alias mapping, normalization rules, evidence expectations, gap/source report expectations, and review checklist. It does not authorize hardware backfill, new hardware evaluation, pricing changes, Stripe/payment changes, HubSpot changes, scheduling changes, quote runtime changes, public copy changes, inventory automation, or installer automation.

CATALOG004 addendum: `docs/catalog/imports/catalog004/README.md`, `docs/catalog/imports/catalog004/wnyhs_master_parts_gap_report.md`, and `docs/catalog/imports/catalog004/wnyhs_master_parts_sources.md` were added as CATALOG004 import evidence and should be included in the next full manifest regeneration. They preserve the corrected REV02 first five-doorbell master parts handoff, gap report, and source report for the internal master parts data backfill. They do not authorize public website changes, quote logic changes, package logic changes, package or solution promotion, pricing, purchasing, HubSpot changes, Stripe/payment changes, scheduling changes, planner changes, agreement/deposit changes, runtime changes, funnel changes, or hardware status upgrades.

CATALOG005 addendum: `docs/catalog/imports/catalog005/README.md`, `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_gap_report.md`, and `docs/catalog/imports/catalog005/wnyhs_catalog005_reolink_sources.md` were added as CATALOG005 import evidence and should be included in the next full manifest regeneration. They preserve the corrected REV02 17-record Reolink core infrastructure and direct local Wi-Fi handoff, gap report, and source report for the internal conditional master parts data import. They do not authorize public website changes, quote logic changes, package logic changes, package or solution promotion, pricing, purchasing, HubSpot changes, Stripe/payment changes, scheduling changes, planner changes, agreement/deposit changes, runtime changes, funnel changes, or hardware status upgrades.

T-IMG-PIPELINE001-002 addendum: `scripts/image-generation/README.md` was added after this manifest scan and should be included in the next full manifest regeneration. It documents the local dry-run-first image generation pipeline scaffold, Home Security structured config source model, command usage, environment variables, and draft/review output safety rules. It does not authorize executing write mode, calling the OpenAI API, generating image assets, committing candidate images, replacing approved production assets, weakening claim guardrails, modifying `.env` files, adding secrets, or changing protected systems.

## 1. Purpose
This manifest inventories every repository markdown file outside `.git` and `node_modules` so future Codex tasks can find source-of-truth documents, runtime contracts, HubSpot docs, request/estimate docs, QR attribution docs, catalog docs, and stale or duplicate documentation before making changes.

## 2. Usage Rules
- Review this manifest before high-risk workflow changes.
- Treat this manifest as an index, not a replacement for the underlying documents.
- If this manifest conflicts with system governance, runtime contracts, HubSpot REV03, or task-specific instructions, the higher-authority source controls.
- Do not infer permission to implement from a document being listed here.
- Update this manifest when markdown files are added, renamed, deleted, superseded, or promoted.

## 3. High-Risk Change Areas
### Changing request/estimate pages
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`

### Changing HubSpot sync/mapping
- `AGENTS.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`

### Changing QR attribution
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`

### Changing lead signal payloads
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`

### Changing scheduling
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`

### Changing Stripe/payment flow
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/print_system_standards_rev01.md`

### Creating BOM/package/customer-facing claims
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_DOC_SYNC_PROMPT.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`

## 4. Repository Markdown Inventory
| Path | Title / Detected H1 | Inferred Purpose | Area | Authority Level | Status | Customer-Facing | Source-of-Truth Candidate | Related Systems | Review Before Tasks | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| AGENTS.md | WNYHS Codex Execution Rules | Root Codex execution rules and repository guardrails. | HubSpot / CRM / Lead Intake / Estimate / Stripe / Payments / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Stripe | ALL HIGH-RISK TASKS, LEADFLOW001, HUBSPOT, STRIPE, WEBSITE COPY | Important governance or contract document. |
| docs/audits/copy_fix001_implementation_rev01.md | COPY-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for COPY-FIX001 Implementation — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Catalog / Capability / System Governance / Website Content / Marketing | Supporting | Historical | No | No | Request Estimate, QR Landing, Stripe, Scheduling, Capability Catalog | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/crm_deal002a_partial_completion_rev01.md | CRM-DEAL002A — Partial Completion Audit (REV01) | Audit, implementation note, or validation record for CRM-DEAL002A — Partial Completion Audit (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / System Governance | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/crm_fix001_implementation_rev01.md | CRM-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for CRM-FIX001 Implementation — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Runtime Contract / Website Content / Marketing / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/crm_qa001_validation_rev01.md | CRM-QA001 — End-to-End HubSpot Intake Validation (REV01) | Audit, implementation note, or validation record for CRM-QA001 — End-to-End HubSpot Intake Validation (REV01). | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Google Calendar, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/email_fix001_implementation_rev01.md | EMAIL-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for EMAIL-FIX001 Implementation — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/estimate_email001_rev01.md | ESTIMATE-EMAIL001 Audit — REV01 | Audit, implementation note, or validation record for ESTIMATE-EMAIL001 Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/estimate_flow001_rev01.md | ESTIMATE-FLOW001 Audit — REV01 | Audit, implementation note, or validation record for ESTIMATE-FLOW001 Audit — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing | Supporting | Historical | No | No | Lead Signal, Request Estimate, QR Landing, Attribution, Scheduling, Runtime Ownership, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/fitcheck_cta001_rev01.md | FITCHECK-CTA001 — Recommendation-state CTA hierarchy cleanup (REV01) | Audit, implementation note, or validation record for FITCHECK-CTA001 — Recommendation-state CTA hierarchy cleanup (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership, Brand / Marketing | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_arch001_rev01.md | FUNNEL-ARCH001 REV01 — Full Funnel/Page/Nav Architecture Cleanup Plan | Audit, implementation note, or validation record for FUNNEL-ARCH001 REV01 — Full Funnel/Page/Nav Architecture Cleanup Plan. | Lead Intake / Estimate / QR / Attribution / BOM / Package Planning / System Governance / Website Content / Marketing | Supporting | Historical | No | No | Request Estimate, QR Landing | LEADFLOW001, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_arch002_rev01.md | FUNNEL-ARCH002 REV01 — Implement approved nav/page-role cleanup | Audit, implementation note, or validation record for FUNNEL-ARCH002 REV01 — Implement approved nav/page-role cleanup. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_cleanup001_rev01.md | FUNNEL-CLEANUP001 — Main Funnel CTA + Structure Consolidation (REV01) | Audit, implementation note, or validation record for FUNNEL-CLEANUP001 — Main Funnel CTA + Structure Consolidation (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_cleanup002_rev01.md | FUNNEL-CLEANUP002 — Context Persistence + Intake Display (REV01) | Audit, implementation note, or validation record for FUNNEL-CLEANUP002 — Context Persistence + Intake Display (REV01). | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_cleanup003_rev01.md | FUNNEL-CLEANUP003 REV01 — Discovery Persistence + Recommendation Propagation | Audit, implementation note, or validation record for FUNNEL-CLEANUP003 REV01 — Discovery Persistence + Recommendation Propagation. | HubSpot / CRM / Lead Intake / Estimate / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_fix001_implementation_rev01.md | FUNNEL-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for FUNNEL-FIX001 Implementation — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing | Supporting | Historical | No | No | Request Estimate, QR Landing, Stripe, Scheduling | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_ops001_customer_journey_audit_rev01.md | FUNNEL-OPS001 Customer Journey Audit — REV01 | Audit, implementation note, or validation record for FUNNEL-OPS001 Customer Journey Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / Catalog / Capability / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Google Calendar, Scheduling, Capability Catalog, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/funnel_ops001_next_task_sequence_rev01.md | FUNNEL-OPS001 Next Task Sequence — REV01 | Audit, implementation note, or validation record for FUNNEL-OPS001 Next Task Sequence — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/gov_context002_finish_line_context_rev01.md | GOV-CONTEXT002 Finish-Line Context Activation — REV01 | Audit, implementation note, or validation record for GOV-CONTEXT002 Finish-Line Context Activation — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/lead_fix001_implementation_rev01.md | LEAD-FIX001 Implementation REV01 | Audit, implementation note, or validation record for LEAD-FIX001 Implementation REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / BOM / Package Planning / System Governance / Website Content / Marketing | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/main_funnel_audit002_rev01.md | MAIN-FUNNEL-AUDIT002 REV01 — Main Funnel UX/Conversion Audit | Audit, implementation note, or validation record for MAIN-FUNNEL-AUDIT002 REV01 — Main Funnel UX/Conversion Audit. | Lead Intake / Estimate / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | Lead Signal, Request Estimate | LEADFLOW001, HUBSPOT, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/main_funnel_fix003a_rev01.md | MAIN-FUNNEL-FIX003A REV01 — Main Funnel Copy and CTA Cleanup | Audit, implementation note, or validation record for MAIN-FUNNEL-FIX003A REV01 — Main Funnel Copy and CTA Cleanup. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/main_funnel_fix003b_rev01.md | MAIN-FUNNEL-FIX003B REV01 — Recommendation-State Clarity | Audit, implementation note, or validation record for MAIN-FUNNEL-FIX003B REV01 — Recommendation-State Clarity. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/main_funnel_fix003c_rev01.md | MAIN-FUNNEL-FIX003C REV01 — Planner CTA Positioning / Low-Friction Nav Minimization | Audit, implementation note, or validation record for MAIN-FUNNEL-FIX003C REV01 — Planner CTA Positioning / Low-Friction Nav Minimization. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/nav_bug001_rev01.md | NAV-BUG001 — Back/forward black screen + quote artifact render stability (REV01) | Audit, implementation note, or validation record for NAV-BUG001 — Back/forward black screen + quote artifact render stability (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/nav_ux001_rev01.md | NAV-UX001 REV01 — Route Transition Page-Top Normalization + Intentional Form Persistence/Reset | Audit, implementation note, or validation record for NAV-UX001 REV01 — Route Transition Page-Top Normalization + Intentional Form Persistence/Reset. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/payment_fix001_implementation_rev01.md | PAYMENT-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for PAYMENT-FIX001 Implementation — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/planner_guard001_rev01.md | PLANNER-GUARD001 Audit — REV01 | Audit, implementation note, or validation record for PLANNER-GUARD001 Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/qr_fix001_implementation_rev01.md | QR-FIX001 Implementation — REV01 | Audit, implementation note, or validation record for QR-FIX001 Implementation — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | Request Estimate, QR Landing, Stripe, Google Calendar, Scheduling | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/qrlanding_crm_notification_inventory_rev01.md | QRLanding CRM/Notification Inventory — REV01 | Audit, implementation note, or validation record for QRLanding CRM/Notification Inventory — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / Website Content / Marketing | Supporting | Historical | No | No | HubSpot, Lead Signal, QR Landing, Attribution, Stripe, Google Calendar, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/quote_gen001_rev01.md | QUOTE-GEN001 Audit — REV01 | Audit, implementation note, or validation record for QUOTE-GEN001 Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/quote_gen001b_rev01.md | QUOTE-GEN001B Audit — REV01 | Audit, implementation note, or validation record for QUOTE-GEN001B Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/quote_send001_rev01.md | QUOTE-SEND001 Audit — REV01 | Audit, implementation note, or validation record for QUOTE-SEND001 Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/scheduling_backend_authority_reconciliation_rev01.md | Scheduling Backend Authority Reconciliation — REV01 | Audit, implementation note, or validation record for Scheduling Backend Authority Reconciliation — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Supporting | Historical | No | No | Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Google Calendar, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/audits/support_flow001_rev01.md | SUPPORT-FLOW001 Audit — REV01 | Audit, implementation note, or validation record for SUPPORT-FLOW001 Audit — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/brand/brand_asset_authority_rev01.md | WNY Home Security Brand Asset Authority — REV01 | Brand, visual, or print asset guidance for WNY Home Security Brand Asset Authority — REV01. | QR / Attribution / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | QR Landing, Attribution, Stripe, Runtime Ownership, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/brand/brand_asset_standards_rev01.md | WNYHS Brand Asset Standards — REV01 | Brand, visual, or print asset guidance for WNYHS Brand Asset Standards — REV01. | System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Brand / Marketing | WEBSITE COPY | Important governance or contract document. |
| docs/brand/header_footer_standards_rev01.md | WNYHS Header & Footer Standards — REV01 | Brand, visual, or print asset guidance for WNYHS Header & Footer Standards — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / BOM / Package Planning / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Scheduling, Site Version, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Important governance or contract document. |
| docs/brand/page_layout_standards_rev01.md | WNYHS Page Layout Standards — REV01 | Brand, visual, or print asset guidance for WNYHS Page Layout Standards — REV01. | BOM / Package Planning / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Brand / Marketing | BOM, PACKAGE, WEBSITE COPY | Important governance or contract document. |
| docs/brand/print_assets/half_sheet_flyer_system_rev01.md | WNY Home Security Half-Sheet Flyer Production System — REV01 | Brand, visual, or print asset guidance for WNY Home Security Half-Sheet Flyer Production System — REV01. | Lead Intake / Estimate / QR / Attribution / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Attribution, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, WEBSITE COPY | Important governance or contract document. |
| docs/brand/print_assets/qr_placard_system_rev01.md | WNY Home Security QR Placard Production System — REV01 | Brand, visual, or print asset guidance for WNY Home Security QR Placard Production System — REV01. | Lead Intake / Estimate / QR / Attribution / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Attribution, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, WEBSITE COPY | Important governance or contract document. |
| docs/brand/print_system_standards_rev01.md | WNY Home Security Print System Standards — REV01 | Brand, visual, or print asset guidance for WNY Home Security Print System Standards — REV01. | Lead Intake / Estimate / QR / Attribution / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | QR Landing, Attribution, Stripe, Runtime Ownership, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/brand/visual_system_rev01.md | WNY Home Security Visual System — REV01 | Brand, visual, or print asset guidance for WNY Home Security Visual System — REV01. | QR / Attribution / Stripe / Payments / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Stripe, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY | Important governance or contract document. |
| docs/catalogs/deep-research-report.md | WNYHS Capability Catalog Technical Validation REV03 | Capability catalog or research source for WNYHS Capability Catalog Technical Validation REV03. | Lead Intake / Estimate / Scheduling / Catalog / Capability / System Governance / Website Content | Candidate | Active | No | Candidate | Request Estimate, Scheduling, WNYHS Core, Capability Catalog | LEADFLOW001, SCHEDULING, BOM, PACKAGE | Research validation source; keep separate from public claims. |
| docs/catalogs/wnyhs_capability_catalog_rev02.md | WNYHS Capability Catalog REV02 Baseline | Capability catalog or research source for WNYHS Capability Catalog REV02 Baseline. | Runtime Contract / Catalog / Capability / BOM / Package Planning / System Governance / Website Content / Operations | Candidate | Active | No | Candidate | Attribution, WNYHS Core, Capability Catalog | LEADFLOW001, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Current catalog baseline on this branch; use before BOM/PACKAGE work. |
| docs/codex/CODEX_DOC_SYNC_PROMPT.md | CODEX DOC SYNC PROMPT | Codex workflow, QA, or task synchronization guidance for CODEX DOC SYNC PROMPT. | Catalog / Capability / System Governance / Operations | Candidate | Active | No | Candidate | Capability Catalog | BOM, PACKAGE, WEBSITE COPY | No special note. |
| docs/codex/CODEX_TASK_REGISTER_RULES.md | CODEX TASK REGISTER RULES | Codex workflow, QA, or task synchronization guidance for CODEX TASK REGISTER RULES. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Candidate | Historical | No | No | HubSpot, Lead Signal, QR Landing, Stripe, Google Calendar, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/codex/CODEX_TASK_TEMPLATE.md | CODEX TASK TEMPLATE | Codex workflow, QA, or task synchronization guidance for CODEX TASK TEMPLATE. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Candidate | Historical | No | No | HubSpot, QR Landing, Stripe | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/codex/QA_CHECKLIST.md | QA CHECKLIST — QA001 REV02 (DEPLOYMENT VALIDATION) | Codex workflow, QA, or task synchronization guidance for QA CHECKLIST — QA001 REV02 (DEPLOYMENT VALIDATION). | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Candidate | Active | No | Candidate | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Scheduling, Runtime Ownership, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | No special note. |
| docs/core_vs_vertical_separation_rev_01.md | Core vs Vertical Separation — REV01 | Markdown documentation for Core vs Vertical Separation — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / BOM / Package Planning / System Governance / Website Content / Marketing | Unknown | Unknown | No | No | HubSpot, Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Classification unclear; verify before relying on it. |
| docs/crm/hubspot/crm_pipeline_architecture_rev01.md | CRM-PIPELINE001 — Canonical HubSpot Pipeline Architecture (REV01) | HubSpot/CRM architecture or knowledge-base reference for CRM-PIPELINE001 — Canonical HubSpot Pipeline Architecture (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, RUNTIME | Important governance or contract document. |
| docs/crm/hubspot/hubspot_kb_rev01.md | WNY Home Security --- HubSpot Architecture & Usage (LOCKED KB) | HubSpot/CRM architecture or knowledge-base reference for WNY Home Security --- HubSpot Architecture & Usage (LOCKED KB). | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / BOM / Package Planning / Website Content | Supporting | Superseded Candidate | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. Historical HubSpot revision; REV03 controls. |
| docs/crm/hubspot/hubspot_kb_rev02.md | WNY Home Security --- HubSpot Architecture & Usage (REV02 LOCKED) | HubSpot/CRM architecture or knowledge-base reference for WNY Home Security --- HubSpot Architecture & Usage (REV02 LOCKED). | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / BOM / Package Planning / System Governance / Website Content | Unknown | Superseded Candidate | No | No | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. Classification unclear; verify before relying on it. Historical HubSpot revision; REV03 controls. |
| docs/crm/hubspot/hubspot_kb_rev03.md | WNY Home Security --- HubSpot Architecture & Usage (REV03 EXECUTABLE SPEC) | HubSpot/CRM architecture or knowledge-base reference for WNY Home Security --- HubSpot Architecture & Usage (REV03 EXECUTABLE SPEC). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, Attribution, Stripe, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, RUNTIME | Important governance or contract document. |
| docs/DOCUMENT_CATALOG.md | Document Catalog | Catalog of repository documentation and authority notes. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / Catalog / Capability / System Governance / Website Content / Marketing / Operations | Candidate | Active | No | Candidate | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Stripe, Scheduling, Capability Catalog, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Existing catalog is partial; this manifest is the repo-wide inventory. |
| docs/funnel_completion_qa_rev_01.md | Funnel Completion QA — REV01 | Markdown documentation for Funnel Completion QA — REV01. | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Unknown | Unknown | No | No | Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Classification unclear; verify before relying on it. |
| docs/implementation-plan.md | Phase 0 – Discovery Findings and Implementation Plan (Steps 001–007) | Markdown documentation for Phase 0 – Discovery Findings and Implementation Plan (Steps 001–007). | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Unknown | Superseded Candidate | No | No | Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. Classification unclear; verify before relying on it. |
| docs/MARKDOWN_MANIFEST.md | Repository Markdown Manifest | Repo-wide markdown inventory and high-risk review aid. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Stripe / Payments / Runtime Contract / Catalog / Capability / System Governance / Website Content / Marketing / Operations | Candidate | Active | No | Candidate | HubSpot, Request Estimate, QR Landing, Attribution, Stripe, Capability Catalog, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Generated from repo scan for DOC001; update when markdown corpus changes. |
| docs/runtime/cloudflare_email_routing.md | Cloudflare Email Routing Contract — REV01 | Runtime contract or operational runtime reference for Cloudflare Email Routing Contract — REV01. | Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | Runtime Ownership | RUNTIME | Important governance or contract document. |
| docs/runtime/cloudflare_env.md | Cloudflare Runtime / Environment Contract — REV01 | Runtime contract or operational runtime reference for Cloudflare Runtime / Environment Contract — REV01. | HubSpot / CRM / QR / Attribution / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, QR Landing, Stripe, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/deployment_validation.md | Deployment Validation SOP — QA001 REV02 | Runtime contract or operational runtime reference for Deployment Validation SOP — QA001 REV02. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution, Stripe, Scheduling, Runtime Ownership, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/funnel_context_contract_rev01.md | Funnel Context Contract — REV01 | Runtime contract or operational runtime reference for Funnel Context Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Attribution, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/google_calendar_runtime.md | Google Calendar Runtime Contract — REV01 | Runtime contract or operational runtime reference for Google Calendar Runtime Contract — REV01. | Lead Intake / Estimate / Scheduling / Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | Request Estimate, Attribution, Google Calendar, Scheduling, Runtime Ownership | LEADFLOW001, ATTRIBUTION, QRATTRIB, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/hubspot_properties.md | HubSpot Properties Contract — REV01 | Runtime contract or operational runtime reference for HubSpot Properties Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/hubspot_sync_contract.md | HubSpot Sync Contract — REV01 | Runtime contract or operational runtime reference for HubSpot Sync Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/lead_signal_contract.md | Lead Signal Contract — REV01 | Runtime contract or operational runtime reference for Lead Signal Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/protected_runtime_contract.md | Protected Runtime Contract — REV01 | Runtime contract or operational runtime reference for Protected Runtime Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, QR Landing, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/qr_attribution_reporting.md | QR Attribution Reporting & Review SOP — RUNTIME011 REV01 | Runtime contract or operational runtime reference for QR Attribution Reporting & Review SOP — RUNTIME011 REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Request Estimate, QR Landing, Attribution, Stripe, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/qrlanding_runtime.md | QRLanding Runtime Attribution Contract — REV01 | Runtime contract or operational runtime reference for QRLanding Runtime Attribution Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, QR Landing, Attribution, Runtime Ownership, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/README.md | Runtime Documentation Foundation | Runtime contract or operational runtime reference for Runtime Documentation Foundation. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, QR Landing, Stripe, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, RUNTIME | Important governance or contract document. |
| docs/runtime/request_id_contract.md | requestId Contract — REV01 | Runtime contract or operational runtime reference for requestId Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Runtime Contract / System Governance / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/resend_runtime.md | Resend Runtime Contract — REV01 | Runtime contract or operational runtime reference for Resend Runtime Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Scheduling, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/runtime_contract_template.md | Runtime Contract Template | Runtime contract or operational runtime reference for Runtime Contract Template. | Runtime Contract / System Governance / Operations | Authoritative | Active | No | Yes | Runtime Ownership | RUNTIME | Important governance or contract document. |
| docs/runtime/runtime_ownership_map.md | Runtime Ownership Map | Runtime contract or operational runtime reference for Runtime Ownership Map. | HubSpot / CRM / Lead Intake / Estimate / Stripe / Payments / Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Attribution, Stripe, Runtime Ownership | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/scheduling_future_model.md | Scheduling Future Model — REV01 | Runtime contract or operational runtime reference for Scheduling Future Model — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Request Estimate, Attribution, Google Calendar, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, RUNTIME | Important governance or contract document. |
| docs/runtime/scheduling_ownership.md | Scheduling Ownership Contract — REV01 | Runtime contract or operational runtime reference for Scheduling Ownership Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, QR Landing, Stripe, Google Calendar, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/runtime/stripe_runtime.md | Stripe Runtime Contract — REV01 | Runtime contract or operational runtime reference for Stripe Runtime Contract — REV01. | Lead Intake / Estimate / QR / Attribution / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Stripe, Runtime Ownership | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/specs/control-plane-spec.md | Control Plane Specification — LOCKED | Specification document for Control Plane Specification — LOCKED. | HubSpot / CRM / Runtime Contract / Catalog / Capability / BOM / Package Planning / System Governance / Website Content / Operations | Authoritative | Superseded Candidate | No | No | HubSpot, WNYHS Core | LEADFLOW001, HUBSPOT, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/specs/full-stack-spec.md | WNY Home Security — Full Stack Spec | Specification document for WNY Home Security — Full Stack Spec. | HubSpot / CRM / Lead Intake / Estimate / Stripe / Payments / Runtime Contract / System Governance / Website Content / Operations | Authoritative | Superseded Candidate | No | No | HubSpot, Request Estimate, Attribution, Stripe, Site Version | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, WEBSITE COPY, RUNTIME | Important governance or contract document. Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/specs/funnel-spec.md | WNY Home Security — Funnel Spec | Specification document for WNY Home Security — Funnel Spec. | Lead Intake / Estimate / Scheduling / Stripe / Payments / BOM / Package Planning / System Governance / Website Content / Marketing | Authoritative | Superseded Candidate | No | No | Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Important governance or contract document. Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/specs/main_funnel_contract_rev01.md | Main Funnel Contract — REV01 | Specification document for Main Funnel Contract — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, Scheduling | LEADFLOW001, HUBSPOT, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/specs/public_funnel_standards_rev01.md | WNYHS Public Funnel Standards — REV01 | Specification document for WNYHS Public Funnel Standards — REV01. | Lead Intake / Estimate / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Authoritative | Active | No | Yes | Request Estimate | LEADFLOW001, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/specs/qr_funnel_standards_rev01.md | WNYHS QR Funnel Standards — REV01 | Specification document for WNYHS QR Funnel Standards — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | HubSpot, Request Estimate, QR Landing, Attribution, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/specs/scheduling_architecture_workflow_spec_rev01.md | Scheduling Architecture + Operational Workflow Spec — REV01 | Specification document for Scheduling Architecture + Operational Workflow Spec — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot, Request Estimate, Attribution, Stripe, Google Calendar, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, RUNTIME | Important governance or contract document. |
| docs/specs/visual-brand-system-rev01.md | WNY Home Security Visual Brand System — REV01 | Specification document for WNY Home Security Visual Brand System — REV01. | Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/state_handoff_contract_rev_01.md | State Handoff Contract — REV01 | Markdown documentation for State Handoff Contract — REV01. | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Unknown | Unknown | No | No | Request Estimate, Stripe, Scheduling | LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Classification unclear; verify before relying on it. |
| docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md | Step101 — Home Security Funnel + Page Spec (REV02) | Historical or controlling step/specification reference for Step101 — Home Security Funnel + Page Spec (REV02). | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md | Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01 | Historical or controlling step/specification reference for Step102 — WNYHS ScanCode / QRLanding Funnel Spec — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / BOM / Package Planning / System Governance / Website Content / Marketing | Supporting | Historical | No | No | HubSpot, Request Estimate, QR Landing, Attribution, Stripe, Google Calendar, Brand / Marketing | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md | Step201 — Email Infrastructure + Resend Integration (REV01) | Historical or controlling step/specification reference for Step201 — Email Infrastructure + Resend Integration (REV01). | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content | Supporting | Historical | No | No | HubSpot, Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md | Step102 — WNYHS Replication-Readiness Hardening — REV01 | Historical or controlling step/specification reference for Step102 — WNYHS Replication-Readiness Hardening — REV01. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Supporting | Superseded Candidate | No | No | HubSpot, Request Estimate, QR Landing, Stripe, Scheduling | LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/steps/step_103_full_funnel_validation_rev_01.md | Step103 — Full Funnel Validation — REV01 | Historical or controlling step/specification reference for Step103 — Full Funnel Validation — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / BOM / Package Planning / System Governance / Website Content / Operations | Supporting | Historical | No | No | HubSpot, Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY | Review for lineage; do not treat as current if contradicted by higher authority. |
| docs/stripe-cloudflare.md | Stripe Cloudflare Pages Functions | Markdown documentation for Stripe Cloudflare Pages Functions. | Stripe / Payments / Runtime Contract / Website Content / Operations | Unknown | Unknown | No | No | Stripe | STRIPE, WEBSITE COPY, RUNTIME | Classification unclear; verify before relying on it. |
| docs/system/agent.md | WNY Home Security — Agent Execution Rules | System governance or Codex execution reference for WNY Home Security — Agent Execution Rules. | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content / Operations | Authoritative | Active | No | Yes | Request Estimate, Stripe, Scheduling | ALL HIGH-RISK TASKS, LEADFLOW001, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/assistant_behavior_contract_rev_01.md | Assistant Behavior Contract — REV01 | System governance or Codex execution reference for Assistant Behavior Contract — REV01. | Runtime Contract / System Governance | Authoritative | Active | No | Yes | Unknown | RUNTIME | Important governance or contract document. |
| docs/system/chat_transfer_prompt_gov_harden002.md | Chat Transfer Prompt — GOV-HARDEN002 | System governance or Codex execution reference for Chat Transfer Prompt — GOV-HARDEN002. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, Request Estimate, Stripe, Scheduling, Runtime Ownership, Site Version | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/gpt_os_doctrine_rev_01.md | GPT OS Doctrine — REV01 | System governance or Codex execution reference for GPT OS Doctrine — REV01. | HubSpot / CRM / System Governance / Website Content | Authoritative | Active | No | Yes | HubSpot | LEADFLOW001, HUBSPOT, WEBSITE COPY | Important governance or contract document. |
| docs/system/guardrails.md | WNY Home Security — Guardrails | System governance or Codex execution reference for WNY Home Security — Guardrails. | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Operations | Authoritative | Active | No | Yes | Request Estimate, Stripe, Scheduling, Site Version | ALL HIGH-RISK TASKS, LEADFLOW001, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/master-task-register.md | Master Task Register | System governance or Codex execution reference for Master Task Register. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, QR Landing, Stripe | ALL HIGH-RISK TASKS, LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/milestone_trigger_protocol_rev_01.md | Milestone + Trigger Protocol — REV01 | System governance or Codex execution reference for Milestone + Trigger Protocol — REV01. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Request Estimate, Stripe, Scheduling, Brand / Marketing | LEADFLOW001, HUBSPOT, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/plan.md | WNY Home Security — Execution Plan | System governance or Codex execution reference for WNY Home Security — Execution Plan. | Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / System Governance / Website Content | Authoritative | Active | No | Yes | Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership, Brand / Marketing | ALL HIGH-RISK TASKS, LEADFLOW001, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/project.md | WNY Home Security — Project Governance | System governance or Codex execution reference for WNY Home Security — Project Governance. | HubSpot / CRM / Lead Intake / Estimate / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Request Estimate, Attribution, Stripe, Scheduling, Runtime Ownership, Site Version, Brand / Marketing | ALL HIGH-RISK TASKS, LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/step-current.md | Current Operational Context | System governance or Codex execution reference for Current Operational Context. | HubSpot / CRM / Lead Intake / Estimate / QR / Attribution / Scheduling / Stripe / Payments / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | HubSpot, Lead Signal, QR Landing, Attribution, Stripe, Scheduling, Runtime Ownership, Brand / Marketing | ALL HIGH-RISK TASKS, LEADFLOW001, HUBSPOT, ATTRIBUTION, QRATTRIB, STRIPE, SCHEDULING, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| docs/system/task-command-vocabulary.md | Task Command Vocabulary | System governance or Codex execution reference for Task Command Vocabulary. | System Governance | Authoritative | Active | No | Yes | Unknown | General docs review | Important governance or contract document. |
| public/brand/print-assets/half-sheet-flyers/README.md | WNY Home Security Half-Sheet Flyer Source Package | Brand, visual, or print asset guidance for WNY Home Security Half-Sheet Flyer Source Package. | Lead Intake / Estimate / QR / Attribution / Runtime Contract / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | Request Estimate, QR Landing, Attribution, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY, RUNTIME | Important governance or contract document. |
| public/brand/print-assets/pole-mall-flyer/README.md | WNY Home Security Full-Page Pole / Mall Flyer Source Package | Brand, visual, or print asset guidance for WNY Home Security Full-Page Pole / Mall Flyer Source Package. | QR / Attribution / BOM / Package Planning / System Governance / Website Content / Marketing | Authoritative | Active | No | Yes | QR Landing, Attribution, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY | Important governance or contract document. |
| public/brand/print-assets/qr-placards/README.md | WNY Home Security QR Placard Print Package | Brand, visual, or print asset guidance for WNY Home Security QR Placard Print Package. | Lead Intake / Estimate / QR / Attribution / BOM / Package Planning / System Governance / Website Content / Marketing / Operations | Authoritative | Active | No | Yes | QR Landing, Attribution, Brand / Marketing | LEADFLOW001, ATTRIBUTION, QRATTRIB, BOM, PACKAGE, WEBSITE COPY | Important governance or contract document. |
| public/images/home-security/README.md | ReliableElderCare — Home Security Image Pack | Markdown documentation for ReliableElderCare — Home Security Image Pack. | BOM / Package Planning / System Governance / Website Content | Supporting | Active | No | No | Unknown | BOM, PACKAGE, WEBSITE COPY | No special note. |
| README.md | wnyhomesecurity | Repository overview and local project reference. | System Governance / Website Content | Supporting | Active | Unknown | No | Unknown | General docs review | No special note. |

## 5. Source-of-Truth Candidates
- `AGENTS.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_DOC_SYNC_PROMPT.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_contract_template.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/system/agent.md`
- `docs/system/assistant_behavior_contract_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `docs/system/task-command-vocabulary.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`

## 6. Runtime Contracts
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_contract_template.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/stripe-cloudflare.md`
- `docs/system/agent.md`
- `docs/system/assistant_behavior_contract_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`

## 7. HubSpot / CRM Documentation
- `AGENTS.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

## 8. Request / Estimate / Lead Intake Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`

## 9. QR / Attribution Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`

## 10. Catalog / Capability / BOM Planning Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_DOC_SYNC_PROMPT.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`
- `public/images/home-security/README.md`

## 11. Stripe / Payment Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/README.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/stripe-cloudflare.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

## 12. Scheduling Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

## 13. System Governance Documentation
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/brand_asset_standards_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_DOC_SYNC_PROMPT.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_email_routing.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_contract_template.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/agent.md`
- `docs/system/assistant_behavior_contract_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `docs/system/task-command-vocabulary.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`
- `public/images/home-security/README.md`
- `README.md`

## 14. Potentially Stale / Superseded / Duplicate Documents
These files require extra care. They may be historical, superseded candidates, unclear in authority, partial catalogs, or older audit artifacts that should not silently override current governance.
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/stripe-cloudflare.md`

## 15. Required Review Sets For Future Tasks
### Before LEADFLOW001
Review these before changing estimate intake, callback requests, referral fields, HubSpot mapping, source attribution, or lead signal behavior.
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`

### Before HUBSPOT Changes
Review these before adding HubSpot properties, workflows, schema assumptions, API mappings, or CRM write behavior.
- `AGENTS.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/gpt_os_doctrine_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

### Before QR / Source Attribution Changes
Review these before adding named referral QR codes, source IDs, campaign IDs, or QR landing attribution changes.
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- `docs/brand/print_assets/qr_placard_system_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/qrlanding_runtime.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`

### Before BOM / Package Work
Review these before `BOM001`, `PACKAGE001`, customer-facing package concepts, or capability claims work.
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/lead_fix001_implementation_rev01.md`
- `docs/audits/main_funnel_audit002_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/brand/page_layout_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- `docs/codex/CODEX_DOC_SYNC_PROMPT.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/funnel_context_contract_rev01.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/specs/control-plane-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/public_funnel_standards_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/project.md`
- `docs/system/step-current.md`
- `public/brand/print-assets/half-sheet-flyers/README.md`
- `public/brand/print-assets/pole-mall-flyer/README.md`
- `public/brand/print-assets/qr-placards/README.md`
- `public/images/home-security/README.md`

### Before Stripe Changes
Review these before payment, checkout, deposit, webhook, success/cancel, or Stripe runtime work.
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_cleanup003_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/brand_asset_authority_rev01.md`
- `docs/brand/print_system_standards_rev01.md`
- `docs/brand/visual_system_rev01.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/MARKDOWN_MANIFEST.md`
- `docs/runtime/cloudflare_env.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/qr_attribution_reporting.md`
- `docs/runtime/README.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/runtime/stripe_runtime.md`
- `docs/specs/full-stack-spec.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/stripe-cloudflare.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

### Before Scheduling Changes
Review these before availability, appointment, calendar, owner-confirmation, or scheduling workflow work.
- `AGENTS.md`
- `docs/audits/copy_fix001_implementation_rev01.md`
- `docs/audits/crm_deal002a_partial_completion_rev01.md`
- `docs/audits/crm_fix001_implementation_rev01.md`
- `docs/audits/crm_qa001_validation_rev01.md`
- `docs/audits/email_fix001_implementation_rev01.md`
- `docs/audits/estimate_email001_rev01.md`
- `docs/audits/estimate_flow001_rev01.md`
- `docs/audits/fitcheck_cta001_rev01.md`
- `docs/audits/funnel_arch002_rev01.md`
- `docs/audits/funnel_cleanup001_rev01.md`
- `docs/audits/funnel_cleanup002_rev01.md`
- `docs/audits/funnel_fix001_implementation_rev01.md`
- `docs/audits/funnel_ops001_customer_journey_audit_rev01.md`
- `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- `docs/audits/gov_context002_finish_line_context_rev01.md`
- `docs/audits/main_funnel_fix003a_rev01.md`
- `docs/audits/main_funnel_fix003b_rev01.md`
- `docs/audits/main_funnel_fix003c_rev01.md`
- `docs/audits/nav_bug001_rev01.md`
- `docs/audits/nav_ux001_rev01.md`
- `docs/audits/payment_fix001_implementation_rev01.md`
- `docs/audits/planner_guard001_rev01.md`
- `docs/audits/qr_fix001_implementation_rev01.md`
- `docs/audits/qrlanding_crm_notification_inventory_rev01.md`
- `docs/audits/quote_gen001b_rev01.md`
- `docs/audits/quote_send001_rev01.md`
- `docs/audits/scheduling_backend_authority_reconciliation_rev01.md`
- `docs/audits/support_flow001_rev01.md`
- `docs/brand/header_footer_standards_rev01.md`
- `docs/catalogs/deep-research-report.md`
- `docs/codex/CODEX_TASK_REGISTER_RULES.md`
- `docs/codex/CODEX_TASK_TEMPLATE.md`
- `docs/codex/QA_CHECKLIST.md`
- `docs/core_vs_vertical_separation_rev_01.md`
- `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev01.md`
- `docs/crm/hubspot/hubspot_kb_rev02.md`
- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/DOCUMENT_CATALOG.md`
- `docs/funnel_completion_qa_rev_01.md`
- `docs/implementation-plan.md`
- `docs/runtime/deployment_validation.md`
- `docs/runtime/google_calendar_runtime.md`
- `docs/runtime/protected_runtime_contract.md`
- `docs/runtime/README.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/resend_runtime.md`
- `docs/runtime/scheduling_future_model.md`
- `docs/runtime/scheduling_ownership.md`
- `docs/specs/funnel-spec.md`
- `docs/specs/main_funnel_contract_rev01.md`
- `docs/specs/qr_funnel_standards_rev01.md`
- `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- `docs/specs/visual-brand-system-rev01.md`
- `docs/state_handoff_contract_rev_01.md`
- `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- `docs/steps/step_103_full_funnel_validation_rev_01.md`
- `docs/system/agent.md`
- `docs/system/chat_transfer_prompt_gov_harden002.md`
- `docs/system/guardrails.md`
- `docs/system/master-task-register.md`
- `docs/system/milestone_trigger_protocol_rev_01.md`
- `docs/system/plan.md`
- `docs/system/project.md`
- `docs/system/step-current.md`

## 16. Next Recommended Documentation Tasks
- DOCSYNC001: Decide whether `docs/DOCUMENT_CATALOG.md` should be replaced by this manifest, kept as a curated subset, or maintained as a separate authority catalog.
- DOCSTATUS001: Promote or mark stale the older root/spec/audit documents currently listed as historical, superseded candidates, unknown, or partial references.
- LEADFLOW001-PREP: Create a focused lead-flow document map from the LEADFLOW001 review set before adding referral logic or changing estimate intake behavior.
- CATALOG-NEXT: After any CATALOG003 merge, update this manifest to include the new REV03 catalog artifact.

- `docs/quotesystem/IMPLEMENTATION008_Hardware_Placement_Reconciliation_REV01.md`

- `docs/quotesystem/IMPLEMENTATION009_Quote_Preview_Print_View_REV01.md`

- `docs/quotesystem/IMPLEMENTATION010_Installer_Packet_View_REV01.md`
- `docs/quotesystem/IMPLEMENTATION011_Local_Import_Export_REV01.md`
- `docs/quotesystem/IMPLEMENTATION012_Quote_Workspace_Usability_Pass_REV01.md`
- `docs/quotesystem/IMPLEMENTATION013_Pricing_Totals_Placeholder_REV01.md`

- `docs/quotesystem/IMPLEMENTATION014_Funeral_Home_Test_Case_REV01.md`

## QUOTESYSTEM-015 Manifest Addendum

| Path | Title | Purpose | System Area | Status | Authority | Runtime Change | Protected System Change | Keywords | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| docs/quotesystem/FLOORPLAN004_Redraw_Photo_Analysis_Handoff_REV01.md | FLOORPLAN004 REV01 — Redraw + Photo Analysis Workflow Handoff | Governance for redraw/photo-analysis handoff source hierarchy, checklist, fallback, and outputs. | Quote System / Floorplan / Property Model | Active | Supporting standard | No | No | redraw, photo analysis, floorplan, handoff | Manual governance only; no image processing or protected-system change. |
| docs/quotesystem/IMPLEMENTATION015_Redraw_Photo_Analysis_Handoff_REV01.md | IMPLEMENTATION015 REV01 — Redraw + Photo Analysis Handoff Support | Implementation note for local Property Model handoff fields and preview compatibility. | Quote System / Runtime Docs | Active | Implementation note | Yes - local operator workspace only | No | Property Model, handoff, quote preview, installer packet | HubSpot and Stripe/payment untouched. |

WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-001 addendum: `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_001_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the completed static public marketing visual parity pass for About, Our Work, Comparison, Reliability, and Home Security What's Included, and confirms protected runtime systems remained untouched.

WNYHS-PUBLIC-MARKETING-VISUAL-PARITY-002 addendum: `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_002_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the completed package detail visual parity pass for Home Security package detail pages and confirms package data, pricing, protected runtime systems, HubSpot, and Stripe/payment remained untouched.

- `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_MARKETING_VISUAL_PARITY_003_REV01.md` — Contact + Support wrapper visual parity implementation record (v1.0.145).


- `docs/governance/HOTFIX_WNYHS_APEX_HOSTNAME_001_REV01.md` — Apex hostname rendering failure hotfix investigation and implementation record (v1.0.147).

WNYHS-PUBLIC-VISUAL-QA-001 addendum: `docs/governance/IMPLEMENTATION_WNYHS_PUBLIC_VISUAL_QA_001_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It records the bounded public text contrast and readability correction pass for public nav/footer destinations and confirms HubSpot, Stripe/payment, Fit Check behavior, Contact/Estimate form behavior, Support form behavior, nav/footer destinations, package data/pricing, protected runtime systems, dependencies, and package-lock files were not changed.

FLOORPLAN-QUOTE-GOV-001 addendum: `docs/quotesystem/FLOORPLAN_QUOTE_WORKFLOW_GOVERNANCE_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a docs-only floorplan quote workflow governance standard formalizing evidence collection, two-pass interior/exterior reconstruction, editable SVG/vector geometry, approval gates, locked baseline status language, and the `FLOORPLAN REV08 — Frozen First Floor Geometry Baseline` funeral-home test-case artifact reference. It does not authorize runtime quote-system code, HubSpot, Stripe/payment, scheduling, support/contact forms, catalog schema, package pricing/data, auth, durable storage, dependencies, image processing, uploads, LiDAR capture, computer vision, or AI redraw implementation.

## QUOTESYSTEM-017 Manifest Addendum

| Path | Title | Purpose | System Area | Status | Authority | Runtime Change | Protected System Change | Keywords | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| docs/quotesystem/QUOTESYSTEM017_Quote_Workspace_Workflow_Alignment_REV01.md | QUOTESYSTEM017 Quote Workspace Workflow Alignment REV01 | Docs-only alignment mapping current internal Quote Workspace / Property Model UI support to the active operator playbook phases and documenting future bounded gaps. | Quote System / Workflow Alignment | Active | Documentation alignment record | No | No | quote workspace, property model, playbook, workflow alignment | Does not authorize app/source, route, CSS, runtime, HubSpot, Stripe/payment, scheduling, storage, upload, export, PDF, email, environment, package, or Cloudflare config changes. |


QUOTE-SYSTEM-STANDARD-001 addendum: `docs/quotesystem/QUOTE_CUSTOMER_ESTIMATE_PACKET_STANDARD_REV01.md` and `docs/quotesystem/QUOTE_INTERNAL_SOW_PACKET_STANDARD_REV01.md` were added after the prior manifest scan and should be included in the next full manifest regeneration. They formalize the separation between the customer-facing estimate/proposal/acceptance packet and the internal SOW/install-planning packet, with both future outputs generated from shared quote-system source data. They do not authorize runtime UI changes, React/TS/TSX changes, quote generator code, PDF generator code, Quote Preview route changes, Installer Packet route changes, import/export changes, pricing engine implementation, durable storage, HubSpot changes, Stripe/payment changes, scheduling changes, Resend/email changes, lead-signal/requestId changes, catalog schema changes, package data/pricing changes, auth changes, dependencies, package-lock changes, or public website changes.

## QUOTE-SYSTEM-STANDARD-002 Manifest Addendum

| Path | Title | Purpose | System Area | Status | Authority | Runtime Change | Protected System Change | Keywords | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| docs/quotesystem/IMPLEMENTATION017_Customer_Estimate_Preview_Alignment_REV01.md | IMPLEMENTATION017 Customer Estimate Preview Alignment REV01 | Records the local Quote Preview customer-estimate alignment to the locked seven-section proposal/acceptance packet standard. | Quote System / Runtime Docs | Active | Implementation note | Yes - local operator quote preview only | No | quote preview, customer estimate, proposal, acceptance, localStorage | Preserves localStorage, recordId, browser print, installer packet, workspace, and import/export behavior; does not add PDF, storage, CRM sync, email sending, protected payment runtime, new dependencies, or public page changes. |

## QUOTE-SYSTEM-STANDARD-003 Manifest Addendum

| Path | Title | Purpose | System Area | Status | Authority | Runtime Change | Protected System Change | Keywords | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| docs/quotesystem/IMPLEMENTATION018_Internal_SOW_Installer_Packet_Alignment_REV01.md | IMPLEMENTATION018 Internal SOW Installer Packet Alignment REV01 | Records the local Installer Packet alignment to the locked eleven-section Internal SOW / install-planning packet standard. | Quote System / Runtime Docs | Active | Implementation note | Yes - local operator installer packet only | No | installer packet, internal SOW, BOM reconciliation, evidence, redraw, localStorage | Preserves localStorage, recordId, browser print, customer quote preview, workspace, and import/export behavior; does not add PDF, storage, CRM sync, email sending, protected payment runtime, new dependencies, public page changes, inventory automation, ordering automation, or persistent checklist state. |

QUOTE-SYSTEM-STANDARD-004 addendum: `docs/quotesystem/IMPLEMENTATION019_Structured_Opening_Inventory_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the bounded local structured opening inventory update and does not authorize HubSpot, Stripe/payment, scheduling, Resend/email, lead-signal/requestId, public pages, catalog schema, package data/pricing, auth, durable storage, dependencies, package-lock, PDF generation, image processing, floorplan geometry, computer vision, inventory automation, ordering automation, or pricing-engine changes.

SITEARCH001 addendum: `docs/site-architecture/SITEARCH001_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_AUDIT_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only public information architecture audit for current WNYHS route ownership, page/component ownership, navigation, embedded links, search status, demo/dashboard routes, SEO/canonical observations, package visibility, WNYHS Core visibility, route conflicts, and recommended future architecture decisions. It does not authorize source, route, navigation, footer, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

SITEARCH002 addendum: `docs/site-architecture/SITEARCH002_WNYHS_PUBLIC_INFORMATION_ARCHITECTURE_DECISION_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only public information architecture decision standard for canonical homepage ownership, category and solution route patterns, package visibility, WNYHS Core visibility, search ownership, demo/dashboard ownership, campaign ownership, support/about/our-work/contact ownership, legal/system route ownership, navigation, footer, breadcrumbs, internal linking, canonical/redirect posture, SEO indexing, route conflicts, and future implementation sequencing. It does not authorize source, route, navigation, footer, breadcrumb, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

SITEARCH003 addendum: `docs/site-architecture/SITEARCH003_WNYHS_PUBLIC_ARCHITECTURE_IMPLEMENTATION_PLAN_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only phased implementation plan for public architecture cleanup, including canonical category routes, legacy route handling, navigation correction, footer and embedded link correction, search planning and implementation, demo/dashboard cleanup, sitemap/robots/canonical alignment, SEO preparation, image workflow reintegration, validation, rollback, future task sequencing, and Codex restrictions. It does not authorize source, route, navigation, footer, breadcrumb, search, page-content, category, solution, image, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

SITEARCH004 addendum: `docs/site-architecture/SITEARCH004_WNYHS_LEGACY_CATEGORY_ROUTE_TRANSITION_PLAN_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only legacy category route transition plan for `/home-security`, `/home-automation`, `/home-safety`, `/home-lighting`, and `/aging-in-place`, including ownership, redirect strategy, alias strategy, migration sequence, SEO/backlink/campaign/homepage-history considerations, validation requirements, rollback requirements, and future implementation task boundaries. It does not authorize redirects, route changes, navigation changes, footer changes, breadcrumb changes, search changes, sitemap changes, robots changes, canonical tag changes, page-content changes, category changes, solution changes, image work, runtime, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or deployment-config changes by itself.

SEARCH001 addendum: `docs/site-architecture/SEARCH001_WNYHS_PUBLIC_SITE_SEARCH_ARCHITECTURE_AND_INDEX_PLAN_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only public-site search architecture and index plan covering public search ownership, searchable and non-searchable content models, search result object fields, ranking, UI behavior, `/search` as the recommended future route, static client-side public index as the recommended first implementation model, indexing rules, accessibility, SEO, privacy, protected-system restrictions, and future tasks `T-SEARCH001-002`, `T-SEARCH001-003`, and `T-SEARCH001-004`. It does not authorize search implementation, `/search` route creation, header/homepage search UI changes, navigation changes, route changes, page-content changes, sitemap changes, robots changes, canonical tag changes, runtime, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API, Resend/email, Cloudflare, dependency, package-lock, environment, secret, or image changes by itself.

SEO001 addendum: `docs/seo/SEO001_WNYHS_SEO_FOUNDATION_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only SEO foundation governance standard for route classification, index/noindex policy, sitemap governance, robots review, metadata, canonical URLs, structured data, image SEO, internal linking, search inclusion, package visibility, QR/campaign treatment, demo treatment, local SEO, service-area strategy, SPA crawlability risk, measurement, forbidden shortcuts, the new-route SEO checklist, and future SEO implementation tasks. It does not authorize metadata changes, title tag changes, canonical changes, sitemap changes, robots changes, schema implementation, route changes, navigation changes, search implementation, category/solution/package content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secrets, dependencies, or package-lock changes by itself.

SEO002 addendum: `docs/seo/SEO002_WNYHS_METADATA_AND_CANONICAL_AUDIT_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records an audit-only metadata and canonical review covering current app-shell/client-side SEO behavior, route metadata inventory, homepage/category/solution/search/marketing/campaign/package/legal/demo findings, canonical conflicts, Open Graph/social gaps, index/noindex posture, SPA crawlability risk, risk ranking, and future implementation tasks. It does not authorize metadata changes, title tag changes, meta description changes, canonical changes, sitemap changes, robots changes, schema implementation, route changes, navigation changes, search implementation, page-content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secrets, dependencies, or package-lock changes by itself.

SEO003 addendum: `docs/seo/SEO003_WNYHS_METADATA_IMPLEMENTATION_PLAN_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only metadata implementation plan covering future route-level metadata, canonical-domain recommendation, index/noindex policy, metadata field requirements, page-group implementation order, homepage/category/solution/marketing/search/package/QR/legal/demo plans, Open Graph/Twitter metadata, client-side SEO component strategy, SPA crawlability notes, validation, rollback, and future implementation tasks. It does not authorize metadata changes, title tag changes, meta description changes, canonical changes, robots/index behavior changes, sitemap changes, robots changes, schema implementation, route changes, navigation changes, search implementation, page-content changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secrets, dependencies, or package-lock changes by itself.

SEO004 addendum: `docs/seo/SEO004_WNYHS_SEO_STATUS_AND_CONTINUATION_HANDOFF_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records a docs-only SEO status and continuation handoff after SEO001-SEO003 and T-SEO001-004 through T-SEO001-008, including current canonical domain, indexed sitemap URLs, noindex/review/protected route groups, metadata coverage, robots/sitemap/search policy state, remaining SEO gaps, outstanding SEO tasks, new-content SEO intake, category/solution expansion workflow, image SEO follow-up, Search Console/Bing next steps, and a future SEO chat bootstrap prompt. It does not authorize metadata changes, sitemap changes, robots changes, canonical/noindex policy changes, schema implementation, route changes, navigation changes, search implementation/index changes, page content/layout changes, image changes, HubSpot, Stripe/payment, scheduling, planner, quote flow, backend/API runtime, Resend/email, Cloudflare config, environment, secrets, dependencies, or package-lock changes by itself.

INSTALL001 addendum: `docs/installer/INSTALL001_INSTALLER_PLATFORM_ARCHITECTURE_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Installer Platform architecture for repeatable Home Assistant controller appliance preparation, including platform layers, Customer/Installer/Service Dashboard audience classes, theme-readiness posture, bench workflow phases, funeral home pilot relevance, future INSTALL002-INSTALL010 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation implementation, customer-specific install documentation, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL002 addendum: `docs/installer/INSTALL002_BENCH_BUILD_CHECKLIST_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Bench Build Checklist for repeatable Home Assistant controller bench preparation before field installation, including required checklist fields, 15 bench build phases, dashboard placeholder readiness for Customer/Installer/Service Dashboard classes, near-term funeral home pilot relevance, expected bench output artifacts, future INSTALL003/004/005/006/008 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, customer-specific install documentation, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL003 addendum: `docs/installer/INSTALL003_GOLDEN_HOME_ASSISTANT_BUILD_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Golden Home Assistant Build Standard for the reusable baseline controller state before customer-specific customization, including required baseline categories, Golden versus customer-specific boundaries, bench checklist relationship, backup/restore expectations, theme-readiness posture, near-term funeral home pilot relevance, future INSTALL004/005/006/007/008 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, backup automation, customer-specific install documentation, funeral-home-specific configuration, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL004 addendum: `docs/installer/INSTALL004_DEVICE_NAMING_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Device Naming Standard for physical device names in Home Assistant-based installs, including naming principles, recommended area/function/device-type pattern, internal versus customer-visible naming, provisional bench naming, onsite confirmation, physical labeling, device naming sheet fields, example names, anti-patterns, near-term funeral home pilot relevance, future INSTALL005/006/008 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, entity naming, area naming, customer-specific install documentation, funeral-home-specific configuration, device inventory data, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL005 addendum: `docs/installer/INSTALL005_ENTITY_AND_AREA_STANDARDS_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Entity and Area Standards for Home Assistant-based installs, including area categories, area naming, device-to-area assignment, entity naming, entity cleanup workflow, visibility classes, area and entity review sheet fields, examples, anti-patterns, funeral home pilot relevance, future INSTALL006/007/008/010 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard implementation, automation/script implementation, customer-specific install documentation, funeral-home-specific configuration, customer-specific area/device/entity data, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL006 addendum: `docs/installer/INSTALL006_DASHBOARD_ARCHITECTURE_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Dashboard Architecture Standard for Home Assistant-based installs, including Customer/Installer/Service Dashboard classes, recommended view groups, status hierarchy, personalization placeholders, card grouping and navigation principles, access/visibility posture, mobile/tablet usability, theme-readiness posture, Dashboard Readiness Sheet fields, examples, anti-patterns, funeral home pilot relevance, future INSTALL007/008/009/010 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific dashboards, customer-specific install files, actual customer dashboard data, funeral-home-specific configuration, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future INSTALL task activation changes by itself.

INSTALL006A addendum: `docs/installer/INSTALL006A_SHARED_JOB_DATA_MODEL_AND_HUBSPOT_FIELD_ARCHITECTURE_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Shared Job Data Model and HubSpot Field Architecture, including candidate shared record chain, upstream sales/estimate/SOW/quote/BOM/order/inventory workflow model, downstream INSTALL001-INSTALL006 mapping, candidate HubSpot object/record architecture, candidate property groups, candidate field inventory, private installer/admin portal screen architecture, business process stages, open questions, future task roadmap, and protected-system boundaries. It does not authorize HubSpot field creation, HubSpot object creation, HubSpot schema/property/pipeline/workflow changes, direct HubSpot writes, portal implementation, runtime sync, scripts, APIs, source code, database changes, Home Assistant configuration, customer-specific install files, actual customer data, inventory automation, ordering automation, Stripe/payment sync, scheduling sync, Resend/email changes, Cloudflare config, dependency, package-lock, environment, secret, or future task activation changes by itself.

INSTALL007 addendum: `docs/installer/INSTALL007_DASHBOARD_THEME_READINESS_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Dashboard Theme Readiness Standard for Home Assistant-based installs, including theme-readiness principles, supported future theme classes, Customer/Installer/Service Dashboard requirements, conceptual semantic role categories, accessibility and status rules, card and view design rules, Theme Readiness Review Sheet fields, examples, anti-patterns, relationship to INSTALL003/006/008/009/010, public website token-work relationship, funeral home pilot relevance, future THEME001/002/003 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, Home Assistant theme files, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific dashboards, funeral-home-specific themes, actual customer dashboard data, hardware purchasing, inventory automation, ordering automation, HubSpot, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future task activation changes by itself.

INSTALL008 addendum: `docs/installer/INSTALL008_BENCH_TESTING_AND_COMMISSIONING_CHECKLIST_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Bench Testing and Commissioning Checklist for Home Assistant-based installs, including bench validation, onsite commissioning, checklist fields, evidence/proof standards, commissioning status categories, critical blockers, exception handling fields, shared data model relationship, funeral home pilot relevance, future INSTALL009/010, HUBSPOT-INSTALL001, PORTAL001, ASSET001, and WARRANTY001 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific install docs, actual customer records, customer data, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, portal screens, durable storage, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future task activation changes by itself.

INSTALL009 addendum: `docs/installer/INSTALL009_CUSTOMER_HANDOFF_PACKAGE_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Customer Handoff Package standard for Home Assistant-based installs, including customer-safe system summary, installed feature summary, required handoff sections, customer-safe language rules, dashboard orientation, installed asset summary fields, warranty/support basics, customer training confirmation, customer signoff fields, shared data model relationship, funeral home pilot relevance, future INSTALL010, WARRANTY001, ASSET001, HUBSPOT-INSTALL001, PORTAL001, and CUSTOMERDOC001 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific handoff docs, actual customer records, customer data, PDFs, emails, portal files, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, durable storage, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future task activation changes by itself.

INSTALL010 addendum: `docs/installer/INSTALL010_SERVICE_DASHBOARD_AND_REMOTE_SUPPORT_STANDARD_REV01.md` was added after the prior manifest scan and should be included in the next full manifest regeneration. It records the docs-only WNYHS Service Dashboard and Remote Support Standard for Home Assistant-based installs, including post-handoff service dashboard purpose, recommended service dashboard views, conditional remote support posture, support-safe diagnostic categories, support status categories, Service Dashboard Readiness Sheet fields, remote support authorization fields, warranty/support handoff relationships, privacy/claim guardrails, funeral home pilot relevance, future HUBSPOT-INSTALL001, PORTAL001, ASSET001, WARRANTY001, SUPPORT001, and THEME001 planning notes, and protected-system boundaries. It does not authorize source, route, UI, CSS, public asset, runtime, Home Assistant configuration, dashboard YAML, Lovelace card implementation, frontend assets, theme implementation, automation/script implementation, customer-specific service dashboards, actual customer records, customer data, remote access credentials, private URLs, portal files, funeral-home-specific records, HubSpot schema/properties/objects/workflows, direct HubSpot writes, APIs, durable storage, support tickets, warranty records, asset records, Stripe/payment, scheduling, Resend/email, Cloudflare config, dependency, package-lock, environment, secret, or future task activation changes by itself.

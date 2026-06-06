# Repository Markdown Manifest

Status: Internal governance / repo inventory / documentation manifest
Customer-facing: No
Total markdown files inventoried: 107

DOCSTATUS001 addendum: `docs/system/document_status_reconciliation_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration.

LEADFLOW001 addendum: `docs/runtime/leadflow_referral_attribution_runtime.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before LEADFLOW001 implementation, HubSpot referral mapping, named QR attribution, quote-visible referral work, and referral SOP work.

CODEX-CONTRACT001 addendum: `docs/codex/CODEX_RUN_CONTRACT.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review/load material for all future Codex tasks.

HUBSPOT-REFERRAL001 addendum: `docs/crm/hubspot/hubspot_referral_property_mapping_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before LEADFLOW002, ATTRIBUTION001, QUOTE-REFERRAL001, and referral-aware HubSpot sync changes.

ATTRIBUTION001 addendum: `docs/runtime/named_qr_source_attribution_schema_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before named QR source implementation, partner QR creation, and source-aware HubSpot mapping.

REFERRAL-SOP001 addendum: `docs/ops/referral_payout_review_sop_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before referral payout handling implementation.

QUOTE-REFERRAL001 addendum: `docs/specs/quote_referral_awareness_spec_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is required review material before quote-visible referral awareness implementation.

REFERRAL-POLICY001 addendum: `docs/ops/referral_compensation_policy_rev01.md` was created after this manifest scan and should be included in the next full manifest regeneration. It is an internal operations policy required before referral payout implementation, LEADFLOW002, and contractor/referrer payment tracking.

CONTENT001 addendum: `docs/content-remediation/CONTENT001_WNYHS_WEBSITE_CONTENT_REMEDIATION_CODEX_INSTRUCTIONS_REV01.md` and `docs/content-remediation/CONTENT001_FINDING_TO_REMEDIATION_MATRIX_REV01.md` were added after this manifest scan and should be included in the next full manifest regeneration. They are governance-only remediation planning and traceability sources required before CONTENT001-B/C/D/E activation; they do not authorize runtime, route, UI, HubSpot, Stripe, Scheduling, Email, environment, or public copy changes by themselves.

SOLUTION001 addendum: `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is the solution-page standard for SOLUTION001-A updates to the four existing opportunity solution pages and does not authorize protected-system, global navigation, pricing, semantic-token, or unrelated page changes.

SOLUTION001-B addendum: `docs/solution-system/SOLUTION001_WNYHS_SOLUTION_PAGE_STANDARD_REV02.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is the current solution-page governance standard for the approved two-image system, including `solution-hero-image`, `solution-sample-image`, awareness-panel language, image relationship, claims, naming, and storage rules. It does not authorize image generation, source/CSS/runtime implementation, protected-system changes, global navigation, pricing, semantic-token, or unrelated page changes by itself.

DESIGN001 addendum: `docs/design-system/DESIGN001_WNYHS_VISUAL_SYSTEM_STANDARD_REV01.md` was added after this manifest scan and should be included in the next full manifest regeneration. It is a docs-only homepage-derived visual design system standard for review and does not authorize implementation, public page changes, CSS changes, semantic token changes, protected-system changes, or a visible site version bump.

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

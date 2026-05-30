# Document Catalog

This catalog inventories all Markdown (`.md`) files currently present in the repository, grouped by folder and annotated for operational use in future Codex sessions.

## Root

### `/AGENTS.md`
- **File path:** `AGENTS.md`
- **Purpose / likely role:** Root execution policy and non-negotiable guardrails for Codex runs, including authority chain and stop conditions.
- **Authority level:** **Root execution instruction**
- **Notes:** Authoritative and actively enforced; references controlling system and CRM documents.

### `/README.md`
- **File path:** `README.md`
- **Purpose / likely role:** Repository overview and onboarding reference.
- **Authority level:** **Reference / historical**
- **Notes:** Not listed in authority chain; useful context unless contradicted by system governance docs.

## `docs/`

### `/docs/MARKDOWN_MANIFEST.md`
- **File path:** `docs/MARKDOWN_MANIFEST.md`
- **Purpose / likely role:** Repo-wide markdown manifest inventorying every `.md` file and mapping high-risk review sets for lead intake, HubSpot, request/estimate, QR/source attribution, runtime contracts, catalogs, Stripe, scheduling, and governance work.
- **Authority level:** **Internal governance / repo inventory / documentation manifest**
- **Customer-facing:** No.
- **Notes:** Supports future Codex planning and is a required review aid before high-risk workflow changes; it does not replace higher-authority governance, runtime contracts, HubSpot REV03, or task-specific instructions.


### `/docs/audits/payment_fix001_implementation_rev01.md`
- **Purpose / likely role:** PAYMENT-FIX001 implementation note covering Stripe payment/deposit handoff verification, server-side confirmation posture checks, and claim-safe post-payment messaging hardening.
- **Likely consumed by:** Codex operators, QA reviewers, and payment-flow governance follow-up tasks.

### `/docs/audits/email_fix001_implementation_rev01.md`
- **File path:** `docs/audits/email_fix001_implementation_rev01.md`
- **Purpose / likely role:** EMAIL-FIX001 implementation note covering customer/operator email trigger inventory, recipient routing verification, requestId context visibility, and bounded Resend-path hardening.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to existing email runtime/trigger/template hardening; preserves HubSpot/Stripe/scheduling architecture boundaries.

### `/docs/audits/funnel_fix001_implementation_rev01.md`
- **File path:** `docs/audits/funnel_fix001_implementation_rev01.md`
- **Purpose / likely role:** FUNNEL-FIX001 implementation note covering CTA routing corrections and stage continuity normalization.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to CTA/link/route continuity fixes; no Stripe/HubSpot/scheduling architecture changes.




### `/docs/audits/crm_fix001_implementation_rev01.md`
- **File path:** `docs/audits/crm_fix001_implementation_rev01.md`
- **Purpose / likely role:** CRM-FIX001 implementation note documenting canonical lead-intake path normalization to `/api/lead-signal` across main and newsite forms.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded CRM intake normalization only; preserves HubSpot REV03 API-layer-only write constraints and Stripe/scheduling protections.

### `/docs/audits/copy_fix001_implementation_rev01.md`
- **File path:** `docs/audits/copy_fix001_implementation_rev01.md`
- **Purpose / likely role:** COPY-FIX001 implementation note covering claim-safe copy sweep corrections across main/newsite/shared funnel messaging.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded copy/CTA/status wording hardening only; preserves Stripe/HubSpot/scheduling architecture boundaries.

### `/docs/audits/qr_fix001_implementation_rev01.md`
- **File path:** `docs/audits/qr_fix001_implementation_rev01.md`
- **Purpose / likely role:** QR-FIX001 implementation note covering QR/newsite request-stage claim hardening and CTA/status safety updates.
- **Authority level:** **Audit implementation artifact**
- **Notes:** Bounded to QR/newsite copy/status/CTA hardening; preserves owner-confirmed scheduling and protected Stripe/HubSpot boundaries.

### `/docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- **File path:** `docs/audits/funnel_ops001_next_task_sequence_rev01.md`
- **Purpose / likely role:** FUNNEL-OPS001 queue-normalization document defining bounded next-task sequencing and priority classes.
- **Authority level:** **Audit planning artifact**
- **Notes:** Planning/governance only; preserves open scheduling posture and avoids runtime behavior changes.

### `/docs/implementation-plan.md`
- **File path:** `docs/implementation-plan.md`
- **Purpose / likely role:** Project implementation planning reference.
- **Authority level:** **Reference / historical**
- **Notes:** Potentially superseded by `/docs/system/plan.md`; review for overlap before relying on it operationally.

### `/docs/stripe-cloudflare.md`
- **File path:** `docs/stripe-cloudflare.md`
- **Purpose / likely role:** Integration notes for Stripe + Cloudflare behavior/deployment context.
- **Authority level:** **Reference / historical**
- **Notes:** Should be treated as reference unless explicitly aligned with active system governance and Step control.


## `docs/catalogs/`

### `/docs/catalogs/wnyhs_capability_catalog_rev02.md`
- **File path:** `docs/catalogs/wnyhs_capability_catalog_rev02.md`
- **Purpose / likely role:** WNYHS Capability Catalog REV02 baseline defining the internal control-plane capability universe for future Home Assistant validation, local-only viability research, BOM development, solution-package planning, WNYHS Core page planning, installation standards, and approved hardware standards.
- **Authority level:** **Planning / catalog / source-of-truth candidate**
- **Customer-facing:** No.
- **Pricing-approved:** No.
- **Notes:** Used for future BOM and solution package work only; it is not a final hardware commitment document and does not authorize runtime, HubSpot, Stripe, scheduling, route, or UI changes.

## `docs/system/`

### `/docs/system/project.md`
- **File path:** `docs/system/project.md`
- **Purpose / likely role:** Top-level project authority and policy hierarchy.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/agent.md`
- **File path:** `docs/system/agent.md`
- **Purpose / likely role:** Codex agent operating standards and execution expectations.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/plan.md`
- **File path:** `docs/system/plan.md`
- **Purpose / likely role:** Canonical planning/governance process for scoped work.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/guardrails.md`
- **File path:** `docs/system/guardrails.md`
- **Purpose / likely role:** Hard constraints, prohibited changes, and safety boundaries.
- **Authority level:** **System governance**
- **Notes:** Explicitly authoritative per root instructions.

### `/docs/system/step-current.md`
- **File path:** `docs/system/step-current.md`
- **Purpose / likely role:** Current operational context document naming the single controlling Step and preserved Step lineage.
- **Authority level:** **System governance**
- **Notes:** Single current operational context authority; historical Steps are lineage/reference only unless promoted here; always check before execution.

### `/docs/system/master-task-register.md`
- **File path:** `docs/system/master-task-register.md`
- **Purpose / likely role:** Operational task driver and executable task queue; only `ACTIVE` tasks are executable unless a bounded prompt task is explicitly created.
- **Authority level:** **System governance (execution driver)**
- **Notes:** Works with `step-current.md`; ACTIVE authorizes bounded execution but does not authorize task bundling.



### `/docs/specs/visual-brand-system-rev01.md`
- **File path:** `docs/specs/visual-brand-system-rev01.md`
- **Purpose / likely role:** Canonical tactical visual identity contract for WNY Home Security customer-facing surfaces.
- **Authority level:** **Specification contract**
- **Notes:** Added for VISUAL001 + VISUAL002; governs semantic-token-safe branding implementation.

## `docs/codex/`

### `/docs/codex/CODEX_TASK_TEMPLATE.md`
- **File path:** `docs/codex/CODEX_TASK_TEMPLATE.md`
- **Purpose / likely role:** Required Codex run template including version bump, validation, and output format.
- **Authority level:** **Codex workflow**
- **Notes:** Operationally required by current task invocation.

### `/docs/codex/QA_CHECKLIST.md`
- **File path:** `docs/codex/QA_CHECKLIST.md`
- **Purpose / likely role:** QA validation checklist for Codex-delivered changes.
- **Authority level:** **QA / validation**
- **Notes:** Complements template and build/test expectations.


## `docs/runtime/`

### `/docs/runtime/README.md`
- **File path:** `docs/runtime/README.md`
- **Purpose / likely role:** Canonical runtime documentation area definition and scope boundaries.
- **Authority level:** **Operational documentation foundation**
- **Notes:** Introduced by RUNTIME001 as runtime-doc root and guardrail boundary.

### `/docs/runtime/cloudflare_env.md`
- **File path:** `docs/runtime/cloudflare_env.md`
- **Purpose / likely role:** Canonical Cloudflare Pages runtime/environment contract covering deployment model, env ownership, diagnostics, and validation.
- **Authority level:** **Operational runtime contract**
- **Notes:** Authored in RUNTIME002 REV01; marks confirmed assumptions and unknowns needing operator verification.

### `/docs/runtime/stripe_runtime.md`
- **File path:** `docs/runtime/stripe_runtime.md`
- **Purpose / likely role:** Canonical Stripe runtime/payment contract for server-side verification, webhook authority, env ownership, diagnostics, and change governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME003 REV01 with confirmed repo evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/resend_runtime.md`
- **File path:** `docs/runtime/resend_runtime.md`
- **Purpose / likely role:** Canonical outbound Resend runtime contract for ownership boundaries, env vars, flow, diagnostics, and change governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME004 REV01 with explicit UNKNOWN / NEEDS VERIFICATION markers for unverified live settings.

### `/docs/runtime/cloudflare_email_routing.md`
- **File path:** `docs/runtime/cloudflare_email_routing.md`
- **Purpose / likely role:** Canonical inbound Cloudflare Email Routing runtime contract for alias/forwarding ownership and validation procedures.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME004 REV01; separates inbound routing ownership from outbound Resend responsibilities.

### `/docs/runtime/runtime_contract_template.md`
- **File path:** `docs/runtime/runtime_contract_template.md`
- **Purpose / likely role:** Standardized required schema for all runtime contracts.
- **Authority level:** **Operational template standard**
- **Notes:** Required structure for future runtime owner documents.



### `/docs/runtime/scheduling_future_model.md`
- **File path:** `docs/runtime/scheduling_future_model.md`
- **Purpose / likely role:** Canonical future-state scheduling model (state machine, communication consent, ownership split, and bounded future task queue) while preserving current manual-confirmation production posture.
- **Authority level:** **Operational runtime planning contract**
- **Notes:** Added by SCHED001; implementation-neutral guidance only (no runtime behavior changes).

### `/docs/runtime/scheduling_ownership.md`
- **File path:** `docs/runtime/scheduling_ownership.md`
- **Purpose / likely role:** Canonical scheduling ownership contract defining request-vs-confirmed appointment semantics, operator responsibility, communication boundaries, and Google Calendar/HubSpot/Stripe/email runtime boundaries.
- **Authority level:** Runtime contract (operational hardening canon).
- **Primary consumers:** Operators, runtime maintainers, QA/release validation owners.
- **Notes:** Added by RUNTIME007 REV01 with confirmed repo evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/runtime_ownership_map.md`
- **File path:** `docs/runtime/runtime_ownership_map.md`
- **Purpose / likely role:** Runtime systems owner-doc index with status tracking and follow-up task mapping.
- **Authority level:** **Operational runtime index**
- **Notes:** Canonical map for runtime contract rollout sequencing.

### `/docs/runtime/lead_signal_contract.md`
- **File path:** `docs/runtime/lead_signal_contract.md`
- **Purpose / likely role:** Canonical lead-signal runtime contract for `/api/lead-signal` ownership boundaries, payload expectations, failure handling, and diagnostics.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME005 REV01 with confirmed source-backed behavior plus explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/qrlanding_runtime.md`
- **File path:** `docs/runtime/qrlanding_runtime.md`
- **Purpose / likely role:** Canonical QRLanding runtime attribution contract defining placard-route assumptions, requestId lifecycle expectations, Cloudflare analytics interpretation rules, and campaign KPI ladder governance.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME008 REV01 as documentation-only attribution governance; does not implement runtime analytics SDK behavior.



### `/docs/runtime/qr_attribution_reporting.md`
- **File path:** `docs/runtime/qr_attribution_reporting.md`
- **Purpose / likely role:** Canonical weekly QR attribution reporting/review SOP for placard performance, KPI ladder interpretation, directional conversion calculations, decision logging, and evidence capture.
- **Authority level:** **Operational runtime SOP contract**
- **Notes:** Added by RUNTIME011 REV01 as docs-only governance; no runtime behavior or analytics implementation authority.

### `/docs/runtime/request_id_contract.md`
- **File path:** `docs/runtime/request_id_contract.md`
- **Purpose / likely role:** Canonical requestId lifecycle and correlation contract spanning API response, logs, email, and HubSpot propagation boundaries.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME005 REV01; documents confirmed requestId behavior and explicit referenceId relationship unknowns.


### `/docs/runtime/hubspot_properties.md`
- **File path:** `docs/runtime/hubspot_properties.md`
- **Purpose / likely role:** Canonical HubSpot runtime property/enum ownership contract and token naming boundary documentation.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME006 REV01 with confirmed evidence and explicit UNKNOWN / NEEDS VERIFICATION markers.

### `/docs/runtime/hubspot_sync_contract.md`
- **File path:** `docs/runtime/hubspot_sync_contract.md`
- **Purpose / likely role:** Canonical HubSpot sync runtime boundary contract for `/api/lead-signal` orchestration, partial sync behavior, and diagnostics.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by RUNTIME006 REV01 and aligned to HubSpot REV03 API-layer-only write path constraints.


### `/docs/runtime/google_calendar_runtime.md`
- **File path:** `docs/runtime/google_calendar_runtime.md`
- **Purpose / likely role:** Canonical Google Calendar read-only availability runtime contract for scheduling API behavior, env vars, and fallback posture.
- **Authority level:** **Operational runtime contract**
- **Notes:** Added by SCHED-IMPL002; advisory availability only (no booking authority, no writes).

### `/docs/runtime/deployment_validation.md`
- **File path:** `docs/runtime/deployment_validation.md`
- **Purpose / likely role:** Canonical deployment validation SOP defining pre-deployment, deployment, post-deployment, smoke-test, rollback/freeze, and release-readiness operational gates.
- **Authority level:** **Operational runtime SOP contract**
- **Notes:** Added by QA001 REV01 with explicit UNKNOWN / NEEDS VERIFICATION markers for unverified live automation/tooling assumptions.

## `docs/crm/hubspot/`

### `/docs/crm/hubspot/hubspot_kb_rev03.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev03.md`
- **Purpose / likely role:** Active, locked HubSpot contract and architecture constraints.
- **Authority level:** **CRM contract**
- **Notes:** Authoritative and current; governs permitted CRM write path via API.

### `/docs/crm/hubspot/hubspot_kb_rev02.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev02.md`
- **Purpose / likely role:** Prior HubSpot contract revision retained for historical context.
- **Authority level:** **Reference / historical**
- **Notes:** Superseded by `hubspot_kb_rev03.md` unless content explicitly reactivated.

### `/docs/crm/hubspot/hubspot_kb_rev01.md`
- **File path:** `docs/crm/hubspot/hubspot_kb_rev01.md`
- **Purpose / likely role:** Original HubSpot knowledge base revision for historical traceability.
- **Authority level:** **Reference / historical**
- **Notes:** Superseded by later revisions (`rev02`, `rev03`); use only for historical comparison.

## `public/images/home-security/`

### `/public/images/home-security/README.md`
- **File path:** `public/images/home-security/README.md`
- **Purpose / likely role:** Asset-folder usage notes for home-security image resources.
- **Authority level:** **Unknown / needs review**
- **Notes:** Likely local documentation for media management; not part of explicit governance chain.

---

## Summary Metrics

- **Total Markdown files cataloged:** **24**
- **Primary authoritative set recognized in this catalog:**
  - `AGENTS.md`
  - `docs/system/project.md`
  - `docs/system/agent.md`
  - `docs/system/plan.md`
  - `docs/system/guardrails.md`
  - `docs/system/step-current.md`
  - `docs/crm/hubspot/hubspot_kb_rev03.md`
- **Historical/reference HubSpot revisions:**
  - `docs/crm/hubspot/hubspot_kb_rev01.md`
  - `docs/crm/hubspot/hubspot_kb_rev02.md`

## `docs/steps/`

### `/docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- **File path:** `docs/steps/step_102_wnyhs_replication_readiness_hardening_rev_01.md`
- **Purpose / likely role:** Original Step102 hardening context retained for historical traceability.
- **Authority level:** **ARCHIVED / SUPERSEDED**
- **Lineage status:** Superseded by QRLanding Step102 for active Step102 naming.
- **Notes:** Must not be treated as controlling context.

### `/docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- **File path:** `docs/steps/Step102 — WNYHS ScanCode QRLanding Funnel Spec — REV01.md`
- **Purpose / likely role:** QR acquisition funnel implementation Step102 artifact.
- **Authority level:** **CURRENT CONTEXT when selected in step-current**
- **Lineage status:** Current controlling Step102 under CTX-STEP102-QRLANDING-REV01.
- **Notes:** Only controlling when explicitly named by `/docs/system/step-current.md`.

### `/docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- **File path:** `docs/steps/Step101_Home_Security_Funnel_Page_Spec_REV02.md`
- **Purpose / likely role:** Canonical funnel/page structure reference.
- **Authority level:** **SUPPORTING REFERENCE**
- **Lineage status:** Historical baseline + ongoing reference for funnel intent.
- **Notes:** Not a simultaneous controller with current context.

### `/docs/steps/step_103_full_funnel_validation_rev_01.md`
- **File path:** `docs/steps/step_103_full_funnel_validation_rev_01.md`
- **Purpose / likely role:** Full-funnel validation baseline and findings snapshot.
- **Authority level:** **HISTORICAL BASELINE**
- **Lineage status:** Completed validation lineage; regression reference.
- **Notes:** Non-controlling unless explicitly elevated in `step-current.md`.

### `/docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- **File path:** `docs/steps/Step201_Email_Infrastructure_Resend_Integration_REV01.md`
- **Purpose / likely role:** Email architecture Step for isolated Resend scope.
- **Authority level:** **SUPPORTING REFERENCE**
- **Lineage status:** Isolated Step lineage, not active unless explicitly activated.
- **Notes:** Cannot silently override current non-email controlling context.

### `/docs/steps/placeholder.txt`
- **File path:** `docs/steps/placeholder.txt`
- **Purpose / likely role:** Directory retention placeholder.
- **Authority level:** **Reference / non-authoritative**
- **Lineage status:** N/A.
- **Notes:** No execution authority.

## `docs/specs/`

### `/docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- **File path:** `docs/specs/scheduling_architecture_workflow_spec_rev01.md`
- **Purpose / likely role:** Canonical pre-implementation scheduling architecture and operational workflow target consolidating SCHED002–SCHED008.
- **Authority level:** **SUPPORTING SPECIFICATION (implementation target)**
- **Lineage status:** Derived from SCHED001 runtime docs/audit; does not override current production manual-confirmation posture.
- **Notes:** Documentation-only architecture/workflow authority for future bounded SCHED-IMPL tasks.

- `docs/audits/lead_fix001_implementation_rev01.md` — LEAD-FIX001 continuity hardening implementation record.


## `docs/crm/hubspot/`

### `/docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- **File path:** `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`
- **Purpose / likely role:** Canonical HubSpot deal pipeline architecture for WNYHS (stages, movement rules, operator workflow, dedupe boundaries, and protected runtime guardrails).
- **Authority level:** **CRM architecture contract**
- **Notes:** Added by CRM-PIPELINE001 as documentation-only governance prior to CRM-DEAL002B runtime hardening.


- **CRM-CONTRACT001 Note:** `docs/crm/hubspot/crm_pipeline_architecture_rev01.md`, `docs/runtime/hubspot_sync_contract.md`, and `docs/runtime/hubspot_properties.md` now lock the live WNYHS Sales Pipeline ID/stage IDs and production `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID` runtime contract values.

### `/docs/runtime/protected_runtime_contract.md`
- **File path:** `docs/runtime/protected_runtime_contract.md`
- **Purpose / likely role:** Canonical protected production runtime lock contract for lead intake, HubSpot sync, requestId, Stripe verification boundaries, scheduling authority boundaries, and mandatory QA gates.
- **Authority level:** **Operational runtime governance contract**
- **Notes:** Added by GOV-HARDEN002 to prevent drift/regression of known-good production runtime behavior.

### `/docs/runtime/funnel_context_contract_rev01.md`
- **File path:** `docs/runtime/funnel_context_contract_rev01.md`
- **Purpose / likely role:** Canonical funnel context field contract locking approved keys, value domains, and discoveryContext shape.
- **Authority level:** **Runtime/funnel context specification contract**
- **Notes:** Added by GOV-HARDEN002 to prevent context alias drift.

### `/docs/specs/main_funnel_contract_rev01.md`
- **File path:** `docs/specs/main_funnel_contract_rev01.md`
- **Purpose / likely role:** Canonical main funnel route flow and CTA hierarchy lock.
- **Authority level:** **Funnel specification contract**
- **Notes:** Added by GOV-HARDEN002; preserves Request Estimate language until owner-confirmed scheduling.

### `/docs/system/chat_transfer_prompt_gov_harden002.md`
- **File path:** `docs/system/chat_transfer_prompt_gov_harden002.md`
- **Purpose / likely role:** Copy/paste transfer prompt for new chats with current protected runtime, funnel, context, task, and next-step governance.
- **Authority level:** **System operations handoff artifact**
- **Notes:** Added by GOV-HARDEN002 for continuity between sessions.


### `/docs/brand/brand_asset_standards_rev01.md`
- **File path:** `docs/brand/brand_asset_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS brand asset locations, usage, prohibited behavior, and tone requirements.
- **Authority level:** **Brand governance standard**
- **Notes:** Added by STD-LOCK001 to prevent brand asset drift.

### `/docs/brand/page_layout_standards_rev01.md`
- **File path:** `docs/brand/page_layout_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS page layout order, rhythm, typography, and site-consistency rules.
- **Authority level:** **Layout governance standard**
- **Notes:** Added by STD-LOCK001 for public page consistency.

### `/docs/brand/header_footer_standards_rev01.md`
- **File path:** `docs/brand/header_footer_standards_rev01.md`
- **Purpose / likely role:** Locked WNYHS header/nav order, QR nav exception, and footer composition rules.
- **Authority level:** **Navigation/footer governance standard**
- **Notes:** Added by STD-LOCK001 to enforce footer/header parity.

### `/docs/specs/qr_funnel_standards_rev01.md`
- **File path:** `docs/specs/qr_funnel_standards_rev01.md`
- **Purpose / likely role:** Locked QR funnel purpose, nav, copy cleanup, and payload-preservation boundaries.
- **Authority level:** **QR funnel governance standard**
- **Notes:** Added by STD-LOCK001; protects HubSpot/lead API/payload behavior.

### `/docs/specs/public_funnel_standards_rev01.md`
- **File path:** `docs/specs/public_funnel_standards_rev01.md`
- **Purpose / likely role:** Locked public-funnel route roles, CTA discipline, claims guardrails, and allowed language posture.
- **Authority level:** **Public funnel governance standard**
- **Notes:** Added by STD-LOCK001 for visual/funnel execution consistency.



### `/docs/brand/print_system_standards_rev01.md`
- **File path:** `docs/brand/print_system_standards_rev01.md`
- **Purpose / likely role:** Canonical vendor-safe print production standards for WNYHS physical brand materials.
- **Authority level:** **Brand / print production authority**
- **Status:** **Active / canonical**
- **Notes:** Controls physical print production rules for readability, QR reliability, margins, substrate guidance, and claims-safe execution.

### `/docs/brand/brand_asset_authority_rev01.md`
- **File path:** `docs/brand/brand_asset_authority_rev01.md`
- **Purpose / likely role:** Canonical visual asset authority controlling approved WNYHS logo, QR, campaign image, and physical-brand asset usage.
- **Authority level:** **Brand authority**
- **Status:** **Active / canonical**
- **Notes:** Freezes visual identity to prevent drift across digital and physical materials.

### `/docs/brand/print_assets/qr_placard_system_rev01.md`
- **File path:** `docs/brand/print_assets/qr_placard_system_rev01.md`
- **Purpose / likely role:** Canonical QR placard production system for WNYHS local physical scan marketing, including approved placard sizes, layout variants, QR usage rules, copy-safe constraints, placement guidance, and print export/testing requirements.
- **Authority level:** **Brand / print asset production system**
- **Status:** **Active / canonical**
- **Notes:** Controls WNYHS QR placard production rules and approved placard variants.

### `/docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- **File path:** `docs/brand/print_assets/half_sheet_flyer_system_rev01.md`
- **Purpose / likely role:** Canonical half-sheet flyer production system defining approved flyer sizes, variants, copy blocks, QR usage, and source-controlled print workflow boundaries.
- **Authority level:** **Brand / print asset production system**
- **Status:** **Active / canonical**
- **Notes:** Controls WNYHS half-sheet flyer production rules and approved flyer variants.

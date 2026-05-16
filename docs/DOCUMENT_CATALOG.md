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
- **Notes:** Time-sensitive control file; defines one execution controller at a time and should be checked before every implementation task.

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

- **Total Markdown files cataloged:** **23**
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

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

- **Total Markdown files cataloged:** **15**
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

### `/docs/steps/step_103_full_funnel_validation_rev_01.md`
- **File path:** `docs/steps/step_103_full_funnel_validation_rev_01.md`
- **Purpose / likely role:** Historical Step artifact for full-funnel validation authority, scope, findings, and acceptance criteria at time of execution.
- **Authority level:** **Step lineage / historical**
- **Notes:** Preserved for lineage/regression context; not a simultaneous controller unless elevated by `docs/system/step-current.md`.

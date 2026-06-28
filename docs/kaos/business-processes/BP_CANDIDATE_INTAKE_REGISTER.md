# BP Candidate Intake Register

Status: Initial candidate intake register
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001
Workflow Detail Added By: KAOS-BP003

## 1. Purpose

This register records business-process candidate packages and future process candidates before approval.

It is an intake and review queue only. It does not approve process rules, create active KAOS authority, create SOPs, create QA specs, create hook specs, implement automation, or change runtime/source systems.

## 2. Candidate Artifact Sources

Candidate artifacts may come from:

- ChatGPT extraction artifacts
- Codex task closeouts
- PR summaries
- operator notes
- audits
- runtime evidence
- implementation evidence
- external source documents
- customer or project artifacts

Candidate source references must identify the artifact or package when available. If a source reference is unavailable, use `Unknown`.

## 3. Current Candidate Package

### WNYHS BP001A-BP001K Candidate Package

- **Package name:** WNYHS BP001A-BP001K candidate extraction artifacts
- **Source location:** `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/`
- **Source status:** Repo-hosted candidate-only discovery artifacts; not repository authority and not implementation authority
- **Register status:** Candidate Package Received / Pending Review
- **Authority status:** Not repository authority
- **Operator approval status:** Pending
- **Approved process rules:** None
- **Active KAOS rules created:** None
- **Notes:** Full artifact contents were imported as source artifacts only by KAOS-BP005A. Candidate source-package names follow `MANIFEST.md`; earlier register labels may need reconciliation in a future bounded task. Individual process candidates require operator review before approval or promotion.

## 4. BP001A-BP001K Candidate Artifact Manifest

The following rows record the known BP001A-BP001K candidate artifact inventory only.

These entries are not approved process rules, not active KAOS authority, not SOP authority, not QA authority, not hook authority, and not implementation authorization. Each artifact remains in the `Candidate` lifecycle state from `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md` until operator review is completed through a future bounded review task.

| Artifact ID | Artifact Name / Title | Status | Lifecycle State | Source Type | Intended Review Domain | Authority Status | Operator Review Required | Approval Status | Notes / Dependencies |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS-BP001A | WNYHS Business Process Discovery Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001A_Business_Process_Discovery_Sweep.md` | Project Governance / KAOS discovery | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; depends on operator review before any promotion. |
| WNYHS-BP001B | Quote, Install, Payment, Scheduling, and Support Deep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001B_Revenue_Operations_Deep_Sweep.md` | Revenue operations / install lifecycle | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; earlier register label may need reconciliation in a future bounded task. |
| WNYHS-BP001C | HubSpot, Stripe, Scheduling, and Revenue Records Deep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001C_Revenue_Records_Deep_Sweep.md` | Revenue records / payment / scheduling / admin lifecycle | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; any future review must preserve HubSpot REV03, Stripe, scheduling, and protected runtime boundaries. |
| WNYHS-BP001D | BOM, Hardware Qualification, Inventory, Vendor, and Installer Packet Deep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001D_BOM_Hardware_Inventory_Deep_Sweep.md` | BOM / hardware / inventory / vendor / installer packet | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; earlier BOM-related label mapping may need reconciliation in a future bounded task. |
| WNYHS-BP001E | Customer Handoff, Dashboard Training, Warranty, Support, and Add-On Lifecycle Deep Sweep | Pilot reviewed / Revision requested | Operator Revision Requested | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001E_Handoff_Warranty_Support_Deep_Sweep.md` | Customer handoff / support / warranty / expansion lifecycle | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; KAOS-BP004 review status came from the earlier register label mapping and may need reconciliation in a future bounded task; no process approved; no Active KAOS Rule created. |
| WNYHS-BP001F | Website Funnel, Fit Check, Planner, Route Governance, SEO, and Claims-Control Deep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001F_Website_Funnel_SEO_Claims_Deep_Sweep.md` | Website / funnel / route / SEO / claims control | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; any future review must preserve route, SEO, claims, and funnel guardrails. |
| WNYHS-BP001G | Governance, Codex, Repository, Runtime Contracts, QA, Hooks, and RSI Deep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001G_Governance_Codex_QA_Hooks_RSI_Deep_Sweep.md` | Governance / Codex / runtime contracts / QA / hooks / RSI | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; no QA checks, hooks, automations, or runtime enforcement are created by this register entry. |
| WNYHS-BP001H | Cross-Vertical BKAS / Reliable Elder Care / HALO Reconciliation Prep Sweep | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001H_Cross_Vertical_Reconciliation_Prep.md` | Cross-vertical reconciliation prep | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; earlier register label may need reconciliation in a future bounded task. |
| WNYHS-BP001I | Candidate Process Reconciliation | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001I_Candidate_Process_Reconciliation.md` | Candidate process reconciliation | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; earlier register label may need reconciliation in a future bounded task. |
| WNYHS-BP001J | Business Capability Mapping | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001J_Business_Capability_Mapping.md` | Business capability mapping | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; earlier register label may need reconciliation in a future bounded task. |
| WNYHS-BP001K | BPR001 Candidate Register Generation | Candidate / Pending Operator Review | Candidate | Repo-hosted candidate source artifact: `candidate-artifacts/bp001-source-package/WNYHS-BP001K_BPR001_Candidate_Register_Generation.md` | BPR001 candidate register generation | Not repository authority; no active KAOS authority | Yes | Not approved | Source-package name preserved from `MANIFEST.md`; no hooks, automations, runtime enforcement, or active register authority are created by this entry. |

## 5. Future Candidate Table

| Process ID | Process Name | Domain | Business Capability | Business Function | Lifecycle Stage | Source Artifact | Source Confidence | Status | Owner | Operator Approval Status | Approval Date | Current Version | Supersedes | Superseded By | Change Reason | Retirement Reason | Related Runtime Contracts | Related QA Candidates | Related Hook Candidates | Related SOP Candidates | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BP001-PACKAGE | WNYHS BP001A-BP001K Candidate Package | Project Governance / KAOS | Business process discovery | Candidate package intake | Candidate | `docs/kaos/business-processes/candidate-artifacts/bp001-source-package/` | Repo-hosted source package imported by KAOS-BP005A; contents are candidate-only and not repository authority | Candidate Package Received / Pending Review | Operator review required | Pending | Not approved | REV01 intake placeholder | None | None | Initial candidate package source artifacts imported for future review citation | Not retired | Unknown until individual process review | None approved | Candidate only; no hook spec created | Candidate only; no SOP created | Source package row only; no individual process rule is approved. Earlier label mappings may need reconciliation in a future bounded task. |
| BOM-PARTS-QUALIFICATION-CANDIDATE | BOM Parts Qualification | Catalog / Package / Hardware | Internal hardware and BOM evidence control | Determine whether hardware or part candidates have enough evidence for later BOM, catalog, package, quote, installer, or customer-language planning | Operator Revision Requested | WNYHS-BP001E - Package / Offer / BOM / Hardware Candidate Extract | Exact candidate source content missing; review used repo authority and candidate-register metadata only | Pilot reviewed / Revision requested | Owner missing | Revision requested | Not approved | REV01 candidate interpretation | None | None | KAOS-BP004 first pilot review created candidate interpretation and recorded evidence gaps | Not retired | Catalog, quote, CRM, payment, scheduling, runtime, public-claim, dependency boundaries checked; no changes authorized | None approved | Candidate only; no hook spec created | Candidate only; no SOP created | Review record: `BP_REVIEW_KAOS_BP004_BOM_PARTS_QUALIFICATION_REV01.md`; Active KAOS Rule created: No; activation task not created. |

## 6. Review Requirements

Before a future row can move beyond `Candidate`:

1. Use `BP_OPERATOR_REVIEW_TEMPLATE.md` for one process at a time.
2. Complete metadata required by `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`.
3. Identify related runtime contracts, QA candidates, hook candidates, and SOP candidates.
4. Record operator decision.
5. Record evidence reviewed, required edits, prior lifecycle stage, new lifecycle stage, approval status, activation requirement, and any supersession, deprecation, or retirement reason.
6. Promote only through bounded repository governance.
7. Treat `Approved Candidate` as review approval only, not as `Active KAOS Rule`.
8. Create `Active KAOS Rule` status only through a separate bounded activation task.

## 7. Review Decision Recording

Future review tasks must update this register, or a later approved successor register, with:

- candidate process or artifact ID
- prior lifecycle stage
- new lifecycle stage
- operator decision
- decision date
- evidence reviewed
- required edits or revision request
- approval status
- activation required
- activation task or owner-document path
- supersedes / superseded-by relationship, if applicable
- deprecation or retirement reason, if applicable
- confirmation whether an Active KAOS Rule was created

If this register does not yet have columns for the needed fields, the bounded review task may add them before recording the decision.

## 8. No Approved Process Rules

As of KAOS-BP003, no WNYHS BP001A-BP001K process has been reviewed, approved, promoted, activated, deprecated, superseded, or retired by this workflow-standard task, and no Active KAOS Rule has been created.

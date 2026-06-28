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
- **Source location:** External to repository
- **Source status:** Candidate-only discovery artifacts
- **Register status:** Candidate Package Received / Pending Review
- **Authority status:** Not repository authority
- **Operator approval status:** Pending
- **Approved process rules:** None
- **Active KAOS rules created:** None
- **Notes:** Full artifact contents are intentionally not imported by KAOS-BP001 or KAOS-BP002. Individual process candidates require operator review before approval or promotion.

## 4. BP001A-BP001K Candidate Artifact Manifest

The following rows record the known BP001A-BP001K candidate artifact inventory only.

These entries are not approved process rules, not active KAOS authority, not SOP authority, not QA authority, not hook authority, and not implementation authorization. Each artifact remains in the `Candidate` lifecycle state from `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md` until operator review is completed through a future bounded review task.

| Artifact ID | Artifact Name / Title | Status | Lifecycle State | Source Type | Intended Review Domain | Authority Status | Operator Review Required | Approval Status | Notes / Dependencies |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WNYHS-BP001A | WNYHS Business Process Discovery Sweep | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Project Governance / KAOS discovery | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; depends on operator review before any promotion. |
| WNYHS-BP001B | Governance / Authority / Decision Flow Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Governance / authority / decision flow | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; check against system governance before any future approval. |
| WNYHS-BP001C | Website / Funnel / Route / SEO Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Website / funnel / route / SEO | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must preserve route, SEO, claims, and funnel guardrails. |
| WNYHS-BP001D | Sales / Lead / Qualification / Quote Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Sales / lead / qualification / quote | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must check lead-signal, requestId, quote, CRM, and protected runtime boundaries. |
| WNYHS-BP001E | Package / Offer / BOM / Hardware Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Package / offer / BOM / hardware | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must check catalog, package, BOM, pricing, and public-claim boundaries. |
| WNYHS-BP001F | Payment / Deposit / Stripe Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Payment / deposit / Stripe | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must preserve server-side Stripe/payment verification. |
| WNYHS-BP001G | Scheduling / Install / Field Delivery Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Scheduling / install / field delivery | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must preserve owner-confirmed scheduling authority unless separately approved. |
| WNYHS-BP001H | CRM / HubSpot / Revenue Records Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | CRM / HubSpot / revenue records | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must follow HubSpot REV03 and `/api/lead-signal` write boundaries. |
| WNYHS-BP001I | Customer Handoff / Support / Warranty Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Customer handoff / support / warranty | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; any future review must check support, warranty, public-claim, and customer communication boundaries. |
| WNYHS-BP001J | QA / Playwright / Evidence Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | QA / Playwright / evidence | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; no QA checks are created by this register entry. |
| WNYHS-BP001K | Hooks / Runtime Enforcement / Codex Workflow Candidate Extract | Candidate / Pending Operator Review | Candidate | Operator-provided external candidate extraction artifact | Hooks / runtime enforcement / Codex workflow | Not repository authority; no active KAOS authority | Yes | Not approved | Inventory row only; no hooks, automations, or runtime enforcement are created by this register entry. |

## 5. Future Candidate Table

| Process ID | Process Name | Domain | Business Capability | Business Function | Lifecycle Stage | Source Artifact | Source Confidence | Status | Owner | Operator Approval Status | Approval Date | Current Version | Supersedes | Superseded By | Change Reason | Retirement Reason | Related Runtime Contracts | Related QA Candidates | Related Hook Candidates | Related SOP Candidates | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BP001-PACKAGE | WNYHS BP001A-BP001K Candidate Package | Project Governance / KAOS | Business process discovery | Candidate package intake | Candidate | External BP001A-BP001K extraction package | Operator-provided package reference; contents not imported | Candidate Package Received / Pending Review | Operator review required | Pending | Not approved | REV01 intake placeholder | None | None | Initial candidate package received for review structure setup | Not retired | Unknown until individual process review | None approved | Candidate only; no hook spec created | Candidate only; no SOP created | Placeholder package row only; no individual process rule is approved. |

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

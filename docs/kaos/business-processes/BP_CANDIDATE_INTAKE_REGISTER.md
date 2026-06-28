# BP Candidate Intake Register

Status: Initial candidate intake register
Customer-facing: No
Implementation authority: No
Task ID: KAOS-BP001

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
- **Notes:** Full artifact contents are intentionally not imported by KAOS-BP001. Individual process candidates require operator review before approval or promotion.

## 4. Future Candidate Table

| Process ID | Process Name | Domain | Business Capability | Business Function | Lifecycle Stage | Source Artifact | Source Confidence | Status | Owner | Operator Approval Status | Approval Date | Current Version | Supersedes | Superseded By | Change Reason | Retirement Reason | Related Runtime Contracts | Related QA Candidates | Related Hook Candidates | Related SOP Candidates | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BP001-PACKAGE | WNYHS BP001A-BP001K Candidate Package | Project Governance / KAOS | Business process discovery | Candidate package intake | Candidate | External BP001A-BP001K extraction package | Operator-provided package reference; contents not imported | Candidate Package Received / Pending Review | Operator review required | Pending | Not approved | REV01 intake placeholder | None | None | Initial candidate package received for review structure setup | Not retired | Unknown until individual process review | None approved | Candidate only; no hook spec created | Candidate only; no SOP created | Placeholder package row only; no individual process rule is approved. |

## 5. Review Requirements

Before a future row can move beyond `Candidate`:

1. Use `BP_OPERATOR_REVIEW_TEMPLATE.md` for one process at a time.
2. Complete metadata required by `BP_REVIEW_LIFECYCLE_STANDARD_REV01.md`.
3. Identify related runtime contracts, QA candidates, hook candidates, and SOP candidates.
4. Record operator decision.
5. Promote only through bounded repository governance.

## 6. No Approved Process Rules

As of this initial register, no WNYHS BP001A-BP001K process is approved, no candidate has been promoted, and no Active KAOS Rule has been created.

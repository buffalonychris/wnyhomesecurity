# WNYHS-BP001G — Governance, Codex, Repository, Runtime Contracts, QA, Hooks, and RSI Deep Sweep

## 1. Executive Summary

Preserve **WNYHS-BP001F** as candidate output.

This sweep focuses only on execution governance:

- governance hierarchy
- authority chain
- Master Task Register workflow
- repo document ownership
- Codex execution lifecycle
- GitHub PR lifecycle
- Cloudflare validation
- runtime contracts
- QA model
- hooks
- RSI opportunities
- documentation promotion workflow

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.

---

## 2. Master Governance Process Table

| Process ID | Process Name | Domain | Status | Maturity | Priority |
|---|---|---|---|---|---|
| WNYHS-BP001G-001 | Authority Chain Enforcement | Governance | Defined | Partially Defined | High |
| WNYHS-BP001G-002 | Project KB Boundary Control | Governance | Defined | Partially Defined | High |
| WNYHS-BP001G-003 | Repository Source-of-Truth Control | Repository | Defined | Partially Defined | High |
| WNYHS-BP001G-004 | Documentation Promotion Workflow | Governance | Defined | Partially Defined | High |
| WNYHS-BP001G-005 | Master Task Register Dispatch | Task Control | Defined | Partially Defined | High |
| WNYHS-BP001G-006 | Bounded Task Definition | Task Control | Defined | Partially Defined | High |
| WNYHS-BP001G-007 | Codex Work Order Lifecycle | Codex | Defined | Partially Defined | High |
| WNYHS-BP001G-008 | Codex Summary Review | Codex | Defined | Partially Defined | High |
| WNYHS-BP001G-009 | GitHub PR Review | GitHub | Defined | Partially Defined | High |
| WNYHS-BP001G-010 | Cloudflare Deployment Validation | Deployment | Defined | Partially Defined | High |
| WNYHS-BP001G-011 | Runtime Contract Ownership | Runtime | Partial | Identified | High |
| WNYHS-BP001G-012 | QA Validation Model | QA | Partial | Identified | High |
| WNYHS-BP001G-013 | Hook Candidate Governance | Hooks | Partial | Identified | Medium |
| WNYHS-BP001G-014 | RSI Opportunity Capture | RSI | Partial | Identified | Medium |
| WNYHS-BP001G-015 | Governance Conflict Resolution | Governance | Defined | Partially Defined | High |

---

## 3. Governance Hierarchy

Candidate authority chain:

1. Project KB / project instructions
2. Repository governance
3. Current operational context
4. Master Task Register
5. Active bounded task / work order
6. Locked standards/specs
7. Runtime contracts
8. Implementation code
9. GitHub PR review
10. Cloudflare deployment validation

Candidate hard rule:

If a lower authority conflicts with a higher authority, stop and reconcile.

---

## 4. Project KB Boundary Control

| Field | Extraction |
|---|---|
| Purpose | Keep ChatGPT behavior aligned without duplicating repo truth |
| Status | Defined |
| Failure Mode | Project KB becomes a second repo |
| Human Approval | Required for KB changes |
| Automation Risk | Medium |
| Owner Candidate | Project KB architecture docs |

Candidate rule:

Project KB should guide ChatGPT behavior only. It should not become the full project library.

---

## 5. Repository Source-of-Truth Control

| Field | Extraction |
|---|---|
| Purpose | Keep durable truth in repo docs |
| Status | Defined |
| Inputs | Approved decisions, standards, runtime contracts, tasks |
| Outputs | Repo owner docs, task register updates, runtime docs |
| Failure Mode | Chat-derived decision treated as implementation authority |
| Human Approval | Required |

Candidate owner areas:

- `/docs/system/`
- `/docs/runtime/`
- `/docs/specs/`
- `/docs/design-system/`
- `/docs/solution-system/`

---

## 6. Documentation Promotion Workflow

Candidate flow:

Chat idea
→ classification
→ operator approval
→ owner document identified
→ repo doc update candidate
→ Master Task Register task
→ bounded Codex work order
→ PR
→ deployment validation
→ closeout evidence

Candidate failure states:

- idea skips promotion
- no owner doc
- task lacks controlling context
- Codex infers missing rules
- repo docs drift from Project KB

---

## 7. Master Task Register Dispatch

Required candidate fields:

- task ID
- status
- category
- controlling context
- controlling docs
- purpose
- allowed scope
- forbidden scope
- target files
- runtime systems affected
- validation required
- exit criteria

Candidate hard rule:

No implementation work should proceed without a controlling task reference.

---

## 8. Codex Execution Lifecycle

Candidate lifecycle:

1. ChatGPT creates bounded work order.
2. Operator runs Codex locally.
3. Codex executes only assigned scope.
4. Codex returns summary.
5. Operator pastes summary back.
6. ChatGPT reviews summary.
7. Operator handles GitHub PR manually.

Codex may not:

- define business priority
- invent strategy
- expand scope
- bypass claims guardrails
- change protected flows without authorization
- merge PRs

---

## 9. GitHub PR Lifecycle

| Step | Candidate Process |
|---|---|
| Branch created | Codex/local execution |
| Changes reviewed | Operator + ChatGPT summary review |
| PR opened | Human review required |
| PR checked | Scope, files, validation, forbidden changes |
| PR merged | Operator only |
| Closeout evidence | Summary retained as evidence |

Failure states:

- PR includes extra scope
- validation missing
- protected flow changed
- docs/code mismatch
- operator merges without review

---

## 10. Cloudflare Deployment Validation

Candidate validation targets:

- target route renders
- protected routes intact
- funnel still works
- payment routes not broken
- scheduling routes intact
- visual/token standards preserved
- customer-facing copy safe

Human approval required.

---

## 11. Runtime Contract Ownership

Runtime-sensitive areas:

- Stripe payment verification
- HubSpot sync
- scheduling/calendar behavior
- deployment validation
- email/contact flows
- Home Assistant / Tailscale support behavior

Candidate rule:

Runtime behavior must be documented before implementation changes.

---

## 12. QA Validation Model

Candidate QA categories:

- route QA
- funnel QA
- payment QA
- HubSpot QA
- deployment QA
- claims QA
- visual/token QA
- metadata/SEO QA
- install-readiness QA
- support/warranty QA

Candidate failure:

QA exists only as memory, not as repeatable validation evidence.

---

## 13. Hook Architecture

Candidate hooks:

- forbidden claims scanner
- hardcoded color scanner
- route/sitemap mismatch scanner
- noindex/robots policy scanner
- Stripe redirect trust warning
- HubSpot property drift check
- public/private route classification check
- metadata completeness check
- copy lock scanner
- runtime env/secrets exposure check

Status: candidate only.

---

## 14. RSI Opportunities

High-value RSI candidates:

| RSI Candidate | Purpose |
|---|---|
| Task generator | Convert approved decisions into bounded task entries |
| Work order generator | Produce Codex prompts from task register entries |
| Codex summary reviewer | Compare summary against scope |
| Route registry validator | Prevent SEO/funnel drift |
| Runtime contract verifier | Check live behavior against docs |
| Claims scanner | Prevent unsafe marketing copy |
| Token scanner | Prevent hardcoded visual drift |
| Process registry builder | Convert BP001 outputs into BPR001 candidates |
| Dashboard generator | Surface project/control health |
| Evidence pack generator | Collect PR/deployment validation evidence |

---

## 15. Human Approval Gates

- repo promotion
- task activation
- Codex work order release
- protected system changes
- PR merge
- Cloudflare deployment acceptance
- runtime contract updates
- claims/copy approval
- payment logic changes
- HubSpot lifecycle changes
- governance conflict resolution

---

## 16. Processes Requiring Governance Reconciliation

| Process | Missing Definition |
|---|---|
| BPR001 ownership | Where business processes live |
| Runtime contract map | Which docs own Stripe/HubSpot/scheduling |
| QA evidence model | What counts as validation |
| Hook architecture | Which hooks are mandatory |
| RSI backlog | Where improvement candidates live |
| Closeout evidence | How PR/deployment evidence is preserved |
| Project KB addendum | What belongs in pending context |
| Governance conflict tasking | Exact task format for conflicts |

---

## 17. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001H — Cross-Vertical BKAS / Reliable Elder Care / HALO Reconciliation Prep Sweep**

Focus only on:

- reusable WNYHS processes
- processes likely shared with Reliable Elder Care / HALO
- WNYHS-only processes
- elder-tech overlap
- shared CRM/payment/scheduling/admin flows
- shared support/warranty flows
- candidate BPR001 structure
- candidate BPM domain grouping

Candidate extraction only. No SOPs. No Codex prompts. No repo authority.

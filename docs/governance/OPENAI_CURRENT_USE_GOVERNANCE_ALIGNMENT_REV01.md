# OpenAI Current-Use Governance Alignment REV01

Status: ACTIVE GOVERNANCE ALIGNMENT REFERENCE
Document ID: `OPENAI-CURRENT-USE-ALIGNMENT-REV01`
Task ID: `T-GOVEXEC001`
Owner: Project Governance / Architecture Steward
Authority posture: Current-use alignment metadata; governing repository owners remain authoritative
Customer-facing: No
Implementation authority: No
Predecessor/successor: Initial bounded alignment owner; no predecessor or equivalent current-use owner found

## Purpose and Scope

This artifact assesses only OpenAI-related surfaces currently used by WNYHS. A classification describes alignment with repository-first governance; it does not authorize capability use, external access, implementation, deployment, or protected-system work.

Allowed classifications are `ALIGNED`, `PARTIALLY_ALIGNED`, `MISSING`, `OVER_GOVERNED`, and `NOT_APPLICABLE`.

| Current-use surface | Classification | Repository alignment | Remaining boundary |
|---|---|---|---|
| ChatGPT | ALIGNED | Architecture Steward, governance impact assessment, dispatcher, and closeout-review roles are durable and repository-first. | Chat discussion remains non-durable until promoted. |
| ChatGPT Projects | PARTIALLY_ALIGNED | Project instructions/KB are explicitly a ChatGPT control layer and cannot authorize Codex alone. | Hidden or changing Project-layer content requires operator-visible reconciliation when material. |
| Connected apps/plugins currently in use | PARTIALLY_ALIGNED | Capability availability is explicitly not authority; use requires active-task need. | Live enablement, invocation, and usage attribution are not fully represented by repository evidence. |
| Deep Research | PARTIALLY_ALIGNED | Research can enter as evidence and must be reconciled before promotion or implementation. | No dedicated current-use evidence intake owner exists; source provenance and approval remain task-specific. |
| Image generation workflows | PARTIALLY_ALIGNED | Existing workflow boundaries keep candidate assets non-authoritative and require bounded tasks. | This alignment does not verify current tool configuration or approve generation/publication. |
| Codex | ALIGNED | One canonical execution/work-order owner, targeted reads, bounded implementation, validation, draft PR, no-merge, and expanded RSI are defined. | Each run still requires current context and bounded task authority. |
| Repository-based execution | ALIGNED | Repository docs are durable authority; work orders carry detailed implementation contracts and GitHub preserves review evidence. | Merge, deployment, and protected-system actions remain separately authorized facts. |

## Exclusions

Unused Agents SDK, custom GPTs, API agents, MCP apps, and future tools are outside this artifact. Their availability or mention does not create governance, task authority, or an adoption decision.

## Review Rule

Reassess a row only through a bounded governance task when actual WNYHS usage or the controlling repository owner changes. Do not convert a partial alignment finding into implementation work without operator approval and durable authorization.

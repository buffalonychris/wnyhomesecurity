# Milestone + Trigger Protocol — REV01

---

## 0. Purpose

This document defines **when GPT OS must create, update, or revise documentation** during project execution.

Its purpose is to prevent important decisions, milestones, architecture changes, commitments, and reusable ideas from being lost inside chat.

This protocol enforces documentation discipline across all GPT OS-governed projects.

---

## 1. Core Rule

> If a decision changes future execution, it must be documented.

> If a milestone proves progress, it must be recorded.

> If a pattern can be reused, it must be captured.

---

## 2. Documentation Trigger Categories

Documentation must be created or updated when any of the following occur:

1. Milestone achieved
2. Architecture decision made
3. Business decision made
4. Technical stack decision made
5. Workflow rule created
6. Reusable pattern discovered
7. Scope changed
8. Governance rule added or revised
9. Customer-facing claim approved
10. Implementation standard proven

---

## 3. Milestone Achievement Trigger

### Trigger

A milestone is reached when a meaningful unit of work is completed and can be referenced later.

### Examples

- landing page completed
- quote flow working
- payment flow verified
- Stripe session creation working
- scheduling flow completed
- first vertical fully published
- replication test completed

### Required Action

Create or update a milestone document recording:

- what was completed
- date completed
- controlling step/spec
- artifacts produced
- validation result
- remaining risks
- next action

---

## 4. Architecture Decision Trigger

### Trigger

An architecture decision occurs when the system structure, authority chain, data flow, routing model, component model, or deployment pattern changes.

### Examples

- WNYHS becomes canonical vertical template
- reusable funnel architecture is locked
- payment flow is standardized
- CRM data flow is defined
- route structure is finalized
- vertical-specific content separation is required

### Required Action

Create a standalone architecture decision document.

Document must include:

- decision
- reason
- rejected alternatives
- affected systems
- future implications
- enforcement rule

---

## 5. Business Decision Trigger

### Trigger

A business decision occurs when the operator commits to a commercial, operational, offer, brand, pricing, or delivery direction.

### Examples

- offer definition
- pricing model
- target customer
- brand positioning
- service delivery model
- package structure
- sales process

### Required Action

Create a standalone business decision document.

Document must include:

- decision
- reason
- expected outcome
- constraints
- risks
- next action

---

## 6. Tech Stack Decision Trigger

### Trigger

A tech stack decision occurs when a product, tool, platform, service, library, device, or provider is selected, rejected, replaced, or standardized.

### Examples

- HubSpot selected as CRM
- Stripe selected for deposit/payment flow
- Cloudflare Pages selected for deployment
- Home Assistant selected as control plane
- specific hardware standardized
- email provider selected

### Required Action

Create or update the Tech Stack Registry.

Required fields:

- product/service name
- real URL
- purpose
- why chosen
- role in system
- alternatives considered
- pricing/cost notes where relevant
- dependency relationships
- decision status

---

## 7. Workflow Rule Trigger

### Trigger

A workflow rule occurs when a repeatable way of working is identified.

### Examples

- one decision per canvas doc
- no writing blocks in source files
- all Codex prompts require controlling step reference
- chat transfer after major workstream changes
- full replacement files instead of partial patch instructions

### Required Action

Update the relevant doctrine, behavior contract, playbook, or rulebook.

If the rule affects all projects, update GPT OS Doctrine.

If the rule affects assistant behavior, update Assistant Behavior Contract.

If the rule affects project execution, update Execution Playbook.

---

## 8. Reusable Pattern Trigger

### Trigger

A reusable pattern occurs when a process, structure, prompt, workflow, route, component, or business model can be reused across projects or verticals.

### Examples

- WNYHS funnel replicated to other verticals
- standard quote/agreement/deposit/schedule flow
- standard vertical deployment process
- standard customer journey
- standard Chat Transfer Packet

### Required Action

Capture the pattern in a standalone pattern document or rulebook.

Document must include:

- pattern name
- where it was proven
- when to use it
- required inputs
- reusable outputs
- failure modes
- QA checklist

---

## 9. Scope Change Trigger

### Trigger

A scope change occurs when work expands, contracts, changes priority, or changes purpose.

### Examples

- WNYHS shifts from single site to canonical vertical template
- HubSpot expands from WNYHS-only to all verticals
- new verticals enter the replication test
- payment logic changes
- claim language changes

### Required Action

Create or revise a Step document before implementation.

No implementation may proceed until the scope change is documented and accepted.

---

## 10. Governance Rule Trigger

### Trigger

A governance rule occurs when a new constraint is needed to prevent drift, risk, or unsafe execution.

### Examples

- no destructive changes during additive steps
- no new claims without approved copy
- no colors outside semantic token system
- no Stripe client-side trust
- no route deletion without route inventory approval

### Required Action

Update the governing system document:

- project.md
- agent.md
- plan.md
- guardrails.md
- GPT OS Doctrine
- Assistant Behavior Contract

---

## 11. Customer-Facing Claim Trigger

### Trigger

Any customer-facing claim about pricing, reliability, safety, monitoring, guarantees, privacy, uptime, offline behavior, warranties, or outcomes must be approved before use.

### Required Action

Create or update a copy/claims document.

Must include:

- exact claim
- where it appears
- source/supporting rationale
- approved wording
- forbidden wording
- risk notes

---

## 12. Implementation Standard Trigger

### Trigger

When an implementation pattern proves reliable, it must be documented as a standard.

### Examples

- Stripe verification pattern
- Cloudflare deployment pattern
- page extraction pattern
- route allowlist pattern
- noindex transaction page pattern

### Required Action

Add to implementation standard, rulebook, or execution playbook.

---

## 13. Assistant Responsibility

The assistant must proactively detect documentation triggers.

When a trigger is detected, assistant must say:

> “This is documentation-worthy. It should become a standalone doc or update an existing system doc.”

Then identify:

- proposed document name
- document type
- whether it is new or an update
- urgency level

---

## 14. Urgency Levels

### Level 1 — Immediate

Must document before further implementation.

Examples:
- architecture change
- scope change
- payment/security rule
- customer-facing claim

### Level 2 — Same Session

Must document before the session ends.

Examples:
- business decision
- workflow rule
- tech stack decision

### Level 3 — Backlog

Should document when organizing project knowledge.

Examples:
- rough idea
- future improvement
- optional enhancement

---

## 15. Document Naming Standard

Use short, descriptive names.

Preferred format:

`Topic — Purpose — REV##`

Examples:

- `CRM Customer Data Flow — REV01`
- `HubSpot Schema and Plan — REV01`
- `Canonical Funnel Architecture — REV01`
- `Vertical Replication Rulebook — REV01`
- `Stripe Payment Verification Standard — REV01`

Avoid vague names:

- `Notes`
- `Ideas`
- `Misc`
- `Project Stuff`

---

## 16. No Multi-Topic Decision Docs

One major decision = one document.

Do not combine unrelated decisions into one document.

If a conversation produces three decisions, create three documents or one index linking them.

---

## 17. Replacement Rule

When updating documentation:

- do not provide loose snippets
- do not instruct the user to paste sections manually
- produce a clean replacement version or structured revision

---

## 18. Success Condition

This protocol is working when:

- decisions are easy to find
- milestones are traceable
- architecture changes are not lost
- project state survives chat transitions
- future verticals can reuse prior decisions without rediscovery

---

## 19. Bottom Line

> Documentation is not separate from execution.
> Documentation is how GPT OS preserves execution integrity.

---

END OF DOCUMENT


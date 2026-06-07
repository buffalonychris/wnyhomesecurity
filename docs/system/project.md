# WNY Home Security — Project Governance

Status: Active
Scope: Standalone WNY Home Security website and funnel
Repository: buffalonychris/wnyhomesecurity

---

## 1. Authority Chain

When working in this repository, follow this authority chain:

1. ChatGPT Project KB / Project Instructions, as the ChatGPT control layer only
2. Repository system governance (`/docs/system/project.md`, `/docs/system/guardrails.md`, `/docs/system/agent.md`, `/docs/system/plan.md`)
3. Current operational context (`/docs/system/step-current.md`)
4. Master Task Register (`/docs/system/master-task-register.md`)
5. Active bounded task definition or task-specific Codex work order
6. Locked standards and specs (`/docs/specs/`, `/docs/brand/`, `/docs/design-system/`, `/docs/solution-system/`, locked CRM docs)
7. Runtime contracts (`/docs/runtime/`)
8. Implementation code and project-source artifacts
9. GitHub PR review and Cloudflare deployment validation evidence
10. Historical Step docs, as lineage/reference only unless explicitly promoted in `step-current.md`
11. Chat-derived context only after promotion into repository docs or the current bounded work order

Project KB / Project Instructions guide ChatGPT dispatch and prompt construction. They do not authorize Codex implementation by themselves.

Repository docs are the durable source of truth for Codex execution. A Codex run must be anchored to the current operational context plus either an `ACTIVE` Master Task Register task or an explicitly bounded prompt-created work order permitted by higher-authority governance.

If a lower authority conflicts with a higher authority, the higher authority wins.

---

## 2. Project Objective

Deploy and maintain a clean, standalone WNY Home Security website that supports the complete customer path:

Landing → Fit Check → Packages → Optional Planner → Quote Review → Agreement → Deposit → Schedule

The site must remain:

- Clean and single-purpose
- Home-security focused
- Free of hub/other-vertical junk
- On-spec with the current operational context and active bounded task definitions
- Ready for Cloudflare Pages deployment

---

## 3. Required Funnel Routes

### Public / indexable

- `/`
- `/packages`
- `/packages/:id`
- `/discovery`
- `/contact`
- `/support`
- `/privacy`
- `/terms`

### Transaction / noindex

- `/quoteReview`
- `/quotePrint`
- `/agreementReview`
- `/agreementPrint`
- `/payment`
- `/payment/success`
- `/payment/canceled`
- `/schedule`

### Tools / demos

- `/home-security/planner`
- `/demos/ha-gold-dashboard`

---

## 4. Non-Negotiable Preservation Rules

Do not break or remove:

- Precision Planner
- Quote → Agreement → Payment → Schedule chain
- Stripe server-side verification
- Existing quote/agreement verification or hash behavior
- Required transaction routes
- Required public routes
- Email audit-copy behavior once implemented

---

## 5. Forbidden Public Exposure

Do not expose publicly:

- Internal BOMs
- Internal margin math
- Vendor cost breakdowns
- Private implementation notes
- Secrets, API keys, tokens, webhook secrets

---

## 6. Brand Rules

The standalone site must use WNY Home Security branding.

Forbidden public-facing leftovers:

- Reliable Elder Care
- ReliableElderCare
- reliableeldercare.com
- KAEC, unless part of a historical imported artifact that is explicitly being removed or migrated

---

## 7. Version Bump Rule

For all Codex implementation prompts that affect the deployed site, bump the visible site/homepage version badge first.

Reason: the version badge is used to confirm Cloudflare has published merged changes.

---

## 8. Operational Context and Step Lineage Model

`/docs/system/step-current.md` defines exactly one **current operational context** at a time.

- The current operational context may reference historical Step lineage when relevant.
- Historical Step documents remain preserved lineage and validation history.
- Historical Steps are not simultaneous controllers unless explicitly elevated in `step-current.md` as the current context.

Codex/agents must treat historical Step docs as reference lineage, not parallel authority.

If requested work is outside the current operational context, stop and request a context/Step revision.

---

## 9. Conflict Handling

Stop when:

- The requested work is outside the current operational context
- The requested work is neither listed in Active Tasks in `/docs/system/master-task-register.md` nor explicitly created as a bounded prompt/work order permitted by higher-authority governance
- The requested work violates guardrails
- The requested work would expose secrets or private data
- The requested work would change Stripe/payment verification without authorization
- The requested work would delete protected routes/components during an additive step



## 10. Task Execution Gate

Codex execution is allowed only when one of these is true:

- the task is listed in `/docs/system/master-task-register.md` with `Status: ACTIVE`, or
- the task is explicitly created in the current prompt with bounded scope that does not conflict with higher authorities.

If neither condition is met, stop and request a task-register/context update.

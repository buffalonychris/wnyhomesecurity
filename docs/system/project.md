# WNY Home Security — Project Governance

Status: Active
Scope: Standalone WNY Home Security website and funnel
Repository: buffalonychris/wnyhomesecurity

---

## 1. Authority Chain

When working in this repository, follow this authority chain:

1. Repository governance files in `/docs/system/`
2. Current operational context in `/docs/system/step-current.md`
3. Active Tasks in `/docs/system/master-task-register.md`
4. Supporting specs in `/docs/specs/`
5. User task prompt
6. Existing implementation patterns in the codebase

If a lower authority conflicts with a higher authority, the higher authority wins.

---

## 2. Project Objective

Deploy and maintain a clean, standalone WNY Home Security website that supports the complete customer path:

Landing → Fit Check → Packages → Optional Planner → Quote Review → Agreement → Deposit → Schedule

The site must remain:

- Clean and single-purpose
- Home-security focused
- Free of hub/other-vertical junk
- On-spec with the active Step documents
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

- The current operational context may reference a controlling Step.
- Historical Step documents remain preserved lineage and validation history.
- Historical Steps are not simultaneous controllers unless explicitly elevated in `step-current.md` as the current context.

Codex/agents must treat historical Step docs as reference lineage, not parallel authority.

If requested work is outside the current operational context, stop and request a context/Step revision.

---

## 9. Conflict Handling

Stop when:

- The requested work is outside the current operational context
- The requested work is not listed in Active Tasks in `/docs/system/master-task-register.md`
- The requested work violates guardrails
- The requested work would expose secrets or private data
- The requested work would change Stripe/payment verification without authorization
- The requested work would delete protected routes/components during an additive step


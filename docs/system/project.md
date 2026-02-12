# WNY Home Security — Project Operating System

Repository: wnyhomesecurity  
Runtime: Cloudflare (Pages + Functions/Workers where applicable)  
Source Control: GitHub  
AI Execution: Codex (OpenAI Business)  
Payments: Stripe  

This document is authoritative and synthesized from:

- Step001 — NewSite Bootstrap (REV00)
- Step002 — Legacy Removal Plan (REV00)
- Step003 — Premium Theme Pack (REV00)
- Step004 — Stripe Checkout + Schedule Hardening (REV00)
- Step005 — Funnel Copy Lock + Claims Guardrails (REV00)

---

## 1. Authority Chain

1. Step documents (REV-controlled)
2. This `/docs/system/*` operating system
3. Codex execution prompts (must reference a controlling Step)
4. PR review + Cloudflare preview validation

If a request conflicts with a Step document, the Step document wins.  
No silent deviation allowed.

---

## 2. Phase Model

### Phase A — Additive Build (Step001 / Step003 / Step004 / Step005)

- All new work must live under `src/newsite/**`
- No deletions
- No legacy refactors
- No route rewrites to legacy paths
- No global CSS edits outside the theme system
- Branch + PR required
- Do not merge

### Phase B — Approval Gate

Approval requires:

- Funnel clarity
- CTA alignment
- Copy quality acceptable
- Stripe loop verified
- Visual premium standard meets target
- Cloudflare preview walkthrough complete

No deletions permitted in this phase.

### Phase C — Controlled Deletion (Step002)

- Separate destructive-only PR
- Explicit deletion inventory required
- Zero orphan references
- Build + preview validation required

---

## 3. NewSite Directory Contract (Locked)

All NewSite work must live here:

src/
  newsite/
    pages/
    components/
    data/
    theme/
    hooks/
    utils/
    content/

No NewSite code may be placed in legacy folders.

---

## 4. NewSite Route Contract (Locked)

Required routes:

- /newsite
- /newsite/packages
- /newsite/packages/:tier
- /newsite/checkout
- /newsite/success
- /newsite/schedule
- /newsite/quote
- /newsite/agreement

Optional:

- /newsite/demos/*

NewSite routes must function independently of legacy.

---

## 5. Theme Contract (Step001 + Step003)

All NewSite styling must derive from semantic tokens.  
Hardcoded hex values in components are prohibited.

### Semantic Token Contract (Locked)

Every theme must define exactly these variables:

Surfaces:
- --bg
- --surface
- --surface-2

Text:
- --text
- --muted
- --subtle

Structure:
- --border

Accent:
- --accent
- --accent-2

States:
- --success
- --warning
- --danger

Effects:
- --shadow
- --ring

Themes supported:
- onyx (baseline)
- steel
- sand

Theme application method (preferred):
- Use `data-theme` attribute on `<html>`
- Apply theme before initial render to avoid flash/flicker

Theme resolution priority:
1) ?theme= query param  
2) localStorage `wnyhs_theme`  
3) default theme (onyx)

Fail-safe: unknown theme → fallback to default.

---

## 6. Stripe Hardening Contract (Step004)

Stripe must operate in test mode during development.

### Success Must Be Authoritative (Refresh-safe)

Success page must render correctly even if:
- user refreshes
- user opens link in a new tab
- user returns later via bookmark/email

Therefore: success cannot rely only on in-memory client state.

### No “Fake Confirmation”

Do not display “payment confirmed” unless confirmation is real.

Required: server-side verification of the Checkout Session (Cloudflare runtime).  
Recommended pattern:

- Stripe redirects to `/newsite/success?session_id=...`
- Success calls `/api/stripe/verify-session?session_id=...` (server-side)
- Backend returns safe payload (verified boolean + tier + non-sensitive metadata)
- UI renders based on verification result, with a friendly “confirming” state + contact fallback

Secrets & env:
- Stripe secret keys must be stored in Cloudflare environment variables
- No secrets in frontend (publishable key allowed client-side)

Webhooks: OPTIONAL.
If mentioned, label clearly OPTIONAL. Do not require webhooks in REV00.

Logging:
- minimal, safe operational logging (no sensitive values)

---

## 7. Copy Lock + Claims Guardrails (Step005)

### Forbidden Claims (Must Not Appear)

NewSite must not contain language implying:
- “24/7 monitoring”
- “we dispatch police”
- “we respond to alarms”
- “we contact authorities”
- “we guarantee prevention”
- “central station”
- insurance-style promises

### Allowed Positioning (When Accurate)

- local-first reliability (works locally even if internet is down)
- privacy-forward (minimal cloud dependency)
- professional-grade equipment / installation quality
- transparent pricing and clear next steps
- customer-controlled automation and alerts (carefully worded)

### Copy Centralization Contract

Marketing/legal-sensitive copy must be centralized (Step005 target):
- `src/newsite/content/` (or equivalent)
- Key customer-facing copy should not be scattered across JSX files
- Small UI labels (Next/Back) may remain inline

### Copy Revisions

Any change to locked copy requires:
- updating centralized copy file(s)
- bumping a `COPY_REV` integer
- PR description note: “Copy change requested”

### Claims Guardrail Check (When Present)

When the repo includes a `claims:check` script, it should scan:
- `src/newsite/**`
and fail on forbidden phrases.

This docs PR does NOT implement the script.

---

## 8. CI Expectations

Required for PR validation:
- npm ci (if repo uses it)
- npm run build

If claims:check exists:
- npm run claims:check

This PR does not add CI changes.

---

## 9. Definitions

### Clean

NewSite is “Clean” when:
- required routes function
- no console errors
- no legacy regressions
- theme derives from semantic tokens
- build passes
- Cloudflare preview stable

### Approved

“Approved” means:
- funnel clarity + CTA alignment
- copy acceptable
- Stripe loop verified end-to-end
- premium visual standard met
- Cloudflare preview walkthrough complete

---

## 10. Stop Conditions

STOP and request Step revision if any requested change:
- violates additive vs destructive discipline
- introduces forbidden claims
- hardcodes theme colors in components
- exposes secrets
- changes scope beyond Step001–Step005

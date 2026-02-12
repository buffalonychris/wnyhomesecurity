# WNYHS Execution Plan

This is a high-level plan mapped directly to Step001–Step005.

---

## Step001 — NewSite Bootstrap (Additive)

- Build the NewSite vertical under `src/newsite/**`
- Implement required NewSite routes
- No deletions or legacy rewrites

---

## Step003 — Premium Theme Pack (Additive)

- Implement onyx baseline + steel + sand via semantic tokens
- No hardcoded hex values in components
- Theme selection via query + localStorage, applied before render

---

## Step004 — Stripe Checkout + Schedule Hardening (Additive)

- Harden Stripe → success → schedule loop
- Success page refresh-safe via server-side session verification
- No “fake confirmation”
- Secrets in Cloudflare env only
- Webhooks OPTIONAL (not required)

---

## Step005 — Copy Lock + Claims Guardrails (Additive)

- Centralize marketing-sensitive copy under `src/newsite/content/`
- Establish COPY_REV workflow
- Enforce forbidden claims via a repo check (when implemented in its own PR)

---

## Step002 — Legacy Removal (Destructive, Approval Required)

Only after formal approval:
- separate destructive-only PR
- explicit deletion inventory
- canonical route rewiring (minimal)
- zero orphan references
- build + Cloudflare preview walkthrough

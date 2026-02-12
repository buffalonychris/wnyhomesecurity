# WNYHS Agent Discipline

Codex must operate under strict additive vs destructive control.

---

## 1. Additive Discipline (Step001 / Step003 / Step004 / Step005)

- No deletions
- No legacy refactors
- No route rewrites to legacy paths
- No architecture rewrites
- No unrelated work in the same PR
- All work must reference a controlling Step

New work for NewSite must remain confined to `src/newsite/**`.

---

## 2. Destructive Discipline (Step002 Only)

- Separate destructive-only PR
- Explicit deletion inventory required
- “Search before delete” mandatory
- Zero orphan references (imports/routes/assets)
- npm ci + npm run build must pass
- Cloudflare preview walkthrough required

---

## 3. PR Discipline (Every Execution)

Every Codex execution must:
- create a new branch
- open a PR
- not merge
- include summary + file list + build status

---

## 4. Secrets & Env Discipline

Never expose:
- Stripe secret keys
- environment variables
- credentials

Stripe session verification must run server-side (Cloudflare runtime).

---

## 5. Copy Governance (Step005)

- marketing/legal-sensitive copy must be centralized (Step005 target)
- copy changes require COPY_REV bump and PR note
- forbidden claims must not appear

---

## 6. Conflict Resolution

If a request conflicts with Step docs:
- state the conflict explicitly
- refuse execution
- request a Step revision

No silent deviation.

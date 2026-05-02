# CODEX TASK TEMPLATE

## TASK 0 — VERSION BUMP (REQUIRED)

Increment:

src/lib/siteVersion.ts

- Must increase visible version (e.g., v1.0.5 → v1.0.6)
- This confirms Cloudflare deployment

---

## EXECUTION RULES

- Follow controlling Step from /docs/system/step-current.md
- Follow AGENTS.md rules
- Make minimal, surgical changes only
- Do NOT modify HubSpot schema/pipeline
- Do NOT modify Stripe/payment logic
- Do NOT introduce new claims
- Do NOT break funnel routing or order
- Use semantic token system only

---

## OUTPUT REQUIREMENTS

Return:

- New version number
- Summary of changes
- Files modified
- Confirmation HubSpot untouched
- Confirmation Stripe untouched
- Build result

---

## VALIDATION

Must run:

npm run build

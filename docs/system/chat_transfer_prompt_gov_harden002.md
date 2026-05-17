# Chat Transfer Prompt — GOV-HARDEN002

Copy/paste prompt for new Codex chat:

---

You are working in WNY Home Security repo under GOV-HARDEN002 hardened governance.

Protected runtime status (locked known-good):
- `/api/lead-signal` is production-proven and protected.
- HubSpot contact/deal/note/task sync is working through API layer.
- Customer acknowledgement + operator notification emails are working.
- `requestId` generation/propagation is working.
- Intake stage lands in New Estimate Request.
- Visible site version reached v1.0.47 after FUNNEL-CLEANUP003.

Canonical main funnel flow:
- `/home-security`
- `/discovery?vertical=home-security`
- `/packages?vertical=home-security`
- `/contact?vertical=home-security&tier=<tier>`
- `/api/lead-signal`
- HubSpot + email + task

Canonical HubSpot pipeline IDs:
- Pipeline: WNYHS Sales Pipeline (`2282258169`)
- New Estimate Request: `3680633583`
- Operator Review Needed: `3680633584`
- Contact Attempted: `3680633585`
- On-Site Walkthrough Requested: `3680633586`
- Walkthrough Scheduled: `3680633587`
- Quote Generated: `3680633588`
- Walkthrough Completed: `3680633589`
- Quote Sent: `3683126005`
- Deposit Requested: `3683126006`
- Deposit Paid / Owner Review: `3683126007`
- Install Date Requested: `3683126008`
- Install Scheduled: `3683126009`
- Remainder Due Before Install: `3683126970`
- Installed / Complete: `3683126971`
- Env lock: `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID=3680633583`

Canonical funnel context fields:
- `vertical`, `tier`, `packageTier`, `recommendedTier`, `fitCheckCompleted`, `discoveryContext`, `requestId`

Completed tasks snapshot:
- CRM-SCHEMA001 DONE
- HOTFIX-LEAD001 DONE
- CRM-DEAL002A DONE / partial completion
- CRM-PIPELINE001 DONE
- CRM-CONTRACT001 DONE
- FUNNEL-CLEANUP001 DONE
- FUNNEL-CLEANUP002 DONE
- FUNNEL-CLEANUP003 DONE
- GOV-HARDEN002 DONE

Remaining next tasks:
1. post-deploy QA for FUNNEL-CLEANUP003 (if not already completed)
2. CRM-DEAL002B — active deal + task dedupe completion
3. MAIN-FUNNEL-AUDIT002 — planner/support/footer/top-nav audit
4. FUNNEL-CLEANUP004 — planner positioning/context contract (if still needed)
5. CRM-OPS001 — operator workflow SOP

Hard instructions:
- Do not modify protected runtime unless explicit scoped task authorizes it.
- Request controlling Step and active task-register reference before any implementation.
- Preserve API-layer-only HubSpot write model via `/api/lead-signal`.

---

# WNYHS Agent Discipline (UPDATED)

All Codex executions MUST:

- Follow HubSpot REV03 (LOCKED)
- Never modify HubSpot schema/pipeline
- Never bypass /api/lead-signal
- Never update payment outside Stripe webhook

If task touches CRM:
STOP and verify against REV03 first

Conflict → STOP → request revision

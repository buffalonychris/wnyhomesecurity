# WNYHS Guardrails (UPDATED)

## HubSpot Enforcement

HubSpot REV03 governs:
- data flow
- lifecycle stages
- payment state
- deduplication

STRICT RULES:
- API is ONLY write layer
- Stripe webhook ONLY payment authority
- No frontend CRM logic

Forbidden:
- Direct HubSpot writes
- Client-side payment confirmation

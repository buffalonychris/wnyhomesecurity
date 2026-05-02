# WNY Home Security — Project Operating System (UPDATED)

Authority Chain:
1. Step documents
2. /docs/system/*
3. HubSpot REV03 (LOCKED CONTRACT)
4. Codex execution prompts
5. PR validation

## HubSpot Governance (REV03)

HubSpot REV03 is:
- LOCKED
- AUTHORITATIVE
- NON-OPTIONAL

All CRM behavior MUST follow:
- /docs/crm/hubspot/hubspot_kb_rev03.md

Rules:
- ALL writes via /api/lead-signal
- NO direct frontend writes
- NO payment updates outside Stripe webhook
- DEDUPLICATION rules enforced

Violation = system breach

# HubSpot Current Config Inventory REV01

Status: Current Config Inventory
Task: RUNTIME-AUDIT-002
Date: 2026-06-10
Customer-facing: No
Implementation authority: No

---

## Purpose

This document is a read-only HubSpot Current Config Inventory for WNY Home Security CRM ownership, contact/deal properties, pipeline/stage IDs, forms, lists, workflows, and API integration posture.

This inventory records non-secret repo-documented facts and explicitly marks live HubSpot-only areas as `Not inspected` where HubSpot dashboard access, HubSpot API credentials, operator screenshots, or operator exports were unavailable.

No configuration changes were made. No secret values were recorded.

---

## Authority Boundary

HubSpot REV03 is authoritative for HubSpot architecture and write-path governance.

- The API layer is the canonical HubSpot write boundary.
- `/api/lead-signal` remains the canonical lead-intake and HubSpot sync boundary.
- Frontend and client logic must not write directly to HubSpot.
- This inventory does not authorize HubSpot schema changes, property changes, pipeline changes, stage changes, workflow changes, token changes, code changes, runtime behavior changes, or protected-system changes.

---

## Evidence Inspected

Repo documentation inspected:

- `docs/crm/hubspot/hubspot_kb_rev03.md`
- `docs/runtime/runtime_ownership_map.md`
- `docs/runtime/hubspot_properties.md`
- `docs/runtime/hubspot_sync_contract.md`
- `docs/runtime/lead_signal_contract.md`
- `docs/runtime/request_id_contract.md`
- `docs/runtime/protected_runtime_contract.md`

Repo source paths inspected as read-only evidence:

- `functions/api/lead-signal.ts`
- `api/lead-signal.ts`
- `api/_hubspot.ts`
- `src/lib/hubspotLeadSignal.ts`

Live HubSpot areas were `Not inspected` because no HubSpot dashboard access, HubSpot API credential, operator screenshot, or operator export was available in this task.

---

## Inventory Summary

| Area | Inventory status | Notes |
| --- | --- | --- |
| HubSpot account / portal identity | Not inspected | Requires HubSpot dashboard access or operator export. |
| CRM object model | Repo-documented partial inventory | Contacts, deals, notes, tasks, and deal-to-contact associations are referenced by runtime contracts and source evidence. Live object configuration was not inspected. |
| Contact properties | Repo-documented partial inventory | Property names are listed below from contracts/source. Live schema, field types, labels, options, and required-state were not inspected. |
| Deal properties | Repo-documented partial inventory | Property names are listed below from contracts/source. Live schema, field types, labels, options, and required-state were not inspected. |
| Pipeline and stage IDs | Repo-documented inventory | Contracted WNYHS Sales Pipeline and stage IDs are listed below. Live HubSpot pipeline dashboard was not inspected. |
| Forms | Not inspected | Requires HubSpot dashboard access or operator export. |
| Lists | Not inspected | Requires HubSpot dashboard access or operator export. |
| Workflows | Not inspected | Requires HubSpot dashboard access or operator export. |
| Integration tokens / env bindings | Repo-documented names only | Names are listed without values. Live values and scopes were not inspected. |
| API-layer touchpoints | Repo-documented inventory | `/api/lead-signal` remains the canonical boundary. |

---

## Object Model

Repo-documented HubSpot objects and related operations:

- Contacts: search, create, update.
- Deals: search, create, update.
- Notes: create.
- Tasks: search, create.
- Associations: deal-to-contact association.

Live object schema, object customization, required fields, duplicate rules, and object-level permissions were `Not inspected` because live HubSpot access or an operator export was unavailable.

---

## Contact Property Names

The following contact property names are repo-documented. Live HubSpot schema verification was `Not inspected`.

Core/contact fields:

- `email`
- `firstname`
- `lastname`
- `phone`
- `address`
- `city`
- `state`
- `zip`
- `lifecyclestage`
- `hs_lead_status`

WNYHS custom/contact fields:

- `wny_preferred_contact_method`
- `wny_best_time_to_contact`
- `wny_contact_notes`
- `wny_preferred_walkthrough_window`
- `wny_vertical_interest`
- `wny_funnel_stage_current`
- `wny_walkthrough_interest`
- `wny_last_walkthrough_request_at`
- `wny_first_landing_page`
- `wny_first_touch_url`
- `wny_last_touch_url`
- `wny_first_touch_date`
- `wny_lead_source_platform`
- `wny_lead_source_detail`
- `wny_utm_source`
- `wny_utm_medium`
- `wny_utm_campaign`
- `wny_utm_content`
- `wny_utm_term`
- `wny_gclid`
- `wny_msclkid`

Repo-documented enum/value domains include:

- `wny_preferred_contact_method`: `sms`, `phone`, `email`, `any`, `unknown`
- `wny_vertical_interest`: `home_security`, `unknown`
- `wny_walkthrough_interest`: `requested`, `unknown`
- `wny_funnel_stage_current`: `landing_viewed`, `quote_generated`, `unknown`
- `wny_best_time_to_contact`: `anytime`, `morning`, `afternoon`, `evening`

No HubSpot property was created, edited, deleted, renamed, or promoted by this inventory.

---

## Deal Property Names

The following deal property names are repo-documented. Live HubSpot schema verification was `Not inspected`.

Core/deal fields:

- `pipeline`
- `dealstage`
- `dealname`
- `amount`

WNYHS custom/deal fields:

- `wny_deal_vertical`
- `wny_deal_path`
- `wny_path_choice`
- `wny_request_id`
- `wny_walkthrough_requested`
- `wny_walkthrough_requested_at`
- `wny_walkthrough_status`
- `wny_walkthrough_preferred_date_1`
- `wny_walkthrough_preferred_time_window_1`
- `wny_walkthrough_notes`
- `wny_onsite_quote_required`
- `wny_install_address`
- `wny_install_city`
- `wny_install_state`
- `wny_install_zip`
- `wny_install_status`
- `wny_quote_ref`
- `wny_quote_status`

No HubSpot deal property was created, edited, deleted, renamed, or promoted by this inventory.

---

## Pipeline And Stage IDs

Repo-documented pipeline:

- Pipeline name: `WNYHS Sales Pipeline`
- Pipeline ID: `2282258169`

Repo-documented stages:

| Stage name | Stage ID |
| --- | --- |
| New Estimate Request | `3680633583` |
| Operator Review Needed | `3680633584` |
| Contact Attempted | `3680633585` |
| On-Site Walkthrough Requested | `3680633586` |
| Walkthrough Scheduled | `3680633587` |
| Quote Generated | `3680633588` |
| Walkthrough Completed | `3680633589` |
| Quote Sent | `3683126005` |
| Deposit Requested | `3683126006` |
| Deposit Paid / Owner Review | `3683126007` |
| Install Date Requested | `3683126008` |
| Install Scheduled | `3683126009` |
| Remainder Due Before Install | `3683126970` |
| Installed / Complete | `3683126971` |

Live HubSpot pipeline/stage dashboard verification was `Not inspected` because HubSpot access or an operator export was unavailable.

No HubSpot pipeline or stage configuration was changed.

---

## Forms, Lists, And Workflows

| Area | Status | Reason |
| --- | --- | --- |
| HubSpot forms | Not inspected | Requires HubSpot dashboard access or operator export. |
| HubSpot lists | Not inspected | Requires HubSpot dashboard access or operator export. |
| HubSpot workflows | Not inspected | Requires HubSpot dashboard access or operator export. |

No HubSpot form, list, or workflow was created, changed, deleted, enabled, disabled, or reconfigured.

---

## Integration Token And Environment Binding Names

Repo-documented names only:

- `HUBSPOT_PRIVATE_APP_TOKEN`
- `HUBSPOT_ACCESS_TOKEN`
- `HUBSPOT_ESTIMATE_INITIAL_STAGE_ID`
- `PUBLIC_SITE_URL`
- `NODE_ENV`

No secret values were recorded. Live variable presence, token scopes, token labels, token status, and token values were `Not inspected` because HubSpot and deployment environment access were unavailable.

---

## API-Layer Touchpoints

Repo-documented API boundary:

- Canonical endpoint: `/api/lead-signal`
- Cloudflare Pages Functions source path: `functions/api/lead-signal.ts`
- Compatibility/API source path: `api/lead-signal.ts`
- HubSpot helper source path: `api/_hubspot.ts`
- Client submission helper: `src/lib/hubspotLeadSignal.ts`

Repo-documented HubSpot API operation categories:

- Contact search/create/update.
- Deal search/create/update.
- Deal-to-contact association.
- Note creation.
- Task search/create.

This inventory preserves `/api/lead-signal` as the canonical boundary and does not authorize any direct frontend/client write path to HubSpot.

---

## Not Inspected Areas

The following areas remain `Not inspected`:

- HubSpot account/portal identity.
- Live contact property labels, field types, options, required-state, permissions, and usage.
- Live deal property labels, field types, options, required-state, permissions, and usage.
- Live pipeline/stage dashboard state.
- HubSpot forms.
- HubSpot lists.
- HubSpot workflows.
- Private app token scopes, status, label, and rotation metadata.
- HubSpot audit log, workflow enrollment history, and API call history.

Reason: no HubSpot dashboard access, HubSpot API credential, operator screenshot, or operator export was available for this task.

---

## Protected-System Confirmation

No configuration changes were made.

No secret values were recorded.

No HubSpot schema, property, pipeline, stage, form, list, workflow, token, API write-path, runtime behavior, or code changes were made.

`/api/lead-signal` remains the canonical HubSpot write boundary under HubSpot REV03.

Stripe, Cloudflare, Resend, Google Workspace, deployment, DNS, route, UI, and runtime systems were untouched.

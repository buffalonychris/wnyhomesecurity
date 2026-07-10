# WNYHS Adaptive Notification Configuration Questionnaire REV01

Purpose: A single adaptive questionnaire for residential, regular-hours small business, ad hoc-hours small business, and commercial/property-management deployments. This document defines the business process and data capture requirements only. It does not authorize website, HubSpot, Home Assistant, or runtime implementation.

# Document Status

| Status | Approved reusable notification configuration business process |
| --- | --- |
| Customer-facing | Potentially, after a future website/customer-experience implementation task |
| Implementation authority | No website, CRM, runtime, or Home Assistant implementation authority |
| Primary owner | WNY Home Security |
| Future systems | WNYHomeSecurity.com, HubSpot CRM, Home Assistant deployment records |

# 1. How to Use This Questionnaire

[ ] Complete the deployment prerequisites before starting this questionnaire.

[ ] Select one install type. The form then reveals only the relevant conditional branch.

[ ] Complete the Shared Core for every installation.

[ ] Complete the one applicable install-type branch, plus any optional advanced blocks that apply.

[ ] Review the generated Notification Profile with the customer or authorized decision-maker.

[ ] Do not enable production notification automations until live validation and approval are complete.

[ ] Treat all customer and recipient information as protected operational data.

# 2. Required Prerequisites

These items belong to the upstream deployment process and are not recreated here. The questionnaire consumes them as approved inputs.

[ ] Approved site profile exists.

[ ] Approved people and role register exists.

[ ] Approved Building Mode definitions exist where applicable.

[ ] Verified device and event catalog exists.

[ ] Known notification-capable devices and entities are documented.

[ ] Primary customer decision-maker is identified.

[ ] WNYHS service-team contacts are identified.

[ ] Customer consent to configure notifications has been recorded.

# 3. Install Type Selection

[ ] Residential

[ ] Small Business - Regular Business Hours

[ ] Small Business - Ad Hoc Business Hours

[ ] Commercial / Property Management

Selected install type: _______________________________________________________

Customer / site name: _______________________________________________________

Job / deal identifier: _______________________________________________________

Questionnaire version: _______________________________________________________

Prepared by: _______________________________________________________

Date: _______________________________________________________

# 4. Adaptive Branching Rules

| Install Type | Required Branch | Optional Blocks | Primary Logic Driver |
| --- | --- | --- | --- |
| Residential | Residential Branch | Caregiver/senior safety; vacation; environmental | Household modes and occupancy |
| Small Business - Regular Hours | Regular-Hours Business Branch | Multi-manager; holiday exceptions; service routing | Business schedule plus Open/Closed state |
| Small Business - Ad Hoc Hours | Ad Hoc-Hours Business Branch | Event/service modes; consultation; late access | Building Mode |
| Commercial / Property Management | Commercial / Property Branch | Portfolio routing; tenant separation; escalation tiers | Zones, sites, roles, and operating states |

# Part I - Shared Core

## 5. Notification Objectives

What should the notification system help the customer do?: __________________________________________________

Which events require immediate action?: __________________________________________________

Which events are awareness-only?: __________________________________________________

Which events should remain service-team only?: __________________________________________________

What notification noise has the customer experienced before and wants to avoid?: __________________________________________________

What would make the notification system feel useful rather than overwhelming?: __________________________________________________

## 6. Recipient and Role Decisions

Use logical roles first. Individual names and technical notify services are mapped later during implementation.

| Role | Name(s) | Critical | High | Normal | Low |
| --- | --- | --- | --- | --- | --- |
| Primary owner / decision-maker |  |  |  |  |  |
| Family / household |  |  |  |  |  |
| Staff / employees |  |  |  |  |  |
| Managers / supervisors |  |  |  |  |  |
| Property manager |  |  |  |  |  |
| Maintenance team |  |  |  |  |  |
| WNYHS service team |  |  |  |  |  |
| Implementation test group |  |  |  |  |  |
| Emergency contact (non-dispatch) |  |  |  |  |  |
| Other approved role |  |  |  |  |  |

## 7. Delivery Channels

[ ] Home Assistant Companion push

[ ] SMS (future/optional)

[ ] Email (future/optional)

[ ] In-app persistent notification

[ ] Service-team internal channel

[ ] Other approved channel

Primary channel: _______________________________________________________

Critical-event backup channel: _______________________________________________________

Push should remain the default unless the customer profile explicitly authorizes another channel. SMS/email implementation requires separate runtime and consent controls.

## 8. Priority Matrix

| Priority | Definition | Immediate? | Quiet Hours | Example |
| --- | --- | --- | --- | --- |
| Critical | Immediate material risk or failure to secure | Yes | Deliver | Lock failure, confirmed leak |
| High | Time-sensitive security or operational event | Yes | Deliver | Doorbell, after-hours opening |
| Normal | Important but can wait | Usually | Delay if configured | Camera offline, door left open |
| Low | Maintenance or informational | No | Delay | Low battery, routine maintenance |

Customer-approved changes to priority definitions: _______________________________________________________

## 9. Quiet Hours

[ ] Quiet Hours enabled

Start time: _______________________________________________________

End time: _______________________________________________________

[ ] Critical notifications deliver immediately

[ ] High notifications deliver immediately

[ ] Normal notifications delay until Quiet Hours end

[ ] Low notifications delay until Quiet Hours end

Exceptions / special dates: _______________________________________________________

## 10. Owner Visibility and Service Visibility

| Event Class | Owner Visibility | Service Visibility | Customer Preference Needed? |
| --- | --- | --- | --- |
| Customer operational events | Yes | Optional | Sometimes |
| Technical system events | No/Optional | Yes | Yes |
| Critical safety/property events | Yes | Yes | No |
| Maintenance/testing events | No | Yes | No |
| Recovery/restored events | Optional | Yes | Yes |

## 11. Event-by-Event Notification Decisions

Complete one row for every verified event in the deployment event catalog. Use the Notification Data Contract fields wherever applicable.

| Event | Enable? | Priority | Owner Vis. | Service Vis. | Recipients | Quiet Hours | Repeat/Cooldown | Recovery? | Channel |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |

## 12. Repeat, Cooldown, and Escalation

Which events should never repeat?: _____________________________________________

Which events use cooldown only?: _____________________________________________

Which unresolved events may repeat?: _____________________________________________

Maximum repeat count by event?: _____________________________________________

Who receives escalation after repeats are exhausted?: _____________________________________________

Should acknowledgement stop escalation in a future phase?: _____________________________________________

What conditions reset an event sequence?: _____________________________________________

## 13. Recovery / Restored Notifications

[ ] Send recovery for critical outages

[ ] Send recovery for high-priority outages

[ ] Send recovery for normal outages

[ ] Do not send recovery during Maintenance Mode

[ ] Do not send recovery during Installer Mode

[ ] Do not send recovery during approved update/restart windows

Recovery wording preference: _______________________________________________________

# Part II - Conditional Install-Type Branches

## 14. Residential Branch

Show only when Residential is selected.

Which household members receive each event class?: ____________________________________________

Are there children, caregivers, or senior-safety considerations?: ____________________________________________

Which modes apply: Home, Away, Sleep, Vacation, Guest, Maintenance?: ____________________________________________

Should doorbell/package alerts behave differently when someone is home?: ____________________________________________

Should indoor motion/camera notifications be disabled while occupied?: ____________________________________________

What privacy restrictions apply to indoor cameras or images?: ____________________________________________

Who should receive leak, freezer, sump, temperature, smoke, or CO events?: ____________________________________________

What should change during travel or vacation?: ____________________________________________

Are guest or caregiver notification profiles needed?: ____________________________________________

Who receives service/system-health notifications?: ____________________________________________

## 15. Small Business - Regular Business Hours Branch

Show only when Small Business - Regular Business Hours is selected.

What are normal business hours by day?: ____________________________________________

Who is responsible for opening and closing?: ____________________________________________

How are holidays and temporary schedule changes handled?: ____________________________________________

Which events notify during Open hours?: ____________________________________________

Which events notify during Closed hours?: ____________________________________________

Who receives after-hours opening, motion, and lock alerts?: ____________________________________________

Should late staff access be treated as expected or exceptional?: ____________________________________________

Are different manager and employee routing profiles required?: ____________________________________________

Should scheduled auto-lock occur at closing?: ____________________________________________

What happens when the business remains open after scheduled closing?: ____________________________________________

## 16. Small Business - Ad Hoc Business Hours Branch

Show only when Small Business - Ad Hoc Business Hours is selected. Building Mode should normally be the primary policy driver.

Which Building Modes apply?: ____________________________________________

Who may change each Building Mode?: ____________________________________________

What does each mode mean operationally?: ____________________________________________

Which mode represents the secure/closed state?: ____________________________________________

What secure-building workflow runs when entering Closed?: ____________________________________________

How should Consultation or Event/Service modes change notifications?: ____________________________________________

How should late-night legitimate occupancy be handled?: ____________________________________________

Which notifications must remain active during occupied special events?: ____________________________________________

What is the fallback if staff forget to change Building Mode?: ____________________________________________

Should a scheduled reminder prompt staff to review mode status?: ____________________________________________

## 17. Commercial / Property Management Branch

Show only when Commercial / Property Management is selected.

Is this a single site, multi-building site, or portfolio deployment?: ____________________________________________

Which sites/zones share notification policy?: ____________________________________________

Which events route to property management, tenants, maintenance, or ownership?: ____________________________________________

Are tenant notifications separated from common-area notifications?: ____________________________________________

What escalation tiers apply?: ____________________________________________

Are on-call schedules required?: ____________________________________________

How are maintenance/vendor access events handled?: ____________________________________________

Which events are site-specific versus portfolio-wide?: ____________________________________________

Who approves recipient changes when employees or tenants change?: ____________________________________________

What reporting or audit trail is required?: ____________________________________________

# Part III - Output Data Contract

## 18. Questionnaire Submission Record

| Field | Required | Description |
| --- | --- | --- |
| submission_id | Yes | Unique immutable submission identifier |
| questionnaire_version | Yes | Version used for the submission |
| install_type | Yes | One of the four supported install types |
| customer_id | Yes | Customer/contact identifier |
| company_id | Conditional | Company identifier for business/commercial installs |
| deal_or_job_id | Yes | Associated deal/job identifier |
| site_id | Yes | Site/location identifier |
| prerequisite_status | Yes | Whether upstream records are complete |
| recipient_roles | Yes | Approved logical recipient groups |
| event_decisions | Yes | Structured list of event-level decisions |
| quiet_hours | Conditional | Start/end and exceptions |
| priority_overrides | Optional | Customer-approved deviations |
| channel_preferences | Yes | Push/SMS/email/in-app choices |
| recovery_preferences | Yes | Recovery notification rules |
| escalation_preferences | Optional | Repeat and escalation choices |
| customer_approval_status | Yes | Draft/approved/rejected |
| approved_by | Conditional | Authorized approver |
| approved_at | Conditional | Approval timestamp |
| implementation_status | Yes | Not started/validation/implemented/tested/handoff |
| profile_version | Yes | Generated customer Notification Profile version |

## 19. Event Decision Object

| Field | Required | Example |
| --- | --- | --- |
| event_id | Yes | door_left_open |
| event_name | Yes | Door Left Open |
| enabled | Yes | true |
| trigger_reference | Yes | Verified event/entity reference |
| applicable_modes | Yes | Closed |
| priority | Yes | High |
| owner_visibility | Yes | Yes |
| service_visibility | Yes | Yes |
| recipient_roles | Yes | Owner Primary, Service Team |
| quiet_hours_behavior | Yes | Immediate |
| cooldown_seconds | Optional | 90 |
| max_repeats | Optional | 5 |
| recovery_notification | Yes | Yes |
| delivery_channels | Yes | Push |
| message_template_id | Yes | door_left_open_v1 |
| dashboard_destination | Optional | Security view |
| future_acknowledgement | Yes | No |
| customer_notes | Optional | Customer-specific decision |

## 20. Generated Outputs

[ ] Human-readable Customer Notification Profile

[ ] Structured questionnaire submission record

[ ] Event-routing matrix

[ ] Recipient-role matrix

[ ] Live-validation checklist

[ ] Implementation-ready configuration specification

[ ] Customer approval/signoff record

[ ] Revision history and change record

# Part IV - Approval and Signoff

## 21. Internal Review

WNYHS reviewer: _______________________________________________________

Review date: _______________________________________________________

[ ] Prerequisites verified

[ ] Routing decisions complete

[ ] Priority and Quiet Hours complete

[ ] Event catalog reviewed

[ ] No unsupported claims or channels included

[ ] Ready for customer review

## 22. Customer Approval

Authorized customer approver: _______________________________________________________

Title / role: _______________________________________________________

Approval date: _______________________________________________________

[ ] I approve the notification recipients and event decisions documented in this profile.

[ ] I understand notifications are not monitored emergency dispatch services.

[ ] I understand delivery depends on device, network, and service availability.

[ ] I understand changes after approval require profile revision and revalidation.

Customer signature: _______________________________________________________

WNYHS representative signature: _______________________________________________________

## 23. Implementation and Handoff Signoff

[ ] Live recipient tests completed

[ ] All enabled events tested where practical

[ ] Quiet Hours behavior tested

[ ] Recovery behavior tested

[ ] Customer training completed

[ ] Temporary implementation recipients removed or approved

[ ] Final Notification Profile delivered

Implementation completion date: _______________________________________________________

Customer acceptance date: _______________________________________________________

# Part V - Future Web and HubSpot Requirements

## 24. Adaptive Web Form Requirements

[ ] One master schema with conditional sections.

[ ] Install Type controls branch visibility.

[ ] Progress indicator and save/resume support.

[ ] Prefill known customer, company, deal/job, and site fields.

[ ] Do not expose technical entity IDs to customers.

[ ] Allow operator-assisted completion and customer self-service completion.

[ ] Support draft, review, approval, and revision states.

[ ] Generate a human-readable summary before submission.

[ ] Require explicit approval before implementation.

[ ] Store form version and answer version for auditability.

[ ] Preserve requestId/idempotency controls for submission processing.

[ ] Meet accessibility and mobile usability requirements.

[ ] Do not directly activate Home Assistant automations from form submission.

## 25. HubSpot Mapping Requirements

Final HubSpot property names and object architecture require a separate protected-system design task. The list below defines business requirements, not executable CRM mapping authority.

| Data Category | Recommended CRM Location | Purpose | Notes |
| --- | --- | --- | --- |
| Customer identity | Contact | Person and communication data | Avoid duplicate free-text storage |
| Business identity | Company | Business/property relationship | Conditional for residential |
| Job/install record | Deal or governed custom object | Deployment lifecycle | Must link to site and customer |
| Site/location | Governed site record/custom object | Physical installation context | Required for multi-site installs |
| Questionnaire status | Deal/custom object properties | Draft/approved/implemented state | Reportable fields |
| Submission payload | Versioned attachment or custom object | Complete structured answers | Do not rely only on notes |
| Key preferences | Structured properties | Reporting and automation | Examples: install type, quiet hours, channels |
| Approval record | Deal/custom object/engagement | Evidence of customer approval | Store timestamp and approver |
| Generated profile | Attachment/document reference | Human-readable authority record | Version controlled |
| Implementation status | Deal/custom object properties | Validation and handoff state | Hard-gate reporting |

## 26. Submission Workflow Requirements

[ ] Resolve customer/contact, company, deal/job, and site association before write.

[ ] Validate required fields and install-type branch completeness.

[ ] Create one immutable submission record per submitted version.

[ ] Update reportable status properties without overwriting historical submissions.

[ ] Generate Customer Notification Profile from approved answers.

[ ] Create internal review task when submission is ready.

[ ] Block implementation until approval and live validation gates are satisfied.

[ ] Record implementation completion, training, and handoff separately.

[ ] Protect consent, recipient, and contact details as customer data.

[ ] Use server-side validation and idempotent submission handling.

## 27. Protected-System Boundaries

[ ] No HubSpot properties, workflows, forms, or objects are created by this document.

[ ] No website route or form is authorized by this document.

[ ] No Home Assistant automation is authorized by this document.

[ ] No SMS/email provider or runtime integration is authorized by this document.

[ ] Implementation requires separate bounded tasks with controlling runtime and CRM contracts.

[ ] Customer responses must not expose secrets, lock codes, credentials, or private tokens.

# 28. Revision and Governance

Document owner: _______________________________________________________

Approved revision: _______________________________________________________

Approval date: _______________________________________________________

Supersedes: _______________________________________________________

This REV01 questionnaire was promoted from the operator-approved DOCX source through bounded task `HA-NOTIFY002-NOTIFICATION-GOVERNANCE-AND-BKLF-PROFILE-PROMOTION-001` as reusable business-process authority. Website and HubSpot implementation must remain separate protected-system tasks. Later website and HubSpot revisions may produce REV02 or successor documents; future systems must not silently alter REV01 historical meaning.

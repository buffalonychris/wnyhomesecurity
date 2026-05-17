# Main Funnel Contract — REV01

Date (UTC): 2026-05-17  
Task: GOV-HARDEN002

## Purpose

Lock canonical main funnel route flow and CTA hierarchy.

## Canonical Flow

`/home-security`  
→ `/discovery?vertical=home-security`  
→ `/packages?vertical=home-security`  
→ `/contact?vertical=home-security&tier=<tier>`  
→ `/api/lead-signal`  
→ HubSpot + email + task

## Canonical Route Roles

- `/home-security` = primary acquisition funnel entry
- `/discovery` = fit check and recommendation context capture
- `/packages` = package comparison and package selection
- `/contact` = canonical intake form
- `/api/lead-signal` = protected server-side intake runtime

## Canonical CTA Hierarchy

### Homepage

- Primary: **Find The Right System** → `/discovery?vertical=home-security`
- Secondary: **View Packages** → `/packages?vertical=home-security`
- Tertiary: **Request On-Site Estimate** → `/contact?vertical=home-security`

### Packages

- **Select Bronze** → `/contact?vertical=home-security&tier=bronze`
- **Select Silver** → `/contact?vertical=home-security&tier=silver`
- **Select Gold** → `/contact?vertical=home-security&tier=gold`

### Discovery Completion

- **Continue With Recommendation** → `/contact?vertical=home-security&tier=<recommendedTier>&recommended=<recommendedTier>&fit=complete`
- **Compare Packages** → `/packages?vertical=home-security`
- **Request Estimate** → `/contact?vertical=home-security`

## Scheduling Language Rule

Do not use “Schedule” language unless the route performs actual scheduling.

Use “Request Estimate” or “Request On-Site Estimate” until scheduling is customer-confirmed only after owner approval.

## Change Control

Any funnel routing or CTA hierarchy change requires explicit Step/task scope before modification.

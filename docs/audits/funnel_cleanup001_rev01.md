# FUNNEL-CLEANUP001 — Main Funnel CTA + Structure Consolidation (REV01)

## Scope
Bounded frontend funnel cleanup for `/home-security`, `/packages`, and `/discovery` CTA consistency and route hygiene.

## Updated CTA hierarchy

### Homepage `/home-security`
- **Primary:** Find The Right System → `/discovery?vertical=home-security`
- **Secondary:** View Packages → `/packages?vertical=home-security`
- **Tertiary:** Request On-Site Estimate → `/contact?vertical=home-security`

### Packages `/packages?vertical=home-security`
- **Primary card CTA:** Select Bronze/Silver/Gold → `/contact?vertical=home-security&tier=<tier>`
- **Secondary card CTA:** View details → `/packages/:id?vertical=home-security`

### Discovery `/discovery?vertical=home-security`
- **Primary completion CTA:** Continue With Recommendation
- **Secondary completion CTA:** Compare Packages
- **Tertiary completion CTA:** Request Estimate

## Route mapping updates
- Removed homepage duplicate/competing CTA blocks and aligned hero to canonical hierarchy.
- Replaced package primary action from discovery-with-tier routing to package-aware contact routing.
- Preserved `vertical=home-security` and canonical `tier=bronze|silver|gold` params.

## Known remaining gaps / follow-up
- Discovery answer persistence into `/contact` remains a future enhancement (not implemented in this bounded cleanup).
- Planner remains available via existing navigation/routing; planner strategy not expanded in this task.

## Protected runtime confirmation
- No edits to `/api/lead-signal` runtime.
- No HubSpot write-layer logic changes.
- No Resend/operator notification logic changes.
- No Stripe/scheduling runtime changes.

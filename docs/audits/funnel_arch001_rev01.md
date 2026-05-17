# FUNNEL-ARCH001 REV01 — Full Funnel/Page/Nav Architecture Cleanup Plan

## Executive summary
This task is documentation/audit only and defines the recommended final customer journey and navigation architecture sequencing before any quote-generation implementation.

Recommendation: lock the dominant public flow as **Find the right system → Review recommendation → Request estimate**, keep Planner explicitly optional/non-authoritative, treat Estimate as the central intake gateway for recommendation/package/QR contexts, and defer implementation to bounded follow-up tasks.

## Current state snapshot
- Primary public routes in active use include `/home-security`, `/packages`, `/discovery`, `/contact`, `/support`, `/home-security/planner`, and quote/review routes.
- Top navigation currently includes Home, Packages, Fit Check, Estimate, Support, and System Planner (Preview).
- Contact route already accepts context via query params (`vertical`, `tier`, `recommended`, fit-check fields).
- Planner is accessible and labeled `System Planner (Preview)` with non-authoritative disclaimer posture.
- Quote/Review routes exist, but quote-generation lifecycle work remains deferred (`QUOTE-GEN001`).

## Final customer journey recommendation (dominant public path)
1. **Find the right system**
   - Customer enters `/home-security` and is guided to `/discovery` Fit Check.
2. **Review recommendation**
   - Recommendation state is shown as the explicit next step on discovery.
3. **Request estimate**
   - Customer is routed to `/contact` (Estimate) with carried context and submits estimate request.

## Alternate customer paths (acceptable)
- **Direct package shopper path:** `/packages` → package selection context → `/contact`.
- **QR estimate request path:** QR landing/request route(s) → estimate/contact intake context.
- **System Planner (Preview) exploratory path:** optional branch from nav/support/recommendation, explicitly non-authoritative.
- **Support path:** `/support` for customer help without disrupting core estimate pathway.

## Page role table
| Route/Page | Purpose | Primary CTA | Secondary CTA | Should not appear | Accepts state/context | Passes forward |
|---|---|---|---|---|---|---|
| `/home-security` | Entry framing for WNYHS value + funnel start | Find The Right System (to discovery) | View Packages | Quote-generation promises | `vertical=home-security` | Discovery entry intent |
| `/packages` | Package comparison/shopper entry | Continue to Estimate | Run Fit Check | Authoritative quote artifact language | `vertical`, package interest | Selected `tier` to contact |
| `/discovery` | Fit Check + recommendation | Continue To Estimate Request | View packages / optional planner link | Competing top-level transactional CTAs | fit-check answers, persisted recommendation | `recommended`, fit summary, tier hints |
| `/contact` (Estimate) | Central estimate intake gateway | Request My Estimate | Support/help path | Premature quote-stage certainty | vertical/package/recommended/QR context, notes | `/api/lead-signal` intake payload |
| QR request routes (`/qrlanding`, alias) | Campaign entry for quick estimate request | Request estimate | Learn about packages | Circular detours away from estimate | qr/source/campaign context | Contact/lead-signal compatible context |
| `/home-security/planner` | Exploratory preview planning tool | Return to Estimate Request | Support/resources | Any authoritative scope/pricing/schedule claims | optional fit-check-derived draft context | optional non-binding planning notes only |
| `/quote` / `/quoteReview` | Transaction/pre-implementation quote lineage routes | Recover to estimate/recommendation when missing context | Support | Public nav prominence before QUOTE-GEN001 | quote/resume token/local state | agreement/payment chain when valid |
| `/support` | Customer help/FAQ channel | Contact support | Return to estimate flow | Funnel-disruptive unrelated promos | page route/source context | support request payload |

## Navigation hierarchy recommendation
### Primary nav (customer conversion)
1. Home
2. Packages
3. Fit Check
4. Estimate

### Secondary / utility nav
- Support

### Preview / advanced items
- System Planner (Preview) — demoted visual priority (e.g., rightmost, utility grouping, or preview section)

### Footer-only (non-core conversion)
- About
- Contact (if Estimate is primary top-nav entry)
- Privacy
- Terms
- Support duplicate allowed in footer for trust/access

### Items to demote/rename/hide from primary
- Quote / Review Quote: keep route availability but do **not** promote in primary nav before QUOTE-GEN001 completion.
- Keep `System Planner (Preview)` naming; do not rename to authoritative wording.

## Estimate page role recommendation
`/contact` should become the **central intake gateway** for all pre-quote estimate requests.

It should support (implementation task later):
- Request estimate for **recommended system** (discovery path)
- Request estimate for **selected package** (package-shopper path)
- Request **on-site walkthrough** as request mode
- Optional customer notes/context

Relationship model:
- `/contact` remains canonical estimate intake surface.
- QR route(s) should feed `/contact` context rather than create parallel competing intake logic.
- Package and fit-check flows should converge into `/contact` with normalized context contract.
- Future quote generation should consume canonical estimate intake + protected runtime outputs, not bypass intake.

## Planner role recommendation
System Planner (Preview) is confirmed as:
- exploratory
- optional
- non-authoritative
- non-binding for quote/agreement/scope/HubSpot/Stripe/scheduling

Recommended placement:
- Remain accessible but visually demoted versus Estimate.
- Prefer utility/preview grouping and optional post-estimate recommendation reference.
- Keep reachable from support/resources and recommendation secondary CTA only.

## Duplicate / irrelevant / disruptive link findings
1. **Duplicate estimate entry labels** across surfaces can still fragment intent (`Estimate`, `Contact`, `Request My Estimate`), requiring normalization plan.
2. **Quote/Review language exposure** risks implying production-ready quote lifecycle before QUOTE-GEN001 closes.
3. **Planner discoverability in primary nav** is acceptable but can still overcompete with Estimate for first-time customers if not visually demoted.
4. **Parallel QR + contact intake mental models** can confuse users unless context convergence is explicit.
5. **Circular pathways** (home/packages/discovery/support/planner hops) need CTA priority enforcement so estimate request remains dominant conversion action.

## Risks if quote generation starts before architecture cleanup
- Inconsistent intake context can create quote artifacts disconnected from recommendation/package origin.
- Customers may interpret preview/planner outputs as authoritative quote commitments.
- Navigation ambiguity can lower estimate conversion and increase support load.
- Premature quote-stage UX can pressure CRM stage transitions before intake routing is canonicalized.

## Bounded implementation task sequence
1. **FUNNEL-ARCH002** — Implement approved nav/page-role cleanup (no quote generation).
2. **ESTIMATE-FLOW001** — Implement estimate/contact/QR intake consolidation strategy.
3. **QUOTE-GEN001** — Implement quote generation + HubSpot quote-stage update + customer/operator quote email delivery.
4. **CRM-STAGEFLOW001** — Implement deal pipeline advancement after quote/deposit/scheduling events.

Optional bounded prerequisite if needed:
- **FUNNEL-ARCH003 (optional)** — CTA taxonomy normalization + analytics naming parity (copy/routing-only guardrails).

## Explicit forbidden items not implemented
- No customer-facing UI component changes (except site version bump).
- No route changes.
- No nav component changes.
- No estimate page consolidation implementation.
- No quote generation, quote artifacts, quote emails, or PDF behavior.
- No CRM stage-flow implementation.
- No `/api/lead-signal` changes.
- No HubSpot runtime/schema/pipeline changes.
- No requestId lifecycle changes.
- No Resend flow changes.
- No Stripe verification/payment changes.
- No scheduling authority model changes.
- No SMS/reminder/autonomous booking behavior.

## Validation results
- `npm run lint` executed; pre-existing unrelated failures remain (accepted baseline).
- `npm run test -- --run` executed; pre-existing failing test remains: `src/pages/__tests__/operatorNavbar.test.tsx`.
- `npm run build` executed.
- Required diff and `rg` governance checks executed.

## Last verified
- Date (UTC): 2026-05-17
- Task: FUNNEL-ARCH001

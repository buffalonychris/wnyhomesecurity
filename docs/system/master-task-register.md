# WNY Home Security — Master Task Register

Status: Active
Purpose: Operational execution queue for bounded WNY Home Security tasks.

---

## Active Tasks

### KAOS-PROCUREMENT-SITE-001 — KAOS Procurement V1 Prototype

- **Task ID:** KAOS-PROCUREMENT-SITE-001
- **Task Name:** KAOS Procurement V1 Prototype
- **Status:** ACTIVE
- **Category:** SITE
- **Controlling Context:** CTX-WNYHS-FINAL-HOUR-BUSDEV-REV01
- **Primary Workstream:** ChatGPT Sites
- **Related Workstreams:** Project Governance; Catalog System; Estimate / Quote System; Scheduling System; Dashboard / Interactive Experience System; Email/Notification Planning
- **Read Mode:** TARGETED — load the existing KAOS Sites project, this task record, the current context, and only the owner/current-state documents needed for affected surfaces.
- **Purpose:** Add the first governed Procurement module prototype to the existing private KAOS Site. The prototype must provide an attention-first command center, active-job procurement progress, a complete job procurement workspace, and the initial supplier/manufacturer relationship-management foundation using representative data. It is an owner-only operational prototype, not production authority and not a live purchasing engine.

#### Controlling Business Boundary

- Solution Offerings / Product Catalog determines which hardware W. N. Y. Home Security is willing to sell and install.
- Procurement / Vendor Management determines who may supply an exact approved item, under what commercial terms, and how the supplier relationship is managed.
- Supplier approval never grants product approval, and product approval never grants supplier approval.
- Procurement V1 may prepare purchase actions for human approval; it may not submit purchases, claims, reseller applications, or binding vendor communications.

#### Allowed Scope

- Update only the existing private KAOS Site and its governed Sites checkpoint for this prototype.
- Add a Procurement module entry that matches the existing KAOS information architecture, navigation, visual language, components, semantic tokens, responsive behavior, and interaction patterns.
- Build a command-center landing view using representative data.
- Show attention panels for:
  - BOM-line approvals
  - delivery risks
  - order exceptions
  - unmatched confirmation/shipment emails
  - claims
  - unresolved financial follow-ups
- Show all jobs currently in procurement, sorted with at-risk jobs first and then by scheduled installation date.
- Show `% Parts Ordered` and `% Parts On Site` for each job. Both percentages must use total unit quantity, not BOM-line count or dollar value.
- Selecting a job must open a full procurement workspace with BOM, approvals, carts, orders, shipments, exceptions, communications, and history views.
- Provide a supplier/manufacturer relationship-management foundation that can represent the existing recommended-brand/reseller-application data, vendor status, application status, contacts, notes, terms, and authorized product lines without changing Product Catalog approval.
- Use representative prototype records and simulated state changes only. Existing Google Sheet data may be used as reference or representative seed data; no live sync is authorized.
- Preserve traceability required for Sites work: source/checkpoint identity, Sites project ID handling when already governed, saved Site version, deployment URL, and visibility state.

#### Procurement V1 Workflow Rules to Represent

1. A job may enter procurement only after deposit cleared, quote approved, SOW signed, and Christian provides final procurement release.
2. KAOS prepares the full approved job BOM without subtracting on-hand inventory.
3. Every BOM line is approved separately.
4. Recommended vendors are ranked by total delivered cost and delivery risk against the scheduled installation date, preserving at least three business days of delivery buffer.
5. Christian or Lou may approve alternate vendors, exact-SKU replacement sourcing, substitutions, cost increases, prepared carts, and operational claims within the V1 role model.
6. Christian has full Procurement access. Lou has all daily operational actions except settings, user management, and financial credentials.
7. Any increase in item price or shipping requires BOM-line reapproval.
8. A BOM-line approval remains valid until availability changes.
9. After approval, KAOS prepares the vendor cart and checkout link only; checkout submission remains manual.
10. Each prepared cart preserves cart link, item price, stock status, shipping cost, and promised delivery date.
11. Confirmation-email intake is modeled from Christian and Lou's authorized mailboxes. An ambiguous match becomes an exception for either Christian or Lou to resolve.
12. Carrier delivery confirmation is sufficient for V1 to mark units delivered/on site.
13. Partial fulfillment remains tracked and triggers sourcing of the remaining exact-SKU quantity elsewhere.
14. Backorder, cancellation, unavailability, or delay triggers an exact-SKU replacement recommendation: the best balanced vendor plus one backup, both requiring approval.
15. Immediate alert events are vendor backorder/cancellation, delivery timing that threatens installation, carrier delay/exception, and all job shipments delivered.
16. Urgent alerts are represented across KAOS dashboard, email, and text channels. If unclaimed, they age visibly on the dashboard without repeated email or text.
17. Visual aging thresholds are warning after one business day, critical after two, and overdue after three.
18. Non-urgent activity appears on the dashboard and in one daily email digest.
19. When all job shipments show delivered, mark procurement complete and notify Christian and Lou.
20. Wrong, damaged, or missing items open an exception, reopen the affected BOM line, and mark the job `Procurement Exception`.
21. Either Christian or Lou may claim an exception.
22. KAOS may complete a claim form for review but may not submit it.
23. If an incorrect/damaged/missing item threatens the install date, prepare replacement sourcing immediately for approval without waiting for claim resolution.
24. The affected BOM line returns to complete only when the correct replacement shows delivered.
25. Refunds, credits, and reimbursements remain in a separate financial-recovery queue and do not block procurement completion.
26. The financial follow-up panel shows unresolved amount, owner, and age.

#### Representative Prototype States

- Include enough representative jobs and BOM lines to demonstrate: awaiting release, awaiting line approval, cart ready, ordered, partially fulfilled, delivery risk, delivered, procurement complete, procurement exception, unmatched email, open claim, and unresolved refund/credit.
- Interactions may update in-prototype state for demonstration, but must be clearly non-production and must not invoke external services.

#### Forbidden Scope

- Do not change the public WNY Home Security production website, wnyhomesecurity.com, Cloudflare configuration, DNS, environment variables, or production deployment.
- Do not modify repository application source, routes, navigation, dependencies, package-lock, public copy, SEO, sitemap, robots, images, pricing engines, or customer-facing funnels in this task.
- Do not alter Quote → Agreement → Payment → Schedule, Precision Planner, Stripe verification, HubSpot/CRM, `/api/lead-signal`, requestId, scheduling authority, Resend/email runtime, QR attribution, or any protected runtime contract.
- Do not connect Christian or Lou's mailboxes, send email or SMS, access financial credentials, place an order, submit a checkout, submit a claim, submit a reseller application, contact a vendor, or create binding commitments.
- Do not implement live inventory deduction, live vendor/catalog synchronization, live carrier tracking, live mailbox parsing, or automatic procurement.
- Do not treat the prototype, its representative data, or a private Sites deployment as production truth.
- Do not change product-approval status based on vendor or procurement status.
- Do not redesign, remove, or break existing KAOS modules, routes, controls, workflows, navigation, responsive behavior, or established visual system.
- Do not reconcile prototype work into the authoritative production repository; that requires a separate bounded task after operator review.

#### Target Files / Surfaces

- Existing private KAOS ChatGPT Sites project and its saved prototype version.
- `.openai/hosting.json` only if it already belongs to the governed Sites workflow or the Sites tool requires persistence of the exact existing project ID; no other repository file is authorized.
- No production source file is an allowed target.

#### Runtime Systems Affected

- ChatGPT Sites private hosted prototype only.
- Gmail/email, SMS, vendor carts, carrier tracking, claims, payments, catalog synchronization, inventory, and production KAOS data are represented as non-live UI states only and are not runtime integrations in this task.

#### Documentation Updates Required

- Preserve a Sites execution closeout containing the source/checkpoint identity, exact Sites project ID when available, saved Site version, deployment URL, visibility state, prototype/production boundary confirmation, and screenshots or equivalent review evidence when the Sites workflow supports them.
- Do not mark this task DONE in the repository during the prototype build unless the operator separately authorizes a task-register closeout update after reviewing the Sites checkpoint.

#### Validation Required

- Confirm the target is the existing KAOS Site before any mutation.
- Confirm the prototype is private/owner-only and clearly separated from production authority.
- Verify every required attention panel, active-job list, percentage meter, sorting rule, full job workspace section, and representative workflow state is present.
- Verify `% Parts Ordered` and `% Parts On Site` use total unit quantities.
- Verify the three-business-day delivery buffer and one/two/three-business-day alert aging are represented.
- Verify Christian and Lou role boundaries are represented correctly.
- Verify purchase, claim, email, SMS, mailbox, vendor, carrier, and synchronization actions are simulated only.
- Verify supplier/vendor status cannot change Solution Offerings / Product Catalog approval.
- Verify existing KAOS modules, navigation, functionality, responsive behavior, and visual system remain intact.
- Verify no public site, Cloudflare, protected runtime, repository source, dependency, or production data change occurred.
- Record Sites traceability evidence required by `/docs/codex/CODEX_EXECUTION_STANDARD_REV01.md`.

#### Exit Criteria

- A saved, reviewable private KAOS Sites checkpoint contains the Procurement command center and full job workspace with representative data.
- The landing view contains all six attention panels and active procurement jobs with both unit-based progress meters.
- The job workspace demonstrates the approved line-level, ordering, delivery, exception, claim, and financial-recovery rules without performing external actions.
- The supplier/manufacturer foundation preserves the separation between sourcing relationships and approved solution hardware.
- Christian can review the prototype through the provided Sites checkpoint/deployment link.
- Required traceability and protected-system confirmations are reported.
- No production reconciliation, public deployment, purchase, claim submission, live integration, or task closeout occurs.

#### Dependencies

- Existing KAOS ChatGPT Sites project must be accessible and identifiable.
- The ChatGPT Sites governance boundary in `docs/system/step-current.md` must remain active.
- Existing manufacturer/reseller Google Sheet is reference data only; lack of direct Sheet access must not block representative prototype data.
- Any future live Gmail, SMS, carrier, vendor-cart, catalog, inventory, payment, or procurement automation requires separate bounded tasks and credentials/permissions.

#### Operator Decision Required

- No additional decision is required to begin this bounded prototype after this task-register PR is manually reviewed, merged, and `main` is synchronized.
- Christian must review the Sites checkpoint before any task closeout, production reconciliation, external integration, or automation is authorized.

---

## Ready Tasks

_None._

## Blocked Tasks

_None._

## Backlog Tasks

_None._

## Done Tasks

_None recorded in this initialized register._

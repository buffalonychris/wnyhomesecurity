# WNYHS-BP001F — Website Funnel, Fit Check, Planner, Route Governance, SEO, and Claims-Control Deep Sweep

## 1. Executive Summary

Preserve **WNYHS-BP001E** as candidate output.

This extraction focuses exclusively on the customer-facing website and acquisition funnel:

- lead capture routes
- package routes
- Fit Check
- Precision Planner
- quote route
- payment/success/cancel routes
- scheduling route
- route governance
- SEO governance
- claims guardrails
- CTA flow
- conversion dashboards

This is **candidate extraction only**.

No SOPs.

No Codex prompts.

No repo authority.

---

# 2. Master Website Process Table

| Process ID | Process Name | Domain | Status | Maturity | Confidence | Priority |
|------------|--------------|----------|----------|------------|------------|----------|
| WNYHS-BP001F-001 | Public Route Governance | Website | Partial | Identified | High | High |
| WNYHS-BP001F-002 | Lead Capture Funnel | Funnel | Partial | Identified | High | High |
| WNYHS-BP001F-003 | Package Navigation | Funnel | Partial | Identified | Medium | High |
| WNYHS-BP001F-004 | Fit Check Qualification | Funnel | Partial | Identified | Medium | High |
| WNYHS-BP001F-005 | Precision Planner Intake | Planner | Partial | Identified | Medium | Medium |
| WNYHS-BP001F-006 | Quote Request Flow | Sales | Partial | Identified | High | High |
| WNYHS-BP001F-007 | Deposit Checkout Flow | Payments | Partial | Identified | High | High |
| WNYHS-BP001F-008 | Success / Cancel Routing | Payments | Partial | Identified | High | High |
| WNYHS-BP001F-009 | Scheduling Entry Flow | Scheduling | Partial | Identified | Medium | High |
| WNYHS-BP001F-010 | Route Classification | SEO | Partial | Identified | High | High |
| WNYHS-BP001F-011 | Sitemap Governance | SEO | Partial | Identified | High | High |
| WNYHS-BP001F-012 | Robots / Noindex Governance | SEO | Partial | Identified | High | High |
| WNYHS-BP001F-013 | Metadata Governance | SEO | Future Definition Required | Concept | Medium | Medium |
| WNYHS-BP001F-014 | Claims Guardrail Review | Copy | Defined | Partially Defined | High | High |
| WNYHS-BP001F-015 | CTA Governance | UX | Partial | Identified | High | High |
| WNYHS-BP001F-016 | Funnel Conversion Analytics | Dashboard | Future Definition Required | Concept | Medium | High |

---

# 3. Lead Capture Routes

## Candidate Process

**Business Capability**

Capture qualified prospective customers.

### Candidate Entry Points

- Home page
- Solution pages
- Package pages
- Contact page
- Callback page
- Quote page
- Fit Check
- Planner
- Home Assistant demo
- QR landing pages

### Candidate Outputs

- HubSpot contact
- Quote request
- Callback request
- Planner session
- Fit Check result
- Schedule request

### Failure States

- Dead-end pages
- Missing CTA
- Multiple competing CTAs
- Lead not entering CRM
- Public page without conversion objective

---

# 4. Package Routes

Known candidate routes include:

- Packages overview
- Bronze
- Silver
- Gold
- Custom solution

### Candidate Objectives

Each package page should answer:

- Who is it for?
- What's included?
- Why this tier?
- Expansion path
- CTA

Candidate CTAs:

- Get Quote
- Schedule Consultation
- Compare Packages
- Fit Check

---

# 5. Fit Check

Candidate capability:

Customer qualification before quoting.

Candidate Inputs

- Property type
- Property size
- Existing equipment
- Desired outcomes
- Budget
- Security priorities

Candidate Outputs

- Package recommendation
- Custom recommendation
- Quote recommendation
- Planner recommendation

Unknowns:

- Decision logic
- Storage model
- CRM mapping

Status:

**Partial**

---

# 6. Precision Planner

Candidate capability:

Assist planning before install.

Known use cases extracted previously:

- customer-entered room layout
- LiDAR-assisted floorplan
- remote assessment
- placement recommendations

Candidate outputs:

- preliminary floorplan
- hardware estimate
- placement guidance

Future Definition Required:

Planner lifecycle.

---

# 7. Quote Route

Candidate lifecycle

Lead

↓

Quote Request

↓

Qualification

↓

Walkthrough

↓

Estimate

↓

Deposit

↓

Schedule

↓

Install

↓

Support

Failure states:

- Quote with no CRM record
- Quote with no follow-up
- Quote abandoned

---

# 8. Payment / Success / Cancel Routes

Candidate payment flow

Quote Approved

↓

Stripe Checkout

↓

Success

↓

Deposit Verified

↓

Scheduling

or

Cancel

↓

Resume Quote

Candidate rule extracted:

Scheduling should not rely solely on browser redirect; verified payment state should determine progression.

Open Questions

- Retry behavior
- Expired checkout behavior
- Multiple deposits
- Manual payment handling

---

# 9. Scheduling Route

Candidate purpose

Transition qualified customers into appointments.

Entry sources:

- Successful deposit
- On-site quote request
- Callback
- Manual operator scheduling

Candidate outputs

- Quote appointment
- Install appointment
- Calendar confirmation

Failure states

- Scheduling before payment
- Duplicate bookings
- Missing confirmation

---

# 10. Public / Private Route Classification

Candidate route attributes

Each route should eventually contain:

- Route
- Public/Private
- Index
- Sitemap
- Robots
- Metadata owner
- Schema requirement
- Canonical target
- Internal linking
- Search inclusion
- Funnel stage
- Primary CTA
- Conversion objective

Status:

Partial

---

# 11. Sitemap Governance

Previously identified candidate process:

Sitemap should be generated from approved public route inventory rather than manually maintained.

Candidate outputs

- approved sitemap
- excluded routes
- review routes

Failure states

- orphaned pages
- indexed internal pages
- missing package pages
- stale URLs

---

# 12. Robots / Noindex Governance

Candidate decision model

Robots:

crawl policy

Noindex:

search visibility

Not interchangeable.

Candidate review states

- Allow
- Disallow
- Noindex
- Review

Human approval required.

---

# 13. Metadata Governance

Future Definition Required.

Candidate metadata fields

- Page title
- Description
- Canonical
- OG title
- OG image
- Twitter card
- Schema
- Breadcrumbs
- Keywords (if used internally)
- Page owner

Failure states

- Duplicate titles
- Missing metadata
- Wrong canonical
- Wrong schema

---

# 14. Claims Guardrails

Previously extracted candidate rules

Avoid unsupported claims.

Candidate prohibited categories

- monitoring claims
- police dispatch claims
- emergency response claims
- misleading cloud/local claims
- unsupported compatibility claims
- unsupported privacy claims

Required messaging candidates

- Local-first
- Customer-owned equipment
- Customer-owned data
- Optional third-party subscriptions
- No vendor lock-in

Human approval required.

---

# 15. CTA Governance

Candidate CTA inventory

Primary CTAs

- Get Quote
- Schedule Consultation
- Compare Packages
- Fit Check
- Precision Planner
- Contact
- Request Callback

Candidate governance

Every public page should have:

- one primary CTA
- optional secondary CTA
- conversion objective
- funnel stage

Failure states

- CTA conflict
- no CTA
- circular navigation
- CTA mismatch

---

# 16. Conversion Dashboard Candidates

Candidate dashboards

### Funnel Dashboard

- visitors
- leads
- quotes
- deposits
- installs

### Route Dashboard

- page traffic
- bounce rate
- CTA clicks
- conversion rate

### SEO Dashboard

- indexed pages
- sitemap health
- metadata health
- orphan pages

### Claims Dashboard

- copy review status
- prohibited claim findings
- unresolved claim warnings

### Package Dashboard

- package views
- package comparisons
- package conversions

### Planner Dashboard

- planner starts
- planner completions
- planner-to-quote rate

### Fit Check Dashboard

- starts
- completions
- recommendation distribution
- quote conversion

---

# 17. Failure States

| Failure | Risk |
|----------|------|
| Public route not classified | SEO risk |
| Wrong sitemap inclusion | Crawl/index risk |
| Private page indexed | Information exposure |
| Missing CTA | Lost conversions |
| Dead-end page | Funnel abandonment |
| Claims violation | Legal/brand risk |
| Planner disconnected from quote | Lost lead |
| Fit Check not stored | Lost qualification |
| Quote route bypasses CRM | Revenue loss |
| Schedule without verified payment | Operational risk |
| Metadata missing | SEO loss |
| Duplicate canonical | Search confusion |

---

# 18. Automation Candidates

- Route inventory validation
- Sitemap generation
- Metadata completeness audit
- CTA audit
- Claims scanner
- Broken link scanner
- Funnel leak detection
- Planner completion tracking
- Fit Check analytics
- Route ownership validation
- Canonical validation
- Public/private policy validation

---

# 19. Human Approval Gates

- Public route publication
- Index/noindex decisions
- Sitemap approval
- Canonical strategy
- Metadata standards
- Claims approval
- CTA changes
- Funnel restructuring
- SEO policy changes
- Route retirement

---

# 20. Processes Requiring Governance Reconciliation

| Process | Missing Definition |
|----------|--------------------|
| Complete public route registry | Final authoritative inventory |
| Fit Check decision model | Qualification logic |
| Precision Planner lifecycle | End-to-end ownership |
| Metadata ownership | Responsible document/system |
| Funnel analytics | KPIs and thresholds |
| CTA governance | Standard placement rules |
| Claims review workflow | Approval process |
| SEO ownership | Document and role assignment |
| Route retirement | Removal/archive policy |
| Dashboard ownership | Operational reporting authority |

---

# 21. Recommended Next Extraction Batch

Proceed next with:

**WNYHS-BP001G — Governance, Codex, Repository, Runtime Contracts, QA, Hooks, and RSI Deep Sweep**

Focus only on:

- governance hierarchy
- authority chain
- Master Task Register workflow
- repository document ownership
- Codex execution lifecycle
- GitHub PR lifecycle
- Cloudflare deployment validation
- runtime contracts
- QA validation model
- hook architecture
- RSI (recursive self-improvement) opportunities
- documentation promotion workflow

Candidate extraction only.

No SOPs.

No Codex prompts.

No repo authority.

# CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01

## Status

Working Standard

## Owner

WNY Home Security

## Document Type

Category Standard

## Purpose

Define the authoritative WNY Home Security Category Standard.

Categories organize homeowner concerns into understandable public-site areas. Categories help visitors browse broadly, understand related Packages, and discover relevant Solutions.

Categories do not exclusively own Solutions.

---

# Authority

This standard is subordinate to repository governance, the Master Task Register, active bounded work orders, and higher-authority system documents.

This standard does not authorize implementation by itself.

Implementation requires a bounded task and Codex work order.

---

# Category Definition

A Category is a broad homeowner concern area used to organize related Packages and Solutions.

A Category is not:

- A product line
- A technical system
- A hardware family
- A strict ownership container

A Category is a customer-facing discovery path.

---

# Approved Top-Level Categories

The approved public category order is:

1. Home Security
2. Aging-In-Place
3. Environmental Safety
4. Home Automation
5. Home Lighting

This order should remain stable unless future governance explicitly revises it.

---

# Relationship Model

```text
Category
↓
References
↓
Packages
↓
References
↓
Solutions
```

Solutions remain the authoritative content source.

Categories may reference Solutions directly and through Packages.

---

# Solution Reuse Rule

Categories do not exclusively own Solutions.

A Solution may appear in multiple Categories when it meaningfully supports the homeowner outcomes represented by those Categories.

Solution reuse across relevant Categories is encouraged when it improves homeowner understanding and avoids artificially limiting a Solution's versatility.

Every Solution should define:

- Primary Category
- Secondary Categories, where applicable

Primary Category supports organization.

Secondary Categories support discovery.

---

# Category Page Purpose

A Category page should help a homeowner understand:

- What this area covers
- Who it helps
- Common situations it addresses
- Which Packages may be relevant
- Which Solutions may be relevant
- How this Category connects to other WNYHS capabilities
- What action to take next

---

# Required Category Page Structure

Every Category page should contain:

1. Hero
2. Category Description
3. Who This Helps
4. Common Situations
5. Featured Packages
6. Featured Solutions
7. Browse All Related Solutions
8. Why WNYHS Approaches This Differently
9. Expansion Opportunities
10. CTA

---

# Category Hero Standard

Every Category Hero must contain:

- Category Name
- Short Category Description
- Who This Helps Summary
- Primary CTA

The Hero should introduce the concern area in plain homeowner language.

---

# Common Situations Section

Every Category page must include Common Situations.

Common Situations should describe real homeowner concerns, not technology categories.

Examples:

## Home Security

- Packages left outside
- Unknown visitors
- Vehicles entering the driveway
- Checking property while away
- Entry awareness for family and guests

## Aging-In-Place

- Concern about aging parents
- Independent living support
- Nighttime movement
- Caregiver coordination
- Daily activity awareness

## Environmental Safety

- Water leaks
- Frozen pipe risk
- Sump pump concerns
- Utility room risk
- Smoke or CO device activation awareness

## Home Automation

- Garage door status
- Arrival and departure routines
- Climate visibility
- Repetitive daily tasks
- Whole-home dashboard control

## Home Lighting

- Safer walkways
- Arrival lighting
- Security visibility
- Vacation lighting behavior
- Outdoor living spaces

---

# Featured Packages Rule

Category pages may include Featured Packages when Packages improve homeowner understanding.

A Category is not required to have Packages.

Packages should be shown only when they provide a meaningful recommended path.

---

# Featured Solutions Rule

Category pages should show Featured Solutions first.

Featured Solutions may include:

- Primary-category Solutions
- Secondary-category Solutions
- Cross-category Solutions

The page should also provide a way to browse all related Solutions where appropriate.

---

# Expansion Opportunities

Every Category page should include adjacent discovery paths.

Example:

Home Security may point visitors toward:

- Environmental Safety
- Home Lighting
- Home Automation

Aging-In-Place may point visitors toward:

- Home Automation
- Home Lighting
- Home Security

Expansion Opportunities help visitors understand that WNYHS Core supports future growth across multiple homeowner concerns.

---

# Category Differentiator Requirement

Every Category page must explain why WNYHS approaches that concern differently.

Category differentiators should connect to:

- Customer-owned local control
- No required monthly fees
- Professional installation
- Unified dashboard
- Future expansion readiness
- Outcome-first design
- Local service

---

# Category Metadata

Every Category should define:

- Category Name
- Slug
- Short Description
- Long Description
- Who This Helps Summary
- Common Situations
- Featured Packages
- Featured Solutions
- Related Solutions
- Adjacent Categories
- Primary CTA
- Search Terms / Synonyms
- Homepage Eligible
- QR Landing Eligible

---

# Search Requirements

Every Category should include search terms and synonyms.

Example:

Home Security may include:

- security
- cameras
- doorbells
- package theft
- driveway
- smart locks
- vacation watch

Search should allow homeowner language to route to the correct Category, Package, or Solution.

---

# Homepage Relationship

Homepage should present Categories before Packages and Solutions.

Homepage presentation should follow:

```text
Category
↓
Package
↓
Solution
```

This supports largest-to-smallest customer discovery.

---

# QR Landing Relationship

QR Landing may reference Category concepts but should remain conversion-focused.

QR Landing should not become a full Category browsing experience.

It may use Category concepts to help visitors self-identify quickly.

---

# Forbidden Patterns

Category pages must not:

- Treat Categories as product lines
- Hide relevant cross-category Solutions
- Duplicate Solution Objects
- Force every Category into the same number of Packages
- Present hardware before homeowner concerns
- Overload the visitor with every possible Solution before context is established
- Make Categories feel like technical menus

---

# Implementation Boundary

This standard defines Category structure and governance only.

It does not authorize:

- UI changes
- Route changes
- Runtime changes
- HubSpot changes
- Stripe changes
- Scheduling changes
- Cloudflare changes
- Email changes
- Application code changes

Implementation requires an approved bounded task and Codex work order.

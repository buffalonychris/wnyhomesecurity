# SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01

## Status

Approved Governance Context

## Owner

WNY Home Security

## Document Type

Site / Content Architecture Context

## Purpose

Define the approved public-site hierarchy, content architecture, business philosophy, and standards sequencing for the next-generation WNY Home Security website.

This document establishes the architectural direction that downstream visual, solution, package, category, homepage, and QR Landing standards must follow.

This document does not authorize implementation work, route changes, runtime changes, HubSpot changes, Stripe changes, scheduling changes, UI rebuilds, asset replacement, or application code modifications.

---

# Core Philosophy

WNY Home Security does not sell commodity devices.

WNY Home Security sells homeowner outcomes through a customer-owned smart property platform.

Hardware exists to support outcomes.

Solutions exist to solve homeowner problems.

Packages exist to simplify adoption.

Categories exist to organize homeowner concerns.

The website must present homeowner outcomes first and technology second.

---

# Public Site Hierarchy

The approved public-site hierarchy is:

```text
Homepage / QR Landing
↓
Explore
↓
Category
↓
Package
↓
Solution
```

The customer-facing discovery hierarchy is:

```text
Category
↓
Package
↓
Solution
```

The content source hierarchy is:

```text
Solution
↓
Package
↓
Category
↓
Homepage
↓
QR Landing
```

---

# Content Inheritance Model

Solutions are the atomic content objects.

Packages are built from Solutions.

Categories reference Packages and Solutions.

Homepage and QR Landing content may reference Categories, Packages, and Solutions.

Approved inheritance model:

```text
Solution
→ Package
→ Category
→ Homepage
→ QR Landing
```

---

# Homepage Presentation Rule

Homepage presentation must flow from largest scope to smallest scope:

```text
Category
→ Package
→ Solution
```

The Homepage should not introduce individual Solutions before establishing category context.

---

# Primary Public Categories

The approved category order is:

1. Home Security
2. Aging-In-Place
3. Environmental Safety
4. Home Automation
5. Home Lighting

This order is intentional and should remain stable unless future governance explicitly revises it.

---

# Category Presentation Standard

Each Category should include:

1. Category Name
2. Homeowner-Oriented Description
3. Related Packages
4. Related Solutions
5. Recommended Next Actions

Categories should use formal category names supported by homeowner-oriented descriptions.

Example:

```text
Home Security

Protect your home, family, vehicles, and property through greater awareness, status visibility, and control.
```

---

# Navigation Model

Approved primary navigation pattern:

```text
Home
Explore
Packages
Solutions
Why WNYHS
How It Works
About
Contact
Search
```

Primary actions:

```text
Request Estimate
Call / Text
```

Definitions:

- Home: primary brand entry point.
- Explore: category browsing experience.
- Packages: curated solution bundles.
- Solutions: searchable solution catalog.
- Why WNYHS: differentiator and trust explanation.
- How It Works: process and next-step clarity.
- About: company information.
- Contact: estimate and communication paths.
- Search: public content search across approved customer-facing content only.

---

# Customer Discovery Model

Preferred guided journey:

```text
Explore
↓
Category
↓
Package
↓
Solution
↓
Estimate
```

Direct-entry journeys must also work.

Customers may arrive at any page from:

- Google
- AI search
- QR codes
- Facebook
- Referrals
- Email links
- Direct URLs
- Internal navigation

No public page should require Homepage context to be understood.

---

# Solution Object Foundation

SOLUTION001 REV02 shall function as the authoritative WNYHS Solution Object Standard.

Solutions are:

- Content units
- Business units
- Catalog units
- Package-building units
- Category-building units
- Homepage content sources
- QR Landing content sources
- Future Fit Check content sources
- Future catalog-generation sources

---

# Package Foundation

Packages simplify customer decision making by grouping related Solutions into coherent recommendations.

PACKAGE001 REV01 shall define package requirements.

---

# Category Foundation

Categories organize homeowner concerns into understandable groups.

CATEGORY001 REV01 shall define category requirements.

---

# Homepage Purpose

Homepage responsibilities:

- Introduce WNYHS
- Present Categories
- Present Packages
- Present Solutions
- Explain WNYHS Core
- Build trust
- Support search and discovery
- Generate estimate requests

Homepage is the primary educational and discovery experience.

---

# QR Landing Purpose

QR Landing responsibilities:

- Confirm visitor relevance after scan
- Quickly explain WNYHS
- Build trust
- Present selected high-interest homeowner situations
- Present selected Solutions
- Explain WNYHS Core concisely
- Generate estimate requests and calls/texts

QR Landing is a conversion experience.

QR Landing is not intended to replicate the entire Homepage.

---

# WNYHS Core Model

New Customer:

```text
WNYHS Core
+
Selected Solutions / Packages
```

Existing Customer:

```text
Selected Solutions / Packages
```

WNYHS Core represents:

- Home Assistant-based local control
- Unified dashboard
- Customer-owned equipment
- Customer-owned data
- No required monthly fees
- No vendor lock-in
- Local-first operation
- Private-by-default architecture
- Future expansion readiness

---

# Hardware Rule

Standard-catalog Solutions must perform the advertised customer-facing outcome through WNYHS Core / Home Assistant.

Unsupported proprietary customer-requested devices may only be used as disclosed custom/pass-through exceptions with customer acknowledgement.

Custom exceptions must not redefine standard catalog requirements.

Unsupported proprietary devices must not enter the standard catalog.

---

# Standards Sequencing

Approved standards sequence:

```text
SITE_CONTENT_ARCHITECTURE_CONTEXT_REV01
↓
DESIGN002_WNYHS_VISUAL_SYSTEM_STANDARD_REV01
↓
MASTER_SOLUTION_CATALOG_V1
↓
SOLUTION001_WNYHS_SOLUTION_OBJECT_STANDARD_REV02
↓
SOLUTION_MEDIA001_WNYHS_SOLUTION_IMAGE_INTERACTION_STANDARD_REV01
↓
PACKAGE001_WNYHS_PACKAGE_STANDARD_REV01
↓
CATEGORY001_WNYHS_CATEGORY_STANDARD_REV01
↓
UX001_HOMEPAGE_QRLANDING_STRUCTURE_REV01
↓
Homepage Refactor
↓
QR Landing Refactor
```

---

# Implementation Boundary

This document is governance context only.

It does not authorize:

- UI changes
- Route changes
- Runtime changes
- HubSpot changes
- Stripe changes
- Scheduling changes
- Cloudflare changes
- Email changes
- Image generation
- Asset replacement
- Application code changes

Implementation authorization must occur through approved repository standards, task registration, and bounded work orders.

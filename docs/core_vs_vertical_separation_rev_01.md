# Core vs Vertical Separation — REV01

---

## 0. Purpose

This document defines the required separation between the **core reusable funnel system** and the **vertical-specific business layer** for WNY Home Security and all future replicated verticals.

It exists to ensure WNYHS can become the canonical template for:

- WNY Home Automation
- WNY Home ElderTech
- WNY Business Security
- WNY Business Automation
- WNY Property Manager
- WNY ManCave

The goal is simple:

> Clone the system. Swap the vertical. Do not rebuild the engine.

---

## 1. Controlling Step

This document is governed by:

> Step102 — WNYHS Replication-Readiness Hardening — REV01

No implementation work may exceed the allowed scope of Step102.

---

## 2. Core Rule

> Core system logic must not contain vertical-specific assumptions.

> Vertical-specific content must be isolated, swappable, and documented.

---

## 3. Core System Definition

The **core system** is the reusable engine that should remain the same across every replicated vertical.

### Core includes:

- funnel structure
- route pattern
- page roles
- state flow
- quote → agreement → payment → schedule chain
- Stripe payment logic
- scheduling flow
- CRM schema / lead pipeline structure
- document generation pattern
- quote/agreement verification pattern
- error handling model
- noindex / SEO transaction rules
- reusable UI components
- validation rules
- GPT OS governance docs

### Core must answer:

> How does the business system run?

---

## 4. Vertical Layer Definition

The **vertical layer** is the swappable business-specific configuration.

### Vertical layer includes:

- business name
- domain
- brand copy
- hero headline / subtext
- package names and descriptions
- package pricing
- hardware BOM
- service deliverables
- target customer
- value proposition
- industry-specific disclaimers
- photos / visual assets
- FAQs
- local SEO copy
- quote line item labels
- agreement scope wording

### Vertical layer must answer:

> What is this specific business selling?

---

## 5. Core vs Variable Matrix

| Area | Core System | Vertical Layer |
|---|---|---|
| Funnel order | fixed | no |
| Routes | reusable pattern | path/domain labels only |
| Page roles | fixed | page copy/content |
| Fit Check structure | reusable question engine | vertical-specific questions/options |
| Quote flow | fixed | package/pricing/BOM data |
| Agreement flow | fixed | scope wording |
| Payment flow | fixed Stripe logic | amount/product metadata |
| Schedule flow | fixed | install/service terminology |
| CRM schema | fixed base pipeline | vertical tags/stages/labels |
| Documents | fixed generation pattern | vertical wording/data |
| SEO policy | fixed index/noindex rules | keywords/local copy |
| UI components | reusable | content/assets |

---

## 6. Hardcoded Vertical Assumption Rules

The following must NOT exist inside core logic:

- hardcoded `home-security` logic that controls behavior
- package assumptions tied only to security
- hardware-specific conditions inside reusable flow components
- customer-facing WNYHS copy inside generic components
- Stripe assumptions tied only to one package or vertical
- CRM logic that only works for home security
- route guards that assume one vertical only

Allowed hardcoding:

- vertical identifiers inside configuration files
- route aliases when intentionally mapped
- domain values inside brand/config files

---

## 7. Required Separation Pattern

### Core files should contain:

- workflow logic
- reusable components
- validation behavior
- routing mechanics
- state handling
- document generation structure

### Vertical files should contain:

- package data
- copy
- pricing
- BOMs
- brand constants
- vertical metadata
- SEO terms
- agreement wording

---

## 8. Required Vertical Configuration Model

Each vertical must have a defined configuration source containing at minimum:

- vertical ID
- business name
- domain
- public contact info
- package definitions
- pricing rules
- BOM/device/service line items
- fit check configuration
- quote wording
- agreement wording
- SEO metadata

This configuration must be swappable without changing core flow logic.

---

## 9. Audit Question

For every page, component, function, and data file, ask:

> If this is cloned into WNY Home Automation, what breaks?

If the answer is anything other than copy/content/config:

> mark it as a separation violation.

---

## 10. Separation Violation Examples

### Violation: copy in core component

A shared component contains:

> “Home security that works even when the internet doesn’t.”

Fix:
- move copy to vertical config/content file

---

### Violation: package logic in component

A component checks:

> if package is Gold, add NVR language

Fix:
- move package behavior into package configuration

---

### Violation: payment tied to WNYHS packages

Stripe checkout logic assumes Bronze/Silver/Gold only for Home Security.

Fix:
- pass vertical/package metadata into payment creation

---

### Violation: CRM label tied to one vertical

Lead submission hardcodes home-security as the only valid pipeline context.

Fix:
- use vertical ID and shared CRM mapping

---

## 11. Minimal Fix Rule

Do not refactor broadly.

Only fix coupling that blocks replication readiness.

Allowed fixes:

- move copy into vertical config
- move package logic into package data
- move hardware assumptions into BOM/config
- replace hardcoded vertical checks with vertical metadata
- document intentional exceptions

Forbidden fixes:

- redesigning page structure
- changing funnel order
- introducing new features
- reworking visual design
- expanding CRM schema
- changing Stripe architecture without Step revision

---

## 12. Success Condition

This separation is successful when:

> WNYHS can be cloned into another vertical and made operational by changing only vertical-specific content, configuration, package data, and brand assets.

---

## 13. Required Output of Audit

The Step102 audit must produce:

- list of core files/components reviewed
- list of vertical files/content reviewed
- list of separation violations found
- decision for each violation:
  - fix now
  - document exception
  - defer with reason

---

## 14. Bottom Line

The goal is not perfect abstraction.

The goal is replication without rebuild.

---

END OF DOCUMENT


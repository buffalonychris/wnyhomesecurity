# WNY Home Security — Funnel Spec

Status: Active supporting spec

---

## Primary Objective

A lead must be able to:

Land → Learn → Choose / Configure → Optional Planner → Get Quote → Review Quote → Accept Agreement → Pay Deposit → Schedule Install

---

## Canonical Routes

### Public

- `/`
- `/packages`
- `/packages/:id`
- `/discovery`
- `/contact`
- `/support`
- `/privacy`
- `/terms`

### Transaction

- `/quoteReview`
- `/quotePrint`
- `/agreementReview`
- `/agreementPrint`
- `/payment`
- `/payment/success`
- `/payment/canceled`
- `/schedule`

### Tools

- `/home-security/planner`
- `/demos/ha-gold-dashboard`

---

## Customer Paths

### Online-first

Landing → Fit Check → Packages/Quote → Agreement → Deposit → Schedule

### On-site-first

Landing → Schedule Estimate / Contact → guided follow-up → Quote → Agreement → Deposit → Schedule

Both paths are valid.


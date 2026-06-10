Status: SUPPORTING REFERENCE
Authority Role: Historical email lineage reference
Supersedes: None
Superseded By: None
Current Use: Use only as supporting reference when the current operational context or active bounded task/work order explicitly references Step201 email scope.
Do Not Use For: Do not treat as current controlling implementation authority or permission to change email runtime, Resend configuration, server email endpoints, DNS, Cloudflare Email Routing, secrets, or audit-copy behavior by itself.
Reconciliation Note: GOV007 reconciled this document as non-controlling historical/reference material. The preserved body includes legacy "Active / Controlling" wording, but current repo governance treats Step201 as lineage unless explicitly promoted by `docs/system/step-current.md` or an active bounded task/work order.

---

# Step201 — Email Infrastructure + Resend Integration (REV01)

Legacy Status (historical): Active / Controlling for outbound email, Resend, server email endpoints, and audit-copy behavior
Current Authority Note: The legacy status line above is preserved for historical lineage only. It does not authorize email runtime, Resend, endpoint, DNS, Cloudflare Email Routing, secret, or audit-copy changes unless Step201 scope is explicitly promoted by the current operational context or an active bounded work order.

---

## 1. Purpose

Historically, this Step described an intent to implement and standardize outbound email behavior across WNY Home Security using Resend, while preserving existing funnel structure and transaction flow.

---

## 2. Historical Authorized Scope

This preserved historical section described the Step201 implementation scope at the time it was written. Under current governance, it is reference lineage only and does not authorize changes by itself:

- Server/API email infrastructure updates
- Resend integration
- Centralized outbound email helper
- Environment variable contract for email
- Contact/intake email endpoint
- Fit Check/discovery email endpoint
- Quote email wiring
- Agreement email wiring
- Schedule request email endpoint
- Support request email endpoint
- Audit-copy enforcement for every outbound email
- Sender and Reply-To standardization
- Safe server-side email error handling

---

## 3. Historical Non-Scope

The preserved Step201 non-scope language remains useful historical boundary context. It is not a current implementation authorization:

- Funnel order
- Homepage/visual hierarchy, unless Step101 is also active
- Package/BOM logic
- Quote calculation logic
- Agreement hashing/verification logic
- Stripe checkout/session/webhook verification
- CRM/HubSpot writes
- Cloudflare DNS/MX records

---

## 4. Email Architecture

This architecture section preserves historical email-design intent. Current outbound runtime authority lives in `docs/runtime/resend_runtime.md`; current inbound routing authority lives in `docs/runtime/cloudflare_email_routing.md`.

Inbound:

```txt
Customer → Cloudflare Email Routing → Gmail/operators
```

Outbound:

```txt
Website/backend → Resend → customer/operator
```

Resend is outbound only.
Do not enable Resend receiving on the root domain.

---

## 5. Sender Standard

Default sender:

```txt
WNY Home Security <no-reply@wnyhomesecurity.com>
```

---

## 6. Reply-To Mapping

- general/contact → sales@wnyhomesecurity.com
- fit check/discovery → sales@wnyhomesecurity.com
- quote → quotes@wnyhomesecurity.com
- agreement → admin@wnyhomesecurity.com
- schedule/install → install@wnyhomesecurity.com
- billing → billing@wnyhomesecurity.com
- support → support@wnyhomesecurity.com

---

## 7. Required Environment Variables

```txt
RESEND_API_KEY
MAIL_FROM
MAIL_AUDIT_TO
MAIL_SALES_TO
MAIL_SUPPORT_TO
MAIL_QUOTES_TO
MAIL_INSTALL_TO
MAIL_ADMIN_TO
MAIL_BILLING_TO
PUBLIC_SITE_URL
```

No private addresses or secrets may be hardcoded into frontend code.

---

## 8. Audit Copy Rule

This preserved audit-copy rule documents historical Step201 intent. It does not change or authorize current audit-copy runtime behavior unless an active bounded work order promotes this scope.

Every system-generated outbound email must send an internal copy.

Applies to:

- customer-facing emails
- internal notifications
- contact/intake
- fit check
- quotes
- agreements
- schedule requests
- support requests

Preferred implementation:

- BCC for customer-facing sends
- explicit internal duplicate only when BCC is not appropriate

If audit recipients are missing, fail safely instead of silently sending.

---

## 9. Flow Mapping

### Contact / Intake

To: `MAIL_SALES_TO`
Reply-To: customer email
Audit: `MAIL_AUDIT_TO`

### Fit Check

To: `MAIL_SALES_TO`
Reply-To: customer email if available
Audit: `MAIL_AUDIT_TO`

### Quote

To: customer
BCC: `MAIL_AUDIT_TO` + `MAIL_QUOTES_TO`
Reply-To: quotes@

### Agreement

To: customer
BCC: `MAIL_AUDIT_TO` + `MAIL_ADMIN_TO`
Reply-To: admin@

### Schedule

To: `MAIL_INSTALL_TO`
Reply-To: customer email if available
Audit: `MAIL_AUDIT_TO`

### Support

To: `MAIL_SUPPORT_TO`
Reply-To: customer email
Audit: `MAIL_AUDIT_TO`

---

## 10. Error Handling

If send fails:

- do not claim success
- show user-safe error
- log server-side details
- preserve form data where practical

If customer email is missing:

- route internally only when allowed

If audit copy fails:

- treat the send as failed unless the customer and audit copy are sent as one provider request

---

## 11. Historical Completion Criteria

These preserved criteria describe the historical Step201 completion target. They are not current validation requirements unless explicitly adopted by the current operational context or an active bounded work order.

- Resend helper exists and is centralized
- All submission-style email flows use server endpoints
- Customer-facing sends include audit copy
- `RESEND_API_KEY` is not present in `src` or `public`
- Stripe/payment logic untouched
- HubSpot/CRM writes untouched unless a CRM Step is active
- Build passes or failures are documented as pre-existing


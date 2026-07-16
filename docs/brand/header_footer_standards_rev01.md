# WNYHS Header & Footer Standards — REV01

Status: LOCKED (governance standard)
Context: CTX-WNYHS-FINISH-LINE-REV01

## 1. Header Standard

Header must include:
- `IconizedLogo.png`
- `WNY Home Security` text lockup

Main-site nav order must be:
1. Home
2. Packages
3. Fit Check
4. Estimate
5. Support
6. Our Work
7. Get Started CTA

## 2. QR Navigation Exception

QR funnel nav uses this reduced order:
1. View Packages
2. See Our Work
3. Call/Text
4. Schedule Estimate

## 3. Footer Standard

Footer must follow one WNYHS footer pattern only:
- one global WNYHS footer
- no duplicate global footer

Footer links:
- About
- Contact
- Privacy
- Terms
- Support

Footer meta must include:
- WNY Home Security
- Western New York
- 716.391.2405
- hello@wnyhomesecurity.com
- WNYHS version badge

Logo placement:
- `IconizedLogo.png` at far-right

## 4. Forbidden Header/Footer Patterns

Do not include:
- SaaS/demo/operator footer links
- breadcrumb strip above WNYHS nav unless explicitly approved by scoped task

## 5. Private Prototype Exception — ChatGPT Sites

The production header and footer rules in sections 1 through 4 remain locked and authoritative for the WNY Home Security customer production website.

A private, owner-only ChatGPT Sites prototype may use a different navigation and footer only when all of the following conditions are met:

- an `ACTIVE` `SITE` task exists;
- a merged repo-native work order explicitly authorizes the prototype structure;
- the prototype is isolated on a dedicated branch and worktree;
- the prototype is not customer production authority; and
- no production route, funnel, contact, payment, scheduling, CRM, or runtime behavior is changed.

For the private prototype governed by `T-SITEPROTOTYPE001`, the authorized Iteration 1 header structure is:

1. WNY Home Security identity and approved crest.
2. Home.
3. Categories.
4. Solutions.
5. A clearly labeled inert prototype assessment CTA.

For that same private prototype, the authorized Iteration 1 footer structure is:

- WNY Home Security identity;
- private prototype status;
- Western New York/local-market posture;
- links to Home, Categories, and Solutions;
- a statement that interactions do not submit or store information;
- no production contact form;
- no live phone or email submission behavior;
- no required production version badge; and
- no production-only footer link set.

The prototype header and footer must provide accessible keyboard navigation, visible focus states, semantic `header`, `nav`, and `footer` structure, responsive mobile behavior, approved brand assets, semantic tokens, and claims-compliant language. They must not link to production routes unless a separate bounded authorization explicitly permits those links.

This exception:

- does not alter the production header or footer standard;
- does not authorize public deployment;
- does not authorize Sites access changes;
- does not authorize production reconciliation; and
- applies only to the private prototype governed by `T-SITEPROTOTYPE001`.

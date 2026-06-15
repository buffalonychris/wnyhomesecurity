# HOTFIX-WNYHS-APEX-HOSTNAME-001 REV01

## Task

- **Task ID:** HOTFIX-WNYHS-APEX-HOSTNAME-001
- **Task Name:** Apex Hostname Rendering Failure Investigation
- **Status:** Implemented
- **Version:** v1.0.147
- **Date:** 2026-06-15

## Scope

This hotfix investigated why `https://www.wnyhomesecurity.com` and `https://www.wnyhomesecurity.com/home-security` render while `https://wnyhomesecurity.com` and `https://wnyhomesecurity.com/home-security` have been reported as blank/black in production.

No visual parity work, quote-system work, contact/support form behavior, package data, pricing, scheduling, email, auth, durable storage, HubSpot, or Stripe/payment work was included.

## Hostname / Domain Logic Found

Runtime hostname/domain/origin logic found in source:

- `src/App.tsx` reads `window.location.hostname` in `HomeRoute` and treats any hostname containing `wnyhomesecurity.com` as a Home Security host for `/` to `/home-security` client navigation.
- `src/pages/About.tsx`, `src/pages/Contact.tsx`, `src/pages/Privacy.tsx`, `src/pages/Support.tsx`, and `src/pages/Terms.tsx` read `window.location.hostname` to choose Home Security layout behavior when the hostname contains `wnyhomesecurity.com`.
- `src/lib/resumeToken.ts`, `src/lib/docAuthority.ts`, and `src/lib/emailPayload.ts` use `window.location.origin` to build same-origin resume, verification, or email-link URLs.
- `functions/api/create-checkout-session.ts` derives checkout success/cancel origins from `new URL(request.url).origin`.
- `public/_redirects` contained only API passthrough and SPA fallback before this hotfix.

## Diagnosis

No reviewed runtime code had an exact-match branch that treats `www.wnyhomesecurity.com` differently from `wnyhomesecurity.com`; the hostname checks use `includes('wnyhomesecurity.com')`, so both apex and www should satisfy the same frontend branch.

The app bootstrap in `src/main.tsx` mounts the same React app regardless of hostname. Route handling in `src/App.tsx` is path-based except for the `/` HomeRoute hostname check, and `/home-security` does not have hostname-specific routing.

Before this hotfix, Cloudflare Pages redirects did not canonicalize apex to www. With both custom domains active, apex and www were allowed to serve the SPA independently. Because the reviewed code does not explain an apex-only blank render, the safest production hotfix is edge-level hostname normalization so apex requests use the same known-good www serving path before the SPA loads.

## Fix Made

Added a Cloudflare Pages redirect rule:

```txt
https://wnyhomesecurity.com/*  https://www.wnyhomesecurity.com/:splat  301
```

This preserves the path through `:splat`. Cloudflare Pages preserves the request query string for redirects when the destination does not define a replacement query string.

Expected outcomes:

- `https://wnyhomesecurity.com` routes to `https://www.wnyhomesecurity.com/`.
- `https://wnyhomesecurity.com/home-security` routes to `https://www.wnyhomesecurity.com/home-security`.
- Existing www routes remain on the working host.

## Protected Systems

- HubSpot untouched.
- Stripe/payment untouched.
- `/api/lead-signal` untouched.
- requestId lifecycle untouched.
- Resend/email runtime untouched.
- Scheduling runtime untouched.
- Package data and pricing untouched.
- No dependencies or package lock changes.

## Validation

Required validation for this hotfix:

- `npm run build`
- targeted TypeScript check through the build for touched runtime/config files
- `git diff --check`
- protected-system changed-file scan
- added-line forbidden-claim scan
- route/domain logic grep summary
- local preview checks with Host headers when practical

## Remaining Gaps

The production blank/black apex symptom could not be directly reproduced inside the repository without the live Cloudflare edge environment. This hotfix removes the apex/www split at the Cloudflare Pages redirect layer and documents that reviewed source code does not contain an exact apex-only frontend branch.

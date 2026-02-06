# Phase 0 – Discovery Findings and Implementation Plan (Steps 001–007)

## Current stack and deployment target
- **Framework/build**: React 18 with Vite + TypeScript; routing via `react-router-dom` and single-page app entry in `main.tsx` and `App.tsx`.【F:src/main.tsx†L1-L13】【F:src/App.tsx†L1-L84】
- **Styling**: Global CSS tokens and utilities in `src/index.css` (KAEC color variables, typography, cards, print styles).【F:src/index.css†L1-L120】
- **Serverless/API**: Vercel-style API routes in `/api` for quote/agreement email delivery using Resend or SMTP with mock fallback.【F:api/_email.ts†L1-L238】【F:api/send-quote.ts†L1-L5】
- **Deployment**: Repository contains `vercel.json` rewrite for SPA routing and README instructions for Vercel environment variables, implying Vercel as target host.【F:vercel.json†L1-L5】【F:README.md†L19-L36】

## Routing, UI components, and flows
- **Primary navigation**: Layout component drives top nav with packages, recommendation flow, health-homes dropdown, and CTA to `/quote` or `/health-homes/intake`; footer exposes internal tool links (UAT, certificate, payment-processing).【F:src/components/Layout.tsx†L14-L250】
- **Route map**: Marketing and flow routes include `/`, `/packages/:id`, `/comparison`, `/funding`, `/reliability`, `/faq`, `/contact`, `/privacy`, `/terms`, `/recommend`, `/quote`, `/quoteReview`, `/quotePrint`, `/agreement`, `/agreementReview`, `/agreementPrint`, `/esign`, `/payment`, `/payment-processing`, `/schedule`, `/resume`, `/resume-verify`, `/uat`, `/launchUat`, `/certificate`, `/verify`, plus Health Homes subroutes `/health-homes/*`.【F:src/App.tsx†L1-L79】
- **Flow state**: Retail flow state stored in `localStorage` via `retailFlow.ts` covering quote, agreement acceptance, payment status, scheduling request, and current step markers (no server persistence).【F:src/lib/retailFlow.ts†L3-L91】

## Persistence, data model, and configuration
- **Database**: No database layer today; state is client-side only and emails are relayed from API routes.
- **Config**: `siteConfig` toggles AI narrative, mock payments, deposit policy, and document/hash versions (static, code-driven).【F:src/config/site.ts†L1-L25】

## Authentication and admin patterns
- **Auth**: No authentication or session handling present. Internal tool links (UAT, certificate, payment processing) are publicly reachable routes exposed in the footer without guards.【F:src/components/Layout.tsx†L229-L250】

## Step-based implementation plan
The following plan aligns with Steps 001–007 and avoids production behavior changes until build phases.

### Step 001 – Landing pages and navigation
- Confirm sitemap for marketing pages above and group Health Homes subpages into a nested layout; keep SPA rewrite intact for Vercel.
- Define hero/CTA variants for `/` and `/packages` with consistent nav states (including dropdown and mobile behavior) using existing Layout patterns.
- Document SEO/metadata approach (static `<head>` via Vite + React Helmet or similar) and breadcrumb strategy for Health Homes content.

### Step 002 – Qualification flow architecture
- Model the qualification -> quote -> agreement -> payment -> scheduling path using the existing retail flow structure; persist checkpoints in `localStorage` until backend storage is added.
- Introduce a typed wizard context provider wrapping `/quote`, `/agreement`, `/payment`, `/schedule` routes, emitting step telemetry hooks for GA4.
- Plan resumability using the existing `/resume` and `/resume-verify` entry points; encode resume tokens in server-issued links from email API.

### Step 003 – GA4 + UTM instrumentation
- Implement a GA4 wrapper that records page views on route changes and captures UTM params into session storage/localStorage for later submission with quote/schedule forms.
- Tag key events: quote submission, agreement acceptance, payment intent, and scheduling request; include health-homes pilot intake as a separate event stream.
- Add consent-friendly analytics toggle (no-op in dev/preview, enabled via environment flag in production).

### Step 004 – Data model and migrations
- Introduce a persistence layer (Prisma + Postgres) to store leads, quotes, agreement attestations, payments, schedules, and health-homes intake records; align schema with `retailFlow` fields and document/hash versions from `siteConfig`.
- Define deterministic IDs and verification hashes for printable documents to maintain the current verification/resume flows.
- Plan initial migrations for core tables and seed data for packages/pricing; provide migration runbook for Vercel Postgres or managed Postgres.

### Step 005 – CRM UI routes and access control
- Carve an `/admin` (or `/crm`) route namespace with role-based access (JWT + middleware) separating staff tools from public pages; gate existing UAT/certificate/payment-processing utilities behind auth.
- Build read/search views for leads, quotes, agreements, and schedule requests with export capability; include GA/UTM attribution columns captured in Step 003.
- Add activity logs (email sends, verification checks) referencing server events from API routes.

### Step 006 – Ops handoff outputs
- Deliver runbooks for deployments (Vercel project settings, environment variables for email + database), incident procedures for email/provider failures, and backup/restore steps for the database.
- Provide printable PDF templates for quotes/agreements and verification instructions matching email content produced by `/api/send-quote` and `/api/send-agreement`.
- Document SLAs for response times on qualification requests and scheduling follow-ups.

### Step 007 – Test strategy
- Unit test coverage for helpers (quote calculations, hash/ID generation, email payload builders) and React components that orchestrate flow steps.
- Integration tests simulating SPA routing and GA4 event dispatch; API route tests for email sending with mocked providers.
- E2E smoke tests for the full qualification-to-schedule journey (happy path and resume/verify flows) using Playwright/Cypress against preview deployments; include accessibility audits on key landing and CRM pages.

## Ops/readiness checkpoints
- No production behavior changes introduced in Phase 0; this document is planning-only.
- Pending decisions: database provider (defaulting to Postgres), auth provider (NextAuth/Auth0 vs custom JWT), and analytics consent UX.

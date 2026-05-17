# Funnel Context Contract — REV01

Date (UTC): 2026-05-17  
Task: GOV-HARDEN002

## Purpose

Lock canonical funnel context fields and prevent alias drift across routes, payloads, email context, and HubSpot notes.

## Canonical Fields

- `vertical`
- `tier`
- `packageTier`
- `recommendedTier`
- `fitCheckCompleted`
- `discoveryContext`
- `requestId`

## Field Meanings

### `vertical`

- Source business vertical
- Current canonical value: `home-security`

### `tier`

- URL-level selected package tier
- Allowed values: `bronze`, `silver`, `gold`

### `packageTier`

- Payload/runtime selected package tier
- Allowed values: `bronze`, `silver`, `gold`, `unknown`

### `recommendedTier`

- Deterministic recommendation from discovery/fit check
- Allowed values: `bronze`, `silver`, `gold`, `unknown`

### `fitCheckCompleted`

- Boolean indicating discovery completion

### `discoveryContext`

- Canonical object passed from discovery/contact into lead runtime

### `requestId`

- Canonical runtime correlation ID

## Canonical `discoveryContext` Shape

```ts
{
  fitCheckCompleted: boolean,
  recommendedTier: "bronze" | "silver" | "gold" | "unknown",
  propertySize: string,
  coverageExpectation: string,
  recordingPreference: string,
  monitoringPreference: string,
  priorityConcerns: string,
  entryPointCount: string | number
}
```

## Alias Drift Prohibition

Do not invent aliases such as `selectedTier`, `planTier`, `package`, `recommendedPackage`, `fitResult`, or similar without a scoped contract revision.

## Change Control

Any contract extension or new context key requires explicit Step/task authorization and additive documentation update before implementation.

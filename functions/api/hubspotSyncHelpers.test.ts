import { describe, expect, it } from 'vitest';
import { buildEstimateDealName, chooseHubSpotContactSearchFilters, getDealStageForCreate, isActiveEstimateDeal, normalizeEmailForHubSpotSearch } from './hubspotSyncHelpers';

describe('hubspot sync helpers', () => {
  it('normalizes email for dedupe', () => {
    expect(normalizeEmailForHubSpotSearch(' TEST@Example.COM ')).toBe('test@example.com');
  });

  it('prioritizes email then phone then skip', () => {
    expect(chooseHubSpotContactSearchFilters(' TEST@Example.COM ', '716-555-1212')[0]?.propertyName).toBe('email');
    expect(chooseHubSpotContactSearchFilters('', '(716) 555-1212')[0]?.propertyName).toBe('phone');
    expect(chooseHubSpotContactSearchFilters('', '')).toEqual([]);
  });

  it('treats closed deals as not active', () => {
    expect(isActiveEstimateDeal({ properties: { dealstage: 'closedwon', wny_deal_path: 'onsite_confirmation_first' } })).toBe(false);
    expect(isActiveEstimateDeal({ properties: { dealstage: 'appointmentscheduled', wny_deal_path: 'onsite_confirmation_first' } })).toBe(true);
  });

  it('handles stage config safely', () => {
    expect(getDealStageForCreate('')).toBeUndefined();
    expect(getDealStageForCreate('12345')).toBe('12345');
  });

  it('uses deterministic deal naming', () => {
    expect(buildEstimateDealName({ isQr: true, customerName: 'Jane Doe', requestId: 'r1' })).toBe('WNYHS QR Estimate Request - Jane Doe - r1');
  });
});

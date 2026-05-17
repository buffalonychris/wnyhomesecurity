import { describe, expect, it } from 'vitest';
import { chooseContactSearchFilter, normalizeDealPath, normalizeFunnelStage, normalizeLeadSourcePlatform, normalizePreferredContactMethod, stringifyHubSpotTextField } from './hubspotNormalization';

describe('hubspot normalization', () => {
  it('maps onsite to onsite_confirmation_first', () => {
    expect(normalizeDealPath('onsite')).toBe('onsite_confirmation_first');
  });

  it('maps qr_scan to direct', () => {
    expect(normalizeLeadSourcePlatform('qr_scan')).toBe('direct');
  });

  it('maps qr_estimate_requested to quote_generated', () => {
    expect(normalizeFunnelStage('qr_estimate_requested')).toBe('quote_generated');
  });

  it('maps Text to sms', () => {
    expect(normalizePreferredContactMethod('Text')).toBe('sms');
  });

  it('guards blank contact search values', () => {
    expect(chooseContactSearchFilter('', '   ')).toBeNull();
    expect(chooseContactSearchFilter('', '7165551212')).toEqual({ propertyName: 'phone', operator: 'EQ', value: '7165551212' });
  });

  it('stringifies structured fields', () => {
    expect(stringifyHubSpotTextField({ hello: 'world' })).toBe('{"hello":"world"}');
  });
});

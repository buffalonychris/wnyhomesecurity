import { describe, expect, it } from 'vitest';

import { catalogMasterParts } from '../masterPartsData';

const expectedCatalog004Statuses = {
  'reolink-d340p': 'conditional',
  'reolink-d340w': 'conditional',
  'reolink-d340b': 'field_test',
  'ubiquiti-uvc-g4-doorbell-pro-poe-kit': 'custom_pass_through_only',
  'aqara-db-c03e-g400-wired': 'field_test',
} as const;

const expectedCatalog005PartIds = [
  'reolink-home-hub',
  'reolink-home-hub-mini',
  'reolink-home-hub-pro',
  'reolink-rln8-410',
  'reolink-rln12w',
  'reolink-rln16-410',
  'reolink-rln36',
  'reolink-e1-outdoor-pro',
  'reolink-elite-floodlight-wifi',
  'reolink-fe-w',
  'reolink-rlc-810wa',
  'reolink-rlc-840wa',
  'reolink-rp-wcb8mz',
  'reolink-duo-3-wifi',
  'reolink-elite-wifi',
  'reolink-trackmix-wifi',
  'reolink-trackflex-floodlight-wifi',
] as const;

const categoryFields = ['home_security', 'aging_in_place', 'home_automation', 'home_safety_environmental', 'home_lighting'];

describe('catalogMasterParts', () => {
  it('contains the CATALOG004 master-parts import with reviewed statuses', () => {
    const partIds = catalogMasterParts.map((part) => part.part_id);

    expect(partIds).toEqual([...Object.keys(expectedCatalog004Statuses), ...expectedCatalog005PartIds]);
    expect(new Set(partIds).size).toBe(partIds.length);

    for (const [partId, status] of Object.entries(expectedCatalog004Statuses)) {
      expect(catalogMasterParts.find((part) => part.part_id === partId)?.qualification_status).toBe(status);
    }
  });

  it('contains the CATALOG005 Reolink conditional master-parts import', () => {
    const catalog005Parts = expectedCatalog005PartIds.map((partId) => catalogMasterParts.find((part) => part.part_id === partId));

    expect(catalog005Parts.every(Boolean)).toBe(true);
    expect(catalog005Parts).toHaveLength(17);

    for (const part of catalog005Parts) {
      expect(part?.hard_gate_result).toBe('PASS');
      expect(part?.qualification_status).toBe('conditional');
      expect(part?.approved_for_standard_use).toBe('no');
      expect(part?.approved_for_conditional_use).toBe('yes');
      expect(part?.record_status).toBe('needs_review');
      expect(part?.validation_status).toBe('needs_validation');
      expect(part?.source).toBeTruthy();
      expect(part?.primary_evidence_sources.length).toBeGreaterThan(0);
      expect(part?.missing_evidence.length).toBeGreaterThan(0);
    }
  });

  it('uses canonical category fields without legacy category_home aliases', () => {
    for (const part of catalogMasterParts) {
      expect(categoryFields.every((field) => field in part)).toBe(true);
      expect(Object.keys(part).some((field) => field.startsWith('category_home_'))).toBe(false);
    }
  });
});

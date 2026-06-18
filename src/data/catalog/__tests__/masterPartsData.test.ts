import { describe, expect, it } from 'vitest';

import { catalogMasterParts } from '../masterPartsData';

const expectedStatuses = {
  'reolink-d340p': 'conditional',
  'reolink-d340w': 'conditional',
  'reolink-d340b': 'field_test',
  'ubiquiti-uvc-g4-doorbell-pro-poe-kit': 'custom_pass_through_only',
  'aqara-db-c03e-g400-wired': 'field_test',
} as const;

const categoryFields = ['home_security', 'aging_in_place', 'home_automation', 'home_safety_environmental', 'home_lighting'];

describe('catalogMasterParts', () => {
  it('contains the CATALOG004 master-parts import with reviewed statuses', () => {
    const partIds = catalogMasterParts.map((part) => part.part_id);

    expect(partIds).toEqual(Object.keys(expectedStatuses));
    expect(new Set(partIds).size).toBe(partIds.length);

    for (const [partId, status] of Object.entries(expectedStatuses)) {
      expect(catalogMasterParts.find((part) => part.part_id === partId)?.qualification_status).toBe(status);
    }
  });

  it('uses canonical category fields without legacy category_home aliases', () => {
    for (const part of catalogMasterParts) {
      expect(categoryFields.every((field) => field in part)).toBe(true);
      expect(Object.keys(part).some((field) => field.startsWith('category_home_'))).toBe(false);
    }
  });
});

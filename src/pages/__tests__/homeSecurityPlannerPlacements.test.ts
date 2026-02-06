import { describe, expect, it } from 'vitest';
import type { FloorplanPlacement } from '@/lib/homeSecurityFunnel';
import { createUserPlacement, generateSuggestedPlacements } from '../HomeSecurityPlanner';

type PlacementInput = Omit<FloorplanPlacement, 'id' | 'source'> & { id?: string };

const basePlacement: PlacementInput = {
  deviceKey: 'door_sensor',
  label: 'Door Sensor',
  floorId: 'floor-1',
  position: { x: 24, y: 24 },
  required: true,
};

describe('homeSecurityPlanner placement sources', () => {
  it('marks suggested placements with the suggested source', () => {
    const placements = generateSuggestedPlacements([basePlacement]);
    expect(placements).toHaveLength(1);
    expect(placements.every((placement) => placement.source === 'suggested')).toBe(true);
  });

  it('keeps user-added placements marked as user_added', () => {
    const placement = createUserPlacement(basePlacement);
    expect(placement.source).toBe('user_added');
  });
});

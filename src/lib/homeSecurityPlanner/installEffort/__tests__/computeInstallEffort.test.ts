import { describe, expect, it } from 'vitest';
import type { FloorplanPlacement, HomeSecurityFloorplan } from '@/lib/homeSecurityFunnel';
import { computeInstallEffort } from '../computeInstallEffort';
import { INSTALL_EFFORT_BADGES, INSTALL_EFFORT_RANGES } from '../installEffortConstants';

const createPlacement = (deviceKey: FloorplanPlacement['deviceKey'], index: number, floorId = 'floor-1') => ({
  id: `${deviceKey}-${index}`,
  deviceKey,
  label: deviceKey,
  floorId,
  position: { x: 10 + index * 2, y: 12 + index * 2 },
  required: false,
  source: 'user_added' as const,
});

const createFloorplan = (placements: FloorplanPlacement[], floors = 1): HomeSecurityFloorplan => ({
  version: 'v1',
  floors: Array.from({ length: floors }, (_, index) => ({
    id: `floor-${index + 1}`,
    label: `Floor ${index + 1}` as const,
    rooms: [],
  })),
  placements,
});

describe('computeInstallEffort', () => {
  it('returns S for simple layouts without cameras and <=6 sensors', () => {
    const placements = Array.from({ length: 6 }, (_, index) => createPlacement('door_sensor', index));
    const result = computeInstallEffort({ floorplan: createFloorplan(placements) });

    expect(result.rangeKey).toBe('S');
    expect(result.hoursMin).toBe(INSTALL_EFFORT_RANGES.S.min);
    expect(result.hoursMax).toBe(INSTALL_EFFORT_RANGES.S.max);
  });

  it('keeps standard layouts at M for indoor camera + doorbell', () => {
    const placements = [createPlacement('video_doorbell', 0), createPlacement('indoor_camera', 1)];
    const result = computeInstallEffort({ floorplan: createFloorplan(placements) });

    expect(result.rangeKey).toBe('M');
  });

  it('upshifts to L when outdoor PoE cameras are present', () => {
    const placements = [createPlacement('outdoor_camera_poe', 0)];
    const result = computeInstallEffort({ floorplan: createFloorplan(placements) });

    expect(result.rangeKey).toBe('L');
  });

  it('upshifts to XL when there are two floors', () => {
    const placements = [createPlacement('motion_sensor', 0)];
    const result = computeInstallEffort({ floorplan: createFloorplan(placements, 2) });

    expect(result.rangeKey).toBe('XL');
  });

  it('adds badges for Wi-Fi, PoE, exterior, doorbell power, and drilling/ladders', () => {
    const placements = [
      createPlacement('indoor_camera', 0),
      createPlacement('video_doorbell', 1),
      createPlacement('outdoor_camera_poe', 2),
    ];
    const result = computeInstallEffort({ floorplan: createFloorplan(placements, 2) });

    expect(result.badges).toEqual(
      expect.arrayContaining([
        INSTALL_EFFORT_BADGES.wifiDevices,
        INSTALL_EFFORT_BADGES.poeRuns,
        INSTALL_EFFORT_BADGES.exteriorMounting,
        INSTALL_EFFORT_BADGES.doorbellPowerCheck,
        INSTALL_EFFORT_BADGES.drillingLadders,
      ]),
    );
  });
});

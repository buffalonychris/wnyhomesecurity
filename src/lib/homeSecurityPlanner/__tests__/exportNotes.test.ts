import { describe, expect, it } from 'vitest';
import type { FloorplanPlacement } from '../../homeSecurityFunnel';
import type { ExteriorDoorException, RoomCoverageState } from '../coverageModel';
import { buildCoverageNotes, buildDeviceSummary } from '../export/exportNotes';

const createPlacement = (overrides: Partial<FloorplanPlacement>): FloorplanPlacement => ({
  id: overrides.id ?? 'placement-1',
  deviceKey: overrides.deviceKey ?? 'indoor_camera',
  label: overrides.label ?? 'Device',
  floorId: overrides.floorId ?? 'floor-1',
  roomId: overrides.roomId,
  position: overrides.position ?? { x: 50, y: 50 },
  wallSnap: overrides.wallSnap,
  rotation: overrides.rotation,
  required: overrides.required ?? false,
  source: overrides.source ?? 'user_added',
});

describe('exportNotes device summary', () => {
  it('builds camera, motion, and entry counts with camera class breakdown', () => {
    const placements = [
      createPlacement({ deviceKey: 'video_doorbell' }),
      createPlacement({ id: 'placement-2', deviceKey: 'indoor_camera' }),
      createPlacement({ id: 'placement-3', deviceKey: 'outdoor_camera_poe' }),
      createPlacement({ id: 'placement-4', deviceKey: 'motion_sensor' }),
      createPlacement({ id: 'placement-5', deviceKey: 'door_sensor' }),
      createPlacement({ id: 'placement-6', deviceKey: 'window_sensor' }),
    ];

    const summary = buildDeviceSummary({ placements });

    expect(summary.cameras.total).toBe(3);
    expect(summary.cameras.byClass).toEqual({
      doorbell: 1,
      indoor_wifi: 1,
      outdoor_poe: 1,
    });
    expect(summary.motion).toBe(1);
    expect(summary.entry).toBe(2);
  });
});

describe('exportNotes coverage notes', () => {
  it('builds rollups and exterior door exception formatting', () => {
    const roomStates: RoomCoverageState[] = [
      { roomId: 'room-1', floorId: 'floor-1', state: 'green', hasEntrySensor: false },
      { roomId: 'room-2', floorId: 'floor-1', state: 'yellow', hasEntrySensor: true },
      { roomId: 'room-3', floorId: 'floor-2', state: 'red', hasEntrySensor: false },
    ];

    const doorExceptions: ExteriorDoorException[] = [
      {
        id: 'door-ex-1',
        floorId: 'floor-1',
        roomId: 'room-1',
        doorId: 'door-1',
        position: { x: 10, y: 12 },
        label: 'Front Door',
      },
      {
        id: 'door-ex-2',
        floorId: 'floor-1',
        roomId: 'room-2',
        doorId: 'door-2',
        position: { x: 40, y: 12 },
        label: 'Back Door',
      },
    ];

    const notes = buildCoverageNotes(roomStates, doorExceptions);

    expect(notes.rollups).toEqual([
      'Green coverage: 1 room',
      'Partial coverage: 1 room',
      'Limited coverage: 1 room',
    ]);
    expect(notes.exceptions).toEqual([
      'Back Door (no camera coverage)',
      'Front Door (no camera coverage)',
    ]);
  });
});

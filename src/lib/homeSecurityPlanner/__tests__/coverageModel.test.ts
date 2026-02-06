import { describe, expect, it } from 'vitest';
import type { FloorplanFloor, FloorplanPlacement } from '../../homeSecurityFunnel';
import {
  computeExteriorDoorExceptions,
  computeRoomCoverageStates,
} from '../coverageModel';

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

const baseFloor: FloorplanFloor = {
  id: 'floor-1',
  label: 'Floor 1',
  rooms: [
    {
      id: 'room-1',
      name: 'Living Room',
      rect: { x: 0, y: 0, w: 120, h: 120 },
      doors: [],
      windows: [],
    },
  ],
};

describe('coverageModel room classification', () => {
  it('classifies a room as green when camera coverage is strong', () => {
    const placements = [
      createPlacement({
        id: 'camera-1',
        deviceKey: 'indoor_camera',
        position: { x: 30, y: 60 },
        rotation: 90,
      }),
      createPlacement({
        id: 'camera-2',
        deviceKey: 'indoor_camera',
        position: { x: 90, y: 60 },
        rotation: 270,
      }),
    ];

    const states = computeRoomCoverageStates(baseFloor, placements);
    expect(states[0]?.state).toBe('green');
  });

  it('classifies a room as yellow when entry sensors are present without area coverage', () => {
    const placements = [
      createPlacement({
        id: 'door-sensor',
        deviceKey: 'door_sensor',
        position: { x: 10, y: 110 },
      }),
    ];

    const states = computeRoomCoverageStates(baseFloor, placements);
    expect(states[0]?.state).toBe('yellow');
  });

  it('classifies a room as red when coverage is limited', () => {
    const states = computeRoomCoverageStates(baseFloor, []);
    expect(states[0]?.state).toBe('red');
  });

  it('keeps motion coverage clipped to the sensor room', () => {
    const floor: FloorplanFloor = {
      ...baseFloor,
      rooms: [
        {
          id: 'room-1',
          name: 'Living Room',
          rect: { x: 0, y: 0, w: 100, h: 100 },
          doors: [],
          windows: [],
        },
        {
          id: 'room-2',
          name: 'Kitchen',
          rect: { x: 120, y: 0, w: 100, h: 100 },
          doors: [],
          windows: [],
        },
      ],
    };

    const placements = [
      createPlacement({
        id: 'motion-1',
        deviceKey: 'motion_sensor',
        position: { x: 50, y: 50 },
        roomId: 'room-1',
      }),
    ];

    const states = computeRoomCoverageStates(floor, placements);
    const roomTwo = states.find((state) => state.roomId === 'room-2');
    expect(roomTwo?.state).toBe('red');
  });
});

describe('coverageModel exterior door exceptions', () => {
  it('flags exterior doors when no camera coverage exists', () => {
    const floor: FloorplanFloor = {
      ...baseFloor,
      rooms: [
        {
          ...baseFloor.rooms[0],
          doors: [
            { id: 'door-1', label: 'Front Door', wall: 's', offset: 0.5, exterior: true },
          ],
        },
      ],
    };

    const exceptions = computeExteriorDoorExceptions(floor, []);
    expect(exceptions).toHaveLength(1);
    expect(exceptions[0]?.doorId).toBe('door-1');
  });
});

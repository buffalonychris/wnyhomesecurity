import { describe, expect, it } from 'vitest';
import type { FloorplanRoom } from '../../../lib/homeSecurityFunnel';
import { getRoomFurnishings } from '../floorplanFurnishings';

const baseRoom = (overrides: Partial<FloorplanRoom>): FloorplanRoom => ({
  id: 'room-1',
  name: 'Room',
  kind: undefined,
  rect: { x: 0, y: 0, w: 160, h: 120 },
  doors: [],
  windows: [],
  ...overrides,
});

describe('getRoomFurnishings', () => {
  it('returns the expected furnishing ids for a bathroom', () => {
    const furnishings = getRoomFurnishings(
      baseRoom({
        name: 'Bathroom',
        kind: 'bathroom',
        rect: { x: 0, y: 0, w: 160, h: 120 },
      }),
    );

    expect(furnishings.map((item) => item.id)).toEqual(['sink', 'toilet']);
  });

  it('reduces furnishing count when the room is small', () => {
    const furnishings = getRoomFurnishings(
      baseRoom({
        name: 'Bedroom',
        kind: 'bedroom',
        rect: { x: 0, y: 0, w: 80, h: 60 },
      }),
    );

    expect(furnishings.map((item) => item.id)).toEqual(['bed']);
  });

  it('derives dining furnishings from room name', () => {
    const furnishings = getRoomFurnishings(
      baseRoom({
        name: 'Dining Room',
        kind: undefined,
        rect: { x: 0, y: 0, w: 200, h: 130 },
      }),
    );

    expect(furnishings.map((item) => item.id)).toEqual(['dining-table', 'curio']);
  });
});

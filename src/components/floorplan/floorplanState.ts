import type { HomeSecurityFloorplan } from '../../lib/homeSecurityFunnel';

export type CompassOrientation = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
export type HomeSecurityFloorplanWithCompass = HomeSecurityFloorplan & {
  compassOrientation: CompassOrientation | null;
};

export type FloorplanStairDirection = 'up' | 'down';

export type FloorplanStair = {
  id: string;
  floorId: string;
  floorIndex: number;
  position: { x: number; y: number };
  direction: FloorplanStairDirection;
};

export type HomeSecurityFloorplanWithStairs = HomeSecurityFloorplanWithCompass & {
  stairs: FloorplanStair[];
  homeFootprintFeet: { widthFt: number; depthFt: number } | null;
  feetPerStep: number | null;
  roomDimensionsFeet: Record<string, { widthFt: number; depthFt: number } | null>;
};

const createStairId = () => `stairs-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export const ensureFloorplanStairs = (floorplan: HomeSecurityFloorplan): HomeSecurityFloorplanWithStairs => {
  const stairs = 'stairs' in floorplan && Array.isArray((floorplan as HomeSecurityFloorplanWithStairs).stairs)
    ? (floorplan as HomeSecurityFloorplanWithStairs).stairs
    : [];
  const compassOrientation =
    'compassOrientation' in floorplan
      ? ((floorplan as HomeSecurityFloorplanWithCompass).compassOrientation ?? null)
      : null;
  const homeFootprintFeet =
    'homeFootprintFeet' in floorplan
      ? ((floorplan as HomeSecurityFloorplanWithStairs).homeFootprintFeet ?? null)
      : null;
  const feetPerStep =
    'feetPerStep' in floorplan ? ((floorplan as HomeSecurityFloorplanWithStairs).feetPerStep ?? null) : null;
  const roomDimensionsFeet =
    'roomDimensionsFeet' in floorplan
      ? ((floorplan as HomeSecurityFloorplanWithStairs).roomDimensionsFeet ?? {})
      : {};
  return { ...floorplan, compassOrientation, stairs, homeFootprintFeet, feetPerStep, roomDimensionsFeet };
};

export const removePlacementById = <T extends HomeSecurityFloorplan>(floorplan: T, placementId: string): T => ({
  ...floorplan,
  placements: floorplan.placements.filter((placement) => placement.id !== placementId),
});

export const removeRoomById = <T extends HomeSecurityFloorplan>(
  floorplan: T,
  floorId: string,
  roomId: string,
): T => ({
  ...floorplan,
  floors: floorplan.floors.map((floor) =>
    floor.id === floorId ? { ...floor, rooms: floor.rooms.filter((room) => room.id !== roomId) } : floor,
  ),
  placements: floorplan.placements.filter((placement) => placement.roomId !== roomId),
  ...(('roomDimensionsFeet' in floorplan && floorplan.roomDimensionsFeet)
    ? {
        roomDimensionsFeet: Object.fromEntries(
          Object.entries(floorplan.roomDimensionsFeet).filter(([key]) => key !== roomId),
        ),
      }
    : {}),
});

export const addStairs = (
  floorplan: HomeSecurityFloorplanWithStairs,
  input: Omit<FloorplanStair, 'id'> & { id?: string },
): HomeSecurityFloorplanWithStairs => ({
  ...floorplan,
  stairs: [
    ...floorplan.stairs,
    {
      id: input.id ?? createStairId(),
      ...input,
    },
  ],
});

export const removeStairsById = (
  floorplan: HomeSecurityFloorplanWithStairs,
  stairId: string,
): HomeSecurityFloorplanWithStairs => ({
  ...floorplan,
  stairs: floorplan.stairs.filter((stair) => stair.id !== stairId),
});

export const setCompassOrientation = (
  floorplan: HomeSecurityFloorplanWithStairs,
  compassOrientation: CompassOrientation | null,
): HomeSecurityFloorplanWithStairs => ({
  ...floorplan,
  compassOrientation,
});

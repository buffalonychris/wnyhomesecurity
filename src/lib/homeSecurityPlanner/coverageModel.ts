import type { FloorplanFloor, FloorplanPlacement, FloorplanRoom } from '../homeSecurityFunnel';
import type { FloorplanDeviceType } from '../../components/floorplan/deviceCatalog';
import { findRoomAtPoint, getPlacementRotation } from '../../components/floorplan/floorplanUtils';
import {
  CAMERA_CLASSES,
  COVERAGE_STATE_COLORS,
  DOOR_VICINITY_RADIUS,
  ENTRY_SENSOR_KEYS,
  MOTION_SENSOR_CLASS,
  ROOM_COVERAGE_SAMPLE_GRID,
  ROOM_COVERAGE_THRESHOLDS,
  type CoverageState,
} from './coverageConstants';

export type CameraCoverageShape = {
  id: string;
  floorId: string;
  deviceKey: FloorplanDeviceType;
  origin: { x: number; y: number };
  radius: number;
  angle: number;
  rotation: number;
};

export type MotionCoverageShape = {
  id: string;
  floorId: string;
  deviceKey: FloorplanDeviceType;
  center: { x: number; y: number };
  radius: number;
  roomId?: string;
};

export type RoomCoverageState = {
  roomId: string;
  floorId: string;
  state: CoverageState;
  hasEntrySensor: boolean;
};

export type ExteriorDoorException = {
  id: string;
  floorId: string;
  roomId: string;
  doorId: string;
  position: { x: number; y: number };
  label: string;
};

export type FloorplanCoverageOverlay = {
  cameraCones: CameraCoverageShape[];
  motionZones: MotionCoverageShape[];
  roomStates: RoomCoverageState[];
  exteriorDoorExceptions: ExteriorDoorException[];
};

const cameraClassByDevice = new Map<FloorplanDeviceType, { radius: number; angle: number }>(
  Object.values(CAMERA_CLASSES).flatMap((cameraClass) =>
    cameraClass.deviceKeys.map((deviceKey) => [deviceKey, { radius: cameraClass.radius, angle: cameraClass.angle }]),
  ),
);

const motionClassByDevice = new Map<FloorplanDeviceType, { radius: number }>(
  MOTION_SENSOR_CLASS.deviceKeys.map((deviceKey) => [deviceKey, { radius: MOTION_SENSOR_CLASS.radius }]),
);

const getRoomDoorPosition = (room: FloorplanRoom, wall: FloorplanRoom['doors'][number]['wall'], offset: number) => {
  const clampedOffset = Math.min(Math.max(offset, 0), 1);
  switch (wall) {
    case 'n':
      return { x: room.rect.x + room.rect.w * clampedOffset, y: room.rect.y };
    case 's':
      return { x: room.rect.x + room.rect.w * clampedOffset, y: room.rect.y + room.rect.h };
    case 'e':
      return { x: room.rect.x + room.rect.w, y: room.rect.y + room.rect.h * clampedOffset };
    case 'w':
    default:
      return { x: room.rect.x, y: room.rect.y + room.rect.h * clampedOffset };
  }
};

const getDirectionVector = (rotation: number) => {
  const radians = (rotation * Math.PI) / 180;
  return { x: Math.sin(radians), y: -Math.cos(radians) };
};

const isPointInsideCone = (point: { x: number; y: number }, cone: CameraCoverageShape, radiusBoost = 0) => {
  const dx = point.x - cone.origin.x;
  const dy = point.y - cone.origin.y;
  const distance = Math.hypot(dx, dy);
  if (distance > cone.radius + radiusBoost) return false;
  if (distance === 0) return true;
  const direction = getDirectionVector(cone.rotation);
  const dot = (dx * direction.x + dy * direction.y) / distance;
  const angle = Math.acos(Math.min(Math.max(dot, -1), 1));
  const halfAngle = ((cone.angle / 2) * Math.PI) / 180;
  return angle <= halfAngle;
};

const isPointInsideMotionZone = (point: { x: number; y: number }, zone: MotionCoverageShape) => {
  const dx = point.x - zone.center.x;
  const dy = point.y - zone.center.y;
  return Math.hypot(dx, dy) <= zone.radius;
};

const buildSamplePoints = (room: FloorplanRoom) => {
  const points: Array<{ x: number; y: number }> = [];
  const columns = ROOM_COVERAGE_SAMPLE_GRID;
  const rows = ROOM_COVERAGE_SAMPLE_GRID;
  const xStep = room.rect.w / columns;
  const yStep = room.rect.h / rows;
  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      points.push({
        x: room.rect.x + xStep * (column + 0.5),
        y: room.rect.y + yStep * (row + 0.5),
      });
    }
  }
  return points;
};

const getPlacementRoomId = (floor: FloorplanFloor, placement: FloorplanPlacement) => {
  if (placement.roomId) return placement.roomId;
  return findRoomAtPoint(floor, placement.position)?.id;
};

export const computeCameraCoverageShapes = (
  floor: FloorplanFloor,
  placements: FloorplanPlacement[],
): CameraCoverageShape[] => {
  return placements
    .filter((placement) => placement.floorId === floor.id)
    .flatMap((placement) => {
      const cameraClass = cameraClassByDevice.get(placement.deviceKey);
      if (!cameraClass) return [];
      return [
        {
          id: `camera-${placement.id}`,
          floorId: floor.id,
          deviceKey: placement.deviceKey,
          origin: placement.position,
          radius: cameraClass.radius,
          angle: cameraClass.angle,
          rotation: getPlacementRotation(placement),
        },
      ];
    });
};

export const computeMotionCoverageShapes = (
  floor: FloorplanFloor,
  placements: FloorplanPlacement[],
): MotionCoverageShape[] => {
  return placements
    .filter((placement) => placement.floorId === floor.id)
    .flatMap((placement) => {
      const motionClass = motionClassByDevice.get(placement.deviceKey);
      if (!motionClass) return [];
      return [
        {
          id: `motion-${placement.id}`,
          floorId: floor.id,
          deviceKey: placement.deviceKey,
          center: placement.position,
          radius: motionClass.radius,
          roomId: getPlacementRoomId(floor, placement),
        },
      ];
    });
};

export const computeRoomCoverageStates = (
  floor: FloorplanFloor,
  placements: FloorplanPlacement[],
  cameraCones: CameraCoverageShape[] = computeCameraCoverageShapes(floor, placements),
  motionZones: MotionCoverageShape[] = computeMotionCoverageShapes(floor, placements),
): RoomCoverageState[] => {
  const entrySensorRoomIds = new Set(
    placements
      .filter(
        (placement) => placement.floorId === floor.id && ENTRY_SENSOR_KEYS.includes(placement.deviceKey),
      )
      .map((placement) => getPlacementRoomId(floor, placement))
      .filter((roomId): roomId is string => Boolean(roomId)),
  );

  return floor.rooms.map((room) => {
    const samples = buildSamplePoints(room);
    const coveredCount = samples.filter((point) => {
      const isCoveredByCamera = cameraCones.some((cone) => isPointInsideCone(point, cone));
      if (isCoveredByCamera) return true;
      return motionZones.some((zone) => zone.roomId === room.id && isPointInsideMotionZone(point, zone));
    }).length;
    const ratio = samples.length ? coveredCount / samples.length : 0;
    const hasEntrySensor = entrySensorRoomIds.has(room.id);
    let state: CoverageState = 'red';
    if (ratio >= ROOM_COVERAGE_THRESHOLDS.green) {
      state = 'green';
    } else if (ratio >= ROOM_COVERAGE_THRESHOLDS.yellow || hasEntrySensor) {
      state = 'yellow';
    }
    return {
      roomId: room.id,
      floorId: floor.id,
      state,
      hasEntrySensor,
    };
  });
};

export const computeExteriorDoorExceptions = (
  floor: FloorplanFloor,
  placements: FloorplanPlacement[],
  cameraCones: CameraCoverageShape[] = computeCameraCoverageShapes(floor, placements),
): ExteriorDoorException[] => {
  return floor.rooms.flatMap((room) => {
    return room.doors
      .filter((door) => door.exterior)
      .flatMap((door) => {
        const position = getRoomDoorPosition(room, door.wall, door.offset);
        const isCovered = cameraCones.some((cone) => isPointInsideCone(position, cone, DOOR_VICINITY_RADIUS));
        if (isCovered) return [];
        return [
          {
            id: `door-exception-${door.id}`,
            floorId: floor.id,
            roomId: room.id,
            doorId: door.id,
            position,
            label: door.label,
          },
        ];
      });
  });
};

export const computeFloorplanCoverageOverlay = (
  floor: FloorplanFloor,
  placements: FloorplanPlacement[],
): FloorplanCoverageOverlay => {
  const cameraCones = computeCameraCoverageShapes(floor, placements);
  const motionZones = computeMotionCoverageShapes(floor, placements);
  return {
    cameraCones,
    motionZones,
    roomStates: computeRoomCoverageStates(floor, placements, cameraCones, motionZones),
    exteriorDoorExceptions: computeExteriorDoorExceptions(floor, placements, cameraCones),
  };
};

export const getCoverageStateStyle = (state: CoverageState) => COVERAGE_STATE_COLORS[state];

export const createConePath = (cone: CameraCoverageShape, segments = 18) => {
  const halfAngle = cone.angle / 2;
  const points = Array.from({ length: segments + 1 }, (_, index) => {
    const angle = -halfAngle + (cone.angle * index) / segments;
    const rotation = (cone.rotation + angle) * (Math.PI / 180);
    return {
      x: cone.origin.x + cone.radius * Math.sin(rotation),
      y: cone.origin.y - cone.radius * Math.cos(rotation),
    };
  });
  const pathPoints = points.map((point) => `${point.x},${point.y}`).join(' ');
  return `M ${cone.origin.x},${cone.origin.y} L ${pathPoints} Z`;
};

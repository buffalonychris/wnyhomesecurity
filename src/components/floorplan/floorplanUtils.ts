import type { FloorplanFloor, FloorplanPlacement, FloorplanRoom, FloorplanWall } from '../../lib/homeSecurityFunnel';
import type { CompassOrientation } from './floorplanState';

export type WindowStylePreset = 'standard' | 'basement' | 'glassBlock';
export type ResizeHandle = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export type FloorplanWindowMarker = FloorplanRoom['windows'][number] & {
  isGroundLevel?: boolean;
  windowStyle?: WindowStylePreset;
};

export type WindowMarkerVisual = {
  thickness: number;
  length: number;
  background: string;
  border?: string;
  boxShadow?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  borderRadius?: string;
  badge?: {
    label: string;
    background: string;
    color: string;
    border: string;
  };
};

export const GRID_SIZE = 10;
export const RESIZE_GRID_STEP = 12;
export const MIN_ROOM_SIZE = 48;
export const FEET_PER_STEP = 2;
export const EXTERIOR_PADDING = 16;
export const MIN_EXTERIOR_SIZE = 160;
export const YARD_PADDING = 48;
export const CONTEXT_GAP = 8;
export const SIDEWALK_THICKNESS = 14;
export const DRIVEWAY_THICKNESS = 28;
export const SIDEWALK_LENGTH_RATIO = 0.6;
export const DRIVEWAY_LENGTH_RATIO = 0.35;
export const DRIVEWAY_OFFSET_RATIO = 0.55;

export const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;

const snapDeltaToGrid = (value: number) => Math.round(value / RESIZE_GRID_STEP) * RESIZE_GRID_STEP;

export const snapFeet = (value: number) => Math.round(value / FEET_PER_STEP) * FEET_PER_STEP;

export const feetToCanvasUnits = (feet: number, feetPerStep: number) => {
  if (!Number.isFinite(feet) || !Number.isFinite(feetPerStep) || feetPerStep <= 0) return 0;
  const steps = Math.round(feet / feetPerStep);
  return steps * RESIZE_GRID_STEP;
};

export const clampUnit = (value: number) => Math.min(Math.max(value, 0), 1);

export const clampToRange = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export const getDefaultWindowGroundLevel = (floorIndex: number) => floorIndex === 0;

export const clampPointToRect = (
  point: { x: number; y: number },
  rect: { x: number; y: number; w: number; h: number },
) => ({
  x: clampToRange(point.x, rect.x, rect.x + rect.w),
  y: clampToRange(point.y, rect.y, rect.y + rect.h),
});

export const computeSnappedRectFromHandleDrag = (
  rect: { x: number; y: number; w: number; h: number },
  handle: ResizeHandle,
  dx: number,
  dy: number,
) => {
  const snappedDx = snapDeltaToGrid(dx);
  const snappedDy = snapDeltaToGrid(dy);
  const next = { ...rect };
  const right = rect.x + rect.w;
  const bottom = rect.y + rect.h;

  if (handle.includes('e')) {
    next.w = rect.w + snappedDx;
  }
  if (handle.includes('w')) {
    next.w = rect.w - snappedDx;
    next.x = rect.x + snappedDx;
  }
  if (handle.includes('s')) {
    next.h = rect.h + snappedDy;
  }
  if (handle.includes('n')) {
    next.h = rect.h - snappedDy;
    next.y = rect.y + snappedDy;
  }

  if (next.w < MIN_ROOM_SIZE) {
    next.w = MIN_ROOM_SIZE;
    if (handle.includes('w')) {
      next.x = right - next.w;
    } else {
      next.x = rect.x;
    }
  }

  if (next.h < MIN_ROOM_SIZE) {
    next.h = MIN_ROOM_SIZE;
    if (handle.includes('n')) {
      next.y = bottom - next.h;
    } else {
      next.y = rect.y;
    }
  }

  return next;
};

type ExteriorRect = { x: number; y: number; w: number; h: number };

export const computeScaleFromFootprint = (exteriorRect: ExteriorRect, widthFt: number, depthFt: number) => {
  const safeWidth = Math.max(widthFt, 1);
  const safeDepth = Math.max(depthFt, 1);
  const canvasUnitsPerFootX = exteriorRect.w / safeWidth;
  const canvasUnitsPerFootY = exteriorRect.h / safeDepth;
  // Use the average axis scale to avoid distortion while keeping the scale simple.
  const averageUnitsPerFoot = (canvasUnitsPerFootX + canvasUnitsPerFootY) / 2;
  const feetPerCanvasUnit = 1 / averageUnitsPerFoot;
  return feetPerCanvasUnit * RESIZE_GRID_STEP;
};

export const applyRoomDimensions = (
  roomRect: { x: number; y: number; w: number; h: number },
  widthFt: number,
  depthFt: number,
  feetPerStep: number,
) => {
  const snappedWidthFt = snapFeet(widthFt);
  const snappedDepthFt = snapFeet(depthFt);
  const widthUnits = Math.max(MIN_ROOM_SIZE, feetToCanvasUnits(snappedWidthFt, feetPerStep));
  const depthUnits = Math.max(MIN_ROOM_SIZE, feetToCanvasUnits(snappedDepthFt, feetPerStep));
  return {
    ...roomRect,
    w: widthUnits,
    h: depthUnits,
  };
};

export const updateAnchoredMarkerAfterResize = <T extends { wall: FloorplanWall; offset: number }>(
  marker: T,
  _oldRect: { x: number; y: number; w: number; h: number },
  _newRect: { x: number; y: number; w: number; h: number },
): T => ({
  ...marker,
  offset: clampUnit(marker.offset),
});

export const findRoomAtPoint = (floor: FloorplanFloor | undefined, point: { x: number; y: number }) => {
  if (!floor) return undefined;
  return floor.rooms.find(
    (room) =>
      point.x >= room.rect.x &&
      point.x <= room.rect.x + room.rect.w &&
      point.y >= room.rect.y &&
      point.y <= room.rect.y + room.rect.h,
  );
};

export const autoSnapToNearestWall = (
  roomRect: FloorplanRoom['rect'],
  point: { x: number; y: number },
): { wall: FloorplanWall; offset: number } => {
  const clampedPoint = clampPointToRect(point, roomRect);
  const distances: Record<FloorplanWall, number> = {
    n: Math.abs(clampedPoint.y - roomRect.y),
    s: Math.abs(roomRect.y + roomRect.h - clampedPoint.y),
    w: Math.abs(clampedPoint.x - roomRect.x),
    e: Math.abs(roomRect.x + roomRect.w - clampedPoint.x),
  };
  const nearestWall = (Object.keys(distances) as FloorplanWall[]).reduce((closest, wall) =>
    distances[wall] < distances[closest] ? wall : closest,
  );
  const offset =
    nearestWall === 'n' || nearestWall === 's'
      ? clampUnit((clampedPoint.x - roomRect.x) / roomRect.w)
      : clampUnit((clampedPoint.y - roomRect.y) / roomRect.h);
  return { wall: nearestWall, offset };
};

export const getWallRotation = (wall: FloorplanWall) => {
  switch (wall) {
    case 'n':
      return 180;
    case 'e':
      return 270;
    case 'w':
      return 90;
    case 's':
    default:
      return 0;
  }
};

export const getPlacementRotation = (placement: Pick<FloorplanPlacement, 'rotation' | 'wallSnap'>) => {
  if (placement.rotation !== undefined && placement.rotation !== null) {
    return placement.rotation;
  }
  return placement.wallSnap ? getWallRotation(placement.wallSnap.wall) : 0;
};

export const getWallInsetPosition = (
  roomRect: FloorplanRoom['rect'],
  wallSnap: { wall: FloorplanWall; offset: number },
  inset = 12,
) => {
  const offset = clampUnit(wallSnap.offset);
  const safeInset = Math.min(inset, roomRect.w / 2, roomRect.h / 2);
  switch (wallSnap.wall) {
    case 'n':
      return { x: roomRect.x + roomRect.w * offset, y: roomRect.y + safeInset };
    case 's':
      return { x: roomRect.x + roomRect.w * offset, y: roomRect.y + roomRect.h - safeInset };
    case 'e':
      return { x: roomRect.x + roomRect.w - safeInset, y: roomRect.y + roomRect.h * offset };
    case 'w':
    default:
      return { x: roomRect.x + safeInset, y: roomRect.y + roomRect.h * offset };
  }
};

export const getWindowMarkerVisual = ({
  wall,
  isGroundLevel = false,
  windowStyle = 'standard',
}: {
  wall: FloorplanWall;
  isGroundLevel?: boolean;
  windowStyle?: WindowStylePreset;
}): WindowMarkerVisual => {
  const isHorizontal = wall === 'n' || wall === 's';
  const length = windowStyle === 'standard' ? 16 : 12;
  const baseThickness = windowStyle === 'glassBlock' ? 4 : windowStyle === 'basement' ? 3 : 2;
  const thickness = baseThickness + (isGroundLevel ? 2 : 0);
  const background = isGroundLevel ? 'rgba(255, 236, 196, 0.95)' : 'rgba(255, 255, 255, 0.9)';
  const border = isGroundLevel ? '1px solid rgba(255, 255, 255, 0.8)' : 'none';
  const boxShadow = isGroundLevel ? '0 0 8px rgba(255, 214, 140, 0.7)' : 'none';
  const backgroundImage =
    windowStyle === 'glassBlock'
      ? `repeating-linear-gradient(${isHorizontal ? '90deg' : '0deg'}, rgba(255, 255, 255, 0.65) 0, rgba(255, 255, 255, 0.65) 2px, rgba(255, 255, 255, 0.2) 2px, rgba(255, 255, 255, 0.2) 4px)`
      : undefined;
  const backgroundSize = windowStyle === 'glassBlock' ? (isHorizontal ? '6px 100%' : '100% 6px') : undefined;
  const borderRadius = windowStyle === 'glassBlock' ? '3px' : '999px';
  const badge = isGroundLevel
    ? {
        label: 'LOW',
        background: 'rgba(255, 192, 130, 0.85)',
        color: '#2a1b0f',
        border: '1px solid rgba(255, 236, 196, 0.9)',
      }
    : undefined;

  return {
    thickness,
    length,
    background,
    border,
    boxShadow,
    backgroundImage,
    backgroundSize,
    borderRadius,
    badge,
  };
};

export const getHallwaySurfaceStyle = () => ({
  backgroundColor: 'rgba(12, 15, 26, 0.72)',
  backgroundImage:
    'radial-gradient(circle at 1px 1px, rgba(160, 182, 210, 0.08) 0, rgba(160, 182, 210, 0.08) 1px, transparent 1.2px)',
  backgroundSize: '12px 12px',
});

const COMPASS_DOWN_ANGLE: Record<CompassOrientation, number> = {
  N: 0,
  NE: 45,
  E: 90,
  SE: 135,
  S: 180,
  SW: 225,
  W: 270,
  NW: 315,
};

const normalizeAngle = (value: number) => ((value % 360) + 360) % 360;

export const getCompassNorthArrowAngle = (orientation: CompassOrientation) =>
  normalizeAngle(180 - COMPASS_DOWN_ANGLE[orientation]);

export const getCompassNorthVector = (orientation: CompassOrientation) => {
  const angle = getCompassNorthArrowAngle(orientation);
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.sin(radians),
    y: -Math.cos(radians),
  };
};

export const getCompassOrientationLabel = (orientation: CompassOrientation | null) =>
  orientation ? `Screen-down = ${orientation}` : 'Not provided';

export const computeExteriorBounds = (rooms: FloorplanRoom[]): ExteriorRect | null => {
  if (!rooms.length) return null;
  const [first] = rooms;
  let minX = first.rect.x;
  let minY = first.rect.y;
  let maxX = first.rect.x + first.rect.w;
  let maxY = first.rect.y + first.rect.h;

  rooms.forEach((room) => {
    minX = Math.min(minX, room.rect.x);
    minY = Math.min(minY, room.rect.y);
    maxX = Math.max(maxX, room.rect.x + room.rect.w);
    maxY = Math.max(maxY, room.rect.y + room.rect.h);
  });

  let x = minX - EXTERIOR_PADDING;
  let y = minY - EXTERIOR_PADDING;
  let w = maxX - minX + EXTERIOR_PADDING * 2;
  let h = maxY - minY + EXTERIOR_PADDING * 2;

  if (rooms.length === 1) {
    const targetW = Math.max(w, MIN_EXTERIOR_SIZE);
    const targetH = Math.max(h, MIN_EXTERIOR_SIZE);
    const centerX = x + w / 2;
    const centerY = y + h / 2;
    w = targetW;
    h = targetH;
    x = centerX - w / 2;
    y = centerY - h / 2;
  }

  return { x, y, w, h };
};

export const determineFrontSideFromMainDoor = (
  exteriorRect: ExteriorRect,
  doorPosition: { x: number; y: number },
): FloorplanWall => {
  const distances: Record<FloorplanWall, number> = {
    n: Math.abs(doorPosition.y - exteriorRect.y),
    s: Math.abs(exteriorRect.y + exteriorRect.h - doorPosition.y),
    w: Math.abs(doorPosition.x - exteriorRect.x),
    e: Math.abs(exteriorRect.x + exteriorRect.w - doorPosition.x),
  };
  return (['s', 'n', 'e', 'w'] as FloorplanWall[]).reduce((closest, wall) =>
    distances[wall] < distances[closest] ? wall : closest,
  );
};

export const computeExteriorContextShapes = (
  exteriorRect: ExteriorRect,
  frontSide: FloorplanWall,
): {
  yardRect: ExteriorRect;
  sidewalkBand: ExteriorRect;
  drivewayBand: ExteriorRect;
} => {
  const yardRect = {
    x: exteriorRect.x - YARD_PADDING,
    y: exteriorRect.y - YARD_PADDING,
    w: exteriorRect.w + YARD_PADDING * 2,
    h: exteriorRect.h + YARD_PADDING * 2,
  };
  const sidewalkLength = Math.max(exteriorRect.w * SIDEWALK_LENGTH_RATIO, 80);
  const drivewayLength = Math.max(exteriorRect.w * DRIVEWAY_LENGTH_RATIO, 72);
  const sidewalkHeight = SIDEWALK_THICKNESS;
  const drivewayHeight = DRIVEWAY_THICKNESS;
  const centeredSidewalkX = exteriorRect.x + (exteriorRect.w - sidewalkLength) / 2;
  const drivewayX = exteriorRect.x + exteriorRect.w * DRIVEWAY_OFFSET_RATIO;
  const sidewalkY = exteriorRect.y - CONTEXT_GAP - sidewalkHeight;
  const drivewayY = exteriorRect.y - CONTEXT_GAP - drivewayHeight;

  if (frontSide === 'n') {
    return {
      yardRect,
      sidewalkBand: {
        x: centeredSidewalkX,
        y: sidewalkY,
        w: sidewalkLength,
        h: sidewalkHeight,
      },
      drivewayBand: {
        x: drivewayX,
        y: drivewayY,
        w: drivewayLength,
        h: drivewayHeight,
      },
    };
  }

  if (frontSide === 's') {
    return {
      yardRect,
      sidewalkBand: {
        x: centeredSidewalkX,
        y: exteriorRect.y + exteriorRect.h + CONTEXT_GAP,
        w: sidewalkLength,
        h: sidewalkHeight,
      },
      drivewayBand: {
        x: drivewayX,
        y: exteriorRect.y + exteriorRect.h + CONTEXT_GAP,
        w: drivewayLength,
        h: drivewayHeight,
      },
    };
  }

  const sidewalkLengthVertical = Math.max(exteriorRect.h * SIDEWALK_LENGTH_RATIO, 80);
  const drivewayLengthVertical = Math.max(exteriorRect.h * DRIVEWAY_LENGTH_RATIO, 72);
  const centeredSidewalkY = exteriorRect.y + (exteriorRect.h - sidewalkLengthVertical) / 2;
  const drivewayYVertical = exteriorRect.y + exteriorRect.h * DRIVEWAY_OFFSET_RATIO;

  if (frontSide === 'e') {
    return {
      yardRect,
      sidewalkBand: {
        x: exteriorRect.x + exteriorRect.w + CONTEXT_GAP,
        y: centeredSidewalkY,
        w: sidewalkHeight,
        h: sidewalkLengthVertical,
      },
      drivewayBand: {
        x: exteriorRect.x + exteriorRect.w + CONTEXT_GAP,
        y: drivewayYVertical,
        w: drivewayHeight,
        h: drivewayLengthVertical,
      },
    };
  }

  return {
    yardRect,
    sidewalkBand: {
      x: exteriorRect.x - CONTEXT_GAP - sidewalkHeight,
      y: centeredSidewalkY,
      w: sidewalkHeight,
      h: sidewalkLengthVertical,
    },
    drivewayBand: {
      x: exteriorRect.x - CONTEXT_GAP - drivewayHeight,
      y: drivewayYVertical,
      w: drivewayHeight,
      h: drivewayLengthVertical,
    },
  };
};

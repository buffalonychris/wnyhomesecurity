import { describe, expect, it } from 'vitest';
import { isWallAnchored } from '../deviceCatalog';
import {
  autoSnapToNearestWall,
  applyRoomDimensions,
  clampPointToRect,
  computeExteriorContextShapes,
  computeExteriorBounds,
  computeScaleFromFootprint,
  computeSnappedRectFromHandleDrag,
  CONTEXT_GAP,
  determineFrontSideFromMainDoor,
  EXTERIOR_PADDING,
  FEET_PER_STEP,
  DRIVEWAY_THICKNESS,
  getCompassNorthArrowAngle,
  getCompassNorthVector,
  getDefaultWindowGroundLevel,
  getHallwaySurfaceStyle,
  getPlacementRotation,
  getWindowMarkerVisual,
  SIDEWALK_THICKNESS,
  MIN_ROOM_SIZE,
  MIN_EXTERIOR_SIZE,
  RESIZE_GRID_STEP,
  snapFeet,
  YARD_PADDING,
  updateAnchoredMarkerAfterResize,
} from '../floorplanUtils';

describe('floorplan utils', () => {
  it('identifies wall-anchored devices', () => {
    expect(isWallAnchored('door_sensor')).toBe(true);
    expect(isWallAnchored('window_sensor')).toBe(true);
    expect(isWallAnchored('video_doorbell')).toBe(true);
    expect(isWallAnchored('outdoor_camera_poe')).toBe(true);
    expect(isWallAnchored('siren_chime')).toBe(true);
    expect(isWallAnchored('indoor_camera')).toBe(false);
    expect(isWallAnchored('motion_sensor')).toBe(false);
    expect(isWallAnchored('leak_sensor')).toBe(false);
  });

  it('auto-snaps to nearest wall with valid offset', () => {
    const roomRect = { x: 0, y: 0, w: 200, h: 100 };
    const snapTop = autoSnapToNearestWall(roomRect, { x: 50, y: 4 });
    expect(snapTop.wall).toBe('n');
    expect(snapTop.offset).toBeGreaterThanOrEqual(0);
    expect(snapTop.offset).toBeLessThanOrEqual(1);

    const snapRight = autoSnapToNearestWall(roomRect, { x: 300, y: 50 });
    expect(snapRight.wall).toBe('e');
    expect(snapRight.offset).toBeGreaterThanOrEqual(0);
    expect(snapRight.offset).toBeLessThanOrEqual(1);
  });

  it('defaults rotation to wall-facing direction when rotation is unset', () => {
    const rotationFromWall = getPlacementRotation({ rotation: undefined, wallSnap: { wall: 'w', offset: 0.5 } });
    expect(rotationFromWall).toBe(90);

    const explicitRotation = getPlacementRotation({ rotation: 45, wallSnap: { wall: 's', offset: 0.2 } });
    expect(explicitRotation).toBe(45);

    const defaultRotation = getPlacementRotation({ rotation: undefined, wallSnap: undefined });
    expect(defaultRotation).toBe(0);
  });

  it('defaults ground-level windows to the lowest floor', () => {
    expect(getDefaultWindowGroundLevel(0)).toBe(true);
    expect(getDefaultWindowGroundLevel(1)).toBe(false);
    expect(getDefaultWindowGroundLevel(2)).toBe(false);
  });

  it('returns distinct visual tokens for ground-level windows', () => {
    const standard = getWindowMarkerVisual({ wall: 'n', isGroundLevel: false, windowStyle: 'standard' });
    const groundLevel = getWindowMarkerVisual({ wall: 'n', isGroundLevel: true, windowStyle: 'standard' });
    const glassBlock = getWindowMarkerVisual({ wall: 'e', isGroundLevel: true, windowStyle: 'glassBlock' });

    expect(groundLevel.thickness).toBeGreaterThan(standard.thickness);
    expect(groundLevel.boxShadow).not.toBe(standard.boxShadow);
    expect(glassBlock.backgroundImage).toContain('repeating-linear-gradient');
  });

  it('builds a muted hallway surface style', () => {
    const style = getHallwaySurfaceStyle();
    expect(style.backgroundColor).toContain('rgba');
    expect(style.backgroundImage).toContain('radial-gradient');
    expect(style.backgroundSize).toBe('12px 12px');
  });

  it('maps compass orientation to a north arrow angle and vector', () => {
    expect(getCompassNorthArrowAngle('N')).toBe(180);
    expect(getCompassNorthArrowAngle('NE')).toBe(135);
    expect(getCompassNorthArrowAngle('E')).toBe(90);
    expect(getCompassNorthArrowAngle('SE')).toBe(45);
    expect(getCompassNorthArrowAngle('S')).toBe(0);
    expect(getCompassNorthArrowAngle('SW')).toBe(315);
    expect(getCompassNorthArrowAngle('W')).toBe(270);
    expect(getCompassNorthArrowAngle('NW')).toBe(225);

    const northVector = getCompassNorthVector('S');
    expect(northVector.x).toBeCloseTo(0, 3);
    expect(northVector.y).toBeCloseTo(-1, 3);

    const eastVector = getCompassNorthVector('E');
    expect(eastVector.x).toBeCloseTo(1, 3);
    expect(eastVector.y).toBeCloseTo(0, 3);

    const downVector = getCompassNorthVector('N');
    expect(downVector.x).toBeCloseTo(0, 3);
    expect(downVector.y).toBeCloseTo(1, 3);

    const diagVector = getCompassNorthVector('NE');
    expect(diagVector.x).toBeCloseTo(0.707, 2);
    expect(diagVector.y).toBeCloseTo(0.707, 2);
  });

  it('computes a padded exterior boundary for rooms', () => {
    const bounds = computeExteriorBounds([
      { id: 'room-1', name: 'Room 1', rect: { x: 40, y: 50, w: 100, h: 80 }, doors: [], windows: [] },
      { id: 'room-2', name: 'Room 2', rect: { x: 180, y: 30, w: 60, h: 120 }, doors: [], windows: [] },
    ]);
    expect(bounds).not.toBeNull();
    expect(bounds?.x).toBe(40 - EXTERIOR_PADDING);
    expect(bounds?.y).toBe(30 - EXTERIOR_PADDING);
    expect(bounds?.w).toBe(200 + EXTERIOR_PADDING * 2);
    expect(bounds?.h).toBe(120 + EXTERIOR_PADDING * 2);
  });

  it('enforces a minimum exterior size for a single small room', () => {
    const bounds = computeExteriorBounds([
      { id: 'room-1', name: 'Room 1', rect: { x: 20, y: 30, w: 40, h: 50 }, doors: [], windows: [] },
    ]);
    expect(bounds).not.toBeNull();
    expect(bounds?.w).toBeGreaterThanOrEqual(MIN_EXTERIOR_SIZE);
    expect(bounds?.h).toBeGreaterThanOrEqual(MIN_EXTERIOR_SIZE);
  });

  it('returns null when there are no rooms', () => {
    const bounds = computeExteriorBounds([]);
    expect(bounds).toBeNull();
  });

  it('determines the front side based on the main exterior door position', () => {
    const rect = { x: 100, y: 80, w: 200, h: 120 };
    expect(determineFrontSideFromMainDoor(rect, { x: 150, y: 80 })).toBe('n');
    expect(determineFrontSideFromMainDoor(rect, { x: 150, y: 200 })).toBe('s');
    expect(determineFrontSideFromMainDoor(rect, { x: 100, y: 140 })).toBe('w');
    expect(determineFrontSideFromMainDoor(rect, { x: 300, y: 140 })).toBe('e');
  });

  it('creates exterior context bands outside the front edge', () => {
    const rect = { x: 100, y: 100, w: 200, h: 120 };
    const shapes = computeExteriorContextShapes(rect, 's');
    expect(shapes.yardRect).toEqual({
      x: 100 - YARD_PADDING,
      y: 100 - YARD_PADDING,
      w: 200 + YARD_PADDING * 2,
      h: 120 + YARD_PADDING * 2,
    });
    expect(shapes.sidewalkBand.y).toBe(100 + 120 + CONTEXT_GAP);
    expect(shapes.sidewalkBand.h).toBe(SIDEWALK_THICKNESS);
    expect(shapes.drivewayBand.y).toBe(100 + 120 + CONTEXT_GAP);
    expect(shapes.drivewayBand.h).toBe(DRIVEWAY_THICKNESS);
  });

  it('snaps resize drags to the resize grid step', () => {
    const rect = { x: 0, y: 0, w: 120, h: 100 };
    const updated = computeSnappedRectFromHandleDrag(rect, 'e', RESIZE_GRID_STEP + 1, 0);
    expect(updated.w).toBe(rect.w + RESIZE_GRID_STEP);
    expect(updated.x).toBe(rect.x);
  });

  it('snaps feet values to the configured step size', () => {
    expect(snapFeet(5)).toBe(FEET_PER_STEP * 3);
    expect(snapFeet(6.9)).toBe(FEET_PER_STEP * 3);
  });

  it('computes a deterministic footprint scale', () => {
    const exteriorRect = { x: 0, y: 0, w: 240, h: 120 };
    const feetPerStep = computeScaleFromFootprint(exteriorRect, 40, 20);
    expect(feetPerStep).toBeCloseTo(RESIZE_GRID_STEP * (1 / 6), 4);
  });

  it('applies room dimensions with snapping and minimums', () => {
    const roomRect = { x: 20, y: 20, w: 120, h: 80 };
    const updated = applyRoomDimensions(roomRect, 11, 3, FEET_PER_STEP);
    expect(updated.w).toBe(RESIZE_GRID_STEP * 6);
    expect(updated.h).toBe(MIN_ROOM_SIZE);
  });

  it('clamps points into resized room bounds after dimension updates', () => {
    const roomRect = { x: 10, y: 10, w: 120, h: 80 };
    const updated = applyRoomDimensions(roomRect, 20, 10, FEET_PER_STEP);
    const clamped = clampPointToRect({ x: 500, y: -50 }, updated);
    expect(clamped.x).toBe(updated.x + updated.w);
    expect(clamped.y).toBe(updated.y);
  });

  it('enforces minimum room size during resize', () => {
    const rect = { x: 0, y: 0, w: 60, h: 80 };
    const updated = computeSnappedRectFromHandleDrag(rect, 'w', 40, 0);
    expect(updated.w).toBe(MIN_ROOM_SIZE);
    expect(updated.x).toBe(rect.x + rect.w - MIN_ROOM_SIZE);
  });

  it('clamps placements into the updated room bounds', () => {
    const rect = { x: 10, y: 20, w: 100, h: 60 };
    const point = clampPointToRect({ x: 200, y: -10 }, rect);
    expect(point.x).toBe(rect.x + rect.w);
    expect(point.y).toBe(rect.y);
  });

  it('keeps anchored markers within wall bounds after resize', () => {
    const marker = updateAnchoredMarkerAfterResize({ wall: 'n', offset: 1.4 }, { x: 0, y: 0, w: 80, h: 80 }, { x: 0, y: 0, w: 40, h: 40 });
    expect(marker.offset).toBe(1);
  });
});

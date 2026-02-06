import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { DEVICE_CATALOG, DEVICE_ICON_TONES } from './deviceCatalog';
import type { FloorplanFloor, FloorplanPlacement, FloorplanWall } from '../../lib/homeSecurityFunnel';
import {
  autoSnapToNearestWall,
  clampPointToRect,
  computeExteriorContextShapes,
  computeExteriorBounds,
  computeSnappedRectFromHandleDrag,
  determineFrontSideFromMainDoor,
  findRoomAtPoint,
  getHallwaySurfaceStyle,
  getCompassNorthArrowAngle,
  getCompassOrientationLabel,
  getPlacementRotation,
  getWallInsetPosition,
  getWindowMarkerVisual,
  snapToGrid,
  type ResizeHandle,
  type FloorplanWindowMarker,
} from './floorplanUtils';
import CoverageOverlay from './CoverageOverlay';
import type { FloorplanCoverageOverlay } from '../../lib/homeSecurityPlanner/coverageModel';
import FloorplanFurnishings from './FloorplanFurnishings';
import type { CompassOrientation, FloorplanStair } from './floorplanState';

const canvasStyles = {
  background: 'rgba(15, 19, 32, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '0.75rem',
  padding: '1rem',
} as const;

const viewportStyles = {
  position: 'relative' as const,
  borderRadius: '0.75rem',
  border: '1px dashed rgba(255, 255, 255, 0.18)',
  background: 'rgba(10, 12, 20, 0.75)',
  overflow: 'hidden',
} as const;

const surfaceStyles = {
  position: 'absolute' as const,
  inset: 0,
} as const;

type FloorplanCanvasProps = {
  floor: FloorplanFloor;
  placements?: FloorplanPlacement[];
  stairs?: FloorplanStair[];
  selectedRoomId?: string;
  selectedPlacementId?: string | null;
  selectedStairsId?: string | null;
  onSelectRoom: (id: string) => void;
  onSelectPlacement?: (id: string) => void;
  onSelectStairs?: (id: string) => void;
  onCanvasClick?: (point: { x: number; y: number }) => void;
  onUpdatePlacement?: (placementId: string, updates: Partial<FloorplanPlacement>) => void;
  onUpdateRoomRect?: (id: string, rect: { x: number; y: number; w: number; h: number }) => void;
  coverageOverlay?: FloorplanCoverageOverlay | null;
  showFurnishings?: boolean;
  showExteriorContext?: boolean;
  compassOrientation?: CompassOrientation | null;
  width?: number | string;
  height?: number;
};

const markerBaseStyles = {
  position: 'absolute' as const,
  transform: 'translate(-50%, -50%)',
  borderRadius: '999px',
  overflow: 'visible' as const,
} as const;

const getMarkerPosition = (room: FloorplanFloor['rooms'][number], wall: FloorplanWall, offset: number) => {
  const clampedOffset = Math.min(Math.max(offset, 0), 1);
  switch (wall) {
    case 'n':
      return { x: room.rect.w * clampedOffset, y: 0 };
    case 's':
      return { x: room.rect.w * clampedOffset, y: room.rect.h };
    case 'e':
      return { x: room.rect.w, y: room.rect.h * clampedOffset };
    case 'w':
    default:
      return { x: 0, y: room.rect.h * clampedOffset };
  }
};

const MAIN_ENTRANCE_KEYWORDS = ['front', 'main', 'entry'];

const getMainExteriorDoorPosition = (rooms: FloorplanFloor['rooms'][number][]) => {
  for (const room of rooms) {
    for (const door of room.doors) {
      if (!door.exterior) continue;
      const label = door.label?.toLowerCase() ?? '';
      if (!MAIN_ENTRANCE_KEYWORDS.some((keyword) => label.includes(keyword))) continue;
      const position = getMarkerPosition(room, door.wall, door.offset);
      return { x: room.rect.x + position.x, y: room.rect.y + position.y };
    }
  }
  return undefined;
};

const DRAG_THRESHOLD = 4;
const RESIZE_HANDLE_SIZE = 12;
const RESIZE_HANDLES: Array<{
  id: ResizeHandle;
  left: string;
  top: string;
  cursor: string;
}> = [
  { id: 'nw', left: '0%', top: '0%', cursor: 'nwse-resize' },
  { id: 'n', left: '50%', top: '0%', cursor: 'ns-resize' },
  { id: 'ne', left: '100%', top: '0%', cursor: 'nesw-resize' },
  { id: 'e', left: '100%', top: '50%', cursor: 'ew-resize' },
  { id: 'se', left: '100%', top: '100%', cursor: 'nwse-resize' },
  { id: 's', left: '50%', top: '100%', cursor: 'ns-resize' },
  { id: 'sw', left: '0%', top: '100%', cursor: 'nesw-resize' },
  { id: 'w', left: '0%', top: '50%', cursor: 'ew-resize' },
];

const FloorplanCanvas = ({
  floor,
  placements = [],
  stairs = [],
  selectedRoomId,
  selectedPlacementId,
  selectedStairsId,
  onSelectRoom,
  onSelectPlacement,
  onSelectStairs,
  onCanvasClick,
  onUpdatePlacement,
  onUpdateRoomRect,
  coverageOverlay,
  showFurnishings = true,
  showExteriorContext = true,
  compassOrientation = null,
  width = '100%',
  height = 320,
}: FloorplanCanvasProps) => {
  const selectedRoom = floor.rooms.find((room) => room.id === selectedRoomId);
  const exteriorBounds = computeExteriorBounds(floor.rooms);
  const mainDoorPosition = exteriorBounds ? getMainExteriorDoorPosition(floor.rooms) : undefined;
  const frontSide = mainDoorPosition && exteriorBounds ? determineFrontSideFromMainDoor(exteriorBounds, mainDoorPosition) : 's';
  const exteriorContext = exteriorBounds && showExteriorContext ? computeExteriorContextShapes(exteriorBounds, frontSide) : null;
  const compassLabel = getCompassOrientationLabel(compassOrientation);
  const compassAngle = compassOrientation ? getCompassNorthArrowAngle(compassOrientation) : null;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [hoveredPlacementId, setHoveredPlacementId] = useState<string | null>(null);
  const dragStateRef = useRef<{
    placementId: string;
    pointerId: number;
    origin: { x: number; y: number };
    isDragging: boolean;
  } | null>(null);
  const resizeStateRef = useRef<{
    roomId: string;
    pointerId: number;
    handle: ResizeHandle;
    origin: { x: number; y: number };
    rect: { x: number; y: number; w: number; h: number };
    isDragging: boolean;
  } | null>(null);
  const justDraggedRef = useRef(false);

  const handleSurfaceClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!onCanvasClick) return;
    if (justDraggedRef.current) {
      justDraggedRef.current = false;
      return;
    }
    const viewport = viewportRef.current;
    if (!viewport) return;
    const rect = viewport.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    onCanvasClick({ x, y });
  };

  return (
    <div style={canvasStyles}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
        <strong>{floor.label} map</strong>
        <span style={{ color: 'rgba(214, 233, 248, 0.75)' }}>
          Selected room: {selectedRoom ? selectedRoom.name : 'None'}
        </span>
      </div>
      <div style={{ marginTop: '0.75rem', ...viewportStyles, height, width }}>
        <div ref={viewportRef} style={surfaceStyles} onClick={handleSurfaceClick}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '0.75rem',
              pointerEvents: 'none',
              ...getHallwaySurfaceStyle(),
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              display: 'grid',
              gap: '0.25rem',
              justifyItems: 'center',
              padding: '0.4rem 0.5rem',
              borderRadius: '0.6rem',
              background: 'rgba(10, 12, 20, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(214, 233, 248, 0.8)',
              fontSize: '0.7rem',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            {compassOrientation ? (
              <>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '999px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'rgba(214, 233, 248, 0.95)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      transform: `rotate(${compassAngle ?? 0}deg)`,
                      fontSize: '0.9rem',
                      lineHeight: 1,
                    }}
                  >
                    ▲
                  </span>
                </div>
                <span style={{ fontSize: '0.65rem' }}>{compassLabel}</span>
              </>
            ) : (
              <span style={{ fontSize: '0.65rem' }}>Compass: optional</span>
            )}
          </div>
          {exteriorContext ? (
            <div aria-hidden="true">
              <div
                style={{
                  position: 'absolute',
                  left: exteriorContext.yardRect.x,
                  top: exteriorContext.yardRect.y,
                  width: exteriorContext.yardRect.w,
                  height: exteriorContext.yardRect.h,
                  borderRadius: '1.5rem',
                  background: 'rgba(34, 48, 40, 0.35)',
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(120, 154, 120, 0.18) 0, rgba(120, 154, 120, 0.18) 1px, transparent 1.2px)',
                  backgroundSize: '14px 14px',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: exteriorContext.sidewalkBand.x,
                  top: exteriorContext.sidewalkBand.y,
                  width: exteriorContext.sidewalkBand.w,
                  height: exteriorContext.sidewalkBand.h,
                  borderRadius: '0.75rem',
                  background: 'rgba(210, 220, 232, 0.45)',
                  border: '1px solid rgba(210, 220, 232, 0.6)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: exteriorContext.drivewayBand.x,
                  top: exteriorContext.drivewayBand.y,
                  width: exteriorContext.drivewayBand.w,
                  height: exteriorContext.drivewayBand.h,
                  borderRadius: '0.75rem',
                  background: 'rgba(120, 130, 150, 0.4)',
                  border: '1px solid rgba(160, 170, 190, 0.55)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </div>
          ) : null}
          {exteriorBounds ? (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: exteriorBounds.x,
                top: exteriorBounds.y,
                width: exteriorBounds.w,
                height: exteriorBounds.h,
                borderRadius: '1rem',
                border: '3px solid rgba(108, 246, 255, 0.85)',
                boxShadow: '0 0 12px rgba(80, 200, 255, 0.35)',
                background: 'rgba(16, 24, 40, 0.08)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 12,
                  padding: '2px 6px',
                  borderRadius: '999px',
                  fontSize: '0.55rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(214, 233, 248, 0.9)',
                  background: 'rgba(15, 19, 32, 0.6)',
                  border: '1px solid rgba(108, 246, 255, 0.45)',
                  boxShadow: '0 0 6px rgba(80, 200, 255, 0.35)',
                }}
              >
                Exterior
              </span>
            </div>
          ) : null}
          {showFurnishings ? <FloorplanFurnishings floor={floor} /> : null}
          {coverageOverlay ? <CoverageOverlay floor={floor} overlay={coverageOverlay} /> : null}
          {floor.rooms.map((room) => {
            const isSelected = room.id === selectedRoomId;
            const roomStyles = {
              position: 'absolute' as const,
              left: room.rect.x,
              top: room.rect.y,
              width: room.rect.w,
              height: room.rect.h,
              borderRadius: '0.5rem',
              border: isSelected ? '2px solid #6cf6ff' : '1px solid rgba(255, 255, 255, 0.18)',
              background: isSelected ? 'rgba(108, 246, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              color: '#f2f7ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              overflow: 'visible',
              zIndex: 2,
            } as const;

            return (
              <button
                key={room.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectRoom(room.id);
                }}
                onDoubleClick={() => onUpdateRoomRect?.(room.id, room.rect)}
                style={roomStyles}
              >
                {room.name}
                {isSelected
                  ? RESIZE_HANDLES.map((handle) => (
                      <span
                        key={`${room.id}-${handle.id}`}
                        role="presentation"
                        onPointerDown={(event) => {
                          event.stopPropagation();
                          event.preventDefault();
                          if (!onUpdateRoomRect) return;
                          event.currentTarget.setPointerCapture(event.pointerId);
                          resizeStateRef.current = {
                            roomId: room.id,
                            pointerId: event.pointerId,
                            handle: handle.id,
                            origin: { x: event.clientX, y: event.clientY },
                            rect: room.rect,
                            isDragging: false,
                          };
                        }}
                        onPointerMove={(event) => {
                          const resizeState = resizeStateRef.current;
                          if (
                            !resizeState ||
                            resizeState.roomId !== room.id ||
                            resizeState.pointerId !== event.pointerId
                          ) {
                            return;
                          }
                          const deltaX = event.clientX - resizeState.origin.x;
                          const deltaY = event.clientY - resizeState.origin.y;
                          if (!resizeState.isDragging) {
                            if (Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) {
                              return;
                            }
                            resizeState.isDragging = true;
                          }
                          const nextRect = computeSnappedRectFromHandleDrag(
                            resizeState.rect,
                            resizeState.handle,
                            deltaX,
                            deltaY,
                          );
                          onUpdateRoomRect?.(room.id, nextRect);
                          justDraggedRef.current = true;
                        }}
                        onPointerUp={(event) => {
                          const resizeState = resizeStateRef.current;
                          if (
                            !resizeState ||
                            resizeState.roomId !== room.id ||
                            resizeState.pointerId !== event.pointerId
                          ) {
                            return;
                          }
                          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                            event.currentTarget.releasePointerCapture(event.pointerId);
                          }
                          resizeStateRef.current = null;
                          if (!resizeState.isDragging) {
                            justDraggedRef.current = false;
                          }
                        }}
                        onPointerCancel={(event) => {
                          const resizeState = resizeStateRef.current;
                          if (
                            !resizeState ||
                            resizeState.roomId !== room.id ||
                            resizeState.pointerId !== event.pointerId
                          ) {
                            return;
                          }
                          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                            event.currentTarget.releasePointerCapture(event.pointerId);
                          }
                          resizeStateRef.current = null;
                          justDraggedRef.current = false;
                        }}
                        onClick={(event) => event.stopPropagation()}
                        style={{
                          position: 'absolute',
                          left: handle.left,
                          top: handle.top,
                          width: RESIZE_HANDLE_SIZE,
                          height: RESIZE_HANDLE_SIZE,
                          borderRadius: '999px',
                          background: '#f9fbff',
                          border: '2px solid rgba(15, 19, 32, 0.75)',
                          boxShadow: '0 0 6px rgba(108, 246, 255, 0.65)',
                          transform: 'translate(-50%, -50%)',
                          cursor: handle.cursor,
                          pointerEvents: 'auto',
                          zIndex: 4,
                        }}
                      />
                    ))
                  : null}
                {room.doors.map((door) => {
                  const position = getMarkerPosition(room, door.wall, door.offset);
                  const isHorizontal = door.wall === 'n' || door.wall === 's';
                  const isExterior = Boolean(door.exterior);
                  return (
                    <span
                      key={door.id}
                      style={{
                        ...markerBaseStyles,
                        left: position.x,
                        top: position.y,
                        width: isHorizontal ? (isExterior ? 24 : 18) : isExterior ? 8 : 6,
                        height: isHorizontal ? (isExterior ? 8 : 6) : isExterior ? 24 : 18,
                        background: isExterior ? '#f7c873' : '#6cf6ff',
                        boxShadow: isExterior
                          ? '0 0 8px rgba(247, 200, 115, 0.7)'
                          : '0 0 6px rgba(108, 246, 255, 0.6)',
                        border: isExterior ? '1px solid rgba(255, 236, 196, 0.9)' : 'none',
                      }}
                    />
                  );
                })}
                {room.windows.map((window) => {
                  const windowMarker = window as FloorplanWindowMarker;
                  const position = getMarkerPosition(room, window.wall, window.offset);
                  const isHorizontal = window.wall === 'n' || window.wall === 's';
                  const windowVisual = getWindowMarkerVisual({
                    wall: window.wall,
                    isGroundLevel: windowMarker.isGroundLevel,
                    windowStyle: windowMarker.windowStyle,
                  });
                  return (
                    <span
                      key={window.id}
                      style={{
                        ...markerBaseStyles,
                        left: position.x,
                        top: position.y,
                        width: isHorizontal ? windowVisual.length : windowVisual.thickness,
                        height: isHorizontal ? windowVisual.thickness : windowVisual.length,
                        background: windowVisual.background,
                        border: windowVisual.border,
                        boxShadow: windowVisual.boxShadow,
                        backgroundImage: windowVisual.backgroundImage,
                        backgroundSize: windowVisual.backgroundSize,
                        borderRadius: windowVisual.borderRadius ?? markerBaseStyles.borderRadius,
                      }}
                    >
                      {windowVisual.badge ? (
                        <span
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: -6,
                            transform: 'translate(-50%, -100%)',
                            padding: '1px 4px',
                            borderRadius: '999px',
                            fontSize: '0.55rem',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            background: windowVisual.badge.background,
                            color: windowVisual.badge.color,
                            border: windowVisual.badge.border,
                            boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {windowVisual.badge.label}
                        </span>
                      ) : null}
                    </span>
                  );
                })}
              </button>
            );
          })}
          {stairs.map((stair) => {
            const isSelected = stair.id === selectedStairsId;
            const isUp = stair.direction === 'up';
            return (
              <button
                key={stair.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onSelectStairs?.(stair.id);
                }}
                title={`Stairs ${stair.direction}`}
                style={{
                  position: 'absolute',
                  left: stair.position.x,
                  top: stair.position.y,
                  transform: 'translate(-50%, -50%)',
                  padding: '0.35rem 0.4rem',
                  borderRadius: '0.6rem',
                  border: isSelected ? '1px solid rgba(108, 246, 255, 0.75)' : '1px solid rgba(255, 255, 255, 0.16)',
                  background: 'rgba(16, 20, 32, 0.82)',
                  color: 'rgba(214, 233, 248, 0.9)',
                  boxShadow: isSelected ? '0 0 10px rgba(108, 246, 255, 0.4)' : 'none',
                  display: 'grid',
                  gap: '0.2rem',
                  zIndex: 2,
                  cursor: 'pointer',
                }}
              >
                <span style={{ display: 'grid', gap: '2px' }}>
                  {[0, 1, 2].map((step) => (
                    <span
                      key={`stair-${stair.id}-${step}`}
                      style={{
                        width: 16 - step * 3,
                        height: 3,
                        borderRadius: '999px',
                        background: 'rgba(214, 233, 248, 0.75)',
                        justifySelf: 'start',
                      }}
                    />
                  ))}
                </span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.04em' }}>{isUp ? '↑' : '↓'}</span>
              </button>
            );
          })}
          {placements.map((placement) => {
            const item = DEVICE_CATALOG[placement.deviceKey];
            const Icon = item.icon;
            const tone = DEVICE_ICON_TONES[placement.deviceKey];
            const invalid = item.wallAnchored && !placement.wallSnap;
            const isSelected = placement.id === selectedPlacementId;
            const isHovered = placement.id === hoveredPlacementId;
            const rotation = getPlacementRotation(placement);
            return (
              <button
                key={placement.id}
                type="button"
                onClick={(event) => {
                  if (justDraggedRef.current) {
                    justDraggedRef.current = false;
                    return;
                  }
                  event.stopPropagation();
                  onSelectPlacement?.(placement.id);
                }}
                onPointerDown={(event) => {
                  event.stopPropagation();
                  onSelectPlacement?.(placement.id);
                  if (!onUpdatePlacement) return;
                  const viewport = viewportRef.current;
                  if (!viewport) return;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  dragStateRef.current = {
                    placementId: placement.id,
                    pointerId: event.pointerId,
                    origin: { x: event.clientX, y: event.clientY },
                    isDragging: false,
                  };
                }}
                onPointerMove={(event) => {
                  if (!onUpdatePlacement) return;
                  const dragState = dragStateRef.current;
                  if (!dragState || dragState.placementId !== placement.id || dragState.pointerId !== event.pointerId) {
                    return;
                  }
                  const deltaX = event.clientX - dragState.origin.x;
                  const deltaY = event.clientY - dragState.origin.y;
                  if (!dragState.isDragging) {
                    if (Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) {
                      return;
                    }
                    dragState.isDragging = true;
                  }
                  const viewport = viewportRef.current;
                  if (!viewport) return;
                  const rect = viewport.getBoundingClientRect();
                  const clampedPoint = clampPointToRect(
                    { x: event.clientX - rect.left, y: event.clientY - rect.top },
                    { x: 0, y: 0, w: rect.width, h: rect.height },
                  );
                  const snappedPoint = { x: snapToGrid(clampedPoint.x), y: snapToGrid(clampedPoint.y) };
                  const targetRoom = findRoomAtPoint(floor, snappedPoint);
                  if (item.wallAnchored && targetRoom) {
                    const wallSnap = autoSnapToNearestWall(targetRoom.rect, snappedPoint);
                    const position = getWallInsetPosition(targetRoom.rect, wallSnap);
                    onUpdatePlacement(placement.id, { position, wallSnap, roomId: targetRoom.id });
                  } else {
                    onUpdatePlacement(placement.id, {
                      position: snappedPoint,
                      wallSnap: item.wallAnchored ? undefined : undefined,
                      roomId: targetRoom?.id,
                    });
                  }
                  justDraggedRef.current = true;
                }}
                onPointerUp={(event) => {
                  const dragState = dragStateRef.current;
                  if (!dragState || dragState.placementId !== placement.id || dragState.pointerId !== event.pointerId) {
                    return;
                  }
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                  dragStateRef.current = null;
                  if (!dragState.isDragging) {
                    justDraggedRef.current = false;
                  }
                }}
                onPointerCancel={(event) => {
                  const dragState = dragStateRef.current;
                  if (!dragState || dragState.placementId !== placement.id || dragState.pointerId !== event.pointerId) {
                    return;
                  }
                  if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                  }
                  dragStateRef.current = null;
                  justDraggedRef.current = false;
                }}
                onMouseEnter={() => setHoveredPlacementId(placement.id)}
                onMouseLeave={() => setHoveredPlacementId((prev) => (prev === placement.id ? null : prev))}
                title={invalid ? 'Place on a wall.' : item.label}
                style={{
                  position: 'absolute',
                  left: placement.position.x,
                  top: placement.position.y,
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '0.75rem',
                  padding: '0.35rem',
                  border: invalid
                    ? '1px solid rgba(255, 107, 107, 0.85)'
                    : isSelected
                      ? '1px solid #6cf6ff'
                      : '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(15, 19, 32, 0.85)',
                  boxShadow: isSelected
                    ? '0 0 12px rgba(108, 246, 255, 0.6)'
                    : isHovered
                      ? '0 0 10px rgba(108, 246, 255, 0.35)'
                      : 'none',
                  cursor: 'pointer',
                  display: 'grid',
                  justifyItems: 'center',
                  gap: '0.2rem',
                  textAlign: 'center',
                  zIndex: 3,
                }}
              >
                {item.showsCone ? (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: 50,
                      height: 50,
                      background: 'rgba(108, 246, 255, 0.18)',
                      clipPath: 'polygon(50% 10%, 0% 100%, 100% 100%)',
                      transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                      transformOrigin: '50% 50%',
                      pointerEvents: 'none',
                      filter: 'blur(0.5px)',
                    }}
                  />
                ) : null}
                <span
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: '999px',
                    background: tone.background,
                    boxShadow: tone.glow,
                    color: invalid ? 'rgba(255, 107, 107, 0.95)' : tone.color,
                  }}
                >
                  <Icon width={20} height={20} />
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    lineHeight: 1.1,
                    maxWidth: 90,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: invalid ? 'rgba(255, 107, 107, 0.95)' : '#d8f5ff',
                  }}
                >
                  {placement.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FloorplanCanvas;

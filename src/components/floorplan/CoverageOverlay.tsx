import type { FloorplanFloor } from '../../lib/homeSecurityFunnel';
import {
  COVERAGE_STATE_COLORS,
  COVERAGE_TOOLTIPS,
  COVERAGE_VISUALS,
} from '../../lib/homeSecurityPlanner/coverageConstants';
import type { FloorplanCoverageOverlay } from '../../lib/homeSecurityPlanner/coverageModel';
import { createConePath } from '../../lib/homeSecurityPlanner/coverageModel';

const overlayStyles = {
  position: 'absolute' as const,
  inset: 0,
  pointerEvents: 'none' as const,
  zIndex: 1,
};

type CoverageOverlayProps = {
  floor: FloorplanFloor;
  overlay: FloorplanCoverageOverlay;
};

const CoverageOverlay = ({ floor, overlay }: CoverageOverlayProps) => {
  const roomStateById = new Map(overlay.roomStates.map((state) => [state.roomId, state]));

  return (
    <svg width="100%" height="100%" style={overlayStyles} aria-hidden="true">
      <defs>
        <radialGradient id="coverage-camera-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={COVERAGE_VISUALS.cameraGradient.inner} />
          <stop offset="70%" stopColor={COVERAGE_VISUALS.cameraGradient.mid} />
          <stop offset="100%" stopColor={COVERAGE_VISUALS.cameraGradient.outer} />
        </radialGradient>
        <radialGradient id="coverage-motion-gradient" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor={COVERAGE_VISUALS.motionGradient.inner} />
          <stop offset="70%" stopColor={COVERAGE_VISUALS.motionGradient.mid} />
          <stop offset="100%" stopColor={COVERAGE_VISUALS.motionGradient.outer} />
        </radialGradient>
        {floor.rooms.map((room) => (
          <clipPath key={room.id} id={`room-clip-${room.id}`}>
            <rect
              x={room.rect.x}
              y={room.rect.y}
              width={room.rect.w}
              height={room.rect.h}
              rx={COVERAGE_VISUALS.roomCornerRadius}
              ry={COVERAGE_VISUALS.roomCornerRadius}
            />
          </clipPath>
        ))}
      </defs>

      {floor.rooms.map((room) => {
        const state = roomStateById.get(room.id);
        if (!state) return null;
        const colors = COVERAGE_STATE_COLORS[state.state];
        return (
          <rect
            key={`room-state-${room.id}`}
            x={room.rect.x}
            y={room.rect.y}
            width={room.rect.w}
            height={room.rect.h}
            fill={colors.fill}
            stroke={colors.stroke}
            strokeDasharray="6 6"
            strokeWidth={1}
          >
            <title>{COVERAGE_TOOLTIPS.room[state.state]}</title>
          </rect>
        );
      })}

      {overlay.cameraCones.map((cone) => (
        <path key={cone.id} d={createConePath(cone)} fill="url(#coverage-camera-gradient)">
          <title>{COVERAGE_TOOLTIPS.camera}</title>
        </path>
      ))}

      {overlay.motionZones.map((zone) => (
        <circle
          key={zone.id}
          cx={zone.center.x}
          cy={zone.center.y}
          r={zone.radius}
          fill="url(#coverage-motion-gradient)"
          clipPath={zone.roomId ? `url(#room-clip-${zone.roomId})` : undefined}
        >
          <title>{COVERAGE_TOOLTIPS.motion}</title>
        </circle>
      ))}

      {overlay.exteriorDoorExceptions.map((exception) => (
        <circle
          key={exception.id}
          cx={exception.position.x}
          cy={exception.position.y}
          r={COVERAGE_VISUALS.exteriorDoorRadius}
          fill={COVERAGE_VISUALS.exteriorDoorFill}
          stroke={COVERAGE_VISUALS.exteriorDoorStroke}
          strokeWidth={2}
        >
          <title>{COVERAGE_TOOLTIPS.exteriorDoor}</title>
        </circle>
      ))}
    </svg>
  );
};

export default CoverageOverlay;

import type { FloorplanPlacement, HomeSecurityFloorplan } from '../../homeSecurityFunnel';
import type { ExteriorDoorException, RoomCoverageState } from '../coverageModel';
import { CAMERA_CLASSES, ENTRY_SENSOR_KEYS, MOTION_SENSOR_CLASS } from '../coverageConstants';

export type CameraClassKey = keyof typeof CAMERA_CLASSES;

export type DeviceSummary = {
  cameras: {
    total: number;
    byClass: Record<CameraClassKey, number>;
  };
  motion: number;
  entry: number;
};

export type CoverageNotes = {
  rollups: string[];
  exceptions: string[];
};

const CAMERA_CLASS_ORDER: CameraClassKey[] = ['doorbell', 'indoor_wifi', 'outdoor_poe'];

const buildCameraClassMap = () => {
  return new Map<FloorplanPlacement['deviceKey'], CameraClassKey>(
    CAMERA_CLASS_ORDER.flatMap((cameraClass) =>
      CAMERA_CLASSES[cameraClass].deviceKeys.map((deviceKey) => [deviceKey, cameraClass]),
    ),
  );
};

const cameraClassMap = buildCameraClassMap();

const formatCount = (count: number, singularLabel: string, pluralLabel?: string) => {
  if (count === 1) return `${count} ${singularLabel}`;
  return `${count} ${pluralLabel ?? `${singularLabel}s`}`;
};

export const buildDeviceSummary = (layoutState: Pick<HomeSecurityFloorplan, 'placements'>): DeviceSummary => {
  const byClass = CAMERA_CLASS_ORDER.reduce<Record<CameraClassKey, number>>((accumulator, key) => {
    accumulator[key] = 0;
    return accumulator;
  }, {} as Record<CameraClassKey, number>);

  let motion = 0;
  let entry = 0;

  layoutState.placements.forEach((placement) => {
    const cameraClass = cameraClassMap.get(placement.deviceKey);
    if (cameraClass) {
      byClass[cameraClass] += 1;
    }
    if (MOTION_SENSOR_CLASS.deviceKeys.includes(placement.deviceKey)) {
      motion += 1;
    }
    if (ENTRY_SENSOR_KEYS.includes(placement.deviceKey)) {
      entry += 1;
    }
  });

  const total = CAMERA_CLASS_ORDER.reduce((sum, key) => sum + byClass[key], 0);

  return {
    cameras: {
      total,
      byClass,
    },
    motion,
    entry,
  };
};

export const buildCoverageNotes = (
  roomStates: RoomCoverageState[],
  doorExceptions: ExteriorDoorException[],
): CoverageNotes => {
  const rollupCounts = roomStates.reduce(
    (accumulator, room) => {
      accumulator[room.state] += 1;
      return accumulator;
    },
    { green: 0, yellow: 0, red: 0 },
  );

  const rollups = [
    `Green coverage: ${formatCount(rollupCounts.green, 'room')}`,
    `Partial coverage: ${formatCount(rollupCounts.yellow, 'room')}`,
    `Limited coverage: ${formatCount(rollupCounts.red, 'room')}`,
  ];

  const exceptions = doorExceptions
    .map((exception) => {
      const label = exception.label?.trim() || 'Exterior door';
      return `${label} (no camera coverage)`;
    })
    .sort((a, b) => a.localeCompare(b));

  return {
    rollups,
    exceptions,
  };
};

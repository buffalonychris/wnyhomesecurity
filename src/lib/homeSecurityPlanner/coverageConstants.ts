import type { FloorplanDeviceType } from '../../components/floorplan/deviceCatalog';

export type CoverageState = 'green' | 'yellow' | 'red';

export const CAMERA_CLASSES: Record<
  'doorbell' | 'indoor_wifi' | 'outdoor_poe',
  { deviceKeys: FloorplanDeviceType[]; radius: number; angle: number }
> = {
  doorbell: {
    deviceKeys: ['video_doorbell'],
    radius: 140,
    angle: 70,
  },
  indoor_wifi: {
    deviceKeys: ['indoor_camera'],
    radius: 170,
    angle: 90,
  },
  outdoor_poe: {
    deviceKeys: ['outdoor_camera_poe'],
    radius: 200,
    angle: 95,
  },
};

export const MOTION_SENSOR_CLASS = {
  deviceKeys: ['motion_sensor'] as FloorplanDeviceType[],
  radius: 140,
};

export const ENTRY_SENSOR_KEYS: FloorplanDeviceType[] = ['door_sensor', 'window_sensor'];

export const ROOM_COVERAGE_SAMPLE_GRID = 5;

export const ROOM_COVERAGE_THRESHOLDS = {
  green: 0.6,
  yellow: 0.3,
};

export const DOOR_VICINITY_RADIUS = 22;

export const COVERAGE_STATE_COLORS: Record<CoverageState, { fill: string; stroke: string }> = {
  green: { fill: 'rgba(92, 244, 176, 0.18)', stroke: 'rgba(92, 244, 176, 0.6)' },
  yellow: { fill: 'rgba(255, 213, 98, 0.18)', stroke: 'rgba(255, 213, 98, 0.6)' },
  red: { fill: 'rgba(255, 107, 107, 0.18)', stroke: 'rgba(255, 107, 107, 0.6)' },
};

export const COVERAGE_VISUALS = {
  roomCornerRadius: 6,
  exteriorDoorRadius: 10,
  cameraGradient: {
    inner: 'rgba(108, 246, 255, 0.4)',
    mid: 'rgba(108, 246, 255, 0.16)',
    outer: 'rgba(108, 246, 255, 0.02)',
  },
  motionGradient: {
    inner: 'rgba(145, 126, 255, 0.35)',
    mid: 'rgba(145, 126, 255, 0.14)',
    outer: 'rgba(145, 126, 255, 0.02)',
  },
  exteriorDoorFill: 'rgba(255, 107, 107, 0.22)',
  exteriorDoorStroke: 'rgba(255, 107, 107, 0.8)',
};

export const COVERAGE_TOOLTIPS = {
  toggle:
    'Coverage overlay uses your placements to show approximate detection zones. It does not guarantee protection.',
  camera: 'Camera coverage shows the viewing direction based on placement and rotation.',
  motion: 'Motion coverage shows approximate PIR detection within a room boundary.',
  entry: 'Entry sensors show monitored openings but do not add area coverage.',
  room: {
    green: 'Coverage indicates multiple detection layers in this room.',
    yellow: 'Coverage indicates partial detection in this room.',
    red: 'Coverage indicates limited or no detection in this room.',
  },
  exteriorDoor: 'Exterior door flagged because no camera coverage is aimed at this entry.',
};

import type { FloorplanPlacement, HomeSecurityFloorplan } from '@/lib/homeSecurityFunnel';
import {
  INSTALL_EFFORT_BADGES,
  INSTALL_EFFORT_RANGES,
  INSTALL_EFFORT_THRESHOLDS,
  type InstallEffortRangeKey,
} from './installEffortConstants';

type InstallEffortInput = {
  floorplan?: HomeSecurityFloorplan;
  placements?: FloorplanPlacement[];
  floors?: number;
};

type InstallEffortResult = {
  rangeKey: InstallEffortRangeKey;
  hoursMin: number;
  hoursMax: number;
  badges: string[];
  bullets: string[];
};

const countByDeviceKey = (placements: FloorplanPlacement[]) => {
  return placements.reduce(
    (counts, placement) => {
      counts[placement.deviceKey] = (counts[placement.deviceKey] ?? 0) + 1;
      return counts;
    },
    {} as Record<FloorplanPlacement['deviceKey'], number>,
  );
};

export const computeInstallEffort = (layoutState: InstallEffortInput): InstallEffortResult => {
  const placements = layoutState.floorplan?.placements ?? layoutState.placements ?? [];
  const floors = layoutState.floorplan?.floors.length ?? layoutState.floors ?? 1;
  const counts = countByDeviceKey(placements);

  const indoorWifiCams = counts.indoor_camera ?? 0;
  const outdoorPoeCams = counts.outdoor_camera_poe ?? 0;
  const doorbells = counts.video_doorbell ?? 0;
  const entrySensors = (counts.door_sensor ?? 0) + (counts.window_sensor ?? 0);
  const glassBreakSensors = counts.glass_break_sensor ?? 0;
  const motionSensors = counts.motion_sensor ?? 0;
  const leakSensors = counts.leak_sensor ?? 0;
  const sirenChime = counts.siren_chime ?? 0;

  const camerasTotal = indoorWifiCams + outdoorPoeCams + doorbells;
  const sensorsTotal = entrySensors + glassBreakSensors + motionSensors + leakSensors;
  const exteriorDevices = outdoorPoeCams + doorbells;

  const hasWifiDevices = indoorWifiCams > 0 || doorbells > 0;
  const hasPoeRuns = outdoorPoeCams > 0;
  const hasExteriorMounting = exteriorDevices > 0;
  const hasDrillingLadders = outdoorPoeCams > 0 || floors >= INSTALL_EFFORT_THRESHOLDS.largeFloorsMin;
  const needsDoorbellPowerCheck = doorbells > 0;

  let rangeKey: InstallEffortRangeKey = 'M';

  if (camerasTotal === 0 && sensorsTotal <= INSTALL_EFFORT_THRESHOLDS.simpleSensorsMax) {
    rangeKey = 'S';
  }

  if (outdoorPoeCams >= INSTALL_EFFORT_THRESHOLDS.xlPoeCamsMin || floors >= INSTALL_EFFORT_THRESHOLDS.largeFloorsMin) {
    rangeKey = 'XL';
  } else if (outdoorPoeCams >= INSTALL_EFFORT_THRESHOLDS.largePoeCamsMin) {
    rangeKey = 'L';
  }

  const badges: string[] = [];
  if (hasWifiDevices) badges.push(INSTALL_EFFORT_BADGES.wifiDevices);
  if (hasPoeRuns) badges.push(INSTALL_EFFORT_BADGES.poeRuns);
  if (hasExteriorMounting) badges.push(INSTALL_EFFORT_BADGES.exteriorMounting);
  if (needsDoorbellPowerCheck) badges.push(INSTALL_EFFORT_BADGES.doorbellPowerCheck);
  if (hasDrillingLadders) badges.push(INSTALL_EFFORT_BADGES.drillingLadders);

  const bullets: string[] = [
    'Install work focuses on the rooms, entry points, and exterior areas where devices are placed.',
    'We mount hardware and pair devices room by room so coverage aligns with your layout.',
  ];

  if (hasExteriorMounting) {
    bullets.push('Exterior devices are mounted and weather-sealed at entry points and perimeter sightlines.');
  }

  if (hasPoeRuns) {
    bullets.push('PoE cameras require routing a cable run back to the recording host or network switch.');
  }

  if (needsDoorbellPowerCheck) {
    bullets.push('Doorbell installs include a quick power check at the existing chime.');
  }

  bullets.push('We finish with testing, a quick walkthrough, and confirming alerts.');

  const range = INSTALL_EFFORT_RANGES[rangeKey];

  return {
    rangeKey,
    hoursMin: range.min,
    hoursMax: range.max,
    badges,
    bullets,
  };
};

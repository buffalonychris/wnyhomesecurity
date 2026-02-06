export type InstallEffortRangeKey = 'S' | 'M' | 'L' | 'XL';

export const INSTALL_EFFORT_RANGES: Record<InstallEffortRangeKey, { min: number; max: number }> = {
  S: { min: 2, max: 3 },
  M: { min: 3, max: 5 },
  L: { min: 5, max: 8 },
  XL: { min: 8, max: 12 },
};

export const INSTALL_EFFORT_THRESHOLDS = {
  simpleSensorsMax: 6,
  largeFloorsMin: 2,
  largePoeCamsMin: 1,
  xlPoeCamsMin: 2,
};

export const INSTALL_EFFORT_BADGES = {
  wifiDevices: 'Wi‑Fi devices',
  poeRuns: 'PoE cable runs',
  exteriorMounting: 'Exterior mounting',
  doorbellPowerCheck: 'Doorbell power check',
  drillingLadders: 'Drilling / ladders',
};

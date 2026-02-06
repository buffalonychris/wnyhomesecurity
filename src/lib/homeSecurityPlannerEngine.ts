import type { PrecisionPlannerDraft } from './homeSecurityFunnel';

export type PlannerTierKey = 'bronze' | 'silver' | 'gold';
export type PlannerCoverageStatus = 'complete' | 'complete_with_addons' | 'gap';

type PlannerItemKey =
  | 'doorbell_wifi'
  | 'cam_indoor_wifi'
  | 'cam_outdoor_poe'
  | 'contact_sensor'
  | 'motion_sensor'
  | 'leak_sensor'
  | 'siren_chime'
  | 'smart_plug'
  | 'protect_brains_ck'
  | 'protect_brains_unvr'
  | 'nvr_drive_4tb'
  | 'poe_injector';

export type PlannerPlacement = {
  key: PlannerItemKey | 'recording_host';
  label: string;
  quantity: number;
  required: boolean;
  notes?: string[];
  zones?: string[];
};

export type PlannerGap = {
  key: PlannerItemKey;
  missing: number;
  impact: string;
};

export type PlannerPlan = {
  selectedTier: PlannerTierKey;
  coverage: { status: PlannerCoverageStatus; gaps: PlannerGap[]; summary: string[] };
  placements: PlannerPlacement[];
  optionalAddons: PlannerPlacement[];
  bundles: Array<{ tier: PlannerTierKey; coverage_status: PlannerCoverageStatus; top_line: string }>;
};

const TIER_BOM: Record<PlannerTierKey, Record<PlannerItemKey, number>> = {
  bronze: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 1,
    cam_outdoor_poe: 0,
    contact_sensor: 4,
    motion_sensor: 1,
    leak_sensor: 1,
    siren_chime: 1,
    smart_plug: 2,
    protect_brains_ck: 1,
    protect_brains_unvr: 0,
    nvr_drive_4tb: 0,
    poe_injector: 0,
  },
  silver: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 2,
    cam_outdoor_poe: 1,
    contact_sensor: 6,
    motion_sensor: 2,
    leak_sensor: 2,
    siren_chime: 1,
    smart_plug: 4,
    protect_brains_ck: 1,
    protect_brains_unvr: 0,
    nvr_drive_4tb: 0,
    poe_injector: 1,
  },
  gold: {
    doorbell_wifi: 1,
    cam_indoor_wifi: 2,
    cam_outdoor_poe: 2,
    contact_sensor: 10,
    motion_sensor: 3,
    leak_sensor: 3,
    siren_chime: 1,
    smart_plug: 6,
    protect_brains_ck: 0,
    protect_brains_unvr: 1,
    nvr_drive_4tb: 2,
    poe_injector: 2,
  },
};

const sizeBandDefaults = {
  motion: { small: 1, medium: 2, large: 3 },
  leak: { small: 1, medium: 2, large: 3 },
};

const indoorCameraZones = ['Entry-facing interior angle', 'Main living area'];
const outdoorCameraZones = ['Front entry angle', 'Driveway / yard view'];
const leakZones = ['Kitchen sink', 'Water heater', 'Basement / laundry'];

const normalizeDraft = (draft: PrecisionPlannerDraft) => {
  const trimmedDoors = (draft.exteriorDoors ?? []).map((door) => door.trim()).filter(Boolean);
  const priorities = (draft.priorities ?? []).map((priority) => priority.toLowerCase());
  return {
    propertyType: draft.propertyType ?? 'house',
    floors: draft.floors ?? 1,
    sizeBand: draft.sizeBand ?? 'medium',
    garage: draft.garage ?? 'none',
    exteriorDoors: trimmedDoors,
    groundWindows: draft.groundWindows ?? 'no',
    pets: draft.pets ?? false,
    elders: draft.elders ?? false,
    priorities,
  };
};

const buildCoverageSummary = (draft: ReturnType<typeof normalizeDraft>) => {
  const summary = ['Exterior entries are the first priority. Add sensors until every door is covered.'];
  if (draft.pets) {
    summary.push('Pet-safe placement: avoid direct line-of-sight to common pet paths.');
  }
  if (draft.elders) {
    summary.push('Privacy-first placement: disable interior cameras where desired.');
  }
  return summary;
};

const buildGapSummary = (gaps: PlannerGap[]) => {
  const doorGap = gaps.find((gap) => gap.key === 'contact_sensor');
  if (!doorGap) return '';
  return `missing ${doorGap.missing} door sensor${doorGap.missing === 1 ? '' : 's'}`;
};

const buildBundleTopLine = (tier: PlannerTierKey, status: PlannerCoverageStatus, gaps: PlannerGap[]) => {
  if (status === 'gap') {
    const gapSummary = buildGapSummary(gaps);
    return `${tierLabel(tier)}: gap (${gapSummary})`;
  }
  if (status === 'complete_with_addons') {
    return `${tierLabel(tier)}: covered + optional add-ons`;
  }
  return `${tierLabel(tier)}: covered`;
};

const tierLabel = (tier: PlannerTierKey) => tier.charAt(0).toUpperCase() + tier.slice(1);

const buildMotionRecommendation = (sizeBand: 'small' | 'medium' | 'large', floors: number) => {
  const base = sizeBandDefaults.motion[sizeBand];
  return Math.min(6, Math.max(1, base + Math.max(0, floors - 1)));
};

const buildLeakRecommendation = (sizeBand: 'small' | 'medium' | 'large') => sizeBandDefaults.leak[sizeBand];

const addPlacement = (placements: PlannerPlacement[], placement?: PlannerPlacement) => {
  if (!placement || placement.quantity <= 0) return;
  placements.push(placement);
};

const buildTierPlan = (draft: PrecisionPlannerDraft, selectedTier: PlannerTierKey): PlannerPlan => {
  const normalized = normalizeDraft(draft);
  const tierBom = TIER_BOM[selectedTier];

  const placements: PlannerPlacement[] = [];
  const optionalAddons: PlannerPlacement[] = [];
  const gaps: PlannerGap[] = [];

  const doorCount = normalized.exteriorDoors.length;
  if (doorCount > 0) {
    addPlacement(placements, {
      key: 'contact_sensor',
      label: 'Exterior door contact sensors',
      quantity: doorCount,
      required: true,
      zones: normalized.exteriorDoors,
    });
  }

  if (doorCount > tierBom.contact_sensor) {
    gaps.push({
      key: 'contact_sensor',
      missing: doorCount - tierBom.contact_sensor,
      impact: 'Exterior door coverage',
    });
  }

  addPlacement(placements, {
    key: 'doorbell_wifi',
    label: 'Doorbell camera',
    quantity: tierBom.doorbell_wifi,
    required: true,
  });

  addPlacement(placements, {
    key: 'cam_indoor_wifi',
    label: 'Indoor cameras',
    quantity: tierBom.cam_indoor_wifi,
    required: true,
    zones: indoorCameraZones.slice(0, tierBom.cam_indoor_wifi),
    notes: normalized.elders ? ['Privacy-first placement with easy on/off control.'] : undefined,
  });

  const wantsOutdoor =
    normalized.priorities.includes('security') || normalized.propertyType !== 'apartment';
  if (wantsOutdoor && tierBom.cam_outdoor_poe > 0) {
    addPlacement(placements, {
      key: 'cam_outdoor_poe',
      label: 'Outdoor PoE cameras',
      quantity: tierBom.cam_outdoor_poe,
      required: true,
      zones: outdoorCameraZones.slice(0, tierBom.cam_outdoor_poe),
    });
  } else if (wantsOutdoor && tierBom.cam_outdoor_poe === 0) {
    addPlacement(optionalAddons, {
      key: 'cam_outdoor_poe',
      label: 'Outdoor PoE camera (exterior coverage add-on)',
      quantity: 1,
      required: false,
      zones: outdoorCameraZones.slice(0, 1),
    });
  }

  const recommendedMotion = buildMotionRecommendation(normalized.sizeBand, normalized.floors);
  addPlacement(placements, {
    key: 'motion_sensor',
    label: 'Motion sensors',
    quantity: tierBom.motion_sensor,
    required: true,
    notes: normalized.pets ? ['Pet-safe placement: avoid direct line-of-sight to pet paths.'] : undefined,
  });
  if (tierBom.motion_sensor < recommendedMotion) {
    addPlacement(optionalAddons, {
      key: 'motion_sensor',
      label: 'Additional motion sensors',
      quantity: recommendedMotion - tierBom.motion_sensor,
      required: false,
      notes: ['Adds coverage to hallways and stair landings.'],
    });
  }

  const recommendedLeak = buildLeakRecommendation(normalized.sizeBand);
  addPlacement(placements, {
    key: 'leak_sensor',
    label: 'Leak sensors',
    quantity: tierBom.leak_sensor,
    required: true,
    zones: leakZones.slice(0, tierBom.leak_sensor),
  });
  if (tierBom.leak_sensor < recommendedLeak) {
    addPlacement(optionalAddons, {
      key: 'leak_sensor',
      label: 'Additional leak sensors',
      quantity: recommendedLeak - tierBom.leak_sensor,
      required: false,
      zones: leakZones.slice(0, recommendedLeak - tierBom.leak_sensor),
    });
  }

  addPlacement(placements, {
    key: 'siren_chime',
    label: 'Siren / chime',
    quantity: tierBom.siren_chime,
    required: true,
  });

  addPlacement(placements, {
    key: 'smart_plug',
    label: 'Smart plugs',
    quantity: tierBom.smart_plug,
    required: true,
  });

  if (tierBom.protect_brains_ck > 0) {
    addPlacement(placements, {
      key: 'protect_brains_ck',
      label: 'Local recording host',
      quantity: tierBom.protect_brains_ck,
      required: true,
      notes: ['Technical: Cloud Key Gen2 Plus.'],
    });
  }

  if (tierBom.protect_brains_unvr > 0) {
    addPlacement(placements, {
      key: 'protect_brains_unvr',
      label: 'Local recording host',
      quantity: tierBom.protect_brains_unvr,
      required: true,
      notes: ['Technical: UNVR.'],
    });
  }

  if (tierBom.nvr_drive_4tb > 0) {
    addPlacement(placements, {
      key: 'nvr_drive_4tb',
      label: '4TB surveillance drives',
      quantity: tierBom.nvr_drive_4tb,
      required: true,
    });
  }

  if (normalized.groundWindows === 'some') {
    addPlacement(optionalAddons, {
      key: 'contact_sensor',
      label: 'Ground-level window sensors',
      quantity: 2,
      required: false,
    });
  }

  if (normalized.groundWindows === 'yes') {
    addPlacement(optionalAddons, {
      key: 'contact_sensor',
      label: 'Ground-level window sensors',
      quantity: 4,
      required: false,
    });
  }

  if (tierBom.poe_injector > 0 && (tierBom.cam_outdoor_poe > 0 || wantsOutdoor)) {
    addPlacement(optionalAddons, {
      key: 'poe_injector',
      label: 'PoE injectors (only if no PoE switch)',
      quantity: tierBom.poe_injector,
      required: false,
    });
  }

  const status: PlannerCoverageStatus =
    gaps.length > 0 ? 'gap' : optionalAddons.length > 0 ? 'complete_with_addons' : 'complete';

  return {
    selectedTier,
    coverage: { status, gaps, summary: buildCoverageSummary(normalized) },
    placements,
    optionalAddons,
    bundles: [],
  };
};

export const buildHomeSecurityPlannerPlan = (draft: PrecisionPlannerDraft, selectedTier: PlannerTierKey): PlannerPlan => {
  const plan = buildTierPlan(draft, selectedTier);
  const tiers: PlannerTierKey[] = ['bronze', 'silver', 'gold'];
  const bundles = tiers.map((tier) => {
    const bundlePlan = buildTierPlan(draft, tier);
    return {
      tier,
      coverage_status: bundlePlan.coverage.status,
      top_line: buildBundleTopLine(tier, bundlePlan.coverage.status, bundlePlan.coverage.gaps),
    };
  });
  return { ...plan, bundles };
};

export const deriveHomeSecurityQuoteAddOns = (
  plan: PlannerPlan,
  draft?: PrecisionPlannerDraft,
): { ids: string[]; notes: Record<string, string> } => {
  const ids: string[] = [];
  const notes: Record<string, string> = {};
  const optionalKeys = new Set(plan.optionalAddons.map((addon) => addon.key));
  const priorities = (draft?.priorities ?? []).map((priority) => priority.toLowerCase());
  const hasWaterPriority = priorities.includes('water');
  const hasSecurityPriority = priorities.includes('security');
  const hasElders = draft?.elders ?? false;

  const addAddOn = (id: string, note: string) => {
    if (ids.includes(id)) return;
    ids.push(id);
    notes[id] = note;
  };

  const sensorKeys: PlannerPlacement['key'][] = ['contact_sensor', 'motion_sensor', 'leak_sensor'];
  const hasSensorOptional = sensorKeys.some((key) => optionalKeys.has(key));
  if (hasSensorOptional) {
    addAddOn('additional-sensors', 'Adds coverage for windows, hallways, and water-risk areas.');
  }

  const cameraKeys: PlannerPlacement['key'][] = ['cam_outdoor_poe', 'cam_indoor_wifi', 'poe_injector'];
  const hasCameraOptional = cameraKeys.some((key) => optionalKeys.has(key));
  if (hasCameraOptional) {
    addAddOn('additional-cameras', 'Adds additional camera angles or PoE hardware as needed.');
  }

  const hasLeakOptional = optionalKeys.has('leak_sensor');
  if (hasWaterPriority || hasLeakOptional) {
    addAddOn('water-shutoff', 'Optional: enables automatic shutoff (plumbing required).');
  }

  const localRecordingKeys: PlannerPlacement['key'][] = ['protect_brains_ck', 'protect_brains_unvr', 'nvr_drive_4tb'];
  const hasLocalRecordingHost = plan.placements.some((placement) => localRecordingKeys.includes(placement.key));
  const shouldRecommendUps =
    (plan.selectedTier === 'gold' || hasLocalRecordingHost) && (hasSecurityPriority || hasElders);
  if (shouldRecommendUps) {
    addAddOn('ups-backup', 'Optional: keeps hub/network recording alive during outages.');
  }

  return { ids, notes };
};

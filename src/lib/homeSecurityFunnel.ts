import { PackageTierId } from '../data/pricing';
import { isFloorplanDeviceType, type FloorplanDeviceType } from '../components/floorplan/deviceCatalog';

export type HomeSecurityPathChoice = 'online' | 'onsite';

export type PerimeterVideo = 'none' | 'couple' | 'full';
export type LiveView = 'no' | 'occasionally' | 'regularly';
export type EntryPoints = '1-2' | '3-4' | '5+';
export type ExteriorArea = 'front' | 'driveway' | 'back' | 'side' | 'garage';
export type IndoorAreas = 'none' | '1-2' | '3+';
export type SpecialRoom = 'office' | 'safe_room' | 'mancave' | 'nursery' | 'not_really';
export type HomeSize = 'small' | 'typical' | 'large';
export type Preference = 'simple' | 'balanced' | 'maximum';

export type HomeSecurityFitCheckAnswers = {
  perimeterVideo?: PerimeterVideo;
  liveView?: LiveView;
  entryPoints?: EntryPoints;
  exteriorAreas: ExteriorArea[];
  indoorAreas?: IndoorAreas;
  specialRooms: SpecialRoom[];
  homeSize?: HomeSize;
  preference?: Preference;
};

export type HomeSecurityFitCheckResult = {
  tier: 'Bronze' | 'Silver' | 'Gold';
  summary: string;
  reasons: string[];
  assumedCoverage: string[];
};

export type PrecisionPlannerDraft = {
  propertyType?: 'house' | 'apartment' | 'condo' | 'rental';
  floors?: 1 | 2 | 3;
  sizeBand?: 'small' | 'medium' | 'large';
  garage?: 'none' | 'attached' | 'detached';
  exteriorDoors?: string[];
  groundWindows?: 'no' | 'some' | 'yes';
  pets?: boolean;
  elders?: boolean;
  priorities?: string[];
  selectedTier?: 'bronze' | 'silver' | 'gold';
};

export type HomeSecurityPlannerRecommendation = {
  recommendedTierKey: 'bronze' | 'silver' | 'gold';
  recommendedPackageId: 'A1' | 'A2' | 'A3';
  recommendedAddOnIds: string[];
  recommendedAddOnNotes?: Record<string, string>;
  generatedAtISO: string;
};

export type FloorplanRoomKind = 'bedroom' | 'bathroom' | 'kitchen' | 'living' | 'hall' | 'garage' | 'basement' | 'other';
export type FloorplanRoomSizeBand = 'small' | 'medium' | 'large';
export type FloorplanWall = 'n' | 's' | 'e' | 'w';

export type FloorplanRoom = {
  id: string;
  name: string;
  kind?: FloorplanRoomKind;
  sizeBand?: FloorplanRoomSizeBand;
  rect: { x: number; y: number; w: number; h: number };
  doors: Array<{ id: string; label: string; wall: FloorplanWall; offset: number; exterior?: boolean }>;
  windows: Array<{ id: string; label?: string; wall: FloorplanWall; offset: number }>;
};

export type FloorplanFloor = {
  id: string;
  label: 'Floor 1' | 'Floor 2' | 'Floor 3';
  rooms: FloorplanRoom[];
};

export type FloorplanPlacementSource = 'suggested' | 'user_added';

export type FloorplanPlacement = {
  id: string;
  deviceKey: FloorplanDeviceType;
  label: string;
  floorId: string;
  roomId?: string;
  position: { x: number; y: number };
  wallSnap?: { wall: FloorplanWall; offset: number };
  rotation?: number;
  required: boolean;
  source: FloorplanPlacementSource;
};

export type HomeSecurityFloorplan = {
  version: 'v1';
  floors: FloorplanFloor[];
  placements: FloorplanPlacement[];
};

export type HomeSecurityFunnelState = {
  selectedPackageId?: PackageTierId;
  selectedPath?: HomeSecurityPathChoice;
  fitCheckAnswers?: HomeSecurityFitCheckAnswers;
  fitCheckResult?: HomeSecurityFitCheckResult;
  precisionPlannerDraft?: PrecisionPlannerDraft;
  plannerRecommendation?: HomeSecurityPlannerRecommendation;
  floorplan?: HomeSecurityFloorplan;
};

export const migrateFloorplanPlacements = (floorplan: HomeSecurityFloorplan): HomeSecurityFloorplan => {
  if (!floorplan.placements.length) return floorplan;
  let changed = false;
  const placements = floorplan.placements.map((placement) => {
    const nextKey = isFloorplanDeviceType(placement.deviceKey as string) ? placement.deviceKey : 'door_sensor';
    if (nextKey === placement.deviceKey) {
      return placement;
    }
    changed = true;
    return { ...placement, deviceKey: nextKey };
  });
  return changed ? { ...floorplan, placements } : floorplan;
};

export const defaultHomeSecurityFitCheckAnswers: HomeSecurityFitCheckAnswers = {
  exteriorAreas: [],
  specialRooms: [],
};

export const entrySummaryLabels: Record<EntryPoints, string> = {
  '1-2': '1–2 entry points',
  '3-4': '3–4 entry points',
  '5+': '5+ entry points',
};

export const indoorSummaryLabels: Record<IndoorAreas, string> = {
  none: 'No indoor coverage',
  '1-2': '1–2 indoor areas',
  '3+': '3+ indoor areas',
};

export const perimeterSummaryLabels: Record<PerimeterVideo, string> = {
  none: 'No exterior video yet',
  couple: 'A couple of cameras',
  full: 'Full perimeter video',
};

export const exteriorAreaLabels: Record<ExteriorArea, string> = {
  front: 'Front entry',
  driveway: 'Driveway',
  back: 'Backyard',
  side: 'Side yards',
  garage: 'Garage interior',
};

export const homeSizeLabels: Record<HomeSize, string> = {
  small: 'Small',
  typical: 'Typical',
  large: 'Large',
};

export const isHomeSecurityFitCheckComplete = (answers: HomeSecurityFitCheckAnswers) => {
  return (
    Boolean(answers.perimeterVideo) &&
    Boolean(answers.liveView) &&
    Boolean(answers.entryPoints) &&
    answers.exteriorAreas.length > 0 &&
    Boolean(answers.indoorAreas) &&
    Boolean(answers.homeSize) &&
    Boolean(answers.preference)
  );
};

export const buildAssumedCoverage = (answers: HomeSecurityFitCheckAnswers): string[] => {
  const exterior =
    answers.exteriorAreas.length > 0
      ? answers.exteriorAreas.map((area) => exteriorAreaLabels[area]).join(', ')
      : 'Not specified';
  const videoPreference = answers.perimeterVideo ? perimeterSummaryLabels[answers.perimeterVideo] : 'Not specified';
  const entryPoints = answers.entryPoints ? entrySummaryLabels[answers.entryPoints] : 'Not specified';
  const indoor = answers.indoorAreas ? indoorSummaryLabels[answers.indoorAreas] : 'Not specified';
  const homeSize = answers.homeSize ? homeSizeLabels[answers.homeSize] : 'Not specified';

  return [
    `Entry points: ${entryPoints}`,
    `Exterior focus: ${exterior}`,
    `Indoor coverage: ${indoor}`,
    `Video preference: ${videoPreference}`,
    `Home size: ${homeSize}`,
  ];
};

export const tierToPackageId = (tier: HomeSecurityFitCheckResult['tier']): PackageTierId => {
  switch (tier) {
    case 'Bronze':
      return 'A1';
    case 'Silver':
      return 'A2';
    case 'Gold':
    default:
      return 'A3';
  }
};

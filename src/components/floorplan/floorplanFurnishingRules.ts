import type { FloorplanRoom } from '../../lib/homeSecurityFunnel';

type FurnishingShape = 'rect' | 'round' | 'circle';

type FurnishingTemplate = {
  id: string;
  kind: string;
  shape: FurnishingShape;
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
  rotation?: number;
  minRoomWidth?: number;
  minRoomHeight?: number;
};

export type FloorplanFurnishing = Pick<
  FurnishingTemplate,
  'id' | 'kind' | 'shape' | 'xPct' | 'yPct' | 'wPct' | 'hPct' | 'rotation'
>;

type FurnishingRoomType = 'bathroom' | 'bedroom' | 'kitchen' | 'living' | 'dining' | 'office';

const ROOM_FURNISHINGS: Record<FurnishingRoomType, FurnishingTemplate[]> = {
  bathroom: [
    {
      id: 'sink',
      kind: 'sink',
      shape: 'round',
      xPct: 0.08,
      yPct: 0.12,
      wPct: 0.22,
      hPct: 0.22,
      minRoomWidth: 80,
      minRoomHeight: 60,
    },
    {
      id: 'toilet',
      kind: 'toilet',
      shape: 'circle',
      xPct: 0.65,
      yPct: 0.58,
      wPct: 0.18,
      hPct: 0.18,
      minRoomWidth: 90,
      minRoomHeight: 70,
    },
  ],
  living: [
    {
      id: 'couch',
      kind: 'couch',
      shape: 'round',
      xPct: 0.08,
      yPct: 0.22,
      wPct: 0.48,
      hPct: 0.26,
      minRoomWidth: 140,
      minRoomHeight: 80,
    },
    {
      id: 'loveseat',
      kind: 'loveseat',
      shape: 'round',
      xPct: 0.52,
      yPct: 0.58,
      wPct: 0.32,
      hPct: 0.22,
      minRoomWidth: 140,
      minRoomHeight: 80,
    },
  ],
  bedroom: [
    {
      id: 'bed',
      kind: 'bed',
      shape: 'rect',
      xPct: 0.1,
      yPct: 0.18,
      wPct: 0.55,
      hPct: 0.35,
      minRoomWidth: 80,
      minRoomHeight: 60,
    },
    {
      id: 'rocking-chair',
      kind: 'rocking_chair',
      shape: 'circle',
      xPct: 0.68,
      yPct: 0.6,
      wPct: 0.18,
      hPct: 0.18,
      minRoomWidth: 120,
      minRoomHeight: 80,
    },
  ],
  kitchen: [
    {
      id: 'stove',
      kind: 'stove',
      shape: 'rect',
      xPct: 0.06,
      yPct: 0.15,
      wPct: 0.26,
      hPct: 0.28,
      minRoomWidth: 120,
      minRoomHeight: 80,
    },
    {
      id: 'sink',
      kind: 'sink',
      shape: 'round',
      xPct: 0.62,
      yPct: 0.1,
      wPct: 0.24,
      hPct: 0.22,
      minRoomWidth: 120,
      minRoomHeight: 80,
    },
    {
      id: 'refrigerator',
      kind: 'refrigerator',
      shape: 'rect',
      xPct: 0.68,
      yPct: 0.56,
      wPct: 0.22,
      hPct: 0.32,
      minRoomWidth: 150,
      minRoomHeight: 100,
    },
  ],
  dining: [
    {
      id: 'dining-table',
      kind: 'dining_table',
      shape: 'round',
      xPct: 0.18,
      yPct: 0.25,
      wPct: 0.5,
      hPct: 0.4,
      minRoomWidth: 140,
      minRoomHeight: 90,
    },
    {
      id: 'curio',
      kind: 'curio',
      shape: 'rect',
      xPct: 0.7,
      yPct: 0.1,
      wPct: 0.22,
      hPct: 0.2,
      minRoomWidth: 120,
      minRoomHeight: 80,
    },
  ],
  office: [
    {
      id: 'desk',
      kind: 'desk',
      shape: 'rect',
      xPct: 0.12,
      yPct: 0.16,
      wPct: 0.5,
      hPct: 0.26,
      minRoomWidth: 130,
      minRoomHeight: 80,
    },
    {
      id: 'chair',
      kind: 'chair',
      shape: 'circle',
      xPct: 0.34,
      yPct: 0.5,
      wPct: 0.16,
      hPct: 0.16,
      minRoomWidth: 110,
      minRoomHeight: 80,
    },
    {
      id: 'plant',
      kind: 'plant',
      shape: 'circle',
      xPct: 0.74,
      yPct: 0.6,
      wPct: 0.12,
      hPct: 0.12,
      minRoomWidth: 120,
      minRoomHeight: 90,
    },
  ],
};

const ROOM_NAME_MATCHERS: Array<{ match: RegExp; type: FurnishingRoomType }> = [
  { match: /dining/i, type: 'dining' },
  { match: /office|study/i, type: 'office' },
  { match: /living/i, type: 'living' },
  { match: /bed/i, type: 'bedroom' },
  { match: /bath/i, type: 'bathroom' },
  { match: /kitchen/i, type: 'kitchen' },
];

const resolveFurnishingRoomType = (room: FloorplanRoom): FurnishingRoomType | null => {
  switch (room.kind) {
    case 'bathroom':
      return 'bathroom';
    case 'bedroom':
      return 'bedroom';
    case 'kitchen':
      return 'kitchen';
    case 'living':
      return 'living';
    default:
      break;
  }

  const name = room.name.toLowerCase();
  const matched = ROOM_NAME_MATCHERS.find((matcher) => matcher.match.test(name));
  return matched ? matched.type : null;
};

const clampItemCount = (templates: FurnishingTemplate[], room: FloorplanRoom) => {
  const area = room.rect.w * room.rect.h;
  if (area < 4200) return templates.slice(0, 1);
  if (area < 7600) return templates.slice(0, 2);
  return templates;
};

const fitsRoom = (template: FurnishingTemplate, room: FloorplanRoom) => {
  if (template.minRoomWidth && room.rect.w < template.minRoomWidth) return false;
  if (template.minRoomHeight && room.rect.h < template.minRoomHeight) return false;
  const itemWidth = room.rect.w * template.wPct;
  const itemHeight = room.rect.h * template.hPct;
  return itemWidth >= 16 && itemHeight >= 16;
};

export const getRoomFurnishings = (room: FloorplanRoom): FloorplanFurnishing[] => {
  const roomType = resolveFurnishingRoomType(room);
  if (!roomType) return [];
  const templates = clampItemCount(ROOM_FURNISHINGS[roomType], room);

  return templates.filter((template) => fitsRoom(template, room)).map((template) => ({
    id: template.id,
    kind: template.kind,
    shape: template.shape,
    xPct: template.xPct,
    yPct: template.yPct,
    wPct: template.wPct,
    hPct: template.hPct,
    rotation: template.rotation,
  }));
};

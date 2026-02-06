import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccordionSection from '../components/AccordionSection';
import FloorplanCanvas from '../components/floorplan/FloorplanCanvas';
import HomeSecurityFunnelSteps from '../components/HomeSecurityFunnelSteps';
import { useLayoutConfig } from '../components/LayoutConfig';
import {
  DEVICE_CATALOG,
  DEVICE_KEYS,
  DEVICE_ICON_TONES,
  isRotatableDevice,
  isWallAnchored,
  type FloorplanDeviceType,
} from '../components/floorplan/deviceCatalog';
import {
  autoSnapToNearestWall,
  applyRoomDimensions,
  clampPointToRect,
  computeExteriorBounds,
  computeScaleFromFootprint,
  FEET_PER_STEP,
  findRoomAtPoint,
  getCompassOrientationLabel,
  getDefaultWindowGroundLevel,
  getPlacementRotation,
  getWallInsetPosition,
  snapToGrid,
  updateAnchoredMarkerAfterResize,
  type FloorplanWindowMarker,
  type WindowStylePreset,
} from '../components/floorplan/floorplanUtils';
import {
  addStairs,
  setCompassOrientation,
  ensureFloorplanStairs,
  removePlacementById,
  removeRoomById,
  removeStairsById,
  type CompassOrientation,
  type FloorplanStair,
  type FloorplanStairDirection,
  type HomeSecurityFloorplanWithStairs,
} from '../components/floorplan/floorplanState';
import { COVERAGE_STATE_COLORS, COVERAGE_TOOLTIPS } from '../lib/homeSecurityPlanner/coverageConstants';
import { computeFloorplanCoverageOverlay } from '../lib/homeSecurityPlanner/coverageModel';
import { buildCoverageNotes, buildDeviceSummary } from '../lib/homeSecurityPlanner/export/exportNotes';
import { capturePlannerSnapshot } from '../lib/homeSecurityPlanner/export/exportImage';
import { generatePdf } from '../lib/homeSecurityPlanner/export/exportPdf';
import { computeInstallEffort } from '../lib/homeSecurityPlanner/installEffort/computeInstallEffort';
import { track } from '../lib/analytics';
import type {
  EntryPoints,
  FloorplanFloor,
  FloorplanPlacement,
  FloorplanRoom,
  FloorplanRoomKind,
  FloorplanWall,
  HomeSecurityFitCheckAnswers,
  PrecisionPlannerDraft,
} from '@/lib/homeSecurityFunnel';
import {
  buildHomeSecurityPlannerPlan,
  deriveHomeSecurityQuoteAddOns,
  type PlannerPlan,
  type PlannerTierKey,
} from '../lib/homeSecurityPlannerEngine';
import { migrateFloorplanPlacements } from '../lib/homeSecurityFunnel';
import { loadRetailFlow, updateRetailFlow } from '../lib/retailFlow';

const priorityOptions = ['Security', 'Packages', 'Water'] as const;
const wallOptions: Array<{ value: FloorplanWall; label: string }> = [
  { value: 'n', label: 'North' },
  { value: 's', label: 'South' },
  { value: 'e', label: 'East' },
  { value: 'w', label: 'West' },
];

const windowStyleOptions: Array<{ value: WindowStylePreset; label: string }> = [
  { value: 'standard', label: 'Standard' },
  { value: 'basement', label: 'Basement (low)' },
  { value: 'glassBlock', label: 'Glass block' },
];

const compassOrientationOptions: CompassOrientation[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const exteriorDoorLabelKeywords = ['front', 'back', 'side', 'patio', 'garage entry', 'slider'];

const isExteriorDoorLabel = (label: string) => {
  const normalized = label.toLowerCase();
  return exteriorDoorLabelKeywords.some((keyword) => normalized.includes(keyword));
};

const createDoor = (
  label: string,
  options?: { wall?: FloorplanWall; offset?: number; exterior?: boolean },
): FloorplanRoom['doors'][number] => ({
  id: `door-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
  label,
  wall: options?.wall ?? 's',
  offset: options?.offset ?? 0.5,
  exterior: options?.exterior ?? isExteriorDoorLabel(label),
});

const createWindow = (
  label: string,
  options?: { wall?: FloorplanWall; offset?: number; isGroundLevel?: boolean; windowStyle?: WindowStylePreset },
): FloorplanWindowMarker => ({
  id: `window-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
  label,
  wall: options?.wall ?? 's',
  offset: options?.offset ?? 0.5,
  isGroundLevel: options?.isGroundLevel ?? true,
  windowStyle: options?.windowStyle ?? 'standard',
});

const deriveExteriorDoors = (entryPoints?: EntryPoints): string[] | undefined => {
  if (!entryPoints) return undefined;
  if (entryPoints === '1-2') {
    return ['Front door'];
  }
  if (entryPoints === '3-4') {
    return ['Front door', 'Back door', 'Garage entry'];
  }
  return ['Front door', 'Back door', 'Side door', 'Patio slider', 'Garage entry'];
};

const deriveDraftFromFitCheck = (answers?: HomeSecurityFitCheckAnswers): PrecisionPlannerDraft => {
  if (!answers) return {};
  const derivedDoors = deriveExteriorDoors(answers.entryPoints);
  const sizeBand =
    answers.homeSize === 'small' ? 'small' : answers.homeSize === 'typical' ? 'medium' : answers.homeSize === 'large' ? 'large' : undefined;
  return {
    exteriorDoors: derivedDoors,
    sizeBand,
  };
};

const floorLabels = ['Floor 1', 'Floor 2', 'Floor 3'] as const;

const createFloor = (index: number): FloorplanFloor => ({
  id: `floor-${index + 1}`,
  label: floorLabels[index],
  rooms: [],
});

const createEmptyFloorplan = (count: 1 | 2 | 3): HomeSecurityFloorplanWithStairs => ({
  version: 'v1',
  floors: Array.from({ length: count }, (_, index) => createFloor(index)),
  placements: [],
  stairs: [],
  compassOrientation: null,
  homeFootprintFeet: null,
  feetPerStep: null,
  roomDimensionsFeet: {},
});

const clampRotation = (value: number) => Math.min(Math.max(value, 0), 360);

type PlacementInput = Omit<FloorplanPlacement, 'id' | 'source'> & { id?: string };

const userPlacementSource: FloorplanPlacement['source'] = 'user_added';
const suggestedPlacementSource: FloorplanPlacement['source'] = 'suggested';

export const createUserPlacement = (input: PlacementInput): FloorplanPlacement => ({
  id: input.id ?? `placement-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
  ...input,
  source: userPlacementSource,
});

export const generateSuggestedPlacements = (inputs: PlacementInput[]): FloorplanPlacement[] => {
  return inputs.map((input, index) => ({
    id: input.id ?? `suggested-${index + 1}`,
    ...input,
    source: suggestedPlacementSource,
  }));
};

const roomKindOptions: Array<{ value: FloorplanRoomKind; label: string }> = [
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'bathroom', label: 'Bathroom' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'living', label: 'Living' },
  { value: 'hall', label: 'Hall' },
  { value: 'garage', label: 'Garage' },
  { value: 'basement', label: 'Basement' },
  { value: 'other', label: 'Other' },
];

const createRoom = (name: string, index: number, rectOverride?: FloorplanRoom['rect']): FloorplanRoom => ({
  id: `room-${name.toLowerCase().replace(/\\s+/g, '-')}-${index + 1}`,
  name,
  kind: undefined,
  rect: rectOverride ?? { x: 24, y: 24 + index * 70, w: 160, h: 56 },
  doors: [],
  windows: [],
});

const applyTemplateToFloors = (
  template: 'apartment' | 'ranch' | '2-story',
  floorplan: HomeSecurityFloorplanWithStairs,
  garage: PrecisionPlannerDraft['garage'],
): HomeSecurityFloorplanWithStairs => {
  const nextFloors = floorplan.floors.map((floor) => ({ ...floor, rooms: [...floor.rooms] }));
  const addDefaultDoors = (rooms: FloorplanRoom[], options: { includeBackDoor?: boolean; includeGarageEntry?: boolean }) => {
    if (rooms.length === 0) return rooms;
    const livingRoom = rooms.find((room) => room.name.toLowerCase().includes('living'));
    const hallRoom = rooms.find((room) => room.name.toLowerCase().includes('hall'));
    const fallbackRoom = livingRoom ?? hallRoom ?? rooms[0];
    const nextRooms = rooms.map((room) => ({ ...room }));

    const addDoorToRoom = (room: FloorplanRoom, door: FloorplanRoom['doors'][number]) => {
      room.doors = [...room.doors, door];
    };

    if (fallbackRoom) {
      const target = nextRooms.find((room) => room.id === fallbackRoom.id);
      if (target) {
        addDoorToRoom(
          target,
          createDoor('Front door', {
            wall: 's',
            offset: 0.5,
            exterior: true,
          }),
        );
      }
    }

    if (options.includeBackDoor && fallbackRoom) {
      const target = nextRooms.find((room) => room.id === fallbackRoom.id);
      if (target) {
        addDoorToRoom(
          target,
          createDoor('Back door', {
            wall: 'n',
            offset: 0.5,
            exterior: true,
          }),
        );
      }
    }

    if (options.includeGarageEntry && garage && garage !== 'none') {
      const garageRoom =
        nextRooms.find((room) => room.name.toLowerCase().includes('garage')) ??
        nextRooms.find((room) => room.name.toLowerCase().includes('hall')) ??
        fallbackRoom;
      if (garageRoom) {
        addDoorToRoom(
          garageRoom,
          createDoor('Garage entry', {
            wall: 'e',
            offset: 0.5,
            exterior: true,
          }),
        );
      }
    }

    return nextRooms;
  };

  if (template === 'apartment') {
    const target = nextFloors[0];
    if (target) {
      target.rooms = [
        createRoom('Living', 0, { x: 24, y: 24, w: 220, h: 90 }),
        createRoom('Kitchen', 1, { x: 260, y: 24, w: 160, h: 90 }),
        createRoom('Bedroom', 2, { x: 24, y: 140, w: 180, h: 80 }),
        createRoom('Bath', 3, { x: 220, y: 140, w: 120, h: 80 }),
      ];
      target.rooms = addDefaultDoors(target.rooms, { includeGarageEntry: true });
    }
  }

  if (template === 'ranch') {
    const target = nextFloors[0];
    if (target) {
      target.rooms = [
        createRoom('Living', 0, { x: 24, y: 24, w: 220, h: 80 }),
        createRoom('Kitchen', 1, { x: 260, y: 24, w: 160, h: 80 }),
        createRoom('Primary Bedroom', 2, { x: 24, y: 120, w: 200, h: 80 }),
        createRoom('Bath', 3, { x: 240, y: 120, w: 120, h: 80 }),
        createRoom('Hall', 4, { x: 24, y: 210, w: 200, h: 60 }),
      ];
      target.rooms = addDefaultDoors(target.rooms, { includeBackDoor: true, includeGarageEntry: true });
    }
  }

  if (template === '2-story') {
    const first = nextFloors[0];
    const second = nextFloors[1];
    if (first) {
      first.rooms = [
        createRoom('Living', 0, { x: 24, y: 24, w: 220, h: 90 }),
        createRoom('Kitchen', 1, { x: 260, y: 24, w: 160, h: 90 }),
        createRoom('Hall', 2, { x: 24, y: 140, w: 180, h: 70 }),
      ];
      first.rooms = addDefaultDoors(first.rooms, { includeBackDoor: true, includeGarageEntry: true });
    }
    if (second) {
      second.rooms = [
        createRoom('Bedroom 1', 0, { x: 24, y: 24, w: 200, h: 90 }),
        createRoom('Bedroom 2', 1, { x: 240, y: 24, w: 170, h: 90 }),
        createRoom('Bath', 2, { x: 24, y: 140, w: 140, h: 70 }),
      ];
    }
  }

  return { ...floorplan, floors: nextFloors };
};

const HomeSecurityPlanner = () => {
  useLayoutConfig({
    layoutVariant: 'funnel',
    showBreadcrumbs: true,
    breadcrumb: [
      { label: 'Home Security', href: '/home-security' },
      { label: 'Precision Planner' },
    ],
  });

  const storedFlow = loadRetailFlow();
  const storedDraft = storedFlow.homeSecurity?.precisionPlannerDraft;
  const fitCheckTier = storedFlow.homeSecurity?.fitCheckResult?.tier;
  const defaultTier: PlannerTierKey =
    fitCheckTier === 'Bronze' ? 'bronze' : fitCheckTier === 'Silver' ? 'silver' : fitCheckTier === 'Gold' ? 'gold' : 'silver';

  const initialDraft = (() => {
    if (storedDraft && Object.keys(storedDraft).length > 0) {
      return { ...storedDraft, selectedTier: storedDraft.selectedTier ?? defaultTier };
    }
    return { ...deriveDraftFromFitCheck(storedFlow.homeSecurity?.fitCheckAnswers), selectedTier: defaultTier };
  })();

  const [draft, setDraft] = useState<PrecisionPlannerDraft>(initialDraft);
  const defaultFloorCount = (initialDraft.floors ?? 1) as 1 | 2 | 3;
  const [floorplan, setFloorplan] = useState<HomeSecurityFloorplanWithStairs>(() => {
    const storedFloorplan = storedFlow.homeSecurity?.floorplan ?? createEmptyFloorplan(defaultFloorCount);
    return ensureFloorplanStairs(migrateFloorplanPlacements(storedFloorplan));
  });
  const [selectedFloorId, setSelectedFloorId] = useState<string>(() => floorplan.floors[0]?.id ?? 'floor-1');
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [selectedPlacementId, setSelectedPlacementId] = useState<string | null>(null);
  const [selectedStairsId, setSelectedStairsId] = useState<string | null>(null);
  const [activeDeviceKey, setActiveDeviceKey] = useState<FloorplanDeviceType | null>(null);
  const [activeStairsDirection, setActiveStairsDirection] = useState<FloorplanStairDirection | null>(null);
  const [dockOpen, setDockOpen] = useState<'left' | 'right' | null>(null);
  const [showCoverage, setShowCoverage] = useState(false);
  const [showFurnishings, setShowFurnishings] = useState(true);
  const [showExteriorContext, setShowExteriorContext] = useState(true);
  const [exportMenuOpen, setExportMenuOpen] = useState(false);
  const [exportStatus, setExportStatus] = useState<'png' | 'pdf' | null>(null);
  const plannerExportRef = useRef<HTMLDivElement | null>(null);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const leftDockRef = useRef<HTMLDivElement | null>(null);
  const rightDockRef = useRef<HTMLDivElement | null>(null);
  const [selectedTier, setSelectedTier] = useState<PlannerTierKey>(initialDraft.selectedTier ?? defaultTier);
  const [plan, setPlan] = useState<PlannerPlan | null>(null);
  const [footprintWidthInput, setFootprintWidthInput] = useState('');
  const [footprintDepthInput, setFootprintDepthInput] = useState('');
  const [roomWidthInput, setRoomWidthInput] = useState('');
  const [roomDepthInput, setRoomDepthInput] = useState('');
  const navigate = useNavigate();
  const workspaceHeight = 'max(620px, calc(100vh - 320px))';

  const exteriorDoors = draft.exteriorDoors ?? [];
  const priorities = draft.priorities ?? [];
  const wizardFloors = (draft.floors ?? 1) as 1 | 2 | 3;
  const selectedFloor = floorplan.floors.find((floor) => floor.id === selectedFloorId) ?? floorplan.floors[0];
  const selectedRoom = selectedFloor?.rooms.find((room) => room.id === selectedRoomId);
  const floorPlacements = useMemo(
    () => floorplan.placements.filter((placement) => placement.floorId === selectedFloor?.id),
    [floorplan.placements, selectedFloor?.id],
  );
  const floorStairs = useMemo(
    () => floorplan.stairs.filter((stair) => stair.floorId === selectedFloor?.id),
    [floorplan.stairs, selectedFloor?.id],
  );
  const coverageOverlay = useMemo(() => {
    if (!showCoverage || !selectedFloor) return null;
    return computeFloorplanCoverageOverlay(selectedFloor, floorPlacements);
  }, [floorPlacements, selectedFloor, showCoverage]);
  const selectedPlacement = floorPlacements.find((placement) => placement.id === selectedPlacementId);
  const selectedStairs = floorStairs.find((stair) => stair.id === selectedStairsId);
  const selectedPlacementItem = selectedPlacement ? DEVICE_CATALOG[selectedPlacement.deviceKey] : null;
  const selectedSummary = selectedPlacementItem ? selectedPlacementItem.label : selectedStairs ? `Stairs ${selectedStairs.direction}` : null;
  const selectedPlacementRoom =
    selectedPlacement && selectedFloor
      ? selectedFloor.rooms.find((room) => room.id === selectedPlacement.roomId) ??
        findRoomAtPoint(selectedFloor, selectedPlacement.position)
      : undefined;
  const activeCatalogItem = activeDeviceKey ? DEVICE_CATALOG[activeDeviceKey] : null;
  const isExporting = exportStatus !== null;
  const hasPlacedDevices = floorplan.placements.length > 0;
  const hasSelectedTier = Boolean(selectedTier);
  const showInstallEffort = hasSelectedTier || hasPlacedDevices;
  const hasSelectedItem = Boolean(selectedPlacementId || selectedStairsId);
  const installEffort = useMemo(() => computeInstallEffort({ floorplan }), [floorplan]);
  const compassLabel = getCompassOrientationLabel(floorplan.compassOrientation ?? null);
  const footprintScaleLabel = floorplan.feetPerStep ? floorplan.feetPerStep.toFixed(1) : null;

  const selectedRoomDimensions =
    selectedRoomId && floorplan.roomDimensionsFeet ? floorplan.roomDimensionsFeet[selectedRoomId] ?? null : null;
  const canApplyFootprint = Boolean(footprintWidthInput && footprintDepthInput && selectedFloor?.rooms.length);
  const canApplyRoomDimensions = Boolean(roomWidthInput && roomDepthInput && selectedRoom);

  const downloadDataUrl = (dataUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    link.click();
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    downloadDataUrl(url, filename);
    URL.revokeObjectURL(url);
  };

  const buildCoverageSnapshot = () => {
    const collectedRoomStates: Parameters<typeof buildCoverageNotes>[0] = [];
    const collectedDoorExceptions: Parameters<typeof buildCoverageNotes>[1] = [];

    floorplan.floors.forEach((floor) => {
      const placements = floorplan.placements.filter((placement) => placement.floorId === floor.id);
      const overlay = computeFloorplanCoverageOverlay(floor, placements);
      collectedRoomStates.push(...overlay.roomStates);
      collectedDoorExceptions.push(...overlay.exteriorDoorExceptions);
    });

    return buildCoverageNotes(collectedRoomStates, collectedDoorExceptions);
  };

  const handleDownloadPng = async () => {
    if (!plannerExportRef.current) return;
    setExportStatus('png');
    setExportMenuOpen(false);
    try {
      const dataUrl = await capturePlannerSnapshot({ element: plannerExportRef.current, fitToBounds: true });
      downloadDataUrl(dataUrl, 'home-security-plan.png');
    } finally {
      setExportStatus(null);
    }
  };

  const handleDownloadPdf = async () => {
    if (!plannerExportRef.current) return;
    setExportStatus('pdf');
    setExportMenuOpen(false);
    try {
      const image = await capturePlannerSnapshot({ element: plannerExportRef.current, fitToBounds: true });
      const deviceSummary = buildDeviceSummary(floorplan);
      const coverageNotes = buildCoverageSnapshot();
      const pdfBlob = await generatePdf({
        image,
        notes: {
          deviceSummary,
          coverageNotes,
        },
      });
      downloadBlob(pdfBlob, 'home-security-plan.pdf');
    } finally {
      setExportStatus(null);
    }
  };

  const mapExteriorDoors = useMemo(() => {
    return floorplan.floors.flatMap((floor) =>
      floor.rooms.flatMap((room) =>
        room.doors
          .filter((door) => door.exterior)
          .map((door) => (door.label?.trim() ? door.label.trim() : 'Exterior door')),
      ),
    );
  }, [floorplan]);

  const usingMapExteriorDoors = mapExteriorDoors.length > 0;
  const plannerExteriorDoors = usingMapExteriorDoors ? mapExteriorDoors : exteriorDoors;
  const plannerDraft = useMemo(
    () => ({
      ...draft,
      exteriorDoors: plannerExteriorDoors,
    }),
    [draft, plannerExteriorDoors],
  );

  const handleDoorLabelChange = (index: number, value: string) => {
    setDraft((prev) => {
      const nextDoors = [...(prev.exteriorDoors ?? [])];
      nextDoors[index] = value;
      return { ...prev, exteriorDoors: nextDoors };
    });
  };

  const handleRemoveDoor = (index: number) => {
    setDraft((prev) => {
      const nextDoors = [...(prev.exteriorDoors ?? [])];
      nextDoors.splice(index, 1);
      return { ...prev, exteriorDoors: nextDoors };
    });
  };

  const handleAddDoor = () => {
    setDraft((prev) => ({
      ...prev,
      exteriorDoors: [...(prev.exteriorDoors ?? []), ''],
    }));
  };

  const handlePriorityToggle = (value: (typeof priorityOptions)[number]) => {
    setDraft((prev) => {
      const nextPriorities = new Set(prev.priorities ?? []);
      if (nextPriorities.has(value)) {
        nextPriorities.delete(value);
      } else if (nextPriorities.size < 2) {
        nextPriorities.add(value);
      }
      return { ...prev, priorities: Array.from(nextPriorities) };
    });
  };

  const handleCompassOrientationChange = (value: string) => {
    setFloorplan((prev) =>
      setCompassOrientation(prev, (value || null) as CompassOrientation | null),
    );
  };

  const handleApplyHomeFootprint = () => {
    if (!selectedFloor) return;
    const widthFt = Number(footprintWidthInput);
    const depthFt = Number(footprintDepthInput);
    if (!Number.isFinite(widthFt) || widthFt <= 0) return;
    if (!Number.isFinite(depthFt) || depthFt <= 0) return;
    const exteriorBounds = computeExteriorBounds(selectedFloor.rooms);
    if (!exteriorBounds) return;
    const feetPerStep = computeScaleFromFootprint(exteriorBounds, widthFt, depthFt);
    setFloorplan((prev) => ({
      ...prev,
      homeFootprintFeet: { widthFt, depthFt },
      feetPerStep,
    }));
  };

  const handleClearHomeFootprint = () => {
    setFloorplan((prev) => ({
      ...prev,
      homeFootprintFeet: null,
      feetPerStep: null,
    }));
  };

  const handleSaveDraft = () => {
    updateRetailFlow({ homeSecurity: { precisionPlannerDraft: draft } });
  };

  const handleDockToggle = (dock: 'left' | 'right') => {
    setDockOpen((open) => (open === dock ? null : dock));
  };

  useEffect(() => {
    setFloorplan((prev) => {
      if (!prev || prev.version !== 'v1') {
        return createEmptyFloorplan(wizardFloors);
      }
      let nextFloors = prev.floors.map((floor, index) => ({ ...floor, label: floorLabels[index] }));
      if (nextFloors.length < wizardFloors) {
        const additions = Array.from({ length: wizardFloors - nextFloors.length }, (_, index) =>
          createFloor(nextFloors.length + index),
        );
        nextFloors = [...nextFloors, ...additions];
      } else if (nextFloors.length > wizardFloors) {
        nextFloors = nextFloors.slice(0, wizardFloors);
      }
      return { ...prev, floors: nextFloors };
    });
  }, [wizardFloors]);

  useEffect(() => {
    if (!floorplan.floors.find((floor) => floor.id === selectedFloorId)) {
      setSelectedFloorId(floorplan.floors[0]?.id ?? 'floor-1');
      setSelectedRoomId(undefined);
    }
  }, [floorplan.floors, selectedFloorId]);

  useEffect(() => {
    setFootprintWidthInput(floorplan.homeFootprintFeet?.widthFt ? String(floorplan.homeFootprintFeet.widthFt) : '');
    setFootprintDepthInput(floorplan.homeFootprintFeet?.depthFt ? String(floorplan.homeFootprintFeet.depthFt) : '');
  }, [floorplan.homeFootprintFeet?.depthFt, floorplan.homeFootprintFeet?.widthFt]);

  useEffect(() => {
    if (!selectedRoomId) {
      setRoomWidthInput('');
      setRoomDepthInput('');
      return;
    }
    const dimensions = floorplan.roomDimensionsFeet?.[selectedRoomId] ?? null;
    setRoomWidthInput(dimensions?.widthFt ? String(dimensions.widthFt) : '');
    setRoomDepthInput(dimensions?.depthFt ? String(dimensions.depthFt) : '');
  }, [floorplan.roomDimensionsFeet, selectedRoomId]);

  useEffect(() => {
    if (selectedPlacementId && !floorPlacements.find((placement) => placement.id === selectedPlacementId)) {
      setSelectedPlacementId(null);
    }
  }, [floorPlacements, selectedPlacementId]);

  useEffect(() => {
    if (selectedStairsId && !floorStairs.find((stair) => stair.id === selectedStairsId)) {
      setSelectedStairsId(null);
    }
  }, [floorStairs, selectedStairsId]);

  useEffect(() => {
    if (!dockOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (leftDockRef.current?.contains(target) || rightDockRef.current?.contains(target)) {
        return;
      }
      setDockOpen(null);
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [dockOpen]);

  useEffect(() => {
    if (!activeDeviceKey) return;
    setDockOpen('right');
  }, [activeDeviceKey]);

  useEffect(() => {
    updateRetailFlow({ homeSecurity: { floorplan } });
  }, [floorplan]);

  const handleContinue = () => {
    track('hs_planner_results_generated', {
      tier: selectedTier,
      doors_count: plannerExteriorDoors.length,
      pets: Boolean(plannerDraft.pets),
      elders: Boolean(plannerDraft.elders),
      ground_windows: plannerDraft.groundWindows ?? 'unknown',
    });
    const nextPlan = buildHomeSecurityPlannerPlan(plannerDraft, selectedTier);
    setPlan(nextPlan);
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleTierChange = (value: PlannerTierKey) => {
    setSelectedTier(value);
    setDraft((prev) => ({ ...prev, selectedTier: value }));
  };

  const handleApplyToQuote = () => {
    const nextPlan = plan ?? buildHomeSecurityPlannerPlan(plannerDraft, selectedTier);
    if (!plan) {
      setPlan(nextPlan);
    }
    const recommendedTierKey = nextPlan.selectedTier;
    const recommendedPackageId = recommendedTierKey === 'bronze' ? 'A1' : recommendedTierKey === 'silver' ? 'A2' : 'A3';
    const derivedAddOns = deriveHomeSecurityQuoteAddOns(nextPlan, plannerDraft);
    track('hs_planner_applied_to_quote', {
      recommendedTier: recommendedTierKey,
      add_ons_count: derivedAddOns.ids.length,
    });
    updateRetailFlow({
      homeSecurity: {
        plannerRecommendation: {
          recommendedTierKey,
          recommendedPackageId,
          recommendedAddOnIds: derivedAddOns.ids,
          recommendedAddOnNotes: Object.keys(derivedAddOns.notes).length > 0 ? derivedAddOns.notes : undefined,
          generatedAtISO: new Date().toISOString(),
        },
      },
    });
    navigate(`/quote?vertical=home-security&tier=${recommendedPackageId}`);
  };

  const handleSelectFloor = (floorId: string) => {
    setSelectedFloorId(floorId);
    setSelectedRoomId(undefined);
    setSelectedPlacementId(null);
    setSelectedStairsId(null);
  };

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setSelectedPlacementId(null);
    setSelectedStairsId(null);
  };

  const handleSelectPlacement = (placementId: string) => {
    setSelectedPlacementId(placementId);
    setSelectedRoomId(undefined);
    setSelectedStairsId(null);
  };

  const handleSelectStairs = (stairId: string) => {
    setSelectedStairsId(stairId);
    setSelectedPlacementId(null);
    setSelectedRoomId(undefined);
  };

  const handleCanvasClick = (point: { x: number; y: number }) => {
    if (activeStairsDirection && selectedFloor) {
      const floorIndex = Math.max(
        0,
        floorplan.floors.findIndex((floor) => floor.id === selectedFloor.id),
      );
      const snappedPoint = { x: snapToGrid(point.x), y: snapToGrid(point.y) };
      const updated = addStairs(floorplan, {
        floorId: selectedFloor.id,
        floorIndex,
        position: snappedPoint,
        direction: activeStairsDirection,
      });
      const nextStair = updated.stairs[updated.stairs.length - 1];
      setFloorplan(updated);
      setSelectedStairsId(nextStair?.id ?? null);
      setSelectedPlacementId(null);
      setSelectedRoomId(undefined);
      setActiveStairsDirection(null);
      return;
    }

    if (!activeDeviceKey || !selectedFloor) {
      setSelectedRoomId(undefined);
      setSelectedPlacementId(null);
      setSelectedStairsId(null);
      return;
    }
    const item = DEVICE_CATALOG[activeDeviceKey];
    const snappedPoint = { x: snapToGrid(point.x), y: snapToGrid(point.y) };
    const targetRoom = findRoomAtPoint(selectedFloor, snappedPoint);
    const wallSnap = item.wallAnchored && targetRoom ? autoSnapToNearestWall(targetRoom.rect, snappedPoint) : undefined;
    const position =
      item.wallAnchored && wallSnap && targetRoom ? getWallInsetPosition(targetRoom.rect, wallSnap) : snappedPoint;
    const placement = createUserPlacement({
      deviceKey: activeDeviceKey,
      label: item.label,
      floorId: selectedFloor.id,
      roomId: targetRoom?.id,
      position,
      wallSnap,
      required: false,
    });
    setFloorplan((prev) => ({ ...prev, placements: [...prev.placements, placement] }));
    setSelectedPlacementId(placement.id);
    setSelectedRoomId(undefined);
    setSelectedStairsId(null);
  };

  const updatePlacement = (placementId: string, updates: Partial<FloorplanPlacement>) => {
    setFloorplan((prev) => ({
      ...prev,
      placements: prev.placements.map((placement) =>
        placement.id === placementId ? { ...placement, ...updates } : placement,
      ),
    }));
  };

  const handlePlacementWallChange = (wall: FloorplanWall) => {
    if (!selectedPlacement) return;
    const offset = selectedPlacement.wallSnap?.offset ?? 0.5;
    const wallSnap = { wall, offset };
    const position =
      selectedPlacementRoom && selectedFloor
        ? getWallInsetPosition(selectedPlacementRoom.rect, wallSnap)
        : selectedPlacement.position;
    updatePlacement(selectedPlacement.id, { wallSnap, position, roomId: selectedPlacementRoom?.id });
  };

  const handlePlacementWallOffsetChange = (offsetPercent: number) => {
    if (!selectedPlacement) return;
    const wall = selectedPlacement.wallSnap?.wall ?? 'n';
    const wallSnap = { wall, offset: Math.min(Math.max(offsetPercent / 100, 0), 1) };
    const position =
      selectedPlacementRoom && selectedFloor
        ? getWallInsetPosition(selectedPlacementRoom.rect, wallSnap)
        : selectedPlacement.position;
    updatePlacement(selectedPlacement.id, { wallSnap, position, roomId: selectedPlacementRoom?.id });
  };

  const handleSnapPlacementToNearestWall = () => {
    if (!selectedPlacement || !selectedPlacementRoom) return;
    const wallSnap = autoSnapToNearestWall(selectedPlacementRoom.rect, selectedPlacement.position);
    const position = getWallInsetPosition(selectedPlacementRoom.rect, wallSnap);
    updatePlacement(selectedPlacement.id, { wallSnap, position, roomId: selectedPlacementRoom.id });
  };

  const handlePlacementRotationChange = (value: number) => {
    if (!selectedPlacement) return;
    updatePlacement(selectedPlacement.id, { rotation: clampRotation(value) });
  };

  const updateRoom = (roomId: string, updates: Partial<FloorplanRoom>) => {
    setFloorplan((prev) => ({
      ...prev,
      floors: prev.floors.map((floor) =>
        floor.id === selectedFloorId
          ? {
              ...floor,
              rooms: floor.rooms.map((room) => (room.id === roomId ? { ...room, ...updates } : room)),
            }
          : floor,
      ),
    }));
  };

  const handleUpdateRoomRect = (roomId: string, rect: FloorplanRoom['rect']) => {
    setFloorplan((prev) => {
      const previousRoom = prev.floors.flatMap((floor) => floor.rooms).find((room) => room.id === roomId);
      if (!previousRoom) {
        return prev;
      }
      const nextFloors = prev.floors.map((floor) => {
        const hasRoom = floor.rooms.some((room) => room.id === roomId);
        if (!hasRoom) return floor;
        return {
          ...floor,
          rooms: floor.rooms.map((room) =>
            room.id === roomId
              ? {
                  ...room,
                  rect,
                  doors: room.doors.map((door) => updateAnchoredMarkerAfterResize(door, room.rect, rect)),
                  windows: room.windows.map((window) => updateAnchoredMarkerAfterResize(window, room.rect, rect)),
                }
              : room,
          ),
        };
      });

      const nextPlacements = prev.placements.map((placement) => {
        if (placement.roomId !== roomId) return placement;
        if (placement.wallSnap) {
          const wallSnap = updateAnchoredMarkerAfterResize(placement.wallSnap, previousRoom.rect, rect);
          return {
            ...placement,
            wallSnap,
            position: getWallInsetPosition(rect, wallSnap),
          };
        }
        return {
          ...placement,
          position: clampPointToRect(placement.position, rect),
        };
      });

      return { ...prev, floors: nextFloors, placements: nextPlacements };
    });
  };

  const handleApplyRoomDimensions = () => {
    if (!selectedRoom) return;
    const widthFt = Number(roomWidthInput);
    const depthFt = Number(roomDepthInput);
    if (!Number.isFinite(widthFt) || widthFt <= 0) return;
    if (!Number.isFinite(depthFt) || depthFt <= 0) return;
    const feetPerStep = floorplan.feetPerStep ?? FEET_PER_STEP;
    const resizedRect = applyRoomDimensions(selectedRoom.rect, widthFt, depthFt, feetPerStep);
    handleUpdateRoomRect(selectedRoom.id, resizedRect);
    setFloorplan((prev) => ({
      ...prev,
      roomDimensionsFeet: {
        ...prev.roomDimensionsFeet,
        [selectedRoom.id]: { widthFt, depthFt },
      },
    }));
  };

  const handleClearRoomDimensions = () => {
    if (!selectedRoom) return;
    setFloorplan((prev) => {
      const nextDimensions = { ...prev.roomDimensionsFeet };
      delete nextDimensions[selectedRoom.id];
      return { ...prev, roomDimensionsFeet: nextDimensions };
    });
    setRoomWidthInput('');
    setRoomDepthInput('');
  };

  const handleAddRoom = () => {
    setFloorplan((prev) => {
      const nextFloors = prev.floors.map((floor) => ({ ...floor }));
      const floorIndex = nextFloors.findIndex((floor) => floor.id === selectedFloorId);
      if (floorIndex === -1) return prev;
      const targetFloor = nextFloors[floorIndex];
      const nextRoomIndex = targetFloor.rooms.length;
      const newRoom: FloorplanRoom = {
        id: `room-${Date.now()}-${nextRoomIndex + 1}`,
        name: `Room ${nextRoomIndex + 1}`,
        rect: { x: 24, y: 24 + nextRoomIndex * 70, w: 160, h: 56 },
        doors: [],
        windows: [],
      };
      targetFloor.rooms = [...targetFloor.rooms, newRoom];
      return { ...prev, floors: nextFloors };
    });
  };

  const handleAddDoorMarker = () => {
    if (!selectedRoom) return;
    const nextDoors = [
      ...selectedRoom.doors,
      createDoor('Door', {
        wall: 's',
        offset: 0.5,
        exterior: true,
      }),
    ];
    updateRoom(selectedRoom.id, { doors: nextDoors });
  };

  const handleUpdateDoorMarker = (doorId: string, updates: Partial<FloorplanRoom['doors'][number]>) => {
    if (!selectedRoom) return;
    updateRoom(selectedRoom.id, {
      doors: selectedRoom.doors.map((door) => (door.id === doorId ? { ...door, ...updates } : door)),
    });
  };

  const handleRemoveDoorMarker = (doorId: string) => {
    if (!selectedRoom) return;
    updateRoom(selectedRoom.id, { doors: selectedRoom.doors.filter((door) => door.id !== doorId) });
  };

  const handleAddWindowMarker = () => {
    if (!selectedRoom) return;
    const floorIndex = Math.max(
      0,
      floorplan.floors.findIndex((floor) => floor.id === selectedFloorId),
    );
    const isGroundLevel = getDefaultWindowGroundLevel(floorIndex);
    const nextWindows = [
      ...selectedRoom.windows,
      createWindow('Window', {
        wall: 's',
        offset: 0.5,
        isGroundLevel,
        windowStyle: 'standard',
      }),
    ];
    updateRoom(selectedRoom.id, { windows: nextWindows });
  };

  const handleUpdateWindowMarker = (windowId: string, updates: Partial<FloorplanWindowMarker>) => {
    if (!selectedRoom) return;
    updateRoom(selectedRoom.id, {
      windows: selectedRoom.windows.map((window) => (window.id === windowId ? { ...window, ...updates } : window)),
    });
  };

  const handleRemoveWindowMarker = (windowId: string) => {
    if (!selectedRoom) return;
    updateRoom(selectedRoom.id, { windows: selectedRoom.windows.filter((window) => window.id !== windowId) });
  };

  const handleDeleteRoom = (roomId: string) => {
    setFloorplan((prev) => removeRoomById(prev, selectedFloorId, roomId));
    if (selectedRoomId === roomId) {
      setSelectedRoomId(undefined);
    }
    if (selectedPlacement?.roomId === roomId) {
      setSelectedPlacementId(null);
    }
  };

  const handleRemovePlacement = (placementId: string) => {
    setFloorplan((prev) => removePlacementById(prev, placementId));
    if (selectedPlacementId === placementId) {
      setSelectedPlacementId(null);
    }
  };

  const handleRemoveStairs = (stairId: string) => {
    setFloorplan((prev) => removeStairsById(prev, stairId));
    if (selectedStairsId === stairId) {
      setSelectedStairsId(null);
    }
  };

  const handleResetMap = () => {
    const reset = createEmptyFloorplan(wizardFloors);
    setFloorplan(reset);
    setSelectedFloorId(reset.floors[0]?.id ?? 'floor-1');
    setSelectedRoomId(undefined);
    setSelectedPlacementId(null);
    setSelectedStairsId(null);
    setActiveDeviceKey(null);
    setActiveStairsDirection(null);
  };

  useEffect(() => {
    if (!selectedPlacementId && !selectedRoomId && !selectedStairsId) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Delete' && event.key !== 'Backspace') return;
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable) return;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      event.preventDefault();
      if (selectedPlacementId) {
        handleRemovePlacement(selectedPlacementId);
      } else if (selectedStairsId) {
        handleRemoveStairs(selectedStairsId);
      } else if (selectedRoomId) {
        handleDeleteRoom(selectedRoomId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDeleteRoom, handleRemovePlacement, handleRemoveStairs, selectedPlacementId, selectedRoomId, selectedStairsId]);

  const tierComparisonNote = useMemo(() => {
    if (!plan || plan.coverage.status !== 'gap') return null;
    const order: PlannerTierKey[] = ['bronze', 'silver', 'gold'];
    const currentIndex = order.indexOf(selectedTier);
    const higherTier = plan.bundles.find(
      (bundle) => order.indexOf(bundle.tier) > currentIndex && bundle.coverage_status === 'complete',
    );
    if (!higherTier) return null;
    const label = higherTier.tier.charAt(0).toUpperCase() + higherTier.tier.slice(1);
    return `${label} covers your doors without add-ons.`;
  }, [plan, selectedTier]);

  return (
    <section className="section">
      <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
        <HomeSecurityFunnelSteps currentStep="fit-check" />
        <div className="hero-card" style={{ display: 'grid', gap: '0.75rem' }}>
          <h1 style={{ margin: 0 }}>Home Security Precision Planner</h1>
          <p style={{ margin: 0, color: '#c8c0aa' }}>Optional. For customers who want surgical precision.</p>
          <p style={{ margin: 0, color: '#c8c0aa' }}>This does not change your package unless you choose to.</p>
        </div>

        <AccordionSection title="What the Precision Planner does" description="" defaultOpen={false}>
          <ul className="operator-list" style={{ margin: 0 }}>
            <li>Checks whether your exterior doors are fully covered.</li>
            <li>Suggests camera angles and water-risk coverage.</li>
            <li>Shows what Bronze/Silver/Gold cover for your layout.</li>
            <li>Optional add-ons are quoted separately.</li>
          </ul>
        </AccordionSection>

        <div className="card" style={{ display: 'grid', gap: '1.25rem' }}>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Property type</label>
            <select
              value={draft.propertyType ?? ''}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  propertyType: (event.target.value || undefined) as PrecisionPlannerDraft['propertyType'],
                }))
              }
            >
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="rental">Rental</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Floors</label>
            <select
              value={draft.floors ?? ''}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  floors: event.target.value ? (Number(event.target.value) as PrecisionPlannerDraft['floors']) : undefined,
                }))
              }
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Size band</label>
            <select
              value={draft.sizeBand ?? ''}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  sizeBand: (event.target.value || undefined) as PrecisionPlannerDraft['sizeBand'],
                }))
              }
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Garage</label>
            <select
              value={draft.garage ?? ''}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  garage: (event.target.value || undefined) as PrecisionPlannerDraft['garage'],
                }))
              }
            >
              <option value="">Select</option>
              <option value="none">None</option>
              <option value="attached">Attached</option>
              <option value="detached">Detached</option>
            </select>
          </div>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <label style={{ fontWeight: 600 }}>Exterior doors</label>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
              Tip: count any door that leads outside, including garage entry doors.
            </p>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
              If you add exterior doors to the map below, the planner will use the map.
            </p>
            {exteriorDoors.length === 0 ? (
              <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No doors added yet.</p>
            ) : null}
            {exteriorDoors.map((door, index) => (
              <div key={`door-${index}`} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={door}
                  placeholder="Door label"
                  onChange={(event) => handleDoorLabelChange(index, event.target.value)}
                />
                <button type="button" className="btn btn-secondary" onClick={() => handleRemoveDoor(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="btn btn-secondary" onClick={handleAddDoor}>
              Add exterior door
            </button>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Ground-level windows</label>
            <select
              value={draft.groundWindows ?? ''}
              onChange={(event) =>
                setDraft((prev) => ({
                  ...prev,
                  groundWindows: (event.target.value || undefined) as PrecisionPlannerDraft['groundWindows'],
                }))
              }
            >
              <option value="">Select</option>
              <option value="no">No</option>
              <option value="some">Some</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <input
                type="checkbox"
                checked={draft.pets ?? false}
                onChange={(event) => setDraft((prev) => ({ ...prev, pets: event.target.checked }))}
              />
              Pets
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <input
                type="checkbox"
                checked={draft.elders ?? false}
                onChange={(event) => setDraft((prev) => ({ ...prev, elders: event.target.checked }))}
              />
              Elders
            </label>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Priorities (choose up to 2)</label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {priorityOptions.map((option) => {
                const checked = priorities.includes(option);
                const disabled = !checked && priorities.length >= 2;
                return (
                  <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      disabled={disabled}
                      onChange={() => handlePriorityToggle(option)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Compare tier</label>
            <select value={selectedTier} onChange={(event) => handleTierChange(event.target.value as PlannerTierKey)}>
              <option value="bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
              This only affects the planner comparison, not your checkout flow.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={handleSaveDraft}>
              Save draft
            </button>
            <Link className="btn btn-link" to="/discovery?vertical=home-security">
              Back to Fit Check
            </Link>
            <Link className="btn btn-link" to="/packages?vertical=home-security">
              Back to Packages
            </Link>
            <button type="button" className="btn btn-secondary" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>

        <div className="card" style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'grid', gap: '0.35rem' }}>
            <h3 style={{ margin: 0 }}>Build a simple map (optional)</h3>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
              Fast: make a simple room layout in under 2 minutes.
            </p>
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
              You can skip this and keep recommendations.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'stretch',
              width: '100%',
              minWidth: 0,
              height: workspaceHeight,
              overflow: 'hidden',
            }}
          >
            <div
              ref={leftDockRef}
              style={{ display: 'flex', alignItems: 'stretch', gap: '0.5rem', flex: '0 0 auto', height: '100%', minHeight: 0 }}
            >
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  padding: '0.35rem',
                  borderRadius: '0.9rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: 'rgba(15, 19, 32, 0.7)',
                }}
              >
                <button
                  type="button"
                  title="Actions dock"
                  aria-pressed={dockOpen === 'left'}
                  onClick={() => handleDockToggle('left')}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '0.75rem',
                    border: dockOpen === 'left' ? '1px solid rgba(108, 246, 255, 0.6)' : '1px solid transparent',
                    background: dockOpen === 'left' ? 'rgba(108, 246, 255, 0.12)' : 'transparent',
                    color: 'inherit',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                  }}
                >
                  ⚙️
                </button>
              </div>
              {dockOpen === 'left' ? (
                <div
                  style={{
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '1rem',
                    background: 'rgba(15, 19, 32, 0.75)',
                    display: 'grid',
                    gap: '1rem',
                    width: 320,
                    minWidth: 280,
                    maxWidth: 320,
                    height: '100%',
                    minHeight: 0,
                    overflowY: 'auto',
                  }}
                >
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <strong>Floors</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {floorplan.floors.map((floor) => (
                        <button
                          key={floor.id}
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => handleSelectFloor(floor.id)}
                          style={{
                            borderColor: floor.id === selectedFloorId ? '#6cf6ff' : undefined,
                            color: floor.id === selectedFloorId ? '#6cf6ff' : undefined,
                          }}
                        >
                          {floor.label}
                        </button>
                      ))}
                      <button type="button" className="btn btn-link" onClick={handleResetMap}>
                        Reset map
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <strong>Templates</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setFloorplan((prev) => applyTemplateToFloors('apartment', prev, draft.garage))}
                      >
                        Apartment
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setFloorplan((prev) => applyTemplateToFloors('ranch', prev, draft.garage))}
                      >
                        Ranch
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setFloorplan((prev) => applyTemplateToFloors('2-story', prev, draft.garage))}
                      >
                        2-Story
                      </button>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <strong>Rooms on {selectedFloor?.label ?? 'Floor'}</strong>
                    {selectedFloor?.rooms.length ? (
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {selectedFloor.rooms.map((room) => (
                          <div
                            key={room.id}
                            onClick={() => setSelectedRoomId(room.id)}
                            style={{
                              padding: '0.75rem',
                              borderRadius: '0.75rem',
                              border:
                                room.id === selectedRoomId ? '1px solid #6cf6ff' : '1px solid rgba(255, 255, 255, 0.12)',
                              background: room.id === selectedRoomId ? 'rgba(108, 246, 255, 0.12)' : 'rgba(15, 19, 32, 0.6)',
                              display: 'grid',
                              gap: '0.5rem',
                            }}
                          >
                            <input
                              type="text"
                              value={room.name}
                              onChange={(event) => updateRoom(room.id, { name: event.target.value })}
                              onFocus={() => handleSelectRoom(room.id)}
                            />
                            <select
                              value={room.kind ?? ''}
                              onChange={(event) =>
                                updateRoom(room.id, { kind: (event.target.value || undefined) as FloorplanRoomKind })
                              }
                              onFocus={() => handleSelectRoom(room.id)}
                            >
                              <option value="">Room kind (optional)</option>
                              {roomKindOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                            <button type="button" className="btn btn-secondary" onClick={() => handleDeleteRoom(room.id)}>
                              Delete room
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                        No rooms added yet. Use a template or add rooms below.
                      </p>
                    )}
                    <button type="button" className="btn btn-secondary" onClick={handleAddRoom}>
                      Add room
                    </button>
                    <div
                      style={{
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '0.75rem',
                        background: 'rgba(15, 19, 32, 0.6)',
                        display: 'grid',
                        gap: '0.75rem',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div>
                          <strong>Room details</strong>
                          <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                            {selectedRoom ? selectedRoom.name : 'Select a room to edit doors and windows.'}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => selectedRoomId && handleDeleteRoom(selectedRoomId)}
                          disabled={!selectedRoomId}
                        >
                          Delete selected
                        </button>
                      </div>
                      {selectedRoom ? (
                        <div style={{ display: 'grid', gap: '1rem' }}>
                          <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <strong>Doors</strong>
                            {selectedRoom.doors.length === 0 ? (
                              <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No doors yet.</p>
                            ) : null}
                            {selectedRoom.doors.map((door) => (
                              <div key={door.id} style={{ display: 'grid', gap: '0.5rem' }}>
                                <input
                                  type="text"
                                  value={door.label}
                                  placeholder="Door label"
                                  onChange={(event) => handleUpdateDoorMarker(door.id, { label: event.target.value })}
                                />
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                  <label style={{ display: 'grid', gap: '0.35rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>Wall</span>
                                    <select
                                      value={door.wall}
                                      onChange={(event) =>
                                        handleUpdateDoorMarker(door.id, { wall: event.target.value as FloorplanWall })
                                      }
                                    >
                                      {wallOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                          {option.label}
                                        </option>
                                      ))}
                                    </select>
                                  </label>
                                  <label style={{ display: 'grid', gap: '0.35rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                      Offset
                                    </span>
                                    <input
                                      type="range"
                                      min={0}
                                      max={1}
                                      step={0.05}
                                      value={door.offset}
                                      onChange={(event) =>
                                        handleUpdateDoorMarker(door.id, { offset: Number(event.target.value) })
                                      }
                                    />
                                  </label>
                                  <label style={{ display: 'grid', gap: '0.35rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                      Exterior
                                    </span>
                                    <input
                                      type="checkbox"
                                      checked={Boolean(door.exterior)}
                                      onChange={(event) =>
                                        handleUpdateDoorMarker(door.id, { exterior: event.target.checked })
                                      }
                                    />
                                  </label>
                                </div>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                  Exterior doors are doors that lead outside.
                                </p>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  onClick={() => handleRemoveDoorMarker(door.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button type="button" className="btn btn-secondary" onClick={handleAddDoorMarker}>
                              Add door
                            </button>
                          </div>

                          <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <strong>Windows</strong>
                            {selectedRoom.windows.length === 0 ? (
                              <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No windows yet.</p>
                            ) : null}
                            {selectedRoom.windows.map((window) => {
                              const windowMarker = window as FloorplanWindowMarker;
                              return (
                                <div key={window.id} style={{ display: 'grid', gap: '0.5rem' }}>
                                  <input
                                    type="text"
                                    value={window.label ?? ''}
                                    placeholder="Window label (optional)"
                                    onChange={(event) => handleUpdateWindowMarker(window.id, { label: event.target.value })}
                                  />
                                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <label style={{ display: 'grid', gap: '0.35rem' }}>
                                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                        Wall
                                      </span>
                                      <select
                                        value={window.wall}
                                        onChange={(event) =>
                                          handleUpdateWindowMarker(window.id, { wall: event.target.value as FloorplanWall })
                                        }
                                      >
                                        {wallOptions.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </select>
                                    </label>
                                    <label style={{ display: 'grid', gap: '0.35rem' }}>
                                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                        Offset
                                      </span>
                                      <input
                                        type="range"
                                        min={0}
                                        max={1}
                                        step={0.05}
                                        value={window.offset}
                                        onChange={(event) =>
                                          handleUpdateWindowMarker(window.id, { offset: Number(event.target.value) })
                                        }
                                      />
                                    </label>
                                    <label style={{ display: 'grid', gap: '0.35rem' }}>
                                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                        Style
                                      </span>
                                      <select
                                        value={windowMarker.windowStyle ?? 'standard'}
                                        onChange={(event) =>
                                          handleUpdateWindowMarker(window.id, {
                                            windowStyle: event.target.value as WindowStylePreset,
                                          })
                                        }
                                      >
                                        {windowStyleOptions.map((option) => (
                                          <option key={option.value} value={option.value}>
                                            {option.label}
                                          </option>
                                        ))}
                                      </select>
                                    </label>
                                    <label style={{ display: 'grid', gap: '0.35rem' }}>
                                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                        Ground-level (higher risk)
                                      </span>
                                      <input
                                        type="checkbox"
                                        checked={Boolean(windowMarker.isGroundLevel)}
                                        onChange={(event) =>
                                          handleUpdateWindowMarker(window.id, { isGroundLevel: event.target.checked })
                                        }
                                      />
                                    </label>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => handleRemoveWindowMarker(window.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              );
                            })}
                            <button type="button" className="btn btn-secondary" onClick={handleAddWindowMarker}>
                              Add window
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '0.75rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4 style={{ margin: 0 }}>Orientation &amp; dimensions</h4>
                    <div style={{ display: 'grid', gap: '0.4rem' }}>
                      <label style={{ fontWeight: 600 }}>Compass</label>
                      <select
                        value={floorplan.compassOrientation ?? ''}
                        onChange={(event) => handleCompassOrientationChange(event.target.value)}
                      >
                        <option value="">Not provided</option>
                        {compassOrientationOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                        Optional — set which direction the bottom of your screen faces.
                      </span>
                      <span style={{ fontSize: '0.7rem', color: 'rgba(214, 233, 248, 0.65)' }}>{compassLabel}</span>
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <strong>Home dimensions</strong>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                        Optional — if you know it, we’ll scale proportions.
                      </span>
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label style={{ display: 'grid', gap: '0.35rem' }}>
                          <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                            Home width (ft)
                          </span>
                          <input
                            type="number"
                            min={FEET_PER_STEP}
                            step={FEET_PER_STEP}
                            value={footprintWidthInput}
                            onChange={(event) => setFootprintWidthInput(event.target.value)}
                            placeholder="e.g. 40"
                          />
                        </label>
                        <label style={{ display: 'grid', gap: '0.35rem' }}>
                          <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                            Home depth (ft)
                          </span>
                          <input
                            type="number"
                            min={FEET_PER_STEP}
                            step={FEET_PER_STEP}
                            value={footprintDepthInput}
                            onChange={(event) => setFootprintDepthInput(event.target.value)}
                            placeholder="e.g. 30"
                          />
                        </label>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleApplyHomeFootprint}
                          disabled={!canApplyFootprint}
                        >
                          Apply
                        </button>
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={handleClearHomeFootprint}
                          disabled={!floorplan.homeFootprintFeet}
                        >
                          Clear
                        </button>
                      </div>
                      {footprintScaleLabel ? (
                        <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                          Scaled to approx {footprintScaleLabel} ft per step.
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.6)' }}>
                          Uses a ~{FEET_PER_STEP} ft step until you calibrate.
                        </span>
                      )}
                      {!selectedFloor?.rooms.length ? (
                        <span style={{ fontSize: '0.75rem', color: 'rgba(214, 233, 248, 0.55)' }}>
                          Add at least one room to calculate a footprint scale.
                        </span>
                      ) : null}
                    </div>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      <strong>Room dimensions</strong>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                        Optional — snaps to simple increments.
                      </span>
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <label style={{ display: 'grid', gap: '0.35rem' }}>
                          <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                            Room width (ft)
                          </span>
                          <input
                            type="number"
                            min={FEET_PER_STEP}
                            step={FEET_PER_STEP}
                            value={roomWidthInput}
                            onChange={(event) => setRoomWidthInput(event.target.value)}
                            placeholder="e.g. 12"
                            disabled={!selectedRoom}
                          />
                        </label>
                        <label style={{ display: 'grid', gap: '0.35rem' }}>
                          <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                            Room depth (ft)
                          </span>
                          <input
                            type="number"
                            min={FEET_PER_STEP}
                            step={FEET_PER_STEP}
                            value={roomDepthInput}
                            onChange={(event) => setRoomDepthInput(event.target.value)}
                            placeholder="e.g. 10"
                            disabled={!selectedRoom}
                          />
                        </label>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleApplyRoomDimensions}
                          disabled={!canApplyRoomDimensions}
                        >
                          Apply
                        </button>
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={handleClearRoomDimensions}
                          disabled={!selectedRoomDimensions}
                        >
                          Clear
                        </button>
                      </div>
                      {selectedRoom ? (
                        <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                          Editing: {selectedRoom.name}
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.6)' }}>
                          Select a room to set its dimensions.
                        </span>
                      )}
                      {selectedRoomDimensions ? (
                        <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.7)' }}>
                          Saved: {selectedRoomDimensions.widthFt} ft × {selectedRoomDimensions.depthFt} ft.
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '0.6rem',
                      paddingBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4 style={{ margin: 0 }}>Visual context</h4>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={showFurnishings}
                        onChange={(event) => setShowFurnishings(event.target.checked)}
                      />
                      <span>Show furnishings</span>
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.65)' }}>
                      Quick scale cues for rooms and furnishings.
                    </span>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={showExteriorContext}
                        onChange={(event) => setShowExteriorContext(event.target.checked)}
                      />
                      <span>Show exterior context</span>
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.65)' }}>
                      Adds a minimal yard, sidewalk, and driveway outline.
                    </span>
                    <label
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      title={COVERAGE_TOOLTIPS.toggle}
                    >
                      <input
                        type="checkbox"
                        checked={showCoverage}
                        onChange={(event) => setShowCoverage(event.target.checked)}
                      />
                      <span>Show coverage overlay</span>
                    </label>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.65)' }}>
                      Uses placements and rooms to visualize detection zones.
                    </span>
                    {showCoverage ? (
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <strong>Coverage legend</strong>
                        <div style={{ display: 'grid', gap: '0.35rem' }}>
                          {(['green', 'yellow', 'red'] as const).map((state) => (
                            <div
                              key={state}
                              title={COVERAGE_TOOLTIPS.room[state]}
                              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  width: 14,
                                  height: 14,
                                  borderRadius: '0.25rem',
                                  background: COVERAGE_STATE_COLORS[state].fill,
                                  border: `1px solid ${COVERAGE_STATE_COLORS[state].stroke}`,
                                }}
                              />
                              <span style={{ textTransform: 'capitalize' }}>{state}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '0.6rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setExportMenuOpen((open) => !open)}
                      disabled={isExporting}
                    >
                      Save / Share this plan
                    </button>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                      Great for reviewing with family or keeping for records.
                    </span>
                    {exportMenuOpen ? (
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleDownloadPng}
                          disabled={isExporting}
                        >
                          Download PNG
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleDownloadPdf}
                          disabled={isExporting}
                        >
                          Download PDF
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '0.6rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4 style={{ margin: 0 }}>What installation looks like</h4>
                    {showInstallEffort ? (
                      <>
                        <strong>
                          Typical install: {installEffort.hoursMin}–{installEffort.hoursMax} hours
                        </strong>
                        {installEffort.badges.length ? (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {installEffort.badges.map((badge) => (
                              <span
                                key={badge}
                                style={{
                                  padding: '0.2rem 0.5rem',
                                  borderRadius: '999px',
                                  background: 'rgba(108, 246, 255, 0.15)',
                                  border: '1px solid rgba(108, 246, 255, 0.35)',
                                  fontSize: '0.75rem',
                                }}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'grid', gap: '0.35rem' }}>
                          {installEffort.bullets.map((bullet) => (
                            <li key={bullet} style={{ color: 'rgba(214, 233, 248, 0.85)' }}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                        Add a device or select a tier to see installation expectations.
                      </p>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <div
              style={{
                minWidth: 0,
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                height: '100%',
                minHeight: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: 'rgba(15, 19, 32, 0.6)',
                }}
              >
                <div style={{ display: 'grid', gap: '0.25rem' }}>
                  <strong>Workspace canvas</strong>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                    Use the rails for actions (left) and device palette (right).
                  </span>
                </div>
                {dockOpen !== 'right' && selectedSummary ? (
                  <span
                    style={{
                      padding: '0.35rem 0.6rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(108, 246, 255, 0.35)',
                      background: 'rgba(108, 246, 255, 0.12)',
                      fontSize: '0.8rem',
                      color: 'rgba(214, 233, 248, 0.9)',
                    }}
                  >
                    Selected: {selectedSummary}
                  </span>
                ) : null}
              </div>
              <div style={{ minWidth: 0, width: '100%', flex: 1, minHeight: 0 }}>
                {selectedFloor ? (
                  <div ref={plannerExportRef} style={{ minWidth: 0, width: '100%' }}>
                    <FloorplanCanvas
                      floor={selectedFloor}
                      placements={floorPlacements}
                      stairs={floorStairs}
                      selectedRoomId={selectedRoomId}
                      selectedPlacementId={selectedPlacementId}
                      selectedStairsId={selectedStairsId}
                      onSelectRoom={handleSelectRoom}
                      onSelectPlacement={handleSelectPlacement}
                      onSelectStairs={handleSelectStairs}
                      onUpdatePlacement={updatePlacement}
                      onUpdateRoomRect={handleUpdateRoomRect}
                      onCanvasClick={handleCanvasClick}
                      coverageOverlay={coverageOverlay}
                      showFurnishings={showFurnishings}
                      showExteriorContext={showExteriorContext}
                      compassOrientation={floorplan.compassOrientation}
                      height={560}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div
              ref={rightDockRef}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: '0.5rem',
                flexDirection: 'row-reverse',
                flex: '0 0 auto',
                height: '100%',
                minHeight: 0,
              }}
            >
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  padding: '0.35rem',
                  borderRadius: '0.9rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: 'rgba(15, 19, 32, 0.7)',
                }}
              >
                <button
                  type="button"
                  title="Elements dock"
                  aria-pressed={dockOpen === 'right'}
                  onClick={() => handleDockToggle('right')}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '0.75rem',
                    border: dockOpen === 'right' ? '1px solid rgba(108, 246, 255, 0.6)' : '1px solid transparent',
                    background: dockOpen === 'right' ? 'rgba(108, 246, 255, 0.12)' : 'transparent',
                    color: 'inherit',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                  }}
                >
                  🧩
                </button>
              </div>
              {dockOpen === 'right' ? (
                <div
                  style={{
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '1rem',
                    background: 'rgba(15, 19, 32, 0.75)',
                    display: 'grid',
                    gap: '1rem',
                    width: 320,
                    minWidth: 280,
                    maxWidth: 320,
                    height: '100%',
                    minHeight: 0,
                    overflowY: 'auto',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gap: '0.5rem',
                      padding: '0.75rem',
                      border: hasSelectedItem ? '1px solid rgba(108, 246, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: hasSelectedItem ? 'rgba(108, 246, 255, 0.08)' : 'transparent',
                      borderRadius: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                      <strong>Selected item</strong>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          if (selectedPlacementId) {
                            handleRemovePlacement(selectedPlacementId);
                            return;
                          }
                          if (selectedStairsId) {
                            handleRemoveStairs(selectedStairsId);
                          }
                        }}
                        disabled={!selectedPlacementId && !selectedStairsId}
                        style={
                          hasSelectedItem
                            ? {
                                borderColor: 'rgba(108, 246, 255, 0.65)',
                                boxShadow: '0 0 12px rgba(108, 246, 255, 0.25)',
                              }
                            : undefined
                        }
                      >
                        Delete selected
                      </button>
                    </div>
                    {selectedPlacement && selectedPlacementItem ? (
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div style={{ display: 'grid', gap: '0.25rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.75)' }}>Device</span>
                          <strong>{selectedPlacementItem.label}</strong>
                        </div>
                        {isWallAnchored(selectedPlacement.deviceKey) ? (
                          <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <label style={{ display: 'grid', gap: '0.35rem' }}>
                              <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>Wall</span>
                              <select
                                value={selectedPlacement.wallSnap?.wall ?? 'n'}
                                onChange={(event) => handlePlacementWallChange(event.target.value as FloorplanWall)}
                              >
                                {wallOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            </label>
                            <label style={{ display: 'grid', gap: '0.35rem' }}>
                              <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                                Wall offset ({Math.round((selectedPlacement.wallSnap?.offset ?? 0.5) * 100)}%)
                              </span>
                              <input
                                type="range"
                                min={0}
                                max={100}
                                step={5}
                                value={Math.round((selectedPlacement.wallSnap?.offset ?? 0.5) * 100)}
                                onChange={(event) => handlePlacementWallOffsetChange(Number(event.target.value))}
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={handleSnapPlacementToNearestWall}
                              disabled={!selectedPlacementRoom}
                            >
                              Snap to nearest wall
                            </button>
                          </div>
                        ) : null}
                        {isRotatableDevice(selectedPlacement.deviceKey) ? (
                          <label style={{ display: 'grid', gap: '0.35rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                              Rotation ({Math.round(getPlacementRotation(selectedPlacement))}°)
                            </span>
                            <input
                              type="range"
                              min={0}
                              max={360}
                              step={15}
                              value={Math.round(getPlacementRotation(selectedPlacement))}
                              onChange={(event) => handlePlacementRotationChange(Number(event.target.value))}
                            />
                          </label>
                        ) : null}
                      </div>
                    ) : selectedStairs ? (
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        <div style={{ display: 'grid', gap: '0.2rem' }}>
                          <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.75)' }}>Type</span>
                          <strong>Stairs {selectedStairs.direction}</strong>
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.75)' }}>
                          Floor {selectedStairs.floorIndex + 1}
                        </span>
                      </div>
                    ) : (
                      <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                        Select a placement or stairs marker to edit it.
                      </p>
                    )}
                  </div>

                  <div style={{ display: 'grid', gap: '0.35rem' }}>
                    <h4 style={{ margin: 0 }}>Place devices</h4>
                    <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                      Pick a device, then click on the map to place it.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <strong>Device legend</strong>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      {DEVICE_KEYS.map((deviceKey) => {
                        const item = DEVICE_CATALOG[deviceKey];
                        const Icon = item.icon;
                        const tone = DEVICE_ICON_TONES[deviceKey];
                        const isActive = activeDeviceKey === deviceKey;
                        return (
                          <button
                            key={deviceKey}
                            type="button"
                            onClick={() => {
                              setActiveDeviceKey(deviceKey);
                              setActiveStairsDirection(null);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.4rem 0.6rem',
                              borderRadius: '0.5rem',
                              border: isActive ? '1px solid #6cf6ff' : '1px solid rgba(255, 255, 255, 0.12)',
                              background: isActive ? 'rgba(108, 246, 255, 0.12)' : 'transparent',
                              color: 'inherit',
                              cursor: 'pointer',
                              textAlign: 'left',
                            }}
                          >
                            <span
                              style={{
                                width: 26,
                                height: 26,
                                borderRadius: '999px',
                                display: 'grid',
                                placeItems: 'center',
                                background: tone.background,
                                boxShadow: tone.glow,
                                color: tone.color,
                              }}
                            >
                              <Icon width={16} height={16} />
                            </span>
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {activeCatalogItem ? (
                      <div style={{ display: 'grid', gap: '0.35rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.85)' }}>
                          Click on the map to place this item.
                        </span>
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => {
                            setActiveDeviceKey(null);
                            setActiveStairsDirection(null);
                          }}
                          style={{ justifySelf: 'start' }}
                        >
                          Clear tool
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gap: '0.6rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <strong>Add stairs</strong>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {(['up', 'down'] as FloorplanStairDirection[]).map((direction) => {
                        const isActive = activeStairsDirection === direction;
                        return (
                          <button
                            key={direction}
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                              setActiveStairsDirection(isActive ? null : direction);
                              setActiveDeviceKey(null);
                            }}
                            style={{
                              borderColor: isActive ? 'rgba(108, 246, 255, 0.65)' : undefined,
                              boxShadow: isActive ? '0 0 10px rgba(108, 246, 255, 0.25)' : undefined,
                            }}
                          >
                            Stairs {direction}
                          </button>
                        );
                      })}
                    </div>
                    {activeStairsDirection ? (
                      <div style={{ display: 'grid', gap: '0.25rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(214, 233, 248, 0.85)' }}>
                          Click the map to drop stairs {activeStairsDirection}.
                        </span>
                        <button
                          type="button"
                          className="btn btn-link"
                          onClick={() => setActiveStairsDirection(null)}
                          style={{ justifySelf: 'start' }}
                        >
                          Clear tool
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    <strong>Placements on {selectedFloor?.label ?? 'this floor'}</strong>
                    {floorPlacements.length === 0 ? (
                      <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No placements yet.</p>
                    ) : (
                      <div style={{ display: 'grid', gap: '0.5rem' }}>
                        {floorPlacements.map((placement) => {
                          const item = DEVICE_CATALOG[placement.deviceKey];
                          const Icon = item.icon;
                          const tone = DEVICE_ICON_TONES[placement.deviceKey];
                          const needsWall = item.wallAnchored && !placement.wallSnap;
                          return (
                            <div
                              key={placement.id}
                              role="button"
                              tabIndex={0}
                              onClick={() => handleSelectPlacement(placement.id)}
                              onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                  event.preventDefault();
                                  handleSelectPlacement(placement.id);
                                }
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.45rem 0.6rem',
                                borderRadius: '0.5rem',
                                border:
                                  placement.id === selectedPlacementId
                                    ? '1px solid #6cf6ff'
                                    : '1px solid rgba(255, 255, 255, 0.12)',
                                background:
                                  placement.id === selectedPlacementId
                                    ? 'rgba(108, 246, 255, 0.12)'
                                    : 'transparent',
                                cursor: 'pointer',
                              }}
                            >
                              <span
                                style={{
                                  width: 24,
                                  height: 24,
                                  borderRadius: '999px',
                                  display: 'grid',
                                  placeItems: 'center',
                                  background: tone.background,
                                  boxShadow: tone.glow,
                                  color: tone.color,
                                }}
                              >
                                <Icon width={14} height={14} />
                              </span>
                              <span style={{ flex: 1 }}>{placement.label}</span>
                              {needsWall ? (
                                <span
                                  style={{
                                    fontSize: '0.7rem',
                                    padding: '0.1rem 0.35rem',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(255, 107, 107, 0.6)',
                                    color: 'rgba(255, 107, 107, 0.9)',
                                  }}
                                >
                                  Needs wall
                                </span>
                              ) : null}
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handleRemovePlacement(placement.id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div ref={resultsRef} className="card" style={{ display: 'grid', gap: '0.5rem' }}>
          <h3 style={{ margin: 0 }}>Planner results</h3>
          {plan ? (
            <>
              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background:
                    plan.coverage.status === 'gap'
                      ? 'rgba(255, 107, 107, 0.12)'
                      : plan.coverage.status === 'complete_with_addons'
                        ? 'rgba(255, 206, 86, 0.12)'
                        : 'rgba(46, 204, 113, 0.12)',
                }}
              >
                <strong>
                  {plan.coverage.status === 'gap'
                    ? '❌ Gap — fix required items first'
                    : plan.coverage.status === 'complete_with_addons'
                      ? '⚠️ Covered + optional add-ons'
                      : '✅ Covered'}
                </strong>
              </div>

              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'rgba(214, 233, 248, 0.85)' }}>
                {plan.coverage.summary.map((item, index) => (
                  <li key={item}>
                    {index === 0 && usingMapExteriorDoors
                      ? `${item} Based on your map, we counted ${plannerExteriorDoors.length} exterior doors.`
                      : item}
                  </li>
                ))}
              </ul>
              {plan.coverage.gaps.length > 0 ? (
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  <strong>Coverage gaps</strong>
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {plan.coverage.gaps.map((gap) => (
                      <li key={`${gap.key}-${gap.missing}`}>
                        {gap.impact}: missing {gap.missing}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div style={{ display: 'grid', gap: '0.35rem' }}>
                <strong>Required placements</strong>
                {plan.placements.length === 0 ? (
                  <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No placements yet.</p>
                ) : (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {plan.placements.map((placement) => (
                      <li key={`${placement.key}-${placement.label}`}>
                        {placement.label} — {placement.quantity}
                        {placement.zones && placement.zones.length > 0 ? ` (${placement.zones.join(', ')})` : ''}
                        {placement.notes && placement.notes.length > 0 ? ` — ${placement.notes.join(' ')}` : ''}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div style={{ display: 'grid', gap: '0.35rem' }}>
                <strong>Optional add-ons</strong>
                {plan.optionalAddons.length === 0 ? (
                  <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>No optional add-ons suggested.</p>
                ) : (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                    {plan.optionalAddons.map((addon) => (
                      <li key={`${addon.key}-${addon.label}`}>
                        {addon.label} — {addon.quantity}
                        {addon.zones && addon.zones.length > 0 ? ` (${addon.zones.join(', ')})` : ''}
                        {addon.notes && addon.notes.length > 0 ? ` — ${addon.notes.join(' ')}` : ''}
                      </li>
                    ))}
                  </ul>
                )}
                <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.75)' }}>
                  Passive suggestion: Wall-mounted tablet/dashboard (quoted separately).
                </p>
              </div>

              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <strong>Tier comparison</strong>
                <div style={{ display: 'grid', gap: '0.35rem' }}>
                  {plan.bundles.map((bundle) => (
                    <div key={bundle.tier} style={{ color: 'rgba(214, 233, 248, 0.85)' }}>
                      {bundle.top_line}
                    </div>
                  ))}
                </div>
                {tierComparisonNote ? (
                  <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.85)' }}>{tierComparisonNote}</p>
                ) : null}
              </div>
            </>
          ) : (
            <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.8)' }}>
              Run the planner to see placements, coverage, and tier comparisons.
            </p>
          )}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={handleApplyToQuote}>
              Apply to Quote
            </button>
            <button type="button" className="btn btn-link">
              Continue without applying
            </button>
          </div>
          <p style={{ margin: 0, color: 'rgba(214, 233, 248, 0.8)' }}>You can change anything on the quote page.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSecurityPlanner;

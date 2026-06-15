export type PropertyQuoteStage =
  | "requested_call"
  | "requested_quote"
  | "rough_quote_provided_no_onsite"
  | "onsite_quote_provided"
  | "accepted_quote_owes_deposit"
  | "quote_complete_deposit_paid";

export type PropertyModelBomStatus =
  | "needs_placement"
  | "gpt_proposed"
  | "wnyhs_modified"
  | "approved"
  | "locked";

export type PropertyModelInstallerAssignment =
  | "installer_a"
  | "installer_b"
  | "either_installer"
  | "both_installers_required"
  | "unassigned";

export type PropertyModelRedrawStatus =
  | "not_started"
  | "source_evidence_collected"
  | "redraw_needed"
  | "redraw_in_progress"
  | "redraw_ready_for_review"
  | "redraw_approved"
  | "redraw_rejected_needs_revision";

export type PropertyModelEvidenceType =
  | "hand_drawn_floorplan"
  | "professional_redraw"
  | "exterior_photo"
  | "interior_photo"
  | "measurement_note"
  | "compass_orientation_note"
  | "lidar_digital_twin_capture"
  | "other";

export type PropertyModelEvidenceOrientation =
  | "north"
  | "south"
  | "east"
  | "west"
  | "interior"
  | "whole_property"
  | "unknown_na";

export type PropertyModelEvidenceStatus =
  | "source_provided"
  | "needs_review"
  | "accepted_for_trace"
  | "accepted_for_validation"
  | "rejected_superseded";

export type PropertyModelAreaPlaceholder = {
  id: string;
  label: string;
  notes: string;
};

export type PropertyModelDevicePlaceholder = {
  id: string;
  label: string;
  locationRef: string;
  notes: string;
};

export type PropertyModelCustomerGoal = {
  id: string;
  goal: string;
  notes: string;
};

export type PropertyModelCustomerConcern = {
  id: string;
  category: string;
  text: string;
  notes: string;
};

export type PropertyModelSolution = {
  id: string;
  title: string;
  categoryId: string;
  packageRef: string;
  concernServed: string;
  notes: string;
};

export type PropertyModelBomLineItem = {
  id: string;
  itemName: string;
  hardwareType: string;
  quantity: number;
  catalogHardwareItemId: string;
  locationRef: string;
  propertyAreaRef: string;
  customerConcernServed: string;
  selectedSolutionRef: string;
  evidenceRef: string;
  bomStatus: PropertyModelBomStatus;
  dashboardPrepNote: string;
  installerNote: string;
  installerAssignment: PropertyModelInstallerAssignment;
};

export type PropertyModelPricing = {
  quoteSubtotal: number;
  quoteDiscount: number;
  quoteTaxOrFees: number;
  quoteTotal: number;
  depositRequired: boolean;
  depositPercent: number;
  depositAmount: number;
  balanceDueOnArrival: number;
  pricingNotes: string;
};

export type PropertyModelGateStatus = {
  floorplanApproved: boolean;
  depositVerified: boolean;
  inventoryReady: boolean;
  schedulingReady: boolean;
  finalBalanceExceptionApproved: boolean;
};

export type PropertyModelRedrawPhotoHandoff = {
  redrawStatus: PropertyModelRedrawStatus;
  redrawReference: string;
  photoAnalysisSummary: string;
  doorLockNotes: string;
  windowSensorNotes: string;
  cameraPlacementNotes: string;
  ambiguityNotes: string;
  onsiteVerificationNotes: string;
  roughEstimateAllowed: boolean;
};

export type PropertyModelEvidenceItem = {
  id: string;
  evidenceType: PropertyModelEvidenceType;
  label: string;
  sourceReference: string;
  orientationSide: PropertyModelEvidenceOrientation;
  notes: string;
  status: PropertyModelEvidenceStatus;
};

export type PropertyModelRecord = {
  recordId: string;
  requestId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    preferredContactMethod: string;
  };
  propertyAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
  };
  propertyContext: {
    propertyType: string;
    occupancyContext: string;
    notes: string;
  };
  hubSpotLink: {
    contactUrl: string;
    dealUrl: string;
    owner: string;
    leadSource: string;
    lifecycleStage: string;
  };
  customerConcerns: PropertyModelCustomerConcern[];
  customerGoals: PropertyModelCustomerGoal[];
  solutionCategories: string[];
  proposedSolutions: PropertyModelSolution[];
  evidenceItems: PropertyModelEvidenceItem[];
  redrawPhotoHandoff: PropertyModelRedrawPhotoHandoff;
  areas: PropertyModelAreaPlaceholder[];
  devices: PropertyModelDevicePlaceholder[];
  bomLineItems: PropertyModelBomLineItem[];
  quoteStage: PropertyQuoteStage;
  pricing: PropertyModelPricing;
  gates: PropertyModelGateStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

type StoredPropertyModelRecord = Partial<PropertyModelRecord> & {
  recordId: string;
  evidence?: Partial<{
    sourceSketchReference: string;
    professionalRedrawReference: string;
    exteriorPhotoReferences: Partial<
      Record<"north" | "south" | "east" | "west", string>
    >;
    interiorPhotoReferences: string;
    compassOrientationNotes: string;
    measurementNotes: string;
    validationNotes: string;
  }>;
};

type StoredPropertyModelSolution = Partial<PropertyModelSolution> & {
  id: string;
  title: string;
  customerGoalRef?: string;
  wnyhsPurpose?: string;
};

type StoredPropertyModelBomLineItem = Partial<PropertyModelBomLineItem> & {
  id: string;
  itemName: string;
  quantity: number;
  locationRef: string;
  customerGoalServed?: string;
  wnyhsPurpose?: string;
};

export const propertyQuoteStageOptions: Array<{
  value: PropertyQuoteStage;
  label: string;
}> = [
  { value: "requested_call", label: "Requested Call" },
  { value: "requested_quote", label: "Requested Quote" },
  {
    value: "rough_quote_provided_no_onsite",
    label: "Rough Quote Provided - No Onsite",
  },
  { value: "onsite_quote_provided", label: "Onsite Quote Provided" },
  {
    value: "accepted_quote_owes_deposit",
    label: "Accepted Quote - Owes Deposit",
  },
  {
    value: "quote_complete_deposit_paid",
    label: "Quote Complete - Deposit Paid",
  },
];

export const propertyTypeOptions = [
  "Single-family home",
  "Townhome / duplex",
  "Condo",
  "Apartment",
  "Seasonal / vacation property",
  "Detached garage / workshop",
  "Mixed property",
  "Commercial / first-floor business",
  "Other / needs review",
];

export const occupancyContextOptions = [
  "Owner occupied",
  "Family / caregiver supported",
  "Seasonal / away for stretches",
  "Rental / tenant occupied",
  "New homeowner",
  "Existing WNYHS Core customer",
  "First-time WNYHS customer",
  "Other / needs review",
];

export const customerConcernCategoryOptions = [
  "Front door / packages",
  "Entry / perimeter",
  "Garage / driveway",
  "Water / temperature",
  "Lighting / routines",
  "Family awareness",
  "Aging-in-place awareness",
  "Vacation / away mode",
  "Glass-break awareness",
  "Smart entry / access",
  "Local control plane",
  "Custom / freehand",
];

export const areaNameOptions = [
  "Living Room",
  "Dining Room",
  "Rec Room",
  "Basement",
  "Utility Room",
  "Garage",
  "Front Porch",
  "Driveway",
  "Viewing Room",
  "Reception / Office",
  "Rear Entrance",
  "Rear Parking Lot",
  "Family / Service Area",
  "Kitchen / Service Area",
  "Restroom Hallway",
  "Main Hallway",
  "First-Floor Windows",
  "Office",
];

export const redrawStatusOptions: Array<{
  value: PropertyModelRedrawStatus;
  label: string;
}> = [
  { value: "not_started", label: "Not Started" },
  { value: "source_evidence_collected", label: "Source Evidence Collected" },
  { value: "redraw_needed", label: "Redraw Needed" },
  { value: "redraw_in_progress", label: "Redraw In Progress" },
  { value: "redraw_ready_for_review", label: "Redraw Ready For Review" },
  { value: "redraw_approved", label: "Redraw Approved" },
  { value: "redraw_rejected_needs_revision", label: "Redraw Rejected / Needs Revision" },
];

export const installerAssignmentOptions: Array<{
  value: PropertyModelInstallerAssignment;
  label: string;
}> = [
  { value: "installer_a", label: "Installer A" },
  { value: "installer_b", label: "Installer B" },
  { value: "either_installer", label: "Either Installer" },
  { value: "both_installers_required", label: "Both Installers Required" },
  { value: "unassigned", label: "Unassigned" },
];

export const bomStatusOptions: Array<{
  value: PropertyModelBomStatus;
  label: string;
}> = [
  { value: "needs_placement", label: "Needs Placement" },
  { value: "gpt_proposed", label: "GPT Proposed" },
  { value: "wnyhs_modified", label: "WNYHS Modified" },
  { value: "approved", label: "Approved" },
  { value: "locked", label: "Locked" },
];

export const propertyEvidenceTypeOptions: Array<{
  value: PropertyModelEvidenceType;
  label: string;
}> = [
  { value: "hand_drawn_floorplan", label: "Hand-Drawn Floorplan" },
  { value: "professional_redraw", label: "Professional Redraw" },
  { value: "exterior_photo", label: "Exterior Photo" },
  { value: "interior_photo", label: "Interior Photo" },
  { value: "measurement_note", label: "Measurement Note" },
  { value: "compass_orientation_note", label: "Compass / Orientation Note" },
  {
    value: "lidar_digital_twin_capture",
    label: "LiDAR / Digital Twin Capture",
  },
  { value: "other", label: "Other" },
];

export const propertyEvidenceOrientationOptions: Array<{
  value: PropertyModelEvidenceOrientation;
  label: string;
}> = [
  { value: "north", label: "North" },
  { value: "south", label: "South" },
  { value: "east", label: "East" },
  { value: "west", label: "West" },
  { value: "interior", label: "Interior" },
  { value: "whole_property", label: "Whole Property" },
  { value: "unknown_na", label: "Unknown / Not Applicable" },
];

export const propertyEvidenceStatusOptions: Array<{
  value: PropertyModelEvidenceStatus;
  label: string;
}> = [
  { value: "source_provided", label: "Source Provided" },
  { value: "needs_review", label: "Needs Review" },
  { value: "accepted_for_trace", label: "Accepted For Trace" },
  { value: "accepted_for_validation", label: "Accepted For Validation" },
  { value: "rejected_superseded", label: "Rejected / Superseded" },
];

export const propertyModelStorageKey = "wnyhs_property_models_v1";

const createId = (prefix: string) => {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${random}`;
};

export const createPropertyModelChildId = (prefix: string) => createId(prefix);

export const createEmptyPropertyModelRecord = (): PropertyModelRecord => {
  const timestamp = new Date().toISOString();

  return {
    recordId: createId("WNYHS-PM"),
    requestId: "",
    customer: {
      name: "",
      email: "",
      phone: "",
      preferredContactMethod: "",
    },
    propertyAddress: {
      line1: "",
      line2: "",
      city: "",
      state: "NY",
      postalCode: "",
    },
    propertyContext: {
      propertyType: "",
      occupancyContext: "",
      notes: "",
    },
    hubSpotLink: {
      contactUrl: "",
      dealUrl: "",
      owner: "",
      leadSource: "",
      lifecycleStage: "",
    },
    customerConcerns: [],
    customerGoals: [],
    solutionCategories: [],
    proposedSolutions: [],
    evidenceItems: [],
    redrawPhotoHandoff: {
      redrawStatus: "not_started",
      redrawReference: "",
      photoAnalysisSummary: "",
      doorLockNotes: "",
      windowSensorNotes: "",
      cameraPlacementNotes: "",
      ambiguityNotes: "",
      onsiteVerificationNotes: "",
      roughEstimateAllowed: false,
    },
    areas: [],
    devices: [],
    bomLineItems: [],
    quoteStage: "requested_quote",
    pricing: {
      quoteSubtotal: 0,
      quoteDiscount: 0,
      quoteTaxOrFees: 0,
      quoteTotal: 0,
      depositRequired: true,
      depositPercent: 50,
      depositAmount: 0,
      balanceDueOnArrival: 0,
      pricingNotes: "",
    },
    gates: {
      floorplanApproved: false,
      depositVerified: false,
      inventoryReady: false,
      schedulingReady: false,
      finalBalanceExceptionApproved: false,
    },
    notes: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const normalizePropertyModelRecord = (
  record: StoredPropertyModelRecord,
): PropertyModelRecord => {
  const emptyRecord = createEmptyPropertyModelRecord();
  const legacyStageMap: Record<string, PropertyQuoteStage> = {
    draft: "requested_quote",
    field_capture: "requested_call",
    redraw_review: "requested_quote",
    solution_mapping: "requested_quote",
    proposal_draft: "rough_quote_provided_no_onsite",
    deposit_pending: "accepted_quote_owes_deposit",
    deposit_verified: "quote_complete_deposit_paid",
    install_ready: "quote_complete_deposit_paid",
    closed: "quote_complete_deposit_paid",
  };
  const normalizedConcerns = Array.isArray(record.customerConcerns)
    ? record.customerConcerns.map((concern, index) => {
        if (typeof concern === "string") {
          return {
            id: createId("CONCERN"),
            category: "Custom / freehand",
            text: concern,
            notes: "",
          };
        }

        return {
          id: concern.id ?? `concern-${index + 1}`,
          category: concern.category ?? "Custom / freehand",
          text: concern.text ?? "",
          notes: concern.notes ?? "",
        };
      })
    : [];
  const normalizedQuoteStage =
    record.quoteStage &&
    propertyQuoteStageOptions.some((stage) => stage.value === record.quoteStage)
      ? record.quoteStage
      : (legacyStageMap[String(record.quoteStage)] ?? emptyRecord.quoteStage);
  const normalizeEvidenceItem = (
    item: Partial<PropertyModelEvidenceItem>,
    index: number,
  ): PropertyModelEvidenceItem => ({
    id: item.id ?? `evidence-${index + 1}`,
    evidenceType:
      item.evidenceType &&
      propertyEvidenceTypeOptions.some(
        (option) => option.value === item.evidenceType,
      )
        ? item.evidenceType
        : "other",
    label: item.label ?? "",
    sourceReference: item.sourceReference ?? "",
    orientationSide:
      item.orientationSide &&
      propertyEvidenceOrientationOptions.some(
        (option) => option.value === item.orientationSide,
      )
        ? item.orientationSide
        : "unknown_na",
    notes: item.notes ?? "",
    status:
      item.status &&
      propertyEvidenceStatusOptions.some(
        (option) => option.value === item.status,
      )
        ? item.status
        : "source_provided",
  });
  const legacyEvidenceItemsWithNulls: Array<Partial<PropertyModelEvidenceItem> | null> =
    [
      record.evidence?.sourceSketchReference
        ? {
            evidenceType: "hand_drawn_floorplan" as const,
            label: "Source sketch reference",
            sourceReference: record.evidence.sourceSketchReference,
            orientationSide: "whole_property" as const,
            notes: "",
            status: "source_provided" as const,
          }
        : null,
      record.evidence?.professionalRedrawReference
        ? {
            evidenceType: "professional_redraw" as const,
            label: "Professional redraw reference",
            sourceReference: record.evidence.professionalRedrawReference,
            orientationSide: "whole_property" as const,
            notes: "",
            status: "needs_review" as const,
          }
        : null,
      ...(record.evidence?.exteriorPhotoReferences
        ? (["north", "south", "east", "west"] as const).map((side) =>
            record.evidence?.exteriorPhotoReferences?.[side]
              ? {
                  evidenceType: "exterior_photo" as const,
                  label: `${side[0].toUpperCase()}${side.slice(1)} exterior photo`,
                  sourceReference:
                    record.evidence.exteriorPhotoReferences[side] ?? "",
                  orientationSide: side,
                  notes: "",
                  status: "accepted_for_validation" as const,
                }
              : null,
          )
        : []),
      record.evidence?.interiorPhotoReferences
        ? {
            evidenceType: "interior_photo" as const,
            label: "Interior photo references",
            sourceReference: record.evidence.interiorPhotoReferences,
            orientationSide: "interior" as const,
            notes: "",
            status: "accepted_for_validation" as const,
          }
        : null,
      record.evidence?.compassOrientationNotes
        ? {
            evidenceType: "compass_orientation_note" as const,
            label: "Compass / orientation notes",
            sourceReference: "Legacy orientation note",
            orientationSide: "whole_property" as const,
            notes: record.evidence.compassOrientationNotes,
            status: "source_provided" as const,
          }
        : null,
      record.evidence?.measurementNotes
        ? {
            evidenceType: "measurement_note" as const,
            label: "Known measurements",
            sourceReference: "Legacy measurement note",
            orientationSide: "unknown_na" as const,
            notes: record.evidence.measurementNotes,
            status: "source_provided" as const,
          }
        : null,
      record.evidence?.validationNotes
        ? {
            evidenceType: "other" as const,
            label: "Floorplan validation notes",
            sourceReference: "Legacy validation note",
            orientationSide: "unknown_na" as const,
            notes: record.evidence.validationNotes,
            status: "needs_review" as const,
          }
        : null,
    ];
  const legacyEvidenceItems = legacyEvidenceItemsWithNulls.filter(
    (item): item is Partial<PropertyModelEvidenceItem> => item !== null,
  );
  const normalizedEvidenceItems = Array.isArray(record.evidenceItems)
    ? record.evidenceItems.map(normalizeEvidenceItem)
    : legacyEvidenceItems.map(normalizeEvidenceItem);

  return {
    ...emptyRecord,
    ...record,
    recordId: record.recordId,
    requestId: record.requestId ?? "",
    customer: {
      ...emptyRecord.customer,
      ...record.customer,
    },
    propertyAddress: {
      ...emptyRecord.propertyAddress,
      ...record.propertyAddress,
    },
    propertyContext: {
      ...emptyRecord.propertyContext,
      ...record.propertyContext,
    },
    hubSpotLink: {
      ...emptyRecord.hubSpotLink,
      ...record.hubSpotLink,
    },
    customerConcerns: normalizedConcerns,
    customerGoals: Array.isArray(record.customerGoals)
      ? record.customerGoals
      : [],
    solutionCategories: Array.isArray(record.solutionCategories)
      ? record.solutionCategories
      : [],
    proposedSolutions: Array.isArray(record.proposedSolutions)
      ? (record.proposedSolutions as StoredPropertyModelSolution[]).map(
          (solution) => ({
            id: solution.id,
            title: solution.title,
            categoryId: solution.categoryId ?? "",
            packageRef: solution.packageRef ?? "",
            concernServed:
              solution.concernServed ?? solution.customerGoalRef ?? "",
            notes: solution.notes ?? solution.wnyhsPurpose ?? "",
          }),
        )
      : [],
    evidenceItems: normalizedEvidenceItems,
    redrawPhotoHandoff: {
      ...emptyRecord.redrawPhotoHandoff,
      ...record.redrawPhotoHandoff,
      redrawStatus:
        record.redrawPhotoHandoff?.redrawStatus &&
        redrawStatusOptions.some(
          (option) => option.value === record.redrawPhotoHandoff?.redrawStatus,
        )
          ? record.redrawPhotoHandoff.redrawStatus
          : emptyRecord.redrawPhotoHandoff.redrawStatus,
      roughEstimateAllowed:
        record.redrawPhotoHandoff?.roughEstimateAllowed ?? false,
    },
    areas: Array.isArray(record.areas) ? record.areas : [],
    devices: Array.isArray(record.devices) ? record.devices : [],
    bomLineItems: Array.isArray(record.bomLineItems)
      ? (record.bomLineItems as StoredPropertyModelBomLineItem[]).map(
          (item) => ({
            id: item.id,
            itemName: item.itemName,
            hardwareType: item.hardwareType ?? "",
            quantity: item.quantity,
            catalogHardwareItemId: item.catalogHardwareItemId ?? "",
            locationRef: item.locationRef,
            propertyAreaRef: item.propertyAreaRef ?? item.locationRef ?? "",
            customerConcernServed:
              item.customerConcernServed ?? item.customerGoalServed ?? "",
            selectedSolutionRef:
              item.selectedSolutionRef ?? item.wnyhsPurpose ?? "",
            evidenceRef: item.evidenceRef ?? "",
            bomStatus: item.bomStatus ?? "needs_placement",
            dashboardPrepNote: item.dashboardPrepNote ?? "",
            installerNote: item.installerNote ?? "",
            installerAssignment:
              item.installerAssignment &&
              installerAssignmentOptions.some(
                (option) => option.value === item.installerAssignment,
              )
                ? item.installerAssignment
                : "unassigned",
          }),
        )
      : [],
    quoteStage: normalizedQuoteStage,
    pricing: {
      ...emptyRecord.pricing,
      ...record.pricing,
      quoteSubtotal: Number(record.pricing?.quoteSubtotal) || 0,
      quoteDiscount: Number(record.pricing?.quoteDiscount) || 0,
      quoteTaxOrFees: Number(record.pricing?.quoteTaxOrFees) || 0,
      quoteTotal: Number(record.pricing?.quoteTotal) || 0,
      depositRequired: record.pricing?.depositRequired ?? true,
      depositPercent: Number(record.pricing?.depositPercent) || 50,
      depositAmount: Number(record.pricing?.depositAmount) || 0,
      balanceDueOnArrival: Number(record.pricing?.balanceDueOnArrival) || 0,
      pricingNotes: record.pricing?.pricingNotes ?? "",
    },
    gates: {
      ...emptyRecord.gates,
      ...record.gates,
    },
    notes: record.notes ?? "",
    createdAt: record.createdAt ?? emptyRecord.createdAt,
    updatedAt: record.updatedAt ?? emptyRecord.updatedAt,
  };
};

const readFromStorage = <T>(key: string): T | null => {
  if (typeof window === "undefined") {
    return null;
  }

  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    return null;
  }

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const writeToStorage = <T>(key: string, value: T) => {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

export const loadPropertyModelRecords = () => {
  const records = readFromStorage<StoredPropertyModelRecord[]>(
    propertyModelStorageKey,
  );
  return Array.isArray(records)
    ? records.map(normalizePropertyModelRecord)
    : [];
};

export const savePropertyModelRecords = (records: PropertyModelRecord[]) =>
  writeToStorage(propertyModelStorageKey, records);

export const savePropertyModelRecord = (record: PropertyModelRecord) => {
  const records = loadPropertyModelRecords();
  const nextRecord = {
    ...record,
    updatedAt: new Date().toISOString(),
  };
  const nextRecords = records.some(
    (item) => item.recordId === nextRecord.recordId,
  )
    ? records.map((item) =>
        item.recordId === nextRecord.recordId ? nextRecord : item,
      )
    : [nextRecord, ...records];

  return {
    ok: writeToStorage(propertyModelStorageKey, nextRecords),
    record: nextRecord,
    records: nextRecords,
  };
};

export const createPropertyModelRecord = () => {
  const record = createEmptyPropertyModelRecord();
  const result = savePropertyModelRecord(record);
  return result.ok ? result.record : record;
};

const funeralHomeConcernRefs = {
  breakIn: "CONCERN-FUNERAL-RECENT-BREAK-IN",
  glassBreak: "CONCERN-FUNERAL-GLASS-BREAK",
  openings: "CONCERN-FUNERAL-OPENINGS",
  controlledAccess: "CONCERN-FUNERAL-CONTROLLED-ACCESS",
  doorbell: "CONCERN-FUNERAL-DOORBELL",
  localControl: "CONCERN-FUNERAL-LOCAL-CONTROL",
} as const;

const funeralHomeSolutionRefs = {
  intrusion: "SOL-FUNERAL-INTRUSION-AWARENESS",
  entry: "SOL-FUNERAL-ENTRY-AWARENESS",
  glassBreak: "SOL-FUNERAL-GLASS-BREAK-AWARENESS",
  windowOpening: "SOL-FUNERAL-WINDOW-OPENING-AWARENESS",
  controlledAccess: "SOL-FUNERAL-CONTROLLED-ACCESS",
  frontEntry: "SOL-FUNERAL-FRONT-ENTRY-AWARENESS",
  localControl: "SOL-FUNERAL-LOCAL-CONTROL",
} as const;

const funeralHomeEvidenceRefs = {
  sketch: "EVID-FUNERAL-HAND-DRAWN-FLOORPLAN",
  north: "EVID-FUNERAL-NORTH-EXTERIOR",
  south: "EVID-FUNERAL-SOUTH-EXTERIOR",
  east: "EVID-FUNERAL-EAST-EXTERIOR",
  west: "EVID-FUNERAL-WEST-EXTERIOR",
  interior: "EVID-FUNERAL-INTERIOR-SUPPORTING-PHOTOS",
  compass: "EVID-FUNERAL-COMPASS-ORIENTATION",
  redraw: "EVID-FUNERAL-REDRAW-PENDING",
} as const;

const funeralHomeAreaRefs = {
  mainEntrance: "AREA-FUNERAL-MAIN-ENTRANCE",
  viewingRoom: "AREA-FUNERAL-VIEWING-ROOM",
  receptionOffice: "AREA-FUNERAL-RECEPTION-OFFICE",
  rearEntrance: "AREA-FUNERAL-REAR-ENTRANCE",
  rearParkingLot: "AREA-FUNERAL-REAR-PARKING-LOT",
  familyService: "AREA-FUNERAL-FAMILY-SERVICE",
  kitchenService: "AREA-FUNERAL-KITCHEN-SERVICE",
  restroomHallway: "AREA-FUNERAL-RESTROOM-HALLWAY",
  mainHallway: "AREA-FUNERAL-MAIN-HALLWAY",
  firstFloorWindows: "AREA-FUNERAL-FIRST-FLOOR-WINDOWS",
} as const;

export const createFuneralHomeTestCasePropertyModelRecord =
  (): PropertyModelRecord => {
    const timestamp = new Date().toISOString();
    const recordId = createId("WNYHS-PM-FUNERAL");
    const redrawNote =
      "FLOORPLAN TEST NOTE: source hand drawing is authoritative. Professional redraw must be a faithful trace, not a redesign. Preserve orientation, offsets, hallways, openings, windows, thresholds, doors, furniture, and customer room names. Exterior/interior photos validate but do not override the hand sketch unless WNYHS approves.";

    return normalizePropertyModelRecord({
      recordId,
      requestId: `LOCAL-FUNERAL-TEST-${recordId.split("-").slice(-1)[0]}`,
      customer: {
        name: "Funeral Home Test Case",
        email: "local-test-only@example.invalid",
        phone: "Local test only",
        preferredContactMethod: "Any",
      },
      propertyAddress: {
        line1: "Funeral Home Test Property",
        line2: "Local sample - no real customer storage",
        city: "Buffalo",
        state: "NY",
        postalCode: "14200",
      },
      propertyContext: {
        propertyType: "Commercial / first-floor business",
        occupancyContext: "First-time WNYHS customer",
        notes:
          "First-floor funeral home / commercial property with public viewing room, reception / office area, family/service area, kitchen/service area, restrooms, hallway circulation, multiple exterior doors, and first-floor windows. Customer recently experienced a break-in involving a forced-open window and broken window glass. LocalStorage sample only; no network API, upload, CRM sync, payment, inventory, ordering, scheduling, auth, or durable persistence.",
      },
      hubSpotLink: {
        contactUrl: "",
        dealUrl: "",
        owner: "",
        leadSource: "Local Property Model sample",
        lifecycleStage: "Test case only",
      },
      customerConcerns: [
        {
          id: funeralHomeConcernRefs.breakIn,
          category: "Entry / perimeter",
          text: "Recent break-in at the funeral home; customer wants better awareness around vulnerable openings.",
          notes:
            "Test scenario concern; do not create production CRM activity.",
        },
        {
          id: funeralHomeConcernRefs.glassBreak,
          category: "Glass-break awareness",
          text: "Window glass was broken and customer wants glass-break detection for public and first-floor spaces.",
          notes:
            "Use audible glass-break detector placeholders until final hardware is selected.",
        },
        {
          id: funeralHomeConcernRefs.openings,
          category: "Entry / perimeter",
          text: "Needs awareness for exterior doors and first-floor windows, including a window that was forced open.",
          notes: "Map every rough BOM line back to evidence and room/area.",
        },
        {
          id: funeralHomeConcernRefs.controlledAccess,
          category: "Smart entry / access",
          text: "Wants controlled locks plus remote viewing and a remote unlock option for approved entry points.",
          notes: "Final lock compatibility is site-review dependent.",
        },
        {
          id: funeralHomeConcernRefs.doorbell,
          category: "Front door / packages",
          text: "Wants to replace a Ring-style doorbell with a WNYHS front-entry awareness option.",
          notes: "Video doorbell/front-entry awareness placeholder.",
        },
        {
          id: funeralHomeConcernRefs.localControl,
          category: "Local control plane",
          text: "Wants a reliable Home Assistant-based system for local-first control and dashboard prep.",
          notes: "Home Assistant Green/control plane kit placeholder.",
        },
      ],
      customerGoals: [
        {
          id: "GOAL-FUNERAL-001",
          goal: "Validate a realistic funeral home quote workflow end to end.",
          notes: "Local example data only.",
        },
      ],
      solutionCategories: ["home-security", "home-automation"],
      proposedSolutions: [
        {
          id: funeralHomeSolutionRefs.intrusion,
          title: "Intrusion Awareness",
          categoryId: "home-security",
          packageRef: "Home Security Plus",
          concernServed: funeralHomeConcernRefs.breakIn,
          notes:
            "Freehand catalog-aligned solution intent for recent break-in concern.",
        },
        {
          id: funeralHomeSolutionRefs.entry,
          title: "Entry & Perimeter Awareness",
          categoryId: "home-security",
          packageRef: "Home Security Starter Package",
          concernServed: funeralHomeConcernRefs.openings,
          notes:
            "Catalog-backed entry/perimeter awareness for exterior doors and scoped openings.",
        },
        {
          id: funeralHomeSolutionRefs.glassBreak,
          title: "Glass-Break Awareness",
          categoryId: "home-security",
          packageRef: "Home Security Plus",
          concernServed: funeralHomeConcernRefs.glassBreak,
          notes:
            "Freehand fallback because exact catalog solution may require final hardware review.",
        },
        {
          id: funeralHomeSolutionRefs.windowOpening,
          title: "Door / Window Left-Open Awareness",
          categoryId: "home-security",
          packageRef: "Entry & Access Package",
          concernServed: funeralHomeConcernRefs.openings,
          notes:
            "Catalog-backed window/opening awareness for first-floor windows.",
        },
        {
          id: funeralHomeSolutionRefs.controlledAccess,
          title: "Smart Entry / Smart Lock & Guest Access",
          categoryId: "home-automation",
          packageRef: "Entry & Access Package",
          concernServed: funeralHomeConcernRefs.controlledAccess,
          notes:
            "Controlled smart lock placement remains site-review dependent.",
        },
        {
          id: funeralHomeSolutionRefs.frontEntry,
          title: "Front Door Package Protection",
          categoryId: "home-security",
          packageRef: "Front Door Protection Package",
          concernServed: funeralHomeConcernRefs.doorbell,
          notes: "Use as front-entry/video doorbell awareness starting point.",
        },
        {
          id: funeralHomeSolutionRefs.localControl,
          title: "Local Control Plane",
          categoryId: "home-automation",
          packageRef: "Home Security Plus",
          concernServed: funeralHomeConcernRefs.localControl,
          notes:
            "Home Assistant-based local control and dashboard prep foundation.",
        },
      ],
      evidenceItems: [
        {
          id: funeralHomeEvidenceRefs.sketch,
          evidenceType: "hand_drawn_floorplan",
          label: "Hand-drawn floorplan",
          sourceReference: "Local test evidence: funeral-home-hand-sketch",
          orientationSide: "whole_property",
          notes: redrawNote,
          status: "accepted_for_trace",
        },
        {
          id: funeralHomeEvidenceRefs.redraw,
          evidenceType: "professional_redraw",
          label: "Professional redraw pending",
          sourceReference: "Pending faithful trace redraw",
          orientationSide: "whole_property",
          notes: redrawNote,
          status: "needs_review",
        },
        {
          id: funeralHomeEvidenceRefs.north,
          evidenceType: "exterior_photo",
          label: "Exterior north photo",
          sourceReference:
            "Local test evidence: north exterior photo placeholder",
          orientationSide: "north",
          notes:
            "Validation reference only; does not override hand sketch without WNYHS approval.",
          status: "accepted_for_validation",
        },
        {
          id: funeralHomeEvidenceRefs.south,
          evidenceType: "exterior_photo",
          label: "Exterior south photo",
          sourceReference:
            "Local test evidence: south exterior photo placeholder",
          orientationSide: "south",
          notes:
            "Validation reference only; does not override hand sketch without WNYHS approval.",
          status: "accepted_for_validation",
        },
        {
          id: funeralHomeEvidenceRefs.east,
          evidenceType: "exterior_photo",
          label: "Exterior east photo",
          sourceReference:
            "Local test evidence: east exterior photo placeholder",
          orientationSide: "east",
          notes:
            "Validation reference only; does not override hand sketch without WNYHS approval.",
          status: "accepted_for_validation",
        },
        {
          id: funeralHomeEvidenceRefs.west,
          evidenceType: "exterior_photo",
          label: "Exterior west photo",
          sourceReference:
            "Local test evidence: west exterior photo placeholder",
          orientationSide: "west",
          notes:
            "Validation reference only; does not override hand sketch without WNYHS approval.",
          status: "accepted_for_validation",
        },
        {
          id: funeralHomeEvidenceRefs.interior,
          evidenceType: "interior_photo",
          label: "Interior/supporting photos",
          sourceReference:
            "Local test evidence: interior/supporting photo batch placeholder",
          orientationSide: "interior",
          notes:
            "Supports room naming and placement questions after sketch review.",
          status: "accepted_for_validation",
        },
        {
          id: funeralHomeEvidenceRefs.compass,
          evidenceType: "compass_orientation_note",
          label: "Compass/orientation note",
          sourceReference:
            "North side labeled on sketch; main entrance orientation to be verified.",
          orientationSide: "whole_property",
          notes:
            "Preserve source orientation during redraw and placement review.",
          status: "source_provided",
        },
      ],
      areas: [
        [
          funeralHomeAreaRefs.mainEntrance,
          "Main Entrance",
          "Front-entry doorbell, primary controlled access, and exterior door awareness.",
        ],
        [
          funeralHomeAreaRefs.viewingRoom,
          "Viewing Room",
          "Public viewing room; glass-break awareness and opening review.",
        ],
        [
          funeralHomeAreaRefs.receptionOffice,
          "Reception / Office",
          "Administrative area and front-entry workflow.",
        ],
        [
          funeralHomeAreaRefs.rearEntrance,
          "Rear Entrance",
          "Exterior door awareness and possible controlled lock.",
        ],
        [
          funeralHomeAreaRefs.rearParkingLot,
          "Rear Parking Lot",
          "Exterior approach context for rear entry review.",
        ],
        [
          funeralHomeAreaRefs.familyService,
          "Family / Service Area",
          "Private family/service circulation area.",
        ],
        [
          funeralHomeAreaRefs.kitchenService,
          "Kitchen / Service Area",
          "Support area with opening and chime implications.",
        ],
        [
          funeralHomeAreaRefs.restroomHallway,
          "Restroom Hallway",
          "Hallway circulation and audible notification context.",
        ],
        [
          funeralHomeAreaRefs.mainHallway,
          "Main Hallway",
          "Main circulation route tying public and support spaces together.",
        ],
        [
          funeralHomeAreaRefs.firstFloorWindows,
          "First-Floor Windows",
          "Placeholder area for first-floor window sensor grouping after redraw approval.",
        ],
      ].map(([id, label, notes]) => ({ id, label, notes })),
      bomLineItems: [
        [
          "BOM-FUNERAL-CONTROL-PLANE",
          "Home Assistant Green / control plane kit",
          "Control plane kit",
          1,
          "control-plane-mini-pc-zigbee-zwave",
          funeralHomeAreaRefs.receptionOffice,
          funeralHomeConcernRefs.localControl,
          funeralHomeSolutionRefs.localControl,
          funeralHomeEvidenceRefs.sketch,
          "Site-review network location; no production account or cloud storage in this sample.",
          "Prepare local dashboard structure for entry, glass-break, window, lock, and doorbell entities.",
          "wnyhs_modified",
        ],
        [
          "BOM-FUNERAL-RADIO",
          "Z-Wave or Zigbee coordinator/radio placeholder",
          "Z-Wave radio",
          1,
          "control-plane-mini-pc-zigbee-zwave",
          funeralHomeAreaRefs.receptionOffice,
          funeralHomeConcernRefs.localControl,
          funeralHomeSolutionRefs.localControl,
          funeralHomeEvidenceRefs.sketch,
          "Confirm protocol after final device selection.",
          "Dashboard depends on final coordinator and entity naming.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-DOORBELL",
          "Video doorbell",
          "Video doorbell",
          1,
          "video-doorbell",
          funeralHomeAreaRefs.mainEntrance,
          funeralHomeConcernRefs.doorbell,
          funeralHomeSolutionRefs.frontEntry,
          funeralHomeEvidenceRefs.north,
          "Replace Ring-style doorbell after power, chime, Wi-Fi/network, and mounting review.",
          "Create front-entry video/status tile after final device selection.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-SMART-LOCKS",
          "Controlled smart lock(s)",
          "Smart lock",
          2,
          "",
          funeralHomeAreaRefs.mainEntrance,
          funeralHomeConcernRefs.controlledAccess,
          funeralHomeSolutionRefs.controlledAccess,
          funeralHomeEvidenceRefs.sketch,
          "Confirm door prep and cylinder/deadbolt compatibility; likely main and rear entries.",
          "Prepare lock status and approved remote unlock control after operator approval.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-EXTERIOR-DOORS",
          "Exterior door sensors",
          "Door/window sensor",
          3,
          "door-window-sensor",
          funeralHomeAreaRefs.rearEntrance,
          funeralHomeConcernRefs.openings,
          funeralHomeSolutionRefs.entry,
          funeralHomeEvidenceRefs.sketch,
          "Place on main, rear, and additional exterior door after redraw approval.",
          "Prepare door open/closed status tiles and local chime rules.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-WINDOWS",
          "First-floor window sensors placeholder line",
          "Door/window sensor",
          1,
          "door-window-sensor",
          funeralHomeAreaRefs.firstFloorWindows,
          funeralHomeConcernRefs.openings,
          funeralHomeSolutionRefs.windowOpening,
          funeralHomeEvidenceRefs.sketch,
          "Final count depends on faithful redraw and WNYHS window-by-window review.",
          "Prepare grouped first-floor window status; split into individual entities after count is known.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-GLASSBREAK",
          "Audible glass-break detectors",
          "Other / freehand",
          2,
          "",
          funeralHomeAreaRefs.viewingRoom,
          funeralHomeConcernRefs.glassBreak,
          funeralHomeSolutionRefs.glassBreak,
          funeralHomeEvidenceRefs.interior,
          "Candidate placement: viewing room and hallway/service-side coverage; verify manufacturer fit.",
          "Prepare glass-break event tiles after final hardware selection.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-SIREN-CHIME",
          "Siren/chime",
          "Siren/chime",
          1,
          "siren-chime",
          funeralHomeAreaRefs.mainHallway,
          funeralHomeConcernRefs.breakIn,
          funeralHomeSolutionRefs.intrusion,
          funeralHomeEvidenceRefs.sketch,
          "Local audible feedback location to be confirmed with business operations.",
          "Prepare chime/siren controls and event labels only after operator review.",
          "gpt_proposed",
        ],
        [
          "BOM-FUNERAL-FRONT-VIDEO",
          "Front-entry camera/video placeholder",
          "Outdoor PoE camera",
          1,
          "outdoor-poe-camera",
          funeralHomeAreaRefs.mainEntrance,
          funeralHomeConcernRefs.doorbell,
          funeralHomeSolutionRefs.frontEntry,
          funeralHomeEvidenceRefs.north,
          "Use only if doorbell/front-entry awareness needs supplemental video after site review.",
          "Prepare optional front-entry camera tile if included in final scope.",
          "gpt_proposed",
        ],
      ].map(
        ([
          id,
          itemName,
          hardwareType,
          quantity,
          catalogHardwareItemId,
          areaRef,
          concernRef,
          solutionRef,
          evidenceRef,
          installerNote,
          dashboardPrepNote,
          bomStatus,
        ]) => ({
          id: id as string,
          itemName: itemName as string,
          hardwareType: hardwareType as string,
          quantity: quantity as number,
          catalogHardwareItemId: catalogHardwareItemId as string,
          locationRef: areaRef as string,
          propertyAreaRef: areaRef as string,
          customerConcernServed: concernRef as string,
          selectedSolutionRef: solutionRef as string,
          evidenceRef: evidenceRef as string,
          installerNote: installerNote as string,
          dashboardPrepNote: dashboardPrepNote as string,
          bomStatus: bomStatus as PropertyModelBomStatus,
          installerAssignment: "unassigned" as const,
        }),
      ),
      quoteStage: "rough_quote_provided_no_onsite",
      pricing: {
        quoteSubtotal: 0,
        quoteDiscount: 0,
        quoteTaxOrFees: 0,
        quoteTotal: 0,
        depositRequired: true,
        depositPercent: 50,
        depositAmount: 0,
        balanceDueOnArrival: 0,
        pricingNotes:
          "Manual pricing intentionally left at zero for the funeral home local test case. Use operator-approved manual totals only; no automated pricing, payment processing, inventory, ordering, or scheduling.",
      },
      gates: {
        floorplanApproved: false,
        depositVerified: false,
        inventoryReady: false,
        schedulingReady: false,
        finalBalanceExceptionApproved: false,
      },
      notes: `${redrawNote}

Quote workspace compatibility target: admin edit, quote preview, installer packet, and JSON import/export.`,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
  };

export const createFuneralHomeTestCasePropertyModelRecordInStorage = () => {
  const record = createFuneralHomeTestCasePropertyModelRecord();
  const records = loadPropertyModelRecords();
  const nextRecords = [record, ...records];
  return {
    ok: savePropertyModelRecords(nextRecords),
    record,
    records: nextRecords,
  };
};

export const createPropertyModelImportCopy = (record: PropertyModelRecord) => {
  const now = new Date().toISOString();
  return normalizePropertyModelRecord({
    ...record,
    recordId: createId("WNYHS-PM"),
    createdAt: now,
    updatedAt: now,
  });
};

export const isPropertyModelImportCandidate = (
  value: unknown,
): value is StoredPropertyModelRecord => {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<StoredPropertyModelRecord>;
  return (
    typeof candidate.recordId === "string" &&
    typeof candidate.customer === "object" &&
    typeof candidate.propertyAddress === "object"
  );
};

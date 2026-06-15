export type PropertyQuoteStage =
  | 'requested_call'
  | 'requested_quote'
  | 'rough_quote_provided_no_onsite'
  | 'onsite_quote_provided'
  | 'accepted_quote_owes_deposit'
  | 'quote_complete_deposit_paid';

export type PropertyModelBomStatus = 'needs_placement' | 'gpt_proposed' | 'wnyhs_modified' | 'approved' | 'locked';

export type PropertyModelInstallerAssignment =
  | 'installer_a'
  | 'installer_b'
  | 'either_installer'
  | 'both_installers_required'
  | 'unassigned';

export type PropertyModelEvidenceType =
  | 'hand_drawn_floorplan'
  | 'professional_redraw'
  | 'exterior_photo'
  | 'interior_photo'
  | 'measurement_note'
  | 'compass_orientation_note'
  | 'lidar_digital_twin_capture'
  | 'other';

export type PropertyModelEvidenceOrientation =
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'interior'
  | 'whole_property'
  | 'unknown_na';

export type PropertyModelEvidenceStatus =
  | 'source_provided'
  | 'needs_review'
  | 'accepted_for_trace'
  | 'accepted_for_validation'
  | 'rejected_superseded';

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

export type PropertyModelGateStatus = {
  floorplanApproved: boolean;
  depositVerified: boolean;
  inventoryReady: boolean;
  schedulingReady: boolean;
  finalBalanceExceptionApproved: boolean;
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
  areas: PropertyModelAreaPlaceholder[];
  devices: PropertyModelDevicePlaceholder[];
  bomLineItems: PropertyModelBomLineItem[];
  quoteStage: PropertyQuoteStage;
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
    exteriorPhotoReferences: Partial<Record<'north' | 'south' | 'east' | 'west', string>>;
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

export const propertyQuoteStageOptions: Array<{ value: PropertyQuoteStage; label: string }> = [
  { value: 'requested_call', label: 'Requested Call' },
  { value: 'requested_quote', label: 'Requested Quote' },
  { value: 'rough_quote_provided_no_onsite', label: 'Rough Quote Provided - No Onsite' },
  { value: 'onsite_quote_provided', label: 'Onsite Quote Provided' },
  { value: 'accepted_quote_owes_deposit', label: 'Accepted Quote - Owes Deposit' },
  { value: 'quote_complete_deposit_paid', label: 'Quote Complete - Deposit Paid' },
];

export const propertyTypeOptions = [
  'Single-family home',
  'Townhome / duplex',
  'Condo',
  'Apartment',
  'Seasonal / vacation property',
  'Detached garage / workshop',
  'Mixed property',
  'Other / needs review',
];

export const occupancyContextOptions = [
  'Owner occupied',
  'Family / caregiver supported',
  'Seasonal / away for stretches',
  'Rental / tenant occupied',
  'New homeowner',
  'Existing WNYHS Core customer',
  'First-time WNYHS customer',
  'Other / needs review',
];

export const customerConcernCategoryOptions = [
  'Front door / packages',
  'Entry / perimeter',
  'Garage / driveway',
  'Water / temperature',
  'Lighting / routines',
  'Family awareness',
  'Aging-in-place awareness',
  'Vacation / away mode',
  'Custom / freehand',
];

export const areaNameOptions = [
  'Living Room',
  'Dining Room',
  'Rec Room',
  'Basement',
  'Utility Room',
  'Garage',
  'Front Porch',
  'Driveway',
  'Viewing Room',
  'Office',
];

export const installerAssignmentOptions: Array<{ value: PropertyModelInstallerAssignment; label: string }> = [
  { value: 'installer_a', label: 'Installer A' },
  { value: 'installer_b', label: 'Installer B' },
  { value: 'either_installer', label: 'Either Installer' },
  { value: 'both_installers_required', label: 'Both Installers Required' },
  { value: 'unassigned', label: 'Unassigned' },
];

export const bomStatusOptions: Array<{ value: PropertyModelBomStatus; label: string }> = [
  { value: 'needs_placement', label: 'Needs Placement' },
  { value: 'gpt_proposed', label: 'GPT Proposed' },
  { value: 'wnyhs_modified', label: 'WNYHS Modified' },
  { value: 'approved', label: 'Approved' },
  { value: 'locked', label: 'Locked' },
];

export const propertyEvidenceTypeOptions: Array<{ value: PropertyModelEvidenceType; label: string }> = [
  { value: 'hand_drawn_floorplan', label: 'Hand-Drawn Floorplan' },
  { value: 'professional_redraw', label: 'Professional Redraw' },
  { value: 'exterior_photo', label: 'Exterior Photo' },
  { value: 'interior_photo', label: 'Interior Photo' },
  { value: 'measurement_note', label: 'Measurement Note' },
  { value: 'compass_orientation_note', label: 'Compass / Orientation Note' },
  { value: 'lidar_digital_twin_capture', label: 'LiDAR / Digital Twin Capture' },
  { value: 'other', label: 'Other' },
];

export const propertyEvidenceOrientationOptions: Array<{ value: PropertyModelEvidenceOrientation; label: string }> = [
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'interior', label: 'Interior' },
  { value: 'whole_property', label: 'Whole Property' },
  { value: 'unknown_na', label: 'Unknown / Not Applicable' },
];

export const propertyEvidenceStatusOptions: Array<{ value: PropertyModelEvidenceStatus; label: string }> = [
  { value: 'source_provided', label: 'Source Provided' },
  { value: 'needs_review', label: 'Needs Review' },
  { value: 'accepted_for_trace', label: 'Accepted For Trace' },
  { value: 'accepted_for_validation', label: 'Accepted For Validation' },
  { value: 'rejected_superseded', label: 'Rejected / Superseded' },
];

export const propertyModelStorageKey = 'wnyhs_property_models_v1';

const createId = (prefix: string) => {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${random}`;
};

export const createPropertyModelChildId = (prefix: string) => createId(prefix);

export const createEmptyPropertyModelRecord = (): PropertyModelRecord => {
  const timestamp = new Date().toISOString();

  return {
    recordId: createId('WNYHS-PM'),
    requestId: '',
    customer: {
      name: '',
      email: '',
      phone: '',
      preferredContactMethod: '',
    },
    propertyAddress: {
      line1: '',
      line2: '',
      city: '',
      state: 'NY',
      postalCode: '',
    },
    propertyContext: {
      propertyType: '',
      occupancyContext: '',
      notes: '',
    },
    hubSpotLink: {
      contactUrl: '',
      dealUrl: '',
      owner: '',
      leadSource: '',
      lifecycleStage: '',
    },
    customerConcerns: [],
    customerGoals: [],
    solutionCategories: [],
    proposedSolutions: [],
    evidenceItems: [],
    areas: [],
    devices: [],
    bomLineItems: [],
    quoteStage: 'requested_quote',
    gates: {
      floorplanApproved: false,
      depositVerified: false,
      inventoryReady: false,
      schedulingReady: false,
      finalBalanceExceptionApproved: false,
    },
    notes: '',
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const normalizePropertyModelRecord = (record: StoredPropertyModelRecord): PropertyModelRecord => {
  const emptyRecord = createEmptyPropertyModelRecord();
  const legacyStageMap: Record<string, PropertyQuoteStage> = {
    draft: 'requested_quote',
    field_capture: 'requested_call',
    redraw_review: 'requested_quote',
    solution_mapping: 'requested_quote',
    proposal_draft: 'rough_quote_provided_no_onsite',
    deposit_pending: 'accepted_quote_owes_deposit',
    deposit_verified: 'quote_complete_deposit_paid',
    install_ready: 'quote_complete_deposit_paid',
    closed: 'quote_complete_deposit_paid',
  };
  const normalizedConcerns = Array.isArray(record.customerConcerns)
    ? record.customerConcerns.map((concern, index) => {
        if (typeof concern === 'string') {
          return {
            id: createId('CONCERN'),
            category: 'Custom / freehand',
            text: concern,
            notes: '',
          };
        }

        return {
          id: concern.id ?? `concern-${index + 1}`,
          category: concern.category ?? 'Custom / freehand',
          text: concern.text ?? '',
          notes: concern.notes ?? '',
        };
      })
    : [];
  const normalizedQuoteStage =
    record.quoteStage && propertyQuoteStageOptions.some((stage) => stage.value === record.quoteStage)
      ? record.quoteStage
      : legacyStageMap[String(record.quoteStage)] ?? emptyRecord.quoteStage;
  const normalizeEvidenceItem = (item: Partial<PropertyModelEvidenceItem>, index: number): PropertyModelEvidenceItem => ({
    id: item.id ?? `evidence-${index + 1}`,
    evidenceType:
      item.evidenceType && propertyEvidenceTypeOptions.some((option) => option.value === item.evidenceType)
        ? item.evidenceType
        : 'other',
    label: item.label ?? '',
    sourceReference: item.sourceReference ?? '',
    orientationSide:
      item.orientationSide &&
      propertyEvidenceOrientationOptions.some((option) => option.value === item.orientationSide)
        ? item.orientationSide
        : 'unknown_na',
    notes: item.notes ?? '',
    status:
      item.status && propertyEvidenceStatusOptions.some((option) => option.value === item.status)
        ? item.status
        : 'source_provided',
  });
  const legacyEvidenceItemsWithNulls: Array<Partial<PropertyModelEvidenceItem> | null> = [
    record.evidence?.sourceSketchReference
      ? {
          evidenceType: 'hand_drawn_floorplan' as const,
          label: 'Source sketch reference',
          sourceReference: record.evidence.sourceSketchReference,
          orientationSide: 'whole_property' as const,
          notes: '',
          status: 'source_provided' as const,
        }
      : null,
    record.evidence?.professionalRedrawReference
      ? {
          evidenceType: 'professional_redraw' as const,
          label: 'Professional redraw reference',
          sourceReference: record.evidence.professionalRedrawReference,
          orientationSide: 'whole_property' as const,
          notes: '',
          status: 'needs_review' as const,
        }
      : null,
    ...(record.evidence?.exteriorPhotoReferences
      ? (['north', 'south', 'east', 'west'] as const).map((side) =>
          record.evidence?.exteriorPhotoReferences?.[side]
            ? {
                evidenceType: 'exterior_photo' as const,
                label: `${side[0].toUpperCase()}${side.slice(1)} exterior photo`,
                sourceReference: record.evidence.exteriorPhotoReferences[side] ?? '',
                orientationSide: side,
                notes: '',
                status: 'accepted_for_validation' as const,
              }
            : null,
        )
      : []),
    record.evidence?.interiorPhotoReferences
      ? {
          evidenceType: 'interior_photo' as const,
          label: 'Interior photo references',
          sourceReference: record.evidence.interiorPhotoReferences,
          orientationSide: 'interior' as const,
          notes: '',
          status: 'accepted_for_validation' as const,
        }
      : null,
    record.evidence?.compassOrientationNotes
      ? {
          evidenceType: 'compass_orientation_note' as const,
          label: 'Compass / orientation notes',
          sourceReference: 'Legacy orientation note',
          orientationSide: 'whole_property' as const,
          notes: record.evidence.compassOrientationNotes,
          status: 'source_provided' as const,
        }
      : null,
    record.evidence?.measurementNotes
      ? {
          evidenceType: 'measurement_note' as const,
          label: 'Known measurements',
          sourceReference: 'Legacy measurement note',
          orientationSide: 'unknown_na' as const,
          notes: record.evidence.measurementNotes,
          status: 'source_provided' as const,
        }
      : null,
    record.evidence?.validationNotes
      ? {
          evidenceType: 'other' as const,
          label: 'Floorplan validation notes',
          sourceReference: 'Legacy validation note',
          orientationSide: 'unknown_na' as const,
          notes: record.evidence.validationNotes,
          status: 'needs_review' as const,
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
    requestId: record.requestId ?? '',
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
    customerGoals: Array.isArray(record.customerGoals) ? record.customerGoals : [],
    solutionCategories: Array.isArray(record.solutionCategories) ? record.solutionCategories : [],
    proposedSolutions: Array.isArray(record.proposedSolutions)
      ? (record.proposedSolutions as StoredPropertyModelSolution[]).map((solution) => ({
          id: solution.id,
          title: solution.title,
          categoryId: solution.categoryId ?? '',
          packageRef: solution.packageRef ?? '',
          concernServed: solution.concernServed ?? solution.customerGoalRef ?? '',
          notes: solution.notes ?? solution.wnyhsPurpose ?? '',
        }))
      : [],
    evidenceItems: normalizedEvidenceItems,
    areas: Array.isArray(record.areas) ? record.areas : [],
    devices: Array.isArray(record.devices) ? record.devices : [],
    bomLineItems: Array.isArray(record.bomLineItems)
      ? (record.bomLineItems as StoredPropertyModelBomLineItem[]).map((item) => ({
          id: item.id,
          itemName: item.itemName,
          hardwareType: item.hardwareType ?? '',
          quantity: item.quantity,
          catalogHardwareItemId: item.catalogHardwareItemId ?? '',
          locationRef: item.locationRef,
          propertyAreaRef: item.propertyAreaRef ?? item.locationRef ?? '',
          customerConcernServed: item.customerConcernServed ?? item.customerGoalServed ?? '',
          selectedSolutionRef: item.selectedSolutionRef ?? item.wnyhsPurpose ?? '',
          evidenceRef: item.evidenceRef ?? '',
          bomStatus: item.bomStatus ?? 'needs_placement',
          dashboardPrepNote: item.dashboardPrepNote ?? '',
          installerNote: item.installerNote ?? '',
          installerAssignment:
            item.installerAssignment && installerAssignmentOptions.some((option) => option.value === item.installerAssignment)
              ? item.installerAssignment
              : 'unassigned',
        }))
      : [],
    quoteStage: normalizedQuoteStage,
    gates: {
      ...emptyRecord.gates,
      ...record.gates,
    },
    notes: record.notes ?? '',
    createdAt: record.createdAt ?? emptyRecord.createdAt,
    updatedAt: record.updatedAt ?? emptyRecord.updatedAt,
  };
};

const readFromStorage = <T,>(key: string): T | null => {
  if (typeof window === 'undefined') {
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

const writeToStorage = <T,>(key: string, value: T) => {
  if (typeof window === 'undefined') {
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
  const records = readFromStorage<StoredPropertyModelRecord[]>(propertyModelStorageKey);
  return Array.isArray(records) ? records.map(normalizePropertyModelRecord) : [];
};

export const savePropertyModelRecords = (records: PropertyModelRecord[]) => writeToStorage(propertyModelStorageKey, records);

export const savePropertyModelRecord = (record: PropertyModelRecord) => {
  const records = loadPropertyModelRecords();
  const nextRecord = {
    ...record,
    updatedAt: new Date().toISOString(),
  };
  const nextRecords = records.some((item) => item.recordId === nextRecord.recordId)
    ? records.map((item) => (item.recordId === nextRecord.recordId ? nextRecord : item))
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

export const createPropertyModelImportCopy = (record: PropertyModelRecord) => {
  const now = new Date().toISOString();
  return normalizePropertyModelRecord({
    ...record,
    recordId: createId('WNYHS-PM'),
    createdAt: now,
    updatedAt: now,
  });
};

export const isPropertyModelImportCandidate = (value: unknown): value is StoredPropertyModelRecord => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Partial<StoredPropertyModelRecord>;
  return typeof candidate.recordId === 'string' && typeof candidate.customer === 'object' && typeof candidate.propertyAddress === 'object';
};

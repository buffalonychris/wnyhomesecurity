export type PropertyQuoteStage =
  | 'requested_call'
  | 'requested_quote'
  | 'rough_quote_provided_no_onsite'
  | 'onsite_quote_provided'
  | 'accepted_quote_owes_deposit'
  | 'quote_complete_deposit_paid';

export type PropertyModelBomStatus = 'gpt_proposed' | 'wnyhs_modified' | 'approved' | 'locked';

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
  locationRef: string;
  customerConcernServed: string;
  bomStatus: PropertyModelBomStatus;
  dashboardPrepNote: string;
  installerNote: string;
};

export type PropertyModelGateStatus = {
  floorplanApproved: boolean;
  depositVerified: boolean;
  inventoryReady: boolean;
  schedulingReady: boolean;
  finalBalanceExceptionApproved: boolean;
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

export const bomStatusOptions: Array<{ value: PropertyModelBomStatus; label: string }> = [
  { value: 'gpt_proposed', label: 'GPT Proposed' },
  { value: 'wnyhs_modified', label: 'WNYHS Modified' },
  { value: 'approved', label: 'Approved' },
  { value: 'locked', label: 'Locked' },
];

const propertyModelStorageKey = 'wnyhs_property_models_v1';

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

const normalizePropertyModelRecord = (record: StoredPropertyModelRecord): PropertyModelRecord => {
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
    areas: Array.isArray(record.areas) ? record.areas : [],
    devices: Array.isArray(record.devices) ? record.devices : [],
    bomLineItems: Array.isArray(record.bomLineItems)
      ? (record.bomLineItems as StoredPropertyModelBomLineItem[]).map((item) => ({
          id: item.id,
          itemName: item.itemName,
          hardwareType: item.hardwareType ?? '',
          quantity: item.quantity,
          locationRef: item.locationRef,
          customerConcernServed: item.customerConcernServed ?? item.customerGoalServed ?? '',
          bomStatus: item.bomStatus ?? 'gpt_proposed',
          dashboardPrepNote: item.dashboardPrepNote ?? '',
          installerNote: item.installerNote ?? '',
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

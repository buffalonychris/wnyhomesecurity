export type PropertyQuoteStage =
  | 'draft'
  | 'field_capture'
  | 'redraw_review'
  | 'solution_mapping'
  | 'proposal_draft'
  | 'deposit_pending'
  | 'deposit_verified'
  | 'install_ready'
  | 'closed';

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

export type PropertyModelSolution = {
  id: string;
  title: string;
  customerGoalRef: string;
  wnyhsPurpose: string;
  notes: string;
};

export type PropertyModelBomLineItem = {
  id: string;
  itemName: string;
  quantity: number;
  locationRef: string;
  customerGoalServed: string;
  wnyhsPurpose: string;
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
  customerConcerns: string[];
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

export const propertyQuoteStageOptions: Array<{ value: PropertyQuoteStage; label: string }> = [
  { value: 'draft', label: 'Draft' },
  { value: 'field_capture', label: 'Field capture' },
  { value: 'redraw_review', label: 'Redraw review' },
  { value: 'solution_mapping', label: 'Solution mapping' },
  { value: 'proposal_draft', label: 'Proposal draft' },
  { value: 'deposit_pending', label: 'Deposit pending' },
  { value: 'deposit_verified', label: 'Deposit verified' },
  { value: 'install_ready', label: 'Install ready' },
  { value: 'closed', label: 'Closed' },
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
    customerConcerns: [],
    customerGoals: [],
    solutionCategories: [],
    proposedSolutions: [],
    areas: [],
    devices: [],
    bomLineItems: [],
    quoteStage: 'draft',
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
    customerConcerns: Array.isArray(record.customerConcerns) ? record.customerConcerns : [],
    customerGoals: Array.isArray(record.customerGoals) ? record.customerGoals : [],
    solutionCategories: Array.isArray(record.solutionCategories) ? record.solutionCategories : [],
    proposedSolutions: Array.isArray(record.proposedSolutions) ? record.proposedSolutions : [],
    areas: Array.isArray(record.areas) ? record.areas : [],
    devices: Array.isArray(record.devices) ? record.devices : [],
    bomLineItems: Array.isArray(record.bomLineItems) ? record.bomLineItems : [],
    quoteStage: record.quoteStage ?? emptyRecord.quoteStage,
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

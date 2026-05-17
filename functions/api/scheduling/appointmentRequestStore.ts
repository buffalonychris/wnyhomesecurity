import { SCHEDULING_STATUSES, type SchedulingStatus } from './_boundary';

export type AppointmentRequestRecord = {
  appointmentRequestId: string;
  requestId: string;
  event: string;
  preferredEstimateDate?: string;
  preferredEstimateTimeSlot?: string;
  preferredWindowText: string;
  schedulingStatus: SchedulingStatus;
  createdAt: string;
  updatedAt: string;
  source: 'lead_signal';
  confirmedBy?: string;
  confirmedAt?: string;
};

type AppointmentRequestStoreLike = {
  get: (key: string) => Promise<string | null>;
  put: (key: string, value: string) => Promise<void>;
};

const appointmentRequestStore = new Map<string, AppointmentRequestRecord>();
const KV_KEY_PREFIX = 'appointment_request:';

const createAppointmentRequestId = () => `ar_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const getKvKey = (requestId: string) => `${KV_KEY_PREFIX}${requestId}`;

const getDurableStore = (env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike }) => env?.APPOINTMENT_REQUESTS_KV;

const getFromMemory = async (requestId: string) => appointmentRequestStore.get(requestId);
const putToMemory = async (record: AppointmentRequestRecord) => {
  appointmentRequestStore.set(record.requestId, record);
};

const readByRequestId = async (requestId: string, env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike }) => {
  const durableStore = getDurableStore(env);

  if (durableStore) {
    const raw = await durableStore.get(getKvKey(requestId));
    if (!raw) return undefined;
    return JSON.parse(raw) as AppointmentRequestRecord;
  }

  return getFromMemory(requestId);
};

const writeRecord = async (record: AppointmentRequestRecord, env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike }) => {
  const durableStore = getDurableStore(env);

  if (durableStore) {
    await durableStore.put(getKvKey(record.requestId), JSON.stringify(record));
    return;
  }

  await putToMemory(record);
};

export const createPendingOwnerConfirmationAppointmentRequest = async ({
  requestId,
  event,
  preferredEstimateDate,
  preferredEstimateTimeSlot,
  preferredWindowText,
  env,
}: {
  requestId: string;
  event: string;
  preferredEstimateDate?: string;
  preferredEstimateTimeSlot?: string;
  preferredWindowText: string;
  env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike };
}): Promise<AppointmentRequestRecord> => {
  const now = new Date().toISOString();
  const record: AppointmentRequestRecord = {
    appointmentRequestId: createAppointmentRequestId(),
    requestId,
    event,
    preferredEstimateDate,
    preferredEstimateTimeSlot,
    preferredWindowText,
    schedulingStatus: SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION,
    createdAt: now,
    updatedAt: now,
    source: 'lead_signal',
  };

  await writeRecord(record, env);
  return record;
};

export const getAppointmentRequestByRequestId = (requestId: string, env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike }): Promise<AppointmentRequestRecord | undefined> =>
  readByRequestId(requestId, env);

export const confirmAppointmentRequestByRequestId = async ({
  requestId,
  confirmedBy,
  env,
}: {
  requestId: string;
  confirmedBy: string;
  env?: { APPOINTMENT_REQUESTS_KV?: AppointmentRequestStoreLike };
}): Promise<AppointmentRequestRecord | undefined> => {
  const existing = await readByRequestId(requestId, env);
  if (!existing) return undefined;

  const confirmedRecord: AppointmentRequestRecord = {
    ...existing,
    schedulingStatus: SCHEDULING_STATUSES.CONFIRMED,
    confirmedBy,
    confirmedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await writeRecord(confirmedRecord, env);
  return confirmedRecord;
};

export const resetAppointmentRequestStoreForTests = () => appointmentRequestStore.clear();

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
  source: 'lead_signal';
};

const appointmentRequestStore = new Map<string, AppointmentRequestRecord>();

const createAppointmentRequestId = () => `ar_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

export const createPendingOwnerConfirmationAppointmentRequest = ({
  requestId,
  event,
  preferredEstimateDate,
  preferredEstimateTimeSlot,
  preferredWindowText,
}: {
  requestId: string;
  event: string;
  preferredEstimateDate?: string;
  preferredEstimateTimeSlot?: string;
  preferredWindowText: string;
}): AppointmentRequestRecord => {
  const record: AppointmentRequestRecord = {
    appointmentRequestId: createAppointmentRequestId(),
    requestId,
    event,
    preferredEstimateDate,
    preferredEstimateTimeSlot,
    preferredWindowText,
    schedulingStatus: SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION,
    createdAt: new Date().toISOString(),
    source: 'lead_signal',
  };

  appointmentRequestStore.set(requestId, record);
  return record;
};

export const getAppointmentRequestByRequestId = (requestId: string): AppointmentRequestRecord | undefined => appointmentRequestStore.get(requestId);

export const resetAppointmentRequestStoreForTests = () => appointmentRequestStore.clear();

export const SCHEDULING_STATUSES = {
  REQUESTED: 'REQUESTED',
  PENDING_OWNER_CONFIRMATION: 'PENDING_OWNER_CONFIRMATION',
  CONFIRMED: 'CONFIRMED',
  DECLINED: 'DECLINED',
  CANCELLED: 'CANCELLED',
} as const;

export type SchedulingStatus = (typeof SCHEDULING_STATUSES)[keyof typeof SCHEDULING_STATUSES];

export type SchedulingRequestSummary = {
  preferredEstimateDate?: string;
  preferredEstimateTimeSlot?: string;
  preferredWindowText: string;
  schedulingStatus: SchedulingStatus;
};

const toValue = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const next = value.trim();
  return next.length > 0 ? next : undefined;
};

export const extractSchedulingRequestSummary = (request: Record<string, unknown> | null | undefined): SchedulingRequestSummary => {
  const preferredEstimateDate = toValue(request?.preferredEstimateDate);
  const preferredEstimateTimeSlot = toValue(request?.preferredEstimateTimeSlot);

  return {
    preferredEstimateDate,
    preferredEstimateTimeSlot,
    preferredWindowText: [preferredEstimateDate, preferredEstimateTimeSlot].filter(Boolean).join(' — '),
    schedulingStatus: SCHEDULING_STATUSES.PENDING_OWNER_CONFIRMATION,
  };
};

export const buildSchedulingBoundaryDiagnostics = () => ({
  availabilityReadBoundary: '/api/scheduling/availability',
  requestCreateBoundary: '/api/scheduling/request',
  confirmationBoundary: '/api/scheduling/confirm',
});

import { QuoteContext } from './agreement';
import { HomeSecurityFunnelState } from './homeSecurityFunnel';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export type AcceptanceRecord = {
  accepted: boolean;
  fullName?: string;
  acceptanceDate?: string;
  recordedAt?: string;
  acceptedAt?: string;
  emailIssuedAt?: string;
  emailIssuedAtISO?: string;
  emailTo?: string;
  emailSubject?: string;
  emailBody?: string;
  emailStatus?: 'not_sent' | 'issued' | 'draft_opened';
  emailProvider?: string;
  emailMessageId?: string;
  emailRecipients?: string[];
  emailLastStatus?: 'sent' | 'mock' | 'failed';
  emailLastError?: string;
  agreementVersion?: string;
  agreementHash?: string;
  supersedesAgreementHash?: string;
};

export type ScheduleRequest = {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  installStreet1: string;
  installStreet2?: string;
  installCity: string;
  installState: string;
  installZip: string;
  preferredDate1: string;
  preferredTimeWindow1: string;
  preferredDate2?: string;
  preferredTimeWindow2?: string;
  accessNotes?: string;
  requestedAt: string;
  scheduleStatus: 'requested';
  scheduleSource: 'retail';
};

export type FlowStep = 'learn' | 'select' | 'quote' | 'agreement' | 'payment' | 'schedule';

export type RetailFlowState = {
  quote?: QuoteContext;
  agreementAcceptance?: AcceptanceRecord;
  payment?: { depositStatus?: PaymentStatus };
  scheduleRequest?: ScheduleRequest;
  currentStep?: FlowStep;
  guidedMode?: boolean;
  homeSecurity?: HomeSecurityFunnelState;
};

export const FLOW_STORAGE_KEY = 'kaecRetailFlow';

export const loadRetailFlow = (): RetailFlowState => {
  try {
    const stored = localStorage.getItem(FLOW_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as RetailFlowState) : {};
  } catch (error) {
    console.error('Error loading retail flow state', error);
    return {};
  }
};

export const saveRetailFlow = (next: RetailFlowState) => {
  localStorage.setItem(FLOW_STORAGE_KEY, JSON.stringify(next));
  return next;
};

export const updateRetailFlow = (patch: Partial<RetailFlowState>) => {
  const current = loadRetailFlow();
  const merged: RetailFlowState = {
    ...current,
    ...patch,
    quote: patch.quote ?? current.quote,
    agreementAcceptance: patch.agreementAcceptance
      ? { ...current.agreementAcceptance, ...patch.agreementAcceptance }
      : current.agreementAcceptance,
    payment: patch.payment ? { ...current.payment, ...patch.payment } : current.payment,
    scheduleRequest: patch.scheduleRequest ?? current.scheduleRequest,
    homeSecurity: patch.homeSecurity ? { ...current.homeSecurity, ...patch.homeSecurity } : current.homeSecurity,
  };
  return saveRetailFlow(merged);
};

export const markFlowStep = (step: FlowStep) => {
  return updateRetailFlow({ currentStep: step });
};

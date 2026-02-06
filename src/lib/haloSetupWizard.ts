export type ContactEntry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  isMobile: boolean;
  role: ContactRole;
  notificationProfile: NotificationProfile;
  carrier: CarrierOption;
};

export type ContactRole = 'Family' | 'Caregiver' | 'Medical Assistant' | 'Neighbor' | 'Other';

export type NotificationProfile = 'Informative' | 'Detailed';

export type CarrierOption = 'Unknown' | 'AT&T' | 'Verizon' | 'T-Mobile' | 'Other';

export type NotificationPreferences = {
  sms: boolean;
  email: boolean;
  push: boolean;
};

export type AddOnSelections = {
  wristWearable: boolean;
  wallButton: boolean;
};

export type TestStatus = 'unchecked' | 'pass' | 'fail';

export type TestResult = {
  status: TestStatus;
  timestamp?: string;
};

export type TestResults = {
  baseUnitHelp: TestResult;
  pendantHelp: TestResult;
  smsDelivery: TestResult;
  emailDelivery: TestResult;
  pushDelivery: TestResult;
  wristTrigger: TestResult;
  wallButton: TestResult;
  twoWayVoice: TestResult;
};

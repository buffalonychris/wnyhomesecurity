type DepositStatus = 'pending' | 'completed';

export type DepositRecord = {
  quoteRef: string;
  status: DepositStatus;
  sessionId?: string;
  amountCents?: number;
  totalCents?: number;
  updatedAt: string;
};

type GlobalStore = {
  __WNYHS_DEPOSIT_STORE__?: Map<string, DepositRecord>;
};

const getStore = () => {
  const globalStore = globalThis as GlobalStore;
  if (!globalStore.__WNYHS_DEPOSIT_STORE__) {
    globalStore.__WNYHS_DEPOSIT_STORE__ = new Map<string, DepositRecord>();
  }
  return globalStore.__WNYHS_DEPOSIT_STORE__;
};

export const recordDepositStatus = (record: DepositRecord) => {
  const store = getStore();
  store.set(record.quoteRef, record);
  return record;
};

export const getDepositStatus = (quoteRef: string) => {
  const store = getStore();
  return store.get(quoteRef) ?? null;
};

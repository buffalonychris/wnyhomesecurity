import { DepositPolicy } from '../config/site';

export const calculateDepositDue = (total: number, depositPolicy: DepositPolicy) => {
  if (depositPolicy.type === 'flat') {
    return Math.min(total, depositPolicy.value);
  }
  return Math.min(total, Math.round(total * depositPolicy.value * 100) / 100);
};

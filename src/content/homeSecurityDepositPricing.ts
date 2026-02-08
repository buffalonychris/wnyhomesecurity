export type HomeSecurityDepositTier = 'bronze' | 'silver' | 'gold';

export const HOME_SECURITY_DEPOSIT_TOTAL_CENTS: Record<HomeSecurityDepositTier, number> = {
  bronze: 169900,
  silver: 259900,
  gold: 349900,
};

export const HOME_SECURITY_DEPOSIT_LABELS: Record<HomeSecurityDepositTier, string> = {
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Gold',
};

export const HOME_SECURITY_DEPOSIT_TAGLINES: Record<HomeSecurityDepositTier, string> = {
  bronze: 'Starter Security & Awareness',
  silver: 'Whole-Home Coverage (Recommended)',
  gold: 'Local Recording + Highest Coverage',
};

export type HomeSecurityTier = 'bronze' | 'silver' | 'gold';

export const HOME_SECURITY_TOTAL_CENTS: Record<HomeSecurityTier, number> = {
  bronze: 169900,
  silver: 259900,
  gold: 349900,
};

export const getHomeSecurityTierLabel = (tier: HomeSecurityTier) =>
  tier.charAt(0).toUpperCase() + tier.slice(1);

export const isHomeSecurityTier = (value: unknown): value is HomeSecurityTier =>
  value === 'bronze' || value === 'silver' || value === 'gold';

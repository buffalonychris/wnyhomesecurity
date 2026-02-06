export type VerticalKey = 'elder-tech' | 'home-security';

export const DEFAULT_VERTICAL: VerticalKey = 'elder-tech';

export const resolveVertical = (value?: string | null): VerticalKey =>
  value === 'home-security' ? 'home-security' : DEFAULT_VERTICAL;

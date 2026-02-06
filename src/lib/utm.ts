export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_path: string;
  timestamp: string;
};

const STORAGE_KEY = 'rec_utm_params';
const utmKeys: (keyof Omit<UtmParams, 'landing_path' | 'timestamp'>)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
];

export const getPreferredStorage = (): Storage | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch (error) {
    console.warn('Session storage unavailable, falling back to localStorage', error);
  }

  try {
    return window.localStorage;
  } catch (error) {
    console.warn('Local storage unavailable', error);
  }

  return null;
};

const readFromStorage = (storage: Storage | null) => {
  if (!storage) return null;
  const existing = storage.getItem(STORAGE_KEY);
  if (!existing) return null;

  try {
    return JSON.parse(existing) as UtmParams;
  } catch (error) {
    console.warn('Unable to parse stored UTM params', error);
    return null;
  }
};

const writeToStorage = (storage: Storage | null, payload: UtmParams) => {
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('Unable to store UTM params', error);
  }
};

export const captureUtmParams = (location: { search: string; pathname: string }): UtmParams | null => {
  const storage = getPreferredStorage();
  const existing = readFromStorage(storage);
  if (existing) {
    return existing;
  }

  const searchParams = new URLSearchParams(location.search);
  const params: UtmParams = {
    landing_path: location.pathname,
    timestamp: new Date().toISOString(),
  };

  utmKeys.forEach((key) => {
    const value = searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });

  writeToStorage(storage, params);
  return params;
};

export const getStoredUtmParams = (): UtmParams | null => {
  const storage = getPreferredStorage();
  return readFromStorage(storage);
};

export const getLandingPath = (): string | undefined => {
  const stored = getStoredUtmParams();
  return stored?.landing_path;
};

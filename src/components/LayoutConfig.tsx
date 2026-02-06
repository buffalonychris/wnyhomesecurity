import { createContext, useContext, useEffect, useMemo } from 'react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type LayoutVariant = 'sitewide' | 'funnel';

export type LayoutConfig = {
  layoutVariant: LayoutVariant;
  showBreadcrumbs?: boolean;
  breadcrumb?: BreadcrumbItem[];
};

type LayoutConfigContextValue = {
  layoutConfig: LayoutConfig;
  setLayoutConfig: (config: LayoutConfig) => void;
};

export const defaultLayoutConfig: LayoutConfig = {
  layoutVariant: 'sitewide',
  showBreadcrumbs: false,
  breadcrumb: [],
};

export const LayoutConfigContext = createContext<LayoutConfigContextValue | undefined>(undefined);

export const useLayoutConfig = (config: LayoutConfig) => {
  const context = useContext(LayoutConfigContext);

  if (!context) {
    throw new Error('useLayoutConfig must be used within a LayoutConfigContext provider.');
  }

  const breadcrumbKey = useMemo(() => JSON.stringify(config.breadcrumb ?? []), [config.breadcrumb]);

  useEffect(() => {
    context.setLayoutConfig({
      ...defaultLayoutConfig,
      ...config,
      breadcrumb: config.breadcrumb ?? [],
    });
  }, [breadcrumbKey, config.layoutVariant, config.showBreadcrumbs, context]);

  useEffect(() => {
    return () => {
      context.setLayoutConfig(defaultLayoutConfig);
    };
  }, [context]);
};

export const useLayoutConfigContext = () => {
  const context = useContext(LayoutConfigContext);

  if (!context) {
    throw new Error('useLayoutConfigContext must be used within a LayoutConfigContext provider.');
  }

  return context;
};

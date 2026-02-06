import '@testing-library/jest-dom/vitest';

if (!('ResizeObserver' in globalThis)) {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(globalThis, 'ResizeObserver', {
    value: ResizeObserver,
    writable: true,
    configurable: true,
  });
}

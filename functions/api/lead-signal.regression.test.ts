import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { onRequest } from './lead-signal';

describe('lead-signal import/build regression guard', () => {
  it('exports onRequest handler (build/import smoke)', () => {
    expect(typeof onRequest).toBe('function');
  });

  it('retains required normalization/helper imports', () => {
    const source = readFileSync(resolve(__dirname, 'lead-signal.ts'), 'utf8');
    expect(source).toContain('normalizeVerticalInterest');
    expect(source).toContain('normalizeWalkthroughInterest');
    expect(source).toContain("from './hubspotSyncHelpers'");
  });
});

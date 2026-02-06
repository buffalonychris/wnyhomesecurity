import { describe, expect, it } from 'vitest';
import { buildHomeSecurityPlannerPlan } from '../homeSecurityPlannerEngine';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.join(__dirname, '..', 'fixtures', 'security', 'generated', 'security.v1');

const loadFixtures = () => {
  if (!fs.existsSync(fixturesDir)) {
    throw new Error('Fixtures missing. Run: npm run fixtures:security');
  }

  const fixtureFiles = fs
    .readdirSync(fixturesDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => path.join(fixturesDir, file));

  if (fixtureFiles.length === 0) {
    throw new Error('Fixtures missing. Run: npm run fixtures:security');
  }

  return fixtureFiles.map((filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8')));
};

describe('homeSecurityPlannerFixtures.v1', () => {
  const fixtures = loadFixtures();

  it('loads at least 120 fixtures', () => {
    expect(fixtures.length).toBeGreaterThanOrEqual(120);
  });

  it('matches planner expectations', () => {
    fixtures.forEach((fixture, index) => {
      const plan = buildHomeSecurityPlannerPlan(fixture.draft, fixture.selectedTier);
      expect(plan.coverage.status).toBe(fixture.expect.status);

      const placementMap = new Map();
      [...plan.placements, ...plan.optionalAddons].forEach((item) => {
        placementMap.set(item.key, item);
      });

      fixture.expect.mustHaveKeys.forEach((key) => {
        const placement = placementMap.get(key);
        expect(placement?.quantity ?? 0).toBeGreaterThan(0);
        if (key === 'doorbell_wifi') {
          expect(plan.placements.find((item) => item.key === key)?.required).toBe(true);
        }
        if (key === 'contact_sensor' && fixture.draft.exteriorDoors.length > 0) {
          expect(plan.placements.find((item) => item.key === key)?.required).toBe(true);
        }
      });

      fixture.expect.mustNotHaveKeys.forEach((key) => {
        const placement = placementMap.get(key);
        expect(placement?.quantity ?? 0).toBe(0);
      });

      expect(plan.coverage.gaps.length).toBe(fixture.expect.gaps.length);
      fixture.expect.gaps.forEach((gap) => {
        const planGap = plan.coverage.gaps.find((item) => item.key === gap.key);
        expect(planGap?.missing).toBe(gap.missing);
      });

      fixture.expect.notesMustContain.forEach((note) => {
        const planText = JSON.stringify(plan);
        expect(planText).toContain(note);
      });

      fixture.expect.forbiddenPhrases.forEach((phrase) => {
        const planText = JSON.stringify(plan).toLowerCase();
        expect(planText).not.toContain(phrase.toLowerCase());
      });

      const bundleStatus = Object.fromEntries(plan.bundles.map((bundle) => [bundle.tier, bundle.coverage_status]));
      expect(bundleStatus).toEqual(fixture.expect.bundleStatus);

      if (index < 12) {
        expect(plan).toMatchSnapshot();
      }
    });
  });
});

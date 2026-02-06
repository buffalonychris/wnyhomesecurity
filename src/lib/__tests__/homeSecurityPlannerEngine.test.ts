import { describe, expect, it } from 'vitest';
import { buildHomeSecurityPlannerPlan } from '../homeSecurityPlannerEngine';

describe('homeSecurityPlannerEngine', () => {
  it('flags exterior door gaps when door count exceeds tier quantity', () => {
    const plan = buildHomeSecurityPlannerPlan(
      {
        exteriorDoors: ['Front', 'Back', 'Garage', 'Side', 'Patio'],
        sizeBand: 'small',
        floors: 1,
      },
      'bronze',
    );

    expect(plan.coverage.status).toBe('gap');
    expect(plan.coverage.gaps[0]).toEqual(
      expect.objectContaining({
        key: 'contact_sensor',
        missing: 1,
      }),
    );
  });

  it('adds optional motion sensors when recommendations exceed tier quantity', () => {
    const plan = buildHomeSecurityPlannerPlan(
      {
        exteriorDoors: ['Front', 'Back'],
        sizeBand: 'large',
        floors: 2,
      },
      'silver',
    );

    expect(plan.coverage.status).toBe('complete_with_addons');
    const addon = plan.optionalAddons.find((item) => item.key === 'motion_sensor');
    expect(addon?.quantity).toBe(2);
  });
});

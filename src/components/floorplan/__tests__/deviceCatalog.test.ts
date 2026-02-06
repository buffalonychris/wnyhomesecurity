import { describe, expect, it } from 'vitest';
import { DEVICE_ICON_TONES } from '../deviceCatalog';

describe('device icon tones', () => {
  it('uses the expected leak sensor color', () => {
    expect(DEVICE_ICON_TONES.leak_sensor.color).toBe('#4fa7ff');
  });

  it('uses a gradient for the siren/chime accent', () => {
    expect(DEVICE_ICON_TONES.siren_chime.background).toContain('linear-gradient');
  });
});

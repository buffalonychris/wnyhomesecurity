import { haloContent } from './haloContent';

type EnvValue = string | boolean | undefined;

type FeatureFlags = {
  enableSms: boolean;
  enableEmail: boolean;
  enablePush: boolean;
  enableTwoWayVoiceClaim: boolean;
  enablePayments: boolean;
};

const readEnvFlag = (key: string): boolean | undefined => {
  const env = import.meta.env as Record<string, EnvValue>;
  const raw = env[key];
  if (raw === undefined) {
    return undefined;
  }
  if (typeof raw === 'boolean') {
    return raw;
  }
  return raw.toLowerCase() === 'true';
};

export const getHaloFeatureFlags = (): FeatureFlags => {
  const jsonFlags = haloContent.feature_flags ?? {};

  return {
    enableSms: readEnvFlag('RECHALO_ENABLE_SMS') ?? jsonFlags.enable_sms ?? false,
    enableEmail: readEnvFlag('RECHALO_ENABLE_EMAIL') ?? jsonFlags.enable_email ?? false,
    enablePush: readEnvFlag('RECHALO_ENABLE_PUSH') ?? jsonFlags.enable_push ?? false,
    enableTwoWayVoiceClaim:
      readEnvFlag('RECHALO_ENABLE_TWO_WAY_VOICE_CLAIM') ??
      jsonFlags.enable_two_way_voice_claim ??
      false,
    enablePayments: readEnvFlag('RECHALO_ENABLE_PAYMENTS') ?? jsonFlags.enable_payments ?? false,
  };
};

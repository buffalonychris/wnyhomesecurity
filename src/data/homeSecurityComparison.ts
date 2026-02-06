import { PackageTierId } from './pricing';
import { HOME_SECURITY_PACKAGE_SPECS } from '../content/homeSecurityPackageData';

const tiersByPackageId = {
  A1: HOME_SECURITY_PACKAGE_SPECS.a1,
  A2: HOME_SECURITY_PACKAGE_SPECS.a2,
  A3: HOME_SECURITY_PACKAGE_SPECS.a3,
};

export type HomeSecurityComparisonRow = {
  feature: string;
  values: Record<PackageTierId, string>;
};

export const homeSecurityComparisonRows: HomeSecurityComparisonRow[] = [
  {
    feature: 'Local-first operation (LAN required)',
    values: { A1: '✅', A2: '✅', A3: '✅' },
  },
  {
    feature: 'Typical coverage',
    values: {
      A1: tiersByPackageId.A1.coverage,
      A2: tiersByPackageId.A2.coverage,
      A3: tiersByPackageId.A3.coverage,
    },
  },
  {
    feature: 'One dashboard for arming + alerts',
    values: { A1: '✅', A2: '✅', A3: '✅' },
  },
  {
    feature: 'Recording',
    values: {
      A1: tiersByPackageId.A1.hardware.recordingLabel,
      A2: tiersByPackageId.A2.hardware.recordingLabel,
      A3: tiersByPackageId.A3.hardware.recordingLabel,
    },
  },
  {
    feature: 'Video doorbell',
    values: {
      A1: `${tiersByPackageId.A1.hardware.videoDoorbell}`,
      A2: `${tiersByPackageId.A2.hardware.videoDoorbell}`,
      A3: `${tiersByPackageId.A3.hardware.videoDoorbell}`,
    },
  },
  {
    feature: 'Indoor cameras',
    values: {
      A1: `${tiersByPackageId.A1.hardware.indoorCameras}`,
      A2: `${tiersByPackageId.A2.hardware.indoorCameras}`,
      A3: `${tiersByPackageId.A3.hardware.indoorCameras}`,
    },
  },
  {
    feature: 'Outdoor PoE cameras',
    values: {
      A1: `${tiersByPackageId.A1.hardware.outdoorPoECameras}`,
      A2: `${tiersByPackageId.A2.hardware.outdoorPoECameras}`,
      A3: `${tiersByPackageId.A3.hardware.outdoorPoECameras}`,
    },
  },
  {
    feature: 'Door/Window sensors',
    values: {
      A1: `${tiersByPackageId.A1.hardware.doorWindowSensors}`,
      A2: `${tiersByPackageId.A2.hardware.doorWindowSensors}`,
      A3: `${tiersByPackageId.A3.hardware.doorWindowSensors}`,
    },
  },
  {
    feature: 'Motion sensors',
    values: {
      A1: `${tiersByPackageId.A1.hardware.motionSensors}`,
      A2: `${tiersByPackageId.A2.hardware.motionSensors}`,
      A3: `${tiersByPackageId.A3.hardware.motionSensors}`,
    },
  },
  {
    feature: 'Leak/Smoke sensors',
    values: {
      A1: `${tiersByPackageId.A1.hardware.leakSmokeSensors}`,
      A2: `${tiersByPackageId.A2.hardware.leakSmokeSensors}`,
      A3: `${tiersByPackageId.A3.hardware.leakSmokeSensors}`,
    },
  },
  {
    feature: 'Local siren/chime',
    values: { A1: '✅', A2: '✅', A3: '✅' },
  },
  {
    feature: 'Expandable for future coverage',
    values: { A1: '✅', A2: '✅', A3: '✅' },
  },
];

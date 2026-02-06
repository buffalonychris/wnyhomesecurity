import type { FC, SVGProps } from 'react';
import {
  DoorSensorIcon,
  GlassBreakSensorIcon,
  IndoorCameraIcon,
  LeakSensorIcon,
  MotionSensorIcon,
  OutdoorCameraPoeIcon,
  RecordingHostIcon,
  SecurityHubIcon,
  SirenChimeIcon,
  VideoDoorbellIcon,
  WindowSensorIcon,
} from './icons';

export type FloorplanDeviceType =
  | 'door_sensor'
  | 'window_sensor'
  | 'glass_break_sensor'
  | 'motion_sensor'
  | 'indoor_camera'
  | 'video_doorbell'
  | 'outdoor_camera_poe'
  | 'leak_sensor'
  | 'siren_chime'
  | 'security_hub'
  | 'recording_host';

export type FloorplanDeviceCategory = 'entry' | 'interior' | 'video' | 'safety' | 'infrastructure';

export type FloorplanCatalogItem = {
  type: FloorplanDeviceType;
  label: string;
  category: FloorplanDeviceCategory;
  icon: FC<SVGProps<SVGSVGElement>>;
  wallAnchored: boolean;
  showsCone?: boolean;
};

export type DeviceIconTone = {
  color: string;
  background: string;
  glow?: string;
};

const WALL_ANCHORED_DEVICE_KEYS: readonly FloorplanDeviceType[] = [
  'door_sensor',
  'window_sensor',
  'video_doorbell',
  'outdoor_camera_poe',
  'siren_chime',
] as const;

const ROTATABLE_DEVICE_KEYS: readonly FloorplanDeviceType[] = [
  'indoor_camera',
  'video_doorbell',
  'outdoor_camera_poe',
] as const;

export const isWallAnchored = (deviceType: FloorplanDeviceType): boolean => {
  return WALL_ANCHORED_DEVICE_KEYS.includes(deviceType);
};

export const isRotatableDevice = (deviceType: FloorplanDeviceType): boolean => {
  return ROTATABLE_DEVICE_KEYS.includes(deviceType);
};

export const DEVICE_KEYS = [
  'door_sensor',
  'window_sensor',
  'glass_break_sensor',
  'motion_sensor',
  'indoor_camera',
  'video_doorbell',
  'outdoor_camera_poe',
  'leak_sensor',
  'siren_chime',
  'security_hub',
  'recording_host',
] as const satisfies readonly FloorplanDeviceType[];

export const DEVICE_CATALOG: Record<FloorplanDeviceType, FloorplanCatalogItem> = {
  door_sensor: {
    type: 'door_sensor',
    label: 'Door Sensor',
    category: 'entry',
    icon: DoorSensorIcon,
    wallAnchored: isWallAnchored('door_sensor'),
  },
  window_sensor: {
    type: 'window_sensor',
    label: 'Window Sensor',
    category: 'entry',
    icon: WindowSensorIcon,
    wallAnchored: isWallAnchored('window_sensor'),
  },
  glass_break_sensor: {
    type: 'glass_break_sensor',
    label: 'Glass Break Sensor',
    category: 'interior',
    icon: GlassBreakSensorIcon,
    wallAnchored: false,
  },
  motion_sensor: {
    type: 'motion_sensor',
    label: 'Motion Sensor',
    category: 'interior',
    icon: MotionSensorIcon,
    wallAnchored: false,
  },
  indoor_camera: {
    type: 'indoor_camera',
    label: 'Indoor Camera',
    category: 'video',
    icon: IndoorCameraIcon,
    wallAnchored: false,
    showsCone: true,
  },
  video_doorbell: {
    type: 'video_doorbell',
    label: 'Video Doorbell',
    category: 'video',
    icon: VideoDoorbellIcon,
    wallAnchored: isWallAnchored('video_doorbell'),
    showsCone: true,
  },
  outdoor_camera_poe: {
    type: 'outdoor_camera_poe',
    label: 'Outdoor Camera (PoE)',
    category: 'video',
    icon: OutdoorCameraPoeIcon,
    wallAnchored: isWallAnchored('outdoor_camera_poe'),
    showsCone: true,
  },
  leak_sensor: {
    type: 'leak_sensor',
    label: 'Leak Sensor',
    category: 'safety',
    icon: LeakSensorIcon,
    wallAnchored: false,
  },
  siren_chime: {
    type: 'siren_chime',
    label: 'Siren / Chime',
    category: 'safety',
    icon: SirenChimeIcon,
    wallAnchored: isWallAnchored('siren_chime'),
  },
  security_hub: {
    type: 'security_hub',
    label: 'Security Hub',
    category: 'infrastructure',
    icon: SecurityHubIcon,
    wallAnchored: false,
  },
  recording_host: {
    type: 'recording_host',
    label: 'Recording Host',
    category: 'infrastructure',
    icon: RecordingHostIcon,
    wallAnchored: false,
  },
};

export const DEVICE_ICON_TONES: Record<FloorplanDeviceType, DeviceIconTone> = {
  door_sensor: {
    color: '#7fd3ff',
    background: 'rgba(127, 211, 255, 0.18)',
  },
  window_sensor: {
    color: '#8ad7c4',
    background: 'rgba(138, 215, 196, 0.18)',
  },
  glass_break_sensor: {
    color: '#ff8a6b',
    background: 'rgba(255, 138, 107, 0.18)',
  },
  motion_sensor: {
    color: '#ffd166',
    background: 'rgba(255, 209, 102, 0.2)',
  },
  indoor_camera: {
    color: '#c6cbd6',
    background: 'rgba(198, 203, 214, 0.18)',
  },
  video_doorbell: {
    color: '#b8c7d9',
    background: 'rgba(184, 199, 217, 0.18)',
  },
  outdoor_camera_poe: {
    color: '#b4bac7',
    background: 'rgba(180, 186, 199, 0.18)',
  },
  leak_sensor: {
    color: '#4fa7ff',
    background: 'rgba(79, 167, 255, 0.2)',
  },
  siren_chime: {
    color: '#f7fbff',
    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.95), rgba(108, 246, 255, 0.95))',
    glow: '0 0 10px rgba(255, 107, 107, 0.35), 0 0 12px rgba(108, 246, 255, 0.35)',
  },
  security_hub: {
    color: '#9aa6ff',
    background: 'rgba(154, 166, 255, 0.2)',
  },
  recording_host: {
    color: '#b2a5ff',
    background: 'rgba(178, 165, 255, 0.2)',
  },
};

export const isFloorplanDeviceType = (value: string): value is FloorplanDeviceType => {
  return (DEVICE_KEYS as readonly string[]).includes(value);
};

import type { SVGProps } from 'react';

const baseStroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const DoorSensorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="5" y="3" width="10" height="18" rx="1.5" {...baseStroke} />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    <rect x="18" y="8" width="2" height="8" rx="1" {...baseStroke} />
  </svg>
);

export const WindowSensorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="4" y="5" width="16" height="14" rx="1.5" {...baseStroke} />
    <path d="M12 5v14M4 12h16" {...baseStroke} />
    <rect x="20.5" y="9" width="1.5" height="6" rx="0.7" {...baseStroke} />
  </svg>
);

export const GlassBreakSensorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="5" y="4" width="14" height="16" rx="2" {...baseStroke} />
    <path d="M9 8l2 2-3 3 2 2m5-7-2 2 3 3-2 2" {...baseStroke} />
  </svg>
);

export const MotionSensorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="8" y="5" width="8" height="14" rx="3" {...baseStroke} />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    <path d="M4 8c1.8 1.2 1.8 6 0 7.2M20 8c-1.8 1.2-1.8 6 0 7.2" {...baseStroke} />
  </svg>
);

export const IndoorCameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="6" y="6" width="12" height="8" rx="2" {...baseStroke} />
    <circle cx="12" cy="10" r="2" {...baseStroke} />
    <path d="M9 16h6" {...baseStroke} />
    <path d="M8 18h8" {...baseStroke} />
  </svg>
);

export const VideoDoorbellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="8" y="3" width="8" height="18" rx="3" {...baseStroke} />
    <circle cx="12" cy="13" r="1.8" {...baseStroke} />
    <circle cx="12" cy="8" r="0.8" fill="currentColor" />
  </svg>
);

export const OutdoorCameraPoeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="6" y="7" width="10" height="6" rx="2" {...baseStroke} />
    <circle cx="11" cy="10" r="2" {...baseStroke} />
    <path d="M16 9l4 2-4 2" {...baseStroke} />
    <path d="M9 15h4" {...baseStroke} />
  </svg>
);

export const LeakSensorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 4c3 4 5 6.5 5 9a5 5 0 1 1-10 0c0-2.5 2-5 5-9z" {...baseStroke} />
  </svg>
);

export const SirenChimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="7" y="5" width="10" height="12" rx="2" {...baseStroke} />
    <path d="M9 9h6M9 12h6" {...baseStroke} />
    <path d="M5 7c-1 1.2-1 6.6 0 7.8M19 7c1 1.2 1 6.6 0 7.8" {...baseStroke} />
  </svg>
);

export const SecurityHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" {...baseStroke} />
    <circle cx="12" cy="12" r="2" {...baseStroke} />
  </svg>
);

export const RecordingHostIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="5" y="4" width="14" height="6" rx="1.5" {...baseStroke} />
    <rect x="5" y="10" width="14" height="6" rx="1.5" {...baseStroke} />
    <rect x="5" y="16" width="14" height="4" rx="1.5" {...baseStroke} />
    <circle cx="8" cy="7" r="0.8" fill="currentColor" />
    <circle cx="8" cy="13" r="0.8" fill="currentColor" />
  </svg>
);

export type AutomationPlaybook = {
  title: string;
  purpose: string;
  trigger: string;
  actions: string[];
  handoff: string;
};

export const automationPlaybooks: Record<string, AutomationPlaybook[]> = {
  homeSecurity: [
    {
      title: 'Entry lighting assurance',
      purpose: 'Provide immediate visibility and deterrence without relying on cloud services.',
      trigger: 'Door contact opens after-hours or when the home is armed.',
      actions: [
        'Turn on entry and hallway lights locally.',
        'Log the event in Home Assistant with timestamp and zone.',
        'Notify household contacts with entry location and time.',
      ],
      handoff: 'Household reviews the alert and confirms status in the dashboard.',
    },
    {
      title: 'Perimeter breach response',
      purpose: 'Coordinate lights, siren, and camera capture for verified entry events.',
      trigger: 'Door contact + motion verified within a short window.',
      actions: [
        'Activate exterior lighting and local siren on a timed loop.',
        'Store a local clip or snapshot if video is available.',
        'Notify household contacts with the verified zone.',
      ],
      handoff: 'Household decides next steps; optional third-party monitoring can be engaged directly.',
    },
    {
      title: 'Environmental hazard response',
      purpose: 'Detect leaks or smoke/CO and respond locally for faster awareness.',
      trigger: 'Leak sensor, smoke/CO listener, or temperature threshold alert.',
      actions: [
        'Trigger local siren and interior lighting for visibility.',
        'Notify household contacts with location details.',
        'Log the event to Home Assistant for review.',
      ],
      handoff: 'Household confirms resolution and documents the outcome in the dashboard.',
    },
    {
      title: 'System health assurance',
      purpose: 'Verify that sensors, cameras, and power backups stay online.',
      trigger: 'Daily scheduled health check or device heartbeat failure.',
      actions: [
        'Run device heartbeat checks locally.',
        'Notify household contacts if a device is offline.',
        'Queue a service reminder when repeated failures occur.',
      ],
      handoff: 'Schedule service or replace hardware based on the local health report.',
    },
  ],
  homeAutomation: [
    {
      title: 'Presence-aware morning flow',
      purpose: 'Use local presence detection to start the day with consistent comfort and lighting.',
      trigger: 'First occupied room detected during the configured wake window.',
      actions: [
        'Ramp bedroom and hallway lights to a warm, low-glare level.',
        'Set climate to the morning comfort range locally.',
        'Start a kitchen scene that powers coffee or task lighting on schedule.',
      ],
      handoff: 'Home Assistant logs the routine locally for homeowner review.',
    },
    {
      title: 'Adaptive evening lighting',
      purpose: 'Keep evening lighting consistent and calm while honoring manual overrides.',
      trigger: 'Sunset window or a scene button tap.',
      actions: [
        'Dim living areas while keeping hallway and bath lighting visible.',
        'Shift color temperature warmer based on ambient light sensors.',
        'Confirm the home is in the desired night scene locally.',
      ],
      handoff: 'Household can override lighting at any switch without breaking schedules.',
    },
    {
      title: 'Multi-zone comfort orchestration',
      purpose: 'Coordinate rooms and specialty spaces with locally executed rules.',
      trigger: 'Scheduled comfort blocks, room occupancy, or manual scene selection.',
      actions: [
        'Balance temperature targets per zone based on room usage.',
        'Adjust lighting scenes across adjacent rooms for consistent transitions.',
        'Apply resilience rules for power return so key scenes resume safely.',
      ],
      handoff: 'Advanced rules remain editable by the homeowner inside Home Assistant.',
    },
  ],
  elderCare: [
    {
      title: 'Night pathway safety',
      purpose: 'Reduce fall risk at night with low-glare lighting that runs locally.',
      trigger: 'Bedside motion detected during overnight hours.',
      actions: [
        'Turn on pathway lighting at a low, warm brightness.',
        'Log the event locally in Home Assistant for caregiver review.',
        'Send a gentle notification to caregiver contacts if preferred.',
      ],
      handoff: 'Resident or caregiver confirms comfort; no cloud services required.',
    },
    {
      title: 'Missed-activity awareness',
      purpose: 'Offer a dignity-first check-in when expected activity is missing.',
      trigger: 'No motion detected during the configured morning routine window.',
      actions: [
        'Play a local chime or voice prompt as a check-in.',
        'Notify primary caregiver contacts with context only (no audio/video).',
        'Log the event to Home Assistant for pattern review.',
      ],
      handoff: 'Caregiver decides whether to call or visit; no automatic emergency dispatch.',
    },
    {
      title: 'Routine deviation & door awareness',
      purpose: 'Highlight unusual exits or schedule shifts with privacy-first signals.',
      trigger: 'Door contact opens outside the normal routine window.',
      actions: [
        'Trigger a quiet local chime and hallway lighting cue.',
        'Send a caregiver alert noting the door and time.',
        'Log the event locally for review in the dashboard.',
      ],
      handoff: 'Caregiver acknowledges the alert and updates the routine preferences if needed.',
    },
    {
      title: 'Multi-signal escalation',
      purpose: 'Escalate only when multiple local signals indicate concern.',
      trigger: 'Combined signals: missed-activity + door alert or hazard sensor event.',
      actions: [
        'Notify primary caregivers with a concise summary.',
        'Escalate to secondary contacts if unacknowledged.',
        'Record the escalation ladder locally in Home Assistant.',
      ],
      handoff: 'Caregiver confirms the outcome; optional third-party services can be engaged directly if desired.',
    },
  ],
};

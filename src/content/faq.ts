export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'Do you sell subscriptions or monitoring plans?',
    answer:
      'No. Packages are one-time purchases. Optional third-party services (monitoring or nursing programs) can be contracted directly by the customer.',
  },
  {
    question: 'Is Elder Tech medical monitoring or a diagnosis?',
    answer:
      'No. Elder Tech is non-medical, support-focused home technology. It does not provide diagnosis, medical monitoring, or collect PHI.',
  },
  {
    question: 'Are cameras required?',
    answer:
      'No. Cameras are optional and off by default. Sensor-first signals (motion, door, hazard) are the standard, and any camera use requires explicit consent.',
  },
  {
    question: 'What happens if the internet goes out?',
    answer:
      'Offline Dignity Rule: lighting cues, sensor triggers, and local alerts continue on-site as long as equipment has power. Remote access may pause, but local safety behaviors remain on the LAN.',
  },
  {
    question: 'Which app do I use?',
    answer:
      'Home Assistant is the single control platform. We configure one dashboard for the household and the roles you authorize.',
  },
  {
    question: 'Who owns the equipment and data?',
    answer:
      'You do. The hardware, automations, and local data belong to the customer, and access is controlled by the homeowner.',
  },
  {
    question: 'How is consent and dignity handled?',
    answer:
      'We document resident consent and configure role-based access so caregivers only see what is necessary. Alerts and summaries are privacy-first.',
  },
  {
    question: 'Can I add on to a package later?',
    answer:
      'Yes. You can extend sensors, lighting cues, and caregiver summaries over time while keeping Home Assistant as the hub.',
  },
  {
    question: 'How do you keep the system privacy-first?',
    answer:
      'Core functions stay local. Automation logic runs on-site, and cloud services are optional rather than required.',
  },
  {
    question: 'Do you support wireless-first devices?',
    answer:
      'Yes. Home Security and Elder Tech tiers prioritize wireless-first sensors and controllers that stay local and integrate with Home Assistant.',
  },
  {
    question: 'How do you secure remote access?',
    answer:
      'Remote access is optional and requires internet. We configure secure options that keep Home Assistant as the control plane, while local control stays available on the LAN.',
  },
];

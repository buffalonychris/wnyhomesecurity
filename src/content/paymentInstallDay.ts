export type PaymentInstallDaySection = {
  title: string;
  items: string[];
};

export const paymentInstallDaySections: PaymentInstallDaySection[] = [
  {
    title: 'How the deposit works',
    items: [
      'Deposit due today: 50% of the system cost.',
      'Deposit is applied to your total project cost.',
    ],
  },
  {
    title: 'When the remaining balance is due',
    items: [
      'Remaining balance due on installation day.',
      'This avoids authorization or credit-limit issues after work is complete and keeps install day on schedule.',
    ],
  },
  {
    title: 'Accepted payment methods',
    items: [
      'Stripe (card, Apple Pay, Google Pay).',
      'Cash App and Venmo are available as alternate options when needed.',
    ],
  },
  {
    title: 'What happens on install day',
    items: [
      'Tech arrives for a quick walkthrough and confirmation.',
      'Remaining balance is collected, then installation begins.',
      'If scope changes on-site, we confirm your approval before proceeding.',
    ],
  },
  {
    title: 'Offline-first & privacy (what to expect)',
    items: [
      'Core system functions work on your LAN even if the internet is down.',
      'Remote access and notifications require internet.',
      'No subscriptions sold by us; any optional third-party services connect directly to you.',
    ],
  },
];

export const paymentTodayChecklist = [
  'Deposit today',
  'Install date reserved',
  'Remainder collected on arrival',
  'No surprises walkthrough before work begins',
];

export const supportContact = {
  email: 'admin@reliableeldercare.com',
  phone: '716.391.2405',
  location: 'West Seneca, NY 14224',
};

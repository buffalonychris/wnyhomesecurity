export type BetaDestinationKind =
  "homepage-anchor" | "protected-legacy-route" | "future-approved-route";

export type BetaNavigationItem = {
  label: string;
  description?: string;
  href?: string;
  kind: BetaDestinationKind;
};

export const assessmentHref = "/discovery?vertical=home-security";
export const solutionsOverviewHref = "/beta/solutions";

export const betaPrimaryNavigation: BetaNavigationItem[] = [
  { label: "Why W. N. Y.", href: "/beta#why-wny", kind: "homepage-anchor" },
  {
    label: "How It Works",
    href: "/beta#how-it-works",
    kind: "homepage-anchor",
  },
  { label: "Learn", href: "/beta#education", kind: "homepage-anchor" },
  { label: "Support", href: "/support", kind: "protected-legacy-route" },
];

export const betaSolutionNavigation: BetaNavigationItem[] = [
  {
    label: "Home Security",
    description:
      "Bring selected entries, cameras, locks, and alerts into one clearer property view.",
    href: "/beta/solutions/home-security",
    kind: "future-approved-route",
  },
  {
    label: "Aging in Place",
    description:
      "Support easier routines and useful non-medical awareness for selected people.",
    href: "/beta/solutions/aging-in-place",
    kind: "future-approved-route",
  },
  {
    label: "Home Safety",
    description:
      "Get practical awareness of water, temperature, humidity, and selected conditions.",
    href: "/beta/solutions/home-safety",
    kind: "future-approved-route",
  },
  {
    label: "Home Automation",
    description:
      "Coordinate useful routines, modes, and supported controls around daily life.",
    href: "/beta/solutions/home-automation",
    kind: "future-approved-route",
  },
  {
    label: "Home Lighting",
    description:
      "Create useful lighting scenes, pathways, schedules, and property modes.",
    href: "/categories/home-lighting",
    kind: "protected-legacy-route",
  },
  {
    label: "Property Management",
    description:
      "Bring more property awareness and supported controls into one primary experience.",
    kind: "future-approved-route",
  },
];

export const betaFooterGroups = [
  {
    label: "Solutions",
    items: [
      {
        label: "Explore Solutions",
        href: solutionsOverviewHref,
        kind: "future-approved-route" as const,
      },
      ...betaSolutionNavigation,
    ],
  },
  { label: "How and Why", items: betaPrimaryNavigation.slice(0, 2) },
  {
    label: "Learn",
    items: [
      {
        label: "Education",
        href: "/beta#education",
        kind: "homepage-anchor" as const,
      },
      {
        label: "Frequently Asked Questions",
        href: "/faq",
        kind: "protected-legacy-route" as const,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        label: "Customer Support",
        href: "/support",
        kind: "protected-legacy-route" as const,
      },
      {
        label: "Contact",
        href: "/contact",
        kind: "protected-legacy-route" as const,
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        href: "/about",
        kind: "protected-legacy-route" as const,
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        label: "Privacy",
        href: "/privacy",
        kind: "protected-legacy-route" as const,
      },
      {
        label: "Terms",
        href: "/terms",
        kind: "protected-legacy-route" as const,
      },
    ],
  },
] satisfies Array<{ label: string; items: BetaNavigationItem[] }>;

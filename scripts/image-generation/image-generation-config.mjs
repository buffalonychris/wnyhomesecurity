export const DEFAULT_IMAGE_GENERATION_OPTIONS = {
  model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-2",
  size: process.env.OPENAI_IMAGE_SIZE || "1536x1024",
  outputFormat: process.env.OPENAI_IMAGE_OUTPUT_FORMAT || "jpeg",
  quality: process.env.OPENAI_IMAGE_QUALITY || "high",
  outputStage: "drafts",
};

const sharedHomeSecurityAvoidList = [
  "crime-scene imagery",
  "weapons",
  "law-enforcement-style imagery",
  "emergency panic scenes",
  "exaggerated danger",
  "dark unreadable houses",
  "cyber/futuristic UI",
  "fake surveillance-wall aesthetics",
  "watermarks",
  "distorted devices",
  "text-heavy overlays",
  "impossible hardware",
];

const homeSecurityDirection =
  "Use a realistic Western New York residential setting with a calm, professional, trustworthy, practical tone. Keep the image category-specific, clear at intended page size, not fear-based, and not alarm-company aggressive.";

export const IMAGE_GENERATION_CONFIG = {
  categories: {
    "home-security": {
      slug: "home-security",
      label: "Home Security",
      sourceDocuments: [
        "docs/design-system/IMG-CATEGORY003_WNYHS_CATEGORY_ASSET_SOURCE_MANIFEST_REV01.md",
        "docs/design-system/IMG-CATEGORY004_HOME_SECURITY_ASSET_GENERATION_PLAN_REV01.md",
      ],
      folderPath: "public/images/category-pages/home-security",
      defaultOutputStage: "drafts",
      visualDirection: homeSecurityDirection,
      avoidList: sharedHomeSecurityAvoidList,
      assets: [
        {
          assetId: "IMG-CAT-HOME-SECURITY-001",
          filename: "hero-home-security.jpg",
          assetClass: "Hero",
          priority: 1,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "Residential Home Security hero scene with clear entry and property awareness context.",
          hardwareRequirement:
            "Lower-right integrated hardware cluster containing a camera, video doorbell, smart lock, and door/window sensor. Subtle WNYHS branding is allowed.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic Western New York residential home exterior, calm evening or late-afternoon light, clean professional composition, trustworthy local smart-property tone, web-ready category hero image. Show an inviting front entry, porch, driveway edge, or sidewalk approach with clear property and entry awareness context. Include a lower-right integrated hardware cluster containing a camera, video doorbell, smart lock, and door/window sensor; hardware may include subtle WNYHS branding or small device marks. Keep the lifestyle home scene primary and the hardware cluster supportive. No text overlays, no slogans, no floating feature labels, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "large logos",
            "pricing",
            "CTA buttons",
            "fake alert banners",
          ],
          reviewNotes:
            "Confirm the lower-right cluster includes all four required hardware types and remains crop-safe for desktop, tablet, and mobile.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-002",
          filename: "dashboard-home-security.jpg",
          assetClass: "Dashboard",
          priority: 1,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent: "Customer-facing Home Security dashboard view.",
          hardwareRequirement: "Not applicable.",
          dashboardCoreRequirement:
            "Camera views; security status; entry awareness; recent activity; property status; event history.",
          prompt:
            "Realistic WNYHS/Home Assistant-style control panel for a Home Security category page, clean dark premium interface compatible with a WNYHS dark/gold visual system, homeowner-readable layout, web-ready dashboard composition. Include Home Security-relevant cards only: camera views, security status, entry awareness, recent activity, property status, and event history. Use calm status language and practical labels such as Front Door, Garage Entry, Porch Camera, Recent Activity, Property Status, and Event History. The interface should look usable, believable, and professionally configured for a WNY residential property. No text overlays outside the UI, no watermarks, no distorted UI, no cyber/futuristic screen, no unrelated analytics, no impossible controls, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "cybersecurity dashboards",
            "dense operator consoles",
            "stock market charts",
            "unreadable tiny text",
            "bright panic colors",
            "fake service promises",
            "generic SaaS UI",
          ],
          reviewNotes:
            "Confirm every visible card is Home Security-relevant and the primary labels remain readable at intended page size.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-003",
          filename: "mobile-home-security.jpg",
          assetClass: "Mobile Dashboard",
          priority: 1,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent: "Phone-sized Home Security dashboard view.",
          hardwareRequirement: "Not applicable.",
          dashboardCoreRequirement:
            "Camera views; security status; entry awareness; recent activity; property status; event history.",
          prompt:
            "Realistic smartphone mockup showing a WNYHS/Home Assistant-style Home Security mobile dashboard, clean professional composition, trustworthy local smart-property tone, web-ready image. The phone screen should include Home Security-relevant cards only: security status, entry awareness, recent activity, property status, event history, and one or two compact camera views. Use clear homeowner-readable labels and calm status language. Place the phone in a subtle residential context, such as a kitchen counter or entry table, without clutter. No text overlays outside the phone UI, no watermarks, no distorted phone or screen, no cyber/futuristic UI, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "unreadable tiny UI",
            "fake app-store style advertising",
            "panic colors",
            "urgent scenes",
            "unrelated smart-home categories",
            "device distortion",
          ],
          reviewNotes:
            "Confirm the phone remains secondary to dashboard proof usage but the primary Home Security content is recognizable.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-004",
          filename: "core-home-security.jpg",
          assetClass: "WNYHS Core Panel",
          priority: 1,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "WNYHS Core panel supporting Home Security category context.",
          hardwareRequirement:
            "Camera, video doorbell, smart lock, or door/window sensor where visible.",
          dashboardCoreRequirement:
            "Camera views; security status; entry awareness; recent activity; property status; event history.",
          prompt:
            "Realistic WNYHS Core panel for the Home Security category, combining a believable WNYHS/Home Assistant-style customer control dashboard with subtle surrounding Home Security hardware context. Use a clean professional composition with trustworthy local smart-property tone and web-ready framing. Include category-relevant dashboard cards only: camera views, security status, entry awareness, recent activity, property status, and event history. If hardware is visible, show a camera, video doorbell, smart lock, or door/window sensor in a realistic residential context. The image should make Core feel like the platform behind Home Security without becoming a generic dashboard. No text overlays outside the interface, no watermarks, no distorted devices, no cyber/futuristic UI, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "generic whole-property infographics",
            "unrelated automation controls",
            "dense technical panels",
            "unreadable labels",
            "large marketing slogans",
          ],
          reviewNotes:
            "Confirm the dashboard content is category-specific and the image does not look like a generic platform graphic.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-005",
          filename: "reveal-before-home-security.jpg",
          assetClass: "Reveal Before",
          priority: 2,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "Before-state explainer image for limited entry and property visibility.",
          hardwareRequirement:
            "Door/window sensor or entry hardware may be shown if useful.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential entry or side-door scene, calm daytime or early evening lighting, clean professional composition, web-ready reveal/explainer image. Show a normal home entry area with limited visible context, such as a front door, porch, side entry, or garage entry without prominent smart-property devices. The tone should be practical and calm, not unsafe or dramatic. Leave room for the paired after image to show clearer entry awareness. No text overlays, no watermarks, no distorted architecture, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "forced-entry damage",
            "scary shadows",
            "fake warning banners",
            "fear-based staging",
          ],
          reviewNotes:
            "Confirm this image is visually pairable with the reveal-after asset and does not imply a verified customer installation.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-006",
          filename: "reveal-after-home-security.jpg",
          assetClass: "Reveal After",
          priority: 2,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "After-state explainer image showing improved entry awareness and property visibility.",
          hardwareRequirement:
            "Camera, video doorbell, smart lock, and door/window sensor where composition allows.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential entry or side-door scene matching the reveal-before composition, calm bright lighting, clean professional composition, trustworthy local smart-property tone, web-ready reveal/explainer image. Show clearer entry awareness and property visibility through visible Home Security hardware: camera, video doorbell, smart lock, and door/window sensor where composition allows. Hardware should look physically plausible and installed in reasonable locations. Keep the scene calm and residential. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "fear-based before/after transformation",
            "dramatic danger cues",
            "fake warning banners",
            "oversized devices",
            "large logos",
            "ad-style overlays",
          ],
          reviewNotes:
            "Confirm the image pairs with reveal-before and uses awareness/visibility posture only.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-007",
          filename: "routine-arrival-awareness-home-security.jpg",
          assetClass: "Routine Thumbnail",
          priority: 3,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent: "Arrival awareness routine context.",
          hardwareRequirement: "Camera or video doorbell if visible.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential arrival scene at a front entry or driveway, bright and clear, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject: a homeowner arriving at the entry, with a visible video doorbell or camera if composition allows. The scene must remain recognizable at 150-220px width. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "dark scenes",
            "panic expressions",
            "suspicious figures",
            "cluttered backgrounds",
            "tiny UI screenshots",
            "text-dependent meaning",
          ],
          reviewNotes:
            "Confirm arrival context is instantly understandable at thumbnail size.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-008",
          filename: "routine-package-protection-home-security.jpg",
          assetClass: "Routine Thumbnail",
          priority: 3,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "Package protection routine context at entry area.",
          hardwareRequirement: "Video doorbell or camera if visible.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential front porch with a package near the door, bright and clear, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Include a visible video doorbell or entry camera if composition allows. The subject must remain recognizable at 150-220px width: package, doorway, and entry hardware should read clearly. Keep the scene calm and practical. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "theft scenes",
            "suspicious figures",
            "confrontation",
            "urgent panic",
            "dark unreadable porch",
            "fake warning labels",
            "text-heavy graphics",
          ],
          reviewNotes:
            "Confirm package and entry hardware are readable at thumbnail size without implying a promised outcome.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-009",
          filename: "routine-away-property-awareness-home-security.jpg",
          assetClass: "Routine Thumbnail",
          priority: 3,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent: "Away property awareness routine context.",
          hardwareRequirement: "Camera, smart lock, or entry sensor as applicable.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential home exterior with driveway or front entry, calm daylight, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject for away property awareness, such as a locked front door, driveway view, or side entry with a visible camera, smart lock, or entry sensor. The subject must remain recognizable at 150-220px width. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "abandoned-house tone",
            "burglary imagery",
            "urgent panic",
            "cluttered multi-scene collages",
          ],
          reviewNotes:
            "Confirm the thumbnail communicates calm property status and not fear.",
        },
        {
          assetId: "IMG-CAT-HOME-SECURITY-010",
          filename: "routine-night-security-home-security.jpg",
          assetClass: "Routine Thumbnail",
          priority: 3,
          folderPath: "public/images/category-pages/home-security",
          requiredVisualContent:
            "Night security routine context with visible home exterior or entry.",
          hardwareRequirement:
            "Camera, smart lock, door/window sensor, or video doorbell as applicable.",
          dashboardCoreRequirement: "Not applicable.",
          prompt:
            "Realistic WNY residential night entry or exterior scene, warm porch lighting, clear visible home details, clean professional composition, trustworthy local smart-property tone, web-ready routine thumbnail. Show one clear focal subject such as a lit front door with smart lock, entry sensor, video doorbell, or camera. The image must remain recognizable at 150-220px width and must not be overly dark. No text overlays, no watermarks, no distorted devices, no impossible hardware, no exaggerated claims.",
          avoidList: [
            ...sharedHomeSecurityAvoidList,
            "blacked-out houses",
            "scary shadows",
            "suspicious figures",
            "crime-scene mood",
            "fake warning banners",
            "text-dependent meaning",
          ],
          reviewNotes:
            "Confirm the image is bright enough for thumbnail use and keeps a calm residential tone.",
        },
      ],
    },
  },
};

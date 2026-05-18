export type BrandAssetCategory =
  | 'logo-crest'
  | 'qr-scan'
  | 'flyer-print'
  | 'wallpaper-background'
  | 'social-promotional'
  | 'unknown-review';

export type BrandAssetRecord = {
  id: string;
  file: string;
  title: string;
  category: BrandAssetCategory;
  notes: string;
  recommendedUsage?: string;
};

export const brandAssets: BrandAssetRecord[] = [
  {
    id: 'icon-final-hq',
    file: '/brand/IconFinalHQ.jpg',
    title: 'Final Crest Icon (HQ)',
    category: 'logo-crest',
    notes: 'Best candidate for compact brand mark usage.',
    recommendedUsage: 'Footer logo, favicon/app icon candidate, and CTA crest accent.',
  },
  {
    id: 'icon-prepress-uncropped',
    file: '/brand/IconPrePressVersionUncropped.png',
    title: 'Prepress Crest Icon (Uncropped)',
    category: 'logo-crest',
    notes: 'Useful for print/export workflows where extra bleed area is needed.',
    recommendedUsage: 'Print placement candidate.',
  },
  {
    id: 'logo-sheet-multiple-designs',
    file: '/brand/Logo Sheet Multiple Designs.png',
    title: 'Logo Sheet (Multiple Designs)',
    category: 'logo-crest',
    notes: 'Composite board showing multiple lockups.',
    recommendedUsage: 'Internal brand selection reference.',
  },
  {
    id: 'logo-sheet-v2',
    file: '/brand/Logo Sheet V2.png',
    title: 'Logo Sheet V2',
    category: 'logo-crest',
    notes: 'Alternative logo board; likely concept/reference image.',
    recommendedUsage: 'Internal brand selection reference.',
  },
  {
    id: 'logo-sheet-legacy',
    file: '/brand/LogoSheet.png',
    title: 'Logo Sheet (Legacy)',
    category: 'logo-crest',
    notes: 'Legacy naming variant retained as uploaded.',
    recommendedUsage: 'Internal reference and comparison.',
  },
  {
    id: 'stripe-logo-file',
    file: '/brand/StripeLogoFile.png',
    title: 'Stripe Logo File (Wordmark Lockup)',
    category: 'logo-crest',
    notes: 'Wide logo lockup suitable for hero/banner width usage.',
    recommendedUsage: 'Homepage hero accent and social preview fallback candidate.',
  },
  {
    id: 'stripe-logo-banner',
    file: '/brand/StripeLogoFileBanner.jpg',
    title: 'Stripe Logo Banner',
    category: 'social-promotional',
    notes: 'Banner ratio image suitable for social previews.',
    recommendedUsage: 'OG/social fallback candidate if metadata support is present.',
  },
  {
    id: 'qr-plaque-8point5x5point5',
    file: '/brand/8point5X5point5QRPlaques.png',
    title: '8.5x5.5 QR Plaques',
    category: 'qr-scan',
    notes: 'Formatted placard-style QR layout.',
    recommendedUsage: 'QR print placard reference.',
  },
  {
    id: 'qr-with-phone',
    file: '/brand/FinqQRScanImageWithPhone.png',
    title: 'QR Scan Visual (With Phone)',
    category: 'qr-scan',
    notes: 'Contextual QR usage scene that reinforces scan behavior.',
    recommendedUsage: 'QR landing/supporting visual.',
  },
  {
    id: 'qr-without-phone',
    file: '/brand/FinalQRScanImageWithoutPhone.png',
    title: 'QR Scan Visual (Without Phone)',
    category: 'qr-scan',
    notes: 'Clean QR-forward visual suitable for CTA and print support.',
    recommendedUsage: 'QR landing hero/inline support.',
  },
  {
    id: 'scan-plaquards-cards',
    file: '/brand/ScanPlaquardsAndCards.png',
    title: 'Scan Plaquards and Cards',
    category: 'flyer-print',
    notes: 'Print-style card/plaque concepts.',
    recommendedUsage: 'Flyer and handout reference image.',
  },
  {
    id: 'high-contrast-poster',
    file: '/brand/highcontrastedging8x11poster.jpg',
    title: 'High-Contrast 8x11 Poster',
    category: 'flyer-print',
    notes: 'Poster-friendly format suitable for physical posting.',
    recommendedUsage: 'Print poster candidate.',
  },
  {
    id: 'span-wallpaper',
    file: '/brand/SpanWallpaper.jpg',
    title: 'Span Wallpaper',
    category: 'wallpaper-background',
    notes: 'Wide wallpaper treatment suitable for subtle background usage.',
    recommendedUsage: 'Hero or section background texture.',
  },
  {
    id: 'wallpaper-screensaver',
    file: '/brand/wallpaperscreensaver.jpg',
    title: 'Wallpaper Screensaver',
    category: 'wallpaper-background',
    notes: 'Alternative wallpaper ratio suitable for background fallback.',
    recommendedUsage: 'Background visual fallback option.',
  },
];

export const getBrandAssetsByCategory = (category: BrandAssetCategory) =>
  brandAssets.filter((asset) => asset.category === category);

export const recommendedBrandAssets = {
  primaryLogo: '/brand/StripeLogoFile.png',
  footerCrest: '/brand/IconFinalHQ.jpg',
  socialFallback: '/brand/StripeLogoFileBanner.jpg',
  qrPlacardReference: '/brand/8point5X5point5QRPlaques.png',
  wallpaperBackground: '/brand/SpanWallpaper.jpg',
} as const;

import type { Metadata } from 'next';

import { pageLevelLocalization } from '@/constant/localization';

const { home: homeLocalization } = pageLevelLocalization;

export const metadata: Metadata = {
  applicationName: homeLocalization.title,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: homeLocalization.title,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

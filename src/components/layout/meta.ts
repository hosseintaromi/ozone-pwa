import type { Metadata } from 'next';

import { locale } from '@/locale';

const { home: homeLocale } = locale;

export const metadata: Metadata = {
  applicationName: homeLocale.title,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: homeLocale.title,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

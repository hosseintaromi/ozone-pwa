import type { Metadata } from 'next';

import { locale } from '@/locale';

const { wallet: walletLocale } = locale;

export const metadata: Metadata = {
  applicationName: walletLocale.title,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: walletLocale.title,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
};

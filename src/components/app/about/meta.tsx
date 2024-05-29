import { Metadata } from 'next';

import { imageBuilder } from '@/lib/helper';

import localization, { pageLevelLocalization } from '@/constant/localization';
const { home: homeLocalization } = pageLevelLocalization;
import { SITE_URL } from '@/constant/routes';

export const metadata: Metadata = {
  title: homeLocalization.title,
  description: homeLocalization.description,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: homeLocalization.title,
    description: homeLocalization.description,
    url: `${SITE_URL}/`,
    locale: 'fa_IR',
    type: 'website',
    siteName: localization.app,
    images: [
      {
        url: imageBuilder('og-visit-blocks', { ext: 'jpg' }),
        width: 600,
        height: 400,
      },
    ],
  },
};

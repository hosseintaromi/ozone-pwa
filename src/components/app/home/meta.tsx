import { Metadata } from 'next';

import { locale } from '@/locale';
const { home: homeLocale } = locale;

export const metadata: Metadata = {
  title: homeLocale.title,
  description: homeLocale.description,
  // alternates: {
  //   canonical: `${SITE_URL}/`,
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  // openGraph: {
  //   title: homeLocale.title,
  //   description: homeLocale.description,
  //   url: `${SITE_URL}/`,
  //   locale: 'fa_IR',
  //   type: 'website',
  //   siteName: locale.hello,
  //   images: [
  //     {
  //       url: imageBuilder('og-visit-blocks', { ext: 'jpg' }),
  //       width: 600,
  //       height: 400,
  //     },
  //   ],
  // },
};

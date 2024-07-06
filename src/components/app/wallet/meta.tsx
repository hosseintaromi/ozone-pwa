import { Metadata } from 'next';

import { locale } from '@/locale';
const { wallet: walletLocale } = locale;

export const metadata: Metadata = {
  title: walletLocale.title,
  description: walletLocale.description,
  // alternates: {
  //   canonical: `${SITE_URL}/`,
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
  // openGraph: {
  //   title:walletLocale.title,
  //   description:walletLocale.description,
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

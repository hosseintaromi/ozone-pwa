import { Metadata } from 'next';

import { locale } from '@/locale';
const { login: loginLocale } = locale;

export const metadata: Metadata = {
  title: loginLocale.title,
  description: loginLocale.description,
};

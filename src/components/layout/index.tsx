import localFont from 'next/font/local';
import { ReactNode } from 'react';

import Container from '@/components/@base/container';
import Toast from '@/components/@base/toast';
import CommonModal from '@/components/shared/components/common-modal';
import DisableZoom from './disable-zoom';

type Props = {
  children: ReactNode;
};

export const danaFont = localFont({
  adjustFontFallback: false,
  display: 'block',
  src: [
    {
      path: '../../../public/fonts/dana/DanaFaNum-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-Light.woff2',
      weight: '300',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-DemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../../../public/fonts/dana/DanaFaNum-Black.woff2',
      weight: '900',
    },
  ],
});
export default async function Layout({ children }: Props) {
  return (
    <Container
      id='root-element'
      className='relative m-auto flex min-h-[100vh] max-w-[448px] flex-col bg-white'
    >
      <Toast />
      <CommonModal />
      <DisableZoom />

      {children}
    </Container>
  );
}

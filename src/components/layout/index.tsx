import localFont from 'next/font/local';
import { Container } from 'ozone-uikit';
import { ReactNode } from 'react';

import cn from '@/lib/clsxm';
import { isIOS } from '@/lib/helper';

// FIXME:should be fix with package
// import Toast from '@/components/@base/toast';
// import CommonModal from '@/components/shared/components/common-modal';
import DisableZoom from './disable-zoom';
import CommonModal from '../share/common-modal';

type Props = {
  children: ReactNode;
};

export const yekanBakhFont = localFont({
  adjustFontFallback: false,
  display: 'block',
  src: [
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Light.woff2',
      weight: '300',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Regular.woff2',
      weight: '500',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../../../public/fonts/yekan-bakh/YekanBakhFaNum-Black.woff2',
      weight: '900',
    },
  ],
});
export default async function Layout({ children }: Props) {
  const isIos = isIOS();
  return (
    <Container
      id='root-element'
      className={cn(
        'relative m-auto flex  max-w-[448px] flex-col  bg-neutral-900',
        isIos ? 'h-vh' : 'h-dvh',
      )}
    >
      <CommonModal />
      <DisableZoom />

      {children}
    </Container>
  );
}

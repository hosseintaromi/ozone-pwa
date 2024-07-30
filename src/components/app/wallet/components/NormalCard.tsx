import { Add } from 'iconsax-react';
import { COLOR_ENUM, Container, Text } from 'ozone-uikit';
import React, { useState } from 'react';

import cn from '@/lib/clsxm';

import XImage from '@/components/share/x-image';

import { SIZE_ENUM } from '@/@types';
import colors from '@/constant/colors';
import ICON_SIZE from '@/constant/icon-size-color';

import PayInDialog from './PayInDialog';

import ozoneLogo from '~/images/image/ozoneLogo.svg';
import whiteShadow from '~/images/image/whiteShadowCircle.svg';

const NormalCard = () => {
  const [show, setShow] = useState(false);

  return (
    <Container className='relative h-full bg-primary-300'>
      <PayInDialog show={show} setShow={setShow} />
      <XImage
        src={whiteShadow}
        alt='222'
        width={120}
        height={120}
        className='absolute right-0 top-0 opacity-20'
      />
      <Container className='px-7 py-7'>
        <Container className=' relative z-30 flex justify-between'>
          <Container className='flex h-10 items-center gap-3'>
            <Container
              className='h-fit w-fit rounded-lg
            bg-white px-1 py-1 shadow'
              onClick={() => setShow((pre) => !pre)}
            >
              <Add size={ICON_SIZE.lg} color={colors.primary} className='' />
            </Container>

            <Text className='text-white' size={SIZE_ENUM.SM}>
              افزایش موجودی
            </Text>
          </Container>
          <Container className='h-3'>
            <XImage src={ozoneLogo} alt='222' width={40} height={10} />
          </Container>
        </Container>
        <Container className='mt-7'>
          <Text className='leading-7' size={SIZE_ENUM.LG}>
            5,000,000 ریال
          </Text>
          <Text size={SIZE_ENUM.SM}>حساب اوزون کارت</Text>
        </Container>
      </Container>
      <Container
        center
        className={cn(
          `absolute -left-[1px] bottom-8 z-10 h-[23px] 
          
          w-[90px] rotate-180 justify-end gap-1  pl-4`,
        )}
        style={{ backgroundImage: `url('/images/image/discountBg.svg')` }}
      >
        <Text size={SIZE_ENUM.SM} color={COLOR_ENUM.WHITE} className='rotate-180'>
          ۳ ٪ تخفیف
        </Text>
      </Container>
    </Container>
  );
};

export default NormalCard;

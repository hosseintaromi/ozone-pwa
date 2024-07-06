import { Add } from 'iconsax-react';
import { COLOR_ENUM, Container, Text } from 'ozone-uikit';
import React from 'react';

import XImage from '@/components/share/x-image';

import colors from '@/constant/colors';
import ICON_SIZE from '@/constant/icon-size-color';

import ozoneLogo from '~/images/image/ozoneLogo.svg';
import whiteShadow from '~/images/image/whiteShadowCircle.svg';

const NormalCard = () => {
  return (
    <Container className='relative h-full bg-primary-300 '>
      <XImage
        src={whiteShadow}
        alt='222'
        width={120}
        height={120}
        className='absolute right-0 top-0 opacity-20'
      />
      <Container className='px-7 py-6'>
        <Container className=' flex justify-between'>
          <Container className='flex items-center gap-3'>
            <Container className='h-fit w-fit rounded-lg bg-white px-1 py-1'>
              <Add size={ICON_SIZE.xxl} color={colors.primary} />
            </Container>
            <Text className='text-primary-100'>افزایش موجودی</Text>
          </Container>
          <XImage src={ozoneLogo} alt='222' width={40} height={10} />
        </Container>
      </Container>
      <Container className='absolute bottom-6 left-0 bg-[#E5562F] px-2 py-1'>
        <Text color={COLOR_ENUM.WHITE}>۴٪ تخفیف</Text>
      </Container>
    </Container>
  );
};

export default NormalCard;

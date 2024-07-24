import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';

import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import { SIZE_ENUM } from '@/@types';
import ICON_SIZE, { ICON_COLOR, IconSize } from '@/constant/icon-size-color';
import locale from '@/locale';

const PhysicalCard = () => {
  const { app } = locale;
  return (
    <Container
      center
      className='mx-5 h-[72px] cursor-pointer justify-between rounded-xl bg-neutral-800 px-4'
    >
      <Container center>
        <Container className=' w-14'>
          <XImage
            src='/images/image/getPhysicalCard.svg'
            alt='Picture of the author'
            width={1000}
            height={1000}
          />
        </Container>
        <Text className='mr-5' size={SIZE_ENUM.MD}>
          {app.getPhysicalCard}
        </Text>
      </Container>

      <ArrowLeft2 color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />
    </Container>
  );
};

export default PhysicalCard;

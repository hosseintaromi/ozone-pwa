import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';

import { SIZE_ENUM } from '@/components/share/@helpers/types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import { COLOR_ENUM } from '@/@types';
import { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';

const LatestPurchases = () => {
  const { app } = locale;
  return (
    <Container className='mx-5 mt-5 cursor-pointer rounded-xl bg-neutral-800 p-5'>
      <Text color={COLOR_ENUM.WHITE} size={SIZE_ENUM.MD}>
        {app.latestPurchases}
      </Text>
      {[1, 2, 3, 4, 5].map((x) => (
        <Container className='mt-2 border-b-[1px] border-gray-700'>
          <Container center className='justify-between'>
            <Container className=' w-8'>
              <XImage
                src='/images/mock/filmeNet.svg'
                alt='Picture of the author'
                width={1000}
                height={1000}
              />
            </Container>
            <ArrowLeft2 color={ICON_COLOR.light_gray} />
          </Container>
          <Container center className='justify-between'>
            <Text color={COLOR_ENUM.WHITE}>خرید از فیلم نت</Text>
            <Text>200,000,000 ریال</Text>
          </Container>
          <Text color={COLOR_ENUM.LIGHT_GRAY}>سه شنبه 16 اردیبهشت 1402- 15:20</Text>
        </Container>
      ))}
    </Container>
  );
};

export default LatestPurchases;

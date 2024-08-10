import { Add } from 'iconsax-react';
import { COLOR_ENUM, Container, Text } from 'ozone-uikit';
import React, { useState } from 'react';

import cn from '@/lib/clsxm';

import XImage from '@/components/share/x-image';

import { SIZE_ENUM } from '@/@types';
import colors from '@/constant/colors';
import ICON_SIZE from '@/constant/icon-size-color';

import PayInDialog from './PayInDialog';

import whiteShadow from '~/images/image/whiteShadowCircle.svg';
import { Wallets } from '@/models/digitalWallet';
import locale from '@/locale';
import { rialCurrency } from '@/lib/helper';

const NormalCard = ({ data }: { data: Wallets }) => {
  const {
    name,
    discount,
    balance,
    wallet: { logo_path, logo_base_url },
  } = data;
  console.log(data);
  const [show, setShow] = useState(false);
  const {
    app: {
      wallets: { walletName, discountRebon, inventoryIncrease },
    },
  } = locale;
  return (
    <Container className='relative h-full bg-primary-300'>
      <PayInDialog show={show} setShow={setShow} />
      <XImage
        src={whiteShadow}
        alt='222'
        width={150}
        height={160}
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

            <Text className='text-primary-100' size={SIZE_ENUM.SM}>
              {inventoryIncrease}
            </Text>
          </Container>
          <Container className='h-3'>
            <XImage
              src={`${logo_base_url}${logo_path}`}
              alt='222'
              width={40}
              height={10}
              className='rounded-full'
            />
          </Container>
        </Container>
        <Container className='mt-[34px] flex flex-col gap-2'>
          <Text className='leading-7' size={SIZE_ENUM.LG}>
            {rialCurrency(balance)}
          </Text>
          <Text size={SIZE_ENUM.SM}>{walletName(name)}</Text>
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
          {discountRebon(discount)}
        </Text>
      </Container>
    </Container>
  );
};

export default NormalCard;

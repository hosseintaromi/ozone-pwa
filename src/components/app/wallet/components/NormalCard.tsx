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
import whiteShadow2 from '~/images/image/ellipse2.svg';
import { Wallets } from '@/models/digitalWallet.model';
import locale from '@/locale';
import { rialCurrency } from '@/lib/helper';
const WHITE_COLOR = colors['neutral-0'];
const NormalCard = ({ data }: { data: Wallets }) => {
  const {
    name,
    discount,
    balance,
    wallet: { color, logo_path, logo_base_url, is_master },
  } = data;
  const [show, setShow] = useState(false);
  const {
    app: {
      wallets: { walletName, discountRebon, inventoryIncrease },
    },
  } = locale;
  return (
    <Container className='relative h-full' style={{ backgroundColor: color }}>
      <PayInDialog show={show} setShow={setShow} />
      <XImage
        src={color === WHITE_COLOR ? whiteShadow2 : whiteShadow}
        alt='222'
        width={150}
        height={160}
        className='absolute right-0 top-0 opacity-20'
      />
      <Container className='px-7 py-7'>
        <Container
          className={cn('relative z-30 flex justify-between', !is_master && 'justify-end')}
        >
          {is_master && (
            <Container className='flex h-10 items-center gap-3'>
              <Container
                className='h-fit w-fit rounded-lg
            bg-white px-1 py-1 shadow'
                onClick={() => setShow((pre) => !pre)}
              >
                <Add size={ICON_SIZE.lg} color={colors.primary} />
              </Container>

              <Text className='text-primary-100' size={SIZE_ENUM.SM}>
                {inventoryIncrease}
              </Text>
            </Container>
          )}
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
        <Container className={cn('mt-[34px] flex flex-col gap-2', !is_master && 'mt-10')}>
          <Text
            className={cn('leading-7 text-white', color === WHITE_COLOR && 'text-neutral-800')}
            size={SIZE_ENUM.LG}
          >
            {rialCurrency(balance)}
          </Text>
          <Text
            className={cn('text-white', color === WHITE_COLOR && 'text-neutral-800')}
            size={SIZE_ENUM.SM}
          >
            {walletName(name)}
          </Text>
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

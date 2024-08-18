import { Add } from 'iconsax-react';
import { Button, COLOR_ENUM, Container, Text } from 'ozone-uikit';
import React, { useState } from 'react';

import cn from '@/lib/clsxm';

import XImage from '@/components/share/x-image';

import { SIZE_ENUM } from '@/@types';
import colors from '@/constant/colors';
import ICON_SIZE from '@/constant/icon-size-color';

import IncreaseCredit from './IncreaseCredit';

import whiteShadow from '~/images/image/whiteShadowCircle.svg';
import whiteShadow2 from '~/images/image/ellipse2.svg';
import { AccountWalletType } from '@/models/digitalWallet.model';
import locale from '@/locale';
import { rialCurrency } from '@/lib/helper';
import { usePatchWalletStatus } from '@/services/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constant/query-key';
import { toast } from 'react-toastify';
import { ErrorMsg, SuccessMsg } from '@/components/share/toast/toast';
const WHITE_COLOR = colors['neutral-0'];
const NormalCard = ({ data, addWallet }: { data: AccountWalletType; addWallet?: boolean }) => {
  const queryClient = useQueryClient();
  const {
    name,
    discount,
    balance,
    status,
    id,
    wallet: { color, logo_path, logo_base_url, is_master },
  } = data;
  const [show, setShow] = useState(false);
  const { mutate: mutateChangeWalletStatus, isPending } = usePatchWalletStatus(id);
  const {
    common: { active, inActive },
    app: {
      wallets: { walletName, discountRebon, inventoryIncrease, walletInactive, walletActive },
    },
  } = locale;

  const changeWalletStatus = () => {
    mutateChangeWalletStatus(
      {
        status: status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE',
      },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: [QUERY_KEYS.GET_WALLETS] });
          status === 'ACTIVE'
            ? toast(<ErrorMsg text={walletInactive} />)
            : toast(<SuccessMsg text={walletActive} />);
        },
      },
    );
  };
  return (
    <Container
      className='relative h-full max-h-[200px] rounded-[14px]'
      style={{ backgroundColor: color }}
    >
      {status === 'INACTIVE' && (
        <Container className='absolute inset-0 z-[100] rounded-[14px] bg-neutral-700/50' />
      )}
      <IncreaseCredit show={show} setShow={setShow} />
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
      {is_master && (
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
      )}
      {!is_master && !addWallet && (
        <Container
          center
          className='absolute bottom-0 left-[17px] z-[110] h-[42px] w-[113px] px-[16px] pt-[4px]'
          style={{ backgroundImage: `url('/images/image/subtract.svg')` }}
        >
          <Button
            style={{ backgroundColor: color }}
            className={cn(
              'h-[36px] w-full text-xs text-primary',
              status === 'INACTIVE' && '!bg-primary text-white',
            )}
            onClick={changeWalletStatus}
            disabled={isPending}
            isLoading={isPending}
          >
            {status === 'ACTIVE' ? inActive : active}
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default NormalCard;

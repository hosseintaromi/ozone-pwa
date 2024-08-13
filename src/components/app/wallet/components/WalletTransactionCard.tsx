import { ArrowDown, ArrowLeft2, ArrowUp, CloseCircle } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import cn from '@/lib/clsxm';

import colors from '@/constant/colors';
import ICON_SIZE, { IconSize } from '@/constant/icon-size-color';
import common from '@/locale/common';

import { WalletTransactionCardType } from '../type';
import useCommonModalStore from '@/store/common-modal-store';

const WalletTransactionCard = ({ data }: { data: WalletTransactionCardType }) => {
  const { setShow } = useCommonModalStore();
  const detailsList = [
    {
      title: common.amount,
      value: data.amount,
    },
    {
      title: common.time,
      value: 'چهارشنبه 16 تیر 1402- 15:20',
    },
    {
      title: common.trackingNumber,
      value: data.ref_number,
    },
    {
      title: common.descriptions,
      value: 'واریز از کالارسان هستی بابت بن ارزاق کارکنان',
    },
  ];
  const showDetail = () => {
    setShow(true, {
      Head: () => (
        <Container center className='w-full justify-between'>
          <Text size={SIZE_ENUM.LG}>{common.transactionDetails}</Text>
          <CloseCircle size='27' className='text-neutral-200' onClick={() => setShow(false)} />
        </Container>
      ),
    });
  };
  return (
    <Container className='flex flex-col border-b-[1px] border-neutral-500 pb-5 pt-5'>
      <Container center className='w-full gap-3'>
        <Container
          className={cn(
            data.type !== 'WITHDRAW' ? 'bg-primary/30' : 'bg-alert-500/10',
            `h-fit w-fit rounded-lg p-2`,
          )}
        >
          {data.type === 'WITHDRAW' ? (
            <ArrowUp size={IconSize.lg} color={colors['alert-500']} />
          ) : (
            <ArrowDown size={IconSize.lg} color={colors.primary} />
          )}
        </Container>
        <Container className='w-full flex-col gap-1' center>
          <Container center className='w-full justify-between'>
            <Text className='font-bold'>
              {data.type === 'WITHDRAW' ? common.withdraw : common.payIn}
            </Text>
            <Text className='text-sm'>
              {data.amount} {' ' + common.rial}
            </Text>
          </Container>
          <Container center className='w-full justify-between'>
            <Text className='mt-2 text-sm text-neutral-500'>
              چهارشنبه۲۴ اردیبهشت 1402- 15:20
            </Text>
            <ArrowLeft2
              size={ICON_SIZE.sm}
              color={colors['neutral-500']}
              onClick={showDetail}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default WalletTransactionCard;

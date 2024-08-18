import { ArrowDown, ArrowLeft2, ArrowUp, CloseCircle } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import cn from '@/lib/clsxm';

import colors from '@/constant/colors';
import ICON_SIZE, { IconSize } from '@/constant/icon-size-color';
import common from '@/locale/common';

import { WalletTransactionCardType } from '../type';
import useCommonModalStore from '@/store/common-modal-store';
import { formatNumberWithCommas, persianDateGenerator, rialCurrency } from '@/lib/helper';

const WalletTransactionCard = ({ data }: { data: WalletTransactionCardType }) => {
  const { setShow } = useCommonModalStore();
  const detailsList = [
    {
      title: common.amount,
      value: data.amount,
    },
    {
      title: common.time,
      value: persianDateGenerator(new Date(data.created_at)),
    },
    {
      title: common.trackingNumber,
      value: '98797987666',
    },
    {
      title: common.descriptions,
      value:
        'واریز از کالارسان هستی بابت بن ارزاق کارکنان از کالارسان هستی بابت بن ارزاق کارکنان',
    },
  ];
  const showDetail = () => {
    setShow(true, {
      Head: () => (
        <Container center className='w-full justify-between pb-8 pt-4'>
          <Text size={SIZE_ENUM.LG}>{common.transactionDetails}</Text>
          <CloseCircle size='27' className='text-neutral-200' onClick={() => setShow(false)} />
        </Container>
      ),
      Body: () => (
        <>
          {detailsList.map((l, index) => (
            <Container
              center
              className={cn(
                'mb-4 w-full items-start justify-between',
                index === 0 && 'mb-3 border-b-[1px] border-neutral-700',
              )}
            >
              <Text semiBold>{l.title}</Text>
              {index === 0 ? (
                <Text bold size={SIZE_ENUM.MD} className='mb-4'>
                  {rialCurrency(+l.value)}
                </Text>
              ) : (
                <Text semiBold className='max-w-[70%]'>
                  {l.value}
                </Text>
              )}
            </Container>
          ))}
        </>
      ),
    });
  };
  return (
    <Container className='flex flex-col border-b-[1px] border-neutral-700 pb-5 pt-5'>
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
              {formatNumberWithCommas(data.amount)} {' ' + common.rial}
            </Text>
          </Container>
          <Container center className='w-full justify-between'>
            <Text className='mt-2 text-sm text-neutral-500'>
              {persianDateGenerator(new Date(data.created_at))}
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

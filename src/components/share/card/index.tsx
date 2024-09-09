import cn from '@/lib/clsxm';
import React from 'react';
import ICON_SIZE from '@/constant/icon-size-color';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import { Gift, Scissor } from 'iconsax-react';
import { dateUntilFutureDate } from '@/lib/helper';

import locale from '@/locale';
import Logos from './logos';
import { VOUCHER_STATUS, voucherType } from '@/models/digitalWallet.model';
import { usePostVoucherChange } from '@/services/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constant/query-key';
import useVoucherStore from '@/store/voucher-store';
import { useRouter } from 'next/navigation';

type Props = {
  data: voucherType;
};

const Card = ({ data }: Props) => {
  const { setSelectedVoucher } = useVoucherStore();
  const router = useRouter();
  const {
    voucher: {
      amount,
      amount_type,
      max_percent_amount,
      min_invoice_amount,
      voucher_businesses,
    },
    expired_at,
    status,
  } = data;
  const queryClient = useQueryClient();

  const {
    common: { details, expired },
    app: { cards },
  } = locale;

  const { mutate } = usePostVoucherChange();
  const handleSelect = () => {
    mutate(
      {
        id: data.id + '',
        status:
          data.status === VOUCHER_STATUS.ACTIVE
            ? VOUCHER_STATUS.INACTIVE
            : VOUCHER_STATUS.ACTIVE,
      },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: [QUERY_KEYS.GET_VOUCHER] });
        },
      },
    );
  };
  const handleShowVoucherDetail = () => {
    setSelectedVoucher(data);
    router.push('/voucher-detail');
  };
  return (
    <Container className='mb-5 '>
      <Container
        className={cn(
          'relative flex h-[168px] w-full cursor-pointer justify-between rounded-xl border-[1px]  border-neutral-700 bg-neutral-800 px-3 py-5',
        )}
      >
        <Container className='mt-5 flex  flex-col'>
          <Container
            center
            className={cn('justify-start', status === 'EXPIRED' && 'opacity-30')}
          >
            <Text size={SIZE_ENUM.MD} className='text-white' bold>
              {amount_type === 'PERCENT' && cards.couponValue(max_percent_amount, amount)}
              {amount_type === 'PRICE' && cards.couponValue(amount)}
            </Text>
          </Container>

          <Text
            size={SIZE_ENUM.SM}
            className={cn('mt-1 text-white', status === 'EXPIRED' && 'opacity-30')}
            medium
          >
            {cards.minimumPurchase(min_invoice_amount)}
          </Text>
          {status === 'EXPIRED' ? (
            <Container center className='mt-3 w-fit rounded-3xl bg-neutral-900 px-3 py-1'>
              <Text bold className='text-danger-200' size={SIZE_ENUM.SM}>
                {expired}
              </Text>
            </Container>
          ) : (
            <Container
              center
              className='mt-3 gap-2 rounded-2xl bg-neutral-500/30 px-4 py-1'
              onClick={handleSelect}
            >
              <Text
                className={cn(
                  'w-12',
                  status === VOUCHER_STATUS.ACTIVE ? 'text-primary' : 'text-neutral-500',
                )}
              >
                {status === VOUCHER_STATUS.ACTIVE
                  ? locale.common.active
                  : locale.common.inActive}
              </Text>
              <span className='h-5 border-r-[1px] border-neutral-500' />

              <Text size={SIZE_ENUM.XS} medium className='text-white'>
                {cards.useCouponTime(dateUntilFutureDate(expired_at, 'day', 'max'))}
              </Text>
            </Container>
          )}
        </Container>
        <Container center className={cn('gray-right-dash-border relative w-[75px]  pb-3')}>
          <Logos logos={voucher_businesses} isExpired={status === 'EXPIRED'} />
          <Scissor
            size={ICON_SIZE.md}
            className={cn(
              'absolute -right-[9px] bottom-0 -rotate-90 bg-neutral-800 text-neutral-500 transition-all duration-500',
            )}
          />
        </Container>
        <Container
          className={cn(
            'absolute -left-[1px] top-0  h-full w-[10px] rounded-l-xl',
            status === VOUCHER_STATUS.ACTIVE ? 'bg-primary' : 'bg-neutral-500',
          )}
        />
        <Container
          className={cn(
            'absolute  right-0 top-0  h-[33px] w-[33px] rounded-bl-md rounded-tr-xl bg-secondary/10 p-1',
            status === 'EXPIRED' && 'opacity-30',
          )}
        >
          <Gift className='text-secondary' />
        </Container>
        <Text
          className='absolute bottom-4 left-7 text-primary'
          bold
          size={SIZE_ENUM.SM}
          onClick={handleShowVoucherDetail}
        >
          {details}
        </Text>
      </Container>
    </Container>
  );
};

export default Card;

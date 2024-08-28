import cn from '@/lib/clsxm';
import React from 'react';
import ICON_SIZE from '@/constant/icon-size-color';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import { Gift, Scissor } from 'iconsax-react';
import { dateUntilFutureDate } from '@/lib/helper';

import locale from '@/locale';
import Logos from './logos';
import { voucherType } from '@/models/digitalWallet.model';
import XImage from '../x-image';

export type Props = {
  data: voucherType;
};

const Card = ({ data }: Props) => {
  const {
    voucher: {
      amount,
      amount_type,
      max_percent_amount,
      min_invoice_amount,
      voucher_businesses,
    },
    expired_at,
  } = data;

  const {
    app: { cards },
  } = locale;

  let disabled = false;
  const couponIsSelected = false;
  const handleSelect = () => {};
  return (
    <Container className='mb-5 last-of-type:mb-28'>
      <Container
        className={cn(
          'relative flex h-[168px] w-full cursor-pointer justify-between rounded-xl border-[1px] border-neutral-100 bg-white px-3 py-5 dark:border-neutral-700 dark:bg-neutral-800',
          couponIsSelected && '!border-primary-300',
          disabled && 'cursor-not-allowed border-neutral-200',
        )}
        onClick={handleSelect}
      >
        {couponIsSelected && (
          <XImage
            src={'/images/image/whiteTick.svg'}
            alt='tick logo'
            width={20}
            height={20}
            className='absolute -right-[3px] -top-[4px] rounded-full bg-primary px-[3.5px] py-[5px] shadow-xl'
          />
        )}
        {disabled && (
          <Container className='absolute -bottom-[1px] -right-[1px] -top-[1px] left-0 z-50 rounded-xl bg-neutral-300/30 backdrop-blur-[1px] dark:bg-neutral-700/30' />
        )}
        <Container className='mt-5 flex  flex-col'>
          <Container center className='justify-start'>
            <Text size={SIZE_ENUM.MD} className='text-neutral-800 dark:text-white' bold>
              {amount_type === 'PERCENT' && cards.couponValue(max_percent_amount, amount)}
              {amount_type === 'PRICE' && cards.couponValue(amount)}
            </Text>
          </Container>

          <Text size={SIZE_ENUM.SM} className='mt-1 text-neutral-500 dark:text-white' medium>
            {cards.minimumPurchase(min_invoice_amount)}
          </Text>
          <Container
            center
            className='mt-3 gap-2 rounded-2xl bg-neutral-50 px-4 py-1 dark:bg-neutral-500/30'
          >
            <Text className={cn('text-primary')}>{locale.common.active}</Text>{' '}
            <span className='h-5 border-r-[1px] border-neutral-500' />{' '}
            <Text size={SIZE_ENUM.XS} medium className=' text-neutral-800  dark:text-white'>
              {cards.useCouponTime(dateUntilFutureDate(expired_at, 'day', 'max'))}
            </Text>
          </Container>
        </Container>
        <Container
          center
          className={cn(
            'gray-right-dash-border-light relative w-[75px] from-[#32373B] from-30% to-[#7C7F82FF] to-0% pb-3 dark:bg-gradient-to-b',
            couponIsSelected &&
              'primary-right-dash-border border-primary-300 from-[#32373B] from-30% to-primary to-0% pb-3 dark:bg-gradient-to-b',
          )}
        >
          <Logos logos={voucher_businesses} />
          <Scissor
            size={ICON_SIZE.md}
            className={cn(
              'absolute -right-[9px] bottom-0 -rotate-90 bg-white text-neutral-300 transition-all duration-500 dark:bg-neutral-800 dark:text-neutral-500',
              couponIsSelected && 'bottom-[110px] !text-primary',
            )}
          />
        </Container>
        <Container className='absolute left-0 top-0  h-full w-[10px] rounded-l-xl bg-primary' />
        <Container className='absolute  right-0 top-0  h-[33px] w-[33px] rounded-bl-md rounded-tr-xl bg-secondary/10 p-1'>
          <Gift className='text-secondary' />
        </Container>
      </Container>
    </Container>
  );
};

export default Card;

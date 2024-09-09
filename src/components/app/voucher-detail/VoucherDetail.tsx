'use client';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import locale from '@/locale';
import { ArrowRight, Box, Tag } from 'iconsax-react';
import useVoucherStore from '@/store/voucher-store';
import { useRouter } from 'next/navigation';
import Logos from '@/components/app/voucher-detail/components/Logos';
import { persianDateGenerator, rialCurrency } from '@/lib/helper';

const VoucherDetail = () => {
  const { selectedVoucher } = useVoucherStore();
  const router = useRouter();
  const goToVoucherPage = () => {
    router.push('/voucher');
  };
  if (!selectedVoucher?.id) {
    goToVoucherPage();
    return null;
  }
  const {
    status,
    code,
    expired_at,
    voucher: {
      amount,
      amount_type,
      max_percent_amount,
      voucher_businesses,
      min_invoice_amount,
    },
  } = selectedVoucher;
  const {
    common: { canBeUsedIn, expirationDate, active, inActive, expired, influencer },
    app: {
      cards,
      voucher: {
        couponDetails,
        couponCode,
        minimumCart,
        couponSituation,
        couponAmount,
        discountType,
        couponType,
        percentDiscount,
        rialDiscount,
      },
    },
  } = locale;
  const items =
    amount_type === 'PERCENT'
      ? [
          {
            title: couponSituation,
            amount: status === 'ACTIVE' ? active : status === 'INACTIVE' ? inActive : expired,
          },
          {
            title: discountType,
            amount: percentDiscount,
          },
          {
            title: couponType,
            amount: 'خریداری شده',
            icon: <Tag size='20' color='#FF8A65' />,
          },
          {
            title: influencer,
            amount: 'اوزون سوشیال',
          },
          {
            title: couponAmount,
            amount: rialCurrency(min_invoice_amount),
          },
          {
            title: minimumCart,
            amount: rialCurrency(min_invoice_amount),
          },
          {
            title: couponCode,
            amount: code,
          },
          {
            title: expirationDate,
            amount: persianDateGenerator(new Date(expired_at)),
          },
        ]
      : [
          {
            title: couponSituation,
            amount: status === 'ACTIVE' ? active : status === 'INACTIVE' ? inActive : expired,
          },
          {
            title: discountType,
            amount: rialDiscount,
          },
          {
            title: couponType,
            amount: 'خریداری شده',
            icon: <Box size='20' color='#FF8A65' />,
          },
          {
            title: couponAmount,
            amount: rialCurrency(amount),
          },
          {
            title: minimumCart,
            amount: rialCurrency(min_invoice_amount),
          },
          {
            title: couponCode,
            amount: code,
          },
          {
            title: expirationDate,
            amount: persianDateGenerator(new Date(expired_at)),
          },
        ];
  return (
    <Container center className='flex-col gap-6 p-5'>
      <Container center className='relative my-4 w-full'>
        <Text bold className='text-[22px]'>
          {couponDetails}
        </Text>
        <ArrowRight
          size='28'
          className='absolute right-0 top-1 text-white'
          onClick={() => goToVoucherPage()}
        />
      </Container>
      <Container
        center
        className='mx-auto w-full  flex-col gap-3 rounded-xl bg-neutral-800 p-5 pb-2'
      >
        <Container
          center
          className='gray-down-dash-border relative w-full flex-col gap-3 pb-3'
        >
          <Text className='text-neutral-500'>{canBeUsedIn}</Text>
          <Logos logos={voucher_businesses} expired={status === 'EXPIRED'} />

          <Text size={SIZE_ENUM.MD} bold className='my-2 text-white'>
            {amount_type === 'PERCENT' && cards.couponValue(max_percent_amount, amount)}
            {amount_type === 'PRICE' && cards.couponValue(amount)}
          </Text>
          <span
            className={
              'absolute -bottom-2.5 -right-[20px] h-5 w-[10px] rounded-bl-full rounded-tl-full' +
              ' bg-neutral-900'
            }
          />
          <span
            className={
              'absolute -bottom-2.5 -left-[20px] h-5 w-[10px] rounded-br-full rounded-tr-full' +
              ' bg-neutral-900'
            }
          />
        </Container>
        <Container center className='w-full max-w-[420px] flex-col pt-2 md:pt-6'>
          {items.map((i, index) => (
            <Container center className='mb-4 w-full justify-between'>
              <Text medium size={SIZE_ENUM.SM} className='text-neutral-200'>
                {i.title}
              </Text>
              <Text
                bold
                size={SIZE_ENUM.SM}
                className={cn(
                  'text-white',
                  (index === 0 || index === 2) &&
                    'flex items-center gap-2 rounded-3xl bg-neutral-700 px-4 py-2',
                  status === 'EXPIRED' && index === 0 && 'bg-neutral-900 text-danger-200',
                )}
              >
                {i.icon && i.icon}
                {i.amount}
              </Text>
              {/*<Container center className='gap-1'>*/}
              {/*  <Text bold size={SIZE_ENUM.LG} color={COLOR_ENUM.PRIMARY}>*/}
              {/*    5000000*/}
              {/*  </Text>*/}
              {/*  <Text medium size={SIZE_ENUM.MD} color={COLOR_ENUM.PRIMARY}>*/}
              {/*    rial*/}
              {/*  </Text>*/}
              {/*</Container>*/}
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default VoucherDetail;

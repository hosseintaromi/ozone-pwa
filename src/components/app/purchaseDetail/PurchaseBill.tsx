'use client';
import { useState } from 'react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import ICON_SIZE from '@/constant/icon-size-color';
import { ArrowDown2, Card, TicketDiscount } from 'iconsax-react';
import locale from '@/locale';
import { formatNumberWithCommas } from '@/lib/helper';
import { invoiceDetail } from '@/models/transaction.model';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';

const SeeMorePurchase = ({
  data,
}: {
  data: invoiceDetail | undefined;
  isLoading: boolean;
}) => {
  const {
    app: { purchaseDetail },
    common,
  } = locale;

  function sumAmounts(dataArray, key) {
    let totalAmount = 0;
    for (let i = 0; i < dataArray.length; i++) {
      totalAmount += dataArray[i][key];
    }
    return totalAmount;
  }

  const accountWalletTotal = data && sumAmounts(data.account_wallet, 'amount');
  const vouchersTotal = data && sumAmounts(data.vouchers, 'amount');

  const invoicesList = [
    {
      name: purchaseDetail.amountPaid,
      amount: data?.paid_amount,
    },
    {
      name: purchaseDetail.accountNumber,
      amount: 9999999999999,
    },
    {
      name: purchaseDetail.issueTracking,
      amount: 9999999999999,
    },
  ];

  const [isWithdrawOpen, setWithdrawOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  return (
    <>
      <Container
        center
        className={cn('bg-neutral-850 mb-4 w-full flex-col rounded-xl   border-none')}
      >
        {data ? (
          <Container className='w-full '>
            <Container
              center
              className={cn(
                'my-2 w-full cursor-pointer justify-between px-4',
                data.account_wallet.length > 0 && 'bg-neutral-700/40 py-3',
              )}
              onClick={() => setWithdrawOpen((prev) => !prev)}
            >
              <Text
                size={data?.account_wallet.length > 0 ? SIZE_ENUM.SM : SIZE_ENUM.SM}
                className={cn('flex gap-2 text-neutral-200')}
              >
                <Card className='text-neutral-500' />
                {`${purchaseDetail.withdraw}  ${formatNumberWithCommas(accountWalletTotal)} ${common.rial}`}
              </Text>
              <Container center className='gap-1'>
                {data?.account_wallet.length > 0 && (
                  <ArrowDown2
                    size={ICON_SIZE.md}
                    className={cn(
                      'mr-1 rotate-0 text-white transition duration-300',
                      isWithdrawOpen && 'rotate-180 ',
                    )}
                  />
                )}
              </Container>
            </Container>
            {data?.account_wallet.length > 0 && (
              <Container
                className={cn(
                  'grid w-full grid-rows-[0fr] transition-all duration-200 ',
                  isWithdrawOpen && 'grid-rows-[1fr]',
                )}
              >
                <Container center className={cn(`flex-col gap-1 overflow-hidden px-4`)}>
                  {data?.account_wallet.map((item, index) => (
                    <Container center className='my-2 w-full justify-between' key={index}>
                      <Text bold size={SIZE_ENUM.SM} className='text-neutral-500'>
                        {item.wallet.name}
                      </Text>
                      <Container center className='gap-1'>
                        <Text size={SIZE_ENUM.SM} bold className='text-neutral-500'>
                          {formatNumberWithCommas(item.amount)}
                        </Text>
                        <Text size={SIZE_ENUM.SM} bold className='text-neutral-500'>
                          {common.rial}
                        </Text>
                      </Container>
                    </Container>
                  ))}
                  <hr className='my-1 w-full border-b-[1px] border-neutral-700' />
                </Container>
              </Container>
            )}
            <Container
              center
              className={cn(
                'my-2 w-full cursor-pointer justify-between px-4',
                data.vouchers.length > 0 && 'bg-neutral-700/40 py-3',
              )}
              onClick={() => setIsCouponOpen((prev) => !prev)}
            >
              <Text
                size={data.vouchers.length > 0 ? SIZE_ENUM.SM : SIZE_ENUM.SM}
                className={cn('flex gap-2 text-neutral-200')}
              >
                <TicketDiscount className='text-neutral-500' />

                {`${purchaseDetail.useCoupon}  ${formatNumberWithCommas(vouchersTotal)} ${common.rial}`}
              </Text>
              <Container center className='gap-1'>
                {data.vouchers.length > 0 && (
                  <ArrowDown2
                    size={ICON_SIZE.md}
                    className={cn(
                      'mr-1 rotate-0  text-white transition duration-300',
                      isCouponOpen && 'rotate-180 ',
                    )}
                  />
                )}
              </Container>
            </Container>
            {data.vouchers.length > 0 && (
              <Container
                className={cn(
                  'grid w-full grid-rows-[0fr] transition-all duration-200 ',
                  isCouponOpen && 'grid-rows-[1fr]',
                )}
              >
                <Container center className={cn(`flex-col gap-1 overflow-hidden px-4`)}>
                  {data?.vouchers.map((item, index) => (
                    <Container center className='my-2 w-full justify-between' key={index}>
                      <Text bold size={SIZE_ENUM.SM} className='text-neutral-500'>
                        {item.name}
                      </Text>
                      <Container center className='gap-1'>
                        <Text size={SIZE_ENUM.SM} bold className='text-neutral-500'>
                          {formatNumberWithCommas(item.amount)}
                        </Text>
                        <Text size={SIZE_ENUM.SM} bold className='text-neutral-500'>
                          {common.rial}
                        </Text>
                      </Container>
                    </Container>
                  ))}
                  <hr className='my-1 w-full border-neutral-700' />
                </Container>
              </Container>
            )}
            {invoicesList.map((item, index) => (
              <Container center className='my-2 w-full justify-between px-4' key={index + 100}>
                <Text
                  bold
                  size={SIZE_ENUM.SM}
                  className={cn('text-neutral-200', index === 3 && 'text-neutral-0')}
                >
                  {item.name}
                </Text>
                <Container center className='gap-1'>
                  <Text
                    bold
                    size={index < 3 ? SIZE_ENUM.MD : SIZE_ENUM.XMD}
                    className={cn('text-neutral-200', index === 3 && 'text-primary')}
                  >
                    {formatNumberWithCommas(item.amount)}
                  </Text>
                  <Text
                    bold
                    size={SIZE_ENUM.SM}
                    className={cn('text-neutral-200', index === 3 && 'text-primary')}
                  >
                    {common.rial}
                  </Text>
                </Container>
              </Container>
            ))}
          </Container>
        ) : (
          <Container className='w-full'>
            <SkeletonLoader width='w-full' height='h-14' className='mt-2' />
            <SkeletonLoader width='w-full' height='h-14' className='mt-6' />
            <SkeletonLoader width='w-full' height='h-6' className='mt-3' />
            <SkeletonLoader width='w-full' height='h-6' className='mt-3' />
            <SkeletonLoader width='w-full' height='h-6' className='mt-3' />
          </Container>
        )}
      </Container>
    </>
  );
};
export default SeeMorePurchase;

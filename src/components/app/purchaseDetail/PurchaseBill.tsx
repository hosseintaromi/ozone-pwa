'use client';
import { useState } from 'react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import ICON_SIZE from '@/constant/icon-size-color';
import { ArrowDown2, Card, TicketDiscount } from 'iconsax-react';
import locale from '@/locale';
import { formatNumberWithCommas } from '@/lib/helper';

const SeeMorePurchase = () => {
  const {
    app: { purchaseDetail },
    common,
  } = locale;
  const withdrawFromAccount = 3000000;
  const invoiceItems = [
    {
      title: purchaseDetail.amountPaid,
      amount: 20000000,
    },
    {
      title: purchaseDetail.accountNumber,
      amount: 20000000,
    },
    {
      title: purchaseDetail.issueTracking,
      amount: 20000000,
    },
  ];
  const withdrawItems = [
    {
      title: 'کالارسان هستی',
      amount: 20000000,
    },
    {
      title: 'فیلم نت',
      amount: 20000000,
    },

    {
      title: 'اوزون',
      amount: 20000000,
    },
    {
      title: 'جمع مبلغ تخفیف',
      amount: 20000000,
    },
  ];
  const [isWithdrawOpen, setWithdrawOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  return (
    <>
      <Container
        center
        className={cn(
          'dark:bg-neutral-850 mb-4 w-full flex-col rounded-xl border-[1px] border-neutral-50 md:pb-2 md:pt-6 dark:border-none',
        )}
      >
        <Container className='w-full md:max-h-[330px] md:overflow-y-auto'>
          <Container
            center
            className={cn(
              'my-2 w-full cursor-pointer justify-between px-4',
              withdrawFromAccount > 0 && 'bg-neutral-75 py-3 dark:bg-neutral-700/40',
            )}
            onClick={() => setWithdrawOpen((prev) => !prev)}
          >
            <Text
              size={withdrawFromAccount > 0 ? SIZE_ENUM.SM : SIZE_ENUM.SM}
              className={cn('flex gap-2 text-neutral-200')}
            >
              <Card color='#7C7F82' />
              {purchaseDetail.withdraw}
              (3,000,000 ریال)
            </Text>
            <Container center className='gap-1'>
              {withdrawFromAccount > 0 && (
                <ArrowDown2
                  size={ICON_SIZE.md}
                  className={cn(
                    'mr-1 rotate-0 text-neutral-700 transition duration-300 dark:text-white',
                    isWithdrawOpen && 'rotate-180 ',
                  )}
                />
              )}
            </Container>
          </Container>
          {withdrawFromAccount > 0 && (
            <Container
              className={cn(
                'grid w-full grid-rows-[0fr] transition-all duration-200 ',
                isWithdrawOpen && 'grid-rows-[1fr]',
              )}
            >
              <Container center className={cn(`flex-col gap-1 overflow-hidden px-4`)}>
                {withdrawItems.map((item, index) => (
                  <Container center className='my-2 w-full justify-between' key={index}>
                    <Text
                      bold
                      size={SIZE_ENUM.SM}
                      className='text-neutral-200 dark:text-neutral-500'
                    >
                      {item.title}
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
                <hr className='my-1 w-full border-b-[1px] border-neutral-50 dark:border-neutral-700' />
              </Container>
            </Container>
          )}
          <Container
            center
            className={cn(
              'my-2 w-full cursor-pointer justify-between px-4',
              withdrawFromAccount > 0 && 'bg-neutral-75 py-3 dark:bg-neutral-700/40',
            )}
            onClick={() => setIsCouponOpen((prev) => !prev)}
          >
            <Text
              size={withdrawFromAccount > 0 ? SIZE_ENUM.SM : SIZE_ENUM.SM}
              className={cn('flex gap-2 text-neutral-200')}
            >
              <TicketDiscount color='#7C7F82' />
              {purchaseDetail.withdraw}
              (3,000,000 ریال)
            </Text>
            <Container center className='gap-1'>
              {withdrawFromAccount > 0 && (
                <ArrowDown2
                  size={ICON_SIZE.md}
                  className={cn(
                    'mr-1 rotate-0 text-neutral-700 transition duration-300 dark:text-white',
                    isCouponOpen && 'rotate-180 ',
                  )}
                />
              )}
            </Container>
          </Container>
          {withdrawFromAccount > 0 && (
            <Container
              className={cn(
                'grid w-full grid-rows-[0fr] transition-all duration-200 ',
                isCouponOpen && 'grid-rows-[1fr]',
              )}
            >
              <Container center className={cn(`flex-col gap-1 overflow-hidden px-4`)}>
                {withdrawItems.map((item, index) => (
                  <Container center className='my-2 w-full justify-between' key={index}>
                    <Text
                      bold
                      size={SIZE_ENUM.SM}
                      className='text-neutral-200 dark:text-neutral-500'
                    >
                      {item.title}
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
                <hr className='my-1 w-full border-b-[1px] border-neutral-50 dark:border-neutral-700' />
              </Container>
            </Container>
          )}
          {invoiceItems.map((item, index) => (
            <Container center className='my-2 w-full justify-between px-4' key={index + 100}>
              <Text
                bold
                size={SIZE_ENUM.SM}
                className={cn(
                  'text-neutral-500 dark:text-neutral-200',
                  index === 3 && 'text-neutral-800 dark:text-neutral-0',
                )}
              >
                {item.title}
              </Text>
              <Container center className='gap-1'>
                <Text
                  bold
                  size={index < 3 ? SIZE_ENUM.MD : SIZE_ENUM.XMD}
                  className={cn(
                    'text-neutral-800 dark:text-neutral-200',
                    index === 3 && 'text-primary',
                  )}
                >
                  {formatNumberWithCommas(item.amount)}
                </Text>
                <Text
                  bold
                  size={SIZE_ENUM.SM}
                  className={cn(
                    'text-neutral-800 dark:text-neutral-200',
                    index === 3 && 'text-primary',
                  )}
                >
                  {common.rial}
                </Text>
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </>
  );
};
export default SeeMorePurchase;

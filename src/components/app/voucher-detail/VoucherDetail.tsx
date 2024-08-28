import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import cn from '@/lib/clsxm';
import locale from '@/locale';
import { ArrowRight } from 'iconsax-react';
import XImage from '@/components/share/x-image';
// import Logos from '@/components/app/voucher-detail/components/Logos';

const VoucherDetail = () => {
  const {
    common: { canBeUsedIn, expirationDate },
    app: {
      voucher: {
        couponDetails,
        couponCode,
        minimumCart,
        couponSituation,
        couponAmount,
        discountType,
      },
    },
  } = locale;
  const items = [
    {
      title: couponSituation,
      amount: 'فعال',
    },
    {
      title: discountType,
      amount: 'تخفیف درصدی',
    },
    {
      title: couponAmount,
      amount: '۱۲,000,000 ریال',
    },
    {
      title: minimumCart,
      amount: 12750000,
    },
    {
      title: couponCode,
      amount: 12750000,
    },
    {
      title: expirationDate,
      amount: 'سه شنبه 24 مرداد 18:30',
    },
  ];
  return (
    <Container center className='flex-col gap-6 p-5'>
      <Container center className='relative my-4 w-full'>
        <Text bold className='text-[22px]'>
          {couponDetails}
        </Text>
        <ArrowRight size='28' className='absolute right-0 top-1 text-white' />
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
          <Container center className='rounded-full bg-white p-2'>
            <XImage
              src='/images/mock/filmeNet.svg'
              width={35}
              height={35}
              alt='success logo'
            />
            {/*<Logos />*/}
          </Container>

          <Text size={SIZE_ENUM.MD} medium className='text-neutral-500'>
            افق کوروش
          </Text>
          <Text size={SIZE_ENUM.MD} bold className='my-2 text-neutral-0'>
            کوپن ۲۵ ٪ به ارزش ۳,۰۰۰,۰۰۰ ریال
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
            <Container
              center
              className={cn(
                'mb-4 w-full justify-between',
                index === 3 && 'border-t-[1px]pt-4 mt-1 border-neutral-700',
              )}
            >
              <Text medium size={SIZE_ENUM.SM} className={'text-neutral-200'}>
                {i.title}
              </Text>
              <Text bold size={SIZE_ENUM.SM} className={'text-neutral-0'}>
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

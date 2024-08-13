'use client';
import { SIZE_ENUM, VARIANT_ENUM } from '@/@types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import locale from '@/locale';
import React, { useState } from 'react';
import PurchaseBill from './PurchaseBill';
import { ArrowRight } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constant/routes';
import Button from '@/components/share/button';
import PurchaseDialog from './PurchaseDialog';
import { usePurchaseDetail } from '@/services/hooks';
import { formatNumberWithCommas } from '@/lib/helper';
import {
  SkeletonLoaderAvatar,
  SkeletonLoaderText,
  SkeletonLoader,
} from '@/components/share/skeleton/SkeletonLoader';
import { convertRfcToJalaliWithClock } from '@/lib/date';

const PurchaseDetail = ({ params }: { params: string }) => {
  const {
    app: { purchaseDetail },
  } = locale;
  const router = useRouter();
  const [show, setShow] = useState(false);

  const { data, isLoading } = usePurchaseDetail(params);
  return (
    <>
      <PurchaseDialog setShow={setShow} show={show} data={data} />
      <Container className='relative my-7 flex justify-center'>
        <ArrowRight
          size='28'
          color='white'
          className='absolute right-0'
          onClick={() => router.push(ROUTES.HOME)}
        />
        <Text size={SIZE_ENUM.LG}>{purchaseDetail.title}</Text>
      </Container>
      <Container
        center
        className='mx-auto w-full max-w-[950px] flex-col
       gap-3 rounded-xl bg-neutral-800 p-5 pb-2 '
      >
        {isLoading ? (
          <SkeletonLoaderAvatar />
        ) : (
          <Container className=' w-10'>
            {data?.business.logo_base_url && data?.business.logo_path && (
              <XImage
                src={data?.business.logo_base_url + data?.business.logo_path}
                alt='Picture of the author'
                width={1000}
                height={1000}
              />
            )}
          </Container>
        )}

        {isLoading ? (
          <>
            <SkeletonLoader width='w-24' height='h-6' />
            <SkeletonLoader width='w-2/3' height='h-4' className='mt-3' />
          </>
        ) : (
          <>
            <Text size={SIZE_ENUM.XMD}>
              {purchaseDetail.buyFrom}
              {data?.business.name}
            </Text>

            <Text className='mt-1 text-neutral-500'>
              {' '}
              {convertRfcToJalaliWithClock(data?.created_at || '')}
            </Text>
          </>
        )}
        <Container className='flex w-full justify-between'>
          <Text className='text-neutral-300'>{purchaseDetail.totalAmount}</Text>
          {isLoading ? (
            <SkeletonLoader width='w-1/3' height='h-3' className='mt-2' />
          ) : (
            <Text>{`${locale.common.rial} ${data && formatNumberWithCommas(data.amount)}`}</Text>
          )}
        </Container>
        <Container
          center
          className='gray-down-dash-border relative w-full max-w-[420px] flex-col gap-3 from-[#32373B] from-30% to-[#7C7F82FF] to-0% pb-3 md:pb-6 dark:bg-gradient-to-r'
        >
          <span
            className={
              'absolute -bottom-2.5 -right-[20px] h-5 w-[10px] rounded-bl-full rounded-tl-full' +
              ' bg-neutral-50 md:hidden dark:bg-neutral-900'
            }
          />
          <span
            className={
              'absolute -bottom-2.5 -left-[20px] h-5 w-[10px] rounded-br-full rounded-tr-full' +
              ' bg-neutral-50 md:hidden dark:bg-neutral-900'
            }
          />
        </Container>
        <PurchaseBill data={data} isLoading={isLoading} />

        <Button
          onClick={() => setShow((pre) => !pre)}
          variant={VARIANT_ENUM.OUTLINED}
          className='mb-4  w-full py-6'
        >
          {purchaseDetail.purchasedGoods}
        </Button>
      </Container>
    </>
  );
};

export default PurchaseDetail;

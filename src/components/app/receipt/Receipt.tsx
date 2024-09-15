'use client';
import { Button, COLOR_ENUM, Container, SIZE_ENUM, Text } from 'ozone-uikit';
import ReceiptCard from '@/components/app/receipt/ReceiptCard';
import locale from '@/locale';
import { useTimer } from 'react-timer-hook';
import React, { useEffect } from 'react';
import { addToTime } from '@/lib/date';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetReceipt } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';

const Receipt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    common: { transactionReceipt, returnToPrevURL },
  } = locale;
  const { seconds, restart } = useTimer({
    expiryTimestamp: new Date(),
    onExpire: () => router.push('/wallet'),
  });
  const { data, isLoading } = useGetReceipt(searchParams.get('token'));
  useEffect(() => {
    const time = addToTime(new Date(), 15, { unit: 'SECONDS' });
    restart(time);
  }, []);
  return (
    <Container
      center
      className='relative mt-16 h-dvh w-full flex-col justify-between overflow-y-auto rounded-b-2xl rounded-t-2xl bg-neutral-900 px-5'
    >
      <Container center className='w-full flex-col gap-3'>
        <Text size={SIZE_ENUM.LG} className='mb-8' bold>
          {transactionReceipt}
        </Text>
        {data && <ReceiptCard data={data} />}
        {isLoading && <ReceiptLoading />}
      </Container>
      <Container className='mb-5 mt-6 w-full'>
        <Button
          color={COLOR_ENUM.PRIMARY}
          size={SIZE_ENUM.XXL}
          className='w-full'
          onClick={() => router.push('/wallet')}
        >
          {returnToPrevURL(`${seconds}`)}
        </Button>
      </Container>
    </Container>
  );
};

export default Receipt;

const ReceiptLoading = () => (
  <SkeletonLoader width='w-full' height='h-[400px]' className='rounded-xl' />
);

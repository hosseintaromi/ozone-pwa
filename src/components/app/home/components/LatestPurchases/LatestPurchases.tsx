'use client';
import React, { useEffect } from 'react';

import { SIZE_ENUM } from '@/components/share/@helpers/types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import { COLOR_ENUM } from '@/@types';
import locale from '@/locale';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import { useGetInvoices } from '@/services/hooks';
import { Button, VARIANT_ENUM } from 'ozone-uikit';
import { useRouter } from 'next/navigation';
import PurchaseItem from '@/components/app/home/components/LatestPurchases/PurchaseItem';

const LatestPurchases = () => {
  const router = useRouter();
  const { app, common } = locale;
  const { data: invoices, isPending, mutate } = useGetInvoices();
  useEffect(() => {
    mutate({
      page: '1',
    });
  }, []);
  return (
    <Container className='mx-5 mt-5 min-h-[330px] cursor-pointer rounded-xl bg-neutral-800 p-5'>
      <Text color={COLOR_ENUM.WHITE} size={SIZE_ENUM.MD} className='mb-8'>
        {app.latestPurchases}
      </Text>
      {!isPending ? (
        invoices &&
        invoices?.length > 0 &&
        invoices.slice(0, 4).map((item, index) => <PurchaseItem item={item} index={index} />)
      ) : (
        <Container>
          {[1, 2].map((item) => (
            <Container
              key={'invoice' + 'loading' + item}
              className='border-b-[1px] border-gray-700 pb-2'
            >
              <SkeletonLoader width='w-8' height='h-8' className='mt-3 rounded-full' />
              <Container className='flex w-full justify-between'>
                <SkeletonLoader width='w-20' height='h-3' className='mt-2' />
                <SkeletonLoader width='w-28' height='h-3' className='mt-2' />
              </Container>
              <SkeletonLoader width='w-52' height='h-3' className='mt-4' />
            </Container>
          ))}
        </Container>
      )}
      {invoices?.length === 0 && !isPending && (
        <Container center className='mt-[20%] flex-col gap-4'>
          <XImage
            src='/images/image/emptyState.svg'
            alt='Picture of the author'
            width={140}
            height={70}
          />
          <Text className='text-bold text-sm text-neutral-500'>
            {app.purchaseDetail.noPurchase}
          </Text>
        </Container>
      )}
      {invoices && invoices?.length > 4 && (
        <Button
          variant={VARIANT_ENUM.TEXT}
          className='mx-auto text-primary'
          onClick={() => router.push('/transaction-list')}
        >
          {common.showMore}
        </Button>
      )}
    </Container>
  );
};

export default LatestPurchases;

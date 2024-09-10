'use client';
import { ArrowLeft2 } from 'iconsax-react';
import React, { useEffect } from 'react';

import { SIZE_ENUM } from '@/components/share/@helpers/types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import { COLOR_ENUM } from '@/@types';
import { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import { formatNumberWithCommas } from '@/lib/helper';
import { convertRfcToJalaliWithClock } from '@/lib/date';
import cn from '@/lib/clsxm';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import { useGetInvoices } from '@/services/hooks';

const LatestPurchases = () => {
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
        invoices.map((item, index) => (
          <Container
            key={'invoice' + item.invoice.id + index}
            className={cn(
              'mb-5 pb-2',
              invoices.length > index + 1 && 'border-b-[1px] border-gray-700',
            )}
          >
            <Link href={`${ROUTES.PURCHASE_DETAIL}/${item.invoice.id}`}>
              <Container center className='justify-between'>
                <Container className=' w-8'>
                  <XImage
                    className='rounded-full'
                    src={item.business.logo_base_url + item.business.logo_path}
                    alt='Picture of the author'
                    width={1000}
                    height={1000}
                  />
                </Container>
                <ArrowLeft2 color={ICON_COLOR.light_gray} />
              </Container>
              <Container center className='justify-between'>
                <Text color={COLOR_ENUM.WHITE}>{item.business.name}</Text>
                <Text>
                  {formatNumberWithCommas(item.invoice.amount)} {common.rial}
                </Text>
              </Container>
              <Text color={COLOR_ENUM.LIGHT_GRAY}>
                {convertRfcToJalaliWithClock(item.invoice.created_at)}
              </Text>
            </Link>
          </Container>
        ))
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
    </Container>
  );
};

export default LatestPurchases;

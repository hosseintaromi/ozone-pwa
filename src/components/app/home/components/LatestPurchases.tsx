'use client';
import { ArrowLeft2 } from 'iconsax-react';
import React from 'react';

import { SIZE_ENUM } from '@/components/share/@helpers/types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import { COLOR_ENUM } from '@/@types';
import { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import { invoicesListBody } from '@/models/transaction.model';
import { formatNumberWithCommas } from '@/lib/helper';
import { convertRfcToJalaliWithClock } from '@/lib/date';
import cn from '@/lib/clsxm';
import {
  SkeletonLoader,
  SkeletonLoaderAvatar,
} from '@/components/share/skeleton/SkeletonLoader';

const LatestPurchases = ({ invoices }: { invoices: invoicesListBody[] | undefined }) => {
  const { app, common } = locale;
  console.log('first', invoices);
  return (
    <Container className='mx-5 mt-5 cursor-pointer rounded-xl bg-neutral-800 p-5'>
      <Text color={COLOR_ENUM.WHITE} size={SIZE_ENUM.MD}>
        {app.latestPurchases}
      </Text>
      {invoices ? (
        invoices.length > 0 &&
        invoices.map((item, index) => (
          <Container
            className={cn(
              'mt-2',
              invoices.length > index + 1 && 'border-b-[1px] border-gray-700',
            )}
          >
            <Link href={`${ROUTES.PurchaseDetail}/20`}>
              <Container center className='justify-between'>
                <Container className=' w-8'>
                  <XImage
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
          {[1, 1].map(() => (
            <Container className='border-b-[1px] border-gray-700 pb-2'>
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
    </Container>
  );
};

export default LatestPurchases;

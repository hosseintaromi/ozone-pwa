'use client';
import { CardAdd, InfoCircle } from 'iconsax-react';
import { Container, Text } from 'ozone-uikit';
import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import HorizontalCard from './components/HorizontalCard';
import NestedSwiper from './components/NestedSwiper';
import { HorizontalCardType } from './type';
import Navbar from '../../share/navbar/Navbar';
import locale from '../../../locale';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';

const data: HorizontalCardType[] = [
  {
    title: 'افزایش موجودی',
    date: 'چهارشنبه۲۴ اردیبهشت 1402- 15:20',
    amount: '150,000,000',
    isPayIn: true,
  },
  {
    title: 'افزایش موجودی',
    date: 'چهارشنبه۲۴ اردیبهشت 1402- 15:20',
    amount: '150,000,000',
    isPayIn: false,
  },
  {
    title: 'افزایش موجودی',
    date: 'چهارشنبه۲۴ اردیبهشت 1402- 15:20',
    amount: '150,000,000',
    isPayIn: true,
  },
  {
    title: 'افزایش ',
    date: 'چهارشنبه۲۴ اردیبهشت 1402- 15:20',
    amount: '150,000,000',
    isPayIn: true,
  },
];

export default function Wallet() {
  const { app } = locale;
  return (
    <div className='h-full bg-neutral-800'>
      <Navbar>
        <InfoCircle color='#fff' size={30} />
        <Text>حساب ها</Text>

        <Link href={ROUTES.AddWALLET}>
          <CardAdd color='#fff' size={30} />
        </Link>
      </Navbar>
      <NestedSwiper />
      <BottomSheet
        open={true}
        blocking={false}
        header
        snapPoints={({ maxHeight }) => {
          if (maxHeight > 800) return [maxHeight / 1.4, maxHeight];
          else if (maxHeight > 700) return [maxHeight / 1.5, maxHeight];
          else if (maxHeight > 600) return [maxHeight / 1.6, maxHeight];
          else if (maxHeight > 500) return [maxHeight / 1.7, maxHeight];
          else return [maxHeight / 1.5, maxHeight];
        }}
        className='text-white'
      >
        <Container className='mb-20  px-5'>
          <Text className='text-lg'>{app.transactions}</Text>
          <Container>
            {data.map((item, index) => (
              <Link href={ROUTES.PurchaseDetail}>
                <HorizontalCard key={index} data={item} />
              </Link>
            ))}
          </Container>

          {/* <Container center className='mt-24 flex-col gap-4'>
            <XImage
              placeholder
              src='/images/image/emptyState.svg'
              alt='Picture of the author'
              width={140}
              height={70}
            />
            <Text className='text-neutral-500 text-bold text-sm' >
              {app.emptyTransactions}
            </Text>
          </Container> */}
        </Container>
      </BottomSheet>
    </div>
  );
}

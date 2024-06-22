'use client';
import { Container, Text } from 'ozone-uikit';
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';

import Navbar from '@/components/share/navbar/Navbar';

import locale from '@/locale';

import { HorizontalCardType } from './home';
import HorizontalCard from './HorizontalCard';
import NestedSwiper from './NestedSwiper';

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

export default function Home() {
  const { app } = locale;
  return (
    <div className='h-full bg-neutral-800'>
      <Navbar />
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
              <HorizontalCard key={index} data={item} />
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

      {/* <Modal show={show} onClose={() => setShow(false)}>
        <ModalHead isCustomHead></ModalHead>
        <ModalBody className='flex flex-col gap-2.5'>hoss</ModalBody>
      </Modal> */}
    </div>
  );
}

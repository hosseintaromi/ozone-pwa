'use client';
import { CardAdd, InfoCircle } from 'iconsax-react';
import { Container, Text } from 'ozone-uikit';
import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import HorizontalCard from './components/WalletTransactionCard';
import NestedSwiper from './components/NestedSwiper';
import Navbar from '../../share/navbar/Navbar';
import locale from '@/locale';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import { useGetWalletTransactions } from '@/services/hooks';
import Spinner from '@/components/share/spinner/Spinner';
import { Virtuoso } from 'react-virtuoso';
import cn from '@/lib/clsxm';
import XImage from '@/components/share/x-image';
import useWalletStore from '@/store/wallet-store';

export default function Wallet() {
  const [sheetHeight, setSheetHeight] = useState(500);
  const { selectedWallet } = useWalletStore();
  const {
    app: { transactions, emptyTransactions },
    wallet: { title },
  } = locale;
  const {
    data: transaction,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetWalletTransactions(selectedWallet?.id);
  const flatTransactions = transaction?.pages.flatMap((data) => data.data);

  return (
    <div className='h-dvh bg-neutral-800'>
      <Navbar>
        <InfoCircle color='#fff' size={30} />
        <Text>{title} </Text>

        <Link href={ROUTES.ADD_WALLET}>
          <CardAdd color='#fff' size={30} />
        </Link>
      </Navbar>
      <NestedSwiper />
      <BottomSheet
        open={true}
        blocking={false}
        header
        snapPoints={({ maxHeight }) => {
          if (maxHeight > 800) return [maxHeight / 1.6, maxHeight];
          else if (maxHeight > 700) return [maxHeight / 1.8, maxHeight];
          else if (maxHeight > 600) return [maxHeight / 1.8, maxHeight];
          else if (maxHeight > 500) return [maxHeight / 1.9, maxHeight];
          else return [maxHeight / 1.7, maxHeight];
        }}
        defaultSnap={({ lastSnap }) => {
          lastSnap && setSheetHeight(lastSnap);
          return lastSnap ? lastSnap : 500;
        }}
        className='!overflow-hidden text-white'
      >
        <Container className='relative mb-20 overflow-hidden px-5 pt-8'>
          <Text className='absolute top-3 z-10 w-full bg-neutral-900 pb-3 text-lg'>
            {transactions}
          </Text>

          {flatTransactions && flatTransactions.length > 0 && (
            <Virtuoso
              // style={{ height: '300px' }}
              className={cn('pb-30 mb-[60px]')}
              style={{ height: `${sheetHeight - 70}px` }}
              endReached={() =>
                hasNextPage && !isFetchingNextPage && !isPending && fetchNextPage()
              }
              fixedItemHeight={110}
              overscan={200}
              components={{
                Footer: () => (
                  <Container className='pb-20'>
                    {isFetchingNextPage && (
                      <Container center>
                        <Spinner />
                      </Container>
                    )}
                  </Container>
                ),
              }}
              data={flatTransactions}
              itemContent={(index, item) => <HorizontalCard data={item} />}
            />
          )}
          {flatTransactions?.length === 0 && !isPending && (
            <Container center className='mt-24 flex-col gap-4'>
              <XImage
                src='/images/image/emptyState.svg'
                alt='Picture of the author'
                width={140}
                height={70}
              />
              <Text className='text-bold text-sm text-neutral-500'>{emptyTransactions}</Text>
            </Container>
          )}
          {isPending && (
            <Container center className='mt-[25%]'>
              <Spinner />
            </Container>
          )}
        </Container>
      </BottomSheet>
    </div>
  );
}

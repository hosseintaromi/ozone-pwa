'use client';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import Header from '@/components/app/voucher/components/Header';
import TabGroup, { TabPanel, TabPanels, Tabs } from '@/components/@base/tab';
import { TabDefault } from '@/components/@base/tab/stylish';
import locale from '@/locale';
import XImage from '@/components/share/x-image';
import Card from '@/components/share/card';
import { useGetVoucher } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import { Virtuoso } from 'react-virtuoso';
import cn from '@/lib/clsxm';
import { useState } from 'react';

const Voucher = () => {
  const {
    common: { usable, used, expired },
    app: {
      voucher: { couponCanDisable, couponUnavailable },
    },
  } = locale;

  const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetVoucher();

  const flatTransactions = data?.pages.flatMap((data) => data.data);

  return (
    <Container className='overflow-hidden '>
      <Header />
      <TabGroup>
        <Tabs className='mt-4 flex w-full items-center border-b-[1px] border-neutral-500 pb-2'>
          <TabDefault>{usable}</TabDefault>
          <TabDefault>{used}</TabDefault>
          <TabDefault>{expired}</TabDefault>
        </Tabs>
        <TabPanels className='px-5 pt-5'>
          <TabPanel>
            <Text size={SIZE_ENUM.SM} bold className='text-neutral-200'>
              {couponCanDisable}
            </Text>
            {flatTransactions && flatTransactions.length > 0 && (
              <Virtuoso
                // style={{ height: '300px' }}
                className={cn('pb-30 mb-[60px]')}
                style={{ height: '600px' }}
                endReached={() =>
                  hasNextPage && !isFetchingNextPage && !isPending && fetchNextPage()
                }
                fixedItemHeight={170}
                overscan={10}
                components={{
                  Footer: () => (
                    <Container className='pb-20'>
                      {isFetchingNextPage && (
                        <Container center>
                          <VoucherLoading />
                        </Container>
                      )}
                    </Container>
                  ),
                }}
                data={flatTransactions}
                itemContent={(index, item) => (
                  <Card data={item} key={`voucherItem${item.id}`} />
                )}
              />
            )}
            {/* {flatTransactions && flatTransactions.map((c, i) => <Card data={c} key={`voucherItem${i}`} />)} */}
            {isPending &&
              [1, 2, 3, 4, 5].map((i) => <VoucherLoading key={`'voucherLoading'${i}`} />)}
          </TabPanel>
          <TabPanel>
            <Container center className='h-4 h-[calc(100dvh-220px)] flex-col gap-3'>
              <XImage
                src='/images/image/emptyStates/emptyList.svg'
                alt='empty list'
                width={70}
                height={70}
              />
              <Text size={SIZE_ENUM.SM} bold className='text-neutral-500'>
                {couponUnavailable}
              </Text>
            </Container>
          </TabPanel>
          <TabPanel>3</TabPanel>
        </TabPanels>
      </TabGroup>
    </Container>
  );
};

export default Voucher;

const VoucherLoading = () => (
  <SkeletonLoader width='w-full' height='h-[168px]' className='mb-5 rounded-xl' />
);

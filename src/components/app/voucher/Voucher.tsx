'use client';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import Header from '@/components/app/voucher/components/Header';
import TabGroup, { TabPanel, TabPanels, Tabs } from '@/components/@base/tab';
import { TabDefault } from '@/components/@base/tab/stylish';
import locale from '@/locale';
import Card from '@/components/share/card';
import { useGetVoucher } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import { Virtuoso } from 'react-virtuoso';
import { useState } from 'react';
import useVoucherStore from '@/store/voucher-store';
import { VOUCHER_STATUS } from '@/models/digitalWallet.model';

const Voucher = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    common: { usable, used, expired },
  } = locale;

  return (
    <Container className='overflow-hidden '>
      <Header />
      <TabGroup onChange={(e) => setActiveTab(e)}>
        <Tabs className='mt-4 flex w-full items-center border-b-[1px] border-neutral-500 pb-2'>
          <TabDefault>{usable}</TabDefault>
          <TabDefault>{used}</TabDefault>
          <TabDefault>{expired}</TabDefault>
        </Tabs>
        <TabPanels className='px-5 pt-5'>
          <VoucherList id={0} activeTab={activeTab} />
          <VoucherList id={1} activeTab={activeTab} />
          <VoucherList id={2} activeTab={activeTab} />
        </TabPanels>
      </TabGroup>
    </Container>
  );
};

export default Voucher;

const VoucherList = ({ activeTab, id }: { id: number; activeTab: number }) => {
  const {
    app: {
      voucher: { couponCanDisable },
    },
  } = locale;

  // const { filter } = useVoucherStore();
  console.log(activeTab, id);
  const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetVoucher(
    activeTab === id,
    {
      status:
        activeTab === 0
          ? VOUCHER_STATUS.ACTIVE
          : activeTab === 1
            ? VOUCHER_STATUS.INACTIVE
            : VOUCHER_STATUS.EXPIRED,
    },
  );

  const flatTransactions = data?.pages.flatMap((data) => data.data);
  return (
    <TabPanel>
      <Text size={SIZE_ENUM.SM} bold className='text-neutral-200'>
        {couponCanDisable}
      </Text>
      {flatTransactions && flatTransactions.length > 0 && (
        <Virtuoso
          style={{ height: '670px' }}
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
          itemContent={(index, item) => <Card data={item} key={`voucherItem${item.id}`} />}
        />
      )}
      {/* {flatTransactions && flatTransactions.map((c, i) => <Card data={c} key={`voucherItem${i}`} />)} */}
      {isPending &&
        [1, 2, 3, 4, 5].map((i) => <VoucherLoading key={`'voucherLoading'${i}`} />)}
    </TabPanel>
  );
};
const VoucherLoading = () => (
  <SkeletonLoader width='w-full' height='h-[168px]' className='mb-5 rounded-xl' />
);

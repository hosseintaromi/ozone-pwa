import locale from '@/locale';
import { useGetVoucher } from '@/services/hooks';
import { VOUCHER_STATUS } from '@/models/digitalWallet.model';
import { TabPanel } from '@/components/@base/tab';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import { Virtuoso } from 'react-virtuoso';
import Card from '@/components/share/card';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import XImage from '@/components/share/x-image';
import React from 'react';

const VoucherList = ({ activeTab, id }: { id: number; activeTab: number }) => {
  const {
    app: {
      voucher: { couponCanDisable, couponUnavailable },
    },
  } = locale;
  // const { filter } = useVoucherStore();
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

  const flatVoucherList = data?.pages.flatMap((data) => data.data);
  return (
    <TabPanel>
      <Text size={SIZE_ENUM.SM} bold className='text-neutral-200'>
        {couponCanDisable}
      </Text>
      {flatVoucherList && flatVoucherList?.length > 0 && (
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
          data={flatVoucherList}
          itemContent={(index, item) => <Card data={item} key={`voucherItem${item.id}`} />}
        />
      )}
      {flatVoucherList?.length === 0 && !isPending && (
        <Container center className='mt-[40%] flex-col gap-4'>
          <XImage
            src='/images/image/emptyState.svg'
            alt='Picture of the author'
            width={140}
            height={70}
          />
          <Text className='text-bold text-sm text-neutral-500'>{couponUnavailable}</Text>
        </Container>
      )}
      {isPending &&
        [1, 2, 3, 4, 5].map((i) => <VoucherLoading key={`'voucherLoading'${i}`} />)}
    </TabPanel>
  );
};
const VoucherLoading = () => (
  <SkeletonLoader width='w-full' height='h-[168px]' className='mb-5 rounded-xl' />
);

export default VoucherList;

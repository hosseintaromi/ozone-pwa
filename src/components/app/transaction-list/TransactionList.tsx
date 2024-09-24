'use client';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import locale from '@/locale';
import { ArrowRight, CloseCircle, Sort } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { useGetInvoicesWithPagination } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import React, { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import cn from '@/lib/clsxm';
import Spinner from '@/components/share/spinner/Spinner';
import PurchaseItem from '@/components/app/home/components/LatestPurchases/PurchaseItem';
import { invoicesListParams } from '@/models/transaction.model';
import useCommonModalStore from '@/store/common-modal-store';
import TransactionFilter from '@/components/app/transaction-list/TransactionFilter';
import XImage from '@/components/share/x-image';

const TransactionList = () => {
  const {
    common: { invoiceList, noInvoice },
    app: {
      voucher: { selectStore },
    },
  } = locale;
  const router = useRouter();
  const { setShow } = useCommonModalStore();
  const [filter, setFilter] = useState<Omit<invoicesListParams, 'page'>>({
    merchant_id: undefined,
    from_date: undefined,
    to_date: undefined,
  });
  const {
    data: invoices,
    isPending,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useGetInvoicesWithPagination(filter);
  const flatInvoices = invoices?.pages.flatMap((data) => data.data);
  const showFilterModal = () => {
    setShow(true, {
      Head: () => (
        <Container center className='w-full justify-between py-3'>
          <Text bold size={SIZE_ENUM.LG}>
            {selectStore}
          </Text>
          <CloseCircle size='32' className='text-neutral-200' onClick={() => setShow(false)} />
        </Container>
      ),
      Body: () => <TransactionFilter filter={filter} setFilter={setFilter} />,
    });
  };

  useEffect(() => {
    refetch();
  }, [filter]);
  return (
    <Container className='overflow-hidden px-5'>
      <Container center className='my-8 w-full justify-between'>
        <ArrowRight size='28' className='text-white' onClick={() => router.push('/')} />
        <Text size={SIZE_ENUM.LG} bold>
          {invoiceList}
        </Text>
        <Sort size='28' className='text-white' onClick={showFilterModal} />
      </Container>
      {flatInvoices && flatInvoices.length > 0 && (
        <Virtuoso
          className={cn('pb-30 mb-[60px]')}
          style={{ height: '790px' }}
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
          data={flatInvoices}
          itemContent={(index, item) => <PurchaseItem item={item} index={index} />}
        />
      )}
      {flatInvoices?.length === 0 && !isPending && (
        <Container center className='mt-[70%] flex-col gap-4'>
          <XImage
            src='/images/image/emptyState.svg'
            alt='Picture of the author'
            width={140}
            height={70}
          />
          <Text className='text-bold text-sm text-neutral-500'>{noInvoice}</Text>
        </Container>
      )}
      {isPending &&
        [1, 2, 3, 4, 5, 6].map((i) => <TransactionLoading key={`'WalletLoading'${i}`} />)}
    </Container>
  );
};
export default TransactionList;
const TransactionLoading = () => (
  <SkeletonLoader width='w-full' height='h-[100px]' className='mt-5 rounded-xl' />
);

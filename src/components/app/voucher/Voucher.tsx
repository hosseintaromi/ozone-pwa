'use client';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import Header from '@/components/app/voucher/components/Header';
import TabGroup, { TabPanel, TabPanels, Tabs } from '@/components/@base/tab';
import { TabDefault } from '@/components/@base/tab/stylish';
import locale from '@/locale';
import XImage from '@/components/share/x-image';
import Card from '@/components/share/card';
import { useGetVoucher } from '@/services/hooks';

const Voucher = () => {
  const {
    common: { usable, used, expired },
    app: {
      voucher: { couponCanDisable, couponUnavailable },
    },
  } = locale;

  const { data } = useGetVoucher();
  console.log(data);
  return (
    <Container>
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
            {data ? data?.map((c) => <Card data={c} />) : 'no data'}
          </TabPanel>
          <TabPanel>
            <Container center className='h-[calc(100dvh-220px)] flex-col gap-3'>
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

'use client';
import { Container } from 'ozone-uikit';
import Header from '@/components/app/voucher/components/Header';
import TabGroup, { TabPanels, Tabs } from '@/components/@base/tab';
import { TabDefault } from '@/components/@base/tab/stylish';
import locale from '@/locale';
import { useState } from 'react';
import VoucherList from '@/components/app/voucher/components/VoucherList';

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

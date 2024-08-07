'use client';
import { ArrowDown2, InfoCircle } from 'iconsax-react';
import React, { useEffect } from 'react';
import { useState } from 'react';

import Container from '@/components/share/container';
import Navbar from '@/components/share/navbar/Navbar';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';

import ChooseWallet from './components/ChooseWallet';
import LatestPurchases from './components/LatestPurchases';
import { AnimatedTabs } from '../../share/animatedTabs';
import DonutChart from '../../share/charts/PieChart';
import { useGetWallet } from '@/services/hooks';
import { Wallets } from '@/models/digitalWallet';
import {
  SkeletonLoader,
  SkeletonLoaderAvatar,
} from '@/components/share/skeleton/SkeletonLoader';

const Home = () => {
  const { app } = locale;
  const [show, setShow] = useState(false);
  const tabData = [
    { id: 'daily', label: app.daily },
    { id: 'weekly', label: app.weekly },
    { id: 'monthly', label: app.monthly },
  ];

  const { data: wallets } = useGetWallet();

  const [activeWallet, setActiveWallet] = useState<Wallets | undefined>();

  useEffect(() => {
    wallets && setActiveWallet(wallets[0]);
  }, [wallets]);

  return (
    <>
      <Navbar>
        <InfoCircle color='#fff' size={24} />
        <Container className='w-44 '>
          <XImage
            src='/images/logo/Name.svg'
            alt='Picture of the author'
            width={1000}
            height={60}
          />
        </Container>
        <span className='w-6' />
      </Navbar>

      <Container className='m-5 rounded-xl bg-neutral-800/90 p-5'>
        <AnimatedTabs tabData={tabData} />
        <Container
          className='mx-auto mt-6 flex w-[262px] justify-between rounded-2xl bg-neutral-900 px-4 py-3'
          onClick={() => {
            setShow((pre) => !pre);
          }}
        >
          <Container center className='gap-3'>
            {activeWallet ? (
              <>
                <Container className='w-6'>
                  <XImage
                    src={activeWallet?.wallet.logo_base_url + activeWallet?.wallet.logo_path}
                    alt='Picture of the author'
                    width={1000}
                    height={1000}
                  />
                </Container>
                <Text>
                  {locale.common.accountStatus}
                  {activeWallet?.name}
                </Text>
              </>
            ) : (
              <Container className='flex items-center gap-4'>
                <SkeletonLoader width='w-7' height='h-7' className='rounded-full' />
                <SkeletonLoader width='w-36' height='h-5' className='w-36' />
              </Container>
            )}
          </Container>

          <ArrowDown2 className='flow' size={ICON_SIZE.lg} color={ICON_COLOR.light_gray} />
        </Container>
        <Container className='mt-5'>
          <DonutChart />
        </Container>
      </Container>
      <ChooseWallet
        show={show}
        setShow={setShow}
        data={wallets}
        activeWallet={activeWallet}
        setActiveWallet={setActiveWallet}
      />
      {/* <PhysicalCard /> */}
      <LatestPurchases />
    </>
  );
};

export default Home;

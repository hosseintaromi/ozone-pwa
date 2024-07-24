'use client';
import { ArrowDown2, InfoCircle } from 'iconsax-react';
import React from 'react';
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

const Home = () => {
  const { app } = locale;
  const [show, setShow] = useState(false);
  const tabData = [
    { id: 'daily', label: app.daily },
    { id: 'weekly', label: app.weekly },
    { id: 'monthly', label: app.monthly },
  ];
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
            <Container className='w-6'>
              <XImage
                placeholder
                src='/images/logo/SmallLogo.svg'
                alt='Picture of the author'
                width={1000}
                height={1000}
              />
            </Container>
            <Text>وضعیت حساب اوزون</Text>
          </Container>

          <ArrowDown2 className='flow' size={ICON_SIZE.lg} color={ICON_COLOR.light_gray} />
        </Container>
        <Container className='mt-5'>
          <DonutChart />
        </Container>
      </Container>
      <ChooseWallet show={show} setShow={setShow} />
      {/* <PhysicalCard /> */}
      <LatestPurchases />
    </>
  );
};

export default Home;

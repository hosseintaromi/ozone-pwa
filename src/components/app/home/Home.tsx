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
import DonutChart from '../../share/charts/DonutChart';
import { useGetDonut, useGetInvoices, useGetWallet } from '@/services/hooks';
import { Wallets } from '@/models/digitalWallet';
import {
  SkeletonLoader,
  SkeletonLoaderDonut,
} from '@/components/share/skeleton/SkeletonLoader';
import { DATE_SCOPE } from '@/models/transaction.model';

const Home = () => {
  const { app } = locale;
  const [show, setShow] = useState(false);
  const tabData = [
    { id: DATE_SCOPE.DAILY, label: app.daily },
    { id: DATE_SCOPE.WEEKLY, label: app.weekly },
    { id: DATE_SCOPE.MONTHLY, label: app.monthly },
  ];
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  function formatDate(date) {
    const pad = (num) => num.toString().padStart(2, '0');
    return (
      date.getUTCFullYear() +
      '-' +
      pad(date.getUTCMonth() + 1) +
      '-' +
      pad(date.getUTCDate()) +
      'T' +
      pad(date.getUTCHours()) +
      ':' +
      pad(date.getUTCMinutes()) +
      ':' +
      pad(date.getUTCSeconds()) +
      'Z'
    );
  }

  // Today's date
  const today = new Date();
  const formattedToday = formatDate(today);

  // Date 7 days ago
  const last7Days = new Date();
  last7Days.setDate(today.getDate() - 7);
  const formattedLast7Days = formatDate(last7Days);

  // Date 30 days ago
  const last30Days = new Date();
  last30Days.setDate(today.getDate() - 30);
  const formattedLast30Days = formatDate(last30Days);

  const { data: wallets } = useGetWallet();

  const [activeWallet, setActiveWallet] = useState<Wallets | undefined>();

  const { isPending, mutate, data } = useGetDonut();
  const showChart = data?.deposit_percentages || data?.withdraw_percentages;
  const chartData = [
    {
      name: 'برداشت',
      y: data?.deposit_percentages,
    },
    {
      name: 'واریز',
      y: data?.withdraw_percentages,
    },
  ];

  const { data: invoices, mutate: getInvoices } = useGetInvoices();
  useEffect(() => {
    if (!activeWallet?.id) return;
    getInvoices({
      page: '1',
    });
    mutate({
      account_wallet_id: activeWallet?.id.toString(),
      from_date:
        activeTab === DATE_SCOPE.DAILY
          ? formattedToday
          : activeTab === DATE_SCOPE.WEEKLY
            ? formattedLast7Days
            : formattedLast30Days,
      to_date: formattedToday,
    });
  }, [activeTab, activeWallet?.id]);

  useEffect(() => {
    wallets && setActiveWallet(wallets[0]);
  }, [wallets]);

  return (
    <>
      <Navbar>
        <InfoCircle color='#fff' size={24} />
        <Container className='w-44'>
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
        <AnimatedTabs tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
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
        <Container center className='mt-5 flex w-full flex-col'>
          {isPending || !activeWallet?.id ? (
            <SkeletonLoaderDonut />
          ) : showChart ? (
            <DonutChart data={chartData} />
          ) : (
            <Container center className='h-60 flex-col gap-3'>
              <Container className='w-28'>
                <XImage
                  src='/images/image/emptyStates/ChartEmpty.svg'
                  alt='Picture of the author'
                  width={1000}
                  height={1000}
                />
              </Container>
              <Text className='text-neutral-500'>{app.withdrawalNotAvailable}</Text>
            </Container>
          )}
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
      <LatestPurchases invoices={invoices} />
    </>
  );
};

export default Home;

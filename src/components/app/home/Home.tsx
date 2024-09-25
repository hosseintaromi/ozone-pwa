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
import LatestPurchases from './components/LatestPurchases/LatestPurchases';
import { AnimatedTabs } from '../../share/animatedTabs';
import DonutChart from '../../share/charts/DonutChart';
import { useGetDonut, useGetAccountWallet } from '@/services/hooks';
import { AccountWalletType } from '@/models/digitalWallet.model';

import {
  SkeletonLoader,
  SkeletonLoaderDonut,
} from '@/components/share/skeleton/SkeletonLoader';
import { DATE_SCOPE } from '@/models/transaction.model';
import {
  formattedLast30Days,
  formattedLast7Days,
  formattedToday,
} from '@/components/app/home/components/helper';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { app } = locale;
  const { data: wallets } = useGetAccountWallet();
  const [show, setShow] = useState(false);
  const tabData = [
    { id: DATE_SCOPE.DAILY, label: app.daily },
    { id: DATE_SCOPE.WEEKLY, label: app.weekly },
    { id: DATE_SCOPE.MONTHLY, label: app.monthly },
  ];
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const [activeWallet, setActiveWallet] = useState<AccountWalletType | undefined>();
  const { isPending, mutate, data } = useGetDonut();
  const showChart = data?.deposit_percentages || data?.withdraw_percentages;
  const chartData = [
    {
      name: 'واریز',
      y: data?.deposit,
    },
    {
      name: 'برداشت',
      y: data?.withdraw,
    },
  ];
  const router = useRouter();
  useEffect(() => {
    activeWallet?.id &&
      mutate({
        wallet_id: activeWallet?.id.toString(),
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
    <Container className='h-[calc(100dvh-90px)] overflow-auto'>
      <Navbar>
        <InfoCircle
          color='#fff'
          size={24}
          onClick={() => router.push('/guide/?page=home')}
          className='cursor-pointer'
        />
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

      <Container className='m-5 mt-0 rounded-xl bg-neutral-800/90 p-5'>
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
                    src={
                      activeWallet?.wallet_type?.logo_base_url +
                      activeWallet?.wallet_type?.logo_path
                    }
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
      <LatestPurchases />
    </Container>
  );
};

export default Home;

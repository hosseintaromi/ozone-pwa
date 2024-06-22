'use client';
import { Card, Home, Scan, Setting2, TicketDiscount } from 'iconsax-react';
import { Container, Text } from 'ozone-uikit';
import React, { useState } from 'react';

import cn from '@/lib/clsxm';
import useDeviceDetection from '@/hooks/useDeviceDetection';

enum TAB {
  HOME = 'home',
  CARDS = 'cards',
  COUPON = 'coupon',
  SCAN = 'scan',
  SETTING = 'setting',
}

const TapBar = () => {
  // const isIos = useDeviceDetection();
  const [activeTab, setActiveTab] = useState(TAB.HOME);
  const navList = [
    {
      id: TAB.HOME,
      icon: (props) => <Home {...props} />,
      text: 'خانه',
    },
    {
      id: TAB.CARDS,
      icon: (props) => <Card {...props} />,
      text: 'کارت ها',
    },
    {
      id: TAB.COUPON,
      icon: (props) => <TicketDiscount {...props} />,
      text: 'کوپن',
    },
    {
      id: TAB.SCAN,
      icon: (props) => <Scan {...props} />,
      text: 'اسکن',
    },
    {
      id: TAB.SETTING,
      icon: (props) => <Setting2 {...props} />,
      text: 'تنظیمات',
    },
  ];

  return (
    <div
      className={cn(
        `absolute bottom-0 left-0 right-0 z-20 flex h-auto
         justify-around border-t-[1px] border-neutral-700 bg-neutral-900
          pb-2 pt-5
          text-neutral-500
          `,
        // isIos && 'mb-3'
      )}
    >
      {navList.map((item, index) => (
        <Container
          key={index}
          className='w flex flex-col items-center'
          onClick={() => setActiveTab(item.id)}
        >
          <Container>
            {item.icon({
              className: activeTab === item.id ? 'text-primary' : '',
              variant: 'Bold',
              size: '28',
            })}
          </Container>
          <Text
            className={cn(
              `invisible mt-1 text-xs font-bold`,
              activeTab === item.id && 'text-primary',
              activeTab === item.id && 'visible',
            )}
          >
            {item.text}
          </Text>
        </Container>
      ))}
    </div>
  );
};

export default TapBar;

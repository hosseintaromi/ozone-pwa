'use client';

import { Card, Home, Scan, Setting2, TicketDiscount } from 'iconsax-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Container } from 'ozone-uikit';
import React from 'react';

import cn from '@/lib/clsxm';

import { ROUTES } from '@/constant/routes';

const TapBar = () => {
  const pathname = usePathname();

  const navList = [
    {
      id: ROUTES.HOME,
      icon: (props) => <Home {...props} />,
      text: 'خانه',
    },
    {
      id: ROUTES.WALLET,
      icon: (props) => <Card {...props} />,
      text: 'کارت ها',
    },
    {
      id: ROUTES.VOUCHER,
      icon: (props) => <TicketDiscount {...props} />,
      text: 'کوپن',
    },
    {
      id: ROUTES.SCAN,
      icon: (props) => <Scan {...props} />,
      text: 'اسکن',
    },
    {
      id: ROUTES.SETTING,
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
        <Link href={item.id} key={index} className='w flex flex-col items-center'>
          <Container>
            {item.icon({
              className: pathname.includes(item.id) ? 'text-primary' : '',
              variant: 'Bold',
              size: '28',
            })}
          </Container>
          <Container
            className={cn(
              `invisible mt-1 text-xs font-bold`,
              pathname.includes(item.id) && 'text-primary',
              pathname.includes(item.id) && 'visible',
            )}
          >
            {item.text}
          </Container>
        </Link>
      ))}
    </div>
  );
};

export default TapBar;

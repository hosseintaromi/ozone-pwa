'use client';
import { Cards, Home, Setting2, Shop, TicketDiscount } from 'iconsax-react';
import React from 'react';

const TapBar = () => {
  const mysheet = navigator;
  const amenane = () => {
    if (typeof window === `undefined` || typeof navigator === `undefined`) {
      return false;
    }

    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };
  const asi = amenane();
  // useEffect(() => {
  //   amenane()
  // })
  return (
    <div className='absolute bottom-0 left-0 right-0 z-20 flex h-auto items-center justify-around bg-white'>
      <p>{asi ? <Home /> : <TicketDiscount />}</p>
      <Home />
      <TicketDiscount />
      <Cards />
      <Shop />
      <Setting2 />
    </div>
  );
};

export default TapBar;

import { Container } from 'ozone-uikit';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

import NormalCard from './NormalCard';
import { useGetAccountWallet } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import Carousel, { CarouselItem } from '@/components/@base/carousel';
import useWalletStore from '@/store/wallet-store';

export default function NestedSwiper() {
  const { data: wallets, isLoading } = useGetAccountWallet();
  const [active, setActive] = useState(0);
  const { setSelectedWallet } = useWalletStore();
  const handleSlideChange = (swiper) => {
    setActive(swiper.activeIndex);
  };
  useEffect(() => {
    if (wallets && wallets.length > 0) {
      setSelectedWallet(wallets[active]);
    }
  }, [active, wallets]);
  return (
    <Container className='h-48'>
      <Carousel
        slidesPerView='auto'
        className='!px-5'
        centeredSlidesBounds
        // loop
        onActiveIndexChange={handleSlideChange}
        spaceBetween={10}
        dir='rtl'
        // slidesPerView={1.1}
        centeredSlides
        pagination={{
          el: '.swiper-custom-pagination',
        }}
        // grabCursor={true}
        creativeEffect={{
          next: {
            shadow: true,
            translate: ['-110%', 0, 0],
          },
          prev: {
            shadow: true,
            translate: ['110%', 0, 0],
          },
        }}
        modules={[Pagination]}
      >
        {wallets?.map((w) => (
          <CarouselItem key={w.id}>
            <NormalCard data={w} />
          </CarouselItem>
        ))}
        {isLoading ||
          (!wallets &&
            [1, 2, 3].map((i) => (
              <CarouselItem key={i} className='rounded-2xl'>
                <SkeletonLoader width='w-[100%]' height='h-full' />
              </CarouselItem>
            )))}
      </Carousel>
      <div className='swiper-custom-pagination' />
    </Container>
  );
}

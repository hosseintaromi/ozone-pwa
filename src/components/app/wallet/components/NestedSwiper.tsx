import { Container } from 'ozone-uikit';
import React, { useEffect, useState } from 'react';
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

import NormalCard from './NormalCard';
import { useGetWallet } from '@/services/hooks';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';

export default function NestedSwiper() {
  const { data: wallets, isLoading } = useGetWallet();
  const [active, setActive] = useState(0);
  const handleSlideChange = (swiper) => {
    setActive(swiper.activeIndex);
  };
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <Container className='h-48'>
      <Swiper
        initialSlide={0}
        onActiveIndexChange={handleSlideChange}
        className='mySwiper swiper-h '
        spaceBetween={0}
        loop
        dir='rtl'
        slidesPerView={1.1}
        centeredSlides
        pagination={{
          el: '.swiper-custom-pagination',
        }}
        grabCursor={true}
        effect='creative'
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
        modules={[Pagination, EffectCreative]}
        // modules={[EffectCreative]}
      >
        {wallets?.map((w) => (
          <SwiperSlide key={w.id}>
            <NormalCard data={w} />
          </SwiperSlide>
        ))}
        {isLoading ||
          (!wallets &&
            [1, 2, 3].map((i) => (
              <SwiperSlide key={i} className='rounded-2xl'>
                <SkeletonLoader width='w-[100%]' height='h-full' />
              </SwiperSlide>
            )))}
      </Swiper>
      <div className='swiper-custom-pagination' />
    </Container>
  );
}

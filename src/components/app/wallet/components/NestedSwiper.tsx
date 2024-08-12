import { Container } from 'ozone-uikit';
import React from 'react';
import { EffectCreative, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

import NormalCard from './NormalCard';
import { useGetWallet } from '@/services/hooks';

export default function App() {
  const { data: wallets } = useGetWallet();
  return (
    <Container className='h-48'>
      <Swiper
        className='mySwiper swiper-h '
        spaceBetween={0}
        // loop
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

        {/* <SwiperSlide>
          <Swiper
            className='mySwiper2 swiper-v'
            direction='vertical'
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            loop
            modules={[Pagination]}
          >
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 3</SwiperSlide>
            <SwiperSlide>Vertical Slide 4</SwiperSlide>
            <SwiperSlide>Vertical Slide 5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide> */}
      </Swiper>
      <div className='swiper-custom-pagination' />
    </Container>
  );
}

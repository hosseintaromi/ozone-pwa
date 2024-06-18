import { Container } from 'ozone-uikit';
import React from 'react';
// import required modules
import { EffectCreative, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

export default function App() {
  return (
    <Container className='h-36'>
      <Swiper
        className='mySwiper swiper-h'
        spaceBetween={50}
        loop
        slidesPerView={1.3}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        effect='creative'
        creativeEffect={{
          next: {
            shadow: true,
            translate: ['-110%', 0, -100],
          },
          prev: {
            shadow: true,
            translate: ['110%', 0, -100],
          },
        }}
        modules={[Pagination, EffectCreative]}
      >
        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
        <SwiperSlide>
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
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
}

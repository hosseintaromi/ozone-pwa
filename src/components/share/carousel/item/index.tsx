import { SwiperSlide } from 'swiper/react';

import { Props } from '@/components/@base/carousel/item/type';

export default function CarouselItem({ children, ...props }: Props) {
  return <SwiperSlide {...props}>{children}</SwiperSlide>;
}

CarouselItem.displayName = 'SwiperSlide';

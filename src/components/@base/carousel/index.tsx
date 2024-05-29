import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import CarouselItem from '@/components/@base/carousel/item';
import { Props } from '@/components/@base/carousel/type';

export default function Carousel({ children, ...other }: Props) {
  return (
    <Swiper modules={[Pagination, Autoplay]} {...other}>
      {children}
    </Swiper>
  );
}

export { CarouselItem };

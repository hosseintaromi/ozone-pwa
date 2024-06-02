'use client';

import style from '@/components/@base/range-slider/index.module.css';

import cn from '@/lib/clsxm';

import Props from '@/components/@base/range-slider/type';

export default function RangeSlider({ className, ...props }: Props) {
  return <input type='range' className={cn(style.RangeSlider, className)} {...props} />;
}

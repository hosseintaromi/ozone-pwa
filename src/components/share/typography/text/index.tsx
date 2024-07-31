import { createElement } from 'react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM, TEXT_TYPE, TextType } from '@/@types';

export default function Text({
  className,
  justify = false,
  bold = false,
  semiBold = false,
  medium = false,
  light = false,
  inline = false,
  size = SIZE_ENUM.SM,
  color = COLOR_ENUM.WHITE,
  type = TEXT_TYPE.P,
  children,
  center,
  ...props
}: TextType) {
  return createElement(
    type,
    {
      className: cn(
        'w-fit',
        size === SIZE_ENUM.XXS && 'text-[10px]',
        size === SIZE_ENUM.XS && 'text-xs',
        size === SIZE_ENUM.SM && 'text-sm',
        size === SIZE_ENUM.MD && 'text-[16px]',
        size === SIZE_ENUM.XMD && 'text-[18px]',
        size === SIZE_ENUM.LG && 'text-xl',
        size === SIZE_ENUM.XL && 'text-2xl',
        color === COLOR_ENUM.SECONDARY && 'text-secondary',
        color === COLOR_ENUM.PRIMARY && 'text-primary',
        color === COLOR_ENUM.WHITE && 'text-white',
        color === COLOR_ENUM.TEXT && 'text-i-typography',
        color === COLOR_ENUM.INVERT && 'text-i-typography-invert',
        color === COLOR_ENUM.LIGHT_GRAY && 'text-neutral-500',
        color === COLOR_ENUM.XLIGHT_GRAY && 'text-neutral-300',
        color === COLOR_ENUM.ERROR && 'text-danger',
        color === COLOR_ENUM.WARN && 'text-alert-300',
        color === COLOR_ENUM.SUCCESS && 'text-success-250',
        inline && 'inline',
        'leading-7',
        light && 'font-light',
        bold && 'font-bold',
        semiBold && 'font-semibold',
        medium && 'font-medium',
        justify && 'text-justify',
        center && 'text-center',
        className,
      ),
      ...props,
    },
    children,
  );
}

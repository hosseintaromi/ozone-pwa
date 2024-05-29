import { createElement } from 'react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Props, TEXT_TYPE } from '@/components/@base/typography/text/type';

export default function Text({
  className,
  justify = false,
  bold = false,
  semiBold = false,
  medium = false,
  light = false,
  inline = false,
  size = SIZE_ENUM.SM,
  color = COLOR_ENUM.TEXT,
  type = TEXT_TYPE.P,
  children,
  center,
  ...props
}: Props) {
  return createElement(
    type,
    {
      className: cn(
        size === SIZE_ENUM.XXS && 'text-[10px]',
        size === SIZE_ENUM.XS && 'text-xs',
        size === SIZE_ENUM.SM && 'text-sm',
        size === SIZE_ENUM.MD && 'text-regular',
        size === SIZE_ENUM.LG && 'text-xl',
        size === SIZE_ENUM.XL && 'text-2xl',
        color === COLOR_ENUM.SECONDARY && 'text-secondary',
        color === COLOR_ENUM.PRIMARY && 'text-primary',
        color === COLOR_ENUM.WHITE && 'text-white',
        color === COLOR_ENUM.TEXT && 'text-i-typography',
        color === COLOR_ENUM.INVERT && 'text-i-typography-invert',
        color === COLOR_ENUM.LIGHT_GRAY && 'text-i-light-gray',
        color === COLOR_ENUM.ERROR && 'text-error',
        color === COLOR_ENUM.WARN && 'text-warn',
        color === COLOR_ENUM.SUCCESS && 'text-success',
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

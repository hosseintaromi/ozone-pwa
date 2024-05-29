import { forwardRef } from 'react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Props, { INPUT_TYPES } from '@/components/@base/input/text/type';
import { Text as TypographyText } from '@/components/@base/typography';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';

function Text(
  {
    id = '',
    value = '',
    className,
    type = INPUT_TYPES.TEXT,
    size = SIZE_ENUM.MD,
    label,
    Icon,
    LeftIcon,
    stickyText,
    errorMessage,
    ...other
  }: Props,
  ref,
) {
  return (
    <Container>
      {errorMessage && (
        <TypographyText size={SIZE_ENUM.XS} color={COLOR_ENUM.ERROR}>
          {errorMessage}
        </TypographyText>
      )}
      {label && (
        <label htmlFor={id} className='mb-2 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <Container className={cn((Icon || LeftIcon || stickyText) && 'relative')}>
        {Icon && (
          <Container center className='absolute inset-y-0 right-0 w-8'>
            <Icon />
          </Container>
        )}
        {stickyText && (
          <Container center className='absolute inset-y-0 left-4'>
            <TypographyText>{stickyText}</TypographyText>
          </Container>
        )}
        <input
          className={cn(
            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500',
            size === SIZE_ENUM.XXS && 'h-4',
            size === SIZE_ENUM.XS && 'h-6',
            size === SIZE_ENUM.SM && 'h-7',
            size === SIZE_ENUM.MD && 'h-8',
            size === SIZE_ENUM.LG && 'h-10',
            size === SIZE_ENUM.XL && 'h-12',
            Icon && 'pr-8',
            stickyText && 'pl-8',
            errorMessage && 'border-solid border-error focus:border-error focus:ring-0',
            className,
          )}
          ref={ref}
          value={value}
          type={type}
          id={id}
          {...other}
        />
        {LeftIcon && (
          <Container center className='absolute left-4 top-4'>
            <LeftIcon size={ICON_SIZE.md} color={ICON_COLOR.gray} />
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default forwardRef(Text);

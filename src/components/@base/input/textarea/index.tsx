import { forwardRef } from 'react';

import cn from '@/lib/clsxm';

import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Props from '@/components/@base/input/textarea/type';
import { Text as TypographyText } from '@/components/@base/typography';

function Textarea(
  { className, size = SIZE_ENUM.MD, label, errorMessage, children, ...props }: Props,
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
        <label htmlFor={props.id} className='mb-2 block text-sm font-medium text-gray-900'>
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500',
          size === SIZE_ENUM.XXS && 'h-12',
          size === SIZE_ENUM.XS && 'h-16',
          size === SIZE_ENUM.SM && 'h-20',
          size === SIZE_ENUM.MD && 'h-24',
          size === SIZE_ENUM.LG && 'h-28',
          size === SIZE_ENUM.XL && 'h-32',
          errorMessage && 'border-solid border-error focus:border-error focus:ring-0',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </textarea>
    </Container>
  );
}
export default forwardRef(Textarea);

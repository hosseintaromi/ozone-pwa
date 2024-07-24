import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/@types';

import Props from './type';
import Container from '../../../container/index';
import Text from '../../../typography/text';

export default function Circular({
  children,
  className,
  size = SIZE_ENUM.MD,
  checked,
}: Props) {
  return (
    <Container center className='flex justify-start justify-between gap-2.5'>
      <label>
        <Text bold>{children}</Text>
      </label>
      <input
        type='radio'
        checked={checked}
        className={cn(
          '!border-primary !bg-neutral-900 !text-primary accent-primary',
          SIZE_ENUM.XS === size && 'h-2 w-2',
          SIZE_ENUM.SM === size && 'h-3 w-3',
          SIZE_ENUM.MD === size && 'h-4 w-4',
          SIZE_ENUM.LG === size && 'h-5 w-5',
          SIZE_ENUM.XL === size && 'h-6 w-6',
          className,
        )}
      />
    </Container>
  );
}

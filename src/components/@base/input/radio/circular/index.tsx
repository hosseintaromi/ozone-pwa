import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import Props from '@/components/@base/input/radio/circular/type';
import { Text } from '@/components/@base/typography';

export default function Circular({
  children,
  className,
  size = SIZE_ENUM.MD,
  checked,
}: Props) {
  return (
    <Container center className='justify-start gap-2.5'>
      <input
        type='radio'
        checked={checked}
        className={cn(
          'border-primary bg-gray-100 text-blue-600',
          SIZE_ENUM.XS === size && 'h-2 w-2',
          SIZE_ENUM.SM === size && 'h-3 w-3',
          SIZE_ENUM.MD === size && 'h-4 w-4',
          SIZE_ENUM.LG === size && 'h-5 w-5',
          SIZE_ENUM.XL === size && 'h-6 w-6',
          className,
        )}
      />
      <label>
        <Text bold>{children}</Text>
      </label>
    </Container>
  );
}

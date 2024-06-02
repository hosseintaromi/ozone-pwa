import cn from '@/lib/clsxm';

import { COLOR_ENUM } from '@/components/@base/@helpers/types';
import Props from '@/components/@base/badge/type';
import Container from '@/components/@base/container';
import { Text } from '@/components/@base/typography';

export default function Badge({ text, color = COLOR_ENUM.PURPLE, className }: Props) {
  return (
    <Container
      className={cn(
        'rounded-[50px] px-1.5 py-0.5',
        color === COLOR_ENUM.PURPLE && 'bg-i-purple',
        color === COLOR_ENUM.PRIMARY && 'bg-primary',
        color === COLOR_ENUM.SECONDARY && 'bg-secondary',
        className,
      )}
    >
      <Text color={COLOR_ENUM.INVERT} className='text-[10px] font-semibold'>
        {text}
      </Text>
    </Container>
  );
}

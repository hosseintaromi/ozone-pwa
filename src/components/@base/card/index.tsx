import cn from '@/lib/clsxm';

import CardAction from '@/components/@base/card/action';
import CardContent from '@/components/@base/card/content';
import CardHeader from '@/components/@base/card/header';
import CardMedia from '@/components/@base/card/media';
import { Props } from '@/components/@base/card/type';
import Container from '@/components/@base/container';

export default function Card({
  noShadow = false,
  noBorder = false,
  className = '',
  children,
  ...props
}: Props) {
  return (
    <Container
      className={cn(
        'border-1 flex flex-col justify-between overflow-hidden rounded-xl border shadow-lg',
        noShadow && 'shadow-none',
        noBorder && 'border-none',
        className,
      )}
      {...props}
    >
      {children}
    </Container>
  );
}

export { CardAction, CardContent, CardHeader, CardMedia };

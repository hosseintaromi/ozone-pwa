import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/card/header/type';
import Container from '@/components/@base/container';

export default function CardHeader({ className, children }: Props) {
  return <Container className={cn('', className)}>{children}</Container>;
}

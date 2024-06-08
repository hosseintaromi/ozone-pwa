import { Container } from 'ozone-uikit';

import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/card/header/type';

export default function CardHeader({ className, children }: Props) {
  return <Container className={cn('', className)}>{children}</Container>;
}

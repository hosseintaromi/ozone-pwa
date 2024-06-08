import { Container } from 'ozone-uikit';

import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/card/action/type';

export default function CardAction({ className, children, ...props }: Props) {
  return (
    <Container className={cn('p-4', className)} {...props}>
      {children}
    </Container>
  );
}

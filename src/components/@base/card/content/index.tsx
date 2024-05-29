import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/card/content/type';
import Container from '@/components/@base/container';
import { CONTAINER_TAG_TYPE } from '@/components/@base/container/type';

export default function CardContent({ className, children, ...props }: Props) {
  return (
    <Container type={CONTAINER_TAG_TYPE.SECTION} className={cn('p-4', className)} {...props}>
      {children}
    </Container>
  );
}

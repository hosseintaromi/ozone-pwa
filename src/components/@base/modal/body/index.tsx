import cn from '@/lib/clsxm';

import Container from '@/components/@base/container';
import { Props } from '@/components/@base/modal/body/type';

export default function ModalBody({ className, children }: Props) {
  return <Container className={cn('', className)}>{children}</Container>;
}

import { Container } from 'ozone-uikit';

import cn from '@/lib/clsxm';

import { Props } from '@/components/@base/modal/body/type';

export default function ModalBody({ className, children }: Props) {
  return <Container className={cn('', className)}>{children}</Container>;
}

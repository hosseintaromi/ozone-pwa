import { Container } from 'ozone-uikit';
import { type Props } from '@/components/@base/modal/body/type';
import cn from '@/lib/clsxm';

export default function ModalBody({ className, children }: Props) {
  return <Container className={cn('', className)}>{children}</Container>;
}

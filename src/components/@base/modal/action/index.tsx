import Container from '@/components/@base/container';
import { Props } from '@/components/@base/modal/action/type';

export default function ModalAction({ children }: Props) {
  return <Container className='mt-4'>{children}</Container>;
}

import { Props } from '@/components/@base/modal/action/type';
import { Container } from 'ozone-uikit';

export default function ModalAction({ children }: Props) {
  return <Container className='mt-4'>{children}</Container>;
}

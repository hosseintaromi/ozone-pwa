import { Dialog } from '@headlessui/react';
import { CloseCircle } from 'iconsax-react';
import { Container } from 'ozone-uikit';

import colors from '@/constant/colors';

import { Props } from './type';

export default function ModalHead({ isCustomHead, children, setShow }: Props) {
  return isCustomHead ? (
    children
  ) : (
    <Dialog.Title className='relative mb-8 text-right'>
      <Container className='absolute left-0' onClick={() => setShow && setShow((pre) => !pre)}>
        <CloseCircle size='26' color={colors['neutral-0']} />
      </Container>
      {children}
    </Dialog.Title>
  );
}

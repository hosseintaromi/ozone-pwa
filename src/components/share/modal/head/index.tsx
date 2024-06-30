import { Dialog } from '@headlessui/react';
import { CloseCircle } from 'iconsax-react';
import { COLOR_ENUM, Container } from 'ozone-uikit';

import colors from '@/constant/colors';

import { Props } from './type';

export default function ModalHead({ isCustomHead, children }: Props) {
  return isCustomHead ? (
    children
  ) : (
    <Dialog.Title className='mb-8 text-right'>
      <Container className='absolute left-5'>
        <CloseCircle size='26' color={colors['neutral-0']} />
      </Container>
      {children}
    </Dialog.Title>
  );
}

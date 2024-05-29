import { Dialog } from '@headlessui/react';

import { Props } from '@/components/@base/modal/head/type';

export default function ModalHead({ isCustomHead, children }: Props) {
  return isCustomHead ? (
    children
  ) : (
    <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
      {children}
    </Dialog.Title>
  );
}

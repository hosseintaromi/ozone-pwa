import { Button, COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import locale from '@/locale';

import { PayInDialogType } from '../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../share/modal';
import { ROUTES } from '@/constant/routes';
import { Scan } from 'iconsax-react';

const ScanDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const {
    app: { scan },
  } = locale;

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalBody className='flex w-full  flex-col items-center justify-center text-white'>
        <Scan size='28' className='mt-7' />
        <Text size={SIZE_ENUM.LG} medium className='mt-4'>
          {scan.title}
        </Text>
        <Text size={SIZE_ENUM.MD} medium className='mt-4 text-neutral-500'>
          {scan.desc}
        </Text>
        <Button
          onClick={() => setShow(false)}
          color={COLOR_ENUM.PRIMARY}
          size={SIZE_ENUM.XXL}
          className='mb-4 mt-8 w-full'
        >
          {scan.button}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default ScanDialog;

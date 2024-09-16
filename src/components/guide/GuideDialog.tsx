import { SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import locale from '@/locale';

import { PayInDialogType } from '../app/wallet/type';
import Modal, { ModalBody, ModalHead } from '../share/modal';
import { useRouter } from 'next/navigation';
import { CardPos, Mobile, Shop } from 'iconsax-react';
import Container from '../share/container';

const GuideDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const {
    app: { helpDialog },
  } = locale;

  const router = useRouter();

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}>
        <Text size={SIZE_ENUM.LG} medium>
          {helpDialog.title}
        </Text>
        <Text size={SIZE_ENUM.SM} medium className='text-gray-300'>
          {helpDialog.subTitle}
        </Text>
      </ModalHead>
      <ModalBody className='flex flex-col gap-7 text-white '>
        <Container
          className='flex gap-4 text-white'
          onClick={() => router.push('/guide/?page=card')}
        >
          <Mobile className='text-gray-400' />
          {helpDialog.app}
        </Container>
        <Container
          className='flex gap-4 text-white'
          onClick={() => router.push('/guide/?page=online')}
        >
          <Shop className='text-gray-400' />
          {helpDialog.inpersion}
        </Container>
        <Container
          className='flex gap-4 text-white'
          onClick={() => router.push('/guide/?page=inperson')}
        >
          <CardPos className='text-gray-400' />
          {helpDialog.online}
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default GuideDialog;

import { Button, COLOR_ENUM, Input, SIZE_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import locale from '@/locale';

import { PayInDialogType } from '../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../share/modal';
import { convertRfcToJalali } from '@/lib/date';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constant/routes';
import useUserManagement from '@/hooks/useUserManagement';

const ProfileDialog = (props: PayInDialogType) => {
  const { show, setShow } = props;
  const {
    app: { profileDialog },
  } = locale;

  const router = useRouter();
  const { cookieValue } = useUserManagement();

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}>
        <Text size={SIZE_ENUM.LG} medium>
          {profileDialog.title}
        </Text>
      </ModalHead>
      <ModalBody className='flex flex-col gap-7 text-white '>
        <Input
          size={SIZE_ENUM.XL}
          label={profileDialog.nameAndLastname}
          labelClassName='text-md text-bold'
          value={cookieValue?.first_name + ' ' + cookieValue?.last_name}
          disabled
        />
        <Input
          size={SIZE_ENUM.XL}
          label={profileDialog.birthDate}
          labelClassName='text-md text-bold'
          value={cookieValue?.mobile}
          disabled
        />
        <Input
          size={SIZE_ENUM.XL}
          label={profileDialog.birthDate}
          labelClassName='text-md text-bold'
          value={convertRfcToJalali(cookieValue?.birth_date || '')}
          disabled
        />
        <Input
          size={SIZE_ENUM.XL}
          label={profileDialog.nationalCode}
          labelClassName='text-md text-bold'
          value={cookieValue?.national_code}
          disabled
        />
        {cookieValue?.national_code_kyc ? (
          <Button
            onClick={() => setShow(false)}
            color={COLOR_ENUM.PRIMARY}
            size={SIZE_ENUM.XXL}
            className='my-3'
          >
            {profileDialog.closeButton}
          </Button>
        ) : (
          <Button
            onClick={() => router.push(ROUTES.KYC)}
            color={COLOR_ENUM.PRIMARY}
            size={SIZE_ENUM.XXL}
            className='my-3'
          >
            {profileDialog.kycButton}
          </Button>
        )}
      </ModalBody>
    </Modal>
  );
};

export default ProfileDialog;

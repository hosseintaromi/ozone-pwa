'use client';

import useCommonModalStore from '@/store/common-modal-store';

import Modal, { ModalAction, ModalBody, ModalHead } from '../modal';

export default function CommonModal() {
  const {
    setShow,
    show,
    Head,
    Body,
    Action,
    DialogProps,
    DialogPanelProps,
    onDemandClose,
    noBackDrop,
    darkBackDrop,
    center,
  } = useCommonModalStore();

  function onClose() {
    !onDemandClose && setShow(false);
  }

  return (
    <Modal
      show={show}
      noBackDrop={noBackDrop}
      darkBackDrop={darkBackDrop}
      center={center}
      onClose={onClose}
      dialogPanelProps={DialogPanelProps || undefined}
      dialogProps={DialogProps || undefined}
    >
      {Head && (
        <ModalHead isCustomHead>
          <Head />
        </ModalHead>
      )}
      <ModalBody className='flex flex-col gap-2.5'>
        <Body />
      </ModalBody>
      {Action && (
        <ModalAction>
          <Action />
        </ModalAction>
      )}
    </Modal>
  );
}

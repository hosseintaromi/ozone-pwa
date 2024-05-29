'use client';

import Modal, { ModalAction, ModalBody, ModalHead } from '@/components/@base/modal';

import useCommonModalStore from '@/store/common-modal-store';

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
    center,
  } = useCommonModalStore();

  function onClose() {
    !onDemandClose && setShow(false);
  }

  return (
    <Modal
      show={show}
      noBackDrop={noBackDrop}
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

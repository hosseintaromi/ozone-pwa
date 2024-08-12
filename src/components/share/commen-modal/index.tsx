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
    darkBackDrop,
    center,
    dialogPanelClassName,
  } = useCommonModalStore();

  function onClose() {
    !onDemandClose && setShow(false);
  }

  return (
    <Modal
      className='bg-neutral-950'
      show={show}
      noBackDrop={noBackDrop}
      center={center}
      onClose={onClose}
      darkBackDrop={darkBackDrop}
      dialogPanelClassName={dialogPanelClassName}
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

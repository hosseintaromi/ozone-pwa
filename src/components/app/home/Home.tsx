'use client';
import Modal, { ModalBody, ModalHead } from '@/components/share/modal';
import { useState } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button style={{ color: 'white' }} onClick={() => setShow(true)}>
        hello
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <ModalHead isCustomHead></ModalHead>
        <ModalBody className='flex flex-col gap-2.5'>hoss</ModalBody>
      </Modal>
    </>
  );
}

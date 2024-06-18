'use client';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';

import Navbar from '@/components/share/navbar/Navbar';

import NestedSwiper from './NestedSwiper';
export default function Home() {
  // const [isClosed, setIsClosed] = useState(false);

  return (
    <>
      test
      {/* <BottomSheet isClosed={isClosed} setIsClosed={setIsClosed} /> */}
      {/* <Test /> */}
      {/* <button style={{ color: 'white' }} onClick={() => setShow(true)}>
        hello
      </button> */}
      <Navbar />
      <NestedSwiper />
      <BottomSheet
        open={true}
        blocking={false}
        header
        snapPoints={({ maxHeight }) => [maxHeight / 1.6, maxHeight]}
        className='text-white'
      >
        <p>it's possible to use the Bottom Sheet as an height adjustable sidebar/panel.</p>
        <p>You can combine this wito fine-tune the behavior you want.</p>
      </BottomSheet>
      {/* <Modal show={show} onClose={() => setShow(false)}>
        <ModalHead isCustomHead></ModalHead>
        <ModalBody className='flex flex-col gap-2.5'>hoss</ModalBody>
      </Modal> */}
    </>
  );
}

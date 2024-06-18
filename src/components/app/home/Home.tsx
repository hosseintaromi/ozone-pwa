'use client';
import { BottomSheet } from 'react-spring-bottom-sheet';

import 'react-spring-bottom-sheet/dist/style.css';

import Navbar from '@/components/share/navbar/Navbar';

import NestedSwiper from './NestedSwiper';
export default function Home() {
  return (
    <div className='h-full bg-neutral-800'>
      <Navbar />
      <NestedSwiper />
      <BottomSheet
        open={true}
        blocking={false}
        header
        snapPoints={({ maxHeight }) => {
          if (maxHeight > 800) return [maxHeight / 1.4, maxHeight];
          else if (maxHeight > 700) return [maxHeight / 1.5, maxHeight];
          else if (maxHeight > 600) return [maxHeight / 1.6, maxHeight];
          else if (maxHeight > 500) return [maxHeight / 1.7, maxHeight];
          else return [maxHeight / 1.5, maxHeight];
        }}
        className='text-white'
      >
        <p>it's possible to use the Bottom Sheet as an height adjustable sidebar/panel.</p>
        <p>You can combine this wito fine-tune the behavior you want.</p>
      </BottomSheet>

      {/* <Modal show={show} onClose={() => setShow(false)}>
        <ModalHead isCustomHead></ModalHead>
        <ModalBody className='flex flex-col gap-2.5'>hoss</ModalBody>
      </Modal> */}
    </div>
  );
}

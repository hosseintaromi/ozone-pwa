'use client';
import useCommonModalStore from '@/store/common-modal-store';

export default function Home() {
  const { setShow } = useCommonModalStore();
  const openModal = () => {
    setShow(true, {
      onDemandClose: false,
      darkBackDrop: true,
      Head: () => <button onClick={() => setShow(false)}>close this shit</button>,
      Body: () => <p className='h-32'>Body</p>,
    });
  };
  return (
    <>
      <button style={{ color: 'white' }} onClick={openModal}>
        hello
      </button>
    </>
  );
}

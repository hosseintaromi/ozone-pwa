'use client';
import Navbar from '@/components/share/navbar/Navbar';
import { CloseCircle, InfoCircle, Setting4 } from 'iconsax-react';
import { Button, Container, SIZE_ENUM, Text, VARIANT_ENUM } from 'ozone-uikit';
import locale from '@/locale';
import useCommonModalStore from '@/store/common-modal-store';
import SelectOption from '@/components/@base/select-option';

const Header = () => {
  const {
    common: { filter, cancelFilter },
    app: {
      voucher: { title, selectStore },
    },
  } = locale;
  const { setShow } = useCommonModalStore();
  const showFilterModal = () => {
    setShow(true, {
      Head: () => (
        <Container center className='justify-between'>
          <Text size={SIZE_ENUM.LG} className='text-white'>
            {filter}
          </Text>
          <CloseCircle size='32' className='text-neutral-200' onClick={() => setShow(false)} />
        </Container>
      ),
      Body: () => (
        <Container className='mt-6 h-[70dvh]'>
          <SelectOption title={selectStore} />
          <Container center className='mt-6 justify-between gap-4 '>
            <Button size={SIZE_ENUM.XXL} className='w-full p-1'>
              {filter}
            </Button>
            <Button
              size={SIZE_ENUM.XXL}
              variant={VARIANT_ENUM.OUTLINED}
              className='w-full border-[1px] border-neutral-500 p-1 text-neutral-500'
            >
              {cancelFilter}
            </Button>
          </Container>
        </Container>
      ),
    });
  };
  return (
    <Navbar>
      <InfoCircle size='28' className='text-white' />
      <Text size={SIZE_ENUM.LG}>{title}</Text>
      <Setting4 size='28' className='text-white' onClick={showFilterModal} />
    </Navbar>
  );
};
export default Header;

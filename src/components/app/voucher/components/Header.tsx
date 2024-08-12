'use client';
import Navbar from '@/components/share/navbar/Navbar';
import { CloseCircle, InfoCircle, Setting4 } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';
import locale from '@/locale';
import useCommonModalStore from '@/store/common-modal-store';
import Filter from '@/components/app/voucher/components/Filter';

const Header = () => {
  const {
    common: { filter },
    app: {
      voucher: { title },
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
      Body: () => <Filter />,
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

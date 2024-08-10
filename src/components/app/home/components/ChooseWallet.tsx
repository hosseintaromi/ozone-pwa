import { COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';
import React, { useEffect, useState } from 'react';

import Container from '@/components/share/container';
import { RadioGroup } from '@/components/share/input/radio';
import Circular from '@/components/share/input/radio/circular';
import RadioOption from '@/components/share/input/radio/option';
import XImage from '@/components/share/x-image';

import locale from '@/locale';

import { ChooseWalletType } from '../../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../../share/modal';

const ChooseWallet = (props: ChooseWalletType) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const { show, setShow, data, setActiveWallet, activeWallet } = props;

  const {
    app: { chooseWallet },
  } = locale;

  const handleChange = (value) => {
    setActiveWallet(data?.filter((item) => item.id === value)[0]);
    setSelectedItem(value);
    setShow((pre) => !pre);
  };

  useEffect(() => {
    activeWallet && setSelectedItem(activeWallet?.id);
  }, [activeWallet]);

  return (
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={() => setShow((pre) => !pre)}>
        <Text size={SIZE_ENUM.LG} medium>
          {chooseWallet.title}
        </Text>
        <Text size={SIZE_ENUM.SM} medium color={COLOR_ENUM.XLIGHT_GRAY} className='mt-4'>
          {chooseWallet.subTitle}
        </Text>
      </ModalHead>
      <ModalBody className='mx-5 flex flex-col gap-2.5 text-white'>
        <RadioGroup value={selectedItem} onChange={(value) => handleChange(value)}>
          {data?.map((item) => (
            <RadioOption value={item.id}>
              {({ checked }) => (
                <Circular checked={checked} size={SIZE_ENUM.LG}>
                  <Container center className='my-3 gap-4'>
                    <Container className=' w-11'>
                      <XImage
                        className='rounded-full'
                        src={item.wallet.logo_base_url + item.wallet.logo_path}
                        alt='Picture of the author'
                        width={1000}
                        height={1000}
                      />
                    </Container>
                    {item.name}
                  </Container>
                </Circular>
              )}
            </RadioOption>
          ))}
        </RadioGroup>
      </ModalBody>
    </Modal>
  );
};

export default ChooseWallet;

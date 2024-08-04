import { COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';
import React, { useState } from 'react';

import Container from '@/components/share/container';
import { RadioGroup } from '@/components/share/input/radio';
import Circular from '@/components/share/input/radio/circular';
import RadioOption from '@/components/share/input/radio/option';
import XImage from '@/components/share/x-image';

import locale from '@/locale';

import { PayInDialogType } from '../../wallet/type';
import Modal, { ModalBody, ModalHead } from '../../../share/modal';

const ChooseWallet = (props: PayInDialogType) => {
  const [selectedItem, setSelectedItem] = useState('test');

  const { show, setShow } = props;

  const {
    app: { chooseWallet },
  } = locale;

  const handleChange = (value) => {
    setSelectedItem(value);
  };

  const data = [
    {
      name: 'test',
      image: '/images/logo/SmallLogo.svg',
      id: 1,
    },
    {
      name: 'test1',
      image: '/images/logo/SmallLogo.svg',
      id: 2,
    },
  ];

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
          {data.map((item) => (
            <RadioOption value={item.name}>
              {({ checked }) => (
                <Circular checked={checked} size={SIZE_ENUM.LG}>
                  <Container center className='my-3 gap-4'>
                    <Container className=' w-11 rounded-full bg-white p-2'>
                      <XImage
                        className=''
                        src={item.image}
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

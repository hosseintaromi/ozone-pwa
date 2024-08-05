'use client';

import { Text } from '@/components/share/typography';
import { RadioGroup } from '@/components/share/input/radio';
import Circular from '@/components/share/input/radio/circular';
import XImage from '@/components/share/x-image';
import RadioOption from '@/components/share/input/radio/option';

import locale from '@/locale';
import { Container, SIZE_ENUM } from 'ozone-uikit';
import React, { useState } from 'react';
import Button from '@/components/share/button';
import { BUTTON_TYPE } from '@/@types';

const AddWalletStep1 = ({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    app: { addWallet },
  } = locale;
  const [selectedItem, setSelectedItem] = useState('test');
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
    <Container className='flex h-full flex-col justify-between'>
      <Container>
        <Text className='my-6 text-sm text-neutral-200'>{addWallet.step1SubTitle}</Text>
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
                    <Text className='text-white ' bold>
                      {item.name}
                    </Text>
                  </Container>
                </Circular>
              )}
            </RadioOption>
          ))}
        </RadioGroup>
      </Container>

      <Button
        onClick={() => {
          setActive((pre) => pre + 1);
        }}
        type={BUTTON_TYPE.SUBMIT}
        size={SIZE_ENUM.XL}
        className='mt-5 w-full'
      >
        {addWallet.confirm}
      </Button>
    </Container>
  );
};

export default AddWalletStep1;

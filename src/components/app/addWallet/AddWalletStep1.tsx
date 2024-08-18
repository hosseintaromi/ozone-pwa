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
import { useGetWallets, usePostWalletInquiry } from '@/services/hooks';
import Spinner from '@/components/share/spinner/Spinner';
import useWalletStore from '@/store/wallet-store';

const AddWalletStep1 = ({
  setActive,
}: {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    app: { addWallet },
  } = locale;
  const { data: wallets, isPending } = useGetWallets();

  const [selectedItem, setSelectedItem] = useState();
  const { mutate: walletInquiryMutation } = usePostWalletInquiry();
  const handleChange = (value) => {
    setSelectedItem(value);
  };
  const { setAddWalletId } = useWalletStore();
  const handleConfirm = () => {
    walletInquiryMutation(
      { wallet_id: `${selectedItem}` },
      {
        onSuccess: () => {
          setActive((pre) => pre + 1);
          setAddWalletId(selectedItem!);
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };
  if (isPending)
    return (
      <Container center className='mt-[25%]'>
        <Spinner />
      </Container>
    );
  return (
    <Container className='flex h-full flex-col justify-between'>
      <Container>
        <Text className='my-6 text-sm text-neutral-200'>{addWallet.step1SubTitle}</Text>
        <RadioGroup value={selectedItem} onChange={(value) => handleChange(value)}>
          {wallets &&
            wallets.map((item) => (
              <RadioOption value={item.id} key={item.id}>
                {({ checked }) => (
                  <Circular checked={checked} size={SIZE_ENUM.LG}>
                    <Container center className='my-3 gap-4'>
                      <Container className=' w-11 rounded-full bg-white p-1'>
                        <XImage
                          className='rounded-full'
                          src={`${item.logo_base_url}${item.logo_path}`}
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
        onClick={handleConfirm}
        type={BUTTON_TYPE.SUBMIT}
        size={SIZE_ENUM.XL}
        className='mt-5 w-full'
        disabled={!selectedItem}
      >
        {addWallet.confirm}
      </Button>
    </Container>
  );
};

export default AddWalletStep1;

'use client';

import { Text } from '@/components/share/typography';

import { Container, SIZE_ENUM } from 'ozone-uikit';
import React from 'react';
import locale from '@/locale';
import { BUTTON_TYPE } from '@/@types';
import Button from '@/components/share/button';
import NormalCard from '../wallet/components/NormalCard';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';

const AddWalletStep3 = ({
  setActive: setActiveTab,
}: {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    app: { addWallet },
  } = locale;

  return (
    <>
      <Container>
        <Text size={SIZE_ENUM.SM} className='mb-6 mt-4 text-sm text-neutral-200'>
          {addWallet.step3Subtitle}
        </Text>
        <Container className='h-44 overflow-hidden rounded-lg'>
          <NormalCard />
        </Container>
      </Container>

      <Container center className='flex-col'>
        <Link href={ROUTES.WALLET} className='mt-5 w-full'>
          <Button
            onClick={() => {
              setActiveTab((pre) => pre + 1);
            }}
            type={BUTTON_TYPE.SUBMIT}
            size={SIZE_ENUM.XL}
            className='w-full'
          >
            {addWallet.confirmAndBack}
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default AddWalletStep3;

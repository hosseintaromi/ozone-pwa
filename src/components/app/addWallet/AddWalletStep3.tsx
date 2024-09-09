'use client';

import { Text } from '@/components/share/typography';

import { Container, SIZE_ENUM } from 'ozone-uikit';
import React from 'react';
import locale from '@/locale';
import Button from '@/components/share/button';
import NormalCard from '../wallet/components/NormalCard';
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import useWalletStore from '@/store/wallet-store';
import { useRouter } from 'next/navigation';
import { usePostVerifyAddWallet } from '@/services/hooks';
import { QUERY_KEYS } from '@/constant/query-key';
import { useQueryClient } from '@tanstack/react-query';

const AddWalletStep3 = () => {
  const {
    app: { addWallet },
  } = locale;
  const router = useRouter();
  const { addWalletId } = useWalletStore();
  const queryClient = useQueryClient();
  const { forAddWallet } = useWalletStore();
  const { mutate } = usePostVerifyAddWallet();
  const verifyAndGoBack = () => {
    mutate(
      {
        wallet_id: `${addWalletId}`,
      },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: [QUERY_KEYS.GET_WALLETS] });
          router.push('/wallet');
        },
      },
    );
  };
  return (
    <Container center className='h-full flex-col justify-between'>
      <Container>
        <Text size={SIZE_ENUM.SM} className='my-8 text-sm text-neutral-200'>
          {addWallet.step3Subtitle}
        </Text>
        {!!forAddWallet?.name && <NormalCard data={forAddWallet} addWallet={true} />}
      </Container>

      <Container center className='w-full flex-col'>
        <Link href={ROUTES.WALLET} className='mt-5 w-full'>
          <Button size={SIZE_ENUM.XL} className='w-full' onClick={verifyAndGoBack}>
            {addWallet.confirmAndBack}
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default AddWalletStep3;

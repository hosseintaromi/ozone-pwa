'use client';

import { usePostKycVerify } from '@/services/hooks';
import React, { useEffect } from 'react';
import Spinner from '@/components/share/spinner/Spinner';
import useUserManagement from '@/hooks/useUserManagement';

const KycVerify = ({ params }) => {
  const { mutate } = usePostKycVerify();

  useEffect(() => {
    mutate(
      { token: params.slug },
      {
        onSuccess: ({ data }) => {
          console.log(data);
          // setUserToken(data, ROUTES.KYC);
        },
      },
    );
  }, []);
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Spinner />
    </div>
  );
};

export default KycVerify;

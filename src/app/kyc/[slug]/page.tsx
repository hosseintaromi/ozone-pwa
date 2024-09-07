'use client';

import { usePostKycVerify } from '@/services/hooks';
import React, { useEffect } from 'react';
import Spinner from '@/components/share/spinner/Spinner';
import useUserManagement from '@/hooks/useUserManagement';
import { ROUTES } from '@/constant/routes';
import Cookies from 'js-cookie';

const KycVerify = ({ params }) => {
  const { mutate } = usePostKycVerify();
  const { setUserToken } = useUserManagement();
  useEffect(() => {
    mutate(
      { token: params.slug },
      {
        onSuccess: ({ data }) => {
          Cookies.set('kyc_token', params.slug);
          setUserToken(data, ROUTES.KYC);
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

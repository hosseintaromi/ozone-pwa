'use client';

import { usePostKycVerify } from '@/services/hooks';
import React, { useEffect } from 'react';
import Spinner from '@/components/share/spinner/Spinner';
import useUserManagement from '@/hooks/useUserManagement';

const DrinkPage = ({ params }) => {
  const { mutate } = usePostKycVerify();
  const { setUserToken } = useUserManagement();

  useEffect(() => {
    mutate(
      { token: params.slug },
      {
        onSuccess: ({ data }) => {
          setUserToken(data);
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

export default DrinkPage;

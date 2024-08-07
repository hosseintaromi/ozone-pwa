'use client';

import { usePostKycVerify } from '@/services/hooks';
import useUserStore from '@/store/user-store';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Spinner from '@/components/share/spinner/Spinner';

const DrinkPage = ({ params }) => {
  const { mutate } = usePostKycVerify();
  const { token, setToken } = useUserStore();

  useEffect(() => {
    mutate(
      { token: params.slug },
      {
        onSuccess: ({ data }) => {
          setToken(data.access_token);
          // TODO: we should get token_type expires_in form back
          const token_type = 'Bearer';
          Cookies.set('token', token_type + ' ' + data.access_token, {
            // expires: data.expires_in,
            path: '/',
          });
          // Cookies.set('expires_in', data.expires_in);
          Cookies.set('refresh_token', data.refresh_token);
          // router.push(ROUTES.HOME);
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

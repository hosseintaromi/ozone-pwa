import { useGetUser } from '@/services/hooks';
import useUserStore from '@/store/user-store';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { loginOtpTypeOut } from '@/models/auth.model';
import { ROUTES } from '@/constant/routes';
import { formatPhoneNumber } from '@/lib/helper';
import { userMe } from '@/models/userManagement.model';

const useUserManagement = () => {
  const { token, setToken } = useUserStore();
  const router = useRouter();
  const [cookieValue, setCookieValue] = useState<userMe | undefined>(undefined);
  const { isSuccess, data } = useGetUser(token);

  useEffect(() => {
    if (!isSuccess) return;
    Cookies.set('user', JSON.stringify(data));
    setCookieValue(data);
  }, [isSuccess]);

  useEffect(() => {
    getUserDataFromCookies();
  }, []);

  const setUserToken = (data: loginOtpTypeOut, route?: string) => {
    setToken(data.access_token);
    Cookies.set('token', data.token_type + ' ' + data.access_token, {
      expires: data.expires_in,
      path: '/',
    });
    Cookies.set('expires_in', data.expires_in);
    Cookies.set('refresh_token', data.refresh_token);
    getUserDataFromCookies();

    if (route && route === ROUTES.KYC) {
    } else if (route) {
      router.push(route);
    } else {
      router.push(ROUTES.HOME);
    }
  };

  const removeUserData = () => {
    Cookies.remove('token');
    Cookies.remove('expires_in');
    Cookies.remove('refresh_token');
    Cookies.remove('user');
    setToken(''); // فرض بر این است که setToken به درستی تعریف و ایمپورت شده است
    router.push(ROUTES.LOGIN);
    getUserDataFromCookies();
  };

  const getUserDataFromCookies = () => {
    try {
      const cookies = document.cookie
        .split('; ')
        .find((row) => row.startsWith('user='))
        ?.split('=')[1];

      if (cookies) {
        const parsedCookie = JSON.parse(decodeURIComponent(cookies));
        parsedCookie.mobile = formatPhoneNumber(parsedCookie.mobile);
        console.log(parsedCookie);
        setCookieValue(parsedCookie);
      }
    } catch (error) {
      console.error('Error parsing cookie:', error);
    }
  };

  return {
    setUserToken,
    removeUserData,
    cookieValue,
  };
};
export default useUserManagement;

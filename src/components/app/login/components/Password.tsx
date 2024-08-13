import { useFormik } from 'formik';
import {
  Button,
  BUTTON_TYPE,
  COLOR_ENUM,
  Container,
  Input,
  INPUT_TYPES,
  SIZE_ENUM,
  Text,
  VARIANT_ENUM,
} from 'ozone-uikit';
import React, { useEffect } from 'react';
import { object } from 'yup';

import XImage from '@/components/share/x-image';

import validation from '@/constant/validation-rules';
import locale from '@/locale';

import { LOGIN_STEPS, SetStepType } from '../Login.module';
import { useGetUser, useLoginPassword } from '@/services/hooks';
import Cookies from 'js-cookie';
import useUserStore from '@/store/user-store';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constant/routes';

const Password = ({ phoneNumber, setStep }: { setStep: SetStepType; phoneNumber: string }) => {
  const { login } = locale;
  const { mutate, isPending } = useLoginPassword();

  const { token, setToken } = useUserStore();
  const { isSuccess, data } = useGetUser(token);

  useEffect(() => {
    if (!isSuccess) return;
    Cookies.set('user', JSON.stringify(data));
  }, [isSuccess]);

  const router = useRouter();

  const { handleSubmit, values, errors, handleChange } = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: object().shape({
      password: validation.require,
    }),
    validateOnBlur: false,
    onSubmit: (e) => {
      mutate(
        {
          cellphone: phoneNumber,
          password: e.password,
        },
        {
          onSuccess: ({ data }) => {
            console.log(data);
            setToken(data.access_token);
            Cookies.set('token', data.token_type + ' ' + data.access_token, {
              expires: data.expires_in,
              path: '/',
            });
            Cookies.set('expires_in', data.expires_in);
            Cookies.set('refresh_token', data.refresh_token);
            router.push(ROUTES.HOME);
          },
        },
      );
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Container className='flex min-h-screen flex-col justify-between  p-4'>
        <Container>
          <Container center className='flex-col'>
            <Container className='mt-14 w-44'>
              <XImage
                placeholder
                src='/images/logo/LogoWithName.svg'
                alt='Picture of the author'
                width={1000}
                height={1000}
              />
            </Container>

            <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.MD} className='mt-2'>
              {login.checkNumberForPassword(`0${phoneNumber.slice(3)}`)}
            </Text>
            <Button
              size={SIZE_ENUM.MD}
              className='mt-1'
              onClick={() => setStep(LOGIN_STEPS.PHONE_NUMBER)}
              variant={VARIANT_ENUM.TEXT}
            >
              {login.changeNumber}
            </Button>

            <Container className='mt-12 flex w-full flex-col'>
              <Input
                name='password'
                errorMessage={errors.password}
                label={login.passwordLabel}
                type={INPUT_TYPES.PASSWORD}
                inputMode='text'
                value={values.password}
                onChange={handleChange}
              />
            </Container>
          </Container>
          <Container className='mt-3 flex justify-end'>
            <Button variant={VARIANT_ENUM.TEXT}>{login.forgetPasswordButton}</Button>
          </Container>
        </Container>

        <Container className='mb-16 flex-col' center>
          <Button type={BUTTON_TYPE.SUBMIT} size={SIZE_ENUM.XL} className='w-full'>
            {login.entree}
          </Button>
          <Button variant={VARIANT_ENUM.TEXT} className='m-3'>
            {login.loginWithOtp}
          </Button>
        </Container>
      </Container>
    </form>
  );
};

export default Password;

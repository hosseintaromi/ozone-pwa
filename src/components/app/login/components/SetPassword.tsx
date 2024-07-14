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
import React, { useEffect, useState } from 'react';

import locale from '@/locale';

import { SetStepType } from '../Login.module';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { object } from 'yup';
import validation from '@/constant/validation-rules';
import { Eye, EyeSlash } from 'iconsax-react';
import { ICON_COLOR } from '@/constant/icon-size-color';
import CheckFromText from './CheckFromText';

const minLength = yup.string().min(8);
const hasUpperCase = yup.string().matches(/[A-Z]/);
const hasLowerCase = yup.string().matches(/[a-z]/);
const hasNumber = yup.string().matches(/[0-9]/);
const hasSpecialChar = yup.string().matches(/[*&%^$.#@!]/);

const SetPassword = ({}: { setStep: SetStepType; phoneNumber: string }) => {
  const { login, error } = locale;
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [val, setVal] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const { handleSubmit, values, errors, handleChange, touched, handleBlur } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: object().shape({
      password: validation.passwordSchema,
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], error.passwordsMustMatch)
        .required(error.required),
    }),
    onSubmit: () => {
      // console.log(values);
    },
  });

  const validatePassword = async (password) => {
    const results = {
      minLength: await minLength.isValid(password),
      hasUpperCase: await hasUpperCase.isValid(password),
      hasLowerCase: await hasLowerCase.isValid(password),
      hasNumber: await hasNumber.isValid(password),
      hasSpecialChar: await hasSpecialChar.isValid(password),
    };
    return results;
  };

  useEffect(() => {
    validatePassword(values.password).then((e) => {
      setVal(e);
    });
  }, [values.password]);

  return (
    <Container className='p-4'>
      <form
        onSubmit={handleSubmit}
        className='flex min-h-screen flex-col justify-between gap-7'
      >
        <Container className=''>
          <Container center className='flex-col'>
            <Text color={COLOR_ENUM.WHITE} size={SIZE_ENUM.LG} bold className='mt-14'>
              {login.choosePassword}
            </Text>
            <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.MD} semiBold className='mt-1'>
              {login.choosePasswordForAccount}
            </Text>

            <Container className='mt-12 flex w-full flex-col'>
              <Input
                name='password'
                errorMessage={touched.password && errors.password ? errors.password : ''}
                label={login.passwordLabel}
                type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
                value={values.password}
                inputMode='text'
                onChange={handleChange}
                onBlur={handleBlur}
                LeftIcon={() => (
                  <Container onClick={() => setShowPassword((pre) => !pre)}>
                    {showPassword ? (
                      <Eye size='32' color={ICON_COLOR.white} />
                    ) : (
                      <EyeSlash size='32' color={ICON_COLOR.white} />
                    )}
                  </Container>
                )}
              />
              <Input
                name='confirmPassword'
                errorMessage={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
                label={login.passwordLabel}
                type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
                inputMode='text'
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className='mt-8'
                LeftIcon={() => (
                  <Container onClick={() => setShowRePassword((pre) => !pre)}>
                    {showRePassword ? (
                      <Eye size='32' color={ICON_COLOR.white} />
                    ) : (
                      <EyeSlash size='32' color={ICON_COLOR.white} />
                    )}
                  </Container>
                )}
              />
            </Container>
          </Container>
          <Container className='mt-10 flex flex-col gap-3'>
            <CheckFromText text={login.atLeast8Characters} condition={!val.minLength} />
            <CheckFromText
              text={login.includesLowercaseUppercase}
              condition={!(val.hasLowerCase && val.hasUpperCase)}
            />
            <CheckFromText text={login.containsNumber} condition={!val.hasNumber} />
            <CheckFromText text={login.includingSign} condition={!val.hasSpecialChar} />
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
      </form>
    </Container>
  );
};

export default SetPassword;

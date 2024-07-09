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

const minLength = yup.string().min(8);
const hasUpperCase = yup.string().matches(/[A-Z]/);
const hasLowerCase = yup.string().matches(/[a-z]/);
const hasNumber = yup.string().matches(/[0-9]/);
const hasSpecialChar = yup.string().matches(/[*&%^$.#@!]/);

const SetPassword = ({
  phoneNumber,
  setStep,
}: {
  setStep: SetStepType;
  phoneNumber: string;
}) => {
  const { login } = locale;
  const [val, setVal] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const { handleSubmit, values, errors, handleChange } = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: object().shape({
      password: validation.passwordSchema,
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
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
    <Container className='flex min-h-screen flex-col justify-between p-4'>
      <form onSubmit={handleSubmit}>
        <Container center className='flex-col'>
          <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.MD} className='mt-2'>
            {login.checkNumberForPassword(`0${phoneNumber.slice(3)}`)}
          </Text>

          <Container className='mt-12 flex w-full flex-col'>
            <Input
              name='password'
              errorMessage={errors.password}
              label={login.passwordLabel}
              type={INPUT_TYPES.TEXT}
              inputMode='text'
              value={values.password}
              onChange={handleChange}
            />
            <Input
              name='confirmPassword'
              errorMessage={errors.confirmPassword}
              label={login.passwordLabel}
              type={INPUT_TYPES.TEXT}
              inputMode='text'
              value={values.confirmPassword}
              onChange={handleChange}
              className='mt-4'
            />
          </Container>
        </Container>
        {!val.hasNumber && <p style={{ color: 'white' }}>slm</p>}
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

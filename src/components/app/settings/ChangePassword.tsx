'use client';
import { useFormik } from 'formik';
import { Eye, EyeSlash } from 'iconsax-react';

import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { object } from 'yup';

import { ICON_COLOR } from '@/constant/icon-size-color';
import validation from '@/constant/validation-rules';
import locale from '@/locale';

import CheckFromText from '../login/components/CheckFromText';
import Container from '@/components/share/container';
import { BUTTON_TYPE, INPUT_TYPES, SIZE_ENUM } from '@/@types';
import { Text } from '@/components/share/typography';
import { Input } from '@/components/share/input';
import Button from '@/components/share/button';
import { useChangePassword } from '@/services/hooks';
import { useRouter } from 'next/navigation';
import Modal, { ModalBody, ModalHead } from '../../share/modal';

const minLength = yup.string().min(8);
const hasUpperCase = yup.string().matches(/[A-Z]/);
const hasLowerCase = yup.string().matches(/[a-z]/);
const hasNumber = yup.string().matches(/[0-9]/);
const hasSpecialChar = yup.string().matches(/[*&%^$.#@!]/);

const ChangePassword = (props: any) => {
  const { show, setShow } = props;
  const { login, error, app } = locale;
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [val, setVal] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const { mutate, isPending } = useChangePassword();
  const router = useRouter();
  const { handleSubmit, values, errors, handleChange, touched, handleBlur } = useFormik({
    initialValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: object().shape({
      oldPassword: yup.string().required(error.required),
      password: validation.passwordSchema,
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], error.passwordsMustMatch)
        .required(error.required),
    }),
    onSubmit: (values) => {
      mutate(
        {
          old_password: values.oldPassword,
          new_password: values.password,
        },
        {
          onSuccess: () => {
            setShow(false);
            // console.log('first');
            // router.push(ROUTES.HOME);
          },
        },
      );
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
    <Modal show={show} onClose={() => setShow(false)} dialogPanelClassName='bg-neutral-900'>
      <ModalHead setShow={setShow}>
        <Text size={SIZE_ENUM.LG} medium>
          {app.changePass.title}
        </Text>
        <Text size={SIZE_ENUM.SM} medium className=''>
          {app.changePass.desc}
        </Text>
      </ModalHead>
      <ModalBody className='flex flex-col gap-7 text-white '>
        <form onSubmit={handleSubmit} className='flex  flex-col justify-between gap-7'>
          <Container className=''>
            <Container center className='flex-col'>
              <Container className=' flex w-full flex-col gap-9'>
                <Input
                  labelClassName='text-neutral-500'
                  name='oldPassword'
                  errorMessage={
                    touched.oldPassword && errors.oldPassword ? errors.oldPassword : ''
                  }
                  label={app.changePass.input1}
                  type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
                  inputMode='text'
                  value={values.oldPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='mt-6'
                  LeftIcon={() => (
                    <Container onClick={() => setShowRePassword((pre) => !pre)}>
                      {showRePassword ? (
                        <Eye size='25' color={ICON_COLOR.light_gray} />
                      ) : (
                        <EyeSlash size='25' color={ICON_COLOR.light_gray} />
                      )}
                    </Container>
                  )}
                />
                <Input
                  labelClassName='text-neutral-500'
                  name='password'
                  errorMessage={touched.password && errors.password ? errors.password : ''}
                  label={app.changePass.input2}
                  type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
                  value={values.password}
                  inputMode='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  LeftIcon={() => (
                    <Container onClick={() => setShowPassword((pre) => !pre)}>
                      {showPassword ? (
                        <Eye size='25' color={ICON_COLOR.light_gray} />
                      ) : (
                        <EyeSlash size='25' color={ICON_COLOR.light_gray} />
                      )}
                    </Container>
                  )}
                />
                <Input
                  labelClassName='text-neutral-500'
                  name='confirmPassword'
                  errorMessage={
                    touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : ''
                  }
                  label={app.changePass.input3}
                  type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
                  inputMode='text'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  LeftIcon={() => (
                    <Container onClick={() => setShowRePassword((pre) => !pre)}>
                      {showRePassword ? (
                        <Eye size='25' color={ICON_COLOR.light_gray} />
                      ) : (
                        <EyeSlash size='25' color={ICON_COLOR.light_gray} />
                      )}
                    </Container>
                  )}
                />
              </Container>
            </Container>
            <Container className='mt-8 flex flex-col gap-3'>
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
            <Button
              isLoading={isPending}
              type={BUTTON_TYPE.SUBMIT}
              size={SIZE_ENUM.XL}
              className='w-full'
            >
              {app.changePass.button}
            </Button>
          </Container>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ChangePassword;

'use client';
import { useFormik } from 'formik';
import Image from 'next/image';
import {
  Button,
  BUTTON_TYPE,
  COLOR_ENUM,
  Container,
  Input,
  INPUT_TYPES,
  SIZE_ENUM,
  Text,
} from 'ozone-uikit';
import { RxCrossCircled } from 'react-icons/rx';
import { object } from 'yup';

import { convertToEnglishNumber, isIOS } from '@/lib/helper';

import validation from '@/constant/validation-rules';
import { locale } from '@/locale';

import { LOGIN_STEPS, SetPhoneType, SetStepType } from '../Login.module';

const PhoneNumber = ({
  setStep,
  setPhoneNumber,
}: {
  setStep: SetStepType;
  setPhoneNumber: SetPhoneType;
}) => {
  const isIos = isIOS();
  const { login, common } = locale;

  const { handleSubmit, values, errors, handleChange, isValid, dirty, resetForm } = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: object().shape({
      phoneNumber: validation.mobile,
    }),
    onSubmit: (values, action) => {
      // console.log('call api', values, action);
    },
  });
  const persianNumToEnNumChange = (e) => {
    e.target.value = convertToEnglishNumber(e.target.value);
    handleChange(e);
  };
  return (
    <Container className='flex w-full flex-col items-center'>
      {/* FIXME: change Image with xImage */}
      <Image
        src='/images/logo/Logo.svg'
        width={76}
        height={76}
        className='mt-16'
        alt='Picture of the author'
      />
      <Text className='mt-10' size={SIZE_ENUM.XL} bold>
        {common.to} <span className='text-primary'>{common.ozoneCard}</span> {common.welcome}
      </Text>
      <Text size={SIZE_ENUM.MD} className='mt-2 text-neutral-300'>
        {login.enterPhoneNumber}
      </Text>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col px-5 pt-16'
        autoComplete='off'
      >
        <Input
          name='phoneNumber'
          errorMessage={errors.phoneNumber}
          label={common.phoneNumber}
          type={isIos ? INPUT_TYPES.TEL : INPUT_TYPES.NUMBER}
          inputMode='numeric'
          className='text-right'
          value={values.phoneNumber}
          onChange={isIos ? persianNumToEnNumChange : handleChange}
          LeftIcon={() => (
            <RxCrossCircled
              color={COLOR_ENUM.WHITE}
              className='size-7'
              onClick={() => resetForm()}
            />
          )}
        />
        <Container className='absolute bottom-10 left-5 right-5'>
          <Button
            type={BUTTON_TYPE.SUBMIT}
            size={SIZE_ENUM.XL}
            className='w-full'
            disabled={!isValid || !dirty}
            onClick={() => {
              setPhoneNumber(values.phoneNumber);
              setStep(LOGIN_STEPS.OTP);
            }}
          >
            {common.record}
          </Button>
          <Text className='mt-6 w-full text-center'>
            <span className='text-primary'> {login.TermsAndConditions}</span>
            {login.readAndAgree}
          </Text>
        </Container>
      </form>
    </Container>
  );
};

export default PhoneNumber;

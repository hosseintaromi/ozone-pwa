'use client';

import { Text } from '@/components/share/typography';

import { Container, SIZE_ENUM } from 'ozone-uikit';
import React, { useState } from 'react';
import { object } from 'yup';
import validation from '@/constant/validation-rules';
import { addZeroIfUnder10, convertPhoneNumber, convertToEnglishNumber } from '@/lib/helper';
import { useLoginInit } from '@/services/hooks';
import { useFormik } from 'formik';
import locale from '@/locale';
import { BUTTON_TYPE, COLOR_ENUM, INPUT_TYPES } from '@/@types';
import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { Clock } from 'iconsax-react';
import { useTimer } from 'react-timer-hook';
import { addToTime } from '@/lib/date';
import Button from '@/components/share/button';
import { Input } from '@/components/share/input';
import useDeviceDetection from '@/hooks/useDeviceDetection';
import { LOGIN_ROLES } from '@/models/auth.model';

const AddWalletStep2 = ({
  setActive: setActiveTab,
}: {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { minutes, seconds } = useTimer({
    expiryTimestamp: addToTime(new Date(), 2, { unit: 'MINUTES' }),
    onExpire: () => !active && setActive(true),
  });
  const {
    app: { addWallet },
  } = locale;
  const { mutate } = useLoginInit();
  const [active, setActive] = useState(false);
  const isIos = useDeviceDetection();
  const persianNumToEnNumChange = (e) => {
    e.target.value = convertToEnglishNumber(e.target.value);
    handleChange(e);
  };
  const { handleSubmit, values, errors, handleChange } = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: object().shape({
      phoneNumber: validation.require,
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (e) => {
      const phoneNumber = convertPhoneNumber(e.phoneNumber);
      mutate(
        {
          cellphone: phoneNumber,
          clients: [LOGIN_ROLES.CUSTOMER],
        },
        {
          onSuccess() {},
          // onError(e) {
          //   if (e instanceof AxiosError) toast(<ErrorMsg text={e.response?.data?.message} />);
          // },
        },
      );
    },
  });
  return (
    <form onSubmit={handleSubmit} className='flex h-full flex-col justify-between'>
      <Container>
        <Text size={SIZE_ENUM.MD} className='mt-6 text-white'>
          {addWallet.step2SubTitle}
        </Text>
        <Text size={SIZE_ENUM.SM} className='mb-6 mt-4 text-sm text-neutral-200'>
          {addWallet.step2Desc('09393023301')}
        </Text>

        <Input
          name='phoneNumber'
          // label={common.phoneNumber}
          className='mt-14 text-center'
          type={INPUT_TYPES.TEL}
          inputMode='numeric'
          errorMessage={errors.phoneNumber}
          maxLength={11}
          value={values.phoneNumber}
          onChange={isIos ? persianNumToEnNumChange : handleChange}
        />
      </Container>

      <Container center className='flex-col'>
        <Container center className='gap-1'>
          <Text
            className='mt-1 text-center '
            color={active ? COLOR_ENUM.PRIMARY : COLOR_ENUM.WHITE}
            size={SIZE_ENUM.MD}
          >
            {active ? (
              <p>{locale.login.requestOTPAgain}</p>
            ) : (
              `${addZeroIfUnder10(minutes)}:${addZeroIfUnder10(seconds)}`
            )}
          </Text>
          {!active && <Clock color={ICON_COLOR.white} size={ICON_SIZE.md} />}
        </Container>

        <Button
          onClick={() => {
            setActiveTab((pre) => pre + 1);
          }}
          type={BUTTON_TYPE.SUBMIT}
          size={SIZE_ENUM.XL}
          className='mt-5 w-full'
        >
          {addWallet.confirm}
        </Button>
      </Container>
    </form>
  );
};

export default AddWalletStep2;

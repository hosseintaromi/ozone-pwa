'use client';

import { Text } from '@/components/share/typography';

import { Container, SIZE_ENUM } from 'ozone-uikit';
import React, { useState } from 'react';
import { addZeroIfUnder10, convertToEnglishNumber } from '@/lib/helper';
import { usePostVerifyWalletInquiry } from '@/services/hooks';
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

const AddWalletStep2 = ({
  setActive: setActiveTab,
}: {
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: addToTime(new Date(), 2, { unit: 'MINUTES' }),
    onExpire: () => !active && setActive(true),
  });
  const {
    app: { addWallet },
  } = locale;
  const { mutate } = usePostVerifyWalletInquiry();
  const [active, setActive] = useState(false);
  const isIos = useDeviceDetection();
  const persianNumToEnNumChange = (e) => {
    e.target.value = convertToEnglishNumber(e.target.value);
    handleChange(e);
  };
  const { handleSubmit, values, dirty, handleChange } = useFormik({
    initialValues: {
      verifyCode: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (e) => {
      mutate(
        {
          wallet_id: '',
          code: '3454343',
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
  const handleResendOtp = () => {
    console.log('resend otp');
    restart(addToTime(new Date(), 2, { unit: 'MINUTES' }));
    // setActiveTab((pre) => pre + 1);
  };
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
          name='verifyCode'
          // label={common.phoneNumber}
          className='mt-14 text-center'
          type={INPUT_TYPES.TEL}
          inputMode='numeric'
          maxLength={11}
          value={values.verifyCode}
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
              <p onClick={handleResendOtp}>{locale.login.requestOTPAgain}</p>
            ) : (
              `${addZeroIfUnder10(minutes)}:${addZeroIfUnder10(seconds)}`
            )}
          </Text>
          {!active && <Clock color={ICON_COLOR.white} size={ICON_SIZE.md} />}
        </Container>

        <Button
          type={BUTTON_TYPE.SUBMIT}
          size={SIZE_ENUM.XL}
          className='mt-5 w-full'
          disabled={!dirty}
        >
          {addWallet.confirm}
        </Button>
      </Container>
    </form>
  );
};

export default AddWalletStep2;

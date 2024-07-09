import { Clock } from 'iconsax-react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
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
import OTPInput from 'react-otp-input';
import { useTimer } from 'react-timer-hook';

import { addToTime } from '@/lib/date';
import { addZeroIfUnder10 } from '@/lib/helper';

import XImage from '@/components/share/x-image';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { ROUTES } from '@/constant/routes';
import locale from '@/locale';
import { useLoginOtp } from '@/services/hooks';
import { LOGIN_ROLES } from '@/services/types';

import { LOGIN_STEPS, SetStepType } from '../Login.module';

const Otp = ({ phoneNumber, setStep }: { setStep: SetStepType; phoneNumber: string }) => {
  const { login } = locale;
  const [otp, setOtp] = useState('');
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { mutate } = useLoginOtp();
  const { minutes, seconds } = useTimer({
    expiryTimestamp: addToTime(new Date(), 2, { unit: 'MINUTES' }),
    onExpire: () => !active && setActive(true),
  });

  const submit = () => {
    mutate(
      {
        cellphone: phoneNumber,
        clients: [LOGIN_ROLES.CUSTOMER],
        code: otp,
      },
      {
        onSuccess: (e) => {
          Cookies.set('token', e.data.token_type + ' ' + e.data.access_token, {
            expires: e.data.expires_in,
            path: '/',
          });
          Cookies.set('expires_in', e.data.expires_in);
          Cookies.set('refresh_token', e.data.refresh_token);
          router.push(ROUTES.HOME);
        },
      },
    );
  };
  useEffect(() => {});
  return (
    <Container className='flex min-h-screen flex-col justify-between  p-4'>
      <Container center className='flex-col'>
        <Container className='mt-5 w-14  xs:w-16'>
          <XImage
            placeholder
            src='/images/logo/Logo.svg'
            alt='Picture of the author'
            width={1000}
            height={1000}
          />
        </Container>
        <Text className='mt-5' size={SIZE_ENUM.LG} bold>
          {login.verificationCode}
        </Text>

        <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.MD} className='mt-2'>
          {login.checkNumber(`0${phoneNumber.slice(3)}`)}
        </Text>
        <Button
          onClick={() => setStep(LOGIN_STEPS.PHONE_NUMBER)}
          className='mt-6'
          variant={VARIANT_ENUM.TEXT}
        >
          <Text size={SIZE_ENUM.MD} light color={COLOR_ENUM.PRIMARY}>
            {login.changeNumber}
          </Text>
        </Button>

        <OTPInput
          shouldAutoFocus
          value={otp}
          containerStyle='justify-between flex-row-reverse'
          inputStyle='!w-12'
          onChange={setOtp}
          numInputs={5}
          inputType={INPUT_TYPES.NUMBER}
          // renderSeparator={<Container>-</Container>}
          renderInput={(props) => (
            <Input
              size={SIZE_ENUM.XL}
              {...props}
              type={INPUT_TYPES.NUMBER}
              className='mx-3 mt-8 !w-12 border-neutral bg-neutral-900 text-white focus:border-primary'
            />
          )}
        />
      </Container>

      <Container className='mb-24'>
        <Container center className='mb-9 gap-2'>
          <Text
            className='text-center'
            color={active ? COLOR_ENUM.PRIMARY : COLOR_ENUM.WHITE}
            size={SIZE_ENUM.MD}
          >
            {active
              ? login.requestOTPAgain
              : `${addZeroIfUnder10(minutes)}:${addZeroIfUnder10(seconds)}`}
          </Text>
          {!active && <Clock color={ICON_COLOR.white} size={ICON_SIZE.md} />}
        </Container>
        <Button
          type={BUTTON_TYPE.SUBMIT}
          size={SIZE_ENUM.XL}
          className='w-full'
          disabled={otp.length < 5}
          onClick={submit}
        >
          {login.entree}
        </Button>
      </Container>
    </Container>
  );
};

export default Otp;

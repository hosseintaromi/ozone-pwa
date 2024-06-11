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
import React, { useState } from 'react';
import { LuClock4 } from 'react-icons/lu';
import OTPInput from 'react-otp-input';
import { useTimer } from 'react-timer-hook';

import { addToTime } from '@/lib/date';
import { addZeroIfUnder10 } from '@/lib/helper';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';

import { SetStepType } from '../Login.module';

const Otp = ({ setStep, phoneNumber }: { setStep: SetStepType; phoneNumber: string }) => {
  const { login, common } = locale;
  const [otp, setOtp] = useState('');
  const [active, setActive] = useState(false);

  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: addToTime(new Date(), 2, { unit: 'MINUTES' }),
    onExpire: () => !active && setActive(true),
  });
  return (
    <Container center className='flex-col'>
      <Text className='mt-16' size={SIZE_ENUM.LG} bold>
        {login.verificationCode}
      </Text>
      <Text color={COLOR_ENUM.LIGHT_GRAY} size={SIZE_ENUM.SM} className='mt-2'>
        {login.checkNumber(phoneNumber)}
      </Text>
      <Button className='mt-14' variant={VARIANT_ENUM.TEXT}>
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
            className='mx-3 mt-14 !w-12 border-neutral bg-neutral-900 text-white focus:border-primary'
          />
        )}
      />

      <Container className='absolute bottom-10 left-5 right-5'>
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
          {!active && <LuClock4 color={ICON_COLOR.white} size={ICON_SIZE.md} />}
        </Container>
        <Button
          type={BUTTON_TYPE.SUBMIT}
          size={SIZE_ENUM.XL}
          className='w-full'
          onClick={() => {}}
          disabled={otp.length < 5}
        >
          {login.entree}
        </Button>
      </Container>
    </Container>
  );
};

export default Otp;

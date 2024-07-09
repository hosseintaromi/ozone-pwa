'use client';
import Link from 'next/link';
import React, { useState } from 'react';

// import { useGetProfile } from '@/services/hooks';
import Otp from './components/Otp';
import PhoneNumber from './components/PhoneNumber';
import { LOGIN_STEPS } from './Login.module';
import Password from './components/Password';

const Login = () => {
  const [step, setStep] = useState(LOGIN_STEPS.PHONE_NUMBER);
  const [phoneNumber, setPhoneNumber] = useState('');
  // const { isLoading, data } = useGetProfile(3);

  return (
    <div>
      {step === LOGIN_STEPS.PHONE_NUMBER ? (
        <PhoneNumber setStep={setStep} setPhoneNumber={setPhoneNumber} />
      ) : step === LOGIN_STEPS.PASSWORD ? (
        <Password setStep={setStep} phoneNumber={phoneNumber} />
      ) : (
        <Otp setStep={setStep} phoneNumber={phoneNumber} />
      )}
    </div>
  );
};

export default Login;

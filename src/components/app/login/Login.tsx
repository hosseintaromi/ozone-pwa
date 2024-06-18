'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import Otp from './components/Otp';
import PhoneNumber from './components/PhoneNumber';
import { LOGIN_STEPS } from './Login.module';

const Login = () => {
  const [step, setStep] = useState(LOGIN_STEPS.PHONE_NUMBER);
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div>
      {step === LOGIN_STEPS.PHONE_NUMBER ? (
        <PhoneNumber setStep={setStep} setPhoneNumber={setPhoneNumber} />
      ) : (
        <Otp setStep={setStep} phoneNumber={phoneNumber} />
      )}
      <Link href='/'>go</Link>
    </div>
  );
};

export default Login;

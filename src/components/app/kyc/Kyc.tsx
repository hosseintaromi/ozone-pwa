'use client';
import Container from '@/components/share/container';
import React, { useState } from 'react';
import KycDone from './components/KycDone';
import KycForm from './components/KycForm';

const Kyc = () => {
  const [step, setStep] = useState(0);
  return <Container>{step === 0 ? <KycForm setStep={setStep} /> : <KycDone />}</Container>;
};

export default Kyc;

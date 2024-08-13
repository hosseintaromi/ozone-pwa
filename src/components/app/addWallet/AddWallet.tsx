'use client';
import React, { useState } from 'react';
import AddWalletStep1 from './AddWalletStep1';
import AddWalletStep2 from './AddWalletStep2';
import Wizard from '@/components/share/wizard/Wizard';
import { ROUTES } from '@/constant/routes';
import { ArrowRight, Card, TaskSquare, Verify } from 'iconsax-react';
import { Container, SIZE_ENUM } from 'ozone-uikit';
import { Text } from '@/components/share/typography';
import locale from '@/locale';
import AddWalletStep3 from './AddWalletStep3';
import Link from 'next/link';

const AddWallet = () => {
  const [active, setActive] = useState(0);
  const {
    app: { addWallet },
  } = locale;
  const wizardData = [
    {
      icon: <TaskSquare size='22' />,
      title: addWallet.step1Title,
    },
    {
      icon: <Verify size='22' />,
      title: addWallet.step2Title,
    },
    {
      icon: <Card size='22' />,
      title: addWallet.step3Title,
    },
  ];

  return (
    <Container className='mx-5 h-calc-100-minus-200'>
      <Container className='relative my-7 flex justify-center '>
        <Link href={ROUTES.HOME}>
          <ArrowRight size='28' color='white' className='absolute right-0' />
        </Link>

        <Text size={SIZE_ENUM.LG}>{addWallet.title}</Text>
      </Container>

      <Wizard activeItem={active} setActiveNumber={setActive} data={wizardData} />
      <Container className='h-full'>
        {active === 0 ? (
          <AddWalletStep1 setActive={setActive} />
        ) : active === 1 ? (
          <AddWalletStep2 setActive={setActive} />
        ) : (
          <AddWalletStep3 setActive={setActive} />
        )}
      </Container>
    </Container>
  );
};

export default AddWallet;

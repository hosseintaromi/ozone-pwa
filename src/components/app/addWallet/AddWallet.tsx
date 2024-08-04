'use client';

import { Text } from '@/components/share/typography';
import Wizard from '@/components/share/wizard/Wizard';
import { ROUTES } from '@/constant/routes';
import locale from '@/locale';
import { ArrowRight, Card, TaskSquare, Verify } from 'iconsax-react';
import router from 'next/router';
import { Container, SIZE_ENUM } from 'ozone-uikit';
import React, { useState } from 'react';

const AddWallet = () => {
  const {
    app: { addWallet },
  } = locale;
  const [active, setActive] = useState(0);
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
    <Container className='px-4'>
      <Container className='relative my-7 flex justify-center'>
        <ArrowRight
          size='28'
          color='white'
          className='absolute right-0'
          onClick={() => router.push(ROUTES.HOME)}
        />
        <Text size={SIZE_ENUM.LG}>{addWallet.title}</Text>
      </Container>

      <Wizard activeItem={active} setActiveNumber={setActive} data={wizardData} />
    </Container>
  );
};

export default AddWallet;

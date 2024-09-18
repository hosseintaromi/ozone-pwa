'use client';
import { VARIANT_ENUM } from '@/@types';
import Button from '@/components/share/button';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import locale from '@/locale';
import { SIZE_ENUM } from 'ozone-uikit';
import React, { useState } from 'react';
import BarcodeDialog from './BarcodeDialog';
import GuideDialog from '@/components/guide/GuideDialog';

const ScanDialog = () => {
  const {
    app: { scan },
  } = locale;
  const [show, setShow] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <Container className='flex h-dvh flex-col items-center justify-between px-5 pb-32 text-center'>
      <Text size={SIZE_ENUM.LG} className='mt-4'>
        {scan.title}
      </Text>
      <GuideDialog show={showGuide} setShow={setShowGuide} />

      <Container>
        <Container center className='h-60 flex-col gap-3'>
          <XImage
            src='/images/image/scanPage.svg'
            alt='Picture of the author'
            width={250}
            height={250}
            className='text'
          />
        </Container>
        <Text size={SIZE_ENUM.LG} className='mb-7 w-full'>
          {scan.subTitle}
        </Text>
        <Text className='max-w-80 text-neutral-500'>{scan.desc}</Text>
      </Container>
      <Container className='w-full'>
        <Button
          className='mb-5 h-14 w-full'
          onClick={() => {
            setShow(true);
          }}
        >
          {scan.button}
        </Button>
        <Button
          className='h-14  w-full'
          variant={VARIANT_ENUM.TEXT}
          onClick={() => setShowGuide((pre) => !pre)}
        >
          {scan.guideButton}
        </Button>
      </Container>
      <BarcodeDialog show={show} setShow={setShow} />
    </Container>
  );
};

export default ScanDialog;

'use client';
import { SkeletonLoader } from '@/components/share/skeleton/SkeletonLoader';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import { ROUTES } from '@/constant/routes';
import useUserManagement from '@/hooks/useUserManagement';
import locale from '@/locale';
import { Verify } from 'iconsax-react';
import Link from 'next/link';
import { Container, SIZE_ENUM, COLOR_ENUM, Button, VARIANT_ENUM } from 'ozone-uikit';
import React from 'react';

const ProfileInfo = () => {
  const { app } = locale;
  const { cookieValue } = useUserManagement();

  return (
    <Container className='mt-12 flex gap-5 border-b-[1px] border-b-[#42474B] pb-8'>
      {cookieValue ? (
        <>
          <Container className='w-17 flex'>
            <XImage
              src='/images/image/userAvatar.svg'
              alt='Picture of the author'
              width={90}
              height={90}
            />
          </Container>
          <Container className='flex h-[120px] flex-col justify-center'>
            <Text size={SIZE_ENUM.SM} className='mb-2 flex items-center gap-1'>
              {`${cookieValue?.first_name} ${cookieValue?.last_name}`}
              {cookieValue.national_code_kyc && <Verify size='16' className='text-primary' />}
            </Text>
            <Text size={SIZE_ENUM.SM} color={COLOR_ENUM.LIGHT_GRAY} className='ltr'>
              {cookieValue?.mobile}
            </Text>
            {!cookieValue.national_code_kyc && (
              <Link href={ROUTES.KYC}>
                <Button variant={VARIANT_ENUM.OUTLINED} className='mt-4 h-10 px-4'>
                  {app.setting.identityCompletionVerification}
                </Button>
              </Link>
            )}
          </Container>
        </>
      ) : (
        <Container className='flex '>
          <SkeletonLoader
            width='w-[90px]'
            height='h-[90px]'
            className='mt-4 rounded-full  px-4'
          />
          <Container className='mr-6'>
            <SkeletonLoader width='w-24' height='h-4' className='mt-2' />
            <SkeletonLoader width='w-24' height='h-4' className='mt-3' />
            <SkeletonLoader width='w-36' height='h-10' className='mt-7' />
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default ProfileInfo;

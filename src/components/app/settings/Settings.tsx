import { COLOR_ENUM, SIZE_ENUM, VARIANT_ENUM } from '@/@types';
import Button from '@/components/share/button';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import XImage from '@/components/share/x-image';
import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import { ROUTES } from '@/constant/routes';
import locale from '@/locale';
import {
  ArrowLeft2,
  Call,
  CardEdit,
  InfoCircle,
  Lock1,
  LogoutCurve,
  Profile,
} from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

const Settings = () => {
  const { app } = locale;
  const settingList = [
    {
      title: app.setting.profile,
      icon: <Profile color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
    {
      title: app.setting.changeCardPass,
      icon: <CardEdit color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
    {
      title: app.setting.changePass,
      icon: <Lock1 color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
    {
      title: app.setting.help,
      icon: <InfoCircle color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
    {
      title: app.setting.call,
      icon: <Call color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
    {
      title: app.setting.exit,
      icon: <LogoutCurve color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    },
  ];
  return (
    <Container className='mx-5'>
      <Text className='mt-4 w-full text-center' size={SIZE_ENUM.LG}>
        {app.setting.title}
      </Text>
      <Container className='mt-12 flex gap-5 border-b-[1px] border-b-[#42474B] pb-8'>
        <Container className=' w-17 flex'>
          <XImage
            src='/images/image/userAvatar.svg'
            alt='Picture of the author'
            width={90}
            height={90}
          />
        </Container>
        <Container>
          <Text size={SIZE_ENUM.SM} className='mb-2'>
            نام و نام خانوادگی
          </Text>
          <Text size={SIZE_ENUM.SM} color={COLOR_ENUM.LIGHT_GRAY}>
            09124567665
          </Text>
          <Link href={ROUTES.KYC}>
            <Button variant={VARIANT_ENUM.OUTLINED} className='mt-4 h-10 px-4'>
              {app.setting.identityCompletionVerification}
            </Button>
          </Link>
        </Container>
      </Container>
      {settingList.map((item) => (
        <Container key={item.title} className='mt-10 flex w-full justify-between'>
          <Container center className='gap-5'>
            {item.icon}
            <Text size={SIZE_ENUM.MD}>{item.title}</Text>
          </Container>
          <ArrowLeft2 color={ICON_COLOR.light_gray} />
        </Container>
      ))}
    </Container>
  );
};

export default Settings;

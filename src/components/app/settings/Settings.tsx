'use client';
import { SIZE_ENUM } from '@/@types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
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
import React from 'react';
import ProfileInfo from './ProfileInfo';
import { logout } from '@/lib/helper';

const Settings = () => {
  const { app } = locale;

  const settingList = [
    {
      title: app.setting.profile,
      icon: <Profile color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => {},
    },
    // {
    //   title: app.setting.changeCardPass,
    //   icon: <CardEdit color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
    // },
    {
      title: app.setting.changePass,
      icon: <Lock1 color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => {},
    },
    {
      title: app.setting.help,
      icon: <InfoCircle color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => {},
    },
    {
      title: app.setting.call,
      icon: <Call color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => window.open('tel:09123013301', '_self'),
    },
    {
      title: app.setting.exit,
      icon: <LogoutCurve color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => logout(),
    },
  ];
  return (
    <Container className='mx-5'>
      <Text className='mt-4 w-full text-center' size={SIZE_ENUM.LG}>
        {app.setting.title}
      </Text>
      <ProfileInfo />
      {settingList.map((item, index) => (
        <Container
          key={item.title}
          className='mt-10 flex w-full justify-between'
          onClick={item.action}
        >
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

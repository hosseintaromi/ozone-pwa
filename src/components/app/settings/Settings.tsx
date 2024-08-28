'use client';
import { SIZE_ENUM } from '@/@types';
import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';
import locale from '@/locale';
import { ArrowLeft2, Call, InfoCircle, Lock1, LogoutCurve, Profile } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';
import { usePostLogout } from '@/services/hooks';
import ProfileDialog from './ProfileDialog';
import useUserManagement from '@/hooks/useUserManagement';
import ChangePassword from './ChangePassword';

const Settings = () => {
  const { app } = locale;
  const { mutate: logoutReq, isSuccess } = usePostLogout({});
  const { removeUserData } = useUserManagement();

  const [showLock, setShowLock] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!isSuccess) return;
    removeUserData();
  }, [isSuccess]);

  const settingList = [
    {
      title: app.setting.profile,
      icon: <Profile color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => setShow((pre) => !pre),
    },
    {
      title: app.setting.changePass,
      icon: <Lock1 color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => setShowLock((pre) => !pre),
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
      // action: () => logout(),
      action: () => logoutReq(),
    },
  ];
  return (
    <Container className='mx-5'>
      <Text className='mt-4 w-full text-center' size={SIZE_ENUM.LG}>
        {app.setting.title}
      </Text>
      <ProfileInfo />
      <ChangePassword show={showLock} setShow={setShowLock} />
      <ProfileDialog show={show} setShow={setShow} />
      {settingList.map((item) => (
        <Container
          key={item.title}
          className='mt-10 flex w-full cursor-pointer justify-between'
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

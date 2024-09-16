'use client';
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
import useCommonModalStore from '@/store/common-modal-store';
import { Button, SIZE_ENUM, VARIANT_ENUM } from 'ozone-uikit';
import GuideDialog from '@/components/guide/GuideDialog';

const Settings = () => {
  const {
    app: {
      setting: { profile, changePass, help, call, exit, exitHint, title },
    },
    common: { cancel, exitBtn },
  } = locale;
  const { setShow: showModal } = useCommonModalStore();
  const { mutate: logoutReq, isSuccess } = usePostLogout();
  const { removeUserData } = useUserManagement();

  const [showLock, setShowLock] = useState(false);
  const [show, setShow] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  useEffect(() => {
    if (!isSuccess) return;
    removeUserData();
    showModal(false);
  }, [isSuccess]);
  const confirmLogout = () => {
    logoutReq();
  };
  const handleLogout = () => {
    showModal(true, {
      center: true,
      Body: () => (
        <Container center className='flex-col gap-3'>
          <Text bold size={SIZE_ENUM.XMD}>
            {exit}
          </Text>
          <Text medium size={SIZE_ENUM.MD}>
            {exitHint}
          </Text>
          <Container center className='mt-6 w-full gap-5'>
            <Button
              size={SIZE_ENUM.XXL}
              variant={VARIANT_ENUM.TEXT}
              className='w-full border-neutral-300 text-neutral-300'
              onClick={() => showModal(false)}
            >
              {cancel}
            </Button>
            <Button
              variant={VARIANT_ENUM.OUTLINED}
              size={SIZE_ENUM.XXL}
              className='w-full border-2 border-danger text-danger hover:bg-danger-300'
              onClick={confirmLogout}
            >
              {exitBtn}
            </Button>
          </Container>
        </Container>
      ),
    });
  };
  const settingList = [
    {
      title: profile,
      icon: <Profile color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => setShow((pre) => !pre),
    },
    {
      title: changePass,
      icon: <Lock1 color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => setShowLock((pre) => !pre),
    },
    {
      title: help,
      icon: <InfoCircle color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => setShowGuide((pre) => !pre),
    },
    {
      title: call,
      icon: <Call color={ICON_COLOR.light_gray} size={ICON_SIZE.lg} />,
      action: () => window.open('tel:09123013301', '_self'),
    },
    {
      title: exit,
      icon: <LogoutCurve color={ICON_COLOR.danger} size={ICON_SIZE.lg} />,
      // action: () => logout(),
      action: () => handleLogout(),
    },
  ];
  return (
    <Container className='mx-5'>
      <Text className='mt-4 w-full text-center' size={SIZE_ENUM.LG}>
        {title}
      </Text>
      <ProfileInfo />
      <ChangePassword show={showLock} setShow={setShowLock} />
      <ProfileDialog show={show} setShow={setShow} />
      <GuideDialog show={showGuide} setShow={setShowGuide} />
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

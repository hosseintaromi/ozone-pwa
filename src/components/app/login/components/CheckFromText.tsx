import { InfoCircle, TickCircle } from 'iconsax-react';
import { COLOR_ENUM, Text } from 'ozone-uikit';
import React from 'react';

import ICON_SIZE from '@/constant/icon-size-color';

const CheckFromText = ({ text, condition }: { text: string; condition: boolean }) => {
  return (
    <>
      <Text
        className='flex items-center gap-2'
        color={condition ? COLOR_ENUM.LIGHT_GRAY : COLOR_ENUM.PRIMARY}
      >
        {condition ? <InfoCircle size={ICON_SIZE.lg} /> : <TickCircle size={ICON_SIZE.lg} />}
        {text}
      </Text>
    </>
  );
};

export default CheckFromText;

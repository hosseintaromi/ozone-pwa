'use client';
import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';

import { Text } from 'ozone-uikit';

export default function HOME() {
  // const { data, isLoading } = useGetProfile(1)
  return (
    <Text size={SIZE_ENUM.LG} bold color={COLOR_ENUM.TEXT}>
      data
    </Text>
  );
}

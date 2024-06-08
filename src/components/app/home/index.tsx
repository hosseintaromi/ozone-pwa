'use client';
// import { useGetProfile } from "@/services/hooks";
import { COLOR_ENUM, SIZE_ENUM, Text } from 'ozone-uikit';

export default function HOME() {
  // const { data, isLoading } = useGetProfile(1)
  return (
    <Text size={SIZE_ENUM.LG} bold color={COLOR_ENUM.TEXT}>
      data
    </Text>
  );
}

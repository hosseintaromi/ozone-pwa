'use client'
import { Text } from "@/components/@base/typography";
import { COLOR_ENUM, SIZE_ENUM } from "@/components/@base/@helpers/types";
import { useGetProfile } from "@/services/hooks";

export default function HOME() {
  const { data, isLoading } = useGetProfile(1)
  console.log(data);
  return <Text size={SIZE_ENUM.LG} bold color={COLOR_ENUM.TEXT}>data</Text>;
}

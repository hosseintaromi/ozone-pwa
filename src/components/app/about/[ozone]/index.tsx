import { COLOR_ENUM, SIZE_ENUM } from '@/components/@base/@helpers/types';
import { Text } from '@/components/@base/typography';

export default function Ozone() {
  return (
    <Text size={SIZE_ENUM.LG} bold color={COLOR_ENUM.TEXT}>
      salam
    </Text>
  );
}

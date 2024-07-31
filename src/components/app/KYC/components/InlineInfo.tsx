import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';
import { ICON_COLOR } from '@/constant/icon-size-color';
import { InfoCircle } from 'iconsax-react';
import { SIZE_ENUM } from 'ozone-uikit';

const InlineInfo = ({ text }: { text: string }) => {
  return (
    <Container center className='w-full rounded-xl bg-primary-900 p-3 '>
      <Container className='flex gap-2'>
        <InfoCircle color={ICON_COLOR.primary} />
        <Text size={SIZE_ENUM.XS} semiBold className='text-primary'>
          {text}
        </Text>
      </Container>
    </Container>
  );
};

export default InlineInfo;

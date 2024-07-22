import { Danger, InfoCircle, TickCircle } from 'iconsax-react';
import { Container, SIZE_ENUM, Text } from 'ozone-uikit';

import ICON_SIZE, { ICON_COLOR } from '@/constant/icon-size-color';

const SuccessMsg = ({ text }: { text: string }) => (
  <Container
    center
    className='mx-auto min-h-16 w-fit items-start gap-3 rounded-xl border border-success-250 bg-neutral-900 px-4 py-2'
  >
    <TickCircle size={ICON_SIZE.xl} color={ICON_COLOR.success} />
    <Text className='text-justify text-success-250' size={SIZE_ENUM.MD} bold>
      {text}
    </Text>
  </Container>
);

const ErrorMsg = ({ text }: { text: string }) => (
  <Container
    center
    className='mx-auto min-h-16 w-fit items-center gap-3 rounded-xl border border-danger-300 bg-neutral-900 px-4 py-2'
  >
    <Danger size={ICON_SIZE.xl} color={ICON_COLOR.danger} />
    <Text className='text-justify text-danger-300' size={SIZE_ENUM.MD} bold>
      {text}
    </Text>
  </Container>
);

const InfoMsg = ({ text }: { text: string }) => (
  <Container
    center
    className='mx-auto min-h-16 w-fit items-start gap-3 rounded-xl border border-info-300 bg-neutral-900 px-4 py-2'
  >
    <InfoCircle size={ICON_SIZE.xl} color={ICON_COLOR.info} />
    <Text className='text-justify text-info-300' size={SIZE_ENUM.MD} bold>
      {text}
    </Text>
  </Container>
);

export { ErrorMsg, InfoMsg, SuccessMsg };

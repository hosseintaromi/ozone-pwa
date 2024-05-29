import { Fragment } from 'react';

import cn from '@/lib/clsxm';

import { SIZE_ENUM } from '@/components/@base/@helpers/types';
import Container from '@/components/@base/container';
import { Tab } from '@/components/@base/tab';
import { Text } from '@/components/@base/typography';

export default function TabItem({ children }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <Container
          className={cn(
            'flex-grow cursor-pointer rounded-lg p-2 py-0 text-center',
            selected && 'bg-white',
          )}
        >
          <Text bold size={SIZE_ENUM.SM}>
            {children}
          </Text>
        </Container>
      )}
    </Tab>
  );
}

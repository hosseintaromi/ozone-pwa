import { Fragment } from 'react';

import cn from '@/lib/clsxm';

import Container from '@/components/share/container';
import { Text } from '@/components/share/typography';

import { SIZE_ENUM } from '@/@types';

import Tab from '../../../tab';

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

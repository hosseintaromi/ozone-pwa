import { Fragment } from 'react';

import cn from '@/lib/clsxm';
import { Tab } from '@/components/@base/tab';
import { Container, Text } from 'ozone-uikit';

export default function TabItem({ children }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <Container className={cn('relative flex-grow cursor-pointer p-2 py-0 text-center')}>
          {selected && (
            <Container className='absolute -bottom-[9px] left-0 right-0 z-30 h-[2px] w-full rounded bg-white' />
          )}
          <Text
            bold
            className={cn(
              'w-full text-center text-base text-neutral-500',
              selected && 'text-white',
            )}
          >
            {children}
          </Text>
        </Container>
      )}
    </Tab>
  );
}

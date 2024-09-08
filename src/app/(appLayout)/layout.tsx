import React, { ReactNode } from 'react';

import Container from '@/components/share/container';
import TapBar from '@/components/share/tapBar/TapBar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className='overflow-hidden pb-20'>
      {children}
      <TapBar />
    </Container>
  );
};

export default layout;

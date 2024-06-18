import React, { ReactNode } from 'react';

import TapBar from '@/components/share/tapBar/TapBar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      {/* <TapBar /> */}
    </>
  );
};

export default layout;
